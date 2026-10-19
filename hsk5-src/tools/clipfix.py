"""Remove the stray 'uh / breath' sounds Kokoro adds before and after a short utterance.
Trick: synthesize the text TWICE in a row ("X，X。"), then keep only the FIRST copy: it starts cleanly, and the stray tail
lands after the second copy instead of after the first. cut_first() finds the pause between the two copies."""
import numpy as np

def env_db(x, sr, ms=10):
    fr = int(sr * ms / 1000); n = len(x) // fr
    e = np.sqrt((x[:n * fr].reshape(n, fr) ** 2).mean(1)) + 1e-9
    return 20 * np.log10(e / e.max()), fr

def cut_first(x, sr):
    """x = samples of 'X，X。'. Returns (first copy samples, info dict) or (None, info) when no clean pause was found."""
    x = np.asarray(x, dtype=np.float32)
    db, fr = env_db(x, sr)
    k = np.convolve(db, np.ones(3) / 3, mode='same')            # smoothed envelope
    live = np.where(db > -45)[0]
    if len(live) == 0: return None, {'why': 'silent'}
    n = live[-1] + 1                                              # last audible frame
    lo, hi = int(.34 * n), int(.60 * n)
    c = lo + int(np.argmin(k[lo:hi]))
    depth = float(k[c])
    if depth > -26: return None, {'why': 'no pause', 'depth': depth}
    if not (0.78 < c / max(n - c, 1) < 1.5): return None, {'why': 'copies differ in length', 'ratio': c / max(n - c, 1)}
    # onset: first frame clearly above the breath/hum level, backed off a little
    on = int(np.argmax(db[:c] > -22)); on = max(0, on - 3)
    s, e = on * fr, c * fr
    y = x[s:e].copy()
    f = int(sr * .012)                                            # 12 ms fades
    y[:f] *= np.linspace(0, 1, f); y[-f:] *= np.linspace(1, 0, f)
    return y, {'depth': depth, 'start': on * fr / sr, 'end': c * fr / sr}


def cut_middle(x, sr):
    """x = samples of 'X，X，X。'. Keep the MIDDLE copy: clean at both ends. Returns (samples, info) or (None, info)."""
    x = np.asarray(x, dtype=np.float32)
    db, fr = env_db(x, sr)
    k = np.convolve(db, np.ones(3) / 3, mode='same')
    live = np.where(db > -45)[0]
    if len(live) == 0: return None, {'why': 'silent'}
    n = live[-1] + 1
    best = None
    for a in range(int(.22 * n), int(.46 * n)):
        for b in range(int(.55 * n), int(.82 * n)):
            L, M = a, b - a
            if not (0.7 < M / max(L, 1) < 1.4): continue            # the three copies must be about the same length
            score = k[a] + k[b] + 60 * abs(M / max(L, 1) - 1)       # deep pauses AND equal-length copies
            if best is None or score < best[0]: best = (score, a, b)
    if best is None: return None, {'why': 'no split'}
    _, a, b = best
    if max(k[a], k[b]) > -26: return None, {'why': 'weak pause', 'depth': (float(k[a]), float(k[b]))}
    # trim to the audible core of the middle copy
    seg = db[a:b]; core = np.where(seg > -30)[0]
    s, e = a + core[0], a + core[-1] + 1
    s = max(a, s - 2); e = min(b, e + 2)
    y = x[s * fr:e * fr].copy()
    f = int(sr * .012); y[:f] *= np.linspace(0, 1, f); y[-f:] *= np.linspace(1, 0, f)
    return y, {'depth': (float(k[a]), float(k[b])), 'start': s * fr / sr, 'end': e * fr / sr, 'left': a * fr / sr, 'mid': (b - a) * fr / sr}


def pick_interior(x, sr, copies=5):
    """For one-syllable words: say it `copies` times and pick the interior copy whose length is the median of the interior copies.
    Pauses = runs of >= 40 ms below -24 dB (smoothed)."""
    x = np.asarray(x, dtype=np.float32)
    db, fr = env_db(x, sr)
    k = np.convolve(db, np.ones(3) / 3, mode='same')
    low = k < -24
    runs = []; i = 0
    while i < len(low):
        if low[i]:
            j = i
            while j < len(low) and low[j]: j += 1
            if (j - i) * fr / sr >= 0.04 and i > 5: runs.append((i, j))
            i = j
        else: i += 1
    live = np.where(db > -45)[0]
    if len(live) == 0 or len(runs) < copies - 1: return None, {'why': 'too few pauses', 'runs': len(runs)}
    runs = [r for r in runs if r[1] < live[-1] - 2][:copies - 1] if len(runs) >= copies - 1 else runs
    if len(runs) < copies - 1: return None, {'why': 'too few pauses', 'runs': len(runs)}
    segs = [(runs[i][1], runs[i + 1][0]) for i in range(len(runs) - 1)]          # interior copies
    lens = [b - a for a, b in segs]
    if min(lens) < 0.7 * max(lens): return None, {'why': 'uneven copies', 'lens': lens}
    a, b = segs[len(segs) // 2]
    core = np.where(db[a:b] > -30)[0]
    if len(core) == 0: return None, {'why': 'silent copy'}
    s, e = max(a, a + core[0] - 2), min(b, a + core[-1] + 3)
    y = x[s * fr:e * fr].copy()
    f = int(sr * .012); y[:f] *= np.linspace(0, 1, f); y[-f:] *= np.linspace(1, 0, f)
    return y, {'start': s * fr / sr, 'end': e * fr / sr}


def band_trim(x, sr, thr=-14, lead=0.03, tail=0.05):
    """For a single utterance: the stray hums have almost no energy above 900 Hz, real speech does.
    Keep from the first to the last frame whose 0.9-5 kHz energy is within `thr` dB of the peak."""
    x = np.asarray(x, dtype=np.float32)
    hop, n = int(sr * .01), int(sr * .02)
    w = np.hanning(n); B = np.fft.rfftfreq(n, 1 / sr); sel = (B >= 900) & (B <= 5000)
    fr = (len(x) - n) // hop
    e = np.array([(np.abs(np.fft.rfft(x[i * hop:i * hop + n] * w))[sel] ** 2).sum() for i in range(fr)]) + 1e-12
    b = 10 * np.log10(e / e.max())
    sp = np.where(b > thr)[0]
    if len(sp) == 0: return None, {'why': 'no speech'}
    s = max(0, int(sp[0] * hop - lead * sr)); t = min(len(x), int((sp[-1] * hop + n) + tail * sr))
    y = x[s:t].copy()
    f = int(sr * .012); y[:f] *= np.linspace(0, 1, f); y[-f:] *= np.linspace(1, 0, f)
    return y, {'start': s / sr, 'end': t / sr}


def main_segment(x, sr, thr=-20, minpause=0.03, pad=0.02):
    """Last resort for a one-syllable word: split at pauses (full-band energy below `thr` dB for >= minpause) and keep the loudest piece."""
    x = np.asarray(x, dtype=np.float32)
    fr = int(sr * .01); n = len(x) // fr
    e = np.sqrt((x[:n * fr].reshape(n, fr) ** 2).mean(1)) + 1e-9
    db = 20 * np.log10(e / e.max()); k = np.convolve(db, np.ones(3) / 3, mode='same')
    cuts = []; i = 0
    while i < n:
        if k[i] < thr:
            j = i
            while j < n and k[j] < thr: j += 1
            if (j - i) * fr / sr >= minpause: cuts.append((i, j))
            i = j
        else: i += 1
    bounds = [0] + [c for r in cuts for c in r] + [n]
    pieces = [(bounds[i], bounds[i + 1]) for i in range(0, len(bounds), 2) if bounds[i + 1] > bounds[i]]
    if not pieces: return None, {'why': 'none'}
    a, b = max(pieces, key=lambda p: (e[p[0]:p[1]] ** 2).sum())
    s = max(0, a * fr - int(pad * sr)); t = min(len(x), b * fr + int(pad * sr))
    y = x[s:t].copy(); f = int(sr * .012); y[:f] *= np.linspace(0, 1, f); y[-f:] *= np.linspace(1, 0, f)
    return y, {'start': s / sr, 'end': t / sr}

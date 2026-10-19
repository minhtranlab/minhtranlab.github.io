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

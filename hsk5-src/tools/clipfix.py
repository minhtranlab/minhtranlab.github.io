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


# ---------------------------------------------------------------------------------------------------------------------------
# Phiếu #14 (2026-11-07): syllable-aware edges. Minh heard "wu-ơ" on male words: cut_middle sometimes kept TWO copies
# (老婆 → "老婆老婆", the old length check allowed up to 0.55 s per character) and band_trim (one-syllable words) kept the
# voiced "ơ" Kokoro adds after a final syllable (it has energy in 0.9-5 kHz, so the band filter cannot see it).
# These helpers count syllable nuclei on the energy envelope instead; audit_voice.py uses the same ones.

def envelope(x, sr, ms=10, smooth=5):
    """Smoothed RMS envelope in dB relative to the loudest frame, one value per `ms`."""
    x = np.asarray(x, dtype=np.float32); fr = int(sr * ms / 1000); n = len(x) // fr
    if n < 3: return np.full(max(n, 1), -99.0), fr
    e = np.sqrt((x[:n * fr].reshape(n, fr) ** 2).mean(1)) + 1e-9
    db = 20 * np.log10(e / e.max())
    return np.convolve(db, np.ones(smooth) / smooth, mode='same'), fr


def nuclei(db, prom=8.0, floor=-20.0, cen=None, maxcen=1500):
    """Syllable nuclei = envelope peaks above `floor` dB, each separated from the previous one by a dip of >= `prom` dB.
    Mandarin syllables in one word often merge (zero/nasal initials), so this can under-count but rarely over-counts.
    With `cen` (spectral centroid per frame, band_env) a peak whose centroid is above `maxcen` is a consonant (the hiss of
    ch/s/x, longer in slow clips), not a vowel, and is skipped."""
    pk = []
    for j in range(1, len(db) - 1):
        if not (db[j] >= db[j - 1] and db[j] > db[j + 1] and db[j] > floor): continue
        if cen is not None and j < len(cen) and cen[j] > maxcen: continue
        if not pk: pk.append(j); continue
        v = db[pk[-1]:j].min()
        if min(db[pk[-1]], db[j]) - v >= prom: pk.append(j)
        elif db[j] > db[pk[-1]]: pk[-1] = j
    return pk


def speech_end(db, pk, drop=20.0):
    """Frame where the last nucleus has decayed `drop` dB below its own peak (or the dip before a re-rise, whichever first)."""
    last = pk[-1]; ref = db[last]; j = last
    while j < len(db) - 1 and db[j] > ref - drop:
        if j > last + 2 and db[j + 1] > db[j] + 1.5 and db[j] < ref - 10: break      # a new bump starts: stop at the dip
        j += 1
    return j


def tail_ms(db, pk, fr_ms=10, level=-34.0):
    """Audible sound left AFTER the last syllable has died away (the 'ơ' / breath Minh hears): ms above `level` dB."""
    if not pk: return 0
    j = speech_end(db, pk)
    return int((db[j + 2:] > level).sum()) * fr_ms


def fade(y, sr, fin=0.008, fout=0.04):
    y = np.asarray(y, dtype=np.float32).copy(); a, b = int(sr * fin), int(sr * fout)
    if len(y) > a + b:
        y[:a] *= np.linspace(0, 1, a)
        y[-b:] *= np.cos(np.linspace(0, np.pi / 2, b)) ** 2      # smooth fade-out, no click
    return y


def band_env(x, sr, ms=10, lo=900, hi=5000):
    """Per `ms` frame: 0.9-5 kHz energy in dB relative to its own maximum (hums have none; aspiration, fricatives, vowels
    do) and the spectral centroid in Hz (Kokoro's stray thumps/hums sit below ~120 Hz, a nasal or l onset above)."""
    x = np.asarray(x, dtype=np.float32); hop = int(sr * ms / 1000); n = int(sr * .025)
    m = len(x) // hop
    if len(x) < n + hop: return np.full(m, -99.0), np.zeros(m)
    w = np.hanning(n); F = np.fft.rfftfreq(n, 1 / sr); sel = (F >= lo) & (F <= hi)
    fr = (len(x) - n) // hop + 1; e = np.zeros(fr); c = np.zeros(fr)
    for i in range(fr):
        S = np.abs(np.fft.rfft(x[i * hop:i * hop + n] * w)) ** 2
        e[i] = S[sel].sum() + 1e-12; c[i] = (S * F).sum() / (S.sum() + 1e-12)
    b = 10 * np.log10(e / e.max()); pad = max(0, m - fr)
    return np.concatenate([b, np.full(pad, -99.0)]), np.concatenate([c, np.zeros(pad)])


def onset(db, hb, cen, first, gap=2):
    """Walk back from the first nucleus while the frame is speech: 0.9-5 kHz energy (> -24 dB: aspiration, s/sh/x, vowel
    edges) or loud with a centroid above 140 Hz (m/n/l/r onsets). Up to `gap` other frames are bridged. Low thumps and
    hums left from a previous copy (loud but centroid < 140 Hz, no high band) stop the walk."""
    f = first; q = 0
    while f > 0:
        g = f - 1
        if (hb[g] > -24 and db[g] > -42) or (db[g] > -18 and cen[g] > 140): q = 0
        else:
            q += 1
            if q > gap: break
        f = g
    return f + q


def end_cut(x, sr, n_syll=None, pad=0.03):
    """Keep one utterance from its real onset to right after its last syllable dies away, then fade out.
    With n_syll, a stray extra nucleus after the n-th one is cut off too. The pad never runs into a new rise.
    Returns (samples, info)."""
    x = np.asarray(x, dtype=np.float32); db, fr = envelope(x, sr); hb, cen = band_env(x, sr); pk = nuclei(db, cen=cen)
    if not pk: return None, {'why': 'no speech'}
    if n_syll and len(pk) > n_syll: pk = pk[:n_syll]
    e = speech_end(db, pk); p = int(pad * 100)
    while p > 0 and e + 1 < len(db) and db[e + 1] <= db[e] + 0.5: e += 1; p -= 1
    on = onset(db, hb, cen, pk[0])
    s = max(0, (on - 1) * fr); t = min(len(x), (e + 1) * fr)
    return fade(x[s:t], sr), {'start': s / sr, 'end': t / sr, 'nuclei': len(pk)}


def cut_copy(x, sr, n_syll, pause_db=-30.0, pause_ms=70):
    """x = 'X，X，X。' spoken by Kokoro. Split it at real pauses (envelope below `pause_db` for >= `pause_ms`) and keep one copy
    that is NOT the last one (the last copy carries the 'ơ' Kokoro adds at the end of an utterance) and that ends in a real pause
    (so the next copy's onset cannot stick to it). Kokoro sometimes runs two copies together without a pause: such a piece has
    too many nuclei and is skipped. Preference: a piece with all `n_syll` nuclei, the middle one first, then the first one.
    The kept copy is cut right after its last syllable dies away (end_cut) + fade-out. Returns (samples, info) or (None, info)."""
    x = np.asarray(x, dtype=np.float32); db, fr = envelope(x, sr)
    live = np.where(db > -40)[0]
    if len(live) == 0: return None, {'why': 'silent'}
    on, off = live[0], live[-1] + 1
    low = db < pause_db; runs = []; i = on
    while i < off:
        if low[i]:
            j = i
            while j < off and low[j]: j += 1
            if (j - i) * 10 >= pause_ms: runs.append((i, j))
            i = j
        else: i += 1
    bounds = [on] + [c for r in runs for c in r] + [off]
    pk_all = nuclei(db, cen=band_env(x, sr)[1])
    pieces = [(bounds[k], bounds[k + 1]) for k in range(0, len(bounds), 2)]
    pieces = [(a, b) for a, b in pieces if b - a >= 6 and any(a <= p < b for p in pk_all)]   # drop clicks / breaths
    info = {'pieces': [(round(a * fr / sr, 2), round(b * fr / sr, 2), sum(a <= p < b for p in pk_all)) for a, b in pieces]}
    if len(pieces) < 2 or not any(sum(a <= p < b for p in pk_all) == n_syll for a, b in pieces[:-1]):
        # Kokoro ran the copies together (common for one-syllable words): group the nuclei n_syll at a time and split at the
        # quietest point between groups. Only when the count fits 3 copies (+ one stray 'ơ' nucleus at the very end).
        P = list(pk_all)
        if len(P) in (3 * n_syll, 3 * n_syll + 1):
            g1, g2 = P[n_syll - 1], P[n_syll]; h1, h2 = P[2 * n_syll - 1], P[2 * n_syll]
            a = g1 + int(np.argmin(db[g1:g2])); b = h1 + int(np.argmin(db[h1:h2]))
            if max(db[a], db[b]) <= -22:
                pieces = [(on, a), (a, b), (b, off)]; info['split'] = 'nuclei'
    if len(pieces) < 2: return None, dict(info, why='no pause')
    cands = []
    for k, (a, b) in enumerate(pieces[:-1]):                      # never the last piece
        n = sum(a <= p < b for p in pk_all); d = (b - a) * fr / sr
        if n > n_syll or n == 0 or n < n_syll - 1: continue
        if not 0.22 * n_syll <= d <= 0.5 * n_syll + 0.1: continue
        cands.append((n != n_syll, k != 1, k, a, b, n))
    if not cands: return None, dict(info, why='no clean copy')
    _, _, k, a, b, n = min(cands)
    s0 = max(0, a - 3) * fr; s1 = min(len(x), (b + 1) * fr)
    y, i2 = end_cut(x[s0:s1], sr, n_syll)
    if y is None: return None, dict(info, **i2)
    info.update(i2); info.update({'copy': k, 'from': s0 / sr, 'nuclei': n})
    return y, info


# ---------------------------------------------------------------------------------------------------------------------------
# Phiếu #16 (2026-11-07): syllable ORDER. Minh heard 老婆 as "pó lǎo": in "老婆，老婆，老婆。" the p-closure inside the word is as
# deep and as long as the comma pause, so cut_copy kept "婆，老" (last syllable of one copy + first of the next).

def split_by_nuclei(x, sr, n_syll, copies=3):
    """Copies of a word said `copies` times = groups of exactly n_syll vowel nuclei, in order. Boundaries = the quietest frame
    between the last nucleus of one group and the first of the next (NOT simply the longest pauses). Only when the clip has
    copies*n_syll nuclei, or one more at the very end (the 'ơ'), and no group holds >= 150 ms of silence between its
    syllables. -> list of (start, end) sample ranges, or [] ."""
    x = np.asarray(x, dtype=np.float32); db, fr = envelope(x, sr); hb, cen = band_env(x, sr); pk = nuclei(db, cen=cen)
    if len(pk) not in (copies * n_syll, copies * n_syll + 1): return []
    live = np.where(db > -40)[0]; on, off = live[0], live[-1] + 1
    cut = [pk[k * n_syll - 1] + int(np.argmin(db[pk[k * n_syll - 1]:pk[k * n_syll]])) for k in range(1, copies)]
    raw, _ = envelope(x, sr, smooth=1)
    for k in range(copies):                    # a copy may not hold a real pause between its syllables: then the nuclei were
        g = r = 0                              # miscounted (glides of 歪歪扭扭) and the groups straddle the comma pause
        for v in raw[pk[k * n_syll]:pk[(k + 1) * n_syll - 1]]:
            r = r + 1 if v < -40 else 0; g = max(g, r)
        if g >= 15: return []
    edges = [on] + cut + [off]
    return [(edges[k] * fr, edges[k + 1] * fr) for k in range(copies)]


def _mel_fb(sr, n_fft, n_mels=26, fmin=80, fmax=7600):
    m = lambda f: 2595 * np.log10(1 + f / 700); im = lambda v: 700 * (10 ** (v / 2595) - 1)
    b = np.floor((n_fft + 1) * im(np.linspace(m(fmin), m(fmax), n_mels + 2)) / sr).astype(int); fb = np.zeros((n_mels, n_fft // 2 + 1))
    for i in range(n_mels):
        a, c, d = b[i], b[i + 1], b[i + 2]
        fb[i, a:c] = (np.arange(a, c) - a) / max(c - a, 1); fb[i, c:d] = (d - np.arange(c, d)) / max(d - c, 1)
    return fb


def mfcc(x, sr):
    """13 MFCC (without c0) per 10 ms, mean/variance normalised per clip (speaker and level independent enough for DTW)."""
    from scipy.fft import dct
    x = np.asarray(x, np.float64); x = np.append(x[:1], x[1:] - 0.97 * x[:-1])
    h, w, nf = int(sr * .01), int(sr * .025), 1 << int(np.ceil(np.log2(sr * .025)))
    if len(x) < w: x = np.pad(x, (0, w - len(x)))
    fr = 1 + (len(x) - w) // h; idx = np.arange(w)[None, :] + h * np.arange(fr)[:, None]
    S = np.abs(np.fft.rfft(x[idx] * np.hamming(w), nf)) ** 2
    c = dct(np.log(S @ _mel_fb(sr, nf).T + 1e-10), type=2, axis=1, norm='ortho')[:, 1:13]
    return (c - c.mean(0)) / (c.std(0) + 1e-6)


def dtw_cost(a, b, sr):
    """Length-normalised DTW distance between the MFCC of two clips (lower = more alike)."""
    A, B = mfcc(a, sr), mfcc(b, sr)
    D = np.sqrt(((A[:, None, :] - B[None, :, :]) ** 2).sum(2)); n, m = D.shape
    acc = np.full((n + 1, m + 1), np.inf); acc[0, 0] = 0
    for i in range(1, n + 1):
        row = acc[i]; prev = acc[i - 1]; d = D[i - 1]
        best = np.minimum(prev[1:], prev[:-1])                    # from above / diagonal
        for j in range(1, m + 1):
            row[j] = d[j - 1] + min(best[j - 1], row[j - 1])
    return acc[n, m] / (n + m)


def trim_level(y, sr, level=-35):
    db, fr = envelope(y, sr, smooth=1); live = np.where(db > level)[0]
    return y[live[0] * fr:(live[-1] + 1) * fr] if len(live) else y

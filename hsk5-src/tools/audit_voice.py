"""Find male clips with an extra "ơ / uh" or a leftover copy at the end (phiếu #14). Checks EVERY male clip the content needs
(M| = normal, MS| = slow; words <= 4 characters and sentences; Bài 1 and every chapter):

  words      EXTRA   more syllable nuclei (vowel-like energy peaks: centroid < 1.5 kHz) than syllables
             TAIL    sound left after the last syllable has died away (>= 60 ms above -34 dB; slow clips 90 ms)
             LONG    more than 0.46 s per syllable (one-syllable word: 0.55 s); male median is 0.36 s per syllable.
                     The male/female length ratio is printed but is not a flag: Matcha itself ranges 0.20-0.37 s per syllable on 2-4 character words.
             DOUBLE  the speech recogniser hears the word twice (老婆 -> 老婆老婆)
  sentences  ASR+    the recogniser hears extra syllables after the last character (…相敬如宾 -> …相敬如宾啊)
             MID     it hears an extra syllable at a comma INSIDE the sentence (…一酸着，流下…) — phiếu #19
  all clips  READ    the engine read a character unlike the pinyin on screen (地 dì for de, 着 zhe for zháo…): the reading
                     stored for the clip in tools/clip_readings.json vs the screen (readcheck.py) — phiếu #19, female too
             STALE   the engine would now read the clip differently (lexicon_extra.txt changed since it was made): remake
  words      TONE    a syllable's pitch moves against its tone (以来 said "yí lǎi") — see tone_check, phiếu #25
  words      GAP     >= 150 ms of near-silence (< -40 dB) between two syllables of the word (slow clips 220 ms)
  words      ORDER   syllables in the wrong order (老婆 heard as "婆老"): see order_check (phiếu #16)
  slow MS|   SLOW    not the normal clip stretched by atempo 0.68 (length ratio outside 1.32-1.62), or its M| clip is bad.
                     A slow clip that IS its M| clip stretched has the same syllables, so it is judged by its M| clip;
                     any other slow clip also gets the checks of its kind.

The recogniser is sherpa-onnx zipformer-multi-zh-hans (offline transducer, timestamps), in $HSK5_MODELS (tools/get_models.sh).
Isolated words are too short for it (it invents endings for clean female words too), so for words it only reports DOUBLE;
on sentences it is reliable (0 of 128 female sentences get an extra ending).

    python3 hsk5-src/tools/audit_voice.py                # report; last line "AUDIT: N bad clips"
    python3 hsk5-src/tools/audit_voice.py --json r.json  # also write every clip's numbers
    python3 hsk5-src/tools/audit_voice.py --no-asr       # energy checks only
"""
import json, os, re, subprocess, sys, difflib
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE); sys.path.insert(0, HERE)
import clipfix as C
M = os.environ.get('HSK5_MODELS', os.path.expanduser('~/hsk5-models'))
ASR_DIR = f'{M}/sherpa-onnx-zipformer-multi-zh-hans-2023-9-2'
SLOW = 0.68                                            # atempo used for MS| clips (synth.py)
han = lambda t: ''.join(re.findall(r'[一-鿿]', t))
WORD_MAX = 4

def is_word(k): return len(k.split('|')[-1]) <= WORD_MAX

def load(path, sr=24000):
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', path, '-f', 'f32le', '-ac', '1', '-ar', str(sr), '-'], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.float32)

_rec = None
def recogniser():
    global _rec
    if _rec is None:
        import sherpa_onnx
        d = ASR_DIR
        _rec = sherpa_onnx.OfflineRecognizer.from_transducer(encoder=f'{d}/encoder-epoch-20-avg-1.int8.onnx', decoder=f'{d}/decoder-epoch-20-avg-1.onnx',
                                                             joiner=f'{d}/joiner-epoch-20-avg-1.int8.onnx', tokens=f'{d}/tokens.txt', num_threads=2)
    return _rec

def has_asr(): return os.path.exists(f'{ASR_DIR}/tokens.txt')

def to16(y, sr):
    if sr == 16000: return np.asarray(y, np.float32)
    from scipy.signal import resample_poly
    return resample_poly(np.asarray(y, np.float32), 16000, sr).astype(np.float32)

def recognise(y, sr):
    """-> (text, timestamps): one timestamp (s from the start of y) per Han character of the text."""
    p = np.zeros(1600, np.float32); z = np.concatenate([p, to16(y, sr), p])
    s = recogniser().create_stream(); s.accept_waveform(16000, z); recogniser().decode_stream(s)
    ts = []; buf = b''; t0 = 0
    for tok, t in zip(s.result.tokens, s.result.timestamps):     # tokens are characters (some with a leading space), or
        if re.fullmatch(r'<0x[0-9A-Fa-f]{2}>', tok):             # a rare character spelled as UTF-8 byte tokens <0xE9>…
            if not buf: t0 = t
            buf += bytes([int(tok[3:5], 16)])
            try: tok = buf.decode('utf-8'); t = t0; buf = b''
            except UnicodeDecodeError: continue
        ts += [t - 0.1] * len(han(tok))
    return han(s.result.text), ts

def pys(t):
    from pypinyin import lazy_pinyin
    return lazy_pinyin(han(t))

def pauses(say):
    """Positions (count of Han characters before it) of the punctuation marks inside `say`."""
    out = set(); n = 0
    for c in say or '':
        if '一' <= c <= '鿿': n += 1
        elif c in '，。！？；：、,.!?;:…—“”"' and n: out.add(n)
    return out

def asr_check(y, sr, text, say=None):
    """Sentences: how many extra syllables the recogniser hears AFTER the expected text, how well the rest matches, and
    (phiếu #19, MID) where it hears an extra syllable at a pause INSIDE the sentence (…一酸**着**，流下…): Kokoro says an
    'ơ' at a comma the way it does at the end. Only inserts exactly at a punctuation mark of `say` count (0 of 128 female
    sentences have one; the recogniser's other slips fall elsewhere)."""
    got, ts = recognise(y, sr); a, b = pys(text), pys(got)
    sm = difflib.SequenceMatcher(a=a, b=b, autojunk=False); ops = sm.get_opcodes(); last = ops[-1]; extra = 0
    if last[0] == 'insert': extra = last[4] - last[3]
    if last[0] == 'replace' and (last[4] - last[3]) > (last[2] - last[1]): extra = (last[4] - last[3]) - (last[2] - last[1])
    P = pauses(say); mid = []
    for op, i1, i2, j1, j2 in ops:
        if op == 'insert' and 0 < i1 < len(a) and i1 in P: mid.append((i1, got[j1:j2]))
        if op == 'replace' and (j2 - j1) > (i2 - i1) and 0 < i2 < len(a) and i2 in P: mid.append((i2, got[j1 + (i2 - i1):j2]))
    return {'asr': got, 'acc': round(sm.ratio(), 3), 'extra': extra, 'mid': mid, 'ts': [round(t, 2) for t in ts]}

def asr_double(y, sr, text):
    """Words of 2+ syllables: True when the recogniser hears the whole word twice in a row."""
    got, _ = recognise(y, sr); a, b = pys(text), pys(got); n = len(a)
    return any(b[i:i + n] == a and b[i + n:i + 2 * n] == a for i in range(len(b) - 2 * n + 1)), got

# --- phiếu #16: syllable ORDER of word clips ------------------------------------------------------------------------------
# A wrong cut keeps the end of one copy + the start of the next: 老婆 -> "婆老" (a ROTATION of the word). Three judges vote:
#  ASR  the recogniser, biased toward the word AND all its rotations equally (hotwords), so it picks the order it hears;
#       on isolated words it often adds a syllable at an edge (我老婆), so "the word inside what it heard" counts as good.
#  REF1, REF2  DTW on MFCC against two other takes of Kokoro D saying the word 3 times (order_refs): is the clip closer to
#       the right copy than to the rotated stretches of the same take? (Kokoro saying the text "婆老" is NOT a good
#       reference: its single words have odd lead-ins, and it missed the real 婆老 clip.)
# Flag ORDER when the votes for a rotation outnumber the votes for the word (a tie counts as ORDER). On 95 known cuts
# (43 right, 52 rotated) REF1 alone was right 91 times, the biased recogniser 73 times. A cross-voice check against the
# female clip did not separate right from rotated (Matcha and Kokoro differ more than 老婆 and 婆老), so it is not used.
_hot = None; _refs = {}; _tts = None
def recogniser_hot():
    global _hot
    if _hot is None:
        import sherpa_onnx
        d = ASR_DIR
        _hot = sherpa_onnx.OfflineRecognizer.from_transducer(encoder=f'{d}/encoder-epoch-20-avg-1.int8.onnx', decoder=f'{d}/decoder-epoch-20-avg-1.onnx',
                                                             joiner=f'{d}/joiner-epoch-20-avg-1.int8.onnx', tokens=f'{d}/tokens.txt', num_threads=2,
                                                             decoding_method='modified_beam_search', max_active_paths=8, hotwords_score=1.5)
    return _hot

def rotations(w): return list(dict.fromkeys(w[i:] + w[:i] for i in range(1, len(w)) if w[i:] + w[:i] != w))

_tok = None
def hot_spell(w):
    """Hotwords must be tokens of the recogniser; a rare character (姥, 卧…) is replaced by a common one with the same pinyin."""
    global _tok
    from pypinyin import pinyin, lazy_pinyin, Style
    if _tok is None:
        _tok = {'set': set(), 'by': {}}
        for line in open(f'{ASR_DIR}/tokens.txt', encoding='utf-8'):
            t = line.split()[0] if line.split() else ''
            if len(t) == 1 and '一' <= t <= '鿿':
                _tok['set'].add(t)
                for key in (pinyin(t, style=Style.TONE3)[0][0], lazy_pinyin(t)[0]): _tok['by'].setdefault(key, t)
    t3, t0 = pinyin(w, style=Style.TONE3), lazy_pinyin(w)
    return ''.join(c if c in _tok['set'] else _tok['by'].get(t3[i][0], _tok['by'].get(t0[i], c)) for i, c in enumerate(w))

def asr_order(y, sr, w):
    """-> ('good' | 'rot' | None, heard text)."""
    hw = '/'.join(' '.join(v) for v in [hot_spell(w)] + [hot_spell(r) for r in rotations(w)])
    p = np.zeros(4800, np.float32); z = np.concatenate([p, to16(y, sr), p])
    s = recogniser_hot().create_stream(hotwords=hw); s.accept_waveform(16000, z); recogniser_hot().decode_stream(s)
    got = han(s.result.text); a, b = pys(w), pys(got)
    has = lambda x: any(b[i:i + len(x)] == x for i in range(len(b) - len(x) + 1))
    good = has(a); rot = any(has(pys(r)) for r in rotations(w))
    return ('good' if good and not rot else 'rot' if rot and not good else None), got

REF_TAKES = [('{0}，{0}，{0}。', 0.95), ('{0}、{0}、{0}。', 0.90), ('{0}，{0}，{0}。', 0.80), ('{0}、{0}、{0}。', 0.97),
             ('{0}，{0}，{0}。', 1.0), ('{0}、{0}、{0}。', 0.84), ('{0}，{0}，{0}。', 0.78), ('{0}、{0}、{0}。', 1.03),
             ('{0}；{0}；{0}。', 0.93), ('{0}；{0}；{0}。', 0.80), ('{0}！{0}！{0}！', 0.90), ('{0}？{0}？{0}？', 0.90)]   # no WORD_TRIES take

def order_refs(w, want=2):
    """Same-voice references, made the way a clip is made: Kokoro D says the word 3 times (takes NOT used by voicefix), the
    copies are split by nucleus groups (clipfix.split_by_nuclei). Right = the middle copy; rotated = the same stretch shifted
    by k syllables (= exactly what a wrong cut keeps: end of one copy + start of the next). Up to 4 takes; with 3+, takes that
    disagree with the majority are dropped. -> list of (right, [rotated…]), at most `want`."""
    global _tts
    if w in _refs: return _refs[w]
    import voicefix as V
    from scipy.signal import resample_poly
    if _tts is None: _tts = V.engine('m')
    tts, sid = _tts; n = len(w); out = []
    for tpl, sp in REF_TAKES:
        a = tts.generate(tpl.format(w), sid=sid, speed=sp)
        y = resample_poly(V.highpass(a.samples, a.sample_rate), 24000, a.sample_rate).astype(np.float32)
        db, fr = C.envelope(y, 24000); hb, cen = C.band_env(y, 24000); pk = C.nuclei(db, cen=cen)
        if not C.split_by_nuclei(y, 24000, n): continue           # same validity rules as the cut itself
        cut = [pk[i] + int(np.argmin(db[pk[i]:pk[i + 1]])) for i in range(len(pk) - 1)]
        seg = lambda a_, b_: C.trim_level(y[a_ * fr:b_ * fr], 24000)
        right = seg(cut[n - 1], cut[2 * n - 1])
        rot = [seg(cut[n - 1 + k], cut[2 * n - 1 + k]) for k in range(1, n) if w[k:] + w[:k] != w]
        out.append((right, rot))
        if len(out) >= 4: break
    if len(out) >= 3:
        # a take can split at the wrong nuclei and still have 3n of them (歪歪扭扭): keep the takes whose right copy is closer
        # to the other takes' right copies than to their rotated stretches
        def agree(i, j): return C.dtw_cost(out[i][0], out[j][0], 24000) < min(C.dtw_cost(out[i][0], r, 24000) for r in out[j][1])
        score = [sum(agree(i, j) for j in range(len(out)) if j != i) for i in range(len(out))]
        out = [o for o, sc in sorted(zip(out, score), key=lambda t: -t[1]) if sc * 2 >= len(out) - 1]
    out = out[:want]; _refs[w] = out; return out

def order_check(y, sr, w, asr=True):
    """-> (True when the syllable order is wrong, info). Words of 2+ characters whose rotations differ (姑姑 has none)."""
    if not rotations(w): return False, {}
    from scipy.signal import resample_poly
    y = np.asarray(y, np.float32); y24 = C.trim_level(y if sr == 24000 else resample_poly(y, 24000, sr).astype(np.float32), 24000)
    votes = []; info = {}
    for i, (right, rot) in enumerate(order_refs(w)):
        d0 = C.dtw_cost(y24, right, 24000); dr = min(C.dtw_cost(y24, r, 24000) for r in rot)
        info[f'ref{i + 1}'] = (round(d0, 2), round(dr, 2))
        if abs(dr - d0) >= 0.1: votes.append('rot' if dr < d0 else 'good')    # phiếu #25: a near tie is no vote (以来: 0.05)
    if asr:
        v, got = asr_order(y24, 24000, w); info['asr_order'] = got
        if v: votes.append(v)
    info['votes'] = ''.join('+' if v == 'good' else '-' for v in votes)
    if not votes: info['order'] = 'unchecked'                     # no reference take and the recogniser was unsure
    return (votes.count('rot') >= votes.count('good')) if votes else False, info

def tone_check(y, sr, w):
    """Words: a syllable whose pitch moves AGAINST its tone (phiếu #25; tones from the pinyin on screen). Only clear
    inversions are flagged, so the natural spread of both voices passes (0 of 757 female word clips flagged):
      T2 that only falls (rise < -0.5 semitone), T4 that only rises (fall < -0.5),
      a half-3rd tone (3rd before a 1st/2nd/4th tone) that rises more than 5 semitones (以来 said "yí lǎi": +7.7).
    Not checked: 一/不, neutral tones, a 3rd tone before a 3rd (it changes to rising), 1st tones, final 3rd tones."""
    import readcheck as R
    t = [x[1] for x in R.screen_syllables(w)]
    for i in range(len(t) - 1):
        if t[i] == 3 and t[i + 1] == 3: t[i] = -2
    sp = C.syllable_pitch(y, sr, len(w)); bad = []
    for i, (c, tone, s) in enumerate(zip(w, t, sp or [])):
        if s is None or c in '一不': continue
        if tone == 2 and s['rise'] < -0.5: bad.append(f'{c}: 2nd tone falls')
        if tone == 4 and s['fall'] < -0.5: bad.append(f'{c}: 4th tone rises')
        if tone == 3 and i + 1 < len(w) and t[i + 1] in (1, 2, 4) and s['end'] - s['start'] > 5:
            bad.append(f'{c}: 3rd tone rises {s["end"] - s["start"]:+.1f} st')
    return bad

def measure(y, sr):
    db, fr = C.envelope(y, sr); pk = C.nuclei(db, cen=C.band_env(y, sr)[1])
    raw, _ = C.envelope(y, sr, smooth=1); gap = run = 0
    for v in (raw[pk[0]:pk[-1]] if len(pk) >= 2 else []):           # longest near-silence BETWEEN the syllables (ms)
        run = run + 1 if v < -40 else 0; gap = max(gap, run)
    return {'dur': round(len(y) / sr, 3), 'nuc': len(pk), 'tail': C.tail_ms(db, pk), 'gap': gap * 10}

def check(key, y, sr, female=None, normal=None, asr=True, order=True, say=None):
    """Flags for one male clip. female = duration (s) of the female clip of the same text, normal = duration of its M| clip
    (for MS|). Returns (flags list, numbers dict)."""
    text = key.split('|')[-1]; n = len(text); r = measure(y, sr); f = []
    slow = key.startswith('MS|')
    if order and is_word(key) and n >= 2:                 # phiếu #16: every word clip, slow ones too (DTW/ASR do not mind tempo)
        bad, oi = order_check(y, sr, text, asr=asr); r.update(oi)
        if bad: f.append('ORDER')
    if is_word(key):                                      # phiếu #25: pitch of each syllable vs its tone
        bad = tone_check(y, sr, text); r['tone'] = bad
        if bad: f.append('TONE')
    if slow and normal:
        r['slow'] = round(r['dur'] / normal, 2)
        if 1.32 <= r['slow'] <= 1.62: return f, r      # = its M| clip stretched: same syllables, judged on the M| clip
    if is_word(key):
        if r['nuc'] > n: f.append('EXTRA')
        if r['tail'] >= (90 if slow else 60): f.append('TAIL')        # a slow clip stretches the natural decay too
        if r['gap'] >= (220 if slow else 150): f.append('GAP')        # a break inside the word (不耐…烦); female max is 100 ms
        per = r['dur'] / n / (1 / SLOW if slow else 1)            # seconds per syllable (slow clips scaled back)
        if (n == 1 and per > 0.55) or (n >= 2 and per > 0.46): f.append('LONG')
        if female and not slow:
            r['ratio'] = round(r['dur'] / female, 2)                # Brain's first measure (07/11)
            # reported only: Matcha's own speed varies (0.20-0.37 s per syllable), so the ratio is not a flag
        if asr and n >= 2:
            d, got = asr_double(y, sr, text); r['asr'] = got
            if d: f.append('DOUBLE')
    elif asr:
        r.update(asr_check(y, sr, text, say))
        if r['extra']: f.append('ASR+')
        if r['mid']: f.append('MID')
    if slow and normal: f.append('SLOW')                # not made from its M| clip (old Kokoro speed-0.6 clips)
    return f, r

def read_flags(texts):
    """{key: (['READ'] and/or ['STALE'], misreads)} for every clip: the reading stored when the clip was made
    (tools/clip_readings.json) vs the screen, and vs what the engine reads now."""
    import readcheck as R
    stored = R.stored_readings(); out = {}
    now = {}
    for kind in 'fm':
        ks = [k for k in texts if R.kind_of(k) == kind]
        now.update({k: v for k, v in zip(ks, (lambda rd: [rd[texts[k]] for k in ks])(R.engine_readings(kind, [texts[k] for k in ks])))})
    for k, t in texts.items():
        st = stored.get(k); fl = []; mis = []
        if st is None: fl.append('STALE')                          # made before readings were recorded and never checked
        else:
            mis = R.compare(k.split('|')[-1], st, t)
            if mis: fl.append('READ')
            if R.flat(st) != R.flat(now[k]): fl.append('STALE')
        if fl: out[k] = (fl, mis)
    return out

def main():
    sys.path.insert(0, SRC); os.chdir(SRC)
    import build as B
    need = B.needed_keys()
    man = json.load(open('audio_manifest.json', encoding='utf-8'))
    aud = os.path.join(os.path.dirname(SRC), 'hsk5')
    asr = '--no-asr' not in sys.argv and has_asr()
    if not asr and '--no-asr' not in sys.argv: print('(no recogniser model: energy checks only — run tools/get_models.sh)')
    import readcheck as R
    texts = R.clip_texts(); readf = read_flags(texts)
    keys = sorted(k for k in man if k.startswith(('M|', 'MS|')) and k.split('|')[-1] in need)
    if '--keys' in sys.argv: keys = sys.argv[sys.argv.index('--keys') + 1].split(',')
    dur = {}
    def d(k):
        if k not in dur: dur[k] = len(load(os.path.join(aud, man[k]))) / 24000 if k in man else None
        return dur[k]
    out = {}; bad = []
    order = sorted(keys, key=lambda k: k.startswith('MS|'))      # M| first, so an MS| knows whether its source is bad
    for k in order:
        y = load(os.path.join(aud, man[k])); t = k.split('|')[-1]
        fl, r = check(k, y, 24000, female=d(t) if is_word(k) else None, normal=d('M|' + t) if k.startswith('MS|') else None, asr=asr, say=texts.get(k))
        if k in readf: fl += readf[k][0]; r['read'] = readf[k][1]
        if k.startswith('MS|') and out.get('M|' + t, {}).get('flags') and 'SLOW' not in fl: fl.append('SLOW')
        r['flags'] = fl; out[k] = r
        if fl: bad.append(k)
    for k, (fl, rd) in readf.items():                             # female clips: reading checks only
        if k not in out: out[k] = {'flags': fl, 'read': rd, 'dur': 0, 'nuc': 0, 'tail': 0}; bad.append(k)
    sev = lambda k: (-len(out[k]['flags']), -out[k].get('ratio', 0), -out[k].get('tail', 0))
    for k in sorted(bad, key=sev):
        r = out[k]; extra = f" ratio {r['ratio']}" if 'ratio' in r else ''
        extra += f" asr '{r['asr']}'" if 'asr' in r else ''
        extra += ''.join(f" | {c}: reads {g}, screen {w}" for _, c, w, g in r.get('read', []))
        extra += ''.join(f" | {x}" for x in r.get('tone', []))
        extra += ''.join(f" | extra '{x}' at a pause after character {i}" for i, x in r.get('mid', []))
        print(f"{k:24s} {' '.join(r['flags']):18s} {r['dur']:.2f}s nuclei {r['nuc']} tail {r['tail']}ms{extra}")
    if '--json' in sys.argv: json.dump(out, open(sys.argv[sys.argv.index('--json') + 1], 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    unc = [k for k in keys if out[k].get('order') == 'unchecked']
    if unc: print('order not checkable (no reference, recogniser unsure):', ' '.join(unc))
    nw = sum(is_word(k) for k in keys)
    print(f'checked {len(keys)} male clips ({nw} words, {len(keys) - nw} sentences; recogniser {"on" if asr else "off"}) '
          f'+ the reading of all {len(texts)} clips (lexicon {R.lex_hash()})')
    print(f'AUDIT: {len(bad)} bad clips')
    return out, bad

if __name__ == '__main__': main()

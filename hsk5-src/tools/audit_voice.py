"""Find male clips with an extra "ơ / uh" or a leftover copy at the end (phiếu #14). Checks EVERY male clip the content needs
(M| = normal, MS| = slow; words <= 4 characters and sentences; Bài 1 and every chapter):

  words      EXTRA   more syllable nuclei (vowel-like energy peaks: centroid < 1.5 kHz) than syllables
             TAIL    sound left after the last syllable has died away (>= 60 ms above -34 dB; slow clips 90 ms)
             LONG    more than 0.46 s per syllable (one-syllable word: 0.55 s); male median is 0.36 s per syllable.
                     The male/female length ratio is printed but is not a flag: Matcha itself ranges 0.20-0.37 s per syllable on 2-4 character words.
             DOUBLE  the speech recogniser hears the word twice (老婆 -> 老婆老婆)
  sentences  ASR+    the recogniser hears extra syllables after the last character (…相敬如宾 -> …相敬如宾啊)
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

def asr_check(y, sr, text):
    """Sentences: how many extra syllables the recogniser hears AFTER the expected text, and how well the rest matches."""
    got, ts = recognise(y, sr); a, b = pys(text), pys(got)
    sm = difflib.SequenceMatcher(a=a, b=b, autojunk=False); ops = sm.get_opcodes(); last = ops[-1]; extra = 0
    if last[0] == 'insert': extra = last[4] - last[3]
    if last[0] == 'replace' and (last[4] - last[3]) > (last[2] - last[1]): extra = (last[4] - last[3]) - (last[2] - last[1])
    return {'asr': got, 'acc': round(sm.ratio(), 3), 'extra': extra, 'ts': [round(t, 2) for t in ts]}

def asr_double(y, sr, text):
    """Words of 2+ syllables: True when the recogniser hears the whole word twice in a row."""
    got, _ = recognise(y, sr); a, b = pys(text), pys(got); n = len(a)
    return any(b[i:i + n] == a and b[i + n:i + 2 * n] == a for i in range(len(b) - 2 * n + 1)), got

def measure(y, sr):
    db, fr = C.envelope(y, sr); pk = C.nuclei(db, cen=C.band_env(y, sr)[1])
    return {'dur': round(len(y) / sr, 3), 'nuc': len(pk), 'tail': C.tail_ms(db, pk)}

def check(key, y, sr, female=None, normal=None, asr=True):
    """Flags for one male clip. female = duration (s) of the female clip of the same text, normal = duration of its M| clip
    (for MS|). Returns (flags list, numbers dict)."""
    text = key.split('|')[-1]; n = len(text); r = measure(y, sr); f = []
    slow = key.startswith('MS|')
    if slow and normal:
        r['slow'] = round(r['dur'] / normal, 2)
        if 1.32 <= r['slow'] <= 1.62: return f, r      # = its M| clip stretched: same syllables, judged on the M| clip
    if is_word(key):
        if r['nuc'] > n: f.append('EXTRA')
        if r['tail'] >= (90 if slow else 60): f.append('TAIL')        # a slow clip stretches the natural decay too
        per = r['dur'] / n / (1 / SLOW if slow else 1)            # seconds per syllable (slow clips scaled back)
        if (n == 1 and per > 0.55) or (n >= 2 and per > 0.46): f.append('LONG')
        if female and not slow:
            r['ratio'] = round(r['dur'] / female, 2)                # Brain's first measure (07/11)
            # reported only: Matcha's own speed varies (0.20-0.37 s per syllable), so the ratio is not a flag
        if asr and n >= 2:
            d, got = asr_double(y, sr, text); r['asr'] = got
            if d: f.append('DOUBLE')
    elif asr:
        r.update(asr_check(y, sr, text))
        if r['extra']: f.append('ASR+')
    if slow and normal: f.append('SLOW')                # not made from its M| clip (old Kokoro speed-0.6 clips)
    return f, r

def main():
    sys.path.insert(0, SRC); os.chdir(SRC)
    import build as B
    need = B.needed_keys()
    man = json.load(open('audio_manifest.json', encoding='utf-8'))
    aud = os.path.join(os.path.dirname(SRC), 'hsk5')
    asr = '--no-asr' not in sys.argv and has_asr()
    if not asr and '--no-asr' not in sys.argv: print('(no recogniser model: energy checks only — run tools/get_models.sh)')
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
        fl, r = check(k, y, 24000, female=d(t) if is_word(k) else None, normal=d('M|' + t) if k.startswith('MS|') else None, asr=asr)
        if k.startswith('MS|') and out.get('M|' + t, {}).get('flags') and 'SLOW' not in fl: fl.append('SLOW')
        r['flags'] = fl; out[k] = r
        if fl: bad.append(k)
    sev = lambda k: (-len(out[k]['flags']), -out[k].get('ratio', 0), -out[k].get('tail', 0))
    for k in sorted(bad, key=sev):
        r = out[k]; extra = f" ratio {r['ratio']}" if 'ratio' in r else ''
        extra += f" asr '{r['asr']}'" if 'asr' in r else ''
        print(f"{k:24s} {' '.join(r['flags']):18s} {r['dur']:.2f}s nuclei {r['nuc']} tail {r['tail']}ms{extra}")
    if '--json' in sys.argv: json.dump(out, open(sys.argv[sys.argv.index('--json') + 1], 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    nw = sum(is_word(k) for k in keys)
    print(f'checked {len(keys)} male clips ({nw} words, {len(keys) - nw} sentences; recogniser {"on" if asr else "off"})')
    print(f'AUDIT: {len(bad)} bad clips')
    return out, bad

if __name__ == '__main__': main()

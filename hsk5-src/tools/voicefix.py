"""Clean male (Kokoro) clips, verified (phiếu #14). Used by synth.py for every male clip.

WORDS (<= 4 characters, also one-syllable words): say "X，X，X。" and keep the middle copy (clipfix.cut_copy: pauses chosen so
the copies have equal length and the same number of syllable nuclei), cut right after the last syllable dies away + 40 ms
fade-out. Several wordings/speeds are tried until audit_voice.check() finds nothing on the ENCODED clip (no extra nucleus, no
tail, not too long, not heard twice). Kokoro audio is high-passed at 70 Hz first (it leaves low thumps where copies join).

SENTENCES: synthesize, let the recogniser find the last expected character; if it hears extra syllables after it, cut at the
quietest point between the last character and the extra one, then trim after the last syllable + fade-out. Accepted only when
the recogniser then hears no extra ending in the encoded mp3 and still hears the whole sentence (accuracy not lower than
before). Otherwise other speeds are tried. encode() = two-pass linear loudnorm to -16 LUFS + mp3 32 kb/s.
"""
import numpy as np, json, subprocess, tempfile
import soundfile as sf
import clipfix as C, audit_voice as A

def encode(y, sr, extra_af=''):
    """-> mp3 bytes (24 kHz mono 32 kb/s), loudness -16 LUFS by a two-pass LINEAR loudnorm: one gain for the whole clip.
    (Single-pass loudnorm is dynamic: it lifted the faded end of cut clips back up, and the recogniser heard the 'ơ' again.)"""
    with tempfile.TemporaryDirectory() as td:
        y = np.asarray(y, np.float32); sf.write(td + '/a.wav', y, sr); pre = (extra_af + ',') if extra_af else ''
        gap = np.zeros(int(sr * .1), np.float32)                 # EBU R128 needs >= 0.4 s: measure a short word tiled 4x
        sf.write(td + '/m.wav', np.concatenate([y, gap] * 4) if len(y) < 1.5 * sr else y, sr)
        out = subprocess.run(['ffmpeg', '-hide_banner', '-i', td + '/m.wav', '-af', pre + 'loudnorm=I=-16:TP=-1.5:print_format=json', '-f', 'null', '-'],
                             capture_output=True, text=True, check=True).stderr
        m = json.loads(out[out.rindex('{'):out.rindex('}') + 1])
        ln = (f"loudnorm=I=-16:TP=-1.5:linear=true:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
              f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}")
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', td + '/a.wav', '-af', pre + ln, '-ac', '1', '-ar', '24000', '-b:a', '32k', td + '/a.mp3'], check=True)
        return open(td + '/a.mp3', 'rb').read()

def decode(raw):
    with tempfile.TemporaryDirectory() as td:
        open(td + '/a.mp3', 'wb').write(raw); return A.load(td + '/a.mp3')

def highpass(x, sr, f=70):
    """Kokoro leaves low thumps (centroid < 100 Hz) where copies join; a male voice has nothing below ~80 Hz."""
    from scipy.signal import butter, sosfiltfilt
    return sosfiltfilt(butter(4, f, 'highpass', fs=sr, output='sos'), np.asarray(x, np.float64)).astype(np.float32)

WORD_TRIES = [('{w}，{w}，{w}。', 0.88), ('{w}。{w}。{w}。', 0.88), ('{w}；{w}；{w}。', 0.88), ('{w}，{w}，{w}。', 0.85),
              ('{w}，{w}，{w}。', 0.92), ('{w}，{w}，{w}。', 0.75), ('{w}。{w}。{w}。', 0.82), ('{w}，{w}，{w}，{w}。', 0.88)]

def make_word(tts, sid, w, female=None, key=None):
    """-> (samples, sr, info) or (None, sr, info). female = duration (s) of the female clip of w."""
    key = key or 'M|' + w; tried = []
    for tpl, sp in WORD_TRIES:
        a = tts.generate(tpl.format(w=w), sid=sid, speed=sp); sr = a.sample_rate
        y, info = C.cut_copy(highpass(a.samples, sr), sr, len(w))
        if y is None: tried.append((tpl, sp, info.get('why'))); continue
        y = np.concatenate([y, np.zeros(int(sr * .02), np.float32)])
        raw = encode(y, sr); fl, r = A.check(key, decode(raw), 24000, female=female, asr=A.has_asr())   # judge what ships
        if len(y) / sr < 0.22 * len(w): fl.append('SHORT')                 # a syllable was cut off
        if not fl: return y, sr, dict(info, tpl=tpl, sp=sp, raw=raw, **r)
        tried.append((tpl, sp, fl, round(len(y) / sr, 2)))
    return None, 24000, {'why': 'no clean variant', 'tried': tried}

def trim_start(y, sr, level=-45):
    db, fr = C.envelope(y, sr, smooth=1); live = np.where(db > level)[0]
    return y[max(0, (live[0] - 2) * fr):] if len(live) else y

def bumps(db, floor=-32.0, prom=5.0):
    """Energy bumps (local maxima above `floor`, separated by dips of >= `prom` dB): one per syllable or less."""
    return C.nuclei(db, prom=prom, floor=floor)

def cut_after_text(y, sr, text):
    """The recogniser heard `extra` syllables after the sentence. Kokoro puts them at the very end as small separate bumps
    ('ơ', 'a', 'le'…), so cut at the dip just before the `extra`-th last energy bump. Timestamps are NOT used to place the cut:
    they can come 0.2 s before a syllable (和 in 暖和), and the recogniser even 'hears' a syllable that was cut off.
    Guards: the removed bumps are weaker than the syllable before them and last <= 0.5 s. -> (samples, info)."""
    r0 = A.asr_check(y, sr, text); k = r0['extra']
    if not k: return None, {'why': 'no extra'}
    db, fr = C.envelope(y, sr); B = bumps(db)
    if len(B) < k + 2: return None, {'why': 'too few bumps'}
    p_ex, p_prev = B[-k], B[-k - 1]
    cut = p_prev + int(np.argmin(db[p_prev:p_ex]))
    if db[cut] > min(db[p_prev], db[p_ex]) - 5: return None, {'why': 'no dip before the extra'}
    if max(db[b] for b in B[-k:]) > db[p_prev] - 3: return None, {'why': 'extra louder than the last syllable'}
    if (len(db) - cut) * fr / sr > 0.5 + 0.15 * (k - 1): return None, {'why': 'extra too long'}
    return end_trim(y[:cut * fr], sr), {'cut': cut * fr / sr, 'asr_before': r0['asr']}

def end_trim(y, sr, level=-40):
    """Drop trailing near-silence (a weak neutral-tone 了/的 stays: no syllable logic here) and fade out."""
    db, fr = C.envelope(y, sr, smooth=1); live = np.where(db > level)[0]
    e = min(len(y), (live[-1] + 3) * fr) if len(live) else len(y)
    return C.fade(y[:e], sr)

SENT_SPEEDS = [None, 0.85, 0.92, 0.82, 0.95]

def make_sentence(tts, sid, text, sp=0.88, key=None):
    """text = what Kokoro reads (with punctuation). -> (samples, sr, info) or (None, sr, info)."""
    key = key or 'M|' + A.han(text); tried = []
    if not A.has_asr():                                           # no recogniser: plain clip, silence trimmed (old behaviour)
        a = tts.generate(text, sid=sid, speed=sp); z = end_trim(trim_start(np.array(a.samples, np.float32), a.sample_rate), a.sample_rate)
        return z, a.sample_rate, {'why': 'unverified', 'raw': encode(z, a.sample_rate)}
    for s2 in SENT_SPEEDS:
        a = tts.generate(text, sid=sid, speed=s2 or sp); sr = a.sample_rate
        y = trim_start(highpass(a.samples, sr), sr)
        r0 = A.asr_check(y, sr, A.han(text))
        if r0['extra']:
            z, info = cut_after_text(y, sr, A.han(text))
            if z is None: tried.append((s2 or sp, info.get('why'))); continue
        else:                                                     # no extra syllable heard: only trim silence
            z = end_trim(y, sr); info = {}
        z = np.concatenate([z, np.zeros(int(sr * .02), np.float32)])
        raw = encode(z, sr); fl, r = A.check(key, decode(raw), 24000, asr=True)                  # judge what ships
        if not fl and r['acc'] >= r0['acc'] - 0.02: return z, sr, dict(info, sp=s2 or sp, before=r0, raw=raw, **r)
        tried.append((s2 or sp, fl, r['acc'], r0['acc']))
    return None, 24000, {'why': 'no clean variant', 'tried': tried}

def engine(kind, models=None):
    """kind 'f' = Matcha female (sid 0), 'm' = Kokoro v1.1 (male D = sid 70, E = sid 90). -> (tts, default sid)."""
    import os, sherpa_onnx
    M = models or A.M
    if kind == 'f':
        d = f'{M}/matcha-icefall-zh-baker'
        return sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(matcha=sherpa_onnx.OfflineTtsMatchaModelConfig(acoustic_model=f'{d}/model-steps-3.onnx', vocoder=f'{M}/vocos-22khz-univ.onnx', lexicon=f'{d}/lexicon.txt', tokens=f'{d}/tokens.txt', dict_dir=f'{d}/dict'), num_threads=2), rule_fsts=f'{d}/date.fst,{d}/number.fst,{d}/phone.fst')), 0
    d = f'{M}/kokoro-multi-lang-v1_1'
    return sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(vits=sherpa_onnx.OfflineTtsVitsModelConfig(), kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(model=f'{d}/model.onnx', voices=f'{d}/voices.bin', tokens=f'{d}/tokens.txt', data_dir=f'{d}/espeak-ng-data', dict_dir=f'{d}/dict', lexicon=f'{d}/lexicon-zh.txt,{d}/lexicon-us-en.txt'), num_threads=2), rule_fsts=f'{d}/phone-zh.fst,{d}/date-zh.fst,{d}/number-zh.fst')), 70

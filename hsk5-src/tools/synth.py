"""Make the missing clips: female = Matcha (sid 0), male = Kokoro v1.1 (sid 70). Writes hsk5/audio/<hash>.mp3 and updates audio_manifest.json.
    python3 hsk5-src/tools/synth.py            # everything missing
    python3 hsk5-src/tools/synth.py --only 测试一下,M|测试一下     # just these keys (testing)
    python3 hsk5-src/tools/synth.py --fix      # phiếu #14: run audit_voice.py and remake every male clip it flags (+ its MS| clip)
    python3 hsk5-src/tools/synth.py --redo M|屋,M|冻     # remake these male clips even if they exist (MS| follows its M|)
Male clips go through voicefix.py (clean edges, verified by audit_voice.check). A slow MS| clip is always the clean M| clip
stretched with ffmpeg atempo 0.68. If no clean version can be made, the old clip is kept and listed at the end.
Needs: pip install sherpa-onnx soundfile pypinyin scipy ; ffmpeg ; the models (tools/get_models.sh, incl. the recogniser).
Models folder: $HSK5_MODELS (default ~/hsk5-models)."""
import soundfile as sf, json, os, hashlib, subprocess, sys, re, tempfile, time
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE); sys.path.insert(0, SRC)
import build as B
sys.path.insert(0, HERE)
import voicefix as V, audit_voice as A
os.chdir(SRC); AUD = os.path.join(os.path.dirname(SRC), 'hsk5', 'audio'); os.makedirs(AUD, exist_ok=True)
man = json.load(open('audio_manifest.json', encoding='utf-8')); J = {j['k']: j for j in json.load(open('tts_jobs.json', encoding='utf-8'))}
arg = lambda f: sys.argv[sys.argv.index(f) + 1].split(',') if f in sys.argv else None
only, redo = arg('--only'), arg('--redo') or []
need = B.needed_keys()
def is_word(k): return k.startswith(('M|', 'MS|')) and len(k.split('|')[-1]) <= 4
todo = [k for k in (only or list(J)) if (k not in man and (only or k.split('|')[-1] in need))]
if '--fix' in sys.argv:
    print('auditing male clips…', flush=True)
    _, bad = A.main(); redo = sorted(set(redo) | set(bad))
for k in redo:                                       # an M| that is remade drags its MS| along (and an MS| needs its M| clean)
    t = k.split('|')[-1]
    if k.startswith('M|') and 'MS|' + t in man: redo.append('MS|' + t)
todo = list(dict.fromkeys(todo + [k for k in redo if k.split('|')[-1] in need]))
todo.sort(key=lambda k: k.startswith('MS|'))        # M| before MS|
if not todo: print('nothing to do'); sys.exit()
engines = {}; n = 0; t0 = time.time(); failed = []; clean = {}
def eng(kind):
    if kind not in engines: engines[kind] = V.engine(kind)
    return engines[kind]
def female_dur(t):
    return len(A.load(os.path.join(os.path.dirname(SRC), 'hsk5', man[t]))) / 24000 if t in man else None
def stretch(y, sr, f, td):
    sf.write(td + '/p.wav', y, sr)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', td + '/p.wav', '-af', f'atempo={f}', td + '/q.wav'], check=True)
    return sf.read(td + '/q.wav')[0]
def male_clean(k):
    """Clean samples of the NORMAL male clip of k's text: remade now, or (for an MS| whose M| is fine) the existing M| clip."""
    t = k.split('|')[-1]
    if t in clean: return clean[t]
    if 'M|' + t in man and 'M|' + t not in todo:
        clean[t] = (A.load(os.path.join(os.path.dirname(SRC), 'hsk5', man['M|' + t])), 24000, {'from': 'existing M|'}); return clean[t]
    tts, sid = eng('m'); j = J.get('M|' + t)
    if len(t) <= 4: clean[t] = V.make_word(tts, sid, t, female_dur(t), 'M|' + t)
    else: clean[t] = V.make_sentence(tts, sid, j['t'] if j else t + '。', j['sp'] if j else 0.88, 'M|' + t)
    return clean[t]
for k in todo:
    kind = 'm' if k.startswith(('M|', 'MS|')) else 'f'
    j = J.get(k); han = k.split('|')[-1]
    if kind == 'm':
        y, sr_, info = male_clean(k)
        if y is None: failed.append(k); print('  could not clean', k, info.get('why'), flush=True); continue
        if k.startswith('MS|'):
            with tempfile.TemporaryDirectory() as td: ys = stretch(y, sr_, A.SLOW, td)
            raw = V.encode(ys, sr_)
            fl, r = A.check(k, V.decode(raw), 24000, normal=len(clean[han][0]) / sr_, asr=A.has_asr())
            if fl: failed.append(k); print('  slow clip flagged', k, fl, flush=True); continue
        else: raw = info['raw'] if 'raw' in info else V.encode(y, sr_)
    else:
        tts, sid = eng('f')
        t, sp = (j['t'], j['sp']) if j else (han, 0.88)
        if len(re.findall(r'[一-鿿]', t)) < 2 and not t.endswith('。'): t += '。'
        with tempfile.TemporaryDirectory() as td:
            wv, mp = td + '/a.wav', td + '/a.mp3'
            a = tts.generate(t, sid=sid, speed=sp); sf.write(wv, a.samples, a.sample_rate)
            af = 'silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,loudnorm=I=-16:TP=-1.5'
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wv, '-af', af, '-ac', '1', '-ar', '24000', '-b:a', '32k', mp], check=True)
            raw = open(mp, 'rb').read()
    h = hashlib.sha1(raw).hexdigest()[:12]; open(f'{AUD}/{h}.mp3', 'wb').write(raw); man[k] = f'audio/{h}.mp3'; n += 1
    if n % 10 == 0: json.dump(man, open('audio_manifest.json', 'w', encoding='utf-8'), ensure_ascii=False); print(n, '/', len(todo), int(time.time() - t0), 's', flush=True)
json.dump(man, open('audio_manifest.json', 'w', encoding='utf-8'), ensure_ascii=False)
print('made', n, 'clips.', ('COULD NOT CLEAN (kept old): ' + ','.join(failed)) if failed else '', '\nNow run: python3 hsk5-src/build.py')

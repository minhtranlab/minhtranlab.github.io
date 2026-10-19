"""Make the missing clips: female = Matcha (sid 0), male = Kokoro v1.1 (sid 70). Writes hsk5/audio/<hash>.mp3 and updates audio_manifest.json.
    python3 hsk5-src/tools/synth.py            # everything missing
    python3 hsk5-src/tools/synth.py --only 测试一下,M|测试一下     # just these keys (testing)
Needs: pip install sherpa-onnx soundfile ; ffmpeg ; the models (tools/get_models.sh). Models folder: $HSK5_MODELS (default ~/hsk5-models)."""
import sherpa_onnx, soundfile as sf, json, os, hashlib, subprocess, sys, re, tempfile, time
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE); sys.path.insert(0, SRC)
import build as B
sys.path.insert(0, HERE)
import clipfix, numpy as np
os.chdir(SRC); AUD = os.path.join(os.path.dirname(SRC), 'hsk5', 'audio'); os.makedirs(AUD, exist_ok=True)
M = os.environ.get('HSK5_MODELS', os.path.expanduser('~/hsk5-models'))
man = json.load(open('audio_manifest.json', encoding='utf-8')); J = {j['k']: j for j in json.load(open('tts_jobs.json', encoding='utf-8'))}
only = sys.argv[sys.argv.index('--only') + 1].split(',') if '--only' in sys.argv else None
need = B.needed_keys()
redo = '--redo-male-words' in sys.argv      # regenerate every male WORD clip (<=4 characters) with the clean-edge method
def is_word(k): return k.startswith(('M|', 'MS|')) and len(k.split('|')[-1]) <= 4
todo = [k for k in (only or list(J)) if (k not in man and (only or k.split('|')[-1] in need))]
if redo: todo = sorted(set(todo) | {k for k in man if is_word(k) and k.split('|')[-1] in need})
if not todo: print('nothing to do'); sys.exit()
def mk(kind):
    if kind == 'f':
        d = f'{M}/matcha-icefall-zh-baker'
        return sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(matcha=sherpa_onnx.OfflineTtsMatchaModelConfig(acoustic_model=f'{d}/model-steps-3.onnx', vocoder=f'{M}/vocos-22khz-univ.onnx', lexicon=f'{d}/lexicon.txt', tokens=f'{d}/tokens.txt', dict_dir=f'{d}/dict'), num_threads=2), rule_fsts=f'{d}/date.fst,{d}/number.fst,{d}/phone.fst')), 0
    d = f'{M}/kokoro-multi-lang-v1_1'
    return sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(vits=sherpa_onnx.OfflineTtsVitsModelConfig(), kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(model=f'{d}/model.onnx', voices=f'{d}/voices.bin', tokens=f'{d}/tokens.txt', data_dir=f'{d}/espeak-ng-data', dict_dir=f'{d}/dict', lexicon=f'{d}/lexicon-zh.txt,{d}/lexicon-us-en.txt'), num_threads=2), rule_fsts=f'{d}/phone-zh.fst,{d}/date-zh.fst,{d}/number-zh.fst')), 70
engines = {}; n = 0; t0 = time.time(); failed = []; clean = {}
def clean_word(tts, sid, han):
    """Kokoro adds a stray hum before/after short utterances. Say the word 3 times and keep the middle copy."""
    if han in clean: return clean[han]
    for t in (f'{han}，{han}，{han}。', f'{han}。{han}。{han}。', f'{han}！{han}！{han}！'):
        a = tts.generate(t, sid=sid, speed=0.88); y, info = clipfix.cut_middle(np.array(a.samples), a.sample_rate)
        if y is not None and 0.22 <= len(y) / a.sample_rate / len(han) <= 0.55: clean[han] = (y, a.sample_rate); return clean[han]
    clean[han] = (None, 24000); return clean[han]
def stretch(y, sr, f, td):
    sf.write(td + '/p.wav', y, sr)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', td + '/p.wav', '-af', f'atempo={f}', td + '/q.wav'], check=True)
    return sf.read(td + '/q.wav')[0]
for k in todo:
    kind = 'm' if k.startswith(('M|', 'MS|')) else 'f'
    if kind not in engines: engines[kind] = mk(kind)
    tts, sid = engines[kind]
    j = J.get(k); han = k.split('|')[-1]
    t, sp = (j['t'], j['sp']) if j else (han, 0.6 if k.startswith('MS|') else 0.88)
    if len(re.findall(r'[一-鿿]', t)) < 2 and not t.endswith('。'): t += '。'
    with tempfile.TemporaryDirectory() as td:
        wv, mp = td + '/a.wav', td + '/a.mp3'
        if kind == 'm' and is_word(k):
            y, sr_ = clean_word(tts, sid, han)
            if y is None: failed.append(k); continue
            if k.startswith('MS|'): y = stretch(y, sr_, 0.68, td)
            sf.write(wv, y, sr_); af = 'loudnorm=I=-16:TP=-1.5'
        else:
            a = tts.generate(t, sid=sid, speed=sp); sf.write(wv, a.samples, a.sample_rate)
            af = 'silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,loudnorm=I=-16:TP=-1.5'
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wv, '-af', af, '-ac', '1', '-ar', '24000', '-b:a', '32k', mp], check=True)
        raw = open(mp, 'rb').read()
    h = hashlib.sha1(raw).hexdigest()[:12]; open(f'{AUD}/{h}.mp3', 'wb').write(raw); man[k] = f'audio/{h}.mp3'; n += 1
    if n % 25 == 0: json.dump(man, open('audio_manifest.json', 'w', encoding='utf-8'), ensure_ascii=False); print(n, '/', len(todo), int(time.time() - t0), 's', flush=True)
json.dump(man, open('audio_manifest.json', 'w', encoding='utf-8'), ensure_ascii=False)
print('made', n, 'clips.', ('COULD NOT CLEAN (kept old): ' + ','.join(failed)) if failed else '', '\nNow run: python3 hsk5-src/build.py')

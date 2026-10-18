"""Make the missing clips: female = Matcha (sid 0), male = Kokoro v1.1 (sid 70). Writes hsk5/audio/<hash>.mp3 and updates audio_manifest.json.
    python3 hsk5-src/tools/synth.py            # everything missing
    python3 hsk5-src/tools/synth.py --only 测试一下,M|测试一下     # just these keys (testing)
Needs: pip install sherpa-onnx soundfile ; ffmpeg ; the models (tools/get_models.sh). Models folder: $HSK5_MODELS (default ~/hsk5-models)."""
import sherpa_onnx, soundfile as sf, json, os, hashlib, subprocess, sys, re, tempfile, time
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE); sys.path.insert(0, SRC)
import build as B
os.chdir(SRC); AUD = os.path.join(os.path.dirname(SRC), 'hsk5', 'audio'); os.makedirs(AUD, exist_ok=True)
M = os.environ.get('HSK5_MODELS', os.path.expanduser('~/hsk5-models'))
man = json.load(open('audio_manifest.json', encoding='utf-8')); J = {j['k']: j for j in json.load(open('tts_jobs.json', encoding='utf-8'))}
only = sys.argv[sys.argv.index('--only') + 1].split(',') if '--only' in sys.argv else None
need = B.needed_keys()
todo = [k for k in (only or list(J)) if k not in man and (only or k.split('|')[-1] in need)]
if not todo: print('nothing to do'); sys.exit()
def mk(kind):
    if kind == 'f':
        d = f'{M}/matcha-icefall-zh-baker'
        return sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(matcha=sherpa_onnx.OfflineTtsMatchaModelConfig(acoustic_model=f'{d}/model-steps-3.onnx', vocoder=f'{M}/vocos-22khz-univ.onnx', lexicon=f'{d}/lexicon.txt', tokens=f'{d}/tokens.txt', dict_dir=f'{d}/dict'), num_threads=2), rule_fsts=f'{d}/date.fst,{d}/number.fst,{d}/phone.fst')), 0
    d = f'{M}/kokoro-multi-lang-v1_1'
    return sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(vits=sherpa_onnx.OfflineTtsVitsModelConfig(), kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(model=f'{d}/model.onnx', voices=f'{d}/voices.bin', tokens=f'{d}/tokens.txt', data_dir=f'{d}/espeak-ng-data', dict_dir=f'{d}/dict', lexicon=f'{d}/lexicon-zh.txt,{d}/lexicon-us-en.txt'), num_threads=2), rule_fsts=f'{d}/phone-zh.fst,{d}/date-zh.fst,{d}/number-zh.fst')), 70
engines = {}; n = 0; t0 = time.time()
for k in todo:
    kind = 'm' if k.startswith(('M|', 'MS|')) else 'f'
    if kind not in engines: engines[kind] = mk(kind)
    tts, sid = engines[kind]
    j = J.get(k); han = k.split('|')[-1]
    t, sp = (j['t'], j['sp']) if j else (han, 0.6 if k.startswith('MS|') else 0.88)
    if len(re.findall(r'[一-鿿]', t)) < 2 and not t.endswith('。'): t += '。'
    a = tts.generate(t, sid=sid, speed=sp)
    with tempfile.TemporaryDirectory() as td:
        wv, mp = td + '/a.wav', td + '/a.mp3'; sf.write(wv, a.samples, a.sample_rate)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wv, '-af', 'silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,loudnorm=I=-16:TP=-1.5', '-ac', '1', '-ar', '24000', '-b:a', '32k', mp], check=True)
        raw = open(mp, 'rb').read()
    h = hashlib.sha1(raw).hexdigest()[:12]; open(f'{AUD}/{h}.mp3', 'wb').write(raw); man[k] = f'audio/{h}.mp3'; n += 1
    if n % 25 == 0: json.dump(man, open('audio_manifest.json', 'w', encoding='utf-8'), ensure_ascii=False); print(n, '/', len(todo), int(time.time() - t0), 's', flush=True)
json.dump(man, open('audio_manifest.json', 'w', encoding='utf-8'), ensure_ascii=False)
print('made', n, 'clips. Now run: python3 hsk5-src/build.py')

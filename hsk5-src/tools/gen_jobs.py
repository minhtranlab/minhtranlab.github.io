"""List the audio clips the content needs but audio_manifest.json does not have yet -> tts_jobs.json (text to speak + speed).
Run from anywhere:  python3 hsk5-src/tools/gen_jobs.py     (needs node)"""
import json, subprocess, re, sys, os
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE); sys.path.insert(0, SRC)
import build as B                                  # loads glossary + content, gives needed_keys()
os.chdir(SRC)
man = json.load(open('audio_manifest.json', encoding='utf-8')); old = {j['k']: j for j in json.load(open('tts_jobs.json', encoding='utf-8'))}
files = ['content_words.js','content_words2.js','content_learn.js','content_learn2.js','content_story.js','content_story2.js','content_bank.js','content_bank2.js','content_test.js']
js = ''.join(open(f, encoding='utf-8').read() + '\n' for f in files) + "\nSESSIONS.push({screens:Object.values(QB).flat().concat(TESTBANK.tf,TESTBANK.spot)});process.stdout.write(JSON.stringify({S:SESSIONS,W:WORDS}));"
o = json.loads(subprocess.run(['node', '-e', js], capture_output=True, text=True, check=True).stdout); data, WORDS = o['S'], o['W']
han = lambda t: ''.join(re.findall(r'[一-鿿]', t))
need = B.needed_keys(); jobs = {}
def add(text, voice, sp=0.88):
    k = ('M|' if voice == 'm' else '') + han(text)
    if k and k not in man and k not in jobs: jobs[k] = old.get(k) or {'k': k, 't': text, 'sp': sp}
texts = []
for s in data:
    for sc in s['screens']:
        for l in sc.get('lines', []): add(l['zh'], l['v']); texts.append(l['zh'])
        if sc['t'] == 'pick': add(sc['zh'], 'f'); texts.append(sc['zh'])
        if sc['t'] == 'mc': add(sc['full'], 'f'); texts.append(sc['full'])
        if sc['t'] == 'tf': add(sc['zh'], 'f'); texts.append(sc['zh'])
        if sc['t'] == 'spot': add(sc['full'], 'f'); texts.append(sc['full'])
        if sc['t'] == 'hear': add(sc['s'], 'f'); texts.append(sc['s'])
        if sc['t'] in ('order', 'type'): add(sc['zh'], 'f'); texts.append(sc['zh'])
        if sc['t'] == 'album':
            for x in sc['say']: add(x['zh'], 'm'); texts.append(x['zh'])
            for l in (sc.get('finale') or {}).get('lines', []): add(l['zh'], l['v']); texts.append(l['zh'])
facts = []
for w in WORDS:                                   # word cards: normal + slow male clip, male examples
    for key, sp in (('M|' + w['id'], 0.8), ('MS|' + w['id'], 0.6)):
        if key not in man and key not in jobs: jobs[key] = old.get(key) or {'k': key, 't': w['id'], 'sp': sp}
    for e in w['ex']: add(e, 'm'); texts.append(e)
    facts += [re.sub('<[^>]+>', '', f) for f in w['facts']]
D = B.D; ML = B.MAXL
for t in texts + ['\u0001' + x for x in facts]:   # tap-a-word clips (female) for every dictionary word inside them
    soft = t.startswith('\u0001'); t = t.lstrip('\u0001')
    for run in re.findall(r'[一-鿿]+', t):
        i = 0
        while i < len(run):
            m = 0
            for L in range(min(ML, len(run) - i), 0, -1):
                if run[i:i + L] in D: m = L; break
            if not m: i += 1; continue
            w = run[i:i + m]; i += m
            if soft and len(w) == 1 and D[w][3] in ('s', 'n'): continue
            if w not in man and w not in jobs: jobs[w] = old.get(w) or {'k': w, 't': w, 'sp': 0.8}
jobs = {k: v for k, v in jobs.items() if k.split('|')[-1] in need}
merged = dict(old); merged.update(jobs)
json.dump(list(merged.values()), open('tts_jobs.json', 'w', encoding='utf-8'), ensure_ascii=False)
print(len(jobs), 'clips still to synthesize:', ' '.join(list(jobs)[:12]) + (' ...' if len(jobs) > 12 else ''))

import re, json, os, sys, hashlib, base64
HERE = os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE); SITE = os.path.join(os.path.dirname(HERE), 'hsk5')
from pypinyin import pinyin, Style
FL = {'t','s','n'}
hsk = json.load(open('hsk.json'))
W14 = set(); [W14.update(hsk['words'][k]) for k in '1234']
C14 = set()
for k in '1234': C14.update(''.join(hsk['chars'][k]))
D = {}
for ln in open('glossary.txt', encoding='utf-8'):
    ln = ln.rstrip('\n')
    if not ln.strip(): continue
    p = ln.split('|'); w = p[0]; vi = p[1]; rest = p[2:]
    flag = ''; hv = ''; py = None
    for i, r in enumerate(rest):
        if r in FL: flag = r
        elif r.startswith('py:'): py = r[3:]
        elif i == 0: hv = r
    if py is None: py = ''.join(x[0] for x in pinyin(w, style=Style.TONE))
    D[w] = [py, vi, hv, flag]
MAXL = max(len(k) for k in D)
def seg(s):
    out = []; i = 0
    while i < len(s):
        m = 0
        for L in range(min(MAXL, len(s)-i), 0, -1):
            if s[i:i+L] in D: m = L; break
        if not m: out.append((s[i], False)); i += 1
        else: out.append((s[i:i+m], True)); i += m
    return out
def validate(src):
    unk = set(); bad = {}; tap = {}; taught = {}; comp = {}
    for run in re.findall(r'[一-鿿]+', src):
        for k, known in seg(run):
            if not known: unk.add(k); continue
            d = D[k]; fl = d[3]
            if fl in ('s','n'): tap[k] = d[1]
            elif fl == 't': taught[k] = taught.get(k, 0) + 1
            elif k in W14 or (len(k) == 1 and k in C14): pass
            elif all(ch in C14 for ch in k): comp[k] = 1
            else: bad[k] = run
    return unk, bad, tap, taught, comp
css = open('common.css').read(); js = open('common.js').read()
CONTENT_FILES = ['content_words.js','content_words2.js','content_learn.js','content_learn2.js','content_story.js','content_story2.js','content_bank.js','content_bank2.js','content_test.js','content_ety.js','content_ety2.js','kit.js','kit2.js']
content = '\n'.join(open(f, encoding='utf-8').read() for f in CONTENT_FILES)
src = open('app.src.html', encoding='utf-8').read()
unk, bad, tap, taught, comp = validate(content + '\n' + src)
def needed_keys():
    """every audio key the content can ask for (Han-only text)"""
    need = set(); txt = content + '\n' + src
    for run in re.findall(r'[一-鿿]+', txt):
        need.add(run)
        for k, known in seg(run):
            if known: need.add(k)
    for m in re.findall(r"'([^']*[一-鿿][^']*)'", content):
        need.add(''.join(re.findall(r'[一-鿿]', m)))
    return need
if __name__ == '__main__':
    print('UNKNOWN (not in glossary):', ' '.join(sorted(unk)) or 'none')
    print('NOT HSK1-4 and unflagged:', ' '.join(f'{k}({v})' for k, v in sorted(bad.items())) or 'none')
    print('tap-only words used (%d):' % len(tap), ' '.join(sorted(tap)))
    print('compounds of HSK1-4 chars:', ' '.join(sorted(comp)))
    print('taught words used:', ' '.join(f'{w}x{n}' for w, n in sorted(taught.items())))
    manifest = json.load(open('audio_manifest.json', encoding='utf-8'))   # key -> 'audio/<hash>.mp3' (files live in ../hsk5/audio)
    need = needed_keys()
    keep = {k: v for k, v in manifest.items() if k.split('|')[-1] in need}
    print('audio clips in manifest: %d, shipped: %d, unused: %d' % (len(manifest), len(keep), len(manifest) - len(keep)))
    missing_files = [k for k, v in keep.items() if not os.path.exists(os.path.join(SITE, v))]
    if missing_files: print('MISSING AUDIO FILES for', len(missing_files), 'manifest keys, e.g.', missing_files[:5])
    dict_js = 'const DICT = ' + json.dumps(D, ensure_ascii=False) + ';'
    def assemble(audio_obj, config_tag='<script src="config.js"></script>'):
        audio_js = 'const AUDIO_DATA = ' + json.dumps(audio_obj, ensure_ascii=False) + ';'
        return src.replace('/*COMMON_CSS*/', css).replace('/*DICT_JS*/', dict_js).replace('/*COMMON_JS*/', js).replace('/*CONTENT_JS*/', content).replace('/*AUDIO_JS*/', audio_js).replace('/*CONFIG_TAG*/', config_tag)
    page = assemble(keep)
    # self-update: the version is a content hash of the page (stable when nothing changed); the app compares it with version.json
    ver = hashlib.sha1(page.encode()).hexdigest()[:12]
    assert page.count('__APP_V__') == 1, 'APP_V placeholder must appear exactly once'
    page = page.replace('__APP_V__', ver)
    open(os.path.join(SITE, 'index.html'), 'w', encoding='utf-8').write(page)
    open(os.path.join(SITE, 'version.json'), 'w', encoding='utf-8').write(json.dumps({'v': ver}))
    print('version', ver, '-> hsk5/version.json')
    print('wrote hsk5/index.html: %.2f MB' % (len(page.encode()) / 1e6))
    if '--standalone' in sys.argv:   # single file with every clip embedded (offline use)
        out = sys.argv[sys.argv.index('--standalone') + 1]
        emb = {k: 'data:audio/mpeg;base64,' + base64.b64encode(open(os.path.join(SITE, v), 'rb').read()).decode() for k, v in keep.items()}
        open(out, 'w', encoding='utf-8').write(assemble(emb, '<script>window.HSK5={api:""};</script>').replace('__APP_V__', ver))
        print('wrote standalone', out)
    print('problems:', len(unk) + len(bad))

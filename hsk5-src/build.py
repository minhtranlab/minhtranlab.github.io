import re, json, os, sys, hashlib, base64, subprocess
HERE = os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE); SITE = os.path.join(os.path.dirname(HERE), 'hsk5')
from pypinyin import pinyin, Style
FL = {'t','s','n'}
hsk = json.load(open('hsk.json'))
W14 = set(); [W14.update(hsk['words'][k]) for k in '1234']
C14 = set()
for k in '1234': C14.update(''.join(hsk['chars'][k]))
def load_gloss(path, ch=1):
    G = {}
    for ln in open(path, encoding='utf-8'):
        ln = ln.rstrip('\n')
        if not ln.strip() or ln.startswith('#'): continue
        p = ln.split('|'); w = p[0]; vi = p[1]; rest = p[2:]
        flag = ''; hv = ''; py = None
        for i, r in enumerate(rest):
            if r in FL: flag = r
            elif r.startswith('py:'): py = r[3:]
            elif i == 0: hv = r       # other columns (e.g. 'story' in ch2/glossary.txt) are ignored here
        if py is None: py = ''.join(x[0] for x in pinyin(w, style=Style.TONE))
        G[w] = [py, vi, hv, flag] + ([ch] if ch > 1 and flag == 't' else [])   # 5th item: the chapter that teaches it (zh() underlines only from that chapter on)
    return G
# ===== chapters (phiếu #9). Chapter 1 is inlined into index.html; every later chapter is its own bundle hsk5/ch<N>.js, loaded when it is opened.
# A chapter folder holds the content files (shape of Chapter 1, assigned into window.CH<N>) and its own glossary.txt (its lines win when merged).
CH1_FILES = ['content_words.js','content_words2.js','content_learn.js','content_learn2.js','content_story.js','content_story2.js','content_path.js','content_bank.js','content_bank2.js','content_test.js','content_ety.js','content_ety2.js','kit.js','kit2.js']
CHAPTER_DIRS = {2: ('ch2', ['words.js', 'learn.js', 'ety.js', 'story.js', 'bank.js', 'test.js', 'kit.js'])}
D1 = load_gloss('glossary.txt')
D = dict(D1)                                 # merged dictionary (shipped as DICT); later chapters' lines win
for n, (dr, _) in sorted(CHAPTER_DIRS.items()): D.update(load_gloss(os.path.join(dr, 'glossary.txt'), n))
MAXL = max(len(k) for k in D)
def seg(s, Dx=None):
    Dx = Dx or D; ML = max(len(k) for k in Dx) if Dx is not D else MAXL
    out = []; i = 0
    while i < len(s):
        m = 0
        for L in range(min(ML, len(s)-i), 0, -1):
            if s[i:i+L] in Dx: m = L; break
        if not m: out.append((s[i], False)); i += 1
        else: out.append((s[i:i+m], True)); i += m
    return out
def validate(src, Dx=None):
    Dx = Dx or D
    unk = set(); bad = {}; tap = {}; taught = {}; comp = {}
    for run in re.findall(r'[一-鿿]+', src):
        for k, known in seg(run, Dx):
            if not known: unk.add(k); continue
            d = Dx[k]; fl = d[3]
            if fl in ('s','n'): tap[k] = d[1]
            elif fl == 't': taught[k] = taught.get(k, 0) + 1
            elif k in W14 or (len(k) == 1 and k in C14): pass
            elif all(ch in C14 for ch in k): comp[k] = 1
            else: bad[k] = run
    return unk, bad, tap, taught, comp
css = open('common.css').read(); js = open('common.js').read()
CONTENT_FILES = CH1_FILES
content = '\n'.join(open(f, encoding='utf-8').read() for f in CH1_FILES)                       # chapter 1 (inline)
CHC = {n: '\n'.join(open(os.path.join(dr, f), encoding='utf-8').read() for f in fs) for n, (dr, fs) in CHAPTER_DIRS.items()}   # later chapters
src = open('app.src.html', encoding='utf-8').read()
# Chapter 1 is checked against its own glossary (as before); the app and later chapters against the merged one (Bài 1 + Bài 2 words allowed)
r1 = validate(content, D1); rA = validate(src, D); rC = {n: validate(c, D) for n, c in CHC.items()}
unk = r1[0] | rA[0] | set().union(*[r[0] for r in rC.values()]) if rC else r1[0] | rA[0]
bad = dict(r1[1]); bad.update(rA[1]); [bad.update(r[1]) for r in rC.values()]
tap = dict(r1[2]); tap.update(rA[2]); [tap.update(r[2]) for r in rC.values()]
comp = dict(r1[4]); comp.update(rA[4]); [comp.update(r[4]) for r in rC.values()]
taught = r1[3]
def word_chapters():
    """taught word -> chapter, from each chapter's WORDS ids"""
    m = {}
    for n, c in CHC.items():
        for w in re.findall(r"\{\s*id:\s*'([^']+)',\s*ep:", c): m[w] = n
    return m
def _keys(txt, quoted):
    need = set()
    for run in re.findall(r'[一-鿿]+', txt):
        need.add(run)
        for k, known in seg(run):
            if known: need.add(k)
    for m in re.findall(r"'([^']*[一-鿿][^']*)'", quoted):
        need.add(''.join(re.findall(r'[一-鿿]', m)))
    return need
_CHS = {}
def chapter_strings(n):
    """every string value inside CH<n> (evaluated with Node, so quotes in comments cannot fool it); scenes (kit.js) are not spoken"""
    if n not in _CHS:
        dr, fs = CHAPTER_DIRS[n]
        js = 'var window = globalThis;\n' + ''.join(open(os.path.join(dr, f), encoding='utf-8').read() + '\n' for f in fs if f != 'kit.js')
        js += '\nconst out=[];const walk=v=>{if(typeof v==="string")out.push(v);else if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==="object")Object.values(v).forEach(walk)};walk(CH%d);process.stdout.write(JSON.stringify(out));' % n
        _CHS[n] = json.loads(subprocess.run(['node'], input=js, capture_output=True, text=True, check=True).stdout)   # stdin: a whole chapter is longer than one command-line argument may be (phiếu #12)
    return _CHS[n]
def _chapter_keys(n):
    need = set()
    for t in chapter_strings(n):
        k = ''.join(re.findall(r'[一-鿿]', t))
        if k: need.add(k)
        for run in re.findall(r'[一-鿿]+', t):
            need.add(run)
            for w, known in seg(run):
                if known: need.add(w)
    return need
def needed_keys(ch=None):
    """every audio key the content can ask for (Han-only text). ch=1: Bài 1 + app (inline manifest); ch=N: that chapter; None: all"""
    if ch == 1: return _keys(content + '\n' + src, content)
    if ch: return _chapter_keys(ch)
    need = _keys(content + '\n' + src, content)
    for n in CHC: need |= _chapter_keys(n)
    return need
if __name__ == '__main__':
    print('UNKNOWN (not in glossary):', ' '.join(sorted(unk)) or 'none')
    print('NOT HSK1-4 and unflagged:', ' '.join(f'{k}({v})' for k, v in sorted(bad.items())) or 'none')
    print('tap-only words used (%d):' % len(tap), ' '.join(sorted(tap)))
    print('compounds of HSK1-4 chars:', ' '.join(sorted(comp)))
    print('taught words used (Bài 1):', ' '.join(f'{w}x{n}' for w, n in sorted(taught.items())))
    for n, r in sorted(rC.items()): print(f'taught words used (Bài {n}):', ' '.join(f'{w}x{k}' for w, k in sorted(r[3].items())))
    WCH = word_chapters()
    for n in CHC: print(f'Bài {n} taught words:', ' '.join(w for w, c in WCH.items() if c == n))
    manifest = json.load(open('audio_manifest.json', encoding='utf-8'))   # key -> 'audio/<hash>.mp3' (files live in ../hsk5/audio)
    need1 = needed_keys(1)
    keep = {k: v for k, v in manifest.items() if k.split('|')[-1] in need1}          # inline manifest: Bài 1 + the app
    keepC = {}
    for n in CHC:   # a chapter's own manifest: the clips it needs that the inline one does not have; shipped inside its bundle
        nk = needed_keys(n); keepC[n] = {k: v for k, v in manifest.items() if k.split('|')[-1] in nk and k not in keep}
    alln = set(keep) | set().union(*[set(x) for x in keepC.values()])
    print('audio clips in manifest: %d, shipped inline: %d, %s, unused: %d' % (len(manifest), len(keep), ', '.join(f'Bài {n}: {len(x)}' for n, x in keepC.items()), len(manifest) - len(alln)))
    missing_files = [k for k in alln if not os.path.exists(os.path.join(SITE, manifest[k]))]
    if missing_files: print('MISSING AUDIO FILES for', len(missing_files), 'manifest keys, e.g.', missing_files[:5])
    dict_js = 'const DICT = ' + json.dumps(D, ensure_ascii=False) + ';'
    # chapter bundles: content files + its audio manifest, registered by regChapter() in the app
    REG = "(typeof regChapter === 'function' ? regChapter : (n, d, a) => (window.__pendingCh = window.__pendingCh || []).push([n, d, a]))"
    def bundle(n, aud):
        return ('/* HSK5 Bài %d: built by build.py from hsk5-src/%s/ — do not edit */\n' % (n, CHAPTER_DIRS[n][0])) + CHC[n] + '\n' + REG + '(%d, CH%d, %s);\n' % (n, n, json.dumps(aud, ensure_ascii=False))
    bundles = {n: (lambda aud, n=n: bundle(n, aud)) for n in CHC}
    ch_src = {}
    for n in CHC:
        b = bundles[n](keepC[n]); v = hashlib.sha1(b.encode()).hexdigest()[:12]
        open(os.path.join(SITE, f'ch{n}.js'), 'w', encoding='utf-8').write(b); ch_src[n] = f'ch{n}.js?v={v}'
        print(f'wrote hsk5/ch{n}.js: %.0f KB' % (len(b.encode()) / 1e3))
    ch_js = 'const CH_SRC = ' + json.dumps({str(k): v for k, v in ch_src.items()}) + '; const WORD_CH = ' + json.dumps(WCH, ensure_ascii=False) + ';'
    def assemble(audio_obj, config_tag='<script src="config.js"></script>', inline_ch=None):
        audio_js = 'const AUDIO_DATA = ' + json.dumps(audio_obj, ensure_ascii=False) + ';'
        page = src.replace('/*COMMON_CSS*/', css).replace('/*DICT_JS*/', dict_js).replace('/*COMMON_JS*/', js).replace('/*CONTENT_JS*/', content + '\n' + ch_js).replace('/*AUDIO_JS*/', audio_js).replace('/*CONFIG_TAG*/', config_tag)
        if inline_ch: page = page.replace('<!--CH_INLINE-->', ''.join(f'<script>{x}</script>' for x in inline_ch))
        return page
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
        e64 = lambda m: {k: 'data:audio/mpeg;base64,' + base64.b64encode(open(os.path.join(SITE, v), 'rb').read()).decode() for k, v in m.items()}
        open(out, 'w', encoding='utf-8').write(assemble(e64(keep), '<script>window.HSK5={api:""};</script>', [bundles[n](e64(keepC[n])) for n in CHC]).replace('__APP_V__', ver))
        print('wrote standalone', out)
    # each later chapter has its own content checker (rules of its tickets): its problems count too
    chk = 0
    for n, (dr, _) in CHAPTER_DIRS.items():
        cp = os.path.join(dr, f'check_ch{n}.py')
        if os.path.exists(cp):
            r = subprocess.run([sys.executable, cp], capture_output=True, text=True); last = (r.stdout.strip().splitlines() or ['?'])[-1]
            m = re.search(r'problems:\s*(\d+)', last); k = int(m.group(1)) if m else 1; chk += k
            print(f'Bài {n} content check ({cp}):', last if k else 'problems: 0')
            if k: print(r.stdout[-2000:])
    print('problems:', len(unk) + len(bad) + chk)

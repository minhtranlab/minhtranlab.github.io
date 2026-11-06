"""Validator for the Bài 2 content in hsk5-src/ch2/ (like build.py's validator, plus the rules of phiếu #10).
Run: python3 hsk5-src/ch2/check_ch2.py   → must end with "problems: 0".
- loads the ch2/*.js files into a fake window with Node (dump_ch2.js) in 3 load orders; any load error is a problem
- every Chinese word: HSK1–4, a Bài 1 word/support word (glossary.txt), or a Bài 2 entry (ch2/glossary.txt);
  a Bài 2 taught word only AFTER its word card (in session order; in WORDS/LEARN/ETY/QB only from its own tập on)
- hear items: 3 options, whyNot for both wrong options, options close to each other (one detail differs)
- question screens: the picture never contains the answer's characters
- PATH: 20 stages, kinds, units/ids valid; comic ids cover BOOK once; word data complete for every word in a session
"""
import re, json, os, sys, subprocess
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE)
from pypinyin import pinyin, Style
FL = {'t', 's', 'n'}
hsk = json.load(open(os.path.join(SRC, 'hsk.json')))
W14 = set(); [W14.update(hsk['words'][k]) for k in '1234']
C14 = set()
for k in '1234': C14.update(''.join(hsk['chars'][k]))
problems = []
def P(msg): problems.append(msg)

def load_gloss(path, tag):
    out = {}
    for n, ln in enumerate(open(path, encoding='utf-8'), 1):
        ln = ln.rstrip('\n')
        if not ln.strip() or ln.startswith('#'): continue
        p = ln.split('|'); w = p[0]; vi = p[1] if len(p) > 1 else ''; rest = p[2:]
        flag = ''; hv = ''; py = None; story = False
        for i, r in enumerate(rest):
            if r in FL: flag = r
            elif r.startswith('py:'): py = r[3:]
            elif r == 'story': story = True
            elif i == 0: hv = r
        if py is None: py = ''.join(x[0] for x in pinyin(w, style=Style.TONE))
        if not vi: P(f'{tag}:{n} {w}: no Vietnamese gloss')
        out[w] = dict(py=py, vi=vi, hv=hv, flag=flag, story=story, src=tag)
    return out
G1 = load_gloss(os.path.join(SRC, 'glossary.txt'), 'glossary.txt')
G2 = load_gloss(os.path.join(HERE, 'glossary.txt'), 'ch2/glossary.txt')
D = dict(G1); D.update(G2)               # Bài 2 lines win when both files have the word (e.g. 串, 夜: support in Bài 1, taught in Bài 2)
T1 = {w for w, d in G1.items() if d['flag'] == 't'}
T2 = {w for w, d in G2.items() if d['flag'] == 't'}
dup = sorted(w for w in G2 if w in G1 and G1[w]['flag'] == G2[w]['flag'])
MAXL = max(len(k) for k in D)
def seg(s):
    out = []; i = 0
    while i < len(s):
        m = 0
        for L in range(min(MAXL, len(s) - i), 0, -1):
            if s[i:i + L] in D: m = L; break
        if not m: out.append((s[i], False)); i += 1
        else: out.append((s[i:i + m], True)); i += m
    return out

# ---- load the content (3 load orders must give the same data) ----
def dump(mode):
    r = subprocess.run(['node', os.path.join(HERE, 'dump_ch2.js'), mode], capture_output=True, text=True)
    if r.returncode: P(f'load error ({mode}): ' + r.stderr.strip()[:400]); return None
    return json.loads(r.stdout)
dumps = {m: dump(m) for m in ('abc', 'ticket', 'rev')}
if any(v is None for v in dumps.values()):
    print('\n'.join(problems)); print('problems:', len(problems)); sys.exit(1)
X = dumps['abc']; CH = X['CH2']; SCN = X['scenes']
for m in ('ticket', 'rev'):
    if json.dumps(dumps[m]['CH2'], sort_keys=True) != json.dumps(CH, sort_keys=True): P(f'load order "{m}" gives different CH2 data')
if not X['inSC']: P('ch2/kit.js scenes are not registered into SC')
for k in ['WORDS', 'EP_META', 'LEARN', 'ETY', 'BOOK', 'SESSIONS', 'QB', 'MEAN', 'TESTBANK', 'PATH']:
    if k not in CH: P(f'CH2.{k} missing')
for n in X['newScenes']:
    if not n.startswith('c2_'): P(f'new scene {n} must start with c2_')

WORDS = {w['id']: w for w in CH['WORDS']}
SESS = {s['id']: s for s in CH['SESSIONS']}
PATH = CH['PATH']; ORDER = [p['id'] for p in PATH]
def strings(o):
    if isinstance(o, str): yield o
    elif isinstance(o, dict):
        for v in o.values(): yield from strings(v)
    elif isinstance(o, list):
        for v in o: yield from strings(v)
stats = {'taught': {}, 'tap': set(), 'comp': set()}
def check_text(o, allowed, where):
    """allowed = Bài 2 taught words already taught at this point (None = all, e.g. the book's own sentences)"""
    for s in strings(o):
        for run in re.findall(r'[一-鿿]+', s):
            for k, known in seg(run):
                if not known: P(f'{where}: "{k}" not in any glossary (in “{run}”)'); continue
                d = D[k]; fl = d['flag']
                if k in T2 and d['src'] == 'ch2/glossary.txt':
                    if allowed is not None and k not in allowed and not (k == '屋子' and '屋' in allowed):
                        P(f'{where}: Bài 2 word {k} used before it is taught (in “{run}”)')
                    stats['taught'][k] = stats['taught'].get(k, 0) + 1
                elif fl in ('s', 'n'): stats['tap'].add(k)
                elif fl == 't': pass                          # Bài 1 taught word
                elif k in W14 or (len(k) == 1 and k in C14): pass
                elif all(ch in C14 for ch in k): stats['comp'].add(k)
                else: P(f'{where}: "{k}" is not HSK1–4 and not flagged (in “{run}”)')

# ---- when is each Bài 2 word taught (its word card) ----
taught_at = {}   # word -> (stage index, screen index)
for si, sid in enumerate(ORDER):
    s = SESS.get(sid)
    if not s: continue
    for i, sc in enumerate(s['screens']):
        if sc.get('t') == 'word': taught_at.setdefault(sc['id'], (si, i))
def taught_before(si, i):
    return {w for w, (a, b) in taught_at.items() if (a, b) < (si, i)}
def taught_upto_unit(uid):
    si = ORDER.index(uid); s = SESS[uid]
    return {w for w, (a, b) in taught_at.items() if a <= si}

# ---- BOOK, PATH ----
BOOK = CH['BOOK']
check_text([b['zh'] for b in BOOK], None, 'BOOK')
for i, b in enumerate(BOOK):
    if not b.get('vi') or re.search(r'[一-鿿]', b['vi']): P(f'BOOK[{i}] needs a Vietnamese line without Chinese')
if len(PATH) != 20: P(f'PATH has {len(PATH)} stages, expected 20')
if len(set(ORDER)) != len(ORDER): P('PATH ids not unique')
comic_ids = []
for p in PATH:
    if p.get('kind') not in ('learn', 'mix', 'comic', 'test'): P(f'PATH {p["id"]}: bad kind')
    if not p.get('title'): P(f'PATH {p["id"]}: no title')
    if p.get('kind') == 'mix':
        for u in p.get('units', []):
            if u not in ORDER or next(q for q in PATH if q['id'] == u)['kind'] != 'learn' or ORDER.index(u) > ORDER.index(p['id']): P(f'PATH {p["id"]}: unit {u} is not an earlier study unit')
        if not p.get('units'): P(f'PATH {p["id"]}: mix without units')
    if p.get('kind') == 'comic':
        ids = p.get('ids') or []; comic_ids += ids
        if len(ids) > 10: P(f'PATH {p["id"]}: {len(ids)} cards, max ~10')
    if p['id'] in SESS:
        s = SESS[p['id']]
        if p['kind'] == 'mix' and (not s.get('mix') or s.get('after') != p.get('units')): P(f'{p["id"]}: SESSIONS.after must equal PATH.units and mix: 1')
for p in PATH:
    if p['kind'] == 'learn' and not re.fullmatch(r'2-\d+', p['id']): P(f'learn id {p["id"]}')
    if p['kind'] == 'mix' and not re.fullmatch(r'2-m\d+', p['id']): P(f'mix id {p["id"]}')
    if p['kind'] == 'comic' and not re.fullmatch(r'2-g\d+', p['id']): P(f'comic id {p["id"]}')
    if p['kind'] == 'test' and p['id'] != '2-t': P(f'test id {p["id"]}')
if sorted(comic_ids) != list(range(len(BOOK))): P('comic ids must cover every BOOK sentence exactly once')
for sid in SESS:
    if sid not in ORDER: P(f'session {sid} not in PATH')

# ---- sessions, screen by screen ----
QTYPES = {'mc', 'pick', 'hear', 'order', 'type', 'tf', 'spot', 'choose', 'match'}
def han(s): return set(re.findall(r'[一-鿿]', s or ''))
def check_hear(h, where):
    o = h.get('opts') or []
    if len(o) != 3: P(f'{where}: hear needs 3 options'); return
    wn = h.get('whyNot') or []
    if len(wn) != 3 or wn[0] or not wn[1] or not wn[2]: P(f'{where}: hear needs whyNot ["", why1, why2]')
    if not h.get('why'): P(f'{where}: hear needs why')
    tok = lambda s: set(re.findall(r'\w+', s.lower()))
    for j in (1, 2):
        a, b = tok(o[0]), tok(o[j]); jac = len(a & b) / max(1, len(a | b))
        if jac < .45: P(f'{where}: option {j} too different from the right one ({jac:.2f}): “{o[j]}”')
    if len(set(o)) < 3: P(f'{where}: duplicate options')
def answer_of(sc):
    t = sc.get('t'); a = set()
    if t == 'mc': a |= {o['t'] for o in sc['opts'] if o.get('ok')}
    if t == 'spot': a.add(sc.get('fix', ''))
    for w in sc.get('w') or []: a.add(w)
    return {x for x in a if x}
def check_screen(sc, allowed, where):
    t = sc.get('t')
    if not t: P(f'{where}: unresolved screen {sc}'); return
    if t == 'story':
        for l in sc['lines']:
            if not any(l['zh'] == b['zh'] for b in BOOK): P(f'{where}: story line is not a BOOK sentence')
        check_text({k: v for k, v in sc.items() if k != 'lines'}, allowed, where)
    elif t == 'album':
        check_text({k: v for k, v in sc.items() if k != 'say'}, allowed, where)
    elif t == 'mc' and sc.get('full') and any(sc['full'] in b['zh'] for b in BOOK) and 'câu trong bài' in (sc.get('prompt') or ''):
        check_text(sc, allowed, where)    # a cloze on the book's own sentence: words of the sentence are allowed once taught
    else:
        check_text(sc, allowed, where)
    for k in ('scene',):
        if sc.get(k) and not SCN.get(sc[k], {}).get('ok'): P(f'{where}: scene {sc[k]} does not exist')
    for o in sc.get('opts') or []:
        if isinstance(o, dict) and o.get('sc') and not SCN.get(o['sc'], {}).get('ok'): P(f'{where}: picture {o["sc"]} does not exist')
    if sc.get('tease') and not SCN.get(sc['tease'].get('scene'), {}).get('ok'): P(f'{where}: tease scene missing')
    if t in QTYPES:
        ans = answer_of(sc)
        pics = [sc.get('scene')] + [o.get('sc') for o in (sc.get('opts') or []) if isinstance(o, dict)]
        for pn in filter(None, pics):
            txt = SCN.get(pn, {}).get('text', '')
            for a in ans:
                if a and a in txt: P(f'{where}: picture {pn} shows the answer {a}')
        if t == 'hear': check_hear(sc, where)
        if t == 'mc':
            if sum(1 for o in sc['opts'] if o.get('ok')) != 1: P(f'{where}: mc needs exactly one right option')
            for o in sc['opts']:
                if not o.get('ok') and not o.get('note'): P(f'{where}: wrong option {o["t"]} has no note')
                if o.get('ok') and o.get('reply'): P(f'{where}: no reply text on the right option (rule: no "Đúng!")')
            if '___' not in sc['say'][0] or '___' in sc['say'][1] or sc['say'][0].replace('___', next(o['t'] for o in sc['opts'] if o.get('ok'))) != sc['full']: P(f'{where}: mc say/full mismatch')
        if t == 'pick':
            if sum(1 for o in sc['opts'] if o.get('ok')) != 1: P(f'{where}: pick needs one right picture')
            for o in sc['opts']:
                if not o.get('ok') and not o.get('why'): P(f'{where}: wrong picture without why')
        if t == 'order' and ''.join(sc['chunks']) != re.sub(r'[，。！？]', '', sc['zh']) and ''.join(sc['chunks']) != sc['zh']: P(f'{where}: order chunks do not make the sentence')
        if t == 'spot':
            c = list(sc['chunks']); c[sc['bad']] = sc['fix']
            if ''.join(c) != sc['full']: P(f'{where}: spot fix does not make the full sentence')
    if t == 'word' and sc['id'] not in WORDS: P(f'{where}: word card for unknown word {sc["id"]}')
    if t == 'predict' and len(sc.get('opts', [])) != 3: P(f'{where}: predict needs 3 options')
    for s in strings(sc):
        if 'Đúng!' in s or 'Đúng rồi' in s or '对！' in s: P(f'{where}: no "Đúng!" text')

n_screens = {}; n_q = {}
for si, sid in enumerate(ORDER):
    s = SESS.get(sid)
    if not s: continue
    n_screens[sid] = len(s['screens']); n_q[sid] = sum(1 for sc in s['screens'] if sc.get('t') in QTYPES)
    if s.get('mix'):
        allowed = set().union(*[taught_upto_unit(u) for u in s['after']])
        if s.get('screens') and s['screens'][-1].get('t') != 'wrap': P(f'{sid}: fallback screens must end with wrap')
    check_text({k: v for k, v in s.items() if k not in ('screens', 'words')}, taught_before(si, 0) | set(s.get('words', [])), sid)
    for i, sc in enumerate(s['screens']):
        al = allowed if s.get('mix') else taught_before(si, i) | ({sc['id']} if sc.get('t') == 'word' else set())
        check_screen(sc, al, f'{sid}#{i + 1}({sc.get("t")})')
    if not s.get('mix'):
        cards = [sc['id'] for sc in s['screens'] if sc.get('t') == 'word']
        if sorted(cards) != sorted(s['words']): P(f'{sid}: words {s["words"]} vs word cards {cards}')
        alb = [sc for sc in s['screens'] if sc.get('t') == 'album']
        if not alb or alb[-1] is not s['screens'][-1]: P(f'{sid}: must end with an album')
        if not (10 <= len(s['screens']) <= 14): P(f'{sid}: {len(s["screens"])} screens (aim 11–13)')
    else:
        old = [w for sc in s['screens'] for w in (sc.get('w') or []) if w in T1]
        new = [w for sc in s['screens'] for w in (sc.get('w') or []) if w in T2]
        if not s.get('ch1'): P(f'{sid}: mix needs ch1 (number of Bài 1 words)')

# ---- per-word data ----
for sid, s in SESS.items():
    for w in s.get('words', []):
        ep = WORDS.get(w, {}).get('ep')
        if ep != sid: P(f'WORDS[{w}].ep = {ep}, but it is taught in {sid}')
for w, d in WORDS.items():
    if w not in taught_at: P(f'{w}: no word card in any session'); continue
    si = taught_at[w][0]; al = {x for x, (a, b) in taught_at.items() if a <= si}
    if w not in T2: P(f'{w}: not flagged t in ch2/glossary.txt')
    for k in ('vi', 'hv'):
        if not d.get(k): P(f'WORDS[{w}].{k} missing')
    if len(d.get('facts', [])) < 2: P(f'WORDS[{w}]: need 2–3 facts')
    if len(d.get('ex', [])) != 2: P(f'WORDS[{w}]: need 2 examples')
    check_text(d, al, f'WORDS[{w}]')
    L = CH['LEARN'].get(w)
    if not L or len(L.get('exv', [])) != 2 or not L.get('hear'): P(f'LEARN[{w}]: need exv (2) and hear')
    else: check_text(L, al, f'LEARN[{w}]'); check_hear(L['hear'], f'LEARN[{w}].hear')
    E = CH['ETY'].get(w)
    if not E or not E.get('parts') or not E.get('hook'): P(f'ETY[{w}]: need parts + hook')
    else: check_text(E, al, f'ETY[{w}]')
    if not CH['MEAN'].get(w): P(f'MEAN[{w}] missing')
    q = CH['QB'].get(w) or []
    if len(q) < 2: P(f'QB[{w}]: need 2–4 items')
    if not any(x.get('t') == 'hear' for x in q): P(f'QB[{w}]: needs a hear item')
    for j, x in enumerate(q):
        check_screen(x, al, f'QB[{w}][{j}]')
        if w not in (x.get('w') or []): P(f'QB[{w}][{j}]: w must contain {w}')
for k, v in CH['EP_META'].items():
    check_text(v, {x for x, (a, b) in taught_at.items() if a <= ORDER.index(k)} if k in ORDER else set(), f'EP_META[{k}]')
for w in T2:
    if w in WORDS or w == '屋子': continue
for w, d in G2.items():
    if d['flag'] == 't' and d['story'] and w not in ('串', '扑', '铺'): P(f'{w}: only 串, 扑, 铺 are story words')
for w in ('串', '扑', '铺'):
    if not (G2.get(w, {}).get('story') and G2[w]['flag'] == 't'): P(f'{w} must be a taught story word in ch2/glossary.txt')
    if w in WORDS and not WORDS[w].get('story'): P(f'WORDS[{w}].story: 1 missing')
n_t2 = len([w for w in T2 if w != '屋子'])
if n_t2 != 39: P(f'ch2/glossary.txt has {n_t2} taught words, expected 39')

# ---- scene art: decorative Chinese must be HSK1–4 or taught ----
for n in X['newScenes']:
    check_text(SCN[n]['text'], None, f'scene {n}')
    if not SCN[n]['label']: P(f'scene {n}: SCENE_LABEL missing')

if '-v' in sys.argv:
    print('screens per session:', n_screens); print('questions per session:', n_q)
    print('tap-only words used:', ' '.join(sorted(stats['tap'])))
    print('compounds of HSK1-4 chars:', ' '.join(sorted(stats['comp'])))
    print('Bài 2 taught words used:', ' '.join(f'{w}x{n}' for w, n in sorted(stats['taught'].items())))
    print('ch2 glossary lines already in glossary.txt with the same flag:', ' '.join(dup) or 'none')
for p in problems: print('PROBLEM', p)
print('problems:', len(problems))
sys.exit(1 if problems else 0)

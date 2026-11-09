"""What the voice engines really read, compared with the pinyin on screen (phiếu #19).

Both engines turn Chinese text into syllables with a lexicon (sherpa-onnx frontend: Matcha = jieba cut + lexicon.txt in pinyin,
Kokoro = longest match + lexicon-zh.txt in zhuyin-like phones). With debug=True sherpa-onnx logs every "Lexicon matched: 'word'
-> 'phones'"; engine_readings() runs the engine on the texts in a child process (speed 3, audio thrown away) and parses that
log, so what we compare is exactly what the engine said, not a guess.

The right reading = the pinyin the app shows (build.seg + DICT, checked against the textbook by tests/t_pinyin.py since #18);
characters outside DICT get pypinyin in context. compare() reports a syllable that differs (地 dì/de, 得 děi/dé/de, 着 zháo/zhe,
长 cháng/zhǎng…), or a tone that differs when both are full tones (3rd-tone change and 一/不 tone change allowed), or a particle
(的 地 得 了 着 过 们 么 呢 吗 吧 啊) read with a full tone where the screen has a neutral one (Matcha reads every 得 as dé).
A full tone read neutral, or a neutral tone read full on a non-particle (妈妈 māmā), is accepted: it still sounds natural.

Fix without touching the text: tools/lexicon_extra.txt = the project lexicon (word + textbook pinyin), loaded LAST by both
engines (the last lexicon wins on a duplicate) and added to both engines' jieba user dict (both cut with jieba first).
voicefix.engine() uses it, so synth, the audit references and this check all read the same way. propose() turns misreads
into entries: the app's DICT word at the misread place, or, when the engine had glued the place to a neighbour into one of its
own words (没入 mò rù, 的哥 dī gē, 次长 cì zhǎng), the DICT words covering that engine word as one phrase.
"""
import os, re, sys, json, hashlib, subprocess, collections
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE)
M = os.environ.get('HSK5_MODELS', os.path.expanduser('~/hsk5-models'))
han = lambda t: ''.join(re.findall(r'[一-鿿]', t))
PARTICLES = set('的地得了着过们么呢吗吧啊')
CACHE = os.path.expanduser('~/.cache/hsk5-readcheck.json')   # text -> raw lexicon matches (engine output never changes)

# ---------------------------------------------------------------- pinyin helpers
TL = {c: (v, t) for t, cs in enumerate(['āēīōūǖ', 'áéíóúǘ', 'ǎěǐǒǔǚ', 'àèìòùǜ'], 1) for c, v in zip(cs, 'aeiouü')}
def split_tone(s):
    """'zhǎng' -> ('zhang', 3); 'de' -> ('de', 5); 'lǜ' -> ('lv', 4)."""
    t = 5; out = ''
    for c in s:
        if c in TL: v, t = TL[c]; out += v
        else: out += c
    return out.replace('ü', 'v'), t

_valid = None
def valid_syllables():
    global _valid
    if _valid is None:
        from pypinyin.pinyin_dict import pinyin_dict
        _valid = {'r'}
        for v in pinyin_dict.values():
            for p in v.split(','): _valid.add(split_tone(p)[0])
    return _valid

def split_word_pinyin(word, py):
    """DICT pinyin of a word ('dǎgōng', "dì'èr", 'yíhuìr') -> one (syllable, tone) per character (儿 after a char -> ('r', 5))."""
    s = py.replace(' ', '').replace('’', "'").lower(); n = len(word); V = valid_syllables()
    parts = s.split("'")
    best = []
    def rec(i, k, acc):
        if best: return
        if k == n:
            if i == len(s): best.append(list(acc))
            return
        for L in range(min(6, len(s) - i), 0, -1):
            piece = s[i:i + L]
            if "'" in piece: continue
            base, t = split_tone(piece)
            if base == 'r' and not (word[k] == '儿' and k): continue
            if k and i and s[i - 1] != "'" and base[0] in 'aoe': continue      # inside a word a/o/e start needs an apostrophe
            if base in V:
                acc.append((base, t)); rec(i + L + (1 if i + L < len(s) and s[i + L] == "'" else 0), k + 1, acc); acc.pop()
    rec(0, 0, [])
    return best[0] if best else None

def screen_syllables(text):
    """The reading the app shows, one (syllable, tone) per Han character of `text`."""
    sys.path.insert(0, SRC)
    import build as B
    from pypinyin import lazy_pinyin, Style
    out = []
    for run in re.findall(r'[一-鿿]+', text):
        ref = [split_tone(x) for x in lazy_pinyin(run, style=Style.TONE)]
        i = 0
        for k, known in B.seg(run):
            n = len(k); r = ref[i:i + n]
            if known:
                sp = split_word_pinyin(k, B.D[k][0])
                if sp and len(sp) == n: r = sp
            out += r; i += n
    return out

# ---------------------------------------------------------------- Kokoro phones -> pinyin (learned from its own lexicon)
_kmap = None
def kokoro_map():
    """zhuyin-like phone string of one syllable -> toneless pinyin, by majority over the single-character lexicon entries."""
    global _kmap
    if _kmap is None:
        from pypinyin import pinyin, lazy_pinyin, Style
        votes = collections.defaultdict(collections.Counter)
        for line in open(f'{M}/kokoro-multi-lang-v1_1/lexicon-zh.txt', encoding='utf-8'):
            f = line.split(); w = f[0] if f else ''
            if len(f) < 3 or not all('一' <= c <= '鿿' for c in w) or len(w) > 4: continue
            syl, cur = [], []
            for x in f[1:]:
                if x.isdigit(): syl.append(' '.join(cur)); cur = []
                else: cur.append(x)
            if len(syl) != len(w) or cur: continue
            if len(w) == 1:
                for p in pinyin(w, style=Style.NORMAL, heteronym=True)[0]: votes[syl[0]][p.replace('ü', 'v')] += 1
            else:                                                           # words: pypinyin in context (得亏 děi)
                for ph, p in zip(syl, lazy_pinyin(w)): votes[ph][p.replace('ü', 'v')] += 1
        _kmap = {ph: c.most_common(1)[0][0] for ph, c in votes.items()}
    return _kmap

def kokoro_syllables(phones):
    """'ㄓ 十 2 ㄏ ㄠ 3' -> [('zhi', 2), ('hao', 3)]"""
    out, cur = [], []
    for x in phones.split():
        if x.isdigit():
            ph = ' '.join(cur); r = ''
            if ph not in kokoro_map() and len(cur) > 1 and cur[-1] in ('R', 'ㄦ'):                     # r-hoá: 会儿 huìr
                ph = ' '.join(cur[:-1]); r = 'r'
                if ph not in kokoro_map(): ph += ' ㄜ'                                                    # 这儿 ㄓ ㄦ = zhèr
            out.append((kokoro_map().get(ph, '?' + ''.join(cur)) + r, int(x))); cur = []
        else: cur.append(x)
    return out

def matcha_syllables(phones):
    """'zhi2 hao3 ' / 'zhe' -> [('zhi', 2), ('hao', 3)] / [('zhe', 5)]"""
    out = []
    for x in phones.split():
        m = re.fullmatch(r'([a-zv]+)([1-5]?)', x)
        if m: out.append((m.group(1), int(m.group(2) or 5)))
    return out

# ---------------------------------------------------------------- what the engines read
CHILD = r'''
import sys, json
sys.path.insert(0, sys.argv[2]); import voicefix as V
tts, sid = V.engine(sys.argv[1], debug=True)
for t in json.load(open(sys.argv[3], encoding='utf-8')):
    sys.stderr.write('@@TEXT ' + json.dumps(t, ensure_ascii=False) + '\n'); sys.stderr.flush()
    tts.generate(t, sid=sid, speed=3.0)
    sys.stderr.write('@@END\n'); sys.stderr.flush()
'''

def _load_cache():
    try: return json.load(open(CACHE, encoding='utf-8'))
    except Exception: return {}

def engine_readings(kind, texts, lex=None):
    """kind 'f' (Matcha) / 'm' (Kokoro D), with the current project lexicon. -> {text: [(word, [(syllable, tone)…]), …]} in
    reading order. Cached per (engine, lexicon version, text). lex='base' reads the old cache entries only (no engine run)."""
    cache = _load_cache(); h = lex or lex_hash(); key = lambda t: f'{kind}|{h}|{t}' 
    todo = sorted({t for t in texts if key(t) not in cache})
    if todo:
        import tempfile
        with tempfile.TemporaryDirectory() as td:
            open(td + '/c.py', 'w').write(CHILD); json.dump(todo, open(td + '/t.json', 'w', encoding='utf-8'), ensure_ascii=False)
            p = subprocess.run([sys.executable, td + '/c.py', kind, HERE, td + '/t.json'], capture_output=True, text=True, check=True)
        cur = None
        for line in p.stderr.splitlines():
            if line.startswith('@@TEXT '): cur = json.loads(line[7:]); cache[key(cur)] = []; continue
            if line.startswith('@@END'): cur = None; continue
            m = re.search(r"Lexicon matched: '(.*?)' -> '(.*?)'", line)
            if m and cur is not None:
                cache[key(cur)].append((m.group(1), m.group(2)))            # raw phones; parsed below
        os.makedirs(os.path.dirname(CACHE), exist_ok=True); json.dump(cache, open(CACHE, 'w', encoding='utf-8'), ensure_ascii=False)
    parse = matcha_syllables if kind == 'f' else kokoro_syllables
    return {t: [(w, parse(ph)) for w, ph in cache[key(t)]] for t in texts}

# ---------------------------------------------------------------- the project lexicon (fixes, used by both engines)
LEX_SRC = os.path.join(HERE, 'lexicon_extra.txt')   # "word py1 py2 …" numbered pinyin (5 = neutral); read LAST, so it wins

def lex_entries():
    out = []
    if os.path.exists(LEX_SRC):
        for line in open(LEX_SRC, encoding='utf-8'):
            line = line.split('#')[0].split()
            if len(line) >= 2: out.append((line[0], line[1:]))
    return out

def lex_hash():
    e = lex_entries()
    return hashlib.sha1(json.dumps(e, ensure_ascii=False).encode()).hexdigest()[:10] if e else 'base'

def to_kokoro(word, syls):
    inv = {}
    for ph, py in kokoro_map().items(): inv.setdefault(py, ph)
    out = []
    for y in syls:
        m = re.fullmatch(r'([a-zv]+)([1-5])', y)
        if not m or m.group(1) not in inv: return None
        out.append(f'{inv[m.group(1)]} {m.group(2)}')
    return ' '.join(out)

def lexicon_paths():
    """-> (extra lexicon for Matcha, for Kokoro, jieba dict dir for Matcha, for Kokoro) built from lexicon_extra.txt in
    ~/.cache, or Nones when there is no extra entry. Both engines cut the text with jieba (dict_dir) before the lexicon."""
    h = lex_hash()
    if h == 'base': return None, None, None, None
    d = os.path.expanduser(f'~/.cache/hsk5-lex/{h}')
    if not os.path.exists(d + '/done'):
        import shutil
        os.makedirs(d, exist_ok=True)
        for sub, src in (('mdict', 'matcha-icefall-zh-baker'), ('kdict', 'kokoro-multi-lang-v1_1')):
            if os.path.exists(f'{d}/{sub}'): shutil.rmtree(f'{d}/{sub}')
            shutil.copytree(f'{M}/{src}/dict', f'{d}/{sub}')
        with open(d + '/matcha.txt', 'w', encoding='utf-8') as fm, open(d + '/kokoro.txt', 'w', encoding='utf-8') as fk, \
             open(d + '/mdict/user.dict.utf8', 'a', encoding='utf-8') as fu, open(d + '/kdict/user.dict.utf8', 'a', encoding='utf-8') as fv:
            for w, syls in lex_entries():
                fm.write(w + ' ' + ' '.join(y[:-1] if y.endswith('5') else y for y in syls) + '\n')
                k = to_kokoro(w, syls)
                if k: fk.write(f'{w} {k}\n')
                if len(w) > 1: fu.write(f'{w} 3000 v\n'); fv.write(f'{w} 3000 v\n')   # both engines cut with jieba first
        open(d + '/done', 'w').write(h)
    return d + '/matcha.txt', d + '/kokoro.txt', d + '/mdict', d + '/kdict'

# ---------------------------------------------------------------- comparison
def tone_ok(want, got, ch):
    (ws, wt), (gs, gt) = want, got
    if ch in '一不': return True                                  # tone change of 一/不 (screen shows the base tone alone)
    if wt == gt: return True
    if wt == 5 and gt != 5: return ch not in PARTICLES               # neutral read full: only wrong on particles
    if gt == 5: return True                                          # full read neutral: natural
    if {wt, gt} == {2, 3}: return True                               # 3rd-tone change (lexicons write it either way)
    return False

def job_text(key, job=None):
    """The text synth.py gives the engine for clip `key` before ENGINE_SUBS (a male word is said 'X，X，X。': each copy is
    looked up alone, so 'X。' reads the same)."""
    w = key.split('|')[-1]
    if key.startswith(('M|', 'MS|')):
        return w + '。' if len(w) <= 4 else (job['t'] if job else w + '。')
    t = job['t'] if job else w
    return t + '。' if len(han(t)) < 2 and not t.endswith('。') else t

def compare(text, readings, sent=None):
    """-> list of (character position, character, screen 'syl+tone', engine 'syl+tone'). `text` = clip text as on screen,
    `sent` = what the engine got (engine_text), readings = engine_readings()[sent]."""
    import difflib
    scr = screen_syllables(text); got = []; chars = []
    for w, ss in readings:
        hz = han(w)
        if len(ss) == len(hz) - 1 and hz.endswith('儿') and ss and ss[-1][0].endswith('r'):   # 这儿 -> one syllable zhèr
            ss = ss[:-1] + [(ss[-1][0][:-1], ss[-1][1]), ('r', 5)]
        if len(ss) == len(hz): got += ss; chars += list(hz)
        else: got += (ss + [('?', 0)] * len(hz))[:len(hz)]; chars += list(hz)   # a word the lexicon spells oddly
    sent = han(sent or text); text = han(text)
    if not readings: return []                                       # nothing logged (啊 alone): cannot check
    if len(sent) != len(text): return [(-1, text, 'text', sent)]
    # the engine may spell numbers out (17号 -> 十七号): align its characters with what was sent, compare matching ones
    bad = []; fmt = lambda s: f'{s[0]}{s[1] if s[1] != 5 else ""}'
    sm = difflib.SequenceMatcher(a=sent, b=''.join(chars), autojunk=False); seen = 0
    for blk in sm.get_matching_blocks():
        for d in range(blk.size):
            i, j = blk.a + d, blk.b + d; seen += 1
            c, w, g = text[i], scr[i], got[j]
            if w[0] == 'r' and c == '儿': continue
            if w[0] != g[0] or not tone_ok(w, g, c): bad.append((i, c, fmt(w), fmt(g)))
    if seen < len(sent): bad.append((-1, text, 'text', ''.join(chars)))   # characters the engine did not read
    return bad


# ---------------------------------------------------------------- clips, proposals, CLI
def clip_texts():
    """{clip key: text the engine gets} for every clip the content needs (synth.py sends the same)."""
    sys.path.insert(0, SRC)
    import build as B
    man = json.load(open(os.path.join(SRC, 'audio_manifest.json'), encoding='utf-8'))
    J = {j['k']: j for j in json.load(open(os.path.join(SRC, 'tts_jobs.json'), encoding='utf-8'))}
    need = B.needed_keys()
    return {k: job_text(k, J.get(k)) for k in man if k.split('|')[-1] in need}

def check_all(texts=None, lex=None):
    """-> {key: misreads} for every clip (engine run with lexicon `lex`, default current)."""
    texts = texts or clip_texts(); out = {}
    for kind in 'fm':
        ks = [k for k in texts if kind_of(k) == kind]
        rd = engine_readings(kind, [texts[k] for k in ks], lex)
        for k in ks:
            b = compare(k.split('|')[-1], rd[texts[k]], texts[k])
            if b: out[k] = b
    return out

def kind_of(key): return 'm' if key.startswith(('M|', 'MS|')) else 'f'

def spans(lengths):
    out, i = [], 0
    for n in lengths: out.append((i, i + n)); i += n
    return out

def propose(key, text, readings, bad):
    """Lexicon entries {word: [py…]} that make the engine read `key` like the screen."""
    sys.path.insert(0, SRC)
    import build as B
    scr_text = han(key.split('|')[-1]); scr = screen_syllables(scr_text)
    eng = [han(w) for w, _ in readings]
    if ''.join(eng) != scr_text: return {}                               # numbers spelled out: fix by hand
    esp = spans([len(w) for w in eng])
    dsp = spans([len(w) for run in re.findall(r'[一-鿿]+', key.split('|')[-1]) for w, _ in B.seg(run)])
    flat = [y for _, ss in readings for y in ss]
    out = {}
    for i, *_ in bad:
        if i < 0: continue
        a, b = next(s for s in dsp if s[0] <= i < s[1])                  # the app's word at the misread place
        while True:                                                      # grow it while an engine word sticks out of it
            ov = [e for e in esp if e[1] > a and e[0] < b and (e[0] < a or e[1] > b)]   # (上冻 sticks out of 冻着)
            if not ov: break
            a2 = min([a] + [e[0] for e in ov]); b2 = max([b] + [e[1] for e in ov])
            a = min(s[0] for s in dsp if s[1] > a2); b = max(s[1] for s in dsp if s[0] < b2)
        w = scr_text[a:b]
        if '儿' in w[1:]: continue
        py = []
        for j in range(a, b):
            syl, t = scr[j]
            if scr_text[j] in '一不' and (b - a > 1) and j < len(flat): t = flat[j][1]   # keep the engine's 一/不 tone change
            py.append(f'{syl}{t}')
        out[w] = py
    return out

def fix_lexicon(max_rounds=4):
    """Add entries to lexicon_extra.txt until every clip reads like the screen (or nothing more can be proposed)."""
    texts = clip_texts()
    for rnd in range(max_rounds):
        bad = check_all(texts); print(f'round {rnd}: lexicon {lex_hash()}, {len(bad)} clips misread', flush=True)
        if not bad: return bad
        have = dict(lex_entries()); new = {}
        for k, b in bad.items():
            kind = kind_of(k); rd = engine_readings(kind, [texts[k]])[texts[k]]
            for w, py in propose(k, texts[k], rd, b).items():
                if have.get(w) == py: continue
                if w in new and new[w] != py: print('  conflict', w, new[w], py); continue
                new[w] = py
        if not new: print('  nothing more to propose'); return bad
        with open(LEX_SRC, 'a', encoding='utf-8') as f:
            if not os.path.exists(LEX_SRC) or os.path.getsize(LEX_SRC) == 0: f.write(HEADER)
            for w, py in new.items():
                f.write(f'{w} {" ".join(py)}\n'); print('  +', w, ' '.join(py))
    return check_all(texts)

HEADER = """# Project lexicon (phiếu #19): readings the voice engines must use. "word py1 py2 …", numbered pinyin, 5 = neutral tone.
# Loaded LAST by Matcha and Kokoro (the last lexicon wins on a duplicate) and added to both engines' jieba user dict.
# Made by `python3 hsk5-src/tools/readcheck.py --fix` from the pinyin on screen; edit by hand only with a reason (# …).
# After ANY change: python3 hsk5-src/tools/synth.py --fix  (remakes every clip whose reading changed; audit READ/STALE).
"""

if __name__ == '__main__':
    if '--fix' in sys.argv: bad = fix_lexicon()
    else: bad = check_all()
    for k, b in bad.items(): print(f'{k[:40]:40s}', ' | '.join(f'{c}: reads {g}, screen {w}' for _, c, w, g in b))
    print(f'READ: {len(bad)} clips misread (lexicon {lex_hash()})')


# ---------------------------------------------------------------- what each clip says (recorded when it is made)
READINGS = os.path.join(HERE, 'clip_readings.json')   # key -> [[word, "syl tone …"], …] as the engine read it at synthesis

def flat(rd): return [tuple(y) for _, ss in rd for y in ss]

def stored_readings():
    try: raw = json.load(open(READINGS, encoding='utf-8'))
    except FileNotFoundError: return {}
    return {k: [(w, [(y[:-1], int(y[-1])) for y in ss.split()]) for w, ss in v] for k, v in raw.items()}

def record(readings_by_key):
    """Store what the engine read for these clips (synth.py calls it for every clip it makes)."""
    try: raw = json.load(open(READINGS, encoding='utf-8'))
    except FileNotFoundError: raw = {}
    for k, rd in readings_by_key.items(): raw[k] = [[w, ' '.join(f'{y}{t}' for y, t in ss)] for w, ss in rd]
    json.dump(dict(sorted(raw.items())), open(READINGS, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'), indent=0)

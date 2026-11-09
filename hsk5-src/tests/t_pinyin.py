"""Pinyin on screen = the textbook reading (phiếu #18, HANDOFF §11).
The app shows pinyin word by word: zh() cuts a sentence by longest match in DICT (glossary.txt + chN/glossary.txt) and puts
each word's DICT pinyin over it, whatever the sentence around it. This script cuts EVERY Chinese run of every chapter the same
way and compares each word's pinyin with the reference reading of that word in that sentence:
  reference = pypinyin (in context) corrected by
    - TEXTBOOK: words whose reading pypinyin gets wrong here, or that the textbook writes with a neutral tone (each with a reason);
    - the tone change of 一 and 不 (一: yí before a 4th/neutral tone, yì before 1st/2nd/3rd, yī when counting/ordinal or last;
      不: bú before a 4th tone; X一X / X不X in the middle: neutral);
    - one-syllable particles keep one reading (得/地 de, 着 zhe, 只 zhǐ, 个 ge…); a sentence that needs another reading
      (得 děi/dé, 地 dì, 只 zhī, 着 zháo, 了 liǎo, 儿 -r) must give that word its own DICT entry (得听, 种地, 一只, 睡不着, 点儿…).
      CONTEXT below flags such places when they are still cut as the one-syllable particle;
    - r-hoá written joined (zhèr, yíhuìr), apostrophe before a/o/e inside a word (dì'èr, àn'àn); 3rd-tone change is never written.
  A multi-syllable word that CC-CEDICT reads with a neutral tone must be in TEXTBOOK (with the neutral tone, or kept full with a
  reason), so a new chapter cannot slip a 妻子 qīzǐ through.
Lone 一 / 不 (a word of their own: 一套, 不会…): zh() changes their tone from the word right after it (phiếu #20). This script
gets what the APP really shows — every chunk goes through zh() of the built page in a browser (HTML tags such as <b> around new words
are kept, zh() looks through them) — and checks it against the rules, written here on their own:
    不: next syllable 4th tone → bú, else bù; X不X → bu.
    一: next 4th tone (or neutral from a 4th: 一个 yí ge) → yí; next 1st/2nd/3rd → yì; counting / ordinal (第一, 十一, 一楼, 一号,
        一月, 一九八五), last of a phrase / before punctuation, 一一 → yī; V一V (看一看) → yi.
    tone of the next word = first syllable of its pinyin as shown (glossary py: first); neutral → that character's own tone.
Run from hsk5-src/tests:  python3 t_pinyin.py     (pip install pypinyin pypinyin-dict)  → must end with "PY-CHECK 0"."""
import os, re, sys, collections
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE); sys.path.insert(0, SRC)
import build as B
from pypinyin import lazy_pinyin, pinyin, Style
try:
    from pypinyin_dict.phrase_pinyin_data.cc_cedict import phrases_dict as CC
except ImportError:
    sys.exit('needs: pip install pypinyin-dict')


N = 'thanh nhẹ (cách ghi của giáo trình)'
TEXTBOOK = {   # word -> reading shown (syllables joined; spaces ignored). Reason after #.
    # one-syllable words: the one reading DICT gives them (other readings get their own entry, see CONTEXT)
    '得': 'de',      # trợ từ bổ ngữ 高兴得…; děi (phải) / dé (được) chỉ trong từ riêng: 得听, 得走, 得早, 得了
    '地': 'de',      # trợ từ trạng ngữ 悄悄地…; dì (đất) chỉ trong từ riêng: 种地, 地里, 外地
    '只': 'zhǐ',     # chỉ; zhī (lượng từ con vật) chỉ trong 一只
    '着': 'zhe',     # đang; zháo trong 睡着, 睡不着, 冻着
    '个': 'ge',      # lượng từ đứng riêng: yí ge, liǎng ge, zhège (giáo trình ghi thanh nhẹ)
    '了': 'le', '的': 'de',   # pypinyin đôi khi đọc liǎo / dī theo cụm từ của nó
    '头': 'tóu',     # cái đầu; pypinyin dính cụm 来头 (láitou) trong 起来头很疼
    '铺': 'pū',      # trải (động từ); pù = cửa hàng
    '挣': 'zhèng',   # kiếm (tiền), giằng ra; zhēng chỉ trong 挣扎
    '没': 'méi',     # không; mò (chìm) không dùng
    '空': 'kòng',    # 空着 = để trống
    '干': 'gàn',     # làm (干活); 干净 gānjìng là từ riêng
    # neutral tone (giáo trình HSK / Từ điển Hiện đại)
    '妈妈': 'māma', '爸爸': 'bàba', '哥哥': 'gēge', '弟弟': 'dìdi', '妹妹': 'mèimei', '爷爷': 'yéye', '奶奶': 'nǎinai',
    '叔叔': 'shūshu', '伯伯': 'bóbo', '姑姑': 'gūgu', '姥姥': 'lǎolao', '舅舅': 'jiùjiu', '谢谢': 'xièxie',
    '妻子': 'qīzi', '丈夫': 'zhàngfu', '老婆': 'lǎopo', '东西': 'dōngxi', '告诉': 'gàosu', '喜欢': 'xǐhuan', '朋友': 'péngyou',
    '好朋友': 'hǎopéngyou', '时候': 'shíhou', '衣服': 'yīfu', '舒服': 'shūfu', '休息': 'xiūxi', '消息': 'xiāoxi',
    '漂亮': 'piàoliang', '热闹': 'rènao', '还是': 'háishi', '要是': 'yàoshi', '晚上': 'wǎnshang', '早上': 'zǎoshang',
    '名字': 'míngzi', '事情': 'shìqing', '认识': 'rènshi', '学生': 'xuésheng', '客气': 'kèqi', '态度': 'tàidu', '任务': 'rènwu',
    '脑袋': 'nǎodai', '葡萄': 'pútao', '暖和': 'nuǎnhuo', '钥匙': 'yàoshi', '觉得': 'juéde', '不好意思': 'bùhǎoyìsi',
    '对不起': 'duìbuqǐ', '起来': 'qǐlai', '走出来': 'zǒuchūlai', '心里发寒': 'xīnlifāhán',
    # kept with full tones although CC-CEDICT reads them neutral: the HSK textbook writes them so
    '太阳': 'tàiyáng', '别人': 'biérén', '不是': 'búshì', '照顾': 'zhàogù', '学习': 'xuéxí', '照片': 'zhàopiàn',
    # pypinyin wrong here
    '不得了': 'bùdéliǎo',   # liǎo (không phải le)
    '长途': 'chángtú', '长得': 'zhǎngde', '等得': 'děngde', '评为': 'píngwéi',   # 长 cháng/zhǎng, 得 de, 为 wéi (được bầu là)
    '一行': 'yìháng',       # một dòng (chữ)
    '冻着': 'dòngzháo',     # bị nhiễm lạnh
    '睡着': 'shuìzháo', '睡不着': 'shuìbuzháo', '看不清': 'kànbuqīng', '打不开': 'dǎbukāi', '听不懂': 'tīngbudǒng',
    '站不起来': 'zhànbuqǐlai',   # bổ ngữ khả năng: 不 đọc nhẹ
    '得听': 'děitīng', '得走': 'děizǒu', '得早': 'děizǎo',   # 得 = phải
    '得了': 'déle',         # 他得了一项大奖: 得 = được (giải)
    '一只': 'yìzhī',        # lượng từ con vật
    '种地': 'zhòngdì', '地里': 'dìli',
    '干干净净': 'gāngānjìngjìng',
}
NUM = set('一二两三四五六七八九十百千万几这那每哪半')
CONTEXT = {   # one-syllable word -> (what comes before / after it that means another reading) — such a place needs its own word
    '得': (lambda p, n: p in ('我', '你', '他', '她', '我们', '你们', '他们', '咱们', '大家', '今天', '明天', '现在', '也', '还', '就', '都', '又', '必须'),
           'sau chủ ngữ/trạng từ: 得 = phải (děi) hoặc được (dé)'),
    '只': (lambda p, n: p[-1:] in NUM, 'sau số/这/那: lượng từ zhī'),
    '地': (lambda p, n: p in ('种', '去', '在', '到', '扫', '满') or n[:1] in ('里', '上', '下'), 'danh từ: đất (dì)'),
    '着': (lambda p, n: p in ('睡', '不', '冻', '找', '猜'), 'zháo (睡着, 冻着…)'),
    '了': (lambda p, n: p in ('不', '得'), 'bổ ngữ khả năng: liǎo'),
    '儿': (lambda p, n: p != '', 'r-hoá: viết liền với chữ trước (点儿, 这儿…)'),
}
TL = {c: t for t, cs in enumerate(['āēīōūǖ', 'áéíóúǘ', 'ǎěǐǒǔǚ', 'àèìòùǜ'], 1) for c in cs}
def tone(syl): return next((TL[c] for c in syl if c in TL), 5)
def base_tone(ch): return tone(pinyin(ch, style=Style.TONE)[0][0])
def ref_syllables(run):
    """pypinyin in context, then the tone change of 一 and 不 (on the underlying tone of the next character)"""
    s = lazy_pinyin(run, style=Style.TONE)
    for i, ch in enumerate(run):
        if ch not in '一不': continue
        p = run[i - 1] if i else ''; n = run[i + 1] if i + 1 < len(run) else ''
        if ch == '一':
            if not n or (p and p in '第十初统唯万') or n in '一二三四五六七八九十〇零月号楼': s[i] = 'yī'
            elif p and p == n: s[i] = 'yi'
            else: s[i] = 'yí' if base_tone(n) in (4, 5) else 'yì'
        else:
            if p and p == n: s[i] = 'bu'
            elif n and base_tone(n) == 4: s[i] = 'bú'
            else: s[i] = 'bù'
    return s
def join(word, syls):
    out = ''
    for k, (ch, y) in enumerate(zip(word, syls)):
        if ch == '儿' and k: out += 'r'; continue
        out += ("'" if k and y[:1] in 'aoeāáǎàēéěèōóǒò' else '') + y
    return out
norm = lambda p: p.replace(' ', '').lower()

def first_tone_shown(w):
    """tone of the first syllable of word w as the app shows it (DICT pinyin); neutral → the character's own tone"""
    import unicodedata
    plain = lambda x: ''.join(c for c in unicodedata.normalize('NFD', x) if not unicodedata.combining(c)).replace('ü', 'v')
    disp = B.D[w][0].replace(' ', '').replace("'", '') if w in B.D else ''; syl = lazy_pinyin(w, style=Style.TONE)
    if not disp: t = tone(syl[0])
    elif len(w) == 1: t = tone(disp)
    elif plain(disp) == ''.join(plain(x) for x in syl): t = tone(disp[:len(syl[0])])
    else: t = tone(syl[0])
    return t if t != 5 else base_tone(w[0])
def lone_rule(k, p, nk):
    n = nk[:1]
    if k == '不':
        if not nk: return 'bù'
        if p and p == n: return 'bu'
        return 'bú' if first_tone_shown(nk) == 4 else 'bù'
    if not nk or (p and p in '第十初统唯万') or (n and n in '一二三四五六七八九十〇零月号楼'): return 'yī'
    if p and p == n: return 'yi'
    return 'yí' if first_tone_shown(nk) in (4, 5) else 'yì'

# chunks as the app gets them: Han text up to punctuation, HTML tags kept (they cut words but not the context of 一/不)
txt = '\n'.join([B.content] + list(B.CHC.values()))
chunks = sorted(set(re.findall(r'(?:[一-鿿]|<[^<>\n]{1,40}>)+', txt)))
chunks = [c for c in chunks if re.search(r'[一-鿿]', c)]
runs = [r for c in chunks for r in re.split(r'<[^<>]*>', c) if r]
# what the app shows: zh() of the built page, word by word
from playwright.sync_api import sync_playwright
PAGE = 'file://' + os.path.join(os.path.dirname(SRC), 'hsk5', 'index.html')
with sync_playwright() as pw:
    br = pw.chromium.launch(); pg = br.new_page(); pg.goto(PAGE); pg.wait_for_timeout(300)
    shown_all = pg.evaluate("(cs)=>cs.map(c=>[...zh(c).matchAll(/<ruby>(.*?)<rt>(.*?)<\\/rt><\\/ruby>/g)].map(m=>[m[1],m[2]]))", chunks)
    br.close()
fails = collections.OrderedDict(); lone = collections.Counter(); lone_bad = collections.OrderedDict(); ctxf = collections.OrderedDict(); used = collections.Counter(); cutbad = []
for chunk, shown_words in zip(chunks, shown_all):
    parts = [r for r in re.split(r'<[^<>]*>', chunk) if r]
    words = []   # (word, known, reference syllables) over the whole chunk
    for part in parts:
        ref = ref_syllables(part); i = 0
        for k, known in B.seg(part): words.append((k, known, ref[i:i + len(k)])); i += len(k)
    known_words = [w for w in words if w[1]]
    if [w[0] for w in known_words] != [x[0] for x in shown_words]: cutbad.append(chunk); continue
    sh = iter(shown_words)
    for j, (k, known, r) in enumerate(words):
        if not known: continue
        used[k] += 1; shown = norm(next(sh)[1])
        p = words[j - 1][0] if j else ''; nx = words[j + 1][0] if j + 1 < len(words) else ''
        if k in ('一', '不'):
            want = lone_rule(k, p[-1:], nx); lone[k + want] += 1
            if shown != want: lone_bad.setdefault((k, shown, want), chunk)
            continue
        if k in TEXTBOOK: want = TEXTBOOK[k]
        else: want = join(k, r)
        if k in CONTEXT and p and CONTEXT[k][0](p, nx):
            ctxf.setdefault((k, p, nx), (chunk, CONTEXT[k][1])); continue
        if shown == want: continue
        fails.setdefault((k, shown, want), chunk)
# words that CC-CEDICT reads with a neutral tone must be decided in TEXTBOOK
neutral = []
for k in sorted(used):
    if len(k) < 2 or k in TEXTBOOK or k not in CC: continue
    syl = [x[0] if isinstance(x, list) else x for x in CC[k]]; dflt = lazy_pinyin(k, style=Style.TONE)
    if len(syl) == len(k) and any(tone(y) == 5 and tone(d) != 5 and c != '儿' for y, d, c in zip(syl, dflt, k)): neutral.append((k, B.D[k][0], ' '.join(syl)))
for (k, shown, want), run in fails.items(): print(f'✗ {k}: shown {shown}, textbook {want}   ({run[:24]})')
for (k, shown, want), run in lone_bad.items(): print(f'✗ lone {k}: app shows {shown}, rule says {want}   ({run[:30]})')
for c in cutbad[:10]: print(f'✗ the app cuts this differently from build.seg: {c[:30]}')
for (k, p, n), (run, why) in ctxf.items(): print(f'✗ {p}[{k}]{n}: {why} — cut as the particle   ({run[:24]})')
for k, py, cc in neutral: print(f'✗ {k}: {py} — CC-CEDICT reads "{cc}" (neutral tone?): add it to TEXTBOOK')
print(f'Chinese chunks: {len(chunks)}, words checked: {sum(used.values())} ({len(used)} different)')
print(f'lone 一/不 checked in the app: {sum(lone.values())} places —', ', '.join(f'{k}×{v}' for k, v in lone.most_common()), f'— wrong: {len(lone_bad)}')
bad = len(fails) + len(ctxf) + len(neutral) + len(lone_bad) + len(cutbad)
print(f'PY-CHECK {bad}')
sys.exit(1 if bad else 0)

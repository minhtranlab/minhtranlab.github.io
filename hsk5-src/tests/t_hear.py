"""Listening items must "trick" just enough (phiếu #6, HANDOFF §11): hearing one or two characters must not be enough.
Checks every `hear` item of every chapter (two-voice ones with `lines` too): LEARN[w].hear, study-unit screens, mix `ext` cards, QB, TESTBANK.
For each item:
  1. three different options, opts[0] is the right one;
  2. whyNot = ['', why option 1 is wrong, why option 2 is wrong];
  3. the meaning of every taught word in `w` (its keyword, KW below) is in ALL three options, so the word alone does not give the answer;
  4. each wrong option stays close to the right one (they share at least 45% of their words): only one detail differs.
Run from hsk5-src/tests:  python3 t_hear.py   → prints the items that fail, ends with "HEAR OK 0" or "HEAR FAIL n". No browser needed.
A new chapter: add its taught words to KW (a few Vietnamese stems that any correct rendering of the word contains)."""
import json, os, re, subprocess, sys
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.dirname(HERE)
KW = {
    # Bài 1
    '电台': ['đài'], '恩爱': ['thắm thiết'], '入围': ['vòng trong'], '对比': ['so sánh'], '评委': ['giám khảo'], '如何': ['thế nào'],
    '瘫痪': ['tê liệt', 'liệt'], '离婚': ['ly hôn'], '自杀': ['tự tử', 'tự sát'], '抱怨': ['phàn nàn', 'than phiền'], '爱护': ['yêu quý', 'giữ gìn'],
    '相敬如宾': ['kính trọng nhau'], '不耐烦': ['sốt ruột'], '手指': ['ngón tay'], '歪歪扭扭': ['xiêu vẹo'], '女士': ['bà'], '半夜': ['nửa đêm'],
    '老婆': ['vợ'], '细节': ['chi tiết'], '婚姻': ['hôn nhân'], '吵架': ['cãi nhau'], '暗暗': ['thầm'], '轮': ['lượt'], '肩膀': ['vai'],
    '喊': ['la', 'gọi to', 'hét'], '伸': ['chìa', 'duỗi'], '递': ['đưa'], '脑袋': ['đầu'], '叙述': ['kể'], '居然': ['không ngờ'], '催': ['giục'],
    '等待': ['đợi', 'chờ'], '蚊子': ['muỗi'], '叮': ['đốt', 'chích'], '项': ['giải'], '患难与共': ['hoạn nạn'], '吵': ['ồn', 'cãi'],
    # Bài 2
    '一辈子': ['cả đời', 'suốt đời'], '农村': ['nông thôn'], '屋': ['nhà', 'phòng'], '断': ['mất liên lạc', 'đứt', 'cai', 'cúp'], '以来': ['đến nay'],
    '姥姥': ['bà ngoại'], '舅舅': ['cậu'], '姑姑': ['cô'], '坚决': ['nhất quyết', 'kiên quyết'], '打工': ['làm thuê', 'làm thêm'], '挣': ['kiếm'],
    '县': ['huyện'], '套': ['căn', 'bộ'], '装修': ['sửa'], '不得了': ['vô cùng', 'kinh khủng'], '串': ['chùm'], '醉': ['say'],
    '强烈': ['hết lời', 'hết sức', 'gắt'], '夜': ['đêm'], '锁': ['khoá'], '临': ['sắp'], '悄悄': ['khẽ'], '晒': ['phơi'], '被子': ['chăn'],
    '长途': ['đường dài'], '冻': ['rét', 'lạnh', 'cóng'], '想象': ['tưởng tượng'], '灰尘': ['bụi'], '亮': ['sáng'], '微笑': ['mỉm cười'],
    '温暖': ['ấm'], '立刻': ['ngay', 'lập tức'], '扑': ['phả'], '卧室': ['phòng ngủ'], '铺': ['trải'], '飘': ['bay'], '阵': ['trận', 'cơn', 'đợt'],
    '感受': ['cảm nhận'], '流泪': ['nước mắt'],
}
def items():
    out = []
    # Bài 1: the inline content files
    files = ['content_words.js', 'content_words2.js', 'content_learn.js', 'content_learn2.js', 'content_story.js', 'content_story2.js', 'content_bank.js', 'content_bank2.js', 'content_test.js']
    js = '\n'.join(open(os.path.join(SRC, f), encoding='utf-8').read() for f in files) + """
;const out=[];
Object.entries(LEARN).forEach(([w,L])=>{if(L.hear)out.push(Object.assign({src:'Bài 1 LEARN['+w+']',w:[w]},L.hear))});
SESSIONS.forEach(s=>s.screens.forEach((c,i)=>{if(c.t==='hear'||c.t==='dlg')out.push(Object.assign({src:'Bài 1 tập '+s.id+' #'+(i+1)},c))}));
Object.entries(QB).forEach(([w,a])=>a.forEach((c,i)=>{if(c.t==='hear'||c.t==='dlg')out.push(Object.assign({src:'Bài 1 QB['+w+']['+i+']'},c))}));
Object.keys(TESTBANK).forEach(k=>(TESTBANK[k]||[]).forEach((c,i)=>{if(c.t==='hear'||c.t==='dlg')out.push(Object.assign({src:'Bài 1 TESTBANK.'+k+'['+i+']'},c))}));
process.stdout.write(JSON.stringify(out));"""
    out += json.loads(subprocess.run(['node'], input=js, capture_output=True, text=True, check=True).stdout)
    # later chapters: their folder's loader (chN/dump_chN.js)
    for n in range(2, 10):
        d = os.path.join(SRC, f'ch{n}', f'dump_ch{n}.js')
        if not os.path.exists(d): continue
        C = json.loads(subprocess.run(['node', d], capture_output=True, text=True, check=True).stdout)['CH2' if n == 2 else f'CH{n}']
        for w, L in (C.get('LEARN') or {}).items():
            if L.get('hear'): out.append(dict(L['hear'], src=f'Bài {n} LEARN[{w}]', w=[w]))
        for s in C.get('SESSIONS') or []:
            for k, c in enumerate(s.get('screens') or []):
                if c.get('t') in ('hear', 'dlg'): out.append(dict(c, src=f'Bài {n} {s["id"]} #{k + 1}'))
            for k, c in enumerate(s.get('ext') or []):
                if c.get('t') in ('hear', 'dlg'): out.append(dict(c, src=f'Bài {n} {s["id"]} ext #{k + 1}'))
        for w, a in (C.get('QB') or {}).items():
            for k, c in enumerate(a):
                if c.get('t') in ('hear', 'dlg'): out.append(dict(c, src=f'Bài {n} QB[{w}][{k}]'))
        for kind, a in (C.get('TESTBANK') or {}).items():
            for k, c in enumerate(a):
                if c.get('t') in ('hear', 'dlg'): out.append(dict(c, src=f'Bài {n} TESTBANK.{kind}[{k}]'))
    return out
def has(opt, stems):
    o = opt.lower()
    return any(re.search(r'(?<!\w)' + re.escape(s) + r'(?!\w)', o) for s in stems)
tok = lambda s: set(re.findall(r'\w+', s.lower()))
fails = []
H = items()
for h in H:
    why = []
    o = h.get('opts') or []
    if len(o) != 3 or len(set(o)) != 3: why.append('needs 3 different options')
    wn = h.get('whyNot') or []
    if len(wn) != 3 or wn[0] or not wn[1] or not wn[2]: why.append('whyNot must be ["", why 1, why 2]')
    for w in h.get('w') or []:
        if w not in KW: why.append(f'no keyword list for {w} (add it to KW)'); continue
        miss = [k for k, x in enumerate(o) if not has(x, KW[w])]
        if miss: why.append(f'meaning of {w} ({"/".join(KW[w])}) missing in option(s) {miss}')
    for k in (1, 2):
        if len(o) == 3:
            a, b = tok(o[0]), tok(o[k]); j = len(a & b) / max(1, len(a | b))
            if j < .45: why.append(f'option {k} too far from the right one ({j:.2f})')
    if why: fails.append((h['src'], h.get('s') or ' / '.join(x.get('zh', '') for x in h.get('lines') or []), o, why))
for src, s, o, why in fails:
    print(f'✗ {src}: {s}'); [print('    -', x) for x in o]; [print('    !', x) for x in why]
print(f'listening items checked: {len(H)} (Bài 1: {sum(1 for h in H if h["src"].startswith("Bài 1"))})')
print('HEAR OK 0' if not fails else f'HEAR FAIL {len(fails)}')
sys.exit(1 if fails else 0)

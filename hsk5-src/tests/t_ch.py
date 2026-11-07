"""Chapters (phiếu #9): registry + PATH, lazy chapter bundle, Bài 2 playable without Bài 1, unlock by PATH, mixed review with ~20% Bài 1 words,
titles/toasts per chapter, whyNot on wrong listening answers, comic stage, and MIGRATION: a real Bài 1 progress saved by the build before
phiếu #9 (fixture_ch1_state.json = everything of Bài 1 done, written by t_all.py DUMP_STATE on commit a85da4a) loads unchanged.
Run from hsk5-src/tests with serve.py on :8765. Prints CH OK 0 failures."""
import asyncio, json, os, subprocess, sys
from playwright.async_api import async_playwright
exec(open('t_all.py').read().split('async def main')[0])   # solve()
BASE = 'http://127.0.0.1:8765/index.html'
FIX = json.load(open('fixture_ch1_state.json'))
fails = []
def chk(ok, msg):
    print(('ok   ' if ok else 'FAIL ') + msg)
    if not ok: fails.append(msg)

async def fresh(b, state=None, vp=(390, 844)):
    ctx = await b.new_context(viewport={'width': vp[0], 'height': vp[1]}, has_touch=True)
    if state is not None:
        await ctx.add_init_script('try{if(!sessionStorage.getItem("seeded")){localStorage.setItem("hsk5_story_v4",' + json.dumps(json.dumps(state)) + ');sessionStorage.setItem("seeded","1")}}catch(e){}')
    pg = await ctx.new_page(); pg.errs = []; pg.reqs = []
    pg.on('pageerror', lambda e: pg.errs.append(str(e)))
    pg.on('request', lambda r: pg.reqs.append(r.url))
    await pg.goto(BASE); await pg.wait_for_timeout(700)
    return ctx, pg

async def play_through(pg, sid, wrongfirst=False):
    await pg.evaluate(f'play({json.dumps(sid)})'); await pg.wait_for_timeout(150)
    k = 0; last = None
    while True:
        i = await pg.evaluate('SS(sid).i'); t = await pg.evaluate(f'SESSIONS.find(x=>String(x.id)==={json.dumps(str(sid))}).screens[{i}].t')
        await solve(pg, sid, i, t, wrongfirst=wrongfirst and k % 3 == 1); k += 1; await pg.wait_for_timeout(100)
        last = (t, await pg.evaluate("document.getElementById('next').textContent"))
        await pg.click('#next'); await pg.wait_for_timeout(120)
        if await pg.evaluate('!!document.getElementById("home")'): break
        assert k < 60, sid
    return last, await pg.evaluate("document.getElementById('toast').textContent")

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=['--no-sandbox', '--autoplay-policy=no-user-gesture-required'])

        # 1) migration: the old Bài 1 progress loads unchanged and the Bài 1 path looks the same
        ctx, pg = await fresh(b, FIX)
        st = await pg.evaluate('JSON.parse(localStorage.getItem("hsk5_story_v4"))')
        chk(st['sess'] == FIX['sess'], 'old Bài 1 progress (st.sess) kept as is')
        chk(st['stk'] == FIX['stk'] and st['wl'] == FIX['wl'] and st['test'] == FIX['test'] and st['log'] == FIX['log'] and st['res'] == FIX['res'], 'stickers, revision records, test score, log, results kept')
        h = await pg.evaluate("[document.querySelector('.brand').textContent, document.querySelector('.sub').textContent, document.querySelectorAll('.path .nd:not(.rev)').length, document.querySelectorAll('.path .nd.done').length, [...document.querySelectorAll('.chb')].map(b=>b.textContent).join('|'), [...document.querySelectorAll('.path .nl')].slice(0,3).map(e=>e.textContent).join(' / ')]")
        chk(h[0] == '爱的细节' and h[1].startswith('HSK5 · Bài 1 ·'), f'home heading Bài 1: {h[:2]}')
        chk(h[2] == 19 and h[3] == 19, f'Bài 1 path: 19 stages, all done ({h[2]}, {h[3]})')
        chk(h[4] == 'Bài 1|Bài 2', f'chapter switch shows Bài 1 | Bài 2 ({h[4]})')
        order = await pg.evaluate('STUDY(1).map(s=>s.id)')
        chk(order == [1, 2, 'm1', 3, 4, 'm2', 5, 6, 'm3', 7, 8, 'm4', 9, 10, 'm5', 11, 'm6', 't1', 'rd'], f'Bài 1 path order unchanged {order}')
        chk(not any('ch2.js' in u for u in pg.reqs), 'Bài 2 bundle NOT downloaded while only Bài 1 is used')
        sum1 = await pg.evaluate('JSON.stringify(summary())')
        chk(json.loads(sum1)['units'] == 11 and json.loads(sum1)['words'] == 38, f'summary for the Sheet unchanged {sum1}')
        # old progress coming back from the Google Sheet (server copy without new fields) merges without loss
        mg = await pg.evaluate('''(R)=>{const L=JSON.parse(JSON.stringify(st));L.sess['2-1']={i:0,done:1,b:0};L.tests={'2-t':{best:3,n:5}};mergeInto(L,R,null);
          return [Object.keys(L.sess).length, L.sess['2-1'].done, L.tests['2-t'].best, L.sess[11].done, L.test.best]}''', FIX)
        chk(mg == [20, 1, 3, 1, FIX['test']['best']], f'merge with an old server copy keeps Bài 1 and Bài 2 progress {mg}')
        # the end of Bài 1 still says "Xong cả Bài 1!"
        await pg.evaluate("st.sess[11]={i:0,done:0};const S=SESSIONS.find(s=>s.id===11);play(11);SS(11).i=S.screens.length-1;renderScreen()"); await pg.wait_for_timeout(200)
        nb = await pg.evaluate("document.getElementById('next').textContent"); await pg.click('#next'); await pg.wait_for_timeout(100)
        chk(nb == 'Hoàn thành Bài 1 ✓' and await pg.evaluate("document.getElementById('toast').textContent") == 'Xong cả Bài 1!', f'end of Bài 1: button/toast ({nb})')
        await ctx.close()

        # 2) a new learner: Bài 2 opens right away (Bài 1 not done), lazily loaded, unlocks by its PATH
        ctx, pg = await fresh(b)
        chk(not any('ch2.js' in u for u in pg.reqs), 'fresh start: Bài 2 not downloaded yet')
        await pg.click('.chb:nth-child(2)'); await pg.wait_for_timeout(900)
        chk(any('ch2.js?v=' in u for u in pg.reqs), 'opening Bài 2 downloads hsk5/ch2.js (versioned)')
        h = await pg.evaluate("[document.querySelector('.brand').textContent, document.querySelector('.sub').textContent, [...document.querySelectorAll('.path .nd:not(.rev)')].map(n=>(n.classList.contains('lock')?'L':'o')+(n.classList.contains('soon')?'s':'')+(n.classList.contains('comic')?'c':'')).join(' ')]")
        chk(h[0] == '留串钥匙给父母' and h[1].startswith('HSK5 · Bài 2 ·'), f'Bài 2 heading {h[:2]}')
        # expected nodes from the content (phiếu #12: more stages arrive over time): first open, the rest locked; "s" = no content yet; "c" = 🎬
        exp = await pg.evaluate("pathOf(2).map((o,i)=>(i?'L':'o')+(o.S?'':'s')+(o.e.kind==='comic'?'c':'')).join(' ')")
        nsoon = exp.count('s')
        chk(h[2] == exp and exp.startswith('o L L'), f'Bài 2 path: tập 1 open, the rest locked, {nsoon} stages "Sắp ra mắt", 3 🎬 ({h[2]} / {exp})')
        soon = await pg.evaluate("[...document.querySelectorAll('.path .nl small.soonl')].length")
        chk(soon == nsoon, f'"Sắp ra mắt" under {nsoon} stages ({soon})')
        chk(await pg.evaluate("document.querySelectorAll('.path .nd.comic .nem').length") == 3, '🎬 on the 3 Ghép truyện stages')
        ck = await pg.evaluate("clipsFor(SESSIONS.find(s=>s.id==='2-1')).filter(k=>!AUD[k])")
        chk(not ck, f'every clip of Bài 2 tập 1 is in the manifest {ck[:5]}')
        last, toast = await play_through(pg, '2-1')
        chk(last == ('album', 'Xong tập 1 ✓') and toast == 'Xong tập 1!', f'end of Bài 2 tập 1: {last} / {toast}')
        h = await pg.evaluate("[...document.querySelectorAll('.path .nd:not(.rev)')].slice(0,3).map(n=>n.classList.contains('lock')?'L':'o').join('')")
        chk(h == 'ooL', f'after tập 1: tập 2 open, Ôn tập still locked ({h})')
        chk(await pg.evaluate("Object.keys(st.stk).filter(w=>WORD_CH[w]===2).length") == 4, 'Bài 2 stickers collected')
        # whyNot: a wrong listening answer says why that option is wrong
        await pg.evaluate("st.sess['2-1']={i:0,done:1};const S=SESSIONS.find(s=>s.id==='2-1');play('2-1');SS('2-1').i=S.screens.findIndex(c=>c.t==='hear');renderScreen()"); await pg.wait_for_timeout(200)
        wn = await pg.evaluate("(()=>{const c=SESSIONS.find(s=>s.id==='2-1').screens[SS('2-1').i];const b=[...document.querySelectorAll('.opt')].find(x=>x.dataset.ok==='0');b.click();const fb=document.querySelector('.fb.bad');return [fb?fb.innerText:'',c.whyNot.filter(Boolean).map(x=>x.replace(/<[^>]+>/g,''))]})()")
        chk(any(w[:6] in wn[0] for w in wn[1]), f'wrong listening answer shows its whyNot: {wn[0][:80]!r}')
        await pg.evaluate('home()')
        last, toast = await play_through(pg, '2-2', wrongfirst=True)
        chk(toast == 'Xong tập 2!', f'end of Bài 2 tập 2 toast {toast}')
        h = await pg.evaluate("[...document.querySelectorAll('.path .nd:not(.rev)')].slice(0,4).map(n=>n.classList.contains('lock')?'L':'o').join('')")
        chk(h == 'oooL', f'after tập 2: Ôn tập open, next stage stays "Sắp ra mắt" ({h})')
        # mixed review 2-m1 without any Bài 1 word learned: only Bài 2 words, short
        await pg.evaluate("play('2-m1')"); await pg.wait_for_timeout(200)
        m = await pg.evaluate("SESSIONS.find(s=>s.id==='2-m1').screens.map(c=>[c.t,(c.w||[]).map(w=>WORD_CH[w]||1)])")
        chk(len(m) <= 7 and m[-1][0] == 'wrap' and all(c == 2 for x in m for c in x[1]), f'2-m1 for a learner without Bài 1: {len(m)} screens, Bài 2 words only')
        await pg.evaluate('home()')
        # the words tab and Ôn tập tổng hợp include Bài 2 words
        rv = await pg.evaluate("buildRevision().flatMap(c=>c.w||[]).filter(w=>WORD_CH[w]===2).length")
        chk(rv > 0, f'Ôn tập tổng hợp asks Bài 2 words ({rv})')
        # reload: the app remembers Bài 2 and loads it by itself
        await pg.reload(); await pg.wait_for_timeout(1000)
        chk(await pg.evaluate("[document.querySelector('.brand').textContent, CHN(2).loaded]") == ['留串钥匙给父母', True], 'reload: back on Bài 2, bundle loaded at start')
        chk(not pg.errs, f'no page errors {pg.errs[:3]}')
        await ctx.close()

        # 3) Bài 1 done + Bài 2 tập 1–2 done: Ôn tập mixes ~20% Bài 1 words; words tab per chapter; feedback label
        st2 = json.loads(json.dumps(FIX)); st2['ch'] = 2
        ctx, pg = await fresh(b, st2)
        await pg.wait_for_timeout(500)
        chk(await pg.evaluate('CHN(2).loaded'), 'learner with st.ch=2: Bài 2 loaded at start')
        for sid in ('2-1', '2-2'): await play_through(pg, sid)
        for n in range(3):
            await pg.evaluate("play('2-m1')"); await pg.wait_for_timeout(100)
            m = await pg.evaluate("SESSIONS.find(s=>s.id==='2-m1').screens.map(c=>[c.t,(c.w||[]).map(w=>WORD_CH[w]||1)])")
            qs = [x for x in m if x[0] not in ('wrap',)]
            ch1 = sorted(set(w for x in qs for w in x[1] if w == 1)); n1 = sum(1 for x in qs if 1 in x[1]); n2 = sum(1 for x in qs if 2 in x[1])
            chk(len(qs) == 6 and n1 == 2 and n2 >= 4, f'2-m1 run {n+1}: 6 question screens (with the match), 2 of them on Bài 1 words: {[x[0] for x in m]} {[x[1] for x in m]}')
            await pg.evaluate('home()')
        last, toast = await play_through(pg, '2-m1', wrongfirst=True)
        chk(toast == 'Xong buổi ôn!', f'2-m1 end toast {toast}')
        await pg.evaluate("home('words')"); await pg.wait_for_timeout(200)
        hh = await pg.evaluate("[...document.querySelectorAll('#home .h2')].map(e=>e.textContent)")
        chk(hh[:2] == ['Bài 1 · 爱的细节', 'Bài 2 · 留串钥匙给父母'], f'words tab grouped per chapter {hh}')
        chk(await pg.evaluate("labOf(SESSIONS.find(s=>s.id==='2-1'))") == 'Bài 2 · tập 1', 'feedback label "Bài 2 · tập 1"')
        # the last unit of a chapter says "Xong cả Bài 2!" (simulated: PATH cut to the stages that exist)
        await pg.evaluate("CHN(2).PATH=CHN(2).PATH.filter(e=>['2-1','2-2','2-m1'].includes(e.id));st.sess['2-2']={i:0,done:0};const S=SESSIONS.find(s=>s.id==='2-2');play('2-2');SS('2-2').i=S.screens.length-1;renderScreen()"); await pg.wait_for_timeout(200)
        nb = await pg.evaluate("document.getElementById('next').textContent"); await pg.click('#next'); await pg.wait_for_timeout(100)
        chk(nb == 'Hoàn thành Bài 2 ✓' and await pg.evaluate("document.getElementById('toast').textContent") == 'Xong cả Bài 2!', f'last unit of Bài 2: {nb}')
        # a comic stage (🎬) built from a PATH entry whose sentences all have story pictures: plays to the end
        await pg.evaluate("CHN(2).PATH.push({id:'2-gx',kind:'comic',title:'Ghép truyện thử',ids:[0,1]});home('path')"); await pg.wait_for_timeout(200)
        c = await pg.evaluate("(()=>{const S=SESSIONS.find(s=>s.id==='2-gx');return S?[S.comic,S.screens.map(x=>x.t).join(','),S.screens[0].ids.join(',')]:null})()")
        chk(c == [1, 'comic,wrap', '0,1'], f'comic stage made from PATH: {c}')
        nreal = await pg.evaluate("pathOf(2).filter(o=>o.e.kind==='comic'&&o.e.id!=='2-gx'&&o.S).length")
        chk(await pg.evaluate("document.querySelectorAll('.path .nd.comic:not(.soon)').length") == nreal + 1, 'its node is a 🎬 node, not "Sắp ra mắt"')
        last, toast = await play_through(pg, '2-gx')
        chk(toast == 'Ghép xong truyện!', f'comic stage end toast {toast}')
        chk(not pg.errs, f'no page errors {pg.errs[:3]}')
        await ctx.close()

        # 4) standalone file (audio and Bài 2 inlined, no network): Bài 2 works offline
        out = '/tmp/hsk5_standalone_test.html'
        r = subprocess.run([sys.executable, '../build.py', '--standalone', out], capture_output=True, text=True)
        chk('problems: 0' in r.stdout, 'build --standalone')
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}); pg = await ctx.new_page(); errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('file://' + out); await pg.wait_for_timeout(1500)
        await pg.evaluate("st.ch=2;home()"); await pg.wait_for_timeout(300)
        s = await pg.evaluate("[CHN(2).loaded, document.querySelector('.brand').textContent, AUD['我爷爷一辈子都在农村种地']?AUD['我爷爷一辈子都在农村种地'].slice(0,15):'']")
        chk(s[0] and s[1] == '留串钥匙给父母' and s[2] == 'data:audio/mpeg', f'standalone: Bài 2 inline with embedded audio {s}')
        chk(not errs, f'standalone: no page errors {errs[:3]}')
        await ctx.close(); await b.close()
    print('CH', 'OK' if not fails else 'FAIL', len(fails), 'failures', fails)
    sys.exit(1 if fails else 0)
asyncio.run(main())

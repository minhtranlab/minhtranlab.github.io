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

        # 1) migration: the old Bài 1 progress loads unchanged; on the new path of phiếu #5 (Ôn tập + 🎬 by the story) everything stays open
        ctx, pg = await fresh(b, FIX)
        st = await pg.evaluate('JSON.parse(localStorage.getItem("hsk5_story_v4"))')
        chk(st['sess'] == FIX['sess'], 'old Bài 1 progress (st.sess) kept as is')
        chk(st['stk'] == FIX['stk'] and st['wl'] == FIX['wl'] and st['test'] == FIX['test'] and st['log'] == FIX['log'] and st['res'] == FIX['res'], 'stickers, revision records, test score, log, results kept')
        P1 = '#chs-1 .path'
        h = await pg.evaluate(f"[document.querySelector('.brand').textContent, document.querySelector('.sub').textContent, document.querySelectorAll('{P1} .nd:not(.rev)').length, document.querySelectorAll('{P1} .nd.done').length, document.querySelectorAll('.chb').length, '', document.querySelectorAll('{P1} .nd.lock:not(.rev)').length, document.querySelectorAll('{P1} .nd.comic .nem').length]")
        chk(h[0] == 'HSK5' and h[1].startswith('Đang học Bài 1 ·'), f'home heading: HSK5, the chapter being learnt: {h[:2]}')
        chk(h[2] == 22 and h[3] == 13 and h[6] == 0 and h[7] == 4, f'Bài 1 new path: 22 stages, the 13 done before still done, none locked, 4 🎬 ({h[2]}, {h[3]}, locked {h[6]}, 🎬 {h[7]})')
        rd = await pg.evaluate("CHAPTERS.filter(c=>c.ready).map(c=>'Bài '+c.n).join('|')")
        bands = await pg.evaluate("[...document.querySelectorAll('.journey > section > .chband')].map(b=>b.querySelector('b').textContent.split(' ·')[0]).join('|')")
        chk(h[4] == 0 and bands == rd and rd.startswith('Bài 1|Bài 2|Bài 3'), f'phiếu #26: no "Bài 1 | Bài 2" buttons; one journey with a band per chapter in order ({bands})')
        order = await pg.evaluate('STUDY(1).map(s=>s.id)')
        chk(order == [1, 2, 3, 'o1', 'g1', 4, 'o2', 'g2', 5, 6, 'o3', 7, 8, 'o4', 'g3', 9, 10, 11, 'o5', 'g4', 't1', 'rd'], f'Bài 1 path order (phiếu #5) {order}')
        chk(await pg.evaluate("PATH1.filter(e=>e.kind==='comic').map(e=>e.ids.join(',')).join(' | ')") == '0,1,2,3,4,5,6,7,8 | 9,10,11 | 12,13,14,15,16,17,18,19,20 | 21,22,23,24,25,26,27,28,29', 'Ghép truyện g1–g4 cover sentences 0–8, 9–11, 12–20, 21–29')
        pg_ = await pg.evaluate("['g1','g2','g3','g4'].map(id=>SESSIONS.find(s=>s.id===id).screens.filter(c=>c.t==='comic').length)")
        chk(all(1 <= n <= 2 for n in pg_), f'each Ghép truyện is at most 2 pages {pg_}')
        cur = await pg.evaluate("(()=>{const n=document.querySelector('.path .nd.cur');return n?n.getAttribute('aria-label'):''})()")
        chk(cur.startswith('Ôn tập'), f'the pulsing "current" node is the first new stage after the furthest one done, not tập 1 ({cur})')
        chk(not any('ch2.js' in u or 'ch3.js' in u for u in pg.reqs), 'Bài 2 / Bài 3 bundles NOT downloaded while only Bài 1 is used')
        sum1 = await pg.evaluate('JSON.stringify(summary())')
        chk(json.loads(sum1)['units'] == 11 and json.loads(sum1)['words'] == 38, f'summary for the Sheet unchanged {sum1}')
        chk(await pg.evaluate("SESSIONS.find(s=>s.id===3).screens.every(c=>c.t!=='comic') && SESSIONS.find(s=>s.id===11).screens.every(c=>c.t!=='read')"), 'no comic in tập 3, no 30-sentence read in tập 11')
        # old progress coming back from the Google Sheet (server copy without new fields) merges without loss
        mg = await pg.evaluate('''(R)=>{const L=JSON.parse(JSON.stringify(st));L.sess['2-1']={i:0,done:1,b:0};L.tests={'2-t':{best:3,n:5}};mergeInto(L,R,null);
          return [Object.keys(L.sess).length, L.sess['2-1'].done, L.tests['2-t'].best, L.sess[11].done, L.test.best]}''', FIX)
        chk(mg == [20, 1, 3, 1, FIX['test']['best']], f'merge with an old server copy keeps Bài 1 and Bài 2 progress (19 old + 2-1; since phiếu #26 drawing the journey no longer makes empty records) {mg}')
        await ctx.close()

        # 1b) migration of a PARTLY done old save (done to tập 5 + m1, m2 on the old path; tập 6 was open there) -> new path opens up to tập 6
        part = json.loads(json.dumps(FIX)); part['sess'] = {k: v for k, v in FIX['sess'].items() if k in ('1', '2', '3', '4', '5', 'm1', 'm2')}; part['test'] = None
        ctx, pg = await fresh(b, part)
        lk = await pg.evaluate("pathOf(1).map((o,i)=>String(o.e.id)+(unlocked(pathOf(1),i)?'':'L')).join(' ')")
        chk(lk == '1 2 3 o1 g1 4 o2 g2 5 6 o3L 7L 8L o4L g3L 9L 10L 11L o5L g4L t1L rdL', f'old save done to tập 5 + m1/m2: everything up to tập 6 open, the rest locked ({lk})')
        cur = await pg.evaluate("(()=>{const n=document.querySelector('.path .nd.cur');return n?n.getAttribute('aria-label'):''})()")
        chk(cur.startswith('Tập 6'), f'current node = tập 6 ({cur})')
        wl0 = await pg.evaluate("JSON.stringify(st.wl)")
        await play_through(pg, 6)
        lk = await pg.evaluate("pathOf(1).map((o,i)=>String(o.e.id)+(unlocked(pathOf(1),i)?'':'L')).join(' ')")
        chk(lk.startswith('1 2 3 o1 g1 4 o2 g2 5 6 o3 7L'), f'after tập 6: the new Ôn tập (5–6) opens, tập 7 waits for it ({lk[:40]})')
        wl1 = json.loads(await pg.evaluate("JSON.stringify(st.wl)"))
        chk(all(k in wl1 for k in json.loads(wl0)), 'revision records of the old reviews kept (st.wl)')
        await ctx.close()

        # 1c) a learner of the NEW path only gets the new rule (the old chain stops at m1, which is never played any more)
        ctx, pg = await fresh(b)
        await pg.evaluate("[1,2,3].forEach(id=>st.sess[id]={i:0,done:1,b:0});save();home()")
        lk = await pg.evaluate("pathOf(1).map((o,i)=>String(o.e.id)+(unlocked(pathOf(1),i)?'':'L')).slice(0,7).join(' ')")
        chk(lk == '1 2 3 o1 g1L 4L o2L', f'new learner after tập 3: Ôn tập open, 🎬 and tập 4 locked ({lk})')
        await pg.evaluate("['o1','g1'].forEach(id=>st.sess[id]={i:0,done:1,b:0});save();home()")
        lk = await pg.evaluate("pathOf(1).map((o,i)=>String(o.e.id)+(unlocked(pathOf(1),i)?'':'L')).slice(0,9).join(' ')")
        chk(lk == '1 2 3 o1 g1 4 o2L g2L 5L', f'after Ôn tập + 🎬: tập 4 open, nothing more ({lk})')
        # an old device's copy arriving from the Sheet (old path, done to m2) merges in and opens the same stages
        await pg.evaluate("(R)=>{mergeInto(st,R,null);save();home()}", part)
        lk = await pg.evaluate("pathOf(1).map((o,i)=>String(o.e.id)+(unlocked(pathOf(1),i)?'':'L')).slice(0,11).join(' ')")
        chk(lk == '1 2 3 o1 g1 4 o2 g2 5 6 o3L', f'merged old copy from another device: open up to tập 6 ({lk})')
        await ctx.close()
        ctx, pg = await fresh(b, FIX)
        # the end of Bài 1 still says "Xong cả Bài 1!"
        await pg.evaluate("st.sess[11]={i:0,done:0};const S=SESSIONS.find(s=>s.id===11);play(11);SS(11).i=S.screens.length-1;renderScreen()"); await pg.wait_for_timeout(200)
        nb = await pg.evaluate("document.getElementById('next').textContent"); await pg.click('#next'); await pg.wait_for_timeout(100)
        chk(nb == 'Hoàn thành Bài 1 ✓' and await pg.evaluate("document.getElementById('toast').textContent") == 'Xong cả Bài 1!', f'end of Bài 1: button/toast ({nb})')
        await ctx.close()

        # 1d) phiếu #26: ONE journey through every chapter — opens on the stage being learnt (centered), the band of the chapter on screen
        #     sticks to the top, a tap on a band lists the chapters to jump to, "📍 Đang học" brings the stage back; same after a session
        # phiếu #30: the menu bar (.topbar) stays on top — "the middle" is the middle of what is visible BELOW it, bands stick right under it
        CENTER = "(()=>{const n=document.querySelector('.nd.cur'),H=document.querySelector('#home'),T=document.querySelector('.topbar');if(!n)return 9999;const r=n.getBoundingClientRect(),h=H.getBoundingClientRect(),t=T.getBoundingClientRect().bottom;return Math.round(Math.abs((r.top+r.height/2)-(t+h.bottom)/2))})()"
        BAND = "(n)=>Math.round(document.querySelector('#chs-'+n+' .chband').getBoundingClientRect().top-document.querySelector('.topbar').getBoundingClientRect().bottom)"
        HERE = "(()=>{const b=document.querySelector('.herebtn');return !!b&&!b.hidden})()"
        stj = json.loads(json.dumps(FIX)); stj['sess']['2-1'] = {'i': 0, 'done': 1, 'b': 0}; stj['ch'] = 2
        for lab, vp in (('phone', (390, 844)), ('pad', (820, 1180))):
            ctx, pg = await fresh(b, stj, vp)
            await pg.wait_for_timeout(600)
            r = await pg.evaluate("[(document.querySelector('.nd.cur')||{dataset:{}}).dataset.id, document.querySelector('.sub').textContent]")
            chk(r[0] == '2-2' and r[1].startswith('Đang học Bài 2'), f'[{lab}] opens on the stage being learnt: Bài 2 tập 2 {r}')
            d = await pg.evaluate(CENTER); chk(d <= 80, f'[{lab}] that stage is in the middle of the screen (off by {d} px)')
            chk(not await pg.evaluate(HERE), f'[{lab}] "📍 Đang học" hidden while the stage is on screen')
            bt = await pg.evaluate("[...document.querySelectorAll('.chband')].map(b=>b.textContent)")   # textContent: off-screen chapters are not rendered (content-visibility), innerText would be empty
            chk('Kiểm tra 13/16' in bt[0] and '/21 chặng' in bt[0] and '1/20 chặng' in bt[1] and bt[-1].startswith('🔒 Bài 4 · Sắp ra mắt'), f'[{lab}] bands: progress, test result, a locked "Sắp ra mắt" band at the end {bt}')
            chk(await pg.evaluate("!document.querySelector('#chs-3 .nd[data-id=\"3-1\"]').classList.contains('lock') && !CHN(3).loaded"), f'[{lab}] Bài 3 open at once, drawn without loading its bundle')
            await pg.screenshot(path=f'n_journey_{lab}.png')
            # scroll up into Bài 1: its band sticks to the top; the button appears
            await pg.evaluate("(()=>{const H=document.querySelector('#home');H.scrollTop=document.querySelector('#chs-1').offsetTop+1200})()"); await pg.wait_for_timeout(400)
            r = await pg.evaluate(BAND, 1)
            chk(-1 <= r <= 2, f'[{lab}] scrolled into Bài 1: its band sticks right under the menu bar ({r} px)')
            chk(await pg.evaluate(HERE), f'[{lab}] far from the stage being learnt: "📍 Đang học" shown')
            # tap the band: the list of chapters; jump to Bài 3
            await pg.click('#chs-1 .chband'); await pg.wait_for_selector('.chlist', timeout=3000)
            rows = await pg.evaluate("[...document.querySelectorAll('.chlist .chli')].map(e=>e.innerText.split('\\n')[0])")
            chk(rows == ['📍 Chặng đang học', 'Bài 1 · 爱的细节', 'Bài 2 · 留串钥匙给父母', 'Bài 3 · 人生有选择，一切可改变', 'Bài 4 · Sắp ra mắt'], f'[{lab}] tap on a band: list of chapters {rows}')
            await pg.click('.chlist .chli:nth-child(5)'); await pg.wait_for_timeout(500)
            r = [await pg.evaluate("!document.querySelector('.chlist')"), await pg.evaluate(BAND, 3)]
            chk(r[0] and -1 <= r[1] <= 30, f'[{lab}] "Bài 3" in the list jumps to the start of Bài 3, its band under the menu bar {r}')
            await pg.click('.herebtn'); await pg.wait_for_timeout(1200)
            d = await pg.evaluate(CENTER); chk(d <= 80 and not await pg.evaluate(HERE), f'[{lab}] "📍 Đang học" scrolls back to the stage (off by {d} px) and hides')
            if lab == 'phone':
                # after a session the journey opens on the NEXT stage, centered
                await play_through(pg, '2-2'); await pg.wait_for_timeout(400)
                r = await pg.evaluate("(document.querySelector('.nd.cur')||{dataset:{}}).dataset.id"); d = await pg.evaluate(CENTER)
                chk(r == '2-m1' and d <= 80, f'back home after Bài 2 tập 2: centered on the next stage {r} (off by {d} px)')
                # 20 chapters (simulated from Bài 3's PATH): drawn fast, scrolls as smoothly as with 3
                FR = """new Promise(r=>{const H=document.querySelector('#home');H.scrollTop=0;const ts=[];let last=performance.now(),k=0;
                  const step=()=>{const now=performance.now();ts.push(now-last);last=now;H.scrollTop+=60;if(++k<120)requestAnimationFrame(step);else{ts.shift();r(ts.reduce((a,b)=>a+b,0)/ts.length)}};requestAnimationFrame(step)})"""
                base = await pg.evaluate(FR)
                t20 = await pg.evaluate('''()=>{const base=CHAPTERS[2];CHAPTERS.pop();
                  for(let n=4;n<=20;n++){CH_SRC[n]='ch'+n+'.js';CHAPTERS.push({n,zh:base.zh,vi:'Bài giả lập '+n,ready:true,meta:1,PATH:base.PATH.map(e=>Object.assign({},e,{id:String(e.id).replace(/^3-/,n+'-'),units:e.units&&e.units.map(u=>String(u).replace(/^3-/,n+'-'))}))});}
                  CHAPTERS.push({n:21});const t0=performance.now();home();return performance.now()-t0}''')
                n20 = await pg.evaluate("[document.querySelectorAll('.journey > section').length, document.querySelectorAll('.nd').length]")
                f20 = await pg.evaluate(FR)
                chk(n20[0] == 20 and t20 < 400, f'20 chapters: {n20[0]} sections / {n20[1]} nodes drawn in {t20:.0f} ms')
                chk(f20 <= max(25, base * 1.6), f'20 chapters: scrolling {f20:.1f} ms per frame (3 chapters: {base:.1f} ms)')
                chk(not any('ch4.js' in u or 'ch20.js' in u for u in pg.reqs), '20 chapters: no bundle of the simulated chapters requested just to draw them')
            chk(not pg.errs, f'[{lab}] no page errors {pg.errs[:3]}')
            await ctx.close()

        # 1e) phiếu #30: ONE compact menu bar (HSK5 + goal ring + ⚙️, then the tabs) stays on top while scrolling, on all 3 tabs;
        #     the Bài N band sticks right under it; ⚙️ opens "Cài đặt" with the buttons that used to sit at the end of the page
        TB = "(()=>{const T=document.querySelector('.topbar'),H=document.querySelector('#home'),t=T.getBoundingClientRect(),h=H.getBoundingClientRect(),tabs=[...T.querySelectorAll('.tab')].map(e=>{const r=e.getBoundingClientRect();return r.top>=h.top-1&&r.bottom<=t.bottom+1&&document.elementFromPoint(r.left+r.width/2,r.top+r.height/2)===e});return {top:Math.round(t.top-h.top),hgt:Math.round(t.height),tabs,setb:!!T.querySelector('.setb'),goal:!!T.querySelector('.goal'),scrolled:H.scrollTop,hs:H.scrollWidth-H.clientWidth}})()"
        for lab, vp in (('phone', (390, 844)), ('pad', (820, 1180))):
            ctx, pg = await fresh(b, stj, vp); await pg.wait_for_timeout(500)
            await pg.evaluate("document.querySelector('#home').scrollTop=0"); await pg.wait_for_timeout(300)
            t = await pg.evaluate(TB)
            chk(t['top'] == 0 and t['hgt'] <= 100 and all(t['tabs']) and len(t['tabs']) == 3 and t['setb'] and t['goal'] and t['hs'] <= 0, f'[{lab}] top of the page: one bar HSK5 + goal + ⚙️ + 3 tabs, {t["hgt"]} px high {t}')
            chk(not await pg.evaluate("[...document.querySelectorAll('#home button')].some(b=>/^(Pinyin|Tự đọc to|Mở hết các màn|Xóa tiến độ)/.test(b.textContent))"), f'[{lab}] no settings buttons left on the page itself')
            await pg.screenshot(path=f'n_topbar_{lab}_top.png')
            await pg.evaluate("(()=>{const H=document.querySelector('#home');H.scrollTop=document.querySelector('#chs-3').offsetTop+300})()"); await pg.wait_for_timeout(400)
            t = await pg.evaluate(TB); r = await pg.evaluate(BAND, 3)
            chk(t['top'] == 0 and all(t['tabs']) and t['scrolled'] > 1000 and await pg.evaluate("document.querySelector('.topbar').classList.contains('tbsc')"), f'[{lab}] scrolled to Bài 3: the bar and its tabs still on screen and tappable {t}')
            chk(-1 <= r <= 2, f'[{lab}] scrolled to Bài 3: the "Bài 3" band right under the bar, not covered ({r} px)')
            cov = await pg.evaluate("(()=>{const b=document.querySelector('#chs-3 .chband'),r=b.getBoundingClientRect();return b.contains(document.elementFromPoint(r.left+r.width/2,r.top+r.height/2))})()")
            chk(cov, f'[{lab}] the Bài 3 band is tappable (nothing on top of it)')
            await pg.screenshot(path=f'n_topbar_{lab}_b3.png')
            # the other tabs: the bar stays too
            for k, name in (('words', 'Từ vựng'), ('log', 'Nhật ký')):
                await pg.click(f'.topbar .tab:has-text("{name}")'); await pg.wait_for_timeout(300)
                await pg.evaluate("(()=>{const H=document.querySelector('#home');H.scrollTop=H.scrollHeight})()"); await pg.wait_for_timeout(250)
                t = await pg.evaluate(TB); on = await pg.evaluate("document.querySelector('.topbar .tab.on').textContent")
                chk(on == name and t['top'] == 0 and all(t['tabs']), f'[{lab}] tab {name}: the bar stays on top (scrolled {t["scrolled"]} px) {t}')
            await pg.click('.topbar .tab:has-text("Hành trình")'); await pg.wait_for_timeout(400)
            if lab == 'phone':
                # ⚙️ → Cài đặt: every button works
                py0, au0 = await pg.evaluate("[!!st.py, !!st.auto]")
                await pg.click('.topbar .setb'); await pg.wait_for_selector('.setsheet', timeout=2000)
                names = await pg.evaluate("[...document.querySelectorAll('.setsheet .setl button')].map(b=>b.textContent.split(':')[0].replace(/ \\(\\d+\\)$/,''))")
                chk(names == ['Pinyin', 'Tự đọc to', '🔊 Thử âm thanh', '💬 Góp ý', 'Mở hết các màn', 'Xóa tiến độ'], f'⚙️ opens Cài đặt with {names}')
                await pg.screenshot(path='n_settings_phone.png')
                await pg.click('.setsheet button:has-text("Pinyin")'); await pg.click('.setsheet button:has-text("Tự đọc to")')
                r = await pg.evaluate("[!!st.py, !!st.auto, document.querySelector('.setsheet .setl').innerText]")
                chk(r[0] != py0 and r[1] != au0 and ('bật' if r[0] else 'tắt') in r[2].split('\n')[0], f'Pinyin / Tự đọc to switch and show their state {r}')
                await pg.click('.setsheet button:has-text("Thử âm thanh")'); await pg.wait_for_timeout(1500)
                chk(len(await pg.evaluate("document.getElementById('toast').textContent")) > 5, 'Thử âm thanh says whether sound came out')
                await pg.click('.setsheet button:has-text("Góp ý")'); await pg.wait_for_timeout(300)
                chk(not await pg.query_selector('.setsheet') and 'Góp ý' in await pg.evaluate("document.body.innerText"), 'Góp ý closes Cài đặt and opens the feedback form')
                await pg.keyboard.press('Escape'); await pg.evaluate("document.querySelectorAll('.mback').forEach(e=>e.remove())")
                await pg.click('.topbar .setb'); await pg.click('.setsheet button:has-text("Mở hết các màn")'); await pg.wait_for_timeout(400)
                r = await pg.evaluate("[!!st.openAll, !document.querySelector('.setsheet'), document.querySelectorAll('#chs-2 .path .nd.lock').length]")
                chk(r[0] and r[1] and r[2] == 0, f'Mở hết các màn: on, sheet closed, no locked stage in Bài 2 {r}')
                await pg.click('.topbar .setb'); await pg.click('.setsheet button:has-text("Mở hết các màn")'); await pg.wait_for_timeout(400)
                await pg.click('.topbar .setb'); await pg.click('.setsheet button:has-text("Xóa tiến độ")')
                r = await pg.evaluate("[Object.keys(st.sess).length, document.querySelector('.setsheet button.arm')&&document.querySelector('.setsheet button.arm').textContent]")
                chk(r[0] > 0 and r[1] == 'Bấm lần nữa để xóa', f'Xóa tiến độ: first tap only asks again {r}')
                await pg.click('.setsheet button.arm'); await pg.wait_for_timeout(400)
                r = await pg.evaluate("[Object.keys(st.sess).length, !document.querySelector('.setsheet'), !!document.querySelector('.topbar')]")
                chk(r[0] == 0 and r[1] and r[2], f'Xóa tiến độ: second tap clears progress and closes {r}')
                await pg.click('.topbar .setb'); await pg.click('.setsheet button:has-text("Đóng")')
                chk(not await pg.query_selector('.setsheet'), 'Đóng closes Cài đặt')
            chk(not pg.errs, f'[{lab}] no page errors {pg.errs[:3]}')
            await ctx.close()

        # 2) a new learner: Bài 2 opens right away (Bài 1 not done), lazily loaded, unlocks by its PATH
        ctx, pg = await fresh(b)
        chk(not any('ch2.js' in u or 'ch3.js' in u for u in pg.reqs), 'fresh start: Bài 2 / Bài 3 not downloaded yet')
        pre = await pg.evaluate("[...document.querySelectorAll('#chs-2 .path .nd:not(.rev)')].map(n=>n.classList.contains('lock')?'L':'o').join('')")
        chk(pre.startswith('oL') and len(pre) == await pg.evaluate("CH_META[2].PATH.length"), f'Bài 2 drawn from CH_META before its bundle is loaded: first stage open ({pre[:6]}…)')
        await pg.evaluate("document.querySelector('#chs-2 .nd[data-id=\"2-1\"]').scrollIntoView({block:'center'})"); await pg.wait_for_timeout(200)
        await pg.click('#chs-2 .nd[data-id="2-1"]'); await pg.wait_for_function("typeof sid!=='undefined'&&sid==='2-1'", timeout=8000)
        chk(any('ch2.js?v=' in u for u in pg.reqs), 'tapping Bài 2 tập 1 downloads hsk5/ch2.js (versioned) and opens it')
        await pg.evaluate('home()'); await pg.wait_for_timeout(300)
        h = await pg.evaluate("[document.querySelector('#chs-2 .chband b').textContent, document.querySelector('#chs-2 .chband').textContent, [...document.querySelectorAll('#chs-2 .path .nd:not(.rev)')].map(n=>(n.classList.contains('lock')?'L':'o')+(n.classList.contains('soon')?'s':'')+(n.classList.contains('comic')?'c':'')).join(' ')]")
        chk(h[0] == 'Bài 2 · 留串钥匙给父母' and '0/20 chặng' in h[1], f'Bài 2 band {h[:2]}')
        # expected nodes from the content (phiếu #12: more stages arrive over time): first open, the rest locked; "s" = no content yet; "c" = 🎬
        exp = await pg.evaluate("pathOf(2).map((o,i)=>(i?'L':'o')+(o.S?'':'s')+(o.e.kind==='comic'?'c':'')).join(' ')")
        nsoon = exp.count('s')
        chk(h[2] == exp and exp.startswith('o L L'), f'Bài 2 path: tập 1 open, the rest locked, {nsoon} stages "Sắp ra mắt", 3 🎬 ({h[2]} / {exp})')
        soon = await pg.evaluate("[...document.querySelectorAll('#chs-2 .path .nl small.soonl')].length")
        chk(soon == nsoon, f'"Sắp ra mắt" under {nsoon} stages ({soon})')
        chk(await pg.evaluate("document.querySelectorAll('#chs-2 .path .nd.comic .nem').length") == 3, '🎬 on the 3 Ghép truyện stages')
        ck = await pg.evaluate("clipsFor(SESSIONS.find(s=>s.id==='2-1')).filter(k=>!AUD[k])")
        chk(not ck, f'every clip of Bài 2 tập 1 is in the manifest {ck[:5]}')
        last, toast = await play_through(pg, '2-1')
        chk(last == ('album', 'Xong tập 1 ✓') and toast == 'Xong tập 1!', f'end of Bài 2 tập 1: {last} / {toast}')
        h = await pg.evaluate("[...document.querySelectorAll('#chs-2 .path .nd:not(.rev)')].slice(0,3).map(n=>n.classList.contains('lock')?'L':'o').join('')")
        chk(h == 'ooL', f'after tập 1: tập 2 open, Ôn tập still locked ({h})')
        chk(await pg.evaluate("Object.keys(st.stk).filter(w=>WORD_CH[w]===2).length") == 4, 'Bài 2 stickers collected')
        # whyNot: a wrong listening answer says why that option is wrong
        await pg.evaluate("st.sess['2-1']={i:0,done:1};const S=SESSIONS.find(s=>s.id==='2-1');play('2-1');SS('2-1').i=S.screens.findIndex(c=>c.t==='hear');renderScreen()"); await pg.wait_for_timeout(200)
        wn = await pg.evaluate("(()=>{const c=SESSIONS.find(s=>s.id==='2-1').screens[SS('2-1').i];const b=[...document.querySelectorAll('.opt')].find(x=>x.dataset.ok==='0');b.click();const fb=document.querySelector('.fb.bad');return [fb?fb.innerText:'',c.whyNot.filter(Boolean).map(x=>x.replace(/<[^>]+>/g,''))]})()")
        chk(any(w[:6] in wn[0] for w in wn[1]), f'wrong listening answer shows its whyNot: {wn[0][:80]!r}')
        await pg.evaluate('home()')
        last, toast = await play_through(pg, '2-2', wrongfirst=True)
        chk(toast == 'Xong tập 2!', f'end of Bài 2 tập 2 toast {toast}')
        h = await pg.evaluate("[...document.querySelectorAll('#chs-2 .path .nd:not(.rev)')].slice(0,4).map(n=>n.classList.contains('lock')?'L':'o').join('')")
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
        r = await pg.evaluate("[document.querySelector('.sub').textContent, CHN(2).loaded, (document.querySelector('.nd.cur')||{dataset:{}}).dataset.id]")
        chk(r[0].startswith('Đang học Bài 2') and r[1] and r[2] == '2-m1', f'reload: the journey opens on Bài 2 (its next stage 2-m1), bundle loaded at start {r}')
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
        chk(await pg.evaluate("document.querySelectorAll('.path .nd.comic[data-id=\"2-gx\"]:not(.soon)').length") == 1, 'its node is a 🎬 node, not "Sắp ra mắt"')
        last, toast = await play_through(pg, '2-gx')
        chk(toast == 'Ghép xong truyện!', f'comic stage end toast {toast}')
        chk(not pg.errs, f'no page errors {pg.errs[:3]}')
        await ctx.close()

        # 3b) phiếu #13: two-voice dialogue (hear + lines), "Thẻ mở rộng" cards before a mixed review, HSK5-style items in the chapter test
        ctx, pg = await fresh(b, st2)
        await pg.evaluate('loadCh(2)')
        q = await pg.evaluate("CHN(2).TESTBANK.hsk.filter(x=>x.kind==='nghe'&&x.lines)[0]")
        chk(bool(q) and [l['v'] for l in q['lines']] == ['f', 'm'], f'nghe items are dialogues f → m: {q and q["lines"]}')
        await pg.evaluate("(q)=>{st.auto=1;SESSIONS.push({id:'2-zz',ch:2,title:'thử',words:[],screens:[q,{t:'wrap'}]});st.sess['2-zz']={i:0,done:0};window.__plays.length=0;play('2-zz')}", q)
        k1, k2 = await pg.evaluate("(q)=>q.lines.map(l=>(l.v==='m'?'M:':'F:')+akey(l.zh))", q)
        await pg.wait_for_function("(k)=>window.__plays.includes(k)", arg=k2, timeout=15000)
        p1 = await pg.evaluate("window.__plays.slice()")
        chk(p1.index(k1) < p1.index(k2), f'auto: female turn then male turn {p1}')
        pr = await pg.evaluate("[document.querySelector('#stage .prompt').textContent, [...document.querySelectorAll('#stage .ln.dlg .dwho')].map(e=>e.textContent).join(',')]")
        chk(pr[0] == 'Nghe đoạn hội thoại rồi chọn ý đúng:' and pr[1].startswith('Nữ,Nam'), f'dialogue prompt and hidden turns marked Nữ/Nam {pr}')
        await pg.evaluate("window.__plays.length=0"); await pg.click('#stage .lr .sb')
        await pg.wait_for_function("(k)=>window.__plays.includes(k)", arg=k2, timeout=15000)
        chk(await pg.evaluate("window.__plays.slice()") == [k1, k2], 'the 🔊 button replays the whole exchange')
        bad = await pg.evaluate("[...document.querySelectorAll('.opt')].filter(x=>x.dataset.ok==='0').map(x=>x.textContent)")
        await pg.click(f'.opt[data-ok="0"] >> nth=0'); await pg.wait_for_timeout(150)
        fb = await pg.evaluate("document.querySelector('.fb.bad').innerText")
        wn = q['whyNot'][q['opts'].index(bad[0])]
        chk(wn[:4] in fb or wn.replace('<b>', '')[:4] in fb, f'wrong option shows its whyNot: {fb[:60]!r}')
        await pg.evaluate("window.__plays.length=0"); await pg.click('.opt[data-ok="1"]')
        await pg.wait_for_function("(k)=>window.__plays.includes(k)", arg=k2, timeout=15000)
        rb = await pg.evaluate("[[...document.querySelectorAll('.reveal .dl')].map(d=>d.querySelector('.dwho').textContent+':'+d.querySelector('.zh').innerText.replace(/[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü\\s]/g,'')).join(' | '), document.querySelector('.reveal .rvv2').textContent, window.__plays.slice()]")
        chk(rb[0] == f"Nữ:{q['lines'][0]['zh']} | Nam:{q['lines'][1]['zh']}" and rb[1] == q['opts'][0] and rb[2][:2] == [k1, k2],
            f'answer block: each turn on its own line with who speaks, the meaning, and the exchange read again: {rb}')
        await pg.evaluate('home()')
        # ext cards first in Ôn tập 2, 3, 5; not counted in max
        for sid in ('2-m2', '2-m3', '2-m5'):
            r = await pg.evaluate(f'''(()=>{{const S=SESSIONS.find(s=>s.id==='{sid}');Object.keys(MEAN).filter(k=>W[k]).forEach(wrec);play('{sid}');
              return [S.ext.length,S.max,S.screens.length,JSON.stringify(S.screens.slice(0,S.ext.length).map(c=>c.zh||c.full))===JSON.stringify(S.ext.map(c=>c.zh||c.full)),S.ext.map(c=>c.t).join(',')]}})()''')
            chk(r[0] >= 1 and r[3] and r[2] == r[0] + r[1] + 1, f'{sid}: {r[0]} "Thẻ mở rộng" card(s) ({r[4]}) first, then {r[1]} review screens + end ({r[2]} screens)')
            await pg.evaluate('home()')
        # chapter test: one item of each kind, random each time
        seen = {'nghe': set(), 'doc': set(), 'viet': set()}; okk = True
        for n in range(12):
            ks = await pg.evaluate("buildTest(SESSIONS.find(s=>s.id==='2-t')).filter(q=>q.kind).map(q=>q.kind+'|'+(q.full||q.zh||q.lines[0].zh))")
            okk = okk and sorted(k.split('|')[0] for k in ks) == ['doc', 'nghe', 'viet']
            for k in ks: seen[k.split('|')[0]].add(k)
        chk(okk and all(len(v) >= 2 for v in seen.values()), f'2-t: exactly one nghe / doc / viet item each time, chosen at random ({ {k: len(v) for k, v in seen.items()} } different items in 12 tests)')
        chk(await pg.evaluate("buildTest(SESSIONS.find(s=>s.id==='t1')).every(q=>!q.kind)"), 'Bài 1 test unchanged (no HSK items)')
        chk(not pg.errs, f'no page errors {pg.errs[:3]}')
        await ctx.close()

        # 4) standalone file (audio and Bài 2 inlined, no network): Bài 2 works offline
        out = '/tmp/hsk5_standalone_test.html'
        r = subprocess.run([sys.executable, '../build.py', '--standalone', out], capture_output=True, text=True)
        chk('problems: 0' in r.stdout, 'build --standalone')
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}); pg = await ctx.new_page(); errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('file://' + out); await pg.wait_for_timeout(1500)
        await pg.evaluate("home()"); await pg.wait_for_timeout(300)
        s = await pg.evaluate("[CHN(2).loaded, document.querySelector('#chs-2 .chband b .cbz').textContent, AUD['我爷爷一辈子都在农村种地']?AUD['我爷爷一辈子都在农村种地'].slice(0,15):'']")
        chk(s[0] and s[1] == '留串钥匙给父母' and s[2] == 'data:audio/mpeg', f'standalone: Bài 2 inline with embedded audio {s}')
        chk(not errs, f'standalone: no page errors {errs[:3]}')
        await ctx.close(); await b.close()
    print('CH', 'OK' if not fails else 'FAIL', len(fails), 'failures', fails)
    sys.exit(1 if fails else 0)
asyncio.run(main())

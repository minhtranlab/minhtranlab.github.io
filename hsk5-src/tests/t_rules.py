"""General UI rules (see HANDOFF §12): after every answer -> reveal block with replay, Pinyin, tappable words, translation, no 'Đúng!' text,
no auto-advance; audio failure shows a toast; scenes of cloze questions match their sentence."""
import asyncio
from playwright.async_api import async_playwright
BASE = 'http://127.0.0.1:8765/index.html'
async def start(pg, qs):
    await pg.evaluate('''(qs)=>{{const i=SESSIONS.findIndex(x=>x.id===98);if(i>=0)SESSIONS.splice(i,1);}SESSIONS.push({id:98,title:'t',sub:'',thumb:'cup',words:[],screens:qs.concat([{t:'wrap'}])});st.sess[98]={i:0,done:0};play(98);}''', qs)
async def main():
    fails = []
    def chk(c, m):
        if not c: fails.append(m); print('FAIL', m)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=['--no-sandbox', '--autoplay-policy=no-user-gesture-required'])
        pg = await (await b.new_context(viewport={'width': 400, 'height': 860}, has_touch=True)).new_page(); errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto(BASE); await pg.wait_for_timeout(500)
        # 1) every question type shows a reveal block with 🔊 + Pinyin and tappable words after answering
        sample = await pg.evaluate('''()=>{const out={};const all=Object.values(QB).flat().concat(TESTBANK.tf,TESTBANK.spot);
          for(const q of all){ if(!out[q.t]) out[q.t]=q; } return out}''')
        ids = {'order': 0, 'hear': 0, 'mc': 0, 'tf': 0, 'spot': 0}
        for t in ['order', 'hear', 'mc', 'tf', 'spot', 'choose', 'type']:
            q = sample.get(t) or (await pg.evaluate('genQ(Object.keys(MEAN)[0],"z2m")') if t == 'choose' else await pg.evaluate('genQ(Object.keys(MEAN)[0],"tw")') if t == 'type' else None)
            if not q: print('no sample for', t); continue
            await pg.goto(BASE); await pg.wait_for_timeout(300)
            await pg.evaluate('(q)=>{st.wl["评委"]=st.wl["评委"]||{t:Date.now(),due:0};}', q)
            await start(pg, [q]); await pg.wait_for_timeout(500)
            # solve
            if t == 'order':
                for c in q['chunks']: await (await pg.query_selector(f'.obank .tile[data-t="{c}"]')).click()
            elif t in ('hear', 'mc', 'choose'):
                await (await pg.query_selector('.opt[data-ok="1"]')).click()
            elif t == 'tf':
                await (await pg.query_selector('.opt[data-ok="1"]')).click()
            elif t == 'spot':
                tiles = await pg.query_selector_all('.olin .tile'); await tiles[q['bad']].click()
            elif t == 'type':
                await pg.fill('.tin input', q['zh']); await pg.click('.tin button')
            await pg.wait_for_timeout(500)
            if t == 'mc':
                chk(await pg.query_selector('#mcpy') is not None, 'mc: Pinyin button after answer')
                txt = await pg.inner_text('#stage'); chk('Đúng!' not in txt, 'mc: no "Đúng!" text')
                await pg.click('#mcpy'); chk(await pg.evaluate("document.querySelector('#mcs').classList.contains('showpy')"), 'mc: pinyin toggles')
            else:
                rv = await pg.query_selector('.reveal'); chk(rv is not None, f'{t}: reveal block after answer')
                if rv:
                    await pg.click('.reveal .rpy'); chk(await pg.evaluate("document.querySelector('.reveal .rz').classList.contains('showpy')"), f'{t}: Pinyin toggles')
                    vis = await pg.evaluate("(()=>{const r=document.querySelector('.reveal .w rt');return r?getComputedStyle(r).display:'none'})()")
                    chk(vis != 'none', f'{t}: pinyin visible after tapping Pinyin ({vis})')
                    w = await pg.query_selector('.reveal .w')
                    if w: await w.click(); await pg.wait_for_timeout(200); chk(await pg.evaluate("document.getElementById('sheet').classList.contains('open')"), f'{t}: word opens meaning sheet')
                    plays = await pg.evaluate('window.__plays.length'); chk(plays >= 1, f'{t}: answer auto-played')
            chk(await pg.evaluate("!document.querySelector('#next').disabled"), f'{t}: Next enabled')
            chk(await pg.evaluate("SS(98).i===0"), f'{t}: no auto-advance')
        # 2) audio failure -> toast, no crash
        await pg.goto(BASE); await pg.wait_for_timeout(300)
        r = await pg.evaluate('''async()=>{ac().resume=()=>Promise.resolve();Object.defineProperty(ac(),'state',{get:()=>'suspended'});const k=Object.keys(AUD).find(x=>!x.includes('|'));
          window.Audio=function(){this.play=()=>Promise.reject(new Error('x'));this.pause=()=>{}};const ok=await speak(k);return [ok,document.getElementById('toast').textContent]}''')
        chk(r[0] is False and 'âm thanh' in r[1], f'audio failure toast: {r}')
        # 3) scenes of the cloze questions match
        sc = await pg.evaluate("QB['如何'].filter(q=>q.t==='mc').map(q=>q.scene).concat(QB['爱护'].filter(q=>q.t==='mc').map(q=>q.scene))")
        chk('how' not in sc[:1] and 'garden' not in sc[1:], f'cloze scenes: {sc}')
        chk(not errs, f'page errors {errs}')
        await b.close()
    print('RULES', 'FAIL' if fails else 'OK', fails)
asyncio.run(main())

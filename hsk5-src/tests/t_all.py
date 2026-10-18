import asyncio, sys, json
from playwright.async_api import async_playwright
SHOT_SIDS = set(sys.argv[1].split(',')) if len(sys.argv) > 1 else set()
FIRST_ONLY = False
async def solve(pg, sid, i, t, wrongfirst):
    cur = f'SESSIONS.find(x=>String(x.id)==="{sid}").screens[{i}]'
    if t == 'word':
        for c in await pg.query_selector_all('.chip2'): await c.click()
    elif t == 'story':
        for tb in await pg.query_selector_all('.tr'): await tb.click()
    elif t == 'pick':
        opts = await pg.evaluate(f'{cur}.opts.map(o=>!!o.ok)'); btns = await pg.query_selector_all('.pk')
        if wrongfirst: await btns[[k for k, o in enumerate(opts) if not o][0]].click()
        await btns[opts.index(True)].click()
    elif t == 'match':
        ids = await pg.evaluate(f'{cur}.w')
        for k, idw in enumerate(ids):
            L = await pg.query_selector(f'.mw[data-id="{idw}"]'); await L.click()
            if k == 0:
                wr = await pg.query_selector(f'.mm:not([data-id="{idw}"])'); await wr.click(); await pg.wait_for_timeout(560)
            await (await pg.query_selector(f'.mm[data-id="{idw}"]')).click()
    elif t == 'tf':
        opts = await pg.query_selector_all('.opt')
        oks = [o for o in opts if await o.get_attribute('data-ok') == '1']; bads = [o for o in opts if await o.get_attribute('data-ok') == '0']
        await (bads[0] if wrongfirst else oks[0]).click()
    elif t == 'predict':
        await (await pg.query_selector('.opt')).click()
    elif t == 'spot':
        bad = await pg.evaluate(f'{cur}.bad'); tiles = await pg.query_selector_all('.olin .tile')
        if wrongfirst: await tiles[[k for k in range(len(tiles)) if k != bad][0]].click()
        await tiles[bad].click()
    elif t in ('hear', 'mc', 'choose'):
        opts = await pg.query_selector_all('.opt')
        oks = [o for o in opts if await o.get_attribute('data-ok') == '1']; bads = [o for o in opts if await o.get_attribute('data-ok') == '0']
        assert oks, (sid, i, t, 'no correct option')
        if wrongfirst and bads: await bads[0].click()
        await oks[0].click()
    elif t == 'order':
        for c in await pg.evaluate(f'{cur}.chunks'):
            tl = await pg.query_selector(f'.obank .tile[data-t="{c}"]'); assert tl, (sid, i, c); await tl.click()
    elif t == 'type':
        z = await pg.evaluate(f'{cur}.zh'); await pg.fill('.tin input', z); await pg.click('.tin button')
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=['--no-sandbox', '--autoplay-policy=no-user-gesture-required'])
        ctx = await b.new_context(viewport={'width': 820, 'height': 1180}, has_touch=True)
        pg = await ctx.new_page(); errs = []
        pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
        await pg.goto('http://127.0.0.1:8765/index.html'); await pg.wait_for_timeout(500)
        await pg.screenshot(path='a_home.png')
        miss = await pg.evaluate('''()=>{const m=[];const chk=(z,v)=>{const k=akey(z);if(!k)return;const key=v==='m'?'M|'+k:k;if(!AUD[key])m.push(key)};
          const scan=s=>s.screens.forEach(c=>{(c.lines||[]).forEach(l=>chk(l.zh,l.v));if(c.t==='pick')chk(c.zh,'f');if(c.t==='hear')chk(c.s,'f');if(c.t==='order'||c.t==='type')chk(c.zh,'f');if(c.t==='mc')chk(c.full,'f');if(c.t==='tf')chk(c.zh,'f');if(c.t==='spot')chk(c.full,'f');if(c.t==='album')(c.say||[]).forEach(x=>chk(x.zh,'m'))});
          SESSIONS.forEach(scan); Object.values(QB).flat().concat(TESTBANK.tf,TESTBANK.spot).forEach(c=>scan({screens:[c]}));
          WORDS.forEach(w=>{chk(w.id,'m');if(!AUD['MS|'+akey(w.id)])m.push('MS|'+w.id);w.ex.forEach(e=>chk(e,'m'))});
          return [...new Set(m)]}''')
        print('missing clips', len(miss), miss[:40])
        order = await pg.evaluate('STUDY().map(s=>s.id)')
        print('order', order)
        total = 0
        for sid in order:
            await pg.evaluate(f'play({json.dumps(sid)})'); await pg.wait_for_timeout(150)
            n = await pg.evaluate(f'SESSIONS.find(x=>x.id===sid).screens.length'); total += n
            mix = await pg.evaluate('!!SESSIONS.find(x=>x.id===sid).mix')
            types = []
            k = 0; retries = 0
            while True:
                i = await pg.evaluate('SS(sid).i')
                t = await pg.evaluate(f'SESSIONS.find(x=>x.id===sid).screens[{i}].t'); types.append(t)
                if await pg.evaluate(f'!!SESSIONS.find(x=>x.id===sid).screens[{i}]._retry'): retries += 1
                await solve(pg, sid, i, t, wrongfirst=(k % 3 == 1)); k += 1
                await pg.wait_for_timeout(120)
                if str(sid) in SHOT_SIDS: await pg.screenshot(path=f'a_{sid}_{i:02d}_{t}.png')
                dis = await pg.evaluate('document.getElementById("next").disabled'); assert not dis, (sid, i, t)
                await pg.click('#next'); await pg.wait_for_timeout(100)
                if await pg.evaluate('!!document.getElementById("home")'): break
                assert k < 60, (sid, 'runaway')
            print(sid, n, 'screens', ''.join(x[0] for x in types), 'retries', retries)
        await pg.screenshot(path='a_home_end.png', full_page=True)
        print('plays', len(await pg.evaluate('__plays')), 'errors', errs)
        print(await pg.evaluate('JSON.stringify({stk:Object.keys(st.stk).length,done:Object.entries(st.sess).map(([k,x])=>k+":"+x.done).join(" "),wl:Object.keys(st.wl).length})'))
        await b.close()
asyncio.run(main())

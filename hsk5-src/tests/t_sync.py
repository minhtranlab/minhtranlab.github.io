import asyncio, json, urllib.request
from playwright.async_api import async_playwright
API='http://127.0.0.1:8766/exec'
def dump(): return json.load(urllib.request.urlopen('http://127.0.0.1:8766/dump'))
CODE=open('/tmp/mock.log').read().split('CODES ')[1].split('\n')[0].split(',')[0]
CODE2=open('/tmp/mock.log').read().split('CODES ')[1].split('\n')[0].split(',')[1]
async def newctx(b, api=True):
    ctx=await b.new_context(viewport={'width':820,'height':1180},has_touch=True)
    if api: await ctx.route('**/config.js', lambda r: r.fulfill(body=f"window.HSK5={{api:'{API}'}};", content_type='application/javascript'))
    pg=await ctx.new_page(); errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto('http://127.0.0.1:8765/index.html'); await pg.wait_for_timeout(700); return ctx,pg,errs
async def pill(pg): return await pg.evaluate("document.querySelector('.acct')&&document.querySelector('.acct').textContent")
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium',args=['--no-sandbox'])
        # --- no API configured: nothing account-related shows
        ctx0,pg0,e0=await newctx(b, api=False); assert await pill(pg0) is None and not await pg0.query_selector('.acin'); print('no-api mode ok'); await ctx0.close()
        # --- A: first-run login prompt
        ctxA,A,eA=await newctx(b); assert await A.query_selector('.acin'), 'login modal should open on first run'
        await A.fill('.acin','WRONG1'); await A.click('.acg'); await A.wait_for_timeout(600); print('bad code ->', await A.inner_text('.acm'))
        await A.fill('.acin',CODE.lower()); await A.click('.acg'); await A.wait_for_timeout(1500)
        print('pill after login:', await pill(A))
        # progress on A
        await A.evaluate("play(1)"); await A.wait_for_timeout(200)
        await A.evaluate("SS(1).i=4; SS(1).b=4; st.stk['电台']=1; st.fb=[{at:new Date().toISOString(),where:'tập 1 · màn 5/12',cat:'Âm thanh lạ',msg:'câu này đọc nhanh quá',ctx:'x'}]; save()")
        await A.evaluate("home()"); await A.wait_for_timeout(6500)
        d=dump(); print('server State rows',d['State'],'| feedback rows',len(d['Feedback']),'| student row',[r for r in d['Students'] if r[0]==CODE][0][3:])
        print('pill after sync:', await pill(A))
        # --- B: second device, same code: sees A's progress; moves further; A picks it up
        ctxB,B,eB=await newctx(b); await B.fill('.acin',CODE); await B.click('.acg'); await B.wait_for_timeout(1800)
        print('B sees unit1 progress i =', await B.evaluate("SS(1).i"), 'sticker', await B.evaluate("!!st.stk['电台']"), 'fb', await B.evaluate("(st.fb||[]).length"))
        await B.evaluate("SS(1).i=7; SS(1).b=7; SS(2).i=2; SS(2).b=2; st.stk['恩爱']=1; save()"); await B.evaluate("home()"); await B.wait_for_timeout(6500)
        await A.evaluate("document.dispatchEvent(new Event('visibilitychange'))"); await A.wait_for_timeout(2500)
        print('A after pull: unit1 i =', await A.evaluate("SS(1).i"), 'unit2 i =', await A.evaluate("SS(2).i"), 'stickers', await A.evaluate("Object.keys(st.stk).join(',')"))
        # --- conflict path: both change while offline-ish; A pushes with stale base
        await A.evaluate("st.stk['入围']=1; save()"); await B.evaluate("st.stk['对比']=1; save()")
        await B.wait_for_timeout(6500); await A.wait_for_timeout(6500)
        await A.evaluate("document.dispatchEvent(new Event('visibilitychange'))"); await A.wait_for_timeout(2500)
        print('A stickers after conflict:', await A.evaluate("Object.keys(st.stk).sort().join(',')"), '| server version has:', end=' ')
        r=json.loads(urllib.request.urlopen(urllib.request.Request(API,data=json.dumps({'a':'login','code':CODE}).encode())).read()); print(sorted(r['state']['stk']))
        # --- offline: failure shows a warning and keeps data, then recovers
        await ctxA.set_offline(True); await A.evaluate("st.stk['评委']=1; save()"); await A.wait_for_timeout(6500); print('offline pill:', await pill(A))
        await ctxA.set_offline(False); await A.evaluate("window.dispatchEvent(new Event('online'))"); await A.wait_for_timeout(2500); print('back online pill:', await pill(A))
        # --- other account on same device -> wiped local progress of the first
        await A.evaluate("openAcct()"); await A.click('.aco'); await A.wait_for_timeout(500)
        await A.evaluate("openAcct()"); await A.fill('.acin',CODE2); await A.click('.acg'); await A.wait_for_timeout(1800)
        print('account 2 on same device: stickers', await A.evaluate("Object.keys(st.stk).length"), 'acct', await A.evaluate("st.acct==='%s'"%CODE2))
        # --- reset propagates
        await B.evaluate("st.rs=Date.now(); st.sess={}; st.stk={}; st.wl={}; st.res={}; save()"); await B.evaluate("home()"); await B.wait_for_timeout(6500)
        await ctxA.close(); ctxA,A,eA=await newctx(b); await A.fill('.acin',CODE); await A.click('.acg'); await A.wait_for_timeout(1800)
        print('fresh login after reset elsewhere: stickers', await A.evaluate("Object.keys(st.stk).length"))
        print('errors', eA, eB)
asyncio.run(main())

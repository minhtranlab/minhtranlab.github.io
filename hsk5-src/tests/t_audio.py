import asyncio, json
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium',args=['--no-sandbox','--autoplay-policy=no-user-gesture-required'])
        ctx=await b.new_context(viewport={'width':820,'height':1180},has_touch=True); pg=await ctx.new_page()
        reqs=[]; bad=[]
        pg.on('request',lambda r: reqs.append(r.url) if '/audio/' in r.url else None)
        pg.on('response',lambda r: bad.append((r.status,r.url)) if '/audio/' in r.url and r.status!=200 else None)
        await pg.goto('http://127.0.0.1:8765/index.html'); await pg.wait_for_timeout(800)
        print('requests at home:',len(reqs))
        n1=await pg.evaluate('clipsFor(SESSIONS.find(s=>s.id===1)).length'); print('clipsFor(1)',n1, 'missing from AUD', await pg.evaluate('clipsFor(SESSIONS.find(s=>s.id===1)).filter(k=>!AUD[k]).length'))
        await pg.evaluate('play(1)'); await pg.wait_for_timeout(2500)
        print('requests after opening unit 1:',len(reqs),'unique',len(set(reqs)))
        n2=await pg.evaluate('clipsFor(SESSIONS.find(s=>s.id===2)).length'); print('clipsFor(2)',n2)
        total=len(await pg.evaluate('Object.keys(AUD)')); print('manifest clips',total)
        ok=await pg.evaluate("speak('电台',false,true)"); print('speak male ok',ok)
        ok2=await pg.evaluate("speak('我老婆',false,false)"); print('speak female sentence', ok2)
        print('bad responses',bad)
        await pg.wait_for_timeout(500)
        sw=await pg.evaluate("navigator.serviceWorker.getRegistrations().then(r=>r.length)"); print('service workers',sw)
asyncio.run(main())

import asyncio
from playwright.async_api import async_playwright
src=open('t_py.py').read(); AUDIT=src.split("AUDIT = '''")[1].split("'''")[0].replace('\\\\u','\\u').replace("unk: !!(w","inCard: !!p.closest('.wcov'), unk: !!(w")
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium',args=['--no-sandbox']); pg=await (await b.new_context(viewport={'width':820,'height':1180})).new_page()
        await pg.goto('http://127.0.0.1:8765/index.html'); await pg.wait_for_timeout(400)
        await pg.evaluate('setPy(true)')
        bad=0
        for wid in await pg.evaluate('WORDS.map(w=>w.id)'):
            await pg.evaluate(f'wordDetail({wid!r}, true)'); await pg.wait_for_timeout(60)
            # open all accordion panels
            await pg.evaluate("document.querySelectorAll('.wcard .chip2, .wcard summary, .wcard [data-open]').forEach(e=>e.click())")
            a=await pg.evaluate('()=>('+AUDIT+')().filter(x=>x.inCard&&!x.par.includes("SVG")&&x.txt!=="拼"&&x.txt!=="✕")')
            if a: bad+=1; print(wid,a[:3])
            await pg.evaluate("document.querySelector('#wcx')&&document.querySelector('#wcx').click()"); await pg.wait_for_timeout(40)
        print('cards with uncovered Han:',bad)
asyncio.run(main())

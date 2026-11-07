"""Flip cards (tab "Từ vựng"): every Hán character in a card has pinyin under 拼, and the pinyin really shows (VIS from t_py.py).
Runs on Chromium and WebKit (Safari engine; phiếu #4)."""
import asyncio, sys
from playwright.async_api import async_playwright
src=open('t_py.py').read(); AUDIT=src.split("AUDIT = '''")[1].split("'''")[0].replace('\\\\u','\\u').replace("unk: !!(w","inCard: !!p.closest('.wcov'), unk: !!(w")
VIS=src.split("VIS = '''")[1].split("'''")[0]
async def run(p, name):
    b = await (p.webkit.launch() if name == 'webkit' else p.chromium.launch(executable_path='/opt/pw-browsers/chromium',args=['--no-sandbox']))
    pg=await (await b.new_context(viewport={'width':820,'height':1180})).new_page()
    await pg.goto('http://127.0.0.1:8765/index.html'); await pg.wait_for_timeout(400); await pg.evaluate('loadCh(2)')   # Bài 2 cards too
    await pg.evaluate('setPy(true)')
    bad=0; vbad=0
    for wid in await pg.evaluate('WORDS.map(w=>w.id)'):
        await pg.evaluate(f'wordDetail({wid!r}, true)'); await pg.wait_for_timeout(60)
        await pg.evaluate("document.querySelectorAll('.wcard .chip2, .wcard summary, .wcard [data-open]').forEach(e=>e.click())")
        a=await pg.evaluate('()=>('+AUDIT+')().filter(x=>x.inCard&&!x.par.includes("SVG")&&x.txt!=="拼"&&x.txt!=="✕")')
        if a: bad+=1; print(name, wid,a[:3])
        v=await pg.evaluate('('+VIS+')()')
        if v: vbad+=1; print(name, wid, 'pinyin not showing', v)
        await pg.evaluate("document.querySelector('#wcx')&&document.querySelector('#wcx').click()"); await pg.wait_for_timeout(40)
    print(f'[{name}] cards with uncovered Han: {bad}, cards where pinyin does not show: {vbad}')
    await b.close(); return bad + vbad
async def main():
    async with async_playwright() as p:
        n = 0
        for name in ('chromium', 'webkit'): n += await run(p, name)
    print('CARD', 'OK' if not n else 'FAIL', n); sys.exit(1 if n else 0)
asyncio.run(main())

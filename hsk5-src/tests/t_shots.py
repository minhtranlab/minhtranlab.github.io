import asyncio
from playwright.async_api import async_playwright
API='http://127.0.0.1:8766/exec'
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium',args=['--no-sandbox'])
        ctx=await b.new_context(viewport={'width':820,'height':1180},has_touch=True)
        await ctx.route('**/config.js', lambda r: r.fulfill(body=f"window.HSK5={{api:'{API}'}};", content_type='application/javascript'))
        pg=await ctx.new_page(); await pg.goto('http://127.0.0.1:8765/index.html'); await pg.wait_for_timeout(900)
        await pg.screenshot(path='s_login.png')
        await pg.click('.acx'); await pg.wait_for_timeout(300); await pg.screenshot(path='s_home_guest.png')
        await pg.evaluate("document.querySelector('#home').scrollIntoView(); window.scrollTo(0, document.body.scrollHeight)"); await pg.wait_for_timeout(300)
        await pg.screenshot(path='s_soon.png')
        await ctx.close()
asyncio.run(main())

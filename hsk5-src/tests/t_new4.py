import asyncio
from playwright.async_api import async_playwright
URL='http://127.0.0.1:8765/index.html'
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium',args=['--no-sandbox','--use-fake-ui-for-media-stream','--use-fake-device-for-media-stream','--autoplay-policy=no-user-gesture-required'])
        for name,vp in [('phone',{'width':390,'height':844}),('pad',{'width':820,'height':1180})]:
            ctx=await b.new_context(viewport=vp,has_touch=False,permissions=['microphone']); pg=await ctx.new_page(); errs=[]
            pg.on('pageerror',lambda e:errs.append(str(e)))
            await pg.goto(URL); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'n_home_{name}.png')
            # goal ring
            g1=await pg.evaluate("document.querySelector('.goal small').textContent")
            await pg.click('.goal'); await pg.wait_for_timeout(200); await pg.keyboard.press('Escape')
            g2=await pg.evaluate("document.querySelector('.goal small').textContent")
            # unit 1 story: rec button
            await pg.evaluate("play(1)"); await pg.wait_for_timeout(300)
            await pg.click('.rec'); await pg.wait_for_timeout(800)
            on=await pg.evaluate("!!document.querySelector('.rec.on')")
            await pg.click('.rec'); await pg.wait_for_timeout(2500)
            cmp_=await pg.evaluate("(()=>{const c=document.querySelector('.cmp');return c&&!c.hidden?c.innerText:null})()")
            await pg.screenshot(path=f'n_rec_{name}.png')
            # tap a taught word -> sheet -> card
            await pg.evaluate("document.querySelector('.w.t')&&document.querySelector('.w.t').click()"); await pg.wait_for_timeout(300)
            sc_btn=await pg.evaluate("!!document.querySelector('.sh-card')")
            if sc_btn:
                await pg.click('.sh-card'); await pg.wait_for_timeout(900); await pg.screenshot(path=f'n_card_{name}.png')
                hasback=await pg.evaluate("!!document.querySelector('.wcb')"); await pg.click('#wcx'); await pg.wait_for_timeout(300)
            else: hasback=None
            # feedback
            await pg.click('#bFb'); await pg.wait_for_timeout(200)
            await pg.click('.fbc .chip2'); await pg.fill('.fbt','Thử góp ý'); await pg.screenshot(path=f'n_fb_{name}.png'); await pg.click('.fbs'); await pg.wait_for_timeout(300)
            nfb=await pg.evaluate("st.fb.length")
            # retry: go to first hear/mc/choose question, answer wrong
            await pg.evaluate("home()")
            await pg.evaluate("st.sess[1]={i:2,done:0}; play(1)"); await pg.wait_for_timeout(300)
            t=await pg.evaluate("SESSIONS[0].screens[SS(1).i].t")
            n0=await pg.evaluate("SESSIONS[0].screens.length")
            await pg.click('.opt[data-ok="0"]'); await pg.wait_for_timeout(300)
            await pg.click('.opt[data-ok="0"]:not([disabled])') if await pg.evaluate("!!document.querySelector('.opt[data-ok=\"0\"]:not([disabled])')") else None
            await pg.wait_for_timeout(300)
            await pg.click('#next'); await pg.wait_for_timeout(300)
            n1=await pg.evaluate("SESSIONS[0].screens.length"); ri=await pg.evaluate("SESSIONS[0].screens.findIndex(s=>s._retry)")
            # reload resume maps back to base index
            await pg.evaluate("home()"); await pg.evaluate("play(1)")
            n2=await pg.evaluate("SESSIONS[0].screens.length"); bi=await pg.evaluate("SS(1).i")
            # reader
            await pg.evaluate("st.openAll=1; home()"); await pg.wait_for_timeout(200)
            await pg.evaluate("play('rd')"); await pg.wait_for_timeout(300); await pg.screenshot(path=f'n_reader_{name}.png')
            await pg.evaluate("document.querySelector('#next').click()"); await pg.wait_for_timeout(300)
            done=await pg.evaluate("SS('rd').done"); 
            await pg.evaluate("document.getElementById('home').scrollTop=99999"); await pg.wait_for_timeout(200); await pg.screenshot(path=f'n_pathend_{name}.png')
            print(name,errs,'goal',g1,g2,'rec',on,cmp_,'card',sc_btn,hasback,'fb',nfb,'retry type',t,n0,n1,'at',ri,'reset',n2,'resume',bi,'reader done',done)
            await ctx.close()
        await b.close()
asyncio.run(main())

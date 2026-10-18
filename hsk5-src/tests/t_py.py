import asyncio, sys, json
from playwright.async_api import async_playwright
src = open('t_all.py').read().split('async def main')[0]
exec(src)
AUDIT = '''()=>{
 const han=/[\\u3400-\\u9fff]/; const out=[];
 const vis=e=>{for(let n=e;n&&n!==document.body;n=n.parentElement){const s=getComputedStyle(n);if(s.display==='none'||s.visibility==='hidden')return false}return true};
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let n;
 while(n=walker.nextNode()){
  const t=n.nodeValue; if(!han.test(t)) continue;
  const p=n.parentElement; if(!p||p.closest('rt,script,style,#toast')) continue;
  if(!vis(p)) continue;
  const w=p.closest('.w'); const ruby=p.closest('ruby');
  const ok = w && ruby && ruby.querySelector('rt') && !w.classList.contains('unk');
  if(!ok) out.push({txt:t.trim().slice(0,30), cls:(p.className||p.tagName), par:(p.parentElement&&p.parentElement.className||'').toString().slice(0,30), unk: !!(w&&w.classList.contains('unk'))});
 }
 return out}'''
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=['--no-sandbox','--autoplay-policy=no-user-gesture-required'])
        ctx = await b.new_context(viewport={'width':820,'height':1180}, has_touch=True)
        pg = await ctx.new_page(); errs=[]
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://127.0.0.1:8765/index.html'); await pg.wait_for_timeout(500)
        order = await pg.evaluate('STUDY().map(s=>s.id)')
        only = sys.argv[1].split(',') if len(sys.argv)>1 else None
        seen = {}
        for sid in order:
            if only and str(sid) not in only: continue
            await pg.evaluate(f'play({json.dumps(sid)})'); await pg.wait_for_timeout(150)
            await pg.evaluate('setPy(true)')
            k=0
            while True:
                i = await pg.evaluate('SS(sid).i')
                t = await pg.evaluate(f'SESSIONS.find(x=>x.id===sid).screens[{i}].t')
                a = await pg.evaluate(AUDIT)
                await solve(pg, sid, i, t, wrongfirst=False); await pg.wait_for_timeout(120)
                a2 = await pg.evaluate(AUDIT)
                for phase, arr in (('before',a),('after',a2)):
                    for x in arr:
                        key=(t,x['txt'][:12],x['unk'])
                        if key not in seen: seen[key]=(sid,i,phase,x)
                
                try: await pg.click('#next', timeout=4000)
                except Exception as e:
                    print('STUCK', sid, i, t, await pg.evaluate('document.getElementById("next").disabled')); await pg.screenshot(path='stuck.png'); raise SystemExit
                await pg.wait_for_timeout(100)
                k+=1
                if await pg.evaluate('!!document.getElementById("home")'): break
                if k>60: break
        for key,(sid,i,ph,x) in seen.items(): print(sid,i,key[0],ph,x)
        print('total distinct', len(seen), 'errs', errs[:3])
asyncio.run(main())

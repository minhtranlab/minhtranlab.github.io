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
# pinyin really SHOWS (phiếu #4: Safari ignored display:ruby-text, so 拼 did nothing on iPhone while the structural AUDIT above passed):
# every <rt> of a visible word takes space when 拼 is on (or its block was switched on with "Pinyin"), and none shows when it should not
VIS = '''()=>{const out=[];
 const vis=e=>{for(let n=e;n&&n!==document.body;n=n.parentElement){const s=getComputedStyle(n);if(s.display==='none'||s.visibility==='hidden')return false}return true};
 document.querySelectorAll('.w rt').forEach(r=>{const w=r.closest('.w');if(!vis(w))return;
  const want=!r.closest('.hidepy')&&(document.body.classList.contains('py')||!!r.closest('.showpy'));
  const cs=getComputedStyle(r),bb=r.getBoundingClientRect(),shown=cs.display!=='none'&&bb.height>=3&&bb.width>=3;
  if(want!==shown)out.push({txt:w.dataset.k,want,display:cs.display,h:Math.round(bb.height),par:(w.parentElement.className||'').toString().slice(0,24)})});
 return out.slice(0,3)}'''
# the Pinyin button inside the answer block: works with 拼 off (shows) and with 拼 on (hides), and 拼 still rules afterwards
PYBTN = '''async()=>{const z=document.querySelector('.reveal .rz'),b=document.querySelector('.reveal .rpy');if(!z||!b)return null;
 const sl=()=>new Promise(r=>setTimeout(r,30)),rt=()=>{const r=z.querySelector('.w rt');if(!r)return -1;const bb=r.getBoundingClientRect();return getComputedStyle(r).display!=='none'&&bb.height>=3?1:0};
 const out=[];setPy(false);await sl();out.push(rt()===0);b.click();await sl();out.push(rt()===1&&b.textContent==='Ẩn pinyin');b.click();await sl();out.push(rt()===0&&b.textContent==='Pinyin');
 setPy(true);await sl();out.push(rt()===1&&b.textContent==='Ẩn pinyin');b.click();await sl();out.push(rt()===0);setPy(true);await sl();out.push(rt()===1);
 return out.every(Boolean)?'ok':JSON.stringify(out)}'''
async def launch(p, name):
    if name == 'webkit': return await p.webkit.launch()
    return await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=['--no-sandbox','--autoplay-policy=no-user-gesture-required'])
async def run_browser(p, name, only):
    b = await launch(p, name)
    ctx = await b.new_context(viewport={'width':820,'height':1180}, has_touch=True)
    pg = await ctx.new_page(); errs=[]
    pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto('http://127.0.0.1:8765/index.html'); await pg.wait_for_timeout(500); await pg.evaluate('loadCh(2)')   # Bài 2 too
    order = await pg.evaluate('STUDY().map(s=>s.id)')
    seen = {}; visbad = {}; btnbad = {}; nscr = 0; nbtn = 0
    for sid in order:
        if only and str(sid) not in only: continue
        await pg.evaluate(f'play({json.dumps(sid)})'); await pg.wait_for_timeout(150)
        await pg.evaluate('setPy(true)')
        k=0
        while True:
            i = await pg.evaluate('SS(sid).i')
            t = await pg.evaluate(f'SESSIONS.find(x=>x.id===sid).screens[{i}].t')
            a = await pg.evaluate(AUDIT); v = await pg.evaluate(VIS)
            await solve(pg, sid, i, t, wrongfirst=False); await pg.wait_for_timeout(120)
            a2 = await pg.evaluate(AUDIT); v2 = await pg.evaluate(VIS); nscr += 1
            for phase, arr in (('before',a),('after',a2)):
                for x in arr:
                    if x['txt'] == '拼' or 'SVG' in str(x['par']): continue   # the 拼 button itself and text drawn inside pictures are exempt
                    key=(t,x['txt'][:12],x['unk'])
                    if key not in seen: seen[key]=(sid,i,phase,x)
            for phase, arr in (('before',v),('after',v2)):
                if arr: visbad.setdefault((t, phase), (sid, i, arr))
            r = await pg.evaluate(PYBTN)
            if r is not None:
                nbtn += 1
                if r != 'ok': btnbad.setdefault(t, (sid, i, r))
            try: await pg.click('#next', timeout=4000)
            except Exception as e:
                print('STUCK', sid, i, t, await pg.evaluate('document.getElementById("next").disabled')); await pg.screenshot(path='stuck.png'); raise SystemExit
            await pg.wait_for_timeout(100)
            k+=1
            if await pg.evaluate('!!document.getElementById("home")'): break
            if k>60: break
    for key,(sid,i,ph,x) in seen.items(): print(name, sid,i,key[0],ph,x)
    for key,(sid,i,arr) in visbad.items(): print(name, 'PINYIN NOT SHOWING', key, 'unit', sid, '#', i, arr)
    for key,(sid,i,r) in btnbad.items(): print(name, 'PINYIN BUTTON', key, 'unit', sid, '#', i, r)
    print(f'[{name}] screens {nscr}, answer-block Pinyin buttons {nbtn}; uncovered Han {len(seen)}, rt not showing {len(visbad)}, button failures {len(btnbad)}, errs {errs[:3]}')
    await b.close()
    return len(seen) + len(visbad) + len(btnbad) + len(errs)
async def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    only = args[0].split(',') if args else None
    names = ['webkit'] if '--webkit' in sys.argv else ['chromium'] if '--chromium' in sys.argv else ['chromium', 'webkit']
    async with async_playwright() as p:
        bad = 0
        for n in names:
            try: bad += await run_browser(p, n, only)
            except Exception as e:
                if n == 'webkit' and 'Executable doesn' in str(e): print('WebKit not installed: python3 -m playwright install webkit (skipped)'); continue
                raise
    print('PY', 'OK' if not bad else 'FAIL', bad)
    sys.exit(1 if bad else 0)
asyncio.run(main())

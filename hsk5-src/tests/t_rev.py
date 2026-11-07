"""Ôn tập tổng hợp puts newly learned words first (phiếu #11, HANDOFF §6/§11).
Fake learner: the 38 Bài 1 words learned over 3 weeks (most revised 1–2 times and overdue now), one Bài 1 word answered wrongly yesterday
(not due yet by the old schedule), and the 9 Bài 2 words learned today. 20 rounds (questions are random) — every round must:
  - hold >= 3 Bài 2 words and the word missed yesterday, and every "learning" word that is due before any solid overdue word (max 4 learning)
  - show "Lượt này: x từ mới học, y từ cũ" on its first screen and on the last one
With no learning words at all: 6 solid words, all due, the most overdue ones.
Mixed reviews of the study path still ask every word of their own units (Bài 1 m1–m6, Bài 2 2-m1), 20 times each.
A word is due right after its unit is done (Bài 2 tập 1 played: the home badge counts its words at once and the next round asks them).
Run from hsk5-src/tests with serve.py on :8765. Prints REV OK 0 failures."""
import asyncio, json, sys
from playwright.async_api import async_playwright
exec(open('t_all.py').read().split('async def main')[0])   # solve()
BASE = 'http://127.0.0.1:8765/index.html'
fails = []
def chk(ok, msg):
    print(('ok   ' if ok else 'FAIL ') + msg)
    if not ok: fails.append(msg)

FAKE = '''()=>{const now=Date.now(),D=DAY;st.wl={};st.sess={};st.res={};
  const b1=STUDY(1).filter(isLearn);
  b1.forEach((s,k)=>{const learned=now-(21-k*1.8)*D;st.sess[s.id]={i:0,done:1};
    s.words.forEach((w,j)=>{const box=j%3===0?1:2;st.wl[w]={t:learned,box,due:now-(1+(k+j)%10)*D,last:learned+D,rev:box,n:box};});});
  const b2=STUDY(2).filter(isLearn);
  b2.forEach(s=>{st.sess[s.id]={i:0,done:1,at:now-3600e3};s.words.forEach(w=>{st.wl[w]={t:now-2*3600e3,box:0,due:now-2*3600e3+D,last:0,rev:0,n:0};});});
  const fw=b1[5].words[0];Object.assign(st.wl[fw],{box:0,fail:1,last:now-D+3600e3,due:now+3600e3,rev:3});
  return fw}'''
SOLID = '''()=>{const now=Date.now(),D=DAY;st.wl={};st.sess={};
  STUDY(1).filter(isLearn).forEach((s,k)=>{st.sess[s.id]={i:0,done:1};s.words.forEach((w,j)=>{st.wl[w]={t:now-30*D,box:2+(j%2),due:now+((k+j)%3===0?5*D:-(k+j+1)*D),last:now-20*D,rev:3,n:3};});});}'''

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=['--no-sandbox', '--autoplay-policy=no-user-gesture-required'])
        pg = await (await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True)).new_page(); errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto(BASE); await pg.wait_for_timeout(500); await pg.evaluate('loadCh(2)')

        # 1) Bài 1 over 3 weeks + Bài 2 today + one word missed yesterday
        fw = await pg.evaluate(FAKE)
        old = await pg.evaluate("Object.keys(st.wl).filter(i=>W[i]).sort((x,y)=>pri(y,Date.now())-pri(x,Date.now())).slice(0,6).filter(w=>WORD_CH[w]===2).length")
        print(f'(before phiếu #11 the top 6 by pri() held {old} Bài 2 words)')
        bad = []
        for n in range(20):
            r = await pg.evaluate('''(fw)=>{const now=Date.now(),U=unitMap();const sc=buildRevision();const T=buildRevision.words;
              const ids=Object.keys(st.wl).filter(i=>W[i]);const lr=ids.filter(i=>isLearning(i,now,U)&&(st.wl[i].fail||dueOf(i,U)<=now));
              return {T,b2:T.filter(w=>WORD_CH[w]===2).length,fw:T.includes(fw),nl:T.filter(i=>isLearning(i,now,U)).length,lr:lr.length,
                asked:[...new Set(sc.flatMap(c=>c.w||[]))].length,info:revInfo(T)}}''', fw)
            ok = r['b2'] >= 3 and r['fw'] and r['nl'] == min(4, r['lr']) and len(r['T']) == 6 and r['asked'] == 6
            if not ok: bad.append(r)
            if n == 0: print('  round 1:', r['T'], r['info'])
        chk(not bad, f'20 rounds: >= 3 Bài 2 words, the word missed yesterday ({fw}), 4 learning + 2 old, every picked word asked {bad[:2]}')
        # the first screen and the last screen say how the round is made
        await pg.evaluate('play(REV.id)'); await pg.wait_for_timeout(300)
        top = await pg.evaluate("(document.querySelector('#stage .revinfo')||{}).textContent||''")
        chk(top == 'Lượt này: 4 từ mới học, 2 từ cũ', f'first screen line: {top!r}')
        await pg.evaluate("SS(REV.id).i=REV.screens.length-1;renderScreen()"); await pg.wait_for_timeout(200)
        end = await pg.evaluate("(document.querySelector('#stage .revinfo')||{}).textContent||''")
        chk(end == top, f'last screen line: {end!r}')
        await pg.evaluate('home()')
        # old data is read as it is
        same = await pg.evaluate("(()=>{const a=JSON.stringify(st.wl);for(let i=0;i<5;i++)pickRev(Object.keys(st.wl).filter(i=>W[i]),Date.now());return a===JSON.stringify(st.wl)})()")
        chk(same, 'choosing words does not rewrite st.wl')

        # 2) nothing to learn: 6 solid words, all due, the most overdue
        await pg.evaluate(SOLID)
        bad = []
        for n in range(20):
            r = await pg.evaluate('''()=>{const now=Date.now(),U=unitMap();buildRevision();const T=buildRevision.words;
              const due=Object.keys(st.wl).filter(i=>W[i]&&dueOf(i,U)<=now).sort((a,b)=>dueOf(a,U)-dueOf(b,U));
              return {n:T.length,allDue:T.every(i=>dueOf(i,U)<=now),top:T.every(i=>due.slice(0,6).includes(i)),nl:T.filter(i=>isLearning(i,now,U)).length,info:revInfo(T)}}''')
            if not (r['n'] == 6 and r['allDue'] and r['top'] and r['nl'] == 0): bad.append(r)
        chk(not bad, f'no learning word: 6 old words, all due, the most overdue ({r["info"]}) {bad[:2]}')

        # 3) the path's mixed reviews still ask every word of their own units
        await pg.evaluate("Object.keys(MEAN).filter(k=>W[k]).forEach(k=>{st.wl[k]=st.wl[k]||{t:Date.now(),box:0,due:0,last:0,rev:0,n:0}})")
        miss = await pg.evaluate('''()=>{const out=[];SESSIONS.filter(s=>s.mix).forEach(s=>{const own=s.after.flatMap(id=>SESSIONS.find(x=>x.id===id).words);
          for(let n=0;n<20;n++){const asked=new Set(buildMix(s).flatMap(c=>c.w||[]));const m=own.filter(w=>!asked.has(w));if(m.length&&!s.max)out.push(s.id+':'+m.join(','));
          if(s.max){const o=own.filter(w=>asked.has(w)).length;if(o<own.length-1)out.push(s.id+' only '+o+'/'+own.length);}}});return out}''')
        chk(not miss, f'mixed reviews ask the words of their own units (Bài 1 all of them; 2-m1 its short form, at most one left out) {miss[:4]}')

        # 4) a unit just done: its words are due at once and the next round asks them
        pg = await (await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True)).new_page(); pg.on('pageerror', lambda e: errs.append(str(e)))   # a new learner
        await pg.goto(BASE); await pg.wait_for_timeout(400); await pg.evaluate("loadCh(2)")
        await pg.evaluate("play('2-1')"); await pg.wait_for_timeout(150)
        for k in range(40):
            i = await pg.evaluate('SS(sid).i'); t = await pg.evaluate(f"SESSIONS.find(x=>x.id==='2-1').screens[{i}].t")
            await solve(pg, '2-1', i, t, wrongfirst=False); await pg.wait_for_timeout(80); await pg.click('#next'); await pg.wait_for_timeout(100)
            if await pg.evaluate('!!document.getElementById("home")'): break
        rs = await pg.evaluate("[revStatus().due, document.querySelector('.nd.rev .nbd')?document.querySelector('.nd.rev .nbd').textContent:'', SS('2-1').at>0]")
        chk(rs[0] == 4 and rs[1] == '4' and rs[2], f'right after Bài 2 tập 1: its 4 words are due at once (home badge {rs[1]})')
        await pg.evaluate('play(REV.id)'); await pg.wait_for_timeout(200)
        r = await pg.evaluate("[buildRevision.words.slice().sort().join(','), SESSIONS.find(s=>s.id==='2-1').words.slice().sort().join(','), REV.info]")
        chk(r[0] == r[1] and r[2] == 'Lượt này: 4 từ mới học', f'next Ôn tập tổng hợp asks them: {r}')
        chk(not errs, f'no page errors {errs[:3]}')
        await b.close()
    print('REV', 'OK' if not fails else 'FAIL', len(fails), 'failures', fails)
    sys.exit(1 if fails else 0)
asyncio.run(main())

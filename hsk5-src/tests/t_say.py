"""The 'say' screen (Nhắc lại, phiếu #5): speaking practice, never scored. On iPhone 390x844 and iPad 820x1180:
  - echo (Bài 1 tập 1): sentence played, no text before speaking; 'Hiện chữ' and 'Pinyin' (plain line while the text is hidden, ruby when shown);
    a fake microphone that 'speaks': a too-short hold does not pass, a long hold passes -> the learner's take is played back automatically,
    '▶ Nghe câu mẫu' / '▶ Giọng của bạn', answer block (§12) with Pinyin, Tiếp unlocked but no auto-advance, no 'Đúng!' text;
  - read (Bài 1 tập 6 and Bài 2 tập 1): text shown, NO sound before reading, Pinyin button; after the take: own voice, then the model;
  - nothing is scored: st.res, the day's question count and st.wl are unchanged;
  - a quiet room: 3 failed holds -> 'Mình đã nói' (never stuck); microphone denied -> fallback with the error code; no microphone API -> fallback
    from the start; 'Bỏ qua (không tiện nói)' always works; iOS-like audio session goes back to 'playback' after a take;
  - leaving the screen drops the recording. Every 'say' screen of every chapter points to a book sentence with a male clip.
  - phiếu #24 (Minh: "cứ cho mình thời gian"): TAP 🎤 to start, TAP "⏹ Dừng" to stop (no holding); while recording a seconds counter and the
    sound rings; a pointercancel in the middle (iOS: finger moves / gesture) does NOT stop it; it goes on past the old time limit
    (6 s + 0.9 s per character); only a safety stop at 60 s; after the take ONLY the learner's voice plays (no model, echo and read alike),
    the model on '▶ Nghe câu mẫu'; '🎤 Thu lại' records again and the new take replaces the old one.
Run from hsk5-src/tests with serve.py on :8765. Prints SAY OK."""
import asyncio, os, sys, json
from playwright.async_api import async_playwright
import wave, math, random, struct
TMP = os.environ.get('HSK5_TMP', '/tmp')
src = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 't_comic.py')).read()
exec(src[src.index('def wav('):src.index('fails = []')])                       # wav(): the comic test's fake voice / quiet room files
exec(src[src.index('async def nextbar('):src.index('async def play_page(')])    # nextbar(): Tiếp enabled + really visible
BASE = 'http://127.0.0.1:8765/index.html'
fails = []
def chk(c, m):
    print(('ok   ' if c else 'FAIL ') + m)
    if not c: fails.append(m)

async def goto_say(pg, sid, ch=1):
    await pg.goto(BASE); await pg.wait_for_timeout(400)
    if ch > 1: await pg.evaluate(f'loadCh({ch})'); await pg.wait_for_timeout(500)
    await pg.evaluate(f"st.auto=1; st.openAll=1; window.__plays.length=0; (()=>{{const S=SESSIONS.find(s=>s.id==={json.dumps(sid)});const i=S.screens.findIndex(c=>c.t==='say');st.sess[S.id]={{i,b:i,done:0}};play(S.id)}})()")
    await pg.wait_for_timeout(1500)

async def micxy(pg, sel='.sy-mic'):
    r = await pg.evaluate("(s)=>{const e=document.querySelector(s);e.scrollIntoView({block:'center'});const r=e.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2]}", sel)
    await pg.wait_for_timeout(120); return r
async def tap(pg, touch=None, sel='.sy-mic'):
    """one quick tap (a finger on a phone, the mouse elsewhere)"""
    x, y = await micxy(pg, sel)
    if touch:
        await touch.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': x, 'y': y}]}); await pg.wait_for_timeout(60)
        await touch.send('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
    else:
        await pg.mouse.move(x, y); await pg.mouse.down(); await pg.wait_for_timeout(60); await pg.mouse.up()
REC_ON = "document.querySelector('.sy-mic')&&document.querySelector('.sy-mic').textContent==='⏹ Dừng'"
async def rec(pg, ms, touch=None):
    """tap 🎤, speak for ms, tap ⏹ Dừng (phiếu #24: no holding)"""
    await tap(pg, touch); await pg.wait_for_function(REC_ON, timeout=6000)
    await pg.wait_for_timeout(ms); await tap(pg, touch); await pg.wait_for_timeout(600)

async def need(pg):
    return await pg.evaluate("Math.max(1,COMIC.perChar*COMIC.share*akey(sayLine(SESSIONS.find(x=>x.id===sid).screens[SS(sid).i]).zh).length)")

async def score_snap(pg):
    return await pg.evaluate("JSON.stringify([Object.keys(st.res).filter(k=>k.startsWith(String(sid)+':')).sort().map(k=>k+'='+st.res[k]),(st.log.d[todayKey()]||{q:0}).q,(st.log.d[todayKey()]||{ok:0}).ok,st.wl])")

async def check_answer(pg, lab):
    a = await pg.evaluate("(()=>{const r=document.querySelector('.pane .reveal');return r?[!!r.querySelector('.rpy'),!!r.querySelector('.sb'),r.querySelector('.rz').innerText.length>0,r.querySelector('.rvv2')?r.querySelector('.rvv2').innerText:'']:null})()")
    chk(a and a[0] and a[1] and a[2] and a[3], f'{lab}: answer block with the sentence, its meaning, 🔊 and Pinyin {a}')
    txt = await pg.inner_text('#stage')
    chk('Đúng!' not in txt and 'Đúng rồi' not in txt, f'{lab}: no "Đúng!" text')
    nb = await nextbar(pg); chk(not nb['dis'] and nb['vis'], f'{lab}: Tiếp enabled and visible after speaking {nb}')
    i0 = await pg.evaluate('SS(sid).i'); await pg.wait_for_timeout(1200)
    chk(await pg.evaluate('SS(sid).i') == i0, f'{lab}: no auto-advance')

async def run_mic(b, lab, vp, mobile):
    ctx = await b.new_context(viewport=vp, has_touch=True, is_mobile=mobile, permissions=['microphone'])
    pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
    touch = await ctx.new_cdp_session(pg) if mobile else None
    # ---- echo ----
    await goto_say(pg, 1)
    s0 = await score_snap(pg)
    key = await pg.evaluate("akey(sayLine(SESSIONS.find(x=>x.id===sid).screens[SS(sid).i]).zh)")
    chk(await pg.evaluate("window.__say.echo && __say.mode==='mic'"), f'{lab} echo: mic mode')
    chk(('M:' + key) in await pg.evaluate('__plays'), f'{lab} echo: the sentence is played at once (male voice)')
    chk(await pg.evaluate("document.querySelector('.sy-z').hidden && document.querySelector('.sy-z').offsetHeight===0"), f'{lab} echo: no Chinese text before speaking')
    nb = await nextbar(pg); chk(nb['dis'] and nb['vis'], f'{lab} echo: Tiếp disabled but visible before speaking {nb}')
    chk(await pg.evaluate("!!document.querySelector('.sy-skip') && document.querySelector('.sy-skip').getClientRects().length>0"), f'{lab} echo: skip button there')
    await pg.click('.sy-py')
    pl = await pg.evaluate("[document.querySelector('.sy-pl').offsetHeight>0, document.querySelector('.sy-pl').innerText]")
    chk(pl[0] and len(pl[1]) > 5, f'{lab} echo: Pinyin while the text is hidden = a plain pinyin line {pl}')
    await pg.click('.sy-show')
    v = await pg.evaluate("[document.querySelector('.sy-z').offsetHeight>0, document.querySelector('.sy-pl').offsetHeight, [...document.querySelectorAll('.sy-z rt')].some(r=>r.getBoundingClientRect().height>0)]")
    chk(v[0] and v[1] == 0 and v[2], f'{lab} echo: Hiện chữ shows the text, pinyin now as ruby over it {v}')
    await pg.click('.sy-show'); await pg.click('.sy-py')
    n = await need(pg)
    chk(await pg.inner_text('.sy-mic') == '🎤 Chạm để nói', f'{lab} echo: mic button says "Chạm để nói"')
    await rec(pg, 650, touch)
    chk(not await pg.evaluate('__say.done'), f'{lab} echo: a 0.65 s take does not count')
    m = await pg.inner_text('.pane .cm-msg'); chk('Chạm' in m or 'Chưa nghe' in m, f'{lab} echo: message after a short take ({m})')
    await pg.evaluate('window.__plays.length=0')
    # one tap starts; the finger moving / an iOS gesture (pointercancel) in the middle does not stop it; nothing stops it before Dừng
    x, y0 = await micxy(pg)
    if touch:
        await touch.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': x, 'y': y0}]}); await pg.wait_for_function(REC_ON, timeout=6000)
        await pg.wait_for_timeout(400); await touch.send('Input.dispatchTouchEvent', {'type': 'touchCancel', 'touchPoints': []})   # finger slid off: the browser cancels
    else:
        await tap(pg); await pg.wait_for_function(REC_ON, timeout=6000)
    await pg.evaluate("(()=>{const m=document.querySelector('.sy-mic');for(const t of [m,window,document])t.dispatchEvent(new PointerEvent('pointercancel',{bubbles:true,pointerId:1}));m.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,pointerId:1}));})()")
    old = await pg.evaluate("Math.min(30000,(akey(sayLine(SESSIONS.find(x=>x.id===sid).screens[SS(sid).i]).zh).length*0.9+6)*1000)")
    wait = int(old) + 1500 if lab == 'phone' else int(n * 1000) + 900
    await pg.wait_for_timeout(wait)
    r = await pg.evaluate("[document.querySelector('.sy-mic').textContent, document.querySelector('.sy-time').textContent, !document.querySelector('.sy-rec').hidden, getComputedStyle(document.querySelector('.sy-mic'),'::before').animationName, __say.takes.length, __say.done]")
    secs = int(r[1].split(':')[0]) * 60 + int(r[1].split(':')[1])
    chk(r[0] == '⏹ Dừng' and r[4] == 1 and not r[5], f'{lab} echo: still recording after a pointercancel{" and past the old limit of %.1f s" % (old / 1000) if lab == "phone" else ""} {r}')
    chk(r[2] and abs(secs - wait / 1000) <= 2 and r[3] == 'cm-ring', f'{lab} echo: seconds counter ({r[1]}) and sound rings while recording')
    await tap(pg, touch); await pg.wait_for_timeout(600)
    await pg.wait_for_function('window.__say.done', timeout=5000)
    y = await pg.evaluate("JSON.stringify([__say.how, !!__say.url, __say.takes.map(t=>t.ok)])")
    chk(json.loads(y)[:2] == ['rec', True], f'{lab} echo: tapping "⏹ Dừng" ends the take, recorded {y}')
    await pg.wait_for_timeout(1500)
    pl = await pg.evaluate('__plays.slice()')
    chk('REC:say' in pl, f'{lab} echo: the take is played back automatically {pl[:4]}')
    chk(not any(p.startswith('M:') for p in pl), f'{lab} echo: the model is NOT played over the take (button "Nghe câu mẫu" instead) {pl[:4]}')
    await check_answer(pg, f'{lab} echo')
    await pg.evaluate('window.__plays.length=0'); await pg.click('.sy-model'); await pg.wait_for_timeout(400)
    chk(('M:' + key) in await pg.evaluate('__plays'), f'{lab} echo: "▶ Nghe câu mẫu" plays the model')
    await pg.evaluate('window.__plays.length=0'); await pg.click('.sy-mine'); await pg.wait_for_timeout(400)
    chk('REC:say' in await pg.evaluate('__plays'), f'{lab} echo: "▶ Giọng của bạn" plays the take')
    chk(await score_snap(pg) == s0, f'{lab} echo: nothing scored (st.res, questions of the day, st.wl unchanged)')
    await pg.screenshot(path=f'n_say_echo_{lab}.png')
    await pg.click('#next'); await pg.wait_for_timeout(400)
    chk(await pg.evaluate("SESSIONS.find(x=>x.id===sid).screens[SS(sid).i].t") == 'album' and await pg.evaluate("!window.__say.url"), f'{lab} echo: album next, the recording dropped when leaving')
    # ---- read (Bài 1 tập 6, and Bài 2 tập 1 with that chapter's sentence) ----
    for sid, ch in ((6, 1), ('2-1', 2)):
        await goto_say(pg, sid, ch)
        key = await pg.evaluate("akey(sayLine(SESSIONS.find(x=>x.id===sid).screens[SS(sid).i]).zh)")
        t = await pg.evaluate("[!__say.echo, document.querySelector('.sy-z').offsetHeight>0, document.querySelector('.sy-z').innerText.replace(/\\s/g,'')]")
        chk(t[0] and t[1], f'{lab} read {sid}: the text is shown from the start')
        chk(not any(p.startswith('M:') for p in await pg.evaluate('__plays')), f'{lab} read {sid}: no sound before reading')
        rb = await pg.evaluate("document.querySelector('.sy-hints .sy-py').click(),[...document.querySelectorAll('.sy-z rt')].some(r=>r.getBoundingClientRect().height>0)")
        chk(rb, f'{lab} read {sid}: Pinyin button shows ruby over the text')
        await pg.evaluate("document.querySelector('.sy-hints .sy-py').click()")
        n = await need(pg); await pg.evaluate('window.__plays.length=0')
        await rec(pg, int(n * 1000) + 900, touch)
        await pg.wait_for_function('window.__say.done', timeout=5000)
        await pg.wait_for_timeout(3000)
        pl = await pg.evaluate('__plays.slice()')
        chk('REC:say' in pl and not any(p.startswith('M:') for p in pl), f'{lab} read {sid}: own voice played, the model NOT played by itself {pl[:4]}')
        b2 = await pg.evaluate("[...document.querySelectorAll('.sy-after button')].map(b=>b.textContent)")
        chk(b2 == ['▶ Giọng của bạn', '▶ Nghe câu mẫu', '🎤 Thu lại'], f'{lab} read {sid}: buttons after the take {b2}')
        await pg.evaluate('window.__plays.length=0'); await pg.click('.sy-model'); await pg.wait_for_timeout(500)
        chk(('M:' + key) in await pg.evaluate('__plays'), f'{lab} read {sid}: the model plays when "▶ Nghe câu mẫu" is tapped')
        await check_answer(pg, f'{lab} read {sid}')
        if sid == '2-1':   # Thu lại: a new take replaces the old one
            u1 = await pg.evaluate('__say.url'); await pg.evaluate('window.__plays.length=0')
            await pg.click('.sy-again'); await pg.wait_for_function(REC_ON, timeout=6000); await pg.wait_for_timeout(int(n * 1000) + 900)
            await tap(pg, touch); await pg.wait_for_function("__say.takes.filter(t=>t.ok).length>=2", timeout=6000); await pg.wait_for_timeout(1500)
            r = await pg.evaluate("[__say.url, __say.takes.length, __plays.slice(), document.querySelectorAll('.pane .reveal').length, document.querySelector('.sy-act').hidden]")
            chk(r[0] and r[0] != u1 and 'REC:say' in r[2] and not any(p.startswith('M:') for p in r[2]) and r[3] == 1 and r[4], f'{lab} read {sid}: "🎤 Thu lại" records a new take that replaces the old one, plays it, one answer block {r[1:]}')
        if sid == 6: await pg.screenshot(path=f'n_say_read_{lab}.png')
    chk(not errs, f'{lab}: page errors {errs[:3]}')
    await ctx.close()

async def main():
    voice = wav(os.path.join(TMP, 'hsk5_fake_voice.wav'), 0.35)
    room = wav(os.path.join(TMP, 'hsk5_fake_room.wav'), 0.002)
    common = ['--no-sandbox', '--autoplay-policy=no-user-gesture-required']
    fake = ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
    async with async_playwright() as p:
        # every say screen points to a book sentence that has its male clip; echo early, read from about tập 6
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common)
        pg = await (await b.new_context()).new_page(); await pg.goto(BASE); await pg.wait_for_timeout(400); await pg.evaluate('loadCh(2)'); await pg.wait_for_timeout(600)
        L = await pg.evaluate("SESSIONS.filter(S=>isLearn(S)).map(S=>{const c=S.screens.filter(c=>c.t==='say');const B=bookOf(S);return [String(S.id),c.length,c.map(x=>x.mode+':'+(B[x.i]?(AUD['M|'+akey(B[x.i].zh)]?'clip':'NOCLIP'):'NOBOOK')).join(',')]})")
        chk(len(L) == 22 and all(x[1] == 1 and x[2].endswith(':clip') for x in L), f'one say screen in each of the 22 study units, each on a book sentence with a male clip {[x for x in L if x[1] != 1 or not x[2].endswith(":clip")]}')
        m1 = [x[2].split(':')[0] for x in L if '-' not in x[0]]
        chk(m1[:5] == ['echo'] * 5 and 'read' in m1[5:], f'Bài 1: echo in tập 1–5, read mixed in from tập 6 {m1}')
        chk(await pg.evaluate("SESSIONS.filter(S=>S.mix||S.test||S.rev).every(S=>(S.screens||[]).every(c=>c.t!=='say')) && !RT.has('say')"), 'no say screen in reviews/tests; never retried')
        await b.close()
        # 1) a microphone that hears speech, both sizes
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common + fake + ['--use-file-for-fake-audio-capture=' + voice])
        await run_mic(b, 'phone', {'width': 390, 'height': 844}, True)
        await run_mic(b, 'pad', {'width': 820, 'height': 1180}, False)
        await b.close()
        # 2) a quiet room: never stuck
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common + fake + ['--use-file-for-fake-audio-capture=' + room])
        ctx = await b.new_context(viewport={'width': 820, 'height': 1180}, has_touch=True, permissions=['microphone']); pg = await ctx.new_page()
        await goto_say(pg, 2); n = await need(pg)
        for _ in range(3): await rec(pg, int(n * 1000) + 600)
        chk(not await pg.evaluate('__say.done'), 'quiet room: speaking is not accepted')
        chk(await pg.query_selector('.sy-act .sy-did') is not None, 'quiet room: "Mình đã nói" after 3 tries')
        await pg.click('.sy-act .sy-did'); await pg.wait_for_timeout(300)
        chk(await pg.evaluate("__say.done && __say.how==='did'"), 'quiet room: the escape button finishes the screen')
        await check_answer(pg, 'quiet room')
        await b.close()
        # 3) microphone denied, 4) no microphone API, 5) skip; phone size
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common)
        for lab, init in (('denied', ''), ('no-api', "Object.defineProperty(navigator,'mediaDevices',{value:undefined,configurable:true})")):
            ctx = await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True)
            if init: await ctx.add_init_script(init)
            pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
            await goto_say(pg, 3)
            if lab == 'denied':
                chk(await pg.query_selector('.sy-mic') is not None, 'denied: mic button offered first')
                await pg.click('.sy-mic'); await pg.wait_for_selector('.sy-did', timeout=5000)
                chk('micro' in await pg.inner_text('#toast'), 'denied: toast explains the switch')
                ec = await pg.evaluate('window.__sayMicErr'); chk(bool(ec) and ('Mã lỗi: ' + ec) in await pg.inner_text('.sy-act'), f'denied: real error code shown ({ec})')
            else: chk(await pg.query_selector('.sy-mic') is None and await pg.query_selector('.sy-did') is not None, 'no-api: fallback from the start')
            nb = await nextbar(pg); chk(nb['dis'] and nb['vis'], f'{lab}: Tiếp disabled until done {nb}')
            await pg.evaluate('window.__plays.length=0'); await pg.click('.sy-did'); await pg.wait_for_timeout(700)
            key = await pg.evaluate("akey(sayLine(SESSIONS.find(x=>x.id===sid).screens[SS(sid).i]).zh)")
            chk(('M:' + key) in await pg.evaluate('__plays'), f'{lab}: after "Mình đã nói" the answer block reads the model')
            await check_answer(pg, lab)
            chk(not errs, f'{lab}: page errors {errs[:3]}')
            await ctx.close()
        ctx = await b.new_context(viewport={'width': 820, 'height': 1180}); pg = await ctx.new_page()
        await goto_say(pg, 8); s0 = await score_snap(pg)
        await pg.click('.sy-skip'); await pg.wait_for_timeout(500)
        chk(await pg.evaluate("__say.done && __say.how==='skip' && document.querySelector('.sy-act').offsetHeight===0"), 'skip: done, the microphone part goes away')
        await check_answer(pg, 'skip'); chk(await score_snap(pg) == s0, 'skip: nothing scored')
        await b.close()
        # 6) iOS-like audio session (refuses capture in 'playback'): switch to play-and-record to record, back to playback after
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common + fake + ['--use-file-for-fake-audio-capture=' + voice])
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True, permissions=['microphone'])
        await ctx.add_init_script('''(()=>{const as={type:'auto'};window.__asLog=[];Object.defineProperty(navigator,'audioSession',{value:new Proxy(as,{set(o,k,v){o[k]=v;if(k==='type')window.__asLog.push(v);return true}}),configurable:true});
          const g=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=c=>as.type==='playback'?Promise.reject(new DOMException('capture refused in playback session','NotAllowedError')):g(c);})()''')
        pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
        await goto_say(pg, 4); n = await need(pg)
        await rec(pg, int(n * 1000) + 900); await pg.wait_for_function('window.__say.done', timeout=5000)
        chk(await pg.evaluate("!window.__sayMicErr && __say.how==='rec'"), 'ios-session: recorded, no mic error')
        chk(await pg.evaluate("navigator.audioSession.type") == 'playback' and 'play-and-record' in await pg.evaluate('__asLog'), 'ios-session: play-and-record to record, back to playback after')
        chk(not errs, f'ios-session: page errors {errs[:3]}')
        # 7) safety stop: a take left running stops by itself after 60 s (and still counts when a voice was heard)
        await goto_say(pg, 5); await tap(pg); await pg.wait_for_function(REC_ON, timeout=6000)
        await pg.wait_for_function('window.__say.takes.length>0', timeout=70000)
        r = await pg.evaluate("[__say.takes[0].auto, Math.round(__say.takes[0].dur), __say.done, document.querySelector('.cm-msg').textContent]")
        chk(r[0] and 59 <= r[1] <= 62 and r[2] and 'tự dừng sau 60 giây' in r[3], f'safety stop after 60 s {r}')
        await b.close()
    print('SAY', 'FAIL' if fails else 'OK', len(fails), 'failures', fails[:20])
    sys.exit(1 if fails else 0)

if __name__ == '__main__':
    asyncio.run(main())

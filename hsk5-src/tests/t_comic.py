"""The 'comic' screen (Ghép truyện, Tập 3, two pages). Plays it to the end on iPhone 390x844 and iPad 820x1180 with BOTH ways of
placing a card (drag with a finger/mouse, and tap the card then tap the frame), with:
  - a fake microphone that 'speaks' (a looped tone file): hold 🎤 long enough -> card lights up; too short -> it does not,
  - a fake microphone that only hears room noise: 3 failed holds -> the escape button 'Mình đã đọc' appears (never stuck),
  - a denied microphone: the card switches to 'Nghe mẫu rồi bấm Mình đã đọc',
  - no microphone API at all: the fallback from the start.
Checks: Tiếp disabled until the page is done and always visible, no auto-advance, wrong frame -> card goes back + a hint,
first placement scored (wrong -> taught words of that sentence go to revision), model voice spoken after each correct card,
the film lights every frame and plays the learner's recordings, then 'Nghe giọng mẫu' plays every sentence in the model voice,
leaving the screen removes the floating bar and stops the microphone. Screenshots n_comic_*.png. Prints COMIC OK."""
import asyncio, os, sys, wave, math, random, struct
from playwright.async_api import async_playwright
from comic_util import *
BASE = 'http://127.0.0.1:8765/index.html'
HERE = os.path.dirname(os.path.abspath(__file__))
TMP = os.environ.get('HSK5_TMP', '/tmp')

def wav(path, amp, secs=3.0):
    w = wave.open(path, 'wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(48000); random.seed(1)
    fr = bytearray()
    for k in range(int(48000 * secs)):
        v = amp * (0.6 * math.sin(2 * math.pi * 220 * k / 48000) + 0.3 * math.sin(2 * math.pi * 660 * k / 48000)) if amp > 0.01 else amp * random.uniform(-1, 1)
        fr += struct.pack('<h', int(max(-1, min(1, v)) * 32767))
    w.writeframes(bytes(fr)); w.close(); return path

fails = []
def chk(c, m):
    if not c: fails.append(m); print('FAIL', m)

async def goto_comic(pg, page=0):
    await pg.goto(BASE); await pg.wait_for_timeout(400)
    await pg.evaluate("st.auto=1; st.openAll=1; window.__comicTakes=[]")
    i = await pg.evaluate(f"SESSIONS.find(s=>s.id===3).screens.findIndex(c=>c.t==='comic')+{page}")
    await pg.evaluate(f"st.sess[3]={{i:{i},b:{i},done:0}}; play(3)"); await pg.wait_for_timeout(500)
    return i

async def nextbar(pg):
    return await pg.evaluate('''(()=>{const nx=document.getElementById('next'),r=nx.getBoundingClientRect(),hit=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2);
      return {dis:nx.disabled, vis:r.top>=0&&r.bottom<=innerHeight&&!!hit&&(hit===nx||nx.contains(hit))}})()''')

async def play_page(pg, lab, how, finger, mic=True, wrong=False, shot=None):
    """read + place every card of the current comic page; returns the index of the card placed wrongly first (or None)"""
    cards = await bank(pg); nf = len(await frames(pg)); wrong_i = None
    nb = await nextbar(pg); chk(nb['dis'] and nb['vis'], f'{lab}: Tiếp disabled and visible before the page is done {nb}')
    for k, i in enumerate(cards):
        n = await frame_of(pg, i)
        if mic:
            if k == 0:   # too short a hold does not count
                await open_card(pg, i); await hold_mic(pg, 650, finger)
                chk(await pg.evaluate("document.querySelector('.cm-put').hidden"), f'{lab}: a 0.65 s hold must not pass')
                chk('Giữ nút' in await pg.inner_text('.cm-msg') or 'Chưa nghe' in await pg.inner_text('.cm-msg'), f'{lab}: message after a short hold')
                await hold_mic(pg, int(await need(pg, i) * 1000) + 900, finger); await pg.wait_for_selector('.cm-put:not([hidden])', timeout=4000)
            else: await read_mic(pg, i, finger)
        else: await read_nomic(pg, i)
        chk(await pg.evaluate(f'''document.querySelector('.cm-card[data-i="{i}"]').classList.contains('rdy')'''), f'{lab}: card {i} lights up after reading')
        await pg.evaluate('window.__plays.length=0')
        if wrong and k == 1:   # once: a wrong frame first
            wrong_i = i; bad = (n + 1) % nf
            if how == 'tap': await place_tap(pg, bad)
            else: await place_drag(pg, i, bad, finger)
            chk('Chưa đúng khung' in await pg.inner_text('#stage'), f'{lab}: hint after a wrong frame')
            chk(await pg.evaluate(f'''!!document.querySelector('.cm-bank .cm-card[data-i="{i}"]')'''), f'{lab}: card goes back to the pile')
            if how == 'tap': await pg.click(f'.cm-card[data-i="{i}"]'); await pg.wait_for_timeout(150); await pg.click(f'.cm-fr[data-f="{n}"] .cm-pic'); await pg.wait_for_timeout(300)
            else: await place_drag(pg, i, n, finger)
        elif how == 'tap': await place_tap(pg, n)
        else: chk(await place_drag(pg, i, n, finger), f'{lab}: drag reached frame {n}')
        chk(await pg.evaluate(f'__comic.placed[{i}]==={n}'), f'{lab}: card {i} placed in frame {n} by {how}')
        await pg.wait_for_timeout(450)
        chk(await pg.evaluate(f"__plays.includes('M:'+akey(BOOK[{i}].zh))"), f'{lab}: model voice spoken after card {i}')
        if shot and k == len(cards) // 2: await pg.screenshot(path=os.path.join(HERE, shot))
        if k < len(cards) - 1:
            nb = await nextbar(pg); chk(nb['dis'] and nb['vis'], f'{lab}: Tiếp still locked after {k + 1} cards {nb}')
    return wrong_i

async def after_page(pg, lab, key_i, wrong_i, recs, shot=None):
    nb = await nextbar(pg); chk(not nb['dis'] and nb['vis'], f'{lab}: Tiếp open and visible when done {nb}')
    i0 = await pg.evaluate('SS(3).i'); await pg.wait_for_timeout(1200)
    chk(await pg.evaluate('SS(3).i') == i0, f'{lab}: no auto-advance')
    chk('Đúng!' not in await pg.inner_text('#stage'), f'{lab}: no "Đúng!" text')
    res = await pg.evaluate(f"st.res['3:{key_i}']"); chk(res == (0 if wrong_i is not None else 1), f'{lab}: first-placement score {res}')
    if wrong_i is not None:
        bad = await pg.evaluate(f"[...new Set(segs(BOOK[{wrong_i}].zh).map(x=>x.k).filter(k=>W[k]))].filter(k=>!(st.wl[k]&&st.wl[k].fail))")
        chk(not bad, f'{lab}: taught words of the wrongly placed sentence go to revision {bad}')
    ids = await pg.evaluate(f'{CUR}.ids'); nf = len(await frames(pg))
    await pg.evaluate('window.__plays.length=0'); await pg.click('.cm-film')
    await pg.wait_for_function('window.__comicFilm&&__comicFilm.done', timeout=90000)
    fl = await pg.evaluate('__comicFilm'); plays = await pg.evaluate('__plays.slice()')
    chk(fl['frames'] == list(range(nf)), f'{lab}: film lights every frame {fl}')
    want = [f'REC:{i}' for i in ids] if recs else []
    chk(all(w in plays for w in want), f'{lab}: film plays the learner recordings {plays}')
    if not recs:
        mk = [await pg.evaluate(f'akey(BOOK[{i}].zh)') for i in ids]
        chk(all('M:' + k in plays for k in mk), f'{lab}: film without recordings uses the model voice')
    chk(await pg.query_selector('.cm-model') is not None, f'{lab}: "Nghe giọng mẫu" offered after the film')
    if shot: await pg.screenshot(path=os.path.join(HERE, shot))
    await pg.evaluate('window.__plays.length=0'); await pg.click('.cm-model')
    await pg.wait_for_function('window.__comicFilm&&__comicFilm.model&&__comicFilm.done', timeout=90000)
    plays = await pg.evaluate('__plays.slice()')
    keys = [await pg.evaluate(f'akey(BOOK[{i}].zh)') for i in ids]
    chk(all('M:' + k in plays for k in keys) and not any(p.startswith('REC') for p in plays), f'{lab}: model film plays every sentence in the model voice')
    nb = await nextbar(pg); chk(not nb['dis'] and nb['vis'], f'{lab}: Tiếp visible after the film')

async def full_run(b, lab, vp, mobile, how1, how2):
    ctx = await b.new_context(viewport=vp, has_touch=True, is_mobile=mobile, permissions=['microphone'])
    pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
    finger = Finger(pg, await ctx.new_cdp_session(pg) if mobile else None)
    k1 = await goto_comic(pg)
    w = await play_page(pg, f'{lab} p1 {how1}', how1, finger, wrong=True, shot=f'n_comic_doing_{lab}.png')
    takes = await pg.evaluate('__comicTakes'); chk(takes and all(t['any'] for t in takes), f'{lab}: the level meter reads the microphone {takes[:2]}')
    chk(all(t['rec'] for t in takes if t['ok']), f'{lab}: passing takes were recorded')
    await after_page(pg, f'{lab} p1', k1, w, True, shot=f'n_comic_done_{lab}.png')
    await pg.click('#next'); await pg.wait_for_timeout(500)
    chk(await pg.evaluate(f"{CUR}.t") == 'comic', f'{lab}: page 2 follows')
    w2 = await play_page(pg, f'{lab} p2 {how2}', how2, finger)
    await after_page(pg, f'{lab} p2', k1 + 1, w2, True)
    await pg.click('#next'); await pg.wait_for_timeout(500)
    chk(await pg.evaluate(f"{CUR}.t") == 'album', f'{lab}: album after the comic')
    left = await pg.evaluate("({hold:!!document.querySelector('.cm-hold'),ghost:!!document.querySelector('.cm-ghost'),cls:document.body.classList.contains('cm-holding'),take:!!(__comic&&__comic.take),recs:Object.keys(__comic.rec).length})")
    chk(not any(left.values()), f'{lab}: comic cleaned up after leaving {left}')
    chk(not errs, f'{lab}: page errors {errs[:3]}')
    await ctx.close()

async def main():
    voice = wav(os.path.join(TMP, 'hsk5_fake_voice.wav'), 0.35)
    room = wav(os.path.join(TMP, 'hsk5_fake_room.wav'), 0.002)
    common = ['--no-sandbox', '--autoplay-policy=no-user-gesture-required']
    async with async_playwright() as p:
        # 1) a microphone that hears speech, both sizes, both placement methods
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common + ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--use-file-for-fake-audio-capture=' + voice])
        await full_run(b, 'phone', {'width': 390, 'height': 844}, True, 'drag', 'tap')
        await full_run(b, 'pad', {'width': 820, 'height': 1180}, False, 'tap', 'drag')
        await b.close()
        # 2) a microphone that only hears a quiet room: never stuck
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common + ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--use-file-for-fake-audio-capture=' + room])
        ctx = await b.new_context(viewport={'width': 820, 'height': 1180}, has_touch=True, permissions=['microphone']); pg = await ctx.new_page()
        await goto_comic(pg); i = (await bank(pg))[0]; await open_card(pg, i); f = Finger(pg)
        for _ in range(3):
            await hold_mic(pg, int(await need(pg, i) * 1000) + 600, f)
        chk(await pg.evaluate("document.querySelector('.cm-put').hidden"), 'quiet room: reading is not accepted')
        chk(await pg.query_selector('.cm-did:not([hidden])') is not None, 'quiet room: escape button after 3 tries')
        await pg.click('.cm-did'); chk(await pg.evaluate("!document.querySelector('.cm-put').hidden"), 'quiet room: escape button lets the card through')
        await b.close()
        # 3) microphone denied, and 4) no microphone API: listen + 'Mình đã đọc', the whole page, film with the model voice
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common)
        for lab, init in (('denied', ''), ('no-api', "Object.defineProperty(navigator,'mediaDevices',{value:undefined,configurable:true})")):
            ctx = await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True)
            if init: await ctx.add_init_script(init)
            pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
            k1 = await goto_comic(pg, 1)
            i = (await bank(pg))[0]; await open_card(pg, i)
            if lab == 'denied':
                chk(await pg.query_selector('.cm-mic') is not None, 'denied: mic button offered first')
                await pg.click('.cm-mic'); await pg.wait_for_selector('.cm-did', timeout=5000)
                chk('micro' in await pg.inner_text('#toast'), 'denied: toast explains the switch')
                ec = await pg.evaluate('window.__comicMicErr'); chk(bool(ec) and ('Mã lỗi: ' + ec) in (await pg.inner_text('.cm-big')), f'denied: real error code shown in the card ({ec})')
            else: chk(await pg.query_selector('.cm-mic') is None and await pg.query_selector('.cm-did') is not None, 'no-api: fallback from the start')
            await pg.click('.cm-x')
            await play_page(pg, lab, 'tap', Finger(pg), mic=False)
            await after_page(pg, lab, k1, None, False)
            chk(await pg.evaluate("__comicFilm.frames.length")==len(await frames(pg)), f'{lab}: film ran')
            chk(not errs, f'{lab}: page errors {errs[:3]}')
            await ctx.close()
        await b.close()
        # 5) iOS-like audio session: the microphone is refused while navigator.audioSession.type is 'playback'
        #    (the page sets 'playback' at load); the app must switch to 'play-and-record' before asking, and back after
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=common + ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--use-file-for-fake-audio-capture=' + voice])
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True, permissions=['microphone'])
        await ctx.add_init_script('''(()=>{const as={type:'auto'};window.__asLog=[];Object.defineProperty(navigator,'audioSession',{value:new Proxy(as,{set(o,k,v){o[k]=v;if(k==='type')window.__asLog.push(v);return true}}),configurable:true});
          const g=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=c=>as.type==='playback'?Promise.reject(new DOMException('capture refused in playback session','NotAllowedError')):g(c);})()''')
        pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
        await goto_comic(pg); i = (await bank(pg))[0]
        chk(await pg.evaluate("navigator.audioSession.type") == 'playback', 'ios-session: page starts in playback')
        await read_mic(pg, i, Finger(pg))
        chk(await pg.evaluate("!window.__comicMicErr"), 'ios-session: no mic error')
        chk(await pg.evaluate("navigator.audioSession.type") == 'playback', 'ios-session: back to playback after the take')
        chk('play-and-record' in await pg.evaluate("__asLog"), 'ios-session: switched to play-and-record to record')
        chk(not errs, f'ios-session: page errors {errs[:3]}')
        await b.close()
    print('COMIC', 'FAIL' if fails else 'OK', len(fails), 'failures', fails[:20])
    sys.exit(1 if fails else 0)
asyncio.run(main())

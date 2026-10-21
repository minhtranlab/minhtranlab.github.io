"""Helpers to play the 'comic' (Ghép truyện) screen from Playwright tests: read a card (mic hold or the no-mic fallback),
place it by drag (mouse or real touch through CDP) or by tap-then-tap. Used by t_comic.py, t_rules.py and t_all.py."""
import json
CUR = 'SESSIONS.find(x=>x.id===sid).screens[SS(sid).i]'

async def frames(pg):
    return await pg.evaluate(f'comicFrames({CUR}.ids).map(f=>f.ids)')

async def frame_of(pg, i):
    return [k for k, f in enumerate(await frames(pg)) if i in f][0]

async def bank(pg):
    return await pg.evaluate("[...document.querySelectorAll('.cm-bank .cm-card')].map(b=>+b.dataset.i)")

async def center(pg, sel):
    return await pg.evaluate(f'''(()=>{{const e=document.querySelector({json.dumps(sel)});const r=e.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2]}})()''')

class Finger:
    """press/move/release with the mouse, or with a real touch point (CDP) so the page sees pointerType 'touch'"""
    def __init__(s, pg, cdp=None): s.pg, s.cdp = pg, cdp
    async def down(s, x, y):
        if s.cdp: await s.cdp.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': x, 'y': y}]})
        else: await s.pg.mouse.move(x, y); await s.pg.mouse.down()
    async def move(s, x, y):
        if s.cdp: await s.cdp.send('Input.dispatchTouchEvent', {'type': 'touchMove', 'touchPoints': [{'x': x, 'y': y}]})
        else: await s.pg.mouse.move(x, y)
    async def up(s, x, y):
        if s.cdp: await s.cdp.send('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
        else: await s.pg.mouse.up()

async def need(pg, i):
    return await pg.evaluate(f'Math.max(1,COMIC.perChar*COMIC.share*akey(BOOK[{i}].zh).length)')

async def open_card(pg, i):
    await pg.evaluate(f'''document.querySelector('.cm-card[data-i="{i}"]').scrollIntoView({{block:'center'}})''')
    await pg.wait_for_timeout(150)
    await pg.click(f'.cm-card[data-i="{i}"]'); await pg.wait_for_selector('.cm-big', timeout=3000)

async def hold_mic(pg, ms, finger):
    x, y = await center(pg, '.cm-mic')
    await finger.down(x, y); await pg.wait_for_timeout(ms); await finger.up(x, y)
    await pg.wait_for_timeout(500)

async def read_mic(pg, i, finger, extra=900):
    """open card i and read it holding the microphone button long enough"""
    await open_card(pg, i)
    await hold_mic(pg, int(await need(pg, i) * 1000) + extra, finger)
    await pg.wait_for_selector('.cm-put:not([hidden])', timeout=4000)

async def read_nomic(pg, i):
    """open card i; if a mic button is shown, tap it (it fails in this browser) and wait for the fallback; then listen + 'Mình đã đọc'"""
    await open_card(pg, i)
    if await pg.query_selector('.cm-mic'):
        await pg.click('.cm-mic'); await pg.wait_for_selector('.cm-did', timeout=5000)
    if await pg.evaluate("document.querySelector('.cm-did').disabled"): await pg.click('.cm-sam')
    await pg.click('.cm-did'); await pg.wait_for_selector('.cm-put:not([hidden])', timeout=3000)

async def place_tap(pg, n):
    """after reading: 'Đặt thẻ vào khung' (holds the card), then tap frame n"""
    await pg.click('.cm-put'); await pg.wait_for_timeout(250)
    await pg.click(f'.cm-fr[data-f="{n}"] .cm-pic'); await pg.wait_for_timeout(250)

async def place_drag(pg, i, n, finger):
    """after reading: close the big card, drag card i onto frame n (the stage scrolls when the finger nears its edge)"""
    if await pg.query_selector('.cm-x'): await pg.click('.cm-x'); await pg.wait_for_timeout(200)
    await pg.evaluate(f'''document.querySelector('.cm-card[data-i="{i}"]').scrollIntoView({{block:'center'}})''')
    await pg.wait_for_timeout(250)
    x, y = await center(pg, f'.cm-card[data-i="{i}"]')
    await finger.down(x, y)
    for k in range(1, 5): await finger.move(x, y - 10 * k); await pg.wait_for_timeout(16)
    cx, cy = x, y - 40
    for _ in range(120):
        r = await pg.evaluate(f'''(()=>{{const f=document.querySelector('.cm-fr[data-f="{n}"]').getBoundingClientRect(),s=document.getElementById('stage').getBoundingClientRect(),ft=document.querySelector('footer').getBoundingClientRect().top;
          return {{x:f.left+f.width/2,y:f.top+Math.min(f.height/2,90),t:s.top,b:ft}}}})()''')
        if r['t'] + 80 <= r['y'] <= r['b'] - 80:
            for k in range(1, 5): await finger.move(cx + (r['x'] - cx) * k / 4, cy + (r['y'] - cy) * k / 4); await pg.wait_for_timeout(16)
            await pg.wait_for_timeout(60); await finger.up(r['x'], r['y']); await pg.wait_for_timeout(300); return True
        ty = r['t'] + 25 if r['y'] < r['t'] + 80 else r['b'] - 25
        for k in range(1, 4): await finger.move(cx, cy + (ty - cy) * k / 3); await pg.wait_for_timeout(16)
        cy = ty; await pg.wait_for_timeout(90)
    await finger.up(cx, cy); return False

async def solve_nomic(pg, wrongfirst=False):
    """play the whole comic page in a browser without a usable microphone, tap placement (used by t_all / t_rules)"""
    first = True
    for i in await bank(pg):
        n = await frame_of(pg, i)
        await read_nomic(pg, i)
        if wrongfirst and first:
            await pg.click('.cm-put'); await pg.wait_for_timeout(150)
            nf = len(await frames(pg)); await pg.click(f'.cm-fr[data-f="{(n + 1) % nf}"] .cm-pic'); await pg.wait_for_timeout(300)
            await pg.click(f'.cm-card[data-i="{i}"]'); await pg.wait_for_timeout(150)   # card is read already: tap holds it
            await pg.click(f'.cm-fr[data-f="{n}"] .cm-pic'); await pg.wait_for_timeout(250)
        else:
            await place_tap(pg, n)
        first = False

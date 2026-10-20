"""Self-update (HANDOFF §6d): a new deploy reaches an open / home-screen app without re-adding it.
Serves a copy of hsk5/ (build A) on :8767, opens the app, then swaps in build B (different version.json + index.html) and checks:
  - a version check on visibilitychange inside a lesson does NOT show the banner and does not touch the lesson;
  - checks are throttled to once a minute;
  - back at home the banner 'Có bản mới — bấm để cập nhật' appears (and hides again when a lesson starts);
  - tapping it loads build B (via ./?v=<new>), progress kept, no banner afterwards;
  - the service worker never answers index.html or version.json."""
import asyncio, http.server, json, os, re, shutil, socketserver, sys, tempfile, threading
from playwright.async_api import async_playwright
SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'hsk5')
ROOT = tempfile.mkdtemp(prefix='hsk5upd_')
for f in os.listdir(SITE):
    s = os.path.join(SITE, f)
    if f == 'audio': os.symlink(os.path.abspath(s), os.path.join(ROOT, 'audio'))
    elif os.path.isfile(s): shutil.copy(s, ROOT)
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(s, *a, **k): super().__init__(*a, directory=ROOT, **k)
    def do_GET(s):
        if s.path.split('?')[0] == '/config.js':
            b = b"window.HSK5={api:''};"; s.send_response(200); s.send_header('Content-Type', 'application/javascript'); s.send_header('Content-Length', str(len(b))); s.end_headers(); s.wfile.write(b); return
        super().do_GET()
    def end_headers(s):   # like GitHub Pages: HTML may be cached for 10 minutes
        s.send_header('Cache-Control', 'max-age=600'); super().end_headers()
    def log_message(s, *a): pass
socketserver.TCPServer.allow_reuse_address = True
srv = socketserver.ThreadingTCPServer(('127.0.0.1', 8767), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = 'http://127.0.0.1:8767/index.html'
VIS = "Object.defineProperty(document,'hidden',{get:()=>false,configurable:true});document.dispatchEvent(new Event('visibilitychange'))"

async def main():
    fails = []
    def chk(c, m):
        print('ok  ' if c else 'FAIL', m)
        if not c: fails.append(m)
    A = json.load(open(os.path.join(ROOT, 'version.json')))['v']; B = 'b' * 12
    async with async_playwright() as p:
        br = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium', args=['--no-sandbox', '--autoplay-policy=no-user-gesture-required'])
        pg = await (await br.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True)).new_page()
        errs, vreq, swhit = [], [], []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.on('request', lambda r: vreq.append(r.url) if '/version.json' in r.url else None)
        pg.on('response', lambda r: swhit.append(r.url) if r.from_service_worker and ('version.json' in r.url or r.url.split('?')[0].endswith(('/', '.html'))) else None)
        await pg.goto(URL); await pg.wait_for_timeout(900)
        chk(await pg.evaluate('APP_V') == A, f'build A stamped with its version ({A})')
        chk(len(vreq) == 1 and 't=' in vreq[0], f'version checked once on start with ?t= ({len(vreq)})')
        chk(await pg.query_selector('.upd') is None, 'no banner when the version matches')
        # into a lesson, make some progress
        await pg.evaluate('play(1)'); await pg.wait_for_timeout(200)
        for _ in range(2): await pg.click('#next'); await pg.wait_for_timeout(150)
        i0 = await pg.evaluate('SS(1).i')
        # deploy build B
        html = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
        assert html.count(f"'{A}'") == 1
        open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf-8').write(html.replace(f"'{A}'", f"'{B}'").replace('<head>', '<head><meta name="build" content="B">', 1))
        open(os.path.join(ROOT, 'version.json'), 'w').write(json.dumps({'v': B}))
        await pg.evaluate('UPD.last -= 61000'); await pg.evaluate(VIS); await pg.wait_for_timeout(600)
        chk(await pg.evaluate('UPD.newV') == B, 'new version detected on visibilitychange')
        chk(await pg.query_selector('.upd') is None, 'no banner in the middle of a lesson')
        chk(await pg.evaluate('inScreen && SS(1).i') == i0 and await pg.query_selector('#stage') is not None, f'lesson untouched (screen {i0 + 1})')
        n = len(vreq); await pg.evaluate(VIS); await pg.wait_for_timeout(300)
        chk(len(vreq) == n, 'second check within a minute is skipped')
        await pg.click('#bHome'); await pg.wait_for_timeout(400)
        up = await pg.query_selector('.upd')
        chk(up is not None and 'Có bản mới' in (await up.inner_text()), 'banner shown at home')
        if up:
            box = await up.bounding_box(); chk(box and box['y'] >= 0 and box['y'] + box['height'] <= 844 and abs(box['x'] + box['width'] / 2 - 195) < 3, f'banner centred inside the viewport {box}')
        await pg.evaluate('play(1)'); await pg.wait_for_timeout(200)
        chk(await pg.query_selector('.upd') is None, 'banner hidden again when a lesson starts')
        await pg.click('#bHome'); await pg.wait_for_timeout(300)
        async with pg.expect_navigation():
            await pg.click('.upd')
        await pg.wait_for_timeout(900)
        chk(f'v={B}' in pg.url, f'reloaded through ./?v=<new> ({pg.url})')
        chk(await pg.evaluate('APP_V') == B and await pg.evaluate("!!document.querySelector('meta[name=build]')"), 'build B is running')
        chk(await pg.evaluate('SS(1).i') == i0, 'progress kept across the update')
        chk(await pg.query_selector('#home') is not None and await pg.query_selector('.upd') is None, 'home shown, no banner after updating')
        await pg.evaluate('play(1)'); await pg.wait_for_timeout(300)
        chk(await pg.evaluate('SS(1).i') == i0 and await pg.query_selector('#stage .pane') is not None, 'lesson resumes on the same screen with the ?v= query string')
        sw = await pg.evaluate("navigator.serviceWorker.getRegistrations().then(r=>r.length)")
        chk(sw == 1, f'service worker registered ({sw})')
        chk(not swhit, f'service worker never served index.html / version.json {swhit}')
        chk(not errs, f'page errors {errs}')
        await br.close()
    srv.shutdown(); shutil.rmtree(ROOT, ignore_errors=True)
    print('UPDATE', 'FAIL' if fails else 'OK', fails)
    sys.exit(1 if fails else 0)
asyncio.run(main())

from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/opt/pw-browsers/chromium'); pg=b.new_page(viewport={'width':1024,'height':1024}); pg.goto('file:///tmp/ic/icon.html'); pg.locator('#i').screenshot(path='/tmp/ic/icon1024.png'); b.close()

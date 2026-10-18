"""Serve ../../hsk5 on http://127.0.0.1:8765 for the tests. /config.js is overridden to a blank API so tests never touch the real Google Sheet."""
import http.server, os, socketserver
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'hsk5')
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(s, *a, **k): super().__init__(*a, directory=ROOT, **k)
    def do_GET(s):
        if s.path.split('?')[0] == '/config.js':
            b = b"window.HSK5={api:''};"; s.send_response(200); s.send_header('Content-Type', 'application/javascript'); s.send_header('Content-Length', str(len(b))); s.end_headers(); s.wfile.write(b); return
        super().do_GET()
    def log_message(s, *a): pass
socketserver.TCPServer.allow_reuse_address = True
socketserver.TCPServer(('127.0.0.1', 8765), H).serve_forever()

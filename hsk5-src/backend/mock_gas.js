// Runs Code.gs under Node with a faithful-enough fake of SpreadsheetApp, so client + server can be tested end to end.
const fs = require('fs'), vm = require('vm'), http = require('http');
function coerce(v) { if (typeof v === 'string') { if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v); if (/^[=+@]/.test(v)) return '#ERROR!'; if (v.length > 50000) throw new Error('cell too long'); } return v; }
class Sheet { constructor(n) { this.n = n; this.rows = []; this.frozen = 0; }
  getLastRow() { return this.rows.length; }
  setFrozenRows() { }
  getRange(r, c, nr = 1, nc = 1) { const sh = this; return {
    setValues(v) { for (let i = 0; i < nr; i++) { const row = sh.rows[r - 1 + i] = sh.rows[r - 1 + i] || []; for (let j = 0; j < nc; j++) row[c - 1 + j] = coerce(v[i][j]); } for (let i = 0; i < sh.rows.length; i++) sh.rows[i] = sh.rows[i] || []; return this; },
    getValues() { const o = []; for (let i = 0; i < nr; i++) { const row = []; for (let j = 0; j < nc; j++) { const x = (sh.rows[r - 1 + i] || [])[c - 1 + j]; row.push(x === undefined ? '' : x); } o.push(row); } return o; },
    setFontWeight() { return this; } }; } }
const book = {}; 
const ctx = { console, JSON, Date, Number, String, Math,
  SpreadsheetApp: { getActiveSpreadsheet: () => ({ getSheetByName: n => book[n] || null, insertSheet: n => (book[n] = new Sheet(n)) }) },
  ContentService: { MimeType: { JSON: 'json' }, createTextOutput: t => ({ t, setMimeType() { return this; } }) },
  CacheService: { getScriptCache: () => ({ get: k => cache[k] === undefined ? null : cache[k], put: (k, v) => { cache[k] = v; } }) },
  LockService: { getScriptLock: () => ({ waitLock() { }, releaseLock() { } }) },
  Utilities: { formatDate: (d, tz, f) => d.toISOString().slice(0, 16).replace('T', ' ') } };
const cache = {};
vm.createContext(ctx); vm.runInContext(fs.readFileSync(__dirname + '/Code.gs', 'utf8'), ctx);
module.exports = { ctx, book, cache };
if (require.main === module) {
  ctx.setup();
  const codes = book.Students.rows.slice(1).map(r => r[0]); console.log('CODES', codes.join(','));
  http.createServer((req, res) => {
    const cors = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };
    if (req.method === 'OPTIONS') { res.writeHead(204, { ...cors, 'Access-Control-Allow-Headers': '*' }); return res.end(); }
    if (req.url.startsWith('/dump')) { res.writeHead(200, cors); return res.end(JSON.stringify({ State: book.State.rows.map(r => [r[0], r[1], (r[2] || '').length]), Feedback: book.Feedback.rows, Students: book.Students.rows })); }
    if (req.url.startsWith('/reset')) { Object.keys(cache).forEach(k => delete cache[k]); res.writeHead(200, cors); return res.end('{}'); }
    let b = ''; req.on('data', d => b += d); req.on('end', () => { const o = req.method === 'POST' ? ctx.doPost({ postData: { contents: b } }) : ctx.doGet({}); res.writeHead(200, cors); res.end(o.t); });
  }).listen(8766, () => console.log('mock apps script on 8766'));
}

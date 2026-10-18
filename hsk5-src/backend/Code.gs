/* =====================================================================
 * HSK5 · backend lưu tiến độ (Google Apps Script, gắn vào một Google Sheet)
 * Việc của nó: đăng nhập bằng mã học viên, lưu/đọc tiến độ, gom góp ý.
 * Nội dung bài học KHÔNG nằm ở đây (nằm trong trang web).
 * ===================================================================== */
var CFG = {
  TZ: 'Asia/Ho_Chi_Minh',
  CELL: 44000,        // Google Sheets giới hạn 50.000 ký tự mỗi ô, nên tiến độ được cắt thành nhiều ô
  PARTS: 8,           // tối đa 8 ô = 360.000 ký tự cho mỗi học viên
  FAILS: 30,          // quá 30 lần nhập sai mã trong 10 phút thì tạm khóa đăng nhập
  SEED: 5             // số mã tạo sẵn lần đầu chạy setup()
};
var TABS = {
  Students: ['code', 'name', 'active', 'lastSync', 'words', 'unitsDone', 'minToday', 'minTotal', 'streak'],
  State: ['code', 'ts', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
  Feedback: ['receivedAt', 'code', 'at', 'where', 'cat', 'msg', 'ctx']
};

/** Chạy MỘT LẦN trong trình soạn thảo: tạo 3 tab và vài mã học viên ngẫu nhiên. */
function setup() {
  Object.keys(TABS).forEach(function (n) { tab_(n); });
  var sh = tab_('Students');
  if (sh.getLastRow() < 2) {
    var rows = [];
    for (var i = 0; i < CFG.SEED; i++) rows.push([newCode_(), '', 'yes', '', 0, 0, 0, 0, 0]);
    sh.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
  }
  return 'Xong. Mở tab Students để xem mã học viên (cột code) và điền tên vào cột name.';
}
function newCode_() {
  var A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789', s = '';
  for (var i = 0; i < 6; i++) s += A.charAt(Math.floor(Math.random() * A.length));
  return 'HSK-' + s;
}
function tab_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet(), sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, TABS[name].length).setValues([TABS[name]]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function doGet() { return out_({ ok: true, app: 'hsk5', v: 1 }); }

function doPost(e) {
  var req;
  try { req = JSON.parse(e.postData.contents); } catch (err) { return out_({ ok: false, err: 'bad-request' }); }
  try {
    if (req.a === 'login') return out_(login_(req));
    if (req.a === 'push') return out_(push_(req));
    return out_({ ok: false, err: 'unknown-action' });
  } catch (err) { return out_({ ok: false, err: String(err && err.message || err) }); }
}

/* ---- tìm học viên ---- */
function findStudent_(code) {
  var sh = tab_('Students'), n = sh.getLastRow();
  if (n < 2) return null;
  var vals = sh.getRange(2, 1, n - 1, TABS.Students.length).getValues();
  var want = String(code || '').trim().toUpperCase();
  for (var i = 0; i < vals.length; i++) {
    if (String(vals[i][0]).trim().toUpperCase() === want && want) {
      if (String(vals[i][2]).toLowerCase() === 'no') return null;
      return { row: i + 2, name: String(vals[i][1] || ''), code: String(vals[i][0]).trim() };
    }
  }
  return null;
}
function failed_() {
  var c = CacheService.getScriptCache(), n = Number(c.get('fails') || 0) + 1;
  c.put('fails', String(n), 600);
}
function locked_() { return Number(CacheService.getScriptCache().get('fails') || 0) >= CFG.FAILS; }

/* ---- tiến độ: một dòng cho mỗi học viên, JSON cắt thành các ô p1..p8 ---- */
function readState_(code) {
  var sh = tab_('State'), n = sh.getLastRow();
  if (n < 2) return { row: 0, ts: 0, json: '' };
  var vals = sh.getRange(2, 1, n - 1, TABS.State.length).getValues();
  for (var i = 0; i < vals.length; i++) {
    if (String(vals[i][0]) === code) {
      return { row: i + 2, ts: Number(vals[i][1]) || 0, json: vals[i].slice(2).map(function (c) { return c === '' ? '' : String(c).substr(1); }).join('') };
    }
  }
  return { row: 0, ts: 0, json: '' };
}
function login_(req) {
  if (locked_()) return { ok: false, err: 'locked' };
  var s = findStudent_(req.code);
  if (!s) { failed_(); return { ok: false, err: 'bad-code' }; }
  var st = readState_(s.code);
  return { ok: true, name: s.name, code: s.code, ts: st.ts, state: st.json ? JSON.parse(st.json) : null };
}
function push_(req) {
  if (locked_()) return { ok: false, err: 'locked' };
  var s = findStudent_(req.code);
  if (!s) { failed_(); return { ok: false, err: 'bad-code' }; }
  var lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    var cur = readState_(s.code), base = Number(req.base) || 0;
    // một thiết bị khác đã lưu sau lần cuối thiết bị này đọc: trả bản đó về để máy khách gộp rồi gửi lại
    if (cur.ts && base !== cur.ts) return { ok: true, conflict: true, ts: cur.ts, state: JSON.parse(cur.json) };
    var json = JSON.stringify(req.state || {});
    if (json.length > CFG.CELL * CFG.PARTS) return { ok: false, err: 'too-big' };
    // dấu ~ ở đầu mỗi ô để Google Sheets không tự biến đoạn văn bản thành số hay công thức
    var parts = []; for (var i = 0; i < CFG.PARTS; i++) { var ch = json.substr(i * CFG.CELL, CFG.CELL); parts.push(ch ? '~' + ch : ''); }
    var ts = Date.now(), sh = tab_('State'), row = [s.code, ts].concat(parts);
    if (cur.row) sh.getRange(cur.row, 1, 1, row.length).setValues([row]);
    else sh.getRange(sh.getLastRow() + 1, 1, 1, row.length).setValues([row]);
    summary_(s, req.sum || {}, ts);
    feedback_(s.code, (req.state && req.state.fb) || []);
    return { ok: true, ts: ts };
  } finally { lock.releaseLock(); }
}
function summary_(s, m, ts) {
  var sh = tab_('Students');
  sh.getRange(s.row, 4, 1, 6).setValues([[Utilities.formatDate(new Date(ts), CFG.TZ, 'yyyy-MM-dd HH:mm'),
    Number(m.words) || 0, Number(m.units) || 0, Number(m.minToday) || 0, Number(m.minTotal) || 0, Number(m.streak) || 0]]);
}
/** góp ý: mỗi góp ý chỉ ghi một lần (nhận diện bằng mã học viên + thời điểm tạo) */
function feedback_(code, list) {
  if (!list || !list.length) return;
  var sh = tab_('Feedback'), n = sh.getLastRow(), seen = {};
  if (n > 1) sh.getRange(2, 2, n - 1, 2).getValues().forEach(function (r) { seen[r[0] + '|' + r[1]] = 1; });
  var add = [], now = Utilities.formatDate(new Date(), CFG.TZ, 'yyyy-MM-dd HH:mm');
  list.forEach(function (f) {
    if (!f || seen[code + '|' + f.at]) return;
    add.push([now, code, String(f.at || ''), String(f.where || ''), String(f.cat || ''), String(f.msg || ''), JSON.stringify(f.ctx || '').slice(0, 2000)]);
  });
  if (add.length) sh.getRange(n + 1, 1, add.length, 7).setValues(add);
}

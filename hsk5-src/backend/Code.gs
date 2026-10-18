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
  sh.getRange(2, 4, 1000, 1).setNumberFormat('yyyy-mm-dd hh:mm');
  docs_();
  return 'Xong. Có sẵn tab README (hướng dẫn) và tab Báo cáo. Mở tab Students để xem mã học viên (cột code).';
}
/** Tạo lại tab README và Báo cáo (chạy lại bao nhiêu lần cũng được, không đụng tới dữ liệu học viên). */
function refreshDocs() { docs_(); return 'Đã cập nhật README và Báo cáo.'; }
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
  sh.getRange(s.row, 4, 1, 6).setValues([[new Date(ts),
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


/* =====================================================================
 * Phần dành cho người quản lý Sheet: menu, thêm học viên, README, báo cáo
 * ===================================================================== */
function onOpen() {
  try {
    SpreadsheetApp.getUi().createMenu('HSK5')
      .addItem('Thêm học viên mới', 'addStudent')
      .addItem('Cập nhật README và Báo cáo', 'refreshDocs')
      .addToUi();
  } catch (e) { }
}
/** Thêm một dòng vào Students. code để trống = tạo mã ngẫu nhiên. Trả về mã đã dùng, hoặc '' nếu mã bị trùng. */
function addStudentRow_(name, code) {
  var sh = tab_('Students'), n = sh.getLastRow(), want = String(code || '').trim();
  if (want) {
    var have = n > 1 ? sh.getRange(2, 1, n - 1, 1).getValues() : [];
    for (var i = 0; i < have.length; i++) if (String(have[i][0]).trim().toUpperCase() === want.toUpperCase()) return '';
  } else want = newCode_();
  sh.getRange(n + 1, 1, 1, TABS.Students.length).setValues([[want, String(name || ''), 'yes', '', 0, 0, 0, 0, 0]]);
  return want;
}
function addStudent() {
  var ui = SpreadsheetApp.getUi();
  var a = ui.prompt('Thêm học viên', 'Tên học viên (để tự nhớ):', ui.ButtonSet.OK_CANCEL);
  if (a.getSelectedButton() !== ui.Button.OK) return;
  var b = ui.prompt('Thêm học viên', 'Mã đăng nhập. Để trống thì tạo mã ngẫu nhiên. Có thể tự đặt, ví dụ lan1:', ui.ButtonSet.OK_CANCEL);
  if (b.getSelectedButton() !== ui.Button.OK) return;
  var code = addStudentRow_(a.getResponseText(), b.getResponseText());
  ui.alert(code ? 'Đã thêm. Mã đăng nhập: ' + code : 'Mã này đã có rồi, hãy chọn mã khác.');
}

var README_ = [
  '#HSK5 – Tiến độ: tài liệu hướng dẫn cho người quản lý',
  'Đây là "sổ cái" của app học HSK5. App ở https://minhtranlab.github.io/hsk5/ . Mỗi người học có một mã riêng; tiến độ và góp ý của họ tự chạy về đây. Nội dung bài học KHÔNG nằm trong Sheet này (nằm trong trang web).',
  '',
  '#Các tab trong Sheet',
  '• README: trang này.',
  '• Báo cáo: tự cập nhật. Ai học gần đây, ai vắng bao nhiêu ngày, tổng số phút, 10 góp ý mới nhất. Chỉ xem, không cần sửa.',
  '• Students: danh sách học viên. Cột code (mã đăng nhập), name (tên), active (yes hoặc no) do cậu điền. Các cột lastSync, words, unitsDone, minToday, minTotal, streak do app tự ghi, đừng sửa tay.',
  '• State: tiến độ chi tiết của từng người (dữ liệu máy đọc, nhìn thấy chữ lộn xộn là bình thường). Đừng sửa, đừng xóa.',
  '• Feedback: góp ý người dùng gửi từ khung góp ý trong bài học (mã, thời điểm, màn nào, loại, nội dung).',
  '',
  '#Thêm một học viên mới (cách dễ nhất)',
  '1) Trên thanh menu của Sheet bấm HSK5 (cạnh Trợ giúp). Nếu chưa thấy, tải lại trang Sheet (F5).',
  '2) Chọn "Thêm học viên mới".',
  '3) Gõ tên, bấm OK. Rồi gõ mã đăng nhập (ví dụ lan1) hoặc để trống để máy tạo mã ngẫu nhiên, bấm OK.',
  '4) Hộp thoại báo mã. Gửi mã đó cho người học cùng đường link app. Xong.',
  'Hoặc làm tay: mở tab Students, thêm một dòng mới ở cuối, điền cột code (không trùng ai), cột name, và cột active ghi yes.',
  '',
  '#Người học bắt đầu dùng như thế nào',
  '1) Mở https://minhtranlab.github.io/hsk5/ trên iPad hoặc điện thoại.',
  '2) Bấm vào mục đăng nhập ở màn hình chính, nhập mã (không phân biệt hoa thường).',
  '3) Từ đó tiến độ tự lưu. Đổi sang máy khác, nhập cùng mã là học tiếp.',
  '',
  '#Việc thường gặp',
  '• Khóa một người: ở tab Students ghi no vào cột active (ghi lại yes để mở lại).',
  '• Đổi mã của ai đó: sửa ô code trong tab Students. Mã cũ ngừng dùng ngay. Người đó đăng nhập lại bằng mã mới; dữ liệu cũ nằm trong tab State theo mã cũ, nên đổi mã thì coi như bắt đầu lại (muốn giữ thì sửa cả ô code ở dòng tương ứng của tab State thành mã mới).',
  '• Xem ai đang học: tab Báo cáo. "Vắng (ngày)" = số ngày kể từ lần lưu gần nhất. Tình trạng: Học hôm nay / Đều đặn (vắng 1–2 ngày) / Hơi vắng (3–6 ngày) / Vắng lâu (7 ngày trở lên).',
  '• Đọc góp ý: tab Feedback, hoặc 10 góp ý mới nhất ở góc phải tab Báo cáo.',
  '• Xóa tiến độ của một người để học lại từ đầu: nhờ chính người đó bấm "Xóa tiến độ" trong app (cách này đồng bộ cho mọi máy của họ). Đừng xóa dòng trong tab State, vì máy của họ sẽ ghi ngược lại.',
  '',
  '#Nếu có chuyện không ổn',
  '• Người học nói "không đăng nhập được": kiểm tra mã trong tab Students (đúng chính tả? active có phải no không?). Nhập sai trên 30 lần trong 10 phút thì hệ thống khóa tạm, chờ 10 phút rồi thử lại.',
  '• Tab Báo cáo trống hoặc báo lỗi: chạy menu HSK5 › Cập nhật README và Báo cáo.',
  '• Nếu app báo lỗi kết nối với Sheet: vào Tiện ích mở rộng › Apps Script › Triển khai › Quản lý các bản triển khai, kiểm tra "Execute as: Me" và "Who has access: Anyone".',
  '',
  '#Sửa mã backend (Code.gs) sau này – phải làm đúng thứ tự này',
  '1) Tiện ích mở rộng (Extensions) › Apps Script. Dán mã mới thay mã cũ, bấm Lưu.',
  '2) Chọn hàm setup rồi bấm Chạy (an toàn, không xóa dữ liệu, chỉ tạo lại README và Báo cáo).',
  '3) Triển khai (Deploy) › Quản lý các bản triển khai (Manage deployments) › bút chì › Phiên bản: Phiên bản mới (New version) › Triển khai. Địa chỉ /exec giữ nguyên, không phải sửa gì ở app.',
  '',
  '#Địa chỉ cần nhớ',
  '• App: https://minhtranlab.github.io/hsk5/',
  '• Mã nguồn: https://github.com/minhtranlab/minhtranlab.github.io (thư mục hsk5 là app đang chạy, hsk5-src là mã nguồn, trong đó backend/Code.gs là mã của Sheet này)',
  '• Địa chỉ Web app của Apps Script (đuôi /exec) được dán trong file hsk5/config.js trên GitHub.',
  '• Tài liệu bàn giao đầy đủ: hsk5-src/HANDOFF.md trong repo.',
  '',
  'Phiên bản Code.gs: 2'
];

function sheetFirst_(ss, name, pos) {
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  sh.activate(); ss.moveActiveSheet(pos);
  return sh;
}
function docs_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  try { ss.setSpreadsheetTimeZone(CFG.TZ); } catch (e) { }
  /* ---- README ---- */
  var rd = sheetFirst_(ss, 'README', 1);
  rd.clear();
  rd.setColumnWidth(1, 860);
  var vals = README_.map(function (l) { return [l.charAt(0) === '#' ? l.substr(1) : l]; });
  rd.getRange(1, 1, vals.length, 1).setValues(vals).setWrap(true).setVerticalAlignment('top');
  README_.forEach(function (l, i) { if (l.charAt(0) === '#') rd.getRange(i + 1, 1).setFontWeight('bold').setFontSize(i === 0 ? 14 : 11).setBackground(i === 0 ? '#e8f0fe' : '#f1f3f4'); });
  /* ---- Báo cáo: toàn bộ là công thức, tự cập nhật khi tab Students đổi ---- */
  var rp = sheetFirst_(ss, 'Báo cáo', 2);
  rp.clear();
  rp.getRange(1, 1).setValue('Báo cáo học viên').setFontWeight('bold').setFontSize(14);
  rp.getRange(2, 1).setValue('Tự cập nhật từ tab Students và Feedback. Chỉ xem, không sửa ở đây.');
  rp.getRange(4, 1, 1, 5).setValues([['Học viên đang bật', 'Đã học hôm nay', 'Học trong 7 ngày qua', 'Tổng phút của mọi người', 'Số góp ý đã nhận']]).setFontWeight('bold').setBackground('#f1f3f4');
  rp.getRange(5, 1).setFormula('=COUNTIFS(Students!A2:A,"<>",Students!C2:C,"<>no")');
  rp.getRange(5, 2).setFormula('=COUNTIF(I8:I,0)');
  rp.getRange(5, 3).setFormula('=COUNTIFS(I8:I,">=0",I8:I,"<=6")');
  rp.getRange(5, 4).setFormula('=SUM(Students!H2:H)');
  rp.getRange(5, 5).setFormula('=COUNTA(Feedback!A2:A)');
  rp.getRange(5, 1, 1, 5).setFontSize(16).setFontWeight('bold');
  rp.getRange(7, 1, 1, 10).setValues([['Tên', 'Mã', 'Lần học gần nhất', 'Unit xong', 'Từ đã học', 'Phút trong ngày học gần nhất', 'Tổng phút', 'Chuỗi ngày', 'Vắng (ngày)', 'Tình trạng']]).setFontWeight('bold').setBackground('#e8f0fe').setWrap(true);
  rp.getRange(8, 1).setFormula('=IFERROR(SORT(FILTER({Students!B2:B,Students!A2:A,Students!D2:D,Students!F2:F,Students!E2:E,Students!G2:G,Students!H2:H,Students!I2:I},Students!A2:A<>"",Students!C2:C<>"no"),3,FALSE),"")');
  rp.getRange(8, 9).setFormula('=ARRAYFORMULA(IF(B8:B="","",IF(ISNUMBER(C8:C),TODAY()-INT(C8:C),"")))');
  rp.getRange(8, 10).setFormula('=ARRAYFORMULA(IF(B8:B="","",IF(I8:I="","Chưa lưu lần nào",IF(I8:I=0,"Học hôm nay",IF(I8:I<=2,"Đều đặn",IF(I8:I<=6,"Hơi vắng","Vắng lâu"))))))');
  rp.getRange(8, 3, 500, 1).setNumberFormat('yyyy-mm-dd hh:mm');
  rp.getRange(6, 12).setValue('10 góp ý mới nhất').setFontWeight('bold');
  rp.getRange(7, 12).setFormula('=IFERROR(QUERY(Feedback!A1:G,"select A,B,D,E,F where A is not null order by A desc limit 10",1),"Chưa có góp ý")');
  rp.setColumnWidth(1, 150); rp.setColumnWidth(3, 130); rp.setColumnWidth(6, 150); rp.setColumnWidth(10, 130); rp.setColumnWidth(16, 420);
}

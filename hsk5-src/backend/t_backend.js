const { ctx, book, cache, order } = require('./mock_gas.js'); const assert = require('assert');
ctx.setup(); const code = book.Students.rows[1][0];
const call = o => JSON.parse(ctx.doPost({ postData: { contents: JSON.stringify(o) } }).t);
let r = call({ a: 'login', code: 'NOPE' }); assert(!r.ok && r.err === 'bad-code');
r = call({ a: 'login', code: code.toLowerCase() }); assert(r.ok && r.state === null && r.ts === 0, 'login ok, case-insensitive');
const big = { sess: { 1: { i: 3, done: 0 } }, junk: '=' + '9'.repeat(100000) + 'x', fb: [{ at: 'T1', where: 'u1', cat: 'sai', msg: 'câu này lạ', ctx: {} }] };
r = call({ a: 'push', code, base: 0, state: big, sum: { words: 7, units: 1, minToday: 5, minTotal: 40, streak: 2 } }); assert(r.ok && r.ts > 0, JSON.stringify(r));
const ts1 = r.ts;
r = call({ a: 'login', code }); assert(r.ok && r.ts === ts1 && r.state.junk === big.junk && r.state.sess[1].i === 3, 'state round-trips through 100KB of chunked cells');
r = call({ a: 'push', code, base: 0, state: { x: 1 } }); assert(r.ok && r.conflict && r.state.sess[1].i === 3, 'stale base -> conflict returns server state');
r = call({ a: 'push', code, base: ts1, state: { sess: { 1: { i: 4 } }, fb: big.fb.concat([{ at: 'T2', msg: 'thêm' }]) }, sum: { words: 8 } }); assert(r.ok && !r.conflict && r.ts >= ts1);
assert.strictEqual(book.Feedback.rows.length, 3, 'feedback written once per item: ' + book.Feedback.rows.length);
assert.strictEqual(book.Students.rows[1][4], 8, 'summary updated');
r = call({ a: 'push', code, base: r.ts, state: { huge: 'x'.repeat(400000) } }); assert(!r.ok && r.err === 'too-big');
for (let i = 0; i < 30; i++) call({ a: 'login', code: 'BAD' + i });
r = call({ a: 'login', code }); assert(!r.ok && r.err === 'locked', 'lockout after many wrong codes');

// --- README, report, add-student menu ---
assert.deepStrictEqual(order.slice(0, 2), ['README', 'Báo cáo'], 'README first, report second: ' + order);
assert(book.README.rows.length > 30 && /Thêm học viên mới/.test(book.README.rows.map(r => r[0]).join('\n')), 'README written');
assert(!book.README.rows.some(r => /^[=+@-]/.test(String(r[0]))), 'no README line looks like a formula');
const f = book['Báo cáo'].formulas; assert(f['8,1'].includes('FILTER') && f['8,9'].includes('ARRAYFORMULA') && f['7,12'].includes('QUERY') && f['5,1'], 'report formulas present');
assert(book.Students.rows[1][3] instanceof Date, 'lastSync is a real date, not text');
const before = book.Students.rows.length; ctx.setup(); assert.strictEqual(book.Students.rows.length, before, 'setup is idempotent for students');
const c1 = ctx.addStudentRow_('Lan', 'lan1'); assert.strictEqual(c1, 'lan1'); assert.strictEqual(ctx.addStudentRow_('X', 'LAN1'), '', 'duplicate code refused (case-insensitive)');
const c2 = ctx.addStudentRow_('Nam', ''); assert(/^HSK-/.test(c2), 'random code when blank');
Object.keys(cache).forEach(k => delete cache[k]); r = call({ a: 'login', code: 'LAN1' }); assert(r.ok && r.name === 'Lan', 'a student added through the menu can log in');
for (const k in f) { const x = f[k]; assert.strictEqual((x.match(/\(/g) || []).length, (x.match(/\)/g) || []).length, 'parens balance: ' + x); assert.strictEqual((x.match(/"/g) || []).length % 2, 0, 'quotes balance: ' + x); }
console.log('backend tests passed');

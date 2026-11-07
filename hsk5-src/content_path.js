/* ===== Bài 1: the study path, in order (same stages and order as before phiếu #9; titles come from SESSIONS).
   kind: learn | mix | comic | test | reader. A later chapter declares its own PATH in its content folder (ch2/story.js: CH2.PATH). ===== */
const PATH1 = [
  { id: 1, kind: 'learn' }, { id: 2, kind: 'learn' }, { id: 'm1', kind: 'mix', units: [1, 2] },
  { id: 3, kind: 'learn' }, { id: 4, kind: 'learn' }, { id: 'm2', kind: 'mix', units: [3, 4] },
  { id: 5, kind: 'learn' }, { id: 6, kind: 'learn' }, { id: 'm3', kind: 'mix', units: [5, 6] },
  { id: 7, kind: 'learn' }, { id: 8, kind: 'learn' }, { id: 'm4', kind: 'mix', units: [7, 8] },
  { id: 9, kind: 'learn' }, { id: 10, kind: 'learn' }, { id: 'm5', kind: 'mix', units: [9, 10] },
  { id: 11, kind: 'learn' }, { id: 'm6', kind: 'mix', units: [11] },
  { id: 't1', kind: 'test' }, { id: 'rd', kind: 'reader' }
];

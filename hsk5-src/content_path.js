/* ===== Bài 1: the study path, in order (titles of learn stages come from SESSIONS).
   kind: learn | mix | comic | test | reader. A later chapter declares its own PATH in its content folder (ch2/story.js: CH2.PATH).
   Phiếu #5 (Minh 01/11): Ôn tập and 🎬 Ghép truyện follow the STORY, not a fixed "2 units → 1 review":
   a Ghép truyện right after the last unit of each complete part of the story (covering exactly its book sentences, ids = BOOK indices),
   an Ôn tập just before it (the words of the units since the last review); a part longer than 3 units gets one more Ôn tập in the middle.
   Mix stages: o1–o5 (new ids; the old m1–m6 of the path before phiếu #5 are kept only in PATH1_OLD, to carry old progress over). ===== */
const PATH1 = [
  { id: 1, kind: 'learn' }, { id: 2, kind: 'learn' }, { id: 3, kind: 'learn' },
  { id: 'o1', kind: 'mix', units: [1, 2, 3] },
  { id: 'g1', kind: 'comic', title: 'Ghép truyện: Đài phát thanh và cặp thứ nhất', ids: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
  { id: 4, kind: 'learn' },
  { id: 'o2', kind: 'mix', units: [4] },
  { id: 'g2', kind: 'comic', title: 'Ghép truyện: Cặp thứ hai', ids: [9, 10, 11] },
  { id: 5, kind: 'learn' }, { id: 6, kind: 'learn' },
  { id: 'o3', kind: 'mix', units: [5, 6] },
  { id: 7, kind: 'learn' }, { id: 8, kind: 'learn' },
  { id: 'o4', kind: 'mix', units: [7, 8] },
  { id: 'g3', kind: 'comic', title: 'Ghép truyện: Cặp thứ ba và mảnh giấy', ids: [12, 13, 14, 15, 16, 17, 18, 19, 20] },
  { id: 9, kind: 'learn' }, { id: 10, kind: 'learn' }, { id: 11, kind: 'learn' },
  { id: 'o5', kind: 'mix', units: [9, 10, 11] },
  { id: 'g4', kind: 'comic', title: 'Ghép truyện: Giải thưởng thật sự', ids: [21, 22, 23, 24, 25, 26, 27, 28, 29] },
  { id: 't1', kind: 'test' }, { id: 'rd', kind: 'reader' }
];
/* the path before phiếu #5 (ids only). Used once per save by legacyOpen1(): everything up to the furthest learn unit that was OPEN on this
   path stays open on the new one, so nobody loses a unit they could already play. */
const PATH1_OLD = [1, 2, 'm1', 3, 4, 'm2', 5, 6, 'm3', 7, 8, 'm4', 9, 10, 'm5', 11, 'm6', 't1', 'rd'];

# Bài 2 《留串钥匙给父母》 — nội dung (đủ 20 chặng, phiếu #10 + #12)

build.py đọc thư mục này (CHAPTER_DIRS), viết hsk5/ch2.js (tải khi mở Bài 2) và chạy check_ch2.py. Xem HANDOFF §6 "Chapters".

**File** (thứ tự nạp tuỳ ý — đã thử 3 thứ tự, dữ liệu giống hệt): `words.js`, `learn.js`, `ety.js`, `story.js`, `bank.js`, `test.js`, `kit.js`, `glossary.txt`.
Mỗi file gán vào `window.CH2`: `WORDS, EP_META, LEARN, ETY, BOOK, SESSIONS, QB, MEAN, TESTBANK, PATH` (+ `CH2.SC`, `CH2.SCENE_LABEL`; `kit.js` cũng tự đăng ký cảnh `c2_*` vào `SC`/`SCENE_LABEL` nếu kit.js Bài 1 đã nạp trước).

**Kiểm tra:** `python3 hsk5-src/ch2/check_ch2.py` (thêm `-v` để xem thống kê) → phải in `problems: 0`. `node hsk5-src/ch2/dump_ch2.js [abc|ticket|rev]` = nạp vào window giả, in CH2 ra JSON.

**Có gì**
- 39 từ (WORDS, LEARN có câu nghe + whyNot, ETY, MEAN, QB 3 câu/từ). Story word (HSK6) `串 扑 铺`: `story: 1`, chỉ dạy nhận mặt chữ (QB: nghe + điền, không sắp câu/gõ).
- 11 tập học `2-1`…`2-11` (11–13 màn), 5 Ôn tập `2-m1`…`2-m5` (mix), 3 Ghép truyện `2-g1`…`2-g3` (app tự dựng từ PATH + cảnh của màn story: 6 / 5 / 6+3 khung), Kiểm tra `2-t` (app tự dựng khi đủ tập học + TESTBANK).
- `BOOK` 21 câu (câu lời cha tách `[9]|[10]`, câu dài tách ở "：" `[16]|[17]`); hai câu tập 4 (`[3]`, `[4]`) cùng một cảnh nên 🎬1 vừa 1 trang 6 khung.

**Điều chat App cần biết** (chưa làm được nếu không sửa app)
- `SESSIONS` mix có `ext: [màn…]` = thẻ mở rộng chiếu TRƯỚC các câu ôn (2-m2: 挣断 "giãy đứt"; 2-m3: nhắc 悄悄–偷偷; 2-m5: bẫy cùng âm 扑/铺). buildMix hiện bỏ qua `ext`. Gợi ý: `screens = ext.concat(buildShortMix(...))`, không tính vào `max`. Màn trong ext là pick/mc thường, có clip giọng.
- `TESTBANK.hsk` = 10 câu dạng đề HSK5 bằng màn có sẵn, trường `kind`: `'nghe'` (hear, hội thoại ngắn, 3 câu), `'doc'` (mc, đoạn văn có chỗ trống, 3 câu), `'viet'` (order, 完成句子, 4 câu). buildTest hiện chỉ lấy tf + spot. Gợi ý: thêm 1 câu mỗi `kind` vào bài kiểm tra Bài 2; t_rules nên quét cả `TESTBANK.hsk`.
- Câu nghe hội thoại hiện đọc bằng một giọng nữ (cả hai lượt nói trong một câu `s`). Nếu muốn giống đề thật (nam/nữ), cần dạng mới, ví dụ `dlg: [['f', câu 1], ['m', câu 2]]`.
- Câu nghe (`hear`, cả `LEARN[w].hear`, QB và TESTBANK.hsk): `whyNot: ['', lý do loại đáp án 1, lý do loại đáp án 2]`.
- Ôn tập: `{mix:1, after, extra, ch1: 2, max}`: 2-m1 max 6, các lần sau max 9.
- `glossary.txt` của Bài 2: từ mới cờ `t` (story word thêm cột `story`, build.py bỏ qua), từ hỗ trợ `s`, chữ dùng trong chiết tự `s`, còn lại là từ HSK1–4 không cờ mà glossary chính chưa có. `串`, `夜` là `s` trong glossary chính, `亮` không cờ: dòng Bài 2 thắng khi gộp. `屋子` là dạng khác của `屋`.
- Màn `mc` không có `reply` ở đáp án đúng (luật không "Đúng!").

# Bài 3 《人生有选择，一切可改变》 — nội dung (đủ 21 chặng, phiếu #22)

build.py đọc thư mục này (CHAPTER_DIRS), viết hsk5/ch3.js (tải khi mở Bài 3) và chạy check_ch3.py. Xem HANDOFF §6 "Chapters". Cùng khuôn với ch2/.

**File**: `words.js`, `learn.js`, `ety.js`, `story.js`, `bank.js`, `test.js`, `kit.js`, `glossary.txt` (thứ tự nạp tuỳ ý). Mỗi file gán vào `window.CH3`: `WORDS, EP_META, LEARN, ETY, BOOK, SESSIONS, QB, MEAN, TESTBANK, PATH` (+ `CH3.SC`, `CH3.SCENE_LABEL`; `kit.js` tự đăng ký cảnh `c3_*`). Bài 3 không dùng cảnh `c2_*` (mở Bài 3 không cần nạp Bài 2).

**Kiểm tra:** `python3 hsk5-src/ch3/check_ch3.py` (`-v` để xem thống kê) → `problems: 0`. `node hsk5-src/ch3/dump_ch3.js [abc|ticket|rev]` = nạp vào window giả, in CH3 ra JSON.

**Có gì**
- 41 từ (WORDS, LEARN có câu nghe + whyNot, ETY, MEAN, QB). Story word (*) `帆船 艘 航行 积蓄 二手 海里`: `story: 1`, chỉ dạy nhận mặt chữ (QB: nghe + điền, không sắp câu / gõ).
- 11 tập học `3-1`…`3-11` (12–14 màn, mỗi tập 1 màn Nhắc lại: echo tập 1–5, read từ tập 6), 5 Ôn tập `3-m1`…`3-m5` (mix: `ch1` = số từ Bài 1–2 trộn vào, `max`; thẻ mở rộng `ext`: 包括 ở 3-m1, 舒适 / 舒服 ở 3-m3, 漏 + bổ ngữ ở 3-m4, bẫy 海里 ở 3-m5), 4 Ghép truyện `3-g1`…`3-g4` (8 / 9 / 5 / 6 thẻ), Kiểm tra `3-t` (TESTBANK: 7 tf, 5 spot, 10 hsk: 3 nghe hội thoại hai giọng, 3 đọc, 4 viết).
- `BOOK` 28 câu: câu 4 tách ở “：” `[3]|[4]`, câu 20 tách ở dấu phẩy trước 因为 `[20]|[21]`; lời nói trong ngoặc kép ở đoạn cuối là `[24]|[25]`.
- Tên 翟峰 giữ chữ Hán (py: Zhái Fēng), tiếng Việt gọi “anh Phong”. Con số Ả Rập (2012, 11, 4000) giữ như sách; giọng đọc tự đọc số.
- `glossary.txt`: từ mới cờ `t` (story word thêm `story`), từ hỗ trợ và chữ chiết tự `s`, còn lại là từ HSK1–4 mà glossary chung chưa có. Dòng ở đây thắng khi gộp: `关系` (guānxi), `一共` (yígòng), `女儿` (nǚ'ér) sửa pinyin cho mọi bài.

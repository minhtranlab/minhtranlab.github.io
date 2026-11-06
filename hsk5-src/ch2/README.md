# Bài 2 《留串钥匙给父母》 — nội dung (bản thử tập 1–2 + Ôn tập 1)

Chưa được build.py đọc. Chat App nối vào app ở phiếu #9.

**File** (thứ tự nạp tuỳ ý — đã thử 3 thứ tự, dữ liệu giống hệt): `words.js`, `learn.js`, `ety.js`, `story.js`, `bank.js`, `test.js`, `kit.js`, `glossary.txt`.
Mỗi file gán vào `window.CH2`: `WORDS, EP_META, LEARN, ETY, BOOK, SESSIONS, QB, MEAN, TESTBANK, PATH` (+ `CH2.SC`, `CH2.SCENE_LABEL`; `kit.js` cũng tự đăng ký cảnh `c2_*` vào `SC`/`SCENE_LABEL` nếu kit.js Bài 1 đã nạp trước).

**Kiểm tra:** `python3 hsk5-src/ch2/check_ch2.py` (thêm `-v` để xem thống kê) → phải in `problems: 0`. `node hsk5-src/ch2/dump_ch2.js [abc|ticket|rev]` = nạp vào window giả, in CH2 ra JSON.

**Điều App cần biết khi nối**
- `PATH`: 20 chặng. Chặng không có trong `SESSIONS` = "Sắp ra mắt". Ghép truyện `2-g*` chỉ chơi được khi mọi câu trong `ids` đã có màn story (bản thử: chưa).
- `BOOK` có trường `p` (đoạn). Câu lời cha tách ở `[9]|[10]`, câu dài tách ở "：" `[16]|[17]`. Màn story dùng thẳng `{who,v,zh,vi}` (như `B(i)` Bài 1).
- `WORDS[].ep` là chuỗi `'2-1'`, `'2-2'`. Story word (HSK6): `串, 扑, 铺` có `story: 1` trong WORDS (khi viết tới) và cột `story` trong glossary (build.py bỏ qua cột này).
- `glossary.txt` của Bài 2: từ mới cờ `t`, từ hỗ trợ `s`, còn lại là từ HSK1–4 không cờ (glossary chính chưa có). `串`, `夜` đang là `s` trong glossary chính, `亮` không cờ: dòng Bài 2 phải thắng khi gộp. `屋子` là dạng khác của từ `屋` (cũng cờ `t`).
- Câu nghe (`hear`, cả `LEARN[w].hear` và QB): có thêm `whyNot: ['', lý do loại đáp án 1, lý do loại đáp án 2]` theo luật "lừa đúng mức" — cần hiện `whyNot[k]` khi bấm sai đáp án k.
- Ôn tập `2-m1`: `{mix:1, after:['2-1','2-2'], ch1: 2, max: 6}` = 9 từ Bài 2 + 2 từ Bài 1 yếu nhất (~20%), khoảng 6 câu hỏi. `screens` là bản dựng sẵn (6 câu + wrap) để dùng nếu muốn cố định; buildMix hiện tại bỏ qua và dựng 12 màn.
- Màn `mc` không có `reply` ở đáp án đúng (luật không "Đúng!").
- Đã thử nối tạm (bản copy, không push): build.py gộp glossary + nội dung → `problems: 0`; chơi hết 2-1, 2-2, 2-m1 trên 390x844, không lỗi trang. Thiếu 78 clip giọng (chưa synth). Album cuối tập 2-x vẫn ghi "Hoàn thành Bài 1" (LAST() của lõi).

# Bật đăng nhập và lưu tiến độ (làm một lần, khoảng 5 phút)

Mục đích: mỗi người học có một mã riêng, tiến độ và góp ý tự lưu vào một Google Sheet của cậu, học trên điện thoại hay iPad đều tiếp tục được.

1. **Tạo Google Sheet mới**, đặt tên "HSK5 – Tiến độ".
2. Trong Sheet: **Tiện ích mở rộng (Extensions) › Apps Script**. Xóa code mẫu, dán toàn bộ nội dung file `Code.gs`, bấm **Lưu**.
3. Ở thanh trên chọn hàm **setup** rồi bấm **Chạy (Run)**. Google hỏi quyền thì chọn *Xem lại quyền › tài khoản của cậu › Nâng cao › Đi tới… (không an toàn) › Cho phép*. Đó là script của chính cậu.
   Quay lại Sheet sẽ thấy 3 tab mới: **Students** (có 5 mã sẵn, dạng `HSK-AB12CD`), **State**, **Feedback**.
4. **Triển khai (Deploy) › Tùy chọn triển khai mới (New deployment) › loại Ứng dụng web (Web app)**:
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
   Bấm Deploy, copy **Web app URL** (đuôi `/exec`).
5. Mở `hsk5/config.js` trên GitHub (bút chì ✏️), dán URL vào giữa hai dấu nháy: `api: 'https://script.google.com/macros/s/.../exec'`, rồi Commit. Hoặc gửi URL cho mình, mình dán giúp.
6. Mở app, nhập một mã trong tab Students để thử.

## Dùng hằng ngày
- **Thêm người học:** thêm một dòng ở tab Students (cột `code` tự đặt, ví dụ `HSK-LAN7K2`), điền tên ở cột `name`. Muốn khóa một mã thì ghi `no` ở cột `active`.
- **Xem ai học tới đâu:** tab Students tự cập nhật lần lưu gần nhất, số từ, số tập xong, số phút hôm nay và tổng, chuỗi ngày.
- **Góp ý của người dùng thử:** tự về tab Feedback (mã, màn nào, loại, nội dung, chữ trên màn đó).
- **Sửa Code.gs sau này:** phải Deploy › Manage deployments › ✏️ › Version: *New version* thì thay đổi mới có hiệu lực.

## Lưu ý
- Ai có đường link `/exec` cũng gọi được, nhưng phải có mã học viên mới đọc hay ghi được. Dùng mã khó đoán (mã tạo sẵn đã vậy). Nhập sai quá 30 lần trong 10 phút thì hệ thống tạm khóa đăng nhập.
- Nếu chưa dán URL vào `config.js`, app vẫn chạy bình thường, chỉ lưu tiến độ trên từng máy và không hiện nút đăng nhập.

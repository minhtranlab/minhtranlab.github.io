/* ===== the 11 words of the first third (Units 1-3) ===== */
const WORDS = [
  { id: '电台', ep: 1, vi: 'đài phát thanh; chương trình trên đài', hv: 'điện đài', facts: [
    '<b>听电台</b> (nghe đài), không nói 看电台. Đài truyền hình là 电视台 (thêm 视 = nhìn).',
    'Hay đứng trước: 电台的记者, 电台的新闻, 电台广播 (电台 + 记者 / 广播 / 新闻).'],
    ex: ['电台要选出一对最恩爱的夫妻。', '他是电台的记者。'] },
  { id: '恩爱', ep: 1, vi: '(vợ chồng) thắm thiết, ân ái', hv: 'ân ái', facts: [
    'Bẫy Hán–Việt: “ân ái” tiếng Việt trượt sang chuyện phòng the, còn 恩爱 hoàn toàn trong sáng.',
    'Chỉ nói về <b>vợ chồng, cặp đôi</b> (他们很恩爱). Mẹ con, bạn bè thì không dùng.',
    'Tiếng lóng mạng: 秀恩爱 = khoe tình cảm đôi; 别秀恩爱了！= thôi đừng khoe nữa.'],
    ex: ['他们结婚三十年了，还是很恩爱。', '别在网上秀恩爱了！'] },
  { id: '入围', ep: 1, vi: 'lọt vào vòng trong (danh sách cuối)', hv: 'nhập vi', facts: [
    '入 (nhập, vào) + 围 (vi, vòng) = bước vào vòng tròn của những người được chọn. <b>Chưa thắng.</b>',
    'Trượt thì nói <b>没入围</b>. Hay đi với tên vòng: 入围决赛 (vào chung kết).'],
    ex: ['对比后，有三对夫妻入围。', '这次比赛他没入围。'] },
  { id: '对比', ep: 1, vi: 'đặt cạnh nhau để so, đối chiếu; sự tương phản', hv: 'đối tỉ', facts: [
    '对 (đối diện) + 比 (so). Hay nói <b>对比一下</b>. Trạng ngữ đứng trước: 简单地对比, 详细地对比.',
    'Cũng là danh từ: 对比很大 = tương phản mạnh.',
    '<b>Không</b> dùng như “khá”. “Khá thích” là 比较喜欢, không phải 对比喜欢.'],
    ex: ['我们来对比一下这两个手机。', '这两张照片的对比很大。'] },
  { id: '评委', ep: 2, vi: 'giám khảo, ban giám khảo', hv: 'bình ủy', facts: [
    '评 (bình, chấm) + 委 (ủy viên). Viết tắt của 评审委员. Không phải 法官 (thẩm phán).',
    'Đếm bằng 位: 三位评委; số nhiều 评委们. Thí sinh gọi họ là 评委老师.'],
    ex: ['三位评委都来了。', '谢谢评委老师！'] },
  { id: '如何', ep: 2, vi: 'như thế nào (văn viết, phát thanh)', hv: 'như hà', facts: [
    '= 怎么 / 怎么样 nhưng <b>trang trọng</b>: tin tức, phát thanh, văn viết. Nói chuyện thường ngày dùng 怎么.',
    '<b>如何 không hỏi lý do.</b> 今天怎么这么冷？ đúng; 今天如何这么冷？ sai.',
    'Cuối câu: 如何？ = thế nào / ý bạn sao. Ví dụ 最近身体如何？'],
    ex: ['你们是如何认识的？', '这个问题该如何解决？'] },
  { id: '瘫痪', ep: 2, vi: 'bị liệt; (nghĩa bóng) tê liệt', hv: 'than hoán', facts: [
    'Cả 瘫 và 痪 đều có bộ <b>疒</b> (bệnh). Thấy 疒 thì đoán “liên quan bệnh”, như 病.',
    'Nghĩa bóng rất hay gặp trong tin tức: <b>交通瘫痪</b> = giao thông tê liệt.'],
    ex: ['他全身瘫痪了。', '下大雨，交通瘫痪了。'] },
  { id: '离婚', ep: 3, vi: 'ly hôn', hv: 'ly hôn', facts: [
    'Động từ “tách đôi” (động từ + tân ngữ): 离了婚, 离过婚; người kia đi với 跟: <b>跟她离婚</b>. Không nói 离婚她.',
    'Ngược nghĩa với 结婚 (kết hôn).'],
    ex: ['他们去年离婚了。', '他跟她离过婚。'] },
  { id: '自杀', ep: 3, vi: 'tự sát', hv: 'tự sát', facts: [
    'Từ nặng. Bạn chỉ cần <b>nhận ra khi đọc</b> (tin tức, truyện, phim), không cần dùng để nói thường ngày.',
    '想过自杀 = từng nghĩ đến chuyện tự tử (过 = từng).'],
    ex: ['新闻里说，他想过自杀。'] },
  { id: '抱怨', ep: 3, vi: 'phàn nàn, than phiền', hv: 'bão oán', facts: [
    '抱 (ôm) + 怨 (oán) = ôm nỗi bực trong lòng rồi nói ra. Hay đi với: 抱怨别人 / 抱怨妻子 / 抱怨工作太多.',
    'Khác 生气 (giận): 抱怨 là <b>nói ra</b> sự không hài lòng. 别抱怨了 = đừng than nữa; 从不抱怨 = chưa bao giờ than.'],
    ex: ['他每天都抱怨工作太多。', '别抱怨了，快做吧！'] },
  { id: '爱护', ep: 3, vi: 'yêu quý và giữ gìn, chăm lo', hv: 'ái hộ', facts: [
    '爱 (yêu) + 护 (hộ, như “bảo hộ”). Hay đi với: 爱护环境 / 花草树木 / 公物 / 学生.',
    'Không dùng để tỏ tình (我爱你). Dùng cho thứ cần được gìn giữ, chăm chút.'],
    ex: ['请大家爱护学校的花草。', '他很爱护他的新手机。'] }
];
const EP_META = {
  1: { title: 'Tập 1 · Đăng ký thi', sub: 'Bạn gặp 4 từ: 电台, 恩爱, 入围, 对比', book: 'Mở sách trang 14 và đọc hai câu đầu của bài. Bạn sẽ thấy 电台, 恩爱, 对比, 入围 nằm trong đó. Thử xem hiểu được bao nhiêu.' },
  2: { title: 'Tập 2 · Câu chuyện đầu tiên', sub: 'Bạn gặp 3 từ: 评委, 如何, 瘫痪', book: 'Mở sách, đoạn thứ hai của bài, đọc hai câu đầu. 评委, 如何, 瘫痪 đều ở đó.' },
  3: { title: 'Tập 3 · Người chồng', sub: 'Bạn gặp 4 từ: 离婚, 自杀, 抱怨, 爱护', book: 'Đọc tiếp đoạn thứ hai, đến câu nói cô ấy đứng dậy được trở lại. Với 11 từ vừa học, bạn gần như đọc được mà không cần tra.' }
};

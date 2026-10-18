/* ===== word cards + listening items (phase 1 and 2 of each episode) ===== */
const LEARN = {
  '电台': { exv: ['Đài phát thanh muốn chọn ra một cặp vợ chồng thắm thiết nhất.', 'Anh ấy là phóng viên của đài.'],
    hear: { s: '我每天早上在车里听电台。', opts: ['Sáng nào mình cũng nghe đài trên xe.', 'Sáng nào mình cũng xem ti vi trên xe.', 'Tối nào mình cũng nghe đài ở nhà.'],
      why: 'Bạn cần bắt 3 mảnh: <b>早上</b> (buổi sáng), <b>在车里</b> (ở trong xe), <b>听电台</b> (nghe đài). Đổi một mảnh là đổi cả câu.' } },
  '恩爱': { exv: ['Họ cưới nhau ba mươi năm rồi mà vẫn rất thắm thiết.', 'Đừng khoe tình cảm trên mạng nữa!'],
    hear: { s: '他们结婚五十年了，还是很恩爱。', opts: ['Họ cưới nhau năm mươi năm rồi mà vẫn rất thắm thiết.', 'Họ cưới nhau năm năm rồi và hay cãi nhau.', 'Họ mới cưới nên rất thắm thiết.'],
      why: '<b>五十</b> = 50 (năm mươi, nghe khác 五 = 5). <b>还是</b> = vẫn. Cả câu là lời khen một cặp vợ chồng già.' } },
  '入围': { exv: ['Sau khi so sánh, có ba cặp vợ chồng lọt vào vòng trong.', 'Cuộc thi lần này anh ấy không lọt vào vòng trong.'],
    hear: { s: '她入围了，明天晚上还有比赛。', opts: ['Cô ấy lọt vào vòng trong, tối mai còn thi nữa.', 'Cô ấy thắng rồi, tối mai đi ăn mừng.', 'Cô ấy không lọt vào vòng trong, tối mai không thi.'],
      why: '<b>入围了</b> + <b>还有比赛</b> (còn có cuộc thi): lọt vào vòng trong nghĩa là cuộc thi vẫn chưa kết thúc.' } },
  '对比': { exv: ['Mình cùng so sánh hai chiếc điện thoại này nhé.', 'Hai tấm ảnh này tương phản rất mạnh.'],
    hear: { s: '请对比一下这两张照片。', opts: ['Hãy so sánh hai tấm ảnh này.', 'Hãy mua hai tấm ảnh này.', 'Hai tấm ảnh này đều rất đẹp.'],
      why: '<b>请…一下</b> = “xin hãy… một chút” (lịch sự). <b>对比一下</b> + <b>两张照片</b>: đặt hai thứ cạnh nhau để so.' } },
  '评委': { exv: ['Cả ba giám khảo đều đến rồi.', 'Cảm ơn thầy cô giám khảo!'],
    hear: { s: '评委说：你们的表演太长了。', opts: ['Giám khảo nói: phần trình diễn của các bạn dài quá.', 'Khán giả nói: phần trình diễn của các bạn dài quá.', 'Giám khảo nói: phần trình diễn của các bạn rất ngắn.'],
      why: 'Hai thứ cần bắt: <b>评委</b> (giám khảo, không phải 观众 khán giả) và <b>太长了</b> (dài quá). Chữ <b>太</b> = “quá”.' } },
  '如何': { exv: ['Hai bạn quen nhau như thế nào?', 'Vấn đề này nên giải quyết thế nào?'],
    hear: { s: '最近你的身体如何？', opts: ['Dạo này sức khỏe bạn thế nào?', 'Tại sao dạo này bạn bị ốm?', 'Dạo này bạn ở đâu?'],
      why: '<b>如何</b> ở cuối câu = “thế nào?”. Đây là câu thăm hỏi lịch sự, nghe giống người dẫn chương trình.' } },
  '瘫痪': { exv: ['Anh ấy bị liệt toàn thân.', 'Mưa to, giao thông tê liệt.'],
    hear: { s: '大雨以后，路上的交通瘫痪了。', opts: ['Sau cơn mưa lớn, giao thông trên đường tê liệt.', 'Sau cơn mưa lớn, đường rất thông thoáng.', 'Sau cơn mưa lớn, mọi người đi du lịch.'],
      why: '<b>大雨</b> (mưa lớn) + <b>以后</b> (sau khi) + <b>交通瘫痪</b> (giao thông tê liệt): nghĩa bóng của 瘫痪.' } },
  '离婚': { exv: ['Năm ngoái họ ly hôn.', 'Anh ấy từng ly hôn với cô ấy.'],
    hear: { s: '他们没有离婚，他们还很恩爱。', opts: ['Họ không ly hôn, họ vẫn rất thắm thiết.', 'Họ đã ly hôn rồi, không còn thân nhau.', 'Họ vừa mới kết hôn.'],
      why: '<b>没有离婚</b> = chưa/không ly hôn. Chữ <b>没有</b> đứng trước đảo cả nghĩa, y như 没入围.' } },
  '自杀': { exv: ['Trong tin tức nói anh ấy từng nghĩ đến tự tử.'],
    hear: { s: '他很难过，想过自杀，可是朋友帮了他。', opts: ['Anh rất đau lòng, từng nghĩ đến tự tử, nhưng bạn bè đã giúp anh.', 'Anh rất vui, và đi du lịch cùng bạn bè.', 'Anh rất giận, và bạn bè không giúp anh.'],
      why: '<b>难过</b> = buồn, đau lòng. <b>想过自杀</b> = từng nghĩ đến chuyện đó. <b>可是</b> = nhưng: nửa sau là tin tốt, bạn bè đã giúp.' } },
  '抱怨': { exv: ['Ngày nào anh ấy cũng than việc nhiều.', 'Đừng than nữa, làm nhanh lên!'],
    hear: { s: '他从不抱怨，也不生气。', opts: ['Anh ấy chưa bao giờ than phiền, cũng không giận.', 'Ngày nào anh ấy cũng than phiền và hay giận.', 'Anh ấy rất hay khen người khác.'],
      why: '<b>从不</b> = chưa bao giờ (từ trước đến nay đều không). <b>也不</b> = cũng không. Hai phủ định đi liền nhau.' } },
  '爱护': { exv: ['Mong mọi người giữ gìn hoa cỏ của trường.', 'Anh ấy rất giữ gìn chiếc điện thoại mới.'],
    hear: { s: '他很爱护花草，每天都给它们水。', opts: ['Anh ấy rất yêu quý hoa cỏ, ngày nào cũng tưới nước cho chúng.', 'Anh ấy rất ghét hoa cỏ.', 'Anh ấy bán hoa cỏ mỗi ngày.'],
      why: '<b>每天都</b> = ngày nào cũng. <b>给它们水</b> = cho chúng nước (tưới). Người nào 爱护 hoa cỏ thì chăm chúng mỗi ngày.' } }
};
/* one "hear and type" item per episode */
const DICT_ITEMS = {
  1: { s: '我每天晚上在家听电台。', vi: 'Tối nào mình cũng nghe đài ở nhà.' },
  2: { s: '三位评委都来了。', vi: 'Cả ba giám khảo đều đến rồi.' },
  3: { s: '别抱怨了，快做吧！', vi: 'Đừng than nữa, làm nhanh lên!' }
};
const TONE_LEGEND = '1 ngang cao · 2 lên (như dấu sắc) · 3 xuống rồi lên (như dấu hỏi) · 4 rơi dứt khoát (như dấu nặng)';

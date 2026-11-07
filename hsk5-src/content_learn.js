/* ===== word cards + listening items (phase 1 and 2 of each episode) ===== */
const LEARN = {
  '电台': { exv: ['Đài phát thanh muốn chọn ra một cặp vợ chồng thắm thiết nhất.', 'Anh ấy là phóng viên của đài.'],
    hear: { s: '我每天早上在车里听电台。', opts: ['Sáng nào mình cũng nghe đài trên xe.', 'Tối nào mình cũng nghe đài trên xe.', 'Sáng nào mình cũng nghe đài ở nhà.'], whyNot: ['', '早上 = buổi sáng, không phải buổi tối.', '在车里 = ở trong xe, không phải ở nhà.'], whyNot: ['', '早上 = buổi sáng, không phải buổi tối.', '在车里 = ở trong xe, không phải ở nhà.'],
      why: 'Bạn cần bắt 3 mảnh: <b>早上</b> (buổi sáng), <b>在车里</b> (ở trong xe), <b>听电台</b> (nghe đài). Đổi một mảnh là đổi cả câu.' } },
  '恩爱': { exv: ['Họ cưới nhau ba mươi năm rồi mà vẫn rất thắm thiết.', 'Đừng khoe tình cảm trên mạng nữa!'],
    hear: { s: '他们结婚五十年了，还是很恩爱。', opts: ['Họ cưới nhau năm mươi năm rồi mà vẫn rất thắm thiết.', 'Họ cưới nhau năm năm rồi mà vẫn rất thắm thiết.', 'Họ cưới nhau năm mươi năm rồi, giờ không còn thắm thiết nữa.'], whyNot: ['', '五十年 = năm mươi năm; năm năm là 五年.', '还是很恩爱 = vẫn rất thắm thiết.'], whyNot: ['', '五十年 = năm mươi năm; năm năm là 五年.', '还是很恩爱 = vẫn rất thắm thiết.'],
      why: '<b>五十</b> = 50 (năm mươi, nghe khác 五 = 5). <b>还是</b> = vẫn. Cả câu là lời khen một cặp vợ chồng già.' } },
  '入围': { exv: ['Sau khi so sánh, có ba cặp vợ chồng lọt vào vòng trong.', 'Cuộc thi lần này anh ấy không lọt vào vòng trong.'],
    hear: { s: '她入围了，明天晚上还有比赛。', opts: ['Cô ấy lọt vào vòng trong, tối mai còn thi nữa.', 'Cô ấy lọt vào vòng trong, tối nay còn thi nữa.', 'Cô ấy lọt vào vòng trong, tối mai không phải thi nữa.'], whyNot: ['', '明天晚上 = tối mai, không phải tối nay.', '还有比赛 = vẫn còn một cuộc thi.'], whyNot: ['', '明天晚上 = tối mai, không phải tối nay.', '还有比赛 = vẫn còn một cuộc thi.'],
      why: '<b>入围了</b> + <b>还有比赛</b> (còn có cuộc thi): lọt vào vòng trong nghĩa là cuộc thi vẫn chưa kết thúc.' } },
  '对比': { exv: ['Mình cùng so sánh hai chiếc điện thoại này nhé.', 'Hai tấm ảnh này tương phản rất mạnh.'],
    hear: { s: '请对比一下这两张照片。', opts: ['Bạn hãy so sánh hai tấm ảnh này.', 'Bạn hãy so sánh ba tấm ảnh này.', 'Mình đã so sánh xong hai tấm ảnh này rồi.'], whyNot: ['', '两张 = hai tấm, không phải ba.', '请…一下 = mời bạn làm (lời đề nghị); chưa ai so sánh xong.'], whyNot: ['', '两张 = hai tấm, không phải ba.', '请…一下 = mời bạn làm (lời đề nghị); chưa ai so sánh xong.'],
      why: '<b>请…一下</b> = “xin hãy… một chút” (lịch sự). <b>对比一下</b> + <b>两张照片</b>: đặt hai thứ cạnh nhau để so.' } },
  '评委': { exv: ['Cả ba giám khảo đều đến rồi.', 'Cảm ơn thầy cô giám khảo!'],
    hear: { s: '评委说：你们的表演太长了。', opts: ['Giám khảo nói: phần trình diễn của các bạn dài quá.', 'Giám khảo nói: phần trình diễn của các bạn hơi dài một chút.', 'Giám khảo nói: phần trình diễn của các bạn ngắn quá.'], whyNot: ['', '太长了 = dài QUÁ; hơi dài là 有点儿长.', '长 = dài, không phải ngắn.'], whyNot: ['', '太长了 = dài QUÁ; hơi dài là 有点儿长.', '长 = dài, không phải ngắn.'],
      why: 'Hai thứ cần bắt: <b>评委</b> (giám khảo, không phải 观众 khán giả) và <b>太长了</b> (dài quá). Chữ <b>太</b> = “quá”.' } },
  '如何': { exv: ['Hai bạn quen nhau như thế nào?', 'Vấn đề này nên giải quyết thế nào?'],
    hear: { s: '最近你的身体如何？', opts: ['Dạo này sức khoẻ bạn thế nào?', 'Hồi trước sức khoẻ bạn thế nào?', 'Dạo này công việc của bạn thế nào?'], whyNot: ['', '最近 = dạo này, gần đây.', '身体 = sức khoẻ, không phải công việc.'], whyNot: ['', '最近 = dạo này, gần đây.', '身体 = sức khoẻ, không phải công việc.'],
      why: '<b>如何</b> ở cuối câu = “thế nào?”. Đây là câu thăm hỏi lịch sự, nghe giống người dẫn chương trình.' } },
  '瘫痪': { exv: ['Anh ấy bị liệt toàn thân.', 'Mưa to, giao thông tê liệt.'],
    hear: { s: '大雨以后，路上的交通瘫痪了。', opts: ['Sau cơn mưa lớn, giao thông trên đường tê liệt.', 'Trước cơn mưa lớn, giao thông trên đường đã tê liệt.', 'Sau trận tuyết lớn, giao thông trên đường tê liệt.'], whyNot: ['', '以后 = sau, không phải trước.', '大雨 = mưa lớn, không phải tuyết.'], whyNot: ['', '以后 = sau, không phải trước.', '大雨 = mưa lớn, không phải tuyết.'],
      why: '<b>大雨</b> (mưa lớn) + <b>以后</b> (sau khi) + <b>交通瘫痪</b> (giao thông tê liệt): nghĩa bóng của 瘫痪.' } },
  '离婚': { exv: ['Năm ngoái họ ly hôn.', 'Anh ấy từng ly hôn với cô ấy.'],
    hear: { s: '他们没有离婚，他们还很恩爱。', opts: ['Họ không ly hôn, họ vẫn rất thắm thiết.', 'Họ đã ly hôn, nhưng vẫn rất thắm thiết.', 'Họ không ly hôn, nhưng không còn thắm thiết nữa.'], whyNot: ['', '没有离婚 = không ly hôn.', '还很恩爱 = vẫn rất thắm thiết.'], whyNot: ['', '没有离婚 = không ly hôn.', '还很恩爱 = vẫn rất thắm thiết.'],
      why: '<b>没有离婚</b> = chưa/không ly hôn. Chữ <b>没有</b> đứng trước đảo cả nghĩa, y như 没入围.' } },
  '自杀': { exv: ['Trong tin tức nói anh ấy từng nghĩ đến tự tử.'],
    hear: { s: '他很难过，想过自杀，可是朋友帮了他。', opts: ['Anh rất đau lòng, từng nghĩ đến tự tử, nhưng bạn bè đã giúp anh.', 'Anh rất đau lòng, từng nghĩ đến tự tử, nhưng gia đình đã giúp anh.', 'Anh rất đau lòng, từng nghĩ đến tự tử, và không ai giúp anh.'], whyNot: ['', '朋友 = bạn bè, không phải gia đình.', '可是朋友帮了他 = nhưng bạn bè đã giúp anh.'], whyNot: ['', '朋友 = bạn bè, không phải gia đình.', '可是朋友帮了他 = nhưng bạn bè đã giúp anh.'],
      why: '<b>难过</b> = buồn, đau lòng. <b>想过自杀</b> = từng nghĩ đến chuyện đó. <b>可是</b> = nhưng: nửa sau là tin tốt, bạn bè đã giúp.' } },
  '抱怨': { exv: ['Ngày nào anh ấy cũng than việc nhiều.', 'Đừng than nữa, làm nhanh lên!'],
    hear: { s: '他从不抱怨，也不生气。', opts: ['Anh ấy chưa bao giờ phàn nàn, cũng không giận.', 'Anh ấy chưa bao giờ phàn nàn, nhưng hay giận.', 'Anh ấy thỉnh thoảng phàn nàn, nhưng không giận.'], whyNot: ['', '也不生气 = cũng không giận.', '从不 = chưa bao giờ, không phải thỉnh thoảng.'], whyNot: ['', '也不生气 = cũng không giận.', '从不 = chưa bao giờ, không phải thỉnh thoảng.'],
      why: '<b>从不</b> = chưa bao giờ (từ trước đến nay đều không). <b>也不</b> = cũng không. Hai phủ định đi liền nhau.' } },
  '爱护': { exv: ['Mong mọi người giữ gìn hoa cỏ của trường.', 'Anh ấy rất giữ gìn chiếc điện thoại mới.'],
    hear: { s: '他很爱护花草，每天都给它们水。', opts: ['Anh ấy rất yêu quý hoa cỏ, ngày nào cũng tưới nước cho chúng.', 'Anh ấy rất yêu quý hoa cỏ, thỉnh thoảng mới tưới nước.', 'Mẹ anh ấy rất yêu quý hoa cỏ, ngày nào cũng tưới nước.'], whyNot: ['', '每天都 = ngày nào cũng.', '他 = anh ấy; câu không nhắc tới mẹ.'], whyNot: ['', '每天都 = ngày nào cũng.', '他 = anh ấy; câu không nhắc tới mẹ.'],
      why: '<b>每天都</b> = ngày nào cũng. <b>给它们水</b> = cho chúng nước (tưới). Người nào 爱护 hoa cỏ thì chăm chúng mỗi ngày.' } }
};
/* one "hear and type" item per episode */
const DICT_ITEMS = {
  1: { s: '我每天晚上在家听电台。', vi: 'Tối nào mình cũng nghe đài ở nhà.' },
  2: { s: '三位评委都来了。', vi: 'Cả ba giám khảo đều đến rồi.' },
  3: { s: '别抱怨了，快做吧！', vi: 'Đừng than nữa, làm nhanh lên!' }
};
const TONE_LEGEND = '1 ngang cao · 2 lên (như dấu sắc) · 3 xuống rồi lên (như dấu hỏi) · 4 rơi dứt khoát (như dấu nặng)';

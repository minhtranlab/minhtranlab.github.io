/* ===== question bank for the revision path: new sentences (not only the book's), 2-4 items per word ===== */
const MEAN = { '电台': 'đài phát thanh', '恩爱': 'thắm thiết (vợ chồng)', '入围': 'lọt vào vòng trong', '对比': 'so sánh, đối chiếu', '评委': 'giám khảo', '如何': 'như thế nào', '瘫痪': 'bị liệt', '离婚': 'ly hôn', '自杀': 'tự tử', '抱怨': 'phàn nàn', '爱护': 'yêu quý, giữ gìn' };
/* cloze: w word, scene, say = [sentence with ___, vi], ok = right word, wrongs = [[word, why]] */
const cz = (w, scene, say, vi, full, ok, wrongs, teach) => ({ t: 'mc', w: [w], scene, say: [say, vi], full, prompt: 'Chọn từ điền vào chỗ trống:',
  opts: [{ t: ok, ok: 1, reply: ['对！', 'Đúng!'] }, ...wrongs.map(([t, note]) => ({ t, note }))], teach });
const od = (w, zhs, vi, chunks) => ({ t: 'order', w, zh: zhs, vi, chunks });
const ty = (w, zhs, vi) => ({ t: 'type', w, zh: zhs, vi, prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' });
const hr = (w, s, opts, why) => ({ t: 'hear', w: [w], s, opts, why });
const QB = {
  '电台': [
    cz('电台', 'car', '他每天早上开车的时候听___。', 'Sáng nào anh ấy cũng nghe đài khi lái xe.', '他每天早上开车的时候听电台。', '电台', [['电视', '电视 là ti vi, để xem. Nghe đài thì dùng 听电台.'], ['电脑', '电脑 là máy tính, không “nghe” được kiểu đó.']], 'Nghe đài là <b>听电台</b>. Xem ti vi mới là 看电视.'),
    cz('电台', 'radioBig', '我最喜欢的___每天晚上放音乐。', 'Đài phát thanh tôi thích nhất tối nào cũng phát nhạc.', '我最喜欢的电台每天晚上放音乐。', '电台', [['对比', '对比 là so sánh, không phải một cái đài.'], ['评委', '评委 là giám khảo, một người, không phát nhạc.']], '<b>电台</b> là danh từ: 电台的记者, 电台广播, 电台新闻.'),
    od(['电台'], '他每天早上在车里听电台。', 'Sáng nào anh ấy cũng nghe đài trên xe.', ['他每天早上', '在车里', '听电台']),
    hr('电台', '我每天早上在车里听电台。', ['Sáng nào mình cũng nghe đài trên xe.', 'Sáng nào mình cũng xem ti vi trên xe.', 'Tối nào mình cũng nghe đài ở nhà.'], 'Bạn cần bắt 3 mảnh: <b>早上</b> (buổi sáng), <b>在车里</b> (ở trong xe), <b>听电台</b> (nghe đài).')
  ],
  '恩爱': [
    cz('恩爱', 'couple', '他们结婚四十年了，还是那么___。', 'Họ cưới nhau bốn mươi năm rồi mà vẫn thắm thiết như vậy.', '他们结婚四十年了，还是那么恩爱。', '恩爱', [['抱怨', '抱怨 là phàn nàn, không hợp với “vẫn như vậy” khi khen cặp đôi.'], ['入围', '入围 là lọt vào vòng trong, không nói về tình cảm.']], '<b>恩爱</b> chỉ dùng cho vợ chồng, cặp đôi.'),
    cz('恩爱', 'pickHold', '爷爷和奶奶一起走路，手拉着手，很___。', 'Ông bà đi bộ cùng nhau, nắm tay nhau, rất thắm thiết.', '爷爷和奶奶一起走路，手拉着手，很恩爱。', '恩爱', [['瘫痪', '瘫痪 là bị liệt, không hợp với cảnh nắm tay đi bộ.'], ['离婚', '离婚 là ly hôn, trái nghĩa với cảnh này.']], '<b>手拉着手</b> = nắm tay nhau. Hình ảnh điển hình của 恩爱.'),
    od(['恩爱'], '他们结婚四十年了，还是很恩爱。', 'Họ cưới nhau bốn mươi năm rồi mà vẫn rất thắm thiết.', ['他们', '结婚四十年了', '还是', '很恩爱']),
    hr('恩爱', '他们结婚五十年了，还是很恩爱。', ['Họ cưới nhau năm mươi năm rồi mà vẫn rất thắm thiết.', 'Họ cưới nhau năm năm rồi và hay cãi nhau.', 'Họ mới cưới nên rất thắm thiết.'], '<b>五十</b> = 50. <b>还是</b> = vẫn. Cả câu là lời khen một cặp vợ chồng già.')
  ],
  '入围': [
    cz('入围', 'finalists', '这次比赛，我们班有两个人___了。', 'Cuộc thi lần này lớp mình có hai bạn lọt vào vòng trong.', '这次比赛，我们班有两个人入围了。', '入围', [['离婚', '离婚 là ly hôn, không dùng cho cuộc thi.'], ['抱怨', '抱怨 là phàn nàn. Câu này tả một tin vui.']], '<b>入围</b> = vào vòng trong, <b>chưa thắng</b>.'),
    cz('入围', 'finalists', '他没有___，所以不用参加明天的比赛。', 'Anh ấy không lọt vào vòng trong nên không phải thi ngày mai.', '他没有入围，所以不用参加明天的比赛。', '入围', [['对比', '对比 là so sánh, không đi với 没有 theo nghĩa này.'], ['爱护', '爱护 là giữ gìn, không hợp với cuộc thi.']], '<b>没入围</b> = không lọt vào vòng trong. 没 đứng trước đảo nghĩa.'),
    od(['入围'], '这次比赛我们班有两个人入围了。', 'Cuộc thi lần này lớp mình có hai bạn lọt vào vòng trong.', ['这次比赛', '我们班', '有两个人', '入围了']),
    hr('入围', '她入围了，明天晚上还有比赛。', ['Cô ấy lọt vào vòng trong, tối mai còn thi nữa.', 'Cô ấy thắng rồi, tối mai đi ăn mừng.', 'Cô ấy không lọt vào vòng trong, tối mai không thi.'], '<b>入围了</b> + <b>还有比赛</b> (còn có cuộc thi): cuộc thi chưa kết thúc.')
  ],
  '对比': [
    cz('对比', 'compare', '买手机以前，我先___了一下价格。', 'Trước khi mua điện thoại, mình so sánh giá một chút.', '买手机以前，我先对比了一下价格。', '对比', [['爱护', '爱护 là giữ gìn, không dùng để so giá.'], ['电台', '电台 là đài phát thanh, không phải một động tác.']], '<b>对比一下</b> = so sánh thử một chút.'),
    cz('对比', 'pickPhotosDiff', '这两张照片的___很大：一张很黑，一张很亮。', 'Độ tương phản của hai tấm ảnh rất lớn: một tối, một sáng.', '这两张照片的对比很大：一张很黑，一张很亮。', '对比', [['如何', '如何 là “như thế nào”, không nói về độ tương phản.'], ['评委', '评委 là giám khảo.']], '<b>对比很大</b> = tương phản mạnh. Ở đây 对比 là danh từ.'),
    od(['对比'], '我们来对比一下这两个手机。', 'Mình cùng so sánh hai chiếc điện thoại này nhé.', ['我们来', '对比一下', '这两个手机']),
    hr('对比', '请对比一下这两张照片。', ['Hãy so sánh hai tấm ảnh này.', 'Hãy mua hai tấm ảnh này.', 'Hai tấm ảnh này đều rất đẹp.'], '<b>请…一下</b> = “xin hãy… một chút”. <b>对比一下</b> + hai tấm ảnh: đặt cạnh nhau để so.')
  ],
  '评委': [
    cz('评委', 'judges', '三位___都说她唱得很好。', 'Cả ba giám khảo đều nói cô ấy hát rất hay.', '三位评委都说她唱得很好。', '评委', [['观众', '观众 là khán giả, còn người chấm điểm là 评委.'], ['医生', '医生 là bác sĩ, không chấm điểm cuộc thi.']], '<b>评委</b> = giám khảo. Đếm bằng 位: 三位评委.'),
    cz('评委', 'judges', '比赛结束了，___老师请大家安静。', 'Cuộc thi kết thúc, thầy cô giám khảo mời mọi người giữ yên lặng.', '比赛结束了，评委老师请大家安静。', '评委', [['电台', '电台 là đài, không đứng trước 老师.'], ['如何', '如何 là “như thế nào”, không chỉ người.']], 'Thí sinh gọi giám khảo là <b>评委老师</b>.'),
    od(['评委'], '三位评委都说她唱得很好。', 'Cả ba giám khảo đều nói cô ấy hát rất hay.', ['三位评委', '都说', '她唱得很好']),
    hr('评委', '评委说：你们的表演太长了。', ['Giám khảo nói: phần trình diễn của các bạn dài quá.', 'Khán giả nói: phần trình diễn của các bạn dài quá.', 'Giám khảo nói: phần trình diễn của các bạn rất ngắn.'], 'Hai thứ cần bắt: <b>评委</b> (giám khảo, không phải khán giả) và <b>太长了</b> (dài quá).')
  ],
  '如何': [
    cz('如何', 'how', '你觉得这个问题该___解决？', 'Bạn thấy vấn đề này nên giải quyết thế nào?', '你觉得这个问题该如何解决？', '如何', [['什么', '什么 hỏi “cái gì”, không hỏi cách thức.'], ['哪儿', '哪儿 hỏi “ở đâu”.']], '<b>该如何 + động từ</b> = nên làm thế nào. Giọng trang trọng.'),
    cz('如何', 'sickFriend', '你最近身体___？', 'Dạo này sức khỏe bạn thế nào?', '你最近身体如何？', '如何', [['什么', '什么 hỏi “cái gì”, không hỏi tình trạng.'], ['哪个', '哪个 hỏi “cái nào”.']], '<b>如何</b> ở cuối câu = “thế nào?”, hỏi thăm tình trạng.'),
    hr('如何', '最近你的身体如何？', ['Dạo này sức khỏe bạn thế nào?', 'Tại sao dạo này bạn bị ốm?', 'Dạo này bạn ở đâu?'], '<b>如何</b> ở cuối câu = “thế nào?”. Câu thăm hỏi lịch sự, nghe giống người dẫn chương trình.')
  ],
  '瘫痪': [
    cz('瘫痪', 'rainJam', '大雪以后，城市的交通___了。', 'Sau trận tuyết lớn, giao thông thành phố tê liệt.', '大雪以后，城市的交通瘫痪了。', '瘫痪', [['恩爱', '恩爱 chỉ vợ chồng thắm thiết, không nói về giao thông.'], ['入围', '入围 là lọt vào vòng trong.']], '<b>交通瘫痪</b> = giao thông tê liệt.'),
    cz('瘫痪', 'wheelchair', '他生了很重的病，全身___了，不能走路。', 'Anh ấy bị bệnh nặng, liệt toàn thân, không đi lại được.', '他生了很重的病，全身瘫痪了，不能走路。', '瘫痪', [['抱怨', '抱怨 là phàn nàn, không phải tình trạng cơ thể.'], ['爱护', '爱护 là giữ gìn, không hợp.']], '<b>全身瘫痪</b> = liệt toàn thân.'),
    hr('瘫痪', '大雨以后，路上的交通瘫痪了。', ['Sau cơn mưa lớn, giao thông trên đường tê liệt.', 'Sau cơn mưa lớn, đường rất thông thoáng.', 'Sau cơn mưa lớn, mọi người đi du lịch.'], '<b>大雨</b> + <b>以后</b> + <b>交通瘫痪</b>: nghĩa bóng của 瘫痪.')
  ],
  '离婚': [
    cz('离婚', 'divorce', '他们去年___了，现在不住在一起。', 'Năm ngoái họ ly hôn, bây giờ không sống chung nữa.', '他们去年离婚了，现在不住在一起。', '离婚', [['入围', '入围 là lọt vào vòng trong, không nói chuyện hôn nhân.'], ['对比', '对比 là so sánh, không nói chuyện cưới hỏi.']], '<b>离婚了</b> + “không sống chung nữa”: hai chuyện đi liền nhau.'),
    cz('离婚', 'divorce', '他跟妻子吵了很多次，最后还是___了。', 'Anh ấy cãi nhau với vợ nhiều lần, cuối cùng vẫn ly hôn.', '他跟妻子吵了很多次，最后还是离婚了。', '离婚', [['恩爱', '恩爱 là thắm thiết, trái với chuyện cãi nhau rồi chia tay.'], ['爱护', '爱护 là giữ gìn, không hợp.']], '<b>跟 + người + 离婚</b>. Từ đầu câu cũng dùng 跟: 跟妻子吵架.'),
    hr('离婚', '他们没有离婚，他们还很恩爱。', ['Họ không ly hôn, họ vẫn rất thắm thiết.', 'Họ đã ly hôn rồi, không còn thân nhau.', 'Họ vừa mới kết hôn.'], '<b>没有离婚</b> = chưa/không ly hôn. Chữ <b>没有</b> đứng trước đảo cả nghĩa.')
  ],
  '自杀': [
    hr('自杀', '他很难过，想过自杀，可是朋友帮了他。', ['Anh rất đau lòng, từng nghĩ đến tự tử, nhưng bạn bè đã giúp anh.', 'Anh rất vui, và đi du lịch cùng bạn bè.', 'Anh rất giận, và bạn bè không giúp anh.'], '<b>难过</b> = buồn, đau lòng. <b>想过自杀</b> = từng nghĩ đến chuyện đó. <b>可是</b> = nhưng: nửa sau là tin tốt.')
  ],
  '抱怨': [
    cz('抱怨', 'grumble', '工作太多，他天天___。', 'Việc nhiều quá, ngày nào anh ấy cũng than phiền.', '工作太多，他天天抱怨。', '抱怨', [['爱护', '爱护 là giữ gìn, không hợp với “việc nhiều”.'], ['入围', '入围 là lọt vào vòng trong.']], '<b>抱怨 + chuyện bực</b>: 抱怨工作太多.'),
    cz('抱怨', 'grumble', '别___了，我们一起想办法吧。', 'Đừng than nữa, cùng nghĩ cách đi.', '别抱怨了，我们一起想办法吧。', '抱怨', [['恩爱', '恩爱 chỉ vợ chồng thắm thiết, không hợp với lời khuyên này.'], ['评委', '评委 là giám khảo, một người.']], '<b>别…了</b> = đừng… nữa. 别抱怨了 = đừng than nữa.'),
    od(['抱怨'], '他从不抱怨工作太多。', 'Anh ấy chưa bao giờ phàn nàn việc nhiều.', ['他', '从不', '抱怨', '工作太多']),
    hr('抱怨', '他从不抱怨，也不生气。', ['Anh ấy chưa bao giờ phàn nàn, cũng không giận.', 'Ngày nào anh ấy cũng phàn nàn và hay giận.', 'Anh ấy rất hay khen người khác.'], '<b>从不</b> = chưa bao giờ. <b>也不</b> = cũng không.')
  ],
  '爱护': [
    cz('爱护', 'sign', '请大家___学校的花草。', 'Mong mọi người giữ gìn hoa cỏ của trường.', '请大家爱护学校的花草。', '爱护', [['抱怨', '抱怨 là than phiền, hoa cỏ đâu có lỗi.'], ['对比', '对比 là so sánh, không hợp.']], 'Biển <b>请爱护花草</b> bạn sẽ gặp ở công viên, trường học.'),
    cz('爱护', 'garden', '他很___自己的新手机，每天都擦一擦。', 'Anh ấy rất giữ gìn chiếc điện thoại mới, ngày nào cũng lau một chút.', '他很爱护自己的新手机，每天都擦一擦。', '爱护', [['抱怨', '抱怨 là phàn nàn, không đi với chuyện lau chùi.'], ['离婚', '离婚 là ly hôn, không hợp.']], '<b>爱护</b> dùng cho thứ cần được gìn giữ, chăm chút.'),
    od(['爱护'], '请大家爱护学校的花草。', 'Mong mọi người giữ gìn hoa cỏ của trường.', ['请大家', '爱护', '学校的', '花草']),
    hr('爱护', '他很爱护花草，每天都给它们水。', ['Anh ấy rất yêu quý hoa cỏ, ngày nào cũng tưới nước cho chúng.', 'Anh ấy rất ghét hoa cỏ.', 'Anh ấy bán hoa cỏ mỗi ngày.'], '<b>每天都</b> = ngày nào cũng. <b>给它们水</b> = cho chúng nước (tưới).')
  ]
};

/* ===== Bài 3: question pools for the chapter test (Kiểm tra cuối bài 3). Same shape as Bài 2 TESTBANK (new sentences, not the ones in the units).
   u = the tập the item checks (for spot: the tập that teaches the right word w[0]; the result screen says which tập to look at again).
   hsk = items in HSK5 exam style: kind 'nghe' = a two-voice dialogue (hear with lines: female then male), 'doc' = a short passage with a blank (mc),
   'viet' = 完成句子, put the words in order (order). The test (3-t) is built by the app once every study unit and this bank exist. ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  CH3.TESTBANK = {
    tf: [
      { t: 'tf', scene: 'c3_rail', zh: '翟峰和妻子以前都是老师。', vi: 'Trước đây anh Phong và vợ đều là giáo viên.', ok: false,
        why: 'Trong bài: <b>翟峰和妻子都是铁路工人</b> = hai vợ chồng đều là công nhân đường sắt.', w: ['工人'], u: '3-1' },
      { t: 'tf', scene: 'c3_sellBuy', zh: '翟峰卖房卖车，买了一艘新船。', vi: 'Anh Phong bán nhà bán xe, mua một chiếc thuyền mới.', ok: false,
        why: 'Họ <b>买下了一艘二手船</b> = mua một chiếc thuyền <b>cũ</b>, vì không có tiền để dành (<b>没有积蓄</b>).', w: ['二手', '积蓄'], u: '3-3' },
      { t: 'tf', scene: 'c3_crazyTalk', zh: '出海以前，翟峰的父母很支持他。', vi: 'Trước khi ra khơi, ba mẹ anh Phong rất ủng hộ anh.', ok: false,
        why: '<b>包括翟峰的父母，所有人都觉得，翟峰“疯了”</b> = kể cả ba mẹ, ai cũng cho rằng anh “điên rồi”.', w: ['包括', '疯'], u: '3-3' },
      { t: 'tf', scene: 'c3_takeTurns', zh: '在船上，翟峰和妻子轮流驾船。', vi: 'Trên thuyền, anh Phong và vợ thay phiên nhau lái thuyền.', ok: true,
        why: 'Trong bài: <b>白天，翟峰和妻子轮流驾船</b>.', w: ['轮流', '驾驶'], u: '3-4' },
      { t: 'tf', scene: 'c3_separateRooms', zh: '以前在陆地上，一家人晚上都在各自的房间。', vi: 'Trước kia trên đất liền, buổi tối mỗi người trong nhà ở phòng riêng của mình.', ok: true,
        why: 'Trong bài: <b>以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流</b>.', w: ['陆地', '各自'], u: '3-7' },
      { t: 'tf', scene: 'c3_fireLeak', zh: '一路上，他们没有遇到什么危险。', vi: 'Suốt dọc đường, họ không gặp nguy hiểm gì.', ok: false,
        why: 'Ngược lại: họ <b>经历了船身着火、漏水等大大小小十多次险情</b> = hơn mười lần gặp nguy.', w: ['着火', '漏'], u: '3-8' },
      { t: 'tf', scene: 'c3_stairs', zh: '翟峰觉得，航海只是一个开始。', vi: 'Anh Phong thấy đi biển chỉ là một sự khởi đầu.', ok: true,
        why: 'Trong bài: <b>翟峰相信，一切只是开始</b>; đi biển là <b>一段长长的台阶，通向他想要的未来</b>.', w: ['人生', '未来'], u: '3-10' }
    ],
    spot: [
      { t: 'spot', chunks: ['今天晚上', '妈妈给我们做了', '一艘', '海鲜。'], bad: 2, fix: '一顿', full: '今天晚上妈妈给我们做了一顿海鲜。', vi: 'Tối nay mẹ nấu cho tụi mình một bữa hải sản.',
        teach: '<b>一顿 + 饭 / 海鲜</b> = một bữa. <b>艘</b> chỉ dùng cho tàu thuyền.', w: ['顿', '艘'], u: '3-5' },
      { t: 'spot', chunks: ['我们家所有人，', '一起', '我奶奶，', '都喜欢吃海鲜。'], bad: 1, fix: '包括', full: '我们家所有人，包括我奶奶，都喜欢吃海鲜。', vi: 'Cả nhà mình, kể cả bà nội, đều thích ăn hải sản.',
        teach: '<b>包括 X，所有人都…</b> = kể cả X, ai cũng…', w: ['包括'], u: '3-3' },
      { t: 'spot', chunks: ['图书馆里', '请没', '大声', '说话。'], bad: 1, fix: '请勿', full: '图书馆里请勿大声说话。', vi: 'Trong thư viện xin chớ nói to.',
        teach: '<b>请勿 + động từ</b> = xin đừng… (văn viết, biển báo). 没 dùng cho việc chưa xảy ra.', w: ['勿'], u: '3-8' },
      { t: 'spot', chunks: ['这家饭店的房间', '很', '平静，', '就是有点儿贵。'], bad: 2, fix: '舒适，', full: '这家饭店的房间很舒适，就是有点儿贵。', vi: 'Phòng ở khách sạn này rất thoải mái, chỉ hơi đắt.',
        teach: '<b>舒适的房间</b> = căn phòng dễ chịu. <b>平静</b> nói mặt biển, tâm trạng, cuộc sống.', w: ['舒适', '平静'], u: '3-6' },
      { t: 'spot', chunks: ['见到妈妈，', '孩子', '紧紧地', '撞着她。'], bad: 3, fix: '拥抱着她。', full: '见到妈妈，孩子紧紧地拥抱着她。', vi: 'Thấy mẹ, đứa bé ôm chặt lấy mẹ.',
        teach: '<b>紧紧（地）拥抱</b> = ôm chặt. <b>撞</b> = đâm vào.', w: ['拥抱', '撞'], u: '3-9' }
    ],
    hsk: [
      /* nghe: một đoạn hội thoại ngắn, nữ hỏi, nam đáp */
      { t: 'hear', kind: 'nghe', w: ['辞职'], u: '3-4', lines: [{ v: 'f', zh: '听说你辞职了？' }, { v: 'm', zh: '对，我想先休息半年，然后去旅行。' }],
        opts: ['Anh ấy đã thôi việc, muốn nghỉ nửa năm rồi đi du lịch.', 'Anh ấy đã thôi việc, muốn nghỉ một năm rồi đi du lịch.', 'Anh ấy chưa thôi việc, muốn nghỉ nửa năm rồi đi du lịch.'],
        why: 'Người hỏi: <b>听说你辞职了？</b> (nghe nói anh thôi việc rồi?). Người đáp: <b>对</b> (đúng), <b>先休息半年，然后去旅行</b> (nghỉ nửa năm trước, rồi đi du lịch).',
        whyNot: ['', '半年 = nửa năm, không phải một năm.', '对 = đúng vậy: anh ấy đã thôi việc rồi.'] },
      { t: 'hear', kind: 'nghe', w: ['顿', '海鲜'], u: '3-5', lines: [{ v: 'f', zh: '今天晚上我们吃什么？' }, { v: 'm', zh: '去海边吃一顿海鲜吧，我请你。' }],
        opts: ['Tối nay ra ven biển ăn một bữa hải sản, anh ấy mời.', 'Tối nay ra ven biển ăn một bữa hải sản, mỗi người tự trả.', 'Tối nay ở nhà ăn một bữa hải sản, anh ấy mời.'],
        why: '<b>去海边</b> = ra ven biển. <b>吃一顿海鲜</b> = ăn một bữa hải sản. <b>我请你</b> = mình mời bạn.',
        whyNot: ['', '我请你 = anh ấy mời (anh ấy trả tiền).', '去海边 = ra ven biển, không phải ăn ở nhà.'] },
      { t: 'hear', kind: 'nghe', w: ['雷', '随时'], u: '3-9', lines: [{ v: 'f', zh: '外面打雷了，你还要出去吗？' }, { v: 'm', zh: '不出去了，随时可能下大雨。' }],
        opts: ['Ngoài trời có sấm, anh ấy không ra ngoài nữa vì mưa to có thể đổ xuống bất cứ lúc nào.', 'Ngoài trời có sấm, anh ấy vẫn ra ngoài dù mưa to có thể đổ xuống bất cứ lúc nào.', 'Ngoài trời có sấm, anh ấy không ra ngoài nữa vì tuyết có thể rơi bất cứ lúc nào.'],
        why: '<b>打雷了</b> = có sấm rồi. <b>不出去了</b> = không ra ngoài nữa. <b>随时可能下大雨</b> = mưa to có thể đổ xuống bất cứ lúc nào.',
        whyNot: ['', '不出去了 = không ra ngoài nữa.', '下大雨 = mưa to, không phải tuyết.'] },
      /* đọc: đoạn văn có chỗ trống */
      { t: 'mc', kind: 'doc', w: ['稳定'], u: '3-1', scene: 'c3_quit', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['我哥哥大学毕业以后，在一家公司工作了五年。他的工作很___，待遇也不错，可是他总觉得生活太平静了。去年他辞了职，去外地开了一家咖啡店。', 'Anh trai mình tốt nghiệp đại học xong làm ở một công ty năm năm. Công việc của anh rất ổn định, đãi ngộ cũng khá, nhưng anh luôn thấy cuộc sống yên ả quá. Năm ngoái anh thôi việc, đi nơi khác mở một quán cà phê.'],
        full: '我哥哥大学毕业以后，在一家公司工作了五年。他的工作很稳定，待遇也不错，可是他总觉得生活太平静了。去年他辞了职，去外地开了一家咖啡店。',
        opts: [{ t: '稳定', ok: 1 }, { t: '疯', note: '疯 = điên; đoạn văn đang khen công việc (待遇也不错).' }, { t: '盼望', note: '盼望 là động từ “mong”, không đứng sau 很 để tả công việc.' }],
        teach: '<b>工作很稳定</b> = công việc rất ổn định; đi đôi với <b>待遇也不错</b>. Nhưng ổn định quá thì anh thấy <b>生活太平静了</b>.' },
      { t: 'mc', kind: 'doc', w: ['各自'], u: '3-7', scene: 'c3_separateRooms', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['以前我们一家人住在城里，晚上大家都在___的房间里看手机，很少说话。今年我们搬到了农村，每天晚上一起吃饭、聊天儿，这样的生活是我盼望已久的。', 'Trước kia cả nhà mình sống ở thành phố, buổi tối ai cũng ở trong phòng riêng xem điện thoại, ít khi nói chuyện. Năm nay nhà mình chuyển về nông thôn, tối nào cũng cùng ăn cơm, trò chuyện; cuộc sống như thế là điều mình mong mỏi đã lâu.'],
        full: '以前我们一家人住在城里，晚上大家都在各自的房间里看手机，很少说话。今年我们搬到了农村，每天晚上一起吃饭、聊天儿，这样的生活是我盼望已久的。',
        opts: [{ t: '各自', ok: 1 }, { t: '轮流', note: '轮流 = thay phiên, phải đứng trước động từ (轮流开车), không đứng trước 的房间.' }, { t: '随时', note: '随时 = bất cứ lúc nào, là phó từ, không đứng trước 的 + danh từ.' }],
        teach: '<b>各自的房间</b> = phòng riêng của mỗi người (giống trong bài).' },
      { t: 'mc', kind: 'doc', w: ['勿'], u: '3-8', scene: 'c3_oldSaying', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['中国有句老话：“可上山，勿下海。”意思是去山上没问题，可是___去海上，因为海上太危险了。', 'Trung Quốc có câu nói xưa: “Lên núi thì được, chớ xuống biển.” Nghĩa là lên núi thì không sao, nhưng đừng ra biển, vì trên biển nguy hiểm quá.'],
        full: '中国有句老话：“可上山，勿下海。”意思是去山上没问题，可是不要去海上，因为海上太危险了。',
        opts: [{ t: '不要', ok: 1 }, { t: '一定要', note: '一定要 = nhất định phải, ngược nghĩa với 勿 (chớ, đừng).' }, { t: '可以', note: '可以 = được phép; còn 勿 là “chớ, đừng”.' }],
        teach: '<b>勿</b> = <b>不要</b> (văn viết): 勿下海 = 不要去海上.' },
      /* viết: sắp xếp thành câu */
      { t: 'order', kind: 'viet', w: ['轮流', '驾驶'], u: '3-4', zh: '白天他们轮流驾驶帆船。', vi: 'Ban ngày họ thay phiên nhau lái thuyền buồm.', chunks: ['白天', '他们', '轮流驾驶', '帆船'] },
      { t: 'order', kind: 'viet', w: ['傍晚', '舒适'], u: '3-6', zh: '傍晚的海边非常舒适。', vi: 'Bờ biển lúc chiều tà rất dễ chịu.', chunks: ['傍晚的', '海边', '非常', '舒适'] },
      { t: 'order', kind: 'viet', w: ['拥抱'], u: '3-9', zh: '他们紧紧地拥抱在一起。', vi: 'Họ ôm chặt lấy nhau.', chunks: ['他们', '紧紧地', '拥抱', '在一起'] },
      { t: 'order', kind: 'viet', w: ['人生', '未来'], u: '3-10', zh: '人生有很多选择，未来可以改变。', vi: 'Đời người có nhiều lựa chọn, tương lai có thể thay đổi.', chunks: ['人生', '有很多选择', '未来', '可以改变'] }
    ]
  };
})();

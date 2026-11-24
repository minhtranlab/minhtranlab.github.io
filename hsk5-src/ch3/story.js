/* ===== Bài 3 "人生有选择，一切可改变": the book's sentences (BOOK), the study path (PATH) and the sessions (SESSIONS) ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  /* the printed sentences, in order. p = paragraph. Two printed sentences are split for the screen and the comic:
     sentence 4 at "：" (3|4) and sentence 20 at the comma before "因为" (20|21). 23|24 are one quotation (two printed sentences). */
  var BOOK = CH3.BOOK = [
    /* 0  tập 1 */ { p: 1, zh: '翟峰和妻子都是铁路工人，工作稳定、待遇不错。', vi: 'Anh Phong và vợ đều là công nhân đường sắt, công việc ổn định, đãi ngộ khá tốt.' },
    /* 1  tập 1 */ { p: 1, zh: '他们有房有车，从不用为生活发愁。', vi: 'Họ có nhà có xe, chưa bao giờ phải lo nghĩ chuyện cơm áo.' },
    /* 2  tập 2 */ { p: 1, zh: '可翟峰却不想一辈子过这样平静的生活。', vi: 'Nhưng anh Phong lại không muốn cả đời sống cuộc sống yên ả như thế.' },
    /* 3  tập 2 */ { p: 1, zh: '通过电视，翟峰迷上了帆船，他觉得帆船能带他撞开“世界之门”：', vi: 'Qua ti vi, anh Phong mê thuyền buồm. Anh thấy thuyền buồm có thể đưa anh phá tung “cánh cửa ra thế giới”:' },
    /* 4  tập 2 */ { p: 1, zh: '只要有一艘船，就能航行在无边无际的海上，到任何自己想去的地方。', vi: 'chỉ cần có một chiếc thuyền là có thể lướt đi trên biển rộng mênh mông, tới bất cứ nơi nào mình muốn.' },
    /* 5  tập 3 */ { p: 2, zh: '由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。', vi: 'Vì hai vợ chồng không có tiền để dành nên họ bán nhà bán xe, mua một chiếc thuyền cũ; anh Phong đặt tên nó là “Cầu Vồng”.' },
    /* 6  tập 3 */ { p: 2, zh: '出发前，翟峰自学了航海知识。', vi: 'Trước khi lên đường, anh Phong tự học kiến thức đi biển.' },
    /* 7  tập 3 */ { p: 2, zh: '然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。', vi: 'Thế nhưng tất cả mọi người, kể cả ba mẹ anh Phong, đều cho rằng anh Phong “điên rồi”.' },
    /* 8  tập 4 */ { p: 3, zh: '2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。', vi: 'Ngày 24 tháng 11 năm 2012, anh Phong đã nghỉ việc cùng vợ đưa cô con gái đang tạm nghỉ học, lần đầu tiên lái thuyền buồm ra khơi.' },
    /* 9  tập 4 */ { p: 3, zh: '白天，翟峰和妻子轮流驾船。', vi: 'Ban ngày, anh Phong và vợ thay phiên nhau lái thuyền.' },
    /* 10 tập 4 */ { p: 3, zh: '女儿在船上看书、学习、画画儿。', vi: 'Con gái ở trên thuyền đọc sách, học bài, vẽ tranh.' },
    /* 11 tập 5 */ { p: 3, zh: '下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。', vi: 'Buổi chiều khi mặt biển yên ả, anh Phong cùng vợ xuống biển bơi hoặc câu cá.' },
    /* 12 tập 5 */ { p: 3, zh: '该吃饭时，妻子会给全家人做一顿美味的海鲜。', vi: 'Đến giờ ăn, người vợ nấu cho cả nhà một bữa hải sản ngon lành.' },
    /* 13 tập 6 */ { p: 4, zh: '傍晚是一家人最舒适的时候。', vi: 'Chiều tà là lúc cả nhà thoải mái nhất.' },
    /* 14 tập 6 */ { p: 4, zh: '干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。', vi: 'Làm xong việc, cả nhà ngồi bên nhau, xem phim trên máy tính hoặc trò chuyện.' },
    /* 15 tập 7 */ { p: 4, zh: '这样的生活，是翟峰盼望已久的。', vi: 'Cuộc sống như thế là điều anh Phong mong mỏi đã lâu.' },
    /* 16 tập 7 */ { p: 4, zh: '以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。', vi: 'Trước kia, những buổi tối trên đất liền, mỗi người ở trong phòng riêng của mình, cả nhà chẳng mấy khi trò chuyện với nhau.' },
    /* 17 tập 8 */ { p: 5, zh: '中国有句老话，可上山，勿下海。', vi: 'Trung Quốc có câu nói xưa: lên núi thì được, chớ có xuống biển.' },
    /* 18 tập 8 */ { p: 5, zh: '美好的时刻过去后是一个个紧张的夜晚。', vi: 'Qua những khoảnh khắc tươi đẹp là từng đêm căng thẳng.' },
    /* 19 tập 8 */ { p: 5, zh: '一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。', vi: 'Suốt dọc đường, nhà anh Phong đã trải qua hơn mười lần gặp nguy lớn nhỏ như thân thuyền bốc cháy, thuyền bị rò nước.' },
    /* 20 tập 9 */ { p: 5, zh: '他们最怕雷电交加的时刻，', vi: 'Họ sợ nhất những lúc sấm chớp đùng đùng,' },
    /* 21 tập 9 */ { p: 5, zh: '因为小船随时有可能被下一道闪电击到，一家三口只能紧紧拥抱在一起，希望闪电快快过去。', vi: 'vì chiếc thuyền nhỏ có thể bị tia chớp kế tiếp đánh trúng bất cứ lúc nào; cả nhà ba người chỉ biết ôm chặt lấy nhau, mong chớp mau qua đi.' },
    /* 22 tập 10 */ { p: 6, zh: '在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。', vi: 'Sau tám tháng, đi hơn 4000 hải lý, cuối cùng nhà anh Phong cũng về tới nhà.' },
    /* 23 tập 10 */ { p: 7, zh: '翟峰相信，一切只是开始，航海就是他人生道路上一段长长的台阶，通向他想要的未来。', vi: 'Anh Phong tin rằng mọi thứ chỉ mới bắt đầu: đi biển là một đoạn bậc thềm dài trên đường đời của anh, dẫn tới tương lai anh mong muốn.' },
    /* 24 tập 11 */ { p: 7, zh: '“我和太太想要看看这个时代、这个世界到底是什么样子。', vi: '“Tôi và vợ muốn xem thời đại này, thế giới này rốt cuộc trông ra sao.' },
    /* 25 tập 11 */ { p: 7, zh: '人生有选择，一切可改变”。', vi: 'Đời người có lựa chọn, mọi thứ đều có thể đổi thay.”' },
    /* 26 tập 11 */ { p: 7, zh: '下一站，他们想去澳洲和新西兰。', vi: 'Chặng tới, họ muốn đi Úc và New Zealand.' },
    /* 27 tập 11 */ { p: 7, zh: '等待今年11月的北风，北风南下之时，他们将再次出发。', vi: 'Họ chờ gió bấc tháng 11 năm nay; khi gió bấc thổi về phương nam, họ sẽ lại lên đường.' }
  ];
  var B = function (i) { return { who: 'n', v: 'm', zh: BOOK[i].zh, vi: BOOK[i].vi }; };
  var PK = 'Nghe rồi chọn bức tranh đúng:';
  /* cloze in a study unit (no "đúng" reply on the right option: the green box is enough) */
  var cl = function (w, scene, say, vi, full, ok, wrongs, teach, prompt) {
    return { t: 'mc', w: [w], scene: scene, say: [say, vi], full: full, prompt: prompt || 'Chọn từ điền vào chỗ trống:',
      opts: [{ t: ok, ok: 1 }].concat(wrongs.map(function (x) { return { t: x[0], note: x[1] }; })), teach: teach };
  };
  /* the listening item of a word (CH3.LEARN[w].hear) as a screen; filled in by CH3.resolveRefs() (learn.js may load later) */
  var hearOf = function (w) { return { ref: ['HEAR', w] }; };

  /* ---- the study path of Bài 3: 21 stages in order (Chapter3_units.md). A stage without a SESSIONS entry is "Sắp ra mắt". ---- */
  CH3.PATH = [
    { id: '3-1', kind: 'learn', title: 'Công việc ổn định' },
    { id: '3-2', kind: 'learn', title: 'Mê thuyền buồm' },
    { id: '3-3', kind: 'learn', title: 'Bán nhà mua thuyền' },
    { id: '3-m1', kind: 'mix', title: 'Ôn tập', units: ['3-1', '3-2', '3-3'] },
    { id: '3-g1', kind: 'comic', title: 'Ghép truyện: Giấc mơ thuyền buồm', ids: [0, 1, 2, 3, 4, 5, 6, 7] },
    { id: '3-4', kind: 'learn', title: 'Ra khơi' },
    { id: '3-5', kind: 'learn', title: 'Câu cá, ăn hải sản' },
    { id: '3-m2', kind: 'mix', title: 'Ôn tập', units: ['3-4', '3-5'] },
    { id: '3-6', kind: 'learn', title: 'Chiều tà trên thuyền' },
    { id: '3-7', kind: 'learn', title: 'Ngày trước trên đất liền' },
    { id: '3-m3', kind: 'mix', title: 'Ôn tập', units: ['3-6', '3-7'] },
    { id: '3-g2', kind: 'comic', title: 'Ghép truyện: Những ngày vui trên biển', ids: [8, 9, 10, 11, 12, 13, 14, 15, 16] },
    { id: '3-8', kind: 'learn', title: 'Chớ xuống biển' },
    { id: '3-9', kind: 'learn', title: 'Đêm sấm chớp' },
    { id: '3-m4', kind: 'mix', title: 'Ôn tập', units: ['3-8', '3-9'] },
    { id: '3-g3', kind: 'comic', title: 'Ghép truyện: Đêm giông bão', ids: [17, 18, 19, 20, 21] },
    { id: '3-10', kind: 'learn', title: 'Về tới nhà' },
    { id: '3-11', kind: 'learn', title: 'Đời người có lựa chọn' },
    { id: '3-m5', kind: 'mix', title: 'Ôn tập', units: ['3-10', '3-11'] },
    { id: '3-g4', kind: 'comic', title: 'Ghép truyện: Chặng tiếp theo', ids: [22, 23, 24, 25, 26, 27] },
    { id: '3-t', kind: 'test', title: 'Kiểm tra cuối bài 3' }
  ];

  CH3.SESSIONS = [
    /* ---------- Tập 1 · câu 1–2 ---------- */
    { id: '3-1', title: 'Công việc ổn định', sub: '4 từ mới', thumb: 'c3_rail', words: ['工人', '稳定', '待遇', '发愁'], screens: [
      { t: 'predict', scene: 'c3_sailHope', key: 'c3key', q: 'Bài này tên là “Đời người có lựa chọn, mọi thứ có thể đổi thay”. Theo bạn, người trong truyện sẽ chọn gì?', opts: ['Bỏ cuộc sống yên ổn để đi làm điều mình mơ ước', 'Giữ công việc cũ, sống yên ổn cả đời', 'Chuyển sang một công ty khác lương cao hơn'] },
      { t: 'story', scene: 'c3_rail', lines: [B(0)] },
      { t: 'word', id: '工人', scene: 'c3_worker' },
      { t: 'word', id: '稳定', scene: 'c3_steady' },
      hearOf('稳定'),
      { t: 'word', id: '待遇', scene: 'c3_pay' },
      cl('待遇', 'c3_rail', '翟峰和妻子都是铁路工人，工作稳定、___不错。', 'Anh Phong và vợ đều là công nhân đường sắt, công việc ổn định, đãi ngộ khá tốt.', '翟峰和妻子都是铁路工人，工作稳定、待遇不错。', '待遇',
        [['工人', '工人 là người (công nhân). Câu đang kể về công việc của hai người: ổn định, và lương, chế độ khá tốt: 待遇不错.'], ['担心', '担心 là động từ “lo lắng”; 担心不错 không có nghĩa.']],
        '<b>待遇不错</b> = đãi ngộ khá tốt (lương, thưởng, chế độ). Đi cặp với <b>工作稳定</b> = việc ổn định.', 'Chọn từ điền vào chỗ trống (câu trong bài):'),
      { t: 'word', id: '发愁', scene: 'c3_worry' },
      cl('发愁', 'c3_examWorry', '考试快到了，他每天都为考试___。', 'Sắp thi rồi, ngày nào anh ấy cũng lo âu vì chuyện thi cử.', '考试快到了，他每天都为考试发愁。', '发愁',
        [['稳定', '稳定 là tính từ “ổn định”; lo vì chuyện gì là <b>为…发愁</b>.'], ['待遇', '待遇 là danh từ “đãi ngộ”; sau 为考试 cần một động từ: 发愁.']],
        '<b>为 + việc + 发愁</b> = lo âu vì chuyện gì: 为考试发愁, 为生活发愁 (trong bài).'),
      { t: 'story', scene: 'c3_comfyHome', lines: [B(1)] },
      { t: 'tf', scene: 'c3_comfyHome', w: ['发愁'], zh: '翟峰一家没有房子，每天都为生活发愁。', vi: 'Nhà anh Phong không có nhà ở, ngày nào cũng lo chuyện cơm áo.', ok: false,
        why: 'Câu trong bài: <b>他们有房有车，从不用为生活发愁</b> = họ có nhà có xe, chưa bao giờ phải lo chuyện cơm áo.' },
      { t: 'say', mode: 'echo', i: 1 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['工人', '稳定', '待遇', '发愁'], say: [B(0), B(1)],
        tease: { scene: 'c3_dreamer', vi: 'việc ổn định, có nhà có xe… nhưng anh Phong lại không thấy vui. Anh muốn gì?' } }
    ] },
    /* ---------- Tập 2 · câu 3–4 (câu 4 chia 2 màn ở dấu “：”) ---------- */
    { id: '3-2', title: 'Mê thuyền buồm', sub: '5 từ mới (3 từ chỉ cần nhận mặt chữ)', thumb: 'c3_tvBoat', words: ['平静', '帆船', '撞', '艘', '航行'], screens: [
      { t: 'story', scene: 'c3_dreamer', lines: [B(2)] },
      { t: 'word', id: '平静', scene: 'c3_calmSea' },
      cl('平静', 'c3_calmSea', '风停了，海面又变得很___。', 'Gió ngừng rồi, mặt biển lại trở nên rất yên ả.', '风停了，海面又变得很平静。', '平静',
        [['紧张', '紧张 = căng thẳng, không tả mặt biển. Gió ngừng (风停了) thì biển lặng: 平静.'], ['发愁', '发愁 là động từ “lo âu”, dùng cho người.']],
        '<b>海面很平静</b> = mặt biển yên ả. Cũng nói <b>心情平静</b> (lòng bình tĩnh), <b>平静的生活</b> (cuộc sống yên ả, trong bài).'),
      { t: 'story', scene: 'c3_tvBoat', lines: [B(3)] },
      { t: 'word', id: '帆船', scene: 'c3_sailboat' },
      { t: 'word', id: '撞', scene: 'c3_bump' },
      { t: 'pick', w: ['撞'], zh: '他走路看手机，撞到了一棵树。', vi: 'Anh ấy vừa đi vừa xem điện thoại, đâm sầm vào một cái cây.', prompt: PK, opts: [
        { sc: 'c3_bump', ok: 1 },
        { sc: 'c3_treeShade', why: 'Người này ngồi dưới gốc cây xem điện thoại, không đâm vào cây. Câu nghe: <b>撞到了一棵树</b>.' },
        { sc: 'c3_carBump', why: 'Đây là hai chiếc xe đâm nhau. Câu nghe nói <b>他走路</b> (anh ấy đang đi bộ) rồi đâm vào cây.' }],
        teach: '<b>撞到 + vật</b> = đâm vào cái gì. Trong bài, 撞 dùng theo nghĩa bóng: <b>撞开“世界之门”</b> = phá tung “cánh cửa ra thế giới”.' },
      { t: 'story', scene: 'c3_openSea', lines: [B(4)] },
      { t: 'word', id: '艘', scene: 'c3_boats' },
      { t: 'word', id: '航行', scene: 'c3_voyage' },
      cl('艘', 'c3_boats', '海上有两___帆船。', 'Trên biển có hai chiếc thuyền buồm.', '海上有两艘帆船。', '艘',
        [['辆', '辆 là lượng từ cho xe (一辆车); tàu thuyền dùng 艘.'], ['张', '张 dùng cho vật mỏng, phẳng (一张纸, 一张床).']],
        '<b>艘</b> (có bộ 舟 thuyền) chỉ dùng cho tàu thuyền: 一艘船, 两艘帆船. Trong bài: <b>只要有一艘船</b>.'),
      hearOf('航行'),
      { t: 'say', mode: 'echo', i: 2 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['平静', '帆船', '撞', '艘', '航行'], say: [B(2), B(3), B(4)],
        tease: { scene: 'c3_sellBuy', vi: 'muốn có thuyền thì phải có tiền. Hai vợ chồng lấy đâu ra tiền?' } }
    ] },
    /* ---------- Tập 3 · câu 5–7 · ngữ pháp 包括 ---------- */
    { id: '3-3', title: 'Bán nhà mua thuyền', sub: '5 từ mới và bài học về 包括', thumb: 'c3_sellBuy', words: ['积蓄', '二手', '彩虹', '包括', '疯'], screens: [
      { t: 'story', scene: 'c3_sellBuy', lines: [B(5)] },
      { t: 'word', id: '积蓄', scene: 'c3_piggy' },
      { t: 'word', id: '二手', scene: 'c3_usedCar' },
      { t: 'pick', w: ['二手'], zh: '我买了一辆二手车，很便宜。', vi: 'Mình mua một chiếc xe cũ, rất rẻ.', prompt: PK, opts: [
        { sc: 'c3_usedCar', ok: 1 },
        { sc: 'c3_newCar', why: 'Chiếc xe này mới tinh, còn thắt nơ. <b>二手车</b> = xe cũ, đã có người dùng, nên mới <b>很便宜</b> (rất rẻ).' },
        { sc: 'c3_oldBooks', why: 'Đây là sách cũ (二手书). Câu nghe nói <b>一辆二手车</b>: một chiếc xe.' }],
        teach: '<b>二手 + danh từ</b> = đồ cũ: 二手车, 二手书, <b>二手船</b> (trong bài).' },
      { t: 'word', id: '彩虹', scene: 'c3_rainbow' },
      cl('彩虹', 'c3_rainbow', '雨停了，天上出现了一道___。', 'Mưa tạnh, trên trời hiện ra một dải cầu vồng.', '雨停了，天上出现了一道彩虹。', '彩虹',
        [['帆船', '帆船 là thuyền buồm, không hiện ra trên trời.'], ['积蓄', '积蓄 là tiền để dành.']],
        '<b>一道彩虹</b> = một dải cầu vồng. Trong bài, anh Phong đặt tên thuyền là <b>“彩虹号”</b> (chiếc “Cầu Vồng”).'),
      { t: 'story', scene: 'c3_studyMap', lines: [B(6)] },
      { t: 'story', scene: 'c3_crazyTalk', lines: [B(7)] },
      { t: 'word', id: '包括', scene: 'c3_include' },
      cl('包括', 'c3_include', '我们班所有人，___老师，都去看电影了。', 'Tất cả lớp mình, kể cả cô giáo, đều đi xem phim.', '我们班所有人，包括老师，都去看电影了。', '包括',
        [['一起', '一起 đứng trước động từ (一起去); không đứng trước một người để nói “kể cả ai”.'], ['从', '从 = từ (nơi nào, lúc nào); 从老师 không có nghĩa “kể cả cô giáo”.']],
        '<b>包括 X，所有人都…</b> = kể cả X, ai cũng…. Trong bài: <b>包括翟峰的父母，所有人都觉得……</b> (kể cả ba mẹ anh Phong, ai cũng cho rằng…). 包括 còn dùng để kể các phần: 这个价格包括早饭 (giá này gồm bữa sáng).'),
      { t: 'word', id: '疯', scene: 'c3_coldSwim' },
      hearOf('疯'),
      { t: 'say', mode: 'echo', i: 6 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['积蓄', '二手', '彩虹', '包括', '疯'], say: [B(5), B(6), B(7)],
        tease: { scene: 'c3_departure', vi: 'mặc kệ mọi người can, một ngày tháng 11 cả nhà ra khơi…' } }
    ] },
    /* ---------- Ôn tập 1 (sau tập 3, ngắn): 14 từ của tập 1–3 + 1 từ cũ của Bài 1–2 (~20%); ext = thẻ mở rộng 包括 ---------- */
    { id: '3-m1', mix: 1, after: ['3-1', '3-2', '3-3'], ch1: 1, max: 6, title: 'Ôn tập', sub: 'Các từ của tập 1–3, thêm từ cũ', thumb: 'cup', words: [], screens: [],
      ext: [
        { t: 'spot', w: ['包括'], chunks: ['这个价格', '一起', '早饭和', '晚饭。'], bad: 1, fix: '包括', full: '这个价格包括早饭和晚饭。', vi: 'Giá này bao gồm bữa sáng và bữa tối.', prompt: 'Thẻ mở rộng · Tìm chỗ sai rồi sửa:',
          teach: '<b>包括 + các phần</b> = bao gồm: 这个价格包括早饭和晚饭. Còn <b>包括 X，所有人都…</b> = kể cả X (trong bài).' }
      ] },
    /* ---------- Tập 4 · câu 8–10 ---------- */
    { id: '3-4', title: 'Ra khơi', sub: '3 từ mới', thumb: 'c3_departure', words: ['辞职', '驾驶', '轮流'], screens: [
      { t: 'story', scene: 'c3_departure', lines: [B(8)] },
      { t: 'word', id: '辞职', scene: 'c3_quit' },
      { t: 'order', w: ['辞职'], zh: '她辞了职，在家照顾孩子。', vi: 'Cô ấy thôi việc, ở nhà chăm con.', chunks: ['她', '辞了职', '在家', '照顾孩子'],
        teach: '<b>辞职</b> tách được: 辞 + 了 + 职. Trong bài: <b>辞了职的翟峰</b> = anh Phong đã thôi việc.' },
      { t: 'word', id: '驾驶', scene: 'c3_steer' },
      cl('驾驶', 'c3_steer', '他第一次___帆船出海，有点儿紧张。', 'Lần đầu lái thuyền buồm ra khơi, anh ấy hơi căng thẳng.', '他第一次驾驶帆船出海，有点儿紧张。', '驾驶',
        [['航行', '航行 = (tàu thuyền) đi trên biển, không có tân ngữ: không nói 航行帆船. Người cầm lái thì 驾驶帆船.'], ['辞职', '辞职 = thôi việc, không đi với 帆船.']],
        '<b>驾驶 + 帆船 / 汽车 / 飞机</b> = lái (văn viết của 开). Trong bài: <b>第一次驾驶帆船出海了</b>.'),
      { t: 'story', scene: 'c3_takeTurns', lines: [B(9)] },
      { t: 'word', id: '轮流', scene: 'c3_takeTurns' },
      cl('轮流', 'c3_caring', '我和哥哥___照顾生病的奶奶。', 'Mình và anh trai thay phiên nhau chăm sóc bà nội bị ốm.', '我和哥哥轮流照顾生病的奶奶。', '轮流',
        [['驾驶', '驾驶 = lái (tàu, xe), không đi với 照顾.'], ['包括', '包括 = bao gồm, không đứng trước động từ 照顾.']],
        '<b>轮流 + động từ</b> = thay phiên nhau làm: <b>轮流驾船</b> (trong bài), 轮流休息, 轮流照看.'),
      { t: 'story', scene: 'c3_girlDraw', lines: [B(10)] },
      { t: 'tf', scene: 'c3_girlDraw', w: ['轮流'], zh: '在船上，女儿每天都要帮爸爸驾船。', vi: 'Trên thuyền, ngày nào con gái cũng phải giúp ba lái thuyền.', ok: false,
        why: 'Người lái thuyền là hai vợ chồng: <b>翟峰和妻子轮流驾船</b>. Con gái thì <b>在船上看书、学习、画画儿</b>.' },
      hearOf('轮流'),
      { t: 'say', mode: 'echo', i: 9 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['辞职', '驾驶', '轮流'], say: [B(8), B(9), B(10)],
        tease: { scene: 'c3_swimFish', vi: 'buổi chiều, biển lặng. Cả nhà làm gì trên biển?' } }
    ] },
    /* ---------- Tập 5 · câu 11–12 ---------- */
    { id: '3-5', title: 'Câu cá, ăn hải sản', sub: '3 từ mới', thumb: 'c3_seafoodDinner', words: ['钓', '顿', '海鲜'], screens: [
      { t: 'story', scene: 'c3_swimFish', lines: [B(11)] },
      { t: 'word', id: '钓', scene: 'c3_fishing' },
      { t: 'pick', w: ['钓'], zh: '爷爷每个周末都去河边钓鱼。', vi: 'Cuối tuần nào ông nội cũng ra bờ sông câu cá.', prompt: PK, opts: [
        { sc: 'c3_grandpaFish', ok: 1 },
        { sc: 'c3_grandpaSwim', why: 'Ông đang bơi dưới sông (游泳). Câu nghe: <b>去河边钓鱼</b> = ra bờ sông câu cá.' },
        { sc: 'c3_buyFish', why: 'Ông đang mua cá ở chợ. 钓鱼 = tự câu lấy cá bằng cần câu.' }],
        teach: '<b>钓鱼</b> = câu cá. Trong bài: <b>下海游泳或者钓鱼</b> = xuống biển bơi hoặc câu cá.' },
      { t: 'story', scene: 'c3_seafoodDinner', lines: [B(12)] },
      { t: 'word', id: '顿', scene: 'c3_meal' },
      cl('顿', 'c3_meal', '今天晚上我请你吃一___饭。', 'Tối nay mình mời bạn một bữa cơm.', '今天晚上我请你吃一顿饭。', '顿',
        [['艘', '艘 chỉ dùng cho tàu thuyền (一艘船).'], ['张', '张 dùng cho vật mỏng, phẳng (一张纸).']],
        '<b>一顿饭</b> = một bữa cơm: 顿 là lượng từ của bữa ăn.'),
      { t: 'word', id: '海鲜', scene: 'c3_seafood' },
      cl('海鲜', 'c3_seafood', '住在海边的人常常吃___。', 'Người sống ở ven biển thường ăn hải sản.', '住在海边的人常常吃海鲜。', '海鲜',
        [['帆船', '帆船 là thuyền buồm, không ăn được.'], ['彩虹', '彩虹 là cầu vồng.']],
        '<b>吃海鲜</b> = ăn hải sản. 鲜 = tươi.'),
      { t: 'tf', scene: 'c3_seafoodDinner', w: ['海鲜'], zh: '妻子每天都去饭馆给全家人买海鲜。', vi: 'Ngày nào người vợ cũng ra quán mua hải sản cho cả nhà.', ok: false,
        why: 'Người vợ tự nấu: <b>妻子会给全家人做一顿美味的海鲜</b>. Giữa biển làm gì có quán ăn.' },
      { t: 'type', w: ['顿'], zh: '一顿饭', vi: 'một bữa cơm', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      hearOf('海鲜'),
      { t: 'say', mode: 'echo', i: 12 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['钓', '顿', '海鲜'], say: [B(11), B(12)],
        tease: { scene: 'c3_sunsetFamily', vi: 'mặt trời sắp lặn. Lúc nào là lúc cả nhà thích nhất?' } }
    ] },
    /* ---------- Ôn tập 2 (giữa đoạn C1): 6 từ của tập 4–5 + từ yếu của tập 1–3 + 2 từ cũ Bài 1–2 ---------- */
    { id: '3-m2', mix: 1, after: ['3-4', '3-5'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 4–5, thêm từ cũ', thumb: 'cup', words: [], screens: [] },
    /* ---------- Tập 6 · câu 13–14 · 舒适 khác 舒服 ---------- */
    { id: '3-6', title: 'Chiều tà trên thuyền', sub: '3 từ mới và 舒适 khác 舒服', thumb: 'c3_sunsetFamily', words: ['傍晚', '舒适', '干活儿'], screens: [
      { t: 'story', scene: 'c3_sunsetFamily', lines: [B(13)] },
      { t: 'word', id: '傍晚', scene: 'c3_dusk' },
      cl('傍晚', 'c3_dusk', '___的时候，太阳快要下山了。', 'Lúc chạng vạng, mặt trời sắp lặn.', '傍晚的时候，太阳快要下山了。', '傍晚',
        [['早上', '早上 là buổi sáng; mặt trời sắp lặn (下山) là lúc chạng vạng.'], ['中午', '中午 là buổi trưa, mặt trời còn ở trên cao.']],
        '<b>傍晚</b> = lúc mặt trời sắp lặn, trước 晚上 (buổi tối).'),
      { t: 'word', id: '舒适', scene: 'c3_comfyRoom' },
      cl('舒适', 'c3_upset', '听了他的话，我心里很不___。', 'Nghe anh ta nói xong, trong lòng mình rất khó chịu.', '听了他的话，我心里很不舒服。', '舒服',
        [['舒适', '舒适 (văn viết) nói môi trường, căn phòng; cảm giác trong lòng mình là 舒服: 心里不舒服.'], ['稳定', '稳定 nói công việc, thu nhập; không tả cảm giác trong lòng.']],
        '<b>舒适</b> và <b>舒服</b> đều là dễ chịu. <b>舒适</b>: văn viết, môi trường (舒适的房间, 舒适的生活). <b>舒服</b>: khẩu ngữ, cảm giác của người (我今天不舒服, 心里不舒服), lặp được: 舒舒服服.', '舒适 hay 舒服? Chọn từ điền vào chỗ trống:'),
      { t: 'story', scene: 'c3_movieNight', lines: [B(14)] },
      { t: 'word', id: '干活儿', scene: 'c3_chores' },
      { t: 'order', w: ['干活儿'], zh: '干完活儿，我们一起去吃饭吧。', vi: 'Làm xong việc, tụi mình cùng đi ăn nhé.', chunks: ['干完活儿', '我们', '一起', '去吃饭吧'],
        teach: '<b>干活儿</b> tách được: 干 + 完 + 活儿. Trong bài: <b>干完活儿，一家人坐在一起</b>.' },
      hearOf('舒适'),
      { t: 'tf', scene: 'c3_movieNight', w: ['傍晚'], zh: '傍晚，一家人坐在一起看电影、聊天儿。', vi: 'Chiều tà, cả nhà ngồi bên nhau xem phim, trò chuyện.', ok: true,
        why: 'Trong bài: <b>干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿</b>.' },
      { t: 'say', mode: 'read', i: 13 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['傍晚', '舒适', '干活儿'], say: [B(13), B(14)],
        tease: { scene: 'c3_separateRooms', vi: 'hồi còn ở trên đất liền, buổi tối nhà anh Phong thế nào?' } }
    ] },
    /* ---------- Tập 7 · câu 15–16 · ngữ pháp 各自 ---------- */
    { id: '3-7', title: 'Ngày trước trên đất liền', sub: '3 từ mới và bài học về 各自', thumb: 'c3_separateRooms', words: ['盼望', '陆地', '各自'], screens: [
      { t: 'story', scene: 'c3_dreamCome', lines: [B(15)] },
      { t: 'word', id: '盼望', scene: 'c3_waitNews' },
      cl('盼望', 'c3_waitNews', '孩子们天天___着过年。', 'Bọn trẻ ngày ngày mong đến Tết.', '孩子们天天盼望着过年。', '盼望',
        [['舒适', '舒适 là tính từ “dễ chịu”, không có tân ngữ 过年.'], ['干活儿', '干活儿 = làm việc; 干活儿着过年 không nói được.']],
        '<b>盼望 + （好）消息 / 过年 / 成功</b>. Trong bài: <b>是翟峰盼望已久的</b> = điều anh Phong mong mỏi đã lâu.'),
      { t: 'story', scene: 'c3_separateRooms', lines: [B(16)] },
      { t: 'word', id: '陆地', scene: 'c3_land' },
      cl('陆地', 'c3_land', '在海上航行了一个月，我们终于看到了___。', 'Đi trên biển một tháng, cuối cùng chúng tôi cũng nhìn thấy đất liền.', '在海上航行了一个月，我们终于看到了陆地。', '陆地',
        [['傍晚', '傍晚 là lúc chiều tối, không phải một nơi để “nhìn thấy”.'], ['舒适', '舒适 là tính từ “dễ chịu”, không làm tân ngữ của 看到.']],
        '<b>陆地</b> = đất liền, đối lập với 海上. Trong bài: <b>以前陆地上的夜晚</b> = những buổi tối trên đất liền ngày trước.'),
      { t: 'word', id: '各自', scene: 'c3_eachOwn' },
      cl('各自', 'c3_eachOwn', '下课以后，同学们___回家了。', 'Tan học, các bạn ai về nhà nấy.', '下课以后，同学们各自回家了。', '各自',
        [['陆地', '陆地 là danh từ “đất liền”, không đứng trước động từ 回家.'], ['盼望', '盼望 = mong; câu đã kể việc về nhà xong (了), không còn là “mong”.']],
        '<b>各自</b> đi cùng những người được nói tới: <b>同学们各自回家</b> (ai về nhà nấy), <b>他们在各自的房间</b> (trong bài: ai ở phòng nấy). Chủ ngữ phải là nhiều người.'),
      hearOf('各自'),
      { t: 'tf', scene: 'c3_separateRooms', w: ['陆地', '各自'], zh: '以前在陆地上，一家人晚上常常坐在一起聊天儿。', vi: 'Trước kia trên đất liền, buổi tối cả nhà thường ngồi bên nhau trò chuyện.', ok: false,
        why: 'Ngược lại: <b>以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流</b>. Phải ra biển cả nhà mới ngồi bên nhau.' },
      { t: 'type', w: ['盼望'], zh: '盼望好消息', vi: 'mong tin vui', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      { t: 'say', mode: 'read', i: 15 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['盼望', '陆地', '各自'], say: [B(15), B(16)],
        tease: { scene: 'c3_oldSaying', vi: 'người Trung Quốc có câu: lên núi thì được, nhưng biển thì…?' } }
    ] },
    /* ---------- Ôn tập 3 (sau tập 7): 6 từ của tập 6–7 + từ yếu; ext = 舒适 / 舒服 ---------- */
    { id: '3-m3', mix: 1, after: ['3-6', '3-7'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 6–7, thêm từ cũ', thumb: 'cup', words: [], screens: [],
      ext: [
        cl('舒适', 'c3_upset', '我今天有点儿不___，想早点儿睡。', 'Hôm nay mình hơi khó chịu trong người, muốn ngủ sớm một chút.', '我今天有点儿不舒服，想早点儿睡。', '舒服',
          [['舒适', '舒适 nói môi trường, đồ vật (舒适的房间); trong người khó chịu là 不舒服.'], ['稳定', '稳定 nói công việc, thu nhập; không tả cảm giác trong người.']],
          '<b>舒服</b> = cảm giác của người (khẩu ngữ); <b>舒适</b> = môi trường dễ chịu (văn viết).', 'Thẻ mở rộng · 舒适 hay 舒服?')
      ] },
    /* ---------- Tập 8 · câu 17–19 · ngữ pháp 勿, 时刻 ---------- */
    { id: '3-8', title: 'Chớ xuống biển', sub: '4 từ mới và bài học về 勿, 时刻', thumb: 'c3_fireLeak', words: ['勿', '时刻', '着火', '漏'], screens: [
      { t: 'story', scene: 'c3_oldSaying', lines: [B(17)] },
      { t: 'word', id: '勿', scene: 'c3_noEntry' },
      cl('勿', 'c3_library', '图书馆里请___大声说话。', 'Trong thư viện xin chớ nói to.', '图书馆里请勿大声说话。', '勿',
        [['没', '没 nói việc chưa xảy ra (没去); lời xin, lời cấm dùng 勿 (= 不要).'], ['不', 'Lời yêu cầu không nói 请不…; phải là 请勿 hoặc 请不要.']],
        '<b>勿</b> = 不要 (văn viết, biển báo): <b>请勿 + động từ</b>. Trong bài: <b>可上山，勿下海</b> = lên núi thì được, chớ xuống biển.'),
      { t: 'story', scene: 'c3_tenseNight', lines: [B(18)] },
      { t: 'word', id: '时刻', scene: 'c3_clockMoment' },
      cl('时刻', 'c3_clockMoment', '在最后___，他踢进了一个球。', 'Vào phút cuối, anh ấy sút vào một quả bóng.', '在最后时刻，他踢进了一个球。', '时刻',
        [['傍晚', '傍晚 là chiều tà trong ngày; “phút cuối” của trận đấu là 最后时刻.'], ['陆地', '陆地 là đất liền.']],
        '<b>时刻</b> (danh từ) = một lúc: 最后时刻, <b>美好的时刻</b> (trong bài). <b>时刻</b> (phó từ) = luôn luôn: 时刻提醒自己; lặp thành 时时刻刻.'),
      { t: 'story', scene: 'c3_fireLeak', lines: [B(19)] },
      { t: 'word', id: '着火', scene: 'c3_fire' },
      { t: 'word', id: '漏', scene: 'c3_leak' },
      cl('漏', 'c3_leak', '下雨了，房子又___水了。', 'Trời mưa, nhà lại dột rồi.', '下雨了，房子又漏水了。', '漏',
        [['着火', '着火 = bốc cháy; không đi với 水.'], ['钓', '钓 = câu (cá).']],
        '<b>漏水</b> = rò nước, dột. Trong bài: <b>船身着火、漏水</b>. 漏 + 光 / 掉 / 出来: rò hết, sót mất, rỉ ra.'),
      hearOf('着火'),
      { t: 'say', mode: 'read', i: 17 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['勿', '时刻', '着火', '漏'], say: [B(17), B(18), B(19)],
        tease: { scene: 'c3_storm', vi: 'đêm đó trời nổi giông. Cả nhà sợ nhất điều gì?' } }
    ] },
    /* ---------- Tập 9 · câu 20 (chia 2 màn ở dấu phẩy trước 因为) ---------- */
    { id: '3-9', title: 'Đêm sấm chớp', sub: '5 từ mới', thumb: 'c3_storm', words: ['雷', '随时', '闪电', '击', '拥抱'], screens: [
      { t: 'story', scene: 'c3_storm', lines: [B(20)] },
      { t: 'word', id: '雷', scene: 'c3_thunder' },
      { t: 'word', id: '闪电', scene: 'c3_lightning' },
      cl('闪电', 'c3_lightning', '天黑了，天上突然出现了一道___。', 'Trời tối rồi, trên trời bỗng loé lên một tia chớp.', '天黑了，天上突然出现了一道闪电。', '闪电',
        [['雷', '雷 là tiếng sấm, nghe chứ không “hiện ra một vệt”; 一道 đi với 闪电.'], ['彩虹', '彩虹 (cầu vồng) hiện ra khi có nắng sau mưa, không phải lúc trời tối.']],
        '<b>一道闪电</b> = một tia chớp. <b>打雷</b> = có sấm. Trong bài: <b>雷电交加</b> = sấm chớp đùng đùng.'),
      { t: 'story', scene: 'c3_hugStorm', lines: [B(21)] },
      { t: 'word', id: '随时', scene: 'c3_anytime' },
      cl('随时', 'c3_anytime', '有问题你___给我打电话。', 'Có gì bạn cứ gọi cho mình bất cứ lúc nào.', '有问题你随时给我打电话。', '随时',
        [['时刻', '时刻 làm phó từ là “luôn luôn” (时刻提醒自己); “cứ gọi lúc nào cũng được” là 随时.'], ['各自', '各自 = ai nấy; câu chỉ có một người (你).']],
        '<b>随时</b> = bất cứ lúc nào. Trong bài: chiếc thuyền nhỏ <b>随时有可能</b> bị tia chớp đánh trúng.'),
      { t: 'word', id: '击', scene: 'c3_strike' },
      { t: 'word', id: '拥抱', scene: 'c3_hug' },
      cl('拥抱', 'c3_hug', '见到多年不见的老朋友，他们紧紧地___在一起。', 'Gặp lại bạn cũ nhiều năm không gặp, họ ôm chặt lấy nhau.', '见到多年不见的老朋友，他们紧紧地拥抱在一起。', '拥抱',
        [['撞', '撞在一起 = đâm vào nhau (tai nạn); gặp bạn cũ thì ôm nhau: 拥抱在一起.'], ['击', '击 = đánh; 紧紧地击 không có nghĩa.']],
        '<b>紧紧（地）拥抱</b> = ôm chặt; <b>热情（地）拥抱</b> = ôm thắm thiết. Trong bài: <b>一家三口只能紧紧拥抱在一起</b>.'),
      hearOf('随时'),
      { t: 'say', mode: 'read', i: 20 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['雷', '随时', '闪电', '击', '拥抱'], say: [B(20), B(21)],
        tease: { scene: 'c3_homeAgain', vi: 'tám tháng trên biển đã qua. Cả nhà có về tới nhà không?' } }
    ] },
    /* ---------- Ôn tập 4 (sau tập 9): 9 từ của tập 8–9 + từ yếu; ext = 漏 + bổ ngữ ---------- */
    { id: '3-m4', mix: 1, after: ['3-8', '3-9'], extra: 2, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 8–9, thêm từ cũ', thumb: 'cup', words: [], screens: [],
      ext: [
        cl('漏', 'c3_drain', '杯子漏了，水都漏___了。', 'Cái cốc bị thủng, nước chảy hết rồi.', '杯子漏了，水都漏光了。', '光',
          [['开', '开 đi với 撞: 撞开 (đâm bật ra); nước rò hết là 漏光.'], ['倒', '倒 đi với 撞: 撞倒 (đâm ngã); 漏倒 không nói được.']],
          '<b>漏 + 光 / 掉 / 出来</b>: 漏光 (rò hết), 漏掉 (sót mất), 漏出来 (rỉ ra). <b>撞 + 倒 / 伤 / 断 / 开</b>.', 'Thẻ mở rộng · Chọn bổ ngữ đúng:')
      ] },
    /* ---------- Tập 10 · câu 21–22 · tên bài: 人生 ---------- */
    { id: '3-10', title: 'Về tới nhà', sub: '4 từ mới (1 từ chỉ cần nhận mặt chữ)', thumb: 'c3_homeAgain', words: ['海里', '人生', '台阶', '未来'], screens: [
      { t: 'story', scene: 'c3_homeAgain', lines: [B(22)] },
      { t: 'word', id: '海里', scene: 'c3_nauticalMile' },
      cl('海里', 'c3_nauticalMile', '我们的船已经航行了一千多___。', 'Thuyền của chúng tôi đã đi hơn một nghìn hải lý.', '我们的船已经航行了一千多海里。', '海里',
        [['艘', '艘 là lượng từ cho thuyền (一艘船), không đo quãng đường.'], ['顿', '顿 là lượng từ cho bữa ăn.']],
        '<b>số + 海里</b> = bao nhiêu hải lý: <b>4000多海里</b> (trong bài). Bẫy: <b>在海里</b> (sau 在) lại là “trong biển”: 在海里游泳.'),
      { t: 'tf', scene: 'c3_homeAgain', w: ['海里'], zh: '翟峰一家在海上航行了八年。', vi: 'Nhà anh Phong lênh đênh trên biển tám năm.', ok: false,
        why: 'Trong bài: <b>在经历了八个月、航行了4000多海里之后</b> = sau <b>tám tháng</b> (八个月), không phải tám năm.' },
      { t: 'story', scene: 'c3_stairs', lines: [B(23)] },
      { t: 'word', id: '人生', scene: 'c3_lifePath' },
      { t: 'word', id: '台阶', scene: 'c3_steps' },
      cl('台阶', 'c3_steps', '奶奶慢慢地走上___。', 'Bà nội chầm chậm bước lên bậc thềm.', '奶奶慢慢地走上台阶。', '台阶',
        [['海鲜', '海鲜 là hải sản, không bước lên được.'], ['闪电', '闪电 là tia chớp.']],
        '<b>走上台阶</b> = bước lên bậc thềm. Trong bài: đi biển là <b>人生道路上一段长长的台阶</b> = một đoạn bậc thang dài trên đường đời: mỗi bậc lại đưa anh lên cao thêm.'),
      { t: 'word', id: '未来', scene: 'c3_future' },
      cl('未来', 'c3_future', '我们都希望有一个美好的___。', 'Ai cũng mong có một tương lai tốt đẹp.', '我们都希望有一个美好的未来。', '未来',
        [['台阶', '台阶 là bậc thềm; điều người ta “mong có” là tương lai.'], ['顿', '顿 là lượng từ cho bữa ăn, không đứng sau 美好的.']],
        '<b>美好的未来</b> = tương lai tốt đẹp. Trong bài: <b>通向他想要的未来</b> = dẫn tới tương lai anh mong muốn.'),
      hearOf('人生'),
      { t: 'say', mode: 'read', i: 22 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['海里', '人生', '台阶', '未来'], say: [B(22), B(23)],
        tease: { scene: 'c3_coupleTalk', vi: 'về tới nhà rồi, anh Phong và vợ có thôi đi biển không?' } }
    ] },
    /* ---------- Tập 11 · câu 23–26 (câu 23–24 là một lời nói trong ngoặc kép) · đoạn kết ---------- */
    { id: '3-11', title: 'Đời người có lựa chọn', sub: '2 từ mới, đoạn kết', thumb: 'c3_choice', words: ['太太', '时代'], screens: [
      { t: 'story', scene: 'c3_coupleTalk', lines: [B(24)] },
      { t: 'word', id: '太太', scene: 'c3_wife' },
      cl('太太', 'c3_wife', '这是我___，她也是老师。', 'Đây là vợ tôi, cô ấy cũng là giáo viên.', '这是我太太，她也是老师。', '太太',
        [['工人', '工人 = công nhân, là nghề, không phải người thân để giới thiệu “đây là … của tôi”.'], ['海鲜', '海鲜 = hải sản; 她也是老师 cho thấy đang nói về một người.']],
        '<b>我太太</b> = vợ tôi (lịch sự). Ôn Bài 1: <b>妻子</b> (văn viết), <b>老婆</b> (khẩu ngữ). Trong bài, anh Phong nói: <b>我和太太</b>.'),
      { t: 'word', id: '时代', scene: 'c3_era' },
      cl('时代', 'c3_era', '___变了，人们的生活也变了。', 'Thời đại đã khác, cuộc sống của mọi người cũng khác.', '时代变了，人们的生活也变了。', '时代',
        [['台阶', '台阶 là bậc thềm.'], ['太太', '太太 là vợ; vợ thay đổi không làm cuộc sống của “mọi người” thay đổi.']],
        '<b>这个时代</b> = thời đại này; <b>时代变了</b> = thời thế đã khác.'),
      { t: 'story', scene: 'c3_choice', lines: [B(25)] },
      { t: 'tf', scene: 'c3_choice', w: ['人生'], zh: '回家以后，翟峰觉得再也不想出海了。', vi: 'Về nhà rồi, anh Phong thấy không bao giờ muốn ra khơi nữa.', ok: false,
        why: 'Anh Phong tin <b>一切只是开始</b> (mọi thứ chỉ mới bắt đầu), và nói <b>人生有选择，一切可改变</b>. Chặng tới, cả nhà muốn đi Úc và New Zealand.' },
      { t: 'story', scene: 'c3_nextStop', lines: [B(26)] },
      { t: 'story', scene: 'c3_northWind', lines: [B(27)] },
      { t: 'type', w: ['人生'], zh: '人生有选择', vi: 'đời người có lựa chọn', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      { t: 'tf', scene: 'c3_northWind', w: [], zh: '他们想等北风来了以后，再次出发。', vi: 'Họ muốn đợi gió bấc tới rồi lại lên đường.', ok: true,
        why: 'Trong bài: <b>等待今年11月的北风，北风南下之时，他们将再次出发</b>.' },
      { t: 'say', mode: 'read', i: 25 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['太太', '时代'], say: [B(24), B(25), B(26), B(27)], recall: 'c3key',
        tease: { done: 1, scene: 'c3_sailHope', vi: 'Bạn đã học xong cả bài. Anh Phong đã chọn: bỏ cuộc sống yên ổn để ra biển, và cả nhà tìm lại được những buổi tối bên nhau. Từ nào còn lung lay thì vào “Ôn tập tổng hợp” nhé.' } }
    ] },
    /* ---------- Ôn tập 5 (sau tập 11): 6 từ của tập 10–11 + từ yếu cả bài; ext = bẫy 海里 ---------- */
    { id: '3-m5', mix: 1, after: ['3-10', '3-11'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 10–11 và cả bài', thumb: 'cup', words: [], screens: [],
      ext: [
        { t: 'tf', scene: 'c3_nauticalMile', w: ['海里'], zh: '他们一共航行了四千多海里。', vi: 'Tổng cộng họ đã đi hơn bốn nghìn hải lý.', ok: true,
          why: 'Thẻ mở rộng · bẫy 海里: đứng sau con số (<b>四千多海里</b>) là <b>hải lý</b> (khoảng 1,85 km), không phải “trong biển”. Còn <b>在海里游泳</b> mới là bơi trong biển.' }
      ] }

  ];
  /* screens written as {ref: ['HEAR', word]} or {ref: ['QB', word, index]} are copied from CH3.LEARN / CH3.QB.
     Every file that brings one of those (learn.js, bank.js, story.js) calls this at its end, so the load order does not matter. */
  CH3.resolveRefs = function () {
    (CH3.SESSIONS || []).forEach(function (s) {
      s.screens = s.screens.map(function (sc) {
        if (!sc.ref) return sc;
        if (sc.ref[0] === 'HEAR' && CH3.LEARN && CH3.LEARN[sc.ref[1]]) { var x = CH3.LEARN[sc.ref[1]].hear; return { t: 'hear', w: [sc.ref[1]], s: x.s, opts: x.opts.slice(), why: x.why, whyNot: x.whyNot.slice() }; }
        if (sc.ref[0] === 'QB' && CH3.QB && CH3.QB[sc.ref[1]]) return JSON.parse(JSON.stringify(CH3.QB[sc.ref[1]][sc.ref[2]]));
        return sc;
      });
    });
  };
  CH3.resolveRefs();
})();

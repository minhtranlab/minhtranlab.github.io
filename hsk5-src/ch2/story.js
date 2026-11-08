/* ===== Bài 2 "留串钥匙给父母": the book's sentences (BOOK), the study path (PATH) and the sessions (SESSIONS) ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  /* the printed sentences, in order. p = paragraph. Two printed sentences are split for the screen:
     the father's words (9|10) at the comma after "…钥匙给我们，", and the long sentence (16|17) at "：". */
  var BOOK = CH2.BOOK = [
    /* 0  tập 1 */ { p: 1, zh: '父母一辈子住在农村老家，对老屋的感情，就像没断奶的孩子对母亲一样。', vi: 'Ba mẹ tôi cả đời sống ở quê nhà dưới nông thôn. Ba mẹ gắn bó với căn nhà cũ như đứa trẻ chưa dứt sữa gắn bó với mẹ.' },
    /* 1  tập 2 */ { p: 1, zh: '因此长年以来，父母很少离开老屋，尽管姥姥、舅舅和姑姑都在城里，父母也坚决不在城里住。', vi: 'Vì vậy bao năm nay ba mẹ hiếm khi rời căn nhà cũ. Dù bà ngoại, cậu và cô tôi đều ở thành phố, ba mẹ vẫn nhất quyết không lên thành phố ở.' },
    /* 2  tập 3 */ { p: 2, zh: '去年，在我和妻子的努力下，我们终于用打工挣的钱，在县里买了一套新房。', vi: 'Năm ngoái, nhờ hai vợ chồng tôi chịu khó, cuối cùng chúng tôi cũng dùng tiền đi làm thuê kiếm được để mua một căn nhà mới trên huyện.' },
    /* 3  tập 4 */ { p: 2, zh: '新房装修完，父母第一次走进新房时，高兴得不得了。', vi: 'Nhà mới sửa sang xong, lần đầu tiên bước vào, ba mẹ mừng vô cùng.' },
    /* 4  tập 4 */ { p: 2, zh: '妻子提出留一串钥匙给父母，可他们拒绝了。', vi: 'Vợ tôi đề nghị để lại cho ba mẹ một chùm chìa khoá, nhưng ba mẹ từ chối.' },
    /* 5  tập 5 */ { p: 2, zh: '那天，父亲喝醉了，等他醒时，天色已晚。', vi: 'Hôm đó ba tôi uống say, đến lúc ông tỉnh dậy thì trời đã tối.' },
    /* 6  tập 5 */ { p: 2, zh: '我和妻子强烈留父母在新房住一夜，第二天再回，但他们仍坚持坐上了最后一趟回老家的车。', vi: 'Vợ chồng tôi hết lời giữ ba mẹ ở lại nhà mới một đêm, hôm sau hãy về, nhưng ba mẹ vẫn nhất định lên chuyến xe cuối cùng về quê.' },
    /* 7  tập 6 */ { p: 3, zh: '一段时间后，我和妻子又准备去外地打工，新房只能上锁空着。', vi: 'Một thời gian sau, vợ chồng tôi lại chuẩn bị đi làm thuê ở nơi khác, căn nhà mới đành khoá cửa để trống.' },
    /* 8  tập 6 */ { p: 3, zh: '临走那天，父亲从老家赶来送我们。', vi: 'Hôm sắp đi, ba tôi từ quê vội lên tiễn chúng tôi.' },
    /* 9  tập 7 */ { p: 3, zh: '父亲悄悄把我拉到一边说：“你妈说了，你还是留一串新房的钥匙给我们，', vi: 'Ba lặng lẽ kéo tôi ra một góc, nói: “Mẹ con bảo, con cứ để lại cho ba mẹ một chùm chìa khoá nhà mới,' },
    /* 10 tập 7 */ { p: 3, zh: '要是我和你妈什么时候想来了，就来住上几天，顺便给你们晒晒被子，打扫打扫卫生。”', vi: 'lúc nào ba với mẹ con muốn lên thì lên ở vài hôm, tiện thể phơi chăn cho tụi con, quét dọn nhà cửa.”' },
    /* 11 tập 7 */ { p: 3, zh: '父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。', vi: 'Lúc nói câu đó, ba nói nhỏ nhẹ, mặt còn đỏ lên, như một đứa trẻ đang ngượng.' },
    /* 12 tập 8 */ { p: 4, zh: '转眼又是半年，我们回家时是一个深冬的夜里。', vi: 'Chớp mắt đã nửa năm, chúng tôi về nhà vào một đêm giữa mùa đông.' },
    /* 13 tập 8 */ { p: 4, zh: '下了长途车，儿子被冻得大哭。', vi: 'Xuống xe đường dài, con trai tôi bị rét đến khóc ré lên.' },
    /* 14 tập 8 */ { p: 4, zh: '我和妻子想象着打开家门满是灰尘、冷冷清清的景象，觉得心里发寒。', vi: 'Vợ chồng tôi tưởng tượng cảnh mở cửa ra là bụi bặm phủ đầy, lạnh lẽo vắng tanh, mà thấy lòng lạnh buốt.' },
    /* 15 tập 9 */ { p: 4, zh: '来到楼下，抬头一看，却发现自家亮着灯光。', vi: 'Đến dưới toà nhà, ngẩng đầu nhìn lên, lại thấy nhà mình đang sáng đèn.' },
    /* 16 tập 9 */ { p: 4, zh: '上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来：', vi: 'Lên lầu, người ra mở cửa lại chính là ba mẹ đang mỉm cười, hơi ấm lập tức phả vào mặt:' },
    /* 17 tập 10 */ { p: 4, zh: '室内打扫得干干净净，暖气开着，水已温热，卧室床上的被子已铺好，厨房里飘来阵阵饭菜香……', vi: 'trong nhà quét dọn sạch tinh tươm, máy sưởi đang bật, nước đã ấm, chăn trên giường phòng ngủ đã trải sẵn, từ bếp thoảng ra từng đợt mùi cơm canh thơm…' },
    /* 18 tập 11 */ { p: 5, zh: '父亲说：“你妈昨天接到电话，知道你们今晚回来，今天来新房忙了一天了。”', vi: 'Ba nói: “Hôm qua mẹ con nhận điện thoại, biết tối nay tụi con về, nên hôm nay lên nhà mới lo dọn dẹp cả ngày rồi.”' },
    /* 19 tập 11 */ { p: 5, zh: '原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！', vi: 'Thì ra ba mẹ muốn tôi để lại chùm chìa khoá chỉ là để khi chúng tôi về, có thể cảm nhận ngay hơi ấm của gia đình!' },
    /* 20 tập 11 */ { p: 5, zh: '我鼻子一酸，流下了热泪……', vi: 'Sống mũi tôi cay cay, nước mắt nóng hổi trào ra…' }
  ];
  var B = function (i) { return { who: 'n', v: 'm', zh: BOOK[i].zh, vi: BOOK[i].vi }; };
  var PK = 'Nghe rồi chọn bức tranh đúng:';
  /* cloze in a study unit (no "đúng" reply on the right option: the green box is enough) */
  var cl = function (w, scene, say, vi, full, ok, wrongs, teach, prompt) {
    return { t: 'mc', w: [w], scene: scene, say: [say, vi], full: full, prompt: prompt || 'Chọn từ điền vào chỗ trống:',
      opts: [{ t: ok, ok: 1 }].concat(wrongs.map(function (x) { return { t: x[0], note: x[1] }; })), teach: teach };
  };
  /* the listening item of a word (CH2.LEARN[w].hear) as a screen; filled in by CH2.resolveRefs() (learn.js may load later) */
  var hearOf = function (w) { return { ref: ['HEAR', w] }; };

  /* ---- the study path of Bài 2: 20 stages in order (Chapter2_units.md). A stage without a SESSIONS entry is "Sắp ra mắt". ---- */
  CH2.PATH = [
    { id: '2-1', kind: 'learn', title: 'Cả đời ở quê' },
    { id: '2-2', kind: 'learn', title: 'Ba mẹ không chịu lên phố' },
    { id: '2-m1', kind: 'mix', title: 'Ôn tập', units: ['2-1', '2-2'] },
    { id: '2-3', kind: 'learn', title: 'Căn nhà mới trên huyện' },
    { id: '2-4', kind: 'learn', title: 'Chùm chìa khoá bị từ chối' },
    { id: '2-5', kind: 'learn', title: 'Say rồi vẫn đòi về' },
    { id: '2-m2', kind: 'mix', title: 'Ôn tập', units: ['2-3', '2-4', '2-5'] },
    { id: '2-g1', kind: 'comic', title: 'Ghép truyện: Nhà cũ, nhà mới', ids: [0, 1, 2, 3, 4, 5, 6] },
    { id: '2-6', kind: 'learn', title: 'Khoá cửa đi làm xa' },
    { id: '2-7', kind: 'learn', title: 'Ba lặng lẽ xin chìa khoá' },
    { id: '2-m3', kind: 'mix', title: 'Ôn tập', units: ['2-6', '2-7'] },
    { id: '2-g2', kind: 'comic', title: 'Ghép truyện: Trước ngày đi xa', ids: [7, 8, 9, 10, 11] },
    { id: '2-8', kind: 'learn', title: 'Đêm đông trở về' },
    { id: '2-9', kind: 'learn', title: 'Nhà mình đang sáng đèn' },
    { id: '2-m4', kind: 'mix', title: 'Ôn tập', units: ['2-8', '2-9'] },
    { id: '2-10', kind: 'learn', title: 'Căn nhà ấm sẵn' },
    { id: '2-11', kind: 'learn', title: 'Vì sao ba mẹ cần chìa khoá' },
    { id: '2-m5', kind: 'mix', title: 'Ôn tập', units: ['2-10', '2-11'] },
    { id: '2-g3', kind: 'comic', title: 'Ghép truyện: Ngày trở về', ids: [12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { id: '2-t', kind: 'test', title: 'Kiểm tra cuối bài 2' }
  ];

  CH2.SESSIONS = [
    /* ---------- Tập 1 · câu 1 ---------- */
    { id: '2-1', title: 'Cả đời ở quê', sub: '4 từ mới', thumb: 'c2_village', words: ['一辈子', '农村', '屋', '断'], screens: [
      { t: 'predict', scene: 'c2_keys', key: 'c2key', q: 'Bài này tên là “Để chìa khoá cho ba mẹ”. Theo bạn, chìa khoá của ai, để cho ai?', opts: ['Chìa khoá nhà mới của con, để cho ba mẹ giữ', 'Chìa khoá nhà cũ của ba mẹ, để cho con giữ', 'Chìa khoá nhà con, để cho hàng xóm giữ'] },
      { t: 'story', scene: 'c2_village', lines: [B(0)] },
      { t: 'word', id: '一辈子', scene: 'c2_lifetime' },
      { t: 'word', id: '农村', scene: 'c2_farmland' },
      { t: 'pick', w: ['一辈子', '农村'], zh: '我爷爷一辈子都在农村种地。', vi: 'Ông nội mình cả đời làm ruộng ở nông thôn.', prompt: PK, opts: [
        { sc: 'c2_farmOld', ok: 1 },
        { sc: 'c2_cityOld', why: '在农村种地 = làm ruộng ở nông thôn. Ông này đang đi giữa phố, nhà cao tầng xung quanh.' },
        { sc: 'c2_schoolKid', why: '一辈子 = cả đời: người trong câu là ông (爷爷), làm ruộng tới già. Đây là một cậu bé đi học.' }],
        teach: '<b>一辈子 + 都 + động từ</b> = cả đời đều…: 一辈子都在农村种地. <b>种地</b> = làm ruộng. Trong bài: 一辈子住在农村老家.' },
      { t: 'word', id: '屋', scene: 'c2_oldHouse' },
      cl('屋', 'c2_coldWind', '外面太冷了，我们进___里去吧。', 'Ngoài trời lạnh quá, mình vào trong nhà đi.', '外面太冷了，我们进屋里去吧。', '屋',
        [['农村', '农村 là cả vùng nông thôn. Muốn tránh lạnh thì vào trong nhà: 屋里.'], ['一辈子', '一辈子 là “cả đời”, chỉ thời gian, không chỉ nơi chốn.']],
        '<b>屋里</b> = trong nhà, trong phòng. <b>进屋</b> = vào nhà. Trong bài: <b>老屋</b> = căn nhà cũ.'),
      { t: 'word', id: '断', scene: 'c2_cut' },
      cl('断', 'c2_babyEat', '孩子一岁多就___奶了，现在每天吃饭。', 'Bé hơn một tuổi đã cai sữa, giờ ngày nào cũng ăn cơm.', '孩子一岁多就断奶了，现在每天吃饭。', '断',
        [['喝', '喝奶 = uống sữa, bé nào cũng uống từ lúc mới sinh. 现在每天吃饭 cho thấy bé đã thôi bú: 断奶.'], ['离', '离 là cách, rời (离开); không đi với 奶.']],
        '<b>断奶</b> = cai sữa. Trong bài: <b>没断奶的孩子</b> = đứa trẻ chưa dứt sữa, còn bám mẹ. Ba mẹ gắn với căn nhà cũ y như vậy.'),
      { t: 'order', w: ['断'], zh: '毕业以后，我们就断了联系。', vi: 'Tốt nghiệp xong là tụi mình mất liên lạc.', chunks: ['毕业以后', '我们', '就断了', '联系'] },
      hearOf('一辈子'),
      { t: 'tf', scene: 'c2_parents', w: ['一辈子', '农村'], zh: '父母一辈子都住在城市里。', vi: 'Ba mẹ cả đời sống ở thành phố.', ok: false,
        why: 'Câu trong bài: <b>父母一辈子住在农村老家</b>. Ba mẹ sống cả đời ở quê, dưới nông thôn, không phải thành phố (城市).' },
      { t: 'say', mode: 'read', i: 0 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['一辈子', '农村', '屋', '断'], say: [B(0)],
        tease: { scene: 'c2_twoPlaces', vi: 'bà ngoại, cậu và cô đều đã lên thành phố. Ba mẹ có chịu lên ở cùng không?' } }
    ] },
    /* ---------- Tập 2 · câu 2 · ngữ pháp 以来 ---------- */
    { id: '2-2', title: 'Ba mẹ không chịu lên phố', sub: '5 từ mới và bài học về 以来', thumb: 'c2_twoPlaces', words: ['以来', '姥姥', '舅舅', '姑姑', '坚决'], screens: [
      { t: 'story', scene: 'c2_twoPlaces', lines: [B(1)] },
      { t: 'word', id: '以来', scene: 'c2_since' },
      cl('以来', 'c2_cityOld', '搬到城里___，他很少回农村。', 'Từ khi chuyển lên thành phố đến nay, ông ấy hiếm khi về nông thôn.', '搬到城里以来，他很少回农村。', '以来',
        [['以前', '以前 = trước khi. Trước khi lên thành phố thì ông còn ở nông thôn, không thể “hiếm khi về”. Câu nói chuyện kéo dài tới bây giờ: 以来.'], ['一辈子', '一辈子 = cả đời, không đứng sau một mốc như 搬到城里.']],
        '<b>mốc thời gian + 以来</b> = từ … đến nay: 搬到城里以来, 上大学以来, <b>长年以来</b> (bao năm nay, như trong bài). 以来 kéo dài tới <b>bây giờ</b>, nên vế sau hay có 很少, 一直, 都. Khác 以前 (trước) và 以后 (sau).'),
      { t: 'spot', w: ['以来'], chunks: ['一直', '以前，', '她都很爱护', '这辆车。'], bad: 1, fix: '以来，', full: '一直以来，她都很爱护这辆车。', vi: 'Từ trước tới nay, cô ấy luôn rất giữ gìn chiếc xe này.',
        teach: '<b>一直以来</b> = từ trước tới nay, một cụm cố định. 一直 không đi với 以前. Câu này còn ôn lại <b>爱护</b> (giữ gìn) của Bài 1.' },
      { t: 'word', id: '姥姥', scene: 'c2_treeLao' },
      hearOf('姥姥'),
      { t: 'word', id: '舅舅', scene: 'c2_treeJiu' },
      { t: 'word', id: '姑姑', scene: 'c2_treeGu' },
      { t: 'pick', w: ['舅舅'], zh: '周末我去舅舅家玩。', vi: 'Cuối tuần mình sang nhà cậu chơi.', prompt: 'Nghe rồi chọn đúng người được nhắc tới (vòng sáng):', opts: [
        { sc: 'c2_treeJiu', ok: 1 },
        { sc: 'c2_treeGu', why: 'Đây là 姑姑 (cô): chị/em gái của ba. Câu nghe nói 舅舅: anh/em trai của mẹ.' },
        { sc: 'c2_treeLao', why: 'Đây là 姥姥 (bà ngoại). Câu nghe nói 舅舅 (cậu).' }],
        teach: '<b>Bên mẹ</b>: 姥姥 (bà ngoại), 舅舅 (cậu). <b>Bên ba</b>: 奶奶 (bà nội), 姑姑 (cô), 叔叔 (chú). <b>去 + người + 家</b> = sang nhà ai.' },
      { t: 'word', id: '坚决', scene: 'c2_firm' },
      cl('坚决', 'c2_parents', '尽管姥姥、舅舅和姑姑都在城里，父母也___不在城里住。', 'Dù bà ngoại, cậu và cô đều ở thành phố, ba mẹ vẫn nhất quyết không ở thành phố.', '尽管姥姥、舅舅和姑姑都在城里，父母也坚决不在城里住。', '坚决',
        [['很少', '很少 = hiếm khi. 很少不在城里住 thành “hiếm khi không ở thành phố”, ngược ý câu.'], ['以来', '以来 đứng sau một mốc thời gian, không đứng trước động từ.']],
        '<b>坚决不 + động từ</b> = nhất quyết không… <b>尽管…也…</b> = dù… vẫn…. Họ hàng đều ở thành phố, nhưng ba mẹ vẫn không chịu lên.', 'Chọn từ điền vào chỗ trống (câu trong bài):'),
      { t: 'type', w: ['坚决'], silent: 1, zh: '坚决不同意', vi: 'nhất quyết không đồng ý', py: 'jiān jué bù tóng yì', prompt: 'Gõ bằng bàn phím pinyin: “nhất quyết không đồng ý”' },
      { t: 'say', mode: 'read', i: 1 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['以来', '姥姥', '舅舅', '姑姑', '坚决'], say: [B(1)],
        tease: { scene: 'c2_newHouse', vi: 'hai vợ chồng đi làm thuê, dành dụm mua được một căn nhà mới. Ba mẹ lên xem nhà mới thì sao?' } }
    ] },
    /* ---------- Ôn tập 1 (sau tập 2). Built at play time like Bài 1 (buildMix): the 9 words of 2-1 + 2-2 from CH2.QB,
       topped up with ch1 = 2 weak words of Bài 1 (~20%), kept to about max = 6 questions.
       `screens` is a ready-made fallback with the same mix, used only if the engine plays it as it is. ---------- */
    { id: '2-m1', mix: 1, after: ['2-1', '2-2'], ch1: 2, max: 6, title: 'Ôn tập', sub: 'Các từ của tập 1 và 2, thêm 2 từ cũ của Bài 1', thumb: 'cup', words: [], screens: [
      { t: 'match', w: ['一辈子', '农村', '断', '姥姥', '坚决'], prompt: 'Chạm một từ, rồi chạm nghĩa của nó:' },
      { ref: ['QB', '舅舅', 2] },
      { ref: ['QB', '以来', 0] },
      cl('恩爱', 'c2_parents', '爸爸妈妈结婚三十年了，还是很___。', 'Ba mẹ cưới nhau ba mươi năm rồi mà vẫn rất thắm thiết.', '爸爸妈妈结婚三十年了，还是很恩爱。', '恩爱',
        [['坚决', '坚决 là kiên quyết, nói về thái độ, không nói tình cảm vợ chồng.'], ['抱怨', '抱怨 là phàn nàn, trái với ý “vẫn rất…” khen hai người.']],
        'Ôn Bài 1: <b>恩爱</b> chỉ dùng cho vợ chồng, cặp đôi: …年了，还是很恩爱.'),
      { ref: ['QB', '屋', 2] },
      { t: 'hear', w: ['抱怨'], s: '姑姑从来不抱怨农村的生活。', opts: ['Cô chưa bao giờ phàn nàn về cuộc sống ở nông thôn.', 'Cô lúc nào cũng phàn nàn về cuộc sống ở nông thôn.', 'Bà ngoại chưa bao giờ phàn nàn về cuộc sống ở nông thôn.'],
        why: 'Ôn Bài 1: <b>抱怨</b> = phàn nàn. <b>从来不</b> = chưa bao giờ. <b>姑姑</b> = cô (bên ba).',
        whyNot: ['', '从来不 = chưa bao giờ, không phải “lúc nào cũng”.', 'Người nói là 姑姑 (cô), không phải 姥姥 (bà ngoại).'] },
      { t: 'wrap' }
    ] },
    /* ---------- Tập 3 · câu 3 ---------- */
    { id: '2-3', title: 'Căn nhà mới trên huyện', sub: '4 từ mới', thumb: 'c2_buyHouse', words: ['打工', '挣', '县', '套'], screens: [
      { t: 'story', scene: 'c2_buyHouse', lines: [B(2)] },
      { t: 'word', id: '打工', scene: 'c2_work' },
      { t: 'word', id: '挣', scene: 'c2_earn' },
      { t: 'order', w: ['打工'], zh: '他在城里打了三年工。', vi: 'Anh ấy làm thuê ở thành phố ba năm.', chunks: ['他', '在城里', '打了三年', '工'],
        teach: '<b>打工</b> tách được: 打 + (了 + bao lâu) + 工. Cũng vậy: 打过工 (từng làm thuê).' },
      hearOf('挣'),
      { t: 'word', id: '县', scene: 'c2_county' },
      cl('县', 'c2_county', '我老家在农村，买东西要去___里。', 'Quê mình ở nông thôn, mua đồ phải lên huyện.', '我老家在农村，买东西要去县里。', '县',
        [['屋', '屋里 là trong nhà; muốn mua đồ thì phải đi ra chỗ khác.'], ['一辈子', '一辈子 là “cả đời”, chỉ thời gian, không chỉ nơi chốn.']],
        '<b>县里</b> = trên huyện. Làng (农村) → huyện (县) → thành phố (城市).'),
      { t: 'word', id: '套', scene: 'c2_sets' },
      { t: 'pick', w: ['套'], zh: '他们买了一套房子，有三个房间。', vi: 'Họ mua một căn nhà có ba phòng.', prompt: PK, opts: [
        { sc: 'c2_flat3', ok: 1 },
        { sc: 'c2_room1', why: 'Đây chỉ là một gian phòng (一间屋子). 一套房子 là cả căn có nhiều phòng: câu nói 三个房间.' },
        { sc: 'c2_furniture', why: 'Đây là một bộ đồ gỗ (一套家具). Câu nói 房子 (nhà).' }],
        teach: '<b>一套</b> + thứ gồm nhiều phần: 一套房子, 一套家具, 一套西服. <b>一间</b> chỉ một gian.' },
      cl('套', 'c2_buyHouse', '我们终于用打工挣的钱，在县里买了一___新房。', 'Cuối cùng chúng tôi dùng tiền làm thuê kiếm được, mua một căn nhà mới trên huyện.', '我们终于用打工挣的钱，在县里买了一套新房。', '套',
        [['间', '一间 là một gian, một phòng; mua cả căn nhà thì dùng 一套.'], ['辆', '辆 là lượng từ của xe.']],
        '<b>一套新房</b> = một căn nhà mới. <b>用打工挣的钱</b> = dùng tiền làm thuê kiếm được.', 'Chọn từ điền vào chỗ trống (câu trong bài):'),
      { t: 'tf', scene: 'c2_buyHouse', w: ['挣', '打工'], zh: '我们用父母的钱买了新房。', vi: 'Chúng tôi dùng tiền của ba mẹ mua nhà mới.', ok: false,
        why: 'Trong bài: <b>用打工挣的钱</b> = dùng tiền tự đi làm thuê kiếm được, không phải tiền của ba mẹ.' },
      { t: 'say', mode: 'read', i: 2 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['打工', '挣', '县', '套'], say: [B(2)],
        tease: { scene: 'c2_newHome', vi: 'nhà mới sửa xong, ba mẹ lên xem lần đầu. Vợ mình muốn để lại cho ba mẹ một thứ…' } }
    ] },
    /* ---------- Tập 4 · câu 4–5 ---------- */
    { id: '2-4', title: 'Chùm chìa khoá bị từ chối', sub: '3 từ mới, có một story word', thumb: 'c2_newHome', words: ['装修', '不得了', '串'], screens: [
      { t: 'story', scene: 'c2_newHome', lines: [B(3)] },
      { t: 'word', id: '装修', scene: 'c2_renovate' },
      { t: 'word', id: '不得了', scene: 'c2_hot' },
      { t: 'mc', w: ['不得了'], scene: 'c2_goodNews', say: ['听说儿子考上了大学，妈妈___。', 'Nghe tin con trai đậu đại học, mẹ mừng vô cùng.'], full: '听说儿子考上了大学，妈妈高兴得不得了。', prompt: 'Chọn cách nói đúng điền vào chỗ trống:',
        opts: [{ t: '高兴得不得了', ok: 1 }, { t: '不得了高兴', note: '不得了 đứng SAU, nối bằng 得: 高兴得不得了.' }, { t: '高兴不得了', note: 'Thiếu 得. Phải nói 高兴<b>得</b>不得了.' }],
        teach: '<b>tính từ + 得 + 不得了</b> = … vô cùng: 高兴得不得了, 热得不得了, 累得不得了, 急得不得了.' },
      { t: 'pick', w: ['装修'], zh: '他们家正在装修，现在还不能住。', vi: 'Nhà họ đang sửa sang, bây giờ chưa ở được.', prompt: PK, opts: [
        { sc: 'c2_renovate', ok: 1 },
        { sc: 'c2_moveBoxes', why: 'Đây là dọn nhà (搬家): khuân thùng đồ vào. 装修 là sơn tường, lát sàn…' },
        { sc: 'c2_fixCar', why: 'Đây là sửa xe (修车). 装修 chỉ dùng cho nhà, phòng, cửa hàng.' }],
        teach: '<b>装修</b> = sửa sang bên trong nhà. <b>正在装修</b> = đang sửa.' },
      { t: 'story', scene: 'c2_newHome', lines: [B(4)] },
      { t: 'word', id: '串', scene: 'c2_keyBunch' },
      hearOf('串'),
      cl('装修', 'c2_renovate', '房子___好了，我们下个月搬进去。', 'Nhà sửa sang xong rồi, tháng sau tụi mình dọn vào.', '房子装修好了，我们下个月搬进去。', '装修',
        [['打工', '打工 là đi làm thuê, không đi với 房子…好了.'], ['串', '串 là lượng từ (一串钥匙).']],
        '<b>装修好 / 装修完</b> = sửa xong. Trong bài: <b>新房装修完</b>.'),
      { t: 'tf', scene: 'c2_newHome', w: ['串'], zh: '父母很高兴地拿了新房的钥匙。', vi: 'Ba mẹ vui vẻ cầm chìa khoá nhà mới.', ok: false,
        why: 'Trong bài: <b>可他们拒绝了</b> = nhưng ba mẹ từ chối. Ba mẹ mừng vì nhà mới, nhưng không nhận chùm chìa khoá.' },
      { t: 'order', w: ['装修'], zh: '这家饭馆装修得很漂亮。', vi: 'Quán ăn này trang trí rất đẹp.', chunks: ['这家饭馆', '装修得', '很', '漂亮'] },
      { t: 'say', mode: 'echo', i: 4 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['装修', '不得了', '串'], say: [B(3), B(4)],
        tease: { scene: 'c2_drunkNight', vi: 'tối hôm đó ba uống say. Vợ chồng mình giữ ba mẹ ở lại, ba mẹ có chịu không?' } }
    ] },
    /* ---------- Tập 5 · câu 6–7 ---------- */
    { id: '2-5', title: 'Say rồi vẫn đòi về', sub: '3 từ mới', thumb: 'c2_lastBus', words: ['醉', '强烈', '夜'], screens: [
      { t: 'story', scene: 'c2_drunkNight', lines: [B(5)] },
      { t: 'word', id: '醉', scene: 'c2_tipsy' },
      cl('醉', 'c2_tipsy', '他昨天喝___了，今天早上起来头很疼。', 'Hôm qua anh ấy uống say, sáng nay dậy đau đầu lắm.', '他昨天喝醉了，今天早上起来头很疼。', '醉',
        [['饱', '喝饱 = uống no; uống no thì không đau đầu sáng hôm sau.'], ['断', '断 là đứt, cai; 喝断 không ai nói.']],
        '<b>喝醉了</b> = uống say rồi. Trái nghĩa: <b>醒</b> (tỉnh), như 等他醒时 trong bài.'),
      hearOf('醉'),
      { t: 'story', scene: 'c2_lastBus', lines: [B(6)] },
      { t: 'word', id: '强烈', scene: 'c2_strongSun' },
      { t: 'word', id: '夜', scene: 'c2_night' },
      { t: 'pick', w: ['夜'], zh: '他夜里十二点才回家。', vi: 'Mười hai giờ đêm anh ấy mới về nhà.', prompt: PK, opts: [
        { sc: 'c2_clockNight', ok: 1 },
        { sc: 'c2_clockNoon', why: '夜里十二点 = 12 giờ đêm. Tranh này là 12 giờ trưa (中午).' },
        { sc: 'c2_leaveNight', why: '回家 = về nhà. Người trong tranh này đang kéo vali ra khỏi nhà.' }],
        teach: '<b>夜里</b> = trong đêm, đêm khuya. <b>…才…</b> = mãi tới… mới…' },
      cl('强烈', 'c2_lastBus', '我和妻子___留父母在新房住一夜，第二天再回。', 'Vợ chồng tôi hết lời giữ ba mẹ ở lại nhà mới một đêm, hôm sau hãy về.', '我和妻子强烈留父母在新房住一夜，第二天再回。', '强烈',
        [['不得了', '不得了 đứng sau 得 (高兴得不得了), không đứng trước động từ.'], ['一辈子', '一辈子 = cả đời; câu chỉ nói giữ lại một đêm.']],
        '<b>强烈 + động từ</b> = hết sức, hết lời…: 强烈留, 强烈要求. <b>住一夜</b> = ở lại một đêm.', 'Chọn từ điền vào chỗ trống (câu trong bài):'),
      cl('强烈', 'c2_strongSun', '夏天中午的阳光非常___，出门要戴帽子。', 'Nắng trưa mùa hè rất gắt, ra ngoài phải đội mũ.', '夏天中午的阳光非常强烈，出门要戴帽子。', '强烈',
        [['坚决', '坚决 nói về thái độ, ý chí của người; nắng thì 强烈.'], ['醉', '醉 là say rượu.']],
        '<b>强烈的阳光</b> = nắng gắt. 强烈 dùng cho thứ rất mạnh: ánh nắng, tình cảm, sự tương phản (强烈的对比).'),
      { t: 'tf', scene: 'c2_lastBus', w: ['夜'], zh: '那天父母在新房住了一夜。', vi: 'Hôm đó ba mẹ ở lại nhà mới một đêm.', ok: false,
        why: 'Trong bài: <b>但他们仍坚持坐上了最后一趟回老家的车</b> = nhưng ba mẹ vẫn nhất định lên chuyến xe cuối cùng về quê.' },
      { t: 'order', w: ['夜'], zh: '我们在姑姑家住了一夜。', vi: 'Tụi mình ở lại nhà cô một đêm.', chunks: ['我们', '在姑姑家', '住了', '一夜'] },
      { t: 'say', mode: 'echo', i: 5 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['醉', '强烈', '夜'], say: [B(5), B(6)],
        tease: { scene: 'c2_lockedHouse', vi: 'vợ chồng mình lại phải đi làm xa, căn nhà mới đành khoá cửa để trống…' } }
    ] },
    /* ---------- Ôn tập 2 (sau tập 5): 10 từ của tập 3–5, từ yếu của tập 1–2, 2 từ Bài 1. ext = thẻ mở rộng (挣 “giãy”), chiếu trước các câu ôn ---------- */
    { id: '2-m2', mix: 1, after: ['2-3', '2-4', '2-5'], extra: 2, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 3–5, thêm từ cũ', thumb: 'cup', words: [], screens: [],
      ext: [
        { t: 'pick', w: ['挣', '断'], zh: '小狗把绳子挣断了，跑了出去。', vi: 'Con chó giãy đứt dây, chạy mất.', prompt: 'Thẻ mở rộng · Nghe rồi chọn bức tranh đúng:', opts: [
          { sc: 'c2_dogBroke', ok: 1 },
          { sc: 'c2_dogTied', why: 'Dây vẫn còn nguyên. 挣断 = giãy mạnh làm đứt dây.' },
          { sc: 'c2_cut', why: 'Đây là cắt đứt bằng kéo. 挣断 là tự giãy cho đứt.' }],
          teach: '<b>động từ + 断</b> = làm cho đứt, gãy: <b>打断</b> (đánh gãy; ngắt lời), <b>挣断</b> (giãy đứt), 摔断 (ngã gãy). Ở đây 挣 nghĩa là <b>giãy</b>, khác 挣钱 (kiếm tiền); sách in cùng âm zhèng.' }
      ] },
    /* ---------- Tập 6 · câu 8–9 · ngữ pháp 临 (2 từ: ngắn hơn, có sắp câu + gõ pinyin) ---------- */
    { id: '2-6', title: 'Khoá cửa đi làm xa', sub: '2 từ mới và bài học về 临', thumb: 'c2_lockedHouse', words: ['锁', '临'], screens: [
      { t: 'story', scene: 'c2_lockedHouse', lines: [B(7)] },
      { t: 'word', id: '锁', scene: 'c2_lock' },
      { t: 'pick', w: ['锁'], zh: '出门的时候，她忘了锁门。', vi: 'Lúc ra khỏi nhà, cô ấy quên khoá cửa.', prompt: PK, opts: [
        { sc: 'c2_doorOpen', ok: 1 },
        { sc: 'c2_doorLocking', why: '忘了锁门 = quên khoá cửa. Trong tranh này cô ấy đang khoá.' },
        { sc: 'c2_lostKey', why: 'Tranh này là đang lo vì chìa khoá. Câu nói quên khoá cửa (锁门) rồi đi.' }],
        teach: '<b>锁门</b> = khoá cửa. <b>忘了 + việc</b> = quên làm việc gì.' },
      cl('锁', 'c2_lockedHouse', '一段时间后，我和妻子又准备去外地打工，新房只能上___空着。', 'Một thời gian sau, vợ chồng tôi lại chuẩn bị đi làm thuê ở nơi khác, căn nhà mới đành khoá cửa để trống.', '一段时间后，我和妻子又准备去外地打工，新房只能上锁空着。', '锁',
        [['套', '套 là lượng từ (一套房).'], ['串', '串 là lượng từ “chùm” (一串钥匙), không đứng sau 上.']],
        '<b>上锁</b> = khoá vào. <b>空着</b> = để trống. <b>外地</b> = nơi khác.', 'Chọn từ điền vào chỗ trống (câu trong bài):'),
      { t: 'story', scene: 'c2_seeOff', lines: [B(8)] },
      { t: 'word', id: '临', scene: 'c2_aboutToLeave' },
      cl('临', 'c2_quilt', '___睡前，她总是给姥姥打个电话。', 'Trước lúc ngủ, cô ấy luôn gọi điện cho bà ngoại.', '临睡前，她总是给姥姥打个电话。', '临',
        [['以来', '以来 đứng sau một mốc và kéo dài tới nay; “lúc sắp ngủ” là 临睡前.'], ['夜', '夜 là ban đêm, không đứng trước động từ để chỉ “lúc sắp”.']],
        '<b>临 + động từ (+ 前 / 时 / 那天)</b> = lúc sắp…: 临睡前, 临出门的时候, <b>临走那天</b> (trong bài). 临 còn là “kề sát”: 临街 (sát đường).'),
      { t: 'spot', w: ['临'], chunks: ['临走', '以来，', '父亲', '赶来送我们。'], bad: 1, fix: '那天，', full: '临走那天，父亲赶来送我们。', vi: 'Hôm sắp đi, ba vội đến tiễn chúng tôi.',
        teach: '<b>临走那天</b> = hôm sắp đi. <b>以来</b> là “từ… đến nay”, không đi với 临走.' },
      { t: 'order', w: ['临'], zh: '临出门的时候，妈妈让我带上钥匙。', vi: 'Lúc sắp ra khỏi nhà, mẹ bảo mình mang theo chìa khoá.', chunks: ['临出门的时候', '妈妈', '让我', '带上钥匙'] },
      { t: 'type', w: ['锁'], zh: '锁门', vi: 'khoá cửa', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      { t: 'say', mode: 'echo', i: 8 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['锁', '临'], say: [B(7), B(8)],
        tease: { scene: 'c2_whisper', vi: 'trước lúc lên xe, ba lặng lẽ kéo mình ra một góc. Ba muốn nói gì?' } }
    ] },
    /* ---------- Tập 7 · câu 10 (2 màn) + câu 11 · phân biệt 悄悄–偷偷 ---------- */
    { id: '2-7', title: 'Ba lặng lẽ xin chìa khoá', sub: '3 từ mới, phân biệt 悄悄 và 偷偷', thumb: 'c2_whisper', words: ['悄悄', '晒', '被子'], screens: [
      { t: 'story', scene: 'c2_whisper', lines: [B(9)] },
      { t: 'word', id: '悄悄', scene: 'c2_whisperWord' },
      { t: 'pick', w: ['悄悄'], zh: '她怕吵醒孩子，悄悄地走了出去。', vi: 'Cô ấy sợ làm bé thức giấc nên khẽ khàng đi ra.', prompt: PK, opts: [
        { sc: 'c2_tiptoe', ok: 1 },
        { sc: 'c2_sneakCookie', why: 'Tranh này là lén lấy bánh, giấu người khác: đó là 偷偷 (lén lút). 悄悄 nhấn mạnh khẽ khàng, không gây tiếng động.' },
        { sc: 'c2_stomp', why: 'Người này đi rầm rầm, nói to, làm bé thức. 悄悄 = khẽ khàng.' }],
        teach: '<b>悄悄</b> nhấn mạnh <b>tiếng nhỏ</b>, khẽ khàng. <b>偷偷</b> (tōutōu, lén lút) nhấn mạnh <b>không muốn ai biết</b>: 他谁也没告诉，偷偷去旅行了. Nhiều câu dùng được cả hai: 他悄悄 / 偷偷地走了出去.' },
      hearOf('悄悄'),
      { t: 'story', scene: 'c2_quiltSun', lines: [B(10)] },
      { t: 'word', id: '晒', scene: 'c2_dry' },
      { t: 'word', id: '被子', scene: 'c2_quilt' },
      cl('晒', 'c2_dry', '天气这么好，快把被子拿出去___吧！', 'Trời đẹp thế này, mau mang chăn ra phơi đi!', '天气这么好，快把被子拿出去晒吧！', '晒',
        [['盖', '盖被子 = đắp chăn lúc ngủ; mang chăn ra ngoài trời nắng là để phơi.'], ['锁', '锁 là khoá.']],
        '<b>晒被子</b> = phơi chăn. Trong bài: <b>晒晒被子</b> = phơi chăn một chút; <b>打扫打扫</b> = quét dọn một chút (lặp động từ cho nhẹ nhàng).'),
      { t: 'story', scene: 'c2_shyDad', lines: [B(11)] },
      { t: 'tf', scene: 'c2_shyDad', w: ['悄悄'], zh: '父亲大声地对我说了这些话。', vi: 'Ba nói to với tôi những lời này.', ok: false,
        why: 'Ba <b>悄悄</b> kéo mình ra một góc, nói <b>轻声细语</b> (nhỏ nhẹ), mặt còn đỏ lên vì ngượng. Ba không nói to.' },
      { t: 'order', w: ['晒', '被子'], zh: '今天天气好，我们晒晒被子吧。', vi: 'Hôm nay trời đẹp, mình phơi chăn đi.', chunks: ['今天天气好', '我们', '晒晒', '被子吧'] },
      { t: 'say', mode: 'read', i: 10 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['悄悄', '晒', '被子'], say: [B(9), B(10), B(11)],
        tease: { scene: 'c2_winterNight', vi: 'chớp mắt đã nửa năm. Một đêm giữa mùa đông, cả nhà trở về…' } }
    ] },
    /* ---------- Ôn tập 3 (sau tập 7): ext nhắc lại 悄悄–偷偷 ---------- */
    { id: '2-m3', mix: 1, after: ['2-6', '2-7'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 6–7, thêm từ cũ', thumb: 'cup', words: [], screens: [],
      ext: [
        { t: 'pick', w: ['悄悄'], zh: '弟弟偷偷拿了一块饼干。', vi: 'Em trai lén lấy một cái bánh quy.', prompt: 'Nhắc lại 悄悄 / 偷偷 · Nghe rồi chọn bức tranh đúng:', opts: [
          { sc: 'c2_sneakCookie', ok: 1 },
          { sc: 'c2_tiptoe', why: 'Đây là 悄悄: đi khẽ cho bé khỏi thức. Câu nghe nói 偷偷 = lén lút, giấu người khác.' },
          { sc: 'c2_stomp', why: 'Người này đi rầm rầm, chẳng giấu ai cả.' }],
          teach: '<b>偷偷</b> = lén lút, không muốn ai biết. <b>悄悄</b> = khẽ khàng, tiếng nhỏ.' }
      ] },
    /* ---------- Tập 8 · câu 12–14 ---------- */
    { id: '2-8', title: 'Đêm đông trở về', sub: '4 từ mới', thumb: 'c2_winterNight', words: ['长途', '冻', '想象', '灰尘'], screens: [
      { t: 'story', scene: 'c2_winterNight', lines: [B(12)] },
      { t: 'story', scene: 'c2_cryingKid', lines: [B(13)] },
      { t: 'word', id: '长途', scene: 'c2_coach' },
      { t: 'word', id: '冻', scene: 'c2_frozen' },
      cl('冻', 'c2_frozen', '外面太冷了，我的手都___红了。', 'Ngoài trời lạnh quá, tay mình rét đỏ cả lên.', '外面太冷了，我的手都冻红了。', '冻',
        [['晒', '晒红 = bị nắng làm đỏ; câu nói trời lạnh.'], ['醉', '醉 là say rượu.']],
        '<b>冻 + kết quả</b>: 冻红了 (rét đỏ lên). Trong bài: <b>儿子被冻得大哭</b> = con trai bị rét đến khóc ré lên.'),
      { t: 'pick', w: ['长途'], zh: '坐了十个小时的长途汽车，大家都很累。', vi: 'Ngồi xe khách đường dài mười tiếng, ai cũng mệt.', prompt: PK, opts: [
        { sc: 'c2_longBus', ok: 1 },
        { sc: 'c2_cityBus', why: 'Đây là xe buýt trong phố (公共汽车). 长途汽车 là xe khách đi đường dài.' },
        { sc: 'c2_plane', why: '汽车 là xe chạy trên đường, không phải máy bay (飞机).' }],
        teach: '<b>长途汽车 / 长途车</b> = xe khách đường dài. Trong bài: <b>下了长途车</b>.' },
      { t: 'story', scene: 'c2_dustyImagine', lines: [B(14)] },
      { t: 'word', id: '想象', scene: 'c2_imagine' },
      { t: 'word', id: '灰尘', scene: 'c2_dust' },
      hearOf('想象'),
      cl('灰尘', 'c2_dust', '很久没人住了，桌子上都是___。', 'Lâu rồi không ai ở, trên bàn toàn là bụi.', '很久没人住了，桌子上都是灰尘。', '灰尘',
        [['雪', 'Trong nhà không có tuyết; lâu không ai ở thì bàn phủ bụi.'], ['被子', 'Bàn lâu không dùng thì phủ bụi, không phải chăn.']],
        '<b>都是灰尘 / 满是灰尘</b> = toàn là bụi. Trong bài: <b>满是灰尘、冷冷清清的景象</b>.'),
      { t: 'tf', scene: 'c2_dustyImagine', w: ['想象', '灰尘'], zh: '我们一打开家门，就看到家里满是灰尘。', vi: 'Vừa mở cửa nhà, chúng tôi đã thấy trong nhà đầy bụi.', ok: false,
        why: '<b>想象着</b> = đang tưởng tượng: lúc xuống xe, hai vợ chồng mới chỉ nghĩ nhà sẽ đầy bụi, chưa mở cửa. Tập sau mới biết thật ra thế nào.' },
      { t: 'say', mode: 'echo', i: 12 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['长途', '冻', '想象', '灰尘'], say: [B(12), B(13), B(14)],
        tease: { scene: 'c2_litWindow', vi: 'đến dưới toà nhà, ngẩng đầu lên thì… nhà mình đang sáng đèn?' } }
    ] },
    /* ---------- Tập 9 · câu 15 + nửa đầu câu 16 · ngữ pháp 立刻 ---------- */
    { id: '2-9', title: 'Nhà mình đang sáng đèn', sub: '5 từ mới và bài học về 立刻', thumb: 'c2_litWindow', words: ['亮', '微笑', '温暖', '立刻', '扑'], screens: [
      { t: 'story', scene: 'c2_litWindow', lines: [B(15)] },
      { t: 'word', id: '亮', scene: 'c2_lamp' },
      { t: 'tf', scene: 'c2_litWindow', w: ['亮'], zh: '我们到楼下的时候，家里的灯是关着的。', vi: 'Lúc chúng tôi đến dưới toà nhà, đèn nhà mình đang tắt.', ok: false,
        why: '<b>自家亮着灯光</b> = nhà mình đang sáng đèn. <b>亮着</b> = đang sáng.' },
      { t: 'story', scene: 'c2_parentsDoor', lines: [B(16)] },
      { t: 'word', id: '微笑', scene: 'c2_smile' },
      { t: 'word', id: '温暖', scene: 'c2_warm' },
      cl('温暖', 'c2_warm', '朋友的一句话，让我觉得很___。', 'Một câu nói của bạn khiến mình thấy rất ấm lòng.', '朋友的一句话，让我觉得很温暖。', '温暖',
        [['热闹', '热闹 = náo nhiệt, đông vui; một câu nói làm lòng ấm lên là 温暖.'], ['强烈', '强烈 = mãnh liệt; một câu nói nhẹ nhàng làm lòng ấm lên.']],
        '<b>温暖</b> dùng cho cả thời tiết lẫn tình cảm (温暖的家, 家的温暖). <b>暖和</b> chủ yếu cho thời tiết, đồ vật.'),
      { t: 'word', id: '立刻', scene: 'c2_rightAway' },
      cl('立刻', 'c2_rightAway', '电话一响，他就___跑过去接。', 'Điện thoại vừa reo, anh ấy lập tức chạy tới nghe.', '电话一响，他就立刻跑过去接。', '立刻',
        [['以来', '以来 đứng sau một mốc thời gian (…以来), không đứng trước động từ.'], ['临', '临 + động từ = lúc sắp…; câu này nói việc xảy ra ngay sau khi điện thoại reo.']],
        '<b>一…就立刻…</b> / <b>立刻 + động từ</b> = ngay lập tức: việc sau nối ngay việc trước. Gần nghĩa 马上. Trong bài: <b>温暖的气息立刻扑面而来</b>.'),
      { t: 'order', w: ['立刻'], zh: '姥姥一看到我，就立刻笑了。', vi: 'Bà ngoại vừa thấy mình là cười ngay.', chunks: ['姥姥', '一看到我', '就立刻', '笑了'],
        teach: '<b>一…就立刻…</b> = vừa… là ngay lập tức…' },
      { t: 'word', id: '扑', scene: 'c2_pounce' },
      hearOf('扑'),
      { t: 'say', mode: 'echo', i: 15 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['亮', '微笑', '温暖', '立刻', '扑'], say: [B(15), B(16)],
        tease: { scene: 'c2_warmRoom', vi: 'bước vào nhà: ai đã quét dọn, trải chăn, nấu cơm sẵn?' } }
    ] },
    /* ---------- Ôn tập 4 (giữa đoạn D, sau tập 9) ---------- */
    { id: '2-m4', mix: 1, after: ['2-8', '2-9'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 8–9, thêm từ cũ', thumb: 'cup', words: [], screens: [] },
    /* ---------- Tập 10 · nửa sau câu 16 · bẫy cùng âm 扑 / 铺 ---------- */
    { id: '2-10', title: 'Căn nhà ấm sẵn', sub: '4 từ mới, có một story word', thumb: 'c2_warmRoom', words: ['卧室', '铺', '飘', '阵'], screens: [
      { t: 'story', scene: 'c2_warmRoom', lines: [B(17)] },
      { t: 'word', id: '卧室', scene: 'c2_roomBed' },
      { t: 'pick', w: ['卧室'], zh: '妈妈在卧室里看书。', vi: 'Mẹ đang đọc sách trong phòng ngủ.', prompt: PK, opts: [
        { sc: 'c2_roomBed', ok: 1 },
        { sc: 'c2_roomKitchen', why: 'Đây là bếp (厨房). 卧室 là phòng ngủ: có giường.' },
        { sc: 'c2_roomSofa', why: 'Đây là phòng khách (客厅): có sofa, tivi. 卧室 = phòng (室) để nằm (卧).' }],
        teach: '<b>卧室</b> = phòng ngủ. Phòng khách: 客厅. Bếp: 厨房.' },
      { t: 'word', id: '铺', scene: 'c2_makeBed' },
      cl('铺', 'c2_makeBed', '妈妈已经把床上的被子___好了。', 'Mẹ đã trải chăn trên giường xong rồi.', '妈妈已经把床上的被子铺好了。', '铺',
        [['扑', '扑 (bộ 扌 tay) = vồ tới, phả vào; cùng đọc pū nhưng trải chăn là 铺 (bộ 钅).'], ['锁', '锁 = khoá; chăn trên giường thì trải: 铺好.']],
        '<b>Bẫy cùng âm pū</b>: <b>扑</b> (扌, tay: vồ, phả vào — 扑面而来) ≠ <b>铺</b> (钅: trải — 被子已铺好).', 'Chọn chữ đúng (hai chữ cùng đọc pū):'),
      { t: 'word', id: '飘', scene: 'c2_float' },
      { t: 'word', id: '阵', scene: 'c2_gust' },
      cl('阵', 'c2_gust', '刚才下了一___大雨，现在天晴了。', 'Vừa nãy mưa một trận lớn, giờ trời tạnh rồi.', '刚才下了一阵大雨，现在天晴了。', '阵',
        [['串', '串 = chùm, xâu (一串钥匙); mưa đến rồi đi là “một trận”: 一阵.'], ['套', '套 là bộ, căn (一套房子).']],
        '<b>一阵</b> + 风 / 雨 / 歌声 / 香味. Lặp: <b>阵阵</b> = từng đợt. Trong bài: <b>飘来阵阵饭菜香</b>.'),
      hearOf('飘'),
      { t: 'tf', scene: 'c2_warmRoom', w: ['铺'], zh: '我们回到家时，屋里很冷，被子也没铺。', vi: 'Lúc chúng tôi về tới nhà, trong nhà rất lạnh, chăn cũng chưa trải.', ok: false,
        why: 'Trong bài: <b>暖气开着</b> (máy sưởi đang bật) và <b>被子已铺好</b> (chăn đã trải sẵn).' },
      { t: 'type', w: ['卧室'], zh: '两个卧室', vi: 'hai phòng ngủ', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      { t: 'say', mode: 'read', i: 17 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['卧室', '铺', '飘', '阵'], say: [B(17)],
        tease: { scene: 'c2_dadTalk', vi: 'ba kể: hôm qua mẹ nhận được điện thoại… Vì sao ba mẹ lại ở đây?' } }
    ] },
    /* ---------- Tập 11 · câu 17–19 (2 từ: ngắn hơn, có sắp câu + gõ pinyin) ---------- */
    { id: '2-11', title: 'Vì sao ba mẹ cần chìa khoá', sub: '2 từ mới, đoạn kết', thumb: 'c2_realize', words: ['感受', '流泪'], screens: [
      { t: 'story', scene: 'c2_dadTalk', lines: [B(18)] },
      { t: 'tf', scene: 'c2_dadTalk', w: [], zh: '妈妈今天才知道我们回来。', vi: 'Hôm nay mẹ mới biết chúng tôi về.', ok: false,
        why: '<b>你妈昨天接到电话</b> = mẹ nhận điện thoại từ hôm qua, nên hôm nay lên nhà mới dọn dẹp cả ngày (<b>忙了一天了</b>).' },
      { t: 'story', scene: 'c2_realize', lines: [B(19)] },
      { t: 'word', id: '感受', scene: 'c2_feel' },
      cl('感受', 'c2_feel', '来到这里，我___到了大家的热情。', 'Đến đây, mình cảm nhận được sự nhiệt tình của mọi người.', '来到这里，我感受到了大家的热情。', '感受',
        [['想象', '想象 = tưởng tượng, chưa thật sự có; câu nói đã thật sự nhận được: 感受到.'], ['立刻', '立刻 là phó từ “ngay lập tức”, không làm động từ chính.']],
        '<b>感受到 + danh từ</b> = cảm nhận được. Trong bài: <b>能立刻感受到家的温暖</b>.'),
      { t: 'story', scene: 'c2_tears', lines: [B(20)] },
      { t: 'word', id: '流泪', scene: 'c2_cry' },
      { t: 'order', w: ['流泪'], zh: '听完他的话，大家都流下了眼泪。', vi: 'Nghe xong lời anh ấy, ai cũng rơi nước mắt.', chunks: ['听完他的话', '大家都', '流下了', '眼泪'],
        teach: '<b>流泪</b> tách ra được: 流下了眼泪, 流下了热泪 (trong bài).' },
      { t: 'type', w: ['感受'], zh: '感受到温暖', vi: 'cảm nhận được hơi ấm', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      { t: 'tf', scene: 'c2_realize', w: ['感受'], zh: '父母要钥匙，是因为他们想住在城里。', vi: 'Ba mẹ xin chìa khoá vì muốn lên thành phố ở.', ok: false,
        why: 'Ba mẹ vẫn không muốn ở thành phố (tập 2: <b>坚决不在城里住</b>). Ba mẹ xin chìa khoá <b>只是为了让我们回来时，能立刻感受到家的温暖</b>: để khi con về là có ngay một căn nhà ấm.' },
      { t: 'say', mode: 'read', i: 19 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['感受', '流泪'], say: [B(18), B(19), B(20)], recall: 'c2key',
        tease: { done: 1, scene: 'c2_keys', vi: 'Bạn đã học xong cả bài. Chùm chìa khoá ba mẹ xin không phải để giữ nhà, mà để giữ hơi ấm cho con. Từ nào còn lung lay thì vào “Ôn tập tổng hợp” nhé.' } }
    ] },
    /* ---------- Ôn tập 5 (sau tập 11): ext = bẫy cùng âm 扑 / 铺 ---------- */
    { id: '2-m5', mix: 1, after: ['2-10', '2-11'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 10–11 và cả bài', thumb: 'cup', words: [], screens: [],
      ext: [
        cl('扑', 'c2_parentsDoor', '一开门，温暖的气息___面而来。', 'Vừa mở cửa, hơi ấm đã phả vào mặt.', '一开门，温暖的气息扑面而来。', '扑',
          [['铺', '铺 (bộ 钅) = trải chăn, trải giường. Hơi ấm phả vào mặt là 扑面而来 (扌, tay: vồ tới).'], ['飘', '飘 = bay nhẹ, thoảng; cụm cố định là 扑面而来.']],
          '<b>扑</b> và <b>铺</b> cùng đọc pū: 扑 (扌) = vồ, phả vào; 铺 (钅) = trải.', 'Bẫy cùng âm pū · Chọn chữ đúng:'),
        cl('铺', 'c2_makeBed', '卧室床上的被子已经___好了。', 'Chăn trên giường phòng ngủ đã trải sẵn.', '卧室床上的被子已经铺好了。', '铺',
          [['扑', '扑 = vồ tới, phả vào; trải chăn là 铺.'], ['飘', '飘 = bay nhẹ trong gió.']],
          '<b>被子已铺好</b> (trong bài) = chăn đã trải sẵn.', 'Bẫy cùng âm pū · Chọn chữ đúng:')
      ] }
  ];
  /* screens written as {ref: ['HEAR', word]} or {ref: ['QB', word, index]} are copied from CH2.LEARN / CH2.QB.
     Every file that brings one of those (learn.js, bank.js, story.js) calls this at its end, so the load order does not matter. */
  CH2.resolveRefs = function () {
    (CH2.SESSIONS || []).forEach(function (s) {
      s.screens = s.screens.map(function (sc) {
        if (!sc.ref) return sc;
        if (sc.ref[0] === 'HEAR' && CH2.LEARN && CH2.LEARN[sc.ref[1]]) { var x = CH2.LEARN[sc.ref[1]].hear; return { t: 'hear', w: [sc.ref[1]], s: x.s, opts: x.opts.slice(), why: x.why, whyNot: x.whyNot.slice() }; }
        if (sc.ref[0] === 'QB' && CH2.QB && CH2.QB[sc.ref[1]]) return JSON.parse(JSON.stringify(CH2.QB[sc.ref[1]][sc.ref[2]]));
        return sc;
      });
    });
  };
  CH2.resolveRefs();
})();

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

/* HSK5 Bài 2: built by build.py from hsk5-src/ch2/ — do not edit */
/* ===== Bài 2: taught words (same shape as Bài 1 WORDS). Bản thử: the 9 words of tập 1–2. story: 1 = word beyond the HSK5 syllabus (HSK6), lower exam priority ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.WORDS = [
    { id: '一辈子', ep: '2-1', vi: 'suốt đời, cả đời', hv: 'nhất bối tử', facts: [
      'Đứng <b>trước động từ</b> làm trạng ngữ: <b>一辈子住在农村</b> (cả đời sống ở nông thôn), 一辈子没出国 (cả đời chưa ra nước ngoài).',
      'Cũng đứng sau động từ hoặc trước 的: 我会记住一辈子 (mình sẽ nhớ suốt đời), 一辈子的朋友 (bạn cả đời).',
      'Khẩu ngữ, nghĩa gần 一生 nhưng thân mật hơn. Chữ 一 đọc <b>yí</b> vì đứng trước bèi (thanh 4).'],
      ex: ['我爷爷一辈子没离开过农村。', '这件事我会记住一辈子。'] },
    { id: '农村', ep: '2-1', vi: 'nông thôn', hv: 'nông thôn', facts: [
      'Trái nghĩa với <b>城市</b> (thành phố). Hay đi với: <b>在农村</b>, 农村生活, <b>农村老家</b> (quê nhà dưới nông thôn, như trong bài).',
      'Nói “ở dưới quê” là <b>在农村</b>; nói “lên phố” là 去城里, 进城.'],
      ex: ['他在农村长大，很熟悉农村的生活。', '现在很多年轻人离开农村，去城市工作。'] },
    { id: '屋', ep: '2-1', vi: 'nhà; căn phòng', hv: 'ốc', facts: [
      'Một chữ 屋 hay đứng trong từ ghép: <b>老屋</b> (nhà cũ, như trong bài), <b>屋里</b> (trong nhà, trong phòng), <b>进屋</b> (vào nhà). Đứng một mình thường nói <b>屋子</b>.',
      '屋子 thường là một <b>căn phòng</b> hoặc căn nhà nhỏ, khẩu ngữ hơn 房间. Lượng từ: 一间屋子.',
      'Hán–Việt “ốc” như trong <b>phòng ốc</b>. Không liên quan tới con ốc tiếng Việt.'],
      ex: ['外面太冷了，我们进屋吧。', '这间屋子不大，可是很干净。'] },
    { id: '断', ep: '2-1', vi: 'cai, dứt; đứt', hv: 'đoạn', facts: [
      'Nghĩa gốc: <b>đứt, gãy</b> (thành hai đoạn). Hay đi với tân ngữ: <b>断奶</b> (cai sữa), 断水 (cúp nước), 断电 (cúp điện), <b>断了联系</b> (mất liên lạc).',
      'Làm bổ ngữ sau động từ: <b>打断</b> (đánh gãy; ngắt lời).',
      'Trong bài: <b>没断奶的孩子</b> = đứa trẻ chưa dứt sữa, còn bám mẹ. Ba mẹ gắn với căn nhà cũ y như vậy.'],
      ex: ['大学毕业以后，我们就断了联系。', '昨天晚上我们这儿断电了。'] },
    { id: '以来', ep: '2-2', vi: 'từ … đến nay', hv: 'dĩ lai', facts: [
      'Đứng <b>sau</b> một mốc thời gian: <b>上大学以来</b> (từ khi vào đại học đến nay), 去年以来, <b>一直以来</b> (từ trước tới nay).',
      'Khác <b>以前</b> (trước) và <b>以后</b> (sau): 以来 luôn kéo dài tới <b>bây giờ</b>. Vế sau hay có 一直, 很少, 都.',
      'Trong bài: <b>长年以来</b> = bao năm nay.'],
      ex: ['工作以来，他很少回老家。', '一直以来，她都很爱护这辆车。'] },
    { id: '姥姥', ep: '2-2', vi: 'bà ngoại', hv: 'lão lão', facts: [
      '<b>Mẹ của mẹ</b>. Khẩu ngữ, nhất là ở miền Bắc Trung Quốc; miền Nam hay nói 外婆. Bà nội (mẹ của ba) là <b>奶奶</b>.',
      'Chữ thứ hai đọc nhẹ: lǎolao.'],
      ex: ['我姥姥今年八十岁了，身体还很好。', '小时候我常常住在姥姥家。'] },
    { id: '舅舅', ep: '2-2', vi: 'cậu (anh, em trai của mẹ)', hv: 'cữu cữu', facts: [
      '<b>Anh hoặc em trai của mẹ</b>: lớn hay nhỏ hơn mẹ đều gọi 舅舅, giống cách miền Nam gọi “cậu”. Anh/em trai của ba là 叔叔 (chú) hoặc 伯伯 (bác).',
      'Vợ của cậu là 舅妈 (mợ).'],
      ex: ['我舅舅是我妈妈的哥哥。', '周末我们去舅舅家吃饭。'] },
    { id: '姑姑', ep: '2-2', vi: 'cô (chị, em gái của ba)', hv: 'cô cô', facts: [
      '<b>Chị hoặc em gái của ba</b>. Chị/em gái của mẹ thì gọi là 阿姨 hoặc 姨 (dì).',
      'Mẹo: 姥 và 姑 đều có bộ 女 (nữ); còn 舅 có chữ 男 (nam) ở dưới.'],
      ex: ['我姑姑是我爸爸的妹妹。', '姑姑每年春节都回来看我们。'] },
    { id: '坚决', ep: '2-2', vi: 'kiên quyết', hv: 'kiên quyết', facts: [
      'Hay đứng <b>trước động từ</b>: <b>坚决反对</b> (kiên quyết phản đối), <b>坚决不 + động từ</b> (nhất quyết không…), 坚决改正 (kiên quyết sửa).',
      'Cũng là tính từ: <b>态度很坚决</b> (thái độ rất kiên quyết).',
      'Trong bài: <b>坚决不在城里住</b> = nhất quyết không chịu ở thành phố.'],
      ex: ['他坚决反对这个计划。', '我说了很多次，她还是坚决不同意。'] }
  ];
  CH2.EP_META = {
    '2-1': { title: 'Tập 1 · Cả đời ở quê', sub: 'Bạn gặp 4 từ: 一辈子, 农村, 屋, 断', book: 'Mở sách, đọc câu đầu tiên của Bài 2. Bạn sẽ thấy 一辈子, 农村, 屋, 断 nằm trong đó.' },
    '2-2': { title: 'Tập 2 · Ba mẹ không chịu lên phố', sub: 'Bạn gặp 5 từ: 以来, 姥姥, 舅舅, 姑姑, 坚决', book: 'Đọc câu thứ hai của bài. 以来, 姥姥, 舅舅, 姑姑, 坚决 đều ở đó.' }
  };
})();

/* ===== Bài 2: word cards (Vietnamese of the examples) + one listening item per word.
   hear: opts[0] is right; all 3 options share the keywords you can hear and differ in ONE detail;
   whyNot[i] says which detail rules option i out (whyNot[0] is empty). ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.LEARN = {
    '一辈子': { exv: ['Ông nội mình cả đời chưa từng rời khỏi nông thôn.', 'Chuyện này mình sẽ nhớ suốt đời.'],
      hear: { s: '她一辈子住在农村，没去过大城市。', opts: ['Cả đời bà ấy sống ở nông thôn, chưa từng đến thành phố lớn.', 'Cả đời bà ấy sống ở thành phố lớn, chưa từng về nông thôn.', 'Bà ấy mới sống ở nông thôn một năm, chưa từng đến thành phố lớn.'],
        why: '<b>一辈子</b> = cả đời. <b>住在农村</b> = sống ở nông thôn. <b>没去过</b> = chưa từng đến.',
        whyNot: ['', 'Đảo chỗ rồi: 住在农村 (sống ở nông thôn), 没去过大城市 (chưa đến thành phố lớn).', '一辈子 = cả đời, không phải “mới một năm”.'] } },
    '农村': { exv: ['Anh ấy lớn lên ở nông thôn, rất quen với cuộc sống nông thôn.', 'Bây giờ nhiều người trẻ rời nông thôn lên thành phố làm việc.'],
      hear: { s: '现在很多年轻人离开农村，去城市工作。', opts: ['Bây giờ nhiều người trẻ rời nông thôn lên thành phố làm việc.', 'Bây giờ nhiều người trẻ rời thành phố về nông thôn làm việc.', 'Bây giờ ít người trẻ rời nông thôn lên thành phố làm việc.'],
        why: '<b>离开农村</b> = rời nông thôn. <b>去城市工作</b> = lên thành phố làm việc. <b>很多</b> = nhiều.',
        whyNot: ['', 'Ngược hướng: câu nói 离开农村 (rời nông thôn) rồi 去城市 (đến thành phố).', '很多 = nhiều, không phải ít.'] } },
    '屋': { exv: ['Ngoài trời lạnh quá, mình vào nhà đi.', 'Căn phòng này không lớn nhưng rất sạch.'],
      hear: { s: '屋里很暖和，外面很冷。', opts: ['Trong nhà rất ấm, ngoài trời rất lạnh.', 'Trong nhà rất lạnh, ngoài trời rất ấm.', 'Trong nhà rất ấm, ngoài trời cũng ấm.'],
        why: '<b>屋里</b> = trong nhà, trong phòng. <b>暖和</b> = ấm áp. <b>外面</b> = bên ngoài. Nghe kỹ chữ nào đi với nơi nào.',
        whyNot: ['', 'Ngược rồi: 屋里 đi với 暖和 (ấm), 外面 đi với 冷 (lạnh).', 'Vế sau là 外面很冷: ngoài trời lạnh.'] } },
    '断': { exv: ['Tốt nghiệp đại học xong là tụi mình mất liên lạc.', 'Tối qua chỗ tụi mình bị cúp điện.'],
      hear: { s: '毕业以后，我跟他断了联系。', opts: ['Sau khi tốt nghiệp, mình mất liên lạc với anh ấy.', 'Sau khi tốt nghiệp, mình vẫn giữ liên lạc với anh ấy.', 'Trước khi tốt nghiệp, mình đã mất liên lạc với anh ấy.'],
        why: '<b>断了联系</b> = mất liên lạc (sợi dây liên lạc bị đứt). <b>毕业以后</b> = sau khi tốt nghiệp.',
        whyNot: ['', '断了联系 = liên lạc đã đứt, không phải vẫn giữ.', '以后 = sau khi, không phải trước khi.'] } },
    '以来': { exv: ['Từ khi đi làm tới giờ, anh ấy hiếm khi về quê.', 'Từ trước tới nay, cô ấy luôn rất giữ gìn chiếc xe này.'],
      hear: { s: '上大学以来，我很少回家。', opts: ['Từ khi vào đại học đến nay, mình rất ít về nhà.', 'Từ khi vào đại học đến nay, mình về nhà rất thường xuyên.', 'Trước khi vào đại học, mình rất ít về nhà.'],
        why: '<b>上大学以来</b> = từ khi vào đại học đến nay. <b>很少</b> = rất ít, hiếm khi.',
        whyNot: ['', '很少 = rất ít, hiếm khi; không phải thường xuyên.', '以来 = từ … đến nay. “Trước khi” là 以前.'] } },
    '姥姥': { exv: ['Bà ngoại mình năm nay tám mươi tuổi, sức khoẻ vẫn rất tốt.', 'Hồi nhỏ mình hay ở nhà bà ngoại.'],
      hear: { s: '我姥姥一个人住在农村。', opts: ['Bà ngoại mình sống một mình ở nông thôn.', 'Bà nội mình sống một mình ở nông thôn.', 'Bà ngoại mình sống với cậu ở nông thôn.'],
        why: '<b>姥姥</b> = bà ngoại. <b>一个人</b> = một mình.',
        whyNot: ['', '姥姥 là bà ngoại (mẹ của mẹ). Bà nội là 奶奶.', '一个人 = một mình; câu không nhắc tới cậu.'] } },
    '舅舅': { exv: ['Cậu mình là anh trai của mẹ mình.', 'Cuối tuần nhà mình sang nhà cậu ăn cơm.'],
      hear: { s: '舅舅比我妈妈大三岁。', opts: ['Cậu lớn hơn mẹ mình ba tuổi.', 'Cô lớn hơn ba mình ba tuổi.', 'Cậu nhỏ hơn mẹ mình ba tuổi.'],
        why: '<b>A 比 B 大 + số tuổi</b> = A lớn hơn B mấy tuổi. 舅舅 đi với 妈妈: cậu là anh/em trai của mẹ.',
        whyNot: ['', '舅舅 = cậu, bên mẹ (câu có 我妈妈). Cô bên ba là 姑姑.', '比我妈妈大 = lớn hơn mẹ. Nhỏ hơn thì nói 小.'] } },
    '姑姑': { exv: ['Cô mình là em gái của ba mình.', 'Tết năm nào cô cũng về thăm nhà mình.'],
      hear: { s: '姑姑每年春节都回来看我们。', opts: ['Tết năm nào cô cũng về thăm nhà mình.', 'Tết năm nào cậu cũng về thăm nhà mình.', 'Tết năm nay cô không về thăm nhà mình.'],
        why: '<b>每年…都</b> = năm nào cũng. <b>回来看我们</b> = về thăm nhà mình.',
        whyNot: ['', '姑姑 = cô (chị/em gái của ba). Cậu là 舅舅.', '每年…都 = năm nào cũng, và câu không có 不.'] } },
    '坚决': { exv: ['Anh ấy kiên quyết phản đối kế hoạch này.', 'Mình nói bao nhiêu lần, cô ấy vẫn nhất quyết không đồng ý.'],
      hear: { s: '妈妈坚决不同意我一个人去旅游。', opts: ['Mẹ nhất quyết không đồng ý cho mình đi du lịch một mình.', 'Mẹ vui vẻ đồng ý cho mình đi du lịch một mình.', 'Mẹ nhất quyết không đồng ý cho mình đi du lịch với bạn.'],
        why: '<b>坚决不 + động từ</b> = nhất quyết không… <b>一个人</b> = một mình.',
        whyNot: ['', '坚决不同意 = nhất quyết không đồng ý: có chữ 不.', '一个人 = một mình, không phải đi với bạn.'] } }
  };
  if (CH2.buildQB) { CH2.buildQB(); delete CH2.buildQB; }   /* bank.js loaded first */
  if (CH2.resolveRefs) CH2.resolveRefs();
})();

/* ===== Bài 2: Hán Việt + chiết tự + a memory hook for each word (same shape as Bài 1 ETY) ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.ETY = {
    '一辈子': { parts: [['一', 'nhất', 'Một.'], ['辈', 'bối', '非 ở trên, 车 (xe) ở dưới. Nghĩa gốc: hàng xe xếp nối nhau, từ đó thành “lớp người, thế hệ”. Như “tiền bối”, “hậu bối”.'], ['子', 'tử', 'Hậu tố danh từ, đọc nhẹ.']],
      hook: 'Một (一) lớp đời người (辈) = trọn một đời. Tiếng Việt cũng nói “cả một đời”.' },
    '农村': { parts: [['农', 'nông', 'Bản phồn thể 農 có 辰: vốn là lưỡi liềm làm bằng vỏ trai, nông cụ thời xưa. Việc đồng áng. Như “nông dân”, “nông nghiệp”.'], ['村', 'thôn', '木 (cây) + 寸 (chỉ âm). Xóm làng có cây cối bao quanh. Như “thôn xóm”.']],
      hook: 'Nông (农) + thôn (村) = “nông thôn”, y như tiếng Việt. Chỗ có ruộng đồng và xóm làng.' },
    '屋': { parts: [['屋', 'ốc', '尸 ở trên là mái che (cũng thấy trong 层) + 至 (đến). Đi đến rồi dừng lại dưới mái: căn nhà. Như “phòng ốc”.']],
      hook: 'Đi đến (至) dưới mái che (尸) là vào tới nhà. Nhớ “phòng ốc”.' },
    '断': { parts: [['断', 'đoạn', 'Bên trái là bó sợi tơ, bên phải là 斤 (cái rìu). Rìu chặt đứt bó sợi. Như “đoạn tuyệt”, “gián đoạn”.']],
      hook: 'Cái rìu (斤) chặt đứt bó sợi: 断. Sợi dây giữa mẹ và con bú cũng “đứt” được: 断奶 = cai sữa.' },
    '以来': { parts: [['以', 'dĩ', 'Chữ nối chỉ mốc, như trong 以前, 以后.'], ['来', 'lai', 'Đến. Từ mốc đó “đến” bây giờ.']],
      hook: '以前 nhìn về trước, 以后 nhìn về sau, còn 以来 đi từ mốc <b>đến tận bây giờ</b>. “Dĩ lai” = từ đó đến nay.' },
    '姥姥': { parts: [['姥', 'lão', '女 (nữ) + 老 (già): người đàn bà lớn tuổi. Hán Việt cũng đọc “mỗ”.']],
      hook: 'Người đàn bà (女) già (老) bên ngoại: bà ngoại. Còn 奶奶 là bà nội.' },
    '舅舅': { parts: [['舅', 'cữu', '臼 (cái cối) ở trên chỉ âm jiù, 男 (nam) ở dưới cho biết đây là người đàn ông.']],
      hook: 'Chữ có 男 (nam) ở dưới: người đàn ông bên họ mẹ = cậu. Như “cữu phụ”, “cậu mợ”.' },
    '姑姑': { parts: [['姑', 'cô', '女 (nữ) + 古 (cổ, chỉ âm gū). Người phụ nữ trong họ bên ba.']],
      hook: 'Bộ 女 + âm “gū” nghe gần “cô”: cô bên nội (chị em gái của ba).' },
    '坚决': { parts: [['坚', 'kiên', 'Bản phồn thể 堅 có 土 (đất) ở dưới: đất nện chắc. Cứng, vững. Như “kiên cố”, 坚持 (kiên trì).'], ['决', 'quyết', 'Bản gốc 決 có 氵 (nước) + 夬: nước phá bờ tràn ra, không gì cản nổi; sau thành “quyết định” (决定).']],
      hook: 'Vững như đất nện (坚), dứt khoát như nước vỡ bờ (决): đã nói không là không.' }
  };
})();

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

/* ===== Bài 2: question bank for review (Ôn tập, Ôn tập tổng hợp, Kiểm tra) + MEAN. Same shape as Bài 1 QB.
   New sentences, built only from HSK1–4, Bài 1 words and Bài 2 words taught up to that word's tập.
   Pictures (scene) appear only after answering (HANDOFF §12.11) and show what the sentence says; never the answer's characters. ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.MEAN = { '一辈子': 'suốt đời, cả đời', '农村': 'nông thôn', '屋': 'nhà, căn phòng', '断': 'cai, dứt, đứt', '以来': 'từ … đến nay', '姥姥': 'bà ngoại', '舅舅': 'cậu (anh/em trai của mẹ)', '姑姑': 'cô (chị/em gái của ba)', '坚决': 'kiên quyết' };
  /* cloze: w word, scene, say = sentence with ___, vi, full, ok = right word, wrongs = [[word, why not]] */
  var cz = function (w, scene, say, vi, full, ok, wrongs, teach) {
    return { t: 'mc', w: [w], scene: scene, say: [say, vi], full: full, prompt: 'Chọn từ điền vào chỗ trống:',
      opts: [{ t: ok, ok: 1 }].concat(wrongs.map(function (x) { return { t: x[0], note: x[1] }; })), teach: teach };
  };
  var od = function (w, zhs, vi, chunks) { return { t: 'order', w: w, zh: zhs, vi: vi, chunks: chunks }; };
  var ty = function (w, zhs, vi) { return { t: 'type', w: w, zh: zhs, vi: vi, prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' }; };
  /* hear: opts[0] right; whyNot = why each wrong option is out (one detail each) */
  var hr = function (w) { var x = CH2.LEARN[w].hear; return { t: 'hear', w: [w], s: x.s, opts: x.opts.slice(), why: x.why, whyNot: x.whyNot.slice() }; };
  var hr2 = function (w, s, opts, why, whyNot) { return { t: 'hear', w: [w], s: s, opts: opts, why: why, whyNot: whyNot }; };
  var build = function () {
    CH2.QB = {
      '一辈子': [
        cz('一辈子', 'c2_farmOld', '我爷爷___都在农村种地，从来没去过外国。', 'Ông nội mình cả đời làm ruộng ở nông thôn, chưa từng ra nước ngoài.', '我爷爷一辈子都在农村种地，从来没去过外国。', '一辈子',
          [['一下', '一下 đứng sau động từ (看一下), không chỉ một quãng thời gian.'], ['一样', '一样 = giống nhau, không chỉ thời gian.']], '<b>一辈子 + 都 + động từ</b> = cả đời đều…'),
        od(['一辈子'], '这件事我会记住一辈子。', 'Chuyện này mình sẽ nhớ suốt đời.', ['这件事', '我会', '记住', '一辈子']),
        hr2('一辈子', '我会记住你一辈子。', ['Mình sẽ nhớ bạn suốt đời.', 'Mình sẽ nhớ bạn một năm.', 'Bạn sẽ nhớ mình suốt đời.'], '<b>记住</b> = nhớ kỹ. <b>一辈子</b> đứng cuối = suốt đời.',
          ['', '一辈子 = suốt đời, không phải một năm.', 'Người nhớ là 我 (mình), người được nhớ là 你 (bạn).'])
      ],
      '农村': [
        cz('农村', 'c2_farmOld', '我是在___长大的，小时候每天都跟爷爷去地里。', 'Mình lớn lên ở nông thôn, hồi nhỏ ngày nào cũng theo ông ra đồng.', '我是在农村长大的，小时候每天都跟爷爷去地里。', '农村',
          [['城市', '城市 là thành phố; ở thành phố thì không ngày nào cũng ra đồng (去地里).'], ['屋子', '屋子 là căn phòng; câu nói nơi lớn lên, có ruộng đồng.']], '<b>在农村长大</b> = lớn lên ở nông thôn. <b>去地里</b> = ra đồng.'),
        od(['农村'], '现在很多年轻人离开农村去城市工作。', 'Bây giờ nhiều người trẻ rời nông thôn lên thành phố làm việc.', ['现在', '很多年轻人', '离开农村', '去城市工作']),
        hr('农村'),
        ty(['农村'], '在农村', 'ở nông thôn')
      ],
      '屋': [
        cz('屋', 'c2_oldHouse', '这间___不大，可是很干净。', 'Căn phòng này không lớn nhưng rất sạch.', '这间屋子不大，可是很干净。', '屋子',
          [['农村', '农村 là cả vùng nông thôn, không đi với lượng từ 间 (căn, gian).'], ['孩子', '孩子 là đứa trẻ; 间 là lượng từ của phòng.']], '<b>一间屋子</b> = một căn phòng. 屋子 khẩu ngữ hơn 房间.'),
        hr('屋'),
        od(['屋'], '外面太冷了，我们进屋吧。', 'Ngoài trời lạnh quá, mình vào nhà đi.', ['外面', '太冷了', '我们', '进屋吧'])
      ],
      '断': [
        cz('断', 'c2_cut', '大学毕业以后，我们就___了联系，十年没见面了。', 'Tốt nghiệp đại học xong là tụi mình mất liên lạc, mười năm chưa gặp nhau.', '大学毕业以后，我们就断了联系，十年没见面了。', '断',
          [['有', '有了联系 = đã có liên lạc, trái với 十年没见面 (mười năm chưa gặp).'], ['离', '离 là rời, cách; không đi với 联系.']], '<b>断了联系</b> = mất liên lạc. 断 còn đi với 奶 / 水 / 电.'),
        hr('断'),
        od(['断'], '昨天晚上我们这儿断电了。', 'Tối qua chỗ tụi mình bị cúp điện.', ['昨天晚上', '我们这儿', '断电了'])
      ],
      '以来': [
        cz('以来', 'c2_chat', '学汉语___，我每天都听中文歌。', 'Từ khi học tiếng Trung đến nay, ngày nào mình cũng nghe nhạc Trung.', '学汉语以来，我每天都听中文歌。', '以来',
          [['以前', '以前 = trước khi. Câu nói chuyện từ lúc bắt đầu học đến bây giờ (每天都听), nên dùng 以来.'], ['一辈子', '一辈子 = cả đời, không đứng sau “学汉语”.']], '<b>(việc/mốc) + 以来</b> = từ … đến nay.'),
        od(['以来'], '工作以来，他很少回老家。', 'Từ khi đi làm tới giờ, anh ấy hiếm khi về quê.', ['工作以来', '他', '很少', '回老家']),
        hr('以来')
      ],
      '姥姥': [
        cz('姥姥', 'c2_treeLao', '我妈妈的妈妈是我的___。', 'Mẹ của mẹ mình là bà ngoại của mình.', '我妈妈的妈妈是我的姥姥。', '姥姥',
          [['奶奶', '奶奶 là bà nội: mẹ của ba.'], ['姑姑', '姑姑 là cô: chị/em gái của ba.']], '<b>姥姥</b> = bà ngoại (mẹ của mẹ). <b>奶奶</b> = bà nội (mẹ của ba).'),
        hr('姥姥'),
        od(['姥姥'], '小时候我常常住在姥姥家。', 'Hồi nhỏ mình hay ở nhà bà ngoại.', ['小时候', '我', '常常', '住在姥姥家'])
      ],
      '舅舅': [
        cz('舅舅', 'c2_treeJiu', '我___是我妈妈的弟弟，今年三十岁。', 'Cậu mình là em trai của mẹ, năm nay ba mươi tuổi.', '我舅舅是我妈妈的弟弟，今年三十岁。', '舅舅',
          [['叔叔', '叔叔 là chú: em trai của ba, không phải của mẹ.'], ['姑姑', '姑姑 là cô (phụ nữ, bên ba); câu nói 弟弟 (em trai) của mẹ.']], '<b>舅舅</b> = anh hoặc em trai của mẹ.'),
        ty(['舅舅'], '舅舅家', 'nhà cậu'),
        hr('舅舅')
      ],
      '姑姑': [
        cz('姑姑', 'c2_treeGu', '爸爸有一个妹妹，她是我的___。', 'Ba có một em gái, đó là cô của mình.', '爸爸有一个妹妹，她是我的姑姑。', '姑姑',
          [['舅舅', '舅舅 là cậu: đàn ông, bên mẹ.'], ['姥姥', '姥姥 là bà ngoại.']], '<b>姑姑</b> = chị hoặc em gái của ba.'),
        hr('姑姑'),
        od(['姑姑'], '我姑姑是我爸爸的妹妹。', 'Cô mình là em gái của ba mình.', ['我姑姑', '是', '我爸爸的', '妹妹'])
      ],
      '坚决': [
        cz('坚决', 'c2_firm', '他的态度很___，谁说也没用。', 'Thái độ của anh ấy rất kiên quyết, ai nói cũng vô ích.', '他的态度很坚决，谁说也没用。', '坚决',
          [['恩爱', '恩爱 chỉ vợ chồng thắm thiết, không nói về thái độ.'], ['以来', '以来 đứng sau một mốc thời gian, không đứng sau 很.']], '<b>态度很坚决</b> = thái độ rất kiên quyết. 坚决 cũng đứng trước động từ: 坚决反对.'),
        od(['坚决'], '他坚决反对这个计划。', 'Anh ấy kiên quyết phản đối kế hoạch này.', ['他', '坚决', '反对', '这个计划']),
        hr('坚决')
      ]
    };
  };
  /* hr() copies the listening item from CH2.LEARN, so build once learn.js is there (any load order) */
  CH2.QB = CH2.QB || {};
  if (CH2.LEARN) build(); else CH2.buildQB = build;
  if (CH2.resolveRefs) CH2.resolveRefs();
})();

/* ===== Bài 2: question pools for the chapter test (Kiểm tra cuối bài 2). Same shape as Bài 1 TESTBANK.
   Bản thử (tập 1–2): still empty; filled when the rest of Bài 2 is written. ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.TESTBANK = CH2.TESTBANK || { tf: [], spot: [] };
})();

/* ===== Bài 2: new SVG scenes (viewBox 400x300), names start with c2_. Built with the Bài 1 kit helpers
   (C, R, Ci, Pa, Ln, Tx, G, person, sun, cloud, heart, clock…) which are only called when a scene is drawn.
   Registered into SC / SCENE_LABEL when those exist; always also kept in CH2.SC / CH2.SCENE_LABEL. ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  var S = {}, L = {};
  /* ---- small props ---- */
  var dad = function (x, y, o) { return person(x, y, Object.assign({ hs: 'short', hair: C.hairG, shirt: '#7a6a4f', m: 'smile' }, o || {})); };
  var mom = function (x, y, o) { return person(x, y, Object.assign({ hs: 'bun', hair: C.hairG, shirt: '#4f7f8f', m: 'smile' }, o || {})); };
  var house = function (x, y, s, o) {
    o = o || {};
    return G(`translate(${x} ${y}) scale(${s})`,
      R(-62, -42, 124, 84, o.wall || '#ecd7b4', 4) + Pa('M-78 -40 L0 -96 L78 -40Z', o.roof || '#8a4b3a') + Pa('M-78 -40 L78 -40 L70 -32 L-70 -32Z', 'rgba(0,0,0,.18)') +
      [-60, -40, -20, 0, 20, 40].map(d => Ln(d, -40, d / 2, -88, 'rgba(0,0,0,.12)', 2)).join('') +
      (o.open ? R(-17, -2, 34, 44, '#ffd98a', 3) + Pa('M-17 -2 L-30 4 L-30 46 L-17 42Z', o.door || C.brown) : R(-17, -2, 34, 44, o.door || C.brown, 3) + Ci(10, 22, 2.5, C.butter)) +
      R(-52, -24, 26, 22, o.lit ? '#ffe39a' : C.sky, 2, 'stroke="#fff" stroke-width="3"') + R(26, -24, 26, 22, o.lit ? '#ffe39a' : C.sky, 2, 'stroke="#fff" stroke-width="3"') +
      (o.old ? Pa('M44 -6 l6 10 l-4 6 l6 10', 'none', `stroke="#a88a66" stroke-width="2"`) + Pa('M-46 8 l-5 8 l4 6', 'none', `stroke="#a88a66" stroke-width="2"`) : ''));
  };
  var tree = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-7, -10, 14, 60, C.brown, 4) + Ci(0, -34, 34, '#4f9a55') + Ci(-24, -16, 22, '#58a55c') + Ci(24, -16, 22, '#58a55c')); };
  var tower = function (x, y, w, h, c) { let win = ''; for (let r = y + 14; r < 236; r += 22) for (let q = x + 10; q < x + w - 12; q += 20) win += R(q, r, 10, 12, (q + r) % 3 ? '#ffe7a3' : '#cfe3f2', 1); return R(x, y, w, h, c, 3) + win; };
  var city = function () { return R(0, 0, 400, 300, '#cfe3f5') + tower(10, 60, 70, 200, '#8fa3c0') + tower(90, 20, 80, 240, '#6f86aa') + tower(180, 80, 60, 180, '#a3b4cf') + tower(250, 40, 70, 220, '#7b8fb2') + tower(330, 90, 70, 170, '#94a7c6') + R(0, 236, 400, 64, '#59606e') + Ln(0, 268, 400, 268, C.butter, 4, 'stroke-dasharray="22 16"'); };
  var fields = function (y) { let f = Pa(`M0 ${y} L400 ${y} L400 300 L0 300Z`, '#8cc77a'); for (let i = 0; i < 7; i++) { const yy = y + 12 + i * i * 2.4 + i * 6; f += Ln(0, yy, 400, yy, '#6fae5f', 3); } return f; };
  var hat = function () { return Pa('M-40 -18 L0 -46 L40 -18Z', '#e2b85c') + R(-44, -20, 88, 6, '#c99a3e', 3); };
  var snow = function (n) { let s = ''; for (let i = 0; i < n; i++) s += Ci((i * 47 + 13) % 400, (i * 71 + 9) % 300, 2.5 + (i % 3), '#fff', 'opacity=".9"'); return s; };
  var keyIcon = function (x, y, rot, c) { return G(`translate(${x} ${y}) rotate(${rot})`, Ci(0, 0, 16, 'none', `stroke="${c}" stroke-width="7"`) + R(14, -4, 58, 9, c, 3) + R(52, 4, 8, 14, c, 2) + R(64, 4, 8, 10, c, 2)); };
  var scissors = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s})`, Ci(-30, 26, 13, 'none', `stroke="${C.red}" stroke-width="7"`) + Ci(30, 26, 13, 'none', `stroke="${C.red}" stroke-width="7"`) + Pa('M-22 16 L18 -48 L24 -46 L-14 20Z', '#c8d0dc', `stroke="${C.ink}" stroke-width="2"`) + Pa('M22 16 L-18 -48 L-24 -46 L14 20Z', '#dfe5ee', `stroke="${C.ink}" stroke-width="2"`) + Ci(0, -8, 4, C.ink)); };

  /* ---- tập 1 ---- */
  S.c2_village = () => R(0, 0, 400, 300, '#cfe9f5') + sun(334, 58, 22) + Pa('M0 160 Q90 112 190 150 T400 140 L400 300 L0 300Z', '#a8d48f') + fields(200) +
    house(160, 170, 1.05, { old: 1 }) + tree(330, 196, .9) + dad(118, 214, { s: .44 }) + mom(204, 214, { s: .44 }) + heart(160, 66, 1.5, C.pink, 'class="fl"');
  L.c2_village = 'Ba mẹ đứng trước căn nhà cũ ở quê';
  S.c2_lifetime = () => R(0, 0, 400, 300, '#fdf1dc') + house(200, 112, .7, { old: 1 }) + R(0, 188, 400, 112, '#cfe6b8') +
    person(70, 196, { s: .3, hs: 'short', shirt: C.butter, m: 'grin' }) + person(200, 186, { s: .4, hs: 'short', shirt: C.teal }) + person(330, 186, { s: .4, hs: 'short', hair: C.hairW, gl: 'round', shirt: '#7a6a4f' }) +
    Ln(40, 278, 356, 278, C.org, 6) + Pa('M356 266 L380 278 L356 290Z', C.org) + Ci(40, 278, 7, C.org);
  L.c2_lifetime = 'Cùng một người: lúc nhỏ, lúc lớn, lúc già, vẫn ở một chỗ';
  S.c2_farmland = () => R(0, 0, 400, 300, '#cfe9f5') + cloud(90, 52, 1) + sun(330, 54, 20) + Pa('M0 150 Q120 118 240 140 T400 132 L400 300 L0 300Z', '#a8d48f') + fields(170) +
    house(80, 150, .45) + house(150, 146, .38, { roof: '#6f5a8a' }) + tree(250, 150, .55) + tree(370, 160, .6) +
    G('translate(300 216)', person(0, 0, { s: .42, hs: 'short', shirt: '#4f7f8f', hat: hat() })) + Ln(330, 214, 350, 268, C.brown, 4);
  L.c2_farmland = 'Đồng ruộng, mấy ngôi nhà nhỏ và người làm ruộng';
  S.c2_oldHouse = () => R(0, 0, 400, 300, '#e3eef5') + R(0, 240, 400, 60, '#c9b79c') + house(200, 190, 1.55, { old: 1, open: 1 }) +
    person(250, 214, { s: .4, hs: 'bun', hair: C.hairG, shirt: '#4f7f8f', flip: 1 }) + tree(46, 200, .8);
  L.c2_oldHouse = 'Căn nhà cũ, cửa mở, có người bước vào';
  S.c2_cut = () => R(0, 0, 400, 300, '#f4ecdf') + Pa('M10 120 Q90 100 170 124', 'none', `stroke="${C.brown}" stroke-width="12" stroke-linecap="round"`) + Pa('M230 124 Q310 100 390 120', 'none', `stroke="${C.brown}" stroke-width="12" stroke-linecap="round"`) +
    Pa('M170 124 l8 -10 l4 14 l8 -12', 'none', `stroke="${C.brown}" stroke-width="5"`) + Pa('M230 124 l-8 10 l-4 -14 l-8 12', 'none', `stroke="${C.brown}" stroke-width="5"`) +
    scissors(200, 196, 1.3) + Pa('M196 70 L204 40 M176 76 L160 54 M218 76 L236 56', 'none', `stroke="${C.org}" stroke-width="5" stroke-linecap="round"`);
  L.c2_cut = 'Cây kéo cắt đứt sợi dây làm hai đoạn';
  S.c2_coldWind = () => R(0, 0, 400, 300, '#b9c9dc') + snow(40) + R(0, 250, 400, 50, '#eef3f8') +
    person(140, 160, { s: .8, hs: 'short', shirt: C.navy, m: 'frown', brows: 'worry' }) + R(110, 196, 60, 14, C.red, 6) + person(260, 160, { s: .8, hs: 'pony', shirt: C.plum, m: 'frown', brows: 'worry' }) + R(230, 196, 60, 14, C.butter, 6) +
    Pa('M20 80 Q60 70 90 84 M300 60 Q340 50 380 64 M30 200 Q60 190 90 204', 'none', `stroke="#fff" stroke-width="4" stroke-linecap="round"`);
  L.c2_coldWind = 'Hai người đứng ngoài trời tuyết, lạnh run';
  S.c2_babyEat = () => R(0, 0, 400, 300, '#fdf1dc') + R(0, 250, 400, 50, '#e8d3b0') + R(150, 120, 14, 150, '#c99a3e', 4) + R(256, 120, 14, 150, '#c99a3e', 4) + R(150, 112, 120, 16, '#e2b85c', 6) +
    person(210, 132, { s: .5, hs: 'short', hair: '#6b4a3a', shirt: C.butter, m: 'grin' }) + R(136, 196, 148, 18, '#e2b85c', 8) + Pa('M184 192 Q210 214 236 192Z', C.white, `stroke="${C.teal}" stroke-width="3"`) + Ci(202, 194, 4, '#f6f0e0') + Ci(216, 195, 4, '#f6f0e0') +
    person(330, 150, { s: .8, hs: 'long', hair: C.hairD, shirt: C.pink, flip: 1 }) + Ln(296, 196, 250, 160, C.pink, 14) + hand(248, 158, 8) + Ln(244, 156, 228, 150, C.grey, 4) + Ci(226, 150, 5, C.grey);
  L.c2_babyEat = 'Em bé ngồi ghế ăn, mẹ đút cơm bằng thìa';
  S.c2_parents = () => R(0, 0, 400, 300, '#f3e6d3') + R(0, 240, 400, 60, '#d8c6a8') + R(160, 30, 80, 60, '#fff', 4, `stroke="${C.brown}" stroke-width="6"`) + flower(200, 62, .8, C.pink) +
    R(70, 190, 260, 60, '#a8584a', 18) + R(70, 170, 260, 36, '#bd6a5a', 14) + dad(150, 140, { s: .75 }) + mom(252, 140, { s: .75 });
  L.c2_parents = 'Hai ông bà ngồi trên ghế trong nhà';
  S.c2_farmOld = () => R(0, 0, 400, 300, '#cfe9f5') + sun(70, 56, 20) + Pa('M0 140 Q140 110 260 136 T400 126 L400 300 L0 300Z', '#a8d48f') + fields(170) + house(330, 140, .4) +
    person(190, 150, { s: .78, hs: 'short', hair: C.hairW, shirt: '#7a6a4f', m: 'smile', hat: hat() }) + Ln(240, 196, 290, 270, C.brown, 6) + Pa('M282 262 L306 270 L296 284 Z', '#8a96ad') + hand(244, 204, 8);
  L.c2_farmOld = 'Một ông cụ đội nón làm ruộng';
  S.c2_cityOld = () => city() + person(200, 170, { s: .62, hs: 'short', hair: C.hairW, shirt: '#7a6a4f', m: 'flat' }) + car(70, 270, .8, C.red) + car(330, 270, .8, C.teal);
  L.c2_cityOld = 'Một ông cụ đi giữa phố, nhà cao tầng xung quanh';
  S.c2_schoolKid = () => R(0, 0, 400, 300, '#cfe9f5') + Pa('M0 150 Q120 120 240 140 T400 130 L400 300 L0 300Z', '#a8d48f') + fields(176) + house(90, 150, .5) + tree(320, 160, .7) +
    R(218, 180, 32, 42, C.red, 8) + person(200, 168, { s: .55, hs: 'short', shirt: C.butter, m: 'grin' }) + Ln(214, 186, 222, 214, C.red, 5);
  L.c2_schoolKid = 'Một cậu bé đeo cặp đi học ở quê';

  /* ---- tập 2 ---- */
  S.c2_twoPlaces = () => R(0, 0, 200, 300, '#d9efcf') + R(200, 0, 200, 300, '#d6e3f5') + fields(220).replace('M0 220 L400 220', 'M0 220 L200 220').replace('L400 300 L0 300Z', 'L200 300 L0 300Z') +
    house(100, 150, .7, { old: 1 }) + dad(62, 214, { s: .34, m: 'flat' }) + mom(138, 214, { s: .34, m: 'flat' }) + Pa('M86 236 l28 28 M114 236 l-28 28', 'none', `stroke="${C.red}" stroke-width="7" stroke-linecap="round"`) +
    tower(214, 40, 50, 196, '#8fa3c0') + tower(272, 70, 54, 166, '#6f86aa') + tower(334, 30, 56, 206, '#a3b4cf') + R(200, 236, 200, 64, '#59606e') +
    person(240, 230, { s: .3, hs: 'bun', hair: C.hairW, shirt: C.plum }) + person(300, 230, { s: .3, hs: 'quiff', shirt: C.org, m: 'grin' }) + person(360, 230, { s: .3, hs: 'long', shirt: C.pink, m: 'grin' }) +
    hand(318, 214, 6) + hand(378, 214, 6) + bubble(250, 150, 90, 40, '?', 28, C.white, C.ink, 'r') + Ln(200, 0, 200, 300, C.white, 6);
  L.c2_twoPlaces = 'Bên trái ba mẹ ở quê lắc đầu, bên phải họ hàng trên thành phố vẫy gọi';
  S.c2_since = () => R(0, 0, 400, 300, '#eef4fb') + R(30, 150, 340, 16, '#c8d6ea', 8) + R(60, 150, 280, 16, C.org, 8) + Pa('M336 140 L366 158 L336 176Z', C.org) +
    Ln(60, 104, 60, 158, C.ink, 4) + Pa('M60 104 L96 116 L60 128Z', C.red) + R(28, 196, 64, 70, '#fff', 6, `stroke="${C.ink}" stroke-width="3"`) + R(28, 196, 64, 18, C.red, 4) + Tx(60, 254, '1', 34, C.ink) +
    clock(330, 90, 34, 10, 10) + Tx(330, 224, 'bây giờ', 22, C.tealD) + Tx(60, 186, 'mốc', 20, C.red) + [130, 190, 250].map(x => Ci(x, 158, 5, '#fff')).join('');
  L.c2_since = 'Mũi tên thời gian từ một mốc kéo tới bây giờ';
  /* family tree: left = bên nội (ba), right = bên ngoại (mẹ); hi = the person in the glow. No relative's name is written, so it can also be a picture option. */
  var tree2 = function (hi) {
    const P = { yeye: [58, 44, { hs: 'bald', hair: C.hairW, gl: 'round', shirt: C.green }], nainai: [118, 44, { hs: 'bun', hair: C.hairG, shirt: C.red }],
      laoye: [282, 44, { hs: 'short', hair: C.hairG, shirt: '#7a6a4f' }], laolao: [342, 44, { hs: 'bun', hair: C.hairW, shirt: C.plum }],
      gugu: [40, 134, { hs: 'long', hair: C.hairD, shirt: C.pink }], baba: [130, 134, { hs: 'short', shirt: C.navy }],
      mama: [270, 134, { hs: 'bob', hair: C.hairD, shirt: C.teal }], jiujiu: [360, 134, { hs: 'quiff', shirt: C.org }], wo: [200, 222, { hs: 'pony', shirt: C.butter }] };
    let g = R(0, 0, 200, 300, '#e3eefb') + R(200, 0, 200, 300, '#fde7e3') + Tx(100, 292, 'bên nội', 16, '#5a6f96') + Tx(300, 292, 'bên ngoại', 16, '#a0574a');
    const line = (d) => Pa(d, 'none', `stroke="#8a96ad" stroke-width="3" stroke-linejoin="round"`);
    g += line('M58 74 L118 74 M88 74 L88 94 M40 94 L130 94 M40 94 L40 112 M130 94 L130 112') + line('M282 74 L342 74 M312 74 L312 94 M270 94 L360 94 M270 94 L270 112 M360 94 L360 112') + line('M130 176 L270 176 M200 176 L200 200');
    if (hi && P[hi]) g += Ci(P[hi][0], P[hi][1] + 10, 34, 'rgba(255,209,102,.75)', `stroke="${C.org}" stroke-width="4"`) + Pa(`M${P[hi][0] + 24} ${P[hi][1] - 30} l4 9 l10 0 l-8 6 l3 10 l-9 -6 l-9 6 l3 -10 l-8 -6 l10 0Z`, C.org);
    Object.keys(P).forEach(k => { const p = P[k]; g += person(p[0], p[1], Object.assign({ s: k === 'wo' ? .3 : .28, m: k === hi ? 'grin' : 'smile' }, p[2])); });
    g += R(108, 186, 44, 20, '#fff', 8) + Tx(130, 201, '爸爸', 14, C.navy) + R(248, 186, 44, 20, '#fff', 8) + Tx(270, 201, '妈妈', 14, C.tealD) + R(160, 252, 22, 20, '#fff', 8) + Tx(171, 267, '我', 14, C.ink);
    return g;
  };
  S.c2_treeLao = () => tree2('laolao'); L.c2_treeLao = 'Cây gia đình, vòng sáng ở một người phía trên bên phải';
  S.c2_treeJiu = () => tree2('jiujiu'); L.c2_treeJiu = 'Cây gia đình, vòng sáng ở một người hàng giữa bên phải';
  S.c2_treeGu = () => tree2('gugu'); L.c2_treeGu = 'Cây gia đình, vòng sáng ở một người hàng giữa bên trái';
  S.c2_firm = () => R(0, 0, 400, 300, '#f6e7e1') + R(0, 246, 400, 54, '#d8c6a8') + person(220, 140, { s: 1, hs: 'short', hair: C.hairG, shirt: '#7a6a4f', m: 'flat', brows: 'angry' }) +
    R(176, 214, 88, 22, '#6a5a40', 10) + hand(180, 224, 9) + hand(260, 224, 9) + person(70, 190, { s: .45, hs: 'quiff', shirt: C.org, m: 'open', brows: 'worry' }) + bubble(30, 70, 70, 40, '?', 26, C.white) +
    Ci(340, 70, 32, 'none', `stroke="${C.red}" stroke-width="8"`) + Ln(318, 92, 362, 48, C.red, 8);
  L.c2_firm = 'Một người khoanh tay, nhất định lắc đầu; người kia năn nỉ';
  S.c2_chat = () => R(0, 0, 400, 300, '#fbeede') + R(260, 30, 110, 80, C.sky, 8, `stroke="#fff" stroke-width="6"`) + R(0, 236, 400, 64, '#d9b88a') +
    person(120, 150, { s: .8, hs: 'short', shirt: C.teal, m: 'open' }) + person(290, 150, { s: .8, hs: 'pony', shirt: C.butter, m: 'smile' }) + R(150, 210, 110, 14, C.brown, 6) + R(196, 224, 14, 40, C.brown) +
    R(172, 192, 18, 18, '#fff', 4) + R(222, 192, 18, 18, '#fff', 4) + bubble(150, 40, 70, 40, '…', 26, C.white);
  L.c2_chat = 'Hai người ngồi uống nước, trò chuyện';
  S.c2_familyPhoto = () => R(0, 0, 400, 300, '#f3e6d3') + R(0, 252, 400, 48, '#d8c6a8') + R(70, 40, 260, 180, C.brown, 8) + R(84, 54, 232, 152, '#dcecf5', 4) +
    [[130, 'bun', C.hairW, C.plum, .32], [190, 'short', C.hairG, '#7a6a4f', .32], [250, 'bob', C.hairD, C.teal, .32], [300, 'quiff', C.hairD, C.org, .3], [160, 'pony', C.hairD, C.butter, .24]].map(([x, hs, hr, sh, s], i) => person(x, i === 4 ? 150 : 110, { s, hs, hair: hr, shirt: sh, m: 'grin' })).join('') +
    R(84, 176, 232, 30, '#cfe0b8') + flower(40, 220, .9, C.pink) + flower(360, 220, .9, C.red);
  L.c2_familyPhoto = 'Tấm ảnh cả gia đình treo trên tường';
  S.c2_keys = () => R(0, 0, 400, 300, '#fff3d9') + house(110, 190, .9) + Ci(270, 120, 30, 'none', `stroke="#c99a3e" stroke-width="6"`) +
    keyIcon(270, 150, 70, '#e2a83a') + keyIcon(270, 150, 110, '#c99a3e') + keyIcon(270, 150, 40, '#d9b45a') + heart(330, 70, 1.5, C.pink, 'class="fl"') + Tx(200, 60, '?', 50, C.org);
  L.c2_keys = 'Một chùm chìa khoá cạnh ngôi nhà';
  S.c2_newHouse = () => R(0, 0, 400, 300, '#cfe3f5') + sun(60, 50, 18) + tower(130, 40, 140, 200, '#e2c9a8') + R(0, 236, 400, 64, '#a8d48f') + R(184, 196, 32, 40, C.brown, 3) +
    person(90, 196, { s: .45, hs: 'short', shirt: C.navy, m: 'grin' }) + person(320, 196, { s: .45, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'grin', flip: 1 }) + keyIcon(120, 226, -20, '#e2a83a') + heart(200, 24, 1.3, C.red, 'class="fl"');
  L.c2_newHouse = 'Hai vợ chồng trẻ vui mừng trước toà nhà mới';

  CH2.SC = S; CH2.SCENE_LABEL = L;
  if (typeof SC !== 'undefined') Object.assign(SC, S);
  if (typeof SCENE_LABEL !== 'undefined') Object.assign(SCENE_LABEL, L);
})();

(typeof regChapter === 'function' ? regChapter : (n, d, a) => (window.__pendingCh = window.__pendingCh || []).push([n, d, a]))(2, CH2, {"我爷爷一辈子都在农村种地": "audio/e551f31afc6e.mp3", "外面太冷了我们进屋里去吧": "audio/1ebf327eecf5.mp3", "孩子一岁多就断奶了现在每天吃饭": "audio/f6c8fe43c422.mp3", "毕业以后我们就断了联系": "audio/cb790ccf5fe1.mp3", "她一辈子住在农村没去过大城市": "audio/f158d929bcd8.mp3", "父母一辈子都住在城市里": "audio/1c76316a02df.mp3", "M|因此长年以来父母很少离开老屋尽管姥姥舅舅和姑姑都在城里父母也坚决不在城里住": "audio/ff32f0219f5b.mp3", "搬到城里以来他很少回农村": "audio/1cb8ee350493.mp3", "一直以来她都很爱护这辆车": "audio/0f6a8ac6ec1b.mp3", "我姥姥一个人住在农村": "audio/51caa0bf5ca9.mp3", "周末我去舅舅家玩": "audio/ed9bc1a9781b.mp3", "尽管姥姥舅舅和姑姑都在城里父母也坚决不在城里住": "audio/d1d0ae322212.mp3", "坚决不同意": "audio/7cc5c368f7e7.mp3", "舅舅比我妈妈大三岁": "audio/3d7a40099f49.mp3", "学汉语以来我每天都听中文歌": "audio/b6f7ddcb38c5.mp3", "爸爸妈妈结婚三十年了还是很恩爱": "audio/7e5af35b2487.mp3", "外面太冷了我们进屋吧": "audio/ff37b938d423.mp3", "姑姑从来不抱怨农村的生活": "audio/615ef0f93139.mp3", "我爷爷一辈子都在农村种地从来没去过外国": "audio/5fcb428ec929.mp3", "这件事我会记住一辈子": "audio/16a5b07400fa.mp3", "我会记住你一辈子": "audio/badbdb4ebcd5.mp3", "我是在农村长大的小时候每天都跟爷爷去地里": "audio/8c0f269d96d3.mp3", "现在很多年轻人离开农村去城市工作": "audio/f0ebfea7c968.mp3", "在农村": "audio/a26adbc48123.mp3", "这间屋子不大可是很干净": "audio/d6eea706d5ce.mp3", "屋里很暖和外面很冷": "audio/fb1600aa0a32.mp3", "大学毕业以后我们就断了联系十年没见面了": "audio/ab4c7a482b75.mp3", "毕业以后我跟他断了联系": "audio/56fc79633178.mp3", "昨天晚上我们这儿断电了": "audio/53548736529d.mp3", "工作以来他很少回老家": "audio/b9347c936f83.mp3", "上大学以来我很少回家": "audio/3536acfd052c.mp3", "我妈妈的妈妈是我的姥姥": "audio/2551001bf684.mp3", "小时候我常常住在姥姥家": "audio/89037761ec6b.mp3", "我舅舅是我妈妈的弟弟今年三十岁": "audio/afcdf8de0d55.mp3", "舅舅家": "audio/8cc94e6a06c9.mp3", "爸爸有一个妹妹她是我的姑姑": "audio/470467b3df9f.mp3", "姑姑每年春节都回来看我们": "audio/57c9a7d7007d.mp3", "我姑姑是我爸爸的妹妹": "audio/54e0eb3137ac.mp3", "他的态度很坚决谁说也没用": "audio/204442304b4e.mp3", "他坚决反对这个计划": "audio/ab9290aa2f21.mp3", "妈妈坚决不同意我一个人去旅游": "audio/1e81840d968f.mp3", "M|一辈子": "audio/eabbeb3c299f.mp3", "MS|一辈子": "audio/7615c019467a.mp3", "M|我爷爷一辈子没离开过农村": "audio/1ec8add4bf81.mp3", "M|这件事我会记住一辈子": "audio/3a191b9b302b.mp3", "M|农村": "audio/66cfe9c2d9b7.mp3", "MS|农村": "audio/e8c9969343a6.mp3", "M|他在农村长大很熟悉农村的生活": "audio/362766802f93.mp3", "M|现在很多年轻人离开农村去城市工作": "audio/552aedac7dd8.mp3", "M|屋": "audio/fde13d04cf59.mp3", "MS|屋": "audio/0c3cbed9ff2e.mp3", "M|外面太冷了我们进屋吧": "audio/5afdcff6504a.mp3", "M|这间屋子不大可是很干净": "audio/857e7e505bf1.mp3", "M|断": "audio/e08d010b0691.mp3", "MS|断": "audio/6523f8dbc0c2.mp3", "M|大学毕业以后我们就断了联系": "audio/ce8a4c740345.mp3", "M|昨天晚上我们这儿断电了": "audio/789614e15879.mp3", "M|以来": "audio/58a076a96506.mp3", "MS|以来": "audio/0bf4cd85360f.mp3", "M|工作以来他很少回老家": "audio/5e4b992588ec.mp3", "M|一直以来她都很爱护这辆车": "audio/8aaadee7bf05.mp3", "M|姥姥": "audio/35d75c5c1067.mp3", "MS|姥姥": "audio/2f41e846dc77.mp3", "M|我姥姥今年八十岁了身体还很好": "audio/1ba4c7b248f9.mp3", "M|小时候我常常住在姥姥家": "audio/f49d8604f8ae.mp3", "M|舅舅": "audio/d433ce53bb8e.mp3", "MS|舅舅": "audio/5038ed79a887.mp3", "M|我舅舅是我妈妈的哥哥": "audio/4962fb9029df.mp3", "M|周末我们去舅舅家吃饭": "audio/95a0a6db93d5.mp3", "M|姑姑": "audio/0e225ce4ea75.mp3", "MS|姑姑": "audio/b615101f52b0.mp3", "M|我姑姑是我爸爸的妹妹": "audio/698e249810c5.mp3", "M|姑姑每年春节都回来看我们": "audio/8baab3a7145f.mp3", "M|坚决": "audio/c24079e512bd.mp3", "MS|坚决": "audio/ae9341ee0bf3.mp3", "M|他坚决反对这个计划": "audio/28502251a5d4.mp3", "M|我说了很多次她还是坚决不同意": "audio/e7c18f2cc356.mp3", "一辈子": "audio/f8a7e016d9e0.mp3", "农村": "audio/f7478d01dcb1.mp3", "老家": "audio/8078f6d1880b.mp3", "屋": "audio/e55080606f91.mp3", "感情": "audio/c851120d071f.mp3", "像": "audio/15876c3c09b8.mp3", "断奶": "audio/19c3fda80408.mp3", "母亲": "audio/50274b554e98.mp3", "一样": "audio/6c0a233c60d0.mp3", "种": "audio/c7cf5ec164a8.mp3", "岁": "audio/b1187f9a06fb.mp3", "吃": "audio/fd252d703291.mp3", "毕业": "audio/ddffeafb97d3.mp3", "断": "audio/9adf3bcbc228.mp3", "联系": "audio/3b0a12ad1828.mp3", "因此": "audio/0d9c665e983e.mp3", "长年": "audio/002e02ce2a32.mp3", "以来": "audio/eab425ab2724.mp3", "离开": "audio/820671e39dbf.mp3", "尽管": "audio/56f2c49f04a4.mp3", "姥姥": "audio/41a3edfe4b35.mp3", "舅舅": "audio/f63cccac7494.mp3", "姑姑": "audio/55cbd7fd6863.mp3", "城": "audio/354de14daeb3.mp3", "坚决": "audio/60f6f52d1355.mp3", "搬": "audio/8195f210b435.mp3", "回": "audio/57635deb7064.mp3", "辆": "audio/e10ae9c1f973.mp3", "周末": "audio/d5142a658f15.mp3", "玩": "audio/7f1fc740c425.mp3", "中文": "audio/c0b60a8ea6a4.mp3", "歌": "audio/feaa3f49f8c5.mp3", "国": "audio/1da5c62355e2.mp3", "件": "audio/d0324c16bf4a.mp3", "记": "audio/86e036edeb03.mp3", "候": "audio/7e322444cbeb.mp3", "年轻": "audio/d5f9c6af5d35.mp3", "间": "audio/51cf7f0cfd17.mp3", "屋子": "audio/acf9e282d03b.mp3", "干净": "audio/f4a312ad7597.mp3", "暖和": "audio/f9947da91ae2.mp3", "常常": "audio/4c74de1ddb0e.mp3", "弟弟": "audio/7ca48f07bbeb.mp3", "今": "audio/8d9ef6ae8af9.mp3", "妹妹": "audio/72ffb4b2ab82.mp3", "每": "audio/dbc6ddad9f3e.mp3", "春节": "audio/5fe030a2d578.mp3", "态度": "audio/2d87718ac63a.mp3", "反对": "audio/cda9bc177d6e.mp3", "旅游": "audio/a3887d22e8fd.mp3", "熟悉": "audio/9ee628a265f1.mp3", "八": "audio/aa757c76e2fc.mp3", "哥哥": "audio/aaafef034cf8.mp3", "房间": "audio/290c5f247d25.mp3", "外婆": "audio/d169b2373289.mp3", "叔叔": "audio/e5a85c5eabe8.mp3", "伯伯": "audio/ba058e447969.mp3", "舅妈": "audio/1de7bfd50ad7.mp3", "阿姨": "audio/b7d73eeb1259.mp3", "姨": "audio/b383cfecda14.mp3", "男": "audio/b6af977a0f1c.mp3", "改正": "audio/e750578199a6.mp3", "M|父母一辈子住在农村老家对老屋的感情就像没断奶的孩子对母亲一样": "audio/8185747aba17.mp3"});

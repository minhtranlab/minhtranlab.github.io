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

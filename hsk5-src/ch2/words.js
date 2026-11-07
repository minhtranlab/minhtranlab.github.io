/* ===== Bài 2: taught words (same shape as Bài 1 WORDS).  story: 1 = word beyond the HSK5 syllabus (HSK6), lower exam priority ===== */
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
      ex: ['他坚决反对这个计划。', '我说了很多次，她还是坚决不同意。'] },
    /* ---------- tập 3 ---------- */
    { id: '打工', ep: '2-3', vi: 'làm thuê, làm công', hv: 'đả công', facts: [
      'Động từ ly hợp: chen được vào giữa: <b>打了三年工</b>, 打过工. Đi với nơi chốn: <b>在饭馆打工</b>, 去城里打工.',
      'Làm thuê, làm công ăn lương (thường là việc tay chân, việc tạm). Sinh viên 打工 = đi làm thêm.',
      'Trong bài: <b>用打工挣的钱</b> = dùng tiền đi làm thuê kiếm được.'],
      ex: ['他大学的时候在饭馆打过工。', '他去城里打了三年工。'] },
    { id: '挣', ep: '2-3', vi: 'kiếm (tiền)', hv: 'tranh', facts: [
      'Hay đi với 钱: <b>挣钱</b> (kiếm tiền), 挣了不少钱, 挣得不多. <b>打工挣的钱</b> = tiền làm thuê kiếm được.',
      'Nhấn vào <b>bỏ sức ra làm</b> mới có tiền. Đọc thanh 4: zhèng.',
      'Chữ này còn nghĩa “giãy” (挣断 = giãy đứt), gặp ở Ôn tập.'],
      ex: ['他每个月挣的钱不多，可是很努力。', '她一边学习一边打工挣钱。'] },
    { id: '县', ep: '2-3', vi: 'huyện', hv: 'huyện', facts: [
      'Đơn vị hành chính dưới tỉnh, trên làng xã. <b>县里</b> = trên huyện, 县城 = thị trấn huyện lỵ.',
      'Trong bài: <b>在县里买了一套新房</b> = mua nhà mới trên huyện: gần quê hơn thành phố lớn.'],
      ex: ['从我们村到县里要坐一个小时的车。', '他在县里的一家医院工作。'] },
    { id: '套', ep: '2-3', vi: 'bộ, căn (lượng từ)', hv: 'sáo', facts: [
      'Lượng từ cho <b>một bộ</b> gồm nhiều thứ đi với nhau: <b>一套房子</b> (một căn nhà, nhiều phòng), 一套家具 (một bộ đồ gỗ), 一套西服 (một bộ com-lê), 一套邮票.',
      'Khác <b>一间</b>: 一间屋子 chỉ là một gian phòng; 一套房子 là cả căn.',
      'Trong bài: <b>买了一套新房</b> = mua một căn nhà mới.'],
      ex: ['这套家具是姥姥留给我们的。', '他结婚的时候买了一套新西服。'] },
    /* ---------- tập 4 ---------- */
    { id: '装修', ep: '2-4', vi: 'sửa sang, trang hoàng', hv: 'trang tu', facts: [
      'Sửa sang <b>bên trong</b> nhà, phòng, cửa hàng (sơn tường, lát sàn, làm bếp…): <b>装修房子</b>, 正在装修.',
      'Hay đi với kết quả: <b>装修完</b> (sửa xong, như trong bài), 装修好, 装修得很漂亮.',
      'Khác <b>修</b>: 修车, 修电脑 = sửa đồ bị hỏng.'],
      ex: ['我们的新房还在装修，下个月才能住。', '这家饭馆装修得很漂亮。'] },
    { id: '不得了', ep: '2-4', vi: 'cực kỳ, vô cùng', hv: 'bất đắc liễu', facts: [
      'Đứng sau <b>得</b> để nói mức độ rất cao: <b>高兴得不得了</b> (mừng vô cùng, như trong bài), 热得不得了, 累得不得了, 急得不得了, 热闹得不得了.',
      'Đứng riêng: <b>不得了了！</b> = Gay rồi! (có chuyện lớn).',
      'Pinyin: <b>bùdéliǎo</b>, chữ 了 ở đây đọc liǎo.'],
      ex: ['今天热得不得了，我们别出去了。', '听说儿子考上了大学，妈妈高兴得不得了。'] },
    { id: '串', ep: '2-4', story: 1, vi: 'xâu, chuỗi, chùm (lượng từ)', hv: 'xuyến', facts: [
      'Lượng từ cho những thứ <b>xâu thành chuỗi</b>: <b>一串钥匙</b> (một chùm chìa khoá), 一串葡萄 (một chùm nho), 羊肉串 (xiên thịt cừu nướng).',
      '<b>Story word</b> (từ HSK6): nhận ra mặt chữ và nghĩa là đủ.',
      'Tên bài: <b>留串钥匙给父母</b> = để lại (一)串钥匙 cho ba mẹ.'],
      ex: ['他手里拿着一串钥匙。', '妈妈买了一串葡萄。'] },
    /* ---------- tập 5 ---------- */
    { id: '醉', ep: '2-5', vi: 'say (rượu)', hv: 'tuý', facts: [
      'Thường làm kết quả sau 喝: <b>喝醉了</b> (uống say rồi, như trong bài). Chưa say: 没喝醉.',
      'Trái nghĩa: <b>醒</b> (tỉnh): 等他醒时 = đến lúc ông tỉnh.',
      'Nghĩa bóng: say mê, làm say lòng (醉人).'],
      ex: ['他昨天晚上喝醉了，今天头很疼。', '我从来没喝醉过。'] },
    { id: '强烈', ep: '2-5', vi: 'mãnh liệt; hết mức', hv: 'cường liệt', facts: [
      'Mức độ <b>rất mạnh</b>: <b>强烈的阳光</b> (nắng gắt), 强烈的感情, <b>强烈的对比</b> (tương phản rõ rệt: 对比 của Bài 1).',
      'Đứng trước động từ: <b>强烈要求</b>, 强烈反对 (hết sức…, kịch liệt…). Trong bài: <b>强烈留父母</b> = hết lời giữ ba mẹ lại.'],
      ex: ['夏天中午的阳光很强烈。', '大家强烈要求他留下来。'] },
    { id: '夜', ep: '2-5', vi: 'ban đêm', hv: 'dạ', facts: [
      '<b>一夜</b> = một đêm: <b>住一夜</b> (ở lại một đêm, như trong bài). <b>夜里</b> = trong đêm, <b>半夜</b> = nửa đêm (Bài 1).',
      'Văn viết hơn 晚上. 晚上 thường tính từ chập tối; 夜里 là đêm khuya.'],
      ex: ['我们在姑姑家住了一夜。', '昨天夜里下了很大的雨。'] }
  ];
  CH2.EP_META = {
    '2-1': { title: 'Tập 1 · Cả đời ở quê', sub: 'Bạn gặp 4 từ: 一辈子, 农村, 屋, 断', book: 'Mở sách, đọc câu đầu tiên của Bài 2. Bạn sẽ thấy 一辈子, 农村, 屋, 断 nằm trong đó.' },
    '2-2': { title: 'Tập 2 · Ba mẹ không chịu lên phố', sub: 'Bạn gặp 5 từ: 以来, 姥姥, 舅舅, 姑姑, 坚决', book: 'Đọc câu thứ hai của bài. 以来, 姥姥, 舅舅, 姑姑, 坚决 đều ở đó.' },
    '2-3': { title: 'Tập 3 · Căn nhà mới trên huyện', sub: 'Bạn gặp 4 từ: 打工, 挣, 县, 套', book: 'Đọc câu bắt đầu bằng “去年” ở đoạn thứ hai.' },
    '2-4': { title: 'Tập 4 · Chùm chìa khoá bị từ chối', sub: 'Bạn gặp 3 từ: 装修, 不得了, 串', book: 'Đọc hai câu sau đó, tới “可他们拒绝了”.' },
    '2-5': { title: 'Tập 5 · Say rồi vẫn đòi về', sub: 'Bạn gặp 3 từ: 醉, 强烈, 夜', book: 'Đọc hai câu cuối của đoạn thứ hai.' }
  };
})();

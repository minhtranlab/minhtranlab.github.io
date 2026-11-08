/* HSK5 Bài 2: built by build.py from hsk5-src/ch2/ — do not edit */
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
      'Đơn vị hành chính dưới tỉnh (thường thuộc một thành phố cấp địa khu), trên xã/thị trấn. <b>县里</b> = trên huyện, 县城 = thị trấn huyện lỵ.',
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
      ex: ['我们在姑姑家住了一夜。', '昨天夜里下了很大的雨。'] },
    /* ---------- tập 6 ---------- */
    { id: '锁', ep: '2-6', vi: 'cái khoá; khoá', hv: 'toả', facts: [
      'Danh từ: <b>一把锁</b> (một ổ khoá). Động từ: <b>锁门</b> (khoá cửa), 锁上 (khoá lại).',
      '<b>上锁</b> = khoá vào (động từ + tân ngữ). Trong bài: 新房只能<b>上锁</b>空着 = nhà mới đành khoá cửa để trống.',
      'Đừng nhầm: <b>锁</b> = ổ khoá; <b>钥匙</b> = chìa khoá.'],
      ex: ['出门的时候别忘了锁门。', '这把锁坏了，钥匙打不开。'] },
    { id: '临', ep: '2-6', vi: 'sắp, gần (lúc)', hv: 'lâm', facts: [
      '<b>临 + động từ (+ 时 / 前 / 那天)</b> = lúc sắp…: <b>临走那天</b> (hôm sắp đi, như trong bài), 临睡前 (trước lúc ngủ), 临出门的时候.',
      'Còn là động từ “kề, sát”: <b>临街</b> (giáp đường), 临江 (sát sông).',
      'Hán Việt “lâm” như “lâm chung”, “lâm nguy”, “lâm bồn”: sắp tới lúc…'],
      ex: ['临睡前，她总是给姥姥打个电话。', '这家饭馆临街，有点儿吵。'] },
    /* ---------- tập 7 ---------- */
    { id: '悄悄', ep: '2-7', vi: 'lặng lẽ, nhẹ nhàng', hv: 'tiễu tiễu', facts: [
      'Phó từ, đứng trước động từ, hay có 地: <b>悄悄(地)走了</b>; trong bài: <b>悄悄把我拉到一边</b>.',
      'Nhấn mạnh <b>tiếng nhỏ</b>, khẽ khàng, không để ai nghe thấy.',
      'So với <b>偷偷</b> (tōutōu, lén lút): 偷偷 nhấn mạnh việc làm <b>không muốn ai biết</b>.'],
      ex: ['孩子睡着了，妈妈悄悄地走出了房间。', '他悄悄告诉我一个好消息。'] },
    { id: '晒', ep: '2-7', vi: 'phơi', hv: 'sái', facts: [
      '<b>晒被子</b> (phơi chăn), 晒衣服 (phơi quần áo), <b>晒太阳</b> (sưởi nắng).',
      'Lặp lại: <b>晒晒</b> = phơi một chút (trong bài: 晒晒被子).',
      '晒黑了 = bị nắng làm đen da.'],
      ex: ['今天天气好，我们晒晒被子吧。', '姥姥喜欢坐在门口晒太阳。'] },
    { id: '被子', ep: '2-7', vi: 'mền, chăn', hv: 'bị tử', facts: [
      'Lượng từ: 一条被子, 一床被子. <b>盖被子</b> = đắp chăn; <b>晒被子</b> = phơi chăn.',
      'Chữ 被 còn là giới từ bị động (“bị”) đã học ở HSK3: 我的手机被弟弟拿走了.'],
      ex: ['天冷了，晚上多盖一条被子。', '这条被子是姥姥给我的。'] },
    /* ---------- tập 8 ---------- */
    { id: '长途', ep: '2-8', vi: 'đường dài', hv: 'trường đồ', facts: [
      'Đứng trước danh từ: <b>长途汽车 / 长途车</b> (xe khách đường dài), 长途旅行, 长途电话.',
      'Không nói “很长途”; muốn nói đường xa thì nói 路很远.',
      'Trong bài: <b>下了长途车</b> = xuống xe đường dài.'],
      ex: ['坐了十个小时的长途汽车，大家都很累。', '这是一次长途旅行，要带的东西很多。'] },
    { id: '冻', ep: '2-8', vi: 'bị cóng, rét; đông (đá)', hv: 'đống', facts: [
      'Rét tới mức người bị ảnh hưởng: <b>冻得 + kết quả</b>: 冻得大哭 (rét tới khóc ré, như trong bài), 手冻红了 (tay rét đỏ lên).',
      'Hay đi với 被: <b>被冻得…</b> = bị rét đến mức…',
      'Còn nghĩa “đông lại”: 水冻成了冰 (nước đông thành băng).'],
      ex: ['外面太冷了，我的手都冻红了。', '别在外面站着，小心冻着。'] },
    { id: '想象', ep: '2-8', vi: 'tưởng tượng', hv: 'tưởng tượng', facts: [
      '<b>想象 + cảnh / chuyện</b>: 想象着…的景象 (đang tưởng tượng cảnh…, như trong bài), <b>想象一下</b> (thử tưởng tượng).',
      '<b>想象不到</b> = không tưởng tượng nổi; <b>很难想象</b> = khó mà tưởng tượng.',
      'Khác 想 (nghĩ, nhớ): 想象 là hình dung ra trong đầu một cảnh chưa thấy.'],
      ex: ['我很难想象姥姥一个人住在农村。', '你想象一下十年以后的自己。'] },
    { id: '灰尘', ep: '2-8', vi: 'bụi bặm', hv: 'hôi trần', facts: [
      '<b>满是灰尘</b> = đầy bụi (như trong bài), 有很多灰尘, 都是灰尘.',
      'Lâu không ai ở, không ai dọn thì bụi bám đầy; <b>打扫</b> (quét dọn) cho hết bụi.'],
      ex: ['很久没人住，桌子上都是灰尘。', '打扫一下吧，屋子里灰尘太多了。'] },
    /* ---------- tập 9 ---------- */
    { id: '亮', ep: '2-9', vi: 'sáng; toả sáng', hv: 'lượng', facts: [
      'Tính từ: <b>很亮</b>, <b>天亮了</b> (trời sáng rồi). Trái nghĩa: 暗 (tối), như 暗暗 của Bài 1.',
      'Động từ: <b>亮着灯</b> = đèn đang sáng. Trong bài: <b>自家亮着灯光</b> = nhà mình đang sáng đèn.'],
      ex: ['天还没亮，爸爸就起床了。', '这么晚了，他的房间还亮着灯。'] },
    { id: '微笑', ep: '2-9', vi: 'mỉm cười; nụ cười', hv: 'vi tiếu', facts: [
      'Động từ: <b>对我微笑</b>, <b>微笑着</b> (đang mỉm cười). Trong bài: <b>微笑着的父母</b> = ba mẹ đang mỉm cười.',
      'Danh từ: 她的微笑 (nụ cười của cô ấy).',
      'Khác 大笑 (cười lớn): 微 = nhỏ, nhẹ.'],
      ex: ['她微笑着对我说：“欢迎回家。”', '她总是微笑着跟客人说话。'] },
    { id: '温暖', ep: '2-9', vi: 'ấm áp; sưởi ấm', hv: 'ôn noãn', facts: [
      'Tính từ cho cả thời tiết lẫn tình cảm: 温暖的阳光, <b>温暖的家</b>, <b>家的温暖</b> (hơi ấm gia đình, câu cuối bài).',
      'Động từ: 温暖了我的心 (sưởi ấm lòng mình).',
      'Khác <b>暖和</b>: 暖和 chủ yếu nói thời tiết, đồ vật (天气很暖和); cảm giác ấm trong lòng thì dùng 温暖.'],
      ex: ['春天来了，天气越来越温暖。', '朋友的一句话温暖了我的心。'] },
    { id: '立刻', ep: '2-9', vi: 'lập tức', hv: 'lập khắc', facts: [
      'Phó từ, <b>立刻 + động từ</b>: việc sau nối ngay việc trước. Hay gặp: <b>一…就立刻…</b>, …了，立刻….',
      'Gần nghĩa <b>马上</b> (HSK3). 立刻 nhấn “ngay tức khắc”, hay gặp trong văn kể chuyện; 马上 còn có nghĩa “sắp” (马上就要…了).',
      'Trong bài: <b>温暖的气息立刻扑面而来</b>.'],
      ex: ['听到电话，他立刻跑了出去。', '姥姥一看到我，立刻笑了。'] },
    { id: '扑', ep: '2-9', story: 1, vi: 'bổ nhào; (mùi, hơi) phả vào', hv: 'phác', facts: [
      'Lao, vồ tới: <b>扑过来</b> (lao tới), 扑到妈妈身上.',
      '<b>扑面而来</b> = phả thẳng vào mặt (hơi ấm, mùi thơm, gió), như trong bài.',
      '<b>Story word</b> (từ HSK6): nhận ra mặt chữ và nghĩa là đủ.'],
      ex: ['小狗一看见我，就扑了过来。', '一出门，冷风就扑面而来。'] },
    /* ---------- tập 10 ---------- */
    { id: '卧室', ep: '2-10', vi: 'phòng ngủ', hv: 'ngoạ thất', facts: [
      '卧 = nằm, 室 = phòng: <b>phòng để nằm</b>. Các phòng khác: 客厅 (phòng khách), 厨房 (bếp).',
      '一套房子有两个卧室 = căn nhà có hai phòng ngủ. Trong bài: <b>卧室床上的被子</b>.'],
      ex: ['这套房子有三个卧室和一个客厅。', '卧室里有一张大床。'] },
    { id: '铺', ep: '2-10', story: 1, vi: 'trải', hv: 'phô', facts: [
      '<b>铺床</b> (trải giường), <b>把被子铺好</b> (trải chăn sẵn; trong bài: 被子已铺好), 铺路 (lát đường).',
      '<b>Story word</b> (từ HSK6): nhận ra mặt chữ và nghĩa là đủ.',
      '<b>Bẫy cùng âm pū</b>: 扑 (bộ 扌 tay: vồ, phả vào) ≠ 铺 (bộ 钅 kim: trải).'],
      ex: ['妈妈已经把床铺好了。', '姥姥把被子铺在床上。'] },
    { id: '飘', ep: '2-10', vi: 'thoảng đưa, bay phấp phới', hv: 'phiêu', facts: [
      'Vật nhẹ bay trong gió, trong không khí: <b>飘着雪</b> (tuyết đang bay), 树叶飘下来 (lá rơi lả tả).',
      'Mùi hương <b>飘来</b> = thoảng tới. Trong bài: <b>厨房里飘来阵阵饭菜香</b>.'],
      ex: ['窗外飘着雪，屋里很暖和。', '从厨房里飘来了饭菜的香味。'] },
    { id: '阵', ep: '2-10', vi: 'trận, cơn, đợt (lượng từ)', hv: 'trận', facts: [
      'Lượng từ cho việc <b>xảy ra một lúc rồi qua</b>: <b>一阵风</b> (một cơn gió), 一阵雨, 一阵歌声, <b>一阵香味</b>.',
      'Lặp: <b>阵阵</b> = từng đợt, từng cơn (trong bài: 阵阵饭菜香). <b>一阵子</b> = một dạo.'],
      ex: ['刚才下了一阵雨，现在天晴了。', '一阵风吹过来，我觉得有点儿冷。'] },
    /* ---------- tập 11 ---------- */
    { id: '感受', ep: '2-11', vi: 'cảm nhận; sự cảm nhận', hv: 'cảm thụ', facts: [
      'Động từ: <b>感受到 + danh từ</b> = cảm nhận được: <b>感受到家的温暖</b> (trong bài), 感受到爱.',
      'Danh từ: <b>你的感受</b> (cảm nhận của bạn), 说说感受.',
      'Khác <b>感觉</b> (HSK4): 感觉 thiên về giác quan (感觉很冷); 感受 thiên về trải nghiệm trong lòng.'],
      ex: ['来到这里，我感受到了大家的热情。', '说说你现在的感受吧。'] },
    { id: '流泪', ep: '2-11', vi: 'chảy nước mắt', hv: 'lưu lệ', facts: [
      'Động từ ly hợp, tách ra được: <b>流下了热泪</b> (trào nước mắt nóng, như trong bài), 流下了眼泪.',
      'Khác <b>哭</b> (khóc, thường có tiếng): 流泪 có thể lặng lẽ; vui hay xúc động cũng 流泪.'],
      ex: ['看到这封信，妈妈流泪了。', '听完他的话，大家都流下了眼泪。'] }
  ];
  CH2.EP_META = {
    '2-1': { title: 'Tập 1 · Cả đời ở quê', sub: 'Bạn gặp 4 từ: 一辈子, 农村, 屋, 断', book: 'Mở sách, đọc câu đầu tiên của Bài 2. Bạn sẽ thấy 一辈子, 农村, 屋, 断 nằm trong đó.' },
    '2-2': { title: 'Tập 2 · Ba mẹ không chịu lên phố', sub: 'Bạn gặp 5 từ: 以来, 姥姥, 舅舅, 姑姑, 坚决', book: 'Đọc câu thứ hai của bài. 以来, 姥姥, 舅舅, 姑姑, 坚决 đều ở đó.' },
    '2-3': { title: 'Tập 3 · Căn nhà mới trên huyện', sub: 'Bạn gặp 4 từ: 打工, 挣, 县, 套', book: 'Đọc câu bắt đầu bằng “去年” ở đoạn thứ hai.' },
    '2-4': { title: 'Tập 4 · Chùm chìa khoá bị từ chối', sub: 'Bạn gặp 3 từ: 装修, 不得了, 串', book: 'Đọc hai câu sau đó, tới “可他们拒绝了”.' },
    '2-5': { title: 'Tập 5 · Say rồi vẫn đòi về', sub: 'Bạn gặp 3 từ: 醉, 强烈, 夜', book: 'Đọc hai câu cuối của đoạn thứ hai.' },
    '2-6': { title: 'Tập 6 · Khoá cửa đi làm xa', sub: 'Bạn gặp 2 từ: 锁, 临 và bài học về 临', book: 'Đọc hai câu đầu của đoạn thứ ba.' },
    '2-7': { title: 'Tập 7 · Ba lặng lẽ xin chìa khoá', sub: 'Bạn gặp 3 từ: 悄悄, 晒, 被子', book: 'Đọc lời của ba và câu cuối của đoạn thứ ba.' },
    '2-8': { title: 'Tập 8 · Đêm đông trở về', sub: 'Bạn gặp 4 từ: 长途, 冻, 想象, 灰尘', book: 'Đọc ba câu đầu của đoạn thứ tư.' },
    '2-9': { title: 'Tập 9 · Nhà mình đang sáng đèn', sub: 'Bạn gặp 5 từ: 亮, 微笑, 温暖, 立刻, 扑 và bài học về 立刻', book: 'Đọc tiếp tới dấu hai chấm sau “扑面而来”.' },
    '2-10': { title: 'Tập 10 · Căn nhà ấm sẵn', sub: 'Bạn gặp 4 từ: 卧室, 铺, 飘, 阵', book: 'Đọc phần cuối đoạn thứ tư, sau dấu hai chấm.' },
    '2-11': { title: 'Tập 11 · Vì sao ba mẹ cần chìa khoá', sub: 'Bạn gặp 2 từ: 感受, 流泪', book: 'Đọc đoạn cuối của bài.' }
  };
})();

/* ===== Bài 2: word cards (Vietnamese of the examples) + one listening item per word.
   hear: opts[0] is right; all 3 options share the keywords you can hear and differ in ONE detail;
   whyNot[i] says which detail rules option i out (whyNot[0] is empty). ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.LEARN = {
    '一辈子': { exv: ['Ông nội mình cả đời chưa từng rời khỏi nông thôn.', 'Chuyện này mình sẽ nhớ suốt đời.'],
      hear: { s: '她一辈子住在农村，没去过大城市。', opts: ['Cả đời bà ấy sống ở nông thôn, chưa từng đến thành phố lớn.', 'Cả đời bà ấy sống ở thành phố lớn, chưa từng về nông thôn.', 'Cả đời bà ấy sống ở nông thôn, đã từng đến thành phố lớn.'],
        why: '<b>一辈子</b> = cả đời. <b>住在农村</b> = sống ở nông thôn. <b>没去过</b> = chưa từng đến.',
        whyNot: ['', 'Đảo chỗ rồi: 住在农村 (sống ở nông thôn), 没去过大城市 (chưa đến thành phố lớn).', '没去过 = chưa từng đến (có 没), không phải đã từng.'] } },
    '农村': { exv: ['Anh ấy lớn lên ở nông thôn, rất quen với cuộc sống nông thôn.', 'Bây giờ nhiều người trẻ rời nông thôn lên thành phố làm việc.'],
      hear: { s: '现在很多年轻人离开农村，去城市工作。', opts: ['Bây giờ nhiều người trẻ rời nông thôn lên thành phố làm việc.', 'Bây giờ nhiều người trẻ rời thành phố về nông thôn làm việc.', 'Bây giờ ít người trẻ rời nông thôn lên thành phố làm việc.'],
        why: '<b>离开农村</b> = rời nông thôn. <b>去城市工作</b> = lên thành phố làm việc. <b>很多</b> = nhiều.',
        whyNot: ['', 'Ngược hướng: câu nói 离开农村 (rời nông thôn) rồi 去城市 (đến thành phố).', '很多 = nhiều, không phải ít.'] } },
    '屋': { exv: ['Ngoài trời lạnh quá, mình vào nhà đi.', 'Căn phòng này không lớn nhưng rất sạch.'],
      hear: { s: '屋里很暖和，外面很冷。', opts: ['Trong nhà rất ấm, ngoài trời rất lạnh.', 'Trong nhà rất lạnh, ngoài trời rất ấm.', 'Trong nhà rất ấm, ngoài trời cũng ấm.'],
        why: '<b>屋里</b> = trong nhà, trong phòng. <b>暖和</b> = ấm áp. <b>外面</b> = bên ngoài. Nghe kỹ chữ nào đi với nơi nào.',
        whyNot: ['', 'Ngược rồi: 屋里 đi với 暖和 (ấm), 外面 đi với 冷 (lạnh).', 'Vế sau là 外面很冷: ngoài trời lạnh.'] } },
    '断': { exv: ['Tốt nghiệp đại học xong là tụi mình mất liên lạc.', 'Tối qua chỗ tụi mình bị cúp điện.'],
      hear: { s: '毕业以后，我跟他断了联系。', opts: ['Sau khi tốt nghiệp, mình mất liên lạc với anh ấy.', 'Sau khi tốt nghiệp, mình suýt mất liên lạc với anh ấy.', 'Trước khi tốt nghiệp, mình đã mất liên lạc với anh ấy.'],
        why: '<b>断了联系</b> = mất liên lạc (sợi dây liên lạc bị đứt). <b>毕业以后</b> = sau khi tốt nghiệp.',
        whyNot: ['', '断了联系 = đã mất liên lạc thật, không phải chỉ suýt.', '以后 = sau khi, không phải trước khi.'] } },
    '以来': { exv: ['Từ khi đi làm tới giờ, anh ấy hiếm khi về quê.', 'Từ trước tới nay, cô ấy luôn rất giữ gìn chiếc xe này.'],
      hear: { s: '上大学以来，我很少回家。', opts: ['Từ khi vào đại học đến nay, mình rất ít về nhà.', 'Từ khi vào đại học đến nay, mình về nhà rất thường xuyên.', 'Từ khi vào đại học đến nay, mình chưa về nhà lần nào.'],
        why: '<b>上大学以来</b> = từ khi vào đại học đến nay. <b>很少</b> = rất ít, hiếm khi.',
        whyNot: ['', '很少 = rất ít, hiếm khi; không phải thường xuyên.', '很少回家 = rất ít về, nhưng vẫn có về; không phải chưa về lần nào.'] } },
    '姥姥': { exv: ['Bà ngoại mình năm nay tám mươi tuổi, sức khoẻ vẫn rất tốt.', 'Hồi nhỏ mình hay ở nhà bà ngoại.'],
      hear: { s: '我姥姥一个人住在农村。', opts: ['Bà ngoại mình sống một mình ở nông thôn.', 'Bà ngoại mình một mình về nông thôn.', 'Bà ngoại mình sống với cậu ở nông thôn.'],
        why: '<b>姥姥</b> = bà ngoại. <b>一个人</b> = một mình.',
        whyNot: ['', '住在 = sống ở (lâu dài), không phải về (回).', '一个人 = một mình; câu không nhắc tới cậu.'] } },
    '舅舅': { exv: ['Cậu mình là anh trai của mẹ mình.', 'Cuối tuần nhà mình sang nhà cậu ăn cơm.'],
      hear: { s: '舅舅比我妈妈大三岁。', opts: ['Cậu lớn hơn mẹ mình ba tuổi.', 'Cậu lớn hơn mình ba tuổi.', 'Cậu nhỏ hơn mẹ mình ba tuổi.'],
        why: '<b>A 比 B 大 + số tuổi</b> = A lớn hơn B mấy tuổi. 舅舅 đi với 妈妈: cậu là anh/em trai của mẹ.',
        whyNot: ['', '比我妈妈 = so với mẹ mình, không phải so với mình.', '比我妈妈大 = lớn hơn mẹ. Nhỏ hơn thì nói 小.'] } },
    '姑姑': { exv: ['Cô mình là em gái của ba mình.', 'Tết năm nào cô cũng về thăm nhà mình.'],
      hear: { s: '姑姑每年春节都回来看我们。', opts: ['Tết năm nào cô cũng về thăm nhà mình.', 'Tết năm nào nhà mình cũng về thăm cô.', 'Tết năm nay cô không về thăm nhà mình.'],
        why: '<b>每年…都</b> = năm nào cũng. <b>回来看我们</b> = về thăm nhà mình.',
        whyNot: ['', '姑姑回来看我们 = cô về thăm nhà mình, không phải nhà mình đi thăm cô.', '每年…都 = năm nào cũng, và câu không có 不.'] } },
    '坚决': { exv: ['Anh ấy kiên quyết phản đối kế hoạch này.', 'Mình nói bao nhiêu lần, cô ấy vẫn nhất quyết không đồng ý.'],
      hear: { s: '妈妈坚决不同意我一个人去旅游。', opts: ['Mẹ nhất quyết không đồng ý cho mình đi du lịch một mình.', 'Mình nhất quyết không đồng ý cho mẹ đi du lịch một mình.', 'Mẹ nhất quyết không đồng ý cho mình đi du lịch với bạn.'],
        why: '<b>坚决不 + động từ</b> = nhất quyết không… <b>一个人</b> = một mình.',
        whyNot: ['', '妈妈坚决不同意我… = mẹ không đồng ý cho mình, không phải ngược lại.', '一个人 = một mình, không phải đi với bạn.'] } },
    /* ---------- tập 3 ---------- */
    '打工': { exv: ['Hồi đại học anh ấy từng làm thêm ở quán ăn.', 'Anh ấy lên thành phố làm thuê ba năm.'],
      hear: { s: '他在饭馆打了两年工。', opts: ['Anh ấy làm thuê ở quán ăn hai năm.', 'Anh ấy làm thuê ở quán ăn hai tháng.', 'Anh ấy làm thuê ở khách sạn hai năm.'],
        why: '<b>打了两年工</b>: 打工 tách ra, chen 了两年 vào giữa = làm thuê hai năm.',
        whyNot: ['', '两年 = hai năm, không phải hai tháng.', '饭馆 = quán ăn, không phải khách sạn.'] } },
    '挣': { exv: ['Mỗi tháng anh ấy kiếm không nhiều tiền, nhưng rất chịu khó.', 'Cô ấy vừa học vừa đi làm thêm kiếm tiền.'],
      hear: { s: '他打工挣的钱都给了父母。', opts: ['Tiền anh ấy làm thuê kiếm được đều đưa cho ba mẹ.', 'Tiền ba mẹ làm thuê kiếm được đều đưa cho anh ấy.', 'Tiền anh ấy làm thuê kiếm được đều để mua nhà.'],
        why: '<b>打工挣的钱</b> = tiền làm thuê kiếm được. <b>给了父母</b> = đưa cho ba mẹ.',
        whyNot: ['', 'Người kiếm tiền là 他 (anh ấy); người nhận là 父母.', '给了父母 = đưa cho ba mẹ; câu không nói chuyện mua nhà.'] } },
    '县': { exv: ['Từ làng mình lên huyện phải đi xe một tiếng.', 'Anh ấy làm ở một bệnh viện trên huyện.'],
      hear: { s: '从农村到县里，坐车要一个小时。', opts: ['Từ nông thôn lên huyện, đi xe mất một tiếng.', 'Từ nông thôn lên huyện, đi bộ mất một tiếng.', 'Từ nông thôn lên huyện, đi xe mất nửa tiếng.'],
        why: '<b>从…到县里</b> = từ … lên huyện. <b>坐车</b> = đi xe. <b>一个小时</b> = một tiếng.',
        whyNot: ['', '坐车 = đi xe, không phải đi bộ.', '一个小时 = một tiếng, không phải nửa tiếng.'] } },
    '套': { exv: ['Bộ đồ gỗ này là bà ngoại để lại cho nhà mình.', 'Lúc cưới anh ấy mua một bộ com-lê mới.'],
      hear: { s: '他们在县里买了一套新房子。', opts: ['Họ mua một căn nhà mới trên huyện.', 'Họ thuê một căn nhà mới trên huyện.', 'Họ mua một căn nhà mới ở thành phố.'],
        why: '<b>一套房子</b> = một căn nhà. <b>在县里</b> = trên huyện.',
        whyNot: ['', '买 = mua, không phải thuê.', '县里 = trên huyện, không phải thành phố.'] } },
    /* ---------- tập 4 ---------- */
    '装修': { exv: ['Nhà mới của tụi mình vẫn đang sửa, tháng sau mới ở được.', 'Quán ăn này trang trí rất đẹp.'],
      hear: { s: '新房还没装修完，我们下个月再搬。', opts: ['Nhà mới chưa sửa xong, tháng sau tụi mình mới dọn vào.', 'Nhà mới sửa xong rồi, tháng sau tụi mình dọn vào.', 'Nhà mới chưa sửa xong, tuần sau tụi mình mới dọn vào.'],
        why: '<b>还没装修完</b> = vẫn chưa sửa xong. <b>下个月</b> = tháng sau. <b>搬</b> = dọn (nhà).',
        whyNot: ['', '还没装修完 = vẫn CHƯA sửa xong.', '下个月 = tháng sau, không phải tuần sau.'] } },
    '不得了': { exv: ['Hôm nay nóng kinh khủng, mình đừng ra ngoài.', 'Nghe tin con trai đậu đại học, mẹ mừng vô cùng.'],
      hear: { s: '听到这个消息，她高兴得不得了。', opts: ['Nghe tin này, cô ấy mừng vô cùng.', 'Nghe tin này, cô ấy buồn vô cùng.', 'Nghe tin này, mình mừng vô cùng.'],
        why: '<b>高兴得不得了</b> = mừng vô cùng: 不得了 đứng sau 得 nói mức độ rất cao.',
        whyNot: ['', '高兴 = mừng, vui; không phải buồn.', '她 = cô ấy; người mừng là cô ấy, không phải mình.'] } },
    '串': { exv: ['Anh ấy cầm một chùm chìa khoá trong tay.', 'Mẹ mua một chùm nho.'],
      hear: { s: '我把一串钥匙给了姥姥。', opts: ['Mình đưa cho bà ngoại một chùm chìa khoá.', 'Bà ngoại đưa cho mình một chùm chìa khoá.', 'Mình làm mất một chùm chìa khoá của bà ngoại.'],
        why: '<b>一串钥匙</b> = một chùm chìa khoá. <b>我把…给了姥姥</b> = mình đưa … cho bà ngoại.',
        whyNot: ['', '我把…给了姥姥: mình là người đưa, bà ngoại là người nhận.', '给了姥姥 = đưa cho bà ngoại, không phải làm mất.'] } },
    /* ---------- tập 5 ---------- */
    '醉': { exv: ['Tối qua anh ấy uống say, hôm nay đau đầu lắm.', 'Mình chưa từng uống say.'],
      hear: { s: '爸爸没喝醉，他只喝了一杯。', opts: ['Ba không say, ba chỉ uống một ly.', 'Ba say rồi, ba chỉ uống một ly.', 'Ba không say, ba uống ba ly.'],
        why: '<b>没喝醉</b> = không say (chưa say). <b>只喝了一杯</b> = chỉ uống một ly.',
        whyNot: ['', '没喝醉 = KHÔNG say: có chữ 没.', '一杯 = một ly, không phải ba ly.'] } },
    '强烈': { exv: ['Nắng trưa mùa hè rất gắt.', 'Mọi người hết lời yêu cầu anh ấy ở lại.'],
      hear: { s: '他强烈要求父母住在城里。', opts: ['Anh ấy hết lời đòi ba mẹ ở thành phố.', 'Ba mẹ hết lời đòi anh ấy ở thành phố.', 'Anh ấy hết lời đòi ba mẹ ở nông thôn.'],
        why: '<b>强烈要求</b> = hết sức yêu cầu, đòi bằng được. <b>住在城里</b> = ở thành phố.',
        whyNot: ['', 'Người đòi là 他 (anh ấy), người bị đòi là 父母.', '住在城里 = ở thành phố, không phải nông thôn.'] } },
    '夜': { exv: ['Tụi mình ở lại nhà cô một đêm.', 'Đêm qua mưa rất to.'],
      hear: { s: '他们在县里住了一夜，第二天就回去了。', opts: ['Họ ở lại trên huyện một đêm, hôm sau là về.', 'Họ ở lại trên huyện hai đêm, rồi mới về.', 'Họ ở lại nông thôn một đêm, hôm sau là về.'],
        why: '<b>住了一夜</b> = ở lại một đêm. <b>第二天就回去了</b> = hôm sau là về.',
        whyNot: ['', '一夜 = một đêm; 第二天就回去了 = ngay hôm sau đã về.', '县里 = trên huyện, không phải nông thôn.'] } },
    /* ---------- tập 6 ---------- */
    '锁': { exv: ['Lúc ra khỏi nhà đừng quên khoá cửa.', 'Ổ khoá này hỏng rồi, chìa mở không được.'],
      hear: { s: '他出门的时候忘了锁门。', opts: ['Lúc ra khỏi nhà anh ấy quên khoá cửa.', 'Lúc ra khỏi nhà anh ấy nhớ khoá cửa.', 'Lúc về nhà anh ấy quên khoá cửa.'],
        why: '<b>忘了锁门</b> = quên khoá cửa. <b>出门</b> = ra khỏi nhà.',
        whyNot: ['', '忘了 = quên, không phải nhớ.', '出门 = ra khỏi nhà, không phải về nhà.'] } },
    '临': { exv: ['Trước lúc ngủ, cô ấy luôn gọi điện cho bà ngoại.', 'Quán ăn này sát đường, hơi ồn.'],
      hear: { s: '临出门的时候，妈妈让我带上钥匙。', opts: ['Lúc sắp ra khỏi nhà, mẹ bảo mình mang theo chìa khoá.', 'Lúc sắp ra khỏi nhà, mình bảo mẹ mang theo chìa khoá.', 'Lúc sắp ra khỏi nhà, mẹ bảo mình để chìa khoá ở nhà.'],
        why: '<b>临出门的时候</b> = lúc sắp ra khỏi nhà. <b>带上钥匙</b> = mang theo chìa khoá.',
        whyNot: ['', '妈妈让我… = mẹ bảo mình, không phải mình bảo mẹ.', '带上 = mang theo, không phải để ở nhà.'] } },
    /* ---------- tập 7 ---------- */
    '悄悄': { exv: ['Bé ngủ rồi, mẹ khẽ khàng đi ra khỏi phòng.', 'Anh ấy khẽ nói với mình một tin vui.'],
      hear: { s: '他悄悄告诉我，明天是姑姑的生日。', opts: ['Anh ấy khẽ nói với mình: mai là sinh nhật cô.', 'Anh ấy khẽ nói với mình: hôm nay là sinh nhật cô.', 'Mình khẽ nói với anh ấy: mai là sinh nhật cô.'],
        why: '<b>悄悄告诉我</b> = nói khẽ với mình. <b>姑姑</b> = cô.',
        whyNot: ['', '明天 = ngày mai, không phải hôm nay.', '他悄悄告诉我 = anh ấy nói với mình, không phải mình nói với anh ấy.'] } },
    '晒': { exv: ['Hôm nay trời đẹp, mình phơi chăn đi.', 'Bà ngoại thích ngồi trước cửa sưởi nắng.'],
      hear: { s: '今天太阳很好，我把被子拿出去晒了。', opts: ['Hôm nay nắng đẹp, mình mang chăn ra phơi rồi.', 'Hôm nay nắng đẹp, mình định mang chăn ra phơi.', 'Hôm qua nắng đẹp, mình mang chăn ra phơi rồi.'],
        why: '<b>把被子拿出去晒</b> = mang chăn ra ngoài phơi.',
        whyNot: ['', '晒了 = đã phơi rồi (có 了), không phải mới định phơi.', '今天 = hôm nay, không phải hôm qua.'] } },
    '被子': { exv: ['Trời lạnh rồi, tối đắp thêm một cái chăn.', 'Cái chăn này là bà ngoại cho mình.'],
      hear: { s: '天冷了，姥姥给我拿来一条厚被子。', opts: ['Trời lạnh, bà ngoại mang cho mình một cái chăn dày.', 'Trời lạnh, bà ngoại mang cho mình một cái chăn mỏng.', 'Trời lạnh, bà nội mang cho mình một cái chăn dày.'],
        why: '<b>一条厚被子</b> = một cái chăn dày. <b>姥姥</b> = bà ngoại.',
        whyNot: ['', '厚 = dày, không phải mỏng.', '姥姥 = bà ngoại, không phải bà nội.'] } },
    /* ---------- tập 8 ---------- */
    '长途': { exv: ['Ngồi xe khách đường dài mười tiếng, ai cũng mệt.', 'Đây là một chuyến đi xa, phải mang nhiều đồ.'],
      hear: { s: '坐了十个小时的长途车，我累得不得了。', opts: ['Ngồi xe đường dài mười tiếng, mình mệt vô cùng.', 'Ngồi xe đường dài một tiếng, mình mệt vô cùng.', 'Ngồi xe đường dài mười tiếng, mình chẳng mệt chút nào.'],
        why: '<b>十个小时的长途车</b> = chuyến xe đường dài mười tiếng. <b>累得不得了</b> = mệt vô cùng.',
        whyNot: ['', '十个小时 = mười tiếng, không phải một tiếng.', '累得不得了 = mệt vô cùng.'] } },
    '冻': { exv: ['Ngoài trời lạnh quá, tay mình rét đỏ cả lên.', 'Đừng đứng ngoài đó, coi chừng bị lạnh.'],
      hear: { s: '外面太冷了，孩子的手都冻红了。', opts: ['Ngoài trời lạnh quá, tay bé rét đỏ cả lên.', 'Trong nhà lạnh quá, tay bé rét đỏ cả lên.', 'Ngoài trời lạnh quá, mặt bé rét đỏ cả lên.'],
        why: '<b>冻红了</b> = rét đến đỏ lên. <b>手</b> = tay.',
        whyNot: ['', '外面 = ngoài trời, không phải trong nhà (屋里).', '手 = tay, không phải mặt.'] } },
    '想象': { exv: ['Mình khó mà tưởng tượng bà ngoại sống một mình ở nông thôn.', 'Bạn thử tưởng tượng chính mình mười năm sau.'],
      hear: { s: '我很难想象姥姥一个人住在农村。', opts: ['Mình khó mà tưởng tượng bà ngoại sống một mình ở nông thôn.', 'Mình dễ dàng tưởng tượng bà ngoại sống một mình ở nông thôn.', 'Mình khó mà tưởng tượng bà ngoại sống với cậu ở nông thôn.'],
        why: '<b>很难想象</b> = rất khó tưởng tượng. <b>一个人</b> = một mình.',
        whyNot: ['', '很难 = rất khó, không phải dễ.', '一个人 = một mình; câu không nhắc tới cậu.'] } },
    '灰尘': { exv: ['Lâu rồi không ai ở, trên bàn toàn là bụi.', 'Quét dọn chút đi, trong phòng bụi quá.'],
      hear: { s: '很久没人住，桌子上都是灰尘。', opts: ['Lâu rồi không ai ở, trên bàn toàn là bụi.', 'Lâu rồi không ai ở, trên giường toàn là bụi.', 'Lâu rồi không ai ở, trên bàn chỉ có một ít bụi.'],
        why: '<b>很久没人住</b> = lâu rồi không ai ở. <b>桌子上都是灰尘</b> = trên bàn toàn bụi.',
        whyNot: ['', '桌子 = cái bàn, không phải giường.', '都是灰尘 = toàn là bụi, không phải chỉ một ít.'] } },
    /* ---------- tập 9 ---------- */
    '亮': { exv: ['Trời còn chưa sáng, ba đã dậy rồi.', 'Muộn thế này rồi mà phòng anh ấy vẫn sáng đèn.'],
      hear: { s: '这么晚了，他的房间还亮着灯。', opts: ['Muộn thế này rồi, phòng anh ấy vẫn còn sáng đèn.', 'Muộn thế này rồi, phòng anh ấy không còn sáng đèn.', 'Sớm thế này mà phòng anh ấy đã sáng đèn.'],
        why: '<b>还亮着灯</b> = vẫn còn sáng đèn. <b>这么晚了</b> = muộn thế này rồi.',
        whyNot: ['', '还亮着灯 = vẫn còn sáng đèn; câu không có 不/没.', '这么晚了 = muộn thế này rồi, không phải sớm.'] } },
    '微笑': { exv: ['Cô ấy mỉm cười nói với mình: “Chào mừng về nhà.”', 'Cô ấy lúc nào cũng mỉm cười khi nói chuyện với khách.'],
      hear: { s: '她微笑着对我说：“欢迎回家。”', opts: ['Cô ấy mỉm cười nói với mình: “Chào mừng về nhà.”', 'Mình mỉm cười nói với cô ấy: “Chào mừng về nhà.”', 'Cô ấy mỉm cười nói với mình: “Tạm biệt.”'],
        why: '<b>微笑着</b> = đang mỉm cười. <b>欢迎回家</b> = chào mừng về nhà.',
        whyNot: ['', '她…对我说 = cô ấy nói với mình, không phải mình nói với cô ấy.', '欢迎回家 = chào mừng về nhà, không phải tạm biệt.'] } },
    '温暖': { exv: ['Mùa xuân đến rồi, trời càng ngày càng ấm.', 'Một câu nói của bạn đã sưởi ấm lòng mình.'],
      hear: { s: '春天来了，天气越来越温暖。', opts: ['Mùa xuân đến rồi, trời càng ngày càng ấm.', 'Mùa đông đến rồi, trời càng ngày càng ấm.', 'Mùa xuân sắp đến, trời càng ngày càng ấm.'],
        why: '<b>春天</b> = mùa xuân. <b>越来越温暖</b> = càng ngày càng ấm.',
        whyNot: ['', '春天 = mùa xuân, không phải mùa đông.', '来了 = đến rồi; sắp đến là 快来了.'] } },
    '立刻': { exv: ['Nghe điện thoại reo, anh ấy lập tức chạy ra.', 'Bà ngoại vừa thấy mình là cười ngay.'],
      hear: { s: '姥姥一看到我，立刻笑了。', opts: ['Bà ngoại vừa thấy mình là cười ngay.', 'Mình vừa thấy bà ngoại là cười ngay.', 'Bà ngoại vừa thấy mình là khóc ngay.'],
        why: '<b>一…立刻…</b> = vừa… là ngay lập tức…',
        whyNot: ['', '姥姥一看到我 = bà ngoại thấy mình; người cười là bà.', '笑了 = cười, không phải khóc (哭).'] } },
    '扑': { exv: ['Con chó vừa thấy mình là lao tới.', 'Vừa ra khỏi nhà, gió lạnh đã phả vào mặt.'],
      hear: { s: '一开门，冷风就扑面而来。', opts: ['Vừa mở cửa, gió lạnh đã phả vào mặt.', 'Vừa mở cửa, gió ấm đã phả vào mặt.', 'Vừa đóng cửa, gió lạnh đã phả vào mặt.'],
        why: '<b>扑面而来</b> = phả thẳng vào mặt. <b>冷风</b> = gió lạnh.',
        whyNot: ['', '冷风 = gió lạnh, không phải gió ấm.', '开门 = mở cửa, không phải đóng.'] } },
    /* ---------- tập 10 ---------- */
    '卧室': { exv: ['Căn nhà này có ba phòng ngủ và một phòng khách.', 'Trong phòng ngủ có một cái giường lớn.'],
      hear: { s: '我们的新房有两个卧室。', opts: ['Nhà mới của tụi mình có hai phòng ngủ.', 'Nhà cũ của tụi mình có hai phòng ngủ.', 'Nhà mới của tụi mình có ba phòng ngủ.'],
        why: '<b>两个卧室</b> = hai phòng ngủ.',
        whyNot: ['', '新房 = nhà mới, không phải nhà cũ.', '两个 = hai, không phải ba.'] } },
    '铺': { exv: ['Mẹ đã trải giường xong rồi.', 'Bà ngoại trải chăn lên giường.'],
      hear: { s: '妈妈已经把床铺好了。', opts: ['Mẹ đã trải giường xong rồi.', 'Mẹ vẫn chưa trải giường xong.', 'Mình đã trải giường xong rồi.'],
        why: '<b>把床铺好了</b> = trải giường xong rồi. <b>已经</b> = đã.',
        whyNot: ['', '已经…好了 = đã… xong rồi, không phải chưa.', 'Người trải giường là 妈妈 (mẹ), không phải mình.'] } },
    '飘': { exv: ['Ngoài cửa sổ tuyết đang bay, trong nhà rất ấm.', 'Từ bếp thoảng ra mùi cơm canh thơm.'],
      hear: { s: '窗外飘着雪，屋里很暖和。', opts: ['Ngoài cửa sổ tuyết đang bay, trong nhà rất ấm.', 'Ngoài cửa sổ tuyết đang bay, trong nhà rất lạnh.', 'Ngoài cửa sổ lá đang bay, trong nhà rất ấm.'],
        why: '<b>飘着雪</b> = tuyết đang bay. <b>屋里很暖和</b> = trong nhà rất ấm.',
        whyNot: ['', '屋里很暖和 = trong nhà rất ấm.', '雪 = tuyết, không phải lá cây.'] } },
    '阵': { exv: ['Vừa nãy mưa một trận, giờ trời tạnh rồi.', 'Một cơn gió thổi qua, mình thấy hơi lạnh.'],
      hear: { s: '刚才下了一阵雨，现在停了。', opts: ['Vừa nãy mưa một trận, giờ tạnh rồi.', 'Vừa nãy mưa một trận, giờ vẫn còn mưa.', 'Vừa nãy nổi một trận gió, giờ ngừng rồi.'],
        why: '<b>一阵雨</b> = một trận mưa. <b>现在停了</b> = giờ tạnh rồi.',
        whyNot: ['', '现在停了 = giờ đã tạnh.', '一阵雨 = một trận mưa, không phải gió.'] } },
    /* ---------- tập 11 ---------- */
    '感受': { exv: ['Đến đây, mình cảm nhận được sự nhiệt tình của mọi người.', 'Bạn nói thử cảm nhận của mình bây giờ đi.'],
      hear: { s: '在这里，我感受到了家的温暖。', opts: ['Ở đây, mình cảm nhận được hơi ấm gia đình.', 'Ở đây, mình chưa cảm nhận được hơi ấm gia đình.', 'Ở nhà, mình cảm nhận được hơi ấm gia đình.'],
        why: '<b>感受到了</b> = đã cảm nhận được. <b>家的温暖</b> = hơi ấm gia đình.',
        whyNot: ['', '感受到了 = đã cảm nhận được; câu không có 没.', '在这里 = ở đây, không phải ở nhà.'] } },
    '流泪': { exv: ['Đọc lá thư này, mẹ rơi nước mắt.', 'Nghe xong lời anh ấy, ai cũng rơi nước mắt.'],
      hear: { s: '看到父母，他高兴得流下了眼泪。', opts: ['Thấy ba mẹ, anh ấy mừng đến trào nước mắt.', 'Thấy ba mẹ, anh ấy buồn đến trào nước mắt.', 'Thấy anh ấy, ba mẹ mừng đến trào nước mắt.'],
        why: '<b>高兴得流下了眼泪</b> = mừng đến trào nước mắt.',
        whyNot: ['', '高兴 = mừng, không phải buồn.', '他看到父母 = anh ấy thấy ba mẹ; người trào nước mắt là anh ấy.'] } }

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
      hook: 'Vững như đất nện (坚), dứt khoát như nước vỡ bờ (决): đã nói không là không.' },
    '打工': { parts: [['打', 'đả', '扌 (tay) + 丁: dùng tay mà làm, mà đánh. Như “ẩu đả”.'], ['工', 'công', 'Hình cây thước thợ: việc làm, người thợ. Như “công nhân”.']],
      hook: 'Bỏ tay (打) ra làm công (工) cho người ta = làm thuê. Tiếng Việt cũng nói “làm công”.' },
    '挣': { parts: [['挣', 'tranh', '扌 (tay) + 争 (tranh giành, chỉ âm).']],
      hook: 'Dùng tay (扌) giành (争) lấy từng đồng = kiếm tiền vất vả.' },
    '县': { parts: [['县', 'huyện', 'Chữ gốc 縣 vốn nghĩa là “treo”, sau dùng chỉ vùng đất lệ thuộc (treo vào) quận lớn: huyện.']],
      hook: 'xiàn nghe gần “huyện”. 县里 = trên huyện, ở giữa làng và thành phố.' },
    '套': { parts: [['套', 'sáo', '大 (lớn) ở trên + 镸 (dài) ở dưới: tấm bọc lớn và dài trùm ra ngoài, từ đó “trọn bộ”.']],
      hook: 'Bọc trọn cả bộ: 一套房子 là trọn căn nhà, 一套西服 là trọn bộ com-lê.' },
    '装修': { parts: [['装', 'trang', '衣 (áo) ở dưới: mặc vào, lắp vào. Như “trang phục”.'], ['修', 'tu', 'Sửa sang cho đẹp. Như “tu sửa”.']],
      hook: 'Trang (装) điểm + tu (修) sửa cho căn nhà = 装修.' },
    '不得了': { parts: [['不', 'bất', 'Không.'], ['得', 'đắc', 'Được.'], ['了', 'liễu', 'Xong, hết (đọc liǎo).']],
      hook: '“Không thể (不得) xong (了)”: nhiều đến mức không dừng được = vô cùng.' },
    '串': { parts: [['串', 'xuyến', 'Hai vật (口 口) xâu trên một cái que (丨): xâu, chuỗi.']],
      hook: 'Nhìn chữ là thấy: hai cục xâu chung một que = xiên thịt, chùm chìa khoá.' },
    '醉': { parts: [['醉', 'tuý', '酉 (bình rượu) + 卒 (hết, cạn): uống cạn bình thì say.']],
      hook: 'Bình rượu (酉) uống cạn (卒) = say “tuý luý”.' },
    '强烈': { parts: [['强', 'cường', '弓 (cây cung) bên trái: mạnh, khoẻ. Như “cường quốc”.'], ['烈', 'liệt', '灬 (lửa) ở dưới: lửa cháy dữ. Như “mãnh liệt”, “nhiệt liệt”.']],
      hook: 'Mạnh (强) như lửa (烈 có 灬) = cường liệt, mãnh liệt.' },
    '夜': { parts: [['夜', 'dạ', 'Có 夕 (buổi tối, vầng trăng khuyết) bên phải: trăng lên là trời đã tối.']],
      hook: 'Trăng (夕) lên rồi là đêm: 夜. Như “dạ hội”; nửa đêm là 半夜.' },
    '锁': { parts: [['锁', 'toả', '钅 (kim loại) + phần bên phải chỉ âm suǒ: đồ bằng kim loại giữ cửa.']],
      hook: 'Kim loại (钅) giữ chặt cửa = ổ khoá. Chìa khoá 钥匙 cũng có 钅: một ổ, một chìa.' },
    '临': { parts: [['临', 'lâm', 'Bản phồn thể 臨: người cúi xuống nhìn (臣 là con mắt) đồ vật bên dưới; từ đó “đến sát, kề gần”.']],
      hook: 'Lâm (临) = kề sát: 临走 = kề lúc đi, 临街 = kề đường.' },
    '悄悄': { parts: [['悄', 'tiễu', '忄 (tâm, lòng) + 肖 (chỉ âm qiāo): lòng lặng lẽ, khẽ khàng.']],
      hook: 'Lòng (忄) yên lặng, bước khẽ: 悄悄. Nhớ: 悄悄 = khẽ (tiếng nhỏ), 偷偷 = lén (giấu người khác).' },
    '晒': { parts: [['晒', 'sái', '日 (mặt trời) + 西: đem đồ ra dưới nắng.']],
      hook: 'Đem đồ ra dưới mặt trời (日) cho khô = phơi.' },
    '被子': { parts: [['被', 'bị', '衤 (áo) + 皮 (da, chỉ âm): tấm vải phủ lên người như lớp da thứ hai.'], ['子', 'tử', 'Hậu tố danh từ.']],
      hook: 'Áo (衤) phủ kín như da (皮) khi ngủ = cái chăn. Giới từ 被 (bị) cũng là chữ này.' },
    '长途': { parts: [['长', 'trường', 'Dài. Như “trường giang”.'], ['途', 'đồ', '辶 (bước đi) + 余 (chỉ âm): con đường. Như “tiền đồ”.']],
      hook: 'Đường (途) dài (长) = “trường đồ”. Xe đường dài: 长途车.' },
    '冻': { parts: [['冻', 'đống', '冫 (băng) + 东 (chỉ âm dōng): nước đông thành băng; rét cóng.']],
      hook: 'Hai chấm băng (冫) + 东 đọc gần “đông”: lạnh tới đông cứng.' },
    '想象': { parts: [['想', 'tưởng', '相 + 心 (lòng): nghĩ trong lòng.'], ['象', 'tượng', 'Hình con voi. Người xưa ít ai thấy voi sống, chỉ nhìn xương mà hình dung ra con voi.']],
      hook: 'Nghĩ (想) ra con voi (象) mà mình chưa từng thấy = tưởng tượng.' },
    '灰尘': { parts: [['灰', 'hôi', 'Tay cầm thứ còn lại sau lửa (火): tro. Màu tro = 灰色.'], ['尘', 'trần', '小 (nhỏ) + 土 (đất): hạt đất nhỏ li ti. Như “bụi trần”.']],
      hook: 'Tro (灰) + đất nhỏ (尘 = 小 + 土) = bụi bặm.' },
    '亮': { parts: [['亮', 'lượng', 'Phần trên là 高 (cao) viết gọn, dưới là 儿 (người): người đứng chỗ cao, chỗ sáng.']],
      hook: 'Đứng trên cao (高) thì thấy sáng: 亮.' },
    '微笑': { parts: [['微', 'vi', 'Nhỏ, nhẹ. Như “vi khuẩn”, “tinh vi”.'], ['笑', 'tiếu', 'Cười; bộ tre ở trên. Như “tiếu lâm”.']],
      hook: 'Cười (笑) một chút xíu (微) = mỉm cười, “vi tiếu”.' },
    '温暖': { parts: [['温', 'ôn', '氵 (nước): nước ấm. Như “ôn hoà”.'], ['暖', 'noãn', '日 (mặt trời): ấm. Như 暖气 (máy sưởi).']],
      hook: 'Nước ấm (温) + nắng ấm (暖 có 日) = ấm áp cả người lẫn lòng.' },
    '立刻': { parts: [['立', 'lập', 'Người đứng thẳng trên mặt đất. Như “thành lập”.'], ['刻', 'khắc', 'Khắc; một khắc = khoảnh khắc.']],
      hook: 'Đứng (立) dậy ngay trong khoảnh khắc (刻) = lập tức, “lập khắc”.' },
    '扑': { parts: [['扑', 'phác', '扌 (tay) + 卜 (chỉ âm): dùng tay vồ, lao tới.']],
      hook: 'Tay (扌) vồ tới = bổ nhào. Hơi ấm cũng “vồ” vào mặt: 扑面而来.' },
    '卧室': { parts: [['卧', 'ngoạ', '臣 (con mắt cúi xuống) + 人: người nằm nghỉ. Như “ngoạ hổ tàng long”.'], ['室', 'thất', '宀 (mái nhà): căn phòng. Như 室内 (trong nhà).']],
      hook: 'Phòng (室) để nằm (卧) = phòng ngủ.' },
    '铺': { parts: [['铺', 'phô', '钅 (kim loại) + 甫 (chỉ âm pū): bày ra, trải ra.']],
      hook: 'Trải (铺) có bộ 钅; vồ (扑) có bộ 扌 tay. Cùng đọc pū, nhìn bộ mà phân biệt.' },
    '飘': { parts: [['飘', 'phiêu', '票 (chỉ âm) + 风 (gió): bị gió thổi bay.']],
      hook: 'Có 风 (gió) bên phải: nhẹ bay theo gió = “phiêu”, như “phiêu bạt”.' },
    '阵': { parts: [['阵', 'trận', '阝 (gò đất) + 车 (xe): xe trận bày trên gò, thành “trận”.']],
      hook: 'Xe (车) dàn trên gò (阝) = trận đánh → một trận mưa, một cơn gió (一阵).' },
    '感受': { parts: [['感', 'cảm', '咸 + 心 (lòng): điều chạm tới lòng. Như “cảm động”.'], ['受', 'thụ', 'Hai bàn tay trao và nhận: nhận lấy.']],
      hook: 'Lòng (心) nhận lấy (受) = cảm thụ, cảm nhận.' },
    '流泪': { parts: [['流', 'lưu', '氵 (nước): chảy. Như “lưu thông”.'], ['泪', 'lệ', '氵 (nước) + 目 (mắt): nước từ mắt.']],
      hook: 'Nước (氵) từ mắt (目) = lệ; để nó chảy (流) = rơi lệ.' }

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

/* ===== Bài 2: question bank for review (Ôn tập, Ôn tập tổng hợp, Kiểm tra) + MEAN. Same shape as Bài 1 QB.
   New sentences, built only from HSK1–4, Bài 1 words and Bài 2 words taught up to that word's tập.
   Pictures (scene) appear only after answering (HANDOFF §12.11) and show what the sentence says; never the answer's characters. ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.MEAN = { '一辈子': 'suốt đời, cả đời', '农村': 'nông thôn', '屋': 'nhà, căn phòng', '断': 'cai, dứt, đứt', '以来': 'từ … đến nay', '姥姥': 'bà ngoại', '舅舅': 'cậu (anh/em trai của mẹ)', '姑姑': 'cô (chị/em gái của ba)', '坚决': 'kiên quyết',
    '打工': 'làm thuê, làm công', '挣': 'kiếm (tiền)', '县': 'huyện', '套': 'bộ, căn (lượng từ)', '装修': 'sửa sang (nhà)', '不得了': 'cực kỳ, vô cùng', '串': 'chùm, xâu (lượng từ)', '醉': 'say (rượu)', '强烈': 'mãnh liệt, gắt', '夜': 'ban đêm',
    '锁': 'cái khoá; khoá', '临': 'sắp, lúc sắp', '悄悄': 'lặng lẽ, khẽ khàng', '晒': 'phơi', '被子': 'cái chăn, mền',
    '长途': 'đường dài', '冻': 'bị rét, cóng', '想象': 'tưởng tượng', '灰尘': 'bụi bặm', '亮': 'sáng', '微笑': 'mỉm cười', '温暖': 'ấm áp', '立刻': 'lập tức', '扑': 'vồ tới; phả vào', '卧室': 'phòng ngủ', '铺': 'trải', '飘': 'bay nhẹ, thoảng', '阵': 'trận, cơn (lượng từ)', '感受': 'cảm nhận', '流泪': 'chảy nước mắt' };
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
        hr2('一辈子', '我会记住你一辈子。', ['Mình sẽ nhớ bạn suốt đời.', 'Mình sẽ đợi bạn suốt đời.', 'Bạn sẽ nhớ mình suốt đời.'], '<b>记住</b> = nhớ kỹ. <b>一辈子</b> đứng cuối = suốt đời.',
          ['', '记住 = nhớ (kỹ), không phải đợi (等).', 'Người nhớ là 我 (mình), người được nhớ là 你 (bạn).'])
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
      ],
      /* ---------- tập 3 ---------- */
      '打工': [
        cz('打工', 'c2_work', '大学的时候，我在一家饭馆___，一个月挣的钱不多。', 'Hồi đại học mình làm thêm ở một quán ăn, mỗi tháng kiếm không nhiều.', '大学的时候，我在一家饭馆打工，一个月挣的钱不多。', '打工',
          [['断', '断 là đứt, cai; không phải đi làm.'], ['坚决', '坚决 là kiên quyết, nói thái độ, không phải việc làm.']], '<b>在 + nơi + 打工</b> = làm thuê, làm thêm ở đâu.'),
        od(['打工'], '他去城里打了三年工。', 'Anh ấy lên thành phố làm thuê ba năm.', ['他', '去城里', '打了三年', '工']),
        hr('打工')
      ],
      '挣': [
        cz('挣', 'c2_earn', '他每个月___的钱不多，可是很努力。', 'Mỗi tháng anh ấy kiếm không nhiều tiền, nhưng rất chịu khó.', '他每个月挣的钱不多，可是很努力。', '挣',
          [['套', '套 là lượng từ (一套房子), không phải động từ; kiếm tiền là 挣钱.'], ['断', '断 là đứt, cai; không đi với 钱.']], '<b>挣钱</b> = kiếm tiền; <b>挣的钱</b> = số tiền kiếm được.'),
        hr('挣'),
        ty(['挣'], '挣钱', 'kiếm tiền')
      ],
      '县': [
        cz('县', 'c2_county', '姥姥住在农村，看病要去___里的医院。', 'Bà ngoại sống ở nông thôn, đi khám bệnh phải lên bệnh viện trên huyện.', '姥姥住在农村，看病要去县里的医院。', '县',
          [['屋', '屋里 là trong nhà; trong nhà không có bệnh viện.'], ['套', '套 là lượng từ (一套房子), không chỉ nơi chốn.']], '<b>县里</b> = trên huyện: lớn hơn làng, nhỏ hơn thành phố.'),
        hr('县'),
        od(['县'], '从我们村到县里要坐一个小时的车。', 'Từ làng mình lên huyện phải đi xe một tiếng.', ['从我们村', '到县里', '要坐', '一个小时的车'])
      ],
      '套': [
        cz('套', 'c2_flat3', '这___房子有三个房间，很适合我们家。', 'Căn nhà này có ba phòng, rất hợp với nhà mình.', '这套房子有三个房间，很适合我们家。', '套',
          [['间', '一间 là một gian phòng; một gian thì không có ba phòng bên trong.'], ['辆', '辆 là lượng từ của xe.']], '<b>一套房子</b> = một căn nhà gồm nhiều phòng. 一间 = một gian.'),
        hr('套'),
        cz('套', 'c2_sets', '他结婚的时候买了一___新西服。', 'Lúc cưới anh ấy mua một bộ com-lê mới.', '他结婚的时候买了一套新西服。', '套',
          [['张', '张 dùng cho vật mỏng, phẳng (一张纸, 一张床); com-lê gồm áo và quần nên là 一套.'], ['条', '一条 dùng cho quần, váy; cả bộ com-lê là 一套.']], '<b>一套</b> = trọn bộ: 一套西服, 一套家具, 一套邮票.')
      ],
      /* ---------- tập 4 ---------- */
      '装修': [
        cz('装修', 'c2_renovate', '房子___好了，我们下个月搬进去。', 'Nhà sửa sang xong rồi, tháng sau tụi mình dọn vào.', '房子装修好了，我们下个月搬进去。', '装修',
          [['打工', '打工 là đi làm thuê, không đi với 房子…好了.'], ['挣', '挣 là kiếm (tiền).']], '<b>装修好 / 装修完</b> = sửa sang xong.'),
        hr('装修'),
        od(['装修'], '这家饭馆装修得很漂亮。', 'Quán ăn này trang trí rất đẹp.', ['这家饭馆', '装修得', '很', '漂亮'])
      ],
      '不得了': [
        cz('不得了', 'c2_hot', '今天热得___，我们别出去了。', 'Hôm nay nóng kinh khủng, mình đừng ra ngoài.', '今天热得不得了，我们别出去了。', '不得了',
          [['不错', '不错 = khá tốt; 热得不错 không ai nói.'], ['一样', '一样 = giống nhau, không chỉ mức độ.']], '<b>热得不得了</b> = nóng vô cùng: tính từ + 得 + 不得了.'),
        hr('不得了'),
        od(['不得了'], '听说儿子考上了大学，妈妈高兴得不得了。', 'Nghe tin con trai đậu đại học, mẹ mừng vô cùng.', ['听说儿子', '考上了大学', '妈妈', '高兴得不得了'])
      ],
      '串': [
        hr('串'),
        cz('串', 'c2_keyBunch', '他手里拿着一___钥匙，不知道哪把是大门的。', 'Anh ấy cầm một chùm chìa khoá, không biết chiếc nào là của cửa lớn.', '他手里拿着一串钥匙，不知道哪把是大门的。', '串',
          [['套', '一套 là một bộ (房子, 家具); chìa khoá xâu chung một vòng là 一串.'], ['辆', '辆 là lượng từ của xe.']], '<b>一串钥匙</b> = một chùm chìa khoá. Từng chiếc thì đếm bằng 把: 一把钥匙.')
      ],
      /* ---------- tập 5 ---------- */
      '醉': [
        cz('醉', 'c2_tipsy', '他昨天喝___了，今天早上起来头很疼。', 'Hôm qua anh ấy uống say, sáng nay dậy đau đầu lắm.', '他昨天喝醉了，今天早上起来头很疼。', '醉',
          [['饱', '喝饱 = uống no; uống no thì không đau đầu sáng hôm sau.'], ['断', '断 là đứt, cai; 喝断 không ai nói.']], '<b>喝醉了</b> = uống say rồi.'),
        hr('醉'),
        od(['醉'], '我从来没喝醉过。', 'Mình chưa từng uống say.', ['我', '从来', '没喝醉', '过'])
      ],
      '强烈': [
        cz('强烈', 'c2_strongSun', '夏天中午的阳光非常___，出门要戴帽子。', 'Nắng trưa mùa hè rất gắt, ra ngoài phải đội mũ.', '夏天中午的阳光非常强烈，出门要戴帽子。', '强烈',
          [['坚决', '坚决 nói về thái độ, ý chí của người; nắng thì 强烈.'], ['不得了', '不得了 đứng sau 得 (热得不得了), không đứng sau 非常.']], '<b>强烈的阳光</b> = nắng gắt.'),
        hr('强烈'),
        cz('强烈', 'c2_chat', '大家___要求他留下来，可他还是走了。', 'Mọi người hết lời yêu cầu anh ấy ở lại, nhưng anh ấy vẫn đi.', '大家强烈要求他留下来，可他还是走了。', '强烈',
          [['醉', '醉 là say rượu.'], ['不得了', '不得了 không đứng trước động từ; nó đứng sau 得.']], '<b>强烈要求</b> = hết sức yêu cầu.')
      ],
      '夜': [
        cz('夜', 'c2_night', '我们在姑姑家住了一___，第二天早上才回来。', 'Tụi mình ở lại nhà cô một đêm, sáng hôm sau mới về.', '我们在姑姑家住了一夜，第二天早上才回来。', '夜',
          [['套', '套 là lượng từ cho bộ, căn.'], ['串', '串 là chùm, xâu.']], '<b>住了一夜</b> = ở lại một đêm.'),
        hr('夜'),
        od(['夜'], '昨天夜里下了很大的雨。', 'Đêm qua mưa rất to.', ['昨天', '夜里', '下了', '很大的雨'])
      ],
      /* ---------- tập 6 ---------- */
      '锁': [
        cz('锁', 'c2_lock', '这把___坏了，钥匙打不开。', 'Ổ khoá này hỏng rồi, chìa mở không được.', '这把锁坏了，钥匙打不开。', '锁',
          [['钥匙', 'Câu đã có 钥匙 (chìa) mở không được; thứ bị hỏng là ổ khoá: 锁.'], ['门', 'Lượng từ 把 không đi với 门 (cửa); nó đi với 锁, 钥匙, 椅子.']], '<b>一把锁</b> = một ổ khoá; <b>一把钥匙</b> = một chiếc chìa.'),
        hr('锁'),
        ty(['锁'], '锁门', 'khoá cửa')
      ],
      '临': [
        cz('临', 'c2_quilt', '___睡前，她总是给姥姥打个电话。', 'Trước lúc ngủ, cô ấy luôn gọi điện cho bà ngoại.', '临睡前，她总是给姥姥打个电话。', '临',
          [['以来', '以来 đứng sau một mốc và kéo dài tới nay; “lúc sắp ngủ” là 临睡前.'], ['夜', '夜 là ban đêm, không đứng trước động từ để chỉ “lúc sắp”.']], '<b>临 + động từ + 前 / 时</b> = lúc sắp…'),
        hr('临'),
        od(['临'], '这家饭馆临街，有点儿吵。', 'Quán ăn này sát đường, hơi ồn.', ['这家饭馆', '临街', '有点儿', '吵'])
      ],
      /* ---------- tập 7 ---------- */
      '悄悄': [
        cz('悄悄', 'c2_tiptoe', '孩子睡着了，妈妈___地走出了房间。', 'Bé ngủ rồi, mẹ khẽ khàng đi ra khỏi phòng.', '孩子睡着了，妈妈悄悄地走出了房间。', '悄悄',
          [['强烈', '强烈 = mãnh liệt, không tả bước đi khẽ.'], ['坚决', '坚决 = kiên quyết; câu nói đi khẽ để bé không thức.']], '<b>悄悄(地) + động từ</b> = khẽ khàng làm gì.'),
        hr('悄悄'),
        od(['悄悄'], '他悄悄告诉我一个好消息。', 'Anh ấy khẽ nói với mình một tin vui.', ['他', '悄悄', '告诉我', '一个好消息'])
      ],
      '晒': [
        cz('晒', 'c2_dry', '姥姥喜欢坐在门口___太阳。', 'Bà ngoại thích ngồi trước cửa sưởi nắng.', '姥姥喜欢坐在门口晒太阳。', '晒',
          [['挣', '挣 = kiếm (tiền), không đi với 太阳; ngồi cho nắng chiếu vào người là 晒太阳.'], ['锁', '锁 là khoá; không đi với 太阳.']], '<b>晒太阳</b> = sưởi nắng.'),
        hr('晒'),
        od(['晒'], '今天天气好，我们晒晒被子吧。', 'Hôm nay trời đẹp, mình phơi chăn đi.', ['今天天气好', '我们', '晒晒', '被子吧'])
      ],
      '被子': [
        cz('被子', 'c2_quilt', '天冷了，晚上睡觉多盖一条___。', 'Trời lạnh rồi, tối ngủ đắp thêm một cái chăn.', '天冷了，晚上睡觉多盖一条被子。', '被子',
          [['裙子', '裙子 là cái váy; đắp lúc ngủ cho ấm là chăn.'], ['帽子', '帽子 là cái mũ; 盖 (đắp) đi với 被子.']], '<b>盖被子</b> = đắp chăn.'),
        hr('被子'),
        od(['被子'], '这条被子是姥姥给我的。', 'Cái chăn này là bà ngoại cho mình.', ['这条被子', '是', '姥姥', '给我的'])
      ],
      /* ---------- tập 8 ---------- */
      '长途': [
        cz('长途', 'c2_longBus', '坐了十个小时的___汽车，大家都很累。', 'Ngồi xe khách đường dài mười tiếng, ai cũng mệt.', '坐了十个小时的长途汽车，大家都很累。', '长途',
          [['套', '套 là lượng từ (一套房子), không đứng trước 汽车; xe đi xa là 长途汽车.'], ['夜', 'Không ai nói 夜汽车; xe khách đi xa là 长途汽车.']], '<b>长途汽车</b> = xe khách đường dài.'),
        hr('长途'),
        od(['长途'], '这是一次长途旅行，要带的东西很多。', 'Đây là một chuyến đi xa, phải mang nhiều đồ.', ['这是', '一次长途旅行', '要带的', '东西很多'])
      ],
      '冻': [
        cz('冻', 'c2_frozen', '外面太冷了，我的手都___红了。', 'Ngoài trời lạnh quá, tay mình rét đỏ cả lên.', '外面太冷了，我的手都冻红了。', '冻',
          [['晒', '晒红 = bị nắng làm đỏ; câu nói trời lạnh.'], ['醉', '醉 là say rượu.']], '<b>冻红了</b> = rét đến đỏ lên.'),
        hr('冻'),
        od(['冻'], '别在外面站着，小心冻着。', 'Đừng đứng ngoài đó, coi chừng bị lạnh.', ['别在外面', '站着', '小心', '冻着'])
      ],
      '想象': [
        cz('想象', 'c2_imagine', '你___一下十年以后的自己。', 'Bạn thử tưởng tượng chính mình mười năm sau.', '你想象一下十年以后的自己。', '想象',
          [['看见', '看见 = đã thấy; chuyện mười năm sau thì chưa thấy được, chỉ tưởng tượng.'], ['冻', '冻 là rét cóng.']], '<b>想象一下</b> = thử tưởng tượng.'),
        hr('想象'),
        od(['想象'], '我很难想象姥姥一个人住在农村。', 'Mình khó mà tưởng tượng bà ngoại sống một mình ở nông thôn.', ['我很难', '想象', '姥姥一个人', '住在农村'])
      ],
      '灰尘': [
        cz('灰尘', 'c2_dust', '很久没人住了，桌子上都是___。', 'Lâu rồi không ai ở, trên bàn toàn là bụi.', '很久没人住了，桌子上都是灰尘。', '灰尘',
          [['雪', 'Trong nhà không có tuyết; lâu không ai ở thì bàn phủ bụi.'], ['被子', 'Bàn lâu không dùng thì phủ bụi, không phải chăn.']], '<b>都是灰尘</b> = toàn là bụi.'),
        hr('灰尘'),
        od(['灰尘'], '打扫一下吧，屋子里灰尘太多了。', 'Quét dọn chút đi, trong phòng bụi quá.', ['打扫一下吧', '屋子里', '灰尘', '太多了'])
      ],
      /* ---------- tập 9 ---------- */
      '亮': [
        cz('亮', 'c2_lamp', '天还没___，爸爸就起床了。', 'Trời còn chưa sáng, ba đã dậy rồi.', '天还没亮，爸爸就起床了。', '亮',
          [['冻', '冻 là rét cóng; 天还没冻 không có nghĩa.'], ['晒', '晒 là phơi.']], '<b>天亮了</b> = trời sáng rồi; <b>天还没亮</b> = trời chưa sáng.'),
        hr('亮'),
        ty(['亮'], '天亮了', 'trời sáng rồi')
      ],
      '微笑': [
        cz('微笑', 'c2_smile', '她总是___着跟客人说话，大家都很喜欢她。', 'Cô ấy lúc nào cũng mỉm cười khi nói chuyện với khách, ai cũng quý cô ấy.', '她总是微笑着跟客人说话，大家都很喜欢她。', '微笑',
          [['冻', '冻着 = bị rét; không hợp với 跟客人说话.'], ['悄悄', '悄悄 là phó từ (khẽ khàng), không đi với 着.']], '<b>微笑着 + động từ</b> = mỉm cười làm gì.'),
        hr('微笑'),
        od(['微笑'], '她总是微笑着跟客人说话。', 'Cô ấy lúc nào cũng mỉm cười khi nói chuyện với khách.', ['她总是', '微笑着', '跟客人', '说话'])
      ],
      '温暖': [
        cz('温暖', 'c2_warm', '朋友的一句话，让我觉得很___。', 'Một câu nói của bạn khiến mình thấy rất ấm lòng.', '朋友的一句话，让我觉得很温暖。', '温暖',
          [['热闹', '热闹 = náo nhiệt, đông vui; một câu nói làm lòng ấm lên là 温暖.'], ['强烈', '强烈 = mãnh liệt; một câu nói nhẹ nhàng làm lòng ấm lên.']], '<b>温暖</b> dùng được cho tình cảm; <b>暖和</b> chủ yếu cho thời tiết.'),
        hr('温暖'),
        od(['温暖'], '春天来了，天气越来越温暖。', 'Mùa xuân đến rồi, trời càng ngày càng ấm.', ['春天来了', '天气', '越来越', '温暖'])
      ],
      '立刻': [
        cz('立刻', 'c2_rightAway', '听到电话，他___跑了出去。', 'Nghe điện thoại reo, anh ấy lập tức chạy ra.', '听到电话，他立刻跑了出去。', '立刻',
          [['以来', '以来 đứng sau một mốc thời gian, không đứng trước động từ.'], ['临', '临 + động từ = lúc sắp…; câu này nói việc xảy ra ngay sau khi nghe điện thoại.']], '<b>立刻 + động từ</b> = ngay lập tức làm gì.'),
        hr('立刻'),
        od(['立刻'], '姥姥一看到我，就立刻笑了。', 'Bà ngoại vừa thấy mình là cười ngay.', ['姥姥', '一看到我', '就立刻', '笑了'])
      ],
      '扑': [
        hr('扑'),
        cz('扑', 'c2_pounce', '小狗一看见我，就___了过来。', 'Con chó vừa thấy mình là lao tới.', '小狗一看见我，就扑了过来。', '扑',
          [['醉', '醉 là say rượu.'], ['锁', '锁 là khoá.']], '<b>扑过来</b> = lao tới, vồ tới.')
      ],
      /* ---------- tập 10 ---------- */
      '卧室': [
        cz('卧室', 'c2_roomBed', '我累了，想回___睡一会儿。', 'Mình mệt rồi, muốn về phòng ngủ ngủ một lát.', '我累了，想回卧室睡一会儿。', '卧室',
          [['厨房', '厨房 là bếp; muốn ngủ thì về phòng ngủ.'], ['县', '县 là huyện, không phải một phòng trong nhà.']], '<b>卧室</b> = phòng ngủ (卧 = nằm).'),
        hr('卧室'),
        ty(['卧室'], '两个卧室', 'hai phòng ngủ')
      ],
      '铺': [
        hr('铺'),
        cz('铺', 'c2_makeBed', '妈妈已经把床上的被子___好了。', 'Mẹ đã trải chăn trên giường xong rồi.', '妈妈已经把床上的被子铺好了。', '铺',
          [['扑', '扑 (bộ 扌 tay) = vồ tới, phả vào; cùng đọc pū nhưng trải chăn là 铺 (bộ 钅).'], ['锁', '锁 = khoá; chăn trên giường thì trải: 铺好.']], '<b>铺好</b> = trải xong. Bẫy cùng âm: 扑 ≠ 铺.')
      ],
      '飘': [
        cz('飘', 'c2_float', '从厨房里___来了饭菜的香味。', 'Từ bếp thoảng ra mùi cơm canh thơm.', '从厨房里飘来了饭菜的香味。', '飘',
          [['铺', '铺 là trải (giường, chăn).'], ['挣', '挣 là kiếm (tiền).']], '<b>飘来</b> = thoảng tới (mùi hương, tiếng hát…).'),
        hr('飘'),
        od(['飘'], '窗外飘着雪，屋里很暖和。', 'Ngoài cửa sổ tuyết đang bay, trong nhà rất ấm.', ['窗外', '飘着雪', '屋里', '很暖和'])
      ],
      '阵': [
        cz('阵', 'c2_gust', '刚才下了一___大雨，现在天晴了。', 'Vừa nãy mưa một trận lớn, giờ trời tạnh rồi.', '刚才下了一阵大雨，现在天晴了。', '阵',
          [['串', '串 = chùm, xâu (一串钥匙); mưa đến rồi đi là “một trận”: 一阵.'], ['套', '套 là bộ, căn (一套房子).']], '<b>一阵</b> + 风 / 雨 / 歌声 / 香味.'),
        hr('阵'),
        od(['阵'], '一阵风吹过来，我觉得有点儿冷。', 'Một cơn gió thổi qua, mình thấy hơi lạnh.', ['一阵风', '吹过来', '我觉得', '有点儿冷'])
      ],
      /* ---------- tập 11 ---------- */
      '感受': [
        cz('感受', 'c2_feel', '来到这里，我___到了大家的热情。', 'Đến đây, mình cảm nhận được sự nhiệt tình của mọi người.', '来到这里，我感受到了大家的热情。', '感受',
          [['想象', '想象 = tưởng tượng, chưa thật sự có; câu nói đã thật sự nhận được: 感受到.'], ['立刻', '立刻 là phó từ “ngay lập tức”, không làm động từ chính.']], '<b>感受到</b> = cảm nhận được.'),
        hr('感受'),
        od(['感受'], '说说你现在的感受吧。', 'Bạn nói thử cảm nhận của mình bây giờ đi.', ['说说', '你现在的', '感受', '吧'])
      ],
      '流泪': [
        cz('流泪', 'c2_cry', '听完他的故事，大家都难过得___了。', 'Nghe xong câu chuyện của anh ấy, ai cũng buồn đến rơi nước mắt.', '听完他的故事，大家都难过得流泪了。', '流泪',
          [['微笑', '微笑 = mỉm cười; câu nói 难过 (buồn).'], ['醉', '醉 là say rượu.']], '<b>…得流泪</b> = … đến rơi nước mắt.'),
        hr('流泪'),
        od(['流泪'], '听完他的话，大家都流下了眼泪。', 'Nghe xong lời anh ấy, ai cũng rơi nước mắt.', ['听完他的话', '大家都', '流下了', '眼泪'])
      ]

    };
  };
  /* hr() copies the listening item from CH2.LEARN, so build once learn.js is there (any load order) */
  CH2.QB = CH2.QB || {};
  if (CH2.LEARN) build(); else CH2.buildQB = build;
  if (CH2.resolveRefs) CH2.resolveRefs();
})();

/* ===== Bài 2: question pools for the chapter test (Kiểm tra cuối bài 2). Same shape as Bài 1 TESTBANK (new sentences, not the ones in the units).
   u = the tập the item checks (the result screen says which tập to look at again).
   hsk = extra items in HSK5 exam style, made of existing screen types (needs chat App to put them into buildTest, see README):
     kind 'nghe' = listening to a short exchange (hear), 'doc' = a short passage with a blank (mc), 'viet' = 完成句子, put the words in order (order). ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.TESTBANK = {
    tf: [
      { t: 'tf', scene: 'c2_twoPlaces', zh: '父母不在城里住，是因为城里没有家人。', vi: 'Ba mẹ không lên thành phố ở vì trên đó không có người nhà.', ok: false,
        why: '<b>姥姥、舅舅和姑姑都在城里</b>: trên thành phố có cả bà ngoại, cậu và cô. Ba mẹ không lên vì gắn bó với căn nhà cũ ở quê.', w: ['姥姥', '舅舅', '姑姑'], u: '2-2' },
      { t: 'tf', scene: 'c2_county', zh: '我们的新房在县里，不在大城市。', vi: 'Nhà mới của chúng tôi ở trên huyện, không ở thành phố lớn.', ok: true,
        why: 'Trong bài: <b>在县里买了一套新房</b> = mua một căn nhà mới trên huyện.', w: ['县', '套'], u: '2-3' },
      { t: 'tf', scene: 'c2_lastBus', zh: '那天父亲喝醉了，所以晚上没回老家。', vi: 'Hôm đó ba uống say nên tối không về quê.', ok: false,
        why: 'Ba có <b>喝醉了</b>, nhưng tỉnh dậy ba mẹ vẫn <b>坚持坐上了最后一趟回老家的车</b>: vẫn về quê ngay tối đó.', w: ['醉'], u: '2-5' },
      { t: 'tf', scene: 'c2_quiltSun', zh: '父亲说，他们想来住几天，顺便晒晒被子、打扫卫生。', vi: 'Ba nói ba mẹ muốn lên ở vài hôm, tiện thể phơi chăn, quét dọn.', ok: true,
        why: 'Lời ba: <b>就来住上几天，顺便给你们晒晒被子，打扫打扫卫生</b>.', w: ['晒', '被子'], u: '2-7' },
      { t: 'tf', scene: 'c2_winterNight', zh: '我们回家的那天是一个夏天的晚上。', vi: 'Hôm chúng tôi về nhà là một buổi tối mùa hè.', ok: false,
        why: 'Trong bài: <b>是一个深冬的夜里</b> = một đêm giữa mùa đông; con trai còn <b>被冻得大哭</b>.', w: ['夜', '冻'], u: '2-8' },
      { t: 'tf', scene: 'c2_warmRoom', zh: '我们到家的时候，厨房里飘来了饭菜的香味，屋里也很暖和。', vi: 'Lúc chúng tôi về tới nhà, trong bếp thoảng ra mùi cơm canh, trong nhà cũng rất ấm.', ok: true,
        why: '<b>暖气开着</b> (máy sưởi đang bật), <b>厨房里飘来阵阵饭菜香</b> (bếp thoảng ra mùi cơm canh).', w: ['飘', '阵'], u: '2-10' },
      { t: 'tf', scene: 'c2_dadTalk', zh: '妈妈是前天接到电话的。', vi: 'Mẹ nhận điện thoại từ hôm kia.', ok: false,
        why: 'Ba nói: <b>你妈昨天接到电话</b> = mẹ nhận điện thoại hôm <b>qua</b> (昨天), không phải hôm kia (前天).', w: [], u: '2-11' }
    ],
    spot: [
      { t: 'spot', chunks: ['我们终于', '在县里', '买了一串', '新房。'], bad: 2, fix: '买了一套', full: '我们终于在县里买了一套新房。', vi: 'Cuối cùng chúng tôi mua được một căn nhà mới trên huyện.',
        teach: '<b>一套房子</b> = một căn nhà. <b>串</b> là chùm, xâu (一串钥匙).', w: ['套', '串'], u: '2-3' },
      { t: 'spot', chunks: ['孩子睡着了，', '妈妈', '强烈地', '走了出去。'], bad: 2, fix: '悄悄地', full: '孩子睡着了，妈妈悄悄地走了出去。', vi: 'Bé ngủ rồi, mẹ khẽ khàng đi ra ngoài.',
        teach: '<b>悄悄地 + động từ</b> = khẽ khàng làm gì. <b>强烈</b> là mãnh liệt, không tả bước đi.', w: ['悄悄', '强烈'], u: '2-7' },
      { t: 'spot', chunks: ['他', '温暖地', '要求父母', '住在城里。'], bad: 1, fix: '强烈', full: '他强烈要求父母住在城里。', vi: 'Anh ấy hết lời đòi ba mẹ lên thành phố ở.',
        teach: '<b>强烈要求</b> = hết sức yêu cầu. <b>温暖</b> là ấm áp.', w: ['强烈', '温暖'], u: '2-5' },
      { t: 'spot', chunks: ['刚才下了', '一串', '大雨，', '现在停了。'], bad: 1, fix: '一阵', full: '刚才下了一阵大雨，现在停了。', vi: 'Vừa nãy mưa một trận lớn, giờ tạnh rồi.',
        teach: '<b>一阵雨</b> = một trận mưa. <b>一串</b> dùng cho chìa khoá, nho…', w: ['阵', '串'], u: '2-10' },
      { t: 'spot', chunks: ['妈妈已经', '把被子', '扑', '好了。'], bad: 2, fix: '铺', full: '妈妈已经把被子铺好了。', vi: 'Mẹ đã trải chăn xong rồi.',
        teach: '<b>铺</b> (钅) = trải; <b>扑</b> (扌) = vồ, phả vào. Cùng đọc pū.', w: ['铺', '扑'], u: '2-10' }
    ],
    hsk: [
      /* nghe: một đoạn hội thoại ngắn */
      { t: 'hear', kind: 'nghe', w: ['装修'], u: '2-4', lines: [{ v: 'f', zh: '你的新房装修完了吗？' }, { v: 'm', zh: '还没呢，下个月才能住。' }],
        opts: ['Nhà mới chưa sửa xong, tháng sau mới ở được.', 'Nhà mới sửa xong rồi, tháng sau mới ở được.', 'Nhà mới chưa sửa xong, tuần sau mới ở được.'],
        why: 'Người hỏi: <b>装修完了吗？</b> (sửa xong chưa?). Người đáp: <b>还没呢</b> (chưa), <b>下个月才能住</b> (tháng sau mới ở được).',
        whyNot: ['', '还没呢 = vẫn chưa (xong).', '下个月 = tháng sau, không phải tuần sau.'] },
      { t: 'hear', kind: 'nghe', w: ['冻', '姥姥'], u: '2-8', lines: [{ v: 'f', zh: '你姥姥怎么没来？' }, { v: 'm', zh: '她昨天晚上冻着了，今天在家休息。' }],
        opts: ['Bà ngoại không đến vì tối qua bị nhiễm lạnh, hôm nay nghỉ ở nhà.', 'Bà ngoại không đến vì hôm kia bị nhiễm lạnh, hôm nay nghỉ ở nhà.', 'Bà ngoại không đến vì tối qua bị nhiễm lạnh, hôm nay nằm viện.'],
        why: '<b>冻着了</b> = bị lạnh, nhiễm lạnh. <b>在家休息</b> = nghỉ ở nhà.',
        whyNot: ['', '昨天晚上 = tối qua, không phải hôm kia.', '在家休息 = nghỉ ở nhà, không phải nằm viện.'] },
      { t: 'hear', kind: 'nghe', w: ['临', '锁'], u: '2-6', lines: [{ v: 'f', zh: '临走的时候别忘了锁门。' }, { v: 'm', zh: '放心吧，钥匙在我这儿。' }],
        opts: ['Lúc sắp đi nhớ khoá cửa; chìa khoá đang ở chỗ người trả lời.', 'Lúc sắp đi nhớ khoá cửa; chìa khoá không ở chỗ người trả lời.', 'Lúc sắp đi nhớ tắt đèn; chìa khoá đang ở chỗ người trả lời.'],
        why: '<b>临走的时候</b> = lúc sắp đi. <b>钥匙在我这儿</b> = chìa khoá ở chỗ mình.',
        whyNot: ['', '钥匙在我这儿 = chìa khoá đang ở chỗ mình (người trả lời).', '锁门 = khoá cửa, không phải tắt đèn.'] },
      /* đọc: đoạn văn có chỗ trống */
      { t: 'mc', kind: 'doc', w: ['强烈'], u: '2-5', scene: 'c2_twoPlaces', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['我姥姥一辈子住在农村。去年冬天，舅舅___要求她来城里住，可是她坚决不同意，说老屋住着最舒服。', 'Bà ngoại mình cả đời sống ở nông thôn. Mùa đông năm ngoái, cậu hết lời yêu cầu bà lên thành phố ở, nhưng bà nhất quyết không đồng ý, nói nhà cũ ở dễ chịu nhất.'],
        full: '我姥姥一辈子住在农村。去年冬天，舅舅强烈要求她来城里住，可是她坚决不同意，说老屋住着最舒服。',
        opts: [{ t: '强烈', ok: 1 }, { t: '不得了', note: '不得了 đứng sau 得 (冷得不得了), không đứng trước động từ.' }, { t: '一辈子', note: '一辈子 = cả đời; đoạn văn nói một lần đề nghị vào mùa đông năm ngoái.' }],
        teach: '<b>强烈要求</b> = hết lời yêu cầu; đi đôi với <b>坚决不同意</b> (nhất quyết không đồng ý).' },
      { t: 'mc', kind: 'doc', w: ['阵'], u: '2-10', scene: 'c2_parentsDoor', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['转眼又到了冬天。下了长途车，外面冷得不得了。可是一打开家门，一___暖风扑面而来，饭菜的香味也从厨房里飘了出来。', 'Chớp mắt lại tới mùa đông. Xuống xe đường dài, ngoài trời lạnh kinh khủng. Nhưng vừa mở cửa nhà, một luồng gió ấm phả vào mặt, mùi cơm canh cũng từ bếp bay ra.'],
        full: '转眼又到了冬天。下了长途车，外面冷得不得了。可是一打开家门，一阵暖风扑面而来，饭菜的香味也从厨房里飘了出来。',
        opts: [{ t: '阵', ok: 1 }, { t: '套', note: '套 là bộ, căn (一套房子); gió ấm phả tới từng đợt là 一阵.' }, { t: '串', note: '串 là chùm, xâu (一串钥匙).' }],
        teach: '<b>一阵 + 风 / 雨 / 香味</b>: một cơn, một đợt.' },
      { t: 'mc', kind: 'doc', w: ['流泪'], u: '2-11', scene: 'c2_tears', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['我在外地打工三年了。每次打电话，妈妈都说家里一切都好。今年春节回家，我才看到父母老了很多。我鼻子一酸，___下了眼泪。', 'Mình đi làm thuê ở nơi khác ba năm rồi. Lần nào gọi điện, mẹ cũng nói ở nhà mọi thứ đều ổn. Tết năm nay về nhà, mình mới thấy ba mẹ già đi nhiều. Sống mũi cay cay, nước mắt mình trào ra.'],
        full: '我在外地打工三年了。每次打电话，妈妈都说家里一切都好。今年春节回家，我才看到父母老了很多。我鼻子一酸，流下了眼泪。',
        opts: [{ t: '流', ok: 1 }, { t: '飘', note: '飘 = bay nhẹ theo gió; nước mắt thì 流 (chảy): 流下了眼泪.' }, { t: '晒', note: '晒 = phơi.' }],
        teach: '<b>流泪</b> tách ra được: <b>流下了眼泪</b>, 流下了热泪 (trong bài).' },
      /* viết: sắp xếp thành câu */
      { t: 'order', kind: 'viet', w: ['坚决'], u: '2-2', zh: '父母坚决不在城里住。', vi: 'Ba mẹ nhất quyết không ở thành phố.', chunks: ['父母', '坚决', '不在', '城里住'] },
      { t: 'order', kind: 'viet', w: ['套', '装修'], u: '2-4', zh: '这套房子装修得非常漂亮。', vi: 'Căn nhà này sửa sang rất đẹp.', chunks: ['这套房子', '装修得', '非常', '漂亮'] },
      { t: 'order', kind: 'viet', w: ['串', '悄悄'], u: '2-7', zh: '他悄悄地把一串钥匙给了我。', vi: 'Anh ấy lặng lẽ đưa cho mình một chùm chìa khoá.', chunks: ['他', '悄悄地', '把一串钥匙', '给了我'] },
      { t: 'order', kind: 'viet', w: ['立刻', '感受'], u: '2-11', zh: '一回到家，我就立刻感受到了家的温暖。', vi: 'Vừa về tới nhà, mình đã cảm nhận ngay hơi ấm gia đình.', chunks: ['一回到家', '我就', '立刻感受到了', '家的温暖'] }
    ]
  };
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

  /* ---- shared props for tập 3–11 ---- */
  var wall = function (c, fl) { return R(0, 0, 400, 300, c || '#f6ead8') + R(0, 236, 400, 64, fl || '#d9b88a'); };
  var win = function (x, y, w, h, sky) { return R(x, y, w, h, sky || C.sky, 6, 'stroke="#fff" stroke-width="6"') + Ln(x + w / 2, y, x + w / 2, y + h, '#fff', 4); };
  var nightSky = function () { return R(0, 0, 400, 300, '#26304f') + Ci(334, 60, 26, '#fff3c0') + Ci(346, 54, 22, '#26304f') + [[40, 40], [100, 80], [170, 30], [240, 70], [290, 24], [380, 110]].map(([x, y]) => Ci(x, y, 2.4, '#fff')).join(''); };
  var sofa = function (x, y, s, c) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-70, -20, 140, 44, c || '#bd6a5a', 14) + R(-70, -46, 140, 34, c || '#bd6a5a', 14) + R(-80, -30, 20, 54, '#a8584a', 10) + R(60, -30, 20, 54, '#a8584a', 10)); };
  var bed = function (x, y, s, made) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-90, -40, 18, 70, C.brown, 4) + R(-90, -6, 180, 30, '#8a5a3b', 8) + R(-72, -22, 40, 18, '#fff', 8) + (made === false ? Pa('M-30 -12 Q20 -40 80 -10 L84 6 L-30 6Z', '#cfe0f0') : R(-30, -16, 116, 22, '#9fd3ee', 8) + Ln(-24, -6, 80, -6, 'rgba(255,255,255,.5)', 3))); };
  var box = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-26, -22, 52, 44, '#d9a86a', 4) + Ln(-26, -6, 26, -6, '#b8864a', 3) + Ln(0, -22, 0, -6, '#b8864a', 3)); };
  var bus = function (x, y, s, c, lit) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-110, -70, 220, 90, c || '#4f7f8f', 14) + [-86, -46, -6, 34].map(q => R(q, -58, 32, 28, lit ? '#ffe39a' : '#cfe3f2', 4)).join('') + R(74, -58, 26, 64, lit ? '#ffe39a' : '#cfe3f2', 4) + Ci(-66, 22, 15, '#333') + Ci(66, 22, 15, '#333') + Ci(-66, 22, 6, '#999') + Ci(66, 22, 6, '#999')); };
  var hardhat = function () { return Pa('M-30 -14 Q-30 -46 0 -46 Q30 -46 30 -14Z', '#f2c230') + R(-36, -16, 72, 8, '#e0ad1c', 4); };
  var money = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-30, -16, 60, 32, '#7fbf7a', 4, 'stroke="#4f8f4a" stroke-width="2"') + Ci(0, 0, 9, 'none', 'stroke="#4f8f4a" stroke-width="2"') + R(-22, -26, 60, 32, '#94cc8f', 4, 'stroke="#4f8f4a" stroke-width="2" opacity=".9"')); };
  var sweat = function (x, y) { return tear(x, y) + tear(x + 12, y + 10); };
  var dog = function (x, y, s, o) { o = o || {}; return G(`translate(${x} ${y}) scale(${s || 1}${o.flip ? ' ' : ''})`, R(-40, -16, 80, 34, '#c99a6a', 16) + Ci(44, -22, 22, '#c99a6a') + Pa('M30 -40 L22 -62 L40 -46Z', '#8a5a3b') + Ci(52, -26, 3, C.ink) + Ci(64, -18, 4, C.ink) + R(-34, 12, 10, 26, '#b8864a', 4) + R(24, 12, 10, 26, '#b8864a', 4) + Pa('M-40 -8 Q-62 -30 -56 -44', 'none', 'stroke="#c99a6a" stroke-width="7" stroke-linecap="round"') + (o.run ? Pa('M-80 -10 l-20 0 M-84 6 l-24 0', 'none', `stroke="${C.grey}" stroke-width="4" stroke-linecap="round"`) : '')); };
  var keyring = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, Ci(0, 0, 22, 'none', 'stroke="#c99a3e" stroke-width="6"') + keyIcon(4, 26, 80, '#e2a83a') + keyIcon(-6, 24, 105, '#c99a3e') + keyIcon(14, 22, 55, '#d9b45a') + keyIcon(-14, 20, 130, '#e8be6a')); };
  var padlock = function (x, y, s, open) { return G(`translate(${x} ${y}) scale(${s || 1})`, Pa(open ? 'M-14 -10 L-14 -34 Q-14 -50 2 -50 Q18 -50 18 -34 L18 -26' : 'M-14 -10 L-14 -30 Q-14 -46 0 -46 Q14 -46 14 -30 L14 -10', 'none', 'stroke="#8a96ad" stroke-width="7"') + R(-22, -12, 44, 36, '#e2a83a', 6) + Ci(0, 4, 5, C.ink) + R(-2, 4, 4, 10, C.ink)); };
  var door = function (x, y, s, state) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-40, -100, 80, 160, '#8a5a3b', 4) + (state === 'open' ? R(-36, -96, 72, 152, '#ffe39a') + Pa('M-36 -96 L-60 -86 L-60 50 L-36 56Z', C.brown) : R(-36, -96, 72, 152, C.brown, 2) + Ci(24, -20, 5, C.butter))); };

  /* ---- tập 3 ---- */
  S.c2_buyHouse = () => R(0, 0, 400, 300, '#eaf2f8') + R(0, 236, 400, 64, '#c9b79c') + R(196, 20, 8, 260, '#fff') +
    person(64, 150, { s: .6, hs: 'short', shirt: C.org, hat: hardhat() }) + box(84, 200, .8) + person(150, 170, { s: .5, hs: 'pony', shirt: C.pink }) + money(100, 236, .7) +
    Pa('M178 140 L222 140', 'none', `stroke="${C.org}" stroke-width="8" stroke-linecap="round"`) + Pa('M214 128 L232 140 L214 152Z', C.org) +
    tower(250, 70, 110, 166, '#e2c9a8') + R(290, 196, 30, 40, C.brown, 3) + keyIcon(260, 260, -10, '#e2a83a') + heart(300, 46, 1.2, C.red, 'class="fl"');
  L.c2_buyHouse = 'Hai vợ chồng đi làm thuê, dành tiền mua căn nhà mới';
  S.c2_work = () => R(0, 0, 400, 300, '#eaf2f8') + R(0, 240, 400, 60, '#c9b79c') + R(250, 40, 10, 200, '#8a96ad') + R(330, 40, 10, 200, '#8a96ad') + [80, 140, 200].map(y => R(250, y, 90, 8, '#8a96ad')).join('') +
    box(250, 228, .8) + box(296, 228, .8) + person(160, 140, { s: .85, hs: 'short', shirt: C.org, m: 'flat', hat: hardhat() }) + box(196, 112, 1.1) + sweat(126, 128);
  L.c2_work = 'Một người đội mũ bảo hộ khuân hàng ở công trường';
  S.c2_earn = () => R(0, 0, 400, 300, '#f3f7ea') + R(0, 240, 400, 60, '#cfe0b8') + person(150, 140, { s: .85, hs: 'short', shirt: C.teal, m: 'grin', hat: hardhat() }) + sweat(112, 126) +
    money(260, 150, 1.4) + hand(226, 168, 10) + R(300, 210, 40, 30, '#e2b85c', 4) + R(300, 200, 40, 10, '#c99a3e', 3) + Tx(320, 232, '¥', 22, C.white);
  L.c2_earn = 'Người thợ mồ hôi nhễ nhại, cầm xấp tiền vừa kiếm được';
  S.c2_county = () => R(0, 0, 400, 300, '#e3f0f8') + Pa('M0 210 Q200 180 400 210 L400 300 L0 300Z', '#a8d48f') + Pa('M30 230 Q200 200 370 230', 'none', `stroke="#c9b79c" stroke-width="14" stroke-linecap="round"`) +
    house(60, 190, .35) + house(100, 196, .3, { roof: '#6f5a8a' }) + Tx(80, 270, 'làng', 18, C.ink) +
    Ci(200, 160, 62, 'rgba(255,209,102,.6)', `stroke="${C.org}" stroke-width="4"`) + tower(166, 120, 30, 70, '#e2c9a8') + tower(202, 106, 34, 84, '#d9b88a') + house(200, 196, .28) + Tx(200, 270, 'huyện', 20, C.org) +
    G('', tower(296, 40, 30, 160, '#8fa3c0') + tower(330, 20, 34, 180, '#6f86aa') + tower(364, 60, 30, 140, '#a3b4cf')).replace('<g', '<g opacity=".55"') + Tx(340, 270, 'thành phố', 18, C.ink);
  L.c2_county = 'Bản đồ: làng, huyện (vòng sáng) và thành phố';
  S.c2_sets = () => R(0, 0, 400, 300, '#fbf3e6') +
    G('translate(70 150)', Pa('M-40 -70 L40 -70 L48 20 L-48 20Z', '#3f4f7a') + Pa('M-8 -70 L0 -40 L8 -70Z', '#fff') + R(-40, 24, 34, 80, '#3f4f7a', 4) + R(6, 24, 34, 80, '#3f4f7a', 4)) +
    G('translate(200 160)', Ci(0, 0, 48, '#fff', `stroke="${C.teal}" stroke-width="4"`) + Ci(0, 0, 30, 'none', `stroke="${C.teal}" stroke-width="2"`) + Pa('M-34 40 Q0 76 34 40Z', '#fff', `stroke="${C.teal}" stroke-width="4"`) + R(50, -30, 6, 80, C.grey, 3) + R(-58, -30, 6, 80, C.grey, 3)) +
    G('translate(330 150)', R(-50, -50, 100, 100, '#fff', 4, `stroke="${C.ink}" stroke-width="4"`) + Ln(-50, 0, 10, 0, C.ink, 3) + Ln(10, -50, 10, 50, C.ink, 3) + Ln(10, 10, 50, 10, C.ink, 3)) +
    [70, 200, 330].map(x => Pa(`M${x - 50} 262 Q${x - 50} 272 ${x - 40} 272 L${x + 40} 272 Q${x + 50} 272 ${x + 50} 262`, 'none', `stroke="${C.org}" stroke-width="4"`)).join('');
  L.c2_sets = 'Ba thứ đi thành bộ: bộ com-lê, bộ chén đĩa, một căn hộ';
  var plan = function (rooms) {
    let g = R(0, 0, 400, 300, '#eef4fb') + R(60, 40, 280, 220, '#fff', 4, `stroke="${C.ink}" stroke-width="6"`);
    if (rooms === 3) g += Ln(180, 40, 180, 260, C.ink, 5) + Ln(180, 150, 340, 150, C.ink, 5) + Ln(60, 170, 180, 170, C.ink, 5) + bed(120, 110, .45) + bed(260, 100, .45) + sofa(120, 230, .5) + R(250, 190, 60, 40, '#e8d3b0', 4) + R(170, 250, 30, 10, '#ffe39a');
    else g += bed(200, 150, .9) + R(80, 210, 50, 40, '#e8d3b0', 4) + R(310, 60, 20, 30, '#ffe39a');
    return g;
  };
  S.c2_flat3 = () => plan(3); L.c2_flat3 = 'Sơ đồ một căn nhà có ba phòng';
  S.c2_room1 = () => plan(1); L.c2_room1 = 'Sơ đồ một gian phòng nhỏ có một cái giường';
  S.c2_furniture = () => wall('#f3e6d3') + sofa(130, 200, 1) + R(230, 180, 110, 12, C.brown, 4) + R(238, 192, 10, 44, C.brown) + R(322, 192, 10, 44, C.brown) + chair(250, 196, '#a8584a') + R(150, 50, 100, 70, '#fff', 4, `stroke="${C.brown}" stroke-width="5"`);
  L.c2_furniture = 'Một bộ đồ gỗ: ghế sofa, bàn, ghế';

  /* ---- tập 4 ---- */
  S.c2_newHome = () => wall('#fdf3e3', '#e2c9a8') + win(260, 40, 110, 80) + sofa(320, 214, .7, C.teal) + heart(200, 40, 1.3, C.red, 'class="fl"') +
    dad(80, 140, { s: .7, m: 'grin' }) + hand(126, 150, 9) + mom(170, 140, { s: .7, m: 'grin' }) + person(270, 150, { s: .6, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'smile', flip: 1 }) + keyring(226, 156, .6);
  L.c2_newHome = 'Trong nhà mới: ba mẹ cười tươi, cô con dâu đưa chùm chìa khoá, ba xua tay';
  S.c2_renovate = () => wall('#fdf7ee', '#cfc3b0') + R(40, 40, 160, 196, '#cfe8dc') + R(200, 40, 160, 196, '#fdf7ee') + Pa('M60 236 L100 40 M140 236 L100 40', 'none', `stroke="${C.brown}" stroke-width="6"`) + [90, 140, 190].map(y => Ln(70 + (236 - y) * 0, y, 130, y, C.brown, 5)).join('') +
    person(260, 150, { s: .7, hs: 'short', shirt: C.butter, m: 'smile', hat: Pa('M-30 -20 Q0 -50 30 -20Z', '#fff') }) + Ln(214, 120, 200, 70, C.grey, 5) + R(186, 50, 30, 24, '#8fd0b0', 4) + R(300, 210, 40, 26, '#8fd0b0', 4) + Pa('M300 210 Q320 196 340 210', 'none', `stroke="${C.grey}" stroke-width="3"`);
  L.c2_renovate = 'Thợ đang lăn sơn tường, có thang và thùng sơn';
  S.c2_moveBoxes = () => wall('#fdf3e3') + door(310, 176, 1, 'open') + box(80, 214, 1) + box(80, 170, .9) + box(140, 214, 1) + person(220, 140, { s: .7, hs: 'short', shirt: C.navy, m: 'grin', flip: 1 }) + box(250, 160, 1.1);
  L.c2_moveBoxes = 'Một người khuân thùng đồ vào nhà (dọn nhà)';
  S.c2_fixCar = () => R(0, 0, 400, 300, '#eaf2f8') + R(0, 236, 400, 64, '#8a8f99') + car(220, 236, 1.6, C.red) + person(90, 150, { s: .7, hs: 'short', shirt: C.teal, m: 'flat', brows: 'worry' }) + Ln(130, 190, 160, 170, C.grey, 6) + Ci(162, 168, 8, 'none', `stroke="${C.grey}" stroke-width="4"`);
  L.c2_fixCar = 'Một người cầm cờ lê sửa xe hơi';
  S.c2_hot = () => R(0, 0, 400, 300, '#fff1d6') + sun(300, 70, 46) + R(0, 240, 400, 60, '#f2d29c') + person(150, 140, { s: .85, hs: 'short', shirt: C.red, m: 'open', brows: 'worry' }) + sweat(104, 120) + sweat(186, 110) +
    R(40, 70, 18, 120, '#fff', 9, `stroke="${C.ink}" stroke-width="3"`) + R(44, 100, 10, 86, C.red, 5) + Ci(49, 194, 14, C.red);
  L.c2_hot = 'Trời nắng gắt, một người nóng toát mồ hôi, nhiệt kế đỏ rực';
  S.c2_keyBunch = () => R(0, 0, 400, 300, '#fff6e3') + keyring(80, 110, 1.3) +
    G('translate(220 120)', [[0, 0], [-18, 0], [18, 0], [-9, 18], [9, 18], [0, 36], [-27, -18], [27, -18], [-9, -18], [9, -18]].map(([x, y]) => Ci(x, y, 11, '#8a4fa8')).join('') + R(-2, -46, 4, 26, C.green)) +
    G('translate(330 150) rotate(20)', R(-3, -90, 6, 180, '#c99a6a', 3) + [-60, -30, 0, 30].map(y => R(-16, y, 32, 24, '#a8584a', 6)).join(''));
  L.c2_keyBunch = 'Một chùm chìa khoá, một chùm nho và một xiên thịt';

  S.c2_goodNews = () => wall('#fff3e3') + win(280, 40, 90, 70) + person(170, 140, { s: .85, hs: 'bob', hair: C.hairG, shirt: C.teal, m: 'grin', eyes: 'closed' }) + hand(110, 96, 10) + hand(230, 96, 10) +
    R(234, 140, 60, 44, '#fff', 4, `stroke="${C.red}" stroke-width="3"`) + Pa('M234 140 L264 166 L294 140', 'none', `stroke="${C.red}" stroke-width="3"`) + conf(8);
  L.c2_goodNews = 'Người mẹ giơ hai tay reo mừng, cầm lá thư báo tin vui';
  /* ---- tập 5 ---- */
  S.c2_drunkNight = () => wall('#e8e0f0', '#c9b79c') + win(40, 40, 110, 80, '#26304f') + Ci(118, 66, 12, '#fff3c0') + clockWall(210, 64, 28, 9, 40) + sofa(220, 210, 1, '#7a8fb2') +
    person(220, 160, { s: .6, hs: 'short', hair: C.hairG, shirt: '#7a6a4f', m: 'smile', eyes: 'closed' }).replace(/opacity="\.5"/g, 'opacity=".95"') + Zs(262, 140, .7) + R(80, 220, 60, 10, C.brown, 3) + R(96, 196, 14, 26, '#7fbf7a', 4) + R(100, 186, 6, 12, '#7fbf7a');
  L.c2_drunkNight = 'Trời tối, ba mặt đỏ ngủ trên ghế sofa, chai rượu trên bàn';
  S.c2_tipsy = () => R(0, 0, 400, 300, '#f3eaf6') + R(0, 240, 400, 60, '#d8c6a8') + person(170, 140, { s: .85, hs: 'short', shirt: C.navy, m: 'grin', eyes: 'closed' }).replace(/opacity="\.5"/g, 'opacity=".95"') +
    Pa('M110 60 q10 -14 20 0 q10 14 20 0 M210 50 q10 -14 20 0 q10 14 20 0', 'none', `stroke="${C.plum}" stroke-width="4" stroke-linecap="round"`) + R(290, 170, 26, 60, '#7fbf7a', 6) + R(296, 150, 14, 24, '#7fbf7a', 3) + R(250, 200, 24, 30, '#fff', 4, `stroke="${C.ink}" stroke-width="2"`);
  L.c2_tipsy = 'Một người mặt đỏ, lâng lâng cạnh chai rượu';
  S.c2_lastBus = () => nightSky() + R(0, 236, 400, 64, '#4a5068') + bus(270, 214, .9, '#4f7f8f', 1) + Ci(160, 120, 8, '#ffe39a') + R(158, 126, 4, 110, '#8a96ad') +
    dad(170, 180, { s: .4, flip: 1 }) + mom(214, 180, { s: .4, flip: 1 }) + person(60, 176, { s: .42, hs: 'short', shirt: C.teal, m: 'open', brows: 'worry' }) + person(110, 176, { s: .42, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'open', brows: 'worry' }) + hand(140, 196, 6);
  L.c2_lastBus = 'Ban đêm, ba mẹ bước lên chuyến xe cuối, hai vợ chồng níu lại';
  S.c2_strongSun = () => R(0, 0, 400, 300, '#fff1d6') + sun(310, 76, 56) + R(0, 236, 400, 64, '#f2d29c') + person(150, 140, { s: .85, hs: 'pony', shirt: C.teal, m: 'flat', eyes: 'closed' }) + hand(176, 112, 10) + Pa('M80 290 L220 290 L180 250 L120 250Z', 'rgba(0,0,0,.12)');
  L.c2_strongSun = 'Nắng trưa chói chang, một người lấy tay che mắt';
  S.c2_night = () => nightSky() + Pa('M0 220 Q200 200 400 222 L400 300 L0 300Z', '#2f3a5a') + house(100, 196, .55, {}) .replace(new RegExp(C.sky, 'g'), '#3b4766') + house(300, 200, .5, { lit: 1 });
  L.c2_night = 'Ban đêm, trăng sao, một căn nhà còn sáng đèn';
  var arrive = function (night, leave) {
    return (night ? nightSky() : R(0, 0, 400, 300, '#cfe9f5') + sun(330, 60, 24)) + R(0, 236, 400, 64, night ? '#4a5068' : '#c9b79c') + R(200, 60, 200, 176, night ? '#3b4766' : '#f3e2c4') + door(260, 196, .8, 'open') +
      clock(100, 70, 34, 12, 0) + person(leave ? 150 : 236, 150, { s: .55, hs: 'short', shirt: C.navy, m: 'smile', flip: leave ? 1 : 0 }) + (leave ? R(110, 200, 30, 36, C.red, 6) + Pa('M86 210 l-24 0 M90 226 l-28 0', 'none', `stroke="${C.grey}" stroke-width="4"`) : '');
  };
  S.c2_clockNight = () => arrive(1, 0); L.c2_clockNight = 'Ban đêm, đồng hồ chỉ 12 giờ, một người bước vào nhà';
  S.c2_clockNoon = () => arrive(0, 0); L.c2_clockNoon = 'Ban ngày, đồng hồ chỉ 12 giờ, một người bước vào nhà';
  S.c2_leaveNight = () => arrive(1, 1); L.c2_leaveNight = 'Ban đêm, đồng hồ chỉ 12 giờ, một người kéo vali ra khỏi nhà';
  S.c2_dogBroke = () => R(0, 0, 400, 300, '#e9f4e3') + R(0, 236, 400, 64, '#a8d48f') + R(40, 120, 16, 120, C.brown, 4) + Pa('M56 160 Q90 170 110 168', 'none', `stroke="${C.brown}" stroke-width="5"`) + Pa('M110 168 l8 -8 l4 10', 'none', `stroke="${C.brown}" stroke-width="4"`) +
    Pa('M160 176 l8 8 l-4 8', 'none', `stroke="${C.brown}" stroke-width="4"`) + Pa('M168 186 Q190 190 212 196', 'none', `stroke="${C.brown}" stroke-width="5"`) + dog(270, 200, 1, { run: 1 });
  L.c2_dogBroke = 'Sợi dây buộc chó đứt làm hai, con chó chạy mất';
  S.c2_dogTied = () => R(0, 0, 400, 300, '#e9f4e3') + R(0, 236, 400, 64, '#a8d48f') + R(40, 120, 16, 120, C.brown, 4) + Pa('M56 160 Q120 200 196 196', 'none', `stroke="${C.brown}" stroke-width="5"`) + dog(240, 200, 1) + Zs(300, 140, .6);
  L.c2_dogTied = 'Con chó còn buộc dây vào cột, nằm ngủ';
  /* ---- tập 6 (tease of tập 5) ---- */
  S.c2_lockedHouse = () => R(0, 0, 400, 300, '#e3eef5') + R(0, 236, 400, 64, '#c9b79c') + tower(40, 40, 160, 196, '#e2c9a8') + R(102, 180, 36, 56, C.brown, 3) + padlock(120, 212, .7) +
    person(270, 150, { s: .55, hs: 'short', shirt: C.teal, m: 'flat', flip: 1 }) + person(340, 150, { s: .55, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'flat', flip: 1 }) + R(220, 196, 30, 40, C.red, 6) + R(366, 196, 30, 40, C.navy, 6);
  L.c2_lockedHouse = 'Căn nhà mới khoá cửa, hai vợ chồng kéo vali đi xa';

  var sleepHead = function (x, y, s, hair) { return G(`translate(${x} ${y}) scale(${s || 1})`, `<ellipse cx="0" cy="0" rx="27" ry="29" fill="${C.skin}"/>` + Pa('M-29 -2 C-33 -42 33 -42 29 -2 C21 -19 -21 -19 -29 -2Z', hair || C.hairD) + Pa('M-15 -1 Q-10 3 -5 -1 M5 -1 Q10 3 15 -1', 'none', `stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"`) + Ci(-17, 9, 5, C.pink, 'opacity=".5"') + Ci(17, 9, 5, C.pink, 'opacity=".5"')); };
  /* ---- tập 6 ---- */
  S.c2_seeOff = () => R(0, 0, 400, 300, '#e3eef5') + R(0, 236, 400, 64, '#8a8f99') + bus(300, 214, .8, '#7a8fb2') + R(30, 60, 10, 176, '#8a96ad') + R(10, 50, 50, 26, C.teal, 4) +
    dad(110, 150, { s: .5, m: 'grin' }) + R(70, 196, 26, 34, '#7a6a4f', 6) + hand(150, 166, 7) + person(190, 154, { s: .5, hs: 'short', shirt: C.teal, m: 'smile', flip: 1 }) + person(240, 156, { s: .48, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'smile', flip: 1 }) + R(214, 202, 26, 34, C.red, 6);
  L.c2_seeOff = 'Ba xách túi từ quê vội lên bến xe tiễn hai vợ chồng';
  S.c2_lock = () => R(0, 0, 400, 300, '#fbf3e6') + padlock(140, 170, 2.6) + keyIcon(240, 160, 0, '#e2a83a').replace('translate(240 160)', 'translate(240 160) scale(1.4)');
  L.c2_lock = 'Một ổ khoá và một chiếc chìa khoá';
  S.c2_aboutToLeave = () => wall('#f6ead8') + door(330, 176, 1) + R(250, 186, 34, 50, C.red, 8) + R(262, 176, 10, 12, C.red, 3) + clockWall(90, 70, 30, 7, 55) + person(170, 150, { s: .65, hs: 'short', shirt: C.teal, m: 'smile', flip: 1 }) + R(196, 70, 70, 26, '#fff', 13, `stroke="${C.org}" stroke-width="3"`) + Pa('M206 83 l40 0 M238 75 l8 8 l-8 8', 'none', `stroke="${C.org}" stroke-width="3"`);
  L.c2_aboutToLeave = 'Vali đặt sẵn ở cửa, đồng hồ sắp đến giờ, một người sắp đi';
  var doorScene = function (kind) {
    return R(0, 0, 400, 300, '#e3eef5') + R(0, 236, 400, 64, '#c9b79c') + R(40, 40, 200, 196, '#e2c9a8') + door(140, 196, .9, kind === 'open' ? 'open' : 'shut') +
      (kind === 'lock' ? padlock(120, 176, .6) + person(200, 156, { s: .55, hs: 'pony', shirt: C.plum, m: 'smile' }) + hand(166, 176, 7) :
        kind === 'open' ? person(300, 156, { s: .55, hs: 'pony', shirt: C.plum, m: 'smile', flip: 1 }) + R(330, 200, 26, 36, C.red, 6) :
          person(220, 150, { s: .6, hs: 'pony', shirt: C.plum, m: 'frown', brows: 'worry' }) + bubble(270, 40, 110, 70, '', 26, C.white) + keyIcon(292, 76, 0, '#e2a83a') + Tx(366, 96, '?', 30, C.red));
  };
  S.c2_doorOpen = () => doorScene('open'); L.c2_doorOpen = 'Cô gái kéo vali đi xa, cửa nhà vẫn mở toang';
  S.c2_doorLocking = () => doorScene('lock'); L.c2_doorLocking = 'Cô gái đang khoá cửa trước khi đi';
  S.c2_lostKey = () => doorScene('lost'); L.c2_lostKey = 'Cô gái đứng trước cửa, lo lắng nghĩ về chiếc chìa khoá';
  /* ---- tập 7 ---- */
  S.c2_whisper = () => R(0, 0, 400, 300, '#e3eef5') + R(0, 236, 400, 64, '#8a8f99') + bus(330, 214, .6, '#7a8fb2') + person(330, 170, { s: .4, hs: 'long', hair: C.hairD, shirt: C.pink }) +
    dad(130, 150, { s: .62, m: 'smile', flip: 1 }) + person(210, 150, { s: .62, hs: 'short', shirt: C.teal, m: 'smile' }) + hand(162, 126, 7) + Pa('M168 112 q8 -8 16 0 M172 102 q10 -12 22 0', 'none', `stroke="${C.org}" stroke-width="3" stroke-linecap="round"`);
  L.c2_whisper = 'Ba kéo con trai ra một góc, ghé tai nói nhỏ';
  S.c2_whisperWord = () => R(0, 0, 400, 300, '#f3eaf6') + R(0, 240, 400, 60, '#d8c6a8') + person(140, 140, { s: .8, hs: 'pony', shirt: C.plum, m: 'smile', flip: 1 }) + hand(186, 112, 9) + person(260, 140, { s: .8, hs: 'short', shirt: C.butter, m: 'wow', eyes: 'wide' }) +
    Pa('M196 96 q8 -8 16 0 M200 84 q10 -12 22 0', 'none', `stroke="${C.plum}" stroke-width="3" stroke-linecap="round"`) + Tx(110, 50, '…', 34, C.grey);
  L.c2_whisperWord = 'Một người che miệng nói thầm vào tai người kia';
  S.c2_quiltSun = () => R(0, 0, 400, 300, '#fff6e3') + bubble(20, 16, 360, 220, '', 26, '#eaf6ff') + sun(320, 66, 22) + Ln(60, 70, 280, 70, C.grey, 3) + R(80, 70, 110, 70, '#9fd3ee', 6) + R(200, 70, 70, 60, C.pink, 6) +
    mom(110, 160, { s: .38 }) + dad(250, 160, { s: .38, m: 'grin' }) + Ln(280, 184, 300, 220, C.brown, 4) + Pa('M292 214 L312 222 L300 232Z', C.butter);
  L.c2_quiltSun = 'Trong bóng nghĩ: ba mẹ phơi chăn, quét dọn căn nhà mới';
  S.c2_shyDad = () => R(0, 0, 400, 300, '#e3eef5') + R(0, 236, 400, 64, '#8a8f99') + dad(170, 140, { s: .85, m: 'smile', eyes: 'closed' }).replace(/opacity="\.5"/g, 'opacity="1"').replace(new RegExp('fill="' + C.pink + '" opacity="1"', 'g'), 'fill="#ef6b6b" opacity="1"') + hand(226, 150, 10) +
    person(320, 160, { s: .6, hs: 'short', shirt: C.teal, m: 'smile', flip: 1 }) + Tx(110, 70, '…', 34, C.grey);
  L.c2_shyDad = 'Ba nói nhỏ nhẹ, mặt đỏ lên, gãi đầu ngượng ngùng';
  S.c2_dry = () => R(0, 0, 400, 300, '#cfe9f5') + sun(330, 60, 30) + R(0, 236, 400, 64, '#a8d48f') + R(40, 80, 8, 160, C.brown) + R(352, 80, 8, 160, C.brown) + Ln(44, 96, 356, 96, C.grey, 3) +
    R(70, 96, 120, 100, '#9fd3ee', 6) + Ln(70, 130, 190, 130, 'rgba(255,255,255,.6)', 3) + Pa('M220 96 L240 96 L248 106 L262 106 L270 96 L290 96 L292 150 L218 150Z', C.red) + R(300, 96, 30, 70, C.navy, 4);
  L.c2_dry = 'Chăn và quần áo phơi trên dây dưới nắng';
  S.c2_quilt = () => wall('#e8e0f0', '#c9b79c') + win(280, 40, 90, 70, '#26304f') + bed(190, 200, 1.4) + sleepHead(100, 160, .7) + R(130, 160, 180, 40, '#9fd3ee', 14) + Ln(140, 176, 300, 176, 'rgba(255,255,255,.5)', 4) + Zs(170, 120, .7);
  L.c2_quilt = 'Một người ngủ trên giường, đắp chiếc chăn dày';
  S.c2_tiptoe = () => wall('#efe6f3') + bed(110, 196, .8) + sleepHead(60, 172, .45) + R(76, 168, 100, 24, '#9fd3ee', 10) + Zs(100, 130, .5) + door(330, 176, .9, 'open') +
    person(250, 140, { s: .7, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'smile', flip: 1 }) + R(214, 108, 4, 20, C.ink, 2) + Pa('M226 250 l14 -10 M262 252 l14 -10', 'none', `stroke="${C.grey}" stroke-width="3"`);
  L.c2_tiptoe = 'Mẹ nhón chân khẽ khàng ra khỏi phòng, em bé đang ngủ';
  S.c2_sneakCookie = () => wall('#fdf3e3') + R(40, 150, 140, 86, '#d9b88a', 4) + R(70, 120, 60, 36, '#e2b85c', 8) + Ci(84, 126, 6, '#a86a3a') + Ci(104, 124, 6, '#a86a3a') +
    person(150, 160, { s: .55, hs: 'short', shirt: C.org, m: 'grin', eyes: 'closed' }) + hand(118, 130, 7) + R(300, 170, 90, 66, '#cfc3b0', 4) + R(320, 150, 50, 24, C.grey, 6) + Pa('M330 140 q6 -12 0 -24 M350 140 q6 -12 0 -24', 'none', `stroke="#bbb" stroke-width="3"`) + person(300, 130, { s: .6, hs: 'bob', hair: C.hairD, shirt: C.teal, m: 'smile' });
  L.c2_sneakCookie = 'Cậu bé lén lấy bánh khi mẹ quay lưng';
  S.c2_stomp = () => wall('#efe6f3') + bed(110, 196, .8) + person(90, 170, { s: .26, hs: 'short', shirt: C.butter, m: 'open', brows: 'worry' }) + R(96, 166, 70, 22, '#9fd3ee', 10) + tear(70, 160) +
    person(270, 140, { s: .7, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'open' }) + Pa('M230 260 l-16 10 M300 260 l16 10 M240 280 l-20 6', 'none', `stroke="${C.red}" stroke-width="4" stroke-linecap="round"`) + Pa('M300 110 q14 0 14 14 M308 96 q24 0 24 28 M316 82 q34 0 34 42', 'none', `stroke="${C.red}" stroke-width="4" stroke-linecap="round"`);
  L.c2_stomp = 'Một người đi rầm rầm, nói to, em bé thức giấc khóc';
  /* ---- tập 8 (tease of tập 7) ---- */
  S.c2_winterNight = () => nightSky() + snow(36) + R(0, 236, 400, 64, '#eef3f8') + person(110, 160, { s: .5, hs: 'short', shirt: C.navy, m: 'flat' }) + person(180, 160, { s: .5, hs: 'long', hair: C.hairD, shirt: C.plum, m: 'flat' }) +
    person(144, 196, { s: .28, hs: 'short', shirt: C.butter, m: 'frown' }) + R(220, 200, 30, 36, C.red, 6) + R(0, 160, 60, 76, '#3b4766') + R(330, 120, 70, 116, '#3b4766');
  L.c2_winterNight = 'Đêm đông tuyết rơi, cả nhà xách hành lý trở về';

  /* ---- tập 8 ---- */
  var elephant = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-40, -26, 80, 50, '#9aa6b8', 22) + Ci(42, -20, 24, '#9aa6b8') + Pa('M58 -10 Q74 20 62 44', 'none', 'stroke="#9aa6b8" stroke-width="10" stroke-linecap="round"') + Pa('M30 -38 Q14 -20 30 -2Z', '#8a96ad') + Ci(48, -26, 3, C.ink) + [-30, -10, 14, 30].map(q => R(q, 16, 12, 26, '#9aa6b8', 4)).join('')); };
  S.c2_cryingKid = () => nightSky() + snow(30) + R(0, 236, 400, 64, '#eef3f8') + bus(300, 210, .7, '#7a8fb2') + person(90, 150, { s: .5, hs: 'short', shirt: C.navy, m: 'frown', brows: 'worry' }) + person(160, 150, { s: .5, hs: 'long', hair: C.hairD, shirt: C.plum, m: 'frown', brows: 'worry' }) +
    person(126, 196, { s: .32, hs: 'short', shirt: C.butter, m: 'open', eyes: 'closed', brows: 'worry' }) + tear(110, 196) + tear(142, 196) + R(190, 196, 26, 40, C.red, 6);
  L.c2_cryingKid = 'Đêm đông, vừa xuống xe đường dài, đứa bé rét quá khóc to';
  S.c2_dustyImagine = () => R(0, 0, 400, 300, '#dfe6ee') + R(0, 236, 400, 64, '#c9cdd4') + person(70, 160, { s: .5, hs: 'short', shirt: C.navy, m: 'frown', brows: 'worry' }) + person(130, 160, { s: .5, hs: 'long', hair: C.hairD, shirt: C.plum, m: 'frown', brows: 'worry' }) +
    bubble(170, 20, 220, 170, '', 26, '#cfd3da') + R(196, 110, 120, 10, '#8a7a66', 3) + R(204, 120, 8, 50, '#8a7a66') + R(300, 120, 8, 50, '#8a7a66') + Pa('M200 104 Q256 92 312 104', 'none', 'stroke="#a8a8a8" stroke-width="6"') +
    Pa('M330 40 L380 40 M330 40 L380 90 M330 40 L340 100 M340 56 Q356 52 366 56 M336 74 Q352 70 372 76', 'none', 'stroke="#888" stroke-width="2"') + [[220, 60], [250, 80], [280, 50], [300, 74], [240, 150], [320, 150]].map(([x, y]) => Ci(x, y, 3, '#999')).join('');
  L.c2_dustyImagine = 'Hai vợ chồng lạnh run, tưởng tượng căn nhà lạnh lẽo phủ đầy bụi';
  S.c2_coach = () => R(0, 0, 400, 300, '#cfe9f5') + Pa('M0 170 Q100 110 200 150 T400 120 L400 300 L0 300Z', '#a8d48f') + Pa('M-10 260 Q150 190 260 200 T420 150', 'none', 'stroke="#8a8f99" stroke-width="30"') +
    Pa('M-10 260 Q150 190 260 200 T420 150', 'none', 'stroke="#fff" stroke-width="3" stroke-dasharray="14 12"') + bus(150, 212, .7, '#4f7f8f') + R(320, 60, 6, 90, C.brown) + R(290, 50, 70, 30, C.green, 4) + Tx(325, 72, '300 km', 16, C.white);
  L.c2_coach = 'Chiếc xe khách chạy trên con đường dài qua đồi, biển báo 300 km';
  S.c2_frozen = () => R(0, 0, 400, 300, '#dfeaf5') + snow(30) + R(0, 240, 400, 60, '#eef3f8') + person(200, 140, { s: .85, hs: 'short', shirt: C.navy, m: 'frown', brows: 'worry' }) + R(160, 176, 80, 16, C.red, 8) +
    Ci(150, 222, 14, '#f08a8a') + Ci(250, 222, 14, '#f08a8a') + Pa('M120 120 l-14 -6 M118 136 l-16 0 M280 120 l14 -6 M282 136 l16 0', 'none', `stroke="${C.navy}" stroke-width="3"`) +
    [[60, 80], [340, 70]].map(([x, y]) => Pa(`M${x} ${y - 16} L${x} ${y + 16} M${x - 14} ${y - 8} L${x + 14} ${y + 8} M${x - 14} ${y + 8} L${x + 14} ${y - 8}`, 'none', 'stroke="#8fc0e8" stroke-width="4"')).join('');
  L.c2_frozen = 'Một người rét run, hai bàn tay cóng đỏ, tuyết rơi';
  S.c2_imagine = () => R(0, 0, 400, 300, '#f3eaf6') + R(0, 240, 400, 60, '#d8c6a8') + person(110, 150, { s: .8, hs: 'pony', shirt: C.teal, m: 'smile', eyes: 'closed' }) +
    Ci(170, 110, 6, '#fff', `stroke="${C.ink}" stroke-width="2"`) + Ci(186, 90, 9, '#fff', `stroke="${C.ink}" stroke-width="2"`) + bubble(200, 20, 180, 130, '', 26, '#fff') + elephant(280, 86, .9);
  L.c2_imagine = 'Một người nhắm mắt, trong bóng nghĩ hiện ra con voi';
  S.c2_dust = () => wall('#e6e2da', '#c9c3b8') + R(80, 150, 240, 16, '#8a7a66', 4) + R(96, 166, 12, 74, '#8a7a66') + R(292, 166, 12, 74, '#8a7a66') + R(80, 140, 240, 12, '#b9b2a6', 4) + Pa('M150 146 Q190 140 230 146', 'none', 'stroke="#8a7a66" stroke-width="5" stroke-linecap="round"') +
    Pa('M330 20 L396 20 M330 20 L396 86 M330 20 L344 96 M344 40 Q364 34 380 40 M338 62 Q360 56 388 64', 'none', 'stroke="#999" stroke-width="2"') + [[120, 100], [170, 80], [220, 110], [270, 90], [140, 60], [250, 50]].map(([x, y]) => Ci(x, y, 3, '#aaa')).join('') + hand(240, 136, 9);
  L.c2_dust = 'Mặt bàn phủ đầy bụi, một ngón tay vạch một đường, mạng nhện trên góc tường';
  /* ---- tập 9 ---- */
  S.c2_litWindow = () => nightSky() + R(0, 250, 400, 50, '#4a5068') + R(120, 30, 160, 220, '#4b5574') + [50, 100, 150, 200].map(y => [140, 190, 240].map(x => R(x, y, 26, 30, (x === 240 && y === 50) ? '#ffe39a' : '#2f3a5a', 3)).join('')).join('') +
    person(60, 210, { s: .4, hs: 'short', shirt: C.navy, m: 'wow', eyes: 'wide' }) + person(320, 210, { s: .4, hs: 'long', hair: C.hairD, shirt: C.plum, m: 'wow', eyes: 'wide', flip: 1 });
  L.c2_litWindow = 'Đêm tối, cả toà nhà tắt đèn, chỉ một ô cửa sổ sáng; hai vợ chồng ngẩng nhìn';
  S.c2_lamp = () => R(0, 0, 400, 300, '#2f3a5a') + R(0, 240, 400, 60, '#3b4766') + Pa('M150 80 L250 80 L330 240 L70 240Z', 'rgba(255,214,120,.5)') + R(194, 70, 12, 150, '#c99a3e') + Pa('M160 40 L240 40 L262 80 L138 80Z', '#ffe39a') + R(170, 220, 60, 14, '#c99a3e', 6) +
    [[110, 60], [290, 60], [90, 130], [310, 130]].map(([x, y]) => Ln(200 + (x - 200) * .6, 60 + (y - 60) * .6, x, y, '#ffe39a', 4)).join('');
  L.c2_lamp = 'Trong phòng tối, một ngọn đèn đang sáng';
  S.c2_parentsDoor = () => R(0, 0, 400, 300, '#3b4766') + R(0, 240, 400, 60, '#4a5068') + R(120, 40, 160, 210, '#ffe39a') + Pa('M120 40 L90 54 L90 250 L120 244Z', C.brown) + mom(170, 140, { s: .62, m: 'grin' }) + dad(236, 140, { s: .62, m: 'grin' }) +
    [0, 1, 2].map(k => Pa(`M${300 + k * 22} ${120 + k * 30} q12 -10 0 -20 q-12 -10 0 -20`, 'none', `stroke="${C.org}" stroke-width="4" stroke-linecap="round"`)).join('') + heart(200, 30, 1, C.red, 'class="fl"');
  L.c2_parentsDoor = 'Cửa mở, ba mẹ mỉm cười trong ánh đèn ấm, hơi ấm toả ra';
  S.c2_smile = () => R(0, 0, 400, 300, '#fdf1e8') + R(0, 240, 400, 60, '#f0d9c4') + person(200, 130, { s: 1, hs: 'bob', hair: C.hairD, shirt: C.pink, m: 'smile' }) + heart(320, 70, 1, C.pink, 'class="fl"') + heart(80, 90, .8, C.pink, 'class="fl"');
  L.c2_smile = 'Một người mỉm cười nhẹ nhàng';
  S.c2_warm = () => R(0, 0, 400, 300, '#fff1e0') + R(0, 240, 400, 60, '#e8d3b0') + [0, 1, 2, 3, 4].map(k => R(40 + k * 22, 140, 16, 100, '#e8e8e8', 6)).join('') + R(36, 232, 116, 10, '#ccc', 4) +
    Pa('M250 150 L330 150 L322 230 Q290 244 258 230Z', C.white, `stroke="${C.org}" stroke-width="4"`) + Pa('M330 170 q24 4 0 34', 'none', `stroke="${C.org}" stroke-width="5"`) + hand(246, 196, 12) + hand(334, 196, 12) +
    [270, 290, 310].map(x => Pa(`M${x} 140 q8 -12 0 -24 q-8 -12 0 -24`, 'none', 'stroke="#ccc" stroke-width="4" stroke-linecap="round"')).join('') + heart(290, 50, 1.2, C.red, 'class="fl"');
  L.c2_warm = 'Hai bàn tay ôm cốc nước bốc hơi bên máy sưởi';
  S.c2_rightAway = () => wall('#eef4fb') + door(330, 176, 1, 'open') + R(60, 170, 70, 10, C.brown, 3) + R(80, 150, 30, 22, C.ink, 4) + Pa('M70 140 l-10 -10 M95 132 l0 -14 M120 140 l10 -10', 'none', `stroke="${C.red}" stroke-width="3"`) +
    person(240, 150, { s: .65, hs: 'short', shirt: C.teal, m: 'open', flip: 1 }) + Pa('M170 140 l-30 0 M176 170 l-40 0 M170 200 l-30 0', 'none', `stroke="${C.grey}" stroke-width="5" stroke-linecap="round"`);
  L.c2_rightAway = 'Điện thoại reo, một người lao ngay ra cửa';
  S.c2_pounce = () => R(0, 0, 400, 300, '#e9f4e3') + R(0, 236, 400, 64, '#a8d48f') + G('rotate(-12 170 180)', dog(170, 170, 1.1)) + Pa('M60 150 l-30 0 M70 180 l-40 0 M64 210 l-30 0', 'none', `stroke="${C.grey}" stroke-width="5" stroke-linecap="round"`) +
    person(310, 150, { s: .6, hs: 'short', shirt: C.butter, m: 'grin' });
  L.c2_pounce = 'Con chó lao chồm tới một cậu bé';
  /* ---- tập 10 ---- */
  S.c2_warmRoom = () => wall('#fff1e0', '#e8d3b0') + [0, 1, 2, 3].map(k => R(24 + k * 18, 160, 14, 76, '#e8e8e8', 6)).join('') + Pa('M40 150 q8 -10 0 -20 M70 150 q8 -10 0 -20', 'none', `stroke="${C.org}" stroke-width="3"`) +
    R(110, 60, 140, 176, '#f4e1ef') + bed(180, 200, .6) + R(270, 60, 120, 176, '#fdf3e3') + R(290, 170, 90, 66, '#cfc3b0', 4) + R(310, 146, 50, 26, C.grey, 6) +
    [320, 340].map(x => Pa(`M${x} 136 q8 -12 0 -24 q-8 -12 0 -24`, 'none', 'stroke="#d9a86a" stroke-width="4" stroke-linecap="round"')).join('') + Pa('M150 40 l6 -10 l6 10 l-6 10Z M220 30 l5 -8 l5 8 l-5 8Z', C.butter);
  L.c2_warmRoom = 'Trong nhà sạch sẽ, máy sưởi ấm, giường đã trải chăn, bếp toả hương thơm';
  var roomRead = function (k) {
    let g = k === 'bed' ? wall('#f4e1ef', '#d9b88a') + win(270, 40, 100, 70) + bed(150, 210, 1) : k === 'kit' ? wall('#eef4ee', '#cfc3b0') + R(220, 150, 170, 86, '#cfc3b0', 4) + R(250, 126, 50, 26, C.grey, 6) + R(320, 60, 60, 80, '#fff', 4, `stroke="${C.grey}" stroke-width="3"`) : wall('#fdf3e3', '#d9b88a') + win(40, 40, 100, 70) + R(300, 60, 70, 50, C.ink, 4) + R(296, 110, 78, 8, '#8a5a3b', 3);
    g += k === 'bed' ? person(250, 170, { s: .5, hs: 'bob', hair: C.hairD, shirt: C.teal }) + book(224, 190, 46, 34, C.red, '') : k === 'kit' ? person(140, 150, { s: .6, hs: 'bob', hair: C.hairD, shirt: C.teal }) + book(110, 176, 50, 38, C.red, '') : sofa(170, 214, 1.1) + person(170, 160, { s: .5, hs: 'bob', hair: C.hairD, shirt: C.teal }) + book(146, 184, 46, 34, C.red, '');
    return g;
  };
  S.c2_roomBed = () => roomRead('bed'); L.c2_roomBed = 'Mẹ ngồi đọc sách trong phòng có giường ngủ';
  S.c2_roomKitchen = () => roomRead('kit'); L.c2_roomKitchen = 'Mẹ đứng đọc sách trong bếp, cạnh bếp nấu';
  S.c2_roomSofa = () => roomRead('sofa'); L.c2_roomSofa = 'Mẹ ngồi đọc sách trên ghế sofa ở phòng khách có tivi';
  S.c2_makeBed = () => wall('#f4e1ef', '#d9b88a') + bed(200, 210, 1.3, false) + mom(310, 150, { s: .6, flip: 1 }) + hand(260, 176, 9) + Pa('M120 150 Q190 120 258 170', 'none', `stroke="#7fb8d8" stroke-width="5" stroke-dasharray="8 8"`);
  L.c2_makeBed = 'Người mẹ trải tấm chăn phẳng lên giường';
  S.c2_float = () => R(0, 0, 400, 300, '#eef4fb') + R(0, 240, 400, 60, '#cfd8e2') + Pa('M20 80 Q120 40 200 90 T390 70', 'none', 'stroke="#b8c8dc" stroke-width="4" stroke-dasharray="10 10"') +
    [[60, 110], [140, 60], [230, 120], [300, 70], [350, 140]].map(([x, y], i) => i % 2 ? Pa(`M${x} ${y} q12 -14 24 0 q-12 14 -24 0Z`, '#e2a83a') : Ci(x, y, 6, '#fff', `stroke="#9fb4cc" stroke-width="2"`)).join('') +
    R(140, 196, 120, 44, C.grey, 10) + [170, 200, 230].map(x => Pa(`M${x} 190 q10 -14 0 -28 q-10 -14 0 -28`, 'none', 'stroke="#d9a86a" stroke-width="4" stroke-linecap="round"')).join('');
  L.c2_float = 'Lá và bông tuyết bay theo gió, mùi thơm bay lên từ nồi';
  S.c2_gust = () => R(0, 0, 400, 300, '#cfd8e2') + rain(30, 400, 240) + R(0, 240, 400, 60, '#8a8f99') + Pa('M20 90 Q120 60 200 100 Q260 130 380 90 M40 160 Q140 130 220 170 Q280 196 390 160', 'none', 'stroke="#fff" stroke-width="6" stroke-linecap="round"') +
    umbrella(250, 150, .5, C.red, 160) + person(160, 160, { s: .55, hs: 'short', shirt: C.teal, m: 'wow', eyes: 'wide' });
  L.c2_gust = 'Một cơn gió mạnh kèm mưa thổi lật chiếc ô';
  /* ---- tập 11 ---- */
  S.c2_dadTalk = () => wall('#fff1e0', '#e8d3b0') + dad(130, 140, { s: .75, m: 'open' }) + mom(250, 144, { s: .72, m: 'smile' }) + R(220, 190, 60, 40, '#fff', 6) + bubble(150, 20, 150, 70, '', 26, C.white) +
    R(196, 34, 26, 44, C.ink, 5) + R(200, 40, 18, 30, C.sky, 3) + Pa('M232 40 q8 10 0 20 M240 34 q14 16 0 32', 'none', `stroke="${C.org}" stroke-width="3"`);
  L.c2_dadTalk = 'Ba kể chuyện, mẹ đứng cạnh mỉm cười, bóng nói có chiếc điện thoại';
  S.c2_realize = () => wall('#fff1e0', '#e8d3b0') + person(150, 140, { s: .8, hs: 'short', shirt: C.teal, m: 'wow', eyes: 'wide' }) + keyring(250, 150, .9) + hand(222, 166, 9) +
    Pa('M150 40 Q130 40 130 60 Q130 74 142 82 L142 92 L158 92 L158 82 Q170 74 170 60 Q170 40 150 40Z', '#ffe39a', `stroke="${C.org}" stroke-width="3"`) + heart(300, 60, 1.3, C.red, 'class="fl"');
  L.c2_realize = 'Người con chợt hiểu ra, tay cầm chùm chìa khoá, trái tim ấm áp';
  S.c2_tears = () => wall('#fdf1e8', '#f0d9c4') + person(200, 130, { s: 1, hs: 'short', shirt: C.teal, m: 'smile', eyes: 'closed', brows: 'worry' }) + tear(176, 138) + tear(224, 138) + hand(200, 150, 10);
  L.c2_tears = 'Người con nhắm mắt, sống mũi cay cay, nước mắt trào ra';
  S.c2_feel = () => R(0, 0, 400, 300, '#fff1e0') + Ci(200, 150, 120, 'rgba(255,209,102,.35)') + R(0, 240, 400, 60, '#e8d3b0') + person(200, 130, { s: .9, hs: 'pony', shirt: C.pink, m: 'smile', eyes: 'closed' }) + hand(200, 196, 12) + heart(200, 196, .8, C.red);
  L.c2_feel = 'Một người nhắm mắt, đặt tay lên ngực, cảm nhận hơi ấm';
  S.c2_cry = () => R(0, 0, 400, 300, '#eef4fb') + R(0, 240, 400, 60, '#cfd8e2') + person(200, 130, { s: .95, hs: 'long', hair: C.hairD, shirt: C.plum, m: 'frown', eyes: 'closed', brows: 'worry' }) + tear(174, 140) + tear(226, 140) + tear(170, 166) + tear(230, 166) +
    R(290, 200, 60, 40, '#fff', 4) + Pa('M300 200 q10 -20 20 0 q10 -20 20 0', '#fff', `stroke="#ddd" stroke-width="2"`);
  L.c2_cry = 'Một người nhắm mắt, nước mắt chảy dài';
  /* ---- pick tập 8 ---- */
  S.c2_longBus = () => R(0, 0, 400, 300, '#cfe9f5') + R(0, 236, 400, 64, '#8a8f99') + bus(200, 214, 1.2, '#4f7f8f') + clock(60, 60, 30, 10, 0) + Tx(110, 70, '10h', 24, C.ink) +
    [128, 176, 224].map(x => sleepHead(x, 150, .32)).join('');
  L.c2_longBus = 'Xe khách đường dài, khách ngủ gục, đồng hồ chỉ 10 tiếng';
  S.c2_cityBus = () => city() + bus(200, 250, .9, C.red) + R(330, 170, 6, 66, '#8a96ad') + R(316, 160, 34, 20, C.teal, 4);
  L.c2_cityBus = 'Xe buýt đỏ dừng ở trạm giữa phố';
  S.c2_plane = () => R(0, 0, 400, 300, '#cfe9f5') + cloud(90, 80, 1) + cloud(300, 220, .8) + G('translate(200 150) rotate(-12)', R(-110, -16, 220, 32, '#fff', 16, `stroke="${C.grey}" stroke-width="3"`) + Pa('M-20 -10 L-60 -70 L-30 -70 L30 -10Z', '#cfd8e2') + Pa('M-20 10 L-60 70 L-30 70 L30 10Z', '#cfd8e2') + Pa('M-100 -10 L-120 -46 L-96 -46 L-80 -10Z', C.red) + [-60, -36, -12, 12, 36, 60].map(x => Ci(x, -2, 5, C.sky)).join(''));
  L.c2_plane = 'Một chiếc máy bay bay giữa trời';

  CH2.SC = S; CH2.SCENE_LABEL = L;
  if (typeof SC !== 'undefined') Object.assign(SC, S);
  if (typeof SCENE_LABEL !== 'undefined') Object.assign(SCENE_LABEL, L);
})();

(typeof regChapter === 'function' ? regChapter : (n, d, a) => (window.__pendingCh = window.__pendingCh || []).push([n, d, a]))(2, CH2, {"儿": "audio/247a60b43443.mp3", "我爷爷一辈子都在农村种地": "audio/e551f31afc6e.mp3", "外面太冷了我们进屋里去吧": "audio/1ebf327eecf5.mp3", "孩子一岁多就断奶了现在每天吃饭": "audio/f6c8fe43c422.mp3", "毕业以后我们就断了联系": "audio/cb790ccf5fe1.mp3", "她一辈子住在农村没去过大城市": "audio/f158d929bcd8.mp3", "父母一辈子都住在城市里": "audio/1c76316a02df.mp3", "M|因此长年以来父母很少离开老屋尽管姥姥舅舅和姑姑都在城里父母也坚决不在城里住": "audio/423c5530e8a8.mp3", "搬到城里以来他很少回农村": "audio/1cb8ee350493.mp3", "一直以来她都很爱护这辆车": "audio/0f6a8ac6ec1b.mp3", "我姥姥一个人住在农村": "audio/51caa0bf5ca9.mp3", "周末我去舅舅家玩": "audio/ed9bc1a9781b.mp3", "尽管姥姥舅舅和姑姑都在城里父母也坚决不在城里住": "audio/d1d0ae322212.mp3", "坚决不同意": "audio/7cc5c368f7e7.mp3", "舅舅比我妈妈大三岁": "audio/3d7a40099f49.mp3", "学汉语以来我每天都听中文歌": "audio/b6f7ddcb38c5.mp3", "爸爸妈妈结婚三十年了还是很恩爱": "audio/7e5af35b2487.mp3", "外面太冷了我们进屋吧": "audio/ff37b938d423.mp3", "姑姑从来不抱怨农村的生活": "audio/615ef0f93139.mp3", "我爷爷一辈子都在农村种地从来没去过外国": "audio/5fcb428ec929.mp3", "这件事我会记住一辈子": "audio/16a5b07400fa.mp3", "我会记住你一辈子": "audio/badbdb4ebcd5.mp3", "我是在农村长大的小时候每天都跟爷爷去地里": "audio/8c0f269d96d3.mp3", "现在很多年轻人离开农村去城市工作": "audio/f0ebfea7c968.mp3", "在农村": "audio/a26adbc48123.mp3", "这间屋子不大可是很干净": "audio/d6eea706d5ce.mp3", "屋里很暖和外面很冷": "audio/fb1600aa0a32.mp3", "大学毕业以后我们就断了联系十年没见面了": "audio/ab4c7a482b75.mp3", "毕业以后我跟他断了联系": "audio/56fc79633178.mp3", "昨天晚上我们这儿断电了": "audio/53548736529d.mp3", "工作以来他很少回老家": "audio/b9347c936f83.mp3", "上大学以来我很少回家": "audio/3536acfd052c.mp3", "我妈妈的妈妈是我的姥姥": "audio/2551001bf684.mp3", "小时候我常常住在姥姥家": "audio/89037761ec6b.mp3", "我舅舅是我妈妈的弟弟今年三十岁": "audio/afcdf8de0d55.mp3", "舅舅家": "audio/8cc94e6a06c9.mp3", "爸爸有一个妹妹她是我的姑姑": "audio/470467b3df9f.mp3", "姑姑每年春节都回来看我们": "audio/57c9a7d7007d.mp3", "我姑姑是我爸爸的妹妹": "audio/54e0eb3137ac.mp3", "他的态度很坚决谁说也没用": "audio/204442304b4e.mp3", "他坚决反对这个计划": "audio/ab9290aa2f21.mp3", "妈妈坚决不同意我一个人去旅游": "audio/1e81840d968f.mp3", "M|一辈子": "audio/eabbeb3c299f.mp3", "MS|一辈子": "audio/7615c019467a.mp3", "M|我爷爷一辈子没离开过农村": "audio/1ec8add4bf81.mp3", "M|这件事我会记住一辈子": "audio/3a191b9b302b.mp3", "M|农村": "audio/04eb35f58f47.mp3", "MS|农村": "audio/93bfaf3fd3bf.mp3", "M|他在农村长大很熟悉农村的生活": "audio/362766802f93.mp3", "M|现在很多年轻人离开农村去城市工作": "audio/7eb3311185a7.mp3", "M|屋": "audio/2361b96f2c8d.mp3", "MS|屋": "audio/00541cdc284c.mp3", "M|外面太冷了我们进屋吧": "audio/5afdcff6504a.mp3", "M|这间屋子不大可是很干净": "audio/857e7e505bf1.mp3", "M|断": "audio/e08d010b0691.mp3", "MS|断": "audio/6523f8dbc0c2.mp3", "M|大学毕业以后我们就断了联系": "audio/ce8a4c740345.mp3", "M|昨天晚上我们这儿断电了": "audio/789614e15879.mp3", "M|以来": "audio/3ff9f0d192c5.mp3", "MS|以来": "audio/830151ed295c.mp3", "M|工作以来他很少回老家": "audio/5e4b992588ec.mp3", "M|一直以来她都很爱护这辆车": "audio/8aaadee7bf05.mp3", "M|姥姥": "audio/35d75c5c1067.mp3", "MS|姥姥": "audio/2f41e846dc77.mp3", "M|我姥姥今年八十岁了身体还很好": "audio/1ba4c7b248f9.mp3", "M|小时候我常常住在姥姥家": "audio/f49d8604f8ae.mp3", "M|舅舅": "audio/d433ce53bb8e.mp3", "MS|舅舅": "audio/5038ed79a887.mp3", "M|我舅舅是我妈妈的哥哥": "audio/4962fb9029df.mp3", "M|周末我们去舅舅家吃饭": "audio/f79ef95d54db.mp3", "M|姑姑": "audio/0e225ce4ea75.mp3", "MS|姑姑": "audio/b615101f52b0.mp3", "M|我姑姑是我爸爸的妹妹": "audio/698e249810c5.mp3", "M|姑姑每年春节都回来看我们": "audio/8baab3a7145f.mp3", "M|坚决": "audio/c24079e512bd.mp3", "MS|坚决": "audio/ae9341ee0bf3.mp3", "M|他坚决反对这个计划": "audio/28502251a5d4.mp3", "M|我说了很多次她还是坚决不同意": "audio/f0517c4bf995.mp3", "一辈子": "audio/f8a7e016d9e0.mp3", "农村": "audio/f7478d01dcb1.mp3", "老家": "audio/8078f6d1880b.mp3", "屋": "audio/e55080606f91.mp3", "感情": "audio/c851120d071f.mp3", "像": "audio/15876c3c09b8.mp3", "断奶": "audio/19c3fda80408.mp3", "母亲": "audio/50274b554e98.mp3", "一样": "audio/6c0a233c60d0.mp3", "岁": "audio/b1187f9a06fb.mp3", "吃": "audio/fd252d703291.mp3", "毕业": "audio/ddffeafb97d3.mp3", "断": "audio/9adf3bcbc228.mp3", "联系": "audio/3b0a12ad1828.mp3", "因此": "audio/0d9c665e983e.mp3", "长年": "audio/002e02ce2a32.mp3", "以来": "audio/eab425ab2724.mp3", "离开": "audio/820671e39dbf.mp3", "尽管": "audio/56f2c49f04a4.mp3", "姥姥": "audio/41a3edfe4b35.mp3", "舅舅": "audio/f63cccac7494.mp3", "姑姑": "audio/55cbd7fd6863.mp3", "城": "audio/354de14daeb3.mp3", "坚决": "audio/60f6f52d1355.mp3", "搬": "audio/8195f210b435.mp3", "回": "audio/57635deb7064.mp3", "辆": "audio/e10ae9c1f973.mp3", "周末": "audio/d5142a658f15.mp3", "玩": "audio/7f1fc740c425.mp3", "中文": "audio/c0b60a8ea6a4.mp3", "歌": "audio/feaa3f49f8c5.mp3", "国": "audio/1da5c62355e2.mp3", "件": "audio/d0324c16bf4a.mp3", "记": "audio/86e036edeb03.mp3", "候": "audio/7e322444cbeb.mp3", "年轻": "audio/d5f9c6af5d35.mp3", "间": "audio/51cf7f0cfd17.mp3", "屋子": "audio/acf9e282d03b.mp3", "干净": "audio/f4a312ad7597.mp3", "暖和": "audio/f9947da91ae2.mp3", "常常": "audio/4c74de1ddb0e.mp3", "弟弟": "audio/7ca48f07bbeb.mp3", "今": "audio/8d9ef6ae8af9.mp3", "妹妹": "audio/72ffb4b2ab82.mp3", "每": "audio/dbc6ddad9f3e.mp3", "春节": "audio/5fe030a2d578.mp3", "态度": "audio/2d87718ac63a.mp3", "反对": "audio/cda9bc177d6e.mp3", "旅游": "audio/a3887d22e8fd.mp3", "熟悉": "audio/9ee628a265f1.mp3", "八": "audio/aa757c76e2fc.mp3", "哥哥": "audio/aaafef034cf8.mp3", "房间": "audio/290c5f247d25.mp3", "外婆": "audio/d169b2373289.mp3", "叔叔": "audio/e5a85c5eabe8.mp3", "伯伯": "audio/ba058e447969.mp3", "舅妈": "audio/1de7bfd50ad7.mp3", "阿姨": "audio/b7d73eeb1259.mp3", "姨": "audio/b383cfecda14.mp3", "男": "audio/b6af977a0f1c.mp3", "改正": "audio/e750578199a6.mp3", "M|父母一辈子住在农村老家对老屋的感情就像没断奶的孩子对母亲一样": "audio/f4923381584a.mp3", "M|去年在我和妻子的努力下我们终于用打工挣的钱在县里买了一套新房": "audio/a3512fe734a8.mp3", "他在城里打了三年工": "audio/7769b1731475.mp3", "他打工挣的钱都给了父母": "audio/08d6c362ca5f.mp3", "我老家在农村买东西要去县里": "audio/e29f7ca1e24f.mp3", "他们买了一套房子有三个房间": "audio/931d0319b3b5.mp3", "我们终于用打工挣的钱在县里买了一套新房": "audio/c078aa254925.mp3", "我们用父母的钱买了新房": "audio/6f0118903f6d.mp3", "M|新房装修完父母第一次走进新房时高兴得不得了": "audio/65653076504e.mp3", "听说儿子考上了大学妈妈高兴得不得了": "audio/24d7c29ea912.mp3", "他们家正在装修现在还不能住": "audio/0dd83325999a.mp3", "M|妻子提出留一串钥匙给父母可他们拒绝了": "audio/63fa923984c4.mp3", "我把一串钥匙给了姥姥": "audio/4a5548a68067.mp3", "房子装修好了我们下个月搬进去": "audio/9a037f13df9e.mp3", "父母很高兴地拿了新房的钥匙": "audio/fb243a754eaf.mp3", "这家饭馆装修得很漂亮": "audio/b58daea4d4f6.mp3", "M|那天父亲喝醉了等他醒时天色已晚": "audio/f4ee2c00a9ab.mp3", "他昨天喝醉了今天早上起来头很疼": "audio/bbfa1f59de5b.mp3", "爸爸没喝醉他只喝了一杯": "audio/1be289789a01.mp3", "M|我和妻子强烈留父母在新房住一夜第二天再回但他们仍坚持坐上了最后一趟回老家的车": "audio/92d424f97a6c.mp3", "他夜里十二点才回家": "audio/cacd58788a75.mp3", "我和妻子强烈留父母在新房住一夜第二天再回": "audio/03b7b26545c0.mp3", "夏天中午的阳光非常强烈出门要戴帽子": "audio/013d26a89a50.mp3", "那天父母在新房住了一夜": "audio/0c09ee8f3912.mp3", "我们在姑姑家住了一夜": "audio/add0c30bbbdf.mp3", "大学的时候我在一家饭馆打工一个月挣的钱不多": "audio/5a3db02c3375.mp3", "他去城里打了三年工": "audio/d106a948bd37.mp3", "他在饭馆打了两年工": "audio/8f38be08fb0c.mp3", "他每个月挣的钱不多可是很努力": "audio/f481deca61ac.mp3", "挣钱": "audio/da41f8626cfd.mp3", "姥姥住在农村看病要去县里的医院": "audio/d5498082e516.mp3", "从农村到县里坐车要一个小时": "audio/6c03d60e7ddb.mp3", "从我们村到县里要坐一个小时的车": "audio/34580b028b24.mp3", "这套房子有三个房间很适合我们家": "audio/d6b7d9136e48.mp3", "他们在县里买了一套新房子": "audio/1a06595fdb0f.mp3", "他结婚的时候买了一套新西服": "audio/e8ef549fdade.mp3", "新房还没装修完我们下个月再搬": "audio/0a013d20eed0.mp3", "今天热得不得了我们别出去了": "audio/f6b0723b1a8c.mp3", "听到这个消息她高兴得不得了": "audio/7a1a664d6c19.mp3", "他手里拿着一串钥匙不知道哪把是大门的": "audio/e48ad9246456.mp3", "我从来没喝醉过": "audio/4f965819e77a.mp3", "他强烈要求父母住在城里": "audio/c8543ea97cbd.mp3", "大家强烈要求他留下来可他还是走了": "audio/685a1b30f100.mp3", "我们在姑姑家住了一夜第二天早上才回来": "audio/cc38951cc66c.mp3", "他们在县里住了一夜第二天就回去了": "audio/a8d933f90344.mp3", "昨天夜里下了很大的雨": "audio/7119d0c640b3.mp3", "M|打工": "audio/04cd4c299915.mp3", "MS|打工": "audio/9fc975aae7d0.mp3", "M|他大学的时候在饭馆打过工": "audio/72ba15ca9fa5.mp3", "M|他去城里打了三年工": "audio/0734395a83be.mp3", "M|挣": "audio/3774a2011113.mp3", "MS|挣": "audio/a547b76ea325.mp3", "M|他每个月挣的钱不多可是很努力": "audio/42bec7d9d6b9.mp3", "M|她一边学习一边打工挣钱": "audio/0a1b2e487f5e.mp3", "M|县": "audio/7912b14337d5.mp3", "MS|县": "audio/9ba8f9a6c269.mp3", "M|从我们村到县里要坐一个小时的车": "audio/7a4d3f7a5c67.mp3", "M|他在县里的一家医院工作": "audio/09f7ea1508da.mp3", "M|套": "audio/c160599e0186.mp3", "MS|套": "audio/42a1ec42ca26.mp3", "M|这套家具是姥姥留给我们的": "audio/136e3db117e4.mp3", "M|他结婚的时候买了一套新西服": "audio/3e03113fbc2c.mp3", "M|装修": "audio/4f281ee03e26.mp3", "MS|装修": "audio/60892411a206.mp3", "M|我们的新房还在装修下个月才能住": "audio/4040e268562b.mp3", "M|这家饭馆装修得很漂亮": "audio/33ee964b8b81.mp3", "M|不得了": "audio/ea319a2b0f51.mp3", "MS|不得了": "audio/1e9322403b20.mp3", "M|今天热得不得了我们别出去了": "audio/1c29afae86c7.mp3", "M|听说儿子考上了大学妈妈高兴得不得了": "audio/1cb7719c2d6a.mp3", "M|他手里拿着一串钥匙": "audio/f53325c8188a.mp3", "M|妈妈买了一串葡萄": "audio/d2c128ae03a5.mp3", "M|醉": "audio/1d01046d1826.mp3", "MS|醉": "audio/35cc4f7f8d72.mp3", "M|他昨天晚上喝醉了今天头很疼": "audio/852fd9d5dc46.mp3", "M|我从来没喝醉过": "audio/17557342384b.mp3", "M|强烈": "audio/2a84fd6c55e1.mp3", "MS|强烈": "audio/f8f12f0b909c.mp3", "M|夏天中午的阳光很强烈": "audio/417b04be9b14.mp3", "M|大家强烈要求他留下来": "audio/e8cc511fb8be.mp3", "M|我们在姑姑家住了一夜": "audio/cc91e4382194.mp3", "M|昨天夜里下了很大的雨": "audio/13e6211d6d2b.mp3", "打工": "audio/0345cec18d96.mp3", "挣": "audio/9a5f48373c6e.mp3", "钱": "audio/bd3d68681d15.mp3", "县": "audio/13e23514b0d9.mp3", "套": "audio/447910701651.mp3", "新房": "audio/6d6cd3e33563.mp3", "东西": "audio/50379588f78a.mp3", "房": "audio/e2449bfe5a5f.mp3", "装修": "audio/15ba9fc51b05.mp3", "完": "audio/238814682432.mp3", "时": "audio/f69b6db08004.mp3", "不得了": "audio/6acc95ac0e65.mp3", "儿子": "audio/697e2199c0c7.mp3", "正在": "audio/1895c66faf9a.mp3", "提": "audio/799aded32914.mp3", "拒绝": "audio/36816386e25d.mp3", "饭馆": "audio/5a887e458f47.mp3", "父亲": "audio/a5c6d60218ad.mp3", "喝": "audio/ddef0eea3de9.mp3", "醉": "audio/b8daf2829344.mp3", "天色已晚": "audio/7ee0b03c123d.mp3", "疼": "audio/29ec1c1fe07b.mp3", "强烈": "audio/e8640fd69af2.mp3", "仍": "audio/fbe3eb3789d6.mp3", "坚持": "audio/50c83e1ae186.mp3", "趟": "audio/cc447e6ae65b.mp3", "二": "audio/6c5af8fe53bc.mp3", "中午": "audio/ab54a9f397b3.mp3", "阳光": "audio/770f335ed1f0.mp3", "非常": "audio/5de0696e512f.mp3", "门": "audio/b90d4ff492a1.mp3", "戴": "audio/548da63347be.mp3", "帽子": "audio/5eb02da15257.mp3", "村": "audio/1a00e0219ed5.mp3", "适合": "audio/f4656eff8207.mp3", "西服": "audio/3c36d0e19d5e.mp3", "热": "audio/046be4e74f33.mp3", "知道": "audio/227a9d1d9f6f.mp3", "要求": "audio/6efc20da6df3.mp3", "一边": "audio/af783764c6a6.mp3", "学习": "audio/b06bdee78fc5.mp3", "家具": "audio/4563bd744422.mp3", "葡萄": "audio/4ed7415b43c2.mp3", "邮票": "audio/afc3c02dc200.mp3", "修": "audio/72b7ce37a349.mp3", "急": "audio/889faef7c74f.mp3", "热闹": "audio/2305a4d591b3.mp3", "羊肉": "audio/2c597dd418b3.mp3", "M|一段时间后我和妻子又准备去外地打工新房只能上锁空着": "audio/dbea577b2e9f.mp3", "出门的时候她忘了锁门": "audio/b67dd1075745.mp3", "一段时间后我和妻子又准备去外地打工新房只能上锁空着": "audio/da9ca9965003.mp3", "M|临走那天父亲从老家赶来送我们": "audio/cbc9412098e9.mp3", "临睡前她总是给姥姥打个电话": "audio/b34fff0b60b3.mp3", "临走那天父亲赶来送我们": "audio/68d5cf2e7abf.mp3", "锁门": "audio/9c88a91bd1a2.mp3", "M|父亲悄悄把我拉到一边说你妈说了你还是留一串新房的钥匙给我们": "audio/cd086fd8bb8d.mp3", "她怕吵醒孩子悄悄地走了出去": "audio/0b7605fde792.mp3", "他悄悄告诉我明天是姑姑的生日": "audio/e226bf887816.mp3", "M|要是我和你妈什么时候想来了就来住上几天顺便给你们晒晒被子打扫打扫卫生": "audio/5b8f619e2532.mp3", "天气这么好快把被子拿出去晒吧": "audio/d56c807dcfc4.mp3", "M|父亲说这话时轻声细语还红着脸像个害羞的孩子": "audio/6462b798fd43.mp3", "父亲大声地对我说了这些话": "audio/86087ca2e27e.mp3", "今天天气好我们晒晒被子吧": "audio/4f6f11386227.mp3", "M|转眼又是半年我们回家时是一个深冬的夜里": "audio/e3b46d78e924.mp3", "M|下了长途车儿子被冻得大哭": "audio/f66f54ab95b8.mp3", "外面太冷了我的手都冻红了": "audio/4ac5d24b7337.mp3", "坐了十个小时的长途汽车大家都很累": "audio/51a0200a61f3.mp3", "M|我和妻子想象着打开家门满是灰尘冷冷清清的景象觉得心里发寒": "audio/3314a12407c3.mp3", "我很难想象姥姥一个人住在农村": "audio/532fb63f4c25.mp3", "很久没人住了桌子上都是灰尘": "audio/670eb8638e4f.mp3", "我们一打开家门就看到家里满是灰尘": "audio/375b4eaed117.mp3", "M|来到楼下抬头一看却发现自家亮着灯光": "audio/52f7c948dabb.mp3", "我们到楼下的时候家里的灯是关着的": "audio/00f6837db52c.mp3", "M|上了楼开门的竟是微笑着的父母温暖的气息立刻扑面而来": "audio/ac2065ed038a.mp3", "朋友的一句话让我觉得很温暖": "audio/fbad3a868f87.mp3", "电话一响他就立刻跑过去接": "audio/6ca902b3f05b.mp3", "姥姥一看到我就立刻笑了": "audio/e281f55447d7.mp3", "一开门冷风就扑面而来": "audio/b9ba0e4a9468.mp3", "M|室内打扫得干干净净暖气开着水已温热卧室床上的被子已铺好厨房里飘来阵阵饭菜香": "audio/b7f66678bd46.mp3", "妈妈在卧室里看书": "audio/765281a598aa.mp3", "妈妈已经把床上的被子铺好了": "audio/f11bd67ac892.mp3", "刚才下了一阵大雨现在天晴了": "audio/e5c9198d4a75.mp3", "窗外飘着雪屋里很暖和": "audio/b55dd8d3c1eb.mp3", "我们回到家时屋里很冷被子也没铺": "audio/eca0c5d1d377.mp3", "两个卧室": "audio/4c88a4b5237a.mp3", "M|父亲说你妈昨天接到电话知道你们今晚回来今天来新房忙了一天了": "audio/37bc9e46f883.mp3", "妈妈今天才知道我们回来": "audio/f986c87ed160.mp3", "M|原来父母要我留下串钥匙只是为了让我们回来时能立刻感受到家的温暖": "audio/f3b1914d9fd3.mp3", "来到这里我感受到了大家的热情": "audio/92a50fad25d2.mp3", "M|我鼻子一酸流下了热泪": "audio/87ae832a381a.mp3", "听完他的话大家都流下了眼泪": "audio/6aa7d50c1f54.mp3", "感受到温暖": "audio/c8386a60c31c.mp3", "父母要钥匙是因为他们想住在城里": "audio/987f60516e2b.mp3", "小狗把绳子挣断了跑了出去": "audio/b80ed17486f4.mp3", "弟弟偷偷拿了一块饼干": "audio/1e26a0021aac.mp3", "一开门温暖的气息扑面而来": "audio/5344b6286374.mp3", "卧室床上的被子已经铺好了": "audio/d5b609d7ef72.mp3", "这把锁坏了钥匙打不开": "audio/6d7f1888bfb2.mp3", "他出门的时候忘了锁门": "audio/8e496a3310fc.mp3", "临出门的时候妈妈让我带上钥匙": "audio/deb4743f3be0.mp3", "这家饭馆临街有点儿吵": "audio/eaf66c148010.mp3", "孩子睡着了妈妈悄悄地走出了房间": "audio/ae450fadef27.mp3", "他悄悄告诉我一个好消息": "audio/535bddf471f7.mp3", "姥姥喜欢坐在门口晒太阳": "audio/3a7d6fcd1e8d.mp3", "今天太阳很好我把被子拿出去晒了": "audio/b98f5747d764.mp3", "天冷了晚上睡觉多盖一条被子": "audio/00830e0a6f35.mp3", "天冷了姥姥给我拿来一条厚被子": "audio/7c306ee39b16.mp3", "这条被子是姥姥给我的": "audio/a639c4d61b21.mp3", "坐了十个小时的长途车我累得不得了": "audio/601e8b7a94ec.mp3", "这是一次长途旅行要带的东西很多": "audio/f5a2bbca707e.mp3", "外面太冷了孩子的手都冻红了": "audio/a5577de57c5d.mp3", "别在外面站着小心冻着": "audio/6f8945e3b1f0.mp3", "你想象一下十年以后的自己": "audio/33c0058ae361.mp3", "很久没人住桌子上都是灰尘": "audio/56d02e00bdaa.mp3", "打扫一下吧屋子里灰尘太多了": "audio/a6f0c334c73c.mp3", "天还没亮爸爸就起床了": "audio/5035cc6ed42e.mp3", "这么晚了他的房间还亮着灯": "audio/d1dba3d1e7c4.mp3", "天亮了": "audio/ea8debe36288.mp3", "她总是微笑着跟客人说话大家都很喜欢她": "audio/d1f05146850f.mp3", "她微笑着对我说欢迎回家": "audio/1a6fa882b6d3.mp3", "她总是微笑着跟客人说话": "audio/2f5b9b9893c1.mp3", "春天来了天气越来越温暖": "audio/402bfb0cc1f9.mp3", "听到电话他立刻跑了出去": "audio/1234c82bb251.mp3", "姥姥一看到我立刻笑了": "audio/83058e3dd3f6.mp3", "小狗一看见我就扑了过来": "audio/83601489684c.mp3", "我累了想回卧室睡一会儿": "audio/b5b03d0eb4a3.mp3", "我们的新房有两个卧室": "audio/46819b9b4047.mp3", "妈妈已经把床铺好了": "audio/11e15f065eb1.mp3", "从厨房里飘来了饭菜的香味": "audio/1c2d3d74ccea.mp3", "刚才下了一阵雨现在停了": "audio/aa9d639b2caa.mp3", "一阵风吹过来我觉得有点儿冷": "audio/2ca8c711be45.mp3", "在这里我感受到了家的温暖": "audio/4e31ef7e6cd0.mp3", "说说你现在的感受吧": "audio/5de951aa5d39.mp3", "听完他的故事大家都难过得流泪了": "audio/e470c672f7ca.mp3", "看到父母他高兴得流下了眼泪": "audio/cb9ed0a831c9.mp3", "父母不在城里住是因为城里没有家人": "audio/6e7487708eb1.mp3", "我们的新房在县里不在大城市": "audio/94392aad0b5f.mp3", "那天父亲喝醉了所以晚上没回老家": "audio/0d09367311ab.mp3", "我们回家的那天是一个夏天的晚上": "audio/7a3a69e54fb8.mp3", "妈妈是前天接到电话的": "audio/db5ac413c4d6.mp3", "我们终于在县里买了一套新房": "audio/81de7610ee0c.mp3", "孩子睡着了妈妈悄悄地走了出去": "audio/318ffe667bac.mp3", "刚才下了一阵大雨现在停了": "audio/d31aab798545.mp3", "妈妈已经把被子铺好了": "audio/a3372061de9f.mp3", "我姥姥一辈子住在农村去年冬天舅舅强烈要求她来城里住可是她坚决不同意说老屋住着最舒服": "audio/f7dd339863f1.mp3", "转眼又到了冬天下了长途车外面冷得不得了可是一打开家门一阵暖风扑面而来饭菜的香味也从厨房里飘了出来": "audio/51b5eac3d2ad.mp3", "我在外地打工三年了每次打电话妈妈都说家里一切都好今年春节回家我才看到父母老了很多我鼻子一酸流下了眼泪": "audio/edb8858df350.mp3", "父母坚决不在城里住": "audio/eeea1efa0a4a.mp3", "这套房子装修得非常漂亮": "audio/d7796747e7d2.mp3", "一回到家我就立刻感受到了家的温暖": "audio/e6a005801e9c.mp3", "M|锁": "audio/1acf560e166c.mp3", "MS|锁": "audio/afc5ba93bc9c.mp3", "M|出门的时候别忘了锁门": "audio/2085d36057b7.mp3", "M|这把锁坏了钥匙打不开": "audio/6ebbc0a7e52d.mp3", "M|临": "audio/e19f51060907.mp3", "MS|临": "audio/2edfdc1c931a.mp3", "M|临睡前她总是给姥姥打个电话": "audio/132e61522d42.mp3", "M|这家饭馆临街有点儿吵": "audio/379ee9f93d4b.mp3", "M|悄悄": "audio/9f8f85395a47.mp3", "MS|悄悄": "audio/4e92f6809b8d.mp3", "M|孩子睡着了妈妈悄悄地走出了房间": "audio/e30ded3738ff.mp3", "M|他悄悄告诉我一个好消息": "audio/435d87d72416.mp3", "M|晒": "audio/de54dab6cd0e.mp3", "MS|晒": "audio/1fa17f44f315.mp3", "M|今天天气好我们晒晒被子吧": "audio/04c45b8aeb83.mp3", "M|姥姥喜欢坐在门口晒太阳": "audio/e48ae41ff566.mp3", "M|被子": "audio/02ba2cb81728.mp3", "MS|被子": "audio/b7d29ded2b22.mp3", "M|天冷了晚上多盖一条被子": "audio/ea63a7ee8ed2.mp3", "M|这条被子是姥姥给我的": "audio/ae93ada26947.mp3", "M|长途": "audio/5ca74c981518.mp3", "MS|长途": "audio/e19b65c1746b.mp3", "M|坐了十个小时的长途汽车大家都很累": "audio/037d473c85e5.mp3", "M|这是一次长途旅行要带的东西很多": "audio/451a2116f32e.mp3", "M|冻": "audio/1d7f187bf774.mp3", "MS|冻": "audio/59820f1f43a3.mp3", "M|外面太冷了我的手都冻红了": "audio/d67a7332c8b5.mp3", "M|别在外面站着小心冻着": "audio/ad05ce0d5efc.mp3", "M|想象": "audio/874b14ad68ea.mp3", "MS|想象": "audio/ac4e905e7ef7.mp3", "M|我很难想象姥姥一个人住在农村": "audio/f60d3260a538.mp3", "M|你想象一下十年以后的自己": "audio/bd2dba7eae35.mp3", "M|灰尘": "audio/cd6df72bf2cd.mp3", "MS|灰尘": "audio/ea3b7db5f539.mp3", "M|很久没人住桌子上都是灰尘": "audio/ab216829faa5.mp3", "M|打扫一下吧屋子里灰尘太多了": "audio/311731bbdf57.mp3", "M|天还没亮爸爸就起床了": "audio/15072957f3cd.mp3", "M|这么晚了他的房间还亮着灯": "audio/03ad90671d10.mp3", "M|微笑": "audio/bc3add463b76.mp3", "MS|微笑": "audio/e2f8e96f8e7b.mp3", "M|她微笑着对我说欢迎回家": "audio/8299e0cd40a7.mp3", "M|她总是微笑着跟客人说话": "audio/0652e3c68f4a.mp3", "M|温暖": "audio/61188109e530.mp3", "MS|温暖": "audio/90c3b290bbab.mp3", "M|春天来了天气越来越温暖": "audio/d0eb44541d4b.mp3", "M|朋友的一句话温暖了我的心": "audio/0c99814bfce5.mp3", "M|立刻": "audio/b8ef2dcb4c01.mp3", "MS|立刻": "audio/bc6c586fac04.mp3", "M|听到电话他立刻跑了出去": "audio/d5c39eb5eae1.mp3", "M|姥姥一看到我立刻笑了": "audio/cec07475f1ae.mp3", "M|扑": "audio/fae4e571248e.mp3", "MS|扑": "audio/4fc4e94c25cf.mp3", "M|小狗一看见我就扑了过来": "audio/5759d4ee4310.mp3", "M|一出门冷风就扑面而来": "audio/fea3d6e71a43.mp3", "M|卧室": "audio/a2779d396b88.mp3", "MS|卧室": "audio/45d1a018e25b.mp3", "M|这套房子有三个卧室和一个客厅": "audio/14d98baad324.mp3", "M|卧室里有一张大床": "audio/2ed4c5c1171a.mp3", "M|铺": "audio/7d0e6fb05a24.mp3", "MS|铺": "audio/d1f9499599eb.mp3", "M|妈妈已经把床铺好了": "audio/b888f97a6549.mp3", "M|姥姥把被子铺在床上": "audio/8ac2e6ea7dd5.mp3", "M|飘": "audio/0260cdc31dba.mp3", "MS|飘": "audio/25144168ea0c.mp3", "M|窗外飘着雪屋里很暖和": "audio/fd5cad7f5de7.mp3", "M|从厨房里飘来了饭菜的香味": "audio/7a52f5bc9dd4.mp3", "M|阵": "audio/783d9cf15fd2.mp3", "MS|阵": "audio/fbbfc86ab1cc.mp3", "M|刚才下了一阵雨现在天晴了": "audio/402a5738f064.mp3", "M|一阵风吹过来我觉得有点儿冷": "audio/d789d8172903.mp3", "M|感受": "audio/091b0f92a826.mp3", "MS|感受": "audio/0ca338ab705d.mp3", "M|来到这里我感受到了大家的热情": "audio/0cd30f1e4c86.mp3", "M|说说你现在的感受吧": "audio/ff187eb39eb4.mp3", "M|流泪": "audio/a9c3e3cab05a.mp3", "MS|流泪": "audio/df9b90fddda5.mp3", "M|看到这封信妈妈流泪了": "audio/1f0d463a8ee6.mp3", "M|听完他的话大家都流下了眼泪": "audio/77f5d7f9c0cb.mp3", "准备": "audio/4d80f268f3fd.mp3", "外地": "audio/5c7cb97f74cd.mp3", "锁": "audio/c58b0561f266.mp3", "空": "audio/125321a52a72.mp3", "忘": "audio/3ace613e0122.mp3", "临": "audio/7adcad023f88.mp3", "赶来": "audio/49327e1bed11.mp3", "送": "audio/72b025f366a2.mp3", "电话": "audio/03d51d43914d.mp3", "悄悄": "audio/ee0d8249c704.mp3", "妈": "audio/4f53bccf3fa1.mp3", "告诉": "audio/8604d4043215.mp3", "生日": "audio/9420fb75b1e2.mp3", "要是": "audio/bca8262fba7f.mp3", "顺便": "audio/3457c0ec09f0.mp3", "晒": "audio/3c93185c2aab.mp3", "被子": "audio/b6b3522b3775.mp3", "打扫": "audio/3174d20dbaeb.mp3", "打扫卫生": "audio/b7a8610b6fda.mp3", "天气": "audio/bd1528801d3e.mp3", "轻声细语": "audio/5a36aa6cfe3b.mp3", "红着脸": "audio/45104acbfed2.mp3", "害羞": "audio/033cd96c8ce0.mp3", "些": "audio/f211cdec0625.mp3", "转眼": "audio/917a37b95c2c.mp3", "深冬": "audio/57701fe71482.mp3", "长途": "audio/a3df033436d0.mp3", "冻": "audio/6034d2ae4afb.mp3", "汽车": "audio/fe15947787e8.mp3", "想象": "audio/f53222c998fc.mp3", "打开": "audio/34813337f501.mp3", "满": "audio/007a6ce41374.mp3", "灰尘": "audio/d2b9fcebac91.mp3", "冷冷清清": "audio/0072542a4458.mp3", "景象": "audio/2af48959f0b7.mp3", "心里发寒": "audio/35123bc5b0ba.mp3", "久": "audio/0c39d4283780.mp3", "抬头": "audio/805104c23a47.mp3", "发现": "audio/e7ff0fbcc13a.mp3", "灯光": "audio/7108bcfe07ba.mp3", "灯": "audio/5462a58f9ebe.mp3", "关": "audio/fee0bffd197c.mp3", "楼": "audio/dcb50b90add8.mp3", "竟是": "audio/75a7438cec77.mp3", "微笑": "audio/00362d30bb7d.mp3", "温暖": "audio/b5390c542013.mp3", "气息": "audio/beb391967c06.mp3", "立刻": "audio/8121277c4191.mp3", "扑面而来": "audio/e8cdf5bb30b1.mp3", "响": "audio/f167b2318807.mp3", "接": "audio/b6712be936ea.mp3", "风": "audio/0566200fd92e.mp3", "室内": "audio/8acef3ebfcd3.mp3", "暖气": "audio/59c26d204bc6.mp3", "已": "audio/b0bd11d1833d.mp3", "温热": "audio/73e47704cc7b.mp3", "卧室": "audio/f72db0e60334.mp3", "床": "audio/bb0df28067eb.mp3", "铺": "audio/1b9578d20ad7.mp3", "厨房": "audio/a6d0a5570812.mp3", "飘": "audio/7ef2dc038da9.mp3", "阵": "audio/f64fb7386e89.mp3", "饭菜香": "audio/3a213d561ab0.mp3", "已经": "audio/3530c846441f.mp3", "刚才": "audio/c62ef9b886e8.mp3", "晴": "audio/98a236847412.mp3", "雪": "audio/1da4de037e09.mp3", "忙": "audio/f038bea33292.mp3", "原来": "audio/e210d9330135.mp3", "只是": "audio/c30e23836567.mp3", "感受": "audio/b7faed7a9c7f.mp3", "热情": "audio/571670474c54.mp3", "鼻子一酸": "audio/e6d29107e5b2.mp3", "流": "audio/37f7a1e13b45.mp3", "热泪": "audio/0ac5f301cd0a.mp3", "眼泪": "audio/14053c59e945.mp3", "因为": "audio/e29cff629566.mp3", "狗": "audio/6fdbf04f6102.mp3", "绳子": "audio/1746fc7bc077.mp3", "偷偷": "audio/dccaaa0a5fda.mp3", "块": "audio/2a9b12b9a69b.mp3", "饼干": "audio/5becc9708b57.mp3", "坏": "audio/b234a74e42ae.mp3", "带": "audio/3caa2c538cdd.mp3", "街": "audio/ff9a4752b257.mp3", "太阳": "audio/1d57f492d337.mp3", "盖": "audio/788c16ed0f9b.mp3", "条": "audio/0543625c1fdc.mp3", "厚": "audio/439be0879e57.mp3", "旅行": "audio/7fabbe9d4613.mp3", "起床": "audio/3500ea3de52c.mp3", "欢迎": "audio/479405e09035.mp3", "春": "audio/81b3f26d818f.mp3", "越": "audio/d8ebbb683559.mp3", "看见": "audio/1073bcb1ba2e.mp3", "扑": "audio/1175439827f6.mp3", "客厅": "audio/d5ad67745223.mp3", "菜": "audio/dfef53477bce.mp3", "香味": "audio/54aed3b8947f.mp3", "停": "audio/776034e33445.mp3", "吹": "audio/9675e83a6448.mp3", "流泪": "audio/39cae0ef9926.mp3", "吗": "audio/7c377cad9443.mp3", "呢": "audio/0107ec86465e.mp3", "休息": "audio/04e2a099b2fe.mp3", "放心": "audio/92ed251319e0.mp3", "冬": "audio/b2a90ff153b2.mp3", "舒服": "audio/7371101f387b.mp3", "暖风": "audio/6331da6890b2.mp3", "打电话": "audio/8e2e29d492cb.mp3", "一切": "audio/8e5db12a54d5.mp3", "封": "audio/4050c62b4568.mp3", "信": "audio/eeefc204f6ac.mp3", "江": "audio/fb547a1fd464.mp3", "衣服": "audio/1ddf495c0b16.mp3", "远": "audio/f1f1b5a190d5.mp3", "成": "audio/407cb7a04c44.mp3", "冰": "audio/5a000544d83f.mp3", "微": "audio/b45d5f4d5755.mp3", "室": "audio/9cb6b8bdedc7.mp3", "树叶": "audio/0f14faa47bde.mp3", "感觉": "audio/842300653a89.mp3", "你的新房装修完了吗": "audio/62c8b1186711.mp3", "M|还没呢下个月才能住": "audio/d8f70e5cb119.mp3", "你姥姥怎么没来": "audio/ac924068e679.mp3", "M|她昨天晚上冻着了今天在家休息": "audio/489da8a6a4ab.mp3", "临走的时候别忘了锁门": "audio/bd258a318199.mp3", "M|放心吧钥匙在我这儿": "audio/a4604cb3ffb2.mp3", "父亲说他们想来住几天顺便晒晒被子打扫卫生": "audio/809849431584.mp3", "我们到家的时候厨房里飘来了饭菜的香味屋里也很暖和": "audio/1e8bd0130ffb.mp3", "他悄悄地把一串钥匙给了我": "audio/770990cf79f7.mp3", "种地": "audio/f2d83020dff2.mp3", "干干净净": "audio/51436e54f582.mp3", "地里": "audio/9b46972d4228.mp3", "打不开": "audio/a0f8cc2a8137.mp3", "冻着": "audio/eeda2d570ec8.mp3"});

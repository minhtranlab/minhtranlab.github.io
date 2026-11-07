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
          [['花', '花钱 = tiêu tiền. Vế sau 可是很努力 (nhưng rất chịu khó) cho thấy đang nói chuyện kiếm tiền.'], ['断', '断 là đứt, cai; không đi với 钱.']], '<b>挣钱</b> = kiếm tiền; <b>挣的钱</b> = số tiền kiếm được.'),
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
          [['件', '一件 dùng cho một chiếc áo; com-lê gồm áo và quần nên là 一套.'], ['条', '一条 dùng cho quần, váy; cả bộ com-lê là 一套.']], '<b>一套</b> = trọn bộ: 一套西服, 一套家具, 一套邮票.')
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
          [['看', '看太阳 = nhìn mặt trời; ngồi cho nắng chiếu vào người là 晒太阳.'], ['锁', '锁 là khoá; không đi với 太阳.']], '<b>晒太阳</b> = sưởi nắng.'),
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
          [['公共', '公共汽车 là xe buýt trong phố; đi mười tiếng là xe đường dài.'], ['夜', 'Không ai nói 夜汽车; xe khách đi xa là 长途汽车.']], '<b>长途汽车</b> = xe khách đường dài.'),
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
          [['暖和', '暖和 nói thời tiết, đồ vật (天气很暖和); cảm giác ấm trong lòng là 温暖.'], ['强烈', '强烈 = mãnh liệt; một câu nói nhẹ nhàng làm lòng ấm lên.']], '<b>温暖</b> dùng được cho tình cảm; <b>暖和</b> chủ yếu cho thời tiết.'),
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
          [['扑', '扑 (bộ 扌 tay) = vồ tới, phả vào; cùng đọc pū nhưng trải chăn là 铺 (bộ 钅).'], ['晒', '晒 = phơi ngoài nắng; trên giường thì trải: 铺好.']], '<b>铺好</b> = trải xong. Bẫy cùng âm: 扑 ≠ 铺.')
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

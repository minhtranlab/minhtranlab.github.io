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

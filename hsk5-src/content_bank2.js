/* ===== question bank for the 27 words of tập 4-11 (cloze, order, listen). Wrong options only use words from the same or earlier tập. ===== */
Object.assign(MEAN, {
  '婚姻': 'hôn nhân', '吵架': 'cãi nhau', '相敬如宾': 'vợ chồng kính trọng nhau như khách', '暗暗': 'thầm (trong lòng)', '轮': 'đến lượt, luân phiên', '不耐烦': 'sốt ruột, bực mình', '靠': 'tựa, dựa vào, sát',
  '肩膀': 'bờ vai', '喊': 'gọi to, kêu', '伸': 'duỗi, chìa ra', '手指': 'ngón tay', '歪歪扭扭': 'xiêu vẹo', '递': 'đưa, chuyển cho', '脑袋': 'cái đầu', '女士': 'bà, quý bà (lịch sự)', '叙述': 'kể lại, thuật lại',
  '居然': 'không ngờ lại', '催': 'thúc giục', '等待': 'chờ đợi', '蚊子': 'con muỗi', '半夜': 'nửa đêm', '叮': 'đốt, chích', '老婆': 'vợ (thân mật)', '吵': 'ồn; làm ồn', '项': 'hạng mục (lượng từ)', '患难与共': 'cùng chung hoạn nạn', '细节': 'chi tiết'
});
Object.assign(QB, {
  '婚姻': [
    cz('婚姻', 'marriage', '爷爷奶奶的___很幸福，他们从来没吵过架。', 'Cuộc hôn nhân của ông bà rất hạnh phúc, họ chưa từng cãi nhau.', '爷爷奶奶的婚姻很幸福，他们从来没吵过架。', '婚姻', [['结婚', '结婚 là động từ; sau “的” cần danh từ 婚姻.'], ['离婚', '离婚 là ly hôn, trái với “rất hạnh phúc”.']], '<b>的婚姻</b>: 婚姻 là danh từ nên đứng sau 的.'),
    od(['婚姻'], '好的婚姻需要两个人一起努力。', 'Một cuộc hôn nhân tốt cần hai người cùng cố gắng.', ['好的婚姻', '需要', '两个人', '一起努力']),
    hr('婚姻', '他们的婚姻生活很幸福。', ['Cuộc sống hôn nhân của họ rất hạnh phúc.', 'Họ vừa mới kết hôn, rất vui.', 'Cuộc sống của họ rất bận rộn.'], '<b>婚姻生活</b> = cuộc sống hôn nhân. <b>很幸福</b> = rất hạnh phúc.')
  ],
  '吵架': [
    cz('吵架', 'pickArgue', '他们俩昨天又___了，今天谁也不说话。', 'Hai người hôm qua lại cãi nhau, hôm nay chẳng ai nói chuyện với ai.', '他们俩昨天又吵架了，今天谁也不说话。', '吵架', [['婚姻', '婚姻 là danh từ “hôn nhân”, không phải hành động.'], ['暗暗', '暗暗 là “thầm”, không hợp nghĩa.']], '<b>又吵架了</b> = lại cãi nhau rồi. 吵架 là động từ tách đôi: 吵了一架.'),
    od(['吵架'], '我昨天跟朋友吵了一架。', 'Hôm qua mình cãi nhau với bạn một trận.', ['我昨天', '跟朋友', '吵了', '一架']),
    hr('吵架', '他们结婚十年了，从来没吵过架。', ['Họ cưới nhau mười năm rồi, chưa từng cãi nhau.', 'Họ cưới nhau mười năm rồi, hay cãi nhau.', 'Họ mới cưới, hôm qua vừa cãi nhau.'], '<b>从来没…过</b> = chưa từng. <b>十年</b> = mười năm.')
  ],
  '相敬如宾': [
    cz('相敬如宾', 'guestRespect', '他们结婚几十年，说话总是很客气，一直___。', 'Họ cưới mấy chục năm, nói chuyện luôn rất khách sáo, luôn kính trọng nhau như khách quý.', '他们结婚几十年，说话总是很客气，一直相敬如宾。', '相敬如宾', [['吵架', '吵架 là cãi nhau, trái với “khách sáo, lịch sự”.'], ['婚姻', '婚姻 là danh từ, không đứng sau 一直 theo nghĩa này.']], '相敬如宾 khen cách đối xử <b>tôn trọng, lễ độ</b> giữa vợ chồng.'),
    hr('相敬如宾', '他们俩相敬如宾，很少吵架。', ['Hai người họ kính trọng nhau như khách quý, rất ít cãi nhau.', 'Hai người họ hay cãi nhau, ít khi nói chuyện.', 'Hai người họ mới quen nhau, rất khách sáo.'], '<b>很少</b> = rất ít. <b>吵架</b> = cãi nhau.'),
    od(['相敬如宾'], '他们结婚几十年，一直相敬如宾。', 'Họ cưới mấy chục năm, luôn kính trọng nhau như khách quý.', ['他们', '结婚几十年', '一直', '相敬如宾'])
  ],
  '暗暗': [
    cz('暗暗', 'secretJoy', '听到好消息，她___笑了。', 'Nghe tin tốt, cô thầm cười.', '听到好消息，她暗暗笑了。', '暗暗', [['吵架', '吵架 là cãi nhau, không đứng trước 笑.'], ['婚姻', '婚姻 là danh từ, không đứng trước động từ 笑.']], '<b>暗暗 + động từ</b>: làm gì trong lòng, người khác không biết.'),
    od(['暗暗'], '听了他的话，我暗暗高兴。', 'Nghe lời anh ấy nói, mình thầm vui.', ['听了他的话', '我', '暗暗', '高兴']),
    hr('暗暗', '她暗暗决定，明年一定要考上大学。', ['Cô thầm quyết định, sang năm nhất định phải đỗ đại học.', 'Cô nói to rằng sang năm sẽ học đại học.', 'Năm ngoái cô đã thi đỗ đại học.'], '<b>暗暗决定</b> = thầm quyết định. <b>一定要</b> = nhất định phải. <b>考上</b> = thi đỗ.')
  ],
  '轮': [
    cz('轮', 'turn', '今天___到我做饭，明天是妈妈做。', 'Hôm nay đến lượt mình nấu cơm, ngày mai là mẹ nấu.', '今天轮到我做饭，明天是妈妈做。', '轮', [['等', '等 là chờ; “đến lượt” phải là 轮到.'], ['靠', '靠 là tựa vào, không phải “đến lượt”.']], '<b>轮到 + người</b> = đến lượt ai. Không nói 轮我.'),
    od(['轮'], '下一个轮到谁了？', 'Tiếp theo đến lượt ai rồi?', ['下一个', '轮到', '谁了']),
    hr('轮', '今天轮到我洗碗了。', ['Hôm nay đến lượt mình rửa bát.', 'Hôm nay mình rửa bát xong rồi.', 'Hôm nay mình không muốn rửa bát.'], '<b>轮到我</b> = đến lượt mình. <b>洗碗</b> = rửa bát.')
  ],
  '不耐烦': [
    cz('不耐烦', 'impatient', '他等了一个小时，有些___了。', 'Anh ấy đợi một tiếng rồi, có chút sốt ruột.', '他等了一个小时，有些不耐烦了。', '不耐烦', [['肩膀', '肩膀 là vai, không đi với 有些.'], ['轮', '轮 là “đến lượt”, không diễn tả tâm trạng.']], '<b>有些 / 很 + 不耐烦</b>: hơi / rất sốt ruột. Cũng nói <b>等得不耐烦</b>.'),
    od(['不耐烦'], '她不耐烦地看了看表。', 'Cô sốt ruột nhìn đồng hồ.', ['她', '不耐烦地', '看了看', '表']),
    hr('不耐烦', '他等得有些不耐烦，一直看手机。', ['Anh ấy đợi đến hơi sốt ruột, cứ nhìn điện thoại mãi.', 'Anh ấy đợi rất vui, cứ nói chuyện với bạn.', 'Anh ấy không đợi nữa, đã đi về.'], '<b>等得有些不耐烦</b> = đợi đến hơi sốt ruột. <b>一直</b> = cứ, liên tục.')
  ],
  '靠': [
    cz('靠', 'lean', '他累了，___在椅子上睡着了。', 'Anh ấy mệt, tựa vào ghế ngủ thiếp đi.', '他累了，靠在椅子上睡着了。', '靠', [['轮', '轮 là “đến lượt”, không hợp nghĩa.'], ['肩膀', '肩膀 là danh từ “vai”, không đứng trước 在.']], '<b>靠在 + chỗ</b> = tựa vào chỗ đó. Nghĩa thứ nhất của 靠.'),
    cz('靠', 'pickWindow', '坐飞机的时候，我喜欢坐___窗的座位。', 'Khi đi máy bay, mình thích ngồi chỗ sát cửa sổ.', '坐飞机的时候，我喜欢坐靠窗的座位。', '靠', [['轮', '轮 là “đến lượt”, không đi với 窗.'], ['肩膀', '肩膀 là vai, không đi với 窗.']], '<b>靠窗</b> = sát cửa sổ, <b>靠海</b> = sát biển. Nghĩa thứ ba của 靠.'),
    od(['靠'], '没有人可以完全不靠别人。', 'Không ai có thể hoàn toàn không dựa vào người khác.', ['没有人可以', '完全', '不靠别人'])
  ],
  '肩膀': [
    cz('肩膀', 'shoulder', '孩子累了，把头靠在妈妈的___上睡着了。', 'Đứa bé mệt, tựa đầu trên vai mẹ ngủ thiếp đi.', '孩子累了，把头靠在妈妈的肩膀上睡着了。', '肩膀', [['不耐烦', '不耐烦 là tính từ “sốt ruột”, không dùng như danh từ.'], ['轮', '轮 là “đến lượt”, không hợp.']], '<b>靠在…的肩膀上</b> = tựa trên vai của…'),
    hr('肩膀', '他拍了拍我的肩膀。', ['Anh ấy vỗ vai mình.', 'Anh ấy nắm tay mình.', 'Anh ấy gọi mình.'], '<b>拍肩膀</b> = vỗ vai. <b>拍了拍</b> = vỗ nhẹ vài cái.'),
    od(['肩膀'], '他靠在朋友的肩膀上哭了。', 'Anh ấy tựa vào vai bạn khóc.', ['他', '靠在', '朋友的肩膀上', '哭了'])
  ],
  '喊': [
    cz('喊', 'shout', '他在楼下大声地___我的名字。', 'Anh ấy ở dưới lầu gọi to tên mình.', '他在楼下大声地喊我的名字。', '喊', [['伸', '伸 là chìa ra, không dùng với 名字.'], ['手指', '手指 là danh từ, không đứng sau 大声地.']], '<b>大声地 + 喊</b> = gọi to (trạng ngữ + động từ).'),
    hr('喊', '别喊了，孩子睡着了。', ['Đừng la nữa, bé ngủ rồi.', 'Đừng chạy nữa, bé mệt rồi.', 'Đừng khóc nữa, bé đói rồi.'], '<b>别…了</b> = đừng… nữa. <b>睡着了</b> = đã ngủ.'),
    od(['喊'], '他大声地喊着我的名字。', 'Anh ấy gọi to tên mình.', ['他', '大声地', '喊着', '我的名字'])
  ],
  '伸': [
    cz('伸', 'stretch', '请把手___出来，我看看。', 'Xin hãy chìa tay ra, để mình xem.', '请把手伸出来，我看看。', '伸', [['喊', '喊 là gọi to, không dùng với 手 ở đây.'], ['靠', '靠 là tựa vào, không phải chìa ra.']], '<b>伸出来</b> = chìa ra. 伸 thường đi với bổ ngữ: 伸出, 伸进去, 伸开.'),
    od(['伸'], '她把手伸进包里，拿出了一支笔。', 'Cô thò tay vào túi, lấy ra một cây bút.', ['她', '把手', '伸进包里', '拿出了一支笔']),
    hr('伸', '他伸出手，想拿桌子上的书。', ['Anh ấy chìa tay ra, muốn lấy quyển sách trên bàn.', 'Anh ấy cất sách lên bàn.', 'Anh ấy đưa sách cho mình.'], '<b>伸出手</b> = chìa tay ra. <b>想拿</b> = muốn lấy.')
  ],
  '手指': [
    cz('手指', 'finger', '她伸出一根___，放在嘴边。', 'Cô chìa một ngón tay, đặt lên môi.', '她伸出一根手指，放在嘴边。', '手指', [['喊', '喊 là động từ gọi to, không đếm bằng 根.'], ['伸', '伸 là động từ, sau 一根 cần danh từ.']], 'Ngón tay đếm bằng <b>根</b>: 一根手指.'),
    od(['手指'], '她的手指很长，也很漂亮。', 'Ngón tay cô ấy rất dài, cũng rất đẹp.', ['她的手指', '很长', '也很漂亮']),
    hr('手指', '他的手指很长，会弹钢琴。', ['Ngón tay anh ấy rất dài, biết chơi piano.', 'Tay anh ấy rất nhỏ, không biết chơi piano.', 'Anh ấy đang học đàn guitar.'], '<b>手指很长</b> = ngón tay dài. <b>会弹钢琴</b> = biết chơi piano.')
  ],
  '歪歪扭扭': [
    cz('歪歪扭扭', 'wobbly', '他的手受伤了，写出来的字___的。', 'Tay anh bị thương, chữ viết ra xiêu vẹo.', '他的手受伤了，写出来的字歪歪扭扭的。', '歪歪扭扭', [['不耐烦', '不耐烦 là sốt ruột, không dùng để tả chữ viết.'], ['相敬如宾', '相敬如宾 là thành ngữ về vợ chồng, không dùng để tả chữ.']], '<b>歪歪扭扭的字</b>: chữ xiêu vẹo. Dạng AABB, thêm 的.'),
    od(['歪歪扭扭'], '孩子写的字歪歪扭扭的。', 'Chữ đứa bé viết xiêu vẹo.', ['孩子写的字', '歪歪扭扭的']),
    hr('歪歪扭扭', '路边的树长得歪歪扭扭的。', ['Cây ven đường mọc xiêu vẹo.', 'Cây ven đường mọc rất cao.', 'Cây ven đường rất nhiều.'], '<b>长得歪歪扭扭</b> = mọc xiêu vẹo. <b>路边</b> = ven đường.')
  ],
  '递': [
    cz('递', 'pass', '他从包里拿出一张纸条，___给了我。', 'Anh ấy lấy từ trong túi ra một mảnh giấy, đưa cho mình.', '他从包里拿出一张纸条，递给了我。', '递', [['喊', '喊 là gọi to, không phải đưa vật.'], ['靠', '靠 là tựa vào, không phải đưa đồ.']], '<b>递给 + người</b>: đưa cho ai. Hay đi với 一杯水, 一张纸条.'),
    od(['递'], '请把那杯水递给我。', 'Làm ơn đưa cho mình cốc nước đó.', ['请把那杯水', '递给我']),
    hr('递', '她递给我一张纸条。', ['Cô ấy đưa cho mình một mảnh giấy.', 'Cô ấy xé mảnh giấy của mình.', 'Cô ấy viết cho mình một lá thư.'], '<b>递给我</b> = đưa cho mình. <b>一张纸条</b> = một mảnh giấy.')
  ],
  '脑袋': [
    cz('脑袋', 'headShake', '他摇了摇___，说：“我不同意。”', 'Anh ấy lắc đầu, nói: “Tôi không đồng ý.”', '他摇了摇脑袋，说：“我不同意。”', '脑袋', [['手指', '手指 là ngón tay, không “lắc” theo nghĩa này.'], ['肩膀', '肩膀 là vai, không dùng để nói “lắc đầu”.']], '<b>摇脑袋</b> = lắc đầu (khẩu ngữ). Cũng nói 摇头.'),
    od(['脑袋'], '孩子的脑袋靠在妈妈肩上。', 'Đầu đứa bé tựa vào vai mẹ.', ['孩子的脑袋', '靠在', '妈妈肩上']),
    hr('脑袋', '他不好意思地摸了摸脑袋。', ['Anh ấy ngượng ngùng xoa đầu.', 'Anh ấy tức giận đập bàn.', 'Anh ấy cười to với mọi người.'], '<b>不好意思地</b> = ngượng ngùng. <b>摸了摸脑袋</b> = xoa xoa đầu (cử chỉ ngại).')
  ],
  '女士': [
    cz('女士', 'ladySir', '___们，先生们，晚上好！', 'Thưa quý bà, quý ông, chào buổi tối!', '女士们，先生们，晚上好！', '女士', [['婚姻', '婚姻 là hôn nhân, không dùng để xưng hô.'], ['手指', '手指 là ngón tay, không dùng để xưng hô.']], '<b>女士 / 先生</b> là cách gọi lịch sự. Thêm 们 để gọi nhiều người: 女士们, 先生们.'),
    hr('女士', '这位女士是我们的客人。', ['Bà này là khách của chúng tôi.', 'Bà này là giáo viên của chúng tôi.', 'Ông này là khách của chúng tôi.'], '<b>这位女士</b> = vị nữ này. <b>位</b> là lượng từ lịch sự cho người.'),
    od(['女士'], '女士，请坐。', 'Thưa bà, xin mời ngồi.', ['女士', '请坐'])
  ],
  '叙述': [
    cz('叙述', 'narrate', '他详细地___了那天发生的事。', 'Anh ấy kể lại chi tiết chuyện xảy ra hôm đó.', '他详细地叙述了那天发生的事。', '叙述', [['递', '递 là đưa vật, không phải kể lại.'], ['伸', '伸 là chìa ra, không phải kể lại.']], '<b>详细地 + 叙述</b> = kể lại chi tiết. 叙述 trang trọng, hay dùng khi kể diễn biến.'),
    hr('叙述', '请你简单地叙述一下事情的经过。', ['Bạn hãy kể lại sơ lược diễn biến sự việc.', 'Bạn hãy viết ra tên của mình.', 'Bạn hãy đọc to cả bài.'], '<b>简单地叙述</b> = kể sơ lược. <b>事情的经过</b> = diễn biến sự việc.'),
    od(['叙述'], '请你简单地叙述一下经过。', 'Bạn hãy kể sơ lược diễn biến.', ['请你', '简单地', '叙述一下', '经过'])
  ],
  '居然': [
    cz('居然', 'meetBy', '这么简单的题，你___也不会做？', 'Bài đơn giản thế này, bạn mà cũng không làm được?', '这么简单的题，你居然也不会做？', '居然', [['暗暗', '暗暗 là “thầm”, không diễn tả sự bất ngờ.'], ['一直', '一直 là “luôn”, không diễn tả sự bất ngờ.']], '<b>居然</b> = không ngờ. Thường đi cùng 也 / 还: 居然也不会.'),
    od(['居然'], '没想到居然在这儿碰到你！', 'Không ngờ lại gặp bạn ở đây!', ['没想到', '居然', '在这儿', '碰到你']),
    hr('居然', '她居然放弃了这次机会。', ['Cô ấy lại bỏ cả cơ hội lần này.', 'Cô ấy đã nắm lấy cơ hội lần này.', 'Cô ấy đang tìm một cơ hội khác.'], '<b>居然 + 放弃</b>: không ngờ lại bỏ. <b>这次机会</b> = cơ hội lần này.')
  ],
  '催': [
    cz('催', 'urge', '妈妈一直___我早点睡觉。', 'Mẹ cứ giục mình đi ngủ sớm.', '妈妈一直催我早点睡觉。', '催', [['递', '递 là đưa vật, không phải giục.'], ['伸', '伸 là chìa ra, không phải giục.']], '<b>催 + người + động từ</b> = giục ai làm gì: 催我早点睡觉.'),
    od(['催'], '你别催我，我马上就好。', 'Bạn đừng giục mình, mình xong ngay đây.', ['你别催我', '我马上就好']),
    hr('催', '妈妈催我早点睡觉。', ['Mẹ giục mình đi ngủ sớm.', 'Mẹ gọi mình dậy sớm.', 'Mẹ bảo mình đừng ngủ.'], '<b>催我</b> = giục mình. <b>早点</b> = sớm một chút.')
  ],
  '等待': [
    cz('等待', 'waiting', '我们都在___比赛的结果。', 'Tất cả chúng mình đều đang chờ kết quả cuộc thi.', '我们都在等待比赛的结果。', '等待', [['催', '催 là giục, không phải chờ.'], ['递', '递 là đưa, không phải chờ.']], '<b>等待 + kết quả / cơ hội…</b> = chờ đợi. Trang trọng hơn 等.'),
    od(['等待'], '请再等待一会儿。', 'Xin hãy chờ thêm một lát.', ['请再', '等待', '一会儿']),
    hr('等待', '他在医院门口等待消息。', ['Anh ấy đợi tin tức ngoài cửa bệnh viện.', 'Anh ấy đang gửi tin cho bệnh viện.', 'Anh ấy vừa từ bệnh viện ra.'], '<b>等待消息</b> = đợi tin tức. <b>医院门口</b> = cổng bệnh viện.')
  ],
  '蚊子': [
    cz('蚊子', 'mosquito', '夏天，我家的___特别多。', 'Mùa hè, nhà mình muỗi đặc biệt nhiều.', '夏天，我家的蚊子特别多。', '蚊子', [['电台', '电台 là đài phát thanh, không phải con vật.'], ['脑袋', '脑袋 là cái đầu, không hợp với 特别多 ở đây.']], '<b>蚊子多</b> = nhiều muỗi. Đếm bằng 只: 一只蚊子.'),
    od(['蚊子'], '夏天，我家的蚊子特别多。', 'Mùa hè, nhà mình muỗi đặc biệt nhiều.', ['夏天', '我家的蚊子', '特别多']),
    hr('蚊子', '一只蚊子在我耳边飞。', ['Một con muỗi bay bên tai mình.', 'Một con chim đậu trên vai mình.', 'Một chiếc xe chạy bên cạnh mình.'], '<b>一只蚊子</b> = một con muỗi. <b>耳边</b> = bên tai. <b>飞</b> = bay.')
  ],
  '叮': [
    cz('叮', 'bitten', '我的手被蚊子___了一下。', 'Tay mình bị muỗi đốt một cái.', '我的手被蚊子叮了一下。', '叮', [['催', '催 là giục, không dùng với 蚊子.'], ['吵', '吵 là ồn, không phải “đốt”.']], '<b>被蚊子叮</b> = bị muỗi đốt. <b>叮了一下</b> = đốt một cái.'),
    od(['叮'], '昨晚我被蚊子叮醒了。', 'Tối qua mình bị muỗi đốt tỉnh giấc.', ['昨晚', '我被蚊子', '叮醒了']),
    hr('叮', '我的脚被蚊子叮了，很痒。', ['Chân mình bị muỗi đốt, rất ngứa.', 'Chân mình bị thương, rất đau.', 'Chân mình bị lạnh, rất cứng.'], '<b>被蚊子叮了</b> = bị muỗi đốt. <b>很痒</b> = rất ngứa.')
  ],
  '半夜': [
    cz('半夜', 'midnight', '他___才回家，老婆一直在等他。', 'Nửa đêm anh ấy mới về nhà, vợ cứ đợi mãi.', '他半夜才回家，老婆一直在等他。', '半夜', [['蚊子', '蚊子 là con muỗi, không chỉ thời gian.'], ['等待', '等待 là động từ “chờ”, không chỉ thời gian.']], '<b>半夜</b> = nửa đêm, đứng trước động từ làm trạng ngữ thời gian: 半夜醒来.'),
    hr('半夜', '我半夜被冷醒了。', ['Nửa đêm mình bị lạnh làm tỉnh giấc.', 'Sáng sớm mình bị nóng làm tỉnh giấc.', 'Nửa đêm mình bị muỗi đốt.'], '<b>半夜</b> = nửa đêm. <b>被冷醒</b> = bị lạnh mà tỉnh.'),
    od(['半夜'], '他昨天半夜才回家。', 'Hôm qua nửa đêm anh ấy mới về nhà.', ['他', '昨天半夜', '才回家'])
  ],
  '老婆': [
    cz('老婆', 'wife', '他对___特别好，每天都给她做饭。', 'Anh ấy đối xử với vợ đặc biệt tốt, mỗi ngày đều nấu cơm cho cô ấy.', '他对老婆特别好，每天都给她做饭。', '老婆', [['蚊子', '蚊子 là con muỗi, không phải người được nấu cơm cho.'], ['半夜', '半夜 là nửa đêm, không phải người.']], '<b>老婆</b> = vợ (khẩu ngữ, thân mật). Đừng hiểu theo âm Hán–Việt “lão bà”. Trang trọng hơn: 妻子.'),
    hr('老婆', '我老婆做饭很好吃。', ['Vợ mình nấu ăn rất ngon.', 'Mẹ mình nấu ăn rất ngon.', 'Vợ mình ăn rất nhiều.'], '<b>老婆</b> = vợ. <b>做饭很好吃</b> = nấu ăn rất ngon.'),
    od(['老婆'], '他对老婆特别好。', 'Anh ấy đối xử với vợ đặc biệt tốt.', ['他', '对老婆', '特别好'])
  ],
  '吵': [
    cz('吵', 'noisy', '这里太___了，我睡不着。', 'Chỗ này ồn quá, mình không ngủ được.', '这里太吵了，我睡不着。', '吵', [['叮', '叮 là đốt, chích, không dùng để nói “ồn”.'], ['催', '催 là giục, không phải “ồn”.']], '<b>太吵了</b> = ồn quá. Tính từ 吵 đứng sau 太 / 很.'),
    cz('吵', 'noisy', '别大声说话，会把孩子___醒的。', 'Đừng nói to, sẽ làm bé thức giấc.', '别大声说话，会把孩子吵醒的。', '吵', [['叮', '叮 là đốt, chích; nói “làm ồn khiến thức” phải là 吵醒.'], ['催', '催 là giục, không đứng trước 醒 theo nghĩa này.']], '<b>吵醒</b> = làm ồn khiến ai thức dậy. <b>把孩子吵醒</b>.'),
    od(['吵'], '别吵醒孩子。', 'Đừng làm bé thức giấc.', ['别', '吵醒', '孩子'])
  ],
  '项': [
    cz('项', 'itemPrize', '这是一___很重要的研究。', 'Đây là một nghiên cứu rất quan trọng.', '这是一项很重要的研究。', '项', [['只', '只 là lượng từ cho con vật, không dùng cho nghiên cứu.'], ['张', '张 là lượng từ cho vật phẳng, không dùng cho nghiên cứu.']], '<b>一项</b> + 研究 / 工作 / 计划 / 任务 / 奖项.'),
    od(['项'], '电台增加了两项奖项。', 'Đài phát thanh thêm hai giải thưởng.', ['电台', '增加了', '两项奖项']),
    hr('项', '他得了一项大奖。', ['Anh ấy đoạt một giải thưởng lớn.', 'Anh ấy mua một món quà lớn.', 'Anh ấy nhận một nhiệm vụ lớn.'], '<b>一项大奖</b> = một giải thưởng lớn. <b>得了</b> = đạt được.')
  ],
  '患难与共': [
    cz('患难与共', 'sameBoat', '他们是___的好朋友，一起走过了最难的日子。', 'Họ là những người bạn tốt cùng nhau vượt hoạn nạn, cùng đi qua những ngày khó khăn nhất.', '他们是患难与共的好朋友，一起走过了最难的日子。', '患难与共', [['相敬如宾', '相敬如宾 là kính trọng nhau như khách, không nói về cùng vượt khó.'], ['不耐烦', '不耐烦 là sốt ruột, không hợp với “bạn tốt”.']], '<b>患难与共</b> = cùng nhau vượt qua khó khăn: 患难与共的朋友 / 夫妻.'),
    hr('患难与共', '夫妻应该患难与共。', ['Vợ chồng nên cùng nhau vượt qua hoạn nạn.', 'Vợ chồng nên luôn kính trọng nhau.', 'Vợ chồng không nên cãi nhau.'], '<b>应该</b> = nên. <b>患难与共</b> = cùng chia hoạn nạn.'),
    od(['患难与共'], '他们是患难与共的好朋友。', 'Họ là những người bạn tốt cùng nhau vượt hoạn nạn.', ['他们是', '患难与共的', '好朋友'])
  ],
  '细节': [
    cz('细节', 'detailZoom', '这部电影的___很感人。', 'Những chi tiết của bộ phim này rất cảm động.', '这部电影的细节很感人。', '细节', [['项', '项 là lượng từ, không đứng sau 的 làm chủ ngữ.'], ['吵', '吵 là ồn, không hợp nghĩa.']], '<b>电影的细节</b>: chi tiết của phim. 细节 hay đi với 电影, 小说, 生活.'),
    od(['细节'], '爱就在生活的小细节里。', 'Tình yêu nằm trong những chi tiết nhỏ của cuộc sống.', ['爱', '就在', '生活的小细节里']),
    hr('细节', '好的电影都有很多感人的细节。', ['Phim hay đều có nhiều chi tiết cảm động.', 'Phim hay đều rất dài.', 'Phim hay đều có nhiều người xem.'], '<b>感人的细节</b> = chi tiết cảm động.')
  ]
});

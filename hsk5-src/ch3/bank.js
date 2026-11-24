/* ===== Bài 3: question bank for review (Ôn tập, Ôn tập tổng hợp, Kiểm tra) + MEAN. Same shape as Bài 1 QB.
   New sentences, built only from HSK1–4, Bài 1–2 words and Bài 3 words taught up to that word's tập.
   A wrong option put into the blank never makes a right or reasonable sentence (HANDOFF §11).
   Story words (*): hear + cloze only (recognition), no order / type.
   Pictures (scene) appear only after answering (HANDOFF §12.11) and show what the sentence says; never the answer's characters. ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  CH3.MEAN = { '工人': 'công nhân', '稳定': 'ổn định', '待遇': 'đãi ngộ (lương, chế độ)', '发愁': 'lo âu, buồn rầu',
    '平静': 'yên ả, bình tĩnh', '帆船': 'thuyền buồm', '撞': 'đụng, đâm vào', '艘': 'chiếc (tàu, thuyền)', '航行': 'đi (tàu, thuyền)',
    '积蓄': 'tiền để dành', '二手': 'cũ, đã qua sử dụng', '彩虹': 'cầu vồng', '包括': 'bao gồm, kể cả', '疯': 'điên',
    '辞职': 'thôi việc, từ chức', '驾驶': 'lái, điều khiển', '轮流': 'thay phiên, luân phiên', '钓': 'câu (cá)', '顿': 'bữa (lượng từ)', '海鲜': 'hải sản',
    '傍晚': 'chạng vạng, chiều tà', '舒适': 'dễ chịu, thoải mái', '干活儿': 'làm việc', '盼望': 'trông mong, mong mỏi', '陆地': 'đất liền', '各自': 'từng người, ai nấy',
    '勿': 'chớ, đừng', '时刻': 'thời khắc; luôn luôn', '着火': 'bốc cháy', '漏': 'rò, rỉ, dột', '雷': 'sấm', '随时': 'bất cứ lúc nào', '闪电': 'chớp, tia chớp', '击': 'đánh', '拥抱': 'ôm',
    '海里': 'hải lý', '人生': 'đời người', '台阶': 'bậc thềm', '未来': 'tương lai', '太太': 'vợ; bà', '时代': 'thời đại' };
  /* cloze: w word, scene, say = sentence with ___, vi, full, ok = right word, wrongs = [[word, why not]] */
  var cz = function (w, scene, say, vi, full, ok, wrongs, teach) {
    return { t: 'mc', w: [w], scene: scene, say: [say, vi], full: full, prompt: 'Chọn từ điền vào chỗ trống:',
      opts: [{ t: ok, ok: 1 }].concat(wrongs.map(function (x) { return { t: x[0], note: x[1] }; })), teach: teach };
  };
  var od = function (w, zhs, vi, chunks) { return { t: 'order', w: w, zh: zhs, vi: vi, chunks: chunks }; };
  /* hear: opts[0] right; whyNot = why each wrong option is out (one detail each) */
  var hr = function (w) { var x = CH3.LEARN[w].hear; return { t: 'hear', w: [w], s: x.s, opts: x.opts.slice(), why: x.why, whyNot: x.whyNot.slice() }; };
  var build = function () {
    CH3.QB = {
      /* ---- tập 1 ---- */
      '工人': [
        cz('工人', 'c3_worker', '这些___每天工作八个小时，很辛苦。', 'Những công nhân này mỗi ngày làm việc tám tiếng, rất vất vả.', '这些工人每天工作八个小时，很辛苦。', '工人',
          [['待遇', '待遇 là đãi ngộ (lương, chế độ), không phải người “làm việc tám tiếng”.'], ['稳定', '稳定 là tính từ “ổn định”, không chỉ người.']], '<b>工人</b> = công nhân: 铁路工人 (công nhân đường sắt).'),
        hr('工人'),
        od(['工人'], '我爸爸以前是铁路工人。', 'Ba mình trước đây là công nhân đường sắt.', ['我爸爸', '以前', '是', '铁路工人'])
      ],
      '稳定': [
        cz('稳定', 'c3_steady', '他想找一份___的工作，每个月的收入都差不多。', 'Anh ấy muốn tìm một công việc ổn định, tháng nào thu nhập cũng xêm xêm nhau.', '他想找一份稳定的工作，每个月的收入都差不多。', '稳定',
          [['待遇', '待遇 là danh từ “đãi ngộ”; tả công việc cần tính từ: 稳定的工作.'], ['发愁', '发愁 là động từ “lo âu”, không tả công việc.']], '<b>稳定的 + 工作 / 生活 / 收入</b> = công việc, cuộc sống, thu nhập ổn định.'),
        hr('稳定'),
        od(['稳定'], '她的收入一直很稳定。', 'Thu nhập của cô ấy luôn rất ổn định.', ['她的收入', '一直', '很', '稳定'])
      ],
      '待遇': [
        cz('待遇', 'c3_pay', '这家公司___很好，很多人都想来工作。', 'Công ty này đãi ngộ rất tốt, nhiều người muốn vào làm.', '这家公司待遇很好，很多人都想来工作。', '待遇',
          [['发愁', '发愁 là động từ “lo âu”; 发愁很好 không có nghĩa.'], ['稳定', '稳定 là tính từ; 稳定很好 không nói được. Lý do nhiều người muốn vào làm là lương, chế độ tốt: 待遇很好.']], '<b>待遇很好 / 待遇不错</b> = đãi ngộ tốt.'),
        hr('待遇'),
        od(['待遇'], '他觉得现在的工作待遇太低了。', 'Anh ấy thấy đãi ngộ của công việc hiện tại thấp quá.', ['他觉得', '现在的工作', '待遇', '太低了'])
      ],
      '发愁': [
        cz('发愁', 'c3_worry', '别为这点儿小事___了，明天再说吧。', 'Đừng lo nghĩ vì chuyện cỏn con này nữa, mai rồi tính.', '别为这点儿小事发愁了，明天再说吧。', '发愁',
          [['稳定', '稳定 là tính từ “ổn định”; lo vì chuyện gì là 为…发愁.'], ['待遇', '待遇 là danh từ “đãi ngộ”, không làm động từ.']], '<b>为 + việc + 发愁</b> = lo âu vì chuyện gì.'),
        hr('发愁'),
        od(['发愁'], '她一直在为考试发愁。', 'Cô ấy cứ lo âu mãi vì chuyện thi cử.', ['她', '一直在', '为考试', '发愁'])
      ],
      /* ---- tập 2 ---- */
      '平静': [
        cz('平静', 'c3_calmSea', '听了妈妈的话，他的心情慢慢___下来了。', 'Nghe mẹ nói, lòng anh ấy dần dần bình tĩnh lại.', '听了妈妈的话，他的心情慢慢平静下来了。', '平静',
          [['发愁', '发愁 không đi với 下来; lòng dịu lại là <b>平静下来</b>.'], ['撞', '撞 = đâm vào; 心情撞下来 không có nghĩa.']], '<b>心情平静下来</b> = lòng bình tĩnh lại.'),
        hr('平静'),
        od(['平静'], '我喜欢这样平静的生活。', 'Mình thích cuộc sống yên ả như thế này.', ['我喜欢', '这样', '平静的', '生活'])
      ],
      '帆船': [
        hr('帆船'),
        cz('帆船', 'c3_sailboat', '海上有一艘白色的___，正向我们开过来。', 'Trên biển có một chiếc thuyền buồm màu trắng đang tiến về phía chúng tôi.', '海上有一艘白色的帆船，正向我们开过来。', '帆船',
          [['工人', '工人 là người, không đi với lượng từ 艘.'], ['汽车', '汽车 chạy trên đường, lượng từ là 辆; trên biển, đi với 艘 là thuyền.']], '<b>一艘帆船</b> = một chiếc thuyền buồm.')
      ],
      '撞': [
        cz('撞', 'c3_bump', '他骑车太快，___倒了一个老人。', 'Anh ấy đạp xe nhanh quá, đâm ngã một ông cụ.', '他骑车太快，撞倒了一个老人。', '撞',
          [['航行', '航行 là tàu thuyền đi trên biển.'], ['平静', '平静 là tính từ “yên ả”, không đi với 倒.']], '<b>撞 + 倒 / 伤 / 断 / 开</b>: đâm ngã, đâm bị thương, đâm gãy, đâm bật ra.'),
        hr('撞'),
        od(['撞'], '他走路看手机，撞到了一棵树。', 'Anh ấy vừa đi vừa xem điện thoại, đâm vào một cái cây.', ['他走路', '看手机', '撞到了', '一棵树'])
      ],
      '艘': [
        cz('艘', 'c3_boats', '海上有两___帆船。', 'Trên biển có hai chiếc thuyền buồm.', '海上有两艘帆船。', '艘',
          [['辆', '辆 là lượng từ cho xe (一辆车); tàu thuyền dùng 艘.'], ['张', '张 dùng cho vật mỏng, phẳng (一张纸).']], '<b>艘</b> chỉ dùng cho tàu thuyền.'),
        hr('艘')
      ],
      '航行': [
        cz('航行', 'c3_voyage', '我们的船已经在海上___了三天。', 'Thuyền của chúng tôi đã đi trên biển ba ngày rồi.', '我们的船已经在海上航行了三天。', '航行',
          [['撞', '撞 = đâm vào; 撞了三天 không có nghĩa.'], ['工人', '工人 là danh từ (công nhân), không làm động từ.']], '<b>在海上航行</b> = đi trên biển (tàu thuyền).'),
        hr('航行')
      ],
      /* ---- tập 3 ---- */
      '积蓄': [
        hr('积蓄'),
        cz('积蓄', 'c3_piggy', '他把所有的___都用来买房子了。', 'Anh ấy dùng hết tiền để dành để mua nhà.', '他把所有的积蓄都用来买房子了。', '积蓄',
          [['工人', '工人 là người; thứ dùng để mua nhà là tiền: 积蓄.'], ['帆船', '帆船 là thuyền buồm, không dùng để mua nhà.']], '<b>所有的积蓄</b> = toàn bộ tiền để dành.')
      ],
      '二手': [
        hr('二手'),
        cz('二手', 'c3_usedCar', '我没有多少钱，只能买一辆___车。', 'Mình không có bao nhiêu tiền, đành mua một chiếc xe cũ.', '我没有多少钱，只能买一辆二手车。', '二手',
          [['彩虹', '彩虹 là cầu vồng.'], ['平静', '平静 là tính từ tả mặt biển, tâm trạng; không đi với 车.']], '<b>二手车</b> = xe cũ (đã có người dùng), nên rẻ.')
      ],
      '彩虹': [
        cz('彩虹', 'c3_rainbow', '雨停了，天上出现了一道___。', 'Mưa tạnh, trên trời hiện ra một dải cầu vồng.', '雨停了，天上出现了一道彩虹。', '彩虹',
          [['帆船', '帆船 là thuyền buồm, không hiện ra trên trời.'], ['积蓄', '积蓄 là tiền để dành.']], '<b>一道彩虹</b> = một dải cầu vồng.'),
        hr('彩虹'),
        od(['彩虹'], '你看，那边有一道彩虹！', 'Bạn xem kìa, đằng kia có một dải cầu vồng!', ['你看', '那边', '有一道', '彩虹'])
      ],
      '包括': [
        cz('包括', 'c3_include', '我们班所有人，___老师，都去看电影了。', 'Tất cả lớp mình, kể cả cô giáo, đều đi xem phim.', '我们班所有人，包括老师，都去看电影了。', '包括',
          [['一起', '一起 đứng trước động từ (一起去); không dùng để nói “kể cả ai”.'], ['从', '从 = từ (nơi nào, lúc nào); 从老师 không có nghĩa “kể cả cô giáo”.']], '<b>包括 X，所有人都…</b> = kể cả X, ai cũng….'),
        hr('包括'),
        od(['包括'], '这个价格包括早饭和晚饭。', 'Giá này bao gồm bữa sáng và bữa tối.', ['这个价格', '包括', '早饭', '和晚饭'])
      ],
      '疯': [
        cz('疯', 'c3_coldSwim', '天这么冷，你还要去游泳，___了吗？', 'Trời lạnh thế này mà bạn còn định đi bơi, điên rồi à?', '天这么冷，你还要去游泳，疯了吗？', '疯',
          [['撞', '撞 = đâm vào; 撞了吗 không hợp với câu.'], ['稳定', '稳定 là “ổn định”, ngược ý người nói đang chê.']], '<b>你疯了吗？</b> = bạn điên à? (khi ai làm chuyện quá liều).'),
        hr('疯'),
        od(['疯'], '大家都觉得他疯了。', 'Mọi người đều cho là anh ấy điên rồi.', ['大家', '都觉得', '他', '疯了'])
      ],
      /* ---- tập 4 ---- */
      '辞职': [
        cz('辞职', 'c3_quit', '她上个月___了，现在在家照顾孩子。', 'Tháng trước cô ấy thôi việc, giờ ở nhà chăm con.', '她上个月辞职了，现在在家照顾孩子。', '辞职',
          [['驾驶', '驾驶 = lái, cần tân ngữ (驾驶汽车); 她上个月驾驶了 không trọn nghĩa.'], ['包括', '包括 = bao gồm, cần tân ngữ phía sau.']], '<b>辞职</b> = thôi việc; tách được: <b>辞了职</b>.'),
        hr('辞职'),
        od(['辞职'], '她辞了职，在家照顾孩子。', 'Cô ấy thôi việc, ở nhà chăm con.', ['她', '辞了职', '在家', '照顾孩子'])
      ],
      '驾驶': [
        cz('驾驶', 'c3_steer', '___汽车的时候，不能看手机。', 'Khi lái xe, không được xem điện thoại.', '驾驶汽车的时候，不能看手机。', '驾驶',
          [['航行', '航行 = (tàu thuyền) đi, không có tân ngữ: 航行汽车 không nói được.'], ['轮流', '轮流 = thay phiên, phải có động từ phía sau (轮流开车).']], '<b>驾驶 + 汽车 / 帆船 / 飞机</b> = lái (văn viết của 开).'),
        hr('驾驶'),
        od(['驾驶'], '他第一次驾驶帆船出海。', 'Lần đầu tiên anh ấy lái thuyền buồm ra khơi.', ['他', '第一次', '驾驶帆船', '出海'])
      ],
      '轮流': [
        cz('轮流', 'c3_caring', '我和哥哥___照顾生病的奶奶。', 'Mình và anh trai thay phiên nhau chăm sóc bà nội bị ốm.', '我和哥哥轮流照顾生病的奶奶。', '轮流',
          [['驾驶', '驾驶 = lái (tàu, xe); không đi với 照顾.'], ['辞职', '辞职 = thôi việc, không đứng trước động từ khác.']], '<b>轮流 + động từ</b> = thay phiên nhau làm: 轮流驾船, 轮流休息, 轮流照看.'),
        hr('轮流'),
        od(['轮流'], '晚上我们轮流开车。', 'Buổi tối tụi mình thay phiên nhau lái xe.', ['晚上', '我们', '轮流', '开车'])
      ],
      /* ---- tập 5 ---- */
      '钓': [
        cz('钓', 'c3_grandpaFish', '爷爷每个周末都去河边___鱼。', 'Cuối tuần nào ông nội cũng ra bờ sông câu cá.', '爷爷每个周末都去河边钓鱼。', '钓',
          [['撞', '撞 = đâm vào; 撞鱼 không có nghĩa.'], ['驾驶', '驾驶 = lái (xe, thuyền), không đi với 鱼.']], '<b>钓鱼</b> = câu cá.'),
        hr('钓'),
        od(['钓'], '他钓了一下午的鱼。', 'Anh ấy câu cá cả buổi chiều.', ['他', '钓了', '一下午的', '鱼'])
      ],
      '顿': [
        cz('顿', 'c3_meal', '今天晚上我请你吃一___饭。', 'Tối nay mình mời bạn một bữa cơm.', '今天晚上我请你吃一顿饭。', '顿',
          [['艘', '艘 chỉ dùng cho tàu thuyền.'], ['张', '张 dùng cho vật mỏng, phẳng (一张纸).']], '<b>一顿饭</b> = một bữa cơm; <b>一顿海鲜</b> (trong bài).'),
        hr('顿'),
        { t: 'type', w: ['顿'], zh: '一顿饭', vi: 'một bữa cơm', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' }
      ],
      '海鲜': [
        cz('海鲜', 'c3_seafood', '住在海边的人常常吃___。', 'Người sống ở ven biển thường ăn hải sản.', '住在海边的人常常吃海鲜。', '海鲜',
          [['帆船', '帆船 là thuyền buồm, không ăn được.'], ['彩虹', '彩虹 là cầu vồng.']], '<b>吃海鲜</b> = ăn hải sản.'),
        hr('海鲜'),
        od(['海鲜'], '这家饭馆的海鲜很新鲜。', 'Hải sản của quán này rất tươi.', ['这家饭馆的', '海鲜', '很', '新鲜'])
      ],
      /* ---- tập 6 ---- */
      '傍晚': [
        cz('傍晚', 'c3_dusk', '___的时候，太阳快要下山了。', 'Lúc chạng vạng, mặt trời sắp lặn.', '傍晚的时候，太阳快要下山了。', '傍晚',
          [['早上', '早上 là buổi sáng; mặt trời sắp lặn (下山) là lúc chạng vạng.'], ['中午', '中午 là buổi trưa, mặt trời đang ở trên cao.']], '<b>傍晚</b> = lúc mặt trời sắp lặn, trước 晚上.'),
        hr('傍晚'),
        od(['傍晚'], '每天傍晚我都去河边跑步。', 'Chiều tối nào mình cũng ra bờ sông chạy bộ.', ['每天傍晚', '我都', '去河边', '跑步'])
      ],
      '舒适': [
        cz('舒适', 'c3_comfyRoom', '这家饭店的房间很___，就是有点儿贵。', 'Phòng ở khách sạn này rất thoải mái, chỉ hơi đắt.', '这家饭店的房间很舒适，就是有点儿贵。', '舒适',
          [['干活儿', '干活儿 = làm việc, không tả căn phòng.'], ['傍晚', '傍晚 = chiều tà, không tả căn phòng.']], '<b>舒适的房间 / 环境 / 生活</b> = căn phòng, môi trường, cuộc sống dễ chịu.'),
        hr('舒适'),
        od(['舒适'], '我们都需要一个舒适的生活环境。', 'Ai cũng cần một môi trường sống dễ chịu.', ['我们都需要', '一个', '舒适的', '生活环境'])
      ],
      '干活儿': [
        cz('干活儿', 'c3_chores', '他每天在船上___，很辛苦。', 'Ngày nào anh ấy cũng làm việc trên thuyền, rất vất vả.', '他每天在船上干活儿，很辛苦。', '干活儿',
          [['傍晚', '傍晚 = chiều tà, không phải việc người ta làm.'], ['舒适', '舒适 = dễ chịu, trái với 很辛苦 (rất vất vả).']], '<b>干活儿</b> = làm việc (khẩu ngữ); 干完活儿 = làm xong việc.'),
        hr('干活儿'),
        od(['干活儿'], '干完活儿，我们一起去吃饭吧。', 'Làm xong việc, tụi mình cùng đi ăn nhé.', ['干完活儿', '我们', '一起', '去吃饭吧'])
      ],
      /* ---- tập 7 ---- */
      '盼望': [
        cz('盼望', 'c3_waitNews', '孩子们天天___着过年。', 'Bọn trẻ ngày ngày mong đến Tết.', '孩子们天天盼望着过年。', '盼望',
          [['舒适', '舒适 là tính từ “dễ chịu”, không có tân ngữ 过年.'], ['干活儿', '干活儿 = làm việc; 干活儿着过年 không nói được.']], '<b>盼望 + （好）消息 / 过年 / 成功</b>.'),
        hr('盼望'),
        od(['盼望'], '我们都在盼望你的好消息。', 'Chúng tôi đều đang mong tin vui của bạn.', ['我们', '都在盼望', '你的', '好消息'])
      ],
      '陆地': [
        cz('陆地', 'c3_land', '在海上航行了一个月，我们终于看到了___。', 'Đi trên biển một tháng, cuối cùng chúng tôi cũng nhìn thấy đất liền.', '在海上航行了一个月，我们终于看到了陆地。', '陆地',
          [['傍晚', '傍晚 là lúc chiều tối, không phải một nơi để “nhìn thấy”.'], ['舒适', '舒适 là tính từ “dễ chịu”, không làm tân ngữ của 看到.']], '<b>陆地</b> = đất liền; <b>陆地上</b> = trên đất liền.'),
        hr('陆地'),
        od(['陆地'], '我还是喜欢住在陆地上。', 'Mình vẫn thích sống trên đất liền hơn.', ['我', '还是喜欢', '住在', '陆地上'])
      ],
      '各自': [
        cz('各自', 'c3_eachOwn', '下课以后，同学们___回家了。', 'Tan học, các bạn ai về nhà nấy.', '下课以后，同学们各自回家了。', '各自',
          [['陆地', '陆地 là danh từ “đất liền”.'], ['盼望', '盼望 = mong; câu đã kể việc về nhà xong (了), không còn “mong”.']], '<b>各自 + động từ</b> = ai nấy làm: 各自回家. <b>各自的 + danh từ</b>: 各自的房间 (trong bài).'),
        hr('各自'),
        od(['各自'], '他们俩各自说了自己的意见。', 'Hai người họ mỗi người nói ý kiến của mình.', ['他们俩', '各自', '说了', '自己的意见'])
      ],
      /* ---- tập 8 ---- */
      '勿': [
        cz('勿', 'c3_library', '图书馆里请___大声说话。', 'Trong thư viện xin chớ nói to.', '图书馆里请勿大声说话。', '勿',
          [['没', '没 dùng cho việc chưa xảy ra (没去); lời xin, lời cấm dùng 勿 (= 不要).'], ['不', 'Lời yêu cầu không nói 请不…; phải là 请勿 / 请不要.']], '<b>请勿 + động từ</b> = xin đừng… (văn viết, biển báo).'),
        hr('勿'),
        od(['勿'], '这是别人的东西，请勿拿走。', 'Đây là đồ của người khác, xin đừng lấy đi.', ['这是', '别人的东西', '请勿', '拿走'])
      ],
      '时刻': [
        cz('时刻', 'c3_clockMoment', '在最后___，他踢进了一个球。', 'Vào phút cuối, anh ấy sút vào một quả bóng.', '在最后时刻，他踢进了一个球。', '时刻',
          [['傍晚', '傍晚 là chiều tà trong ngày; “phút cuối” của trận đấu là 最后时刻.'], ['陆地', '陆地 là đất liền.']], '<b>最后时刻</b> = phút cuối. 时刻 còn là phó từ: 时刻提醒自己 (luôn tự nhắc mình).'),
        hr('时刻'),
        od(['时刻'], '我永远不会忘记那个时刻。', 'Mình sẽ không bao giờ quên khoảnh khắc ấy.', ['我', '永远不会', '忘记', '那个时刻'])
      ],
      '着火': [
        cz('着火', 'c3_fire', '厨房___了，快打电话！', 'Bếp cháy rồi, gọi điện mau!', '厨房着火了，快打电话！', '着火',
          [['勿', '勿 = chớ, đừng; không làm vị ngữ.'], ['时刻', '时刻 là danh từ “thời khắc”.']], '<b>着火了</b> = cháy rồi (着 đọc zháo).'),
        hr('着火'),
        od(['着火'], '那天晚上，他家旁边的房子着火了。', 'Tối hôm đó, ngôi nhà bên cạnh nhà anh ấy bốc cháy.', ['那天晚上', '他家旁边的', '房子', '着火了'])
      ],
      '漏': [
        cz('漏', 'c3_leak', '下雨了，房子又___水了。', 'Trời mưa, nhà lại dột rồi.', '下雨了，房子又漏水了。', '漏',
          [['着火', '着火 = bốc cháy; không đi với 水.'], ['钓', '钓 = câu (cá).']], '<b>漏水</b> = rò nước, dột. 漏 + 光 / 掉 / 出来.'),
        hr('漏'),
        od(['漏'], '杯子漏了，水都漏光了。', 'Cái cốc bị thủng, nước chảy hết rồi.', ['杯子漏了', '水', '都漏', '光了'])
      ],
      /* ---- tập 9 ---- */
      '雷': [
        cz('雷', 'c3_thunder', '外面打___了，快回家吧！', 'Ngoài trời có sấm rồi, mau về nhà thôi!', '外面打雷了，快回家吧！', '雷',
          [['闪电', '闪电 không đi với 打; “có sấm” là 打雷 (có chớp thì nói 有闪电).'], ['击', '击 = đánh; 打击 là nghĩa khác (đả kích), không nói thời tiết.']], '<b>打雷</b> = có sấm, sấm nổ.'),
        hr('雷'),
        od(['雷'], '孩子怕打雷，晚上睡不着。', 'Đứa bé sợ sấm, tối ngủ không được.', ['孩子', '怕打雷', '晚上', '睡不着'])
      ],
      '随时': [
        cz('随时', 'c3_anytime', '有问题你___给我打电话。', 'Có gì bạn cứ gọi cho mình bất cứ lúc nào.', '有问题你随时给我打电话。', '随时',
          [['时刻', '时刻 làm phó từ là “luôn luôn” (时刻提醒自己); “cứ gọi lúc nào cũng được” là 随时.'], ['各自', '各自 = ai nấy; câu chỉ có một người (你).']], '<b>随时</b> = bất cứ lúc nào: 随时给我打电话.'),
        hr('随时'),
        od(['随时'], '天要下雨了，随时都可能打雷。', 'Trời sắp mưa rồi, lúc nào cũng có thể có sấm.', ['天要下雨了', '随时', '都可能', '打雷'])
      ],
      '闪电': [
        cz('闪电', 'c3_lightning', '天黑了，天上突然出现了一道___。', 'Trời tối rồi, trên trời bỗng loé lên một tia chớp.', '天黑了，天上突然出现了一道闪电。', '闪电',
          [['雷', '雷 là tiếng sấm, nghe chứ không “hiện ra một vệt”; 一道 đi với 闪电.'], ['彩虹', '彩虹 (cầu vồng) hiện ra khi có nắng sau mưa, không phải lúc trời tối.']], '<b>一道闪电</b> = một tia chớp.'),
        hr('闪电'),
        od(['闪电'], '看到闪电以后，孩子马上跑回了家。', 'Thấy chớp xong, đứa bé chạy ngay về nhà.', ['看到闪电以后', '孩子', '马上', '跑回了家'])
      ],
      '击': [
        cz('击', 'c3_strike', '那棵大树被闪电___到了。', 'Cái cây lớn đó bị tia chớp đánh trúng.', '那棵大树被闪电击到了。', '击',
          [['撞', '撞 là va, đâm (người, xe); tia chớp thì đánh: 被闪电击到.'], ['漏', '漏 = rò, rỉ.']], '<b>被闪电击到</b> = bị tia chớp đánh trúng.'),
        hr('击'),
        od(['击'], '那棵大树被闪电击到了。', 'Cái cây lớn đó bị tia chớp đánh trúng.', ['那棵大树', '被闪电', '击到', '了'])
      ],
      '拥抱': [
        cz('拥抱', 'c3_hug', '见到多年不见的老朋友，他们紧紧地___在一起。', 'Gặp lại bạn cũ nhiều năm không gặp, họ ôm chặt lấy nhau.', '见到多年不见的老朋友，他们紧紧地拥抱在一起。', '拥抱',
          [['撞', '撞在一起 = đâm vào nhau (tai nạn); gặp bạn cũ thì ôm nhau: 拥抱在一起.'], ['击', '击 = đánh; 紧紧地击 không có nghĩa.']], '<b>紧紧（地）/ 热情（地）拥抱</b>; <b>拥抱在一起</b>.'),
        hr('拥抱'),
        od(['拥抱'], '毕业那天，同学们热情地拥抱在一起。', 'Ngày tốt nghiệp, cả lớp ôm nhau thắm thiết.', ['毕业那天', '同学们', '热情地', '拥抱在一起'])
      ],
      /* ---- tập 10 ---- */
      '海里': [
        hr('海里'),
        cz('海里', 'c3_nauticalMile', '我们的船已经航行了一千多___。', 'Thuyền của chúng tôi đã đi hơn một nghìn hải lý.', '我们的船已经航行了一千多海里。', '海里',
          [['艘', '艘 là lượng từ cho thuyền (一艘船), không đo quãng đường.'], ['顿', '顿 là lượng từ cho bữa ăn.']], '<b>số + 海里</b> = bao nhiêu hải lý. Bẫy: 在海里 = trong biển.')
      ],
      '人生': [
        cz('人生', 'c3_lifePath', '每个人的___都会有很多选择。', 'Đời người ai cũng có nhiều lựa chọn.', '每个人的人生都会有很多选择。', '人生',
          [['时刻', '时刻 = một lúc, một khoảnh khắc; cả đời người mới “có nhiều lựa chọn”.'], ['陆地', '陆地 là đất liền.']], '<b>人生</b> = đời người: 人生道路, 人生有选择.'),
        hr('人生'),
        od(['人生'], '这是我人生中最重要的一天。', 'Đây là ngày quan trọng nhất trong đời mình.', ['这是', '我人生中', '最重要的', '一天'])
      ],
      '台阶': [
        cz('台阶', 'c3_steps', '奶奶慢慢地走上___。', 'Bà nội chầm chậm bước lên bậc thềm.', '奶奶慢慢地走上台阶。', '台阶',
          [['海鲜', '海鲜 là hải sản, không bước lên được.'], ['闪电', '闪电 là tia chớp.']], '<b>走上台阶</b> = bước lên bậc thềm.'),
        hr('台阶'),
        od(['台阶'], '学校门口有很多台阶。', 'Trước cổng trường có rất nhiều bậc thềm.', ['学校门口', '有', '很多', '台阶'])
      ],
      '未来': [
        cz('未来', 'c3_future', '我们都希望有一个美好的___。', 'Ai cũng mong có một tương lai tốt đẹp.', '我们都希望有一个美好的未来。', '未来',
          [['台阶', '台阶 là bậc thềm; điều người ta “mong có” là tương lai.'], ['顿', '顿 là lượng từ cho bữa ăn, không đứng sau 美好的.']], '<b>美好的未来</b> = tương lai tốt đẹp.'),
        hr('未来'),
        od(['未来'], '你想过自己未来的生活吗？', 'Bạn đã từng nghĩ về cuộc sống tương lai của mình chưa?', ['你', '想过', '自己未来的', '生活吗'])
      ],
      /* ---- tập 11 ---- */
      '太太': [
        cz('太太', 'c3_wife', '这是我___，她也是老师。', 'Đây là vợ tôi, cô ấy cũng là giáo viên.', '这是我太太，她也是老师。', '太太',
          [['工人', '工人 = công nhân, là nghề, không phải người thân để giới thiệu “đây là … của tôi”.'], ['时代', '时代 = thời đại.']], '<b>我太太</b> = vợ tôi (lịch sự). Bài 1: 妻子 (văn viết), 老婆 (khẩu ngữ).'),
        hr('太太'),
        od(['太太'], '王太太每天早上都去公园散步。', 'Sáng nào bà Vương cũng đi dạo công viên.', ['王太太', '每天早上', '都去公园', '散步'])
      ],
      '时代': [
        cz('时代', 'c3_era', '___变了，人们的生活也变了。', 'Thời đại đã khác, cuộc sống của mọi người cũng khác.', '时代变了，人们的生活也变了。', '时代',
          [['台阶', '台阶 là bậc thềm.'], ['太太', '太太 là vợ; vợ thay đổi không làm cuộc sống của “mọi người” thay đổi.']], '<b>时代变了</b> = thời thế đã khác.'),
        hr('时代'),
        od(['时代'], '每个时代都有自己的问题。', 'Thời đại nào cũng có vấn đề riêng của nó.', ['每个时代', '都有', '自己的', '问题'])
      ]

    };
  };
  /* hr() copies the listening item from CH3.LEARN, so build once learn.js is there (any load order) */
  CH3.QB = CH3.QB || {};
  if (CH3.LEARN) build(); else CH3.buildQB = build;
  if (CH3.resolveRefs) CH3.resolveRefs();
})();

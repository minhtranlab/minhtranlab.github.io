/* ===== Bài 3: taught words (same shape as Bài 1 WORDS).  story: 1 = a * word of the book (beyond the HSK5 syllabus), recognition only ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  CH3.WORDS = [
    /* ---- tập 1 ---- */
    { id: '工人', ep: '3-1', vi: 'công nhân', hv: 'công nhân', facts: [
      'Người làm việc chân tay ở nhà máy, công trường, đường sắt…: <b>铁路工人</b> (công nhân đường sắt, như trong bài), 当工人 (làm công nhân).',
      'Hán–Việt “công nhân” giống hệt tiếng Việt. Khác <b>打工</b> (Bài 2: làm thuê): 打工 là việc làm, còn 工人 là người.'],
      ex: ['我爸爸以前是铁路工人。', '这些工人每天工作八个小时。'] },
    { id: '稳定', ep: '3-1', vi: 'ổn định', hv: 'ổn định', facts: [
      'Tính từ, hay đi với: <b>稳定的 + 工作 / 生活 / 关系 / 收入</b> (công việc, cuộc sống, quan hệ, thu nhập ổn định).',
      'Làm vị ngữ: <b>工作稳定</b> (trong bài). Trái nghĩa: 不稳定 (thất thường, lên xuống).'],
      ex: ['他想找一份稳定的工作。', '她的收入很稳定，每个月都差不多。'] },
    { id: '待遇', ep: '3-1', vi: 'sự đãi ngộ (lương, thưởng, chế độ)', hv: 'đãi ngộ', facts: [
      'Danh từ: tất cả những gì người đi làm được hưởng: lương, thưởng, ngày nghỉ… Hay nói: <b>待遇不错 / 待遇很好 / 待遇太低</b>.',
      'Trong bài: <b>工作稳定、待遇不错</b> = việc ổn định, đãi ngộ khá tốt. Hán–Việt “đãi ngộ”, nghĩa như tiếng Việt.'],
      ex: ['这家公司待遇很好，很多人想来工作。', '他觉得现在的工作待遇太低了。'] },
    { id: '发愁', ep: '3-1', vi: 'lo âu, buồn rầu', hv: 'phát sầu', facts: [
      '<b>为 + việc + 发愁</b> = lo nghĩ vì chuyện gì: <b>为生活发愁</b> (trong bài), 为工作发愁, 为考试发愁. Không nói “发愁考试”.',
      'Là từ ly hợp (động + tân), nên tách ra được: <b>发什么愁？</b> (lo gì mà lo?). Trong bài: <b>从不用为生活发愁</b> = chưa bao giờ phải lo chuyện cơm áo.'],
      ex: ['别为这件小事发愁了。', '他每天都为找工作发愁。'] },
    /* ---- tập 2 ---- */
    { id: '平静', ep: '3-2', vi: 'yên ả, yên ổn, bình tĩnh', hv: 'bình tĩnh', facts: [
      'Tính từ: <b>平静的 + 海面 / 心情 / 生活</b> (mặt biển, tâm trạng, cuộc sống yên ả).',
      'Trong bài: anh Phong <b>不想一辈子过这样平静的生活</b> = không muốn cả đời sống yên ả như thế. <b>心情平静下来</b> = lòng bình tĩnh lại.',
      'Hán–Việt “bình tĩnh”, nhưng tiếng Trung dùng cả cho cảnh vật: 海面很平静 (mặt biển phẳng lặng).'],
      ex: ['今天没有风，海面很平静。', '听了他的话，我的心情慢慢平静了。'] },
    { id: '帆船', ep: '3-2', story: 1, vi: 'thuyền buồm', hv: 'phàm thuyền', facts: [
      '<b>帆</b> = cánh buồm, <b>船</b> = thuyền. Một chiếc thuyền buồm: <b>一艘帆船</b>.',
      'Từ ngoài đề thi HSK5 (sách đánh dấu *): chỉ cần nhìn ra và nghe hiểu.'],
      ex: ['他从小就喜欢帆船。', '海上有一艘白色的帆船。'] },
    { id: '撞', ep: '3-2', vi: 'đụng, đâm vào', hv: 'chàng', facts: [
      'Va mạnh vào: <b>撞到 + vật</b> (撞到了一棵树). Hay có bổ ngữ: <b>撞倒 / 撞伤 / 撞断 / 撞开</b> (đâm ngã, đâm bị thương, đâm gãy, đâm bật ra).',
      'Trong bài: <b>撞开“世界之门”</b> = phá tung “cánh cửa ra thế giới” (nghĩa bóng: mở ra một cuộc đời mới).'],
      ex: ['他走路看手机，撞到了一棵树。', '小心，别撞倒那个孩子！'] },
    { id: '艘', ep: '3-2', story: 1, vi: 'chiếc (lượng từ cho tàu, thuyền)', hv: 'sưu', facts: [
      'Chỉ dùng cho tàu thuyền: <b>一艘船</b>, 两艘帆船. Xe là <b>辆</b>, máy bay là 架.',
      'Từ ngoài đề thi HSK5 (*): nhìn ra là đủ.'],
      ex: ['海上有三艘船。', '他买了一艘小船。'] },
    { id: '航行', ep: '3-2', story: 1, vi: 'đi (tàu, thuyền); giong buồm', hv: 'hàng hành', facts: [
      'Tàu thuyền chạy trên biển, trên sông: <b>航行在海上</b> (trong bài) = <b>在海上航行</b>. Máy bay cũng 航行 trên trời.',
      'Từ ngoài đề thi HSK5 (*).'],
      ex: ['这艘船在海上航行了十天。', '我们的船正在大海上航行。'] },
    /* ---- tập 3 ---- */
    { id: '积蓄', ep: '3-3', story: 1, vi: 'tiền để dành; dành dụm', hv: 'tích súc', facts: [
      'Danh từ: <b>没有积蓄</b> (không có tiền để dành, như trong bài), 所有的积蓄 (toàn bộ tiền để dành). Cũng làm động từ: 积蓄了一些钱 (dành dụm được ít tiền).',
      'Từ ngoài đề thi HSK5 (*).'],
      ex: ['他把所有的积蓄都用来买房子了。', '工作十年，她有了一些积蓄。'] },
    { id: '二手', ep: '3-3', story: 1, vi: 'đã qua sử dụng, cũ', hv: 'nhị thủ', facts: [
      'Đứng trước danh từ: <b>二手车 / 二手船 / 二手书 / 二手房</b>. Trong bài: <b>买下了一艘二手船</b> = mua một chiếc thuyền cũ.',
      'Từ ngoài đề thi HSK5 (*).'],
      ex: ['我买了一辆二手车，很便宜。', '这些都是二手书，可是很新。'] },
    { id: '彩虹', ep: '3-3', vi: 'cầu vồng', hv: 'thái hồng', facts: [
      'Lượng từ: <b>一道彩虹</b>. Hay đi với 雨后 (sau mưa): 雨后彩虹.',
      'Trong bài, 彩虹 là tên chiếc thuyền: <b>“彩虹号”</b> = chiếc “Cầu Vồng” (号 = số, tên tàu).'],
      ex: ['雨停了，天上出现了一道彩虹。', '你看，那边有彩虹！'] },
    { id: '包括', ep: '3-3', vi: 'bao gồm, kể cả', hv: 'bao quát', facts: [
      'Kể các phần: <b>包括 + các phần</b>: 这个价格包括早饭 (giá này gồm bữa sáng); 学汉语包括听、说、读、写.',
      'Nhấn mạnh một phần: <b>包括 X，所有人都…</b> = kể cả X, ai cũng…: <b>包括翟峰的父母，所有人都觉得…</b> (trong bài).'],
      ex: ['我们班所有人，包括老师，都去了。', '这个价格包括早饭。'] },
    { id: '疯', ep: '3-3', vi: 'phát điên, hoá điên', hv: 'phong', facts: [
      '<b>疯了</b> = điên rồi. Hay dùng khi thấy ai làm chuyện quá liều: <b>你疯了吗？</b>',
      'Cũng để nói quá: 高兴得快疯了 (vui phát điên). Trong bài: mọi người cho rằng anh Phong <b>“疯了”</b> (ngoặc kép = lời của người khác).'],
      ex: ['你疯了吗？这么冷还去游泳！', '大家都觉得他疯了。'] },
    /* ---- tập 4 ---- */
    { id: '辞职', ep: '3-4', vi: 'thôi việc, từ chức', hv: 'từ chức', facts: [
      'Động + tân (ly hợp): tách được: <b>辞了职</b> (trong bài), 辞过职. Không đặt tân ngữ phía sau: nói <b>他辞职了</b>, không nói “辞职工作”.',
      'Hán–Việt “từ chức”, nhưng tiếng Trung dùng cho mọi người thôi việc, không chỉ người có chức vụ.'],
      ex: ['她辞了职，在家照顾孩子。', '他上个月辞职了，想自己开一家咖啡店。'] },
    { id: '驾驶', ep: '3-4', vi: 'điều khiển, lái (tàu, xe, máy bay)', hv: 'giá sử', facts: [
      'Văn viết hơn <b>开</b> (khẩu ngữ): <b>驾驶汽车 / 帆船 / 飞机</b>. Trong bài: <b>驾驶帆船出海</b> = lái thuyền buồm ra khơi.',
      'Trong bài còn có <b>驾船</b> = 驾 + 船, nói gọn: lái thuyền.'],
      ex: ['他第一次驾驶飞机的时候，非常紧张。', '驾驶汽车的时候，不能看手机。'] },
    { id: '轮流', ep: '3-4', vi: 'luân phiên, thay phiên', hv: 'luân lưu', facts: [
      '<b>轮流 + động từ</b>: <b>轮流驾船</b> (trong bài), 轮流休息, 轮流照看 (thay phiên trông nom).',
      'Cùng chữ 轮 của Bài 1 (<b>轮到</b> = đến lượt): mỗi người lần lượt tới lượt mình.'],
      ex: ['我和哥哥轮流照顾生病的奶奶。', '晚上我们轮流开车，一个人开，一个人睡觉。'] },
    /* ---- tập 5 ---- */
    { id: '钓', ep: '3-5', vi: 'câu (cá)', hv: 'điếu', facts: [
      '<b>钓鱼</b> = câu cá. <b>钓到了一条大鱼</b> = câu được một con cá to; <b>没钓到</b> = không câu được.',
      'Chữ có bộ 钅 (kim loại): cái lưỡi câu bằng sắt.'],
      ex: ['爷爷每个周末都去河边钓鱼。', '他钓了一下午，一条鱼也没钓到。'] },
    { id: '顿', ep: '3-5', vi: 'bữa (lượng từ)', hv: 'đốn', facts: [
      'Lượng từ của bữa ăn: <b>一顿饭</b>, <b>一顿海鲜</b> (trong bài), 一天三顿饭.',
      'Còn dùng cho một trận mắng: 被妈妈说了一顿 (bị mẹ mắng một trận).'],
      ex: ['今天晚上我请你吃一顿饭。', '他一天只吃两顿饭。'] },
    { id: '海鲜', ep: '3-5', vi: 'hải sản', hv: 'hải tiên', facts: [
      'Cá và các món từ biển: <b>吃海鲜</b>, 海鲜饭馆. Trong bài: <b>做一顿美味的海鲜</b> = nấu một bữa hải sản ngon.',
      '<b>鲜</b> = tươi (như 新鲜): hải sản phải tươi mới ngon.'],
      ex: ['住在海边的人常常吃海鲜。', '这家饭馆的海鲜很新鲜。'] },
    /* ---- tập 6 ---- */
    { id: '傍晚', ep: '3-6', vi: 'lúc chạng vạng, chiều tà', hv: 'bàng vãn', facts: [
      'Khoảng lúc mặt trời sắp lặn, trước buổi tối (<b>晚上</b>).',
      'Trong bài: <b>傍晚是一家人最舒适的时候</b> = chiều tà là lúc cả nhà thoải mái nhất.'],
      ex: ['傍晚的时候，很多人在公园里散步。', '每天傍晚，我都去河边跑步。'] },
    { id: '舒适', ep: '3-6', vi: 'dễ chịu, thoải mái', hv: 'thư thích', facts: [
      'Văn viết, hay nói môi trường, đồ vật: <b>舒适的房间 / 环境 / 生活</b>. Trong bài: <b>最舒适的时候</b>.',
      'So với <b>舒服</b> (khẩu ngữ): 舒服 nói cảm giác trong người, trong lòng: 我今天不舒服, 心里不舒服; 舒服 lặp được (舒舒服服, 舒服舒服), <b>舒适 thì không</b>.'],
      ex: ['这家饭店的房间很舒适。', '我们都需要一个舒适的生活环境。'] },
    { id: '干活儿', ep: '3-6', vi: 'làm việc', hv: 'cán hoạt nhi', facts: [
      'Khẩu ngữ, thường là việc tay chân hằng ngày: <b>在地里干活儿</b>, <b>干完活儿</b> (làm xong việc, trong bài).',
      'Ly hợp: 干 + 完 / 了 + 活儿. <b>活儿</b> đọc huór (r-hoá).'],
      ex: ['干完活儿，我们一起去吃饭吧。', '他每天在船上干活儿，很辛苦。'] },
    /* ---- tập 7 ---- */
    { id: '盼望', ep: '3-7', vi: 'trông mong, mong mỏi', hv: 'phán vọng', facts: [
      '<b>盼望 + （好）消息 / 过年 / 成功</b> = mong tin (vui), mong Tết, mong thành công. Hay có 着: 盼望着.',
      'Tha thiết hơn <b>希望</b>. Trong bài: <b>是翟峰盼望已久的</b> = điều anh Phong mong mỏi đã lâu.'],
      ex: ['孩子们天天盼望着过年。', '我们都在盼望你的好消息。'] },
    { id: '陆地', ep: '3-7', vi: 'đất liền', hv: 'lục địa', facts: [
      'Đối lập với 海上 (trên biển): <b>陆地上</b> = trên đất liền (trong bài).',
      'Hán–Việt “lục địa”, nhưng tiếng Trung dùng cho đất liền nói chung, không nhất thiết là cả một châu lục.'],
      ex: ['在海上航行了一个月，我们终于看到了陆地。', '我还是喜欢住在陆地上。'] },
    { id: '各自', ep: '3-7', vi: 'từng người, ai nấy', hv: 'các tự', facts: [
      'Đại từ, đi cùng những người được nói tới, làm chủ ngữ hoặc định ngữ: <b>他们在各自的房间</b> (trong bài) = ai ở phòng nấy; 同学们各自回家.',
      '各 = mỗi, 自 = tự mình: “ai lo việc người nấy”.'],
      ex: ['下课以后，同学们各自回家了。', '他们俩各自说了自己的意见。'] },
    /* ---- tập 8 ---- */
    { id: '勿', ep: '3-8', vi: 'chớ, đừng', hv: 'vật', facts: [
      'Phó từ, văn viết, bằng <b>不要</b>: hay gặp trên biển báo: <b>请勿 + động từ</b> = xin đừng…: 请勿大声说话.',
      'Trong bài: câu nói xưa <b>可上山，勿下海</b> = lên núi thì được, chớ xuống biển.'],
      ex: ['图书馆里请勿大声说话。', '这是别人的东西，请勿拿走。'] },
    { id: '时刻', ep: '3-8', vi: 'thời khắc, lúc; luôn luôn', hv: 'thời khắc', facts: [
      'Danh từ: một lúc, một khoảnh khắc: <b>最后时刻</b> (phút cuối), <b>美好的时刻</b> (trong bài).',
      'Phó từ: luôn luôn, lúc nào cũng: <b>时刻提醒自己</b>; lặp thành <b>时时刻刻</b>.'],
      ex: ['在最后时刻，他踢进了一个球。', '我永远不会忘记那个时刻。'] },
    { id: '着火', ep: '3-8', vi: 'bốc cháy', hv: 'trước hoả', facts: [
      '着 đọc <b>zháo</b>: <b>着火了！</b> = cháy rồi! Trong bài: <b>船身着火</b> = thân thuyền bốc cháy.',
      'Ly hợp: 着了火. Đừng đọc thành zhe như trong 看着.'],
      ex: ['厨房着火了，快打电话！', '那天晚上，他家旁边的房子着火了。'] },
    { id: '漏', ep: '3-8', vi: 'rò, rỉ, dột; sót', hv: 'lậu', facts: [
      '<b>漏水</b> (rò nước, như trong bài), 房子漏了 (nhà dột). Hay có bổ ngữ: <b>漏光 / 漏掉 / 漏出来</b> (rò hết, sót mất, rỉ ra).',
      'Nghĩa khác: sót, bỏ sót: 漏了一个字 (sót một chữ).'],
      ex: ['下雨了，房子又漏水了。', '杯子漏了，水都漏光了。'] },
    /* ---- tập 9 ---- */
    { id: '雷', ep: '3-9', vi: 'sấm', hv: 'lôi', facts: [
      '<b>打雷</b> = có sấm, sấm nổ. Trong bài: <b>雷电交加</b> = sấm chớp đùng đùng.',
      'Chữ có 雨 (mưa) ở trên: sấm đi cùng mưa giông.'],
      ex: ['外面打雷了，快回家吧！', '孩子怕打雷，晚上睡不着。'] },
    { id: '随时', ep: '3-9', vi: 'bất cứ lúc nào', hv: 'tuỳ thời', facts: [
      'Phó từ, đứng trước động từ: <b>随时给我打电话</b> (cứ gọi lúc nào cũng được). Trong bài: <b>随时有可能被…击到</b> = có thể bị đánh trúng bất cứ lúc nào.',
      'Khác <b>时刻</b> (luôn luôn): 随时 = hễ cần, hễ xảy ra là lúc nào cũng được.'],
      ex: ['有问题你随时给我打电话。', '天要下雨了，随时都可能打雷。'] },
    { id: '闪电', ep: '3-9', vi: 'chớp, tia chớp', hv: 'thiểm điện', facts: [
      'Lượng từ: <b>一道闪电</b> (một tia chớp). Trong bài: <b>下一道闪电</b> = tia chớp kế tiếp.',
      '闪 = loé lên, 电 = điện: tia điện loé sáng.'],
      ex: ['天上突然出现了一道闪电。', '看到闪电以后，孩子马上跑回了家。'] },
    { id: '击', ep: '3-9', vi: 'đánh', hv: 'kích', facts: [
      'Văn viết: đánh, đập: <b>被闪电击到</b> (bị tia chớp đánh trúng, trong bài).',
      'Hán–Việt “kích” như “công kích”, “tấn công”.'],
      ex: ['那棵大树被闪电击到了。', '雷电交加的时候，别站在大树下，小心被闪电击到。'] },
    { id: '拥抱', ep: '3-9', vi: 'ôm, ôm chặt', hv: 'ủng bão', facts: [
      '<b>紧紧（地）拥抱</b>, <b>热情（地）拥抱</b>; <b>拥抱在一起</b> = ôm lấy nhau (trong bài).',
      'Cũng là danh từ: 给他一个拥抱 (ôm anh ấy một cái).'],
      ex: ['见到妈妈，孩子跑过去紧紧地拥抱她。', '毕业那天，同学们热情地拥抱在一起。'] },
    /* ---- tập 10 ---- */
    { id: '海里', ep: '3-10', story: 1, vi: 'hải lý (đơn vị đo đường biển)', hv: 'hải lý', facts: [
      'Đơn vị đo đường biển, khoảng 1,85 km. Trong bài: <b>航行了4000多海里</b> = đi hơn 4000 hải lý.',
      'Bẫy: <b>在海里</b> (sau động từ chỉ nơi chốn) lại là “trong biển”: 在海里游泳. Đứng sau con số thì là hải lý. Từ ngoài đề thi HSK5 (*).'],
      ex: ['这艘船一天能航行两百海里。', '我们已经航行了一千多海里。'] },
    { id: '人生', ep: '3-10', vi: 'đời người, cuộc đời', hv: 'nhân sinh', facts: [
      '<b>人生道路</b> (đường đời, trong bài), 人生的选择. Tên bài: <b>人生有选择，一切可改变</b> = đời người có lựa chọn, mọi thứ có thể đổi thay.',
      'Hán–Việt “nhân sinh” (nhân sinh quan). Khác <b>一辈子</b> (Bài 2: cả đời, khẩu ngữ, làm trạng ngữ: 一辈子住在农村).'],
      ex: ['人生有很多选择。', '这是我人生中最重要的一天。'] },
    { id: '台阶', ep: '3-10', vi: 'bậc thềm, bậc thang', hv: 'đài giai', facts: [
      '<b>走上台阶</b> (bước lên bậc). Trong bài, nghĩa bóng: <b>人生道路上一段长长的台阶</b> = một đoạn bậc thang dài trên đường đời: mỗi bước lại cao thêm.',
      '台 = bệ, chỗ cao; 阶 = bậc. Như “giai đoạn”: từng bậc một.'],
      ex: ['奶奶慢慢地走上台阶。', '学校门口有很多台阶。'] },
    { id: '未来', ep: '3-10', vi: 'tương lai', hv: 'vị lai', facts: [
      'Thời gian sắp tới, chưa đến: <b>美好的未来</b>, <b>未来的生活</b>. Trong bài: <b>通向他想要的未来</b> = dẫn tới tương lai anh mong muốn.',
      '未 = chưa, 来 = đến: “chưa đến”. Hán–Việt “vị lai”.'],
      ex: ['我们都希望有一个美好的未来。', '你想过自己未来的生活吗？'] },
    /* ---- tập 11 ---- */
    { id: '太太', ep: '3-11', vi: 'vợ; bà (gọi phụ nữ đã có chồng)', hv: 'thái thái', facts: [
      '<b>我太太</b> = vợ tôi (lịch sự). So với Bài 1: <b>妻子</b> (văn viết), <b>老婆</b> (khẩu ngữ, thân mật).',
      'Gọi người khác: <b>王太太</b> = bà Vương. Chữ thứ hai đọc nhẹ: tàitai.'],
      ex: ['这是我太太，她也是老师。', '王太太每天早上都去公园散步。'] },
    { id: '时代', ep: '3-11', vi: 'thời đại', hv: 'thời đại', facts: [
      '<b>这个时代</b> (thời đại này), 新时代, <b>时代变了</b> (thời thế đã khác).',
      'Trong bài: <b>看看这个时代、这个世界到底是什么样子</b> = xem thời đại này, thế giới này rốt cuộc ra sao.'],
      ex: ['时代变了，人们的生活也变了。', '每个时代都有自己的问题。'] }

  ];
  CH3.EP_META = {
    '3-1': { title: 'Tập 1 · Công việc ổn định', sub: 'Bạn gặp 4 từ: 工人, 稳定, 待遇, 发愁', book: 'Mở sách, đọc hai câu đầu của Bài 3. 工人, 稳定, 待遇, 发愁 đều ở đó.' },
    '3-2': { title: 'Tập 2 · Mê thuyền buồm', sub: 'Bạn gặp 5 từ: 平静, 帆船, 撞, 艘, 航行', book: 'Đọc hết đoạn thứ nhất, tới “想去的地方”.' },
    '3-3': { title: 'Tập 3 · Bán nhà mua thuyền', sub: 'Bạn gặp 5 từ: 积蓄, 二手, 彩虹, 包括, 疯 và bài học về 包括', book: 'Đọc đoạn thứ hai của bài.' },
    '3-4': { title: 'Tập 4 · Ra khơi', sub: 'Bạn gặp 3 từ: 辞职, 驾驶, 轮流', book: 'Đọc ba câu đầu của đoạn thứ ba, bắt đầu bằng ngày tháng.' },
    '3-5': { title: 'Tập 5 · Câu cá, ăn hải sản', sub: 'Bạn gặp 3 từ: 钓, 顿, 海鲜', book: 'Đọc hai câu cuối của đoạn thứ ba.' },
    '3-6': { title: 'Tập 6 · Chiều tà trên thuyền', sub: 'Bạn gặp 3 từ: 傍晚, 舒适, 干活儿 và 舒适 khác 舒服', book: 'Đọc hai câu đầu của đoạn thứ tư.' },
    '3-7': { title: 'Tập 7 · Ngày trước trên đất liền', sub: 'Bạn gặp 3 từ: 盼望, 陆地, 各自 và bài học về 各自', book: 'Đọc hai câu cuối của đoạn thứ tư.' },
    '3-8': { title: 'Tập 8 · Chớ xuống biển', sub: 'Bạn gặp 4 từ: 勿, 时刻, 着火, 漏 và bài học về 勿, 时刻', book: 'Đọc ba câu đầu của đoạn thứ năm.' },
    '3-9': { title: 'Tập 9 · Đêm sấm chớp', sub: 'Bạn gặp 5 từ: 雷, 随时, 闪电, 击, 拥抱', book: 'Đọc câu cuối, dài nhất của đoạn thứ năm.' },
    '3-10': { title: 'Tập 10 · Về tới nhà', sub: 'Bạn gặp 4 từ: 海里, 人生, 台阶, 未来', book: 'Đọc đoạn thứ sáu và câu đầu của đoạn cuối.' },
    '3-11': { title: 'Tập 11 · Đời người có lựa chọn', sub: 'Bạn gặp 2 từ: 太太, 时代, đoạn kết', book: 'Đọc phần còn lại của đoạn cuối, từ dấu ngoặc kép.' }
  };
})();

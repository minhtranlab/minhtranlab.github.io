/* HSK5 Bài 3: built by build.py from hsk5-src/ch3/ — do not edit */
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

/* ===== Bài 3: word cards (Vietnamese of the examples) + one listening item per word.
   hear: opts[0] is right; all 3 options share the keywords you can hear and differ in ONE detail;
   whyNot[i] says which detail rules option i out (whyNot[0] is empty). ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  CH3.LEARN = {
    /* ---- tập 1 ---- */
    '工人': { exv: ['Ba mình trước đây là công nhân đường sắt.', 'Những công nhân này mỗi ngày làm việc tám tiếng.'],
      hear: { s: '他爸爸是工人，妈妈是老师。', opts: ['Ba anh ấy là công nhân, mẹ là giáo viên.', 'Ba anh ấy là giáo viên, mẹ là công nhân.', 'Ba anh ấy là công nhân, mẹ cũng là công nhân.'],
        why: '<b>工人</b> = công nhân. <b>老师</b> = giáo viên. Nghe kỹ nghề nào đi với ai.',
        whyNot: ['', 'Đảo rồi: 爸爸是工人 (ba là công nhân), 妈妈是老师 (mẹ là giáo viên).', '妈妈是老师 = mẹ là giáo viên, không phải công nhân.'] } },
    '稳定': { exv: ['Anh ấy muốn tìm một công việc ổn định.', 'Thu nhập của cô ấy rất ổn định, tháng nào cũng xêm xêm nhau.'],
      hear: { s: '她的工作很稳定，收入也不错。', opts: ['Công việc của cô ấy rất ổn định, thu nhập cũng khá.', 'Công việc của cô ấy không ổn định, nhưng thu nhập khá.', 'Công việc của cô ấy rất ổn định, nhưng thu nhập thấp.'],
        why: '<b>工作很稳定</b> = công việc rất ổn định. <b>收入也不错</b> = thu nhập cũng khá.',
        whyNot: ['', '很稳定 = rất ổn định; câu không có 不.', '收入也不错 = thu nhập cũng khá, không phải thấp.'] } },
    '待遇': { exv: ['Công ty này đãi ngộ rất tốt, nhiều người muốn vào làm.', 'Anh ấy thấy đãi ngộ của công việc hiện tại thấp quá.'],
      hear: { s: '这份工作待遇不错，就是有点儿累。', opts: ['Công việc này đãi ngộ khá tốt, chỉ hơi mệt.', 'Công việc này đãi ngộ không tốt, lại còn hơi mệt.', 'Công việc này đãi ngộ khá tốt, lại không mệt chút nào.'],
        why: '<b>待遇不错</b> = đãi ngộ khá tốt. <b>就是有点儿累</b> = chỉ có điều hơi mệt.',
        whyNot: ['', '待遇不错 = đãi ngộ khá tốt (不错 là “khá”, không phải “không tốt”).', '有点儿累 = hơi mệt, không phải không mệt.'] } },
    '发愁': { exv: ['Đừng lo nghĩ vì chuyện nhỏ này nữa.', 'Ngày nào anh ấy cũng lo âu vì chuyện tìm việc.'],
      hear: { s: '他每天都为考试发愁。', opts: ['Ngày nào anh ấy cũng lo âu vì chuyện thi cử.', 'Ngày nào anh ấy cũng lo âu vì chuyện tìm việc.', 'Thỉnh thoảng anh ấy mới lo âu vì chuyện thi cử.'],
        why: '<b>为 + việc + 发愁</b> = lo âu vì chuyện gì. <b>每天都</b> = ngày nào cũng.',
        whyNot: ['', '为考试 = vì chuyện thi cử, không phải tìm việc.', '每天都 = ngày nào cũng, không phải thỉnh thoảng.'] } },
    /* ---- tập 2 ---- */
    '平静': { exv: ['Hôm nay không có gió, mặt biển rất yên ả.', 'Nghe anh ấy nói xong, lòng mình dần bình tĩnh lại.'],
      hear: { s: '今天没有风，海面很平静。', opts: ['Hôm nay không có gió, mặt biển rất yên ả.', 'Hôm nay gió to, nhưng mặt biển vẫn yên ả.', 'Hôm qua không có gió, mặt biển rất yên ả.'],
        why: '<b>没有风</b> = không có gió. <b>海面很平静</b> = mặt biển rất yên ả.',
        whyNot: ['', '没有风 = không có gió.', '今天 = hôm nay, không phải hôm qua.'] } },
    '帆船': { exv: ['Từ nhỏ anh ấy đã thích thuyền buồm.', 'Trên biển có một chiếc thuyền buồm màu trắng.'],
      hear: { s: '我从小就想坐帆船去海上。', opts: ['Từ nhỏ mình đã muốn đi thuyền buồm ra biển.', 'Từ nhỏ mình đã sợ đi thuyền buồm ra biển.', 'Lớn lên mình mới muốn đi thuyền buồm ra biển.'],
        why: '<b>从小就</b> = từ nhỏ đã. <b>想</b> = muốn. <b>坐帆船</b> = đi thuyền buồm.',
        whyNot: ['', '想 = muốn, không phải sợ (怕).', '从小就 = từ nhỏ đã…, không phải lớn lên mới…'] } },
    '撞': { exv: ['Anh ấy vừa đi vừa xem điện thoại, đâm sầm vào một cái cây.', 'Cẩn thận, đừng đâm ngã đứa bé đó!'],
      hear: { s: '他开车的时候撞到了一棵树。', opts: ['Lúc lái xe, anh ấy đâm vào một cái cây.', 'Lúc đi bộ, anh ấy đâm vào một cái cây.', 'Lúc lái xe, anh ấy suýt đâm vào một cái cây.'],
        why: '<b>开车的时候</b> = lúc lái xe. <b>撞到了</b> = đã đâm vào.',
        whyNot: ['', '开车的时候 = lúc lái xe, không phải đi bộ.', '撞到了 = đã đâm vào thật (có 了), không phải suýt.'] } },
    '艘': { exv: ['Trên biển có ba chiếc thuyền.', 'Anh ấy mua một chiếc thuyền nhỏ.'],
      hear: { s: '海上有两艘船。', opts: ['Trên biển có hai chiếc thuyền.', 'Trên biển có ba chiếc thuyền.', 'Trên sông có hai chiếc thuyền.'],
        why: '<b>两艘船</b> = hai chiếc thuyền. <b>海上</b> = trên biển.',
        whyNot: ['', '两艘 = hai chiếc, không phải ba.', '海上 = trên biển, không phải trên sông.'] } },
    '航行': { exv: ['Con thuyền này đi trên biển mười ngày.', 'Thuyền của chúng tôi đang lướt đi trên biển lớn.'],
      hear: { s: '这艘船在海上航行了十天。', opts: ['Con thuyền này đã đi trên biển mười ngày.', 'Con thuyền này đã đi trên biển bốn ngày.', 'Con thuyền này sẽ đi trên biển mười ngày.'],
        why: '<b>航行了十天</b> = đã đi (trên biển) mười ngày.',
        whyNot: ['', '十天 = mười ngày, không phải bốn ngày (四天).', '航行了 = đã đi (có 了), không phải sẽ đi.'] } },
    /* ---- tập 3 ---- */
    '积蓄': { exv: ['Anh ấy dùng hết tiền để dành để mua nhà.', 'Đi làm mười năm, cô ấy có được ít tiền để dành.'],
      hear: { s: '他们没有积蓄，只能卖房子。', opts: ['Họ không có tiền để dành nên đành bán nhà.', 'Họ có tiền để dành nhưng vẫn bán nhà.', 'Họ không có tiền để dành nên đành bán xe.'],
        why: '<b>没有积蓄</b> = không có tiền để dành. <b>只能</b> = đành phải.',
        whyNot: ['', '没有积蓄 = không có tiền để dành (có 没).', '卖房子 = bán nhà, không phải bán xe.'] } },
    '二手': { exv: ['Mình mua một chiếc xe cũ, rất rẻ.', 'Đây đều là sách cũ, nhưng còn rất mới.'],
      hear: { s: '我想买一辆二手车。', opts: ['Mình muốn mua một chiếc xe cũ.', 'Mình muốn bán một chiếc xe cũ.', 'Mình đã mua một chiếc xe cũ.'],
        why: '<b>想买</b> = muốn mua. <b>二手车</b> = xe cũ.',
        whyNot: ['', '买 = mua, không phải bán (卖).', '想买 = muốn mua, chưa mua.'] } },
    '彩虹': { exv: ['Mưa tạnh, trên trời hiện ra một dải cầu vồng.', 'Bạn xem kìa, đằng kia có cầu vồng!'],
      hear: { s: '下完雨，孩子们看到了彩虹。', opts: ['Mưa xong, bọn trẻ nhìn thấy cầu vồng.', 'Trước khi mưa, bọn trẻ nhìn thấy cầu vồng.', 'Mưa xong, bọn trẻ không thấy cầu vồng.'],
        why: '<b>下完雨</b> = mưa xong. <b>看到了彩虹</b> = nhìn thấy cầu vồng.',
        whyNot: ['', '下完雨 = mưa xong, không phải trước khi mưa.', '看到了 = đã nhìn thấy; câu không có 没.'] } },
    '包括': { exv: ['Cả lớp mình, kể cả cô giáo, đều đi rồi.', 'Giá này bao gồm bữa sáng.'],
      hear: { s: '这个价格包括早饭，不包括晚饭。', opts: ['Giá này bao gồm bữa sáng, không gồm bữa tối.', 'Giá này bao gồm bữa tối, không gồm bữa sáng.', 'Giá này bao gồm cả bữa sáng lẫn bữa tối.'],
        why: '<b>包括早饭</b> = gồm bữa sáng. <b>不包括晚饭</b> = không gồm bữa tối.',
        whyNot: ['', 'Đảo rồi: 包括早饭 (gồm bữa sáng), 不包括晚饭 (không gồm bữa tối).', '不包括晚饭 = không gồm bữa tối.'] } },
    '疯': { exv: ['Bạn điên à? Lạnh thế này mà còn đi bơi!', 'Mọi người đều cho là anh ấy điên rồi.'],
      hear: { s: '大家都说他疯了。', opts: ['Ai cũng nói anh ấy điên rồi.', 'Không ai nói anh ấy điên.', 'Ai cũng nói mình điên rồi.'],
        why: '<b>大家都说</b> = ai cũng nói. <b>疯了</b> = điên rồi.',
        whyNot: ['', '大家都说 = ai cũng nói; câu không có 没.', '他 = anh ấy, không phải mình (我).'] } },
    /* ---- tập 4 ---- */
    '辞职': { exv: ['Cô ấy thôi việc, ở nhà chăm con.', 'Tháng trước anh ấy thôi việc, muốn tự mở một quán cà phê.'],
      hear: { s: '她上个月辞职了。', opts: ['Tháng trước cô ấy đã thôi việc.', 'Tháng sau cô ấy sẽ thôi việc.', 'Năm ngoái cô ấy đã thôi việc.'],
        why: '<b>上个月</b> = tháng trước. <b>辞职了</b> = đã thôi việc.',
        whyNot: ['', '上个月 = tháng trước, đã thôi rồi (了); không phải tháng sau.', '上个月 = tháng trước, không phải năm ngoái (去年).'] } },
    '驾驶': { exv: ['Lần đầu lái máy bay, anh ấy rất căng thẳng.', 'Khi lái xe, không được xem điện thoại.'],
      hear: { s: '他第一次驾驶帆船出海。', opts: ['Lần đầu tiên anh ấy lái thuyền buồm ra khơi.', 'Lần thứ hai anh ấy lái thuyền buồm ra khơi.', 'Lần đầu tiên anh ấy lái thuyền buồm về bến.'],
        why: '<b>第一次</b> = lần đầu tiên. <b>驾驶帆船</b> = lái thuyền buồm. <b>出海</b> = ra khơi.',
        whyNot: ['', '第一次 = lần đầu tiên, không phải lần thứ hai (第二次).', '出海 = ra khơi, không phải về bến.'] } },
    '轮流': { exv: ['Mình và anh trai thay phiên nhau chăm sóc bà nội bị ốm.', 'Buổi tối tụi mình thay phiên lái xe, một người lái, một người ngủ.'],
      hear: { s: '我们三个人轮流开车。', opts: ['Ba người chúng tôi thay phiên nhau lái xe.', 'Hai người chúng tôi thay phiên nhau lái xe.', 'Ba người chúng tôi thay phiên nhau nấu cơm.'],
        why: '<b>三个人</b> = ba người. <b>轮流开车</b> = thay phiên nhau lái xe.',
        whyNot: ['', '三个人 = ba người, không phải hai.', '开车 = lái xe, không phải nấu cơm.'] } },
    /* ---- tập 5 ---- */
    '钓': { exv: ['Cuối tuần nào ông nội cũng ra bờ sông câu cá.', 'Anh ấy câu cả buổi chiều mà chẳng câu được con cá nào.'],
      hear: { s: '他钓了一下午，一条鱼也没钓到。', opts: ['Anh ấy câu cả buổi chiều mà không câu được con cá nào.', 'Anh ấy câu cả buổi sáng mà không câu được con cá nào.', 'Anh ấy câu cả buổi chiều, câu được một con cá.'],
        why: '<b>钓了一下午</b> = câu cả buổi chiều. <b>一条鱼也没钓到</b> = một con cá cũng không câu được.',
        whyNot: ['', '一下午 = cả buổi chiều, không phải buổi sáng.', '一条鱼也没钓到 = không câu được con nào (có 没).'] } },
    '顿': { exv: ['Tối nay mình mời bạn một bữa cơm.', 'Mỗi ngày anh ấy chỉ ăn hai bữa.'],
      hear: { s: '他一天只吃两顿饭。', opts: ['Mỗi ngày anh ấy chỉ ăn hai bữa.', 'Mỗi ngày anh ấy chỉ ăn một bữa.', 'Hôm nay anh ấy chỉ ăn hai bữa.'],
        why: '<b>一天</b> = một ngày, mỗi ngày. <b>两顿饭</b> = hai bữa cơm.',
        whyNot: ['', '两顿 = hai bữa, không phải một bữa.', '一天 = một ngày (nói chung), không phải hôm nay (今天).'] } },
    '海鲜': { exv: ['Người sống ở ven biển thường ăn hải sản.', 'Hải sản của quán này rất tươi.'],
      hear: { s: '我不太喜欢吃海鲜。', opts: ['Mình không thích ăn hải sản lắm.', 'Mình rất thích ăn hải sản.', 'Mình không thích nấu hải sản lắm.'],
        why: '<b>不太喜欢</b> = không thích lắm. <b>吃海鲜</b> = ăn hải sản.',
        whyNot: ['', '不太喜欢 = không thích lắm (có 不).', '吃 = ăn, không phải nấu (做).'] } },
    /* ---- tập 6 ---- */
    '傍晚': { exv: ['Lúc chiều tà, nhiều người đi dạo trong công viên.', 'Chiều tối nào mình cũng ra bờ sông chạy bộ.'],
      hear: { s: '每天傍晚，我都去河边跑步。', opts: ['Chiều tối nào mình cũng ra bờ sông chạy bộ.', 'Chiều tối nào mình cũng ra bờ sông đi dạo.', 'Chiều tối nào mình cũng ra công viên chạy bộ.'],
        why: '<b>每天傍晚</b> = chiều tối nào cũng. <b>河边</b> = bờ sông. <b>跑步</b> = chạy bộ.',
        whyNot: ['', '跑步 = chạy bộ, không phải đi dạo (散步).', '河边 = bờ sông, không phải công viên.'] } },
    '舒适': { exv: ['Phòng của khách sạn này rất thoải mái.', 'Ai cũng cần một môi trường sống dễ chịu.'],
      hear: { s: '这家饭店的房间很舒适，就是有点儿贵。', opts: ['Phòng ở khách sạn này rất thoải mái, chỉ hơi đắt.', 'Phòng ở khách sạn này không thoải mái, lại hơi đắt.', 'Phòng ở khách sạn này rất thoải mái, lại rẻ nữa.'],
        why: '<b>很舒适</b> = rất thoải mái. <b>就是有点儿贵</b> = chỉ có điều hơi đắt.',
        whyNot: ['', '很舒适 = rất thoải mái; câu không có 不.', '有点儿贵 = hơi đắt, không phải rẻ.'] } },
    '干活儿': { exv: ['Làm xong việc, tụi mình cùng đi ăn nhé.', 'Ngày nào anh ấy cũng làm việc trên thuyền, rất vất vả.'],
      hear: { s: '他在地里干了一天活儿。', opts: ['Anh ấy làm việc ngoài đồng cả ngày.', 'Anh ấy làm việc ngoài đồng nửa ngày.', 'Anh ấy làm việc trong nhà cả ngày.'],
        why: '<b>地里</b> = ngoài đồng. <b>干了一天活儿</b> = làm việc cả một ngày.',
        whyNot: ['', '一天 = cả ngày, không phải nửa ngày (半天).', '地里 = ngoài đồng, không phải trong nhà.'] } },
    /* ---- tập 7 ---- */
    '盼望': { exv: ['Bọn trẻ ngày ngày mong đến Tết.', 'Chúng tôi đều đang mong tin vui của bạn.'],
      hear: { s: '我们都在盼望你的好消息。', opts: ['Chúng tôi đều đang mong tin vui của bạn.', 'Chỉ có mình đang mong tin vui của bạn.', 'Chúng tôi đều đang mong tin vui của cô ấy.'],
        why: '<b>我们都</b> = chúng tôi đều. <b>盼望你的好消息</b> = mong tin vui của bạn.',
        whyNot: ['', '我们都 = chúng tôi đều (nhiều người), không phải chỉ một mình.', '你的 = của bạn, không phải của cô ấy (她的).'] } },
    '陆地': { exv: ['Đi trên biển một tháng, cuối cùng chúng tôi cũng nhìn thấy đất liền.', 'Mình vẫn thích sống trên đất liền hơn.'],
      hear: { s: '在海上航行了一个月，我们终于看到了陆地。', opts: ['Đi trên biển một tháng, cuối cùng chúng tôi cũng nhìn thấy đất liền.', 'Đi trên biển một tuần, cuối cùng chúng tôi cũng nhìn thấy đất liền.', 'Đi trên biển một tháng, chúng tôi vẫn chưa nhìn thấy đất liền.'],
        why: '<b>一个月</b> = một tháng. <b>终于看到了陆地</b> = cuối cùng đã nhìn thấy đất liền.',
        whyNot: ['', '一个月 = một tháng, không phải một tuần.', '终于看到了 = cuối cùng đã nhìn thấy; câu không có 没.'] } },
    '各自': { exv: ['Tan học, các bạn ai về nhà nấy.', 'Hai người họ mỗi người nói ý kiến của mình.'],
      hear: { s: '下课以后，同学们各自回家了。', opts: ['Tan học, các bạn ai về nhà nấy.', 'Trước giờ học, các bạn ai về nhà nấy.', 'Tan học, các bạn ai đi chơi nấy.'],
        why: '<b>下课以后</b> = sau giờ học. <b>各自回家</b> = ai về nhà nấy.',
        whyNot: ['', '下课以后 = sau khi tan học, không phải trước giờ học.', '回家 = về nhà, không phải đi chơi.'] } },
    /* ---- tập 8 ---- */
    '勿': { exv: ['Trong thư viện xin chớ nói to.', 'Đây là đồ của người khác, xin đừng lấy đi.'],
      hear: { s: '图书馆里请勿大声说话。', opts: ['Trong thư viện xin chớ nói to.', 'Trong thư viện xin chớ ăn uống.', 'Trong lớp học xin chớ nói to.'],
        why: '<b>请勿</b> = xin chớ, xin đừng. <b>大声说话</b> = nói to.',
        whyNot: ['', '大声说话 = nói to, không phải ăn uống.', '图书馆 = thư viện, không phải lớp học.'] } },
    '时刻': { exv: ['Vào phút cuối, anh ấy sút vào một quả bóng.', 'Mình sẽ không bao giờ quên khoảnh khắc ấy.'],
      hear: { s: '在最后时刻，他踢进了一个球。', opts: ['Vào lúc cuối cùng, anh ấy sút vào một quả bóng.', 'Vào lúc đầu tiên, anh ấy sút vào một quả bóng.', 'Vào lúc cuối cùng, anh ấy sút trượt một quả bóng.'],
        why: '<b>最后时刻</b> = lúc cuối cùng, phút cuối. <b>踢进了一个球</b> = sút vào một quả.',
        whyNot: ['', '最后 = cuối cùng, không phải đầu tiên.', '踢进了 = sút vào (lưới), không phải sút trượt.'] } },
    '着火': { exv: ['Bếp cháy rồi, gọi điện mau!', 'Tối hôm đó, ngôi nhà bên cạnh nhà anh ấy bốc cháy.'],
      hear: { s: '那天晚上，他家旁边的房子着火了。', opts: ['Tối hôm đó, ngôi nhà bên cạnh nhà anh ấy bốc cháy.', 'Tối hôm đó, nhà anh ấy bốc cháy.', 'Sáng hôm đó, ngôi nhà bên cạnh nhà anh ấy bốc cháy.'],
        why: '<b>他家旁边的房子</b> = ngôi nhà bên cạnh nhà anh ấy. <b>着火了</b> = bốc cháy.',
        whyNot: ['', '他家旁边的房子 = ngôi nhà bên cạnh, không phải chính nhà anh ấy.', '晚上 = buổi tối, không phải buổi sáng.'] } },
    '漏': { exv: ['Trời mưa, nhà lại dột rồi.', 'Cái cốc bị thủng, nước chảy hết rồi.'],
      hear: { s: '下雨了，房子又漏水了。', opts: ['Trời mưa, nhà lại bị dột rồi.', 'Trời mưa, nhà không bị dột nữa.', 'Trời mưa, nhà lần đầu bị dột.'],
        why: '<b>又漏水了</b> = lại dột nữa rồi.',
        whyNot: ['', '漏水了 = bị dột (rò nước); câu không có 不.', '又 = lại (đã dột trước đây), không phải lần đầu.'] } },
    /* ---- tập 9 ---- */
    '雷': { exv: ['Ngoài trời có sấm rồi, mau về nhà thôi!', 'Đứa bé sợ sấm, tối ngủ không được.'],
      hear: { s: '外面打雷了，快回家吧。', opts: ['Bên ngoài có sấm rồi, mau về nhà thôi.', 'Bên ngoài có sấm rồi, mau ra ngoài xem thôi.', 'Bên ngoài hết sấm rồi, mau về nhà thôi.'],
        why: '<b>打雷了</b> = có sấm rồi. <b>快回家吧</b> = mau về nhà thôi.',
        whyNot: ['', '快回家 = mau về nhà, không phải ra ngoài xem.', '打雷了 = sấm bắt đầu nổ, không phải hết sấm.'] } },
    '随时': { exv: ['Có gì bạn cứ gọi cho mình bất cứ lúc nào.', 'Trời sắp mưa rồi, lúc nào cũng có thể có sấm.'],
      hear: { s: '有问题你随时给我打电话。', opts: ['Có gì bạn cứ gọi cho mình bất cứ lúc nào.', 'Có gì bạn cứ nhắn tin cho mình bất cứ lúc nào.', 'Có gì bạn cứ gọi cho cô ấy bất cứ lúc nào.'],
        why: '<b>随时</b> = bất cứ lúc nào. <b>给我打电话</b> = gọi điện cho mình.',
        whyNot: ['', '打电话 = gọi điện, không phải nhắn tin.', '给我 = cho mình, không phải cho cô ấy.'] } },
    '闪电': { exv: ['Trên trời bỗng loé lên một tia chớp.', 'Thấy chớp xong, đứa bé chạy ngay về nhà.'],
      hear: { s: '刚才天上出现了两道闪电。', opts: ['Vừa nãy trên trời loé lên hai tia chớp.', 'Vừa nãy trên trời loé lên một tia chớp.', 'Bây giờ trên trời đang loé lên hai tia chớp.'],
        why: '<b>刚才</b> = vừa nãy. <b>两道闪电</b> = hai tia chớp.',
        whyNot: ['', '两道 = hai (tia), không phải một.', '刚才 = vừa nãy (đã qua), không phải bây giờ.'] } },
    '击': { exv: ['Cái cây lớn đó bị tia chớp đánh trúng.', 'Lúc sấm chớp đùng đùng, đừng đứng dưới cây to, cẩn thận bị chớp đánh trúng.'],
      hear: { s: '那棵大树被闪电击到了。', opts: ['Cái cây lớn đó bị tia chớp đánh trúng.', 'Cái cây nhỏ đó bị tia chớp đánh trúng.', 'Cái cây lớn đó suýt bị tia chớp đánh trúng.'],
        why: '<b>大树</b> = cây lớn. <b>被闪电击到了</b> = bị tia chớp đánh trúng.',
        whyNot: ['', '大树 = cây lớn, không phải cây nhỏ.', '击到了 = đã đánh trúng thật (có 了), không phải suýt.'] } },
    '拥抱': { exv: ['Thấy mẹ, đứa bé chạy tới ôm chặt lấy mẹ.', 'Ngày tốt nghiệp, cả lớp ôm nhau thắm thiết.'],
      hear: { s: '见到妈妈，孩子跑过去紧紧地拥抱她。', opts: ['Thấy mẹ, đứa bé chạy tới ôm chặt lấy mẹ.', 'Thấy ba, đứa bé chạy tới ôm chặt lấy ba.', 'Thấy mẹ, đứa bé đi chầm chậm tới ôm chặt lấy mẹ.'],
        why: '<b>见到妈妈</b> = thấy mẹ. <b>跑过去</b> = chạy tới. <b>紧紧地拥抱</b> = ôm chặt.',
        whyNot: ['', '妈妈 = mẹ, không phải ba.', '跑过去 = chạy tới, không phải đi chầm chậm.'] } },
    /* ---- tập 10 ---- */
    '海里': { exv: ['Con thuyền này mỗi ngày đi được hai trăm hải lý.', 'Chúng tôi đã đi hơn một nghìn hải lý.'],
      hear: { s: '这艘船一天能航行两百海里。', opts: ['Con thuyền này mỗi ngày đi được hai trăm hải lý.', 'Con thuyền này mỗi ngày đi được ba trăm hải lý.', 'Con thuyền này mỗi giờ đi được hai trăm hải lý.'],
        why: '<b>一天</b> = một ngày. <b>两百海里</b> = hai trăm hải lý.',
        whyNot: ['', '两百 = hai trăm, không phải ba trăm.', '一天 = một ngày, không phải một giờ.'] } },
    '人生': { exv: ['Đời người có nhiều lựa chọn.', 'Đây là ngày quan trọng nhất trong đời mình.'],
      hear: { s: '这是我人生中最重要的一天。', opts: ['Đây là ngày quan trọng nhất trong đời mình.', 'Đây là ngày vui nhất trong đời mình.', 'Đây là ngày quan trọng nhất trong đời ba mình.'],
        why: '<b>我人生中</b> = trong đời mình. <b>最重要</b> = quan trọng nhất.',
        whyNot: ['', '最重要 = quan trọng nhất, không phải vui nhất.', '我人生中 = trong đời mình, không phải đời ba.'] } },
    '台阶': { exv: ['Bà nội chầm chậm bước lên bậc thềm.', 'Trước cổng trường có rất nhiều bậc thềm.'],
      hear: { s: '门口有很多台阶，你慢点儿走。', opts: ['Trước cửa có nhiều bậc thềm, bạn đi chậm thôi.', 'Trước cửa có nhiều bậc thềm, bạn đi nhanh lên.', 'Sau nhà có nhiều bậc thềm, bạn đi chậm thôi.'],
        why: '<b>门口</b> = trước cửa. <b>台阶</b> = bậc thềm. <b>慢点儿走</b> = đi chậm thôi.',
        whyNot: ['', '慢点儿走 = đi chậm thôi, không phải đi nhanh.', '门口 = trước cửa, không phải sau nhà.'] } },
    '未来': { exv: ['Ai cũng mong có một tương lai tốt đẹp.', 'Bạn đã từng nghĩ về cuộc sống tương lai của mình chưa?'],
      hear: { s: '我们都希望有一个美好的未来。', opts: ['Chúng tôi đều mong có một tương lai tốt đẹp.', 'Chỉ mình tôi mong có một tương lai tốt đẹp.', 'Chúng tôi đều tin sẽ có một tương lai tốt đẹp.'],
        why: '<b>我们都希望</b> = chúng tôi đều mong. <b>美好的未来</b> = tương lai tốt đẹp.',
        whyNot: ['', '我们都 = chúng tôi đều (nhiều người), không phải một mình.', '希望 = mong, không phải tin (相信).'] } },
    /* ---- tập 11 ---- */
    '太太': { exv: ['Đây là vợ tôi, cô ấy cũng là giáo viên.', 'Sáng nào bà Vương cũng đi dạo công viên.'],
      hear: { s: '我太太是医生，我是老师。', opts: ['Vợ tôi là bác sĩ, tôi là giáo viên.', 'Vợ tôi là giáo viên, tôi là bác sĩ.', 'Vợ tôi là bác sĩ, tôi cũng là bác sĩ.'],
        why: '<b>我太太</b> = vợ tôi. <b>医生</b> = bác sĩ. <b>老师</b> = giáo viên.',
        whyNot: ['', 'Đảo rồi: 我太太是医生 (vợ là bác sĩ), 我是老师 (tôi là giáo viên).', '我是老师 = tôi là giáo viên.'] } },
    '时代': { exv: ['Thời đại đã khác, cuộc sống của mọi người cũng khác.', 'Thời đại nào cũng có vấn đề riêng của nó.'],
      hear: { s: '时代变了，人们的生活也变了。', opts: ['Thời đại đã khác, cuộc sống của mọi người cũng khác.', 'Thời đại đã khác, nhưng cuộc sống của mọi người vẫn thế.', 'Thời đại đã khác, công việc của mọi người cũng khác.'],
        why: '<b>时代变了</b> = thời đại đã khác. <b>生活也变了</b> = cuộc sống cũng khác.',
        whyNot: ['', '也变了 = cũng đã khác.', '生活 = cuộc sống, không phải công việc.'] } }

  };
  if (CH3.buildQB) { CH3.buildQB(); delete CH3.buildQB; }
  if (CH3.resolveRefs) CH3.resolveRefs();
})();

/* ===== Bài 3: Hán Việt + chiết tự + a memory hook for each word (same shape as Bài 1 ETY) ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  CH3.ETY = {
    /* ---- tập 1 ---- */
    '工人': { parts: [['工', 'công', 'Hình cây thước thợ: việc làm, người thợ. Như “công nhân”, “nhân công”.'], ['人', 'nhân', 'Người.']],
      hook: 'Người (人) làm công việc (工) = công nhân. Hán–Việt y hệt tiếng Việt.' },
    '稳定': { parts: [['稳', 'ổn', '禾 (cây lúa) + 急 (chỉ âm): lúa chất thành đống chắc chắn, không đổ. Vững vàng. Như “ổn thoả”.'], ['定', 'định', '宀 (mái nhà) + 正 (ngay ngắn): ở yên dưới mái nhà. Yên, cố định.']],
      hook: 'Đống lúa (禾) chất vững + ngồi yên dưới mái nhà (宀) = ổn định: không lên xuống thất thường.' },
    '待遇': { parts: [['待', 'đãi', '彳 (bước đi) + 寺 (chỉ âm): chờ đợi; đối đãi, tiếp đãi. Như “tiếp đãi”.'], ['遇', 'ngộ', '辶 (đi) + 禺 (chỉ âm): gặp. Như “tao ngộ”.']],
      hook: 'Cách công ty “đãi” (待) bạn và những gì bạn “gặp” (遇) được ở đó: lương, thưởng, chế độ = đãi ngộ.' },
    '发愁': { parts: [['发', 'phát', 'Phát ra, nổi lên.'], ['愁', 'sầu', '秋 (mùa thu, chỉ âm) + 心 (tim): lòng buồn như trời thu. Như “ưu sầu”.']],
      hook: 'Nỗi sầu (愁) nổi lên (发) trong lòng = lo âu. Trái tim (心) mang trời thu (秋).' },
    /* ---- tập 2 ---- */
    '平静': { parts: [['平', 'bình', 'Phẳng, bằng. Như “bình yên”.'], ['静', 'tĩnh', '青 (xanh) + 争 (tranh giành): hết tranh giành thì yên. Như “yên tĩnh”.']],
      hook: 'Phẳng (平) và lặng (静): mặt biển không gợn sóng, lòng không gợn lo.' },
    '帆船': { parts: [['帆', 'phàm', '巾 (tấm vải) + 凡 (chỉ âm): tấm vải căng gió = cánh buồm.'], ['船', 'thuyền', '舟 (con thuyền) + phần bên phải chỉ âm. Như “thuyền bè”.']],
      hook: 'Tấm vải (巾) căng gió trên con thuyền (舟) = thuyền buồm.' },
    '撞': { parts: [['撞', 'chàng', '扌 (tay) + 童 (đứa trẻ, chỉ âm): va mạnh vào.']],
      hook: 'Như đứa trẻ (童) chạy ào không nhìn đường, đâm sầm vào cửa. Tay (扌) đẩy mạnh: 撞开 = đâm bật ra.' },
    '艘': { parts: [['艘', 'sưu', '舟 (thuyền) + 叟 (chỉ âm sōu).']],
      hook: 'Có bộ 舟 (thuyền): lượng từ chỉ dành cho tàu thuyền. Xe là 辆, thuyền là 艘.' },
    '航行': { parts: [['航', 'hàng', '舟 (thuyền) + 亢 (chỉ âm): đi thuyền. Như “hàng hải”, “hàng không”.'], ['行', 'hành', 'Đi. Như “hành trình”.']],
      hook: 'Thuyền (舟) đi (行) = hàng hành: tàu thuyền chạy trên biển. “Hàng hải” cũng là chữ 航 này.' },
    /* ---- tập 3 ---- */
    '积蓄': { parts: [['积', 'tích', '禾 (lúa) + 只 (chỉ âm): gom lúa thành đống. Như “tích luỹ”.'], ['蓄', 'súc', '艹 (cỏ) + 畜 (chỉ âm): tích trữ, cất để dành.']],
      hook: 'Gom góp (积) rồi cất trữ (蓄) = tiền để dành, của dành dụm.' },
    '二手': { parts: [['二', 'nhị', 'Hai.'], ['手', 'thủ', 'Tay.']],
      hook: 'Qua “tay thứ hai” (二手) = đồ đã có người dùng. Tiếng Anh cũng nói second-hand.' },
    '彩虹': { parts: [['彩', 'thái', '采 (hái, chỉ âm) + 彡 (mấy nét vẽ màu): nhiều màu sắc. Như “sắc thái”.'], ['虹', 'hồng', '虫 (con vật) + 工 (chỉ âm). Người xưa tưởng cầu vồng là một con rồng uống nước, nên chữ có bộ 虫.']],
      hook: 'Con rồng (虫) nhiều màu (彩) vắt ngang trời sau mưa = cầu vồng.' },
    '包括': { parts: [['包', 'bao', 'Hình cái bọc ôm lấy bên trong: bao bọc. Như “bao gồm”.'], ['括', 'quát', '扌 (tay) + 舌 (chỉ âm): gom lại, buộc lại. Như “khái quát”.']],
      hook: 'Bao (包) lại và gom (括) hết vào = bao gồm, kể cả.' },
    '疯': { parts: [['疯', 'phong', '疒 (bệnh) + 风 (gió, chỉ âm): “bệnh gió”, đầu óc loạn như gió thổi.']],
      hook: 'Bệnh (疒) như gió (风) thổi loạn trong đầu = điên. Ai làm chuyện quá liều, người ta bảo: 你疯了！' },
    /* ---- tập 4 ---- */
    '辞职': { parts: [['辞', 'từ', '舌 (lưỡi) + 辛 (cay đắng): dùng lời mà từ biệt, từ chối. Như “từ biệt”.'], ['职', 'chức', '耳 (tai) + 只 (chỉ âm): việc phải nghe lệnh mà làm; chức vụ. Như “chức vụ”.']],
      hook: 'Từ (辞) bỏ chức (职) = thôi việc. Tiếng Việt nói “từ chức”, tiếng Trung thì ai thôi việc cũng nói 辞职.' },
    '驾驶': { parts: [['驾', 'giá', '加 (thêm, chỉ âm) + 马 (ngựa): đóng ngựa vào xe mà đánh xe. Như “giá ngự”.'], ['驶', 'sử', '马 (ngựa) + 史 (chỉ âm): cho ngựa chạy nhanh; xe, thuyền chạy.']],
      hook: 'Cả hai chữ đều có 马 (ngựa): xưa là đánh xe ngựa; nay lái xe, lái thuyền, lái máy bay đều là 驾驶.' },
    '轮流': { parts: [['轮', 'luân', '车 (xe) + 仑 (chỉ âm): bánh xe; xoay vòng. Như “luân phiên”.'], ['流', 'lưu', '氵 (nước): nước chảy. Như “lưu thông”.']],
      hook: 'Bánh xe (轮) xoay, dòng nước (流) trôi: ai cũng lần lượt tới lượt mình = luân phiên.' },
    /* ---- tập 5 ---- */
    '钓': { parts: [['钓', 'điếu', '钅 (kim loại) + 勺 (cái muỗng, chỉ âm): lưỡi câu bằng sắt cong như cái muỗng.']],
      hook: 'Móc sắt (钅) cong như cái muỗng (勺) = lưỡi câu. 钓鱼 = câu cá; Hán–Việt “điếu ngư”.' },
    '顿': { parts: [['顿', 'đốn', '屯 (chỉ âm) + 页 (cái đầu): cúi đầu; dừng lại một lúc. Một chặng, một bữa.']],
      hook: 'Một bữa ăn là một lần dừng lại (顿) cúi đầu (页) xuống bát cơm. 一顿饭 = một bữa cơm.' },
    '海鲜': { parts: [['海', 'hải', '氵 (nước) + 每 (chỉ âm): biển.'], ['鲜', 'tiên', '鱼 (cá) + 羊 (dê): hai món tươi ngon của người xưa; tươi. Như 新鲜 (tươi).']],
      hook: 'Đồ tươi (鲜) từ biển (海) = hải sản. Chữ 鲜 có cả 鱼 (cá) lẫn 羊 (dê): vừa tươi vừa ngon.' },
    /* ---- tập 6 ---- */
    '傍晚': { parts: [['傍', 'bàng', '亻 (người) + 旁 (bên cạnh, chỉ âm): sát bên, gần tới.'], ['晚', 'vãn', '日 (mặt trời) + 免 (chỉ âm): trời muộn, buổi tối.']],
      hook: 'Sát bên (傍) buổi tối (晚) = chạng vạng: mặt trời sắp lặn, trời chưa tối hẳn.' },
    '舒适': { parts: [['舒', 'thư', '舍 (nhà) + 予: duỗi ra, thư thả. Như “thư giãn”.'], ['适', 'thích', '辶 (đi) + 舌 (chỉ âm): vừa vặn, hợp. Như “thích hợp”.']],
      hook: 'Thư thả (舒) và vừa vặn (适) = dễ chịu. Nhớ: 舒适 văn viết, cho căn phòng, môi trường; 舒服 khẩu ngữ, cho cảm giác của người.' },
    '干活儿': { parts: [['干', 'cán', 'Làm (干 trong 干活儿 đọc gàn).'], ['活', 'hoạt', '氵 + 舌: sống động; ở đây 活儿 = việc làm.'], ['儿', 'nhi', 'Hậu tố r-hoá: 活儿 đọc huór.']],
      hook: 'Làm (干) việc (活儿): khẩu ngữ, việc tay chân hằng ngày.' },
    /* ---- tập 7 ---- */
    '盼望': { parts: [['盼', 'phán', '目 (mắt) + 分 (chỉ âm): mở to mắt mà trông.'], ['望', 'vọng', 'Nhìn ra xa, mong. Như “hy vọng” (希望).']],
      hook: 'Mở to mắt (目) mà ngóng (望) = mong mỏi tha thiết. Mạnh hơn 希望.' },
    '陆地': { parts: [['陆', 'lục', '阝 (gò đất) + phần bên phải là mấy gò đất chồng lên nhau: đất cao, đất liền. Như “lục địa”.'], ['地', 'địa', '土 (đất): đất.']],
      hook: 'Gò đất (阝) nối liền nhau trên mặt đất (地) = đất liền. Ở trên biển lâu ngày, ai cũng mong thấy 陆地.' },
    '各自': { parts: [['各', 'các', '夂 (bàn chân đi tới) + 口 (cửa): mỗi người tới một cửa; “mỗi, từng”. Như “các nơi”.'], ['自', 'tự', 'Hình cái mũi: tự mình. Như 自学 (tự học).']],
      hook: 'Mỗi người (各) tự mình (自) = ai nấy. 他们在各自的房间 = ai ở phòng nấy.' },
    /* ---- tập 8 ---- */
    '勿': { parts: [['勿', 'vật', 'Hình lá cờ có tua, phất lên ra hiệu dừng: chớ, đừng.']],
      hook: 'Như lá cờ phất lên báo dừng: 勿 = đừng. Hay gặp trên biển báo: 请勿… = xin đừng…' },
    '时刻': { parts: [['时', 'thời', '日 (mặt trời) + 寸: giờ, lúc.'], ['刻', 'khắc', '亥 (chỉ âm) + 刂 (con dao): khắc vạch; 15 phút. Như “thời khắc”.']],
      hook: 'Vạch khắc (刻) trên dòng thời gian (时) = thời khắc, một lúc nhất định. 时时刻刻 = lúc nào cũng.' },
    '着火': { parts: [['着', 'trước', 'Ở đây đọc zháo: bén vào, dính vào.'], ['火', 'hoả', 'Lửa.']],
      hook: 'Lửa (火) bén vào (着) = bốc cháy. Nhớ đọc zháohuǒ, không đọc zhe.' },
    '漏': { parts: [['漏', 'lậu', '氵 (nước) + 尸 (mái nhà) + 雨 (mưa): mưa lọt qua mái, nước rỉ xuống.']],
      hook: 'Nước (氵) mưa (雨) lọt qua mái nhà (尸) = dột, rò. Chữ 漏 có đủ cả mái nhà lẫn mưa.' },
    /* ---- tập 9 ---- */
    '雷': { parts: [['雷', 'lôi', '雨 (mưa) + 田: sấm. Như “lôi đình” (sấm sét).']],
      hook: 'Trên là mưa (雨), dưới là ruộng (田): mưa giông trên đồng thì có sấm.' },
    '随时': { parts: [['随', 'tuỳ', '阝 + phần có 辶 (đi): đi theo. Như “tuỳ ý”.'], ['时', 'thời', 'Lúc, giờ.']],
      hook: 'Theo (随) mọi lúc (时) = bất cứ lúc nào. Như “tuỳ thời”: tuỳ lúc.' },
    '闪电': { parts: [['闪', 'thiểm', '门 (cửa) + 人 (người): người loé qua khung cửa; loé lên.'], ['电', 'điện', 'Điện.']],
      hook: 'Người (人) loé qua khung cửa (门) nhanh như điện (电) = tia chớp.' },
    '击': { parts: [['击', 'kích', 'Bản phồn thể có bộ 手 (tay) ở dưới: tay đánh mạnh. Như “công kích”, “tấn công”.']],
      hook: 'Một cú đánh mạnh bằng tay = 击. Tia chớp “đánh” trúng thuyền: 被闪电击到.' },
    '拥抱': { parts: [['拥', 'ủng', '扌 (tay) + 用 (chỉ âm): ôm, vây quanh. Như “ủng hộ”.'], ['抱', 'bão', '扌 (tay) + 包 (bọc): dùng tay bọc lấy.']],
      hook: 'Hai chữ đều có 扌 (tay): tay bọc (包) lấy người kia = ôm chặt.' },
    /* ---- tập 10 ---- */
    '海里': { parts: [['海', 'hải', 'Biển.'], ['里', 'lý', 'Dặm (đơn vị đo đường); cũng là “trong”.']],
      hook: 'Dặm (里) đo trên biển (海) = hải lý. Sau con số (4000多海里) là hải lý; sau 在 (在海里) là “trong biển”.' },
    '人生': { parts: [['人', 'nhân', 'Người.'], ['生', 'sinh', 'Hình cây non mọc lên khỏi mặt đất: sống, sinh ra.']],
      hook: 'Người (人) sống (生) = đời người. Như “nhân sinh quan”.' },
    '台阶': { parts: [['台', 'đài', 'Cái bệ, chỗ cao.'], ['阶', 'giai', '阝 (gò đất) + 介 (chỉ âm): bậc đất; bậc thềm. Như “giai đoạn”.']],
      hook: 'Những bậc (阶) dẫn lên chỗ cao (台) = bậc thềm. Mỗi bậc lại cao thêm một chút, như đường đời.' },
    '未来': { parts: [['未', 'vị', 'Hình cây có cành non chưa lớn hết: chưa. Như “vị thành niên”.'], ['来', 'lai', 'Đến.']],
      hook: 'Chưa (未) đến (来) = tương lai. Hán–Việt “vị lai”.' },
    /* ---- tập 11 ---- */
    '太太': { parts: [['太', 'thái', '大 (to) thêm một chấm: rất, quá. Như “thái quá”.']],
      hook: 'Người “lớn” (太) trong nhà: bà chủ nhà, vợ. Lặp lại thành 太太, chữ sau đọc nhẹ.' },
    '时代': { parts: [['时', 'thời', 'Thời gian, lúc.'], ['代', 'đại', '亻 (người) + 弋: thay thế nhau; đời. Như “thế hệ”, “thời đại”.']],
      hook: 'Từng lớp người (代) nối nhau theo dòng thời gian (时) = thời đại.' }

  };
})();

/* ===== Bài 3 "人生有选择，一切可改变": the book's sentences (BOOK), the study path (PATH) and the sessions (SESSIONS) ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  /* the printed sentences, in order. p = paragraph. Two printed sentences are split for the screen and the comic:
     sentence 4 at "：" (3|4) and sentence 20 at the comma before "因为" (20|21). 23|24 are one quotation (two printed sentences). */
  var BOOK = CH3.BOOK = [
    /* 0  tập 1 */ { p: 1, zh: '翟峰和妻子都是铁路工人，工作稳定、待遇不错。', vi: 'Anh Phong và vợ đều là công nhân đường sắt, công việc ổn định, đãi ngộ khá tốt.' },
    /* 1  tập 1 */ { p: 1, zh: '他们有房有车，从不用为生活发愁。', vi: 'Họ có nhà có xe, chưa bao giờ phải lo nghĩ chuyện cơm áo.' },
    /* 2  tập 2 */ { p: 1, zh: '可翟峰却不想一辈子过这样平静的生活。', vi: 'Nhưng anh Phong lại không muốn cả đời sống cuộc sống yên ả như thế.' },
    /* 3  tập 2 */ { p: 1, zh: '通过电视，翟峰迷上了帆船，他觉得帆船能带他撞开“世界之门”：', vi: 'Qua ti vi, anh Phong mê thuyền buồm. Anh thấy thuyền buồm có thể đưa anh phá tung “cánh cửa ra thế giới”:' },
    /* 4  tập 2 */ { p: 1, zh: '只要有一艘船，就能航行在无边无际的海上，到任何自己想去的地方。', vi: 'chỉ cần có một chiếc thuyền là có thể lướt đi trên biển rộng mênh mông, tới bất cứ nơi nào mình muốn.' },
    /* 5  tập 3 */ { p: 2, zh: '由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。', vi: 'Vì hai vợ chồng không có tiền để dành nên họ bán nhà bán xe, mua một chiếc thuyền cũ; anh Phong đặt tên nó là “Cầu Vồng”.' },
    /* 6  tập 3 */ { p: 2, zh: '出发前，翟峰自学了航海知识。', vi: 'Trước khi lên đường, anh Phong tự học kiến thức đi biển.' },
    /* 7  tập 3 */ { p: 2, zh: '然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。', vi: 'Thế nhưng tất cả mọi người, kể cả ba mẹ anh Phong, đều cho rằng anh Phong “điên rồi”.' },
    /* 8  tập 4 */ { p: 3, zh: '2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。', vi: 'Ngày 24 tháng 11 năm 2012, anh Phong đã nghỉ việc cùng vợ đưa cô con gái đang tạm nghỉ học, lần đầu tiên lái thuyền buồm ra khơi.' },
    /* 9  tập 4 */ { p: 3, zh: '白天，翟峰和妻子轮流驾船。', vi: 'Ban ngày, anh Phong và vợ thay phiên nhau lái thuyền.' },
    /* 10 tập 4 */ { p: 3, zh: '女儿在船上看书、学习、画画儿。', vi: 'Con gái ở trên thuyền đọc sách, học bài, vẽ tranh.' },
    /* 11 tập 5 */ { p: 3, zh: '下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。', vi: 'Buổi chiều khi mặt biển yên ả, anh Phong cùng vợ xuống biển bơi hoặc câu cá.' },
    /* 12 tập 5 */ { p: 3, zh: '该吃饭时，妻子会给全家人做一顿美味的海鲜。', vi: 'Đến giờ ăn, người vợ nấu cho cả nhà một bữa hải sản ngon lành.' },
    /* 13 tập 6 */ { p: 4, zh: '傍晚是一家人最舒适的时候。', vi: 'Chiều tà là lúc cả nhà thoải mái nhất.' },
    /* 14 tập 6 */ { p: 4, zh: '干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。', vi: 'Làm xong việc, cả nhà ngồi bên nhau, xem phim trên máy tính hoặc trò chuyện.' },
    /* 15 tập 7 */ { p: 4, zh: '这样的生活，是翟峰盼望已久的。', vi: 'Cuộc sống như thế là điều anh Phong mong mỏi đã lâu.' },
    /* 16 tập 7 */ { p: 4, zh: '以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。', vi: 'Trước kia, những buổi tối trên đất liền, mỗi người ở trong phòng riêng của mình, cả nhà chẳng mấy khi trò chuyện với nhau.' },
    /* 17 tập 8 */ { p: 5, zh: '中国有句老话，可上山，勿下海。', vi: 'Trung Quốc có câu nói xưa: lên núi thì được, chớ có xuống biển.' },
    /* 18 tập 8 */ { p: 5, zh: '美好的时刻过去后是一个个紧张的夜晚。', vi: 'Qua những khoảnh khắc tươi đẹp là từng đêm căng thẳng.' },
    /* 19 tập 8 */ { p: 5, zh: '一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。', vi: 'Suốt dọc đường, nhà anh Phong đã trải qua hơn mười lần gặp nguy lớn nhỏ như thân thuyền bốc cháy, thuyền bị rò nước.' },
    /* 20 tập 9 */ { p: 5, zh: '他们最怕雷电交加的时刻，', vi: 'Họ sợ nhất những lúc sấm chớp đùng đùng,' },
    /* 21 tập 9 */ { p: 5, zh: '因为小船随时有可能被下一道闪电击到，一家三口只能紧紧拥抱在一起，希望闪电快快过去。', vi: 'vì chiếc thuyền nhỏ có thể bị tia chớp kế tiếp đánh trúng bất cứ lúc nào; cả nhà ba người chỉ biết ôm chặt lấy nhau, mong chớp mau qua đi.' },
    /* 22 tập 10 */ { p: 6, zh: '在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。', vi: 'Sau tám tháng, đi hơn 4000 hải lý, cuối cùng nhà anh Phong cũng về tới nhà.' },
    /* 23 tập 10 */ { p: 7, zh: '翟峰相信，一切只是开始，航海就是他人生道路上一段长长的台阶，通向他想要的未来。', vi: 'Anh Phong tin rằng mọi thứ chỉ mới bắt đầu: đi biển là một đoạn bậc thềm dài trên đường đời của anh, dẫn tới tương lai anh mong muốn.' },
    /* 24 tập 11 */ { p: 7, zh: '“我和太太想要看看这个时代、这个世界到底是什么样子。', vi: '“Tôi và vợ muốn xem thời đại này, thế giới này rốt cuộc trông ra sao.' },
    /* 25 tập 11 */ { p: 7, zh: '人生有选择，一切可改变”。', vi: 'Đời người có lựa chọn, mọi thứ đều có thể đổi thay.”' },
    /* 26 tập 11 */ { p: 7, zh: '下一站，他们想去澳洲和新西兰。', vi: 'Chặng tới, họ muốn đi Úc và New Zealand.' },
    /* 27 tập 11 */ { p: 7, zh: '等待今年11月的北风，北风南下之时，他们将再次出发。', vi: 'Họ chờ gió bấc tháng 11 năm nay; khi gió bấc thổi về phương nam, họ sẽ lại lên đường.' }
  ];
  var B = function (i) { return { who: 'n', v: 'm', zh: BOOK[i].zh, vi: BOOK[i].vi }; };
  var PK = 'Nghe rồi chọn bức tranh đúng:';
  /* cloze in a study unit (no "đúng" reply on the right option: the green box is enough) */
  var cl = function (w, scene, say, vi, full, ok, wrongs, teach, prompt) {
    return { t: 'mc', w: [w], scene: scene, say: [say, vi], full: full, prompt: prompt || 'Chọn từ điền vào chỗ trống:',
      opts: [{ t: ok, ok: 1 }].concat(wrongs.map(function (x) { return { t: x[0], note: x[1] }; })), teach: teach };
  };
  /* the listening item of a word (CH3.LEARN[w].hear) as a screen; filled in by CH3.resolveRefs() (learn.js may load later) */
  var hearOf = function (w) { return { ref: ['HEAR', w] }; };

  /* ---- the study path of Bài 3: 21 stages in order (Chapter3_units.md). A stage without a SESSIONS entry is "Sắp ra mắt". ---- */
  CH3.PATH = [
    { id: '3-1', kind: 'learn', title: 'Công việc ổn định' },
    { id: '3-2', kind: 'learn', title: 'Mê thuyền buồm' },
    { id: '3-3', kind: 'learn', title: 'Bán nhà mua thuyền' },
    { id: '3-m1', kind: 'mix', title: 'Ôn tập', units: ['3-1', '3-2', '3-3'] },
    { id: '3-g1', kind: 'comic', title: 'Ghép truyện: Giấc mơ thuyền buồm', ids: [0, 1, 2, 3, 4, 5, 6, 7] },
    { id: '3-4', kind: 'learn', title: 'Ra khơi' },
    { id: '3-5', kind: 'learn', title: 'Câu cá, ăn hải sản' },
    { id: '3-m2', kind: 'mix', title: 'Ôn tập', units: ['3-4', '3-5'] },
    { id: '3-6', kind: 'learn', title: 'Chiều tà trên thuyền' },
    { id: '3-7', kind: 'learn', title: 'Ngày trước trên đất liền' },
    { id: '3-m3', kind: 'mix', title: 'Ôn tập', units: ['3-6', '3-7'] },
    { id: '3-g2', kind: 'comic', title: 'Ghép truyện: Những ngày vui trên biển', ids: [8, 9, 10, 11, 12, 13, 14, 15, 16] },
    { id: '3-8', kind: 'learn', title: 'Chớ xuống biển' },
    { id: '3-9', kind: 'learn', title: 'Đêm sấm chớp' },
    { id: '3-m4', kind: 'mix', title: 'Ôn tập', units: ['3-8', '3-9'] },
    { id: '3-g3', kind: 'comic', title: 'Ghép truyện: Đêm giông bão', ids: [17, 18, 19, 20, 21] },
    { id: '3-10', kind: 'learn', title: 'Về tới nhà' },
    { id: '3-11', kind: 'learn', title: 'Đời người có lựa chọn' },
    { id: '3-m5', kind: 'mix', title: 'Ôn tập', units: ['3-10', '3-11'] },
    { id: '3-g4', kind: 'comic', title: 'Ghép truyện: Chặng tiếp theo', ids: [22, 23, 24, 25, 26, 27] },
    { id: '3-t', kind: 'test', title: 'Kiểm tra cuối bài 3' }
  ];

  CH3.SESSIONS = [
    /* ---------- Tập 1 · câu 1–2 ---------- */
    { id: '3-1', title: 'Công việc ổn định', sub: '4 từ mới', thumb: 'c3_rail', words: ['工人', '稳定', '待遇', '发愁'], screens: [
      { t: 'predict', scene: 'c3_sailHope', key: 'c3key', q: 'Bài này tên là “Đời người có lựa chọn, mọi thứ có thể đổi thay”. Theo bạn, người trong truyện sẽ chọn gì?', opts: ['Bỏ cuộc sống yên ổn để đi làm điều mình mơ ước', 'Giữ công việc cũ, sống yên ổn cả đời', 'Chuyển sang một công ty khác lương cao hơn'] },
      { t: 'story', scene: 'c3_rail', lines: [B(0)] },
      { t: 'word', id: '工人', scene: 'c3_worker' },
      { t: 'word', id: '稳定', scene: 'c3_steady' },
      hearOf('稳定'),
      { t: 'word', id: '待遇', scene: 'c3_pay' },
      cl('待遇', 'c3_rail', '翟峰和妻子都是铁路工人，工作稳定、___不错。', 'Anh Phong và vợ đều là công nhân đường sắt, công việc ổn định, đãi ngộ khá tốt.', '翟峰和妻子都是铁路工人，工作稳定、待遇不错。', '待遇',
        [['工人', '工人 là người (công nhân). Câu đang kể về công việc của hai người: ổn định, và lương, chế độ khá tốt: 待遇不错.'], ['担心', '担心 là động từ “lo lắng”; 担心不错 không có nghĩa.']],
        '<b>待遇不错</b> = đãi ngộ khá tốt (lương, thưởng, chế độ). Đi cặp với <b>工作稳定</b> = việc ổn định.', 'Chọn từ điền vào chỗ trống (câu trong bài):'),
      { t: 'word', id: '发愁', scene: 'c3_worry' },
      cl('发愁', 'c3_examWorry', '考试快到了，他每天都为考试___。', 'Sắp thi rồi, ngày nào anh ấy cũng lo âu vì chuyện thi cử.', '考试快到了，他每天都为考试发愁。', '发愁',
        [['稳定', '稳定 là tính từ “ổn định”; lo vì chuyện gì là <b>为…发愁</b>.'], ['待遇', '待遇 là danh từ “đãi ngộ”; sau 为考试 cần một động từ: 发愁.']],
        '<b>为 + việc + 发愁</b> = lo âu vì chuyện gì: 为考试发愁, 为生活发愁 (trong bài).'),
      { t: 'story', scene: 'c3_comfyHome', lines: [B(1)] },
      { t: 'tf', scene: 'c3_comfyHome', w: ['发愁'], zh: '翟峰一家没有房子，每天都为生活发愁。', vi: 'Nhà anh Phong không có nhà ở, ngày nào cũng lo chuyện cơm áo.', ok: false,
        why: 'Câu trong bài: <b>他们有房有车，从不用为生活发愁</b> = họ có nhà có xe, chưa bao giờ phải lo chuyện cơm áo.' },
      { t: 'say', mode: 'echo', i: 1 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['工人', '稳定', '待遇', '发愁'], say: [B(0), B(1)],
        tease: { scene: 'c3_dreamer', vi: 'việc ổn định, có nhà có xe… nhưng anh Phong lại không thấy vui. Anh muốn gì?' } }
    ] },
    /* ---------- Tập 2 · câu 3–4 (câu 4 chia 2 màn ở dấu “：”) ---------- */
    { id: '3-2', title: 'Mê thuyền buồm', sub: '5 từ mới (3 từ chỉ cần nhận mặt chữ)', thumb: 'c3_tvBoat', words: ['平静', '帆船', '撞', '艘', '航行'], screens: [
      { t: 'story', scene: 'c3_dreamer', lines: [B(2)] },
      { t: 'word', id: '平静', scene: 'c3_calmSea' },
      cl('平静', 'c3_calmSea', '风停了，海面又变得很___。', 'Gió ngừng rồi, mặt biển lại trở nên rất yên ả.', '风停了，海面又变得很平静。', '平静',
        [['紧张', '紧张 = căng thẳng, không tả mặt biển. Gió ngừng (风停了) thì biển lặng: 平静.'], ['发愁', '发愁 là động từ “lo âu”, dùng cho người.']],
        '<b>海面很平静</b> = mặt biển yên ả. Cũng nói <b>心情平静</b> (lòng bình tĩnh), <b>平静的生活</b> (cuộc sống yên ả, trong bài).'),
      { t: 'story', scene: 'c3_tvBoat', lines: [B(3)] },
      { t: 'word', id: '帆船', scene: 'c3_sailboat' },
      { t: 'word', id: '撞', scene: 'c3_bump' },
      { t: 'pick', w: ['撞'], zh: '他走路看手机，撞到了一棵树。', vi: 'Anh ấy vừa đi vừa xem điện thoại, đâm sầm vào một cái cây.', prompt: PK, opts: [
        { sc: 'c3_bump', ok: 1 },
        { sc: 'c3_treeShade', why: 'Người này ngồi dưới gốc cây xem điện thoại, không đâm vào cây. Câu nghe: <b>撞到了一棵树</b>.' },
        { sc: 'c3_carBump', why: 'Đây là hai chiếc xe đâm nhau. Câu nghe nói <b>他走路</b> (anh ấy đang đi bộ) rồi đâm vào cây.' }],
        teach: '<b>撞到 + vật</b> = đâm vào cái gì. Trong bài, 撞 dùng theo nghĩa bóng: <b>撞开“世界之门”</b> = phá tung “cánh cửa ra thế giới”.' },
      { t: 'story', scene: 'c3_openSea', lines: [B(4)] },
      { t: 'word', id: '艘', scene: 'c3_boats' },
      { t: 'word', id: '航行', scene: 'c3_voyage' },
      cl('艘', 'c3_boats', '海上有两___帆船。', 'Trên biển có hai chiếc thuyền buồm.', '海上有两艘帆船。', '艘',
        [['辆', '辆 là lượng từ cho xe (一辆车); tàu thuyền dùng 艘.'], ['张', '张 dùng cho vật mỏng, phẳng (一张纸, 一张床).']],
        '<b>艘</b> (có bộ 舟 thuyền) chỉ dùng cho tàu thuyền: 一艘船, 两艘帆船. Trong bài: <b>只要有一艘船</b>.'),
      hearOf('航行'),
      { t: 'say', mode: 'echo', i: 2 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['平静', '帆船', '撞', '艘', '航行'], say: [B(2), B(3), B(4)],
        tease: { scene: 'c3_sellBuy', vi: 'muốn có thuyền thì phải có tiền. Hai vợ chồng lấy đâu ra tiền?' } }
    ] },
    /* ---------- Tập 3 · câu 5–7 · ngữ pháp 包括 ---------- */
    { id: '3-3', title: 'Bán nhà mua thuyền', sub: '5 từ mới và bài học về 包括', thumb: 'c3_sellBuy', words: ['积蓄', '二手', '彩虹', '包括', '疯'], screens: [
      { t: 'story', scene: 'c3_sellBuy', lines: [B(5)] },
      { t: 'word', id: '积蓄', scene: 'c3_piggy' },
      { t: 'word', id: '二手', scene: 'c3_usedCar' },
      { t: 'pick', w: ['二手'], zh: '我买了一辆二手车，很便宜。', vi: 'Mình mua một chiếc xe cũ, rất rẻ.', prompt: PK, opts: [
        { sc: 'c3_usedCar', ok: 1 },
        { sc: 'c3_newCar', why: 'Chiếc xe này mới tinh, còn thắt nơ. <b>二手车</b> = xe cũ, đã có người dùng, nên mới <b>很便宜</b> (rất rẻ).' },
        { sc: 'c3_oldBooks', why: 'Đây là sách cũ (二手书). Câu nghe nói <b>一辆二手车</b>: một chiếc xe.' }],
        teach: '<b>二手 + danh từ</b> = đồ cũ: 二手车, 二手书, <b>二手船</b> (trong bài).' },
      { t: 'word', id: '彩虹', scene: 'c3_rainbow' },
      cl('彩虹', 'c3_rainbow', '雨停了，天上出现了一道___。', 'Mưa tạnh, trên trời hiện ra một dải cầu vồng.', '雨停了，天上出现了一道彩虹。', '彩虹',
        [['帆船', '帆船 là thuyền buồm, không hiện ra trên trời.'], ['积蓄', '积蓄 là tiền để dành.']],
        '<b>一道彩虹</b> = một dải cầu vồng. Trong bài, anh Phong đặt tên thuyền là <b>“彩虹号”</b> (chiếc “Cầu Vồng”).'),
      { t: 'story', scene: 'c3_studyMap', lines: [B(6)] },
      { t: 'story', scene: 'c3_crazyTalk', lines: [B(7)] },
      { t: 'word', id: '包括', scene: 'c3_include' },
      cl('包括', 'c3_include', '我们班所有人，___老师，都去看电影了。', 'Tất cả lớp mình, kể cả cô giáo, đều đi xem phim.', '我们班所有人，包括老师，都去看电影了。', '包括',
        [['一起', '一起 đứng trước động từ (一起去); không đứng trước một người để nói “kể cả ai”.'], ['从', '从 = từ (nơi nào, lúc nào); 从老师 không có nghĩa “kể cả cô giáo”.']],
        '<b>包括 X，所有人都…</b> = kể cả X, ai cũng…. Trong bài: <b>包括翟峰的父母，所有人都觉得……</b> (kể cả ba mẹ anh Phong, ai cũng cho rằng…). 包括 còn dùng để kể các phần: 这个价格包括早饭 (giá này gồm bữa sáng).'),
      { t: 'word', id: '疯', scene: 'c3_coldSwim' },
      hearOf('疯'),
      { t: 'say', mode: 'echo', i: 6 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['积蓄', '二手', '彩虹', '包括', '疯'], say: [B(5), B(6), B(7)],
        tease: { scene: 'c3_departure', vi: 'mặc kệ mọi người can, một ngày tháng 11 cả nhà ra khơi…' } }
    ] },
    /* ---------- Ôn tập 1 (sau tập 3, ngắn): 14 từ của tập 1–3 + 1 từ cũ của Bài 1–2 (~20%); ext = thẻ mở rộng 包括 ---------- */
    { id: '3-m1', mix: 1, after: ['3-1', '3-2', '3-3'], ch1: 1, max: 6, title: 'Ôn tập', sub: 'Các từ của tập 1–3, thêm từ cũ', thumb: 'cup', words: [], screens: [],
      ext: [
        { t: 'spot', w: ['包括'], chunks: ['这个价格', '一起', '早饭和', '晚饭。'], bad: 1, fix: '包括', full: '这个价格包括早饭和晚饭。', vi: 'Giá này bao gồm bữa sáng và bữa tối.', prompt: 'Thẻ mở rộng · Tìm chỗ sai rồi sửa:',
          teach: '<b>包括 + các phần</b> = bao gồm: 这个价格包括早饭和晚饭. Còn <b>包括 X，所有人都…</b> = kể cả X (trong bài).' }
      ] },
    /* ---------- Tập 4 · câu 8–10 ---------- */
    { id: '3-4', title: 'Ra khơi', sub: '3 từ mới', thumb: 'c3_departure', words: ['辞职', '驾驶', '轮流'], screens: [
      { t: 'story', scene: 'c3_departure', lines: [B(8)] },
      { t: 'word', id: '辞职', scene: 'c3_quit' },
      { t: 'order', w: ['辞职'], zh: '她辞了职，在家照顾孩子。', vi: 'Cô ấy thôi việc, ở nhà chăm con.', chunks: ['她', '辞了职', '在家', '照顾孩子'],
        teach: '<b>辞职</b> tách được: 辞 + 了 + 职. Trong bài: <b>辞了职的翟峰</b> = anh Phong đã thôi việc.' },
      { t: 'word', id: '驾驶', scene: 'c3_steer' },
      cl('驾驶', 'c3_steer', '他第一次___帆船出海，有点儿紧张。', 'Lần đầu lái thuyền buồm ra khơi, anh ấy hơi căng thẳng.', '他第一次驾驶帆船出海，有点儿紧张。', '驾驶',
        [['航行', '航行 = (tàu thuyền) đi trên biển, không có tân ngữ: không nói 航行帆船. Người cầm lái thì 驾驶帆船.'], ['辞职', '辞职 = thôi việc, không đi với 帆船.']],
        '<b>驾驶 + 帆船 / 汽车 / 飞机</b> = lái (văn viết của 开). Trong bài: <b>第一次驾驶帆船出海了</b>.'),
      { t: 'story', scene: 'c3_takeTurns', lines: [B(9)] },
      { t: 'word', id: '轮流', scene: 'c3_takeTurns' },
      cl('轮流', 'c3_caring', '我和哥哥___照顾生病的奶奶。', 'Mình và anh trai thay phiên nhau chăm sóc bà nội bị ốm.', '我和哥哥轮流照顾生病的奶奶。', '轮流',
        [['驾驶', '驾驶 = lái (tàu, xe), không đi với 照顾.'], ['包括', '包括 = bao gồm, không đứng trước động từ 照顾.']],
        '<b>轮流 + động từ</b> = thay phiên nhau làm: <b>轮流驾船</b> (trong bài), 轮流休息, 轮流照看.'),
      { t: 'story', scene: 'c3_girlDraw', lines: [B(10)] },
      { t: 'tf', scene: 'c3_girlDraw', w: ['轮流'], zh: '在船上，女儿每天都要帮爸爸驾船。', vi: 'Trên thuyền, ngày nào con gái cũng phải giúp ba lái thuyền.', ok: false,
        why: 'Người lái thuyền là hai vợ chồng: <b>翟峰和妻子轮流驾船</b>. Con gái thì <b>在船上看书、学习、画画儿</b>.' },
      hearOf('轮流'),
      { t: 'say', mode: 'echo', i: 9 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['辞职', '驾驶', '轮流'], say: [B(8), B(9), B(10)],
        tease: { scene: 'c3_swimFish', vi: 'buổi chiều, biển lặng. Cả nhà làm gì trên biển?' } }
    ] },
    /* ---------- Tập 5 · câu 11–12 ---------- */
    { id: '3-5', title: 'Câu cá, ăn hải sản', sub: '3 từ mới', thumb: 'c3_seafoodDinner', words: ['钓', '顿', '海鲜'], screens: [
      { t: 'story', scene: 'c3_swimFish', lines: [B(11)] },
      { t: 'word', id: '钓', scene: 'c3_fishing' },
      { t: 'pick', w: ['钓'], zh: '爷爷每个周末都去河边钓鱼。', vi: 'Cuối tuần nào ông nội cũng ra bờ sông câu cá.', prompt: PK, opts: [
        { sc: 'c3_grandpaFish', ok: 1 },
        { sc: 'c3_grandpaSwim', why: 'Ông đang bơi dưới sông (游泳). Câu nghe: <b>去河边钓鱼</b> = ra bờ sông câu cá.' },
        { sc: 'c3_buyFish', why: 'Ông đang mua cá ở chợ. 钓鱼 = tự câu lấy cá bằng cần câu.' }],
        teach: '<b>钓鱼</b> = câu cá. Trong bài: <b>下海游泳或者钓鱼</b> = xuống biển bơi hoặc câu cá.' },
      { t: 'story', scene: 'c3_seafoodDinner', lines: [B(12)] },
      { t: 'word', id: '顿', scene: 'c3_meal' },
      cl('顿', 'c3_meal', '今天晚上我请你吃一___饭。', 'Tối nay mình mời bạn một bữa cơm.', '今天晚上我请你吃一顿饭。', '顿',
        [['艘', '艘 chỉ dùng cho tàu thuyền (一艘船).'], ['张', '张 dùng cho vật mỏng, phẳng (一张纸).']],
        '<b>一顿饭</b> = một bữa cơm: 顿 là lượng từ của bữa ăn.'),
      { t: 'word', id: '海鲜', scene: 'c3_seafood' },
      cl('海鲜', 'c3_seafood', '住在海边的人常常吃___。', 'Người sống ở ven biển thường ăn hải sản.', '住在海边的人常常吃海鲜。', '海鲜',
        [['帆船', '帆船 là thuyền buồm, không ăn được.'], ['彩虹', '彩虹 là cầu vồng.']],
        '<b>吃海鲜</b> = ăn hải sản. 鲜 = tươi.'),
      { t: 'tf', scene: 'c3_seafoodDinner', w: ['海鲜'], zh: '妻子每天都去饭馆给全家人买海鲜。', vi: 'Ngày nào người vợ cũng ra quán mua hải sản cho cả nhà.', ok: false,
        why: 'Người vợ tự nấu: <b>妻子会给全家人做一顿美味的海鲜</b>. Giữa biển làm gì có quán ăn.' },
      { t: 'type', w: ['顿'], zh: '一顿饭', vi: 'một bữa cơm', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      hearOf('海鲜'),
      { t: 'say', mode: 'echo', i: 12 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['钓', '顿', '海鲜'], say: [B(11), B(12)],
        tease: { scene: 'c3_sunsetFamily', vi: 'mặt trời sắp lặn. Lúc nào là lúc cả nhà thích nhất?' } }
    ] },
    /* ---------- Ôn tập 2 (giữa đoạn C1): 6 từ của tập 4–5 + từ yếu của tập 1–3 + 2 từ cũ Bài 1–2 ---------- */
    { id: '3-m2', mix: 1, after: ['3-4', '3-5'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 4–5, thêm từ cũ', thumb: 'cup', words: [], screens: [] },
    /* ---------- Tập 6 · câu 13–14 · 舒适 khác 舒服 ---------- */
    { id: '3-6', title: 'Chiều tà trên thuyền', sub: '3 từ mới và 舒适 khác 舒服', thumb: 'c3_sunsetFamily', words: ['傍晚', '舒适', '干活儿'], screens: [
      { t: 'story', scene: 'c3_sunsetFamily', lines: [B(13)] },
      { t: 'word', id: '傍晚', scene: 'c3_dusk' },
      cl('傍晚', 'c3_dusk', '___的时候，太阳快要下山了。', 'Lúc chạng vạng, mặt trời sắp lặn.', '傍晚的时候，太阳快要下山了。', '傍晚',
        [['早上', '早上 là buổi sáng; mặt trời sắp lặn (下山) là lúc chạng vạng.'], ['中午', '中午 là buổi trưa, mặt trời còn ở trên cao.']],
        '<b>傍晚</b> = lúc mặt trời sắp lặn, trước 晚上 (buổi tối).'),
      { t: 'word', id: '舒适', scene: 'c3_comfyRoom' },
      cl('舒适', 'c3_upset', '听了他的话，我心里很不___。', 'Nghe anh ta nói xong, trong lòng mình rất khó chịu.', '听了他的话，我心里很不舒服。', '舒服',
        [['舒适', '舒适 (văn viết) nói môi trường, căn phòng; cảm giác trong lòng mình là 舒服: 心里不舒服.'], ['稳定', '稳定 nói công việc, thu nhập; không tả cảm giác trong lòng.']],
        '<b>舒适</b> và <b>舒服</b> đều là dễ chịu. <b>舒适</b>: văn viết, môi trường (舒适的房间, 舒适的生活). <b>舒服</b>: khẩu ngữ, cảm giác của người (我今天不舒服, 心里不舒服), lặp được: 舒舒服服.', '舒适 hay 舒服? Chọn từ điền vào chỗ trống:'),
      { t: 'story', scene: 'c3_movieNight', lines: [B(14)] },
      { t: 'word', id: '干活儿', scene: 'c3_chores' },
      { t: 'order', w: ['干活儿'], zh: '干完活儿，我们一起去吃饭吧。', vi: 'Làm xong việc, tụi mình cùng đi ăn nhé.', chunks: ['干完活儿', '我们', '一起', '去吃饭吧'],
        teach: '<b>干活儿</b> tách được: 干 + 完 + 活儿. Trong bài: <b>干完活儿，一家人坐在一起</b>.' },
      hearOf('舒适'),
      { t: 'tf', scene: 'c3_movieNight', w: ['傍晚'], zh: '傍晚，一家人坐在一起看电影、聊天儿。', vi: 'Chiều tà, cả nhà ngồi bên nhau xem phim, trò chuyện.', ok: true,
        why: 'Trong bài: <b>干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿</b>.' },
      { t: 'say', mode: 'read', i: 13 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['傍晚', '舒适', '干活儿'], say: [B(13), B(14)],
        tease: { scene: 'c3_separateRooms', vi: 'hồi còn ở trên đất liền, buổi tối nhà anh Phong thế nào?' } }
    ] },
    /* ---------- Tập 7 · câu 15–16 · ngữ pháp 各自 ---------- */
    { id: '3-7', title: 'Ngày trước trên đất liền', sub: '3 từ mới và bài học về 各自', thumb: 'c3_separateRooms', words: ['盼望', '陆地', '各自'], screens: [
      { t: 'story', scene: 'c3_dreamCome', lines: [B(15)] },
      { t: 'word', id: '盼望', scene: 'c3_waitNews' },
      cl('盼望', 'c3_waitNews', '孩子们天天___着过年。', 'Bọn trẻ ngày ngày mong đến Tết.', '孩子们天天盼望着过年。', '盼望',
        [['舒适', '舒适 là tính từ “dễ chịu”, không có tân ngữ 过年.'], ['干活儿', '干活儿 = làm việc; 干活儿着过年 không nói được.']],
        '<b>盼望 + （好）消息 / 过年 / 成功</b>. Trong bài: <b>是翟峰盼望已久的</b> = điều anh Phong mong mỏi đã lâu.'),
      { t: 'story', scene: 'c3_separateRooms', lines: [B(16)] },
      { t: 'word', id: '陆地', scene: 'c3_land' },
      cl('陆地', 'c3_land', '在海上航行了一个月，我们终于看到了___。', 'Đi trên biển một tháng, cuối cùng chúng tôi cũng nhìn thấy đất liền.', '在海上航行了一个月，我们终于看到了陆地。', '陆地',
        [['傍晚', '傍晚 là lúc chiều tối, không phải một nơi để “nhìn thấy”.'], ['舒适', '舒适 là tính từ “dễ chịu”, không làm tân ngữ của 看到.']],
        '<b>陆地</b> = đất liền, đối lập với 海上. Trong bài: <b>以前陆地上的夜晚</b> = những buổi tối trên đất liền ngày trước.'),
      { t: 'word', id: '各自', scene: 'c3_eachOwn' },
      cl('各自', 'c3_eachOwn', '下课以后，同学们___回家了。', 'Tan học, các bạn ai về nhà nấy.', '下课以后，同学们各自回家了。', '各自',
        [['陆地', '陆地 là danh từ “đất liền”, không đứng trước động từ 回家.'], ['盼望', '盼望 = mong; câu đã kể việc về nhà xong (了), không còn là “mong”.']],
        '<b>各自</b> đi cùng những người được nói tới: <b>同学们各自回家</b> (ai về nhà nấy), <b>他们在各自的房间</b> (trong bài: ai ở phòng nấy). Chủ ngữ phải là nhiều người.'),
      hearOf('各自'),
      { t: 'tf', scene: 'c3_separateRooms', w: ['陆地', '各自'], zh: '以前在陆地上，一家人晚上常常坐在一起聊天儿。', vi: 'Trước kia trên đất liền, buổi tối cả nhà thường ngồi bên nhau trò chuyện.', ok: false,
        why: 'Ngược lại: <b>以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流</b>. Phải ra biển cả nhà mới ngồi bên nhau.' },
      { t: 'type', w: ['盼望'], zh: '盼望好消息', vi: 'mong tin vui', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      { t: 'say', mode: 'read', i: 15 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['盼望', '陆地', '各自'], say: [B(15), B(16)],
        tease: { scene: 'c3_oldSaying', vi: 'người Trung Quốc có câu: lên núi thì được, nhưng biển thì…?' } }
    ] },
    /* ---------- Ôn tập 3 (sau tập 7): 6 từ của tập 6–7 + từ yếu; ext = 舒适 / 舒服 ---------- */
    { id: '3-m3', mix: 1, after: ['3-6', '3-7'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 6–7, thêm từ cũ', thumb: 'cup', words: [], screens: [],
      ext: [
        cl('舒适', 'c3_upset', '我今天有点儿不___，想早点儿睡。', 'Hôm nay mình hơi khó chịu trong người, muốn ngủ sớm một chút.', '我今天有点儿不舒服，想早点儿睡。', '舒服',
          [['舒适', '舒适 nói môi trường, đồ vật (舒适的房间); trong người khó chịu là 不舒服.'], ['稳定', '稳定 nói công việc, thu nhập; không tả cảm giác trong người.']],
          '<b>舒服</b> = cảm giác của người (khẩu ngữ); <b>舒适</b> = môi trường dễ chịu (văn viết).', 'Thẻ mở rộng · 舒适 hay 舒服?')
      ] },
    /* ---------- Tập 8 · câu 17–19 · ngữ pháp 勿, 时刻 ---------- */
    { id: '3-8', title: 'Chớ xuống biển', sub: '4 từ mới và bài học về 勿, 时刻', thumb: 'c3_fireLeak', words: ['勿', '时刻', '着火', '漏'], screens: [
      { t: 'story', scene: 'c3_oldSaying', lines: [B(17)] },
      { t: 'word', id: '勿', scene: 'c3_noEntry' },
      cl('勿', 'c3_library', '图书馆里请___大声说话。', 'Trong thư viện xin chớ nói to.', '图书馆里请勿大声说话。', '勿',
        [['没', '没 nói việc chưa xảy ra (没去); lời xin, lời cấm dùng 勿 (= 不要).'], ['不', 'Lời yêu cầu không nói 请不…; phải là 请勿 hoặc 请不要.']],
        '<b>勿</b> = 不要 (văn viết, biển báo): <b>请勿 + động từ</b>. Trong bài: <b>可上山，勿下海</b> = lên núi thì được, chớ xuống biển.'),
      { t: 'story', scene: 'c3_tenseNight', lines: [B(18)] },
      { t: 'word', id: '时刻', scene: 'c3_clockMoment' },
      cl('时刻', 'c3_clockMoment', '在最后___，他踢进了一个球。', 'Vào phút cuối, anh ấy sút vào một quả bóng.', '在最后时刻，他踢进了一个球。', '时刻',
        [['傍晚', '傍晚 là chiều tà trong ngày; “phút cuối” của trận đấu là 最后时刻.'], ['陆地', '陆地 là đất liền.']],
        '<b>时刻</b> (danh từ) = một lúc: 最后时刻, <b>美好的时刻</b> (trong bài). <b>时刻</b> (phó từ) = luôn luôn: 时刻提醒自己; lặp thành 时时刻刻.'),
      { t: 'story', scene: 'c3_fireLeak', lines: [B(19)] },
      { t: 'word', id: '着火', scene: 'c3_fire' },
      { t: 'word', id: '漏', scene: 'c3_leak' },
      cl('漏', 'c3_leak', '下雨了，房子又___水了。', 'Trời mưa, nhà lại dột rồi.', '下雨了，房子又漏水了。', '漏',
        [['着火', '着火 = bốc cháy; không đi với 水.'], ['钓', '钓 = câu (cá).']],
        '<b>漏水</b> = rò nước, dột. Trong bài: <b>船身着火、漏水</b>. 漏 + 光 / 掉 / 出来: rò hết, sót mất, rỉ ra.'),
      hearOf('着火'),
      { t: 'say', mode: 'read', i: 17 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['勿', '时刻', '着火', '漏'], say: [B(17), B(18), B(19)],
        tease: { scene: 'c3_storm', vi: 'đêm đó trời nổi giông. Cả nhà sợ nhất điều gì?' } }
    ] },
    /* ---------- Tập 9 · câu 20 (chia 2 màn ở dấu phẩy trước 因为) ---------- */
    { id: '3-9', title: 'Đêm sấm chớp', sub: '5 từ mới', thumb: 'c3_storm', words: ['雷', '随时', '闪电', '击', '拥抱'], screens: [
      { t: 'story', scene: 'c3_storm', lines: [B(20)] },
      { t: 'word', id: '雷', scene: 'c3_thunder' },
      { t: 'word', id: '闪电', scene: 'c3_lightning' },
      cl('闪电', 'c3_lightning', '天黑了，天上突然出现了一道___。', 'Trời tối rồi, trên trời bỗng loé lên một tia chớp.', '天黑了，天上突然出现了一道闪电。', '闪电',
        [['雷', '雷 là tiếng sấm, nghe chứ không “hiện ra một vệt”; 一道 đi với 闪电.'], ['彩虹', '彩虹 (cầu vồng) hiện ra khi có nắng sau mưa, không phải lúc trời tối.']],
        '<b>一道闪电</b> = một tia chớp. <b>打雷</b> = có sấm. Trong bài: <b>雷电交加</b> = sấm chớp đùng đùng.'),
      { t: 'story', scene: 'c3_hugStorm', lines: [B(21)] },
      { t: 'word', id: '随时', scene: 'c3_anytime' },
      cl('随时', 'c3_anytime', '有问题你___给我打电话。', 'Có gì bạn cứ gọi cho mình bất cứ lúc nào.', '有问题你随时给我打电话。', '随时',
        [['时刻', '时刻 làm phó từ là “luôn luôn” (时刻提醒自己); “cứ gọi lúc nào cũng được” là 随时.'], ['各自', '各自 = ai nấy; câu chỉ có một người (你).']],
        '<b>随时</b> = bất cứ lúc nào. Trong bài: chiếc thuyền nhỏ <b>随时有可能</b> bị tia chớp đánh trúng.'),
      { t: 'word', id: '击', scene: 'c3_strike' },
      { t: 'word', id: '拥抱', scene: 'c3_hug' },
      cl('拥抱', 'c3_hug', '见到多年不见的老朋友，他们紧紧地___在一起。', 'Gặp lại bạn cũ nhiều năm không gặp, họ ôm chặt lấy nhau.', '见到多年不见的老朋友，他们紧紧地拥抱在一起。', '拥抱',
        [['撞', '撞在一起 = đâm vào nhau (tai nạn); gặp bạn cũ thì ôm nhau: 拥抱在一起.'], ['击', '击 = đánh; 紧紧地击 không có nghĩa.']],
        '<b>紧紧（地）拥抱</b> = ôm chặt; <b>热情（地）拥抱</b> = ôm thắm thiết. Trong bài: <b>一家三口只能紧紧拥抱在一起</b>.'),
      hearOf('随时'),
      { t: 'say', mode: 'read', i: 20 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['雷', '随时', '闪电', '击', '拥抱'], say: [B(20), B(21)],
        tease: { scene: 'c3_homeAgain', vi: 'tám tháng trên biển đã qua. Cả nhà có về tới nhà không?' } }
    ] },
    /* ---------- Ôn tập 4 (sau tập 9): 9 từ của tập 8–9 + từ yếu; ext = 漏 + bổ ngữ ---------- */
    { id: '3-m4', mix: 1, after: ['3-8', '3-9'], extra: 2, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 8–9, thêm từ cũ', thumb: 'cup', words: [], screens: [],
      ext: [
        cl('漏', 'c3_drain', '杯子漏了，水都漏___了。', 'Cái cốc bị thủng, nước chảy hết rồi.', '杯子漏了，水都漏光了。', '光',
          [['开', '开 đi với 撞: 撞开 (đâm bật ra); nước rò hết là 漏光.'], ['倒', '倒 đi với 撞: 撞倒 (đâm ngã); 漏倒 không nói được.']],
          '<b>漏 + 光 / 掉 / 出来</b>: 漏光 (rò hết), 漏掉 (sót mất), 漏出来 (rỉ ra). <b>撞 + 倒 / 伤 / 断 / 开</b>.', 'Thẻ mở rộng · Chọn bổ ngữ đúng:')
      ] },
    /* ---------- Tập 10 · câu 21–22 · tên bài: 人生 ---------- */
    { id: '3-10', title: 'Về tới nhà', sub: '4 từ mới (1 từ chỉ cần nhận mặt chữ)', thumb: 'c3_homeAgain', words: ['海里', '人生', '台阶', '未来'], screens: [
      { t: 'story', scene: 'c3_homeAgain', lines: [B(22)] },
      { t: 'word', id: '海里', scene: 'c3_nauticalMile' },
      cl('海里', 'c3_nauticalMile', '我们的船已经航行了一千多___。', 'Thuyền của chúng tôi đã đi hơn một nghìn hải lý.', '我们的船已经航行了一千多海里。', '海里',
        [['艘', '艘 là lượng từ cho thuyền (一艘船), không đo quãng đường.'], ['顿', '顿 là lượng từ cho bữa ăn.']],
        '<b>số + 海里</b> = bao nhiêu hải lý: <b>4000多海里</b> (trong bài). Bẫy: <b>在海里</b> (sau 在) lại là “trong biển”: 在海里游泳.'),
      { t: 'tf', scene: 'c3_homeAgain', w: ['海里'], zh: '翟峰一家在海上航行了八年。', vi: 'Nhà anh Phong lênh đênh trên biển tám năm.', ok: false,
        why: 'Trong bài: <b>在经历了八个月、航行了4000多海里之后</b> = sau <b>tám tháng</b> (八个月), không phải tám năm.' },
      { t: 'story', scene: 'c3_stairs', lines: [B(23)] },
      { t: 'word', id: '人生', scene: 'c3_lifePath' },
      { t: 'word', id: '台阶', scene: 'c3_steps' },
      cl('台阶', 'c3_steps', '奶奶慢慢地走上___。', 'Bà nội chầm chậm bước lên bậc thềm.', '奶奶慢慢地走上台阶。', '台阶',
        [['海鲜', '海鲜 là hải sản, không bước lên được.'], ['闪电', '闪电 là tia chớp.']],
        '<b>走上台阶</b> = bước lên bậc thềm. Trong bài: đi biển là <b>人生道路上一段长长的台阶</b> = một đoạn bậc thang dài trên đường đời: mỗi bậc lại đưa anh lên cao thêm.'),
      { t: 'word', id: '未来', scene: 'c3_future' },
      cl('未来', 'c3_future', '我们都希望有一个美好的___。', 'Ai cũng mong có một tương lai tốt đẹp.', '我们都希望有一个美好的未来。', '未来',
        [['台阶', '台阶 là bậc thềm; điều người ta “mong có” là tương lai.'], ['顿', '顿 là lượng từ cho bữa ăn, không đứng sau 美好的.']],
        '<b>美好的未来</b> = tương lai tốt đẹp. Trong bài: <b>通向他想要的未来</b> = dẫn tới tương lai anh mong muốn.'),
      hearOf('人生'),
      { t: 'say', mode: 'read', i: 22 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['海里', '人生', '台阶', '未来'], say: [B(22), B(23)],
        tease: { scene: 'c3_coupleTalk', vi: 'về tới nhà rồi, anh Phong và vợ có thôi đi biển không?' } }
    ] },
    /* ---------- Tập 11 · câu 23–26 (câu 23–24 là một lời nói trong ngoặc kép) · đoạn kết ---------- */
    { id: '3-11', title: 'Đời người có lựa chọn', sub: '2 từ mới, đoạn kết', thumb: 'c3_choice', words: ['太太', '时代'], screens: [
      { t: 'story', scene: 'c3_coupleTalk', lines: [B(24)] },
      { t: 'word', id: '太太', scene: 'c3_wife' },
      cl('太太', 'c3_wife', '这是我___，她也是老师。', 'Đây là vợ tôi, cô ấy cũng là giáo viên.', '这是我太太，她也是老师。', '太太',
        [['工人', '工人 = công nhân, là nghề, không phải người thân để giới thiệu “đây là … của tôi”.'], ['海鲜', '海鲜 = hải sản; 她也是老师 cho thấy đang nói về một người.']],
        '<b>我太太</b> = vợ tôi (lịch sự). Ôn Bài 1: <b>妻子</b> (văn viết), <b>老婆</b> (khẩu ngữ). Trong bài, anh Phong nói: <b>我和太太</b>.'),
      { t: 'word', id: '时代', scene: 'c3_era' },
      cl('时代', 'c3_era', '___变了，人们的生活也变了。', 'Thời đại đã khác, cuộc sống của mọi người cũng khác.', '时代变了，人们的生活也变了。', '时代',
        [['台阶', '台阶 là bậc thềm.'], ['太太', '太太 là vợ; vợ thay đổi không làm cuộc sống của “mọi người” thay đổi.']],
        '<b>这个时代</b> = thời đại này; <b>时代变了</b> = thời thế đã khác.'),
      { t: 'story', scene: 'c3_choice', lines: [B(25)] },
      { t: 'tf', scene: 'c3_choice', w: ['人生'], zh: '回家以后，翟峰觉得再也不想出海了。', vi: 'Về nhà rồi, anh Phong thấy không bao giờ muốn ra khơi nữa.', ok: false,
        why: 'Anh Phong tin <b>一切只是开始</b> (mọi thứ chỉ mới bắt đầu), và nói <b>人生有选择，一切可改变</b>. Chặng tới, cả nhà muốn đi Úc và New Zealand.' },
      { t: 'story', scene: 'c3_nextStop', lines: [B(26)] },
      { t: 'story', scene: 'c3_northWind', lines: [B(27)] },
      { t: 'type', w: ['人生'], zh: '人生有选择', vi: 'đời người có lựa chọn', prompt: 'Nghe và gõ lại bằng bàn phím pinyin:' },
      { t: 'tf', scene: 'c3_northWind', w: [], zh: '他们想等北风来了以后，再次出发。', vi: 'Họ muốn đợi gió bấc tới rồi lại lên đường.', ok: true,
        why: 'Trong bài: <b>等待今年11月的北风，北风南下之时，他们将再次出发</b>.' },
      { t: 'say', mode: 'read', i: 25 },   /* Nhắc lại (phiếu #5) */
      { t: 'album', words: ['太太', '时代'], say: [B(24), B(25), B(26), B(27)], recall: 'c3key',
        tease: { done: 1, scene: 'c3_sailHope', vi: 'Bạn đã học xong cả bài. Anh Phong đã chọn: bỏ cuộc sống yên ổn để ra biển, và cả nhà tìm lại được những buổi tối bên nhau. Từ nào còn lung lay thì vào “Ôn tập tổng hợp” nhé.' } }
    ] },
    /* ---------- Ôn tập 5 (sau tập 11): 6 từ của tập 10–11 + từ yếu cả bài; ext = bẫy 海里 ---------- */
    { id: '3-m5', mix: 1, after: ['3-10', '3-11'], extra: 3, ch1: 2, max: 9, title: 'Ôn tập', sub: 'Các từ của tập 10–11 và cả bài', thumb: 'cup', words: [], screens: [],
      ext: [
        { t: 'tf', scene: 'c3_nauticalMile', w: ['海里'], zh: '他们一共航行了四千多海里。', vi: 'Tổng cộng họ đã đi hơn bốn nghìn hải lý.', ok: true,
          why: 'Thẻ mở rộng · bẫy 海里: đứng sau con số (<b>四千多海里</b>) là <b>hải lý</b> (khoảng 1,85 km), không phải “trong biển”. Còn <b>在海里游泳</b> mới là bơi trong biển.' }
      ] }

  ];
  /* screens written as {ref: ['HEAR', word]} or {ref: ['QB', word, index]} are copied from CH3.LEARN / CH3.QB.
     Every file that brings one of those (learn.js, bank.js, story.js) calls this at its end, so the load order does not matter. */
  CH3.resolveRefs = function () {
    (CH3.SESSIONS || []).forEach(function (s) {
      s.screens = s.screens.map(function (sc) {
        if (!sc.ref) return sc;
        if (sc.ref[0] === 'HEAR' && CH3.LEARN && CH3.LEARN[sc.ref[1]]) { var x = CH3.LEARN[sc.ref[1]].hear; return { t: 'hear', w: [sc.ref[1]], s: x.s, opts: x.opts.slice(), why: x.why, whyNot: x.whyNot.slice() }; }
        if (sc.ref[0] === 'QB' && CH3.QB && CH3.QB[sc.ref[1]]) return JSON.parse(JSON.stringify(CH3.QB[sc.ref[1]][sc.ref[2]]));
        return sc;
      });
    });
  };
  CH3.resolveRefs();
})();

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

/* ===== Bài 3: question pools for the chapter test (Kiểm tra cuối bài 3). Same shape as Bài 2 TESTBANK (new sentences, not the ones in the units).
   u = the tập the item checks (for spot: the tập that teaches the right word w[0]; the result screen says which tập to look at again).
   hsk = items in HSK5 exam style: kind 'nghe' = a two-voice dialogue (hear with lines: female then male), 'doc' = a short passage with a blank (mc),
   'viet' = 完成句子, put the words in order (order). The test (3-t) is built by the app once every study unit and this bank exist. ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  CH3.TESTBANK = {
    tf: [
      { t: 'tf', scene: 'c3_rail', zh: '翟峰和妻子以前都是老师。', vi: 'Trước đây anh Phong và vợ đều là giáo viên.', ok: false,
        why: 'Trong bài: <b>翟峰和妻子都是铁路工人</b> = hai vợ chồng đều là công nhân đường sắt.', w: ['工人'], u: '3-1' },
      { t: 'tf', scene: 'c3_sellBuy', zh: '翟峰卖房卖车，买了一艘新船。', vi: 'Anh Phong bán nhà bán xe, mua một chiếc thuyền mới.', ok: false,
        why: 'Họ <b>买下了一艘二手船</b> = mua một chiếc thuyền <b>cũ</b>, vì không có tiền để dành (<b>没有积蓄</b>).', w: ['二手', '积蓄'], u: '3-3' },
      { t: 'tf', scene: 'c3_crazyTalk', zh: '出海以前，翟峰的父母很支持他。', vi: 'Trước khi ra khơi, ba mẹ anh Phong rất ủng hộ anh.', ok: false,
        why: '<b>包括翟峰的父母，所有人都觉得，翟峰“疯了”</b> = kể cả ba mẹ, ai cũng cho rằng anh “điên rồi”.', w: ['包括', '疯'], u: '3-3' },
      { t: 'tf', scene: 'c3_takeTurns', zh: '在船上，翟峰和妻子轮流驾船。', vi: 'Trên thuyền, anh Phong và vợ thay phiên nhau lái thuyền.', ok: true,
        why: 'Trong bài: <b>白天，翟峰和妻子轮流驾船</b>.', w: ['轮流', '驾驶'], u: '3-4' },
      { t: 'tf', scene: 'c3_separateRooms', zh: '以前在陆地上，一家人晚上都在各自的房间。', vi: 'Trước kia trên đất liền, buổi tối mỗi người trong nhà ở phòng riêng của mình.', ok: true,
        why: 'Trong bài: <b>以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流</b>.', w: ['陆地', '各自'], u: '3-7' },
      { t: 'tf', scene: 'c3_fireLeak', zh: '一路上，他们没有遇到什么危险。', vi: 'Suốt dọc đường, họ không gặp nguy hiểm gì.', ok: false,
        why: 'Ngược lại: họ <b>经历了船身着火、漏水等大大小小十多次险情</b> = hơn mười lần gặp nguy.', w: ['着火', '漏'], u: '3-8' },
      { t: 'tf', scene: 'c3_stairs', zh: '翟峰觉得，航海只是一个开始。', vi: 'Anh Phong thấy đi biển chỉ là một sự khởi đầu.', ok: true,
        why: 'Trong bài: <b>翟峰相信，一切只是开始</b>; đi biển là <b>一段长长的台阶，通向他想要的未来</b>.', w: ['人生', '未来'], u: '3-10' }
    ],
    spot: [
      { t: 'spot', chunks: ['今天晚上', '妈妈给我们做了', '一艘', '海鲜。'], bad: 2, fix: '一顿', full: '今天晚上妈妈给我们做了一顿海鲜。', vi: 'Tối nay mẹ nấu cho tụi mình một bữa hải sản.',
        teach: '<b>一顿 + 饭 / 海鲜</b> = một bữa. <b>艘</b> chỉ dùng cho tàu thuyền.', w: ['顿', '艘'], u: '3-5' },
      { t: 'spot', chunks: ['我们家所有人，', '一起', '我奶奶，', '都喜欢吃海鲜。'], bad: 1, fix: '包括', full: '我们家所有人，包括我奶奶，都喜欢吃海鲜。', vi: 'Cả nhà mình, kể cả bà nội, đều thích ăn hải sản.',
        teach: '<b>包括 X，所有人都…</b> = kể cả X, ai cũng…', w: ['包括'], u: '3-3' },
      { t: 'spot', chunks: ['图书馆里', '请没', '大声', '说话。'], bad: 1, fix: '请勿', full: '图书馆里请勿大声说话。', vi: 'Trong thư viện xin chớ nói to.',
        teach: '<b>请勿 + động từ</b> = xin đừng… (văn viết, biển báo). 没 dùng cho việc chưa xảy ra.', w: ['勿'], u: '3-8' },
      { t: 'spot', chunks: ['这家饭店的房间', '很', '平静，', '就是有点儿贵。'], bad: 2, fix: '舒适，', full: '这家饭店的房间很舒适，就是有点儿贵。', vi: 'Phòng ở khách sạn này rất thoải mái, chỉ hơi đắt.',
        teach: '<b>舒适的房间</b> = căn phòng dễ chịu. <b>平静</b> nói mặt biển, tâm trạng, cuộc sống.', w: ['舒适', '平静'], u: '3-6' },
      { t: 'spot', chunks: ['见到妈妈，', '孩子', '紧紧地', '撞着她。'], bad: 3, fix: '拥抱着她。', full: '见到妈妈，孩子紧紧地拥抱着她。', vi: 'Thấy mẹ, đứa bé ôm chặt lấy mẹ.',
        teach: '<b>紧紧（地）拥抱</b> = ôm chặt. <b>撞</b> = đâm vào.', w: ['拥抱', '撞'], u: '3-9' }
    ],
    hsk: [
      /* nghe: một đoạn hội thoại ngắn, nữ hỏi, nam đáp */
      { t: 'hear', kind: 'nghe', w: ['辞职'], u: '3-4', lines: [{ v: 'f', zh: '听说你辞职了？' }, { v: 'm', zh: '对，我想先休息半年，然后去旅行。' }],
        opts: ['Anh ấy đã thôi việc, muốn nghỉ nửa năm rồi đi du lịch.', 'Anh ấy đã thôi việc, muốn nghỉ một năm rồi đi du lịch.', 'Anh ấy chưa thôi việc, muốn nghỉ nửa năm rồi đi du lịch.'],
        why: 'Người hỏi: <b>听说你辞职了？</b> (nghe nói anh thôi việc rồi?). Người đáp: <b>对</b> (đúng), <b>先休息半年，然后去旅行</b> (nghỉ nửa năm trước, rồi đi du lịch).',
        whyNot: ['', '半年 = nửa năm, không phải một năm.', '对 = đúng vậy: anh ấy đã thôi việc rồi.'] },
      { t: 'hear', kind: 'nghe', w: ['顿', '海鲜'], u: '3-5', lines: [{ v: 'f', zh: '今天晚上我们吃什么？' }, { v: 'm', zh: '去海边吃一顿海鲜吧，我请你。' }],
        opts: ['Tối nay ra ven biển ăn một bữa hải sản, anh ấy mời.', 'Tối nay ra ven biển ăn một bữa hải sản, mỗi người tự trả.', 'Tối nay ở nhà ăn một bữa hải sản, anh ấy mời.'],
        why: '<b>去海边</b> = ra ven biển. <b>吃一顿海鲜</b> = ăn một bữa hải sản. <b>我请你</b> = mình mời bạn.',
        whyNot: ['', '我请你 = anh ấy mời (anh ấy trả tiền).', '去海边 = ra ven biển, không phải ăn ở nhà.'] },
      { t: 'hear', kind: 'nghe', w: ['雷', '随时'], u: '3-9', lines: [{ v: 'f', zh: '外面打雷了，你还要出去吗？' }, { v: 'm', zh: '不出去了，随时可能下大雨。' }],
        opts: ['Ngoài trời có sấm, anh ấy không ra ngoài nữa vì mưa to có thể đổ xuống bất cứ lúc nào.', 'Ngoài trời có sấm, anh ấy vẫn ra ngoài dù mưa to có thể đổ xuống bất cứ lúc nào.', 'Ngoài trời có sấm, anh ấy không ra ngoài nữa vì tuyết có thể rơi bất cứ lúc nào.'],
        why: '<b>打雷了</b> = có sấm rồi. <b>不出去了</b> = không ra ngoài nữa. <b>随时可能下大雨</b> = mưa to có thể đổ xuống bất cứ lúc nào.',
        whyNot: ['', '不出去了 = không ra ngoài nữa.', '下大雨 = mưa to, không phải tuyết.'] },
      /* đọc: đoạn văn có chỗ trống */
      { t: 'mc', kind: 'doc', w: ['稳定'], u: '3-1', scene: 'c3_quit', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['我哥哥大学毕业以后，在一家公司工作了五年。他的工作很___，待遇也不错，可是他总觉得生活太平静了。去年他辞了职，去外地开了一家咖啡店。', 'Anh trai mình tốt nghiệp đại học xong làm ở một công ty năm năm. Công việc của anh rất ổn định, đãi ngộ cũng khá, nhưng anh luôn thấy cuộc sống yên ả quá. Năm ngoái anh thôi việc, đi nơi khác mở một quán cà phê.'],
        full: '我哥哥大学毕业以后，在一家公司工作了五年。他的工作很稳定，待遇也不错，可是他总觉得生活太平静了。去年他辞了职，去外地开了一家咖啡店。',
        opts: [{ t: '稳定', ok: 1 }, { t: '疯', note: '疯 = điên; đoạn văn đang khen công việc (待遇也不错).' }, { t: '盼望', note: '盼望 là động từ “mong”, không đứng sau 很 để tả công việc.' }],
        teach: '<b>工作很稳定</b> = công việc rất ổn định; đi đôi với <b>待遇也不错</b>. Nhưng ổn định quá thì anh thấy <b>生活太平静了</b>.' },
      { t: 'mc', kind: 'doc', w: ['各自'], u: '3-7', scene: 'c3_separateRooms', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['以前我们一家人住在城里，晚上大家都在___的房间里看手机，很少说话。今年我们搬到了农村，每天晚上一起吃饭、聊天儿，这样的生活是我盼望已久的。', 'Trước kia cả nhà mình sống ở thành phố, buổi tối ai cũng ở trong phòng riêng xem điện thoại, ít khi nói chuyện. Năm nay nhà mình chuyển về nông thôn, tối nào cũng cùng ăn cơm, trò chuyện; cuộc sống như thế là điều mình mong mỏi đã lâu.'],
        full: '以前我们一家人住在城里，晚上大家都在各自的房间里看手机，很少说话。今年我们搬到了农村，每天晚上一起吃饭、聊天儿，这样的生活是我盼望已久的。',
        opts: [{ t: '各自', ok: 1 }, { t: '轮流', note: '轮流 = thay phiên, phải đứng trước động từ (轮流开车), không đứng trước 的房间.' }, { t: '随时', note: '随时 = bất cứ lúc nào, là phó từ, không đứng trước 的 + danh từ.' }],
        teach: '<b>各自的房间</b> = phòng riêng của mỗi người (giống trong bài).' },
      { t: 'mc', kind: 'doc', w: ['勿'], u: '3-8', scene: 'c3_oldSaying', prompt: 'Đọc đoạn văn, chọn từ điền vào chỗ trống:',
        say: ['中国有句老话：“可上山，勿下海。”意思是去山上没问题，可是___去海上，因为海上太危险了。', 'Trung Quốc có câu nói xưa: “Lên núi thì được, chớ xuống biển.” Nghĩa là lên núi thì không sao, nhưng đừng ra biển, vì trên biển nguy hiểm quá.'],
        full: '中国有句老话：“可上山，勿下海。”意思是去山上没问题，可是不要去海上，因为海上太危险了。',
        opts: [{ t: '不要', ok: 1 }, { t: '一定要', note: '一定要 = nhất định phải, ngược nghĩa với 勿 (chớ, đừng).' }, { t: '可以', note: '可以 = được phép; còn 勿 là “chớ, đừng”.' }],
        teach: '<b>勿</b> = <b>不要</b> (văn viết): 勿下海 = 不要去海上.' },
      /* viết: sắp xếp thành câu */
      { t: 'order', kind: 'viet', w: ['轮流', '驾驶'], u: '3-4', zh: '白天他们轮流驾驶帆船。', vi: 'Ban ngày họ thay phiên nhau lái thuyền buồm.', chunks: ['白天', '他们', '轮流驾驶', '帆船'] },
      { t: 'order', kind: 'viet', w: ['傍晚', '舒适'], u: '3-6', zh: '傍晚的海边非常舒适。', vi: 'Bờ biển lúc chiều tà rất dễ chịu.', chunks: ['傍晚的', '海边', '非常', '舒适'] },
      { t: 'order', kind: 'viet', w: ['拥抱'], u: '3-9', zh: '他们紧紧地拥抱在一起。', vi: 'Họ ôm chặt lấy nhau.', chunks: ['他们', '紧紧地', '拥抱', '在一起'] },
      { t: 'order', kind: 'viet', w: ['人生', '未来'], u: '3-10', zh: '人生有很多选择，未来可以改变。', vi: 'Đời người có nhiều lựa chọn, tương lai có thể thay đổi.', chunks: ['人生', '有很多选择', '未来', '可以改变'] }
    ]
  };
})();

/* ===== Bài 3: new SVG scenes (viewBox 400x300), names start with c3_. Built with the Bài 1 kit helpers
   (C, R, Ci, Pa, Ln, Tx, G, person, sun, cloud, heart, clock, car, bubble, tear…) which are only called when a scene is drawn.
   Bài 2's c2_ scenes are not used: Bài 3 can be opened without Bài 2.
   Registered into SC / SCENE_LABEL when those exist; always also kept in CH3.SC / CH3.SCENE_LABEL. ===== */
var CH3 = window.CH3 || (window.CH3 = {});
(function () {
  var S = {}, L = {};
  /* ---- people of the story: 翟峰 (dad, short hair, cap when sailing), his wife, their daughter ---- */
  var feng = function (x, y, o) { return person(x, y, Object.assign({ hs: 'short', hair: C.hairD, shirt: '#2f6fa8', m: 'smile' }, o || {})); };
  var wife = function (x, y, o) { return person(x, y, Object.assign({ hs: 'bob', hair: '#5a3a2a', shirt: '#e0785a', m: 'smile' }, o || {})); };
  var girl = function (x, y, o) { return person(x, y, Object.assign({ hs: 'pony', hair: C.hairD, shirt: C.butter, m: 'grin', s: .4 }, o || {})); };
  /* ---- props ---- */
  var sky = function (c) { return R(0, 0, 400, 300, c || '#cfe9f5'); };
  var sea = function (y, c) {
    let w = Pa(`M0 ${y} L400 ${y} L400 300 L0 300Z`, c || '#3f8fc0');
    for (let i = 0; i < 6; i++) { const yy = y + 14 + i * 16; w += Pa(`M${(i % 2) * 30} ${yy} q15 -7 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0`, 'none', 'stroke="rgba(255,255,255,.45)" stroke-width="3" stroke-linecap="round"'); }
    return w;
  };
  var calm = function (y) { let w = Pa(`M0 ${y} L400 ${y} L400 300 L0 300Z`, '#6fb3d6'); for (let i = 0; i < 4; i++) w += Ln(40 + i * 80, y + 30 + i * 18, 110 + i * 80, y + 30 + i * 18, 'rgba(255,255,255,.55)', 3); return w; };
  var boat = function (x, y, s, o) {   /* sailboat: hull at (x, y), mast up; o.c = sail colour, o.rb = rainbow stripe on the hull, o.old = patches */
    o = o || {};
    return G(`translate(${x} ${y}) scale(${s || 1})`,
      Ln(0, 6, 0, -150, '#6b4a3a', 5) + Pa('M4 -146 L4 -10 L92 -10Z', o.c || '#fff', 'stroke="#c9d3df" stroke-width="2"') + Pa('M-4 -120 L-4 -14 L-64 -14Z', o.c2 || '#f4f1e8', 'stroke="#c9d3df" stroke-width="2"') +
      Pa('M-96 0 L104 0 L80 36 L-76 36Z', o.hull || '#b5532f') + R(-90, 2, 186, 8, 'rgba(255,255,255,.35)', 3) +
      (o.rb ? ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db', '#8e44ad'].map((c, i) => R(-60 + i * 22, 16, 20, 8, c, 2)).join('') : '') +
      (o.old ? R(-50, 18, 16, 10, '#8a6a4a', 2) + R(30, 22, 14, 9, '#8a6a4a', 2) + Pa('M60 -60 l10 8 l-6 6', 'none', 'stroke="#c9d3df" stroke-width="2"') : '') +
      Pa('M4 -150 L24 -144 L4 -138Z', C.red));
  };
  var ship = function (x, y, s, c) { return G(`translate(${x} ${y}) scale(${s || 1})`, Pa('M-70 0 L70 0 L56 24 L-56 24Z', c || '#4f7f8f') + R(-30, -26, 56, 26, '#fff', 3) + R(-22, -20, 10, 10, C.sky) + R(-6, -20, 10, 10, C.sky) + R(10, -20, 10, 10, C.sky) + R(0, -40, 10, 14, '#d94141')); };
  var rainbow = function (x, y, r, w) { return ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db', '#8e44ad'].map((c, i) => Pa(`M${x - r + i * w} ${y} A${r - i * w} ${r - i * w} 0 0 1 ${x + r - i * w} ${y}`, 'none', `stroke="${c}" stroke-width="${w}"`)).join(''); };
  var hardhat = function (c) { return Pa('M-30 -14 Q-30 -46 0 -46 Q30 -46 30 -14Z', c || '#f2c230') + R(-36, -16, 72, 8, '#e0ad1c', 4); };
  var capHat = function () { return Pa('M-28 -16 Q-28 -44 0 -44 Q28 -44 28 -16Z', '#1f4f7a') + R(-4, -20, 44, 7, '#1f4f7a', 3); };
  var train = function (x, y, s) {
    return G(`translate(${x} ${y}) scale(${s || 1})`, R(-150, -70, 300, 80, '#2f8f6f', 12) + R(-150, -70, 300, 14, '#257357', 7) + [-130, -80, -30, 20, 70].map(q => R(q, -50, 38, 30, '#cfe9f5', 4)).join('') +
      R(116, -50, 26, 56, '#ffd166', 3) + [-110, -40, 40, 110].map(q => Ci(q, 14, 13, '#3b4152') + Ci(q, 14, 5, '#9aa3b5')).join(''));
  };
  var rails = function (y) { let t = R(0, y, 400, 8, '#7a7f8c') + R(0, y + 22, 400, 8, '#7a7f8c'); for (let i = 0; i < 14; i++) t += R(i * 30 + 4, y - 4, 10, 38, '#8a6a4a', 2); return t; };
  var coin = function (x, y, r) { return Ci(x, y, r || 10, '#f2c230', 'stroke="#c99a1e" stroke-width="2"') + Ci(x, y, (r || 10) * .55, 'none', 'stroke="#c99a1e" stroke-width="1.5"'); };
  var cash = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-30, -16, 60, 32, '#7fbf7a', 4, 'stroke="#4f8f4a" stroke-width="2"') + Ci(0, 0, 9, 'none', 'stroke="#4f8f4a" stroke-width="2"')); };
  var tag = function (x, y, txt, c) { return G(`translate(${x} ${y})`, Pa('M0 0 L46 0 L58 14 L46 28 L0 28Z', c || '#fff', `stroke="${C.ink}" stroke-width="2"`) + Ci(48, 14, 3, C.ink) + Tx(22, 21, txt, 16, C.ink)); };
  var house = function (x, y, s, o) {
    o = o || {};
    return G(`translate(${x} ${y}) scale(${s || 1})`, R(-60, -40, 120, 80, o.wall || '#ecd7b4', 4) + Pa('M-74 -38 L0 -92 L74 -38Z', o.roof || '#a8584a') + R(-16, 0, 32, 40, C.brown, 3) +
      R(-50, -24, 26, 22, C.sky, 2, 'stroke="#fff" stroke-width="3"') + R(24, -24, 26, 22, C.sky, 2, 'stroke="#fff" stroke-width="3"'));
  };
  var tv = function (x, y, s) {   /* a TV showing a sailboat at sea */
    return G(`translate(${x} ${y}) scale(${s || 1})`, R(-70, -48, 140, 92, '#2b2f3a', 8) + R(-62, -40, 124, 40, '#cfe9f5') + R(-62, 0, 124, 36, '#3f8fc0') + Ln(-50, 14, -20, 14, 'rgba(255,255,255,.6)', 2) + Ln(10, 24, 44, 24, 'rgba(255,255,255,.6)', 2) +
      G('translate(0 6) scale(.24)', Ln(0, 6, 0, -150, '#6b4a3a', 8) + Pa('M4 -146 L4 -10 L92 -10Z', '#fff') + Pa('M-4 -120 L-4 -14 L-64 -14Z', '#f4f1e8') + Pa('M-96 0 L104 0 L80 36 L-76 36Z', '#b5532f')) + R(-20, 44, 40, 8, '#2b2f3a', 3));
  };
  var sofa = function (x, y, s, c) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-80, -20, 160, 44, c || '#bd6a5a', 14) + R(-80, -50, 160, 38, c || '#bd6a5a', 14) + R(-92, -30, 22, 56, '#a8584a', 10) + R(70, -30, 22, 56, '#a8584a', 10)); };
  var tree = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-8, -10, 16, 70, C.brown, 4) + Ci(0, -36, 36, '#4f9a55') + Ci(-26, -16, 24, '#58a55c') + Ci(26, -16, 24, '#58a55c')); };
  var stars = function (x, y) { return [[0, 0], [22, -14], [-20, -12]].map(([a, b]) => Pa(`M${x + a} ${y + b - 9} l3 6 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1Z`, C.butter, `stroke="${C.org}" stroke-width="1.5"`)).join(''); };
  var phone = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-9, -16, 18, 32, C.ink, 4) + R(-6, -12, 12, 22, C.sky, 2)); };
  var piggy = function (x, y, s) {
    return G(`translate(${x} ${y}) scale(${s || 1})`, `<ellipse cx="0" cy="0" rx="70" ry="52" fill="#f5a3b5"/>` + Ci(64, -4, 20, '#f5a3b5') + `<ellipse cx="78" cy="-2" rx="9" ry="12" fill="#e88aa0"/>` + Ci(76, -6, 2.5, '#b05a70') + Ci(76, 2, 2.5, '#b05a70') +
      Ci(44, -22, 4, C.ink) + Pa('M24 -46 L36 -66 L44 -42Z', '#e88aa0') + R(-40, 40, 16, 24, '#e88aa0', 4) + R(24, 40, 16, 24, '#e88aa0', 4) + R(-16, -52, 32, 7, '#b05a70', 3) + Pa('M-70 -6 q-18 -10 -10 -24', 'none', 'stroke="#e88aa0" stroke-width="5"'));
  };
  var bookPile = function (x, y, s, old) { const cs = old ? ['#a08a6a', '#8f7a5f', '#b39b78', '#8a7558'] : ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f']; return G(`translate(${x} ${y}) scale(${s || 1})`, cs.map((c, i) => R(-50 + (i % 2) * 8, -i * 18, 100, 16, c, 3) + (old ? Ln(-40 + (i % 2) * 8, -i * 18 + 8, 40, -i * 18 + 8, 'rgba(0,0,0,.25)', 1.5) : '')).join('')); };
  var compass = function (x, y, r) { return Ci(x, y, r, '#fff', `stroke="${C.ink}" stroke-width="3"`) + Pa(`M${x} ${y - r + 6} L${x + 6} ${y} L${x} ${y + r - 6} L${x - 6} ${y}Z`, C.red) + Ci(x, y, 3, C.ink); };
  var map = function (x, y, w, h) { return R(x, y, w, h, '#f4e4b8', 4, 'stroke="#c9a96a" stroke-width="2"') + Pa(`M${x + 12} ${y + h * .3} q${w * .2} -${h * .2} ${w * .4} 0 t${w * .3} ${h * .2}`, '#bfe0a8') + Pa(`M${x + 20} ${y + h * .75} L${x + w * .5} ${y + h * .55} L${x + w - 20} ${y + h * .7}`, 'none', `stroke="${C.red}" stroke-width="2.5" stroke-dasharray="6 5"`); };
  var swirl = function (x, y) { return Pa(`M${x} ${y} q10 -10 0 -20 q-14 -10 -20 6 q-4 20 18 24 q26 2 26 -24`, 'none', `stroke="${C.plum}" stroke-width="3.5" stroke-linecap="round"`); };
  var snow = function (n) { let s = ''; for (let i = 0; i < n; i++) s += Ci((i * 47 + 13) % 400, (i * 71 + 9) % 240, 2.5 + (i % 3), '#fff', 'opacity=".9"'); return s; };
  var sweat = function (x, y) { return tear(x, y) + tear(x + 12, y + 10); };
  var cal = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-30, -30, 60, 60, '#fff', 6, `stroke="${C.ink}" stroke-width="2.5"`) + R(-30, -30, 60, 16, C.red, 5) + [-14, 0, 14].map(a => [-2, 12].map(b => R(a - 5, b - 4, 10, 8, '#cfd8e2', 2)).join('')).join('')); };

  /* ---- path / predict ---- */
  S.c3_sailHope = () => sky('#ffe9c4') + sun(320, 70, 26) + rainbow(200, 190, 150, 10) + sea(200) + boat(200, 236, .95, { rb: 1 }) + feng(150, 176, { s: .3, hat: capHat() }) + wife(206, 178, { s: .28 }) + girl(250, 186, { s: .24 });
  L.c3_sailHope = 'Một nhà ba người trên chiếc thuyền buồm, cầu vồng phía sau';

  /* ---- tập 1 ---- */
  S.c3_rail = () => sky('#dfeefa') + R(0, 210, 400, 90, '#c9b79c') + rails(240) + train(210, 196, .9) +
    person(70, 170, { s: .5, hs: 'short', shirt: '#2f5f8f', collar: '#fff', hat: capHat(), m: 'grin' }) + person(340, 172, { s: .48, hs: 'bob', hair: '#5a3a2a', shirt: '#2f5f8f', collar: '#fff', hat: capHat(), m: 'grin' });
  L.c3_rail = 'Hai vợ chồng mặc đồng phục đứng cạnh đoàn tàu';
  S.c3_worker = () => R(0, 0, 400, 300, '#eaf2f8') + R(0, 236, 400, 64, '#c9b79c') + rails(250) + person(170, 120, { s: .9, hs: 'short', shirt: C.org, m: 'grin', hat: hardhat() }) +
    G('translate(268 190) rotate(-30)', R(-6, -50, 12, 80, '#8a96ad', 3) + Pa('M-16 -60 L16 -60 L10 -44 L-10 -44Z', '#8a96ad')) + hand(254, 196, 10);
  L.c3_worker = 'Một người công nhân đội mũ bảo hộ, tay cầm cờ lê';
  S.c3_steady = () => R(0, 0, 400, 300, '#f3f7ea') + Ln(40, 40, 40, 250, C.ink, 3) + Ln(40, 250, 370, 250, C.ink, 3) + Pa('M40 150 L370 150', 'none', `stroke="${C.green}" stroke-width="7" stroke-linecap="round"`) +
    [80, 150, 220, 290, 350].map(x => Ci(x, 150, 7, C.green)).join('') + [80, 150, 220, 290, 350].map(x => coin(x, 196, 11) + coin(x, 216, 11) + coin(x, 236, 11)).join('') + cal(330, 70, 1);
  L.c3_steady = 'Biểu đồ một đường thẳng đều, tháng nào cũng ngần ấy đồng xu';
  S.c3_pay = () => R(0, 0, 400, 300, '#fbf3e4') + R(0, 240, 400, 60, '#e2cfa8') + person(130, 120, { s: .85, hs: 'short', shirt: C.teal, m: 'grin' }) +
    R(196, 150, 70, 44, '#fff', 4, `stroke="${C.ink}" stroke-width="2"`) + Pa('M196 150 L231 176 L266 150', 'none', `stroke="${C.ink}" stroke-width="2"`) + cash(250, 140, .6) + hand(198, 176, 9) +
    R(300, 40, 70, 54, '#fff', 8, `stroke="${C.ink}" stroke-width="2"`) + R(328, 50, 14, 34, C.red) + R(318, 60, 34, 14, C.red) + sun(336, 150, 18) + Pa('M310 196 L360 196 L346 226 L324 226Z', '#4fa3d6');
  L.c3_pay = 'Một người cầm phong bì lương, bên cạnh là dấu chữ thập y tế và ngày nghỉ';
  S.c3_worry = () => R(0, 0, 400, 300, '#eef1f5') + R(0, 236, 400, 64, '#c8cfda') + R(70, 200, 260, 16, C.brown, 4) +
    person(200, 120, { s: .9, hs: 'short', shirt: '#7a6a9a', m: 'frown', brows: 'worry' }) + hand(166, 86, 11) + hand(234, 86, 11) +
    [[100, 182], [130, 186], [300, 184]].map(([x, y]) => R(x - 20, y - 14, 40, 28, '#fff', 3, `stroke="${C.ink}" stroke-width="1.5"`) + Ln(x - 12, y - 4, x + 12, y - 4, C.grey, 2) + Ln(x - 12, y + 4, x + 6, y + 4, C.grey, 2)).join('') +
    Pa('M250 40 q10 -14 20 0 q10 -14 20 0', 'none', `stroke="${C.ink}" stroke-width="3"`) + Tx(320, 50, '?', 34, C.plum);
  L.c3_worry = 'Một người ôm đầu, nhíu mày nhìn đống giấy tờ trên bàn';
  S.c3_examWorry = () => R(0, 0, 400, 300, '#eef4fb') + R(0, 236, 400, 64, '#cfd8e2') + R(60, 196, 280, 16, C.brown, 4) + bookPile(110, 190, .7) +
    person(220, 116, { s: .85, hs: 'short', shirt: C.navy, m: 'frown', brows: 'worry' }) + hand(186, 84, 10) + R(250, 168, 70, 26, '#fff', 3, `stroke="${C.ink}" stroke-width="2"`) + Tx(285, 188, 'A B C', 14, C.ink) + cal(340, 70, .8);
  L.c3_examWorry = 'Một cậu sinh viên ôm đầu bên chồng sách và tờ đề thi';
  S.c3_comfyHome = () => sky() + sun(60, 56, 20) + R(0, 220, 400, 80, '#a8d48f') + house(110, 170, 1) + car(300, 240, 1.1, C.red) + feng(200, 176, { s: .42, m: 'grin' }) + wife(250, 178, { s: .4, m: 'grin' }) + heart(226, 110, 1.2, C.pink, 'class="fl"');
  L.c3_comfyHome = 'Hai vợ chồng vui vẻ trước ngôi nhà và chiếc xe của mình';

  /* ---- tập 2 ---- */
  S.c3_dreamer = () => R(0, 0, 400, 300, '#eef1f5') + R(0, 236, 400, 64, '#c8cfda') + R(240, 30, 130, 100, C.sky, 8, 'stroke="#fff" stroke-width="7"') + R(244, 92, 122, 34, '#6fb3d6') + Ln(260, 106, 300, 106, 'rgba(255,255,255,.6)', 2) + Ln(316, 116, 350, 116, 'rgba(255,255,255,.6)', 2) +
    R(40, 190, 230, 14, C.brown, 4) + R(70, 150, 70, 44, '#3b4152', 4) + feng(170, 130, { s: .75, m: 'flat', shirt: '#2f5f8f', collar: '#fff' }) +
    bubble(250, 150, 120, 70, '', 20, '#fff') + boat(310, 204, .28);
  L.c3_dreamer = 'Anh Phong ngồi ở bàn làm việc, mơ về một chiếc thuyền buồm';
  S.c3_calmSea = () => sky('#d9eefb') + sun(300, 70, 24) + cloud(90, 60, .9) + calm(160) + boat(130, 196, .45, { c: '#fff' }) + Pa('M30 120 L60 120 M330 130 L370 130', 'none', 'stroke="#fff" stroke-width="0"');
  L.c3_calmSea = 'Mặt biển phẳng lặng, không gợn sóng, một chiếc thuyền đứng yên';
  S.c3_tvBoat = () => R(0, 0, 400, 300, '#f6ead8') + R(0, 236, 400, 64, '#d9b88a') + tv(290, 110, 1.15) + sofa(110, 220, .9) +
    feng(110, 160, { s: .6, m: 'grin', eyes: 'wide' }) + heart(150, 70, 1.2, C.red, 'class="fl"') + heart(180, 96, .9, C.pink, 'class="fl"');
  L.c3_tvBoat = 'Anh Phong ngồi sofa xem ti vi chiếu thuyền buồm, mắt sáng rỡ';
  S.c3_sailboat = () => sky('#d9eefb') + cloud(320, 60, 1) + sea(200) + boat(190, 240, 1.1, { c: '#fff', c2: '#fdf3d0' });
  L.c3_sailboat = 'Một chiếc thuyền buồm căng gió trên biển';
  S.c3_bump = () => R(0, 0, 400, 300, '#e3f1df') + R(0, 236, 400, 64, '#b9d6a4') + tree(240, 150, 1.3) + person(170, 130, { s: .75, hs: 'short', shirt: C.navy, m: 'wow', eyes: 'closed', brows: 'worry' }) +
    phone(130, 200, 1.2) + hand(132, 210, 9) + stars(190, 74);
  L.c3_bump = 'Một người vừa đi vừa xem điện thoại, đâm vào cái cây, sao bay quanh đầu';
  S.c3_treeShade = () => R(0, 0, 400, 300, '#e3f1df') + R(0, 236, 400, 64, '#b9d6a4') + tree(270, 140, 1.4) + R(160, 216, 120, 12, C.brown, 4) +
    person(220, 150, { s: .55, hs: 'short', shirt: C.navy, m: 'smile' }) + phone(196, 206, 1) + hand(198, 214, 8);
  L.c3_treeShade = 'Một người ngồi dưới gốc cây xem điện thoại';
  S.c3_carBump = () => R(0, 0, 400, 300, '#dfe7f1') + R(0, 220, 400, 80, '#59606e') + Ln(0, 260, 400, 260, '#fff', 4, 'stroke-dasharray="20 16"') + car(140, 230, 1.3, C.teal) + car(262, 230, 1.3, C.red) + stars(202, 150);
  L.c3_carBump = 'Hai chiếc xe ô tô đâm vào nhau giữa đường';
  S.c3_openSea = () => sky('#ffe9c4') + sun(330, 90, 30) + sea(170, '#3a86b8') + boat(170, 214, .8, { c: '#fff' }) + Pa('M10 166 L390 166', 'none', 'stroke="#fff" stroke-width="2"') + [60, 110, 330].map(x => Pa(`M${x} 60 q8 -8 16 0 q8 -8 16 0`, 'none', `stroke="${C.ink}" stroke-width="2.5"`)).join('');
  L.c3_openSea = 'Chiếc thuyền buồm giữa biển rộng mênh mông, chân trời xa tít';
  S.c3_boats = () => sky('#d9eefb') + sea(170) + boat(80, 214, .45, { c: '#fff' }) + boat(200, 226, .55, { c: '#ffe39a' }) + boat(320, 210, .42, { c: '#f8c4c4' }) +
    [80, 200, 320].map((x, i) => Ci(x, 270, 15, '#fff', `stroke="${C.ink}" stroke-width="2"`) + Tx(x, 277, String(i + 1), 18, C.ink)).join('');
  L.c3_boats = 'Ba chiếc thuyền trên biển, đánh số 1, 2, 3';
  S.c3_voyage = () => sky('#d9eefb') + cloud(300, 50, .8) + sea(150) + Pa('M20 250 Q120 200 200 230 T380 190', 'none', `stroke="#fff" stroke-width="4" stroke-dasharray="10 9"`) + boat(280, 196, .55, { c: '#fff' }) +
    Pa('M200 210 l-40 10 M200 200 l-46 -2', 'none', 'stroke="#fff" stroke-width="3" stroke-linecap="round"');
  L.c3_voyage = 'Chiếc thuyền lướt trên biển, phía sau là đường đi chấm chấm';

  /* ---- tập 3 ---- */
  S.c3_sellBuy = () => sky('#eef4fb') + sea(210, '#4f9ac6') + R(0, 196, 214, 104, '#a8d48f') + house(70, 150, .7) + car(150, 214, .7, C.red) +
    tag(30, 168, '¥', '#ffe39a') + tag(130, 168, '¥', '#ffe39a') + Pa('M196 120 L236 120', 'none', `stroke="${C.org}" stroke-width="8" stroke-linecap="round"`) + Pa('M230 106 L252 120 L230 134Z', C.org) +
    boat(320, 232, .5, { rb: 1, old: 1 }) + feng(250, 236, { s: .3, m: 'grin' }) + wife(380, 240, { s: .28, m: 'flat' });
  L.c3_sellBuy = 'Ngôi nhà và chiếc xe treo biển bán, mũi tên chỉ sang chiếc thuyền cũ có sọc cầu vồng';
  S.c3_piggy = () => R(0, 0, 400, 300, '#fff3e6') + R(0, 240, 400, 60, '#e8d3b0') + piggy(190, 170, 1.1) + coin(190, 70, 13) + coin(220, 40, 11) + Pa('M190 92 L190 110', 'none', `stroke="${C.org}" stroke-width="3" stroke-dasharray="4 4"`) +
    [300, 320, 340].map((x, i) => coin(x, 236 - i * 2, 12) + coin(x, 222 - i * 2, 12)).join('');
  L.c3_piggy = 'Con heo đất, đồng xu rơi vào, bên cạnh là mấy chồng xu';
  S.c3_usedCar = () => R(0, 0, 400, 300, '#eef1f5') + R(0, 230, 400, 70, '#b9bfca') + car(180, 236, 1.8, '#8fa3b0') + Pa('M120 200 l10 6 l-6 6', 'none', 'stroke="#5f6f7a" stroke-width="2"') + R(210, 196, 18, 10, '#7a6a5a', 2) +
    tag(270, 120, '¥', '#ffe39a') + Ln(280, 134, 250, 180, C.ink, 1.5) + Pa('M80 150 q-10 -20 6 -30', 'none', 'stroke="#c9ced6" stroke-width="5"');
  L.c3_usedCar = 'Chiếc xe cũ có vết móp, treo thẻ giá rẻ';
  S.c3_newCar = () => R(0, 0, 400, 300, '#fff7e6') + R(0, 230, 400, 70, '#e8d9bd') + car(190, 236, 1.8, C.red) + Pa('M160 150 q-30 -30 0 -40 q30 10 0 40 q30 -30 60 -10 q-30 30 -60 10', '#ffd166', `stroke="${C.org}" stroke-width="2"`) +
    [[60, 80], [330, 70], [350, 160], [40, 170]].map(([x, y]) => Pa(`M${x} ${y - 10} l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3Z`, C.butter)).join('');
  L.c3_newCar = 'Chiếc xe mới tinh, có nơ to, lấp lánh';
  S.c3_oldBooks = () => R(0, 0, 400, 300, '#f6ead8') + R(0, 236, 400, 64, '#d9b88a') + bookPile(140, 230, 1.2, 1) + bookPile(280, 230, 1, 1) + tag(300, 120, '¥', '#ffe39a');
  L.c3_oldBooks = 'Mấy chồng sách cũ đã ngả màu, treo thẻ giá';
  S.c3_rainbow = () => sky('#d6e8f5') + cloud(70, 70, 1, '#cfd8e2') + cloud(340, 60, .9, '#cfd8e2') + rainbow(200, 230, 160, 11) + R(0, 230, 400, 70, '#a8d48f') +
    [60, 120, 300, 350].map(x => Ci(x, 250, 10, 'rgba(120,170,220,.5)')).join('') + person(200, 196, { s: .3, hs: 'pony', shirt: C.butter, m: 'grin' }) + hand(222, 182, 6);
  L.c3_rainbow = 'Sau cơn mưa, cầu vồng hiện trên trời, một em bé chỉ tay';
  S.c3_studyMap = () => R(0, 0, 400, 300, '#f3ecdf') + R(0, 236, 400, 64, '#d9b88a') + R(30, 190, 340, 14, C.brown, 4) + map(50, 120, 120, 70) + compass(210, 166, 20) + bookPile(320, 186, .55) +
    feng(140, 70, { s: .55, gl: 'round', m: 'flat', brows: 'up' }) + R(230, 40, 120, 80, C.sky, 6, 'stroke="#fff" stroke-width="5"') + boat(300, 104, .25);
  L.c3_studyMap = 'Anh Phong đeo kính, tự học với bản đồ, la bàn và sách';
  S.c3_crazyTalk = () => R(0, 0, 400, 300, '#f6e7e1') + R(0, 236, 400, 64, '#d8c6a8') + feng(200, 130, { s: .7, m: 'smile' }) + boat(206, 64, .16) +
    person(70, 150, { s: .55, hs: 'short', hair: C.hairW, shirt: '#7a6a4f', m: 'frown', brows: 'worry' }) + person(130, 176, { s: .45, hs: 'bun', hair: C.hairG, shirt: C.plum, m: 'open', brows: 'worry' }) +
    person(310, 160, { s: .5, hs: 'quiff', shirt: C.org, m: 'open', brows: 'up' }) + person(360, 180, { s: .42, hs: 'long', shirt: C.pink, m: 'frown' }) +
    swirl(274, 70) + swirl(110, 70) + hand(290, 150, 8);
  L.c3_crazyTalk = 'Ba mẹ và bạn bè lắc đầu, chỉ trỏ: ai cũng cho là anh Phong điên';
  S.c3_include = () => R(0, 0, 400, 300, '#eef4fb') + R(0, 236, 400, 64, '#cfd8e2') +
    [[60, 'short', C.teal], [120, 'pony', C.pink], [280, 'quiff', C.org], [340, 'bob', C.butter]].map(([x, hs, sh]) => person(x, 150, { s: .45, hs: hs, shirt: sh, m: 'grin' })).join('') +
    person(200, 130, { s: .55, hs: 'bun', hair: C.hairD, shirt: C.navy, gl: 'round', m: 'grin' }) + `<ellipse cx="200" cy="170" rx="186" ry="110" fill="none" stroke="${C.org}" stroke-width="5" stroke-dasharray="14 10"/>` + Pa('M196 30 l4 9 l10 0 l-8 6 l3 10 l-9 -6 l-9 6 l3 -10 l-8 -6 l10 0Z', C.org);
  L.c3_include = 'Cả lớp và cô giáo đứng chung trong một vòng tròn lớn';
  S.c3_coldSwim = () => R(0, 0, 400, 300, '#c9d6e6') + snow(36) + R(0, 210, 400, 90, '#4f86b0') + R(0, 196, 400, 18, '#eef3f8') +
    person(200, 120, { s: .75, hs: 'short', shirt: C.skin, m: 'grin' }) + R(166, 210, 68, 22, C.red, 6) +
    person(60, 150, { s: .5, hs: 'pony', shirt: C.navy, m: 'wow', eyes: 'wide' }) + R(36, 188, 48, 12, C.butter, 5) + person(340, 150, { s: .5, hs: 'short', shirt: C.plum, m: 'wow', eyes: 'wide' }) + R(316, 188, 48, 12, C.red, 5) + Tx(340, 70, '!', 40, C.red);
  L.c3_coldSwim = 'Trời tuyết, một người mặc đồ bơi định xuống nước; hai người mặc áo ấm há hốc miệng';
  S.c3_departure = () => sky('#ffe9c4') + sun(70, 70, 24) + R(0, 180, 120, 120, '#b9a48a') + R(0, 176, 120, 10, '#8a6a4a') + sea(190) + boat(240, 232, .75, { rb: 1 }) +
    feng(200, 176, { s: .3, hat: capHat(), m: 'grin' }) + wife(260, 178, { s: .28, m: 'grin' }) + girl(300, 186, { s: .22 }) + hand(320, 172, 5) + Pa('M110 230 l-30 10 M110 240 l-34 18', 'none', 'stroke="#fff" stroke-width="3"');
  L.c3_departure = 'Một nhà ba người trên thuyền buồm rời bến ra khơi';

  /* ---- shared props for tập 4–9 ---- */
  var wheel = function (x, y, s) { let w = Ci(0, 0, 34, 'none', `stroke="${C.brown}" stroke-width="8"`) + Ci(0, 0, 8, C.brown); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; w += Ln(Math.cos(a) * 8, Math.sin(a) * 8, Math.cos(a) * 46, Math.sin(a) * 46, C.brown, 6); } return G(`translate(${x} ${y}) scale(${s || 1})`, w); };
  var deck = function (y) { return R(0, y, 400, 300 - y, '#c8945e') + [0, 1, 2].map(i => Ln(0, y + 18 + i * 24, 400, y + 18 + i * 24, '#a8763f', 2)).join(''); };
  var rod = function (x, y, ex, ey) { return Ln(x, y, ex, ey, '#6b4a3a', 4) + Pa(`M${ex} ${ey} Q${ex + 20} ${ey + 60} ${ex + 14} ${ey + 120}`, 'none', 'stroke="#555" stroke-width="1.5"'); };
  var fish = function (x, y, s, c) { return G(`translate(${x} ${y}) scale(${s || 1})`, `<ellipse cx="0" cy="0" rx="26" ry="13" fill="${c || '#7fb3d5'}"/>` + Pa('M22 0 L40 -12 L40 12Z', c || '#7fb3d5') + Ci(-14, -3, 3, C.ink)); };
  var plate = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, `<ellipse cx="0" cy="0" rx="60" ry="20" fill="#fff" stroke="#cfd8e2" stroke-width="3"/>`); };
  var bowl = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, Pa('M-26 -6 Q0 30 26 -6Z', '#fff', `stroke="${C.teal}" stroke-width="3"`) + `<ellipse cx="0" cy="-6" rx="26" ry="6" fill="#f6f0e0"/>`); };
  var shrimp = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, Pa('M-18 6 Q-20 -14 0 -16 Q18 -14 16 2 Q8 -6 0 -4 Q-8 -2 -6 8Z', '#f2894f') + Ln(-18, 6, -26, 14, '#f2894f', 3)); };
  var laptop = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-40, -50, 80, 50, '#2b2f3a', 4) + R(-35, -45, 70, 40, '#9fd0f0', 2) + Pa('M-50 0 L50 0 L44 8 L-44 8Z', '#8a96ad')); };
  var bolt = function (x, y, s, c) { return G(`translate(${x} ${y}) scale(${s || 1})`, Pa('M0 0 L-16 46 L-2 46 L-14 96 L22 36 L6 36 L18 0Z', c || '#ffe14d', 'stroke="#f2c230" stroke-width="2"')); };
  var stormSky = function () { return R(0, 0, 400, 300, '#2c3550') + Ci(80, 50, 40, '#3e4766') + Ci(130, 40, 46, '#3e4766') + Ci(290, 46, 44, '#3e4766') + Ci(340, 56, 36, '#3e4766'); };
  var drops = function (n, c) { let s = ''; for (let i = 0; i < n; i++) { const x = (i * 53 + 17) % 400, y = (i * 37) % 260; s += Ln(x, y, x - 5, y + 16, c || '#9fb7d8', 2); } return s; };
  var flame = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, Pa('M0 0 Q-26 -20 -10 -50 Q-4 -30 6 -36 Q2 -60 20 -76 Q16 -50 30 -40 Q40 -20 24 0Z', '#f26b2a') + Pa('M6 0 Q-6 -14 4 -30 Q8 -20 14 -24 Q16 -10 18 0Z', '#ffd166')); };
  var lantern = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, Ln(0, -30, 0, -18, C.ink, 2) + `<ellipse cx="0" cy="0" rx="18" ry="20" fill="${C.red}"/>` + R(-8, -22, 16, 5, '#f2c230') + R(-8, 17, 16, 5, '#f2c230') + Ln(0, 22, 0, 34, '#f2c230', 2)); };
  var mountain = function (x, y, s, c) { return G(`translate(${x} ${y}) scale(${s || 1})`, Pa('M-90 0 L-20 -110 L10 -70 L40 -100 L100 0Z', c || '#7aa874') + Pa('M-20 -110 L-34 -88 L-8 -86Z', '#fff')); };
  var bed = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-90, -40, 18, 70, C.brown, 4) + R(-90, -6, 180, 30, '#8a5a3b', 8) + R(-72, -22, 40, 18, '#fff', 8) + Pa('M-30 -12 L84 -12 L84 6 L-30 6Z', '#7fb3d5')); };
  var door = function (x, y, s, c) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-30, -70, 60, 110, c || '#a8763f', 4) + Ci(18, -10, 4, C.butter)); };

  /* ---- tập 4 ---- */
  S.c3_quit = () => R(0, 0, 400, 300, '#eef1f5') + R(0, 236, 400, 64, '#c8cfda') + R(110, 176, 180, 16, C.brown, 4) +
    person(300, 110, { s: .7, hs: 'bald', hair: C.hairG, shirt: '#3b4152', tie: C.red, collar: '#fff', m: 'open', eyes: 'wide' }) +
    feng(110, 120, { s: .7, shirt: '#2f5f8f', collar: '#fff', m: 'grin' }) + R(170, 150, 50, 34, '#fff', 3, `stroke="${C.ink}" stroke-width="2"`) + Pa('M170 150 L195 168 L220 150', 'none', `stroke="${C.ink}" stroke-width="2"`) + hand(172, 166, 9) + boat(60, 60, .16);
  L.c3_quit = 'Anh Phong tươi cười đưa lá thư xin thôi việc cho sếp, sếp tròn mắt';
  S.c3_steer = () => sky('#d9eefb') + sea(170) + deck(220) + wheel(200, 190, 1.1) + feng(200, 110, { s: .7, hat: capHat(), m: 'flat', brows: 'up' }) + hand(170, 176, 10) + hand(230, 176, 10);
  L.c3_steer = 'Anh Phong cầm bánh lái, chăm chú lái thuyền';
  S.c3_takeTurns = () => sky('#d9eefb') + sun(340, 50, 20) + sea(160) + deck(220) + wheel(120, 196, .8) + feng(120, 120, { s: .55, hat: capHat() }) + hand(104, 180, 8) +
    wife(300, 160, { s: .55, eyes: 'closed', m: 'smile' }) + clock(220, 70, 28, 2, 0) + Pa('M196 120 Q220 140 244 120', 'none', `stroke="${C.org}" stroke-width="4"`) + Pa('M240 112 L248 122 L236 124Z', C.org) + Pa('M244 150 Q220 130 196 150', 'none', `stroke="${C.org}" stroke-width="4"`) + Pa('M200 158 L192 148 L204 146Z', C.org);
  L.c3_takeTurns = 'Chồng lái thuyền, vợ nghỉ; mũi tên vòng: hai người thay phiên nhau';
  S.c3_caring = () => R(0, 0, 400, 300, '#f6efe6') + R(0, 236, 400, 64, '#d9c4a8') + bed(200, 220, 1.2) + person(150, 176, { s: .4, hs: 'bun', hair: C.hairW, shirt: '#cfe3f2', eyes: 'closed', m: 'flat' }) +
    person(70, 140, { s: .55, hs: 'pony', shirt: C.pink, m: 'smile' }) + person(330, 140, { s: .55, hs: 'short', shirt: C.teal, m: 'smile' }) + clock(200, 50, 24, 9, 0) + Pa('M110 60 Q200 10 290 60', 'none', `stroke="${C.org}" stroke-width="4" stroke-dasharray="8 6"`);
  L.c3_caring = 'Hai anh em thay nhau chăm bà nằm trên giường';
  S.c3_girlDraw = () => sky('#d9eefb') + sea(150) + deck(200) + R(130, 196, 150, 12, '#a8763f', 4) + girl(200, 140, { s: .6 }) + R(170, 176, 70, 24, '#fff', 3, `stroke="${C.ink}" stroke-width="1.5"`) +
    Pa('M180 196 q12 -16 24 0', 'none', `stroke="${C.red}" stroke-width="3"`) + Ci(222, 186, 6, C.butter) + bookPile(320, 196, .5) + hand(230, 190, 7);
  L.c3_girlDraw = 'Cô bé ngồi trên boong thuyền vẽ tranh, bên cạnh là chồng sách';

  /* ---- tập 5 ---- */
  S.c3_swimFish = () => sky('#ffe9c4') + sun(80, 60, 22) + calm(150) + boat(270, 186, .5, { rb: 1 }) + person(110, 196, { s: .4, hs: 'bob', hair: '#5a3a2a', shirt: '#e0785a', m: 'grin' }) + Pa('M70 214 q20 -8 40 0 q20 -8 40 0', 'none', 'stroke="#fff" stroke-width="3"') +
    feng(330, 150, { s: .34, hat: capHat() }) + rod(346, 154, 390, 120);
  L.c3_swimFish = 'Biển lặng buổi chiều: vợ bơi dưới nước, chồng ngồi trên thuyền câu cá';
  S.c3_fishing = () => sky('#d9eefb') + calm(170) + deck(230) + feng(150, 130, { s: .7, hat: capHat(), m: 'grin' }) + rod(190, 190, 300, 90) + fish(320, 240, .9) + hand(194, 186, 9);
  L.c3_fishing = 'Một người cầm cần câu, con cá cắn câu dưới nước';
  S.c3_grandpaFish = () => sky('#dff0f8') + R(0, 190, 400, 110, '#7fb8d8') + R(0, 170, 170, 30, '#9ccc7f') + person(90, 120, { s: .55, hs: 'bald', hair: C.hairW, shirt: '#7a6a4f', hat: Pa('M-40 -18 L0 -46 L40 -18Z', '#e2b85c') }) + rod(120, 160, 230, 110) + fish(260, 240, .7);
  L.c3_grandpaFish = 'Ông cụ ngồi trên bờ sông câu cá';
  S.c3_grandpaSwim = () => sky('#dff0f8') + R(0, 170, 400, 130, '#7fb8d8') + person(200, 170, { s: .5, hs: 'bald', hair: C.hairW, shirt: C.skin, m: 'grin' }) + Pa('M140 200 q30 -12 60 0 q30 -12 60 0', 'none', 'stroke="#fff" stroke-width="3"') + R(0, 160, 120, 20, '#9ccc7f');
  L.c3_grandpaSwim = 'Ông cụ đang bơi dưới sông';
  S.c3_buyFish = () => R(0, 0, 400, 300, '#fbf3e4') + R(0, 236, 400, 64, '#d9c4a8') + R(60, 170, 280, 20, '#8a96ad', 4) + fish(120, 160, .7) + fish(190, 160, .7, '#9fc1d9') + fish(260, 160, .7) +
    person(300, 100, { s: .55, hs: 'bald', hair: C.hairW, shirt: '#7a6a4f', m: 'smile' }) + cash(240, 110, .5) + person(80, 100, { s: .5, hs: 'short', shirt: C.teal, m: 'grin' });
  L.c3_buyFish = 'Ông cụ mua cá ở sạp chợ';
  S.c3_seafoodDinner = () => sky('#ffe1b8') + sea(180) + deck(210) + R(110, 200, 180, 14, '#a8763f', 4) + plate(200, 196, 1) + fish(176, 188, .6, '#f2a66a') + shrimp(226, 190, 1) + shrimp(244, 196, .8) +
    wife(110, 130, { s: .5, m: 'grin' }) + feng(290, 130, { s: .5, hat: capHat(), m: 'grin' }) + girl(200, 120, { s: .4 }) + heart(200, 50, 1.2, C.red, 'class="fl"');
  L.c3_seafoodDinner = 'Cả nhà ngồi trên boong ăn một bữa hải sản';
  S.c3_meal = () => R(0, 0, 400, 300, '#fdf1dc') + R(0, 236, 400, 64, '#e8d3b0') + R(80, 190, 240, 16, C.brown, 4) + bowl(160, 186, 1) + bowl(240, 186, 1) + plate(200, 196, .6) +
    person(90, 120, { s: .6, hs: 'short', shirt: C.teal, m: 'grin' }) + person(310, 120, { s: .6, hs: 'pony', shirt: C.pink, m: 'grin' });
  L.c3_meal = 'Hai người ngồi ăn một bữa cơm với nhau';
  S.c3_seafood = () => R(0, 0, 400, 300, '#eaf4f8') + R(0, 236, 400, 64, '#cfe0ea') + plate(200, 200, 2.2) + fish(150, 180, 1.1, '#f2a66a') + shrimp(240, 176, 1.6) + shrimp(270, 196, 1.3) + shrimp(220, 206, 1.2) + Pa('M40 90 q15 -15 30 0 t30 0 t30 0', 'none', 'stroke="#7fb8d8" stroke-width="5"');
  L.c3_seafood = 'Đĩa hải sản: cá và tôm';

  /* ---- tập 6 ---- */
  S.c3_sunsetFamily = () => R(0, 0, 400, 300, '#f9b97a') + Ci(200, 160, 46, '#ffdf7a') + sea(160, '#c9744f') + deck(220) + wife(110, 170, { s: .45, m: 'grin' }) + feng(200, 166, { s: .45, m: 'grin' }) + girl(290, 176, { s: .36 }) + heart(200, 60, 1.3, C.pink, 'class="fl"');
  L.c3_sunsetFamily = 'Chiều tà, cả nhà ngồi thong thả trên boong ngắm mặt trời lặn';
  S.c3_dusk = () => R(0, 0, 400, 300, '#f6a86b') + R(0, 0, 400, 100, '#b07aa8') + Ci(200, 210, 52, '#ffdf7a') + R(0, 210, 400, 90, '#6a5a7a') + clock(330, 70, 30, 6, 0) + [60, 100, 140].map(x => Pa(`M${x} 80 q8 -8 16 0 q8 -8 16 0`, 'none', `stroke="${C.ink}" stroke-width="2.5"`)).join('');
  L.c3_dusk = 'Mặt trời sắp lặn, trời ngả tím, đồng hồ chỉ 6 giờ';
  S.c3_comfyRoom = () => R(0, 0, 400, 300, '#f3ecdf') + R(0, 236, 400, 64, '#d9c4a8') + R(260, 40, 110, 90, C.sky, 6, 'stroke="#fff" stroke-width="6"') + bed(170, 220, 1.3) + flower(340, 190, .9, C.pink) + R(60, 60, 60, 40, '#ffe39a', 4) + Ln(90, 100, 90, 140, '#c99a3e', 3);
  L.c3_comfyRoom = 'Căn phòng sáng sủa, giường êm, có hoa';
  S.c3_upset = () => R(0, 0, 400, 300, '#eef1f5') + R(0, 236, 400, 64, '#c8cfda') + person(140, 120, { s: .8, hs: 'pony', shirt: C.plum, m: 'frown', brows: 'worry' }) + hand(140, 200, 10) +
    person(300, 140, { s: .6, hs: 'short', shirt: C.org, m: 'open', brows: 'angry' }) + bubble(250, 30, 110, 50, '!!', 24, '#fff');
  L.c3_upset = 'Một người nói nặng lời, người kia đặt tay lên ngực, buồn trong lòng';
  S.c3_movieNight = () => R(0, 0, 400, 300, '#2c3550') + Ci(330, 50, 20, '#fff3c0') + sea(180, '#2d4f74') + deck(220) + laptop(200, 210, 1) + wife(120, 150, { s: .45, m: 'grin' }) + feng(280, 150, { s: .45, m: 'grin' }) + girl(200, 120, { s: .36 });
  L.c3_movieNight = 'Tối trên boong, cả nhà ngồi bên nhau xem phim trên máy tính';
  S.c3_chores = () => sky('#d9eefb') + sea(160) + deck(214) + feng(110, 140, { s: .55, hat: capHat(), m: 'flat' }) + Ln(150, 190, 190, 250, '#8a96ad', 5) + R(178, 246, 30, 10, '#c9d3df', 3) +
    wife(290, 140, { s: .55, m: 'smile' }) + Ln(260, 170, 330, 130, '#d9cba8', 6) + R(320, 110, 30, 40, '#fff', 3, 'stroke="#c9d3df" stroke-width="2"') + sweat(80, 120);
  L.c3_chores = 'Trên boong, chồng lau sàn, vợ sửa cánh buồm';

  /* ---- tập 7 ---- */
  S.c3_dreamCome = () => sky('#ffe9c4') + sun(320, 60, 24) + sea(170) + boat(200, 230, .8, { rb: 1 }) + feng(150, 160, { s: .32, hat: capHat(), m: 'grin', eyes: 'closed' }) + bubble(30, 30, 150, 70, '', 20, '#fff') + boat(80, 88, .2) + Tx(140, 74, '✓', 30, C.green);
  L.c3_dreamCome = 'Anh Phong nhắm mắt mỉm cười trên thuyền: giấc mơ đã thành thật';
  S.c3_separateRooms = () => R(0, 0, 400, 300, '#e6e2dc') + [0, 134, 268].map((x, i) => R(x + 4, 20, 128, 260, ['#d7e3ef', '#efe0d7', '#e3efd7'][i], 4)).join('') +
    feng(68, 120, { s: .45, m: 'flat' }) + R(36, 190, 64, 40, '#2b2f3a', 4) + wife(202, 120, { s: .45, m: 'flat' }) + phone(232, 190, 1.2) + girl(336, 130, { s: .42, m: 'flat' }) + phone(360, 196, 1.1) +
    Ln(134, 20, 134, 280, '#8a7a6a', 6) + Ln(268, 20, 268, 280, '#8a7a6a', 6);
  L.c3_separateRooms = 'Ba căn phòng cạnh nhau, mỗi người ngồi một mình với màn hình';
  S.c3_waitNews = () => R(0, 0, 400, 300, '#fbe9e4') + R(0, 236, 400, 64, '#e2c4b8') + R(230, 40, 140, 120, C.sky, 6, 'stroke="#fff" stroke-width="6"') + lantern(80, 60, 1.3) + lantern(150, 50, 1.1) +
    person(160, 140, { s: .55, hs: 'pony', shirt: C.red, m: 'grin' }) + person(250, 150, { s: .5, hs: 'short', shirt: C.butter, m: 'grin' }) + cal(330, 210, 1) + Tx(330, 214, '?', 0, C.red);
  L.c3_waitNews = 'Hai đứa trẻ bên đèn lồng đỏ, háo hức nhìn tờ lịch chờ Tết';
  S.c3_land = () => sky('#d9eefb') + R(0, 130, 400, 30, '#9ccc7f') + tree(80, 120, .45) + tree(130, 126, .4) + house(300, 130, .35) + sea(160) + boat(200, 236, .6, { c: '#fff' }) + feng(190, 196, { s: .26, hat: capHat(), m: 'grin' }) + hand(216, 186, 5);
  L.c3_land = 'Từ thuyền ngoài khơi nhìn thấy dải đất liền có cây và nhà';
  S.c3_eachOwn = () => R(0, 0, 400, 300, '#eef4fb') + R(0, 220, 400, 80, '#cfd8e2') + R(150, 40, 100, 80, '#e2c9a8', 4) + R(185, 80, 30, 40, C.brown, 3) +
    person(70, 190, { s: .4, hs: 'short', shirt: C.teal, flip: 1 }) + person(200, 200, { s: .4, hs: 'pony', shirt: C.pink }) + person(330, 190, { s: .4, hs: 'quiff', shirt: C.org }) +
    Pa('M70 270 L30 290 M200 280 L200 298 M330 270 L370 290', 'none', `stroke="${C.org}" stroke-width="4"`);
  L.c3_eachOwn = 'Tan học, ba bạn mỗi người đi một hướng về nhà mình';

  /* ---- tập 8 ---- */
  S.c3_oldSaying = () => sky('#eef4fb') + sea(220) + R(0, 214, 200, 86, '#9ccc7f') + mountain(110, 220, 1.1) +
    Tx(110, 100, '✓', 40, C.green) + Ci(300, 150, 34, 'none', `stroke="${C.red}" stroke-width="7"`) + Ln(276, 174, 324, 126, C.red, 7) + G('translate(300 196) scale(.3)', Pa('M-96 0 L104 0 L80 36 L-76 36Z', '#b5532f') + Ln(0, 6, 0, -150, '#6b4a3a', 8) + Pa('M4 -146 L4 -10 L92 -10Z', '#fff')) +
    person(200, 230, { s: .35, hs: 'bald', hair: C.hairW, shirt: '#7a6a4f', m: 'open' }) + hand(228, 214, 6);
  L.c3_oldSaying = 'Ông cụ chỉ: lên núi thì được (dấu ✓), ra biển thì không (dấu cấm)';
  S.c3_noEntry = () => R(0, 0, 400, 300, '#eef1f5') + R(0, 236, 400, 64, '#c8cfda') + door(280, 180, 1.3) + R(40, 40, 160, 160, '#fff', 12, `stroke="${C.red}" stroke-width="8"`) + Ci(120, 120, 56, C.red) + R(84, 110, 72, 20, '#fff', 4) + Ln(120, 200, 120, 236, '#8a96ad', 6);
  L.c3_noEntry = 'Biển báo đỏ cấm vào đặt trước một cánh cửa';
  S.c3_library = () => R(0, 0, 400, 300, '#f3ecdf') + R(0, 236, 400, 64, '#d9c4a8') + [40, 120, 280, 360].map(x => bookPile(x, 120, .5)).join('') + R(20, 124, 360, 8, C.brown, 2) +
    person(130, 170, { s: .45, hs: 'pony', shirt: C.pink, m: 'flat' }) + person(270, 170, { s: .45, hs: 'short', shirt: C.teal, gl: 'round', m: 'flat' }) + Ci(200, 70, 26, '#fff', `stroke="${C.ink}" stroke-width="2"`) + Ln(188, 70, 212, 70, C.ink, 3) + Pa('M196 58 L204 58 L204 62', 'none', `stroke="${C.ink}" stroke-width="2"`);
  L.c3_library = 'Thư viện yên tĩnh, có biển nhắc giữ im lặng';
  S.c3_tenseNight = () => R(0, 0, 400, 300, '#1e2640') + Ci(70, 60, 18, '#fff3c0') + sea(180, '#1c3a5a') + boat(200, 230, .8, { c: '#cfd8e2' }) + feng(180, 170, { s: .3, m: 'frown', brows: 'worry', hat: capHat() }) + wife(230, 172, { s: .28, m: 'frown', brows: 'worry' }) + Tx(320, 90, '!', 40, C.butter);
  L.c3_tenseNight = 'Đêm tối trên biển, hai vợ chồng lo lắng canh thuyền';
  S.c3_clockMoment = () => R(0, 0, 400, 300, '#5fae5f') + R(0, 0, 400, 80, '#2f5f8f') + R(330, 120, 70, 110, 'none', 0, 'stroke="#fff" stroke-width="5"') + Ci(320, 180, 10, '#fff') + Pa('M250 190 Q290 170 316 180', 'none', 'stroke="#fff" stroke-width="2" stroke-dasharray="5 5"') +
    person(200, 150, { s: .55, hs: 'short', shirt: C.red, m: 'grin' }) + R(150, 20, 100, 40, '#1f2a3a', 6) + Tx(200, 50, '89:59', 26, '#ffe14d');
  L.c3_clockMoment = 'Sân bóng, đồng hồ chỉ phút cuối, cầu thủ sút bóng vào lưới';
  S.c3_fireLeak = () => R(0, 0, 400, 300, '#26304f') + sea(170, '#1c3a5a') + boat(190, 226, .9, { c: '#cfd8e2' }) + flame(110, 222, 1) + R(260, 238, 8, 20, '#7fb8d8') + Pa('M264 258 q-6 10 0 16 q6 -6 0 -16', '#7fb8d8') +
    feng(180, 170, { s: .3, m: 'wow', eyes: 'wide', hat: capHat() }) + wife(236, 172, { s: .28, m: 'wow', eyes: 'wide' });
  L.c3_fireLeak = 'Ban đêm, một góc thuyền bốc cháy, chỗ khác bị rò nước; hai vợ chồng hốt hoảng';
  S.c3_fire = () => R(0, 0, 400, 300, '#f3e3d3') + R(0, 236, 400, 64, '#c9b79c') + house(200, 190, 1.4) + flame(150, 150, 1.4) + flame(240, 140, 1.1) + flame(200, 120, .9) + Pa('M120 60 q20 -20 40 0 q20 -20 40 0', 'none', 'stroke="#8a8f99" stroke-width="10" stroke-linecap="round"');
  L.c3_fire = 'Ngôi nhà bốc cháy, lửa và khói bốc lên';
  S.c3_leak = () => R(0, 0, 400, 300, '#e6e9ef') + R(0, 236, 400, 64, '#c8cfda') + R(0, 0, 400, 30, '#8a96ad') + Pa('M200 30 q-8 12 0 18 q8 -6 0 -18', '#7fb8d8') + Pa('M200 80 q-8 12 0 18 q8 -6 0 -18', '#7fb8d8') + Pa('M200 130 q-8 12 0 18 q8 -6 0 -18', '#7fb8d8') +
    Pa('M164 200 L236 200 L228 250 L172 250Z', '#cfd8e2', `stroke="${C.ink}" stroke-width="2"`) + `<ellipse cx="200" cy="204" rx="34" ry="6" fill="#7fb8d8"/>` + person(320, 150, { s: .55, hs: 'short', shirt: C.teal, m: 'frown', brows: 'worry' }) + rain(14, 400, 26);
  L.c3_leak = 'Mái nhà bị dột, nước nhỏ giọt xuống cái xô';
  S.c3_drain = () => R(0, 0, 400, 300, '#eef4fb') + R(0, 236, 400, 64, '#cfd8e2') + Pa('M160 80 L240 80 L230 200 L170 200Z', 'rgba(191,227,242,.6)', `stroke="${C.ink}" stroke-width="3"`) + R(172, 190, 56, 8, '#7fb8d8') +
    Pa('M200 200 q-6 12 0 18 q6 -6 0 -18', '#7fb8d8') + `<ellipse cx="200" cy="244" rx="60" ry="8" fill="#7fb8d8"/>` + Pa('M196 200 l4 -10 l4 10', 'none', `stroke="${C.ink}" stroke-width="2"`);
  L.c3_drain = 'Cái cốc bị thủng đáy, nước chảy hết ra bàn';

  /* ---- tập 9 ---- */
  S.c3_storm = () => stormSky() + bolt(110, 70, 1) + bolt(300, 60, .8) + drops(40) + sea(190, '#1c3a5a') + boat(200, 238, .75, { c: '#cfd8e2' }) + feng(180, 180, { s: .28, m: 'frown', eyes: 'wide', hat: capHat() }) + wife(230, 182, { s: .26, m: 'frown', eyes: 'wide' });
  L.c3_storm = 'Giông bão giữa biển: sấm chớp đùng đùng trên chiếc thuyền nhỏ';
  S.c3_hugStorm = () => stormSky() + bolt(330, 50, .9) + drops(40) + sea(200, '#1c3a5a') + boat(190, 248, .7, { c: '#cfd8e2' }) +
    G('translate(190 190)', wife(-20, 0, { s: .32, m: 'frown', eyes: 'closed' }) + feng(24, -4, { s: .34, m: 'frown', eyes: 'closed' }) + girl(4, 14, { s: .26, m: 'frown', eyes: 'closed' })) + hand(176, 214, 6) + hand(214, 214, 6);
  L.c3_hugStorm = 'Cả nhà ba người ôm chặt lấy nhau trên thuyền giữa sấm chớp';
  S.c3_thunder = () => stormSky() + drops(30) + R(0, 240, 400, 60, '#4a5a4a') + Pa('M120 120 l20 -20 M150 140 l26 -8 M120 160 l20 20', 'none', 'stroke="#ffe14d" stroke-width="5" stroke-linecap="round"') +
    person(240, 170, { s: .55, hs: 'pony', shirt: C.butter, m: 'wow', eyes: 'wide' }) + hand(206, 156, 9) + hand(274, 156, 9);
  L.c3_thunder = 'Trời giông, tiếng sấm nổ vang, cô bé bịt tai';
  S.c3_lightning = () => stormSky() + bolt(200, 40, 1.8) + drops(20) + R(0, 250, 400, 50, '#4a5a4a');
  L.c3_lightning = 'Một tia chớp loé sáng trên bầu trời đêm';
  S.c3_anytime = () => R(0, 0, 400, 300, '#eef4fb') + R(0, 236, 400, 64, '#cfd8e2') + clock(110, 120, 60, 3, 0) + Tx(110, 220, '24h', 28, C.tealD) + phone(270, 130, 3) + Pa('M310 80 q12 10 0 20 M320 70 q20 20 0 40', 'none', `stroke="${C.org}" stroke-width="4"`);
  L.c3_anytime = 'Đồng hồ 24 giờ và chiếc điện thoại đang đổ chuông';
  S.c3_strike = () => stormSky() + bolt(220, 20, 1.3) + R(0, 240, 400, 60, '#4a5a4a') + tree(240, 190, 1.1) + Pa('M226 140 l10 30 l-10 20', 'none', 'stroke="#ffe14d" stroke-width="4"') + flame(250, 120, .5);
  L.c3_strike = 'Tia chớp đánh trúng cái cây lớn';
  S.c3_hug = () => R(0, 0, 400, 300, '#fde7e3') + R(0, 236, 400, 64, '#e2c4b8') + G('translate(200 130)', person(-36, 0, { s: .75, hs: 'long', shirt: C.pink, m: 'grin', eyes: 'closed' }) + person(36, 0, { s: .75, hs: 'short', shirt: C.teal, m: 'grin', eyes: 'closed', flip: 1 })) +
    hand(150, 200, 11) + hand(250, 200, 11) + heart(200, 40, 1.6, C.red, 'class="fl"');
  L.c3_hug = 'Hai người ôm chặt nhau, tim bay phía trên';

  /* ---- tập 10 ---- */
  S.c3_homeAgain = () => sky('#ffe9c4') + sun(320, 60, 22) + R(0, 150, 400, 150, '#a8d48f') + house(110, 170, 1) + boat(300, 200, .45, { rb: 1, old: 1 }) +
    feng(200, 190, { s: .4, m: 'grin' }) + wife(250, 194, { s: .38, m: 'grin' }) + girl(150, 206, { s: .3 }) + heart(200, 110, 1.4, C.red, 'class="fl"') + Tx(330, 120, '8', 0, C.ink);
  L.c3_homeAgain = 'Cả nhà ba người về tới trước ngôi nhà, chiếc thuyền cũ đậu phía sau';
  var stairs = function (x, y, n, w, h, c) { let t = ''; for (let i = 0; i < n; i++) t += R(x + i * w, y - (i + 1) * h, w * (n - i), h, c || '#cdb79a', 2, 'stroke="#a88f70" stroke-width="2"'); return t; };
  var globe = function (x, y, r) { return Ci(x, y, r, '#7fb8d8') + Pa(`M${x - r * .6} ${y - r * .3} q${r * .3} -${r * .4} ${r * .7} -${r * .1} q${r * .1} ${r * .4} -${r * .3} ${r * .6}Z`, '#8cc77a') + Pa(`M${x + r * .1} ${y + r * .2} q${r * .4} -${r * .2} ${r * .6} ${r * .2} q-${r * .2} ${r * .4} -${r * .5} ${r * .3}Z`, '#8cc77a') + Ci(x, y, r, 'none', `stroke="${C.ink}" stroke-width="2"`); };
  S.c3_nauticalMile = () => R(0, 0, 400, 300, '#f4e4b8') + map(20, 20, 360, 260) + Pa('M60 230 Q160 120 250 150 T350 60', 'none', `stroke="${C.red}" stroke-width="4" stroke-dasharray="10 8"`) + boat(350, 66, .18) + Ci(60, 230, 8, C.red) +
    R(110, 70, 120, 40, '#fff', 8, `stroke="${C.ink}" stroke-width="2"`) + Tx(170, 98, '4000+', 24, C.tealD);
  L.c3_nauticalMile = 'Bản đồ biển, đường đi chấm chấm dài, ghi con số 4000+';
  S.c3_stairs = () => R(0, 0, 400, 300, '#ffe9c4') + Ci(340, 60, 34, '#ffdf7a') + stairs(30, 290, 8, 40, 30) + feng(250, 70, { s: .45, m: 'grin' }) + Pa('M300 40 l20 -10 M310 70 l24 0', 'none', `stroke="${C.org}" stroke-width="4"`);
  L.c3_stairs = 'Anh Phong bước lên những bậc thang dài hướng về phía mặt trời';
  S.c3_lifePath = () => R(0, 0, 400, 300, '#eef6e8') + Pa('M0 260 Q120 200 200 230 T400 160', 'none', 'stroke="#cdb79a" stroke-width="26" stroke-linecap="round"') +
    person(60, 200, { s: .25, hs: 'short', shirt: C.butter, m: 'grin' }) + person(170, 176, { s: .33, hs: 'short', shirt: C.teal }) + person(280, 150, { s: .38, hs: 'short', shirt: C.navy, m: 'smile' }) + person(360, 110, { s: .38, hs: 'short', hair: C.hairW, shirt: '#7a6a4f', gl: 'round' });
  L.c3_lifePath = 'Con đường đời: cùng một người lúc nhỏ, lớn lên, trưởng thành, về già';
  S.c3_steps = () => R(0, 0, 400, 300, '#eef1f5') + stairs(120, 290, 5, 46, 30) + door(340, 140, .8) + person(190, 140, { s: .5, hs: 'bun', hair: C.hairW, shirt: C.plum, m: 'smile' }) + Ln(160, 200, 150, 260, C.brown, 5);
  L.c3_steps = 'Bà cụ chống gậy chậm rãi bước lên các bậc thềm trước cửa';
  S.c3_future = () => sky('#ffe9c4') + sun(200, 150, 30) + R(0, 180, 400, 120, '#a8d48f') + Pa('M170 300 L200 180 L210 180 L250 300Z', '#e2cfa8') + person(120, 200, { s: .4, hs: 'pony', shirt: C.pink, m: 'grin' }) + hand(150, 186, 6) + Pa('M260 120 L300 100 L292 116 L318 118 L284 134Z', C.org);
  L.c3_future = 'Một cô bé nhìn về con đường xa dẫn tới mặt trời đang lên';
  S.c3_coupleTalk = () => R(0, 0, 400, 300, '#f6efe6') + R(0, 236, 400, 64, '#d9c4a8') + globe(200, 110, 56) + feng(90, 140, { s: .6, m: 'open' }) + wife(310, 140, { s: .6, m: 'grin' }) + Pa('M140 60 q10 -14 20 0', 'none', `stroke="${C.org}" stroke-width="3"`);
  L.c3_coupleTalk = 'Hai vợ chồng đứng hai bên quả địa cầu, say sưa nói chuyện về thế giới';
  S.c3_wife = () => R(0, 0, 400, 300, '#fdf1e8') + R(0, 236, 400, 64, '#e8d3b0') + feng(130, 120, { s: .75, m: 'grin', collar: '#fff' }) + wife(260, 124, { s: .72, m: 'grin' }) + hand(190, 186, 10) + person(360, 160, { s: .45, hs: 'quiff', shirt: C.org, m: 'smile', flip: 1 });
  L.c3_wife = 'Anh Phong giới thiệu vợ mình với một người khách';
  S.c3_era = () => R(0, 0, 400, 300, '#eef4fb') + Ln(30, 220, 370, 220, C.ink, 4) + Pa('M362 212 L380 220 L362 228Z', C.ink) +
    R(50, 120, 60, 80, '#8a6a4a', 6) + Ci(80, 150, 16, '#2b2f3a') + R(160, 110, 40, 90, '#3b4152', 6) + R(166, 120, 28, 30, '#9fd0f0', 2) + phone(290, 160, 2.6) + Tx(80, 250, '1980', 18, C.ink) + Tx(180, 250, '2000', 18, C.ink) + Tx(290, 250, '2020', 18, C.ink);
  L.c3_era = 'Dòng thời gian: tivi cũ, điện thoại cũ, rồi điện thoại thông minh';
  S.c3_choice = () => sky('#ffe9c4') + R(0, 180, 400, 120, '#a8d48f') + Pa('M200 300 L200 220 L60 180 M200 220 L340 180', 'none', 'stroke="#e2cfa8" stroke-width="22" stroke-linecap="round"') + house(60, 160, .4) + R(290, 170, 110, 26, '#4f9ac6') + Ln(300, 182, 330, 182, 'rgba(255,255,255,.6)', 2) + boat(350, 172, .2, { rb: 1 }) +
    R(194, 120, 12, 100, C.brown) + Pa('M206 126 L270 126 L282 138 L270 150 L206 150Z', '#ffd166', `stroke="${C.ink}" stroke-width="2"`) + Pa('M194 156 L130 156 L118 168 L130 180 L194 180Z', '#ffd166', `stroke="${C.ink}" stroke-width="2"`) + feng(200, 260, { s: .3, m: 'smile' });
  L.c3_choice = 'Ngã ba đường có biển chỉ hướng: một lối về nhà, một lối ra biển';
  S.c3_nextStop = () => R(0, 0, 400, 300, '#cfe9f5') + Pa('M40 40 L150 30 L170 100 L120 140 L50 110Z', '#b9d6a4') + Pa('M230 190 L330 180 L350 240 L270 260 L230 230Z', '#e8c98a') + Pa('M360 250 L380 246 L384 280 L366 284Z', '#b9d6a4') +
    Pa('M140 110 Q240 120 280 200', 'none', `stroke="${C.red}" stroke-width="4" stroke-dasharray="10 8"`) + Pa('M290 214 Q340 220 366 258', 'none', `stroke="${C.red}" stroke-width="4" stroke-dasharray="10 8"`) + boat(210, 150, .2, { rb: 1 }) + Ci(140, 110, 7, C.red);
  L.c3_nextStop = 'Bản đồ: đường đi từ Trung Quốc xuống nước Úc rồi New Zealand';
  S.c3_northWind = () => sky('#dfeaf5') + sea(190) + boat(260, 236, .7, { rb: 1 }) + [[40, 60], [70, 110], [30, 150]].map(([x, y]) => Pa(`M${x} ${y} q30 -12 60 0 t60 0`, 'none', 'stroke="#8aa3c0" stroke-width="5" stroke-linecap="round"') + Pa(`M${x + 120} ${y - 8} l14 8 l-14 8Z`, '#8aa3c0')).join('') +
    cal(330, 60, .9) + Tx(330, 70, '11', 16, C.red) + feng(240, 176, { s: .28, hat: capHat(), m: 'grin' });
  L.c3_northWind = 'Gió bấc thổi về phương nam, thuyền buồm sẵn sàng; tờ lịch tháng 11';
  CH3.SC = S; CH3.SCENE_LABEL = L;
  if (typeof SC !== 'undefined') Object.assign(SC, S);
  if (typeof SCENE_LABEL !== 'undefined') Object.assign(SCENE_LABEL, L);
})();

(typeof regChapter === 'function' ? regChapter : (n, d, a) => (window.__pendingCh = window.__pendingCh || []).push([n, d, a]))(3, CH3, {"见": "audio/760f49a7df33.mp3", "儿": "audio/247a60b43443.mp3", "M|一辈子": "audio/eabbeb3c299f.mp3", "MS|一辈子": "audio/7615c019467a.mp3", "M|农村": "audio/04eb35f58f47.mp3", "MS|农村": "audio/93bfaf3fd3bf.mp3", "M|断": "audio/e08d010b0691.mp3", "MS|断": "audio/6523f8dbc0c2.mp3", "一辈子": "audio/f8a7e016d9e0.mp3", "农村": "audio/f7478d01dcb1.mp3", "吃": "audio/fd252d703291.mp3", "毕业": "audio/ddffeafb97d3.mp3", "断": "audio/9adf3bcbc228.mp3", "城": "audio/354de14daeb3.mp3", "搬": "audio/8195f210b435.mp3", "回": "audio/57635deb7064.mp3", "辆": "audio/e10ae9c1f973.mp3", "周末": "audio/d5142a658f15.mp3", "国": "audio/1da5c62355e2.mp3", "件": "audio/d0324c16bf4a.mp3", "记": "audio/86e036edeb03.mp3", "常常": "audio/4c74de1ddb0e.mp3", "今": "audio/8d9ef6ae8af9.mp3", "每": "audio/dbc6ddad9f3e.mp3", "八": "audio/aa757c76e2fc.mp3", "哥哥": "audio/aaafef034cf8.mp3", "房间": "audio/290c5f247d25.mp3", "M|打工": "audio/04cd4c299915.mp3", "MS|打工": "audio/9fc975aae7d0.mp3", "打工": "audio/0345cec18d96.mp3", "钱": "audio/bd3d68681d15.mp3", "东西": "audio/50379588f78a.mp3", "房": "audio/e2449bfe5a5f.mp3", "完": "audio/238814682432.mp3", "时": "audio/f69b6db08004.mp3", "正在": "audio/1895c66faf9a.mp3", "提": "audio/799aded32914.mp3", "饭馆": "audio/5a887e458f47.mp3", "二": "audio/6c5af8fe53bc.mp3", "中午": "audio/ab54a9f397b3.mp3", "非常": "audio/5de0696e512f.mp3", "门": "audio/b90d4ff492a1.mp3", "学习": "audio/b06bdee78fc5.mp3", "急": "audio/889faef7c74f.mp3", "外地": "audio/5c7cb97f74cd.mp3", "忘": "audio/3ace613e0122.mp3", "些": "audio/f211cdec0625.mp3", "汽车": "audio/fe15947787e8.mp3", "风": "audio/0566200fd92e.mp3", "干": "audio/db0e178456cd.mp3", "床": "audio/bb0df28067eb.mp3", "厨房": "audio/a6d0a5570812.mp3", "已经": "audio/3530c846441f.mp3", "刚才": "audio/c62ef9b886e8.mp3", "只是": "audio/c30e23836567.mp3", "热情": "audio/571670474c54.mp3", "流": "audio/37f7a1e13b45.mp3", "因为": "audio/e29cff629566.mp3", "带": "audio/3caa2c538cdd.mp3", "太阳": "audio/1d57f492d337.mp3", "条": "audio/0543625c1fdc.mp3", "旅行": "audio/7fabbe9d4613.mp3", "停": "audio/776034e33445.mp3", "吗": "audio/7c377cad9443.mp3", "休息": "audio/04e2a099b2fe.mp3", "舒服": "audio/7371101f387b.mp3", "打电话": "audio/8e2e29d492cb.mp3", "一切": "audio/8e5db12a54d5.mp3", "地里": "audio/243c02ec43c7.mp3", "M|翟峰和妻子都是铁路工人工作稳定待遇不错": "audio/630dc44da6ab.mp3", "她的工作很稳定收入也不错": "audio/5312d4f6c176.mp3", "翟峰和妻子都是铁路工人工作稳定待遇不错": "audio/58178fa56700.mp3", "考试快到了他每天都为考试发愁": "audio/0943eec3b9a7.mp3", "M|他们有房有车从不用为生活发愁": "audio/ca1420af5cd4.mp3", "翟峰一家没有房子每天都为生活发愁": "audio/99928cef599f.mp3", "M|可翟峰却不想一辈子过这样平静的生活": "audio/610a65c1c652.mp3", "风停了海面又变得很平静": "audio/487e85078b3a.mp3", "M|通过电视翟峰迷上了帆船他觉得帆船能带他撞开世界之门": "audio/36171aef3c01.mp3", "他走路看手机撞到了一棵树": "audio/56682f6f1f5a.mp3", "M|只要有一艘船就能航行在无边无际的海上到任何自己想去的地方": "audio/af1773d8702f.mp3", "海上有两艘帆船": "audio/33c570db1e2b.mp3", "这艘船在海上航行了十天": "audio/96e37d3d793c.mp3", "M|由于翟峰和妻子没有积蓄于是卖房卖车买下了一艘二手船翟峰叫它彩虹号": "audio/0a8302766c53.mp3", "我买了一辆二手车很便宜": "audio/02339a50caef.mp3", "雨停了天上出现了一道彩虹": "audio/bd3f2d3de400.mp3", "M|出发前翟峰自学了航海知识": "audio/4b15a2c0a498.mp3", "M|然而包括翟峰的父母所有人都觉得翟峰疯了": "audio/76783e52ed96.mp3", "我们班所有人包括老师都去看电影了": "audio/c8bc18de686e.mp3", "大家都说他疯了": "audio/9c3f16d4bd1b.mp3", "这个价格包括早饭和晚饭": "audio/99c145507835.mp3", "这些工人每天工作八个小时很辛苦": "audio/c969496bd1fd.mp3", "他爸爸是工人妈妈是老师": "audio/3e23bc08e5e2.mp3", "我爸爸以前是铁路工人": "audio/080d8a665d95.mp3", "他想找一份稳定的工作每个月的收入都差不多": "audio/7a96c36b1c84.mp3", "她的收入一直很稳定": "audio/f49f62e135f2.mp3", "这家公司待遇很好很多人都想来工作": "audio/878e7f29a37e.mp3", "这份工作待遇不错就是有点儿累": "audio/2a5430f01389.mp3", "他觉得现在的工作待遇太低了": "audio/70058b183ef5.mp3", "别为这点儿小事发愁了明天再说吧": "audio/edeb47813b51.mp3", "他每天都为考试发愁": "audio/56137428dcfb.mp3", "她一直在为考试发愁": "audio/914087f7ea02.mp3", "听了妈妈的话他的心情慢慢平静下来了": "audio/7dfb9474b834.mp3", "今天没有风海面很平静": "audio/f5918af59ad3.mp3", "我喜欢这样平静的生活": "audio/a9d9ee8b61a0.mp3", "我从小就想坐帆船去海上": "audio/4d62b1dd80b1.mp3", "海上有一艘白色的帆船正向我们开过来": "audio/fc3f71a56828.mp3", "他骑车太快撞倒了一个老人": "audio/e2778d404ac4.mp3", "他开车的时候撞到了一棵树": "audio/8f21e798ede1.mp3", "海上有两艘船": "audio/2fc2bb2ce7cf.mp3", "我们的船已经在海上航行了三天": "audio/936457a3161f.mp3", "他们没有积蓄只能卖房子": "audio/6d7339d45a57.mp3", "他把所有的积蓄都用来买房子了": "audio/5a3eeceed29c.mp3", "我想买一辆二手车": "audio/402c68920472.mp3", "我没有多少钱只能买一辆二手车": "audio/3c0b149dcd99.mp3", "下完雨孩子们看到了彩虹": "audio/ce9c2be31e59.mp3", "你看那边有一道彩虹": "audio/7be7a143da91.mp3", "这个价格包括早饭不包括晚饭": "audio/a59b76818389.mp3", "天这么冷你还要去游泳疯了吗": "audio/221446033ff2.mp3", "大家都觉得他疯了": "audio/5fa0152d1864.mp3", "M|工人": "audio/b32bf8917479.mp3", "M|我爸爸以前是铁路工人": "audio/7e98827ca11b.mp3", "M|这些工人每天工作八个小时": "audio/ea8879762bcc.mp3", "M|稳定": "audio/2964f435af4a.mp3", "M|他想找一份稳定的工作": "audio/3f5a3c1f8e34.mp3", "M|她的收入很稳定每个月都差不多": "audio/34935fa7cf12.mp3", "M|待遇": "audio/ffe457cdcff1.mp3", "M|这家公司待遇很好很多人想来工作": "audio/bbbfd0d6b679.mp3", "M|他觉得现在的工作待遇太低了": "audio/30b2f3681e98.mp3", "M|发愁": "audio/5dcda142a653.mp3", "M|别为这件小事发愁了": "audio/31f257484086.mp3", "M|他每天都为找工作发愁": "audio/d2a085b764cc.mp3", "M|平静": "audio/3375c6604997.mp3", "M|今天没有风海面很平静": "audio/9d3c96883454.mp3", "M|听了他的话我的心情慢慢平静了": "audio/d59990c53671.mp3", "M|帆船": "audio/7b053b0210d0.mp3", "M|他从小就喜欢帆船": "audio/b6c44dd89373.mp3", "M|海上有一艘白色的帆船": "audio/c5d9d7ee7eb7.mp3", "M|撞": "audio/346b8043082c.mp3", "M|他走路看手机撞到了一棵树": "audio/67df45e5d16c.mp3", "M|小心别撞倒那个孩子": "audio/a127e6d8ad2c.mp3", "M|艘": "audio/259b351c4a3a.mp3", "M|海上有三艘船": "audio/673d0091d6dc.mp3", "M|他买了一艘小船": "audio/beab75235ddc.mp3", "M|航行": "audio/5ef2580beb84.mp3", "M|这艘船在海上航行了十天": "audio/d1992540835e.mp3", "M|我们的船正在大海上航行": "audio/f3a2fb0f845f.mp3", "M|积蓄": "audio/d805c3cb2844.mp3", "M|他把所有的积蓄都用来买房子了": "audio/2d474f46e1cc.mp3", "M|工作十年她有了一些积蓄": "audio/19eca94c02fb.mp3", "M|二手": "audio/0dbad9a15df5.mp3", "M|我买了一辆二手车很便宜": "audio/4cf863717fd0.mp3", "M|这些都是二手书可是很新": "audio/d85e039835a6.mp3", "M|彩虹": "audio/74b9cc319c24.mp3", "M|雨停了天上出现了一道彩虹": "audio/ee57263f5808.mp3", "M|你看那边有彩虹": "audio/49c512983cf3.mp3", "M|包括": "audio/460a42a33e11.mp3", "M|我们班所有人包括老师都去了": "audio/54754a2fd93c.mp3", "M|这个价格包括早饭": "audio/329730ba47f2.mp3", "M|疯": "audio/7838f6772a14.mp3", "M|你疯了吗这么冷还去游泳": "audio/c61431879aca.mp3", "M|大家都觉得他疯了": "audio/73028406563e.mp3", "翟峰": "audio/58919c96ddad.mp3", "铁路": "audio/b18385b0d139.mp3", "工人": "audio/c5953a2ec8c2.mp3", "稳定": "audio/27f81cc5bf67.mp3", "待遇": "audio/25d4149d30e4.mp3", "错": "audio/659bc97f1c8c.mp3", "收入": "audio/1aff8677b317.mp3", "发愁": "audio/e23fcdee5370.mp3", "这样": "audio/896d7c581593.mp3", "平静": "audio/7965dd812e13.mp3", "海面": "audio/023c1986c90e.mp3", "变": "audio/2f90b4e622ed.mp3", "通过": "audio/35805fe05c62.mp3", "迷上": "audio/8a317123c940.mp3", "帆船": "audio/a0b1663cf01d.mp3", "撞": "audio/6d6a9016b8c7.mp3", "世界之门": "audio/b7a0a8f70970.mp3", "棵": "audio/935755b27f82.mp3", "艘": "audio/e5ab74c091be.mp3", "船": "audio/372b541d63e1.mp3", "航行": "audio/964016b8b16a.mp3", "无边无际": "audio/0f870a610b38.mp3", "海": "audio/8870eeb5b759.mp3", "地方": "audio/ec569d509a48.mp3", "四": "audio/2cf4284ac650.mp3", "由于": "audio/f931cde61886.mp3", "积蓄": "audio/4a390d1cf19a.mp3", "于是": "audio/b70cc44439e5.mp3", "卖房卖车": "audio/41e4644e6a5c.mp3", "二手": "audio/56c494ac5b15.mp3", "彩虹号": "audio/ad0f52787123.mp3", "便宜": "audio/6bd8517dba73.mp3", "出现": "audio/32aa9c69ef72.mp3", "道": "audio/c0d2a02642e0.mp3", "彩虹": "audio/044bbaa08636.mp3", "自学": "audio/70a685aaef67.mp3", "航海": "audio/49e9584d9026.mp3", "知识": "audio/d3b6b623f069.mp3", "包括": "audio/0c8f87c4a502.mp3", "所有": "audio/786f18e744fb.mp3", "疯": "audio/93f3da126a64.mp3", "辛苦": "audio/a7594e31cae6.mp3", "份": "audio/67708bbc1a94.mp3", "差不多": "audio/13ddb71d6172.mp3", "公司": "audio/84b2d85fda40.mp3", "低": "audio/e6b81273c084.mp3", "心情": "audio/c8015325a8d3.mp3", "慢慢": "audio/9807ee797eaf.mp3", "白色": "audio/7e7855a716bf.mp3", "向": "audio/97a0af7402e7.mp3", "骑车": "audio/e9cc03da96e6.mp3", "倒": "audio/e34fb7cd33a4.mp3", "卖": "audio/28dd40cc030a.mp3", "那边": "audio/4ab2152fd4c2.mp3", "游泳": "audio/76d34eb2d2fc.mp3", "小船": "audio/5ee1a4384a69.mp3", "大海": "audio/672723fd5351.mp3", "当": "audio/c9005e46c353.mp3", "关系": "audio/406ab83670fb.mp3", "读": "audio/5514e3fa100c.mp3", "MS|工人": "audio/d812b7a650ed.mp3", "MS|稳定": "audio/046a513d60f4.mp3", "MS|待遇": "audio/75d5568e9fca.mp3", "MS|发愁": "audio/30b0cf03709b.mp3", "MS|平静": "audio/9c8cebedbc2c.mp3", "MS|帆船": "audio/43fedcc48567.mp3", "MS|撞": "audio/b6a2b84a2108.mp3", "MS|艘": "audio/b767a4fd6133.mp3", "MS|航行": "audio/85279fc84e0e.mp3", "MS|积蓄": "audio/70e6823895f5.mp3", "MS|二手": "audio/c94f41a2618c.mp3", "MS|彩虹": "audio/169ea8faf920.mp3", "MS|包括": "audio/4e54b354494d.mp3", "MS|疯": "audio/741000749172.mp3", "M|年月日辞了职的翟峰和妻子带着休学的女儿第一次驾驶帆船出海了": "audio/467db185f739.mp3", "她辞了职在家照顾孩子": "audio/b084a1a5b9c2.mp3", "他第一次驾驶帆船出海有点儿紧张": "audio/0da51025a41e.mp3", "M|白天翟峰和妻子轮流驾船": "audio/f974eb30c93d.mp3", "我和哥哥轮流照顾生病的奶奶": "audio/dd93cb674456.mp3", "M|女儿在船上看书学习画画儿": "audio/b82dce1e792c.mp3", "在船上女儿每天都要帮爸爸驾船": "audio/2e2b2188d934.mp3", "我们三个人轮流开车": "audio/ba7827fda2ef.mp3", "M|下午海面平静时翟峰会和妻子下海游泳或者钓鱼": "audio/554c9f07604c.mp3", "爷爷每个周末都去河边钓鱼": "audio/b868b0aecda2.mp3", "M|该吃饭时妻子会给全家人做一顿美味的海鲜": "audio/d5a7b5c0258b.mp3", "今天晚上我请你吃一顿饭": "audio/1aafd15fb440.mp3", "住在海边的人常常吃海鲜": "audio/cd5a5687ffbc.mp3", "妻子每天都去饭馆给全家人买海鲜": "audio/1c4d3c0503b0.mp3", "一顿饭": "audio/0d72eb9b1e04.mp3", "我不太喜欢吃海鲜": "audio/e93e2f2a9408.mp3", "M|傍晚是一家人最舒适的时候": "audio/3ab4199e20c3.mp3", "傍晚的时候太阳快要下山了": "audio/198a1dd44b58.mp3", "听了他的话我心里很不舒服": "audio/16ea08931a5e.mp3", "M|干完活儿一家人坐在一起用电脑看看电影或者聊聊天儿": "audio/3018221c48fb.mp3", "干完活儿我们一起去吃饭吧": "audio/0c0b6dcb95f8.mp3", "这家饭店的房间很舒适就是有点儿贵": "audio/a4506f391934.mp3", "傍晚一家人坐在一起看电影聊天儿": "audio/39bee2a5f288.mp3", "M|这样的生活是翟峰盼望已久的": "audio/e9c77f557c88.mp3", "孩子们天天盼望着过年": "audio/3cd7ed273088.mp3", "M|以前陆地上的夜晚他们在各自的房间一家人没有更多的交流": "audio/acabf72b1f04.mp3", "在海上航行了一个月我们终于看到了陆地": "audio/76ad1a138c59.mp3", "下课以后同学们各自回家了": "audio/80f00dd45f8c.mp3", "以前在陆地上一家人晚上常常坐在一起聊天儿": "audio/813d4e7dac84.mp3", "盼望好消息": "audio/775bc6d8a566.mp3", "M|中国有句老话可上山勿下海": "audio/6a259f23b10a.mp3", "图书馆里请勿大声说话": "audio/ea31358eb532.mp3", "M|美好的时刻过去后是一个个紧张的夜晚": "audio/de93a675489c.mp3", "在最后时刻他踢进了一个球": "audio/f3cc54e7131b.mp3", "M|一路上翟峰一家经历了船身着火漏水等大大小小十多次险情": "audio/22437a90fca4.mp3", "下雨了房子又漏水了": "audio/126a68f70427.mp3", "那天晚上他家旁边的房子着火了": "audio/27af1768fec0.mp3", "M|他们最怕雷电交加的时刻": "audio/fe23557bf768.mp3", "天黑了天上突然出现了一道闪电": "audio/dc140633d358.mp3", "M|因为小船随时有可能被下一道闪电击到一家三口只能紧紧拥抱在一起希望闪电快快过去": "audio/b052d7a81847.mp3", "有问题你随时给我打电话": "audio/971e605ca654.mp3", "见到多年不见的老朋友他们紧紧地拥抱在一起": "audio/8fc7ca18dea0.mp3", "M|在经历了八个月航行了多海里之后翟峰一家终于回到了家": "audio/6becfe6876ca.mp3", "我们的船已经航行了一千多海里": "audio/539f2b8321aa.mp3", "翟峰一家在海上航行了八年": "audio/c1136bd17d05.mp3", "M|翟峰相信一切只是开始航海就是他人生道路上一段长长的台阶通向他想要的未来": "audio/4309ebdc75c7.mp3", "奶奶慢慢地走上台阶": "audio/7ea49404639f.mp3", "我们都希望有一个美好的未来": "audio/fc23c8efa8ff.mp3", "这是我人生中最重要的一天": "audio/9ca882fa6260.mp3", "M|我和太太想要看看这个时代这个世界到底是什么样子": "audio/7ead1cedbb54.mp3", "这是我太太她也是老师": "audio/6df478911958.mp3", "时代变了人们的生活也变了": "audio/fc9acba19f83.mp3", "M|人生有选择一切可改变": "audio/7b0b1eff4fc3.mp3", "回家以后翟峰觉得再也不想出海了": "audio/6bbac36fd72a.mp3", "M|下一站他们想去澳洲和新西兰": "audio/26b159f64b1c.mp3", "M|等待今年月的北风北风南下之时他们将再次出发": "audio/422bb4e4a786.mp3", "人生有选择": "audio/761a18e1ba55.mp3", "他们想等北风来了以后再次出发": "audio/0d633ba55b2c.mp3", "我今天有点儿不舒服想早点儿睡": "audio/3030546fcc1a.mp3", "杯子漏了水都漏光了": "audio/43f65e9472c2.mp3", "他们一共航行了四千多海里": "audio/ce5467dbfa08.mp3", "她上个月辞职了现在在家照顾孩子": "audio/826d00ae4210.mp3", "她上个月辞职了": "audio/30d8a445d095.mp3", "驾驶汽车的时候不能看手机": "audio/06d760bf37b9.mp3", "他第一次驾驶帆船出海": "audio/f74209192cdb.mp3", "晚上我们轮流开车": "audio/538dba06aac9.mp3", "他钓了一下午一条鱼也没钓到": "audio/e07fea0b92f3.mp3", "他钓了一下午的鱼": "audio/1faad477b7a1.mp3", "他一天只吃两顿饭": "audio/3ec128850a86.mp3", "这家饭馆的海鲜很新鲜": "audio/7eba4220195e.mp3", "每天傍晚我都去河边跑步": "audio/ed5682411e75.mp3", "我们都需要一个舒适的生活环境": "audio/8947f5f5a6b4.mp3", "他每天在船上干活儿很辛苦": "audio/0656ead3d38f.mp3", "他在地里干了一天活儿": "audio/f15cd64190cf.mp3", "我们都在盼望你的好消息": "audio/26125f95277f.mp3", "我还是喜欢住在陆地上": "audio/509ba673af7e.mp3", "他们俩各自说了自己的意见": "audio/1d63a2780b27.mp3", "这是别人的东西请勿拿走": "audio/c8c7beea404b.mp3", "我永远不会忘记那个时刻": "audio/108c6ddaa924.mp3", "厨房着火了快打电话": "audio/41c0aac5cf12.mp3", "外面打雷了快回家吧": "audio/9c82ba6608c4.mp3", "孩子怕打雷晚上睡不着": "audio/341b15c497c6.mp3", "天要下雨了随时都可能打雷": "audio/706e368bc763.mp3", "刚才天上出现了两道闪电": "audio/9d0298f1c3ba.mp3", "看到闪电以后孩子马上跑回了家": "audio/da2fa3baef70.mp3", "那棵大树被闪电击到了": "audio/063d0d485e38.mp3", "见到妈妈孩子跑过去紧紧地拥抱她": "audio/03f6128f9cfe.mp3", "毕业那天同学们热情地拥抱在一起": "audio/573f143f82db.mp3", "这艘船一天能航行两百海里": "audio/2eb4ae599b4b.mp3", "每个人的人生都会有很多选择": "audio/38a3c602302e.mp3", "门口有很多台阶你慢点儿走": "audio/4150618406f6.mp3", "学校门口有很多台阶": "audio/67d172ee308d.mp3", "你想过自己未来的生活吗": "audio/cc278beda434.mp3", "我太太是医生我是老师": "audio/9ad617870392.mp3", "王太太每天早上都去公园散步": "audio/b8ad5b9a4f2a.mp3", "每个时代都有自己的问题": "audio/b6a39c37cc75.mp3", "翟峰和妻子以前都是老师": "audio/36b28a9e514a.mp3", "翟峰卖房卖车买了一艘新船": "audio/5ecf0e8db768.mp3", "出海以前翟峰的父母很支持他": "audio/1257e12cf57e.mp3", "在船上翟峰和妻子轮流驾船": "audio/caabfd80a312.mp3", "以前在陆地上一家人晚上都在各自的房间": "audio/c78436dc21c4.mp3", "一路上他们没有遇到什么危险": "audio/c21ca7590304.mp3", "翟峰觉得航海只是一个开始": "audio/43d32ff78a69.mp3", "今天晚上妈妈给我们做了一顿海鲜": "audio/5ba0c38a5c7e.mp3", "我们家所有人包括我奶奶都喜欢吃海鲜": "audio/5df5e5da7265.mp3", "见到妈妈孩子紧紧地拥抱着她": "audio/e9bea1f59c99.mp3", "听说你辞职了": "audio/8cda66fefb12.mp3", "M|对我想先休息半年然后去旅行": "audio/1dba6161d9ec.mp3", "今天晚上我们吃什么": "audio/a2b429ba8cc5.mp3", "M|去海边吃一顿海鲜吧我请你": "audio/c3819b1a023a.mp3", "外面打雷了你还要出去吗": "audio/6544770a0a05.mp3", "M|不出去了随时可能下大雨": "audio/0f929b589f4c.mp3", "我哥哥大学毕业以后在一家公司工作了五年他的工作很稳定待遇也不错可是他总觉得生活太平静了去年他辞了职去外地开了一家咖啡店": "audio/a80886228276.mp3", "以前我们一家人住在城里晚上大家都在各自的房间里看手机很少说话今年我们搬到了农村每天晚上一起吃饭聊天儿这样的生活是我盼望已久的": "audio/d3e2f0174cfe.mp3", "中国有句老话可上山勿下海意思是去山上没问题可是不要去海上因为海上太危险了": "audio/765e05bdbd9a.mp3", "白天他们轮流驾驶帆船": "audio/58a3af8497ca.mp3", "傍晚的海边非常舒适": "audio/e9a556bc4ada.mp3", "他们紧紧地拥抱在一起": "audio/895c4568f309.mp3", "人生有很多选择未来可以改变": "audio/f3d2e580ff47.mp3", "M|辞职": "audio/b8e1409accee.mp3", "M|她辞了职在家照顾孩子": "audio/babf521df996.mp3", "M|他上个月辞职了想自己开一家咖啡店": "audio/29ecaf014b4d.mp3", "M|驾驶": "audio/8c6101d8c0a6.mp3", "M|他第一次驾驶飞机的时候非常紧张": "audio/262a80197c8f.mp3", "M|驾驶汽车的时候不能看手机": "audio/f3c3123afb5c.mp3", "M|轮流": "audio/e86f489b7ec5.mp3", "M|我和哥哥轮流照顾生病的奶奶": "audio/73106fe8da9f.mp3", "M|晚上我们轮流开车一个人开一个人睡觉": "audio/790d59d575bd.mp3", "M|钓": "audio/66fab6fe7e76.mp3", "M|爷爷每个周末都去河边钓鱼": "audio/94d526151897.mp3", "M|他钓了一下午一条鱼也没钓到": "audio/531171e04453.mp3", "M|顿": "audio/f995771c2933.mp3", "M|今天晚上我请你吃一顿饭": "audio/866ce3fc440a.mp3", "M|他一天只吃两顿饭": "audio/301c6d1ec498.mp3", "M|海鲜": "audio/6308fd92c70b.mp3", "M|住在海边的人常常吃海鲜": "audio/86ddd5aa2343.mp3", "M|这家饭馆的海鲜很新鲜": "audio/57d3891323fc.mp3", "M|傍晚": "audio/db2e7032dd09.mp3", "M|傍晚的时候很多人在公园里散步": "audio/32df8e35d647.mp3", "M|每天傍晚我都去河边跑步": "audio/d0867c230d07.mp3", "M|舒适": "audio/5a603ce012c1.mp3", "M|这家饭店的房间很舒适": "audio/e708ead34198.mp3", "M|我们都需要一个舒适的生活环境": "audio/ddf0e2f2f7c7.mp3", "M|干活儿": "audio/f0865cf1946f.mp3", "M|干完活儿我们一起去吃饭吧": "audio/c303956c435e.mp3", "M|他每天在船上干活儿很辛苦": "audio/34a3368c5eef.mp3", "M|盼望": "audio/cccd88695d68.mp3", "M|孩子们天天盼望着过年": "audio/9159f00af523.mp3", "M|我们都在盼望你的好消息": "audio/9eca15b7e2c6.mp3", "M|陆地": "audio/f93e35e3d6cd.mp3", "M|在海上航行了一个月我们终于看到了陆地": "audio/92798fa722f1.mp3", "M|我还是喜欢住在陆地上": "audio/443bb34f05c3.mp3", "M|各自": "audio/58b24086f090.mp3", "M|下课以后同学们各自回家了": "audio/f5a6ad6ef009.mp3", "M|他们俩各自说了自己的意见": "audio/30551b625205.mp3", "M|勿": "audio/5344a999419a.mp3", "M|图书馆里请勿大声说话": "audio/780fe99c1822.mp3", "M|这是别人的东西请勿拿走": "audio/00d075c9d5f5.mp3", "M|时刻": "audio/00cc50739bee.mp3", "M|在最后时刻他踢进了一个球": "audio/a2e418c75b37.mp3", "M|我永远不会忘记那个时刻": "audio/28a0ef659a29.mp3", "M|着火": "audio/d24a0b131325.mp3", "M|厨房着火了快打电话": "audio/a645db8b5e51.mp3", "M|那天晚上他家旁边的房子着火了": "audio/6e1ba9d1814a.mp3", "M|漏": "audio/cf467fd00cf9.mp3", "M|下雨了房子又漏水了": "audio/05673f6052fe.mp3", "M|杯子漏了水都漏光了": "audio/597f9c9a12f0.mp3", "M|雷": "audio/eb16eb6ad25f.mp3", "M|外面打雷了快回家吧": "audio/4d138b060985.mp3", "M|孩子怕打雷晚上睡不着": "audio/23e7ee25206e.mp3", "M|随时": "audio/25b549f72b37.mp3", "M|有问题你随时给我打电话": "audio/8c8796a0d520.mp3", "M|天要下雨了随时都可能打雷": "audio/2b4e2b70ec89.mp3", "M|闪电": "audio/6a1d5336c816.mp3", "M|天上突然出现了一道闪电": "audio/4fa84a33f967.mp3", "M|看到闪电以后孩子马上跑回了家": "audio/abff7d1f350a.mp3", "M|击": "audio/655fe6c4f939.mp3", "M|那棵大树被闪电击到了": "audio/bedfca42927e.mp3", "M|雷电交加的时候别站在大树下小心被闪电击到": "audio/14cfd2436bfc.mp3", "M|拥抱": "audio/511d3c293f34.mp3", "M|见到妈妈孩子跑过去紧紧地拥抱她": "audio/3080609351c7.mp3", "M|毕业那天同学们热情地拥抱在一起": "audio/24c25500d408.mp3", "M|海里": "audio/3ec71fb23574.mp3", "M|这艘船一天能航行两百海里": "audio/cd82b36c5c54.mp3", "M|我们已经航行了一千多海里": "audio/5921a070febc.mp3", "M|人生": "audio/887979dd9708.mp3", "M|人生有很多选择": "audio/dc1b96e9e613.mp3", "M|这是我人生中最重要的一天": "audio/2619ccc23604.mp3", "M|台阶": "audio/7d0681cda5d0.mp3", "M|奶奶慢慢地走上台阶": "audio/dc1435994d37.mp3", "M|学校门口有很多台阶": "audio/b0b91c7f98d5.mp3", "M|未来": "audio/4ce177440790.mp3", "M|我们都希望有一个美好的未来": "audio/81912bc11d7f.mp3", "M|你想过自己未来的生活吗": "audio/fb0407bcc705.mp3", "M|太太": "audio/b66554220665.mp3", "M|这是我太太她也是老师": "audio/5768dad8e3e1.mp3", "M|王太太每天早上都去公园散步": "audio/7149fccd9fce.mp3", "M|时代": "audio/389a0760b340.mp3", "M|时代变了人们的生活也变了": "audio/48048b8ae30a.mp3", "M|每个时代都有自己的问题": "audio/3014bde45344.mp3", "辞": "audio/7dd1e1ec9343.mp3", "职": "audio/ae6caeff3dfc.mp3", "休学": "audio/569800a2fc84.mp3", "女儿": "audio/e8af252c8d26.mp3", "驾驶": "audio/3a0b77151538.mp3", "出海": "audio/5e10d179dbfd.mp3", "紧张": "audio/31a5b2d227aa.mp3", "白": "audio/af0f142e4805.mp3", "轮流": "audio/e7accfd6e8ea.mp3", "驾船": "audio/d2b250f98616.mp3", "画画儿": "audio/ece70bc8b8ee.mp3", "下午": "audio/372b05e6cd34.mp3", "下海": "audio/d951cda2b238.mp3", "或者": "audio/b9f725c5cb5e.mp3", "钓": "audio/0e07f87bdec7.mp3", "鱼": "audio/1dbee7c613bc.mp3", "河边": "audio/ba7277c6bcd7.mp3", "顿": "audio/56c3c25824c6.mp3", "美味": "audio/04ac3e4daeb9.mp3", "海鲜": "audio/d7431ec121ba.mp3", "海边": "audio/89a9853eb051.mp3", "傍晚": "audio/23a1d5f992e3.mp3", "舒适": "audio/5485759300b2.mp3", "下山": "audio/9857980dee95.mp3", "活儿": "audio/9a48ce2d991e.mp3", "聊": "audio/619c8a4b96dd.mp3", "聊天儿": "audio/0d68b0d0ae26.mp3", "店": "audio/9904bbaf368b.mp3", "贵": "audio/b6fbf4e4dbbb.mp3", "盼望": "audio/5aacda324d2c.mp3", "已久": "audio/8a8529f76d2f.mp3", "陆地": "audio/d097c1b3b81a.mp3", "夜晚": "audio/85702820f7cb.mp3", "各自": "audio/ac21782f584d.mp3", "更": "audio/609a4c0c9e12.mp3", "交流": "audio/ab2aced2df2c.mp3", "同": "audio/74a37564021e.mp3", "老话": "audio/9523782f8200.mp3", "上山": "audio/11307e815f2b.mp3", "勿": "audio/c3a0ce9c0e16.mp3", "图书馆": "audio/ed000a9960a7.mp3", "美好": "audio/284aee5e2cc8.mp3", "时刻": "audio/c17aed6cde26.mp3", "踢": "audio/1ffa30cb740c.mp3", "球": "audio/fb843b5bdd0d.mp3", "一路上": "audio/08040861b064.mp3", "经历": "audio/833c049895d5.mp3", "船身": "audio/cea367a551ad.mp3", "着火": "audio/0d5f02c7a9e3.mp3", "漏": "audio/e108b6b4e033.mp3", "大大小小": "audio/8a34527572f6.mp3", "险情": "audio/ee4e0d2f0030.mp3", "旁边": "audio/c156ee5ae5e7.mp3", "雷": "audio/ae596838216b.mp3", "交加": "audio/6de80491d411.mp3", "突然": "audio/29f62e62223a.mp3", "闪电": "audio/93ef7eacbc6d.mp3", "随时": "audio/23a01476ebd6.mp3", "击": "audio/b480bc243c99.mp3", "一家三口": "audio/c70253d0b02c.mp3", "紧紧": "audio/19c6bfe46d9c.mp3", "拥抱": "audio/4cfe21918e01.mp3", "希望": "audio/625ba53614eb.mp3", "海里": "audio/25b3aa02b609.mp3", "之后": "audio/f273e310190a.mp3", "千": "audio/29a1c63242bd.mp3", "相信": "audio/8a74ba3f3bb3.mp3", "人生": "audio/4949cbcc6ee4.mp3", "道路": "audio/47d99c367806.mp3", "台阶": "audio/196505eee689.mp3", "通向": "audio/27d3b82c57db.mp3", "未来": "audio/b314e04c1444.mp3", "太太": "audio/e5350a388720.mp3", "时代": "audio/6260dfbedd4c.mp3", "世界": "audio/3611900b64f1.mp3", "到底": "audio/a76d0087ee32.mp3", "样子": "audio/cc413a829423.mp3", "选择": "audio/2836f9327d27.mp3", "改变": "audio/1870aa740067.mp3", "下一站": "audio/b6b400f52e6e.mp3", "澳洲": "audio/4d0415a09867.mp3", "新西兰": "audio/74e3d488baca.mp3", "北风": "audio/d0b91086560b.mp3", "南下": "audio/aeab80203f6e.mp3", "之时": "audio/8df23c59186c.mp3", "光": "audio/b55723ca059e.mp3", "一共": "audio/7518b173e25f.mp3", "辞职": "audio/bb01d3fef12f.mp3", "一下午": "audio/b20d5bf88cc7.mp3", "鲜": "audio/2a6b3e0fa84c.mp3", "跑步": "audio/cb266a49d816.mp3", "散步": "audio/c0a160a8861c.mp3", "干活儿": "audio/97f953ba4fe9.mp3", "意见": "audio/0a5ba08cfb67.mp3", "永远": "audio/58989dbed8ab.mp3", "慢": "audio/45b039b70736.mp3", "王": "audio/bbe775ec54d8.mp3", "公园": "audio/7f093ec84a8c.mp3", "支持": "audio/b071896d70a9.mp3", "遇": "audio/895a70885c86.mp3", "危险": "audio/23f8effbb6d8.mp3", "总": "audio/48694b172671.mp3", "咖啡": "audio/fc4117472e9f.mp3", "意思": "audio/07042ffa34b3.mp3", "山": "audio/8aa6239d92e3.mp3", "照看": "audio/a08e6d01bbe2.mp3", "舒舒服服": "audio/0c66e512b49d.mp3", "成功": "audio/79ee1bfb78f0.mp3", "刻": "audio/ab004c4e67ad.mp3", "掉": "audio/2bb77e36e51d.mp3", "MS|辞职": "audio/5d3c3ec00b67.mp3", "MS|驾驶": "audio/4d765cdb8f4d.mp3", "MS|轮流": "audio/15bc31dd6653.mp3", "MS|钓": "audio/a4c8adfc54a9.mp3", "MS|顿": "audio/7c45aa299675.mp3", "MS|海鲜": "audio/5f90381033a7.mp3", "MS|傍晚": "audio/cfcd10b9260a.mp3", "MS|舒适": "audio/411c1c270f8a.mp3", "MS|干活儿": "audio/c600415e97dd.mp3", "MS|盼望": "audio/d0fd3a243df7.mp3", "MS|陆地": "audio/8018339b3d19.mp3", "MS|各自": "audio/d4119a89332d.mp3", "MS|勿": "audio/9844a1640ce8.mp3", "MS|时刻": "audio/a2abbc218962.mp3", "MS|着火": "audio/4ed6818ff579.mp3", "MS|漏": "audio/ee235b4ccdc5.mp3", "MS|雷": "audio/115978c27b28.mp3", "MS|随时": "audio/aec9df431b0c.mp3", "MS|闪电": "audio/452a0f2b4b2a.mp3", "MS|击": "audio/90b8e6212fcb.mp3", "MS|拥抱": "audio/0d8b702f5abd.mp3", "MS|海里": "audio/b780ab881662.mp3", "MS|人生": "audio/5d9d20e028db.mp3", "MS|台阶": "audio/16650d7ebabc.mp3", "MS|未来": "audio/1a6cc4e66788.mp3", "MS|太太": "audio/6ab5152fe8c6.mp3", "MS|时代": "audio/c3d53772c5c4.mp3"});

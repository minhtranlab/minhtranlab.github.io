/* ===== the story IS the book's text: Chapter 1 "爱的细节", paragraphs 1-2, 3 sessions ===== */
const WHO = { n: '' };
/* the printed sentences, in order (the 5th and 6th are one printed sentence, split at the comma for the screen) */
const BOOK = [
  { zh: '电台要选出一对最恩爱的夫妻。', vi: 'Đài phát thanh muốn chọn ra một cặp vợ chồng thắm thiết nhất.' },
  { zh: '对比后，有三对夫妻入围。', vi: 'Sau khi so sánh, có ba cặp vợ chồng lọt vào vòng trong.' },
  { zh: '评委叫第一对夫妻说说他俩是如何恩爱的。', vi: 'Ban giám khảo mời cặp vợ chồng thứ nhất kể xem hai người thắm thiết như thế nào.' },
  { zh: '妻子说，前几年她全身瘫痪了，医生说她站起来的可能性很小。', vi: 'Người vợ kể: mấy năm trước cô bị liệt toàn thân, bác sĩ nói khả năng cô đứng dậy được rất nhỏ.' },
  { zh: '别人都觉得她的丈夫会跟她离婚，她也想过要自杀。', vi: 'Ai cũng nghĩ chồng cô sẽ ly hôn với cô, và cô cũng từng nghĩ đến chuyện tự tử.' },
  { zh: '但丈夫一直鼓励她，为她不知找了多少家医院，', vi: 'Nhưng người chồng luôn động viên cô, vì cô mà đi tìm không biết bao nhiêu bệnh viện,' },
  { zh: '并且几年如一日地照顾她，从不抱怨。', vi: 'và chăm sóc cô nhiều năm như một ngày, chưa bao giờ phàn nàn.' },
  { zh: '在丈夫的爱护和努力下，她终于又站了起来。', vi: 'Nhờ sự yêu thương che chở và nỗ lực của chồng, cuối cùng cô đã đứng dậy được.' },
  { zh: '她的故事十分感人，评委们听了都很感动。', vi: 'Câu chuyện của cô rất cảm động, các giám khảo nghe xong đều rất xúc động.' }
];
const B = i => ({ who: 'n', v: 'm', zh: BOOK[i].zh, vi: BOOK[i].vi });
/* cloze helper */
const cl = (scene, say, vi, full, ok, wrongs, teach, prompt) => ({ t: 'mc', scene, say: [say, vi], full, prompt: prompt || 'Chọn từ điền vào chỗ trống:',
  opts: [{ t: ok, ok: 1, reply: ['对！', 'Đúng!'] }, ...wrongs.map(([t, note]) => ({ t, note }))], teach });
const PK = 'Nghe rồi chọn bức tranh đúng:';
const SESSIONS = [
  { id: 1, title: 'Đài tìm cặp đôi thắm thiết nhất', sub: '4 từ mới', thumb: 'radioBig', words: ['电台', '恩爱', '入围', '对比'], screens: [
    { t: 'story', scene: 'radioBig', lines: [B(0)] },
    { t: 'word', id: '电台', scene: 'radioBig' },
    { t: 'hear', w: ['电台'], s: '我每天晚上都听电台。', opts: ['Mỗi tối mình đều nghe đài.', 'Mỗi tối mình đều xem tivi.', 'Mỗi sáng mình đều đọc báo.'],
      why: '<b>电台</b> = đài phát thanh. <b>听电台</b> = nghe đài. <b>每天晚上</b> = mỗi tối.' },
    { t: 'word', id: '恩爱', scene: 'couple' },
    { t: 'pick', zh: '他们结婚五十年了，还是很恩爱。', vi: 'Họ cưới nhau năm mươi năm rồi mà vẫn rất thắm thiết.', prompt: 'Nghe rồi chọn bức tranh đúng:', opts: [
      { sc: 'pickHold', ok: 1 },
      { sc: 'pickArgue', why: '还是很恩爱 = vẫn rất thắm thiết. Hai người này đang cãi nhau.' },
      { sc: 'pickNew', why: '结婚五十年 là cưới 50 năm rồi, không phải mới cưới.' }],
      teach: '<b>…年了，还是很恩爱</b>: “đã … năm rồi mà vẫn rất thắm thiết”. Câu khen vợ chồng già rất hay gặp.' },
    { t: 'story', scene: 'finalists', lines: [B(1)] },
    { t: 'word', id: '对比', scene: 'compare' },
    { t: 'word', id: '入围', scene: 'finalists' },
    cl('finalists', '这次比赛有一百个人，只有三个人___了。', 'Cuộc thi có một trăm người, chỉ có ba người lọt vào vòng trong.', '这次比赛有一百个人，只有三个人入围了。', '入围', [['对比', '对比 là so sánh. Chỗ này cần nghĩa “lọt vào vòng trong”.'], ['恩爱', '恩爱 là thắm thiết, nói về vợ chồng, không hợp với cuộc thi.']],
      '<b>入围</b> = lọt vào vòng trong (vòng chung kết, danh sách đề cử). Hay đi với 了 / 没: <b>入围了</b>, <b>没入围</b>. Có thể thêm tên giải: 入围决赛.'),
    { t: 'pick', zh: '这两张照片的对比很大：一张很黑，一张很亮。', vi: 'Độ tương phản của hai tấm ảnh rất lớn: một tấm rất tối, một tấm rất sáng.', prompt: 'Nghe rồi chọn đúng cặp ảnh:', opts: [
      { sc: 'pickPhotosDiff', ok: 1 },
      { sc: 'pickPhotosSame', why: 'Hai tấm giống hệt nhau thì không có 对比 mạnh. Câu nói một tấm 黑 (tối), một tấm 亮 (sáng).' },
      { sc: 'pickShop', why: 'Câu này nói về ảnh và sự tương phản, không phải mua đồ.' }],
      teach: '对比 cũng là <b>danh từ</b>: <b>对比很大</b> = tương phản mạnh. Còn <b>对比一下</b> hay <b>对比后</b> (như trong bài) là động từ: so sánh.' },
    { t: 'album', words: ['电台', '恩爱', '入围', '对比'], say: [B(0), B(1)],
      tease: { scene: 'coupleOne', vi: 'ban giám khảo mời cặp thứ nhất kể chuyện. Họ thắm thiết như thế nào?' } }
  ] },
  { id: 2, title: 'Câu chuyện của cặp thứ nhất', sub: '5 từ mới', thumb: 'wheelchair', words: ['评委', '如何', '瘫痪', '离婚', '自杀'], screens: [
    { t: 'story', scene: 'coupleOne', lines: [B(2)] },
    { t: 'word', id: '评委', scene: 'judges' },
    { t: 'word', id: '如何', scene: 'how' },
    { t: 'hear', w: ['评委'], s: '评委们都认真地听她说话。', opts: ['Các giám khảo đều chăm chú nghe cô ấy nói.', 'Các bác sĩ đều chăm chú nghe cô ấy nói.', 'Các giám khảo đều không muốn nghe cô nói.'],
      why: '<b>评委</b> = giám khảo (người chấm trong cuộc thi). <b>认真地听</b> = chăm chú nghe.' },
    { t: 'story', scene: 'wheelchair', lines: [B(3)] },
    { t: 'word', id: '瘫痪', scene: 'jam' },
    { t: 'pick', zh: '他全身瘫痪了，不能走路。', vi: 'Anh ấy bị liệt toàn thân, không đi lại được.', prompt: 'Nghe rồi chọn bức tranh đúng:', opts: [
      { sc: 'pickWheel', ok: 1 },
      { sc: 'pickRun', why: '不能走路 = không đi lại được. Người này đang chạy.' },
      { sc: 'pickJam', why: '瘫痪 cũng dùng cho giao thông, nhưng câu này nói về 他 (một người), 全身 = toàn thân.' }],
      teach: '<b>全身瘫痪</b> = liệt toàn thân. Cùng từ đó còn dùng cho đường phố: <b>交通瘫痪</b> (giao thông tê liệt), tin tức hay nói vậy.' },
    { t: 'story', scene: 'sadWindow', lines: [B(4)] },
    { t: 'word', id: '离婚', scene: 'divorce' },
    { t: 'mc', scene: 'divorce', say: ['别人都觉得她的丈夫会___她离婚。', 'Ai cũng nghĩ chồng cô sẽ ly hôn với cô.'], full: '别人都觉得她的丈夫会跟她离婚。', prompt: 'Chọn từ điền vào chỗ trống (câu trong bài):', opts: [
      { t: '跟', ok: 1, reply: ['对。', 'Đúng.'] },
      { t: '给', reply: ['给她离婚？听不懂。', '“给” = cho, nói thế nghe không hiểu.'], note: '离婚 đi với <b>跟 + người</b>: 跟她离婚.' },
      { t: '在', reply: ['在她离婚？不对。', '“在” = ở, không dùng được ở đây.'], note: '离婚 đi với <b>跟 + người</b>: 跟她离婚.' }],
      teach: '<b>跟 + người + 离婚</b>. Không nói 离婚她. Muốn nói “đã từng”: <b>离过婚</b>.' },
    { t: 'word', id: '自杀', scene: 'news' },
    { t: 'tf', scene: 'sadWindow', w: ['自杀'], zh: '这位妻子也想过自杀。', vi: 'Người vợ cũng từng nghĩ đến chuyện tự tử.', ok: true,
      why: '<b>自杀</b> = tự tử. <b>想过 + động từ</b> = từng nghĩ đến…: 她也想过要自杀. Cô vượt qua được nhờ tình yêu của chồng.' },
    { t: 'album', words: ['评委', '如何', '瘫痪', '离婚', '自杀'], say: [B(2), B(4)],
      tease: { scene: 'hospitals', vi: 'người chồng đã làm gì khi ai cũng nghĩ anh sẽ bỏ đi?' } }
  ] },
  { id: 3, title: 'Người chồng không bao giờ phàn nàn', sub: '2 từ mới và đọc lại cả phần đầu', thumb: 'standUp', words: ['抱怨', '爱护'], screens: [
    { t: 'predict', scene: 'sadWindow', key: 'p3', q: 'Ai cũng nghĩ người chồng sẽ bỏ đi. Theo bạn, anh ấy đã làm gì?', opts: ['Anh ở lại chăm sóc vợ và động viên cô', 'Anh bỏ đi một thời gian rồi quay về', 'Anh thuê người khác chăm vợ'] },
    { t: 'story', scene: 'hospitals', lines: [B(5), B(6)] },
    { t: 'word', id: '抱怨', scene: 'grumble' },
    { t: 'pick', zh: '他从不抱怨，也不生气。', vi: 'Anh ấy chưa bao giờ phàn nàn, cũng không giận.', prompt: 'Nghe rồi chọn bức tranh đúng:', opts: [
      { sc: 'pickCalm', ok: 1 },
      { sc: 'pickAngry', why: '从不抱怨 = chưa bao giờ phàn nàn. Người này đang giận dữ.' },
      { sc: 'pickCheer', why: 'Câu này không nói gì về ăn mừng. Chỉ nói anh ấy không phàn nàn, không giận.' }],
      teach: '<b>从不 + động từ</b> = chưa bao giờ… (như trong bài: 从不抱怨). <b>也不</b> = “cũng không”.' },
    { t: 'story', scene: 'standUp', lines: [B(7)] },
    { t: 'word', id: '爱护', scene: 'garden' },
    { t: 'mc', scene: 'standUp', say: ['在丈夫的___和努力下，她终于又站了起来。', 'Nhờ sự yêu thương chăm sóc và nỗ lực của chồng, cuối cùng cô đã đứng dậy được.'], full: '在丈夫的爱护和努力下，她终于又站了起来。', prompt: 'Chọn từ điền vào chỗ trống (câu trong bài):', opts: [
      { t: '爱护', ok: 1, reply: ['对！丈夫的爱护。', 'Đúng! Sự yêu thương che chở của người chồng.'] },
      { t: '抱怨', reply: ['丈夫的抱怨？那她站不起来。', 'Sự phàn nàn của chồng á? Vậy cô đâu đứng dậy được.'], note: '抱怨 là phàn nàn, trái hẳn với ý của cả đoạn.' },
      { t: '对比', reply: ['丈夫的对比？不对。', 'Sự so sánh của chồng? Không hợp.'], note: 'Chỗ này cần nghĩa “yêu thương, chăm lo”.' }],
      teach: '<b>在…下</b> = “nhờ có…, dưới sự…”. Ở đây 爱护 là danh từ: sự yêu thương che chở. Còn thường gặp: 爱护花草, 爱护环境.' },
    { t: 'story', scene: 'moved', lines: [B(8)] },
    { t: 'mc', scene: 'sickFriend', say: ['昨天你___没来上课？', 'Hôm qua sao bạn không đến lớp?'], full: '昨天你怎么没来上课？', prompt: 'Ôn lại 如何. Chọn từ điền vào chỗ trống:', opts: [
      { t: '怎么', ok: 1, reply: ['我生病了，对不起。', 'Mình bị ốm, xin lỗi.'] },
      { t: '如何', reply: ['如何不能问原因。', '如何 không hỏi được lý do.'], note: 'Hỏi lý do (“sao lại…”) chỉ dùng được 怎么. 如何 chỉ hỏi cách thức hoặc tình trạng (như 他俩是如何恩爱的).' },
      { t: '什么', reply: ['不是“什么没来”。', 'Không ai nói “cái gì không đến”.'], note: '什么 hỏi “cái gì”, không hỏi lý do.' }],
      teach: 'Nhớ: <b>hỏi lý do → 怎么</b>. 如何 chỉ hỏi cách thức hoặc tình trạng, giọng trang trọng như phát thanh.' },
    { t: 'read', ids: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
    { t: 'album', words: ['抱怨', '爱护'], say: [B(6), B(7)], recall: 'p3',
      tease: { scene: 'finalists', vi: 'còn hai cặp nữa. Cặp thứ hai nói họ chưa bao giờ cãi nhau, còn cặp thứ ba mãi không chịu xuất hiện… Ai mới là cặp thắm thiết nhất?' } }
  ] }
];

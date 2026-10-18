/* ===== question pools for the chapter test (new sentences, not the ones shown in the units) ===== */
const TESTBANK = {
  tf: [
    { t: 'tf', scene: 'judgesWait', zh: '评委们等了很长时间，有点儿不耐烦。', vi: 'Các giám khảo đợi rất lâu, hơi sốt ruột.', ok: true,
      why: '<b>不耐烦</b> = sốt ruột, hết kiên nhẫn. Cặp thứ ba mãi không xuất hiện nên các giám khảo cảm thấy sốt ruột.', w: ['不耐烦', '评委'], u: 5 },
    { t: 'tf', scene: 'leftNote', zh: '那个女人用右手写了一行歪歪扭扭的字。', vi: 'Người phụ nữ ấy dùng tay phải viết một dòng chữ xiêu vẹo.', ok: false,
      why: 'Cô viết bằng <b>tay trái</b> (左手), vì vai phải đang để chồng tựa vào, nên chữ mới 歪歪扭扭.', w: ['歪歪扭扭'], u: 7 },
    { t: 'tf', scene: 'swatNight', zh: '男人昨天晚上被蚊子叮醒了。', vi: 'Đêm qua người đàn ông bị muỗi đốt tỉnh giấc.', ok: true,
      why: '<b>被蚊子叮醒</b> = bị muỗi đốt mà tỉnh dậy. Sau đó anh thức đuổi muỗi cho vợ ngủ.', w: ['蚊子', '叮'], u: 10 },
    { t: 'tf', scene: 'awards', zh: '“最恩爱夫妻”奖给了第二对夫妻。', vi: 'Giải “Cặp vợ chồng thắm thiết nhất” được trao cho cặp thứ hai.', ok: false,
      why: 'Giải <b>最恩爱夫妻</b> thật sự thuộc về cặp thứ ba. Cặp thứ hai nhận giải 相敬如宾夫妻.', w: ['恩爱', '相敬如宾'], u: 11 },
    { t: 'tf', scene: 'hospitals', zh: '第一对夫妻的丈夫从来没有抱怨过。', vi: 'Người chồng của cặp thứ nhất chưa từng phàn nàn.', ok: true,
      why: 'Anh chăm sóc vợ nhiều năm và <b>从不抱怨</b> (chưa bao giờ phàn nàn).', w: ['抱怨'], u: 3 },
    { t: 'tf', scene: 'shockJudges', zh: '评委们很快就催第三对夫妻开始。', vi: 'Các giám khảo nhanh chóng giục cặp thứ ba bắt đầu.', ok: false,
      why: 'Họ <b>先不催</b> (tạm chưa giục) mà chọn <b>等待</b> thêm một lúc.', w: ['催', '评委'], u: 9 },
    { t: 'tf', scene: 'wheelchair', zh: '医生说，那位妻子很快就能站起来。', vi: 'Bác sĩ nói người vợ sẽ sớm đứng dậy được.', ok: false,
      why: 'Bác sĩ nói khả năng đứng dậy <b>rất nhỏ</b>. Về sau cô đứng dậy được là nhờ sự chăm sóc và động viên của chồng.', w: ['瘫痪'], u: 2 }
  ],
  spot: [
    { t: 'spot', chunks: ['我爸爸妈妈的', '结婚', '一直很幸福。'], bad: 1, fix: '婚姻', full: '我爸爸妈妈的婚姻一直很幸福。', vi: 'Cuộc hôn nhân của bố mẹ mình luôn rất hạnh phúc.',
      teach: '<b>婚姻</b> là danh từ (cuộc hôn nhân) nên đứng sau 的. <b>结婚</b> là động từ: 他们结婚了.', w: ['婚姻'], u: 4 },
    { t: 'spot', chunks: ['老师', '喊', '给他一本书。'], bad: 1, fix: '递', full: '老师递给他一本书。', vi: 'Cô giáo đưa cho cậu ấy một quyển sách.',
      teach: '<b>递给</b> = đưa cho (bằng tay). <b>喊</b> là gọi to, không dùng để đưa đồ.', w: ['递', '喊'], u: 7 },
    { t: 'spot', chunks: ['明天要考试，', '我今天', '的', '早点儿睡。'], bad: 2, fix: '得', full: '明天要考试，我今天得早点儿睡。', vi: 'Mai thi rồi, hôm nay mình phải ngủ sớm.',
      teach: '<b>得 (děi) + động từ</b> = phải. 的 chỉ dùng để nối từ, không có nghĩa “phải”.', w: [], u: 8 },
    { t: 'spot', chunks: ['他', '从来', '一个人跑了十公里！'], bad: 1, fix: '居然', full: '他居然一个人跑了十公里！', vi: 'Anh ấy mà lại chạy một mình mười cây số!',
      teach: '<b>居然 + động từ</b> = không ngờ lại…, diễn tả sự bất ngờ. 从来 phải đi với 没 / 不 (从来没…过), không hợp ở đây.', w: ['居然'], u: 9 },
    { t: 'spot', chunks: ['请问，', '等', '到谁了？'], bad: 1, fix: '轮', full: '请问，轮到谁了？', vi: 'Xin hỏi, đến lượt ai rồi?',
      teach: '<b>轮到 + người</b> = đến lượt ai: 轮到我了, 轮到谁了. Không dùng 等 trong nghĩa này.', w: ['轮'], u: 5 },
    { t: 'spot', chunks: ['外面太', '叮', '了，孩子睡不着。'], bad: 1, fix: '吵', full: '外面太吵了，孩子睡不着。', vi: 'Bên ngoài ồn quá, bé không ngủ được.',
      teach: '<b>吵</b> = ồn (太吵了). <b>叮</b> là đốt, chích, không dùng để nói “ồn”.', w: ['吵', '叮'], u: 10 }
  ]
};

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
      { t: 'tf', scene: 'c2_quiltSun', zh: '父亲要新房的钥匙，是想来住几天，帮我们晒被子、打扫卫生。', vi: 'Ba xin chìa khoá nhà mới để lên ở vài hôm, giúp tụi con phơi chăn, quét dọn.', ok: true,
        why: 'Lời ba: <b>就来住上几天，顺便给你们晒晒被子，打扫打扫卫生</b>.', w: ['晒', '被子'], u: '2-7' },
      { t: 'tf', scene: 'c2_winterNight', zh: '我们回家的那天是一个夏天的晚上。', vi: 'Hôm chúng tôi về nhà là một buổi tối mùa hè.', ok: false,
        why: 'Trong bài: <b>是一个深冬的夜里</b> = một đêm giữa mùa đông; con trai còn <b>被冻得大哭</b>.', w: ['夜', '冻'], u: '2-8' },
      { t: 'tf', scene: 'c2_warmRoom', zh: '我们到家的时候，饭菜已经做好了，屋里也很暖和。', vi: 'Lúc chúng tôi về tới nhà, cơm canh đã nấu xong, trong nhà cũng rất ấm.', ok: true,
        why: '<b>暖气开着</b> (máy sưởi đang bật), <b>厨房里飘来阵阵饭菜香</b> (bếp thoảng ra mùi cơm canh).', w: ['飘', '阵'], u: '2-10' },
      { t: 'tf', scene: 'c2_dadTalk', zh: '妈妈是前天接到电话的。', vi: 'Mẹ nhận điện thoại từ hôm kia.', ok: false,
        why: 'Ba nói: <b>你妈昨天接到电话</b> = mẹ nhận điện thoại hôm <b>qua</b> (昨天), không phải hôm kia (前天).', w: [], u: '2-11' }
    ],
    spot: [
      { t: 'spot', chunks: ['我们终于', '在县里', '买了一串', '新房。'], bad: 2, fix: '买了一套', full: '我们终于在县里买了一套新房。', vi: 'Cuối cùng chúng tôi mua được một căn nhà mới trên huyện.',
        teach: '<b>一套房子</b> = một căn nhà. <b>串</b> là chùm, xâu (一串钥匙).', w: ['套', '串'], u: '2-4' },
      { t: 'spot', chunks: ['孩子睡着了，', '妈妈', '强烈地', '走了出去。'], bad: 2, fix: '悄悄地', full: '孩子睡着了，妈妈悄悄地走了出去。', vi: 'Bé ngủ rồi, mẹ khẽ khàng đi ra ngoài.',
        teach: '<b>悄悄地 + động từ</b> = khẽ khàng làm gì. <b>强烈</b> là mãnh liệt, không tả bước đi.', w: ['悄悄', '强烈'], u: '2-7' },
      { t: 'spot', chunks: ['他', '温暖地', '要求父母', '住在城里。'], bad: 1, fix: '强烈', full: '他强烈要求父母住在城里。', vi: 'Anh ấy hết lời đòi ba mẹ lên thành phố ở.',
        teach: '<b>强烈要求</b> = hết sức yêu cầu. <b>温暖</b> là ấm áp.', w: ['强烈', '温暖'], u: '2-9' },
      { t: 'spot', chunks: ['刚才下了', '一串', '大雨，', '现在停了。'], bad: 1, fix: '一阵', full: '刚才下了一阵大雨，现在停了。', vi: 'Vừa nãy mưa một trận lớn, giờ tạnh rồi.',
        teach: '<b>一阵雨</b> = một trận mưa. <b>一串</b> dùng cho chìa khoá, nho…', w: ['阵', '串'], u: '2-10' },
      { t: 'spot', chunks: ['妈妈已经', '把被子', '扑', '好了。'], bad: 2, fix: '铺', full: '妈妈已经把被子铺好了。', vi: 'Mẹ đã trải chăn xong rồi.',
        teach: '<b>铺</b> (钅) = trải; <b>扑</b> (扌) = vồ, phả vào. Cùng đọc pū.', w: ['铺', '扑'], u: '2-10' }
    ],
    hsk: [
      /* nghe: một đoạn hội thoại ngắn */
      { t: 'hear', kind: 'nghe', w: ['装修'], u: '2-4', s: '你的新房装修完了吗？还没呢，下个月才能住。',
        opts: ['Nhà mới chưa sửa xong, tháng sau mới ở được.', 'Nhà mới sửa xong rồi, tháng sau mới ở được.', 'Nhà mới chưa sửa xong, tuần sau mới ở được.'],
        why: 'Người hỏi: <b>装修完了吗？</b> (sửa xong chưa?). Người đáp: <b>还没呢</b> (chưa), <b>下个月才能住</b> (tháng sau mới ở được).',
        whyNot: ['', '还没呢 = vẫn chưa (xong).', '下个月 = tháng sau, không phải tuần sau.'] },
      { t: 'hear', kind: 'nghe', w: ['冻', '姥姥'], u: '2-8', s: '你姥姥怎么没来？她昨天晚上冻着了，今天在家休息。',
        opts: ['Bà ngoại không đến vì tối qua bị nhiễm lạnh, hôm nay nghỉ ở nhà.', 'Bà ngoại không đến vì tối qua uống say, hôm nay nghỉ ở nhà.', 'Bà nội không đến vì tối qua bị nhiễm lạnh, hôm nay nghỉ ở nhà.'],
        why: '<b>冻着了</b> = bị lạnh, nhiễm lạnh. <b>在家休息</b> = nghỉ ở nhà.',
        whyNot: ['', '冻着了 = bị nhiễm lạnh, không phải say (醉).', '姥姥 = bà ngoại, không phải bà nội.'] },
      { t: 'hear', kind: 'nghe', w: ['临', '锁'], u: '2-6', s: '临走的时候别忘了锁门。放心吧，钥匙在我这儿。',
        opts: ['Lúc sắp đi nhớ khoá cửa; chìa khoá đang ở chỗ người trả lời.', 'Lúc sắp đi nhớ khoá cửa; chìa khoá không ở chỗ người trả lời.', 'Lúc về tới nhà nhớ khoá cửa; chìa khoá đang ở chỗ người trả lời.'],
        why: '<b>临走的时候</b> = lúc sắp đi. <b>钥匙在我这儿</b> = chìa khoá ở chỗ mình.',
        whyNot: ['', '钥匙在我这儿 = chìa khoá đang ở chỗ mình (người trả lời).', '临走的时候 = lúc sắp đi, không phải lúc về.'] },
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
      { t: 'order', kind: 'viet', w: ['串', '悄悄'], u: '2-7', zh: '他把一串钥匙悄悄地给了我。', vi: 'Anh ấy lặng lẽ đưa cho mình một chùm chìa khoá.', chunks: ['他把', '一串钥匙', '悄悄地', '给了我'] },
      { t: 'order', kind: 'viet', w: ['立刻', '感受'], u: '2-11', zh: '一回到家，我就立刻感受到了家的温暖。', vi: 'Vừa về tới nhà, mình đã cảm nhận ngay hơi ấm gia đình.', chunks: ['一回到家', '我就', '立刻感受到了', '家的温暖'] }
    ]
  };
})();

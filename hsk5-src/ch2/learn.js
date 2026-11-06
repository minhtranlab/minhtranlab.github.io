/* ===== Bài 2: word cards (Vietnamese of the examples) + one listening item per word.
   hear: opts[0] is right; all 3 options share the keywords you can hear and differ in ONE detail;
   whyNot[i] says which detail rules option i out (whyNot[0] is empty). ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.LEARN = {
    '一辈子': { exv: ['Ông nội mình cả đời chưa từng rời khỏi nông thôn.', 'Chuyện này mình sẽ nhớ suốt đời.'],
      hear: { s: '她一辈子住在农村，没去过大城市。', opts: ['Cả đời bà ấy sống ở nông thôn, chưa từng đến thành phố lớn.', 'Cả đời bà ấy sống ở thành phố lớn, chưa từng về nông thôn.', 'Bà ấy mới sống ở nông thôn một năm, chưa từng đến thành phố lớn.'],
        why: '<b>一辈子</b> = cả đời. <b>住在农村</b> = sống ở nông thôn. <b>没去过</b> = chưa từng đến.',
        whyNot: ['', 'Đảo chỗ rồi: 住在农村 (sống ở nông thôn), 没去过大城市 (chưa đến thành phố lớn).', '一辈子 = cả đời, không phải “mới một năm”.'] } },
    '农村': { exv: ['Anh ấy lớn lên ở nông thôn, rất quen với cuộc sống nông thôn.', 'Bây giờ nhiều người trẻ rời nông thôn lên thành phố làm việc.'],
      hear: { s: '现在很多年轻人离开农村，去城市工作。', opts: ['Bây giờ nhiều người trẻ rời nông thôn lên thành phố làm việc.', 'Bây giờ nhiều người trẻ rời thành phố về nông thôn làm việc.', 'Bây giờ ít người trẻ rời nông thôn lên thành phố làm việc.'],
        why: '<b>离开农村</b> = rời nông thôn. <b>去城市工作</b> = lên thành phố làm việc. <b>很多</b> = nhiều.',
        whyNot: ['', 'Ngược hướng: câu nói 离开农村 (rời nông thôn) rồi 去城市 (đến thành phố).', '很多 = nhiều, không phải ít.'] } },
    '屋': { exv: ['Ngoài trời lạnh quá, mình vào nhà đi.', 'Căn phòng này không lớn nhưng rất sạch.'],
      hear: { s: '屋里很暖和，外面很冷。', opts: ['Trong nhà rất ấm, ngoài trời rất lạnh.', 'Trong nhà rất lạnh, ngoài trời rất ấm.', 'Trong nhà rất ấm, ngoài trời cũng ấm.'],
        why: '<b>屋里</b> = trong nhà, trong phòng. <b>暖和</b> = ấm áp. <b>外面</b> = bên ngoài. Nghe kỹ chữ nào đi với nơi nào.',
        whyNot: ['', 'Ngược rồi: 屋里 đi với 暖和 (ấm), 外面 đi với 冷 (lạnh).', 'Vế sau là 外面很冷: ngoài trời lạnh.'] } },
    '断': { exv: ['Tốt nghiệp đại học xong là tụi mình mất liên lạc.', 'Tối qua chỗ tụi mình bị cúp điện.'],
      hear: { s: '毕业以后，我跟他断了联系。', opts: ['Sau khi tốt nghiệp, mình mất liên lạc với anh ấy.', 'Sau khi tốt nghiệp, mình vẫn giữ liên lạc với anh ấy.', 'Trước khi tốt nghiệp, mình đã mất liên lạc với anh ấy.'],
        why: '<b>断了联系</b> = mất liên lạc (sợi dây liên lạc bị đứt). <b>毕业以后</b> = sau khi tốt nghiệp.',
        whyNot: ['', '断了联系 = liên lạc đã đứt, không phải vẫn giữ.', '以后 = sau khi, không phải trước khi.'] } },
    '以来': { exv: ['Từ khi đi làm tới giờ, anh ấy hiếm khi về quê.', 'Từ trước tới nay, cô ấy luôn rất giữ gìn chiếc xe này.'],
      hear: { s: '上大学以来，我很少回家。', opts: ['Từ khi vào đại học đến nay, mình rất ít về nhà.', 'Từ khi vào đại học đến nay, mình về nhà rất thường xuyên.', 'Trước khi vào đại học, mình rất ít về nhà.'],
        why: '<b>上大学以来</b> = từ khi vào đại học đến nay. <b>很少</b> = rất ít, hiếm khi.',
        whyNot: ['', '很少 = rất ít, hiếm khi; không phải thường xuyên.', '以来 = từ … đến nay. “Trước khi” là 以前.'] } },
    '姥姥': { exv: ['Bà ngoại mình năm nay tám mươi tuổi, sức khoẻ vẫn rất tốt.', 'Hồi nhỏ mình hay ở nhà bà ngoại.'],
      hear: { s: '我姥姥一个人住在农村。', opts: ['Bà ngoại mình sống một mình ở nông thôn.', 'Bà nội mình sống một mình ở nông thôn.', 'Bà ngoại mình sống với cậu ở nông thôn.'],
        why: '<b>姥姥</b> = bà ngoại. <b>一个人</b> = một mình.',
        whyNot: ['', '姥姥 là bà ngoại (mẹ của mẹ). Bà nội là 奶奶.', '一个人 = một mình; câu không nhắc tới cậu.'] } },
    '舅舅': { exv: ['Cậu mình là anh trai của mẹ mình.', 'Cuối tuần nhà mình sang nhà cậu ăn cơm.'],
      hear: { s: '舅舅比我妈妈大三岁。', opts: ['Cậu lớn hơn mẹ mình ba tuổi.', 'Cô lớn hơn ba mình ba tuổi.', 'Cậu nhỏ hơn mẹ mình ba tuổi.'],
        why: '<b>A 比 B 大 + số tuổi</b> = A lớn hơn B mấy tuổi. 舅舅 đi với 妈妈: cậu là anh/em trai của mẹ.',
        whyNot: ['', '舅舅 = cậu, bên mẹ (câu có 我妈妈). Cô bên ba là 姑姑.', '比我妈妈大 = lớn hơn mẹ. Nhỏ hơn thì nói 小.'] } },
    '姑姑': { exv: ['Cô mình là em gái của ba mình.', 'Tết năm nào cô cũng về thăm nhà mình.'],
      hear: { s: '姑姑每年春节都回来看我们。', opts: ['Tết năm nào cô cũng về thăm nhà mình.', 'Tết năm nào cậu cũng về thăm nhà mình.', 'Tết năm nay cô không về thăm nhà mình.'],
        why: '<b>每年…都</b> = năm nào cũng. <b>回来看我们</b> = về thăm nhà mình.',
        whyNot: ['', '姑姑 = cô (chị/em gái của ba). Cậu là 舅舅.', '每年…都 = năm nào cũng, và câu không có 不.'] } },
    '坚决': { exv: ['Anh ấy kiên quyết phản đối kế hoạch này.', 'Mình nói bao nhiêu lần, cô ấy vẫn nhất quyết không đồng ý.'],
      hear: { s: '妈妈坚决不同意我一个人去旅游。', opts: ['Mẹ nhất quyết không đồng ý cho mình đi du lịch một mình.', 'Mẹ vui vẻ đồng ý cho mình đi du lịch một mình.', 'Mẹ nhất quyết không đồng ý cho mình đi du lịch với bạn.'],
        why: '<b>坚决不 + động từ</b> = nhất quyết không… <b>一个人</b> = một mình.',
        whyNot: ['', '坚决不同意 = nhất quyết không đồng ý: có chữ 不.', '一个人 = một mình, không phải đi với bạn.'] } }
  };
  if (CH2.buildQB) { CH2.buildQB(); delete CH2.buildQB; }   /* bank.js loaded first */
  if (CH2.resolveRefs) CH2.resolveRefs();
})();

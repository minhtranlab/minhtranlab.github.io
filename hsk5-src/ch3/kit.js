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

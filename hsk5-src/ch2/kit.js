/* ===== Bài 2: new SVG scenes (viewBox 400x300), names start with c2_. Built with the Bài 1 kit helpers
   (C, R, Ci, Pa, Ln, Tx, G, person, sun, cloud, heart, clock…) which are only called when a scene is drawn.
   Registered into SC / SCENE_LABEL when those exist; always also kept in CH2.SC / CH2.SCENE_LABEL. ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  var S = {}, L = {};
  /* ---- small props ---- */
  var dad = function (x, y, o) { return person(x, y, Object.assign({ hs: 'short', hair: C.hairG, shirt: '#7a6a4f', m: 'smile' }, o || {})); };
  var mom = function (x, y, o) { return person(x, y, Object.assign({ hs: 'bun', hair: C.hairG, shirt: '#4f7f8f', m: 'smile' }, o || {})); };
  var house = function (x, y, s, o) {
    o = o || {};
    return G(`translate(${x} ${y}) scale(${s})`,
      R(-62, -42, 124, 84, o.wall || '#ecd7b4', 4) + Pa('M-78 -40 L0 -96 L78 -40Z', o.roof || '#8a4b3a') + Pa('M-78 -40 L78 -40 L70 -32 L-70 -32Z', 'rgba(0,0,0,.18)') +
      [-60, -40, -20, 0, 20, 40].map(d => Ln(d, -40, d / 2, -88, 'rgba(0,0,0,.12)', 2)).join('') +
      (o.open ? R(-17, -2, 34, 44, '#ffd98a', 3) + Pa('M-17 -2 L-30 4 L-30 46 L-17 42Z', o.door || C.brown) : R(-17, -2, 34, 44, o.door || C.brown, 3) + Ci(10, 22, 2.5, C.butter)) +
      R(-52, -24, 26, 22, o.lit ? '#ffe39a' : C.sky, 2, 'stroke="#fff" stroke-width="3"') + R(26, -24, 26, 22, o.lit ? '#ffe39a' : C.sky, 2, 'stroke="#fff" stroke-width="3"') +
      (o.old ? Pa('M44 -6 l6 10 l-4 6 l6 10', 'none', `stroke="#a88a66" stroke-width="2"`) + Pa('M-46 8 l-5 8 l4 6', 'none', `stroke="#a88a66" stroke-width="2"`) : ''));
  };
  var tree = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-7, -10, 14, 60, C.brown, 4) + Ci(0, -34, 34, '#4f9a55') + Ci(-24, -16, 22, '#58a55c') + Ci(24, -16, 22, '#58a55c')); };
  var tower = function (x, y, w, h, c) { let win = ''; for (let r = y + 14; r < 236; r += 22) for (let q = x + 10; q < x + w - 12; q += 20) win += R(q, r, 10, 12, (q + r) % 3 ? '#ffe7a3' : '#cfe3f2', 1); return R(x, y, w, h, c, 3) + win; };
  var city = function () { return R(0, 0, 400, 300, '#cfe3f5') + tower(10, 60, 70, 200, '#8fa3c0') + tower(90, 20, 80, 240, '#6f86aa') + tower(180, 80, 60, 180, '#a3b4cf') + tower(250, 40, 70, 220, '#7b8fb2') + tower(330, 90, 70, 170, '#94a7c6') + R(0, 236, 400, 64, '#59606e') + Ln(0, 268, 400, 268, C.butter, 4, 'stroke-dasharray="22 16"'); };
  var fields = function (y) { let f = Pa(`M0 ${y} L400 ${y} L400 300 L0 300Z`, '#8cc77a'); for (let i = 0; i < 7; i++) { const yy = y + 12 + i * i * 2.4 + i * 6; f += Ln(0, yy, 400, yy, '#6fae5f', 3); } return f; };
  var hat = function () { return Pa('M-40 -18 L0 -46 L40 -18Z', '#e2b85c') + R(-44, -20, 88, 6, '#c99a3e', 3); };
  var snow = function (n) { let s = ''; for (let i = 0; i < n; i++) s += Ci((i * 47 + 13) % 400, (i * 71 + 9) % 300, 2.5 + (i % 3), '#fff', 'opacity=".9"'); return s; };
  var keyIcon = function (x, y, rot, c) { return G(`translate(${x} ${y}) rotate(${rot})`, Ci(0, 0, 16, 'none', `stroke="${c}" stroke-width="7"`) + R(14, -4, 58, 9, c, 3) + R(52, 4, 8, 14, c, 2) + R(64, 4, 8, 10, c, 2)); };
  var scissors = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s})`, Ci(-30, 26, 13, 'none', `stroke="${C.red}" stroke-width="7"`) + Ci(30, 26, 13, 'none', `stroke="${C.red}" stroke-width="7"`) + Pa('M-22 16 L18 -48 L24 -46 L-14 20Z', '#c8d0dc', `stroke="${C.ink}" stroke-width="2"`) + Pa('M22 16 L-18 -48 L-24 -46 L14 20Z', '#dfe5ee', `stroke="${C.ink}" stroke-width="2"`) + Ci(0, -8, 4, C.ink)); };

  /* ---- tập 1 ---- */
  S.c2_village = () => R(0, 0, 400, 300, '#cfe9f5') + sun(334, 58, 22) + Pa('M0 160 Q90 112 190 150 T400 140 L400 300 L0 300Z', '#a8d48f') + fields(200) +
    house(160, 170, 1.05, { old: 1 }) + tree(330, 196, .9) + dad(118, 214, { s: .44 }) + mom(204, 214, { s: .44 }) + heart(160, 66, 1.5, C.pink, 'class="fl"');
  L.c2_village = 'Ba mẹ đứng trước căn nhà cũ ở quê';
  S.c2_lifetime = () => R(0, 0, 400, 300, '#fdf1dc') + house(200, 112, .7, { old: 1 }) + R(0, 188, 400, 112, '#cfe6b8') +
    person(70, 196, { s: .3, hs: 'short', shirt: C.butter, m: 'grin' }) + person(200, 186, { s: .4, hs: 'short', shirt: C.teal }) + person(330, 186, { s: .4, hs: 'short', hair: C.hairW, gl: 'round', shirt: '#7a6a4f' }) +
    Ln(40, 278, 356, 278, C.org, 6) + Pa('M356 266 L380 278 L356 290Z', C.org) + Ci(40, 278, 7, C.org);
  L.c2_lifetime = 'Cùng một người: lúc nhỏ, lúc lớn, lúc già, vẫn ở một chỗ';
  S.c2_farmland = () => R(0, 0, 400, 300, '#cfe9f5') + cloud(90, 52, 1) + sun(330, 54, 20) + Pa('M0 150 Q120 118 240 140 T400 132 L400 300 L0 300Z', '#a8d48f') + fields(170) +
    house(80, 150, .45) + house(150, 146, .38, { roof: '#6f5a8a' }) + tree(250, 150, .55) + tree(370, 160, .6) +
    G('translate(300 216)', person(0, 0, { s: .42, hs: 'short', shirt: '#4f7f8f', hat: hat() })) + Ln(330, 214, 350, 268, C.brown, 4);
  L.c2_farmland = 'Đồng ruộng, mấy ngôi nhà nhỏ và người làm ruộng';
  S.c2_oldHouse = () => R(0, 0, 400, 300, '#e3eef5') + R(0, 240, 400, 60, '#c9b79c') + house(200, 190, 1.55, { old: 1, open: 1 }) +
    person(250, 214, { s: .4, hs: 'bun', hair: C.hairG, shirt: '#4f7f8f', flip: 1 }) + tree(46, 200, .8);
  L.c2_oldHouse = 'Căn nhà cũ, cửa mở, có người bước vào';
  S.c2_cut = () => R(0, 0, 400, 300, '#f4ecdf') + Pa('M10 120 Q90 100 170 124', 'none', `stroke="${C.brown}" stroke-width="12" stroke-linecap="round"`) + Pa('M230 124 Q310 100 390 120', 'none', `stroke="${C.brown}" stroke-width="12" stroke-linecap="round"`) +
    Pa('M170 124 l8 -10 l4 14 l8 -12', 'none', `stroke="${C.brown}" stroke-width="5"`) + Pa('M230 124 l-8 10 l-4 -14 l-8 12', 'none', `stroke="${C.brown}" stroke-width="5"`) +
    scissors(200, 196, 1.3) + Pa('M196 70 L204 40 M176 76 L160 54 M218 76 L236 56', 'none', `stroke="${C.org}" stroke-width="5" stroke-linecap="round"`);
  L.c2_cut = 'Cây kéo cắt đứt sợi dây làm hai đoạn';
  S.c2_coldWind = () => R(0, 0, 400, 300, '#b9c9dc') + snow(40) + R(0, 250, 400, 50, '#eef3f8') +
    person(140, 160, { s: .8, hs: 'short', shirt: C.navy, m: 'frown', brows: 'worry' }) + R(110, 196, 60, 14, C.red, 6) + person(260, 160, { s: .8, hs: 'pony', shirt: C.plum, m: 'frown', brows: 'worry' }) + R(230, 196, 60, 14, C.butter, 6) +
    Pa('M20 80 Q60 70 90 84 M300 60 Q340 50 380 64 M30 200 Q60 190 90 204', 'none', `stroke="#fff" stroke-width="4" stroke-linecap="round"`);
  L.c2_coldWind = 'Hai người đứng ngoài trời tuyết, lạnh run';
  S.c2_babyEat = () => R(0, 0, 400, 300, '#fdf1dc') + R(0, 250, 400, 50, '#e8d3b0') + R(150, 120, 14, 150, '#c99a3e', 4) + R(256, 120, 14, 150, '#c99a3e', 4) + R(150, 112, 120, 16, '#e2b85c', 6) +
    person(210, 132, { s: .5, hs: 'short', hair: '#6b4a3a', shirt: C.butter, m: 'grin' }) + R(136, 196, 148, 18, '#e2b85c', 8) + Pa('M184 192 Q210 214 236 192Z', C.white, `stroke="${C.teal}" stroke-width="3"`) + Ci(202, 194, 4, '#f6f0e0') + Ci(216, 195, 4, '#f6f0e0') +
    person(330, 150, { s: .8, hs: 'long', hair: C.hairD, shirt: C.pink, flip: 1 }) + Ln(296, 196, 250, 160, C.pink, 14) + hand(248, 158, 8) + Ln(244, 156, 228, 150, C.grey, 4) + Ci(226, 150, 5, C.grey);
  L.c2_babyEat = 'Em bé ngồi ghế ăn, mẹ đút cơm bằng thìa';
  S.c2_parents = () => R(0, 0, 400, 300, '#f3e6d3') + R(0, 240, 400, 60, '#d8c6a8') + R(160, 30, 80, 60, '#fff', 4, `stroke="${C.brown}" stroke-width="6"`) + flower(200, 62, .8, C.pink) +
    R(70, 190, 260, 60, '#a8584a', 18) + R(70, 170, 260, 36, '#bd6a5a', 14) + dad(150, 140, { s: .75 }) + mom(252, 140, { s: .75 });
  L.c2_parents = 'Hai ông bà ngồi trên ghế trong nhà';
  S.c2_farmOld = () => R(0, 0, 400, 300, '#cfe9f5') + sun(70, 56, 20) + Pa('M0 140 Q140 110 260 136 T400 126 L400 300 L0 300Z', '#a8d48f') + fields(170) + house(330, 140, .4) +
    person(190, 150, { s: .78, hs: 'short', hair: C.hairW, shirt: '#7a6a4f', m: 'smile', hat: hat() }) + Ln(240, 196, 290, 270, C.brown, 6) + Pa('M282 262 L306 270 L296 284 Z', '#8a96ad') + hand(244, 204, 8);
  L.c2_farmOld = 'Một ông cụ đội nón làm ruộng';
  S.c2_cityOld = () => city() + person(200, 170, { s: .62, hs: 'short', hair: C.hairW, shirt: '#7a6a4f', m: 'flat' }) + car(70, 270, .8, C.red) + car(330, 270, .8, C.teal);
  L.c2_cityOld = 'Một ông cụ đi giữa phố, nhà cao tầng xung quanh';
  S.c2_schoolKid = () => R(0, 0, 400, 300, '#cfe9f5') + Pa('M0 150 Q120 120 240 140 T400 130 L400 300 L0 300Z', '#a8d48f') + fields(176) + house(90, 150, .5) + tree(320, 160, .7) +
    R(218, 180, 32, 42, C.red, 8) + person(200, 168, { s: .55, hs: 'short', shirt: C.butter, m: 'grin' }) + Ln(214, 186, 222, 214, C.red, 5);
  L.c2_schoolKid = 'Một cậu bé đeo cặp đi học ở quê';

  /* ---- tập 2 ---- */
  S.c2_twoPlaces = () => R(0, 0, 200, 300, '#d9efcf') + R(200, 0, 200, 300, '#d6e3f5') + fields(220).replace('M0 220 L400 220', 'M0 220 L200 220').replace('L400 300 L0 300Z', 'L200 300 L0 300Z') +
    house(100, 150, .7, { old: 1 }) + dad(62, 214, { s: .34, m: 'flat' }) + mom(138, 214, { s: .34, m: 'flat' }) + Pa('M86 236 l28 28 M114 236 l-28 28', 'none', `stroke="${C.red}" stroke-width="7" stroke-linecap="round"`) +
    tower(214, 40, 50, 196, '#8fa3c0') + tower(272, 70, 54, 166, '#6f86aa') + tower(334, 30, 56, 206, '#a3b4cf') + R(200, 236, 200, 64, '#59606e') +
    person(240, 230, { s: .3, hs: 'bun', hair: C.hairW, shirt: C.plum }) + person(300, 230, { s: .3, hs: 'quiff', shirt: C.org, m: 'grin' }) + person(360, 230, { s: .3, hs: 'long', shirt: C.pink, m: 'grin' }) +
    hand(318, 214, 6) + hand(378, 214, 6) + bubble(250, 150, 90, 40, '?', 28, C.white, C.ink, 'r') + Ln(200, 0, 200, 300, C.white, 6);
  L.c2_twoPlaces = 'Bên trái ba mẹ ở quê lắc đầu, bên phải họ hàng trên thành phố vẫy gọi';
  S.c2_since = () => R(0, 0, 400, 300, '#eef4fb') + R(30, 150, 340, 16, '#c8d6ea', 8) + R(60, 150, 280, 16, C.org, 8) + Pa('M336 140 L366 158 L336 176Z', C.org) +
    Ln(60, 104, 60, 158, C.ink, 4) + Pa('M60 104 L96 116 L60 128Z', C.red) + R(28, 196, 64, 70, '#fff', 6, `stroke="${C.ink}" stroke-width="3"`) + R(28, 196, 64, 18, C.red, 4) + Tx(60, 254, '1', 34, C.ink) +
    clock(330, 90, 34, 10, 10) + Tx(330, 224, 'bây giờ', 22, C.tealD) + Tx(60, 186, 'mốc', 20, C.red) + [130, 190, 250].map(x => Ci(x, 158, 5, '#fff')).join('');
  L.c2_since = 'Mũi tên thời gian từ một mốc kéo tới bây giờ';
  /* family tree: left = bên nội (ba), right = bên ngoại (mẹ); hi = the person in the glow. No relative's name is written, so it can also be a picture option. */
  var tree2 = function (hi) {
    const P = { yeye: [58, 44, { hs: 'bald', hair: C.hairW, gl: 'round', shirt: C.green }], nainai: [118, 44, { hs: 'bun', hair: C.hairG, shirt: C.red }],
      laoye: [282, 44, { hs: 'short', hair: C.hairG, shirt: '#7a6a4f' }], laolao: [342, 44, { hs: 'bun', hair: C.hairW, shirt: C.plum }],
      gugu: [40, 134, { hs: 'long', hair: C.hairD, shirt: C.pink }], baba: [130, 134, { hs: 'short', shirt: C.navy }],
      mama: [270, 134, { hs: 'bob', hair: C.hairD, shirt: C.teal }], jiujiu: [360, 134, { hs: 'quiff', shirt: C.org }], wo: [200, 222, { hs: 'pony', shirt: C.butter }] };
    let g = R(0, 0, 200, 300, '#e3eefb') + R(200, 0, 200, 300, '#fde7e3') + Tx(100, 292, 'bên nội', 16, '#5a6f96') + Tx(300, 292, 'bên ngoại', 16, '#a0574a');
    const line = (d) => Pa(d, 'none', `stroke="#8a96ad" stroke-width="3" stroke-linejoin="round"`);
    g += line('M58 74 L118 74 M88 74 L88 94 M40 94 L130 94 M40 94 L40 112 M130 94 L130 112') + line('M282 74 L342 74 M312 74 L312 94 M270 94 L360 94 M270 94 L270 112 M360 94 L360 112') + line('M130 176 L270 176 M200 176 L200 200');
    if (hi && P[hi]) g += Ci(P[hi][0], P[hi][1] + 10, 34, 'rgba(255,209,102,.75)', `stroke="${C.org}" stroke-width="4"`) + Pa(`M${P[hi][0] + 24} ${P[hi][1] - 30} l4 9 l10 0 l-8 6 l3 10 l-9 -6 l-9 6 l3 -10 l-8 -6 l10 0Z`, C.org);
    Object.keys(P).forEach(k => { const p = P[k]; g += person(p[0], p[1], Object.assign({ s: k === 'wo' ? .3 : .28, m: k === hi ? 'grin' : 'smile' }, p[2])); });
    g += R(108, 186, 44, 20, '#fff', 8) + Tx(130, 201, '爸爸', 14, C.navy) + R(248, 186, 44, 20, '#fff', 8) + Tx(270, 201, '妈妈', 14, C.tealD) + R(160, 252, 22, 20, '#fff', 8) + Tx(171, 267, '我', 14, C.ink);
    return g;
  };
  S.c2_treeLao = () => tree2('laolao'); L.c2_treeLao = 'Cây gia đình, vòng sáng ở một người phía trên bên phải';
  S.c2_treeJiu = () => tree2('jiujiu'); L.c2_treeJiu = 'Cây gia đình, vòng sáng ở một người hàng giữa bên phải';
  S.c2_treeGu = () => tree2('gugu'); L.c2_treeGu = 'Cây gia đình, vòng sáng ở một người hàng giữa bên trái';
  S.c2_firm = () => R(0, 0, 400, 300, '#f6e7e1') + R(0, 246, 400, 54, '#d8c6a8') + person(220, 140, { s: 1, hs: 'short', hair: C.hairG, shirt: '#7a6a4f', m: 'flat', brows: 'angry' }) +
    R(176, 214, 88, 22, '#6a5a40', 10) + hand(180, 224, 9) + hand(260, 224, 9) + person(70, 190, { s: .45, hs: 'quiff', shirt: C.org, m: 'open', brows: 'worry' }) + bubble(30, 70, 70, 40, '?', 26, C.white) +
    Ci(340, 70, 32, 'none', `stroke="${C.red}" stroke-width="8"`) + Ln(318, 92, 362, 48, C.red, 8);
  L.c2_firm = 'Một người khoanh tay, nhất định lắc đầu; người kia năn nỉ';
  S.c2_chat = () => R(0, 0, 400, 300, '#fbeede') + R(260, 30, 110, 80, C.sky, 8, `stroke="#fff" stroke-width="6"`) + R(0, 236, 400, 64, '#d9b88a') +
    person(120, 150, { s: .8, hs: 'short', shirt: C.teal, m: 'open' }) + person(290, 150, { s: .8, hs: 'pony', shirt: C.butter, m: 'smile' }) + R(150, 210, 110, 14, C.brown, 6) + R(196, 224, 14, 40, C.brown) +
    R(172, 192, 18, 18, '#fff', 4) + R(222, 192, 18, 18, '#fff', 4) + bubble(150, 40, 70, 40, '…', 26, C.white);
  L.c2_chat = 'Hai người ngồi uống nước, trò chuyện';
  S.c2_familyPhoto = () => R(0, 0, 400, 300, '#f3e6d3') + R(0, 252, 400, 48, '#d8c6a8') + R(70, 40, 260, 180, C.brown, 8) + R(84, 54, 232, 152, '#dcecf5', 4) +
    [[130, 'bun', C.hairW, C.plum, .32], [190, 'short', C.hairG, '#7a6a4f', .32], [250, 'bob', C.hairD, C.teal, .32], [300, 'quiff', C.hairD, C.org, .3], [160, 'pony', C.hairD, C.butter, .24]].map(([x, hs, hr, sh, s], i) => person(x, i === 4 ? 150 : 110, { s, hs, hair: hr, shirt: sh, m: 'grin' })).join('') +
    R(84, 176, 232, 30, '#cfe0b8') + flower(40, 220, .9, C.pink) + flower(360, 220, .9, C.red);
  L.c2_familyPhoto = 'Tấm ảnh cả gia đình treo trên tường';
  S.c2_keys = () => R(0, 0, 400, 300, '#fff3d9') + house(110, 190, .9) + Ci(270, 120, 30, 'none', `stroke="#c99a3e" stroke-width="6"`) +
    keyIcon(270, 150, 70, '#e2a83a') + keyIcon(270, 150, 110, '#c99a3e') + keyIcon(270, 150, 40, '#d9b45a') + heart(330, 70, 1.5, C.pink, 'class="fl"') + Tx(200, 60, '?', 50, C.org);
  L.c2_keys = 'Một chùm chìa khoá cạnh ngôi nhà';
  S.c2_newHouse = () => R(0, 0, 400, 300, '#cfe3f5') + sun(60, 50, 18) + tower(130, 40, 140, 200, '#e2c9a8') + R(0, 236, 400, 64, '#a8d48f') + R(184, 196, 32, 40, C.brown, 3) +
    person(90, 196, { s: .45, hs: 'short', shirt: C.navy, m: 'grin' }) + person(320, 196, { s: .45, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'grin', flip: 1 }) + keyIcon(120, 226, -20, '#e2a83a') + heart(200, 24, 1.3, C.red, 'class="fl"');
  L.c2_newHouse = 'Hai vợ chồng trẻ vui mừng trước toà nhà mới';

  CH2.SC = S; CH2.SCENE_LABEL = L;
  if (typeof SC !== 'undefined') Object.assign(SC, S);
  if (typeof SCENE_LABEL !== 'undefined') Object.assign(SCENE_LABEL, L);
})();

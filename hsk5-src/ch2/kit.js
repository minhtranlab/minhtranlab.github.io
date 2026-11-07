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

  /* ---- shared props for tập 3–11 ---- */
  var wall = function (c, fl) { return R(0, 0, 400, 300, c || '#f6ead8') + R(0, 236, 400, 64, fl || '#d9b88a'); };
  var win = function (x, y, w, h, sky) { return R(x, y, w, h, sky || C.sky, 6, 'stroke="#fff" stroke-width="6"') + Ln(x + w / 2, y, x + w / 2, y + h, '#fff', 4); };
  var nightSky = function () { return R(0, 0, 400, 300, '#26304f') + Ci(334, 60, 26, '#fff3c0') + Ci(346, 54, 22, '#26304f') + [[40, 40], [100, 80], [170, 30], [240, 70], [290, 24], [380, 110]].map(([x, y]) => Ci(x, y, 2.4, '#fff')).join(''); };
  var sofa = function (x, y, s, c) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-70, -20, 140, 44, c || '#bd6a5a', 14) + R(-70, -46, 140, 34, c || '#bd6a5a', 14) + R(-80, -30, 20, 54, '#a8584a', 10) + R(60, -30, 20, 54, '#a8584a', 10)); };
  var bed = function (x, y, s, made) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-90, -40, 18, 70, C.brown, 4) + R(-90, -6, 180, 30, '#8a5a3b', 8) + R(-72, -22, 40, 18, '#fff', 8) + (made === false ? Pa('M-30 -12 Q20 -40 80 -10 L84 6 L-30 6Z', '#cfe0f0') : R(-30, -16, 116, 22, '#9fd3ee', 8) + Ln(-24, -6, 80, -6, 'rgba(255,255,255,.5)', 3))); };
  var box = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-26, -22, 52, 44, '#d9a86a', 4) + Ln(-26, -6, 26, -6, '#b8864a', 3) + Ln(0, -22, 0, -6, '#b8864a', 3)); };
  var bus = function (x, y, s, c, lit) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-110, -70, 220, 90, c || '#4f7f8f', 14) + [-86, -46, -6, 34].map(q => R(q, -58, 32, 28, lit ? '#ffe39a' : '#cfe3f2', 4)).join('') + R(74, -58, 26, 64, lit ? '#ffe39a' : '#cfe3f2', 4) + Ci(-66, 22, 15, '#333') + Ci(66, 22, 15, '#333') + Ci(-66, 22, 6, '#999') + Ci(66, 22, 6, '#999')); };
  var hardhat = function () { return Pa('M-30 -14 Q-30 -46 0 -46 Q30 -46 30 -14Z', '#f2c230') + R(-36, -16, 72, 8, '#e0ad1c', 4); };
  var money = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-30, -16, 60, 32, '#7fbf7a', 4, 'stroke="#4f8f4a" stroke-width="2"') + Ci(0, 0, 9, 'none', 'stroke="#4f8f4a" stroke-width="2"') + R(-22, -26, 60, 32, '#94cc8f', 4, 'stroke="#4f8f4a" stroke-width="2" opacity=".9"')); };
  var sweat = function (x, y) { return tear(x, y) + tear(x + 12, y + 10); };
  var dog = function (x, y, s, o) { o = o || {}; return G(`translate(${x} ${y}) scale(${s || 1}${o.flip ? ' ' : ''})`, R(-40, -16, 80, 34, '#c99a6a', 16) + Ci(44, -22, 22, '#c99a6a') + Pa('M30 -40 L22 -62 L40 -46Z', '#8a5a3b') + Ci(52, -26, 3, C.ink) + Ci(64, -18, 4, C.ink) + R(-34, 12, 10, 26, '#b8864a', 4) + R(24, 12, 10, 26, '#b8864a', 4) + Pa('M-40 -8 Q-62 -30 -56 -44', 'none', 'stroke="#c99a6a" stroke-width="7" stroke-linecap="round"') + (o.run ? Pa('M-80 -10 l-20 0 M-84 6 l-24 0', 'none', `stroke="${C.grey}" stroke-width="4" stroke-linecap="round"`) : '')); };
  var keyring = function (x, y, s) { return G(`translate(${x} ${y}) scale(${s || 1})`, Ci(0, 0, 22, 'none', 'stroke="#c99a3e" stroke-width="6"') + keyIcon(4, 26, 80, '#e2a83a') + keyIcon(-6, 24, 105, '#c99a3e') + keyIcon(14, 22, 55, '#d9b45a') + keyIcon(-14, 20, 130, '#e8be6a')); };
  var padlock = function (x, y, s, open) { return G(`translate(${x} ${y}) scale(${s || 1})`, Pa(open ? 'M-14 -10 L-14 -34 Q-14 -50 2 -50 Q18 -50 18 -34 L18 -26' : 'M-14 -10 L-14 -30 Q-14 -46 0 -46 Q14 -46 14 -30 L14 -10', 'none', 'stroke="#8a96ad" stroke-width="7"') + R(-22, -12, 44, 36, '#e2a83a', 6) + Ci(0, 4, 5, C.ink) + R(-2, 4, 4, 10, C.ink)); };
  var door = function (x, y, s, state) { return G(`translate(${x} ${y}) scale(${s || 1})`, R(-40, -100, 80, 160, '#8a5a3b', 4) + (state === 'open' ? R(-36, -96, 72, 152, '#ffe39a') + Pa('M-36 -96 L-60 -86 L-60 50 L-36 56Z', C.brown) : R(-36, -96, 72, 152, C.brown, 2) + Ci(24, -20, 5, C.butter))); };

  /* ---- tập 3 ---- */
  S.c2_buyHouse = () => R(0, 0, 400, 300, '#eaf2f8') + R(0, 236, 400, 64, '#c9b79c') + R(196, 20, 8, 260, '#fff') +
    person(64, 150, { s: .6, hs: 'short', shirt: C.org, hat: hardhat() }) + box(84, 200, .8) + person(150, 170, { s: .5, hs: 'pony', shirt: C.pink }) + money(100, 236, .7) +
    Pa('M178 140 L222 140', 'none', `stroke="${C.org}" stroke-width="8" stroke-linecap="round"`) + Pa('M214 128 L232 140 L214 152Z', C.org) +
    tower(250, 70, 110, 166, '#e2c9a8') + R(290, 196, 30, 40, C.brown, 3) + keyIcon(260, 260, -10, '#e2a83a') + heart(300, 46, 1.2, C.red, 'class="fl"');
  L.c2_buyHouse = 'Hai vợ chồng đi làm thuê, dành tiền mua căn nhà mới';
  S.c2_work = () => R(0, 0, 400, 300, '#eaf2f8') + R(0, 240, 400, 60, '#c9b79c') + R(250, 40, 10, 200, '#8a96ad') + R(330, 40, 10, 200, '#8a96ad') + [80, 140, 200].map(y => R(250, y, 90, 8, '#8a96ad')).join('') +
    box(250, 228, .8) + box(296, 228, .8) + person(160, 140, { s: .85, hs: 'short', shirt: C.org, m: 'flat', hat: hardhat() }) + box(196, 112, 1.1) + sweat(126, 128);
  L.c2_work = 'Một người đội mũ bảo hộ khuân hàng ở công trường';
  S.c2_earn = () => R(0, 0, 400, 300, '#f3f7ea') + R(0, 240, 400, 60, '#cfe0b8') + person(150, 140, { s: .85, hs: 'short', shirt: C.teal, m: 'grin', hat: hardhat() }) + sweat(112, 126) +
    money(260, 150, 1.4) + hand(226, 168, 10) + R(300, 210, 40, 30, '#e2b85c', 4) + R(300, 200, 40, 10, '#c99a3e', 3) + Tx(320, 232, '¥', 22, C.white);
  L.c2_earn = 'Người thợ mồ hôi nhễ nhại, cầm xấp tiền vừa kiếm được';
  S.c2_county = () => R(0, 0, 400, 300, '#e3f0f8') + Pa('M0 210 Q200 180 400 210 L400 300 L0 300Z', '#a8d48f') + Pa('M30 230 Q200 200 370 230', 'none', `stroke="#c9b79c" stroke-width="14" stroke-linecap="round"`) +
    house(60, 190, .35) + house(100, 196, .3, { roof: '#6f5a8a' }) + Tx(80, 270, 'làng', 18, C.ink) +
    Ci(200, 160, 62, 'rgba(255,209,102,.6)', `stroke="${C.org}" stroke-width="4"`) + tower(166, 120, 30, 70, '#e2c9a8') + tower(202, 106, 34, 84, '#d9b88a') + house(200, 196, .28) + Tx(200, 270, 'huyện', 20, C.org) +
    G('', tower(296, 40, 30, 160, '#8fa3c0') + tower(330, 20, 34, 180, '#6f86aa') + tower(364, 60, 30, 140, '#a3b4cf')).replace('<g', '<g opacity=".55"') + Tx(340, 270, 'thành phố', 18, C.ink);
  L.c2_county = 'Bản đồ: làng, huyện (vòng sáng) và thành phố';
  S.c2_sets = () => R(0, 0, 400, 300, '#fbf3e6') +
    G('translate(70 150)', Pa('M-40 -70 L40 -70 L48 20 L-48 20Z', '#3f4f7a') + Pa('M-8 -70 L0 -40 L8 -70Z', '#fff') + R(-40, 24, 34, 80, '#3f4f7a', 4) + R(6, 24, 34, 80, '#3f4f7a', 4)) +
    G('translate(200 160)', Ci(0, 0, 48, '#fff', `stroke="${C.teal}" stroke-width="4"`) + Ci(0, 0, 30, 'none', `stroke="${C.teal}" stroke-width="2"`) + Pa('M-34 40 Q0 76 34 40Z', '#fff', `stroke="${C.teal}" stroke-width="4"`) + R(50, -30, 6, 80, C.grey, 3) + R(-58, -30, 6, 80, C.grey, 3)) +
    G('translate(330 150)', R(-50, -50, 100, 100, '#fff', 4, `stroke="${C.ink}" stroke-width="4"`) + Ln(-50, 0, 10, 0, C.ink, 3) + Ln(10, -50, 10, 50, C.ink, 3) + Ln(10, 10, 50, 10, C.ink, 3)) +
    [70, 200, 330].map(x => Pa(`M${x - 50} 262 Q${x - 50} 272 ${x - 40} 272 L${x + 40} 272 Q${x + 50} 272 ${x + 50} 262`, 'none', `stroke="${C.org}" stroke-width="4"`)).join('');
  L.c2_sets = 'Ba thứ đi thành bộ: bộ com-lê, bộ chén đĩa, một căn hộ';
  var plan = function (rooms) {
    let g = R(0, 0, 400, 300, '#eef4fb') + R(60, 40, 280, 220, '#fff', 4, `stroke="${C.ink}" stroke-width="6"`);
    if (rooms === 3) g += Ln(180, 40, 180, 260, C.ink, 5) + Ln(180, 150, 340, 150, C.ink, 5) + Ln(60, 170, 180, 170, C.ink, 5) + bed(120, 110, .45) + bed(260, 100, .45) + sofa(120, 230, .5) + R(250, 190, 60, 40, '#e8d3b0', 4) + R(170, 250, 30, 10, '#ffe39a');
    else g += bed(200, 150, .9) + R(80, 210, 50, 40, '#e8d3b0', 4) + R(310, 60, 20, 30, '#ffe39a');
    return g;
  };
  S.c2_flat3 = () => plan(3); L.c2_flat3 = 'Sơ đồ một căn nhà có ba phòng';
  S.c2_room1 = () => plan(1); L.c2_room1 = 'Sơ đồ một gian phòng nhỏ có một cái giường';
  S.c2_furniture = () => wall('#f3e6d3') + sofa(130, 200, 1) + R(230, 180, 110, 12, C.brown, 4) + R(238, 192, 10, 44, C.brown) + R(322, 192, 10, 44, C.brown) + chair(250, 196, '#a8584a') + R(150, 50, 100, 70, '#fff', 4, `stroke="${C.brown}" stroke-width="5"`);
  L.c2_furniture = 'Một bộ đồ gỗ: ghế sofa, bàn, ghế';

  /* ---- tập 4 ---- */
  S.c2_newHome = () => wall('#fdf3e3', '#e2c9a8') + win(260, 40, 110, 80) + sofa(320, 214, .7, C.teal) + heart(200, 40, 1.3, C.red, 'class="fl"') +
    dad(80, 140, { s: .7, m: 'grin' }) + hand(126, 150, 9) + mom(170, 140, { s: .7, m: 'grin' }) + person(270, 150, { s: .6, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'smile', flip: 1 }) + keyring(226, 156, .6);
  L.c2_newHome = 'Trong nhà mới: ba mẹ cười tươi, cô con dâu đưa chùm chìa khoá, ba xua tay';
  S.c2_renovate = () => wall('#fdf7ee', '#cfc3b0') + R(40, 40, 160, 196, '#cfe8dc') + R(200, 40, 160, 196, '#fdf7ee') + Pa('M60 236 L100 40 M140 236 L100 40', 'none', `stroke="${C.brown}" stroke-width="6"`) + [90, 140, 190].map(y => Ln(70 + (236 - y) * 0, y, 130, y, C.brown, 5)).join('') +
    person(260, 150, { s: .7, hs: 'short', shirt: C.butter, m: 'smile', hat: Pa('M-30 -20 Q0 -50 30 -20Z', '#fff') }) + Ln(214, 120, 200, 70, C.grey, 5) + R(186, 50, 30, 24, '#8fd0b0', 4) + R(300, 210, 40, 26, '#8fd0b0', 4) + Pa('M300 210 Q320 196 340 210', 'none', `stroke="${C.grey}" stroke-width="3"`);
  L.c2_renovate = 'Thợ đang lăn sơn tường, có thang và thùng sơn';
  S.c2_moveBoxes = () => wall('#fdf3e3') + door(310, 176, 1, 'open') + box(80, 214, 1) + box(80, 170, .9) + box(140, 214, 1) + person(220, 140, { s: .7, hs: 'short', shirt: C.navy, m: 'grin', flip: 1 }) + box(250, 160, 1.1);
  L.c2_moveBoxes = 'Một người khuân thùng đồ vào nhà (dọn nhà)';
  S.c2_fixCar = () => R(0, 0, 400, 300, '#eaf2f8') + R(0, 236, 400, 64, '#8a8f99') + car(220, 236, 1.6, C.red) + person(90, 150, { s: .7, hs: 'short', shirt: C.teal, m: 'flat', brows: 'worry' }) + Ln(130, 190, 160, 170, C.grey, 6) + Ci(162, 168, 8, 'none', `stroke="${C.grey}" stroke-width="4"`);
  L.c2_fixCar = 'Một người cầm cờ lê sửa xe hơi';
  S.c2_hot = () => R(0, 0, 400, 300, '#fff1d6') + sun(300, 70, 46) + R(0, 240, 400, 60, '#f2d29c') + person(150, 140, { s: .85, hs: 'short', shirt: C.red, m: 'open', brows: 'worry' }) + sweat(104, 120) + sweat(186, 110) +
    R(40, 70, 18, 120, '#fff', 9, `stroke="${C.ink}" stroke-width="3"`) + R(44, 100, 10, 86, C.red, 5) + Ci(49, 194, 14, C.red);
  L.c2_hot = 'Trời nắng gắt, một người nóng toát mồ hôi, nhiệt kế đỏ rực';
  S.c2_keyBunch = () => R(0, 0, 400, 300, '#fff6e3') + keyring(80, 110, 1.3) +
    G('translate(220 120)', [[0, 0], [-18, 0], [18, 0], [-9, 18], [9, 18], [0, 36], [-27, -18], [27, -18], [-9, -18], [9, -18]].map(([x, y]) => Ci(x, y, 11, '#8a4fa8')).join('') + R(-2, -46, 4, 26, C.green)) +
    G('translate(330 150) rotate(20)', R(-3, -90, 6, 180, '#c99a6a', 3) + [-60, -30, 0, 30].map(y => R(-16, y, 32, 24, '#a8584a', 6)).join(''));
  L.c2_keyBunch = 'Một chùm chìa khoá, một chùm nho và một xiên thịt';

  S.c2_goodNews = () => wall('#fff3e3') + win(280, 40, 90, 70) + person(170, 140, { s: .85, hs: 'bob', hair: C.hairG, shirt: C.teal, m: 'grin', eyes: 'closed' }) + hand(110, 96, 10) + hand(230, 96, 10) +
    R(234, 140, 60, 44, '#fff', 4, `stroke="${C.red}" stroke-width="3"`) + Pa('M234 140 L264 166 L294 140', 'none', `stroke="${C.red}" stroke-width="3"`) + conf(8);
  L.c2_goodNews = 'Người mẹ giơ hai tay reo mừng, cầm lá thư báo tin vui';
  /* ---- tập 5 ---- */
  S.c2_drunkNight = () => wall('#e8e0f0', '#c9b79c') + win(40, 40, 110, 80, '#26304f') + Ci(118, 66, 12, '#fff3c0') + clockWall(210, 64, 28, 9, 40) + sofa(220, 210, 1, '#7a8fb2') +
    person(220, 160, { s: .6, hs: 'short', hair: C.hairG, shirt: '#7a6a4f', m: 'smile', eyes: 'closed' }).replace(/opacity="\.5"/g, 'opacity=".95"') + Zs(262, 140, .7) + R(80, 220, 60, 10, C.brown, 3) + R(96, 196, 14, 26, '#7fbf7a', 4) + R(100, 186, 6, 12, '#7fbf7a');
  L.c2_drunkNight = 'Trời tối, ba mặt đỏ ngủ trên ghế sofa, chai rượu trên bàn';
  S.c2_tipsy = () => R(0, 0, 400, 300, '#f3eaf6') + R(0, 240, 400, 60, '#d8c6a8') + person(170, 140, { s: .85, hs: 'short', shirt: C.navy, m: 'grin', eyes: 'closed' }).replace(/opacity="\.5"/g, 'opacity=".95"') +
    Pa('M110 60 q10 -14 20 0 q10 14 20 0 M210 50 q10 -14 20 0 q10 14 20 0', 'none', `stroke="${C.plum}" stroke-width="4" stroke-linecap="round"`) + R(290, 170, 26, 60, '#7fbf7a', 6) + R(296, 150, 14, 24, '#7fbf7a', 3) + R(250, 200, 24, 30, '#fff', 4, `stroke="${C.ink}" stroke-width="2"`);
  L.c2_tipsy = 'Một người mặt đỏ, lâng lâng cạnh chai rượu';
  S.c2_lastBus = () => nightSky() + R(0, 236, 400, 64, '#4a5068') + bus(270, 214, .9, '#4f7f8f', 1) + Ci(160, 120, 8, '#ffe39a') + R(158, 126, 4, 110, '#8a96ad') +
    dad(170, 180, { s: .4, flip: 1 }) + mom(214, 180, { s: .4, flip: 1 }) + person(60, 176, { s: .42, hs: 'short', shirt: C.teal, m: 'open', brows: 'worry' }) + person(110, 176, { s: .42, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'open', brows: 'worry' }) + hand(140, 196, 6);
  L.c2_lastBus = 'Ban đêm, ba mẹ bước lên chuyến xe cuối, hai vợ chồng níu lại';
  S.c2_strongSun = () => R(0, 0, 400, 300, '#fff1d6') + sun(310, 76, 56) + R(0, 236, 400, 64, '#f2d29c') + person(150, 140, { s: .85, hs: 'pony', shirt: C.teal, m: 'flat', eyes: 'closed' }) + hand(176, 112, 10) + Pa('M80 290 L220 290 L180 250 L120 250Z', 'rgba(0,0,0,.12)');
  L.c2_strongSun = 'Nắng trưa chói chang, một người lấy tay che mắt';
  S.c2_night = () => nightSky() + Pa('M0 220 Q200 200 400 222 L400 300 L0 300Z', '#2f3a5a') + house(100, 196, .55, {}) .replace(new RegExp(C.sky, 'g'), '#3b4766') + house(300, 200, .5, { lit: 1 });
  L.c2_night = 'Ban đêm, trăng sao, một căn nhà còn sáng đèn';
  var arrive = function (night, leave) {
    return (night ? nightSky() : R(0, 0, 400, 300, '#cfe9f5') + sun(330, 60, 24)) + R(0, 236, 400, 64, night ? '#4a5068' : '#c9b79c') + R(200, 60, 200, 176, night ? '#3b4766' : '#f3e2c4') + door(260, 196, .8, 'open') +
      clock(100, 70, 34, 12, 0) + person(leave ? 150 : 236, 150, { s: .55, hs: 'short', shirt: C.navy, m: 'smile', flip: leave ? 1 : 0 }) + (leave ? R(110, 200, 30, 36, C.red, 6) + Pa('M86 210 l-24 0 M90 226 l-28 0', 'none', `stroke="${C.grey}" stroke-width="4"`) : '');
  };
  S.c2_clockNight = () => arrive(1, 0); L.c2_clockNight = 'Ban đêm, đồng hồ chỉ 12 giờ, một người bước vào nhà';
  S.c2_clockNoon = () => arrive(0, 0); L.c2_clockNoon = 'Ban ngày, đồng hồ chỉ 12 giờ, một người bước vào nhà';
  S.c2_leaveNight = () => arrive(1, 1); L.c2_leaveNight = 'Ban đêm, đồng hồ chỉ 12 giờ, một người kéo vali ra khỏi nhà';
  S.c2_dogBroke = () => R(0, 0, 400, 300, '#e9f4e3') + R(0, 236, 400, 64, '#a8d48f') + R(40, 120, 16, 120, C.brown, 4) + Pa('M56 160 Q90 170 110 168', 'none', `stroke="${C.brown}" stroke-width="5"`) + Pa('M110 168 l8 -8 l4 10', 'none', `stroke="${C.brown}" stroke-width="4"`) +
    Pa('M160 176 l8 8 l-4 8', 'none', `stroke="${C.brown}" stroke-width="4"`) + Pa('M168 186 Q190 190 212 196', 'none', `stroke="${C.brown}" stroke-width="5"`) + dog(270, 200, 1, { run: 1 });
  L.c2_dogBroke = 'Sợi dây buộc chó đứt làm hai, con chó chạy mất';
  S.c2_dogTied = () => R(0, 0, 400, 300, '#e9f4e3') + R(0, 236, 400, 64, '#a8d48f') + R(40, 120, 16, 120, C.brown, 4) + Pa('M56 160 Q120 200 196 196', 'none', `stroke="${C.brown}" stroke-width="5"`) + dog(240, 200, 1) + Zs(300, 140, .6);
  L.c2_dogTied = 'Con chó còn buộc dây vào cột, nằm ngủ';
  /* ---- tập 6 (tease of tập 5) ---- */
  S.c2_lockedHouse = () => R(0, 0, 400, 300, '#e3eef5') + R(0, 236, 400, 64, '#c9b79c') + tower(40, 40, 160, 196, '#e2c9a8') + R(102, 180, 36, 56, C.brown, 3) + padlock(120, 212, .7) +
    person(270, 150, { s: .55, hs: 'short', shirt: C.teal, m: 'flat', flip: 1 }) + person(340, 150, { s: .55, hs: 'long', hair: C.hairD, shirt: C.pink, m: 'flat', flip: 1 }) + R(220, 196, 30, 40, C.red, 6) + R(366, 196, 30, 40, C.navy, 6);
  L.c2_lockedHouse = 'Căn nhà mới khoá cửa, hai vợ chồng kéo vali đi xa';

  CH2.SC = S; CH2.SCENE_LABEL = L;
  if (typeof SC !== 'undefined') Object.assign(SC, S);
  if (typeof SCENE_LABEL !== 'undefined') Object.assign(SCENE_LABEL, L);
})();

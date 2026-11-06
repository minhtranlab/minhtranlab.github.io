/* Load the Bài 2 content files into a fake browser window (Node vm) and print CH2 as JSON, plus the text drawn in every scene.
   Usage: node dump_ch2.js [order]   order = "abc" (alphabetical, default) | "ticket" (words, learn, ety, story, bank, test, kit) | "rev" (reverse)
   The Bài 1 kit (../kit.js, ../kit2.js) is loaded first, like in the app, so the c2_ scenes can be drawn. Exit code 1 on any error. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const HERE = __dirname, FILES = ['words.js', 'learn.js', 'ety.js', 'story.js', 'bank.js', 'test.js', 'kit.js'];
const mode = process.argv[2] || 'abc';
const order = mode === 'ticket' ? FILES.slice() : mode === 'rev' ? FILES.slice().sort().reverse() : FILES.slice().sort();
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const run = (f) => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
try {
  run(path.join(HERE, '..', 'kit.js')); run(path.join(HERE, '..', 'kit2.js'));
  order.forEach(f => run(path.join(HERE, f)));
  const out = vm.runInContext(`(function () {
    const C2 = window.CH2, names = Object.keys(C2.SC || {}), all = new Set(names);
    const used = []; (C2.SESSIONS || []).forEach(s => { if (s.thumb) used.push(s.thumb); s.screens.forEach(sc => { ['scene'].forEach(k => sc[k] && used.push(sc[k])); (sc.opts || []).forEach(o => o.sc && used.push(o.sc)); if (sc.tease) used.push(sc.tease.scene); }); });
    Object.values(C2.QB || {}).forEach(a => a.forEach(q => q.scene && used.push(q.scene)));
    used.forEach(n => all.add(n));
    const scenes = {}; all.forEach(n => { const svg = scene(n); scenes[n] = { ok: !!svg, text: (svg.match(/<text[^>]*>([^<]*)<\\/text>/g) || []).map(t => t.replace(/<[^>]+>/g, '')).join(' '), label: (typeof SCENE_LABEL !== 'undefined' && SCENE_LABEL[n]) || '' }; });
    const data = {}; Object.keys(C2).forEach(k => { if (typeof C2[k] !== 'function') data[k] = C2[k]; });
    delete data.SC; delete data.SCENE_LABEL;
    return JSON.stringify({ order: ${JSON.stringify(order)}, CH2: data, scenes, newScenes: names, inSC: names.every(n => typeof SC[n] === 'function') });
  })()`, ctx);
  process.stdout.write(out);
} catch (e) { console.error('LOAD ERROR (' + mode + '):', e && e.stack || e); process.exit(1); }

/* ===== common engine (inlined into each prototype) ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
function h(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ---- tokenizer: every Chinese word becomes tap-to-see ---- */
const MAXL = Math.max(...Object.keys(DICT).map(k => k.length));
const isHan = c => /[\u4e00-\u9fff]/.test(c);
function segs(s) { // -> [{k, known}] for every Chinese word in s
  const out = []; let i = 0;
  while (i < s.length) {
    if (isHan(s[i])) {
      let m = 0;
      for (let L = Math.min(MAXL, s.length - i); L >= 1; L--) { if (DICT[s.substr(i, L)]) { m = L; break; } }
      if (!m) { out.push({ k: s[i], known: false }); i++; } else { out.push({ k: s.substr(i, m), known: true }); i += m; }
    } else i++;
  }
  return out;
}
function zh(s) {
  let out = '', i = 0;
  while (i < s.length) {
    const c = s[i];
    if (isHan(c)) {
      let m = 0;
      for (let L = Math.min(MAXL, s.length - i); L >= 1; L--) { if (DICT[s.substr(i, L)]) { m = L; break; } }
      if (!m) { out += `<span class="w unk" data-k="${c}">${c}</span>`; i++; continue; }
      const k = s.substr(i, m), d = DICT[k];
      out += `<span class="w${d[3] === 't' ? ' t' : ''}" data-k="${k}"><ruby>${k}<rt>${d[0]}</rt></ruby></span>`;
      i += m;
    } else { out += c; i++; }
  }
  return out;
}
/* option row: the text selects; 🔊 plays it; the lens lists every word of that option */
function optRow(text, cls = 'opt', ok) {
  const row = h('div', 'optrow');
  const b = h('button', cls, zh(text)); row.appendChild(b); b.dataset.ok = ok ? 1 : 0;
  if ([...text].some(isHan)) {
    const sp = h('button', 'lens spk', '🔊'); sp.setAttribute('aria-label', 'Nghe');
    sp.onclick = ev => { ev.stopPropagation(); speak(text); };
    row.appendChild(sp);
    const l = h('button', 'lens', '🔍'); l.setAttribute('aria-label', 'Xem nghĩa từng từ');
    l.onclick = ev => { ev.stopPropagation(); showGloss(text); };
    row.appendChild(l);
  }
  return { row, btn: b };
}
/* plain text of a zh() string (for TTS / comparing) */
const plain = s => s.replace(/<[^>]+>/g, '');

/* ---- bottom sheet with meaning ---- */
let sheetEl;
function initSheet() {
  sheetEl = h('div', 'sheet'); sheetEl.id = 'sheet'; sheetEl.setAttribute('role', 'dialog');
  document.body.appendChild(sheetEl);
  document.addEventListener('click', e => {
    const w = e.target.closest('.w');
    if (w && (e.target.closest('.reveal') || !e.target.closest('.opt,.cx,.tile,.slot,.chip2,.line,.mw,.bigq,.wh,.sticker,.prompt,.wcf,.cm-card'))) { e.stopPropagation(); showSheet(w.dataset.k); return; }
    if (sheetEl.classList.contains('open') && !e.target.closest('#sheet')) sheetEl.classList.remove('open');
  }, true);
}
function showSheet(k) {
  try { if (typeof onLook === 'function') onLook(k); } catch (e) { }
  const d = DICT[k];
  if (!d) { sheetEl.innerHTML = `<div class="sh-hz">${k}</div><div class="sh-vi">Chưa có nghĩa</div>`; sheetEl.classList.add('open'); return; }
  const tag = d[3] === 't' ? '<span class="chip chip-t">từ mới của bài</span>' : d[3] === 's' ? '<span class="chip chip-s">từ phụ, chỉ cần hiểu</span>' : d[3] === 'n' ? '<span class="chip">tên riêng</span>' : '';
  sheetEl.innerHTML = `<div class="sh-row"><div class="sh-hz">${k}</div><div class="sh-py">${d[0]}</div>${canSpeak() ? '<button class="sh-snd" aria-label="Nghe">🔊</button>' : ''}</div>
  <div class="sh-vi">${d[1]}</div>${d[2] ? `<div class="sh-hv">Hán–Việt: <b>${d[2]}</b></div>` : ''}${tag}`;
  const b = $('.sh-snd', sheetEl); if (b) b.onclick = ev => { ev.stopPropagation(); speak(k); };
  if (d[3] === 't' && typeof wordDetail === 'function' && typeof W !== 'undefined' && W[k] && !document.querySelector('.wcov')) { const cb = h('button', 'sh-card', '🎴 Mở thẻ từ'); cb.onclick = ev => { ev.stopPropagation(); sheetEl.classList.remove('open'); wordDetail(k, true); }; sheetEl.appendChild(cb); }
  sheetEl.classList.add('open'); if (AUD[akey(k)]) speak(k);
}

function showGloss(text) {
  const seen = new Set(), items = [];
  segs(text).forEach(x => { if (!seen.has(x.k)) { seen.add(x.k); items.push(x); } });
  sheetEl.innerHTML = '<div class="gl-t">Nghĩa từng từ</div>' + items.map(x => { const d = DICT[x.k] || ['?', 'chưa có nghĩa', '', '']; return `<div class="gl"><span class="gl-hz">${x.k}</span><span class="gl-py">${d[0]}</span><span class="gl-vi">${d[1]}</span></div>`; }).join('');
  sheetEl.classList.add('open');
}
/* ---- audio: recorded clips (AUD: Han-only key -> data URI), device voice only as fallback ---- */
const AUD = (typeof AUDIO_DATA !== 'undefined') ? AUDIO_DATA : {};
const akey = t => (String(t).replace(/<[^>]+>/g, '').match(/[\u4e00-\u9fff]/g) || []).join('');
let uaEl = null, uaRes = null, lastWarn = 0, actx2 = null, curSrc = null, curRes = null; const bufCache = new Map(), rawCache = new Map(), inflight = new Map();
try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) { }
function ac() { if (!actx2) actx2 = new (window.AudioContext || window.webkitAudioContext)(); return actx2; }
['pointerdown', 'touchend', 'click', 'keydown'].forEach(ev => document.addEventListener(ev, () => { try { const c = ac(); if (c.state !== 'running') c.resume(); } catch (e) { } }, true));
/* a clip is either a data: URI (single-file build) or a file path under audio/ (hosted build, fetched on demand) */
function srcBytes(src) {
  if (rawCache.has(src)) return Promise.resolve(rawCache.get(src));
  if (src.startsWith('data:')) { const bin = atob(src.split(',')[1]); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); rawCache.set(src, u.buffer); return Promise.resolve(u.buffer); }
  if (inflight.has(src)) return inflight.get(src);
  const p = fetch(src).then(r => { if (!r.ok) throw new Error('clip ' + r.status); return r.arrayBuffer(); }).then(b => { rawCache.set(src, b); inflight.delete(src); return b; }, e => { inflight.delete(src); throw e; });
  inflight.set(src, p); return p;
}
async function getBuf(src) {
  if (bufCache.has(src)) { const b = bufCache.get(src); bufCache.delete(src); bufCache.set(src, b); return b; }
  const raw = await srcBytes(src); const b = await ac().decodeAudioData(raw.slice(0));
  bufCache.set(src, b); if (bufCache.size > 80) bufCache.delete(bufCache.keys().next().value); return b;
}
/* preload(keys): warm the clips of the unit being played, four at a time, in the background */
let pq = [], pActive = 0;
function pump() { while (pActive < 4 && pq.length) { const s = pq.shift(); pActive++; srcBytes(s).catch(() => { }).finally(() => { pActive--; pump(); }); } }
function preload(keys) { keys.forEach(k => { const s = AUD[k]; if (s && !s.startsWith('data:') && !rawCache.has(s) && !inflight.has(s) && !pq.includes(s)) pq.push(s); }); pump(); }
try { if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => { }); } catch (e) { }
function stopAudio() { try { if (window.__uA) { window.__uA.pause(); window.__uA = null; } } catch (e) { } if (uaRes) { const r = uaRes; uaRes = null; r('int'); } try { if (curSrc) { curSrc.onended = null; curSrc.stop(); } } catch (e) { } curSrc = null; if (curRes) { const r = curRes; curRes = null; r(false); } try { speechSynthesis.cancel(); } catch (e) { } }
let zhVoice = null;
function loadVoices() { try { const v = speechSynthesis.getVoices(); zhVoice = v.find(x => /zh[-_]CN/i.test(x.lang)) || v.find(x => /^zh/i.test(x.lang)) || null; } catch (e) { zhVoice = null; } }
try { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; } catch (e) { }
const hasClip = t => !!AUD[akey(t)];
function canSpeak() { return Object.keys(AUD).length > 0 || !!zhVoice; }
window.__plays = [];
/* speak(text, slow): resolves true when the clip has finished, false if nothing could play */

function audioWarn() { const n = Date.now(); if (n - lastWarn < 6000) return; lastWarn = n; try { if (typeof toast === 'function') toast('Chưa phát được âm thanh. Kiểm tra gạt chuông im lặng và âm lượng, rồi chạm 🔊 lại.'); } catch (e) { } }
/* fallback player: plain <audio> from the clip bytes (works when WebAudio is suspended/interrupted on iOS) */
async function playTag(src) {
  const raw = await srcBytes(src); stopAudio();
  const url = URL.createObjectURL(new Blob([raw], { type: 'audio/mpeg' }));
  const a = uaEl || (uaEl = new Audio()); a.src = url; window.__uA = a;
  return await new Promise(res => { const done = v => { uaRes = null; try { URL.revokeObjectURL(url); } catch (e) { } res(v); }; uaRes = done; a.onended = () => done(true); a.onerror = () => done(false); const p = a.play(); if (p && p.catch) p.catch(() => done(false)); });
}
async function playWeb(src) {
  const c = ac(); if (c.state !== 'running') await Promise.race([c.resume(), sleep(900)]);
  if (c.state !== 'running') return null;
  const b = await getBuf(src); stopAudio();
  const s = c.createBufferSource(); s.buffer = b; s.connect(c.destination); curSrc = s;
  return await new Promise(res => { curRes = res; s.onended = () => { curRes = null; res(true); }; s.start(); });
}
/* speak(text, slow, male): resolves true when the clip has finished, false if nothing could play */
async function speak(t, slow, male) {
  const k = akey(t); if (!k) return false;
  const src = male ? (AUD[(slow ? 'MS|' : 'M|') + k] || AUD['M|' + k] || AUD[k]) : AUD[k];
  window.__plays.push((male ? 'M' : 'F') + (slow ? 'slow:' : ':') + k);
  if (src) {
    let r = null;
    try { r = await playWeb(src); } catch (e) { r = null; }
    if (r === null) { try { r = await playTag(src); } catch (e) { r = false; } if (r === 'int') return false; if (!r) audioWarn(); }
    return !!r;
  }
  if (!zhVoice) { audioWarn(); return false; }
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(plain(t)); u.voice = zhVoice; u.lang = zhVoice.lang; u.rate = slow ? .6 : .85; speechSynthesis.speak(u); return true; } catch (e) { return false; }
}

/* ---- tiny sounds ---- */
let actx, soundOn = true;
function tone(f, d, t = 'sine', v = .06, at = 0) {
  if (!soundOn) return;
  try {
    actx = ac(); if (actx.state !== 'running') actx.resume();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = t; o.frequency.value = f; g.gain.value = v;
    g.gain.exponentialRampToValueAtTime(.0001, actx.currentTime + at + d);
    o.connect(g); g.connect(actx.destination); o.start(actx.currentTime + at); o.stop(actx.currentTime + at + d);
  } catch (e) { }
}
const sfx = {
  ok() { tone(660, .12, 'sine', .07); tone(880, .18, 'sine', .07, .09); },
  bad() { tone(180, .22, 'sawtooth', .05); },
  pop() { tone(520, .06, 'triangle', .05); },
  win() { [523, 659, 784, 1047].forEach((f, i) => tone(f, .2, 'sine', .07, i * .1)); }
};

/* ---- header toggles ---- */
function initToggles() {
  const py = $('#btnPy'), sn = $('#btnSnd');
  if (py) py.onclick = () => { document.body.classList.toggle('py'); py.classList.toggle('on', document.body.classList.contains('py')); };
  if (sn) sn.onclick = () => { soundOn = !soundOn; sn.classList.toggle('off', !soundOn); sn.textContent = soundOn ? '♪' : '✕'; if (soundOn) sfx.pop(); };
}
/* result of a typed answer: strip punctuation/space */
const norm = s => s.replace(/[\s，。？！、：；“”"'?,.!:;…—-]/g, '');

# HSK5 lesson app — handoff for a new Claude chat

Written 2026-10-18 at the end of a long working session. Everything needed to continue is either in this file or in the GitHub repo `minhtranlab/minhtranlab.github.io` (folder `hsk5-src/` = source, folder `hsk5/` = the live site). The previous chat's sandbox is gone, so do not look for files anywhere else.

## 0. Paste this as the first message in the new chat

> Mình là Minh. Đây là dự án app học HSK5 (Bài 1 "爱的细节") mà mình đang làm với Claude. Hãy đọc `hsk5-src/HANDOFF.md` trong repo GitHub `minhtranlab/minhtranlab.github.io` (hoặc file mình đính kèm), làm đúng theo đó, rồi tóm tắt lại cho mình bằng 5 dòng xem cậu hiểu tới đâu trước khi làm tiếp. Việc đầu tiên: [ghi việc muốn làm, ví dụ "làm Bài 2, ảnh sách đính kèm"].

If the new chat cannot reach the repo, tell Minh the GitHub connection is missing and give beginner-level steps (section 9).

## 1. Who Minh is and how to work with him

- Minh, Ho Chi Minh City. Vietnamese native, HSK4 learner heading to HSK5, plays the app on an iPad. He also runs a math-tutoring business; that is unrelated to this project.
- Writes casual mixed Vietnamese-English. **Reply short, casual, in Vietnamese (English words fine). No long recaps.** At the end of a task: what came out, the file or link, one next step if any.
- He is a beginner at technical steps (Apps Script, GitHub, Google Sheet). **When he must do something himself, give numbered steps covering every click and what he will see on screen. Never assume he knows how.** If a screen may look different, tell him to send a screenshot.
- He says he is not a Chinese tutor and **Claude is his Chinese tutor**: for Chinese-teaching and lesson-design choices, decide what is best for an HSK4→HSK5 learner and report afterwards. Do not ask him to confirm those. He cannot judge exercise text on paper; he gives feedback only after playing the built app.
- Ask before doing things that are expensive to redo or touch his accounts. He wants to know what is being tested and what question the test answers.
- Whenever a file is saved to his Mac folder `HSK5`, also send it into the chat (SendUserFile) and then write it to the Mac with `device_commit_files` (force true), if the Mac bridge is linked in that session. His folder on the Mac: `~/Desktop/03 - Personal/HSK5/` (subfolders `Prototypes/Pilot/`, `Backend/`, `HSK5 Books/Chapter 1 - Sample/` with photos of the book pages).
- Do not mention the textbook title or page numbers inside the app; say "sách" (the book) if needed.

## 2. What the app is (product decisions Minh made)

Private, single-page web app that teaches **HSK Standard Course 5A, Chapter 1 "爱的细节"** (Vietnamese edition). It started as dry "one word per screen" drills; he found those mechanical and boring, so the design is now **story-driven and varied**:

- The story IS the book's own sentences (not invented plot). A short invented context is fine only to make vocabulary understandable.
- A study unit = 1–3 consecutive book sentences + about 2–5 new words; about 11–13 screens; lots of illustrations drawn in SVG; as little on screen as possible, extras (pinyin, Hán Việt, etymology/chiết tự + mnemonic, examples, explanation) appear only on tap. No Vietnamese translation visible on a question screen before he answers. No tone drills (the TTS is not good enough for that).
- Interface language is Vietnamese. Works on iPad Safari. Words he taps for a meaning feed the revision list.
- Pinyin appears **only** through the top-right 拼 toggle, as small ruby text above the characters. No extra pinyin lines after answers. No "Đúng rồi" text on a correct answer (the green box is enough).
- Production tasks (order the words, type with a pinyin keyboard), new example sentences, grammar mini-lessons inside some units, and variety of screen types, so it never feels repetitive.
- A mixed review unit after every two study units, plus a separate "Ôn tập tổng hợp" revision path that he can take or skip any day (3/7/21-day spacing). Final test at the end of the chapter.
- Voices: **female = Matcha (sherpa-onnx `matcha-icefall-zh-baker`, sid 0; the dataset is non-commercial, which Minh accepts for personal/friends use) and male = Kokoro v1.1 voice "D" (sid 70)**. He also likes male "E" (sid 90) and may switch later (about 15 minutes of regeneration). Narration/book lines and word cards use the male voice, question sentences use the female voice (field `v` on each line: `'m'` or `'f'`). He prefers one voice per role.
- Plan: personal use first, then share with a few friends who own the same textbook. A friend will test via the GitHub link and give feedback.

## 3. Current state (end of 2026-10-18)

- Live app: **https://minhtranlab.github.io/hsk5/** (unlisted: `noindex`, not in `tools.json`). `https://minhtranlab.github.io/hsk5-test/` redirects to it. The repo is **public**, so the book text and the page are public to anyone with the link.
- Chapter 1 is complete: 11 study units (ids `1`–`11`), 6 mixed reviews (`m1`–`m6`), end test `t1`, "read the whole story" reader `rd`, plus the free revision path (id `99`). 38 taught words. All 19 session items play through in the automated test.
- Features done: story-driven screens (types listed in §6), retry of wrongly answered questions (max 3 per session, not in the test), flip-card vocabulary view (tab "Từ vựng": tap a word → card flips, 🔊 and 拼 buttons), shadowing/recording with compare (🎤, needs microphone permission; **untested on a real iPad**), read-the-whole-story with pictures, daily goal ring (5–60 min) with a modal, a 💬 feedback box inside lessons, a tab "Nhật ký" with streak and minutes chart, cheerful gradient home with a winding path, locked placeholders "Bài 2/3/4 — Sắp ra mắt".
- **Audio is outside the page**: `hsk5/audio/<sha1[:12]>.mp3`, 901 clips, ~6 MB. Page `hsk5/index.html` is 0.39 MB. The page loads clips only for the unit being played (plus the next unit) via `clipsFor(session)` + `preload()`; a service worker `hsk5/sw.js` caches `/audio/` files (cache-first, safe because names are content hashes).
- **Sign-in and progress sync (optional)**: `hsk5/config.js` holds the Google Apps Script URL:
  `https://script.google.com/macros/s/AKfycbwKsrc6zXbzZBvokUAO071BwM0rn7Igg9D75iK6ie98j-mOtlBkxCC3sWGLZ1oAZZ_TBA/exec`
  The URL is deployed and set in `config.js`, but **at handoff time Minh had not yet confirmed that a real login works** (all tests ran against a Node simulation of Apps Script, never against Google). First thing to do if he reports a problem: ask for a screenshot of the Deploy dialog (Execute as = Me, Who has access = Anyone) and of the Sheet tabs. Codes live in the Sheet tab `Students` (column `code`); Minh was going to rename them to easy ones like `minh1`, `minh2`. An empty `api` in `config.js` turns the account UI off completely.
- **2026-10-20 update (answers + self-update):** every question type now ends with the same answer block (§12) — `mc` (study-unit cloze with picture) and `match` were the ones without it; `pick` now shows the Vietnamese inside the block. "Tiếp →" is a fixed bottom bar on every lesson screen. New deploys reach an open or home-screen app by themselves through a banner at home (§6d). Tests: `t_rules.py` now sweeps all 277 question screens (+ generated ones) on iPhone and iPad sizes; new `t_update.py`.
- **2026-10-21 update (Ghép truyện, trial in Tập 3):** the passive `read` screen at the end of unit 3 is now two `comic` screens (pages: sentences 0–4 and 5–8, because the 9 sentences have 8 different story pictures and a page holds at most 6 frames). The learner reads each card aloud (🎤 hold, only the length of speech is checked), places it under its picture (drag or tap-then-tap), then watches a "film" in their own voice and hears the model voice. See §6e. The reader `rd` and the 30-sentence read in unit 11 are unchanged. New test `t_comic.py`.
- Not verified because there is no iPad in the sandbox: microphone/recording on the hosted page, the new voices' quality on the device, the flip card smoothness, audio start-up on a weak connection.

## 4. Repo map

```
hsk5/                      LIVE SITE (GitHub Pages serves this folder)
  index.html               built file — NEVER edit by hand, regenerate with build.py
  config.js                {api: '<Apps Script URL>'}  — hand-edited, build does not touch it
  sw.js                    service worker for audio cache (only /audio/; never touches index.html or version.json)
  version.json             {"v": "<content hash of index.html>"} — written by build.py, read by the app to detect a new deploy
  audio/<hash>.mp3         voice clips (content-hash names)
hsk5-src/                  SOURCE (everything needed to rebuild)
  app.src.html             engine + UI (home, session player, all screen types, goal, retry, shadowing, feedback, account/sync, flip card)
  common.js / common.css   helpers: zh() ruby tokenizer, tap-a-word sheet, audio engine (WebAudio, fetch+decode, LRU), toggles
  content_words.js, content_words2.js   WORDS (38 taught words: id, ep, vi, hv, facts[], ex[])
  content_learn.js, content_learn2.js   LEARN (per-word intro text), DICT_ITEMS, tone legend
  content_ety.js, content_ety2.js       ETY (chiết tự + mnemonic hook per word)
  content_story.js, content_story2.js   BOOK (the printed sentences) and SESSIONS (units 1–11, plus reader `rd`)
  content_bank.js, content_bank2.js     QB: review question banks per word; MEAN map
  content_test.js          TESTBANK (true/false, spot-the-error) for the final test
  kit.js, kit2.js          SVG illustration kit (scene() art, characters, props)
  glossary.txt             dictionary: word|vi|hanviet|flag|py:override   flag t = taught word, s = support word (tap only), n = proper noun
  hsk.json                 HSK1–4 word and character lists (used to validate vocabulary)
  audio_manifest.json      clip key -> 'audio/<hash>.mp3'   (keys: plain = female, 'M|' = male, 'MS|' = male slow)
  tts_jobs.json            text + speed to speak for each clip key
  build.py                 builds ../hsk5/index.html (+ --standalone file.html with embedded audio)
  tools/gen_jobs.py        lists clips the content needs but the manifest lacks
  tools/synth.py           synthesizes the missing clips (Matcha female / Kokoro male) into ../hsk5/audio and updates the manifest
  tools/get_models.sh      downloads the three voice models (~500 MB) into $HSK5_MODELS
  tests/                   Playwright tests (see §5); comic_util.py = helpers to play the comic screen
  backend/Code.gs          Google Apps Script backend; mock_gas.js + t_backend.js simulate it; SETUP_LUU_TIEN_DO.md = beginner setup guide (Vietnamese)
```

## 5. How to work on it

Requirements in a fresh sandbox: `python3`, `node`, `ffmpeg`, `pip install pypinyin playwright sherpa-onnx soundfile` (Playwright chromium: use the preinstalled one via `executable_path='/opt/pw-browsers/chromium'` if present; do not run `playwright install`). The sandbox network is an allowlist: github.com and package registries work; Google and most sites do not (WebFetch also fails for script.google.com).

1. Edit sources in `hsk5-src/`.
2. `python3 hsk5-src/build.py` → prints vocabulary report, writes `hsk5/index.html` + `hsk5/version.json`, and must end with **`problems: 0`**. It validates every Chinese word in the content and the app against `glossary.txt`: a word must be HSK1–4, or a taught/support word in the glossary; anything else is a problem. Decorative Hán characters in illustrations must also be HSK1–4 or taught words.
3. Tests (from `hsk5-src/tests`): start `python3 serve.py &` (serves `hsk5/` on :8765 with a blank API so tests never touch the real Sheet) and for sync tests `node ../backend/mock_gas.js > /tmp/mock.log &` (fake Apps Script on :8766). Then:
   - `python3 t_rules.py` — the general UI rules of §12. Sweeps EVERY question screen (study units, QB, test bank, plus screens generated by buildMix/buildTest/buildRevision/genQ; 277+ screens, all 9 types) on an iPhone viewport 390x844, right answer for all and the wrong/revealed path once per type and source; then a sample per type on iPad 820x1180, including "Tự đọc to" off. After each answer it checks: answer block present with Pinyin, answer spoken (nothing spoken when auto is off), every answer text has a clip, Tiếp enabled + inside the viewport + not covered, answer block scrolled into view, no auto-advance, no "Đúng!" text. Also Tiếp visible on all story/word/read/album/predict screens, the meaning sheet does not cover Tiếp, audio-failure toast, cloze scenes. Takes ~8 minutes. Must print `RULES OK 0 failures`.
   - `python3 t_update.py` — self-update (§6d): serves a copy of `hsk5/` on :8767, swaps in a build with another `version.json`, checks no banner mid-lesson, banner at home, throttle, tap reloads into the new build with progress kept, service worker never serves index/version. Must print `UPDATE OK`.
   - `python3 t_all.py` — plays every session end to end (right and wrong answers), reports missing audio clips. Expected output: all 19 items done, `missing clips 0`, only the harmless Google-Fonts `ERR_TUNNEL_CONNECTION_FAILED` error.
   - `python3 t_comic.py` — the `comic` screen (§6e) played to the end on 390x844 and 820x1180 with drag (real touch via CDP on the phone, mouse on the iPad size) and tap-then-tap; fake microphone that speaks (Chromium `--use-file-for-fake-audio-capture`), one that hears only room noise (escape button after 3 tries), mic denied, no mic API. Checks Tiếp locked until done, wrong frame → hint + card back, scoring, model voice after each card, the film and "Nghe giọng mẫu", clean-up when leaving. ~8 minutes. Must print `COMIC OK`. Writes `n_comic_doing_*.png` / `n_comic_done_*.png`. Helpers in `tests/comic_util.py` (also used by `t_rules.py` and `t_all.py`, which play the comic through the no-mic fallback).
   - `python3 t_new4.py` — feature test (goal modal, recording UI, feedback, retry, resume, reader).
   - `python3 t_py.py` — audits that every Chinese character shown has pinyin when 拼 is on (SVG art text excepted); `python3 t_card.py` does the same for all flip cards. Expected: 0 uncovered.
   - `python3 t_audio.py` — lazy audio loading (0 clips at home, ~46 after opening unit 1).
   - `python3 t_sync.py` — two-device sync, conflict merge, offline recovery, account switch, reset.
   - `node ../backend/t_backend.js` — Apps Script logic under a fake SpreadsheetApp.
4. New or changed Chinese text needs audio: `python3 hsk5-src/tools/gen_jobs.py` (lists what is missing), `bash hsk5-src/tools/get_models.sh` once, then `HSK5_MODELS=~/hsk5-models python3 hsk5-src/tools/synth.py`, then build again. Synthesis prints `Unknown token` warnings for a few syllables (e.g. 谁 → `shei2`); listen/flag those clips if a word is affected. Do not mix voices for the same role.
5. Deploy: commit `hsk5-src/` and `hsk5/` together and `git push origin main`. GitHub Pages updates in 1–2 minutes. Commit messages in this repo end with the attribution lines the harness asks for. The site repo also holds Minh's other tools (`tools.json`, `CHANGELOG.md`, `tools/`, `sat-vocab/`); leave them alone. The HSK5 page is deliberately not listed in `tools.json`.
6. A single-file offline build (audio embedded, ~8.7 MB) for his Mac: `python3 hsk5-src/build.py --standalone out.html`, then deliver to `Prototypes/Pilot/`.

Always run the full test set before pushing, and say honestly what you could not test (anything on a real iPad).

## 6. Engine facts you need before changing things

- State is one object `st` saved to `localStorage` key `hsk5_story_v4` by `save()`; `st.u` = last-modified time. Fields: `sess` (per-session `{i, b, done}`; `b` = base index excluding retry screens), `stk` (collected word stickers), `res`, `wl` (per-word revision record: box 0–3, due, last…), `look`, `pred`, `test`, `log.d[day] = {s, q, ok}`, `fb` (feedback list), `goal`, `goalDay`, `py`, `auto`, `rs` (reset stamp), `acct` (account code).
- Screen types: `story, word, pick, mc, read, comic, album, match, hear, order, type, choose, wrap, tf, spot, predict`. `SESSIONS` entries: `{id, title, thumb, words[], screens[]}`; flags `mix`, `test`, `reader`, `rev`. Mix/test/rev sessions build their screens at play time (`buildMix`, `buildTest`, `buildRevision`).
- Unlock rule: a unit opens after the previous one is done (`unlocked()`); `st.openAll` ("Mở hết các màn") is a developer toggle.
- Retry: `maybeRetry`, set `RT`; `_retry` screens are skipped in results and logging.
- Rendering rules learned the hard way:
  - **Never write a literal CJK range in app source**; use `一-鿿` (the build's validator would choke).
  - `h(tag, cls, html)` uses `innerHTML`. Show Chinese through `zh()` so each word gets ruby `<rt>` pinyin (needed for the 拼 toggle). Where the element's own text is compared (order tiles, spot tiles), keep the plain text in `data-t` — never read `textContent`, it contains the pinyin.
  - The tap-a-word sheet is suppressed inside answer areas (`.opt .tile .mw .bigq .wh .sticker .prompt .wcf …`, list in `common.js` click handler) so it never leaks the answer. Add new answer containers to that list.
  - Do not put `${…}` inside a single-quoted JS string (it silently broke the whole page once); use template literals.
  - Audio keys: plain key = female, `M|` = male, `MS|` = male slow; the key is the Han-only text of the sentence (`akey()`).
  - `config.js` must stay a separate file; tests must never use the real API URL (tests serve a blank one).
- Sync design: local-first. `save()` → `syncSoon()` → debounced push to Apps Script (`action push`, optimistic `base` timestamp). A conflict returns the server copy and the client merges **in place** (`mergeInto`: furthest progress per session, union of stickers/feedback, newest per word record, max per day of minutes; the unit currently being played is never touched). Progress reset sets `st.rs`; other devices adopt it only if they have no later activity. Feedback in `st.fb` is copied by the server into the `Feedback` tab. Login: `login` action returns state; a device holding another account's progress is blanked first.
- Apps Script backend (`backend/Code.gs`): tabs `Students` (code, name, active, lastSync, words, unitsDone, minToday, minTotal, streak), `State` (one row per student, JSON split into 8 cells of 44,000 chars each with a leading `~` so Sheets never turns a chunk into a number/formula), `Feedback`. Brute-force guard: 30 wrong codes in 10 minutes locks logins for a few minutes. After editing `Code.gs` Minh must Deploy → Manage deployments → ✏️ → New version.

### 6e. `comic` screen — "Ghép truyện" (added 2026-10-21, trial in Tập 3)
- Content: `{ t: 'comic', ids: [BOOK indices], page: [n, of] }` (`page` only labels "Trang n/of"). Frames are built by `comicFrames(ids)` from the **story screens** (the scene each BOOK line was shown with, via `bookScenes()`); consecutive lines with the same scene share a frame, max 2 per frame. Keep a page to ≤ 6 frames (`COMIC.maxFrames`, checked by eye; split into pages otherwise). Frame order = story order; cards are shuffled (never left in story order).
- Card flow: tap → big card (modal): 🔊 Nghe mẫu (optional), Pinyin, 🎤 **hold** to read (a quick tap toggles start/stop instead). `startTake()` measures time with RMS above `COMIC.thr` (0.012) through an AnalyserNode on the shared `ac()` context; pass when voiced time ≥ `0.4 s × Han chars × 50%` (min 1 s). No pronunciation scoring. If the analyser reads nothing at all (audio engine asleep), the hold duration is used instead. After 3 failed tries an escape button "Mình đã đọc" appears. A MediaRecorder keeps the passing take as a blob URL **in memory only** (revoked when the screen is left; never saved or sent).
- Fallback: no `getUserMedia`/AudioContext, permission denied or any error → the screen switches to "nghe mẫu rồi bấm Mình đã đọc" (toast explains). The game can never get stuck.
- Placing: drag with pointer events (`touch-action:none` only on cards that have been read; the stage auto-scrolls when the finger is within 70 px of its top/bottom) or tap the read card ("Đang cầm một thẻ" bar above Tiếp) then tap a frame. Wrong frame → card stays in the pile, shake, one Vietnamese line describing what the tapped frame shows (no answer). Right → card sits under the frame with Vietnamese + 🔊, model voice spoken (respects Tự đọc to).
- Score: first placement per card (`logQ` per card; `st.res` = 1 only if all first placements were right). A wrong first placement sets the taught words of that sentence to box 0, `fail`, due within a day → they come back in revision (§12.8).
- Done: Tiếp unlocks (never auto-advance), "▶ Xem phim" lights the frames in order and plays the learner's recordings (model voice for a card read without a mic), then "▶ Nghe giọng mẫu" replays the page in the model voice (`B(i).v`).
- Clean-up: screens can register `onLeave(fn)`; `runLeave()` runs at `renderScreen()` and `home()` (stops the mic, removes window listeners, the floating bar and recordings).
- Styles: one block `/* comic … */ … /* end comic */` in `app.src.html` (shapes only, theme tokens) for chat Minh họa. Tap-a-word is blocked on cards in the pile (`.cm-card` in the common.js list) because a tap there opens the card; it works in the big card and on placed cards.
- Test hooks: `window.__comic` (state), `__comicTakes` (each attempt: voiced, dur, need, ok), `__comicFilm` (frames lit, done), `__plays` gets `REC:<i>` for recordings.

### 6d. Self-update of the home-screen app (added 2026-10-20)
- `build.py` hashes the assembled page (sha1, 12 hex) and replaces the single placeholder `'__APP_V__'` in `app.src.html` (const `APP_V`) with it, then writes `hsk5/version.json` = `{"v": "<same hash>"}`. Same source → same version, so a rebuild without changes does not trigger an update. The placeholder must appear exactly once in the source (build asserts it).
- The app (`checkUpdate()` in app.src.html) fetches `version.json?t=<now>` with `cache:'no-store'` on start and on every `visibilitychange` to visible, at most once a minute (`UPD.last`). If the version differs it stores `UPD.newV`; at home it shows the fixed teal pill **"Có bản mới — bấm để cập nhật"** (`showUpd()`, appended to `<body>`, survives `home()` re-renders). Inside a lesson nothing is shown; the pill appears when the learner goes back home (`home()` calls `showUpd()`, `renderScreen()` calls `hideUpd()`). Tapping: `tickFlush(); save(); saveAcc();` (+ keepalive sync if signed in) and `location.replace('./?v=<new>')` — a new URL, so neither the browser HTTP cache (GitHub Pages sends max-age=600) nor the CDN can answer with the old page. The app ignores the query string.
- `sw.js` only handles `/audio/` (cache name `hsk5-audio-v1`, unchanged); index.html and version.json always go to the network. `t_update.py` asserts it.
- **What still needs the icon re-added:** only a change of the home-screen icon (iOS stores it when the shortcut is created). Everything else (code, content, audio) updates itself through the pill. Login stays (localStorage is kept across the reload).

### 6c. Voice clean-up (2026-10-19)
Minh heard a stray "uh" before and after short male clips (a 2-syllable word sounded like 4). Cause: Kokoro (male) adds low-frequency-only hums at the start/end of short utterances; at speed 0.6 it also invents extra pauses/syllables. Female Matcha clips were always clean. Fix (in `tools/synth.py` + `tools/clipfix.py`): every male WORD clip (key text <= 4 characters, `M|` and `MS|`) is regenerated with `python3 hsk5-src/tools/synth.py --redo-male-words`: multi-syllable words are said 3 times ("X，X，X。") and the middle copy is kept (`cut_middle`); one-syllable words and failures fall back to trimming by 0.9–5 kHz energy (`band_trim`) or the loudest piece between pauses (`main_segment`). The slow clip (`MS|`) is the clean normal clip stretched with ffmpeg `atempo=0.68`, NOT Kokoro's speed 0.6. Result: median 0.36 s per character (female 0.33), 1 segment; slow 0.52 s per character. Full male SENTENCE clips (`M|` longer than 4 characters) were left unchanged; they may still carry a short hum at the end (the 3-copy trick did not work for sentences: lengths went wrong). If Minh hears it in sentences, look for a different method (e.g. forced alignment with an ASR model). New words are cleaned automatically when `synth.py` runs.

### 6a. App icon (added 2026-10-19)
Home-screen icon: `hsk5/apple-touch-icon.png` (180px, used by iPhone/iPad "Add to Home Screen"), `icon-192.png`, `icon-512.png` — orange gradient, white 爱 and a yellow "HSK5" pill. Regenerate with `hsk5-src/tools/icon.html` + `make_icon.py` (Playwright screenshot, then `convert -resize`). Linked from `app.src.html` head. Full-screen app mode is ON (added 2026-10-19 at Minh's request): `apple-mobile-web-app-capable`, `mobile-web-app-capable`, status-bar-style `default` and `hsk5/manifest.webmanifest` (display standalone). The layout already pads for the iOS safe areas (`env(safe-area-inset-top/bottom/left/right)` in app.src.html), so it should not hide under the notch. Consequences to remember: (1) a home-screen app on iOS has its OWN localStorage, separate from Safari, so Minh must sign in with his code inside the app to see his progress; (2) there is no reload button — since 2026-10-20 a new deployment shows the pill "Có bản mới — bấm để cập nhật" at home (§6d), so nobody has to swipe the app away or re-add it; (3) not verified on a real iPhone (no device in the sandbox) — if the top bar or bottom button collides with the status bar / home indicator, adjust the safe-area padding. iOS caches the icon at the moment of "Add to Home Screen": to see a new icon he must delete the old shortcut and add it again.

### 6b. The Google Sheet is self-documenting (added 2026-10-18)
`backend/Code.gs` v2 builds two extra tabs when `setup()` runs (safe to re-run, never touches student data): **README** (Vietnamese admin guide: what each tab is, how to add/lock a student, what to do if login fails, how to redeploy Code.gs, the URLs) and **Báo cáo** (live report made only of Sheet formulas: active students, who studied today / last 7 days, total minutes, per-student table sorted by last sync with days absent and status Học hôm nay / Đều đặn / Hơi vắng / Vắng lâu, plus the 10 newest feedback items). It also adds a **HSK5** menu in the Sheet (`onOpen`): *Thêm học viên mới* (asks name and optional code, refuses duplicates) and *Cập nhật README và Báo cáo*. `lastSync` is now written as a real date. The README text lives in the `README_` array in Code.gs: **whenever admin behaviour changes, edit that array too** and tell Minh to paste the new Code.gs, run `setup`, and redeploy a New version (steps in `backend/SETUP_LUU_TIEN_DO.md`, section "Nâng cấp"). Tested with the Node mock (`t_backend.js`: tab order, idempotent setup, add-student, formulas present with balanced syntax). **The report formulas (FILTER/SORT/ARRAYFORMULA/QUERY) were never run in real Google Sheets** — if Minh says the Báo cáo tab shows errors, ask for a screenshot and fix `docs_()`.

## 7. Open items and ideas (none of these is approved yet unless marked)

1. **Chapter 2 ("Bài 2")** — Minh said the content comes later. Needs photos of the book pages from him. **Follow the full workflow in §10 and the preferences in §11.**
2. **Engine is shaped around Chapter 1.** Before adding Chapter 2 generalize: a `CHAPTERS` registry exists only for the locked placeholders on the home path; headings such as "Bài 1 · Những điều nhỏ nhặt trong tình yêu", the toast "Xong cả Bài 1!", `LAST()`, the single final test `t1`, session ids (`1`–`11`), the revision path and the glossary flags all assume one chapter. Content is inlined into `index.html`; with many chapters, split content per chapter and load it lazily like the audio. Audio manifest per chapter would also help. Decide the design, tell Minh in two sentences, then do it.
3. Optional cleanups he may want: hide "Mở hết các màn" and "Xóa tiến độ" under an "advanced" section (earlier offered, not requested); switch the male voice to Kokoro "E"; a better way to read feedback (currently the `Feedback` tab of the Sheet).
4. Have Minh paste the new Code.gs (README + Báo cáo tabs), run setup, redeploy, and confirm the Báo cáo tab looks right in real Google Sheets; confirm the real login works, and that recording, pinyin toggle and flip card behave on his iPad.
5. Licensing note to keep in mind: the Matcha voice dataset is non-commercial; fine for personal and friends use, not for a paid product.

## 8. Decisions log (so you do not re-ask)

Pilot first, scale later, each stage ends with his approval; mass production only when he says he is about 90% happy. Story-driven with varied screens; the story is the book's text. Audio-led (hear first, learn, then use). Unit = 1–3 sentences with a grammar point attached where it first appears. Mixed review every two units; independent revision path; 3/7/21-day spacing. UI in Vietnamese. Estimated state: he considers the app about 80% done, and wants it sustainable: login, progress saved, audio hosted outside the page and loaded per unit, later chapters shown as locked "under development".

## 9. If GitHub refuses a push (403 "Claude GitHub App not installed")

Do not work around it. Give Minh these steps: open https://github.com/apps/claude/installations/select_target → choose his account `minhtranlab` → choose the repository `minhtranlab.github.io` (or All repositories) → Install/Save. Then retry the push. If the new Claude account is a different one, he may also need to connect GitHub in that account's settings (Connectors → GitHub). As a last resort he can upload files by hand on github.com (Add file → Upload files).

---

## 10. WORKFLOW FOR A NEW CHAPTER (how Chapter 1 was made — repeat this for Chapter 2, 3, …)

Minh does one thing: he uploads **photos of the book pages** (he did 7 photos for Chapter 1: title + warm-up + reading text, vocabulary list, notes, collocation/comparison tables, exercises). Claude does all the rest. Nothing is invented from the web; the book is the source. Steps:

**Step 0 — Before starting.** Ask Minh for: photos of the chapter (title page with the reading text; the numbered word list; the grammar notes 注释; the 词语搭配 / 词语辨析 tables; optionally the exercises). Tell him which chapter number and that the new chat needs them as attachments. If the photos sit in his Mac folder `~/Desktop/03 - Personal/HSK5/HSK5 Books/<Chapter N>/` and the Mac bridge is linked, stage them from there. Photos on other sites cannot be fetched by the sandbox.

**Step 1 — Transcribe (paper, no code).** Read every photo at 2x zoom and write `Chapter<N>_transcript.md`: header as printed (title, character count such as "662字"), the full reading text split into paragraphs, the numbered word list (the book's own pinyin, part of speech, Vietnamese gloss — never your own gloss in the transcript), the grammar notes with their examples, collocation tables, comparison table, and a "could not read / check" list. Checks that must pass: the character count printed by the book equals the Hanzi+punctuation count of your transcript; every word is in the text or the title; every Vietnamese diacritic checked. Words marked `*` in the book's word list are "beyond the HSK5 syllabus": keep them all (the story needs them) but tag them "story word" (lower exam priority), drill the exam-core words harder. Save the file in the Mac folder, send it to Minh in chat, and write a short report (`ChapterN_Step1_report.md`, no book text) of checks, decisions, open items. Models of the reports (no book text) are in `hsk5-src/docs/Chapter1_Step1_report.md` and `Chapter1_Step2_report.md`.

**Step 2 — Cut into units (paper).** Rules Minh approved: a learn unit = 1–3 consecutive printed sentences with **about 3–5 new words** (never fewer than 2); every word is placed in the unit of its **first appearance** in the text; a grammar note or collocation row is attached to the unit where its headword first appears; long sentences may be split at a comma; a word that appears only in the title goes to the chapter-end review; "support words" (transparent compounds or idioms not decodable, e.g. 几年如一日) get a gloss on screen but are never counted or tested; split verb-objects (离婚, 吵架) are shown in the split form from the text first, then taught as a pattern. Insert a mixed review (m1, m2, …) after **every two** study units, plus a final test. Check by script that the joined chunks equal the transcript exactly and all words are placed once. Output: a table (unit, text chunk, new words, support words, grammar, count). Report the table and decisions to Minh; he usually says "you are the tutor, decide" — so decide and report; he approves the structure, not the Chinese details.

**Step 3 — Vocabulary check.** `hsk5-src/hsk.json` has HSK1–4 word and character lists. Every Chinese word that appears in any sentence or question must be HSK1–4, a taught word of the chapters so far, a support word, or a proper noun in `glossary.txt`. Practice sentences must be built only from known words (this was a hard lesson: cloze quizzes with other unknown words in them were useless to him). New taught/support words go into `glossary.txt` as `word|vi|hanviet|flag` (+ `|py:override` for tricky readings). `build.py` fails with "problems: N" otherwise.

**Step 4 — Write the content files (per chapter; for Chapter 2 prefer new files `content_*_ch2.js` and a chapter registry, see §7.2).** Formats are the best documentation: copy the shape of the Chapter 1 files.
- `WORDS` (`content_words*.js`): per taught word `{id, ep (unit no.), vi, hv (Hán–Việt), facts:[2–3 short Vietnamese notes with <b> on key point; include traps — e.g. Hán–Việt false friends like 恩爱 vs "ân ái", typical collocation, what comes before/after], ex:[2 new example sentences]}`.
- `ETY` (`content_ety*.js`): per word `parts:[[char, hán-việt, chiết-tự explanation in Vietnamese], …]` + `hook` = one-line mnemonic in Vietnamese. Minh explicitly wants **etymology + mnemonic for every word**.
- `LEARN` (`content_learn*.js`): per word `exv` (2 Vietnamese renderings of example sentences) and one `hear` question (Chinese sentence spoken; 3 Vietnamese options differing in one detail; `why` explains which pieces to catch).
- `BOOK` + `SESSIONS` (`content_story*.js`): `BOOK` = the printed sentences with their Vietnamese (split at a comma if needed). `SESSIONS` = one entry per study unit `{id, title, sub, thumb, words, screens:[…]}` (screen types in §6).
- `QB` + `MEAN` (`content_bank*.js`): the question bank for revision/mixed review: 2–4 items per word using **new sentences** (not only the book's), types `cz` (cloze), `od` (order the chunks), `ty` (type by pinyin), `hr` (hear and pick).
- `TESTBANK` (`content_test.js`): true/false and spot-the-mistake items for the chapter-end test.
- Illustrations: add scene functions to `kit*.js` (SVG: characters, props, scenes such as radio, car, hospital, bed, door…). Hán characters inside art must be HSK1–4 or taught words.
- Then: `gen_jobs.py` → `synth.py` (audio) → `build.py` ("problems: 0") → all tests → push. Tell Minh the page is live and say what he should try (he plays the first unit or two on his iPad, then comments).

**Step 5 — He plays, comments, you refine.** His feedback arrives as casual messages after he plays on the iPad or from the in-lesson 💬 box (stored in the Sheet's `Feedback` tab if sync works). Fix, rebuild, push, report in a few lines.

## 11. CONTENT AND QUESTION PREFERENCES (what Minh has said he likes and dislikes)

**He wants:**
- Lessons that **teach with every question**: after a wrong answer there is a short explanation of why that option is wrong (`note` on each wrong option) and a `teach` line on the right one. Wrong choices must be plausible *and* instructive (a near-synonym, a similar-looking word, a word with a wrong collocation), each with a one-line "why not".
- **Variety** so it never feels like repeating the same action: story beats, word cards with tap-to-reveal extras, picture pick (hear a sentence, choose the right scene), cloze (mc), true/false, spot-the-mistake (`spot`), predict-the-next-line (`predict`), order the chunks (`order`), type with a pinyin keyboard (`type`), hear-and-choose the meaning (`hear`), match, read-aloud/shadow, a closing "album" sticker screen. A study unit is about **11–13 screens**, usually: story beat → word cards (new word with hear/pick) → application (mc/pick/hear/order/type/tf/spot) → next story beat → … → album.
- **Production tasks** (order words, type by pinyin) in some units, not all. Speaking via shadowing/recording only occasionally.
- **Grammar mini-lessons** mixed into the unit where the point first appears (e.g. 如何 vs 怎么, 靠, 居然), shown briefly and then used in a question.
- **New example sentences** (not only the book's) in questions, but made of known words only.
- The **story = the book's sentences**, shown one sentence per screen with new words glossed where they first appear, then the whole unit shown once to read in one go. Short invented context (a scene, a picture caption) is allowed only to make a word understandable. Illustrations are drawn by Claude in SVG; "lots of illustrations, not screens full of words".
- **Hán Việt + chiết tự + a Vietnamese mnemonic** for each word; Hán–Việt traps called out.
- Lean screens: as little as possible visible; extras (pinyin, Hán Việt, example, explanation) on tap; **no Vietnamese translation visible on a question before he answers**; pinyin only via the 拼 toggle; a correct answer shows a green box and **no "Đúng!" / "Đúng rồi" text** (he asked twice; see §12).
- Vocabulary revision: 3/7/21-day spacing (code uses GAPS=[1,3,7,21]); words he taps for a meaning feed revision; mixed review after every two units; separate revision path.
- Real recorded-quality audio (Matcha female + Kokoro male), but he will not record himself.

**He dislikes (do not do):**
- One-word-per-screen drills where every question is "fill in the new word" (called mechanical and dry).
- Chat-group "reading only" screens with no teaching; sad/boring invented stories that do not follow the book.
- **Tone drills** (the TTS is not reliable for tone practice).
- Cloze sentences that contain other unknown words.
- Mentioning the textbook title or page numbers inside the app (say "sách").
- Giving away the answer in the prompt, the audio file name, or the tap-a-word sheet.
- Silly decorations (floating Hán characters on the home page were removed).
- Being asked to judge Chinese content on paper. He is "not a Chinese tutor": Claude decides, reports afterwards.

**Process preferences:** tell him at each stage what is being tested; pilot first (small slice), his approval before scaling; short replies; if he must do something technical, numbered click-by-click steps.


## 12. GENERAL RULES FOR EVERY QUESTION SCREEN (Minh's feedback 2026-10-19 after playing Review/Unit 3 on iPhone — apply to Chapter 2, 3, … and every new question type)

Implemented in code as `answerBlock(pane, zhText, viText)` in `app.src.html` (and `matchBlock(pane, ids)` for word↔meaning matching); new question types MUST call one of them. `tests/t_rules.py` checks every question screen of every session for it. Current mapping: pick → `sc.zh` + `sc.vi` (then the "Điều mới" teach box), mc → `sc.full` + `sc.say[1]` (the blank sentence is hidden; `say[1]` must be a full translation, no `___`), hear → `sc.s` + right option, order/type → `sc.zh` + `sc.vi`, choose → the word + `MEAN`, tf → `sc.zh` + `sc.vi`, spot → `sc.full` + `sc.vi`, match → list of the matched words, each with meaning and its own 🔊, read once in a row (chain), Pinyin toggle. `predict` deliberately has no answer (the next story screen answers it). `comic` (§6e) has no answer block: each placed card is its answer (Chinese with tappable words and ruby via 拼, Vietnamese, 🔊, spoken on placement); `t_rules.py` checks that separately.

1. **After every answer (right, wrong, or revealed) show an answer block**: the full Chinese sentence/word (every word tappable for meaning + sound), the Vietnamese translation, a 🔊 replay button, and a **Pinyin** button (ruby over the characters; it also follows the top 拼 toggle). Never move on without this block.
2. **Auto-play the answer** (sentence or word) as soon as the learner answers, unless the top 🔊 "Tự đọc to" toggle is off. This is the default for *all* types: order, hear, type, choose, pick, tf, spot, mc, match. The timer is cancelled if the learner already moved to the next screen (EP check). No `hasClip()` gate: if a clip is missing, `speak()` falls back / shows the toast, and `t_rules.py` fails on any answer text without a clip.
3. **Never auto-advance and never skip past a correct answer.** The learner reviews (replay, pinyin, tap words, example) and moves on only with "Tiếp →".
3b. **"Tiếp →" is always on screen** (Minh, iPhone/iPad, 2026-10-20): `footer` is `position:fixed` at the bottom with a solid background and `env(safe-area-inset-bottom)` padding (CSS var `--fh`); `body.ins #stage` pads its bottom so nothing hides behind it; the tap-a-word sheet sits above the bar during lessons (`body.ins .sheet{bottom:var(--fh)}`). After answering, `showAns()` scrolls the answer block (not the button) into view inside `#stage`; the explanation below is reached by scrolling. Never call `scrollIntoView` on `#next` again. Overlays (goal modal, flip card, 💬 feedback, toasts) have z-index 60+ and cover the bar (z 40) while open.
4. **During the question** pinyin may stay hidden (he wants to think first), but any "Hiện chữ" / text shown before answering also needs its own Pinyin option (ruby when the text is visible, a plain pinyin line when it is not). After answering, pinyin and word taps must always work (the tap handler allows `.w` inside `.reveal`).
5. **No "Đúng!" / "对！" text on a correct answer**: the green option is enough. Wrong answers keep their short explanation (`note`).
6. **Illustrations must match the sentence being tested.** Before attaching a scene to a cloze/mc question, check that the picture shows what the *sentence* says (not just the word's teaching picture). The 如何-vs-怎么newsroom picture belongs only on the word card; the cloze "你觉得这个问题该如何解决？" uses `discuss` (two people discussing a problem). If no existing scene fits, draw a new one in `kit2.js` (`SC.name`, plus a `SCENE_LABEL` entry) and render it with `/tmp/shots.py`-style contact sheet before shipping. Scene audit: list every `scene` used by `cz(...)`/`cl(...)`/`mc`/`tf` next to its sentence and read them side by side.
7. **Audio must not fail silently.** `speak()` plays through WebAudio and falls back to an HTML `<audio>` element built from the same clip bytes; if both fail it shows a Vietnamese toast ("Chưa phát được âm thanh. Kiểm tra gạt chuông im lặng và âm lượng…"). The sound effects share the same AudioContext (two contexts fought each other on iOS). If Minh still reports "no sound", ask: silent switch on? volume? opened as the home-screen app or in Safari? Then check the toast text.
8. **Scoring is by first attempt**: a wrong tap followed by the right one still counts as wrong for revision (that is deliberate: the word comes back later). The screen says "Chưa đúng…" on the wrong tap; if he asks again, consider showing "Lần đầu chưa đúng nên từ này sẽ được ôn lại" after finishing.
9. **Cloze/mc and hear sentences must have a recorded clip** (`t_all.py` reports `missing clips 0`); after adding sentences run `tools/synth.py` for the missing ones.
10. **Standalone (home-screen) mode** has separate storage from Safari: he must log in again. New builds arrive through the "Có bản mới" pill at home (§6d); only a new icon needs removing and re-adding the shortcut.

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
- Not verified because there is no iPad in the sandbox: microphone/recording on the hosted page, the new voices' quality on the device, the flip card smoothness, audio start-up on a weak connection.

## 4. Repo map

```
hsk5/                      LIVE SITE (GitHub Pages serves this folder)
  index.html               built file — NEVER edit by hand, regenerate with build.py
  config.js                {api: '<Apps Script URL>'}  — hand-edited, build does not touch it
  sw.js                    service worker for audio cache
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
  tests/                   Playwright tests (see §5)
  backend/Code.gs          Google Apps Script backend; mock_gas.js + t_backend.js simulate it; SETUP_LUU_TIEN_DO.md = beginner setup guide (Vietnamese)
```

## 5. How to work on it

Requirements in a fresh sandbox: `python3`, `node`, `ffmpeg`, `pip install pypinyin playwright sherpa-onnx soundfile` (Playwright chromium: use the preinstalled one via `executable_path='/opt/pw-browsers/chromium'` if present; do not run `playwright install`). The sandbox network is an allowlist: github.com and package registries work; Google and most sites do not (WebFetch also fails for script.google.com).

1. Edit sources in `hsk5-src/`.
2. `python3 hsk5-src/build.py` → prints vocabulary report and must end with **`problems: 0`**. It validates every Chinese word in the content and the app against `glossary.txt`: a word must be HSK1–4, or a taught/support word in the glossary; anything else is a problem. Decorative Hán characters in illustrations must also be HSK1–4 or taught words.
3. Tests (from `hsk5-src/tests`): start `python3 serve.py &` (serves `hsk5/` on :8765 with a blank API so tests never touch the real Sheet) and for sync tests `node ../backend/mock_gas.js > /tmp/mock.log &` (fake Apps Script on :8766). Then:
   - `python3 t_all.py` — plays every session end to end (right and wrong answers), reports missing audio clips. Expected output: all 19 items done, `missing clips 0`, only the harmless Google-Fonts `ERR_TUNNEL_CONNECTION_FAILED` error.
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
- Screen types: `story, word, pick, mc, read, album, match, hear, order, type, choose, wrap, tf, spot, predict`. `SESSIONS` entries: `{id, title, thumb, words[], screens[]}`; flags `mix`, `test`, `reader`, `rev`. Mix/test/rev sessions build their screens at play time (`buildMix`, `buildTest`, `buildRevision`).
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

## 7. Open items and ideas (none of these is approved yet unless marked)

1. **Chapter 2 ("Bài 2")** — Minh said the content comes later. Needs photos of the book pages from him (as he did for Chapter 1: reading text, vocabulary list, grammar, exercises). Method that worked for Chapter 1: transcribe the book text faithfully → split into units of 1–3 sentences with 2–5 new words → build vocabulary glossary entries + chiết tự/mnemonics + illustrations + question banks → build → test → he plays it for a few days → refine.
2. **Engine is shaped around Chapter 1.** Before adding Chapter 2 generalize: a `CHAPTERS` registry exists only for the locked placeholders on the home path; headings such as "Bài 1 · Những điều nhỏ nhặt trong tình yêu", the toast "Xong cả Bài 1!", `LAST()`, the single final test `t1`, session ids (`1`–`11`), the revision path and the glossary flags all assume one chapter. Content is inlined into `index.html`; with many chapters, split content per chapter and load it lazily like the audio. Audio manifest per chapter would also help. Decide the design, tell Minh in two sentences, then do it.
3. Optional cleanups he may want: hide "Mở hết các màn" and "Xóa tiến độ" under an "advanced" section (earlier offered, not requested); switch the male voice to Kokoro "E"; a better way to read feedback (currently the `Feedback` tab of the Sheet).
4. Have Minh confirm the real login works, and that recording, pinyin toggle and flip card behave on his iPad.
5. Licensing note to keep in mind: the Matcha voice dataset is non-commercial; fine for personal and friends use, not for a paid product.

## 8. Decisions log (so you do not re-ask)

Pilot first, scale later, each stage ends with his approval; mass production only when he says he is about 90% happy. Story-driven with varied screens; the story is the book's text. Audio-led (hear first, learn, then use). Unit = 1–3 sentences with a grammar point attached where it first appears. Mixed review every two units; independent revision path; 3/7/21-day spacing. UI in Vietnamese. Estimated state: he considers the app about 80% done, and wants it sustainable: login, progress saved, audio hosted outside the page and loaded per unit, later chapters shown as locked "under development".

## 9. If GitHub refuses a push (403 "Claude GitHub App not installed")

Do not work around it. Give Minh these steps: open https://github.com/apps/claude/installations/select_target → choose his account `minhtranlab` → choose the repository `minhtranlab.github.io` (or All repositories) → Install/Save. Then retry the push. If the new Claude account is a different one, he may also need to connect GitHub in that account's settings (Connectors → GitHub). As a last resort he can upload files by hand on github.com (Add file → Upload files).

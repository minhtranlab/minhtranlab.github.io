# Minhtranlab

A personal shelf of interactive tools, PDFs and games I make and find useful. Free for anyone to use.

**This repository is public. Everything in it can be seen by anyone.**
No student names, no photos of people, no private or personal material belongs here.

## How it works

- `index.html` is the home page. It builds its list from `tools.json`.
- `tools/` holds interactive tools. Each one is a single self-contained HTML file.
- `pdfs/` holds PDF notes.
- `illustrations/` holds math illustrations (moved from `math/` on 2026-11-26; `/math/` is now the Math Skill Bank app, repo minhtranlab/math). `illustrations/index.html` lists them grouped by topic, built from `illustrations/illustrations.json`. To add one: put the self-contained HTML file in `illustrations/` (with a "← Math illustrations" link to `./`) and add one entry to `illustrations/illustrations.json` with `title`, `topic` (e.g. Matrices, Vectors, Calculus), `description`, `path` and `date`. The home page has a single "Math illustrations" card, so `tools.json` does not change.
- Short links to apps hosted elsewhere live in their own top-level folder, for example `sat-vocab/index.html`, which forwards to the app.
- To add something: put the file in the right folder and add one entry to `tools.json`.
- Published files are never renamed or moved, so links stay working.

No tracking, no logins.

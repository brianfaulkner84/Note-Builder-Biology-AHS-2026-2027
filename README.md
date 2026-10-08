# Biology Notes Builder

A guided note-taking tool for students with an ISP printed-notes accommodation. Students work through the notebook guide one prompt at a time, answer by voice or typing, and get told which key ideas are missing without being given the answer. When they finish, they print a clean notes sheet to use on the quiz or test.

- No AI, no accounts, no logins. The checker is a set of rules that runs in the student's browser.
- Notes save only in that student's browser on that Chromebook. Nothing is sent to the teacher or to any server.
- One site holds every quiz and test. Each one gets its own link.

## What is in this folder

| File | What it does |
|---|---|
| `index.html` | The page students open. Lists which unit files to load. |
| `units/u2q2.js` | Content for Unit 2, Quiz 2 (Cell Membrane and Transport). One file per quiz or test. |
| `patterns.js` | Shared word patterns (high to low, hydrophilic, and so on) any unit can reuse. |
| `checker.js` | The rules that check a note against its key ideas. |
| `app.js` | The screens, buttons, speech, and print sheet. |
| `styles.css` | Look and print layout. |
| `test.html` | Teacher self-test. Runs every model note through the checker and lets you try sample answers. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. Optional. |

## Put it online with GitHub Pages (about 10 minutes, no coding)

1. Sign in at github.com (create a free account if needed).
2. Top right, click **+** then **New repository**.
   - Name: `Note-Builder-Biology-AHS-2026-2027` (this becomes part of the link).
   - Visibility: **Public** (free GitHub Pages requires a public repository).
   - Leave "Add a README" unchecked. Click **Create repository**.
3. On the empty repository page, click **uploading an existing file**.
4. Open this folder on your computer, select everything inside it (including the `units` folder), and drag it onto the upload area. Click **Commit changes**.
5. Go to **Settings** then **Pages** (left menu).
   - Source: **Deploy from a branch**.
   - Branch: **main**, folder **/ (root)**. Click **Save**.
6. Wait one to two minutes, then refresh the Pages screen. It shows your site address:
   `https://brianfaulkner84.github.io/Note-Builder-Biology-AHS-2026-2027/`

### Links

- Students, Unit 2 Quiz 2: `https://brianfaulkner84.github.io/Note-Builder-Biology-AHS-2026-2027/#u2q2`
- Students, pick from a list: `https://brianfaulkner84.github.io/Note-Builder-Biology-AHS-2026-2027/`
- Teacher self-test: `https://brianfaulkner84.github.io/Note-Builder-Biology-AHS-2026-2027/test.html`

Post the student link in Google Classroom. Open the self-test page once after every upload. It should say every model note passes.

## Before giving it to students

- **Check the school filter.** Open the student link on a student Chromebook. If `github.io` is blocked, ask IT to allow your one address.
- **Speech.** The Speak button uses Chrome's built-in speech recognition, which processes the audio through Google, the same service as Chromebook dictation. If the Speak button is blocked by school settings, the tool tells students to use Chromebook dictation (Search + D) instead. Typing always works.
- **Printing.** The Print button opens the normal print dialog. Students on school Chromebooks print to whatever printers the school has set up.
- **Shared Chromebooks.** Notes stay on the device and browser profile where they were typed. A student who switches Chromebooks starts over. Students sign in with their own school account, so their notes stay separate.
- **Public repository.** Anyone with the link can read the files, including the model notes inside `units/*.js`. These are study-guide notes, not quiz answers, but keep anything private out of this repository.

## Adding the next quiz or test

The easy way: ask Claude in the Biology Class project to "build the Notes Builder unit for [quiz name]." You get back a new `units/<id>.js` file plus updated `index.html` and `test.html` files. Upload them the same way (Add file, Upload files, Commit). Uploading a file with the same name replaces the old one.

By hand:

1. Copy `units/u2q2.js` to a new file, for example `units/u2q3.js`.
2. Change `id`, `title`, `subtitle`, `disclosure`, and the `questions` list. The comment at the top of the file explains each field.
3. Add one line to both `index.html` and `test.html`, under the existing unit line:
   `<script src="units/u2q3.js"></script>`
4. Upload, wait a minute, open `test.html`, and confirm every model note passes.
5. Student link for the new unit: `https://brianfaulkner84.github.io/Note-Builder-Biology-AHS-2026-2027/#u2q3`

Changes can take a few minutes to show. If students still see the old version, have them press Ctrl + Shift + R.

## How the checker works

Each prompt has 2 to 4 key ideas. Each idea has:

- a short label shown to the student, with no answer in it ("Which way", "The helper");
- patterns that count as having the idea, written loosely enough to accept everyday wording and speech-to-text spellings ("hydro filic", "aqua porin");
- two hints, gentle first, then pointing at the slide. After both hints, it shows the Slide/Book tag.

Some prompts also have "watch" entries that catch common mistakes, like "the molecules stop at equilibrium" or "low to high" for diffusion. A note is complete only when every idea is found and no mistake is flagged.

---

AI Disclosure: This tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and wrote the key-idea checks and hints from the instructor's notebook guides, slideshows, and the course textbook. The instructor reviewed and finalized the material before classroom use.

# Biology Notes Builder

A guided note-taking tool for students with an ISP printed-notes accommodation. Students pick their quiz or test from a menu, work through the notebook guide one prompt at a time, answer by voice or typing, and get told which key ideas are missing without being given the answer. When they finish, they print a clean notes sheet to use on the quiz or test.

- No AI, no accounts, no logins. The checker is a set of rules that runs in the student's browser.
- Notes save automatically in that student's browser on that Chromebook, so closing the tab or shutting down does not lose work. Students can also save a backup file and open it on another Chromebook. Nothing is sent to the teacher or to any server.
- One site holds every quiz and test. Each quiz loads only when a student picks it.

## Links

- Students (menu): `https://speechtotextnotebuilder.netlify.app/`
- Students, straight to one quiz: add the quiz code after `#`, for example `https://speechtotextnotebuilder.netlify.app/#u2q2`
- Teacher self-test: `https://speechtotextnotebuilder.netlify.app/test.html`

## Quizzes and tests on the menu

| Code | Unit | Quiz or test | Notes |
|---|---|---|---|
| `u1q1` | Unit 1 | Quiz 1: Characteristics of Life | 17 |
| `u1q2` | Unit 1 | Quiz 2: Homeostasis and the Respiratory System | 18 |
| `u1q3` | Unit 1 | Quiz 3: Circulatory System | 14 |
| `u1n` | Unit 1 | Ch. 30.2 Quiz: Food and Nutrition | 18 |
| `u1t` | Unit 1 | Unit 1 Test: Homeostasis and the Human Body | 23 |
| `u2q1` | Unit 2 | Quiz 1: Cells and Organelles | 30 |
| `u2q2` | Unit 2 | Quiz 2: Cell Membrane and Transport | 18 |
| `u2q3` | Unit 2 | Quiz 3: Energy, Photosynthesis, and Respiration | 28 |
| `u2q4` | Unit 2 | Quiz 4: Glycolysis, Krebs Cycle, ETC, and Fermentation | 23 |

Unit 2 quizzes follow the notebook guides prompt for prompt. Unit 1 study guides were topic checklists, so each checklist item became a prompt with a guiding question, and items that repeated a vocabulary word were merged into that word's prompt.

## Saving work

- Every change saves to the Chromebook right away, and again when the tab closes or the screen locks. The note screen shows "Saved on this Chromebook at [time]."
- **Save a backup file** (start screen and notes sheet) downloads a small file named like `Notes-u2q2-Student-Name.json`. Students can move it to Google Drive.
- **Open a backup file** restores those notes on any Chromebook. It checks that the file matches the quiz and asks before replacing notes already there.
- Notes are lost only if a student clears browser data or uses a guest or incognito window without a backup file.

## How it is organized

```
index.html            the page students open (never needs editing)
content/
  catalog.js          the quiz menu: one line per quiz or test
  u2q2/
    unit.js           Unit 2 Quiz 2 content: prompts, model notes, key ideas, hints
  <id>/
    unit.js           one folder per quiz or test (see the table above)
patterns.js           shared word patterns, speech-friendly biology terms, and
                      the authoring helpers I(), W(), near(), either(), lacks()
checker.js            rules that check a note against its key ideas
app.js                screens, buttons, speech, print sheet
styles.css            look and print layout
test.html             teacher self-test
```

## Adding the next quiz or test

The easy way: ask Claude in the Biology Class project to "build the Notes Builder content for [quiz name]." You get a new `content/<id>/unit.js` and an updated `content/catalog.js`.

By hand:

1. Make a new folder under `content`, for example `content/u2q3`.
2. Copy a recent unit file into it (for example `content/u2q4/unit.js`, which uses the short `I(...)` helper style). Change `id` to match the folder name, then change `title`, `subtitle`, `disclosure`, and the `questions` list. `content/u2q2/unit.js` has the comment that explains each field.
3. Add one line to `content/catalog.js`:
   `{ id:"u2q3", unit:"Unit 2: Cells", title:"Energy and Life", type:"Quiz 3", show:true, v:1 },`
4. Commit to `main`, wait a minute for Netlify to redeploy, open `test.html`, and confirm every model note passes.

### Menu controls in `content/catalog.js`

- `unit` groups quizzes under a heading on the menu.
- `show:false` hides a quiz from the menu. Its direct link still works, so you can post a quiz before it shows up for everyone, or retire an old one.
- `v` is a version number. Netlify already tells browsers to check for new copies, but adding 1 after you change a quiz's `unit.js` guarantees students get the update.

## Hosting (Netlify)

The site is hosted on Netlify, connected to this GitHub repository. Every push to `main` redeploys the site automatically in about a minute. `netlify.toml` holds the settings, so there is no build step.

First-time setup:
1. Sign in at app.netlify.com with GitHub.
2. **Add new site**, then **Import an existing project**, then **GitHub**. Pick this repository.
3. Leave the build command empty and the publish directory as `.` (the settings file fills these in). Click **Deploy**.
4. Under **Site configuration**, then **Change site name**, pick a short name. The link becomes `https://<name>.netlify.app/`.

## Before giving it to students

- **Check the school filter.** Open the student link on a student Chromebook. If `netlify.app` is blocked, ask IT to allow this one address.
- **Speech.** The Speak button uses Chrome's built-in speech recognition, which processes the audio through Google, the same service as Chromebook dictation. If the Speak button is blocked by school settings, the tool tells students to use Chromebook dictation (Search + D) instead. Typing always works.
- **Printing.** The Print button opens the normal print dialog.
- **Shared Chromebooks.** Notes stay on the device and browser profile where they were typed. Students signed in with their own school account keep their notes separate.
- **What is visible.** Anyone with the site link can open the files, including the model notes inside each `unit.js`, even if the repository is private. These are study-guide notes, not quiz answers. Teacher keys stay on the teacher's computer.

## Checking a printed sheet

Each printed sheet carries:

- **A name watermark** across every page: student name and date. Print stays off until a name is entered.
- **An "Entered:" line under each note**: spoken, typed, or PASTED (in red), plus the number of tries and "sample shown" when the sample note appeared. "Close copy of sample" means the note matches the sample note almost word for word.
- **Totals** at the top: notes pasted and sample notes shown.
- **A sheet code** (like `THC-P3U`), a fingerprint of the name and every note. To spot-check a printout, have the student open Notes Builder on their Chromebook and go to the notes sheet. The code on screen must match the printout. If the notes were edited after printing, or the sheet came from another student, the codes will not match.

Pasting into the note box is off for every quiz (`window.SETTINGS = { allowPaste: false }` in `content/catalog.js`). To allow it on one quiz, add `paste:true` to that quiz's line. The Copy notes button was removed so every printout goes through the marked sheet.

These checks run on the student's Chromebook with no accounts or server, so they discourage and flag copying; they cannot prove authorship against a determined, tech-savvy student.

## How the clues work

Each check that is not complete, with a changed note, counts as one try. Checking the same note twice does not count.

| Try | What the student sees |
|---|---|
| 1 | "Good start." The key ideas found so far, plus a gentle clue for each missing idea. |
| 2 | "Getting closer." A more direct clue for each missing idea, plus the slide and textbook page. |
| 3 and after | "You have worked hard on this one." A sample note (the model note) to read, then say or type in their own words and check again. |

Students also get "Nice, you added a key idea" when a try adds one, and "You stuck with it" when they finish after two or more tries. The try count lives in the student's saved work and backup file.

## Wrong and extra information

After a check, the feedback shows the student's note with problem sentences marked:

- **Red, crossed out:** the sentence contains a common mistake for that prompt (a "watch" in the unit file), like "the molecules stop at equilibrium" or "an atrium is a lower chamber." A **Cross out the red part** button removes those sentences from the note.
- **Solid green underline:** the sentence earns at least one key idea. Hovering shows which one.
- **Gray with a dotted underline:** extra. The sentence earns no key idea. A **Cut the extra** button removes those sentences, one at a time, and keeps any cut that would lose a key idea. The goal is to teach that less is more.
- **Less is more tip:** when a note runs well over the length of the model note (about 1.6 times), the feedback shows the student's word count and a target.

Red marking only works where a prompt has a mistake check. 120 of the 189 prompts have at least one. Add more with `W(pattern, message, unlessLabel)` in that prompt's `watch` list.

## My Own Notes page

Every quiz ends with an optional **My Own Notes** page (the "+" circle) for memory tricks, examples, or facts that do not fit the guided prompts. It is not checked or counted in "Complete: X of Y," and it prints at the end of the sheet only if the student wrote something. Pasting is still blocked there. A unit can turn it off with `freeNote: false`.

## How the checker works

Each prompt has 2 to 4 key ideas. Each idea has:

- a short label shown to the student, with no answer in it ("Which way", "The helper");
- patterns that count as having the idea, written loosely enough to accept everyday wording and speech-to-text spellings ("hydro filic", "aqua porin");
- two hints, gentle first, then pointing at the slide. After both hints, it shows the Slide/Book tag.

Some prompts also have "watch" entries that catch common mistakes, like "the molecules stop at equilibrium" or "low to high" for diffusion. A note is complete only when every idea is found and no mistake is flagged.

---

AI Disclosure: This tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and wrote the key-idea checks and hints from the instructor's notebook guides, slideshows, and the course textbook. The instructor reviewed and finalized the material before classroom use.

## How to Take Good Notes (guide cards)

The menu has a **How to Take Good Notes** button above the quizzes. It opens 11 short cards: tips with a weak note and a strong note side by side, plus three practice cards (pick the better note, spot the fluff, reread for mistakes). Each card has Read to me. The page remembers the last card the student opened. Direct link: add `#guide` to the site address.

Edit, add, or reorder cards in `content/guide.js`. Three card types:

- `tip`: title, tip, optional `weak` and `strong` example notes
- `choose`: title, prompt, `a`, `b`, `correct` ("a" or "b"), explain
- `cut`: title, prompt, `sentences` as `{t, fluff}`, explain

Netlify revalidates files on each visit, so edits show up after a refresh.

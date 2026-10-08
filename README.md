# Biology Notes Builder

A guided note-taking tool for students with an ISP printed-notes accommodation. Students pick their quiz or test from a menu, work through the notebook guide one prompt at a time, answer by voice or typing, and get told which key ideas are missing without being given the answer. When they finish, they print a clean notes sheet to use on the quiz or test.

- No AI, no accounts, no logins. The checker is a set of rules that runs in the student's browser.
- Notes save only in that student's browser on that Chromebook. Nothing is sent to the teacher or to any server.
- One site holds every quiz and test. Each quiz loads only when a student picks it.

## Links

- Students (menu): `https://YOUR-SITE.netlify.app/`
- Students, straight to one quiz: `https://YOUR-SITE.netlify.app/#u2q2`
- Teacher self-test: `https://YOUR-SITE.netlify.app/test.html`

## How it is organized

```
index.html            the page students open (never needs editing)
content/
  catalog.js          the quiz menu: one line per quiz or test
  u2q2/
    unit.js           Unit 2 Quiz 2 content: prompts, model notes, key ideas, hints
  <next id>/
    unit.js           next quiz or test
patterns.js           shared word patterns any quiz can reuse
checker.js            rules that check a note against its key ideas
app.js                screens, buttons, speech, print sheet
styles.css            look and print layout
test.html             teacher self-test
```

## Adding the next quiz or test

The easy way: ask Claude in the Biology Class project to "build the Notes Builder content for [quiz name]." You get a new `content/<id>/unit.js` and an updated `content/catalog.js`.

By hand:

1. Make a new folder under `content`, for example `content/u2q3`.
2. Copy `content/u2q2/unit.js` into it. Change `id` to match the folder name, then change `title`, `subtitle`, `disclosure`, and the `questions` list. The comment at the top of the file explains each field.
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

## How the checker works

Each prompt has 2 to 4 key ideas. Each idea has:

- a short label shown to the student, with no answer in it ("Which way", "The helper");
- patterns that count as having the idea, written loosely enough to accept everyday wording and speech-to-text spellings ("hydro filic", "aqua porin");
- two hints, gentle first, then pointing at the slide. After both hints, it shows the Slide/Book tag.

Some prompts also have "watch" entries that catch common mistakes, like "the molecules stop at equilibrium" or "low to high" for diffusion. A note is complete only when every idea is found and no mistake is flagged.

---

AI Disclosure: This tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and wrote the key-idea checks and hints from the instructor's notebook guides, slideshows, and the course textbook. The instructor reviewed and finalized the material before classroom use.

/* Notes Builder interface. Content lives in units/*.js. */
/* ============================== ENGINE ============================== */
const $ = s => document.querySelector(s);
const app = $("#app");
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ICON = {
  speak:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect class="pulse" x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
  clue:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/></svg>',
  save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
  open:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V9M7 14l5-5 5 5M5 3h14"/></svg>',
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><rect x="6" y="14" width="12" height="7"/></svg>'
};

/* ---------- state (browser only; wrapped so it never breaks the page) ---------- */
let unit = null, S = null, idx = 0, view = "start", lastResult = null, reveal = {clue:false, where:false}, confirmReset = false;
const key = () => "bio-notes:" + unit.id;
function blank(){ return {name:"", notes:{}, status:{}, misses:{}, tries:{}, lastText:{}, best:{}, revealed:{}, src:{}, idx:0}; }
function load(){ try { const r = localStorage.getItem(key()); return r ? Object.assign(blank(), JSON.parse(r)) : blank(); } catch(e){ return blank(); } }
/* Autosave: every change is written to this browser right away, so closing the
   tab, shutting down, or walking away keeps the work. Backup files cover a
   different Chromebook or a cleared browser. */
let saveT, storageOK = true;
function writeNow(){
  clearTimeout(saveT);
  if (!unit || !S) return;
  S.savedAt = Date.now();
  try { localStorage.setItem(key(), JSON.stringify(S)); storageOK = true; } catch(e){ storageOK = false; }
  paintSaved();
}
function save(){ clearTimeout(saveT); saveT = setTimeout(writeNow, 300); }
function timeText(t){ try { return new Date(t).toLocaleTimeString([], {hour:"numeric", minute:"2-digit"}); } catch(e){ return ""; } }
function paintSaved(){
  const el = $("#saved"); if (!el) return;
  el.textContent = storageOK
    ? (S.savedAt ? `Saved on this Chromebook at ${timeText(S.savedAt)}.` : "Your work saves on this Chromebook as you go.")
    : "This browser is not saving. Use Save a backup file before you leave.";
  el.classList.toggle("warn", !storageOK);
}
window.addEventListener("pagehide", writeNow);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") writeNow(); });

function safeName(t){ return String(t||"").trim().replace(/[^A-Za-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40); }
function downloadBackup(){
  writeNow();
  const data = {app:"notes-builder", version:1, unit:unit.id, title:unit.title, savedAt:Date.now(), state:S};
  const blob = new Blob([JSON.stringify(data, null, 1)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `Notes-${unit.id}${S.name ? "-" + safeName(S.name) : ""}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  setMsg("Backup file saved to your Downloads. To keep it safe, move it to your Google Drive.");
}
function pickBackup(){ const f = $("#restore-file"); if (f) f.click(); }
function readBackup(file){
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    let d; try { d = JSON.parse(r.result); } catch(e){ return setMsg("That file is not a Notes Builder backup."); }
    if (!d || d.app !== "notes-builder" || !d.state) return setMsg("That file is not a Notes Builder backup.");
    if (d.unit !== unit.id) return setMsg(`That backup is for "${d.title || d.unit}". Go back to the menu and pick that one first.`);
    const has = Object.values(S.notes||{}).some(v => String(v).trim());
    const apply = () => { S = Object.assign(blank(), d.state); idx = Math.min(S.idx||0, unit.questions.length-1); writeNow(); lastResult = null; render(); setMsg(`Backup opened. ${counts().done} of ${counts().n} notes are complete.`); };
    if (!has) return apply();
    const box = $("#restore-confirm");
    box.innerHTML = `<div class="confirm row"><span>Replace the notes on this Chromebook with the backup?</span>
      <button class="btn" id="r-yes">Yes, use the backup</button><button class="btn" id="r-no">Keep what is here</button></div>`;
    $("#r-yes").onclick = apply;
    $("#r-no").onclick = () => { box.innerHTML = ""; };
  };
  r.readAsText(file);
}
function setMsg(t){ const el = $("#save-msg"); if (el) el.textContent = t; }
function savePanel(){
  return `<section class="savebox noprint" aria-labelledby="save-h">
    <h2 class="eyebrow" id="save-h">Your work</h2>
    <p id="saved" class="tip"></p>
    <div class="row">
      <button class="btn" id="backup">${ICON.save}<span>Save a backup file</span></button>
      <button class="btn" id="restore">${ICON.open}<span>Open a backup file</span></button>
      <input type="file" id="restore-file" accept=".json,application/json" hidden>
    </div>
    <p class="small">Use a backup file if you switch Chromebooks or your notes disappear.</p>
    <p class="tip" id="save-msg" role="status"></p>
    <div id="restore-confirm"></div>
  </section>`;
}
function wireSavePanel(){
  $("#backup").onclick = downloadBackup;
  $("#restore").onclick = pickBackup;
  $("#restore-file").onchange = e => { readBackup(e.target.files[0]); e.target.value = ""; };
  paintSaved();
}

/* ---------- note integrity: paste setting, how each note was entered, sheet code ---------- */
function pasteAllowed(){
  const entry = (window.CATALOG || []).find(c => c.id === unit.id) || {};
  if (typeof entry.paste === "boolean") return entry.paste;
  return !!(window.SETTINGS && window.SETTINGS.allowPaste);
}
function srcOf(n){ S.src = S.src || {}; return S.src[n] = S.src[n] || {s:0, t:0, p:0}; }
function wireNoteBox(box, n){
  const block = e => { if (!pasteAllowed()){ e.preventDefault(); setTip("Pasting is turned off for this quiz. Say or type your note in your own words."); } };
  box.addEventListener("paste", block);
  box.addEventListener("drop", block);
  box.addEventListener("input", e => {
    const t = e.inputType || "";
    if (t === "insertFromPaste" || t === "insertFromDrop") srcOf(n).p += (e.data || "x").length;
    else if (t.indexOf("insert") === 0) srcOf(n).t += (e.data || " ").length;
  });
}
function wordsOf(t){ return new Set(norm(t).trim().split(" ").filter(w => w.length > 2)); }
function nearSample(Q, text){
  const a = wordsOf(text), b = wordsOf(Q.model); if (!a.size || !b.size) return false;
  let same = 0; a.forEach(w => { if (b.has(w)) same++; });
  return same / Math.max(a.size, b.size) >= 0.8;
}
function entryLine(Q){
  const src = (S.src || {})[Q.n] || {s:0, t:0, p:0}, how = [];
  if (src.s) how.push("spoken"); if (src.t) how.push("typed"); if (src.p) how.push("PASTED");
  const parts = ["Entered: " + (how.join(" + ") || "not recorded")];
  const tries = (S.tries || {})[Q.n] || 0;
  if (tries) parts.push(tries + (tries === 1 ? " try" : " tries"));
  if ((S.revealed || {})[Q.n]) parts.push(nearSample(Q, S.notes[Q.n] || "") ? "sample shown, close copy of sample" : "sample shown");
  return parts.join(" | ");
}
/* Sheet code: a short fingerprint of the name, quiz, and every note. The same notes
   always give the same code, so a printout can be matched to the student's screen. */
function sheetCode(){
  let h = 2166136261 >>> 0;
  const str = [unit.id, (S.name || "").trim().toLowerCase()].concat(unit.questions.map(Q => (S.notes[Q.n] || "").trim())).join("\u0001");
  for (let i = 0; i < str.length; i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; let c = "";
  for (let i = 0; i < 6; i++){ c += A[h % 32]; h = Math.floor(h / 32); }
  return c.slice(0, 3) + "-" + c.slice(3);
}

/* ---------- speech out ---------- */
function speak(text){
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.rate = 0.9; u.lang = "en-US"; speechSynthesis.speak(u); } catch(e){}
}
function stopSpeak(){ try { speechSynthesis.cancel(); } catch(e){} }

/* ---------- speech in ---------- */
let rec = null, listening = false, micBlocked = false;
function toggleMic(){
  const box = $("#note");
  if (listening){ try { rec.stop(); } catch(e){} return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR || micBlocked){ showMicTip(); return; }
  stopSpeak();
  rec = new SR(); rec.lang = "en-US"; rec.continuous = true; rec.interimResults = true;
  const base = box.value.trim() ? box.value.trim() + " " : "";
  let heard = 0;
  rec.onresult = e => {
    let txt = "";
    for (let i = 0; i < e.results.length; i++) txt += e.results[i][0].transcript;
    txt = txt.trim();
    if (!base && txt) txt = txt[0].toUpperCase() + txt.slice(1);
    box.value = base + txt; S.notes[q().n] = box.value; heard = txt.length; save();
  };
  rec.onerror = e => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture"){ micBlocked = true; showMicTip(); }
    else if (e.error === "no-speech") setTip("I did not hear anything. Tap Speak and try again.");
    else if (e.error === "network") setTip("Speech needs the internet. Check Wi-Fi, or type your note.");
  };
  rec.onend = () => { listening = false; paintMic(); if (heard) { srcOf(q().n).s += heard; writeNow(); } };
  try { rec.start(); listening = true; paintMic(); setTip("Listening. Tap Stop when you finish."); } catch(e){ showMicTip(); }
}
function paintMic(){ const b = $("#mic"); if (!b) return; b.classList.toggle("on", listening); b.querySelector("span").textContent = listening ? "Stop" : "Speak"; b.setAttribute("aria-pressed", listening); }
function setTip(t){ const el = $("#tip"); if (el) el.textContent = t; }
function showMicTip(){ setTip("The Speak button is blocked here. Use Chromebook dictation instead: tap in the box, then press Search + D and talk. You can also type."); }

/* ---------- views ---------- */
const q = () => unit.questions[idx];
function render(){
  stopSpeak();
  if (listening){ try { rec.stop(); } catch(e){} }
  if (!unit) return renderPicker();
  if (view === "start") return renderStart();
  if (view === "sheet") return renderSheet();
  renderQuestion();
}

function renderPicker(msg){
  const list = (window.CATALOG||[]).filter(c => c.show !== false);
  const groups = [];
  list.forEach(c => { let g = groups.find(x => x.name === c.unit); if (!g) groups.push(g = {name:c.unit, items:[]}); g.items.push(c); });
  app.innerHTML = `<div class="hero"><p class="eyebrow">Biology</p><h1>Notes Builder</h1><p>Pick the quiz or test you are building notes for.</p></div>
  ${msg ? `<div class="confirm" role="alert">${esc(msg)}</div>` : ""}
  ${groups.map(g => `<section class="units"><h2 class="eyebrow">${esc(g.name)}</h2>
    ${g.items.map(c => `<button class="btn big pick" data-id="${esc(c.id)}"><span>${esc(c.title)}</span><span class="small">${esc(c.type||"")}</span></button>`).join("")}
  </section>`).join("") || `<p>No quizzes are posted yet.</p>`}`;
  app.querySelectorAll("[data-id]").forEach(b => b.onclick = () => openUnit(b.dataset.id));
}
function openUnit(id){
  const entry = (window.CATALOG||[]).find(c => c.id === id);
  const have = UNITS.find(u => u.id === id);
  if (have){ setHash(id); return pickUnit(have); }
  if (!entry) return renderPicker("That quiz link is not on the menu. Pick one below.");
  app.innerHTML = `<div class="hero"><p class="eyebrow">${esc(entry.unit)}</p><h1>${esc(entry.title)}</h1><p>Loading...</p></div>`;
  const s = document.createElement("script");
  s.src = `content/${encodeURIComponent(id)}/unit.js?v=${encodeURIComponent(entry.v||1)}`;
  s.onload = () => { const u = UNITS.find(x => x.id === id); if (u){ setHash(id); pickUnit(u); } else renderPicker("That quiz did not load correctly. Tell your teacher."); };
  s.onerror = () => renderPicker("That quiz did not load. Check your internet, then try again.");
  document.head.appendChild(s);
}
function setHash(id){ try { history.replaceState(null, "", "#" + id); } catch(e){} }
function pickUnit(u){ unit = u; S = load(); idx = Math.min(S.idx||0, unit.questions.length-1); view = "start"; render(); }

function counts(){ const n = unit.questions.length; const done = unit.questions.filter(x=>S.status[x.n]==="done").length; return {n, done}; }

function renderStart(){
  const {n, done} = counts();
  app.innerHTML = `
  <div class="hero">
    <p class="eyebrow">${esc(unit.subtitle)}</p>
    <h1>${esc(unit.title)}</h1>
    <p>${n} notes. You build them. The checker tells you what is missing.</p>
  </div>
  <ol class="steps">
    <li><span class="n">1</span>Read or listen to the question.</li>
    <li><span class="n">2</span>Say or type your note.</li>
    <li><span class="n">3</span>Check it, fix it, then print.</li>
  </ol>
  <label class="field" for="name">Your name (for your printed notes)
    <input id="name" autocomplete="name" value="${esc(S.name)}">
  </label>
  <div class="row">
    <button class="btn primary big" id="go">${done ? `Keep going (${done} of ${n} done)` : "Start"}</button>
    ${done ? `<button class="btn" id="see">${ICON.print}<span>See my notes</span></button>` : ""}
    <button class="btn" id="other">Different quiz or test</button>
  </div>
  ${savePanel()}
  <p class="small">${esc(unit.disclosure)}</p>`;
  wireSavePanel();
  $("#name").oninput = e => { S.name = e.target.value; save(); };
  $("#name").onchange = writeNow;
  $("#go").onclick = () => { view = "q"; render(); };
  if ($("#see")) $("#see").onclick = () => { view = "sheet"; render(); };
  $("#other").onclick = () => { writeNow(); unit = null; try{history.replaceState(null,"",location.pathname);}catch(e){} render(); };
}

function promptHTML(p){ const i = p.indexOf(" "); return `<b>${esc(p.slice(0,i))}</b>${esc(p.slice(i))}`; }

function renderQuestion(){
  const Q = q(), {n} = counts();
  S.idx = idx; save();
  const note = S.notes[Q.n] || "";
  app.innerHTML = `
  <div class="top noprint">
    <div class="row spread"><span class="eyebrow">${esc(unit.title)}</span><span class="eyebrow">Note ${idx+1} of ${n}</span></div>
    <nav class="dots" aria-label="Jump to a note">${unit.questions.map((x,i)=>`<button class="dot ${S.status[x.n]||""} ${i===idx?"here":""}" data-i="${i}" aria-label="Note ${x.n}${S.status[x.n]==="done"?", done":""}">${x.n}</button>`).join("")}</nav>
  </div>
  <section class="card">
    <div class="heading">Heading: ${esc(Q.heading)}</div>
    <h2 class="prompt" id="prompt">${Q.n}. ${promptHTML(Q.prompt)}</h2>
    <div class="row">
      <button class="btn" id="read">${ICON.speak}<span>Read to me</span></button>
      <button class="btn" id="clue" aria-expanded="${reveal.clue}">${ICON.clue}<span>Clue</span></button>
      <button class="btn" id="where" aria-expanded="${reveal.where}">${ICON.book}<span>Where to look</span></button>
    </div>
    ${reveal.clue ? `<div class="reveal">${esc(Q.guide)}</div>` : ""}
    ${reveal.where ? `<div class="reveal where">${esc(Q.where)}</div>` : ""}
  </section>
  <section class="card">
    <label for="note" class="eyebrow">My note</label>
    <textarea id="note" class="note" spellcheck="true" placeholder="Tap Speak, or type here.">${esc(note)}</textarea>
    <div class="row">
      <button class="btn big mic" id="mic" aria-pressed="false">${ICON.mic}<span>Speak</span></button>
      <button class="btn primary big" id="check">${ICON.check}<span>Check my note</span></button>
      <button class="btn" id="readnote">${ICON.speak}<span>Read my note</span></button>
    </div>
    <p class="tip" id="tip"></p>
    <p class="small" id="saved" role="status"></p>
    ${Q.draw ? `<p class="tip">On paper: ${esc(Q.draw)} Your printed sheet has a box for it.</p>` : ""}
  </section>
  <div id="fb"></div>
  <div class="row spread noprint">
    <button class="btn big" id="back" ${idx===0?"disabled":""}>Back</button>
    <button class="btn big" id="home">Menu</button>
    <button class="btn primary big" id="next">${idx===unit.questions.length-1 ? "See my notes" : "Next note"}</button>
  </div>`;
  app.querySelectorAll(".dot").forEach(b=>b.onclick=()=>go(+b.dataset.i));
  $("#read").onclick = () => speak(`${Q.n}. ${Q.prompt}` + (reveal.clue ? ` Clue: ${Q.guide}` : ""));
  $("#clue").onclick = () => { reveal.clue = !reveal.clue; keepNote(); renderQuestion(); if (reveal.clue) speak("Clue. " + Q.guide); };
  $("#where").onclick = () => { reveal.where = !reveal.where; keepNote(); renderQuestion(); };
  $("#note").oninput = e => { S.notes[Q.n] = e.target.value; save(); };
  wireNoteBox($("#note"), Q.n);
  $("#mic").onclick = toggleMic;
  $("#check").onclick = doCheck;
  $("#readnote").onclick = () => { const v = $("#note").value.trim(); speak(v || "Your note is empty."); };
  $("#back").onclick = () => go(idx-1);
  $("#next").onclick = () => idx === unit.questions.length-1 ? (view="sheet", render()) : go(idx+1);
  $("#home").onclick = () => { keepNote(); writeNow(); view = "start"; render(); };
  if (lastResult && lastResult.n === Q.n) paintFeedback(lastResult.r, false);
  paintSaved();
}
function keepNote(){ const b = $("#note"); if (b){ S.notes[q().n] = b.value; save(); } }
function go(i){ keepNote(); idx = Math.max(0, Math.min(unit.questions.length-1, i)); lastResult = null; reveal = {clue:false, where:false}; render(); window.scrollTo(0,0); }

/* Clue ladder. Each check that is not complete, with a changed note, is one try.
   Try 1: gentle clue. Try 2: a more direct clue plus where to look.
   Try 3 and after: a sample note to read, then say in their own words. */
const SAMPLE_AT = 3;
function doCheck(){
  if (listening){ try { rec.stop(); } catch(e){} }
  const Q = q(); const text = $("#note").value; S.notes[Q.n] = text;
  const r = checkNote(Q, text);
  S.misses[Q.n] = S.misses[Q.n] || {};
  const changed = (S.lastText[Q.n] || "") !== text.trim();
  const prevBest = S.best[Q.n] || 0, got = r.ideas.filter(i => i.ok).length;
  r.progress = got > prevBest && (Q.n in S.lastText);
  S.best[Q.n] = Math.max(prevBest, got);
  if (!r.done && changed && r.words >= 3){
    S.tries[Q.n] = (S.tries[Q.n] || 0) + 1;
    r.ideas.forEach(i => { if (!i.ok) S.misses[Q.n][i.label] = (S.misses[Q.n][i.label]||0) + 1; });
  }
  r.same = !changed && !r.done;
  S.lastText[Q.n] = text.trim();
  if (!r.done && (S.tries[Q.n] || 0) >= SAMPLE_AT) S.revealed[Q.n] = true;
  S.status[Q.n] = r.done ? "done" : "tried"; writeNow();
  lastResult = {n:Q.n, r};
  app.querySelector(`.dot[data-i="${idx}"]`).className = `dot ${S.status[Q.n]} here`;
  paintFeedback(r, true);
}
function level(Q){ return Math.max(1, Math.min(S.tries[Q.n] || 1, SAMPLE_AT)); }
function hintFor(Q, idea){
  const h = idea.hints || [];
  if (level(Q) === 1 || h.length < 2) return h[0] || `Look here: ${Q.where}.`;
  return `${h[h.length - 1]} (${Q.where})`;
}
function paintFeedback(r, talk){
  const Q = q(), fb = $("#fb");
  S.misses[Q.n] = S.misses[Q.n] || {};
  if (r.words < 3){
    fb.innerHTML = `<div class="fb more"><h3>Say a little more.</h3><p>Use a full sentence in your own words.</p></div>`;
    if (talk) speak("Say a little more. Use a full sentence in your own words."); return;
  }
  const got = r.ideas.filter(i=>i.ok), miss = r.ideas.filter(i=>!i.ok), tries = S.tries[Q.n] || 0;
  const chips = got.length ? `<div class="chips">${got.map(i=>`<span class="chip">${ICON.check}${esc(i.label)}</span>`).join("")}</div>` : "";
  if (r.done){
    const title = tries >= 2 ? "You stuck with it. All the key ideas are in your note." : `All ${r.ideas.length} key ideas are in your note.`;
    fb.innerHTML = `<div class="fb ok"><h3>${esc(title)}</h3>${chips}</div>`;
    if (talk) speak(tries >= 2 ? "You stuck with it, and it paid off. All the key ideas are in your note." : "Nice work. All the key ideas are in your note.");
    return;
  }
  const L = level(Q), sample = S.revealed[Q.n];
  const head = sample ? "You have worked hard on this one. Here is some help."
    : L === 1 ? `Good start. ${got.length} of ${r.ideas.length} key ideas so far.`
    : `Getting closer. ${got.length} of ${r.ideas.length} key ideas. Here are bigger clues.`;
  const lead = r.same ? "Change your note, then check again." : r.progress ? "Nice, you added a key idea." : "";
  const lines = r.warnings.map(w=>`<li><span class="tag">Check</span><span>${esc(w)}</span></li>`)
    .concat(miss.map(i=>`<li><span class="tag">Add</span><span><b>${esc(i.label)}:</b> ${esc(hintFor(Q,i))}</span></li>`));
  fb.innerHTML = `<div class="fb more">
    <h3>${esc(head)}</h3>
    ${lead ? `<p class="lead">${esc(lead)}</p>` : ""}
    ${chips}
    ${sample ? `<div class="sample"><p class="eyebrow">One way to say it</p><p class="sample-text">${esc(Q.model)}</p>
      <p>Read it, then say or type it in your own words and check again. You've got this.</p></div>` : `<ul class="miss">${lines.join("")}</ul>`}
    <div class="row"><button class="btn" id="readfb">${ICON.speak}<span>Read this to me</span></button></div></div>`;
  const said = sample
    ? `You have worked hard on this one. Here is one way to say it. ${Q.model} Now say it in your own words and check again.`
    : [head, lead].concat(r.warnings, miss.map(i=>hintFor(Q,i))).filter(Boolean).join(" ");
  $("#readfb").onclick = () => speak(said);
  if (talk) speak(said);
}

function renderSheet(){
  const {n, done} = counts();
  const date = new Date().toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
  let lastH = "", body = "";
  unit.questions.forEach(Q => {
    if (Q.heading !== lastH){ body += `<h3>${esc(Q.heading)}</h3>`; lastH = Q.heading; }
    const a = (S.notes[Q.n]||"").trim();
    body += `<div class="item"><span class="num">${Q.n}.</span><span class="p">${esc(Q.prompt)}</span>
      <div class="a ${a?"":"empty"}">${a ? esc(a) : "(no note yet)"}</div>
      ${Q.draw ? `<div class="box">${esc(Q.draw)}</div>` : ""}
      <div class="src">${esc(Q.where)}</div>
      ${a ? `<div class="how${((S.src||{})[Q.n]||{}).p ? " flag" : ""}">${esc(entryLine(Q))}</div>` : ""}</div>`;
  });
  const pasted = unit.questions.filter(Q => ((S.src||{})[Q.n]||{}).p).length;
  const samples = unit.questions.filter(Q => (S.revealed||{})[Q.n]).length;
  const code = sheetCode(), who = (S.name || "").trim();
  const wmText = `${who || "NO NAME"} \u00b7 ${unit.title} \u00b7 ${date}`;
  const wm = `<div class="wm" aria-hidden="true">${Array.from({length: 14}, () => `<span>${esc(wmText)}</span>`).join("")}</div>`;
  const missing = unit.questions.filter(Q => S.status[Q.n] !== "done").map(Q => Q.n);
  app.innerHTML = `
  <div class="row spread noprint">
    <button class="btn big" id="back">Back to notes</button>
    <div class="row">
      <button class="btn primary big" id="print" ${who ? "" : "disabled"}>${ICON.print}<span>Print my notes</span></button>
    </div>
  </div>
  <div class="noprint">
    <p class="tip" id="ptip">${done===n ? `All ${n} notes are complete.` : `${done} of ${n} notes are complete. Still to finish: ${missing.join(", ")}.`}</p>
    ${who ? "" : `<label class="field" for="sheet-name">Type your name to print your notes
      <input id="sheet-name" autocomplete="name"></label>`}
    <p class="small">If Print does nothing, press Ctrl + P. Sheet code: <b>${code}</b></p>
  </div>
  ${savePanel()}
  <div class="noprint">
    <div class="row"><button class="btn" id="reset">Start over</button></div>
    <div id="confirm"></div>
  </div>
  <article class="sheet" id="sheet">
    <h2>${esc(unit.title)}: My Notes</h2>
    <div class="meta"><span>Name: ${esc(who || "________________________")}</span><span>${esc(date)}</span><span>Complete: ${done} of ${n}</span></div>
    <div class="meta2"><span>Sheet code: <b>${code}</b></span><span>Notes pasted: ${pasted}</span><span>Sample notes shown: ${samples}</span></div>
    ${body}
    <p class="disc">${esc(unit.disclosure)}</p>
    ${wm}
  </article>`;
  if ($("#sheet-name")) $("#sheet-name").onchange = e => { S.name = e.target.value.trim(); writeNow(); renderSheet(); };
  wireSavePanel();
  $("#back").onclick = () => { view = "q"; render(); };
  $("#print").onclick = () => { try { window.print(); } catch(e){} };
  $("#reset").onclick = () => {
    $("#confirm").innerHTML = `<div class="confirm row"><span>Erase every note on this device?</span>
      <button class="btn" id="yes">Yes, erase</button><button class="btn" id="no">Keep my notes</button></div>`;
    $("#yes").onclick = () => { const nm = S.name; S = blank(); S.name = nm; writeNow(); idx = 0; view = "start"; render(); };
    $("#no").onclick = () => { $("#confirm").innerHTML = ""; };
  };
}

/* ---------- boot ---------- */
(function boot(){
  const h = (location.hash||"").slice(1);
  if (h) openUnit(h); else render();
})();
window.addEventListener("hashchange", () => {
  const h = (location.hash||"").slice(1);
  if (h && (!unit || unit.id !== h)){ writeNow(); view = "start"; openUnit(h); }
});

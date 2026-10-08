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
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><rect x="6" y="14" width="12" height="7"/></svg>'
};

/* ---------- state (browser only; wrapped so it never breaks the page) ---------- */
let unit = null, S = null, idx = 0, view = "start", lastResult = null, reveal = {clue:false, where:false}, confirmReset = false;
const key = () => "bio-notes:" + unit.id;
function blank(){ return {name:"", notes:{}, status:{}, misses:{}, idx:0}; }
function load(){ try { const r = localStorage.getItem(key()); return r ? Object.assign(blank(), JSON.parse(r)) : blank(); } catch(e){ return blank(); } }
let saveT; function save(){ clearTimeout(saveT); saveT = setTimeout(()=>{ try { localStorage.setItem(key(), JSON.stringify(S)); } catch(e){} }, 250); }

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
  rec.onresult = e => {
    let txt = "";
    for (let i = 0; i < e.results.length; i++) txt += e.results[i][0].transcript;
    txt = txt.trim();
    if (!base && txt) txt = txt[0].toUpperCase() + txt.slice(1);
    box.value = base + txt; S.notes[q().n] = box.value; save();
  };
  rec.onerror = e => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture"){ micBlocked = true; showMicTip(); }
    else if (e.error === "no-speech") setTip("I did not hear anything. Tap Speak and try again.");
    else if (e.error === "network") setTip("Speech needs the internet. Check Wi-Fi, or type your note.");
  };
  rec.onend = () => { listening = false; paintMic(); };
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

function renderPicker(){
  app.innerHTML = `<div class="hero"><p class="eyebrow">Biology</p><h1>Notes Builder</h1><p>Pick your quiz or test.</p></div>
  <div class="units">${UNITS.map((u,i)=>`<button class="btn big" data-u="${i}">${esc(u.title)}<span class="small">&nbsp;${esc(u.subtitle)}</span></button>`).join("")}</div>`;
  app.querySelectorAll("[data-u]").forEach(b=>b.onclick=()=>{ pickUnit(UNITS[+b.dataset.u]); });
}
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
    ${UNITS.length > 1 ? `<button class="btn" id="other">Different quiz</button>` : ""}
  </div>
  <p class="small">${esc(unit.disclosure)}</p>`;
  $("#name").oninput = e => { S.name = e.target.value; save(); };
  $("#go").onclick = () => { view = "q"; render(); };
  if ($("#see")) $("#see").onclick = () => { view = "sheet"; render(); };
  if ($("#other")) $("#other").onclick = () => { unit = null; try{history.replaceState(null,"",location.pathname);}catch(e){} render(); };
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
  $("#mic").onclick = toggleMic;
  $("#check").onclick = doCheck;
  $("#readnote").onclick = () => { const v = $("#note").value.trim(); speak(v || "Your note is empty."); };
  $("#back").onclick = () => go(idx-1);
  $("#next").onclick = () => idx === unit.questions.length-1 ? (view="sheet", render()) : go(idx+1);
  $("#home").onclick = () => { view = "start"; render(); };
  if (lastResult && lastResult.n === Q.n) paintFeedback(lastResult.r, false);
}
function keepNote(){ const b = $("#note"); if (b){ S.notes[q().n] = b.value; save(); } }
function go(i){ keepNote(); idx = Math.max(0, Math.min(unit.questions.length-1, i)); lastResult = null; reveal = {clue:false, where:false}; render(); window.scrollTo(0,0); }

function doCheck(){
  if (listening){ try { rec.stop(); } catch(e){} }
  const Q = q(); const text = $("#note").value; S.notes[Q.n] = text;
  const r = checkNote(Q, text);
  S.misses[Q.n] = S.misses[Q.n] || {};
  r.ideas.forEach(i => { if (!i.ok) S.misses[Q.n][i.label] = (S.misses[Q.n][i.label]||0) + 1; });
  S.status[Q.n] = r.done ? "done" : "tried"; save();
  lastResult = {n:Q.n, r};
  app.querySelector(`.dot[data-i="${idx}"]`).className = `dot ${S.status[Q.n]} here`;
  paintFeedback(r, true);
}
function hintFor(Q, idea){
  const k = (S.misses[Q.n]||{})[idea.label] || 1;
  const h = idea.hints || [];
  if (k <= h.length) return h[k-1];
  return `Look here: ${Q.where}.`;
}
function paintFeedback(r, talk){
  const Q = q(), fb = $("#fb");
  if (r.words < 3){
    fb.innerHTML = `<div class="fb more"><h3>Say a little more.</h3><p>Use a full sentence in your own words.</p></div>`;
    if (talk) speak("Say a little more. Use a full sentence in your own words."); return;
  }
  const got = r.ideas.filter(i=>i.ok), miss = r.ideas.filter(i=>!i.ok);
  if (r.done){
    fb.innerHTML = `<div class="fb ok"><h3>All ${r.ideas.length} key ideas are in your note.</h3>
      <div class="chips">${got.map(i=>`<span class="chip">${ICON.check}${esc(i.label)}</span>`).join("")}</div></div>`;
    if (talk) speak("Nice work. All the key ideas are in your note.");
    return;
  }
  const lines = r.warnings.map(w=>`<li><span class="tag">Check</span><span>${esc(w)}</span></li>`)
    .concat(miss.map(i=>`<li><span class="tag">Add</span><span><b>${esc(i.label)}:</b> ${esc(hintFor(Q,i))}</span></li>`));
  fb.innerHTML = `<div class="fb more">
    <h3>${got.length} of ${r.ideas.length} key ideas so far.</h3>
    ${got.length ? `<div class="chips">${got.map(i=>`<span class="chip">${ICON.check}${esc(i.label)}</span>`).join("")}</div>` : ""}
    <ul class="miss">${lines.join("")}</ul>
    <div class="row"><button class="btn" id="readfb">${ICON.speak}<span>Read this to me</span></button></div></div>`;
  const said = `You have ${got.length} of ${r.ideas.length} key ideas. ` + r.warnings.join(" ") + " " + miss.map(i=>hintFor(Q,i)).join(" ");
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
      <div class="src">${esc(Q.where)}</div></div>`;
  });
  const missing = unit.questions.filter(Q => S.status[Q.n] !== "done").map(Q => Q.n);
  app.innerHTML = `
  <div class="row spread noprint">
    <button class="btn big" id="back">Back to notes</button>
    <div class="row">
      <button class="btn" id="copy">Copy notes</button>
      <button class="btn primary big" id="print">${ICON.print}<span>Print my notes</span></button>
    </div>
  </div>
  <div class="noprint">
    <p class="tip" id="ptip">${done===n ? `All ${n} notes are complete.` : `${done} of ${n} notes are complete. Still to finish: ${missing.join(", ")}.`}</p>
    <p class="small">If Print does nothing, press Ctrl + P.</p>
    <div class="row"><button class="btn" id="reset">Start over</button></div>
    <div id="confirm"></div>
  </div>
  <article class="sheet" id="sheet">
    <h2>${esc(unit.title)}: My Notes</h2>
    <div class="meta"><span>Name: ${esc(S.name || "________________________")}</span><span>${esc(date)}</span><span>Complete: ${done} of ${n}</span></div>
    ${body}
    <p class="disc">${esc(unit.disclosure)}</p>
  </article>`;
  $("#back").onclick = () => { view = "q"; render(); };
  $("#print").onclick = () => { try { window.print(); } catch(e){} };
  $("#copy").onclick = () => {
    const txt = unit.questions.map(Q => `${Q.n}. ${Q.prompt}\n${(S.notes[Q.n]||"").trim()}`).join("\n\n");
    const done = () => { $("#ptip").textContent = "Notes copied. Paste them into a Google Doc to print."; };
    try { navigator.clipboard.writeText(txt).then(done, () => selectSheet()); } catch(e){ selectSheet(); }
  };
  $("#reset").onclick = () => {
    $("#confirm").innerHTML = `<div class="confirm row"><span>Erase every note on this device?</span>
      <button class="btn" id="yes">Yes, erase</button><button class="btn" id="no">Keep my notes</button></div>`;
    $("#yes").onclick = () => { const nm = S.name; S = blank(); S.name = nm; save(); idx = 0; view = "start"; render(); };
    $("#no").onclick = () => { $("#confirm").innerHTML = ""; };
  };
}
function selectSheet(){ try { const r = document.createRange(); r.selectNodeContents($("#sheet")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); $("#ptip").textContent = "Notes selected. Press Ctrl + C to copy."; } catch(e){} }

/* ---------- boot ---------- */
(function boot(){
  const h = (location.hash||"").slice(1);
  const byHash = UNITS.find(u => u.id === h);
  if (byHash) pickUnit(byHash);
  else if (UNITS.length === 1) pickUnit(UNITS[0]);
  else render();
})();

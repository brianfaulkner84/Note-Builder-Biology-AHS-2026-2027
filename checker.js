/* Rule-based note checker. No network, no AI. Shared by index.html and test.html. */
function norm(s){
  return " " + String(s).toLowerCase().replace(/₂/g,"2").replace(/[’‘`]/g,"'")
    .replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim() + " ";
}
/* normMap: the same text norm() makes, plus where each character came from in the
   original note, so a match can be traced back and highlighted. */
function normMap(s){
  s = String(s); const out = [" "], map = [0];
  for (let i = 0; i < s.length; i++){
    let c = s[i].toLowerCase();
    if (c === "\u2082") c = "2"; else if ("\u2019\u2018`".indexOf(c) >= 0) c = "'";
    if (!/[a-z0-9']/.test(c)) c = " ";
    if (c === " " && out[out.length - 1] === " ") continue;
    out.push(c); map.push(i);
  }
  if (out[out.length - 1] !== " "){ out.push(" "); map.push(s.length); }
  return {t: out.join(""), map};
}
/* Split a note into sentences with their positions in the original text. */
function sentencesOf(text){
  const out = [], re = /[^.!?\n]+[.!?]*/g; let m;
  while ((m = re.exec(text))){ if (m[0].trim()) out.push({start: m.index, end: m.index + m[0].length, text: m[0]}); }
  return out;
}
function anyMatch(list, t){ return [].concat(list).some(r => r.test(t)); }
function checkNote(q, text){
  const t = norm(text);
  const words = t.trim() ? t.trim().split(" ").length : 0;
  const out = {ideas:[], warnings:[], words};
  if (q.sort){
    const keys = [];
    for (const [g, re] of Object.entries(q.sort.groups)){
      const rg = new RegExp(re.source, "g"); let m;
      while ((m = rg.exec(t))) keys.push({g, i:m.index});
    }
    keys.sort((a,b)=>a.i-b.i);
    const found = q.sort.items.map(it => { const m = it.match.exec(t); return m ? m.index : -1; });
    const firstItem = Math.min(...found.filter(i=>i>=0).concat([Infinity]));
    const trailing = keys.length && keys[0].i > firstItem;
    q.sort.items.forEach((it, k) => {
      const pos = found[k];
      if (pos < 0){ out.ideas.push({label:it.label, ok:false, hints:[`Add ${it.label.toLowerCase()} to your chart.`, `Say whether ${it.label.toLowerCase()} is active or passive.`]}); return; }
      const key = trailing ? keys.find(x=>x.i>pos) : [...keys].reverse().find(x=>x.i<pos);
      if (!key){ out.ideas.push({label:it.label, ok:false, hints:[`Say whether ${it.label.toLowerCase()} is active or passive.`]}); return; }
      if (key.g !== it.group){ out.ideas.push({label:it.label, ok:false, hints:[`Check ${it.label.toLowerCase()}. Ask: does it use energy?`]}); return; }
      out.ideas.push({label:it.label, ok:true});
    });
  } else {
    for (const idea of q.ideas) out.ideas.push({label:idea.label, ok:anyMatch(idea.match, t), hints:idea.hints});
  }
  for (const w of (q.watch||[])){
    if (w.unless && out.ideas.some(i=>i.label===w.unless && i.ok)) continue;
    if (w.match.test(t)) out.warnings.push(w.say);
  }
  out.done = words >= 3 && out.ideas.every(i=>i.ok) && out.warnings.length === 0;
  out.marks = q.sort ? [] : markPhrases(q, text);
  /* Less is more: compare the note's length to the model note. */
  const target = q.model ? norm(q.model).trim().split(" ").length : 0;
  out.target = target;
  out.wordy = target > 0 && words > Math.max(target * 1.6, target + 12);
  out.marks.sort((a,b) => a.start - b.start);
  return out;
}


/* ---------- Phrase marking ----------
   Works on words and phrases, not whole sentences, because spoken notes often
   have no periods. Every checked note is marked:
     key   = words that earn a key idea (plus the few small words around them)
     wrong = a phrase that matches a known mistake (a watch) for this prompt
     extra = a run of words that earns no key idea and is mostly off-topic:
             its words are not in the prompt, clue, or sample note, or it is
             filler ("um", "I think", "kind of").
   Anything else is left plain. Positions are in the original text. */
const STOP = new Set("a an the and or but so to of in on at by for with from as is are was were be been it its this that these those there their they them he she we you i my me our your not no do does did can will just very also then than into onto out up down over under about like really".split(" "));
const CONNECT = new Set(["and","but","so","because","while","which","then","also","plus"]);
const STARTS = new Set(["i","we","you","my","our","so","um","uh","basically"]); /* words that start a new thought */
const FILLER = /\b(um+|uh+|basically|you know|i think|i guess|kind of|sort of|whatever|really cool|we (talked|learned|did) (about )?(this|that)|in class|today|yesterday|on (monday|tuesday|wednesday|thursday|friday))\b/;
function gre(r){ return new RegExp(r.source, r.flags.indexOf("g") >= 0 ? r.flags : r.flags + "g"); }
function spansOf(r, t){
  const out = [], g = gre(r); let m;
  while ((m = g.exec(t))){ out.push([m.index, m.index + m[0].length]); if (!m[0].length) g.lastIndex++; }
  return out;
}
function vocabOf(q){
  const src = [q.prompt, q.guide, q.model, q.heading].concat((q.ideas||[]).map(i => i.label)).join(" ");
  return new Set(norm(src).trim().split(" ").filter(w => w.length > 2).map(w => w.slice(0, 5)));
}
function markPhrases(q, text){
  const nm = normMap(text), tw = [], re = /[a-z0-9']+/g; let m;
  while ((m = re.exec(nm.t))){
    const ns = m.index, ne = m.index + m[0].length;
    tw.push({w:m[0], ns, ne, s:nm.map[ns], e:nm.map[ne - 1] + 1, kind:"", labels:[]});
  }
  if (tw.length < 3) return [];
  /* sentence/clause breaks between words */
  tw.forEach((x, i) => { x.brk = i > 0 && /[.!?;:,\n]/.test(text.slice(tw[i-1].e, x.s)); });
  const hit = (a, b, fn) => tw.forEach(x => { if (x.ne > a && x.ns < b) fn(x); });
  /* key words */
  (q.ideas||[]).forEach(idea => idea.match.forEach(r => spansOf(r, nm.t).forEach(([a, b]) =>
    hit(a, b, x => { x.kind = "key"; if (x.labels.indexOf(idea.label) < 0) x.labels.push(idea.label); }))));
  /* glue: up to 3 small words between or just before/after key words, same clause */
  const sameClause = (i, j) => { for (let k = Math.min(i, j) + 1; k <= Math.max(i, j); k++) if (tw[k].brk) return false; return true; };
  const keys = tw.map((x, i) => x.kind === "key" ? i : -1).filter(i => i >= 0);
  for (let k = 0; k + 1 < keys.length; k++){
    const i = keys[k], j = keys[k + 1];
    if (j - i > 1 && j - i <= 4 && sameClause(i, j)) for (let z = i + 1; z < j; z++){ tw[z].kind = "key"; tw[z].labels = tw[i].labels; }
  }
  const vocab = vocabOf(q);
  const glueOk = w => STOP.has(w) || /ly$/.test(w) || (w.length > 2 && vocab.has(w.slice(0, 5)));
  keys.forEach(i => {
    for (let z = i - 1, n = 0; z >= 0 && n < 3 && !tw[z].kind && sameClause(z, i); z--, n++){ if (CONNECT.has(tw[z].w) || STARTS.has(tw[z].w) || !glueOk(tw[z].w)) break; tw[z].kind = "key"; tw[z].labels = tw[i].labels; }
    for (let z = i + 1, n = 0; z < tw.length && n < 3 && !tw[z].kind && sameClause(i, z); z++, n++){ if (CONNECT.has(tw[z].w) || STARTS.has(tw[z].w) || !glueOk(tw[z].w)) break; tw[z].kind = "key"; tw[z].labels = tw[i].labels; }
  });
  /* wrong: watch matches, widened to their clause (stops at a break or connector, max 6 words each way) */
  const ideasOk = new Set((q.ideas||[]).filter(i => anyMatch(i.match, nm.t)).map(i => i.label));
  (q.watch||[]).forEach(w => {
    if (w.unless && ideasOk.has(w.unless)) return;
    spansOf(w.match, nm.t).forEach(([a, b]) => {
      const idx = tw.map((x, i) => (x.ne > a && x.ns < b) ? i : -1).filter(i => i >= 0);
      if (!idx.length) return;
      let lo = idx[0], hi = idx[idx.length - 1];
      for (let n = 0; lo > 0 && n < 6 && !tw[lo].brk && !CONNECT.has(tw[lo - 1].w); n++) lo--;
      for (let n = 0; hi + 1 < tw.length && n < 6 && !tw[hi + 1].brk && !CONNECT.has(tw[hi + 1].w); n++) hi++;
      for (let z = lo; z <= hi; z++){ tw[z].kind = "wrong"; tw[z].say = w.say; }
    });
  });
  /* extra: runs of unmarked words, split at breaks */
  /* the prompt's own content words, minus its first word (the command: Describe, State...) */
  const pwords = norm(q.prompt).trim().split(" ").slice(1).filter(w => w.length > 2 && !STOP.has(w)).map(w => w.slice(0, 5));
  const pvocab = new Set(pwords);
  const runs = []; let cur = null;
  tw.forEach((x, i) => {
    if (x.kind){ cur = null; return; }
    if (!cur || x.brk){ cur = []; runs.push(cur); }
    cur.push(i);
  });
  runs.forEach(run => {
    const ws = run.map(i => tw[i].w), phrase = " " + ws.join(" ") + " ";
    const content = ws.filter(w => w.length > 2 && !STOP.has(w));
    const off = content.filter(w => !vocab.has(w.slice(0, 5)));
    const filler = FILLER.test(phrase);
    /* repeats the question: 4+ words, mostly the prompt's own words, earns nothing */
    const hasP = new Set(content.map(w => w.slice(0, 5)).filter(w => pvocab.has(w)));
    const verb = norm(q.prompt).trim().split(" ")[0];
    const meta = (verb.length > 2 && phrase.indexOf(" " + verb) >= 0) || /\b(an example of how|this question|the question|is about|talks? about|we have to|asks? (us|you))\b/.test(phrase);
    if (ws.length >= 4 && meta && pvocab.size >= 2 && hasP.size >= 2 && hasP.size / pvocab.size >= 0.7){
      let hi = run.length - 1;
      const next = tw[run[hi] + 1];
      if (next && next.kind === "key") for (let n = 0; n < 2 && hi > 0 && (STOP.has(tw[run[hi]].w) || pvocab.has(tw[run[hi]].w.slice(0, 5))); n++) hi--;
      if (hi >= 3) { for (let k = 0; k <= hi; k++){ tw[run[k]].kind = "extra"; tw[run[k]].why = "repeat"; } }
      return;
    }
    const allOff = content.length >= 1 && off.length === content.length;
    if (!(allOff || (content.length >= 2 && off.length >= 2 && off.length / content.length >= 0.5) || (filler && off.length >= 1) || (filler && !content.length))) return;
    /* keep on-topic words at either end of the run (e.g. "...today at equilibrium") */
    const onTopic = w => (w.length > 2 && vocab.has(w.slice(0, 5)) && !FILLER.test(" " + w + " "));
    let lo = 0, hi = run.length - 1;
    const trim = (from, step) => { let k = from, seen = false;
      while (k >= 0 && k < run.length){ const w = tw[run[k]].w;
        if (onTopic(w)) seen = true; else if (!STOP.has(w) || STARTS.has(w)) break;
        k += step; }
      return seen ? k : from; };
    hi = trim(hi, -1); lo = trim(lo, 1);
    for (let k = lo; k <= hi; k++) tw[run[k]].kind = "extra";
  });
  /* merge words into spans */
  const marks = [];
  tw.forEach(x => {
    if (!x.kind) return;
    const last = marks[marks.length - 1];
    if (last && last.kind === x.kind && last._i === tw.indexOf(x) - 1){
      last.end = x.e; last._i++;
      if (x.kind === "key") x.labels.forEach(l => { if (last.labels.indexOf(l) < 0) last.labels.push(l); });
      if (x.why) last.why = x.why;
    } else marks.push({start:x.s, end:x.e, kind:x.kind, labels:x.labels.slice(), say:x.say, why:x.why, _i:tw.indexOf(x)});
  });
  marks.forEach(k => delete k._i);
  return marks;
}

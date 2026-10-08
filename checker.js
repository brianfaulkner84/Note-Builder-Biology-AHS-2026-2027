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
  /* Mark sentences: "wrong" holds a common mistake (a watch), "extra" matches
     none of this note's key ideas. Positions are in the original text. */
  const sents = sentencesOf(text);
  out.marks = [];
  for (const w of (q.watch||[])){
    if (w.unless && out.ideas.some(i=>i.label===w.unless && i.ok)) continue;
    const m = w.match.exec(t);
    if (!m) continue;
    out.warnings.push(w.say);
    let hit = sents.filter(x => w.match.test(norm(x.text)));
    if (!hit.length){ const nm = normMap(text), pos = nm.map[Math.min(m.index + 1, nm.map.length - 1)]; hit = sents.filter(x => pos >= x.start && pos < x.end); }
    hit.forEach(x => { if (!out.marks.some(k => k.start === x.start)) out.marks.push({start:x.start, end:x.end, kind:"wrong", say:w.say}); });
  }
  out.done = words >= 3 && out.ideas.every(i=>i.ok) && out.warnings.length === 0;
  if (!out.done && !q.sort && q.ideas && sents.length >= 2){
    const pats = [].concat.apply([], q.ideas.map(i => i.match));
    sents.forEach(x => {
      const nt = norm(x.text);
      if (nt.trim().split(" ").length < 3 || out.marks.some(k => k.start === x.start)) return;
      if (!pats.some(r => r.test(nt))) out.marks.push({start:x.start, end:x.end, kind:"extra"});
    });
  }
  out.marks.sort((a,b) => a.start - b.start);
  return out;
}


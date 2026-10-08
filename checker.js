/* Rule-based note checker. No network, no AI. Shared by index.html and test.html. */
function norm(s){
  return " " + String(s).toLowerCase().replace(/₂/g,"2").replace(/[’‘`]/g,"'")
    .replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim() + " ";
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
  return out;
}


// Usage: node validate.js <uid>   (reads watches/<uid>.json)
// File format: { "<n>": [ { "re": "regex source (lowercase, runs on normalized text)", "say": "Check that. ...",
//                           "unless": "optional idea label", "hit": ["student note that SHOULD be flagged", ...],
//                           "miss": ["correct student note that must NOT be flagged", ...] } ] }
const fs=require('fs'), vm=require('vm'); const R=require('path').resolve(__dirname,'../..')+'/';
const uid=process.argv[2]; const ctx={console}; ctx.window=ctx; vm.createContext(ctx);
for (const f of ['patterns.js','content/catalog.js','checker.js',`content/${uid}/unit.js`]) vm.runInContext(fs.readFileSync(R+f,'utf8'),ctx);
const u=ctx.UNITS.find(x=>x.id===uid); const add=JSON.parse(fs.readFileSync(__dirname+`/${uid}.json`,'utf8'));
let bad=0, n=0;
const fires=(q,w,text)=>{ const t=ctx.norm(text); if (w.unless){ const idea=(q.ideas||[]).find(i=>i.label===w.unless); if(!idea) return 'BADUNLESS'; if (ctx.anyMatch(idea.match,t)) return false; } return new RegExp(w.re).test(t); };
for (const [k,list] of Object.entries(add)){
  const q=u.questions.find(x=>x.n===+k); if(!q){ console.log('no question',k); bad++; continue; }
  for (const w of list){ n++;
    try{ new RegExp(w.re); }catch(e){ console.log(k,'bad regex',w.re); bad++; continue; }
    if (!/^Check that\./.test(w.say)) { console.log(k,'say must start "Check that."'); bad++; }
    if (fires(q,w,q.model)){ console.log(k,'FIRES ON MODEL NOTE:',w.re); bad++; }
    if (fires(q,w,q.model)==='BADUNLESS'){ console.log(k,'unless label not found:',w.unless); bad++; }
    for (const h of (w.hit||[])) if (fires(q,w,h)!==true){ console.log(k,'should hit but does not:',w.re,'|',h); bad++; }
    for (const m of (w.miss||[])) if (fires(q,w,m)){ console.log(k,'false alarm:',w.re,'|',m); bad++; }
    if (!(w.hit||[]).length || !(w.miss||[]).length){ console.log(k,'needs at least one hit and one miss example'); bad++; }
    // existing watches on same prompt must not duplicate
  }
}
console.log(`${uid}: ${n} new watches, ${bad} problems`); process.exit(bad?1:0);

// node insert.js <uid> : appends watches from watches/<uid>.json into content/<uid>/unit.js
const fs=require('fs'); const uid=process.argv[2]; const R=require('path').resolve(__dirname,'../..')+'/';
const p=R+`content/${uid}/unit.js`; let s=fs.readFileSync(p,'utf8'); const add=JSON.parse(fs.readFileSync(__dirname+`/${uid}.json`,'utf8'));
const lit=w=>`W(/${w.re.replace(/(^|[^\\])\//g,'$1\\/')}/, ${JSON.stringify(w.say)}${w.unless?', '+JSON.stringify(w.unless):''})`;
for (const [k,list] of Object.entries(add)){
  const m=new RegExp(`\\{ n:${k}, `).exec(s); if(!m) throw new Error(uid+' no q '+k);
  const rest=s.slice(m.index+m[0].length); const nx=/\{ n:\d+, /.exec(rest); const end=m.index+m[0].length+(nx?nx.index:rest.length);
  let block=s.slice(m.index,end); const items=list.map(lit).join(',\n      ');
  if (block.includes('watch:[')){ const i=block.indexOf('watch:[')+7; block=block.slice(0,i)+'\n      '+items+','+block.slice(i); }
  else { const k2=block.indexOf('    ideas:')>=0?block.indexOf('    ideas:'):block.indexOf('    sort:'); block=block.slice(0,k2)+'    watch:[\n      '+items+' ],\n'+block.slice(k2); }
  s=s.slice(0,m.index)+block+s.slice(end);
}
fs.writeFileSync(p,s); console.log(uid,'inserted');

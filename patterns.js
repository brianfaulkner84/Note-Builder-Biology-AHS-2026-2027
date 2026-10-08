/* Shared registry and reusable speech-friendly patterns.
   Every unit file adds itself with UNITS.push({...}).
   Patterns run on lowercase text with punctuation removed. */
window.UNITS = window.UNITS || [];

/* High-to-low and low-to-high direction phrases */
var HL = /(high|more|crowd|great|lots|bigger|larger)\w*\b.{0,45}\bto\b.{0,30}\b(low|less|fewer|lesser|not as|un ?crowd|small)/;
var LH = /(low|less|few|small)\w*\b.{0,45}\bto\b.{0,30}\b(high|more|great|crowd|many|lots|bigger)/;
var PHILIC = /hydro ?(ph|f)(i|e|ee|y)l|water ?lov|loves? (the )?water|likes? (the )?water|attract\w* to water|(?<!non )\bpolar/;
var PHOBIC = /hydro ?(ph|f)o ?b|water ?(fear|hat|scar)|(fears?|hates?|avoids?|afraid of|scared of) (the )?water|away from (the )?water|non ?polar|repel\w* water/;

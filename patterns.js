/* Shared registry and reusable speech-friendly patterns.
   Every unit file adds itself with UNITS.push({...}).
   Patterns run on lowercase text with punctuation removed. */
window.UNITS = window.UNITS || [];

/* High-to-low and low-to-high direction phrases */
var HL = /(high|more|crowd|great|lots|bigger|larger)\w*\b.{0,45}\bto\b.{0,30}\b(low|less|fewer|lesser|not as|un ?crowd|small)/;
var LH = /(low|less|few|small)\w*\b.{0,45}\bto\b.{0,30}\b(high|more|great|crowd|many|lots|bigger)/;
var PHILIC = /hydro ?(ph|f)(i|e|ee|y)l|water ?lov|loves? (the )?water|likes? (the )?water|attract\w* to water|(?<!non )\bpolar/;
var PHOBIC = /hydro ?(ph|f)o ?b|water ?(fear|hat|scar)|(fears?|hates?|avoids?|afraid of|scared of) (the )?water|away from (the )?water|non ?polar|repel\w* water/;

/* ---------- authoring helpers (used by content/<id>/unit.js files) ----------
   I(label, patterns, hint1, hint2)  one key idea
   W(pattern, message, unlessLabel)  one common-mistake check
   near(a, b, n)    a, then b within n characters
   either(a, b, n)  a and b within n characters, in either order
   lacks(x)         a "not" word, then x within 3 words
   NEG              words that mean "not"                                   */
function _src(x){ return x instanceof RegExp ? x.source : String(x); }
function _re(x){ return x instanceof RegExp ? x : new RegExp(x); }
function near(a, b, n){ return new RegExp("(?:" + _src(a) + ").{0," + (n||50) + "}(?:" + _src(b) + ")"); }
function either(a, b, n){ n = n || 50; return new RegExp("(?:" + _src(a) + ").{0," + n + "}(?:" + _src(b) + ")|(?:" + _src(b) + ").{0," + n + "}(?:" + _src(a) + ")"); }
function I(label, match, h1, h2){ return {label: label, match: [].concat(match).map(_re), hints: [h1, h2].filter(Boolean)}; }
function W(match, say, unless){ return {match: _re(match), say: say, unless: unless}; }
var NEG = "(?:no|not|never|none|without|lacks?|missing|doesn.?t|don.?t|does not|do not|can.?t|cannot|isn.?t|aren.?t|won.?t)";
/* lacks(x): a "not" word, up to 3 words, then x. Example: lacks(/nucle/) matches "does not have a nucleus". */
function lacks(x){ return new RegExp("\\b" + NEG + "(?: [\\w']+){0,3} ?(?:" + _src(x) + ")"); }

/* Speech-friendly spellings of common biology terms. */
var T = {
  nucleus: /nucle|new ?clear/,
  membrane: /membrane/,
  cytoplasm: /cyto ?plasm|sito ?plasm|site ?o ?plasm|cyto ?plaz/,
  ribosome: /ribo ?som|rybo ?som|ribozome/,
  er: /\ber\b|\be r\b|endoplasm|reticul/,
  golgi: /golgi|goalie|goal ?g|golgie|gold ?g/,
  vesicle: /vesic|vessel/,
  mito: /mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b/,
  chloro: /chloro ?plast|chlora ?plast|clor[oa] ?plast/,
  chlorophyll: /chloro ?phyl|chlora ?phyl|chloro ?fil|clor[oa] ?fil/,
  vacuole: /vacu/,
  lysosome: /lyso ?som|liso ?som|lice ?o ?som/,
  centriole: /centri ?ol|centrial|sentri ?ol/,
  pro: /pro ?kary|pro ?carr|pro ?cary|procar/,
  eu: /(eu|you|u) ?kary|(eu|you|u) ?carr|eucar|ukar/,
  glycolysis: /glyco ?lys|gly ?co ?lys|glycol|glide ?co/,
  krebs: /krebs|kreb|crebs|\bcreb|citric/,
  etc: /electron transport|\betc\b|\be t c\b/,
  atp: /\batp\b|\ba t p\b|adenosine tri/,
  adp: /\badp\b|\ba d p\b|adenosine di/,
  nadh: /\bnad ?h\b|\bn a d h\b/,
  nadph: /\bnadp ?h\b|\bn a d p h\b/,
  nad: /\bnad\b(?! ?h\b)|\bn a d\b(?! (h|p)\b)|nad plus/,
  nadp: /\bnadp\b(?! ?h\b)|\bn a d p\b(?! h\b)|nadp plus/,
  co2: /carbon dioxide|\bco ?2\b|\bc o 2\b|\bco two\b/,
  o2: /oxygen|\bo ?2\b|\bo two\b/,
  water: /water|\bh ?2 ?o\b/,
  glucose: /glucose|sugar|c ?6 ?h ?12 ?o ?6/,
  photo: /photo ?synth|photo ?sin/,
  resp: /respiration/,
  pyruvate: /pyruv|pyro ?vic|pie ?ru ?vic/,
  lactic: /lactic|lactate/,
  alcohol: /alcohol|ethanol/,
  alveoli: /alveol|al ?vee ?ol|alvi ?ol/,
  diaphragm: /diaphra|dia ?fram|die ?a ?fram/,
  trachea: /trache|tray ?kee|trach/,
  atrium: /atri(um|a)|a ?tree ?(um|a)/,
  ventricle: /ventric/,
  artery: /arter/,
  vein: /\bveins?\b|\bvein/,
  capillary: /capillar|cap ?ill/
};

/* ==================================================================
   CATALOG: the quiz and test menu students pick from.
   To add a quiz or test:
     1. Make a folder content/<id>/ with a unit.js inside
        (copy content/u2q2/unit.js as a starting point).
     2. Add one line below with the same id.
   Fields:
     id      folder name, also the direct link: ...#<id>
     unit    menu group heading
     title   what students see
     type    "Quiz" or "Test"
     show    false hides it from the menu (the direct link still works)
     paste   optional: true allows pasting on this quiz (overrides SETTINGS)
     v       bump this number after editing a unit.js so students get
             the new version instead of an old cached copy
   ================================================================== */
/* Settings for every quiz. allowPaste:false blocks pasting into the note box,
   so students must say or type their notes. To allow pasting on one quiz only,
   add paste:true to that quiz's line below. */
window.SETTINGS = { allowPaste: false };

window.CATALOG = [
  { id:"u1q1", unit:"Unit 1: Homeostasis and the Human Body", title:"Characteristics of Life",              type:"Quiz 1",   show:true, v:5 },
  { id:"u1q2", unit:"Unit 1: Homeostasis and the Human Body", title:"Homeostasis and the Respiratory System", type:"Quiz 2", show:true, v:5 },
  { id:"u1q3", unit:"Unit 1: Homeostasis and the Human Body", title:"Circulatory System",                   type:"Quiz 3",   show:true, v:5 },
  { id:"u1n",  unit:"Unit 1: Homeostasis and the Human Body", title:"Food and Nutrition",                   type:"Ch. 30.2 Quiz", show:true, v:5 },
  { id:"u1t",  unit:"Unit 1: Homeostasis and the Human Body", title:"Homeostasis and the Human Body",       type:"Unit 1 Test", show:true, v:5 },
  { id:"u2q1", unit:"Unit 2: Cells and Energy", title:"Cells and Organelles",                            type:"Quiz 1", show:true, v:5 },
  { id:"u2q2", unit:"Unit 2: Cells and Energy", title:"Cell Membrane and Transport",                     type:"Quiz 2", show:true, v:5 },
  { id:"u2q3", unit:"Unit 2: Cells and Energy", title:"Energy, Photosynthesis, and Respiration",         type:"Quiz 3", show:true, v:5 },
  { id:"u2q4", unit:"Unit 2: Cells and Energy", title:"Glycolysis, Krebs Cycle, ETC, and Fermentation", type:"Quiz 4", show:true, v:5 },
];

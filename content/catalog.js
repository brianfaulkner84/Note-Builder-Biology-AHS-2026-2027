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
     v       bump this number after editing a unit.js so students get
             the new version instead of an old cached copy
   ================================================================== */
window.CATALOG = [
  { id:"u2q2", unit:"Unit 2: Cells", title:"Cell Membrane and Transport", type:"Quiz 2", show:true, v:1 },
];

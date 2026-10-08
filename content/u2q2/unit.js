/* ==================================================================
   UNIT FILE: Unit 2, Quiz 2 (Cell Membrane and Transport).
   To add a quiz or test: copy this folder to content/<new id>/, change
   the id, title, and questions in unit.js, then add one line to
   content/catalog.js. The id here must match the folder name.

   Each question:
     n        number shown to students (matches the notebook guide)
     heading  notebook heading
     prompt   the guide prompt (first word = Bloom verb, shown bold)
     guide    guiding question (shown only when the student taps Clue)
     where    Slide / Book tag (shown only when the student taps Where to look)
     draw     optional: adds a blank drawing box on the printed sheet
     model    teacher model answer (never shown to students)
     ideas    key ideas the note must contain. Each idea:
                label  short name shown to the student (no answer in it)
                match  list of patterns; any one counts
                hints  nudges, gentle first, then more specific
     sort     optional (sorting prompts): groups + items, see Q17
     watch    optional: common mistakes. If "match" hits (and the idea
              named in "unless" is not already found), "say" is shown.
   Patterns run on lowercase text with punctuation removed.
   ================================================================== */

UNITS.push({
  id: "u2q2",
  title: "Cell Membrane and Transport",
  subtitle: "Unit 2, Quiz 2 notes",
  source: "Cell Membrane and Transport slideshow; Chapter 7, Lessons 7.2 and 7.3",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and wrote the key-idea checks and hints from the instructor's Cell Membrane and Transport notebook guide, slideshow, and Chapter 7 of the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"The Cell Membrane", prompt:"State the main job of the cell membrane.",
    guide:"What does the membrane control?", where:"Slide 5 | Book: Cell Membranes, p. 204",
    model:"The cell membrane regulates (controls) what enters and leaves the cell.",
    ideas:[
      {label:"The job", match:[/regulat|control|decid|choos|gate ?keep|filter|manag|in charge|guard/],
        hints:["What job does the membrane do at the border of the cell?","Slide 5 calls it the gatekeeper. What does a gatekeeper do?"]},
      {label:"In and out", match:[/\b(enter\w*|in|into|come\w*|coming|get\w* in)\b.{0,40}\b(leav\w*|out|exit\w*)\b/,/\b(leav\w*|out|exit\w*)\b.{0,40}\b(enter\w*|in|into)\b/],
        hints:["It controls what does what?","Things cross the border in two directions. Name both."]}
    ]},
  { n:2, heading:"The Cell Membrane", prompt:"Label a drawing of a phospholipid, the main molecule of the membrane.",
    guide:"Which part loves water (polar)? Which part fears water (non-polar)?", where:"Slide 6 | Book: Cell Membranes, p. 204",
    draw:"Draw a phospholipid here. Label the head and the tails.",
    model:"A phospholipid has a hydrophilic (water-loving, polar) head and two hydrophobic (water-fearing, non-polar) fatty acid tails.",
    ideas:[
      {label:"Top part", match:[/\bheads?\b/], hints:["Name the round top part of the phospholipid.","Look at the top of the drawing on Slide 6. What is it called?"]},
      {label:"Top part and water", match:[PHILIC], hints:["How does the top part feel about water?","Slide 6 memory trick: -philic means ____."]},
      {label:"Bottom part", match:[/\btails?\b/], hints:["Name the long bottom parts of the phospholipid.","Look at the bottom of the drawing on Slide 6. What are those called?"]},
      {label:"Bottom part and water", match:[PHOBIC], hints:["How do the bottom parts feel about water?","Slide 6 memory trick: -phobic means ____."]}
    ]},
  { n:3, heading:"The Cell Membrane", prompt:"Explain why phospholipids form two layers with the tails in the middle.",
    guide:"Where is the water? Where do the tails want to be?", where:"Slide 7 | Book: Cell Membranes, p. 204",
    model:"There is water outside the cell and water inside the cell (cytoplasm). The water-loving heads face the water on both sides. The water-fearing tails hide in the middle, away from the water.",
    ideas:[
      {label:"Where the water is", match:[/both sides|inside and (the )?outside|outside and (the )?inside|in and out|(inside|cytoplasm|in the cell)\b.{0,50}\boutside|outside\b.{0,50}\b(inside|cytoplasm)/],
        hints:["Where is there water around a cell?","Think about inside the cell AND outside the cell."]},
      {label:"The heads", match:[/\bheads?\b.{0,50}\b(water|fac\w*|out\w*|toward|touch\w*|both)/, PHILIC],
        hints:["What do the heads do?","How do the heads feel about water? Which way do they point?"]},
      {label:"The tails", match:[/\btails?\b.{0,50}\b(hid\w*|middle|inside|in between|away|avoid\w*|cent(er|re)|together|in)\b/, PHOBIC],
        hints:["Where do the tails go, and why?","The tails do not like water. Where can they hide from it?"]}
    ]},
  { n:4, heading:"The Cell Membrane", prompt:"Describe the fluid mosaic model.",
    guide:"What does \"fluid\" mean here? What does \"mosaic\" mean here?", where:"Slide 8 | Book: Cell Membranes, pp. 204 to 205",
    model:"Fluid means the parts are not locked in place; they move and drift around. Mosaic means the membrane is made of many different pieces: phospholipids, proteins, carbohydrates, and cholesterol.",
    ideas:[
      {label:"Fluid", match:[/\bmov|drift|float|flow|not (locked|stuck|fixed|still)|shift|slid|wiggl|switch places|change places/],
        hints:["What does \"fluid\" tell you about the parts?","Slide 8 compares the parts to boats floating on a pond. What do boats do?"]},
      {label:"Mosaic", match:[/(many|different|lots of|lot of|various|several|mix\w*|bunch of|variety)\b.{0,30}\b(piece|part|thing|molecule|kind|type|tile|stuff|component)/, /made (up )?of (many|different|lots)/],
        hints:["What is a mosaic picture made of?","Think of a picture made of tiles. One kind of tile, or many kinds?"]}
    ],
    watch:[{match:/liquid/, unless:"Fluid", say:"Fluid here is not about being a liquid. What do the parts of the membrane do?"}]},
  { n:5, heading:"The Cell Membrane", prompt:"Identify what cholesterol does, and where carbohydrate tags are found.",
    guide:"How does cholesterol help the membrane? Are the tags inside or outside?", where:"Slide 9 | Book: not in the textbook; use the slide",
    model:"Cholesterol stabilizes the membrane. It keeps it from getting too runny or too stiff and makes it heat resistant. Carbohydrate tags are on the outside of the cell, where they work as ID tags.",
    ideas:[
      {label:"Cholesterol", match:[/stabil|stable|steady|strong|stiff|runny|heat|firm|support|sturdy|hold\w* (it )?together/],
        hints:["What does cholesterol do for the membrane?","Read the cholesterol box on Slide 9."]},
      {label:"Where the tags are", match:[/outside|outer|exterior|out side|on the out/],
        hints:["Are the carbohydrate tags inside or outside the cell?","Look at the labeled membrane picture on Slide 13."]}
    ],
    watch:[{match:/\binside\b/, unless:"Where the tags are", say:"Check where the carbohydrate tags are. Look at Slide 13."}]},
  { n:6, heading:"Selectively Permeable", prompt:"Define selectively permeable, and give one everyday example.",
    guide:"What gets through and what does not? What object at home works the same way?", where:"Slide 10 | Book: Cell Membranes, p. 205",
    model:"Selectively permeable means the membrane lets some things pass through but blocks others. Example: a colander lets water through but keeps the pasta in.",
    ideas:[
      {label:"What it means", match:[/\bsome\b.{0,50}\b(not|others?|block\w*|keep\w*|can.?t|cannot|don.?t|stop\w*|out)\b/, /certain (things|substances|molecules|stuff)/, /lets? (only )?(some|certain|small)/, /only (some|certain|small)/, /not (everything|all|anything)/, /pick\w* |choos\w*/],
        hints:["Does everything get through the membrane?","Finish this: some things ____, but others ____."]},
      {label:"Everyday example", match:[/colander|strainer|filter|screen|tea ?bag|\bnet\b|sieve|mesh|sift|mask|sponge|paper towel|cheese ?cloth|fence/],
        hints:["Name an object at home that lets some things through but not others.","Think about the kitchen, or a window in the summer."]}
    ]},
  { n:7, heading:"Selectively Permeable", prompt:"Explain why charged particles and polar molecules need help to cross.",
    guide:"What is the middle of the bilayer like? Why does that block them?", where:"Slide 11 | Book: Facilitated Diffusion, p. 209",
    model:"The middle of the bilayer is made of hydrophobic (non-polar, oily) tails. It pushes charged and polar molecules away, so they need a transport protein to get across.",
    ideas:[
      {label:"The middle", match:[/hydro ?(ph|f)o ?b|non ?polar|\boil|\bfat|water ?fear|\btails?\b/],
        hints:["What is the middle of the bilayer made of?","Think back to note 2. What part sits in the middle, and how does it feel about water?"]},
      {label:"What happens to them", match:[/block|push\w*.{0,40}\baway|push\w* (them )?out|repel|stop|keep\w* (them )?out|can.?t (get|go|pass|cross|fit)|cannot|won.?t|not able|unable|doesn.?t let|don.?t let/],
        hints:["What does the middle do to charged particles?","Do they slip through, or does something happen to them?"]},
      {label:"The help", match:[/protein|channel|carrier|helper/],
        hints:["What gives them a way across?","Read the \"Also know\" line on Slide 11."]}
    ]},
  { n:8, heading:"Passive Transport", prompt:"Distinguish active transport from passive transport.",
    guide:"What one question decides which group a process belongs in?", where:"Slide 15 | Book: Passive Transport, p. 208; Active Transport, p. 212",
    model:"The deciding question is energy. Passive transport uses no energy and moves high to low. Active transport uses energy (ATP) and moves low to high.",
    ideas:[
      {label:"The deciding question", match:[/energy|\batp\b/],
        hints:["What does the cell spend in one group but not the other?","Slide 15: coasting downhill on a bike vs. pedaling uphill."]},
      {label:"Passive", match:[/\bpassive\b.{0,60}\b(no|not|doesn.?t|does not|without|free|zero|none|never)\b/, /(no|without|zero|doesn.?t (use|need|require|take)|does not (use|need|require|take)) (any )?(energy|atp).{0,40}\bpassive/],
        hints:["Does passive transport cost the cell energy?","Passive is like coasting downhill. Do you need to pedal?"]},
      {label:"Active", match:[/\bactive\b.{0,60}\b(uses?|using|needs?|requires?|costs?|takes?|spends?|with|has to|atp)\b/, /\b(uses?|needs?|requires?|costs?|takes?) (energy|atp)\b.{0,40}\bactive\b/, /\bactive\b (transport )?(does|is the one)/],
        hints:["Does active transport cost the cell energy?","Active is like pedaling uphill. What does that take?"]}
    ],
    watch:[
      {match:/\bactive\b (transport )?(doesn.?t|does not|don.?t) (use|need|require)/, say:"Check active transport. Is it the free one, or the one that costs energy?"},
      {match:/\bpassive\b (transport )?(uses?|needs?|requires?|costs?) (energy|atp|some|a lot)/, say:"Check passive transport. Is it the free one, or the one that costs energy?"}
    ]},
  { n:9, heading:"Passive Transport", prompt:"Define diffusion.",
    guide:"Which way do particles move? What decides the direction? How does oxygen get in?", where:"Slide 16 | Book: Diffusion, p. 208",
    model:"Diffusion is when particles move from high concentration to low concentration. Concentration decides the direction. It needs no energy. Oxygen gets into cells by diffusion.",
    ideas:[
      {label:"Which way", match:[HL], hints:["Which way do particles move during diffusion?","Air freshener sprays in one corner. Where does it start, and where does it spread?"]},
      {label:"What sets the direction", match:[/concentrat/], hints:["What word tells you how crowded a substance is?","Slide 16 defines this word in the first box."]},
      {label:"Oxygen example", match:[/oxygen|\bo ?(2|two)\b/], hints:["Add how oxygen gets into a cell.","Think about your lungs passing a gas into your blood."]}
    ],
    watch:[{match:LH, unless:"Which way", say:"Check your direction. Air freshener spreads from where to where?"}]},
  { n:10, heading:"Passive Transport", prompt:"Describe what molecules do at equilibrium.",
    guide:"Do they stop moving, or keep moving? Which way?", where:"Slide 17 | Book: Diffusion, p. 208",
    model:"At equilibrium the concentration is the same on both sides. The molecules do not stop. They keep moving back and forth across the membrane, the same number each way.",
    ideas:[
      {label:"Concentration", match:[/equal|same|balanc|\beven\b|evened/], hints:["What is true about the concentration on both sides?","At equilibrium, is one side more crowded than the other?"]},
      {label:"Do they stop?", match:[/keep\w* (on )?mov|still mov|continu|(don.?t|do not|never|doesn.?t|does not|not) stop|mov\w* (back and forth|both ways|across|around)|always mov/],
        hints:["Do the molecules stop moving, or not?","Slide 17 answers \"Do molecules stop?\" in big letters."]},
      {label:"Which way", match:[/back and forth|both (ways|directions)|each way|in and out|either way|each direction/],
        hints:["Which direction do they move?","Picture people walking through a doorway at a busy time. Which way are they going?"]}
    ],
    watch:[{match:/(they|molecules|particles|it|everything) (all )?(stop|stops|stopped)\b|stop (moving|moves)/, unless:"Do they stop?", say:"Check that. Do the molecules really stop? Look at Slide 17."}]},
  { n:11, heading:"Passive Transport", prompt:"Explain how facilitated diffusion works.",
    guide:"What helps the molecules cross? Does it cost energy?", where:"Slide 18 | Book: Facilitated Diffusion, p. 209",
    model:"Molecules that cannot get through on their own (charged or large ones like glucose) cross through channel or carrier proteins. It still goes high to low, so it uses no energy. It is passive.",
    ideas:[
      {label:"The helper", match:[/protein|channel|carrier/], hints:["What helps the molecules cross the membrane?","\"Facilitate\" means to help. Slide 18 names two kinds of helpers."]},
      {label:"Energy", match:[/(no|without|zero|doesn.?t (use|need|require|take|cost)|does not (use|need|require|take|cost)|not (use|need)\w*|don.?t (use|need)) (any |extra )?(energy|atp)/, /\bpassive\b/, /\bfree\b/],
        hints:["Does facilitated diffusion cost the cell energy?","It is still a kind of diffusion. Is diffusion active or passive?"]}
    ],
    watch:[{match:/(uses?|needs?|requires?|takes?) (energy|atp)/, unless:"Energy", say:"Check the energy part. Is facilitated diffusion active or passive?"}]},
  { n:12, heading:"Passive Transport", prompt:"Define osmosis, and explain which way water moves.",
    guide:"Use the water-to-solute (\"stuff\") ratio. What does an aquaporin let in?", where:"Slide 19 | Book: Osmosis: An Example of Facilitated Diffusion, p. 210",
    model:"Osmosis is the diffusion of water across a selectively permeable membrane. Water moves from where the water-to-solute ratio is high to where it is low, so it moves toward the side with more solute. Aquaporins are water channel proteins that let water in.",
    ideas:[
      {label:"What moves", match:[/water/], hints:["What substance moves during osmosis?","Osmosis is the diffusion of one special substance. What is it?"]},
      {label:"How it moves", match:[/diffus|across|through|membrane|cross/], hints:["What kind of movement is it, and across what?","Osmosis is a type of a movement you already wrote about in note 9."]},
      {label:"Which way", match:[HL, /toward\w*.{0,25}(more|higher|most|lots of) (solute|stuff|salt|sugar)/, /(more|most) (solute|stuff|salt|sugar)/],
        hints:["Which way does water move? Use the water-to-\"stuff\" ratio.","Read the DIRECTION box on Slide 19. Does water move toward more \"stuff\" or less?"]},
      {label:"Aquaporin", match:[/aqua ?por|water channel/], hints:["What protein lets water through quickly?","Slide 19 names the water channel protein. It starts with \"aqua.\""]}
    ]},
  { n:13, heading:"Passive Transport", prompt:"Illustrate a cell in isotonic, hypertonic, and hypotonic solutions.",
    guide:"What does \"-tonic\" measure? Draw arrows for water. Does the cell swell, shrink, or stay the same?", where:"Slides 20 to 22 | Book: Osmotic Pressure, p. 211",
    draw:"Draw three cells: isotonic, hypertonic, hypotonic. Add arrows to show which way water moves.",
    model:"-Tonic is the amount of solute in the water around the cell. Isotonic: same solute, the cell stays the same. Hypertonic: more solute outside, water moves out and the cell shrinks. Hypotonic: less solute outside, water moves in and the cell swells.",
    ideas:[
      {label:"What -tonic means", match:[/solute|stuff|salt|sugar|concentrat|dissolved/], hints:["What does \"-tonic\" measure?","Read the top line in the box on Slide 20."]},
      {label:"Isotonic", match:[/iso ?tonic(?:(?!hyp).){0,60}(same|equal|no change|doesn.?t change|stays|nothing|balanc|normal|in and out)/, /(same|equal)(?:(?!hyp).){0,40}iso/],
        hints:["What happens to a cell in an isotonic solution?","\"Iso\" means same. Does the cell change size?"]},
      {label:"Hypertonic", match:[/hyper ?tonic(?:(?!hypo|iso).){0,60}(shrink|shrank|shrunk|shrivel|smaller|\bout\b|lose|loses|losing|leav|deflat|dry)/, /(shrink|shrivel)(?:(?!hypo|iso).){0,40}hyper/],
        hints:["In hypertonic, does water go in or out? What does the cell do?","\"Hyper\" means MORE solute outside. Water moves toward more solute."]},
      {label:"Hypotonic", match:[/hypo ?tonic(?:(?!hyper|iso).){0,60}(swell|swole|swollen|bigger|\bin\b|into|gain|burst|expand|pop|grow|bloat|larger)/, /(swell|burst)(?:(?!hyper|iso).){0,40}hypo/],
        hints:["In hypotonic, does water go in or out? What does the cell do?","\"Hypo\" means LESS solute outside. Water moves toward more solute."]}
    ],
    watch:[
      {match:/hyper ?tonic(?:(?!hypo|iso).){0,40}(swell|burst|bigger)/, say:"Check hypertonic. More solute is outside the cell. Which way does water move?"},
      {match:/hypo ?tonic(?:(?!hyper|iso).){0,40}(shrink|shrivel|smaller)/, say:"Check hypotonic. Less solute is outside the cell. Which way does water move?"}
    ]},
  { n:14, heading:"Passive Transport", prompt:"Predict what happens to plant and animal cells in pure water and in salty water.",
    guide:"Which cell can burst? What protects the other one?", where:"Slides 20 and 23 | Book: Osmotic Pressure, Figure 7-18, p. 211",
    model:"In pure water (hypotonic), water rushes in. The animal cell swells and can burst. The plant cell swells, but its cell wall keeps it from bursting. In salty water (hypertonic), water moves out and both cells shrink.",
    ideas:[
      {label:"Animal cell in pure water", match:[/animal(?:(?!plant).){0,70}(burst|pop|explod|lys|ruptur|break|bust)/, /(burst|pop|explod)(?:(?!plant).){0,40}animal/],
        hints:["What happens to an animal cell in pure water?","Pure water has no solute, so water rushes in. What can happen to a cell with nothing to stop it?"]},
      {label:"What protects the plant cell", match:[/\bwall/], hints:["What does a plant cell have that an animal cell does not?","Read the last line in the box on Slide 20."]},
      {label:"Salty water", match:[/(salt\w*|hyper ?tonic)(?:(?!pure|fresh).){0,90}(shrink|shrank|shrunk|shrivel|lose|loses|losing|\bout\b|smaller|dry|wilt)/, /(shrink|shrivel|shrunk)(?:(?!pure).){0,50}salt/],
        hints:["What happens to the cells in salty water?","Salty water has MORE solute outside. Which way does water move?"]}
    ],
    watch:[{match:/plant cells? (will |would |can )?(bursts?|pops?|explodes?)\b/, say:"Check the plant cell. What does it have that stops it from bursting?"}]},
  { n:15, heading:"Active Transport", prompt:"Explain how a protein pump works.",
    guide:"Which direction does it move molecules? What does it need to do that?", where:"Slide 26 | Book: Molecular Transport, p. 212",
    model:"A protein pump moves molecules from low concentration to high concentration, against the flow. It needs energy (ATP) to do that.",
    ideas:[
      {label:"Which way", match:[LH, /against/], hints:["Which direction does a pump move molecules?","Pumps go the opposite way from diffusion. Look back at note 9."]},
      {label:"What it needs", match:[/energy|\batp\b/], hints:["What does a pump need to move molecules that way?","Slide 26: the cell pays with its energy molecule."]}
    ],
    watch:[{match:HL, unless:"Which way", say:"Check the direction. Pumps go the opposite way from diffusion."}]},
  { n:16, heading:"Active Transport", prompt:"Compare endocytosis and exocytosis.",
    guide:"Which brings things in? Which sends things out? How does a cell get rid of bulk waste?", where:"Slide 27 | Book: Bulk Transport, p. 213",
    model:"Endocytosis brings large particles into the cell; the membrane folds around them. Exocytosis sends things out of the cell; a vesicle joins the membrane and releases them. Exocytosis is how the cell gets rid of bulk waste. Both use energy.",
    ideas:[
      {label:"Endocytosis", match:[/\bendo(?:(?!\bexo).){0,60}\b(in|into|inside|brings?|bringing|takes?|taking|swallow\w*|engulf\w*|enters?|eat\w*|absorb\w*|surround\w*)\b/],
        hints:["Does endocytosis bring things in or send them out?","Slide 27 shows a white blood cell doing this to bacteria."]},
      {label:"Exocytosis", match:[/\bexo(?:(?!\bendo).){0,60}\b(out|outside|releas\w*|sends?|sending|exports?|leaves?|get\w* rid|remov\w*|dumps?|secret\w*|push\w*|exit\w*)\b/],
        hints:["Does exocytosis bring things in or send them out?","Exit and exocytosis both start with \"ex.\""]},
      {label:"Bulk waste", match:[/\bexo(?:(?!\bendo).){0,90}waste/, /waste(?:(?!\bendo).){0,60}\bexo/],
        hints:["Which one does the cell use to get rid of bulk waste?","Read both boxes on Slide 27. Which one mentions waste?"]}
    ],
    watch:[
      {match:/\bendo\w*( is| means)?( when)?( the cell)? (sends?|puts?|pushes?|releases?|lets?) (\w+ )?out\b/, say:"Check endocytosis. Does it bring things in or send them out?"},
      {match:/\bexo\w*( is| means)?( when)?( the cell)? (brings?|takes?|lets?) (\w+ )?in\b/, say:"Check exocytosis. Does it bring things in or send them out?"}
    ]},
  { n:17, heading:"Active Transport", prompt:"Classify each type of transport as active or passive in a two-column chart.",
    guide:"Sort: diffusion, facilitated diffusion, osmosis, pumps, endocytosis, exocytosis.", where:"Slides 28 to 30 | Book: Passive Transport, p. 208; Active Transport, p. 212",
    draw:"Make a two-column chart here: Passive | Active.",
    model:"Passive: diffusion, facilitated diffusion, osmosis. Active: protein pumps, endocytosis, exocytosis.",
    sort:{ groups:{passive:/\bpassive\b/, active:/\bactive\b/},
      items:[
        {label:"Diffusion", match:/(?<!facilitated )(?<!facilitate )\bdiffusion/, group:"passive"},
        {label:"Facilitated diffusion", match:/facilitat\w* diffus/, group:"passive"},
        {label:"Osmosis", match:/osmos/, group:"passive"},
        {label:"Pumps", match:/pump/, group:"active"},
        {label:"Endocytosis", match:/\bendo/, group:"active"},
        {label:"Exocytosis", match:/\bexo/, group:"active"}
      ]}},
  { n:18, heading:"Active Transport", prompt:"Predict which processes stop if a cell runs out of ATP.",
    guide:"Which ones need energy? Which ones keep going without it?", where:"Slides 28 to 30 | Book: Active Transport, p. 212",
    model:"Without ATP, active transport stops: protein pumps, endocytosis, and exocytosis. Passive transport keeps going: diffusion, facilitated diffusion, and osmosis.",
    ideas:[
      {label:"What stops", match:[/(\bactive\b|pump|\bendo|\bexo)(?:(?!passive|keep|still|continu).){0,70}\b(stop\w*|quit\w*|end|can.?t|cannot|won.?t|fail\w*|shut\w*|not work\w*|no longer|break\w*)/, /\b(stop\w*|quit)\b(?:(?!passive).){0,50}(\bactive\b|pump|\bendo|\bexo)/],
        hints:["Which processes need ATP? What happens to them without it?","Look at your chart from note 17. Which column uses energy?"]},
      {label:"What keeps going", match:[/(passive|diffus|osmos)(?:(?!\bactive\b|pump).){0,70}\b(keep\w*|continu\w*|still|go(es)? on|fine|work\w*|unaffect\w*|not affect\w*|don.?t stop|doesn.?t stop|won.?t stop)/, /(keep\w*|continu\w*|still)\b(?:(?!\bactive\b).){0,50}(passive|diffus|osmos)/],
        hints:["Which processes keep going without ATP?","Look at your chart from note 17. Which column is free?"]}
    ],
    watch:[{match:/passive (transport )?(would |will )?(stops?|quits?)\b/, say:"Check passive transport. Does it need ATP?"}]}
  ]
});

/* ==================================================================
   UNIT FILE: Unit 2, Quiz 1 (Cells and Organelles).
   Source: Ch7_Cells_Organelles_Study_Guide.pptx (notebook guide, 30 prompts),
   Intro to Cells and Organelles slideshows, Chapter 7 Lessons 7.1 and 7.2.
   Fields and helpers are explained in content/u2q2/unit.js and patterns.js.
   ================================================================== */
(function(){
var SOME_PASS = [/\bsome\b.{0,50}\b(not|others?|block\w*|keep\w*|can.?t|cannot|don.?t|stop\w*|out)\b/, /certain (things|substances|molecules|stuff)/, /lets? (only )?(some|certain|small)/, /only (some|certain|small)/, /not (everything|all|anything)/];
var IN_OUT = [/\b(enter\w*|in|into|come\w*|coming|get\w* in)\b.{0,40}\b(leav\w*|out|exit\w*)\b/, /\b(leav\w*|out|exit\w*)\b.{0,40}\b(enter\w*|in|into)\b/];

UNITS.push({
  id: "u2q1",
  title: "Cells and Organelles",
  subtitle: "Unit 2, Quiz 1 notes",
  source: "Intro to Cells and Organelles slideshows; Chapter 7, Lessons 7.1 and 7.2",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and wrote the key-idea checks and hints from the instructor's Cells and Organelles notebook guide, the Intro to Cells and Organelles slideshows, and Chapter 7 of the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Cell Theory and Microscopes", prompt:"State the three parts of the cell theory.",
    guide:"What three things are true about all living things and cells?", where:"Slide: Intro 6 | Book: The Cell Theory, p. 191",
    model:"1. All living things are made up of cells. 2. Cells are the basic units of structure and function in living things. 3. New cells are produced from existing cells.",
    ideas:[
      I("Statement 1", [/(living|alive|organism)\w*.{0,40}\b(made|built|composed|consist)/, /(made|built) (up )?of cells/], "What are all living things made of?", "Read statement 1 on Slide Intro 6."),
      I("Statement 2", [/basic unit|building block|structure|function|smallest unit|unit of life/], "What role do cells play in a living thing?", "Read statement 2 on Slide Intro 6."),
      I("Statement 3", [/(new|more) cells?.{0,40}(existing|other cells|old cells|from cells|divid|pre ?existing)/, /cells? (come|comes) from.{0,20}cells/, /(existing|other|old) cells/], "Where do new cells come from?", "Read statement 3 on Slide Intro 6.")
    ]},
  { n:2, heading:"Cell Theory and Microscopes", prompt:"Recall what new cells are produced from.",
    guide:"Where does every new cell come from?", where:"Slide: Intro 6 | Book: The Cell Theory, p. 191",
    model:"New cells are produced from existing cells. A cell divides to make new cells.",
    ideas:[ I("Where new cells come from", [/existing|pre ?existing|other cells|old cells|cells that (already )?(exist|divide)|divid|split/], "Do cells pop up out of nowhere?", "Think about how a scraped knee heals. Slide Intro 7.") ],
    watch:[ W(/nonliving|non living|nothing|out of nowhere|\batoms?\b/, "Check that. Can a cell come from something that is not a cell?", "Where new cells come from") ]},
  { n:3, heading:"Cell Theory and Microscopes", prompt:"Identify what Robert Hooke looked at when he named \"cells.\"",
    guide:"What was he looking at, and were those cells alive or dead?", where:"Slide: Intro 5 | Book: Early Microscopes, p. 190",
    model:"Robert Hooke looked at thin slices of cork. The cells he saw were dead, empty chambers.",
    ideas:[
      I("What he looked at", [/cork/], "What material did Hooke look at?", "Read the 1665 entry on Slide Intro 5."),
      I("Alive or dead", [/dead|empty|not alive|nonliving|non living|no longer alive/], "Were the cells he saw alive or dead?", "Cork comes from tree bark. Is it still growing?")
    ],
    watch:[ W(/\b(alive|living)\b/, "Check that. Were Hooke's cork cells alive?", "Alive or dead") ]},
  { n:4, heading:"Cell Theory and Microscopes", prompt:"Recall who was the first person to see living cells.",
    guide:"Who saw them, and what did he look at?", where:"Slide: Intro 5 | Book: Early Microscopes, p. 190",
    model:"Anton van Leeuwenhoek was the first to see living cells. He looked at pond water and his own mouth.",
    ideas:[
      I("Who", [/leeuw|leuw|lee ?wen|lay ?when|leven ?hook|leewen|loon ?hook|van ?l|anton/], "Who was the first person to see living cells?", "Read entry 2 on Slide Intro 5. His first name is Anton."),
      I("What he looked at", [/pond|mouth|teeth|saliva|spit|plaque/], "What did he look at?", "Slide Intro 5 names two places he looked.")
    ],
    watch:[ W(/\bhooke?\b/, "Check that. Hooke saw dead cork. Who saw living cells?", "Who") ]},
  { n:5, heading:"Cell Theory and Microscopes", prompt:"Compare light microscopes and electron microscopes.",
    guide:"Which one can show living cells, and why can't the other?", where:"Slide: Intro 8 | Book: Light Microscopes and Cell Stains, Electron Microscopes, pp. 191 to 192",
    model:"A light microscope uses light and can show living cells. An electron microscope uses a beam of electrons and shows more detail, but the samples must be nonliving, so it cannot show living cells.",
    ideas:[
      I("Light microscope", [near(/light/, /living|alive|\blive\b/, 70)], "Which microscope can show living cells?", "Read the Light Microscope box on Slide Intro 8."),
      I("Electron microscope", [near(/electron/, /nonliving|non living|not (be )?(alive|living)|dead|can.?t|cannot|kill/, 90)], "Can an electron microscope show living cells? Why not?", "Slide Intro 8: what must be true about electron microscope samples?")
    ]},
  { n:6, heading:"Two Kinds of Cells", prompt:"Define prokaryote and eukaryote, with one example of each.",
    guide:"Where does each type keep its DNA? What living things belong to each group?", where:"Slide: Intro 10 to 11, Organelles 5 to 6 | Book: Prokaryotes, Eukaryotes, p. 194",
    model:"A prokaryote has no nucleus; its DNA floats in the cytoplasm. Example: bacteria. A eukaryote has a nucleus that holds its DNA. Example: plants, animals, and my own cells.",
    ideas:[
      I("Prokaryote", [near(T.pro, lacks(/nucle/), 60), near(T.pro, /dna (floats|is loose|is free)/, 60)], "Where does a prokaryote keep its DNA? Does it have a nucleus?", "PRO rhymes with NO. Slide Intro 10."),
      I("Prokaryote example", [/bacteri|archae|e ?coli|strep/], "Name one living thing made of prokaryotic cells.", "Look at the bottom of the left side of Slide Intro 11."),
      I("Eukaryote", [near(T.eu, /(has|have|with|contains?)( a| its)? ?\w* nucle|nucle\w* (holds|has|keeps)|in (a|the) nucle/, 60)], "Where does a eukaryote keep its DNA?", "EU means true. True what? Slide Intro 10."),
      I("Eukaryote example", [/plant|animal|fung|protist|human|person|people|mushroom|amoeba|my (own )?cells|our cells|tree|dog|cat/], "Name one living thing made of eukaryotic cells.", "Look at the bottom of the right side of Slide Intro 11.")
    ]},
  { n:7, heading:"Two Kinds of Cells", prompt:"Identify the structure prokaryotic cells do NOT have.",
    guide:"What is the one big thing missing from a bacterium?", where:"Slide: Intro 11 | Book: Prokaryotes, p. 194",
    model:"Prokaryotic cells do not have a nucleus. They also have no membrane-bound organelles.",
    ideas:[ I("The missing structure", [/nucle/], "What is the one big thing missing from a bacterium?", "Look at the word: pro-KARYON. What does karyon mean? Slide Intro 10.") ],
    watch:[ W(/\bno (dna|cell membrane|ribosomes?|cytoplasm)\b/, "Check that. Prokaryotes still have DNA, a membrane, cytoplasm, and ribosomes. What is missing?") ]},
  { n:8, heading:"Two Kinds of Cells", prompt:"Classify human cells as prokaryotic or eukaryotic.",
    guide:"Do your cells have a nucleus? So which group are they in?", where:"Slide: Intro 11 | Book: Eukaryotes, p. 194",
    model:"Human cells are eukaryotic because they have a nucleus.",
    ideas:[
      I("Which group", [T.eu], "Are human cells prokaryotic or eukaryotic?", "EU sounds like YOU. Slide Intro 10."),
      I("The reason", [/nucle/], "How can you tell? What do your cells have?", "Do your cells keep their DNA in a nucleus?")
    ],
    watch:[ W(near(/human|my|our|people/, T.pro, 40), "Check that. Do human cells have a nucleus?", "Which group") ]},
  { n:9, heading:"Two Kinds of Cells", prompt:"List the four things every cell has, and name the organelle found in ALL cells.",
    guide:"What do a bacterium and a brain cell both have? Which organelle is on that list?", where:"Slide: Intro 9, Organelles 13 | Book: Prokaryotes and Eukaryotes, p. 193",
    model:"Every cell has a cell membrane, DNA, cytoplasm, and ribosomes. The ribosome is the organelle found in all cells.",
    ideas:[
      I("Outer barrier", [T.membrane], "What thin barrier wraps around every cell?", "Slide Intro 9, first box."),
      I("Instructions", [/\bdna\b|\bd n a\b|genetic/], "What carries the cell's instructions?", "Slide Intro 9, second box."),
      I("Inside fluid", [T.cytoplasm], "What fills the inside of every cell?", "Slide Intro 9, third box."),
      I("Protein builders", [T.ribosome], "What tiny machines build proteins in every cell?", "Slide Intro 9, fourth box."),
      I("Organelle in all cells", [near(T.ribosome, /\ball\b|every|organelle|both/, 80), near(/\ball\b|every|organelle/, T.ribosome, 80)], "Which item on your list is the organelle found in ALL cells?", "Slide Organelles 13, the KEY TERMS box.")
    ]},
  { n:10, heading:"Two Kinds of Cells", prompt:"Explain why bacteria can have ribosomes but not mitochondria.",
    guide:"Which of the two is wrapped in a membrane? Which kind of cell has membrane-bound organelles?", where:"Slide: Organelles 13 and 19 | Book: Prokaryotes, p. 194",
    model:"Ribosomes have no membrane around them. Mitochondria are wrapped in membranes. Prokaryotes like bacteria have no membrane-bound organelles, so they can have ribosomes but not mitochondria.",
    ideas:[
      I("Ribosomes", [either(T.ribosome, lacks(/membrane/), 60)], "Is a ribosome wrapped in a membrane?", "Read the Also know line on Slide Organelles 13."),
      I("Mitochondria", [either(T.mito, /membrane/, 60)], "Is a mitochondrion wrapped in a membrane?", "Slide Organelles 19: how many membranes does it have?"),
      I("The rule for bacteria", [lacks(/membrane ?bound/), near(/prokary|bacteri/, /membrane/, 90)], "Which kind of cell has membrane-bound organelles, and which does not?", "Read the prokaryote list on Slide Intro 11.")
    ]},
  { n:11, heading:"Levels of Organization", prompt:"Order cell, tissue, organ, and organ system from smallest to largest.",
    guide:"Which level is built from the one before it?", where:"Slide: Organelles 2 to 4 | Book: Levels of Organization, p. 216",
    model:"Cell, tissue, organ, organ system. Each level is built from the one before it.",
    ideas:[ I("The order", [/cells?\b.{0,40}\btissues?\b.{0,40}\borgans?\b.{0,40}\borgan systems?/], "Which is smallest: cell, tissue, organ, or organ system?", "Muscle cells make muscle tissue. What does tissue build? Slide Organelles 4.") ],
    watch:[ W(/organ systems?.{0,40}\borgans?\b.{0,40}tissues?.{0,40}\bcells?\b/, "Check the order. Start with the smallest.") ]},
  { n:12, heading:"Levels of Organization", prompt:"Define the word \"organelle.\"",
    guide:"What does the word mean, and what body part is it named after?", where:"Slide: Organelles 7 | Book: Cell Organization, p. 196",
    model:"An organelle is a structure inside a cell that has a specific job. The word means little organ, named after the organs in your body.",
    ideas:[
      I("What the word means", [/(little|small|tiny|mini) organ/], "What does the word organelle mean?", "Slide Organelles 7. Think: organ plus a small ending."),
      I("What it has", [/job|function|role|task|purpose/], "What does each organelle have, like your organs do?", "Your heart pumps blood. Your stomach digests food. Each organ has a ___.")
    ]},
  { n:13, heading:"Control, Boundaries, Protein Line", prompt:"Describe the nucleus.",
    guide:"What does it hold, and why is it called the control center?", where:"Slide: Organelles 9 | Book: The Nucleus, p. 197",
    model:"The nucleus holds the cell's DNA. It is called the control center because the DNA has the instructions that control most of the cell's activities.",
    ideas:[
      I("What it holds", [/\bdna\b|\bd n a\b|genetic|chromosom/], "What does the nucleus hold?", "Slide Organelles 9, KEY TERMS."),
      I("Control center", [/control|boss|brain|in charge|\bruns?\b|direct|command|main office/], "Why is it called the control center? What does it run?", "Slide Organelles 9: it controls most of the cell's ___.")
    ]},
  { n:14, heading:"Control, Boundaries, Protein Line", prompt:"Explain the job of the cell membrane.",
    guide:"What does it control, and what does \"selectively permeable\" mean?", where:"Slide: Organelles 10 | Book: Cell Membranes, p. 204",
    model:"The cell membrane regulates what enters and leaves the cell. Selectively permeable means it lets some things through but not others.",
    ideas:[
      I("The job", [/regulat|control|decid|choos|gate ?keep|guard|filter/], "What job does the membrane do at the border of the cell?", "Slide Organelles 10 calls it the gatekeeper."),
      I("In and out", IN_OUT, "It controls what does what?", "Things cross the border in two directions. Name both."),
      I("Selectively permeable", SOME_PASS, "What does selectively permeable mean? Does everything get through?", "Finish this: some things ____, but others ____.")
    ]},
  { n:15, heading:"Control, Boundaries, Protein Line", prompt:"Describe the cytoplasm.",
    guide:"What is it, and which energy process happens there?", where:"Slide: Organelles 11 | Book: Cell Organization, p. 196 (the energy process is on the slide only)",
    model:"The cytoplasm is the fluid inside the cell membrane but outside the nucleus. The organelles sit in it. Glycolysis happens in the cytoplasm.",
    ideas:[
      I("What it is", [/fluid|liquid|jelly|gel|goo|watery/], "What is the cytoplasm made of?", "Slide Organelles 11, the WHAT IT DOES box."),
      I("Energy process", [T.glycolysis], "Which energy process happens in the cytoplasm?", "Slide Organelles 11, KEY TERMS. It starts with \"glyco.\"")
    ]},
  { n:16, heading:"Control, Boundaries, Protein Line", prompt:"Describe the cell wall.",
    guide:"Is it inside or outside the membrane? Which cells have one, and which never do?", where:"Slide: Organelles 12 | Book: Cell Walls, p. 203",
    model:"The cell wall is a strong layer outside the cell membrane that supports and protects the cell. Plant cells have a cell wall. Animal cells never do.",
    ideas:[
      I("Where it is", [/outside|outer|around the (cell )?membrane|surround/], "Is the cell wall inside or outside the membrane?", "Slide Organelles 12, WHERE IT IS."),
      I("Which cells have one", [/plant/], "Which cells have a cell wall?", "Slide Organelles 12, FOUND IN."),
      I("Which cells never do", [near(/animal/, lacks(/wall|one|it|them/), 40), near(lacks(/wall/), /animal/, 40), /animals? (cells )?(do not|don.?t|never)/], "Which cells never have a cell wall?", "Slide Organelles 12, FOUND IN.")
    ],
    watch:[ W(/animal cells? (have|has|do have)( a)? (cell )?walls?/, "Check that. Do animal cells have a cell wall?"), W(/inside (the )?(cell )?membrane/, "Check that. Is the wall inside or outside the membrane?", "Where it is") ]},
  { n:17, heading:"Control, Boundaries, Protein Line", prompt:"State the job of the ribosome.",
    guide:"What does it build?", where:"Slide: Organelles 13 | Book: Ribosomes, p. 200",
    model:"Ribosomes build (assemble) proteins by following instructions from DNA.",
    ideas:[
      I("What it builds", [/protein/], "What does a ribosome build?", "Slide Organelles 13, KEY TERMS."),
      I("Its job", [/build|make|assembl|produc|creat|put\w* together/], "What does the ribosome do with those parts?", "Slide Organelles 13: it ___ proteins.")
    ]},
  { n:18, heading:"Control, Boundaries, Protein Line", prompt:"Compare rough ER and smooth ER.",
    guide:"What is the ER's job? What covers rough ER that smooth ER does not have?", where:"Slide: Organelles 14 | Book: Endoplasmic Reticulum, p. 200",
    model:"The ER is an assembly line where proteins and parts of the cell membrane are built. Rough ER is covered with ribosomes and helps build proteins. Smooth ER has no ribosomes; it makes lipids.",
    ideas:[
      I("ER's job", [/(build|make|produc|assembl)\w*.{0,40}(protein|lipid|membrane)/, /assembly line/], "What is the ER's job?", "Slide Organelles 14, WHAT IT DOES."),
      I("Rough ER", [near(/rough/, T.ribosome, 50)], "What covers rough ER?", "Rough ER is bumpy. What are the bumps? Slide Organelles 14."),
      I("Smooth ER", [near(/smooth/, lacks(T.ribosome), 50), near(/smooth/, /\b(none|no ribo)/, 50)], "What does smooth ER NOT have?", "Slide Organelles 14, KEY TERMS.")
    ]},
  { n:19, heading:"Control, Boundaries, Protein Line", prompt:"Explain the job of the Golgi apparatus.",
    guide:"What does it do to proteins before they leave?", where:"Slide: Organelles 15 | Book: Golgi Apparatus, p. 201",
    model:"The Golgi apparatus modifies, sorts, and packages proteins for storage or to ship out of the cell.",
    ideas:[
      I("What it does", [/modif|sort|packag|finish|label|ship|customiz|prepare/], "What does the Golgi do to proteins before they leave?", "Slide Organelles 15 uses three verbs. Think of a shop that boxes up a product."),
      I("What it works on", [/protein/], "What does the Golgi work on?", "Slide Organelles 15, WHAT IT DOES.")
    ]},
  { n:20, heading:"Control, Boundaries, Protein Line", prompt:"Describe how a vesicle carries waste out of the cell.",
    guide:"Where does the vesicle go, and what is this process called?", where:"Slide: Organelles 16 | Book: Vacuoles and Vesicles, p. 198",
    model:"A vesicle carries the waste to the cell membrane, joins with it, and releases the waste outside the cell. This process is called exocytosis.",
    ideas:[
      I("Where it goes", [/membrane|surface|edge/], "Where does the vesicle carry the waste?", "Slide Organelles 16, WHERE IT IS."),
      I("The process", [/\bexo/], "What is this process called?", "It starts with \"exo,\" like exit. Slide Organelles 16.")
    ],
    watch:[ W(/\bendo/, "Check that. Is the waste going in or out? Which word means out?", "The process") ]},
  { n:21, heading:"Energy, Storage, and Support", prompt:"Explain the job of the mitochondrion.",
    guide:"What does it turn food energy into? Do plant cells have them too?", where:"Slide: Organelles 19 | Book: Mitochondria, p. 202",
    model:"The mitochondrion converts the chemical energy in food into a form the cell can use. It is the powerhouse of the cell. Plant cells have mitochondria too.",
    ideas:[
      I("Its job", [/(food|sugar|glucose).{0,60}(energy|usable|atp|power)/, /(energy|power).{0,60}(food|sugar|glucose)/, /power ?house|power ?plant/], "What does the mitochondrion do with food energy?", "Slide Organelles 19, WHAT IT DOES."),
      I("Plant cells", [near(/plant/, /\btoo\b|also|have them|have mito|do have|\byes\b|both/, 50), near(/both|also|too/, /plant/, 30)], "Do plant cells have mitochondria too?", "Slide Organelles 19, FOUND IN.")
    ],
    watch:[ W(/plants? (cells )?(do not|don.?t|doesn.?t|never) have|only animal/, "Check that. Do plant cells have mitochondria?") ]},
  { n:22, heading:"Energy, Storage, and Support", prompt:"Explain the job of the chloroplast.",
    guide:"What energy does it capture, what does it make, and what is the process called?", where:"Slide: Organelles 20 | Book: Chloroplasts, p. 202",
    model:"The chloroplast captures energy from sunlight and uses it to make food (sugar). This process is photosynthesis.",
    ideas:[
      I("Energy it captures", [/\bsun|light/], "What kind of energy does a chloroplast capture?", "Slide Organelles 20 calls chloroplasts solar panels."),
      I("What it makes", [/food|sugar|glucose/], "What does it make with that energy?", "Slide Organelles 20, KEY TERMS."),
      I("The process", [T.photo], "What is the process called?", "Slide Organelles 20. It starts with \"photo,\" meaning light.")
    ]},
  { n:23, heading:"Energy, Storage, and Support", prompt:"Describe the vacuole.",
    guide:"What does it store? What does a plant's large central vacuole do for the plant?", where:"Slide: Organelles 21 | Book: Vacuoles and Vesicles, p. 198",
    model:"A vacuole stores materials like water, salts, proteins, and carbohydrates. A plant's large central vacuole fills with water and pushes outward, which keeps the plant firm so it does not wilt.",
    ideas:[
      I("What it stores", [/(stor|hold|keep)\w*.{0,40}(water|salt|food|protein|carb|material|stuff|nutrient|waste)/], "What does a vacuole store?", "Slide Organelles 21 calls it the warehouse."),
      I("What it does for the plant", [/firm|stiff|support|stand|upright|shape|pressure|push|rigid|wilt/], "What does the big water-filled vacuole do for a plant?", "Slide Intro 24: why does a plant wilt when it needs water?")
    ]},
  { n:24, heading:"Energy, Storage, and Support", prompt:"Predict what would happen to a cell if its lysosomes stopped working.",
    guide:"What is the lysosome's job? What would pile up without it?", where:"Slide: Organelles 22 | Book: Lysosomes, p. 198",
    model:"Lysosomes are filled with enzymes that break down and recycle worn-out parts and waste. If they stopped working, waste and worn-out parts would pile up inside the cell.",
    ideas:[
      I("The lysosome's job", [/break|digest|recycl|clean|enzyme|eat|destroy/], "What is the lysosome's job?", "Slide Organelles 22 calls it the cleanup crew."),
      I("What would happen", [/pile|build ?up|builds|accumulat|fill|collect|clog|too much|stuck/], "What would pile up without lysosomes?", "Think of a school with no janitors for a month.")
    ]},
  { n:25, heading:"Energy, Storage, and Support", prompt:"State the job of the cytoskeleton.",
    guide:"How is it like the beams and conveyor belts of a factory?", where:"Slide: Organelles 23 | Book: The Cytoskeleton, p. 199",
    model:"The cytoskeleton is a network of protein fibers. Like beams, it gives the cell its shape and support. Like conveyor belts, it moves materials around the cell.",
    ideas:[
      I("Like the beams", [/shape|support|structure|frame|holds? (it|the cell) up/], "How is the cytoskeleton like the beams of a building?", "Slide Organelles 23, KEY TERMS."),
      I("Like the conveyor belts", [/\bmov|transport|carr|conveyor|track/], "How is it like a conveyor belt?", "Slide Organelles 23, WHAT IT DOES.")
    ]},
  { n:26, heading:"Energy, Storage, and Support", prompt:"Identify the job of the centrioles and which cells have them.",
    guide:"What process do they help organize? Plant, animal, or both?", where:"Slide: Organelles 24 | Book: The Cytoskeleton, p. 199",
    model:"Centrioles help organize cell division. Only animal cells have them, not plant cells.",
    ideas:[
      I("The process", [/divi|split|mitosis|reproduc/], "What process do centrioles help organize?", "Slide Organelles 24, KEY TERMS."),
      I("Which cells", [/animal/], "Which cells have centrioles?", "Slide Organelles 24, FOUND IN.")
    ],
    watch:[ W(/plant cells? (have|has|do have) (them|centri)|both plant and animal/, "Check that. Do plant cells have centrioles?") ]},
  { n:27, heading:"Putting It Together", prompt:"Sequence the path a protein takes to be shipped out of the cell.",
    guide:"Start at the ribosome. Which stop comes next, and where does it end?", where:"Slide: Intro 17, Organelles 13 to 16 | Book: Organelles That Build Proteins, pp. 200 to 201",
    model:"Ribosome, rough ER, vesicle, Golgi apparatus, vesicle, cell membrane, then out of the cell.",
    ideas:[
      I("First stop", [T.ribosome], "Where is the protein built first?", "Start at the machine that builds proteins. Slide Intro 17."),
      I("Middle stops", [near(T.er, T.golgi, 200)], "Which two stops come after the ribosome, in order?", "Follow Slide Intro 17 left to right: assembly line, then finishing shop."),
      I("Delivery trucks", [T.vesicle], "What carries the protein between stops?", "Slide Intro 17 calls it the delivery truck."),
      I("Last stop", [near(T.golgi, /membrane|out of the cell|outside|exo/, 200)], "Where does the protein end up?", "After the Golgi, where is it shipped? Slide Intro 17.")
    ],
    watch:[ W(near(T.golgi, /rough|endoplasm|reticul|\ber\b/, 100), "Check the order. Does the protein go to the ER or the Golgi first?", "Middle stops") ]},
  { n:28, heading:"Putting It Together", prompt:"Compare plant cells and animal cells.",
    guide:"Which structures do only plant cells have? Which one do only animal cells have?", where:"Slide: Intro 23, Organelles 27 | Book: Figure 7-14 table, pp. 206 to 207",
    model:"Only plant cells have a cell wall, chloroplasts, and a large central vacuole. Only animal cells have centrioles.",
    ideas:[
      I("Plant: outer layer", [/wall/], "Which strong outer layer do only plant cells have?", "Slide Intro 23, first row."),
      I("Plant: food maker", [T.chloro], "Which organelle that makes food do only plant cells have?", "Slide Intro 23, second row."),
      I("Plant: big storage", [/central|large vacuole|big vacuole/], "What kind of vacuole does a plant cell have?", "Slide Intro 23, third row."),
      I("Animal only", [T.centriole], "Which structure do only animal cells have?", "Slide Intro 23, fourth row.")
    ]},
  { n:29, heading:"Putting It Together", prompt:"Predict which organelle a high-energy cell, like a muscle cell, needs more of.",
    guide:"Which organelle supplies energy? Why would a busy cell need extra?", where:"Slide: Organelles 19 | Book: Mitochondria, p. 202",
    model:"A muscle cell needs more mitochondria, because mitochondria supply the energy the cell uses, and a busy cell uses a lot of energy.",
    ideas:[
      I("Which organelle", [T.mito], "Which organelle supplies energy?", "Slide Organelles 19 calls it the powerhouse."),
      I("Why", [/energy|\batp\b|power|fuel/], "Why would a busy cell need more of it?", "What does a muscle use a lot of when it works hard?")
    ],
    watch:[ W(T.chloro, "Check that. Do muscle cells capture sunlight?", "Which organelle") ]},
  { n:30, heading:"Putting It Together", prompt:"Analyze a cell's organelles to tell if it came from a plant, an animal, or a bacterium.",
    guide:"Which clues point to a plant? To an animal? What would a bacterium be missing?", where:"Slide: Organelles 27 | Book: Figure 7-14 table, pp. 206 to 207",
    model:"If it has a cell wall, chloroplasts, and a large central vacuole, it is a plant cell. If it has centrioles and no cell wall, it is an animal cell. If it has no nucleus and no membrane-bound organelles, it is a bacterium.",
    ideas:[
      I("Plant clues", [either(/plant/, /wall|chloro|central|vacu/, 90)], "Which clues tell you a cell is from a plant?", "Use your plant vs. animal note (note 28)."),
      I("Animal clues", [either(/animal/, /centri|no (cell )?wall|without (a )?(cell )?wall|no chloro/, 90)], "Which clues tell you a cell is from an animal?", "Use your plant vs. animal note (note 28)."),
      I("Bacterium clues", [either(/bacteri|prokary/, lacks(/nucle|membrane|organelle|mitochond/), 90)], "What would a bacterium be missing?", "Use your prokaryote note (note 7).")
    ]}
  ]
});
})();

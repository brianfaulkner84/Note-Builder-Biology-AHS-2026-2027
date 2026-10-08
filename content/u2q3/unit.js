/* ==================================================================
   UNIT FILE: Unit 2, Quiz 3 (Energy, Photosynthesis, and Respiration).
   Source: Energy_Quiz1_Notebook_Guide.pptx (28 prompts); Energy and Life,
   Photosynthesis, and Cellular Respiration Basics slideshows; Chapters 2, 8, 9.
   Fields and helpers are explained in content/u2q2/unit.js and patterns.js.
   ================================================================== */
(function(){
var GLUCOSE = T.glucose, CO2 = T.co2, O2 = T.o2, H2O = T.water;
var LIGHT_DEP = /light ?dependent|light reactions?|part 1|part one|first part/;
var CALVIN = /calvin|light ?independent|dark reactions?|part 2|part two|second part/;

UNITS.push({
  id: "u2q3",
  title: "Energy, Photosynthesis, and Respiration",
  subtitle: "Unit 2, Quiz 3 notes",
  source: "Energy and Life, Photosynthesis, and Cellular Respiration Basics slideshows; Chapters 2, 8, and 9",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and wrote the key-idea checks and hints from the instructor's Energy, Photosynthesis, and Respiration notebook guide, the Energy and Life, Photosynthesis, and Cellular Respiration Basics slideshows, and the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Energy and Food", prompt:"Define energy.",
    guide:"What is energy the ability to do? Where do living things store it?", where:"Slide: Energy 4 | Book: Chemical Energy and ATP, p. 226",
    model:"Energy is the ability to do work. Living things store energy in the chemical bonds of molecules, like the sugar in food.",
    ideas:[
      I("What energy is", [/ability to do work|able to do work|ability to work|capacity to do work|do work/], "What is energy the ability to do?", "Slide Energy 4, the line under the title."),
      I("Where it is stored", [/bond|chemical|molecule|food|sugar|glucose/], "Where do living things store energy?", "Slide Energy 4, the Chemical box.")
    ]},
  { n:2, heading:"Energy and Food", prompt:"Identify the monomer (building block) of carbohydrates.",
    guide:"What is the building block called? Give one example.", where:"Slide: Energy 5 | Book: Carbohydrates, Simple Sugars, p. 46 (Chapter 2)",
    model:"The monomer of carbohydrates is a simple sugar (monosaccharide). Example: glucose.",
    ideas:[
      I("The monomer", [/simple sugar|mono ?sacchar|monosaccharide|single sugar|one sugar/], "What is the building block of a carbohydrate called?", "Slide Energy 5, the Simple sugar box."),
      I("Example", [/glucose|fructose|galactose/], "Give one example of a simple sugar.", "Slide Energy 5 names one. Your body runs on it.")
    ],
    watch:[ W(/amino acid|nucleotide|fatty acid/, "Check that. That is the monomer of a different macromolecule.", "The monomer") ]},
  { n:3, heading:"Energy and Food", prompt:"Compare a calorie and a Calorie.",
    guide:"What does a small calorie heat, and by how much? How many calories are in one food-label Calorie?", where:"Slide: Energy 6 | Book: Chemical Energy and Food, p. 250",
    model:"A calorie (small c) is the energy needed to raise 1 gram of water 1 degree Celsius. A food-label Calorie (capital C) is a kilocalorie: 1 Calorie equals 1,000 calories.",
    ideas:[
      I("Small calorie", [/(1|one) ?(gram|g)\b.{0,30}water/, /water.{0,40}(1|one) ?(degree|c\b|celsius)/, /heat\w* water/], "What does a small calorie heat, and by how much?", "Slide Energy 6, the CALORIE (SMALL C) box."),
      I("Food-label Calorie", [/1 ?000|thousand|kilo ?calorie|kcal/], "How many small calories are in one food-label Calorie?", "Slide Energy 6, the CALORIE (CAPITAL C) box.")
    ]},
  { n:4, heading:"Energy and Food", prompt:"Calculate the Calories in a food.",
    guide:"How many Calories per gram do carbohydrates, proteins, and fats give? Try it: 10 grams of fat.", where:"Slide: Energy 6 to 8 | Book: Chemical Energy and Food, p. 250",
    model:"Carbohydrates and proteins give about 4 Calories per gram. Fats give about 9 Calories per gram. Multiply grams by Calories per gram. 10 grams of fat x 9 = 90 Calories.",
    ideas:[
      I("Carbs and proteins", [/\b(4|four)\b/], "How many Calories per gram do carbohydrates and proteins give?", "Slide Energy 6, the PER GRAM box."),
      I("Fats", [/\b(9|nine)\b/], "How many Calories per gram do fats give?", "Slide Energy 6, the PER GRAM box."),
      I("The practice problem", [/\b(90|ninety)\b/], "Try it: how many Calories are in 10 grams of fat?", "Multiply the grams by the Calories per gram for fat.")
    ]},
  { n:5, heading:"ATP and ADP", prompt:"Describe the ATP molecule.",
    guide:"What does ATP stand for? What three parts make it up?", where:"Slide: Energy 10 | Book: Chemical Energy and ATP, p. 226",
    model:"ATP stands for adenosine triphosphate. It is made of adenine, ribose (a 5-carbon sugar), and three phosphate groups. It is the main energy source of the cell.",
    ideas:[
      I("What ATP stands for", [/adenosine ?tri ?phosphate|adenosine tri/], "What does ATP stand for?", "Slide Energy 10, the line under the title."),
      I("Part 1", [/adenine/], "Name the base in ATP.", "Slide Energy 10, the THREE PARTS box."),
      I("Part 2", [/ribose|sugar/], "Name the sugar in ATP.", "Slide Energy 10, the THREE PARTS box."),
      I("Part 3", [/(3|three) phosphate|phosphates?/], "How many phosphate groups does ATP have?", "\"Tri\" means how many?")
    ]},
  { n:6, heading:"ATP and ADP", prompt:"Explain how ATP stores and releases energy.",
    guide:"What happens when a phosphate is added to ADP? Which bond breaks to release energy?", where:"Slide: Energy 11 | Book: Storing Energy, Releasing Energy, p. 227",
    model:"To store energy, the cell adds a phosphate to ADP, which makes ATP. To release energy, the cell breaks the bond to the third phosphate, and ATP becomes ADP again.",
    ideas:[
      I("Storing", [either(/add|attach|put/, T.adp, 50), near(T.adp, /\+|plus|and a phosphate|becomes atp|makes atp|to atp/, 40)], "What does the cell add to ADP to store energy?", "Slide Energy 11, the STORING ENERGY box."),
      I("Releasing", [/break\w*.{0,30}(bond|phosphate)|remov\w*.{0,30}phosphate|third phosphate|last phosphate|lose\w* a phosphate/], "Which bond breaks to release the energy?", "Slide Energy 11, the RELEASING ENERGY box.")
    ]},
  { n:7, heading:"ATP and ADP", prompt:"List the cell jobs that ATP powers.",
    guide:"Name at least three things cells use ATP for.", where:"Slide: Energy 12 | Book: Using Biochemical Energy, p. 227",
    model:"ATP powers active transport (protein pumps), movement (muscles, cilia, and flagella), building proteins and other molecules, and making light, like a firefly's glow.",
    ideas:[
      I("Job 1: pumping", [/active transport|pump/], "Which kind of cell transport runs on ATP?", "Slide Energy 12, first box."),
      I("Job 2: moving", [/\bmov|muscle|contract|cilia|flagell/], "What job do motor proteins do with ATP?", "Slide Energy 12, second box."),
      I("Job 3: building", [/build|making protein|make protein|making molecule|synthes/], "What do cells build with ATP?", "Slide Energy 12, third box.")
    ]},
  { n:8, heading:"ATP and ADP", prompt:"Explain why cells keep only a small supply of ATP.",
    guide:"Which stores more energy, glucose or ATP? Which is better for moving energy quickly?", where:"Slide: Energy 13 | Book: Using Biochemical Energy, p. 227",
    model:"Glucose stores much more energy than ATP, more than 90 times as much. ATP is better for moving energy quickly. So cells store energy in glucose and remake ATP from ADP when they need it.",
    ideas:[
      I("Better for storing", [near(GLUCOSE, /more energy|stores? more|holds? more|90|ninety|lots of energy|a lot of energy|better (for|at) stor/, 60), near(/stores? more|more energy|holds? more/, GLUCOSE, 40)], "Which stores more energy, glucose or ATP?", "Slide Energy 13, the Bad for saving box."),
      I("Better for moving", [near(T.atp, /quick|fast|mov\w* energy|transfer|spend/, 60)], "What is ATP good for?", "Slide Energy 13, the Good for spending box.")
    ]},
  { n:9, heading:"Energy Carriers", prompt:"Describe what an electron carrier does.",
    guide:"What does it pick up, and what does it do with it?", where:"Slide: Energy 15 | Book: High-Energy Electrons, p. 232",
    model:"An electron carrier picks up high-energy electrons, carries them, and drops them off where the energy is needed, like a taxi.",
    ideas:[
      I("What it picks up", [/electron/], "What does an electron carrier pick up?", "Slide Energy 15 calls them energy taxis."),
      I("What it does with it", [/carr|transport|deliver|drop|bring|move|take/], "What does it do with what it picks up?", "Think about what a taxi does with a passenger.")
    ]},
  { n:10, heading:"Energy Carriers", prompt:"Compare NAD+ and NADP+.",
    guide:"What does each become when it is loaded? Which process uses each one?", where:"Slide: Energy 15 | Book: High-Energy Electrons, p. 232; NADH Production, p. 255",
    model:"NAD+ picks up electrons and becomes NADH. It is used in cellular respiration. NADP+ picks up electrons and becomes NADPH. It is used in photosynthesis.",
    ideas:[
      I("NAD+ loaded", [T.nadh], "What does NAD+ become when it is loaded?", "Slide Energy 15, the NAD+ TO NADH box."),
      I("NAD+ process", [either(T.nadh, T.resp, 80), either(T.nad, T.resp, 80)], "Which process uses NAD+?", "Slide Energy 15, the NAD+ TO NADH box."),
      I("NADP+ loaded", [T.nadph], "What does NADP+ become when it is loaded?", "Slide Energy 15, the NADP+ TO NADPH box."),
      I("NADP+ process", [either(T.nadph, T.photo, 80), either(T.nadp, T.photo, 80)], "Which process uses NADP+?", "Slide Energy 15, the NADP+ TO NADPH box.")
    ]},
  { n:11, heading:"Energy Carriers", prompt:"Classify ATP, ADP, NAD+, glucose, and glycolysis as molecules or processes.",
    guide:"Which ones are things that hold or carry energy? Which one is a set of steps?", where:"Slide: Energy 16 to 17 | Book: not a textbook heading; use the slide",
    model:"Molecules: ATP, ADP, NAD+, and glucose. Process: glycolysis.",
    sort:{ groups:{molecule:/\bmolecules?\b|\bthings?\b/, process:/\bprocess\w*|\bsteps?\b/},
      items:[
        {label:"ATP", match:T.atp, group:"molecule"},
        {label:"ADP", match:T.adp, group:"molecule"},
        {label:"NAD+", match:T.nad, group:"molecule"},
        {label:"Glucose", match:/glucose/, group:"molecule"},
        {label:"Glycolysis", match:T.glycolysis, group:"process"}
      ]}},
  { n:12, heading:"Autotrophs and Heterotrophs", prompt:"Compare autotrophs and heterotrophs.",
    guide:"How does each one get energy? Give two examples of each.", where:"Slide: Energy 19 | Book: Heterotrophs and Autotrophs, p. 228",
    model:"Autotrophs make their own food using energy from sunlight. Examples: plants and algae. Heterotrophs get energy by eating or absorbing other living things. Examples: animals and mushrooms.",
    ideas:[
      I("Autotrophs", [near(/auto/, /(make|makes|making|produce)\w* (their|its) own food|sun|light|photo/, 80)], "How does an autotroph get energy?", "\"Auto\" means self. Slide Energy 19."),
      I("Autotroph examples", [/plant|algae|tree|grass/], "Give examples of autotrophs.", "Slide Energy 19, the Examples row."),
      I("Heterotrophs", [near(/hetero/, /\beat|consum|absorb|other (living|organism)|food from/, 80)], "How does a heterotroph get energy?", "\"Hetero\" means other. Slide Energy 19."),
      I("Heterotroph examples", [/animal|mushroom|fung|human|people|cheetah|whale|dog|cat|cow|lion|bacteri/], "Give examples of heterotrophs.", "Slide Energy 19, the Examples row.")
    ]},
  { n:13, heading:"Autotrophs and Heterotrophs", prompt:"Classify algae and mushrooms.",
    guide:"Which is the autotroph? Why is a mushroom NOT an autotroph?", where:"Slide: Energy 20 to 21 | Book: Heterotrophs and Autotrophs, p. 228",
    model:"Algae are autotrophs because they make food from sunlight. Mushrooms are heterotrophs. They cannot make their own food from sunlight, so they absorb food from dead matter.",
    ideas:[
      I("Algae", [either(/algae/, /auto/, 40)], "Are algae autotrophs or heterotrophs?", "Can algae make food from sunlight? Slide Energy 21."),
      I("Mushrooms", [either(/mushroom/, /hetero/, 40)], "Are mushrooms autotrophs or heterotrophs?", "Slide Energy 21 answers this one."),
      I("Why the mushroom", [/absorb|decompos|dead|rott|can.?t make|cannot make|don.?t make|doesn.?t make|no (chloro|sun)|not (make|photo)|from other/], "Why is a mushroom NOT an autotroph?", "Read the line at the top of Slide Energy 21.")
    ],
    watch:[ W(/mushrooms? (is|are) (an? )?auto/, "Check that. Can a mushroom make food from sunlight?") ]},
  { n:14, heading:"Photosynthesis Basics", prompt:"Define photosynthesis.",
    guide:"What does the word mean? Which kind of energy becomes which kind?", where:"Slide: Photosynthesis 4 | Book: Heterotrophs and Autotrophs, p. 228",
    model:"Photosynthesis means using light to put something together. Plants use light energy to make sugar, so light energy becomes chemical energy stored in sugar.",
    ideas:[
      I("What the word means", [/(light|photo).{0,30}(put\w* together|build|synthes|make)/, /put\w* together/], "What does the word photosynthesis mean?", "Photo means ___. Synthesis means ___. Slide Photosynthesis 4."),
      I("Energy change", [near(/light/, /chemical/, 60)], "Which kind of energy becomes which kind?", "Slide Photosynthesis 4, KEY TERMS.")
    ]},
  { n:15, heading:"Photosynthesis Basics", prompt:"Write the photosynthesis equation in words and in symbols.",
    guide:"What are the reactants? What are the products?", where:"Slide: Photosynthesis 5 | Book: An Overview of Photosynthesis, p. 232",
    model:"In words: carbon dioxide + water + light makes sugar (glucose) + oxygen. In symbols: 6CO2 + 6H2O + light makes C6H12O6 + 6O2.",
    ideas:[
      I("Reactants", [either(CO2, H2O, 40)], "What goes in? Name the two reactants.", "Slide Photosynthesis 5, Reactants (in)."),
      I("Products", [either(GLUCOSE, O2, 40)], "What comes out? Name the two products.", "Slide Photosynthesis 5, Products (out)."),
      I("In symbols", [/\b6 ?co ?2\b|c ?6 ?h ?12 ?o ?6/], "Write the equation with chemical symbols too.", "Copy the symbols line from Slide Photosynthesis 5.")
    ],
    watch:[ W(near(/oxygen.{0,25}(and|plus)? ?(glucose|sugar)|(glucose|sugar).{0,25}(and|plus)? ?oxygen/, /(make|makes|yield|produce|into|become|gives?)\w*.{0,20}(carbon dioxide|co2)/, 40), "Check that. That is the respiration equation. Which way does photosynthesis go?") ]},
  { n:16, heading:"Light and Pigments", prompt:"Explain why leaves look green.",
    guide:"Which colors does chlorophyll absorb? Which color does it reflect?", where:"Slide: Photosynthesis 7 to 8 | Book: Light, Pigments, p. 230",
    model:"Chlorophyll absorbs blue-violet and red light well. It does not absorb green; it reflects green light back to our eyes, so leaves look green.",
    ideas:[
      I("Colors absorbed", [either(/blue|violet|purple/, /\bred\b/, 60)], "Which colors does chlorophyll absorb?", "Slide Photosynthesis 7, the Also know line."),
      I("Color reflected", [near(/reflect|bounc/, /green/, 40), near(/green/, /reflect|bounc/, 40)], "Which color does chlorophyll reflect?", "The color you see is the color that is NOT absorbed. Slide Photosynthesis 8.")
    ],
    watch:[ W(near(/absorb/, /green/, 15), "Check that. Does chlorophyll absorb green, or bounce it back?", "Color reflected") ]},
  { n:17, heading:"Light and Pigments", prompt:"Predict how a plant would grow under only green light.",
    guide:"Which color of light is least useful to a plant, and why?", where:"Slide: Photosynthesis 8 to 10 | Book: Pigments, p. 230",
    model:"The plant would grow poorly. Green light is the least useful color because chlorophyll reflects green light instead of absorbing it, so the plant gets little energy.",
    ideas:[
      I("Prediction", [/poor|bad|slow|not (grow )?(well|good)|won.?t grow|wouldn.?t grow|die|struggle|weak|little|less|barely|not much/], "Would the plant grow well or poorly?", "Read the Also know line on Slide Photosynthesis 8."),
      I("Why", [/reflect|not absorb|doesn.?t absorb|can.?t absorb|bounc/], "Why is green light the least useful?", "Use your note 16. What does chlorophyll do with green light?")
    ]},
  { n:18, heading:"The Chloroplast and the Two Parts", prompt:"Label a sketch of a chloroplast.",
    guide:"Where are the thylakoids, grana, and stroma? Where is the chlorophyll?", where:"Slide: Photosynthesis 12 | Book: Chloroplasts, p. 231",
    draw:"Sketch a chloroplast. Label the thylakoids, a granum, and the stroma.",
    model:"Thylakoids are flattened sacs of membrane. A stack of thylakoids is a granum (plural: grana). The stroma is the fluid outside the thylakoids. Chlorophyll is in the thylakoid membranes.",
    ideas:[
      I("Thylakoids", [/thyla|thila|thigh ?la/], "Name the flattened sacs inside the chloroplast.", "Slide Photosynthesis 12, first box."),
      I("Grana", [/gran(a|um)|stack/], "What is a stack of thylakoids called?", "Slide Photosynthesis 12, second box."),
      I("Stroma", [/stroma|stromo/], "What is the fluid around the thylakoids called?", "Slide Photosynthesis 12, third box."),
      I("Where the chlorophyll is", [either(T.chlorophyll, /thyla|thila|membrane/, 60)], "Where is the chlorophyll?", "Slide Photosynthesis 12, the THYLAKOIDS box.")
    ]},
  { n:19, heading:"The Chloroplast and the Two Parts", prompt:"Identify the two parts of photosynthesis.",
    guide:"What is each part called, and where does each one happen?", where:"Slide: Photosynthesis 15 | Book: An Overview of Photosynthesis, p. 233",
    model:"Part 1 is the light-dependent reactions, in the thylakoid membranes. Part 2 is the light-independent reactions (the Calvin cycle), in the stroma.",
    ideas:[
      I("Part 1", [/light ?dependent|light reactions?/], "What is the first part called?", "Slide Photosynthesis 15, KEY TERMS."),
      I("Where part 1 happens", [/thyla|thila/], "Where do the light-dependent reactions happen?", "Slide Photosynthesis 16, the Where row."),
      I("Part 2", [/calvin|light ?independent/], "What is the second part called?", "Slide Photosynthesis 15, KEY TERMS."),
      I("Where part 2 happens", [/stroma|stromo/], "Where does the Calvin cycle happen?", "Slide Photosynthesis 16, the Where row.")
    ]},
  { n:20, heading:"The Chloroplast and the Two Parts", prompt:"Compare the light-dependent reactions and the Calvin cycle.",
    guide:"What goes in and comes out of each? Which releases oxygen, and where does the oxygen come from?", where:"Slide: Photosynthesis 16 to 18 | Book: The Light-Dependent Reactions, p. 235; The Light-Independent Reactions, p. 238",
    model:"The light-dependent reactions take in light and water and make ATP, NADPH, and oxygen. The oxygen comes from water that is split. The Calvin cycle takes in carbon dioxide, ATP, and NADPH and builds sugar.",
    ideas:[
      I("Part 1 makes", [near(LIGHT_DEP, /atp|nadph|n a d p h|energy carrier/, 120)], "What do the light-dependent reactions make?", "Slide Photosynthesis 16, the Comes out row."),
      I("Oxygen and water", [either(O2, /split|break|water/, 50)], "Which part releases oxygen, and where does the oxygen come from?", "Read the Also know line on Slide Photosynthesis 16."),
      I("Calvin cycle uses", [near(CALVIN, /carbon dioxide|co ?2|c o 2/, 120), near(/carbon dioxide|co ?2/, CALVIN, 80)], "What does the Calvin cycle take in to build sugar?", "Slide Photosynthesis 16, the Goes in row."),
      I("Calvin cycle makes", [either(CALVIN, GLUCOSE, 120)], "What does the Calvin cycle build?", "Slide Photosynthesis 16, the Comes out row.")
    ]},
  { n:21, heading:"Cellular Respiration Basics", prompt:"Explain why cells release food energy gradually.",
    guide:"What would happen if a cell burned glucose all at once?", where:"Slide: Respiration 4 | Book: Chemical Energy and Food, p. 250",
    model:"If a cell burned glucose all at once, it would release all the energy as heat and light and destroy the cell. So cells break glucose down in small steps and capture a little energy at a time as ATP.",
    ideas:[
      I("All at once", [/destroy|die|kill|burn|explod|damage|fire|too much (heat|energy)|waste/], "What would happen if a cell burned glucose all at once?", "Slide Respiration 4, the All at once box."),
      I("Step by step", [/step|little at a time|bit at a time|gradual|slow|small (amount|part|piece)|pieces/], "How do cells release the energy instead?", "Slide Respiration 4, the Step by step box.")
    ]},
  { n:22, heading:"Cellular Respiration Basics", prompt:"Define cellular respiration.",
    guide:"What does it release, and which gas does it need?", where:"Slide: Respiration 5 | Book: Overview of Cellular Respiration, p. 251",
    model:"Cellular respiration is the process that releases energy from food (glucose) in the presence of oxygen.",
    ideas:[
      I("What it releases", [/releas\w*.{0,30}energy|energy.{0,30}(from|out of) (food|glucose|sugar)|make\w* atp|break\w* down (food|glucose|sugar)/], "What does cellular respiration release?", "Slide Respiration 5, the line under the title."),
      I("The gas it needs", [O2], "Which gas does it need?", "Why do you breathe harder when you run? Slide Respiration 3.")
    ]},
  { n:23, heading:"Cellular Respiration Basics", prompt:"Write the cellular respiration equation in words and in symbols.",
    guide:"What are the reactants (inputs)? What are the products (outputs)?", where:"Slide: Respiration 5 to 7 | Book: Overview of Cellular Respiration, p. 251",
    model:"In words: oxygen + glucose makes carbon dioxide + water + energy (ATP). In symbols: 6O2 + C6H12O6 makes 6CO2 + 6H2O + energy.",
    ideas:[
      I("Reactants", [either(O2, GLUCOSE, 40)], "What goes in? Name the two reactants.", "Slide Respiration 5, Reactants (inputs)."),
      I("Products", [either(CO2, H2O, 40)], "What comes out? Name the products.", "Slide Respiration 5, Products (outputs)."),
      I("Energy", [/energy|\batp\b/], "What useful thing does respiration make besides the two waste products?", "Slide Respiration 5, the last product."),
      I("In symbols", [/\b6 ?o ?2\b|c ?6 ?h ?12 ?o ?6/], "Write the equation with chemical symbols too.", "Copy the symbols line from Slide Respiration 5.")
    ],
    watch:[ W(near(/(carbon dioxide|co2).{0,25}(and|plus)? ?water|water.{0,25}(and|plus)? ?(carbon dioxide|co2)/, /(make|makes|yield|produce|into|become|gives?)\w*.{0,20}(glucose|sugar)/, 40), "Check that. That is the photosynthesis equation. Which way does respiration go?") ]},
  { n:24, heading:"The Three Stages", prompt:"Sequence the three stages of cellular respiration.",
    guide:"Which comes first, second, and third? Which happen in the cytoplasm, and which in the mitochondria?", where:"Slide: Respiration 9 | Book: Stages of Cellular Respiration, p. 252",
    model:"1. Glycolysis, in the cytoplasm. 2. The Krebs cycle, in the mitochondria. 3. The electron transport chain, in the mitochondria.",
    ideas:[
      I("The order", [near(T.glycolysis, near(T.krebs, T.etc, 120), 120)], "Which stage comes first, second, and third?", "Slide Respiration 9 shows the map in order."),
      I("Cytoplasm stage", [either(T.glycolysis, T.cytoplasm, 60)], "Which stage happens in the cytoplasm?", "Read the Also know line on Slide Respiration 9."),
      I("Mitochondria stages", [either(/krebs|electron transport|\betc\b|both|last two|other two|second and third/, T.mito, 80)], "Which stages happen in the mitochondria?", "Read the Also know line on Slide Respiration 9.")
    ]},
  { n:25, heading:"The Three Stages", prompt:"Distinguish aerobic from anaerobic.",
    guide:"Which stage is anaerobic? Which stages need oxygen? What happens when oxygen runs out?", where:"Slide: Respiration 10 | Book: Oxygen and Energy, p. 252",
    model:"Aerobic means it requires oxygen. Anaerobic means it does not require oxygen. Glycolysis is anaerobic. The Krebs cycle and electron transport chain are aerobic. When oxygen runs out, the aerobic stages stop and glycolysis keeps going, followed by fermentation.",
    ideas:[
      I("Aerobic", [near(/\baerobic/, /oxygen|air/, 50)], "What does aerobic mean?", "Slide Respiration 10, the Meaning row."),
      I("Anaerobic", [near(/anaerobic|an aerobic/, new RegExp(NEG + ".{0,25}(oxygen|air)|without (oxygen|air)"), 60)], "What does anaerobic mean?", "Slide Respiration 10, the Meaning row."),
      I("The anaerobic stage", [either(T.glycolysis, /anaerobic|an aerobic|no oxygen|without oxygen|doesn.?t need oxygen/, 60)], "Which stage is anaerobic?", "Slide Respiration 10, the Stages row."),
      I("When oxygen runs out", [/stop|ferment|slow/], "What happens when oxygen runs out?", "Slide Respiration 10, the No oxygen? row.")
    ]},
  { n:26, heading:"The Three Stages", prompt:"Identify the \"cycle\" that is NOT a stage of cellular respiration.",
    guide:"Which process does the Calvin cycle belong to instead?", where:"Slide: Respiration 11 to 12 | Book: Stages of Cellular Respiration, p. 252",
    model:"The Calvin cycle is NOT a stage of cellular respiration. It belongs to photosynthesis.",
    ideas:[
      I("The cycle", [/calvin/], "Which cycle is not a stage of cellular respiration?", "Slide Respiration 12 answers this one."),
      I("Where it belongs", [T.photo], "Which process does the Calvin cycle belong to instead?", "Look back at your note 19.")
    ],
    watch:[ W(/krebs (cycle )?(is not|isn.?t)/, "Check that. The Krebs cycle IS a stage of respiration.", "The cycle") ]},
  { n:27, heading:"Photosynthesis vs. Respiration", prompt:"Compare photosynthesis and cellular respiration.",
    guide:"Which one deposits energy and which withdraws it? Where does each happen? Do plants do both?", where:"Slide: Respiration 14 to 15 | Book: Comparing Photosynthesis and Cellular Respiration, p. 253",
    model:"Photosynthesis deposits (stores) energy in glucose. It happens in chloroplasts. Cellular respiration withdraws (releases) the energy in glucose to make ATP. It happens in the cytoplasm and mitochondria. Plants do both.",
    ideas:[
      I("Deposit", [either(T.photo, /deposit|stor|captur|sav/, 60)], "Which one deposits (stores) energy?", "Slide Respiration 14, Deposit and Withdraw."),
      I("Withdraw", [either(T.resp, /withdraw|releas|use|spend|break/, 60)], "Which one withdraws (releases) energy?", "Slide Respiration 14, Deposit and Withdraw."),
      I("Where photosynthesis happens", [either(T.photo, T.chloro, 80)], "Where does photosynthesis happen?", "Slide Respiration 15, the Where row."),
      I("Where respiration happens", [either(T.resp, T.mito, 130)], "Where does cellular respiration happen?", "Slide Respiration 15, the Where row."),
      I("Plants do both", [/both|plants (also|do) (do )?respiration|plants? .{0,30}(also|too)/], "Do plants do both?", "Slide Respiration 14, the Plants do both box.")
    ],
    watch:[ W(/plants (only|just) do photo|plants (don.?t|do not) do (cellular )?resp|instead of (cellular )?resp/, "Check that. Do plants do cellular respiration too?") ]},
  { n:28, heading:"Photosynthesis vs. Respiration", prompt:"Explain why they are called opposite processes.",
    guide:"How do the products of one match the reactants of the other?", where:"Slide: Respiration 15 to 18 | Book: Comparing Photosynthesis and Cellular Respiration, p. 253",
    model:"They are opposites because the products of one are the reactants of the other. Photosynthesis makes glucose and oxygen, which respiration uses. Respiration makes carbon dioxide and water, which photosynthesis uses.",
    ideas:[
      I("The big idea", [/products? .{0,40}(reactants?|inputs?|use|need)|outputs? .{0,40}inputs?|reactants? .{0,40}products?|what one makes.{0,40}other (uses|needs)/], "How do the products of one match the reactants of the other?", "Slide Respiration 15, the Also know line."),
      I("An example", [either(GLUCOSE, O2, 40), either(CO2, H2O, 40)], "Give an example: what does one make that the other uses?", "Slide Respiration 18, The Energy Cycle.")
    ]}
  ]
});
})();

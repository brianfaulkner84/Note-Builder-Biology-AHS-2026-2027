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
    model:"• Energy is the ability to do work\n• Living things store energy in the chemical bonds of molecules, like the sugar in food",
    watch:[
      W(/\bstor\w* (?:\w+ ){0,2}(?:energy )?in (?:the |their |its |our )?(?:nucleus|new ?clear|dna|blood|cell membrane|cell wall)\b/, "Check that. Living things store energy in the bonds of molecules. Which molecules?"),
      W(/\benergy (?:is|gets|can be) (?:created|made from nothing)|(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:create|creates|creating) (?:new )?energy\b/, "Check that. Can energy be created, or only changed from one form to another?"),
      W(/\bstor\w* (?:the |their |its )?energy in (?:the )?(?:mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b)/, "Check that. Where do living things store energy, in an organelle or in the bonds of molecules?") ],
    ideas:[
      I("What energy is", [/ability to do work|able to do work|ability to work|capacity to do work|do work/], "What is energy the ability to do?", "Slide Energy 4, the line under the title."),
      I("Where it is stored", [/bond|chemical|molecule|food|sugar|glucose/], "Where do living things store energy?", "Slide Energy 4, the Chemical box.")
    ]},
  { n:2, heading:"Energy and Food", prompt:"Identify the monomer (building block) of carbohydrates.",
    guide:"What is the building block called? Give one example.", where:"Slide: Energy 5 | Book: Carbohydrates, Simple Sugars, p. 46 (Chapter 2)",
    model:"• The monomer of carbohydrates is a simple sugar (monosaccharide)\n• Example: glucose",
    ideas:[
      I("The monomer", [/simple sugar|mono ?sacchar|monosaccharide|single sugar|one sugar/], "What is the building block of a carbohydrate called?", "Slide Energy 5, the Simple sugar box."),
      I("Example", [/glucose|fructose|galactose/], "Give one example of a simple sugar.", "Slide Energy 5 names one. Your body runs on it.")
    ],
    watch:[
      W(/\bglucose is (?:a |an )?(?:polysaccharide|disaccharide|complex (?:carb\w*|sugar)|starch|polymer)\b/, "Check that. Is glucose one sugar or many sugars joined together?"),
      W(/\b(?:monomer|building block)s? (?:of (?:a )?carbohydrates? )?(?:is|are) (?:a |an |the )?(?:starch|glycogen|cellulose|polysaccharide|disaccharide|sucrose|lactose)/, "Check that. That is a big carbohydrate made of many sugars. What is the single building block?", "The monomer"), W(/amino acid|nucleotide|fatty acid/, "Check that. That is the monomer of a different macromolecule.", "The monomer") ]},
  { n:3, heading:"Energy and Food", prompt:"Compare a calorie and a Calorie.",
    guide:"What does a small calorie heat, and by how much? How many calories are in one food-label Calorie?", where:"Slide: Energy 6 | Book: Chemical Energy and Food, p. 250",
    model:"• A calorie (small c) is the energy needed to raise 1 gram of water 1 degree Celsius\n• A food-label Calorie (capital C) is a kilocalorie: 1 Calorie equals 1,000 calories",
    watch:[
      W(/(?<!\bnot )\b(?:10|ten|10 000|ten thousand|a million|one million) (?:small )?calories\b/, "Check that. Kilo means 1,000. How many small calories are in one food label Calorie?"),
      W(/\b(?:100|one hundred|a hundred|hundred)(?: small)? calories\b/, "Check that. How many small calories are in one food label Calorie?"),
      W(/\bfahrenheit|\bfarenheit|\bfarenhite|\bfahrenheight/, "Check that. Which temperature scale does science use for the small calorie?") ],
    ideas:[
      I("Small calorie", [/(1|one) ?(gram|g)\b.{0,30}water/, /water.{0,40}(1|one) ?(degree|c\b|celsius)/, /heat\w* water/], "What does a small calorie heat, and by how much?", "Slide Energy 6, the CALORIE (SMALL C) box."),
      I("Food-label Calorie", [/1 ?000|thousand|kilo ?calorie|kcal/], "How many small calories are in one food-label Calorie?", "Slide Energy 6, the CALORIE (CAPITAL C) box.")
    ]},
  { n:4, heading:"Energy and Food", prompt:"Calculate the Calories in a food.",
    guide:"How many Calories per gram do carbohydrates, proteins, and fats give? Try it: 10 grams of fat.", where:"Slide: Energy 6 to 8 | Book: Chemical Energy and Food, p. 250",
    model:"• Carbohydrates and proteins give about 4 Calories per gram\n• Fats give about 9 Calories per gram\n• Multiply grams by Calories per gram\n• 10 grams of fat x 9 = 90 Calories",
    watch:[
      W(/\bdivid\w*/, "Check that. To find the Calories, do you multiply or divide?"),
      W(/\b(?:19|nineteen)\b/, "Check that. Do you add or multiply the grams and the Calories per gram?", "The practice problem"),
      W(/\bfats? (?:give |gives |have |has |are |is |equal |equals |provide |provides )(?:about |around |only )?(?:4|four)\b|\b(?:carb\w*|proteins?) (?:give |gives |have |has |are |is |equal |equals |provide |provides )(?:about |around )?(?:9|nine)\b/, "Check that. Which one gives more Calories per gram, fat or carbohydrates?"),
      W(/\b(?:40|forty)\b/, "Check that. Which Calories per gram number goes with fat?", "The practice problem") ],
    ideas:[
      I("Carbs and proteins", [/\b(4|four)\b/], "How many Calories per gram do carbohydrates and proteins give?", "Slide Energy 6, the PER GRAM box."),
      I("Fats", [/\b(9|nine)\b/], "How many Calories per gram do fats give?", "Slide Energy 6, the PER GRAM box."),
      I("The practice problem", [/\b(90|ninety)\b/], "Try it: how many Calories are in 10 grams of fat?", "Multiply the grams by the Calories per gram for fat.")
    ]},
  { n:5, heading:"ATP and ADP", prompt:"Describe the ATP molecule.",
    guide:"What does ATP stand for? What three parts make it up?", where:"Slide: Energy 10 | Book: Chemical Energy and ATP, p. 226",
    model:"• ATP stands for adenosine triphosphate\n• It is made of adenine, ribose (a 5-carbon sugar), and three phosphate groups\n• It is the main energy source of the cell",
    watch:[
      W(/\b(?:6|six|3|three|4|four) ?carbon sugar\b|\bribose (?:is |a |an |which is )*(?:6|six|3|three) ?carbon\b/, "Check that. How many carbons does ribose have?"),
      W(/\bdeoxy ?ribose|\b(?:sugar|ribose) (?:is |called |named |which is )?glucose\b/, "Check that. Which 5 carbon sugar is in ATP?"),
      W(/\badenine tri ?phosphate/, "Check that. Adenine is one of the parts. What is the full name of ATP?", "What ATP stands for"), W(/\b(2|two|di) ?phosphates?/, "Check that. How many phosphates does ATP have?", "Part 3") ],
    ideas:[
      I("What ATP stands for", [/adenosine ?tri ?phosphate|adenosine tri/], "What does ATP stand for?", "Slide Energy 10, the line under the title."),
      I("Part 1", [/adenine/], "Name the base in ATP.", "Slide Energy 10, the THREE PARTS box."),
      I("Part 2", [/ribose|sugar/], "Name the sugar in ATP.", "Slide Energy 10, the THREE PARTS box."),
      I("Part 3", [/(3|three) phosphate|phosphates?/], "How many phosphate groups does ATP have?", "\"Tri\" means how many?")
    ]},
  { n:6, heading:"ATP and ADP", prompt:"Explain how ATP stores and releases energy.",
    guide:"What happens when a phosphate is added to ADP? Which bond breaks to release energy?", where:"Slide: Energy 11 | Book: Storing Energy, Releasing Energy, p. 227",
    model:"• To store energy, the cell adds a phosphate to ADP, which makes ATP\n• To release energy, the cell breaks the bond to the third phosphate, and ATP becomes ADP again",
    watch:[
      W(/(?<!\bnot (?:the )?)\b(?:first|second|1st|2nd|middle) phosphate\b/, "Check that. Which phosphate's bond breaks to release energy?"),
      W(/\b(?:add|adds|adding|added|attach\w*|put|puts) (?:a |one |another |the )?(?:third )?phosphate (?:on )?(?:to|onto) (?:an? |the )?atp\b|\batp (?:\w+ ){0,3}(?:gains?|gets|picks up) (?:a |another )?phosphate\b/, "Check that. Which molecule gets the phosphate added to it to store energy?"),
      W(/\b(?:add|adds|adding|added|attach\w*) (?:a |one |the )?phosphate (?:to (?:adp|atp) )?releases?\b|\breleas\w* energy by (?:add|attach)\w*/, "Check that. Does adding a phosphate store energy or release it?"),
      W(/\b(?:break\w*|remov\w*|los\w*) (?:\w+ ){0,3}(?:stores?|storing) (?:the )?energy\b|\badp (?:has|have|with|contains) (?:\w+ )?(?:3|three|tri)\b/, "Check that. Which one has three phosphates, and which change stores energy?") ],
    ideas:[
      I("Storing", [either(/add|attach|put/, T.adp, 50), near(T.adp, /\+|plus|and a phosphate|becomes atp|makes atp|to atp/, 40)], "What does the cell add to ADP to store energy?", "Slide Energy 11, the STORING ENERGY box."),
      I("Releasing", [/break\w*.{0,30}(bond|phosphate)|remov\w*.{0,30}phosphate|third phosphate|last phosphate|lose\w* a phosphate/], "Which bond breaks to release the energy?", "Slide Energy 11, the RELEASING ENERGY box.")
    ]},
  { n:7, heading:"ATP and ADP", prompt:"List the cell jobs that ATP powers.",
    guide:"Name at least three things cells use ATP for.", where:"Slide: Energy 12 | Book: Using Biochemical Energy, p. 227",
    model:"• ATP powers active transport (protein pumps), movement (muscles, cilia, and flagella), building proteins and other molecules, and making light, like a firefly's glow",
    watch:[
      W(/(?<!\bnot )(?<!n't )(?<!\bdont )(?<!\bdoesnt )(?<!\bisnt )\b(?:makes?|making|creates?|creating|produces?|producing) (?:more |new )?energy\b/, "Check that. ATP does not make energy. Which cell jobs does ATP power?"),
      W(/(?<!\b(?:not|no|never|unlike|than|isn't|isnt|doesn't|doesnt|or) (?:\w+ )?)\b(?:passive transport|diffusion|osmosis)\b/, "Check that. Which kind of transport needs no energy from the cell?") ],
    ideas:[
      I("Job 1: pumping", [/active transport|pump/], "Which kind of cell transport runs on ATP?", "Slide Energy 12, first box."),
      I("Job 2: moving", [/\bmov|muscle|contract|cilia|flagell/], "What job do motor proteins do with ATP?", "Slide Energy 12, second box."),
      I("Job 3: building", [/build|making protein|make protein|making molecule|synthes/], "What do cells build with ATP?", "Slide Energy 12, third box.")
    ]},
  { n:8, heading:"ATP and ADP", prompt:"Explain why cells keep only a small supply of ATP.",
    guide:"Which stores more energy, glucose or ATP? Which is better for moving energy quickly?", where:"Slide: Energy 13 | Book: Using Biochemical Energy, p. 227",
    model:"• Glucose stores much more energy than ATP, more than 90 times as much\n• ATP is better for moving energy quickly\n• So cells store energy in glucose and remake ATP from ADP when they need it",
    watch:[
      W(/(?<!\bnot )(?<!n't )(?<!\bisnt )\b(?:toxic|poison\w*|dangerous|harmful)\b/, "Check that. ATP is not harmful. Which one stores more energy, glucose or ATP?"),
      W(/\bgone forever\b|\b(?:can't|cant|cannot|can not) be (?:remade|reused|recycled|made again|rebuilt)\b|\b(?:can't|cant|cannot|can not) (?:remake|reuse|recycle|rebuild) (?:it|atp|the atp)\b/, "Check that. What happens to ADP after ATP is used? Can the cell remake ATP?"),
      W(/\batp (?:stores?|holds?|has|contains?) (?:much |a lot |way |way more |far )?more energy\b|\b(?:glucose|sugar) (?:stores?|holds?|has|contains?) less energy|\b(?:glucose|sugar) (?:is )?(?:better|good|best) (?:for|at) (?:moving|spending|transferring|quick)/, "Check that. Which one stores more energy, and which one is better for moving energy quickly?") ],
    ideas:[
      I("Better for storing", [near(GLUCOSE, /more energy|stores? more|holds? more|90|ninety|lots of energy|a lot of energy|better (for|at) stor/, 60), near(/stores? more|more energy|holds? more/, GLUCOSE, 40)], "Which stores more energy, glucose or ATP?", "Slide Energy 13, the Bad for saving box."),
      I("Better for moving", [near(T.atp, /quick|fast|mov\w* energy|transfer|spend/, 60)], "What is ATP good for?", "Slide Energy 13, the Good for spending box.")
    ]},
  { n:9, heading:"Energy Carriers", prompt:"Describe what an electron carrier does.",
    guide:"What does it pick up, and what does it do with it?", where:"Slide: Energy 15 | Book: High-Energy Electrons, p. 232",
    model:"• An electron carrier picks up high-energy electrons, carries them, and drops them off where the energy is needed, like a taxi",
    watch:[
      W(/(?<!\bnot )(?<!\bno )\blow(?:er)? energy electrons?\b/, "Check that. Are the electrons a carrier picks up high energy or low energy?"),
      W(/\b(?:picks? up|picking up|carr(?:y|ies)|carrying) (?:the )?(?:oxygen|atp|glucose|sugar)\b/, "Check that. What does an electron carrier actually pick up and carry?"),
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:makes?|creates?|produces?) (?:high energy )?electrons\b/, "Check that. Does the carrier make electrons, or move them?") ],
    ideas:[
      I("What it picks up", [/electron/], "What does an electron carrier pick up?", "Slide Energy 15 calls them energy taxis."),
      I("What it does with it", [/carr|transport|deliver|drop|bring|move|take/], "What does it do with what it picks up?", "Think about what a taxi does with a passenger.")
    ]},
  { n:10, heading:"Energy Carriers", prompt:"Compare NAD+ and NADP+.",
    guide:"What does each become when it is loaded? Which process uses each one?", where:"Slide: Energy 15 | Book: High-Energy Electrons, p. 232; NADH Production, p. 255",
    model:"• NAD+ picks up electrons and becomes NADH\n• It is used in cellular respiration\n• NADP+ picks up electrons and becomes NADPH\n• It is used in photosynthesis",
    watch:[
      W(/\bnad\b(?! ?h\b)(?: plus)? (?:\w+ ){0,4}becomes? (?:an? )?nadp ?h\b|\bnadp\b(?! ?h\b)(?: plus)? (?:\w+ ){0,4}becomes? (?:an? )?nad ?h\b/, "Check that. Match each carrier to its loaded form. NAD+ becomes what, and NADP+ becomes what?"),
      W(/\b(?:are|is) (?:exactly |basically |just )?the same (?:thing|molecule|carrier)\b(?! (?:but|except))/, "Check that. They both carry electrons, but they are not the same. Which process uses each one?"),
      W(/\bnadp ?h?\b(?: (?!nad\b|nadh\b|nad h\b)\w+){0,4} (?:is )?(?:used )?(?:in|for|during) (?:cellular )?respiration|\bnad ?h?\b(?: (?!nadp)\w+){0,4} (?:is )?(?:used )?(?:in|for|during) photo ?synth/, "Check that. Which carrier goes with photosynthesis, and which goes with respiration?") ],
    ideas:[
      I("NAD+ loaded", [T.nadh], "What does NAD+ become when it is loaded?", "Slide Energy 15, the NAD+ TO NADH box."),
      I("NAD+ process", [either(T.nadh, T.resp, 80), either(T.nad, T.resp, 80)], "Which process uses NAD+?", "Slide Energy 15, the NAD+ TO NADH box."),
      I("NADP+ loaded", [T.nadph], "What does NADP+ become when it is loaded?", "Slide Energy 15, the NADP+ TO NADPH box."),
      I("NADP+ process", [either(T.nadph, T.photo, 80), either(T.nadp, T.photo, 80)], "Which process uses NADP+?", "Slide Energy 15, the NADP+ TO NADPH box.")
    ]},
  { n:11, heading:"Energy Carriers", prompt:"Classify ATP, ADP, NAD+, glucose, and glycolysis as molecules or processes.",
    guide:"Which ones are things that hold or carry energy? Which one is a set of steps?", where:"Slide: Energy 16 to 17 | Book: not a textbook heading; use the slide",
    model:"• Molecules: ATP, ADP, NAD+, and glucose\n• Process: glycolysis",
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
    model:"• Autotrophs make their own food using energy from sunlight\n• Examples: plants and algae\n• Heterotrophs get energy by eating or absorbing other living things\n• Examples: animals and mushrooms",
    watch:[
      W(/\bhetero\w*.{0,30}(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:make|makes|produce|produces) (?:their|its) own food/, "Check that. \"Hetero\" means other. Which group makes its own food?"),
      W(/\b(?:animals?|humans?|mushrooms?|fungi|fungus|people) (?:are|is) (?:an? )?auto|\b(?:plants?|algae|trees?|grass) (?:are|is) (?:an? )?hetero/, "Check that. Does that organism make its own food or eat other things?"), W(/auto\w*.{0,30}\beat/, "Check that. Autotrophs make their own food. Which group eats?", "Autotrophs") ],
    ideas:[
      I("Autotrophs", [near(/auto/, /(make|makes|making|produce)\w* (their|its) own food|sun|light|photo/, 80)], "How does an autotroph get energy?", "\"Auto\" means self. Slide Energy 19."),
      I("Autotroph examples", [/plant|algae|tree|grass/], "Give examples of autotrophs.", "Slide Energy 19, the Examples row."),
      I("Heterotrophs", [near(/hetero/, /\beat|consum|absorb|other (living|organism)|food from/, 80)], "How does a heterotroph get energy?", "\"Hetero\" means other. Slide Energy 19."),
      I("Heterotroph examples", [/animal|mushroom|fung|human|people|cheetah|whale|dog|cat|cow|lion|bacteri/], "Give examples of heterotrophs.", "Slide Energy 19, the Examples row.")
    ]},
  { n:13, heading:"Autotrophs and Heterotrophs", prompt:"Classify algae and mushrooms.",
    guide:"Which is the autotroph? Why is a mushroom NOT an autotroph?", where:"Slide: Energy 20 to 21 | Book: Heterotrophs and Autotrophs, p. 228",
    model:"• Algae are autotrophs because they make food from sunlight\n• Mushrooms are heterotrophs\n• They cannot make their own food from sunlight, so they absorb food from dead matter",
    ideas:[
      I("Algae", [either(/algae/, /auto/, 40)], "Are algae autotrophs or heterotrophs?", "Can algae make food from sunlight? Slide Energy 21."),
      I("Mushrooms", [either(/mushroom/, /hetero/, 40)], "Are mushrooms autotrophs or heterotrophs?", "Slide Energy 21 answers this one."),
      I("Why the mushroom", [/absorb|decompos|dead|rott|can.?t make|cannot make|don.?t make|doesn.?t make|no (chloro|sun)|not (make|photo)|from other/], "Why is a mushroom NOT an autotroph?", "Read the line at the top of Slide Energy 21.")
    ],
    watch:[
      W(/\balgae (?:is|are) (?:an? )?hetero/, "Check that. Can algae make food from sunlight?"),
      W(/\bmushrooms? (?:make|makes|get|gets) (?:their |its )?(?:own )?food from (?:the )?(?:sun|light)/, "Check that. Does a mushroom have chlorophyll to use sunlight?"), W(/mushrooms? (is|are) (an? )?auto/, "Check that. Can a mushroom make food from sunlight?") ]},
  { n:14, heading:"Photosynthesis Basics", prompt:"Define photosynthesis.",
    guide:"What does the word mean? Which kind of energy becomes which kind?", where:"Slide: Photosynthesis 4 | Book: Heterotrophs and Autotrophs, p. 228",
    model:"• Photosynthesis means using light to put something together\n• Plants use light energy to make sugar, so light energy becomes chemical energy stored in sugar",
    watch:[
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:food|energy|sugar|nutrients?) (?:\w+ )?from (?:the )?(?:soil|dirt|ground)\b/, "Check that. Where does a plant's food really come from?"),
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:make|makes|making|create|creates|creating) (?:their own |its own |new )?energy\b/, "Check that. Energy is not made from nothing. Which kind of energy is changed into which kind?"), W(/chemical (energy )?(into|to|becomes) light/, "Check that. Which energy goes in, and which comes out?") ],
    ideas:[
      I("What the word means", [/(light|photo).{0,30}(put\w* together|build|synthes|make)/, /put\w* together/], "What does the word photosynthesis mean?", "Photo means ___. Synthesis means ___. Slide Photosynthesis 4."),
      I("Energy change", [near(/light/, /chemical/, 60)], "Which kind of energy becomes which kind?", "Slide Photosynthesis 4, KEY TERMS.")
    ]},
  { n:15, heading:"Photosynthesis Basics", prompt:"Write the photosynthesis equation in words and in symbols.",
    guide:"What are the reactants? What are the products?", where:"Slide: Photosynthesis 5 | Book: An Overview of Photosynthesis, p. 232",
    model:"• In words: carbon dioxide + water + light makes sugar (glucose) + oxygen\n• In symbols: 6CO2 + 6H2O + light makes C6H12O6 + 6O2",
    ideas:[
      I("Reactants", [either(CO2, H2O, 40)], "What goes in? Name the two reactants.", "Slide Photosynthesis 5, Reactants (in)."),
      I("Products", [either(GLUCOSE, O2, 40)], "What comes out? Name the two products.", "Slide Photosynthesis 5, Products (out)."),
      I("In symbols", [/\b6 ?co ?2\b|c ?6 ?h ?12 ?o ?6/], "Write the equation with chemical symbols too.", "Copy the symbols line from Slide Photosynthesis 5.")
    ],
    watch:[
      W(/\bphoto ?synth\w*.{0,20}(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:uses?|needs?|requires?|takes? in) oxygen\b/, "Check that. Is oxygen a reactant or a product of photosynthesis?"),
      W(/\bphoto ?synth\w*.{0,20}(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:makes?|produces?|releases?|gives? off) (?:carbon dioxide|co ?2|c o 2)\b/, "Check that. Does photosynthesis take in carbon dioxide or give it off?"), W(near(/oxygen.{0,25}(and|plus)? ?(glucose|sugar)|(glucose|sugar).{0,25}(and|plus)? ?oxygen/, /(make|makes|yield|produce|into|become|gives?)\w*.{0,20}(carbon dioxide|co2)/, 40), "Check that. That is the respiration equation. Which way does photosynthesis go?") ]},
  { n:16, heading:"Light and Pigments", prompt:"Explain why leaves look green.",
    guide:"Which colors does chlorophyll absorb? Which color does it reflect?", where:"Slide: Photosynthesis 7 to 8 | Book: Light, Pigments, p. 230",
    model:"• Chlorophyll absorbs blue-violet and red light well\n• It does not absorb green; it reflects green light back to our eyes, so leaves look green",
    ideas:[
      I("Colors absorbed", [either(/blue|violet|purple/, /\bred\b/, 60)], "Which colors does chlorophyll absorb?", "Slide Photosynthesis 7, the Also know line."),
      I("Color reflected", [near(/reflect|bounc/, /green/, 40), near(/green/, /reflect|bounc/, 40)], "Which color does chlorophyll reflect?", "The color you see is the color that is NOT absorbed. Slide Photosynthesis 8.")
    ],
    watch:[
      W(/(?<!\bnot )(?<!n't )\babsorbs? (?:all|every|each) (?:of )?(?:the )?(?:colou?rs?|light)\b/, "Check that. If chlorophyll absorbed every color, what color would leaves look?"),
      W(/\breflect\w* (?:\w+ ){0,2}(?<!not |no )(?:red|blue|violet|purple)\b/, "Check that. The color that bounces back is the color you see. Which color is that?"), W(near(/absorb/, /green/, 15), "Check that. Does chlorophyll absorb green, or bounce it back?", "Color reflected") ]},
  { n:17, heading:"Light and Pigments", prompt:"Predict how a plant would grow under only green light.",
    guide:"Which color of light is least useful to a plant, and why?", where:"Slide: Photosynthesis 8 to 10 | Book: Pigments, p. 230",
    model:"• The plant would grow poorly\n• Green light is the least useful color because chlorophyll reflects green light instead of absorbing it, so the plant gets little energy",
    watch:[
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:absorb|absorbs|absorbing) (?:\w+ ){0,2}green\b/, "Check that. Does chlorophyll absorb green light or reflect it?"),
      W(/\bgreen (?:light )?(?:is )?(?:the )?(?:best|most useful|most helpful|most energy)\b/, "Check that. Is green light the most useful or the least useful color for a plant?"), W(/grow\w* (better|faster|well|good|great)/, "Check that. Is green light useful to a plant?", "Prediction") ],
    ideas:[
      I("Prediction", [/poor|bad|slow|not (grow )?(well|good)|won.?t grow|wouldn.?t grow|die|struggle|weak|little|less|barely|not much/], "Would the plant grow well or poorly?", "Read the Also know line on Slide Photosynthesis 8."),
      I("Why", [/reflect|not absorb|doesn.?t absorb|can.?t absorb|bounc/], "Why is green light the least useful?", "Use your note 16. What does chlorophyll do with green light?")
    ]},
  { n:18, heading:"The Chloroplast and the Two Parts", prompt:"Label a sketch of a chloroplast.",
    guide:"Where are the thylakoids, grana, and stroma? Where is the chlorophyll?", where:"Slide: Photosynthesis 12 | Book: Chloroplasts, p. 231",
    draw:"Sketch a chloroplast. Label the thylakoids, a granum, and the stroma.",
    model:"• Thylakoids are flattened sacs of membrane\n• A stack of thylakoids is a granum (plural: grana)\n• The stroma is the fluid outside the thylakoids\n• Chlorophyll is in the thylakoid membranes",
    watch:[
      W(/\bstroma (?:is|are) (?:the |a |an )?(?:\w+ )?membranes?\b|\bstroma (?:is|are) (?:where )?(?:the )?chloro ?phyl/, "Check that. The stroma is the fluid. Where is the chlorophyll?"),
      W(/\bchloro ?phyl\w* (?:is )?(?:found )?(?:in|inside) (?:the )?(?:stroma|stromo)/, "Check that. Where is the chlorophyll, in the fluid or in the membranes?"),
      W(/\bstroma (?:is|are) (?:a |the )?(?:stacks?|piles?|sacs?|flattened)|\b(?:thyla\w*|grana|granum) (?:is|are) (?:the )?(?:fluid|liquid|jelly)/, "Check that. Which part is the fluid, and which part is the stack of sacs?") ],
    ideas:[
      I("Thylakoids", [/thyla|thila|thigh ?la/], "Name the flattened sacs inside the chloroplast.", "Slide Photosynthesis 12, first box."),
      I("Grana", [/gran(a|um)|stack/], "What is a stack of thylakoids called?", "Slide Photosynthesis 12, second box."),
      I("Stroma", [/stroma|stromo/], "What is the fluid around the thylakoids called?", "Slide Photosynthesis 12, third box."),
      I("Where the chlorophyll is", [either(T.chlorophyll, /thyla|thila|membrane/, 60)], "Where is the chlorophyll?", "Slide Photosynthesis 12, the THYLAKOIDS box.")
    ]},
  { n:19, heading:"The Chloroplast and the Two Parts", prompt:"Identify the two parts of photosynthesis.",
    guide:"What is each part called, and where does each one happen?", where:"Slide: Photosynthesis 15 | Book: An Overview of Photosynthesis, p. 233",
    model:"• Part 1 is the light-dependent reactions, in the thylakoid membranes\n• Part 2 is the light-independent reactions (the Calvin cycle), in the stroma",
    watch:[
      W(/\blight ?dependent(?: reactions?)? (?:happens? |occurs? |takes? place |is |are )?(?:in|inside) (?:the )?(?:stroma|stromo)/, "Check that. Where do the light dependent reactions happen?"),
      W(/\bcalvin\w*(?: cycle)? (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b)/, "Check that. The Calvin cycle is part of photosynthesis. Which organelle is it in?"), W(/calvin.{0,25}thyla/, "Check that. Where does the Calvin cycle happen?") ],
    ideas:[
      I("Part 1", [/light ?dependent|light reactions?/], "What is the first part called?", "Slide Photosynthesis 15, KEY TERMS."),
      I("Where part 1 happens", [/thyla|thila/], "Where do the light-dependent reactions happen?", "Slide Photosynthesis 16, the Where row."),
      I("Part 2", [/calvin|light ?independent/], "What is the second part called?", "Slide Photosynthesis 15, KEY TERMS."),
      I("Where part 2 happens", [/stroma|stromo/], "Where does the Calvin cycle happen?", "Slide Photosynthesis 16, the Where row.")
    ]},
  { n:20, heading:"The Chloroplast and the Two Parts", prompt:"Compare the light-dependent reactions and the Calvin cycle.",
    guide:"What goes in and comes out of each? Which releases oxygen, and where does the oxygen come from?", where:"Slide: Photosynthesis 16 to 18 | Book: The Light-Dependent Reactions, p. 235; The Light-Independent Reactions, p. 238",
    model:"• The light-dependent reactions take in light and water and make ATP, NADPH, and oxygen\n• The oxygen comes from water that is split\n• The Calvin cycle takes in carbon dioxide, ATP, and NADPH and builds sugar",
    watch:[
      W(/\boxygen (?:comes?|is|came) (?:\w+ )?from (?:the )?(?:carbon dioxide|co ?2|c o 2)\b/, "Check that. Which molecule is split to release the oxygen?"),
      W(/\blight ?(?:dependent )?reactions? (?:make|makes|build|builds|produce|produces) (?:\w+ ){0,2}(?:sugar|glucose)\b/, "Check that. Which part actually builds the sugar?"),
      W(/\bcalvin\w*(?: cycle)? (?:makes?|releases?|produces?|gives? off) (?:\w+ ){0,2}oxygen\b/, "Check that. Which part releases the oxygen?") ],
    ideas:[
      I("Part 1 makes", [near(LIGHT_DEP, /atp|nadph|n a d p h|energy carrier/, 120)], "What do the light-dependent reactions make?", "Slide Photosynthesis 16, the Comes out row."),
      I("Oxygen and water", [either(O2, /split|break|water/, 50)], "Which part releases oxygen, and where does the oxygen come from?", "Read the Also know line on Slide Photosynthesis 16."),
      I("Calvin cycle uses", [near(CALVIN, /carbon dioxide|co ?2|c o 2/, 120), near(/carbon dioxide|co ?2/, CALVIN, 80)], "What does the Calvin cycle take in to build sugar?", "Slide Photosynthesis 16, the Goes in row."),
      I("Calvin cycle makes", [either(CALVIN, GLUCOSE, 120)], "What does the Calvin cycle build?", "Slide Photosynthesis 16, the Comes out row.")
    ]},
  { n:21, heading:"Cellular Respiration Basics", prompt:"Explain why cells release food energy gradually.",
    guide:"What would happen if a cell burned glucose all at once?", where:"Slide: Respiration 4 | Book: Chemical Energy and Food, p. 250",
    model:"• If a cell burned glucose all at once, it would release all the energy as heat and light and destroy the cell\n• So cells break glucose down in small steps and capture a little energy at a time as ATP",
    watch:[
      W(/(?<!\bnot )\btoo (?:much|many) atp\b/, "Check that. If glucose burned all at once, would the energy end up as ATP or as heat and light?"),
      W(/(?<!\bif (?:a |the )?)\bcells? (?:\w+ ){0,3}(?:in|with) (?:one|1|a single) (?:big |giant )?(?:step|reaction)\b/, "Check that. Do cells break glucose down in one step or in many small steps?"),
      W(/(?<!\b(?:if|when|suppose|supposing) (?:a |the )?)\bcells? (?:burns?|releases?|uses?) (?:\w+ ){0,3}all at once\b/, "Check that. Do cells release the energy all at once, or a little at a time?"),
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:captur\w*|stor\w*|saves?|saving|keeps?) (?:the |its |that |some |a little )?(?:energy )?(?:as|in) heat\b/, "Check that. What form does the cell capture the energy in, a little at a time?") ],
    ideas:[
      I("All at once", [/destroy|die|kill|burn|explod|damage|fire|too much (heat|energy)|waste/], "What would happen if a cell burned glucose all at once?", "Slide Respiration 4, the All at once box."),
      I("Step by step", [/step|little at a time|bit at a time|gradual|slow|small (amount|part|piece)|pieces/], "How do cells release the energy instead?", "Slide Respiration 4, the Step by step box.")
    ]},
  { n:22, heading:"Cellular Respiration Basics", prompt:"Define cellular respiration.",
    guide:"What does it release, and which gas does it need?", where:"Slide: Respiration 5 | Book: Overview of Cellular Respiration, p. 251",
    model:"• Cellular respiration is the process that releases energy from food (glucose) in the presence of oxygen",
    watch:[
      W(/\b(?:is|means) (?:just |basically |the same as )?(?:breathing|breathe|inhaling|exhaling)\b/, "Check that. Breathing brings in oxygen, but what does cellular respiration do inside the cell?"),
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:creates?|creating) (?:new )?energy\b/, "Check that. Does respiration create energy, or release energy already stored in food?"), W(/(needs?|requires?|uses?) carbon dioxide/, "Check that. Which gas does cellular respiration need?", "The gas it needs") ],
    ideas:[
      I("What it releases", [/releas\w*.{0,30}energy|energy.{0,30}(from|out of) (food|glucose|sugar)|make\w* atp|break\w* down (food|glucose|sugar)/], "What does cellular respiration release?", "Slide Respiration 5, the line under the title."),
      I("The gas it needs", [O2], "Which gas does it need?", "Why do you breathe harder when you run? Slide Respiration 3.")
    ]},
  { n:23, heading:"Cellular Respiration Basics", prompt:"Write the cellular respiration equation in words and in symbols.",
    guide:"What are the reactants (inputs)? What are the products (outputs)?", where:"Slide: Respiration 5 to 7 | Book: Overview of Cellular Respiration, p. 251",
    model:"• In words: oxygen + glucose makes carbon dioxide + water + energy (ATP)\n• In symbols: 6O2 + C6H12O6 makes 6CO2 + 6H2O + energy",
    ideas:[
      I("Reactants", [either(O2, GLUCOSE, 40)], "What goes in? Name the two reactants.", "Slide Respiration 5, Reactants (inputs)."),
      I("Products", [either(CO2, H2O, 40)], "What comes out? Name the products.", "Slide Respiration 5, Products (outputs)."),
      I("Energy", [/energy|\batp\b/], "What useful thing does respiration make besides the two waste products?", "Slide Respiration 5, the last product."),
      I("In symbols", [/\b6 ?o ?2\b|c ?6 ?h ?12 ?o ?6/], "Write the equation with chemical symbols too.", "Copy the symbols line from Slide Respiration 5.")
    ],
    watch:[
      W(/\brespiration (?:makes?|produces?|releases?|gives? off) (?:\w+ ){0,2}(?:oxygen|glucose|sugar)\b|\bproducts? (?:are|is) (?:\w+ ){0,2}(?:oxygen|glucose|sugar)\b/, "Check that. Which molecules go in, and which come out of respiration?"),
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:needs?|uses?|requires?) (?:sun ?light|light)\b|\b(?:plus|and) (?:sun ?light|light) (?:makes|yields|gives|produces)/, "Check that. Does cellular respiration need light?"), W(near(/(carbon dioxide|co2).{0,25}(and|plus)? ?water|water.{0,25}(and|plus)? ?(carbon dioxide|co2)/, /(make|makes|yield|produce|into|become|gives?)\w*.{0,20}(glucose|sugar)/, 40), "Check that. That is the photosynthesis equation. Which way does respiration go?") ]},
  { n:24, heading:"The Three Stages", prompt:"Sequence the three stages of cellular respiration.",
    guide:"Which comes first, second, and third? Which happen in the cytoplasm, and which in the mitochondria? How many ATP does each stage make?", where:"Slide: Respiration 9 | Book: Stages of Cellular Respiration, p. 252",
    model:"1. Glycolysis, in the cytoplasm\n2. The Krebs cycle, in the mitochondria\n3. The electron transport chain, in the mitochondria",
    watch:[
      W(/\b(?:krebs|kreb|crebs|citric acid|electron transport|etc|e t c)\w*(?: cycle| chain)? (?:is |comes |happens |goes )?first\b|\bfirst (?:is |comes |stage is |step is )?(?:the )?(?:krebs|kreb|crebs|citric|electron transport)/, "Check that. Which stage comes first, in the cytoplasm?"),
      W(/\bglycolysis (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b)|\b(?:(?:krebs|kreb|crebs|citric acid)(?: cycle)?|(?:electron transport(?: chain)?|\betc\b|\be t c\b)) (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:cyto ?plasm|sito ?plasm|site ?o ?plasm|cyto ?plaz)/, "Check that. Which stage is in the cytoplasm, and which are in the mitochondria?"), W(/krebs.{0,60}glycolysis/, "Check the order. Which stage comes first?", "The order") ],
    ideas:[
      I("The order", [near(T.glycolysis, near(T.krebs, T.etc, 120), 120)], "Which stage comes first, second, and third?", "Slide Respiration 9 shows the map in order."),
      I("Cytoplasm stage", [either(T.glycolysis, T.cytoplasm, 60)], "Which stage happens in the cytoplasm?", "Read the Also know line on Slide Respiration 9."),
      I("Mitochondria stages", [either(/krebs|electron transport|\betc\b|both|last two|other two|second and third/, T.mito, 80)], "Which stages happen in the mitochondria?", "Read the Also know line on Slide Respiration 9.")
    ]},
  { n:25, heading:"The Three Stages", prompt:"Distinguish aerobic from anaerobic.",
    guide:"Which stage is anaerobic? Which stages need oxygen? What happens when oxygen runs out?", where:"Slide: Respiration 10 | Book: Oxygen and Energy, p. 252",
    model:"• Aerobic means it requires oxygen\n• Anaerobic means it does not require oxygen\n• Glycolysis is anaerobic\n• The Krebs cycle and electron transport chain are aerobic\n• When oxygen runs out, the aerobic stages stop and glycolysis keeps going, followed by fermentation",
    watch:[
      W(/(?<!\ban )\baerobic (?:means|is) (?:it )?(?:does not|doesn't|doesnt|no|without|not|don't|dont)\b|\b(?:anaerobic|an aerobic) (?:means|is) (?:it )?(?:needs|requires|uses|with)\b/, "Check that. Which word means with oxygen, and which means without?"),
      W(/\b(?:krebs|kreb|crebs|citric|electron transport|etc)\w*(?: cycle| chain)? (?:is |are )?(?:anaerobic|an aerobic)/, "Check that. Do the Krebs cycle and the electron transport chain need oxygen?"), W(/glycolysis (is )?(aerobic|needs oxygen)/, "Check that. Does glycolysis need oxygen?") ],
    ideas:[
      I("Aerobic", [near(/\baerobic/, /oxygen|air/, 50)], "What does aerobic mean?", "Slide Respiration 10, the Meaning row."),
      I("Anaerobic", [near(/anaerobic|an aerobic/, new RegExp(NEG + ".{0,25}(oxygen|air)|without (oxygen|air)"), 60)], "What does anaerobic mean?", "Slide Respiration 10, the Meaning row."),
      I("The anaerobic stage", [either(T.glycolysis, /anaerobic|an aerobic|no oxygen|without oxygen|doesn.?t need oxygen/, 60)], "Which stage is anaerobic?", "Slide Respiration 10, the Stages row."),
      I("When oxygen runs out", [/stop|ferment|slow/], "What happens when oxygen runs out?", "Slide Respiration 10, the No oxygen? row.")
    ]},
  { n:26, heading:"The Three Stages", prompt:"Identify the \"cycle\" that is NOT a stage of cellular respiration.",
    guide:"Which process does the Calvin cycle belong to instead?", where:"Slide: Respiration 11 to 12 | Book: Stages of Cellular Respiration, p. 252",
    model:"• The Calvin cycle is NOT a stage of cellular respiration\n• It belongs to photosynthesis",
    ideas:[
      I("The cycle", [/calvin/], "Which cycle is not a stage of cellular respiration?", "Slide Respiration 12 answers this one."),
      I("Where it belongs", [T.photo], "Which process does the Calvin cycle belong to instead?", "Look back at your note 19.")
    ],
    watch:[
      W(/\b(?:glycolysis|citric acid cycle|electron transport(?: chain)?|etc) (?:is not|isn't|isnt)\b/, "Check that. That one IS a stage of cellular respiration. Which cycle is not?", "The cycle"),
      W(/\bcalvin\w*(?: cycle)? (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b)|\bcalvin\w*(?: cycle)? (?:belongs to|is part of|is a stage of|is in) (?:cellular )?respiration/, "Check that. Which process does the Calvin cycle belong to?"), W(/krebs (cycle )?(is not|isn.?t)/, "Check that. The Krebs cycle IS a stage of respiration.", "The cycle") ]},
  { n:27, heading:"Photosynthesis vs. Respiration", prompt:"Compare photosynthesis and cellular respiration.",
    guide:"Which one deposits energy and which withdraws it? Where does each happen? Do plants do both?", where:"Slide: Respiration 14 to 15 | Book: Comparing Photosynthesis and Cellular Respiration, p. 253",
    model:"• Photosynthesis deposits (stores) energy in glucose\n• It happens in chloroplasts\n• Cellular respiration withdraws (releases) the energy in glucose to make ATP\n• It happens in the cytoplasm and mitochondria\n• Plants do both",
    ideas:[
      I("Deposit", [either(T.photo, /deposit|stor|captur|sav/, 60)], "Which one deposits (stores) energy?", "Slide Respiration 14, Deposit and Withdraw."),
      I("Withdraw", [either(T.resp, /withdraw|releas|use|spend|break/, 60)], "Which one withdraws (releases) energy?", "Slide Respiration 14, Deposit and Withdraw."),
      I("Where photosynthesis happens", [either(T.photo, T.chloro, 80)], "Where does photosynthesis happen?", "Slide Respiration 15, the Where row."),
      I("Where respiration happens", [either(T.resp, T.mito, 130)], "Where does cellular respiration happen?", "Slide Respiration 15, the Where row."),
      I("Plants do both", [/both|plants (also|do) (do )?respiration|plants? .{0,30}(also|too)/], "Do plants do both?", "Slide Respiration 14, the Plants do both box.")
    ],
    watch:[
      W(/\bphoto ?synthesis (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b)|\brespiration (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:chloro ?plast|chlora ?plast|clor[oa] ?plast)/, "Check that. Which organelle goes with each process?"),
      W(/\bphoto ?synthesis (?:withdraws?|releases? (?:the )?energy|breaks? down (?:glucose|sugar))|\brespiration (?:deposits?|stores? energy in glucose)/, "Check that. Which one deposits energy and which one withdraws it?"), W(/plants (only|just) do photo|plants (don.?t|do not) do (cellular )?resp|instead of (cellular )?resp/, "Check that. Do plants do cellular respiration too?") ]},
  { n:28, heading:"Photosynthesis vs. Respiration", prompt:"Explain why they are called opposite processes.",
    guide:"How do the products of one match the reactants of the other?", where:"Slide: Respiration 15 to 18 | Book: Comparing Photosynthesis and Cellular Respiration, p. 253",
    model:"• They are opposites because the products of one are the reactants of the other\n• Photosynthesis makes glucose and oxygen, which respiration uses\n• Respiration makes carbon dioxide and water, which photosynthesis uses",
    watch:[
      W(/(?<!\bnot )\bonly (?:at|during the|in the) night\b|\brespiration (?:(?!even |also |too )\w+ ){0,2}(?:at|during the|in the) night\b(?! too| also| as well)/, "Check that. Do cells do respiration only at night, or all the time? What makes them opposites?"),
      W(/\bproducts? of photo ?synthesis (?:are|is) (?:\w+ )?(?:carbon dioxide|co ?2|water)\b|\bproducts? of (?:cellular )?respiration (?:are|is) (?:\w+ )?(?:glucose|sugar|oxygen)\b|\bphoto ?synthesis (?:makes?|produces?|gives? off|releases?) (?:\w+ )?(?:carbon dioxide|co ?2)\b|\brespiration (?:makes?|produces?|gives? off|releases?) (?:\w+ )?(?:glucose|sugar|oxygen)\b/, "Check that. Which process makes glucose and oxygen, and which makes carbon dioxide and water?"),
      W(/\b(?:respiration|it) (?:only )?(?:happens|is) (?:only )?in animals\b|\bonly animals (?:do|carry out) (?:cellular )?respiration|\bplants? (?:do|does) photo ?synthesis (?:and|while|but) animals (?:do|does) (?:cellular )?respiration/, "Check that. Is that why they are opposites? Do plants do cellular respiration too?") ],
    ideas:[
      I("The big idea", [/products? .{0,40}(reactants?|inputs?|use|need)|outputs? .{0,40}inputs?|reactants? .{0,40}products?|what one makes.{0,40}other (uses|needs)/], "How do the products of one match the reactants of the other?", "Slide Respiration 15, the Also know line."),
      I("An example", [either(GLUCOSE, O2, 40), either(CO2, H2O, 40)], "Give an example: what does one make that the other uses?", "Slide Respiration 18, The Energy Cycle.")
    ]}
  ]
});
})();

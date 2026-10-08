/* ==================================================================
   UNIT FILE: Unit 1 Test (Homeostasis and the Human Body).
   Source: Unit 1 Test Review.pptx (checklist study guide, 23 prompts here);
   Ch30.1, Nutrition, Digestive System, Enzymes, Circulatory, and Respiratory
   slideshows; Chapters 30 and 33. Helpers: see patterns.js.
   ================================================================== */
(function(){
var B301 = "Book: Chapter 30.1, pp. 862 to 867", B302 = "Book: Chapters 30.2 to 30.3, pp. 868 to 881";
var B331 = "Book: Chapter 33.1, pp. 948 to 953", B333 = "Book: Chapter 33.3, pp. 964 to 969";
var RIGHT = /\bright\b/, LEFT = /\bleft\b/;

UNITS.push({
  id: "u1t",
  title: "Homeostasis and the Human Body",
  subtitle: "Unit 1 Test notes",
  source: "Unit 1 slideshows; Chapters 30 and 33",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and turned the instructor's Unit 1 Test study guide into note prompts with guiding questions, key-idea checks, and hints, using the Unit 1 slideshows and Chapters 30 and 33 of the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Homeostasis", prompt:"Define homeostasis.",
    guide:"What does the body keep stable, even when the outside changes?", where:"Slide: Ch30.1 slideshow 9 | " + B301,
    model:"Homeostasis is keeping a stable internal environment, even when conditions outside change.",
    ideas:[
      I("Stable inside", [/stable|steady|constant|balanc|same|normal/], "What does homeostasis keep?", "Slide 9 of the Ch30.1 slideshow."),
      I("Despite change", [/outside|environment|surroundings|change|despite|even (when|if)/], "When does the body keep this up?", "Even when the outside ___.")
    ]},
  { n:2, heading:"Homeostasis", prompt:"Give examples of homeostasis in the human body.",
    guide:"How does the body handle getting too hot, too cold, or low on blood sugar?", where:"Slide: Ch30.1 slideshow 12 to 13 | " + B301,
    model:"Sweating cools the body when it is too hot. Shivering warms the body when it is too cold. The liver releases stored sugar when blood glucose drops. Breathing speeds up during exercise to remove extra carbon dioxide.",
    ideas:[
      I("Example 1", [/sweat|shiver/], "How does the body fix its temperature?", "Ch30.1 slideshow, Slide 12."),
      I("Example 2", [/glucose|sugar|insulin|liver|breath|thirst|drink|blood pressure|heart rate/], "Give a second example that is not about temperature.", "Ch30.1 slideshow, Slide 13 (blood glucose).")
    ]},
  { n:3, heading:"Homeostasis", prompt:"List the 8 characteristics of life.",
    guide:"What do all living things share?", where:"Slide: Characteristics of Life slideshow 3 | Book: Chapter 1, Lesson 1.3",
    model:"Made of cells, has a universal genetic code (DNA), grows and develops, reproduces, responds to the environment, maintains homeostasis, uses energy (metabolism), and evolves as a group.",
    ideas:[
      I("Cells", [/cell/], "What are all living things made of?", "Characteristic 1."),
      I("DNA", [/\bdna\b|genetic|gene/], "What code do all living things share?", "Characteristic 2."),
      I("Grow", [/grow|develop/], "What do living things do from start to maturity?", "Characteristic 3."),
      I("Reproduce", [/reproduc|offspring/], "How do living things make more of themselves?", "Characteristic 4."),
      I("Respond", [/respon|react|stimul/], "What do living things do when something changes around them?", "Characteristic 5."),
      I("Homeostasis", [/homeostasis|home ?o ?stasis|stable/], "What do living things keep stable inside?", "Characteristic 6."),
      I("Energy", [/energy|metabol/], "What do living things take in and use?", "Characteristic 7."),
      I("Evolve", [/evol|adapt|change over/], "What do groups of living things do over generations?", "Characteristic 8.")
    ]},
  { n:4, heading:"Homeostasis", prompt:"Explain how body systems interact to maintain homeostasis.",
    guide:"Pick two systems. What does each one do for the other?", where:"Slide: Ch30.1 slideshow 7 to 8 | " + B301,
    model:"The respiratory system brings in oxygen, and the circulatory system carries it to the cells. The digestive system breaks food into nutrients, and the circulatory system delivers them. The nervous system senses changes and signals muscles or glands to respond.",
    ideas:[
      I("Two systems", [near(/respirat|digest|circulat|nervous|muscul|skelet|excret|endocrin|immune/, /respirat|digest|circulat|nervous|muscul|skelet|excret|endocrin|immune/, 120)], "Name two systems that work together.", "Ch30.1 slideshow, Slides 7 and 8."),
      I("What they share", [/oxygen|nutrient|food|signal|blood|waste|carbon dioxide|hormone/], "What does one system pass to the other?", "Example: the lungs bring in oxygen. Which system delivers it?")
    ]},
  { n:5, heading:"Digestive System", prompt:"Describe carbohydrates: function, monomer, and examples.",
    guide:"What does the body use them for? What is the building block? Name foods.", where:"Slide: Nutrition slideshow 5, Enzymes slideshow 5 | " + B302,
    model:"Carbohydrates are the main source of energy. Their monomer is a simple sugar (monosaccharide), like glucose. Examples: bread, pasta, potatoes, fruit.",
    watch:[ W(/amino acid|fatty acid/, "Check that. That is the monomer of a different macromolecule.", "Monomer") ],
    ideas:[
      I("Function", [/energy/], "What does the body use carbohydrates for?", "Enzymes slideshow, Slide 5."),
      I("Monomer", [/simple sugar|mono ?sacchar|glucose/], "What is the monomer of a carbohydrate?", "It is a single sugar unit."),
      I("Examples", [/bread|pasta|potato|rice|fruit|sugar|candy|cereal|starch/], "Name a food rich in carbohydrates.", "Think of starchy and sweet foods.")
    ]},
  { n:6, heading:"Digestive System", prompt:"Describe lipids: function, monomer, and examples.",
    guide:"What does the body use them for? What are the building blocks? Name foods.", where:"Slide: Nutrition slideshow 6 to 7, Enzymes slideshow 5 | " + B302,
    model:"Lipids store energy and form cell membranes and waterproof coverings. Their building blocks are fatty acids and glycerol. Examples: butter, oil, fats.",
    watch:[ W(/amino acid|simple sugar|mono ?sacchar/, "Check that. That is the monomer of a different macromolecule.", "Monomer") ],
    ideas:[
      I("Function", [/stor|membrane|insulat|waterproof|energy/], "What does the body use lipids for?", "Enzymes slideshow, Slide 5."),
      I("Monomer", [/fatty acid|glycerol/], "What are the building blocks of lipids?", "Fatty ___ and glycerol."),
      I("Examples", [/butter|oil|fat|wax|lard|avocado|bacon/], "Name a food rich in lipids.", "Think of greasy or oily foods.")
    ]},
  { n:7, heading:"Digestive System", prompt:"Describe proteins: function, monomer, and examples.",
    guide:"What do proteins do? What is the building block? Name foods.", where:"Slide: Nutrition slideshow 8, Enzymes slideshow 5 | " + B302,
    model:"Proteins build and repair the body, act as enzymes that control the rates of reactions, and transport substances. Their monomer is the amino acid. Examples: meat, eggs, beans.",
    watch:[ W(/fatty acid|simple sugar|mono ?sacchar/, "Check that. That is the monomer of a different macromolecule.", "Monomer") ],
    ideas:[
      I("Function", [/enzyme|build|repair|growth|transport|control|structure|muscle/], "What do proteins do in the body?", "Enzymes slideshow, Slide 5."),
      I("Monomer", [/amino/], "What is the monomer of a protein?", "Nutrition slideshow, Slide 8."),
      I("Examples", [/meat|egg|bean|fish|chicken|beef|nut|milk|cheese|tofu|steak/], "Name a food rich in protein.", "Think of meats and beans.")
    ]},
  { n:8, heading:"Digestive System", prompt:"Describe the jobs of the mouth, stomach, and small intestine.",
    guide:"What happens to food in each organ?", where:"Slide: Digestive slideshow 4, 6, 7 | " + B302,
    model:"Mouth: teeth chew food (mechanical) and amylase in saliva starts digesting starch. Stomach: churns food and pepsin starts digesting protein, making chyme. Small intestine: finishes chemical digestion and absorbs most nutrients into the blood.",
    ideas:[
      I("Mouth", [either(/mouth/, /chew|teeth|saliva|amylase/, 60)], "What happens to food in the mouth?", "Digestive slideshow, Slide 4."),
      I("Stomach", [either(/stomach/, /pepsin|acid|churn|protein|chyme/, 60)], "What happens to food in the stomach?", "Digestive slideshow, Slide 6."),
      I("Small intestine", [either(/small intestine/, /absorb|nutrient|blood|finish|villi/, 70)], "What happens in the small intestine?", "Digestive slideshow, Slide 7.")
    ]},
  { n:9, heading:"Digestive System", prompt:"Describe the roles of the liver and pancreas in digestion.",
    guide:"What does each one send to the small intestine?", where:"Slide: Digestive slideshow 7 | " + B302,
    model:"The liver makes bile, which breaks fat into small droplets. The pancreas makes digestive enzymes and a base that neutralizes stomach acid, and both send these into the small intestine.",
    ideas:[
      I("Liver", [either(/liver/, /bile|fat/, 60)], "What does the liver make for digestion?", "It makes a fluid that breaks up fats."),
      I("Pancreas", [either(/pancrea/, /enzyme|neutraliz|base|bicarbonate|insulin/, 60)], "What does the pancreas make for digestion?", "It makes enzymes that go into the small intestine.")
    ]},
  { n:10, heading:"Digestive System", prompt:"Compare mechanical and chemical digestion.",
    guide:"Which one only changes size? Which one uses enzymes? Give an example of each.", where:"Slide: Digestive slideshow 3 | " + B302,
    model:"Mechanical digestion breaks food into smaller pieces without changing its chemical makeup, like chewing or the stomach churning. Chemical digestion uses enzymes to break food into small molecules the body can use, like amylase breaking down starch.",
    watch:[ W(/mechanical (digestion )?(uses|needs|is done by) enzymes|chemical (digestion )?(is|means) (chew|teeth)/, "Check that. Which kind uses enzymes, and which is chewing?") ],
    ideas:[
      I("Mechanical", [either(/mechanical/, /chew|piece|physical|smaller|churn|teeth|size/, 60)], "What does mechanical digestion do?", "Digestive slideshow, Slide 3, left side."),
      I("Chemical", [either(/chemical/, /enzyme|molecule|amylase|pepsin|acid/, 60)], "What does chemical digestion use?", "Digestive slideshow, Slide 3, right side.")
    ]},
  { n:11, heading:"Digestive System", prompt:"Explain how digestive enzymes work and how pH and temperature affect them.",
    guide:"What do amylase and pepsin break down? What happens to an enzyme that gets too hot or is in the wrong pH?", where:"Slide: Digestive slideshow 10, Enzymes slideshow 7 to 8 | " + B302,
    model:"Enzymes are proteins that speed up reactions. Each one fits a specific molecule, like a lock and key. Amylase breaks down starch in the mouth. Pepsin breaks down protein in the stomach and works best at low (acidic) pH. Too much heat or the wrong pH changes the enzyme's shape (denatures it), so it stops working.",
    watch:[ W(/amylase.{0,30}protein|pepsin.{0,30}(starch|carb)/, "Check that. Which enzyme breaks down starch, and which breaks down protein?") ],
    ideas:[
      I("Amylase", [either(/amylase|amyl/, /starch|carb|sugar/, 50)], "What does amylase break down?", "Digestive slideshow, Slide 4."),
      I("Pepsin", [either(/pepsin/, /protein/, 50)], "What does pepsin break down?", "Digestive slideshow, Slide 6."),
      I("Heat and pH", [/denatur|shape|stop\w* working|doesn.?t work|won.?t work|can.?t work|no longer (fit|work)/], "What happens to an enzyme that gets too hot or is in the wrong pH?", "Test question 9: a 100 C enzyme changes ___.")
    ]},
  { n:12, heading:"Digestive System", prompt:"Describe the structure and function of villi in the small intestine.",
    guide:"What do villi look like? Why does more surface area matter?", where:"Slide: Digestive slideshow 7 | " + B302,
    model:"Villi are tiny, finger-like projections lining the small intestine. They greatly increase the surface area, so more nutrients are absorbed into the blood.",
    watch:[ W(/(less|smaller|decreas\w*|lower) (the )?surface/, "Check that. Villi make the surface area bigger.") ],
    ideas:[
      I("Structure", [/finger|tiny|bump|projection|fold/], "What do villi look like?", "Digestive slideshow, Slide 7."),
      I("Surface area", [/surface area|more (room|space|area)/], "What do villi increase?", "Digestive slideshow, Slide 7."),
      I("Function", [/absorb/], "Why does more surface area help?", "More area means more nutrients get ___.")
    ]},
  { n:13, heading:"Circulatory System", prompt:"Describe basic heart structure, including the left atrium.",
    guide:"How many chambers? Which are upper and lower? What does the left atrium receive?", where:"Slide: Circulatory slideshow 4 to 5 | " + B331,
    model:"The heart has four chambers: two atria on top that receive blood and two ventricles on the bottom that pump blood out. The septum divides the left and right sides. The left atrium receives oxygen-rich blood from the lungs. On a diagram, the heart's left side is on the viewer's right.",
    watch:[ W(/\b(2|two|3|three) chambers/, "Check that. How many chambers does the heart have?", "Four chambers") ],
    ideas:[
      I("Four chambers", [/\b(4|four)\b/], "How many chambers does the heart have?", "Circulatory slideshow, Slide 4."),
      I("Atria and ventricles", [either(T.atrium, T.ventricle, 120)], "Name the upper and lower chambers.", "Circulatory slideshow, Slide 4."),
      I("Left atrium", [near(LEFT, T.atrium, 15)], "What does the left atrium do?", "It receives oxygen-rich blood from the lungs.")
    ]},
  { n:14, heading:"Circulatory System", prompt:"Distinguish pulmonary circulation from systemic circulation.",
    guide:"Where does each pathway carry blood?", where:"Book: Chapter 33.1, p. 950",
    model:"Pulmonary circulation carries blood between the heart and the lungs. Systemic circulation carries blood between the heart and the rest of the body.",
    watch:[ W(/pulmonary.{0,40}(rest of the body|whole body)|systemic.{0,40}lungs/, "Check that. Which pathway goes to the lungs, and which goes to the body?") ],
    ideas:[
      I("Pulmonary", [either(/pulmonary/, /lungs?/, 90)], "Where does pulmonary circulation carry blood?", "Pulmonary means lungs."),
      I("Systemic", [either(/systemic/, /\bbody\b/, 90)], "Where does systemic circulation carry blood?", "Systemic means the whole body system.")
    ]},
  { n:15, heading:"Circulatory System", prompt:"Explain how the structure of arteries, veins, and capillaries fits their function.",
    guide:"Why thick walls? Why valves? Why one cell thick?", where:"Slide: Circulatory slideshow 6 | " + B331,
    model:"Arteries carry blood away from the heart at high pressure, so they have thick, elastic walls. Veins carry low-pressure blood back to the heart, so they have valves to keep it from flowing backward. Capillaries have walls one cell thick so oxygen and nutrients can pass into the cells.",
    watch:[ W(/arter\w*.{0,30}(back to|toward) the heart|veins?.{0,30}away from the heart/, "Check that. Arteries carry blood away from the heart; veins bring it back.") ],
    ideas:[
      I("Arteries", [either(T.artery, /thick|elastic|pressure/, 60)], "Why do arteries have thick, elastic walls?", "Circulatory slideshow, Slide 6."),
      I("Veins", [either(T.vein, /valve/, 60)], "What do veins have to keep blood moving the right way?", "Circulatory slideshow, Slide 6."),
      I("Capillaries", [either(T.capillary, /one cell|thin|diffus|pass|exchang/, 60)], "Why are capillary walls so thin?", "Circulatory slideshow, Slide 6.")
    ]},
  { n:16, heading:"Circulatory System", prompt:"State the color of blood.",
    guide:"Is blood ever blue? What color is oxygen-poor blood?", where:B331,
    model:"Blood is always red. Oxygen-rich blood is bright red, and oxygen-poor blood is dark red. Veins only look blue through the skin.",
    ideas:[ I("The color", [/\bred\b/], "What color is blood?", "Think about what you see when you get a cut.") ],
    watch:[ W(/blood (is|turns|becomes) blue|blue blood/, "Check that. Blood is never blue. Veins only look blue through the skin.") ]},
  { n:17, heading:"Respiratory System", prompt:"Sequence the path air travels through the respiratory system.",
    guide:"Start at the nose. Where does air end up?", where:"Slide: Respiratory slideshow 4 to 5 | " + B333,
    draw:"Sketch the respiratory system. Label the trachea and the alveoli.",
    model:"Nose, pharynx, larynx, trachea, bronchi, bronchioles, alveoli.",
    ideas:[
      I("Start", [/nose|nasal/], "Where does air enter?", "Respiratory slideshow, Slide 4."),
      I("Windpipe", [T.trachea, /wind ?pipe/], "What tube carries air down the neck?", "Respiratory slideshow, Slide 4."),
      I("End", [near(/bronch/, T.alveoli, 120)], "Where does air go after the trachea, and where does it end?", "Respiratory slideshow, Slide 5.")
    ]},
  { n:18, heading:"Respiratory System", prompt:"Explain how gas exchange happens at the alveoli.",
    guide:"Which way does oxygen move? Which way does carbon dioxide move? Why?", where:"Slide: Respiratory slideshow 6 to 7 | " + B333,
    model:"Gas exchange happens between the alveoli and the capillaries by diffusion. Oxygen moves from the alveoli into the blood, and carbon dioxide moves from the blood into the alveoli to be breathed out.",
    watch:[ W(/oxygen (moves |goes )?(from|out of) the blood/, "Check that. Oxygen moves from the alveoli into the blood.") ],
    ideas:[
      I("Oxygen", [near(/oxygen|\bo ?2\b/, /blood|capillar/, 60)], "Which way does oxygen move?", "From the air sacs into the ___."),
      I("Carbon dioxide", [near(T.co2, /alveol|lungs?|out|exhal|breath/, 60)], "Which way does carbon dioxide move?", "From the blood into the ___."),
      I("How", [/diffus|high to low|concentration/], "What process moves the gases?", "Gases move from high concentration to low.")
    ]},
  { n:19, heading:"Respiratory System", prompt:"Describe the roles of the diaphragm and rib cage in breathing.",
    guide:"What happens when you inhale? When you exhale?", where:"Slide: Respiratory slideshow 11 | " + B333,
    model:"When you inhale, the diaphragm contracts and moves down and the rib cage rises, making the chest bigger and pulling air in. When you exhale, the diaphragm and rib cage relax, making the chest smaller and pushing air out.",
    watch:[ W(/inhal\w*.{0,25}relax/, "Check that. When you inhale, does the diaphragm contract or relax?", "Inhale") ],
    ideas:[
      I("Inhale", [either(/inhal|breath\w* in/, /contract|down|rise|up|bigger|expand/, 60)], "What happens when you inhale?", "The diaphragm tightens and pulls down."),
      I("Exhale", [either(/exhal|breath\w* out/, /relax|smaller|push|up\b/, 60)], "What happens when you exhale?", "The muscles relax.")
    ]},
  { n:20, heading:"Respiratory System", prompt:"Explain how the respiratory and circulatory systems work together to maintain homeostasis.",
    guide:"What does each system do with oxygen and carbon dioxide?", where:"Slide: Respiratory slideshow 9 to 10 | " + B333,
    model:"The respiratory system brings oxygen into the lungs, and the circulatory system carries it to the cells. The blood carries carbon dioxide back to the lungs to be breathed out. When carbon dioxide rises, the medulla oblongata makes you breathe faster.",
    ideas:[
      I("Oxygen delivery", [either(/oxygen/, /blood|circulat|cells|heart/, 80)], "How does oxygen get from the lungs to the cells?", "The lungs bring it in. What carries it?"),
      I("Carbon dioxide removal", [either(T.co2, /lung|breath|exhal|out/, 80)], "How does carbon dioxide leave the body?", "The blood carries it back to the ___.")
    ]},
  { n:21, heading:"Scientific Skills", prompt:"Distinguish independent and dependent variables.",
    guide:"Which one do you change? Which one do you measure?", where:"Book: Lesson 1.1, Designing Controlled Experiments",
    model:"The independent variable is the one you change on purpose. The dependent variable is the one you measure; it responds to the change.",
    watch:[ W(/\bindependent\w*.{0,30}measur|(?<!in)dependent\w*.{0,25}(you change|change on purpose)/, "Check that. Which variable do you change, and which do you measure?") ],
    ideas:[
      I("Independent", [either(/independent/, /change|manipulat|control|test|choose/, 50)], "What is the independent variable?", "It is the one you ___ on purpose."),
      I("Dependent", [either(/(?<!in)dependent/, /measur|respon|result|observ|depends/, 50)], "What is the dependent variable?", "It is the one you ___.")
    ]},
  { n:22, heading:"Scientific Skills", prompt:"Identify variables and controls in an investigation.",
    guide:"What is a control group? What should stay the same?", where:"Book: Lesson 1.1, Designing Controlled Experiments",
    model:"A control group gets no change, so you can compare it to the test group. Controlled variables are the things you keep the same so only one variable changes.",
    ideas:[
      I("Control group", [either(/control/, /compar|no change|normal|not changed|nothing changed|baseline/, 60)], "What is a control group for?", "It is the group you ___ the others to."),
      I("Keep the same", [/same|constant|one variable|only one/], "What should stay the same in a fair test?", "Change only one thing at a time.")
    ]},
  { n:23, heading:"Scientific Skills", prompt:"Explain how to read and interpret data from a graph or data table.",
    guide:"What do you check first? Which axis is which variable?", where:"Book: Lesson 1.1, Collecting and Analyzing Data",
    model:"Read the title and the axis labels and units first. The independent variable goes on the x-axis and the dependent variable goes on the y-axis. Then look for the trend: does the line go up, go down, or stay the same?",
    watch:[ W(/\bindependent\w*.{0,30}(y ?axis|vertical)/, "Check that. The independent variable goes on the x-axis.") ],
    ideas:[
      I("Labels first", [/title|label|units?|axis|axes|key/], "What do you read first on a graph?", "Start with the title and the labels."),
      I("Which axis", [either(/x ?axis|horizontal|bottom/, /independent/, 60), either(/y ?axis|vertical|side/, /dependent/, 60)], "Which variable goes on the x-axis?", "The x-axis holds the variable you change."),
      I("The trend", [/trend|pattern|increas|decreas|go\w* up|go\w* down|rise|fall/], "What do you look for once you know the labels?", "Does the line go up, go down, or stay flat?")
    ]}
  ]
});
})();

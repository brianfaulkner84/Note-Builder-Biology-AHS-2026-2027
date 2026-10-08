/* ==================================================================
   UNIT FILE: Unit 1, Food and Nutrition Quiz (Chapter 30.2).
   Source: Ch30.2_Food_Nutrition_Study_Guide.pptx (6 terms plus checklist;
   repeated checklist items merged); Ch30.2 Food and Nutrition slideshow;
   Chapter 30.2, pp. 868 to 872. Helpers: see patterns.js.
   ================================================================== */
(function(){
var S = "Slide: Nutrition slideshow ";

UNITS.push({
  id: "u1n",
  title: "Food and Nutrition",
  subtitle: "Unit 1, Chapter 30.2 quiz notes",
  source: "Ch30.2 Food and Nutrition slideshow; Chapter 30.2, pp. 868 to 872",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and turned the instructor's Chapter 30.2 Food and Nutrition study guide into note prompts with guiding questions, key-idea checks, and hints, using the Food and Nutrition slideshow and Chapter 30 of the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Vocabulary", prompt:"Define Calorie.",
    guide:"What does a Calorie measure?", where:S + "4 | Book: p. 868",
    model:"A Calorie is the unit used to measure the amount of energy in food.",
    watch:[ W(/(measur\w*|amount of) (fat|sugar|weight|mass|food)\b/, "Check that. A Calorie measures energy.", "What it measures") ],
    ideas:[ I("What it measures", [/energy/], "What does a Calorie measure?", "Slide 4, the Calorie box.") ]},
  { n:2, heading:"Vocabulary", prompt:"Define carbohydrate.",
    guide:"What elements is it made of? What does the body use it for?", where:S + "5 | Book: p. 869",
    model:"A carbohydrate is a molecule made of carbon, hydrogen, and oxygen. It is the body's quick source of energy.",
    watch:[ W(/nitrogen/, "Check that. Carbohydrates are made of carbon, hydrogen, and oxygen only.") ],
    ideas:[
      I("Made of", [/carbon.{0,30}hydrogen.{0,30}oxygen|\bc ?h ?o\b/], "What three elements make up a carbohydrate?", "Slide 5, the line under the title."),
      I("Its job", [/energy/], "What does the body use carbohydrates for?", "Slide 5: the body's quick source of ___.")
    ]},
  { n:3, heading:"Vocabulary", prompt:"Define fat.",
    guide:"What does fat do for the body? How many Calories per gram?", where:S + "6 to 7 | Book: p. 870",
    model:"Fat is a nutrient that stores energy (about 9 Calories per gram). It insulates the body, is part of cell membranes, and helps absorb fat-soluble vitamins.",
    watch:[ W(/\b(4|four) calories per gram/, "Check that. Fat gives about 9 Calories per gram.") ],
    ideas:[
      I("Energy", [/\b(9|nine)\b|energy/], "How much energy does fat supply?", "Slide 4, Quick fact."),
      I("A job it does", [/insulat|membrane|absorb|vitamin|warm/], "Name one job fat does in the body.", "Slide 7 lists three.")
    ]},
  { n:4, heading:"Vocabulary", prompt:"Define protein.",
    guide:"What smaller units is it built from?", where:S + "8 | Book: p. 870",
    model:"A protein is a nutrient built from smaller units called amino acids.",
    ideas:[ I("Built from", [/amino/], "What are proteins built from?", "Slide 8, the line under the title.") ],
    watch:[ W(/fatty acid|simple sugar|glucose/, "Check that. That is the building block of a different nutrient.", "Built from") ]},
  { n:5, heading:"Vocabulary", prompt:"Define vitamin.",
    guide:"Organic or inorganic? How much does the body need?", where:S + "9 | Book: pp. 871 to 872",
    model:"A vitamin is an organic molecule the body needs in small amounts.",
    ideas:[
      I("Organic", [/(?<!in)(?<!in )\borganic/], "Is a vitamin organic or inorganic?", "Slide 9, the title."),
      I("How much", [/small|little|tiny|few/], "How much does the body need?", "Slide 9: needed in ___ amounts.")
    ],
    watch:[ W(/\binorganic/, "Check that. Which one is organic, a vitamin or a mineral?", "Organic") ]},
  { n:6, heading:"Vocabulary", prompt:"Define mineral.",
    guide:"Organic or inorganic? How is it different from a vitamin?", where:S + "11 | Book: p. 872",
    model:"A mineral is an inorganic nutrient the body needs in small amounts. Vitamins are organic; minerals are inorganic.",
    watch:[ W(/(?<!in)(?<!in )(?<!not )\borganic/, "Check that. Is a mineral organic or inorganic?", "Inorganic") ],
    ideas:[ I("Inorganic", [/inorganic|in organic|not organic/], "Is a mineral organic or inorganic?", "Slide 11, the line under the title.") ]},
  { n:7, heading:"Why We Eat and Calories", prompt:"Recall the two reasons the body needs food.",
    guide:"What does food supply besides energy?", where:S + "2 | Book: p. 868",
    model:"The body needs food for energy and for raw materials to build and repair tissues.",
    ideas:[
      I("Reason 1", [/energy/], "What is the first reason the body needs food?", "Slide 2, first box."),
      I("Reason 2", [/raw material|build|repair|grow/], "What is the second reason?", "Slide 2, second box.")
    ]},
  { n:8, heading:"Why We Eat and Calories", prompt:"Explain what \"empty Calories\" means.",
    guide:"What do these foods give you, and what do they leave out?", where:S + "4 | Book: p. 868",
    model:"Empty Calories are foods that supply Calories (energy) without the other nutrients the body needs. Example: chips and candy.",
    watch:[ W(/\b(no|zero) calories/, "Check that. Empty-Calorie foods do have Calories. What do they leave out?") ],
    ideas:[
      I("What they give", [/calorie|energy/], "What do empty-Calorie foods give you?", "Slide 4, the Empty Calories box."),
      I("What they leave out", [lacks(/nutrient|vitamin|raw material|nutrition|good/), /(little|nothing) else|without (the )?(other )?nutrients/], "What do they leave out?", "Slide 4: without the other ___ the body needs.")
    ]},
  { n:9, heading:"Carbohydrates", prompt:"List the six essential nutrients, and identify one thing that is NOT on the list.",
    guide:"Which six nutrients make up every food? Is cholesterol on the list?", where:S + "3 | Book: p. 869",
    model:"The six essential nutrients are water, carbohydrates, fats, proteins, vitamins, and minerals. Cholesterol is NOT one of them.",
    watch:[ W(/cholesterol (is|counts as) (one|a nutrient|essential|on the list)/, "Check that. Is cholesterol one of the six essential nutrients?") ],
    ideas:[
      I("Water", [/water/], "Which nutrient do people often forget?", "Slide 3, first icon."),
      I("Energy nutrients", [near(/carb|fat|protein/, near(/carb|fat|protein/, /carb|fat|protein/, 40), 40)], "Name the three nutrients that supply energy.", "Slide 3, icons two to four."),
      I("Small-amount nutrients", [either(/vitamin/, /mineral/, 40)], "Name the two nutrients needed in small amounts.", "Slide 3, the last two icons."),
      I("Not on the list", [/cholesterol|fiber|sodium|sugar/], "Name one thing that is NOT one of the six.", "Look at the quiz study guide. Is cholesterol one of the six?")
    ]},
  { n:10, heading:"Carbohydrates", prompt:"Distinguish simple carbohydrates from complex carbohydrates.",
    guide:"Which are sugars and which are starches? Which one does the body use for quick energy?", where:S + "5 | Book: p. 869",
    model:"Simple carbohydrates are sugars. The body absorbs them and uses them for energy quickly. Complex carbohydrates are starches. They must be broken down before the body can use them.",
    ideas:[
      I("Simple", [either(/simple/, /sugar/, 40)], "What are simple carbohydrates?", "Slide 5, Simple Carbohydrates."),
      I("Complex", [either(/complex/, /starch/, 40)], "What are complex carbohydrates?", "Slide 5, Complex Carbohydrates."),
      I("Quick energy", [either(/simple|sugar/, /quick|fast|right away/, 60)], "Which one does the body use for quick energy?", "Slide 5: absorbed and used ___.")
    ]},
  { n:11, heading:"Carbohydrates", prompt:"Explain what fiber (cellulose) is and why the body still needs it.",
    guide:"Can the body digest it? What does it help move?", where:S + "5 | Book: p. 869",
    model:"Fiber (cellulose) is a complex carbohydrate the body cannot digest. It is still needed because it adds bulk that helps move food and waste through the digestive system.",
    watch:[ W(/fiber (is|gives) (a lot of )?energy|(easy|easily) (to )?digest/, "Check that. The body cannot digest fiber.", "Can\'t digest") ],
    ideas:[
      I("Can't digest", [lacks(/digest|break/), /indigestible/], "Can the body digest fiber?", "Slide 5, the Fiber box."),
      I("Why we need it", [/bulk|move|push|waste|digestive|poop|bowel/], "Why does the body still need it?", "Slide 5: it provides ___ that helps move food and waste.")
    ]},
  { n:12, heading:"Fats", prompt:"Compare saturated and unsaturated fats (one similarity, one difference).",
    guide:"Solid or liquid at room temperature? Single or double bonds? What do both do?", where:S + "6 | Book: p. 870",
    model:"Saturated fats have only single bonds and are solid at room temperature. Unsaturated fats have one or more double bonds and are liquid at room temperature. Similarity: both help the body absorb fat-soluble vitamins.",
    watch:[ W(/(?<!un)saturated (fats? )?(is|are) liquid|unsaturated (fats? )?(is|are) solid/, "Check that. Which kind of fat is solid at room temperature?") ],
    ideas:[
      I("Saturated", [either(/(?<!un)saturated/, /solid|single/, 50)], "Is saturated fat solid or liquid at room temperature?", "Slide 6, the left column."),
      I("Unsaturated", [either(/unsaturated|un saturated/, /liquid|double/, 50)], "Is unsaturated fat solid or liquid at room temperature?", "Slide 6, the right column."),
      I("Similarity", [/both|similar|same/], "What is one thing both kinds of fat do?", "Slide 6, the Similarity line.")
    ]},
  { n:13, heading:"Fats", prompt:"Identify the roles fats play in the body, and the one role that is NOT a job of fats.",
    guide:"Name three jobs. What job belongs to proteins instead?", where:S + "7 | Book: p. 870",
    model:"Fats insulate the body, are part of cell membranes, and help absorb fat-soluble vitamins. Fats are NOT hormones and enzymes; those are jobs of proteins.",
    ideas:[
      I("Insulation", [/insulat|warm/], "Name the job that keeps the body warm.", "Slide 7, first check mark."),
      I("Cell membranes", [/membrane/], "What part of every cell has fat in it?", "Slide 7, second check mark."),
      I("Vitamins", [/vitamin/], "What do fats help the body absorb?", "Slide 7, third check mark."),
      I("Not a job of fats", [/enzyme|hormone/], "Which job is NOT a job of fats?", "Slide 7, Common misconception.")
    ]},
  { n:14, heading:"Proteins", prompt:"Identify the functions of proteins besides supplying energy.",
    guide:"Name at least two jobs proteins do.", where:S + "8 | Book: p. 870",
    model:"Proteins supply raw materials for growth and repair. Some act as enzymes that speed up reactions. Some have regulatory or transport jobs.",
    ideas:[
      I("Growth and repair", [/grow|repair|build/], "What do proteins supply for the body's structures?", "Slide 8, first box."),
      I("Enzymes", [/enzyme|speed/], "What do some proteins act as?", "Slide 8, second box.")
    ]},
  { n:15, heading:"Vitamins and Minerals", prompt:"Classify vitamins as fat-soluble or water-soluble.",
    guide:"Which letters are fat-soluble? Which are water-soluble? Which kind is stored?", where:S + "9 | Book: pp. 871 to 872",
    model:"Fat-soluble vitamins are A, D, E, and K. They are stored in fat tissue. Water-soluble vitamins are the B vitamins and C. They are not stored, so they must be replaced more often.",
    ideas:[
      I("Fat-soluble", [either(/fat/, /\ba\b.{0,10}\bd\b.{0,10}\be\b.{0,10}\bk\b|a d e (and )?k|\bk\b/, 40)], "Which vitamins are fat-soluble?", "Slide 9, the Fat-Soluble box."),
      I("Water-soluble", [either(/water/, /\bb\b|\bc\b/, 40)], "Which vitamins are water-soluble?", "Slide 9, the Water-Soluble box.")
    ],
    watch:[ W(/vitamin c (is )?fat/, "Check that. Is vitamin C fat-soluble or water-soluble?") ]},
  { n:16, heading:"Vitamins and Minerals", prompt:"Recall Vitamin C's other name and what it does for the body.",
    guide:"What is its chemical name? Name two jobs.", where:S + "10 | Book: p. 871",
    model:"Vitamin C is also called ascorbic acid. It helps wounds heal, keeps gums healthy, helps the body absorb iron, and maintains cartilage and bone.",
    watch:[ W(/retinol|thiamine/, "Check that. That is a different vitamin\'s name.", "Other name") ],
    ideas:[
      I("Other name", [/ascorbic|a ?scorbic/], "What is vitamin C's chemical name?", "Slide 10: also known as ___ acid."),
      I("What it does", [/wound|heal|gum|iron|cartilage|bone|antioxidant/], "Name a job vitamin C does.", "Slide 10 lists four.")
    ]},
  { n:17, heading:"Food Labels and a Balanced Diet", prompt:"Explain what a food label shows and how it helps plan a balanced diet.",
    guide:"What does the label list? How does that help you eat the right amounts?", where:S + "12 | Book: p. 872",
    model:"A food label shows the amount of each nutrient in a serving. It helps a person plan a balanced diet with all the nutrients they need in the right amounts.",
    ideas:[
      I("What it shows", [/nutrient|amount|serving|calorie/], "What does a food label show?", "Slide 12, the line under the title."),
      I("How it helps", [/balanc|plan|right amount|enough|healthy|all the nutrients/], "How does the label help you plan meals?", "Slide 12, Why this matters.")
    ]},
  { n:18, heading:"Food Labels and a Balanced Diet", prompt:"Identify which nutrient groups provide the body with energy.",
    guide:"Which three nutrients have Calories? Which ones do not?", where:S + "12 | Book: p. 872",
    model:"Carbohydrates, fats, and proteins provide energy. Vitamins, minerals, and water do not.",
    ideas:[ I("The three", [near(/carb|fat|protein/, near(/carb|fat|protein/, /carb|fat|protein/, 40), 40)], "Which three nutrients provide energy?", "Read the last line on Slide 12.") ],
    watch:[ W(/vitamins? (give|provide|supply)|minerals? (give|provide|supply)/, "Check that. Do vitamins and minerals supply energy?") ]}
  ]
});
})();

/* ==================================================================
   UNIT FILE: Unit 1, Quiz 1 (Characteristics of Life).
   Source: Chapter1.3_StudyGuide.pptx (16 terms and characteristics, plus the
   Alive or Not Alive section); Characteristics of Life slideshow; Chapter 1,
   Lesson 1.3. Fields and helpers: see content/u2q2/unit.js and patterns.js.
   ================================================================== */
(function(){
var DECK = "Characteristics of Life slideshow";
var BOOK = "Book: Chapter 1, Lesson 1.3";

UNITS.push({
  id: "u1q1",
  title: "Characteristics of Life",
  subtitle: "Unit 1, Quiz 1 notes",
  source: "Characteristics of Life slideshow; Chapter 1, Lesson 1.3",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and turned the instructor's Chapter 1.3 study guide into note prompts with guiding questions, key-idea checks, and hints, using the Characteristics of Life slideshow and Chapter 1 of the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Vocabulary", prompt:"Define biology.",
    guide:"What does a biologist study?", where:BOOK + ", Characteristics of Living Things",
    model:"Biology is the scientific study of life.",
    ideas:[ I("Definition", [/stud\w* (of )?(life|living)|science of (life|living)|learn\w* about (life|living)/], "What does biology study?", "Bio means life. -logy means the study of.") ]},
  { n:2, heading:"Vocabulary", prompt:"Define DNA.",
    guide:"What does DNA hold, and how is it passed on?", where:BOOK + ", Characteristics of Living Things",
    model:"DNA is the molecule that holds an organism's genetic code. It is passed from parents to offspring.",
    watch:[ W(/dna is (a )?(protein|sugar|lipid|fat)\b/, "Check that. DNA holds the genetic code. Is it really a protein or a sugar?") ],
    ideas:[
      I("What it is", [/molecule|genetic|code|instructions|information|blueprint/], "What does DNA hold?", "It holds the universal genetic ___."),
      I("Passed on", [/parent|offspring|pass|inherit|child|kids/], "How do living things get their DNA?", "Slide 5: a child inherits traits from ___.")
    ]},
  { n:3, heading:"Vocabulary", prompt:"Define stimulus.",
    guide:"What does an organism respond to? Give one example.", where:BOOK + ", Characteristics of Living Things",
    model:"A stimulus is a signal that an organism responds to. Example: a plant bends toward light.",
    watch:[ W(/stimulus (is|means) (the|a|your) (response|reaction)/, "Check that. The stimulus is the signal. The reaction to it is the response.") ],
    ideas:[
      I("Definition", [/signal|something .{0,20}(respond|react)|change in (the )?(environment|surroundings)|cause\w* (a )?(reaction|response)/], "What is a stimulus?", "Read Slide 8: organisms respond to stimuli, which are ___ in their surroundings."),
      I("Example", [/light|sound|knock|noise|heat|cold|hot|touch|smell|food|danger|loud/], "Give one example of a stimulus.", "Slide 8 gives two examples.")
    ]},
  { n:4, heading:"Vocabulary", prompt:"Define sexual reproduction.",
    guide:"How many parents? What joins together?", where:BOOK + ", Characteristics of Living Things",
    model:"Sexual reproduction is when cells from two parents join to make offspring.",
    ideas:[ I("How many parents", [/\b(2|two) parents?|both parents|mom and dad|male and female|mother and father/], "How many parents are needed for sexual reproduction?", "Slide 7: sexually means ___ parents.") ],
    watch:[ W(/\b(1|one) parent|single parent/, "Check that. That describes asexual reproduction.", "How many parents") ]},
  { n:5, heading:"Vocabulary", prompt:"Define asexual reproduction.",
    guide:"How many parents? How do the offspring compare to the parent?", where:BOOK + ", Characteristics of Living Things",
    model:"Asexual reproduction is when one parent makes offspring that are genetically identical to it. Example: bacteria splitting in two.",
    watch:[ W(/\b(2|two) parents|both parents|mom and dad/, "Check that. Asexual reproduction needs how many parents?", "How many parents") ],
    ideas:[
      I("How many parents", [/\b(1|one) parent|single parent|only one|by itself|on its own/], "How many parents are needed for asexual reproduction?", "Slide 7: asexually means ___ parent."),
      I("The offspring", [/identical|same|copy|clone|exact/], "How do the offspring compare to the parent?", "Are they the same as the parent or different?")
    ]},
  { n:6, heading:"Vocabulary", prompt:"Define homeostasis.",
    guide:"What does the body keep stable, even when the outside changes?", where:BOOK + ", Characteristics of Living Things",
    model:"Homeostasis is keeping a stable internal environment, even when conditions outside change. Example: sweating to cool down.",
    ideas:[
      I("Stable inside", [/stable|steady|balanc|same|constant|normal/], "What does homeostasis keep?", "Slide 9: a relatively ___ internal environment."),
      I("Even when outside changes", [/outside|environment|surroundings|condition|change/], "When does the body do this?", "Slide 9: even when the outside world ___.")
    ]},
  { n:7, heading:"Vocabulary", prompt:"Define metabolism.",
    guide:"What chemical reactions? What do they help the organism get and use?", where:BOOK + ", Characteristics of Living Things",
    model:"Metabolism is all the chemical reactions an organism uses to build up and break down materials to get and use energy.",
    ideas:[
      I("Chemical reactions", [/chemical|reaction/], "What is metabolism made of?", "Slide 10: the combination of ___ reactions."),
      I("Energy", [/energy/], "What do those reactions help the organism get and use?", "Slide 10, end of the definition.")
    ]},
  { n:8, heading:"Vocabulary", prompt:"Define biosphere.",
    guide:"Where on Earth does life exist?", where:BOOK,
    model:"The biosphere is the part of Earth where all life exists, including land, water, and air.",
    watch:[ W(/\b(only|just) (the )?(oceans?|land|air|atmosphere|sky)\b/, "Check that. The biosphere is every part of Earth where life exists.") ],
    ideas:[ I("Definition", [/(part|portion|area|place|where|zone|layer)\w*.{0,30}(life|living|organisms)|(all|every) (life|living)/], "What is the biosphere?", "Bio = life. Sphere = the ball of Earth. Put them together.") ]},
  { n:9, heading:"Characteristics of Life", prompt:"Describe cellular organization.",
    guide:"What are all living things made of?", where:"Slide: " + DECK + " 4 | " + BOOK,
    model:"Living things are made of one or more cells. Example: humans have trillions of cells; an amoeba is one cell.",
    watch:[ W(/\b(atoms?|molecules?) (are|is) the (basic|smallest)/, "Check that. What is the smallest unit that is alive?") ],
    ideas:[ I("Made of cells", [/cells?/], "What are all living things made of?", "Slide 4: one or more ___.") ]},
  { n:10, heading:"Characteristics of Life", prompt:"Describe the genetic code (DNA).",
    guide:"Where is the information stored, and how is it passed on?", where:"Slide: " + DECK + " 5 | " + BOOK,
    model:"Living things store their information in DNA, a universal genetic code. It is passed from parents to offspring.",
    ideas:[
      I("Stored in DNA", [/\bdna\b|\bd n a\b|genetic|gene/], "Where is the information for life stored?", "Slide 5, the definition."),
      I("Passed on", [/parent|offspring|pass|inherit|child/], "How is it passed on?", "Slide 5, the example.")
    ]},
  { n:11, heading:"Characteristics of Life", prompt:"Describe the use of energy (metabolism).",
    guide:"What must organisms take in, and why?", where:"Slide: " + DECK + " 10 | " + BOOK,
    model:"All organisms take in materials and energy to grow, develop, and reproduce. Example: digesting food.",
    ideas:[
      I("Take in energy", [/energy|food|material|nutrient|eat/], "What must all organisms take in?", "Slide 10, the definition."),
      I("Why", [/grow|develop|reproduc|live|survive|work|move/], "Why do organisms need energy?", "Read the quiz study guide wording: to grow, develop, and ___.")
    ]},
  { n:12, heading:"Characteristics of Life", prompt:"Describe growth and development.",
    guide:"What pattern do organisms follow from start to maturity?", where:"Slide: " + DECK + " 6 | " + BOOK,
    model:"Organisms grow and develop from their beginning to maturity, following instructions in their genes. Example: a seed grows into a tree.",
    ideas:[
      I("Grow and develop", [/grow|develop|mature|bigger|change/], "What do organisms do from beginning to maturity?", "Slide 6, the definition."),
      I("Example", [/seed|tree|egg|baby|child|adult|tadpole|frog|caterpillar|butterfly|puppy|kid/], "Give one example.", "Slide 6, the example.")
    ]},
  { n:13, heading:"Characteristics of Life", prompt:"Describe reproduction.",
    guide:"What do living things produce? What are the two ways?", where:"Slide: " + DECK + " 7 | " + BOOK,
    model:"Living things produce offspring, either sexually (two parents) or asexually (one parent).",
    ideas:[
      I("Produce offspring", [/offspring|babies|young|new organisms|copies|more of (it|them)/], "What do living things produce?", "Slide 7, the definition."),
      I("Two ways", [either(/\bsexual/, /asexual|a sexual/, 80)], "What are the two ways to reproduce?", "Use your notes 4 and 5.")
    ]},
  { n:14, heading:"Characteristics of Life", prompt:"Describe response to the environment.",
    guide:"What do organisms react to? Give an example.", where:"Slide: " + DECK + " 8 | " + BOOK,
    model:"Living things react to signals (stimuli) from their surroundings. Example: a plant bends toward light.",
    ideas:[
      I("React to signals", [/react|respond|response/], "What do organisms do when something changes around them?", "Slide 8, the definition."),
      I("Example", [/light|knock|noise|sound|heat|cold|touch|bark|danger|smell/], "Give one example.", "Slide 8, the example.")
    ]},
  { n:15, heading:"Characteristics of Life", prompt:"Describe homeostasis as a characteristic of life.",
    guide:"What do organisms keep stable? Give an example.", where:"Slide: " + DECK + " 9 | " + BOOK,
    model:"Organisms keep a stable internal environment even when conditions around them change. Example: sweating to cool down on a hot day.",
    ideas:[
      I("Stable inside", [/stable|steady|balanc|constant|same/], "What do organisms keep stable?", "Slide 9, the definition."),
      I("Example", [/sweat|shiver|cool|warm|temperature|thirst|drink|blood sugar/], "Give one example.", "Slide 9, the example.")
    ]},
  { n:16, heading:"Characteristics of Life", prompt:"Describe evolution as a characteristic of life.",
    guide:"Who changes, one organism or a group? Over how long?", where:"Slide: " + DECK + " 11 | " + BOOK,
    model:"As a group, populations of organisms change and adapt over many generations. One organism does not evolve in its lifetime.",
    watch:[ W(/(one|an individual|a single) (organism|animal|person|plant|creature)\w* (evolv|changes? over)/, "Check that. Does one organism evolve, or a group?", "A group") ],
    ideas:[
      I("A group", [/group|population|species/], "Does one organism evolve, or a group?", "Slide 11, the title."),
      I("Over generations", [/generation|time|years/], "Over how long does evolution happen?", "Slide 11: over many ___.")
    ]},
  { n:17, heading:"Alive or Not Alive?", prompt:"Explain how to decide if something is alive.",
    guide:"How many of the characteristics must it show? Give one tricky example.", where:"Slide: " + DECK + " 13 to 21 | " + BOOK + ", Figure 1-12, Is It Alive?",
    model:"Something is alive only if it shows all eight characteristics of life. Example: fire grows and uses energy, but it has no cells or DNA, so it is not alive.",
    watch:[ W(/\b(fire|campfire|computer virus|crystal|cloud|car|robot|toy)s? (is|are|counts? as) (alive|living)/, "Check that. Does it have cells and DNA?") ],
    ideas:[
      I("The rule", [/all (8|eight)|all (of )?the characteristics|every (one|characteristic)|checklist/], "How many of the characteristics must a living thing show?", "Slide 12: every living thing shows ___."),
      I("Tricky example", [/fire|campfire|mule|seed|virus|crystal|car|cloud|toy|robot|coral|mushroom/], "Give one tricky example and decide if it is alive.", "Slides 14 to 21 walk through four tricky examples.")
    ]}
  ]
});
})();

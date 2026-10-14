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
    watch:[
      W(/\bbiology is (the )?(scientific )?stud(y|ies) of (only )?(animals|plants|the (human )?body|humans|people|rocks|chemicals|the earth|space|stars)\b/, "Check that. Does biology study just one kind of thing, or all of life?", "Definition"),
      W(/(?<!\bnot )\b(only|just) (stud\w* |about |looks at )?(animals|humans|people|plants)\b/, "Check that. Is biology about only one group, or every living thing?", "Definition") ],
    ideas:[ I("Definition", [/stud\w* (of )?(life|living)|science of (life|living)|learn\w* about (life|living)/], "What does biology study?", "Bio means life. -logy means the study of.") ]},
  { n:2, heading:"Vocabulary", prompt:"Define DNA.",
    guide:"What does DNA hold, and how is it passed on?", where:BOOK + ", Characteristics of Living Things",
    model:"DNA is the molecule that holds an organism's genetic code. It is passed from parents to offspring.",
    watch:[
      W(/\b(?<!(not|never) )(passed|goes|go|comes?|travels?|inherited) from (the )?(offspring|children|kids|babies|child|baby) to (the )?parents?\b/, "Check that. Which way is DNA passed, parent to offspring or offspring to parent?"),
      W(/(?<!\bnot )\bonly (in )?(humans|people|animals|mammals)\b/, "Check that. Do only some living things have DNA?"), W(/dna is (a )?(protein|sugar|lipid|fat)\b/, "Check that. DNA holds the genetic code. Is it really a protein or a sugar?") ],
    ideas:[
      I("What it is", [/molecule|genetic|code|instructions|information|blueprint/], "What does DNA hold?", "It holds the universal genetic ___."),
      I("Passed on", [/parent|offspring|pass|inherit|child|kids/], "How do living things get their DNA?", "Slide 5: a child inherits traits from ___.")
    ]},
  { n:3, heading:"Vocabulary", prompt:"Define stimulus.",
    guide:"What does an organism respond to? Give one example.", where:BOOK + ", Characteristics of Living Things",
    model:"A stimulus is a signal that an organism responds to. Example: a plant bends toward light.",
    watch:[
      W(/\bstimul\w* (is|means) (how|when) (an? |the )?(organism|animal|plant|living thing|person|it|you)\w* (reacts?|responds?)/, "Check that. Is the stimulus the signal, or the reaction to it?"),
      W(/\bstimulant\b|\bstimul\w* (is|means) (a )?(drug|caffeine|medicine|energy drink)/, "Check that. A stimulus in biology is a signal in the surroundings. Is it a drug?"), W(/stimulus (is|means) (the|a|your) (response|reaction)/, "Check that. The stimulus is the signal. The reaction to it is the response.") ],
    ideas:[
      I("Definition", [/signal|something .{0,20}(respond|react)|change in (the )?(environment|surroundings)|cause\w* (a )?(reaction|response)/], "What is a stimulus?", "Read Slide 8: organisms respond to stimuli, which are ___ in their surroundings."),
      I("Example", [/light|sound|knock|noise|heat|cold|hot|touch|smell|food|danger|loud/], "Give one example of a stimulus.", "Slide 8 gives two examples.")
    ]},
  { n:4, heading:"Vocabulary", prompt:"Define sexual reproduction.",
    guide:"How many parents? What joins together?", where:BOOK + ", Characteristics of Living Things",
    model:"Sexual reproduction is when cells from two parents join to make offspring.",
    ideas:[ I("How many parents", [/\b(2|two) parents?|both parents|mom and dad|male and female|mother and father/], "How many parents are needed for sexual reproduction?", "Slide 7: sexually means ___ parents.") ],
    watch:[
      W(/(?<!asexual.{0,40})\b(offspring|babies|kids|children|they)( are| is| look)? (genetically )?(identical|the same as (the|their) parents?|exact copies|clones)\b/, "Check that. With two parents, are the offspring exact copies?"), W(/\b(1|one) parent|single parent/, "Check that. That describes asexual reproduction.", "How many parents") ]},
  { n:5, heading:"Vocabulary", prompt:"Define asexual reproduction.",
    guide:"How many parents? How do the offspring compare to the parent?", where:BOOK + ", Characteristics of Living Things",
    model:"Asexual reproduction is when one parent makes offspring that are genetically identical to it. Example: bacteria splitting in two.",
    watch:[
      W(/\b(offspring|babies|kids|children|they)( are| is| look)? (genetically )?(different|unique|a mix|mixed)\b/, "Check that. With only one parent, how do the offspring compare to it?", "The offspring"),
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,20})\b(sperm|eggs? and sperm|male and female|fertiliz\w*)\b/, "Check that. Does asexual reproduction need a sperm and egg from two parents?"), W(/\b(2|two) parents|both parents|mom and dad/, "Check that. Asexual reproduction needs how many parents?", "How many parents") ],
    ideas:[
      I("How many parents", [/\b(1|one) parent|single parent|only one|by itself|on its own/], "How many parents are needed for asexual reproduction?", "Slide 7: asexually means ___ parent."),
      I("The offspring", [/identical|same|copy|clone|exact/], "How do the offspring compare to the parent?", "Are they the same as the parent or different?")
    ]},
  { n:6, heading:"Vocabulary", prompt:"Define homeostasis.",
    guide:"What does the body keep stable, even when the outside changes?", where:BOOK + ", Characteristics of Living Things",
    model:"Homeostasis is keeping a stable internal environment, even when conditions outside change. Example: sweating to cool down.",
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,20})(\b(stable|constant|steady|balanced?) (external|outside)\b|\bkeep\w* the (outside|external) (environment|world|temperature|conditions)\b)/, "Check that. Does homeostasis keep the inside or the outside of the body stable?") ],
    ideas:[
      I("Stable inside", [/stable|steady|balanc|same|constant|normal/], "What does homeostasis keep?", "Slide 9: a relatively ___ internal environment."),
      I("Even when outside changes", [/outside|environment|surroundings|condition|change/], "When does the body do this?", "Slide 9: even when the outside world ___.")
    ]},
  { n:7, heading:"Vocabulary", prompt:"Define metabolism.",
    guide:"What chemical reactions? What do they help the organism get and use?", where:BOOK + ", Characteristics of Living Things",
    model:"Metabolism is all the chemical reactions an organism uses to build up and break down materials to get and use energy.",
    watch:[
      W(/(?<!\bnot )\b(only|just) (about )?(break\w*|digest\w*|burn\w*)/, "Check that. Does metabolism only break things down, or does it build things up too?"),
      W(/\bmetabolism (is|means) (the |your )?(stomach|digestive system|digestion|intestines?)\b/, "Check that. Is metabolism one organ, or all of the chemical reactions in an organism?") ],
    ideas:[
      I("Chemical reactions", [/chemical|reaction/], "What is metabolism made of?", "Slide 10: the combination of ___ reactions."),
      I("Energy", [/energy/], "What do those reactions help the organism get and use?", "Slide 10, end of the definition.")
    ]},
  { n:8, heading:"Vocabulary", prompt:"Define biosphere.",
    guide:"Where on Earth does life exist?", where:BOOK,
    model:"The biosphere is the part of Earth where all life exists, including land, water, and air.",
    watch:[
      W(/\bbiosphere (is|means) (the )?(layer of (air|gas\w*)|air around|atmosphere|ozone)/, "Check that. Is the biosphere just the air, or everywhere life is found?", "Definition"),
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,20})\b(includes?|including|and) (outer space|space|the moon|the sun|other planets)\b/, "Check that. Is life found in space, or only on part of Earth?"), W(/(?<!\bnot )\b(only|just) (the )?(oceans?|land|air|atmosphere|sky)\b/, "Check that. The biosphere is every part of Earth where life exists.") ],
    ideas:[ I("Definition", [/(part|portion|area|place|where|zone|layer)\w*.{0,30}(life|living|organisms)|(all|every) (life|living)/], "What is the biosphere?", "Bio = life. Sphere = the ball of Earth. Put them together.") ]},
  { n:9, heading:"Characteristics of Life", prompt:"Describe cellular organization.",
    guide:"What are all living things made of?", where:"Slide: " + DECK + " 4 | " + BOOK,
    model:"Living things are made of one or more cells. Example: humans have trillions of cells; an amoeba is one cell.",
    watch:[
      W(/(?<!\bnot )\b(all|every) (living things?|organisms?)\b.{0,25}\b(many|multiple|lots of|trillions of|millions of) cells/, "Check that. Do all living things have many cells, or can some be just one?"),
      W(/\b(amoeba|amoebas|bacteria|bacterium)s? (is|are|has|have) (made (up )?of )?(many|multiple|lots of|trillions of|millions of)/, "Check that. How many cells does a tiny organism like that have?"), W(/\b(atoms?|molecules?) (are|is) the (basic|smallest)/, "Check that. What is the smallest unit that is alive?") ],
    ideas:[ I("Made of cells", [/cells?/], "What are all living things made of?", "Slide 4: one or more ___.") ]},
  { n:10, heading:"Characteristics of Life", prompt:"Describe the genetic code (DNA).",
    guide:"Where is the information stored, and how is it passed on?", where:"Slide: " + DECK + " 5 | " + BOOK,
    model:"Living things store their information in DNA, a universal genetic code. It is passed from parents to offspring.",
    watch:[
      W(/\b(?<!(not|never) )(passed|goes|go|comes?|travels?|inherited) from (the )?(offspring|children|kids|babies|child|baby) to (the )?parents?\b/, "Check that. Which way is the genetic code passed, parent to offspring or offspring to parent?"),
      W(/(?<!\bnot )\bonly (in )?(humans|people|animals|mammals)\b/, "Check that. Do only some living things store their information in DNA?") ],
    ideas:[
      I("Stored in DNA", [/\bdna\b|\bd n a\b|genetic|gene/], "Where is the information for life stored?", "Slide 5, the definition."),
      I("Passed on", [/parent|offspring|pass|inherit|child/], "How is it passed on?", "Slide 5, the example.")
    ]},
  { n:11, heading:"Characteristics of Life", prompt:"Describe the use of energy (metabolism).",
    guide:"What must organisms take in, and why?", where:"Slide: " + DECK + " 10 | " + BOOK,
    model:"All organisms take in materials and energy to grow, develop, and reproduce. Example: digesting food.",
    watch:[
      W(/\bplants? (do not|don't|dont|does not|doesn't|doesnt|never|can't|cant|cannot) (need|use|take in|get) (any )?(energy|food|materials)/, "Check that. Do plants need energy and materials too?"),
      W(/(?<!\bnot )\bonly (animals|humans|people) (need|use|take in|get)\b/, "Check that. Is it only animals, or all organisms?") ],
    ideas:[
      I("Take in energy", [/energy|food|material|nutrient|eat/], "What must all organisms take in?", "Slide 10, the definition."),
      I("Why", [/grow|develop|reproduc|live|survive|work|move/], "Why do organisms need energy?", "Read the quiz study guide wording: to grow, develop, and ___.")
    ]},
  { n:12, heading:"Characteristics of Life", prompt:"Describe growth and development.",
    guide:"What pattern do organisms follow from start to maturity?", where:"Slide: " + DECK + " 6 | " + BOOK,
    model:"Organisms grow and develop from their beginning to maturity, following instructions in their genes. Example: a seed grows into a tree.",
    watch:[
      W(/\bdevelop\w* (is|means) (just |only )?(getting|get|to get) (bigger|larger|taller)/, "Check that. Growing means getting bigger. What does developing add?"),
      W(/\b(tree|adult|frog|butterfly|chicken|dog|cat|grown up)s? (grows?|develops?|turns?|changes?) into (an? )?(seed|baby|egg|tadpole|caterpillar|child|kid|puppy|kitten|chick)\b/, "Check that. Which comes first, the beginning stage or the mature stage?") ],
    ideas:[
      I("Grow and develop", [/grow|develop|mature|bigger|change/], "What do organisms do from beginning to maturity?", "Slide 6, the definition."),
      I("Example", [/seed|tree|egg|baby|child|adult|tadpole|frog|caterpillar|butterfly|puppy|kid/], "Give one example.", "Slide 6, the example.")
    ]},
  { n:13, heading:"Characteristics of Life", prompt:"Describe reproduction.",
    guide:"What do living things produce? What are the two ways?", where:"Slide: " + DECK + " 7 | " + BOOK,
    model:"Living things produce offspring, either sexually (two parents) or asexually (one parent).",
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,20})\breproduc\w* (in order )?to (stay alive|live|keep living)\b/, "Check that. Does one organism need to reproduce to stay alive, or is it about making offspring?"),
      W(/(?<!\ba )\bsexual\w* (is |means |has |uses |needs |with )?(one|1|a single) parent|\b(asexual\w*|a sexual\w*) (is |means |has |uses |needs |with )?(two|2|both) parents/, "Check that. Which way uses two parents and which uses one?") ],
    ideas:[
      I("Produce offspring", [/offspring|babies|young|new organisms|copies|more of (it|them)/], "What do living things produce?", "Slide 7, the definition."),
      I("Two ways", [either(/\bsexual/, /asexual|a sexual/, 80)], "What are the two ways to reproduce?", "Use your notes 4 and 5.")
    ]},
  { n:14, heading:"Characteristics of Life", prompt:"Describe response to the environment.",
    guide:"What do organisms react to? Give an example.", where:"Slide: " + DECK + " 8 | " + BOOK,
    model:"Living things react to signals (stimuli) from their surroundings. Example: a plant bends toward light.",
    watch:[
      W(/\bplants? (can't|cant|cannot|can not|do not|don't|dont|does not|doesn't|doesnt|never) (respond|react|sense)/, "Check that. Look at the slide example. Can plants respond?"),
      W(/(?<!\bnot )\bonly (animals|humans|people) (can )?(respond|react)/, "Check that. Is it only animals, or all living things?") ],
    ideas:[
      I("React to signals", [/react|respond|response/], "What do organisms do when something changes around them?", "Slide 8, the definition."),
      I("Example", [/light|knock|noise|sound|heat|cold|touch|bark|danger|smell/], "Give one example.", "Slide 8, the example.")
    ]},
  { n:15, heading:"Characteristics of Life", prompt:"Describe homeostasis as a characteristic of life.",
    guide:"What do organisms keep stable? Give an example.", where:"Slide: " + DECK + " 9 | " + BOOK,
    model:"Organisms keep a stable internal environment even when conditions around them change. Example: sweating to cool down on a hot day.",
    watch:[
      W(/\bsweat\w* (to|and|so you|helps you|will) (warm|heat)|\bshiver\w* (to|and|so you|helps you|will) (cool|get cool)/, "Check that. Which response cools you down and which warms you up?"),
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,20})(\b(stable|constant|steady|balanced?) (external|outside)\b|\bkeep\w* the (outside|external) (environment|world|temperature|conditions)\b)/, "Check that. Do organisms keep the inside or the outside stable?") ],
    ideas:[
      I("Stable inside", [/stable|steady|balanc|constant|same/], "What do organisms keep stable?", "Slide 9, the definition."),
      I("Example", [/sweat|shiver|cool|warm|temperature|thirst|drink|blood sugar/], "Give one example.", "Slide 9, the example.")
    ]},
  { n:16, heading:"Characteristics of Life", prompt:"Describe evolution as a characteristic of life.",
    guide:"Who changes, one organism or a group? Over how long?", where:"Slide: " + DECK + " 11 | " + BOOK,
    model:"As a group, populations of organisms change and adapt over many generations. One organism does not evolve in its lifetime.",
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,20})\b(in (one|a|its|their|his|her|a single) (lifetime|life ?time|life)|overnight|in a few (days|weeks|years))\b/, "Check that. How long does evolution take?"),
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,20})(\b(because|since) (they|it|he|she) (want\w*|need\w*|tries|tried|try) to\b|\b(choose|chooses|decide|decides) to (evolve|change|adapt)\b)/, "Check that. Do organisms choose to evolve?"), W(/(one|an individual|a single) (organism|animal|person|plant|creature)\w* (evolv|changes? over)/, "Check that. Does one organism evolve, or a group?", "A group") ],
    ideas:[
      I("A group", [/group|population|species/], "Does one organism evolve, or a group?", "Slide 11, the title."),
      I("Over generations", [/generation|time|years/], "Over how long does evolution happen?", "Slide 11: over many ___.")
    ]},
  { n:17, heading:"Alive or Not Alive?", prompt:"Explain how to decide if something is alive.",
    guide:"How many of the characteristics must it show? Give one tricky example.", where:"Slide: " + DECK + " 13 to 21 | " + BOOK + ", Figure 1-12, Is It Alive?",
    model:"Something is alive only if it shows all eight characteristics of life. Example: fire grows and uses energy, but it has no cells or DNA, so it is not alive.",
    watch:[
      W(/\balive (if|when) (it )?(has|have|shows?|does|meets?|does|can do) (just |only )?(one|1|some|most|a few|two|three|half|any|at least)\b/, "Check that. How many of the characteristics does a living thing have to show?", "The rule"),
      W(/\b(mule|seed)s? ((is|are) (not|never)|isn't|isnt|aren't|arent) (alive|living)\b/, "Check that. Does it have cells and DNA? Does it carry out the characteristics of life?"), W(/\b(fire|campfire|computer virus|crystal|cloud|car|robot|toy)s? (is|are|counts? as) (alive|living)/, "Check that. Does it have cells and DNA?") ],
    ideas:[
      I("The rule", [/all (8|eight)|all (of )?the characteristics|every (one|characteristic)|checklist/], "How many of the characteristics must a living thing show?", "Slide 12: every living thing shows ___."),
      I("Tricky example", [/fire|campfire|mule|seed|virus|crystal|car|cloud|toy|robot|coral|mushroom/], "Give one tricky example and decide if it is alive.", "Slides 14 to 21 walk through four tricky examples.")
    ]}
  ]
});
})();

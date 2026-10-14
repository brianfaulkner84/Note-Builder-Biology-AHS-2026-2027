/* ==================================================================
   UNIT FILE: Unit 2 Test (Cells and Energy).
   Source: Unit2_Test_Notebook_Guide.pptx (32 prompts); every Unit 2
   slideshow; Chapter 2 (Lesson 2.3), Chapter 7, Chapters 8 and 9.
   Most questions reuse the matching quiz question (ideas, hints, and
   mistake checks), renumbered with the test guide's headings and tags.
   Fields and helpers are explained in content/u2q2/unit.js and patterns.js.
   ================================================================== */
(function(){
var SOME_PASS = [/\bsome\b.{0,50}\b(not|others?|block\w*|keep\w*|can.?t|cannot|don.?t|stop\w*|out)\b/, /certain (things|substances|molecules|stuff)/, /lets? (only )?(some|certain|small)/, /only (some|certain|small)/, /not (everything|all|anything)/];
var IN_OUT = [/\b(enter\w*|in|into|come\w*|coming|get\w* in)\b.{0,40}\b(leav\w*|out|exit\w*)\b/, /\b(leav\w*|out|exit\w*)\b.{0,40}\b(enter\w*|in|into)\b/];
var GLUCOSE = T.glucose, CO2 = T.co2, O2 = T.o2, H2O = T.water;
var LIGHT_DEP = /light ?dependent|light reactions?|part 1|part one|first part/;
var PYR = T.pyruvate, H = /\bh\b|\bh plus|hydrogen|protons?/;
var SYNTHASE = /synthase|synthes[ae]s?|synth ?ace/;
/* Not a mistake: any total from 29 to 38 is accepted, but the book's answer is about 36. */
var ATP_N = "(?:29|3[0-57-8]|twenty ?nine|thirty(?: ?(?:one|two|three|four|five|seven|eight))?)";
var ATP_TIP = { match: new RegExp("(?:total|altogether|overall|in all|per glucose|one glucose|with oxygen)\\D{0,25}\\b" + ATP_N + "\\b|\\b" + ATP_N + "\\b(?: atp)?(?: \\w+){0,2} (?:total|altogether|overall|in all|per glucose)"),
  unless: /\b36\b|thirty ?six/,
  say: "Your total is in the accepted range. The book's answer is about 36 ATP per glucose, so 36 is the number to remember for the test." };
UNITS.push({
  id: "u2t",
  title: "Cells and Energy",
  subtitle: "Unit 2 Test notes",
  source: "Every Unit 2 slideshow; Chapter 2 (Lesson 2.3), Chapter 7, Chapters 8 and 9",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and wrote the key-idea checks and hints from the instructor's Unit 2 Test notebook guide, the four Unit 2 quiz notebook guides, the Unit 2 slideshows, and the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Cell Basics", prompt:"Identify where a eukaryotic cell keeps its DNA.",
    guide:"What is the difference between a prokaryote and a eukaryote? Which organelle holds the DNA?", where:"Slide: Intro 11, Organelles 9 | Book: Eukaryotes, p. 194; The Nucleus, p. 197",
    model:"• A eukaryotic cell keeps its DNA in the nucleus\n• A prokaryote has no nucleus; its DNA floats in the cytoplasm",
    watch:[
      W(/(eu|you|u) ?kary\w*(?:(?!pro|bacteri|nucle|\bnot\b|n't|\bno\b|\bnever\b|\bwithout\b).){0,40}\b(?:in|inside) (?:the )?(?:cyto ?plasm|sito ?plasm|site ?o ?plasm|ribo ?som\w*|cell membrane|cell wall|vacuoles?)\b/, "Check that. In a eukaryotic cell, which organelle holds the DNA?"),
      W(/(?<!(\bnot|n't|\bno)\b[\w' ]{0,10})\bvirus/, "Check that. Viruses are not cells. Which living things are prokaryotes?"),
      W(/(pro ?kary|pro ?carr|pro ?cary|procar)\w*( cells?)? (has|have|contains?|contain) (a |its )?(nucle|new ?clear)/, "Check that. Does a prokaryote have a nucleus?"),
      W(/(eu|you|u) ?kary\w*( cells?)? ((do not|don't|dont|does not|doesn't|doesnt|never) have|lacks?|has no|have no) (a )?nucle/, "Check that. Where does a eukaryote keep its DNA?"),
      W(/(eu|you|u) ?kary\w*( cells?)?( are| is)?( an?)? (examples?|like|such as|for example|e g)( is| are)?( an?)? bacteri|bacteri\w* (is|are) (an? )?(eu|you|u) ?kary|(pro ?kary|procar)\w*( cells?)?( are| is)?( an?)? (examples?|like|such as|for example|e g)( is| are)?( an?)? (plants?|animals?|humans?)|(plants?|animals?|humans?) (is|are) (an? )?(pro ?kary|procar)/, "Check that. Is your example in the right group? Which one has a nucleus?") ],
    ideas:[
      I("Where the DNA is", [either(/\bdna\b|\bd n a\b|genetic|chromosom/, /nucle|new ?clear/, 60)], "Which organelle holds the DNA in a eukaryotic cell?", "Slide Organelles 9. The control center holds the DNA."),
      I("Prokaryote difference", [near(T.pro, lacks(/nucle/), 60), near(T.pro, /dna (floats|is loose|is free)/, 60)], "How is a prokaryote different? Does it have a nucleus?", "PRO rhymes with NO. Slide Intro 11.")
    ]},
  { n:2, heading:"The Cell Membrane", prompt:"Label a drawing of a phospholipid, the main molecule of the membrane.",
    guide:"Draw the head and two tails. Which part is hydrophilic (polar)? Which part is hydrophobic (non-polar)?", where:"Slide: Membrane 6 | Book: Cell Membranes, p. 204",
    draw:"Draw a phospholipid here. Label the head and the tails.",
    model:"• A phospholipid has a hydrophilic (water-loving, polar) head and two hydrophobic (water-fearing, non-polar) fatty acid tails",
    watch:[
      W(/(?<!\bnot )\b(?:2|two) (?:hydrophilic |water loving |polar |phosphate )?heads\b/, "Check that. How many heads does one phospholipid have?"),
      W(/\bphosphate (?:group )?tails?\b|\btails? (?:are|is) (?:made of )?(?:a |the )?phosphates?\b/, "Check that. Which part has the phosphate, and what are the tails made of?"),
      W(/\bheads? (is |are |is the |are the |that is |that are |which is |which are |being )?(hydro ?(ph|f)o ?b\w*|water ?(fear|hat|scar)\w*|non ?polar|afraid of (the )?water|hates? (the )?water)|(?<!\btails? (are |is )?)(hydro ?(ph|f)o ?b\w*|water ?(fear|hat|scar)\w*|non ?polar|afraid of (the )?water|hates? (the )?water) (phosphate )?heads?\b/, "Check that. Which part of the phospholipid loves water?"),
      W(/\btails? (is |are |is the |are the |that is |that are |which is |which are |being )?(hydro ?(ph|f)(i|e|ee|y)l\w*|water ?lov\w*|loves? (the )?water|likes? (the )?water|(?<!non )polar)|(?<!\bheads? (is |are )?)(hydro ?(ph|f)(i|e|ee|y)l\w*|water ?lov\w*|loves? (the )?water|likes? (the )?water|(?<!non )polar) (fatty acid )?tails?\b/, "Check that. How do the tails feel about water?"),
      W(/\b(one|1|a single|only one) (fatty acid |hydrophobic |long )?tail\b/, "Check that. How many tails does a phospholipid have?") ],
    ideas:[
      {label:"Top part", match:[/\bheads?\b/], hints:["Name the round top part of the phospholipid.","Look at the top of the drawing on Slide 6. What is it called?"]},
      {label:"Top part and water", match:[PHILIC], hints:["How does the top part feel about water?","Slide 6 memory trick: -philic means ____."]},
      {label:"Bottom part", match:[/\btails?\b/], hints:["Name the long bottom parts of the phospholipid.","Look at the bottom of the drawing on Slide 6. What are those called?"]},
      {label:"Bottom part and water", match:[PHOBIC], hints:["How do the bottom parts feel about water?","Slide 6 memory trick: -phobic means ____."]}
    ]},
  { n:3, heading:"The Cell Membrane", prompt:"Identify what cholesterol does, and where carbohydrate tags are found.",
    guide:"How does cholesterol help the membrane? Are the tags on the inside or the outside?", where:"Slide: Membrane 9 | Book: not in the textbook; use the slide",
    model:"• Cholesterol stabilizes the membrane\n• It keeps it from getting too runny or too stiff and makes it heat resistant\n• Carbohydrate tags are on the outside of the cell, where they work as ID tags",
    ideas:[
      {label:"Cholesterol", match:[/stabil|stable|steady|strong|stiff|runny|heat|firm|support|sturdy|hold\w* (it )?together/],
        hints:["What does cholesterol do for the membrane?","Read the cholesterol box on Slide 9."]},
      {label:"Where the tags are", match:[/outside|outer|exterior|out side|on the out/],
        hints:["Are the carbohydrate tags inside or outside the cell?","Look at the labeled membrane picture on Slide 13."]}
    ],
    watch:[
      W(/\bbad\b|unhealthy|harmful|\bclogs?\b/, "Check that. In the membrane, cholesterol has a helpful job. What is it?", "Cholesterol"),
      W(/(?<!\bnot )(?<!\bdoesn't )(?<!\bdoesnt )\b(makes?|make) (the membrane |it )?(more )?(runny|melt|leaky|weak|weaker|floppy|unstable)\b/, "Check that. Does cholesterol make the membrane more stable or less stable?"),
      W(/\btags?\b.{0,45}\b(energy|food|fuel)\b/, "Check that. What job do the carbohydrate tags do on the outside?"),{match:/\binside\b/, unless:"Where the tags are", say:"Check where the carbohydrate tags are. Look at Slide 13."}]},
  { n:4, heading:"The Cell Membrane", prompt:"Define selectively permeable, and give one everyday example.",
    guide:"What object at home lets some things through but blocks others? What passes and what stays?", where:"Slide: Membrane 10 | Book: Cell Membranes, p. 205",
    model:"• Selectively permeable means the membrane lets some things pass through but blocks others\n• Example: a colander lets water through but keeps the pasta in",
    watch:[
      W(/(?<!\bnot )(?<!n't )(?<!\bdont )(?<!\bdoesnt )\b(?:lets?|allows?) (?:the )?(?:pasta|noodles|spaghetti|macaroni) (?:go |pass |fall |get )?(?:through|out)\b|(?<!\bnot )(?<!n't )(?<!\bdont )(?<!\bdoesnt )\bkeeps? (?:the )?water in\b/, "Check that. In a colander, which part goes through and which part stays?"),
      W(/(?<!\bnot )\bnothing (?:can |could |will )?(?:get|gets|pass|passes|go|goes|come|comes|enter|enters) (?:in|through|across|out)\b/, "Check that. Does nothing get through, or only some things?"),
      W(/(?<!\bnot )(?<!n't )(?<!\bdoesnt )(?<!\bdont )\b(lets?|allows?) (everything|anything|all (things|molecules|substances|stuff)) (in|through|pass|go)|(?<!\bnot )(?<!n't )(?<!\bdoesnt )(?<!\bdont )\b(blocks?|stops?) (everything|anything|all (things|molecules|substances|stuff))\b|water ?proof/, "Check that. Does everything get through, nothing, or only some things?"),
      W(/\b(brick wall|glass|plastic bag|plastic wrap|rock|metal|balloon)\b/, "Check that. Does your example let some things through but not others?", "Everyday example") ],
    ideas:[
      {label:"What it means", match:[/\bsome\b.{0,50}\b(not|others?|block\w*|keep\w*|can.?t|cannot|don.?t|stop\w*|out)\b/, /certain (things|substances|molecules|stuff)/, /lets? (only )?(some|certain|small)/, /only (some|certain|small)/, /not (everything|all|anything)/, /pick\w* |choos\w*/],
        hints:["Does everything get through the membrane?","Finish this: some things ____, but others ____."]},
      {label:"Everyday example", match:[/colander|strainer|filter|screen|tea ?bag|\bnet\b|sieve|mesh|sift|mask|sponge|paper towel|cheese ?cloth|fence/],
        hints:["Name an object at home that lets some things through but not others.","Think about the kitchen, or a window in the summer."]}
    ]},
  { n:5, heading:"The Cell Membrane", prompt:"Explain why charged particles and polar molecules need help to cross.",
    guide:"What is the middle of the bilayer like? What do they use to get through?", where:"Slide: Membrane 11, 18 | Book: Facilitated Diffusion, p. 209",
    model:"• The middle of the bilayer is made of hydrophobic (non-polar, oily) tails\n• It pushes charged and polar molecules away, so they need a transport protein to get across",
    watch:[
      W(/(?<!\bnot )(?<!n't )(?<!\bdont )(?<!\bdoesnt )(?<!\bno )\b(?:need|needs|use|uses|require|requires) (?:\w+ )?(?:energy|atp) to (?:get|go|move|cross|pass)\b/, "Check that. What they need is a way through, not energy. What helps them cross?"),
      W(/\bheads? (?:\w+ )?(?:block|blocks|push|pushes|repel|repels|stop|stops|keep|keeps)\b/, "Check that. The heads love water. Which part in the middle blocks charged particles?"),
      W(/\bmiddle (is |are )?(made (up )?of )?(the )?(hydro ?(ph|f)(i|e|ee|y)l\w*|water ?lov\w*|heads?\b|(?<!non )polar)/, "Check that. What part of the phospholipid is in the middle, and how does it feel about water?"),
      W(/\btoo (big|large)\b/, "Check that. Even small charged particles need help. What is the middle of the bilayer like?", "The middle") ],
    ideas:[
      {label:"The middle", match:[/hydro ?(ph|f)o ?b|non ?polar|\boil|\bfat|water ?fear|\btails?\b/],
        hints:["What is the middle of the bilayer made of?","Think back to note 2. What part sits in the middle, and how does it feel about water?"]},
      {label:"What happens to them", match:[/block|push\w*.{0,40}\baway|push\w* (them )?out|repel|stop|keep\w* (them )?out|can.?t (get|go|pass|cross|fit)|cannot|won.?t|not able|unable|doesn.?t let|don.?t let/],
        hints:["What does the middle do to charged particles?","Do they slip through, or does something happen to them?"]},
      {label:"The help", match:[/protein|channel|carrier|helper/],
        hints:["What gives them a way across?","Read the \"Also know\" line on Slide 11."]}
    ]},
  { n:6, heading:"Passive Transport", prompt:"Define diffusion.",
    guide:"Which way do particles move? What decides the direction? How does oxygen get into a cell?", where:"Slide: Membrane 16 | Book: Diffusion, p. 208",
    model:"• Diffusion is when particles move from high concentration to low concentration\n• Concentration decides the direction\n• It needs no energy\n• Oxygen gets into cells by diffusion",
    ideas:[
      {label:"Which way", match:[HL], hints:["Which way do particles move during diffusion?","Air freshener sprays in one corner. Where does it start, and where does it spread?"]},
      {label:"What sets the direction", match:[/concentrat/], hints:["What word tells you how crowded a substance is?","Slide 16 defines this word in the first box."]},
      {label:"Oxygen example", match:[/oxygen|\bo ?(2|two)\b/], hints:["Add how oxygen gets into a cell.","Think about your lungs passing a gas into your blood."]}
    ],
    watch:[
      W(/(?<!\bnot )\b(?:size|temperature|heat|energy|atp|the cell|the membrane|gravity|pressure|proteins?) (?:decides|determines|controls|sets|chooses) (?:the |which )?(?:direction|way)\b/, "Check that. What decides which way particles diffuse?"),
      W(/\boxygen (?:\w+ ){0,4}(?<!\bnot )(?<!\bno )(?:active transport|pumps?|endocytosis|osmosis)\b/, "Check that. Oxygen gets in the same way you just defined. Which process is it?"),
      W(/(?<!\bno )(?<!\bnot )(?<!n't )(?<!\bdont )(?<!\bdoesnt )\b(uses?|needs?|requires?|takes?|costs?) (some |a lot of |lots of )?(energy|atp)/, "Check that. Is diffusion active or passive? Does it cost energy?"),
      W(/diffusion (is|means) (the )?(movement|diffusion|moving|flow) of water\b/, "Check that. Does diffusion only move water? That sounds like osmosis."),{match:LH, unless:"Which way", say:"Check your direction. Air freshener spreads from where to where?"}]},
  { n:7, heading:"Passive Transport", prompt:"Describe what molecules do at equilibrium.",
    guide:"Do they stop moving, or keep moving? Which way?", where:"Slide: Membrane 17 | Book: Diffusion, p. 208",
    model:"• At equilibrium the concentration is the same on both sides\n• The molecules do not stop\n• They keep moving back and forth across the membrane, the same number each way",
    ideas:[
      {label:"Concentration", match:[/equal|same|balanc|\beven\b|evened/], hints:["What is true about the concentration on both sides?","At equilibrium, is one side more crowded than the other?"]},
      {label:"Do they stop?", match:[/keep\w* (on )?mov|still mov|continu|(don.?t|do not|never|doesn.?t|does not|not) stop|mov\w* (back and forth|both ways|across|around)|always mov/],
        hints:["Do the molecules stop moving, or not?","Slide 17 answers \"Do molecules stop?\" in big letters."]},
      {label:"Which way", match:[/back and forth|both (ways|directions)|each way|in and out|either way|each direction/],
        hints:["Which direction do they move?","Picture people walking through a doorway at a busy time. Which way are they going?"]}
    ],
    watch:[
      W(/(?<!\bnot )(?<!\bno )(?<!n't )\b(?:more|higher|greater) (?:concentration |molecules |particles )?on one side\b|\bone side (?:has|is) (?:more|higher)\b/, "Check that. At equilibrium, is one side more crowded than the other?"),
      W(/(?<!\bnot )(?<!n't )(?<!\bnever )\b(no (more )?(movement|motion)|stays? still|stand still|freeze|froze|frozen)\b/, "Check that. Do the molecules really stop moving at equilibrium?", "Do they stop?"),
      W(/(?<!\bnot )(?<!\bnot in )(?<!\bnot just )\b(only )?(in )?(one|1) (way|direction)\b/, "Check that. Do the molecules move only one way at equilibrium?", "Which way"),{match:/(they|molecules|particles|it|everything) (all )?(stop|stops|stopped)\b|stop (moving|moves)/, unless:"Do they stop?", say:"Check that. Do the molecules really stop? Look at Slide 17."}]},
  { n:8, heading:"Passive Transport", prompt:"Define osmosis.",
    guide:"What substance moves, and what does it cross?", where:"Slide: Membrane 19 | Book: Osmosis: An Example of Facilitated Diffusion, p. 210",
    model:"• Osmosis is the diffusion of water across a selectively permeable membrane\n• Water moves toward the side with more solute",
    watch:[
      W(/\bosmosis (?:is |counts as |uses |needs )(?:an? )?(?:type |kind |form |example )?(?:of )?active\b|(?<!\bnot )(?<!n't )\bwater (?:is |gets )?pumped\b/, "Check that. Osmosis is a kind of diffusion. Is it active or passive?"),
      W(/\bfrom (?:the )?(?:side |area |place )?(?:with |that has |where there is )?(?:more|higher|high|most|lots of|a lot of) (?:solute|salt|sugar|stuff)\b/, "Check that. Water moves toward more solute. Which side does it leave?"),
      W(/\baqua ?por\w* (?:\w+ )?pump/, "Check that. Aquaporins are channels. Does osmosis need a pump?"),
      W(/(diffusion|movement|moving|flow) of (salt|sugar|solutes?|particles|stuff|ions)\b|(?<!\bnot )(?<!n't )\b(salt|sugar|solutes?)\w* (moves?|diffuses?|goes|flows?) (across|through|from|toward)/, "Check that. In osmosis, which substance moves across the membrane?"),
      W(/\b(toward\w*|to|into) (the )?(side |area |place )?(with |that has |where there is )?(less|lower|fewer|least|little|no) (solute|stuff|salt|sugar)/, "Check that. Does water move toward more solute or less?"),
      W(/(?<!\bno )(?<!\bnot )(?<!n't )(?<!\bdont )(?<!\bdoesnt )(?<!\bactive (?:transport )?)\b(uses?|needs?|requires?|takes?|costs?) (some |a lot of )?(energy|atp)/, "Check that. Osmosis is a kind of diffusion. Does it cost energy?") ],
    ideas:[
      {label:"What moves", match:[/water/], hints:["What substance moves during osmosis?","Osmosis is the diffusion of one special substance. What is it?"]},
      {label:"How it moves", match:[/diffus|across|through|membrane|cross/], hints:["What kind of movement is it, and across what?","Osmosis is a type of a movement you already wrote about in note 9."]}
    ]},
  { n:9, heading:"Passive Transport", prompt:"Illustrate a cell in isotonic, hypertonic, and hypotonic solutions.",
    guide:"Draw arrows for water. Does the cell swell, shrink, or stay the same? Where is there more solute?", where:"Slide: Membrane 20 to 22 | Book: Osmotic Pressure, p. 211",
    draw:"Draw three cells: isotonic, hypertonic, hypotonic. Add arrows to show which way water moves.",
    model:"• -Tonic is the amount of solute in the water around the cell\n• Isotonic: same solute, the cell stays the same\n• Hypertonic: more solute outside, water moves out and the cell shrinks\n• Hypotonic: less solute outside, water moves in and the cell swells",
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
      W(/hyper ?tonic(?:(?!hypo|iso).){0,40}\b(water )?(moves?|goes|rushes|flows?|comes?) in(to)?\b/, "Check that. In hypertonic, more solute is outside. Which way does water move?"),
      W(/hypo ?tonic(?:(?!hyper|iso).){0,40}\b(water )?(moves?|goes|rushes|flows?|leaves?) out\b/, "Check that. In hypotonic, less solute is outside. Which way does water move?"),
      W(/iso ?tonic(?:(?!hyp).){0,40}(no water (moves|movement|goes)|water (stops|doesn't move|does not move|doesnt move|does not go|doesn't go))/, "Check that. In isotonic, does water stop, or move in and out equally?"),
      {match:/hyper ?tonic(?:(?!hypo|iso).){0,40}(swell|burst|bigger)/, say:"Check hypertonic. More solute is outside the cell. Which way does water move?"},
      {match:/hypo ?tonic(?:(?!hyper|iso).){0,40}(shrink|shrivel|smaller)/, say:"Check hypotonic. Less solute is outside the cell. Which way does water move?"}
    ]},
  { n:10, heading:"Active or Passive?", prompt:"Distinguish active transport from passive transport.",
    guide:"What one question decides the group? Which moves high to low, and which moves low to high?", where:"Slide: Membrane 15 | Book: Passive Transport, p. 208; Active Transport, p. 212",
    model:"• The deciding question is energy\n• Passive transport uses no energy and moves high to low\n• Active transport uses energy (ATP) and moves low to high",
    ideas:[
      {label:"The deciding question", match:[/energy|\batp\b/],
        hints:["What does the cell spend in one group but not the other?","Slide 15: coasting downhill on a bike vs. pedaling uphill."]},
      {label:"Passive", match:[/\bpassive\b.{0,60}\b(no|not|doesn.?t|does not|without|free|zero|none|never)\b/, /(no|without|zero|doesn.?t (use|need|require|take)|does not (use|need|require|take)) (any )?(energy|atp).{0,40}\bpassive/],
        hints:["Does passive transport cost the cell energy?","Passive is like coasting downhill. Do you need to pedal?"]},
      {label:"Active", match:[/\bactive\b.{0,60}\b(uses?|using|needs?|requires?|costs?|takes?|spends?|with|has to|atp)\b/, /\b(uses?|needs?|requires?|costs?|takes?) (energy|atp)\b.{0,40}\bactive\b/, /\bactive\b (transport )?(does|is the one)/],
        hints:["Does active transport cost the cell energy?","Active is like pedaling uphill. What does that take?"]}
    ],
    watch:[
      W(/\bpassive\b(?:(?!\bactive\b|\bnot\b|n't|\bnever\b|\bno\b).){0,40}\bagainst\b|\bactive\b(?:(?!passive|\bnot\b|n't|\bnever\b|\bno\b).){0,40}\b(?:with|down) the (?:flow|gradient|concentration gradient)\b/, "Check that. Which one goes with the flow (high to low), and which goes against it?"),
      W(/\bpassive\b(?:(?!\bactive\b).){0,40}\b(low|less|lower)\w*( concentration)? to (high|more|higher|greater)/, "Check that. Which way does passive transport move things?"),
      W(/\bactive\b(?:(?!passive).){0,40}\b(high|more|higher|greater)\w*( concentration)? to (low|less|lower)/, "Check that. Which way does active transport move things?"),
      {match:/\bactive\b (transport )?(doesn.?t|does not|don.?t) (use|need|require)/, say:"Check active transport. Is it the free one, or the one that costs energy?"},
      {match:/\bpassive\b (transport )?(uses?|needs?|requires?|costs?) (energy|atp|some|a lot)/, say:"Check passive transport. Is it the free one, or the one that costs energy?"}
    ]},
  { n:11, heading:"Active or Passive?", prompt:"Describe exocytosis.",
    guide:"What does it move, which way does it go, and does it cost energy?", where:"Slide: Membrane 27 | Book: Bulk Transport, p. 213",
    model:"• Exocytosis moves large materials, like bulk waste, out of the cell\n• A vesicle joins the cell membrane and releases them outside\n• It uses energy, so it is active transport",
    watch:[
      W(/(?<!\bnot )(?<!n't )\b(?:moves?|moving|carries|transports?|releases?|sends?|gets? rid of) (?:\w+ ){0,2}(?:small|tiny|single) (?:molecules?|particles?|ions?|things|stuff)\b/, "Check that. Exocytosis is bulk transport. Does it move small molecules or large materials?"),
      W(/(?<!\bnot )(?<!n't )\b(?:engulf\w*|wraps? around|pinch\w* in|folds? (?:in|inward))\b/, "Check that. That describes bringing things in. In exocytosis, what does the vesicle do?"),
      W(/\bexo\w*( is| means)?( when)?( the cell)? (brings?|takes?|lets?) (\w+ )?in\b|\bexo\w*.{0,30}\b(into|inside) the cell/, "Check that. Does exocytosis bring things in or send them out?"),
      W(/(?<!\bnot )(?<!\bisn't )\bpassive\b|\b(no|without|doesn't|doesnt|does not|don't|dont) (need |use |require )?(any )?(energy|atp)\b/, "Check that. Does exocytosis cost the cell energy?", "Energy"),
      W(/\bendo ?cytosis\b(?:(?!\bexo).){0,40}\b(out|outside|releas\w*|gets? rid)/, "Check that. The question is about exocytosis. Which one sends things out?") ],
    ideas:[
      I("Which way", [/\bout\b|outside|releas|export|get\w* rid|remov|secret|exit|leav/], "Which way does exocytosis move things, in or out?", "Exit and exocytosis both start with ex. Slide Membrane 27."),
      I("What it moves", [/waste|large|big|bulk|protein|material|stuff|particle|vesicle|package/], "What does exocytosis move?", "Slide Membrane 27: what does the cell get rid of this way?"),
      I("Energy", [/(?<!\bno )(?<!\bnot )\b(energy|atp)\b|\bactive\b/], "Does exocytosis cost energy?", "Bulk transport is on the active side of your chart. Slide Membrane 27.")
    ]},
  { n:12, heading:"Active or Passive?", prompt:"Classify each type of transport as active or passive in a two-column chart.",
    guide:"Sort: diffusion, facilitated diffusion, osmosis, exocytosis, high to low, low to high.", where:"Slide: Membrane 28 to 30 | Book: Passive Transport, p. 208; Active Transport, p. 212",
    draw:"Make a two-column chart here: Passive | Active.",
    model:"• Passive: diffusion, facilitated diffusion, osmosis, high to low\n• Active: exocytosis, low to high",
    sort:{ groups:{passive:/\bpassive\b/, active:/\bactive\b/},
      items:[
        {label:"Diffusion", match:/(?<!facilitated )(?<!facilitate )\bdiffusion/, group:"passive"},
        {label:"Facilitated diffusion", match:/facilitat\w* diffus/, group:"passive"},
        {label:"Osmosis", match:/osmos/, group:"passive"},
        {label:"High to low", match:/\bhigh\w*(?: concentration)? to (?:a |the )?low/, group:"passive"},
        {label:"Low to high", match:/\blow\w*(?: concentration)? to (?:a |the )?high/, group:"active"},
        {label:"Exocytosis", match:/\bexo/, group:"active"}
      ]}},
  { n:13, heading:"Energy and ATP", prompt:"Identify the monomer (building block) of carbohydrates.",
    guide:"What is the building block called? Give one example.", where:"Slide: Energy 5 | Book: Carbohydrates, Simple Sugars, p. 46 (Chapter 2)",
    model:"• The monomer of carbohydrates is a simple sugar (monosaccharide)\n• Example: glucose",
    ideas:[
      I("The monomer", [/simple sugar|mono ?sacchar|monosaccharide|single sugar|one sugar/], "What is the building block of a carbohydrate called?", "Slide Energy 5, the Simple sugar box."),
      I("Example", [/glucose|fructose|galactose/], "Give one example of a simple sugar.", "Slide Energy 5 names one. Your body runs on it.")
    ],
    watch:[
      W(/\bglucose is (?:a |an )?(?:polysaccharide|disaccharide|complex (?:carb\w*|sugar)|starch|polymer)\b/, "Check that. Is glucose one sugar or many sugars joined together?"),
      W(/\b(?:monomer|building block)s? (?:of (?:a )?carbohydrates? )?(?:is|are) (?:a |an |the )?(?:starch|glycogen|cellulose|polysaccharide|disaccharide|sucrose|lactose)/, "Check that. That is a big carbohydrate made of many sugars. What is the single building block?", "The monomer"), W(/amino acid|nucleotide|fatty acid/, "Check that. That is the monomer of a different macromolecule.", "The monomer") ]},
  { n:14, heading:"Energy and ATP", prompt:"Compare a calorie and a Calorie.",
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
  { n:15, heading:"Energy and ATP", prompt:"Describe the ATP molecule.",
    guide:"What does ATP stand for? What is its job in the cell?", where:"Slide: Energy 10 to 11 | Book: Chemical Energy and ATP, p. 226",
    model:"• ATP stands for adenosine triphosphate\n• Its job: it is the cell's main energy source; it stores energy and releases it for cell work",
    watch:[
      W(/\b(?:6|six|3|three|4|four) ?carbon sugar\b|\bribose (?:is |a |an |which is )*(?:6|six|3|three) ?carbon\b/, "Check that. How many carbons does ribose have?"),
      W(/\bdeoxy ?ribose|\b(?:sugar|ribose) (?:is |called |named |which is )?glucose\b/, "Check that. Which 5 carbon sugar is in ATP?"),
      W(/\badenine tri ?phosphate/, "Check that. Adenine is one of the parts. What is the full name of ATP?", "What ATP stands for"), W(/\batp\b(?: \w+){0,3} (2|two|di) ?phosphates?/, "Check that. How many phosphates does ATP have?") ],
    ideas:[
      I("What ATP stands for", [/adenosine ?tri ?phosphate|adenosine tri/], "What does ATP stand for?", "Slide Energy 10, the line under the title."),
      I("Its job", [/energy|power|fuel/], "What is ATP's job in the cell?", "Slide Energy 11: the cell's main ___ source.")
    ]},
  { n:16, heading:"Energy and ATP", prompt:"Classify ATP, ADP, NAD+, glucose, and glycolysis as molecules or processes.",
    guide:"Which ones hold or carry energy? Which one is a set of steps?", where:"Slide: Energy 16 to 17 | Book: not a textbook heading; use the slide",
    model:"• Molecules: ATP, ADP, NAD+, and glucose\n• Process: glycolysis",
    sort:{ groups:{molecule:/\bmolecules?\b|\bthings?\b/, process:/\bprocess\w*|\bsteps?\b/},
      items:[
        {label:"ATP", match:T.atp, group:"molecule"},
        {label:"ADP", match:T.adp, group:"molecule"},
        {label:"NAD+", match:T.nad, group:"molecule"},
        {label:"Glucose", match:/glucose/, group:"molecule"},
        {label:"Glycolysis", match:T.glycolysis, group:"process"}
      ]}},
  { n:17, heading:"Autotrophs and Photosynthesis", prompt:"Classify algae, mushrooms, and whales as autotrophs or heterotrophs.",
    guide:"Which one makes its own food from sunlight? Why is a mushroom NOT an autotroph?", where:"Slide: Energy 19 to 21 | Book: Heterotrophs and Autotrophs, p. 228",
    model:"• Algae are autotrophs because they make food from sunlight\n• Mushrooms are heterotrophs; they cannot make food from sunlight, so they absorb food from dead matter\n• Whales are heterotrophs; they eat other organisms",
    ideas:[
      I("Algae", [either(/algae/, /auto/, 40)], "Are algae autotrophs or heterotrophs?", "Can algae make food from sunlight? Slide Energy 21."),
      I("Mushrooms", [either(/mushroom/, /hetero/, 40)], "Are mushrooms autotrophs or heterotrophs?", "Slide Energy 21 answers this one."),
      I("Whales", [either(/whale/, /hetero/, 40)], "Are whales autotrophs or heterotrophs?", "Does a whale make its own food or eat other living things? Slide Energy 19 to 21."),
      I("Why the mushroom", [/absorb|decompos|dead|rott|can.?t make|cannot make|don.?t make|doesn.?t make|no (chloro|sun)|not (make|photo)|from other/], "Why is a mushroom NOT an autotroph?", "Read the line at the top of Slide Energy 21.")
    ],
    watch:[
      W(/\bwhales? (?:is|are) (?:an? )?auto/, "Check that. Does a whale make its own food or eat other organisms?"),
      W(/\bmushrooms? (?:is|are) (?:an? )?(?:kind of |type of )?plants?\b|\bmushrooms? (?:do |does |can |use |uses |perform |performs )?photo ?synth/, "Check that. A mushroom is a fungus. Can it use sunlight to make food?"),
      W(/\balgae (?:is|are) (?:an? )?hetero/, "Check that. Can algae make food from sunlight?"),
      W(/\bmushrooms? (?:make|makes|get|gets) (?:their |its )?(?:own )?food from (?:the )?(?:sun|light)/, "Check that. Does a mushroom have chlorophyll to use sunlight?"), W(/mushrooms? (is|are) (an? )?auto/, "Check that. Can a mushroom make food from sunlight?") ]},
  { n:18, heading:"Autotrophs and Photosynthesis", prompt:"Predict which color of light is least useful to a plant.",
    guide:"Which colors does chlorophyll absorb? Which color does it reflect?", where:"Slide: Photosynthesis 7 to 10 | Book: Light, Pigments, p. 230",
    model:"• Green light is the least useful to a plant\n• Chlorophyll absorbs blue-violet and red light, but it reflects green",
    watch:[
      W(/\b(?:red|blue|violet|purple|yellow|orange)(?: light)? (?:is |would be )?(?:the )?least (?:useful|helpful)\b|\bleast (?:useful|helpful)(?: colou?r)?(?: of light)?(?: to (?:a |the )?plants?)? (?:is |would be )(?:red|blue|violet|purple)\b/, "Check that. Which color does chlorophyll bounce back instead of using?"),
      W(/(?<!\bnot )(?<!n't )\babsorbs? (?:all|every|each) (?:of )?(?:the )?(?:colou?rs?|light)\b/, "Check that. If chlorophyll absorbed every color, what color would leaves look?"),
      W(/\breflect\w* (?:\w+ ){0,2}(?<!not |no )(?:red|blue|violet|purple)\b/, "Check that. The color that bounces back is the color you see. Which color is that?"), W(/(?<!\b(?:not|never|doesn.t|doesnt|does not|can.t|cannot) )\babsorbs? (?:\w+ ){0,2}green\b|\bgreen (?:light )?(?:is|gets|are) absorbed/, "Check that. Does chlorophyll absorb green, or bounce it back?", "Color reflected")],
    ideas:[
      I("Least useful", [either(/green/, /least|not (very )?useful|useless|worst|least helpful|reflect|bounc/, 60)], "Which color of light is least useful?", "The color leaves look is the color they do not use. Slide Photosynthesis 8."),
      I("Colors absorbed", [either(/blue|violet|purple/, /\bred\b/, 60)], "Which colors does chlorophyll absorb?", "Slide Photosynthesis 7, the Also know line."),
      I("Color reflected", [near(/reflect|bounc/, /green/, 40), near(/green/, /reflect|bounc/, 40)], "Which color does chlorophyll reflect?", "Slide Photosynthesis 8.")
    ]},
  { n:19, heading:"Autotrophs and Photosynthesis", prompt:"Identify the two parts of photosynthesis.",
    guide:"What is each part called? Which one is also called the Calvin cycle?", where:"Slide: Photosynthesis 15 | Book: An Overview of Photosynthesis, p. 233",
    model:"• Part 1 is the light-dependent reactions\n• Part 2 is the light-independent reactions, also called the Calvin cycle",
    watch:[
      W(/\blight ?dependent(?: reactions?)? (?:happens? |occurs? |takes? place |is |are )?(?:in|inside) (?:the )?(?:stroma|stromo)/, "Check that. Where do the light dependent reactions happen?"),
      W(/\bcalvin\w*(?: cycle)? (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b)/, "Check that. The Calvin cycle is part of photosynthesis. Which organelle is it in?"), W(/calvin.{0,25}thyla/, "Check that. Where does the Calvin cycle happen?") ],
    ideas:[
      I("Part 1", [/light ?dependent|light reactions?/], "What is the first part called?", "Slide Photosynthesis 15, KEY TERMS."),
      I("Part 2", [/calvin|light ?independent/], "What is the second part called?", "Slide Photosynthesis 15, KEY TERMS."),
      I("Calvin cycle", [either(/calvin|kelvin/, /light ?independent|part (2|two)|second/, 60)], "Which part is also called the Calvin cycle?", "Slide Photosynthesis 15, KEY TERMS.")
    ]},
  { n:20, heading:"Cellular Respiration Basics", prompt:"Write the cellular respiration equation in words.",
    guide:"What are the reactants (inputs)? What are the products (outputs)?", where:"Slide: Respiration 5 to 7 | Book: Overview of Cellular Respiration, p. 251",
    model:"• In words: oxygen + glucose makes carbon dioxide + water + energy (ATP)",
    ideas:[
      I("Reactants", [either(O2, GLUCOSE, 40)], "What goes in? Name the two reactants.", "Slide Respiration 5, Reactants (inputs)."),
      I("Products", [either(CO2, H2O, 40)], "What comes out? Name the products.", "Slide Respiration 5, Products (outputs)."),
      I("Energy", [/energy|\batp\b/], "What useful thing does respiration make besides the two waste products?", "Slide Respiration 5, the last product.")
    ],
    watch:[
      W(/\b(?:reactants?|inputs?|ingredients) (?:are|is|include) (?:the )?(?:\w+ ){0,2}(?:carbon dioxide|co ?2|c o 2|co two)\b|(?:carbon dioxide|co ?2) (?:and|plus) water (?:are|is) (?:the )?(?:reactants|inputs)\b/, "Check that. Carbon dioxide is a waste product of respiration. What are the reactants?"),
      W(/\brespiration (?:makes?|produces?|releases?|gives? off) (?:\w+ ){0,2}(?:oxygen|glucose|sugar)\b|\bproducts? (?:are|is) (?:\w+ ){0,2}(?:oxygen|glucose|sugar)\b/, "Check that. Which molecules go in, and which come out of respiration?"),
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:needs?|uses?|requires?) (?:sun ?light|light)\b|\b(?:plus|and) (?:sun ?light|light) (?:makes|yields|gives|produces)/, "Check that. Does cellular respiration need light?"), W(near(/(carbon dioxide|co2).{0,25}(and|plus)? ?water|water.{0,25}(and|plus)? ?(carbon dioxide|co2)/, /(make|makes|yield|produce|into|become|gives?)\w*.{0,20}(glucose|sugar)/, 40), "Check that. That is the photosynthesis equation. Which way does respiration go?") ]},
  { n:21, heading:"Cellular Respiration Basics", prompt:"Sequence the three stages of cellular respiration.",
    guide:"Which comes first, second, and third? Which happens in the cytoplasm, and which in the mitochondria?", where:"Slide: Respiration 9 | Book: Stages of Cellular Respiration, p. 252",
    model:"1. Glycolysis, in the cytoplasm\n2. The Krebs cycle, in the mitochondria\n3. The electron transport chain, in the mitochondria",
    watch:[
      W(/\b(?:krebs|kreb|crebs|citric acid|electron transport|etc|e t c)\w*(?: cycle| chain)? (?:is |comes |happens |goes )?first\b|\bfirst (?:is |comes |stage is |step is )?(?:the )?(?:krebs|kreb|crebs|citric|electron transport)/, "Check that. Which stage comes first, in the cytoplasm?"),
      W(/\bglycolysis (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b)|\b(?:(?:krebs|kreb|crebs|citric acid)(?: cycle)?|(?:electron transport(?: chain)?|\betc\b|\be t c\b)) (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:cyto ?plasm|sito ?plasm|site ?o ?plasm|cyto ?plaz)/, "Check that. Which stage is in the cytoplasm, and which are in the mitochondria?"), W(/krebs.{0,60}glycolysis/, "Check the order. Which stage comes first?", "The order") ],
    ideas:[
      I("The order", [near(T.glycolysis, near(T.krebs, T.etc, 120), 120)], "Which stage comes first, second, and third?", "Slide Respiration 9 shows the map in order."),
      I("Cytoplasm stage", [either(T.glycolysis, T.cytoplasm, 60)], "Which stage happens in the cytoplasm?", "Read the Also know line on Slide Respiration 9."),
      I("Mitochondria stages", [either(/krebs|electron transport|\betc\b|both|last two|other two|second and third/, T.mito, 80)], "Which stages happen in the mitochondria?", "Read the Also know line on Slide Respiration 9.")
    ]},
  { n:22, heading:"Cellular Respiration Basics", prompt:"Distinguish aerobic from anaerobic.",
    guide:"Which stage does NOT need oxygen? Which stages do?", where:"Slide: Respiration 10 | Book: Oxygen and Energy, p. 252",
    model:"• Aerobic means it requires oxygen\n• Anaerobic means it does not require oxygen\n• Glycolysis is anaerobic\n• The Krebs cycle and electron transport chain are aerobic",
    watch:[
      W(/(?<!\ban )\baerobic (?:means|is) (?:it )?(?:does not|doesn't|doesnt|no|without|not|don't|dont)\b|\b(?:anaerobic|an aerobic) (?:means|is) (?:it )?(?:needs|requires|uses|with)\b/, "Check that. Which word means with oxygen, and which means without?"),
      W(/\b(?:krebs|kreb|crebs|citric|electron transport|etc)\w*(?: cycle| chain)? (?:is |are )?(?:anaerobic|an aerobic)/, "Check that. Do the Krebs cycle and the electron transport chain need oxygen?"), W(/glycolysis (is )?(aerobic|needs oxygen)/, "Check that. Does glycolysis need oxygen?") ],
    ideas:[
      I("Aerobic", [near(/\baerobic/, /oxygen|air/, 50)], "What does aerobic mean?", "Slide Respiration 10, the Meaning row."),
      I("Anaerobic", [near(/anaerobic|an aerobic/, new RegExp(NEG + ".{0,25}(oxygen|air)|without (oxygen|air)"), 60)], "What does anaerobic mean?", "Slide Respiration 10, the Meaning row."),
      I("The anaerobic stage", [either(T.glycolysis, /anaerobic|an aerobic|no oxygen|without oxygen|doesn.?t need oxygen/, 60)], "Which stage is anaerobic?", "Slide Respiration 10, the Stages row.")
    ]},
  { n:23, heading:"Cellular Respiration Basics", prompt:"Identify the \"cycle\" that is NOT a stage of cellular respiration.",
    guide:"Which process does the Calvin cycle belong to instead?", where:"Slide: Respiration 11 to 12 | Book: Stages of Cellular Respiration, p. 252",
    model:"• The Calvin cycle is NOT a stage of cellular respiration\n• It belongs to photosynthesis",
    ideas:[
      I("The cycle", [/calvin/], "Which cycle is not a stage of cellular respiration?", "Slide Respiration 12 answers this one."),
      I("Where it belongs", [T.photo], "Which process does the Calvin cycle belong to instead?", "Look back at your note 19.")
    ],
    watch:[
      W(/\b(?:glycolysis|citric acid cycle|electron transport(?: chain)?|etc) (?:is not|isn't|isnt)\b/, "Check that. That one IS a stage of cellular respiration. Which cycle is not?", "The cycle"),
      W(/\bcalvin\w*(?: cycle)? (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:mitochond|mito ?cond|mighty ?cond|mido ?cond|mito\b)|\bcalvin\w*(?: cycle)? (?:belongs to|is part of|is a stage of|is in) (?:cellular )?respiration/, "Check that. Which process does the Calvin cycle belong to?"), W(/krebs (cycle )?(is not|isn.?t)/, "Check that. The Krebs cycle IS a stage of respiration.", "The cycle") ]},
  { n:24, heading:"Glycolysis", prompt:"Calculate the ATP account for glycolysis.",
    guide:"How many ATP are spent to start? How many are made in total? What is the net gain? Show the math.", where:"Slide: Glycolysis 6 to 8 | Book: ATP Production, p. 254",
    model:"• The cell spends 2 ATP to start\n• Glycolysis makes 4 ATP in total\n• Net gain: 4 - 2 = 2 ATP per glucose",
    watch:[
      W(/\b(?:spend|spends|spent|spending|invest\w*|uses?|used|use up) (?:\w+ )?(?:4|four) atp\b/, "Check that. How many ATP are spent to start, and how many are made?"),
      W(/\bnet (?:gain )?(?:is |of |was |equals )?(?:about )?(?:6|six|36|thirty six|0|zero)\b/, "Check that. Net means the ATP made minus the ATP spent."), W(/net (gain )?(is |of |was )?(4|four)\b(?! (minus )?(2|two))/, "Check that. Net means what is left after paying back the 2 ATP spent.") ],
    ideas:[
      I("Spent to start", [/(spend|spent|use|used|invest|put in|need|start)\w*.{0,30}\b(2|two)\b/, /\b(2|two) ?(atp)?.{0,25}(spend|spent|start|invest|in\b)/], "How many ATP are spent to start?", "Slide Glycolysis 6, the 2 ATP in box."),
      I("Total made", [/\b(4|four)\b/], "How many ATP are made in total?", "Slide Glycolysis 6, the 4 ATP out box."),
      I("Net gain", [/net/], "What is the net gain? Show the math.", "Net means what is left after paying the start-up cost. Slide Glycolysis 6.")
    ]},
  { n:25, heading:"Glycolysis", prompt:"Explain why ATP is needed to begin glycolysis.",
    guide:"How is it like spending money to make money?", where:"Slide: Glycolysis 2 to 3, 6 | Book: ATP Production, p. 254",
    model:"• The cell has to invest 2 ATP to get glycolysis started, like buying lemons and cups before selling lemonade\n• It spends 2 ATP and gets 4 back",
    watch:[
      W(/\b(?:spend|spends|spent|spending|invest\w*|uses?|used|use up) (?:\w+ )?(?:1|one|3|three|6|six) atp\b/, "Check that. How many ATP does the cell invest to start glycolysis?"),
      W(/\b(?:get|gets|getting|got) (?:\w+ )?(?:2|two) (?:atp )?back\b/, "Check that. How many ATP does glycolysis make in total for the 2 it spends?"),
      W(/\b(?:spend|spends|spent|invest\w*|uses?|used) (?:\w+ )?(?:4|four) atp\b|\buses? (?:up )?more (?:atp )?than (?:it )?(?:makes|gets)\b/, "Check that. Does glycolysis get back more ATP than it spends?") ],
    ideas:[
      I("The investment", [/invest|spend|start|begin|kick|get (it )?going|start ?up/], "Why does the cell have to spend ATP first?", "Slide Glycolysis 3: spend first, make more."),
      I("The payback", [/\b(4|four)\b|more (atp )?back|get\w* (more|back)|make\w* more|profit|gain/], "What does the cell get back for its investment?", "Slide Glycolysis 3, the Make more box.")
    ]},
  { n:26, heading:"Glycolysis", prompt:"Explain why NAD+ is the limiting reagent in glycolysis.",
    guide:"What runs out first? What happens to glycolysis when it does?", where:"Slide: Glycolysis 11 | Book: NADH Production, p. 255; Fermentation, p. 262",
    model:"• The cell has only a small supply of NAD+, so it runs out first\n• When NAD+ runs out, glycolysis stops and ATP production stops",
    watch:[
      W(/(?<!\bnot )(?<!n't )(?<!\bdoesnt )(?<!\bdont )\b(?:speeds? up|goes faster|runs faster|makes more atp)\b/, "Check that. Without NAD+, can glycolysis keep going?"),
      W(/\b(?:nad ?h|n a d h|oxygen|glucose|atp) (?:is )?(?:the )?limiting\b/, "Check that. Which carrier does the cell have only a small supply of?"),
      W(/\b(?:glucose|sugar|atp) (?:\w+ )?(?:runs|run|running) out (?:first)?/, "Check that. Which molecule is in short supply and runs out first?"),
      W(/\b(?:lots|a lot|plenty|tons|large (?:amount|supply)|big supply|unlimited (?:supply|amount)?) of nad\b(?! ?h\b)|\bunlimited nad\b/, "Check that. Does the cell have a big supply of NAD+ or a small one?") ],
    ideas:[
      I("Runs out first", [/run\w* out|used up|first|small supply|limited|all (filled|full|loaded)/], "What happens to the cell's supply of NAD+?", "Slide Glycolysis 11, the Runs out first box."),
      I("What stops", [/stop|end|halt|can.?t (keep|continue|make)|quit|no more atp/], "What happens to glycolysis when NAD+ runs out?", "Read the Also know line on Slide Glycolysis 11.")
    ]},
  { n:27, heading:"Krebs Cycle and Electron Transport", prompt:"Label a sketch of a mitochondrion.",
    guide:"Where are the outer membrane, inner membrane, and matrix? Which stage happens where?", where:"Slide: Krebs-ETC 4 | Book: The Krebs Cycle, p. 256; Electron Transport, p. 258",
    draw:"Sketch a mitochondrion. Label the outer membrane, inner membrane, matrix, and intermembrane space.",
    model:"• A mitochondrion has an outer membrane and a folded inner membrane\n• The matrix is the innermost space, where the Krebs cycle happens\n• The intermembrane space is between the two membranes, where H+ ions pile up\n• The electron transport chain is in the inner membrane",
    watch:[
      W(/\bmatrix (?:is |is the |is in the )?(?:space )?between\b|\binter ?membrane space (?:is )?(?:the )?(?:innermost|center|middle of the mitochondri\w*)\b/, "Check that. Which space is between the two membranes, and which is the innermost?"),
      W(/\b(?:electron transport(?: chain)?|\betc\b|\be t c\b)\w* (?:happens |occurs |takes place |is |are |is done )?(?:in|inside|on) (?:the )?(?:outer membrane|matrix|inter ?membrane)/, "Check that. Which membrane holds the electron transport chain?"),
      W(/\b(?:h|hydrogen|protons?)(?: ions?)? (?:pile|piles|build|builds|collect|collects|accumulate|accumulates) up in (?:the )?matrix/, "Check that. Where do the H+ ions pile up?"), W(/krebs.{0,40}inter ?membrane/, "Check that. Where does the Krebs cycle happen?", "Matrix") ],
    ideas:[
      I("Two membranes", [either(/outer/, /inner/, 60)], "Name the two membranes.", "Slide Krebs-ETC 4, MEMBRANES."),
      I("Matrix", [either(/matrix/, T.krebs, 60)], "What is the innermost space called, and which stage happens there?", "Slide Krebs-ETC 4, MATRIX."),
      I("Where the ETC is", [either(T.etc, /inner/, 80)], "Where is the electron transport chain?", "The folds of one membrane give the chain more room.")
    ]},
  { n:28, heading:"Krebs Cycle and Electron Transport", prompt:"List what the Krebs cycle makes.",
    guide:"Which gas is released? What is the MAIN product?", where:"Slide: Krebs-ETC 7 to 9 | Book: Energy Extraction, p. 257",
    model:"• The Krebs cycle releases carbon dioxide\n• Its main product is NADH (loaded electron carriers), plus some FADH2\n• It makes 2 ATP per glucose",
    ideas:[
      I("The gas", [T.co2], "Which gas does the Krebs cycle release?", "Slide Krebs-ETC 7, first box."),
      I("Main product", [T.nadh, /electron carrier|loaded carrier/], "What is the MAIN product?", "Slide Krebs-ETC 7, the second box says main product."),
    ],
    watch:[
      W(/\b(?:krebs|kreb|crebs|citric acid)\w*(?: cycle)? (?:happens |occurs |takes place |is |is done )?(?:in|inside) (?:the )?(?:cyto ?plasm|sito ?plasm|site ?o ?plasm|cyto ?plaz)/, "Check that. The Krebs cycle is the second stage. Which organelle is it in?"),
      W(/(?<!\b(?:not|never|no|cannot|can't|cant|doesn't|doesnt|don't|dont|didn't|didnt|won't|wont|isn't|isnt|aren't|arent|wouldn't|wouldnt) )\b(?:releases?|gives? off|makes?|produces?) (?:\w+ )?(?<!\bno )oxygen\b/, "Check that. Which gas does the Krebs cycle release?"),
      W(/(?<!\b(?:total|totals|total of|altogether|overall|with oxygen|with oxygen the cell makes|makes about|about) )\b(?:32|thirty two|34|thirty four|36|thirty six) atp\b(?!(?: \w+){0,2} (?:total|per glucose|altogether|overall|in all|from one glucose)\b)|\bmakes (?:the )?most (?:of the )?atp\b|\bmakes (?:a lot|lots) of atp\b/, "Check that. Does the Krebs cycle make a lot of ATP or just a little?"), W(/main product (is )?(atp|oxygen|glucose)/, "Check that. Most of the energy is captured in something else. What is the MAIN product?", "Main product") ]},
  { n:29, heading:"Krebs Cycle and Electron Transport", prompt:"Sequence what happens in the electron transport chain.",
    guide:"Where is it? Who drops off electrons? What gets pumped across the membrane?", where:"Slide: Krebs-ETC 11 | Book: Electron Transport, p. 258",
    model:"• The chain is a line of proteins in the inner membrane\n• NADH and FADH2 drop off their high-energy electrons\n• As the electrons move down the chain, their energy pumps H+ ions into the intermembrane space\n• Oxygen is the final electron acceptor and forms water",
    watch:[
      W(/\boxygen (?:\w+ ){0,6}(?:forms?|makes?|becomes?|turns into) (?:\w+ )?(?:carbon dioxide|co ?2)\b/, "Check that. When oxygen picks up the electrons and H+, what does it form?"),
      W(/\bpump\w* (?:\w+ )?electrons\b/, "Check that. The electrons move down the chain. What gets pumped?"),
      W(/\bpump\w* (?:\w+ ){0,3}(?:into|to|in) (?:the )?matrix\b/, "Check that. Where are the H+ ions pumped to?"),
      W(/\b(?:carbon dioxide|co ?2|nad\w*|atp|glucose|water) (?:is )?(?:the )?(?:final|last) (?:electron )?acceptor/, "Check that. Which molecule is the final electron acceptor?") ],
    ideas:[
      I("Where", [/inner membrane|inner mito|membrane/], "Where is the electron transport chain?", "Slide Krebs-ETC 11, under the title."),
      I("Who drops off", [T.nadh, /fadh/], "Who drops off electrons?", "Slide Krebs-ETC 11, DROP OFF."),
      I("What gets pumped", [near(/pump/, H, 40), near(H, /pump/, 40)], "What gets pumped?", "Slide Krebs-ETC 11, PUMP.")
    ]},
  { n:30, heading:"ATP Totals", prompt:"Calculate the ATP made from one glucose with oxygen.",
    guide:"How many ATP does each stage make? What is the total? Which stage makes the most?",
    tips:[ATP_TIP], where:"Slide: Krebs-ETC 16 to 18 | Book: The Totals, p. 260",
    model:"• Glycolysis: 2 ATP\n• Krebs cycle: 2 ATP\n• Electron transport chain: about 32 ATP, the most of any stage\n• Total: about 36 ATP per glucose (the book's answer; other sources give 29 to 38)",
    watch:[
      W(/\b(?:electron transport(?: chain)?|\betc\b|\be t c\b) (?:makes |gives |produces |is |nets )?(?:about |only )?(?:2|two|4|four|6|six)\b/, "Check that. Which stage makes the most ATP, and about how many?"),
      W(/\b(?:glycolysis|krebs|kreb|crebs|citric acid)\w*(?: cycle)? (?:makes |gives |produces |is |nets )?(?:about |around )?(?:36|thirty six|38|thirty eight)\b(?! (?:total|in total|altogether|overall))/, "Check that. About 36 is the total for all three stages. How many does that one stage make?"),
      W(/(?<!\bnot )\b(?:total|altogether|in all|adds? up to|overall)\b (?:is |of |equals |comes to )?(?:about |around |roughly |only )?(?:6|six|8|eight|40|forty|42|72|seventy two|100|a hundred|one hundred)\b(?! ?(?:\d|to\b))|(?<!\b(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety) )\b(?:6|six|8|eight|40|forty|42|72|seventy two|100|a hundred|one hundred) (?:atp )?(?:total|in total|altogether|in all)\b/, "Check that. Add the stages again: about 2 + 2 + 32. What is the total?"),
      W(/\bglycolysis (?:makes |gives |produces |is |nets )?(?:about )?(?:4|four)\b(?!(?: atp)? (?:minus|but|and spends|and uses|total|in total|gross))|\b(?:krebs|kreb|crebs|citric acid)\w*(?: cycle)? (?:makes |gives |produces |is )?(?:about )?(?:32|thirty two|34|thirty four)\b/, "Check that. Use the net ATP for each stage from your notes. Which stage makes 32?"), W(/(glycolysis|krebs\w*( cycle)?) makes (the )?most/, "Check that. Which stage makes the most ATP?", "Makes the most") ],
    ideas:[
      I("Glycolysis", [either(/glycoly/, /\b(2|two)\b/, 30)], "How many ATP does glycolysis make (net)?", "Slide Krebs-ETC 18, answer 1. Glycolysis nets 2."),
      I("Krebs cycle", [either(/krebs|kreb|crebs|citric/, /\b(2|two)\b/, 30)], "How many ATP does the Krebs cycle make from one glucose?", "Slide Krebs-ETC 18, answer 1. Two turns of the cycle, 1 ATP each."),
      I("Electron transport chain", [either(T.etc, /\b(2[6-9]|3[0-4]|twenty ?(six|seven|eight|nine)|thirty ?(one|two|three|four)?)\b/, 40)], "How many ATP does the electron transport chain make?", "Slide Krebs-ETC 18, answer 1. The book uses about 32."),
      I("Total", [/\b36\b|thirty ?six/, either(/total|altogether|all together|in all|overall|per glucose|one glucose|adds? up|equals?/, /\b(?:29|3[0-8]|twenty ?nine|thirty(?: ?(?:one|two|three|four|five|six|seven|eight))?)\b/, 40)], "What is the total from one glucose with oxygen? The book says about 36.", "Slide Krebs-ETC 16, KEY TERMS. Book p. 260: about 36 ATP per glucose."),
      I("Makes the most", [either(T.etc, /most/, 60)], "Which stage makes the most ATP?", "Slide Krebs-ETC 18, answer 2.")
    ]},
  { n:31, heading:"Fermentation", prompt:"Explain why humans undergo fermentation.",
    guide:"What is missing? What does fermentation give back to glycolysis?", where:"Slide: Fermentation 4 to 5 | Book: Fermentation, p. 262",
    model:"• When oxygen is missing, fermentation turns NADH back into NAD+\n• That gives NAD+ back to glycolysis so it can keep going and keep making 2 ATP per glucose",
    watch:[
      W(/\b(?:too much|lots of|a lot of|plenty of|extra) oxygen\b/, "Check that. Do we ferment when there is plenty of oxygen, or when it is missing?"),
      W(/\bturns? (?:\w+ )?nad\b(?! ?h\b)(?: back)? into (?:an? )?nad ?h\b|\bnad\b(?! ?h\b) (?:\w+ ){0,2}into (?:an? )?nad ?h\b/, "Check that. Which way does fermentation change the carrier?"),
      W(/\b(?:humans?|we|people|muscles?|muscle cells) (?:make|makes|produce|produces|do|does) (?:\w+ )?(?:alcohol|ethanol|alcoholic)\b/, "Check that. Which type of fermentation do human muscle cells use?"), W(/fermentation (makes|gives|produces) (a lot|lots|more|tons) (of )?atp/, "Check that. Fermentation keeps glycolysis going, so the cell still gets only 2 ATP.") ],
    ideas:[
      I("What is missing", [/oxygen|\bo2\b/], "What is missing that makes the cell switch to fermentation?", "Slide Fermentation 4, the title."),
      I("What it gives back", [T.nad, /regenerat|back into nad|turns? .{0,15}back/], "What does fermentation give back to glycolysis?", "Slide Fermentation 5, WHAT IT DOES.")
    ]},
  { n:32, heading:"Fermentation", prompt:"Identify the product of fermentation in human cells.",
    guide:"Which type of fermentation happens in your muscles? What does it make?", where:"Slide: Fermentation 9 to 10 | Book: Lactic Acid Fermentation, p. 263",
    model:"• Human muscle cells do lactic acid fermentation\n• It makes lactic acid (and turns NADH back into NAD+)",
    watch:[
      W(/(?<!\bnot )(?<!\bno )\blactose\b/, "Check that. Lactose is milk sugar. What acid do muscle cells make?"),
      W(/(?<!\bnot )(?<!\bno )(?<!n't )\b(make|makes|making|produce\w*|gives?|forms?|creates?)\b(?: \w+){0,3} (alcohol|ethanol|ethyl|carbon dioxide|co2)\b/, "Check that. Human muscle cells do not make alcohol or CO2. What do they make?"),
      W(/(?<!\bnot )(?<!\bno )\b(humans?|muscles?|our cells|people)\b(?: \w+){0,4} (alcoholic|alcohol fermentation)/, "Check that. Alcoholic fermentation happens in yeast. Which type happens in your muscles?") ],
    ideas:[
      I("Type", [/lactic/], "Which type of fermentation happens in your muscles?", "Slide Fermentation 9, the title."),
      I("Product", [T.lactic], "What does it make?", "Slide Fermentation 10, The reaction."),
      I("Where", [/muscle/], "Which human cells do it?", "Slide Fermentation 9: what part of you burns during a sprint?")
    ]},
  { n:33, heading:"Fermentation", prompt:"Explain why ethyl alcohol cannot easily become pyruvic acid again.",
    guide:"Count the carbons. Where does the missing carbon go?", where:"Slide: Fermentation 7 to 8 | Book: Alcoholic Fermentation, Figure 9-8, p. 263",
    model:"• Pyruvic acid has 3 carbons, but ethyl alcohol has only 2\n• One carbon leaves as carbon dioxide gas and floats away, so the cell cannot rebuild pyruvic acid",
    watch:[
      W(/\b(?:pyruv|pyro ?vic|pie ?ru ?vic)\w*(?: acid)? (?:has |have |with |contains )?(?:only )?(?:6|six|4|four) carbons?\b/, "Check that. Glucose (6 carbons) splits in half. How many carbons does pyruvic acid have?"),
      W(/\bcan (?:easily |just |still |quickly )?(?:rebuild|remake|turn (?:it |them )?back|change (?:it |them )?back|go back|become pyruv|be (?:turned|changed|made|rebuilt) back)\b/, "Check that. Where did the missing carbon go, and can the cell get it back?"),
      W(/\balcohol (?:has |have )?(?:only )?(?:3|three|4|four)\b|\b(?:pyruv|pyro ?vic)\w*(?: acid)? (?:has |have )?(?:only )?(?:2|two)\b/, "Check that. Count again. Which one has 3 carbons, and which has 2?"),
      W(/\b(?:carbon|it) (?:leaves|escapes|goes|floats away|is lost) (?:as |in |into )(?:an? )?(?:oxygen|o ?2|water|alcohol|lactic|glucose)\b/, "Check that. What gas does the missing carbon leave as?") ],
    ideas:[
      I("Count the carbons", [either(/\b(3|three)\b/, /\b(2|two)\b/, 80)], "How many carbons does pyruvic acid have, and how many does ethyl alcohol have?", "Slide Fermentation 8, the first and third boxes."),
      I("Where the carbon goes", [T.co2, /gas|escap|float|leav|lost/], "Where does the missing carbon go?", "Slide Fermentation 8, 1 carbon escapes.")
    ]}
  ]
});
})();

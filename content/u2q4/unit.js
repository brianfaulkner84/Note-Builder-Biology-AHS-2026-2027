/* ==================================================================
   UNIT FILE: Unit 2, Quiz 4 (Glycolysis, Krebs Cycle, ETC, Fermentation).
   Source: Energy_Quiz2_Notebook_Guide.pptx (23 prompts); Glycolysis, Krebs
   Cycle and ETC, and Fermentation slideshows; Chapter 9.
   Fields and helpers are explained in content/u2q2/unit.js and patterns.js.
   ================================================================== */
(function(){
var PYR = T.pyruvate, H = /\bh\b|\bh plus|hydrogen|protons?/;  /* "H+" arrives as "h" after punctuation is removed */
var SYNTHASE = /synthase|synthes[ae]s?|synth ?ace/;

UNITS.push({
  id: "u2q4",
  title: "Glycolysis, Krebs Cycle, ETC, and Fermentation",
  subtitle: "Unit 2, Quiz 4 notes",
  source: "Glycolysis, Krebs Cycle and ETC, and Fermentation slideshows; Chapter 9",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and wrote the key-idea checks and hints from the instructor's Glycolysis, Krebs, ETC, and Fermentation notebook guide, the matching slideshows, and Chapter 9 of the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Glycolysis", prompt:"Define glycolysis.",
    guide:"What does the word mean? What is glucose split into, and how many carbons does each piece have?", where:"Slide: Glycolysis 5 | Book: Glycolysis, p. 254",
    model:"Glycolysis means splitting sugar. One glucose (6 carbons) is split into 2 molecules of pyruvic acid, with 3 carbons each.",
    watch:[ W(/\b(2|two|4|four) carbons? each/, "Check that. Glucose has 6 carbons and is split in half. How many does each piece have?", "Carbons") ],
    ideas:[
      I("What the word means", [/split\w* (the )?sugar|sugar split|break\w* (down )?(the )?sugar|sugar.{0,20}(split|break)/], "What does the word glycolysis mean?", "Glyco = ___. Lysis = ___. Slide Glycolysis 5."),
      I("What glucose becomes", [PYR], "What is glucose split into?", "Slide Glycolysis 5, THE SPLIT box."),
      I("Carbons", [/\b(3|three) ?carbon|carbons? each|each.{0,20}\b(3|three)\b/], "How many carbons does each piece have?", "Glucose has 6 carbons and is split in half.")
    ]},
  { n:2, heading:"Glycolysis", prompt:"Identify where glycolysis happens and whether it needs oxygen.",
    guide:"Cytoplasm or mitochondria? Aerobic or anaerobic?", where:"Slide: Glycolysis 4 to 5 | Book: Glycolysis, p. 254; Oxygen and Energy, p. 252",
    model:"Glycolysis happens in the cytoplasm. It does not need oxygen, so it is anaerobic.",
    ideas:[
      I("Where", [T.cytoplasm], "Where does glycolysis happen?", "Slide Glycolysis 5, the WHERE box."),
      I("Oxygen", [/anaerobic|an aerobic|lacks? oxygen|no oxygen|without oxygen/, lacks(/oxygen|o2/)], "Does glycolysis need oxygen?", "Slide Glycolysis 5, the OXYGEN? box.")
    ],
    watch:[ W(/glycolysis (is )?aerobic|needs? oxygen/, "Check that. Does glycolysis need oxygen?", "Oxygen") ]},
  { n:3, heading:"Glycolysis", prompt:"Calculate the ATP account for glycolysis.",
    guide:"How many ATP are spent to start? How many are made in total? What is the net gain? Show the math.", where:"Slide: Glycolysis 6 to 8 | Book: ATP Production, p. 254",
    model:"The cell spends 2 ATP to start. Glycolysis makes 4 ATP in total. Net gain: 4 - 2 = 2 ATP per glucose.",
    watch:[ W(/net (gain )?(is |of |was )?(4|four)\b(?! (minus )?(2|two))/, "Check that. Net means what is left after paying back the 2 ATP spent.") ],
    ideas:[
      I("Spent to start", [/(spend|spent|use|used|invest|put in|need|start)\w*.{0,30}\b(2|two)\b/, /\b(2|two) ?(atp)?.{0,25}(spend|spent|start|invest|in\b)/], "How many ATP are spent to start?", "Slide Glycolysis 6, the 2 ATP in box."),
      I("Total made", [/\b(4|four)\b/], "How many ATP are made in total?", "Slide Glycolysis 6, the 4 ATP out box."),
      I("Net gain", [/net/], "What is the net gain? Show the math.", "Net means what is left after paying the start-up cost. Slide Glycolysis 6.")
    ]},
  { n:4, heading:"Glycolysis", prompt:"Explain why ATP is needed to begin glycolysis.",
    guide:"How is it like spending money to make money?", where:"Slide: Glycolysis 2 to 3, 6 | Book: ATP Production, p. 254",
    model:"The cell has to invest 2 ATP to get glycolysis started, like buying lemons and cups before selling lemonade. It spends 2 ATP and gets 4 back.",
    ideas:[
      I("The investment", [/invest|spend|start|begin|kick|get (it )?going|start ?up/], "Why does the cell have to spend ATP first?", "Slide Glycolysis 3: spend first, make more."),
      I("The payback", [/\b(4|four)\b|more (atp )?back|get\w* (more|back)|make\w* more|profit|gain/], "What does the cell get back for its investment?", "Slide Glycolysis 3, the Make more box.")
    ]},
  { n:5, heading:"NAD+ and NADH", prompt:"Describe how glycolysis makes NADH.",
    guide:"What does NAD+ pick up? How many NADH are made per glucose?", where:"Slide: Glycolysis 10 | Book: NADH Production, p. 255",
    model:"NAD+ picks up high-energy electrons (2 electrons and a hydrogen ion) and becomes NADH. Glycolysis makes 2 NADH per glucose.",
    ideas:[
      I("What NAD+ picks up", [/electron/], "What does NAD+ pick up?", "Slide Glycolysis 10, LOADING UP."),
      I("How many", [near(/\b(2|two)\b/, T.nadh, 15), near(T.nadh, /\b(2|two)\b/, 25)], "How many NADH are made per glucose?", "Slide Glycolysis 10, RESULT.")
    ]},
  { n:6, heading:"NAD+ and NADH", prompt:"Explain why NAD+ is the limiting reagent in glycolysis.",
    guide:"What runs out first? What happens to glycolysis and ATP production when it does?", where:"Slide: Glycolysis 11 | Book: NADH Production, p. 255; Fermentation, p. 262",
    model:"The cell has only a small supply of NAD+, so it runs out first. When NAD+ runs out, glycolysis stops and ATP production stops.",
    ideas:[
      I("Runs out first", [/run\w* out|used up|first|small supply|limited|all (filled|full|loaded)/], "What happens to the cell's supply of NAD+?", "Slide Glycolysis 11, the Runs out first box."),
      I("What stops", [/stop|end|halt|can.?t (keep|continue|make)|quit|no more atp/], "What happens to glycolysis when NAD+ runs out?", "Read the Also know line on Slide Glycolysis 11.")
    ]},
  { n:7, heading:"NAD+ and NADH", prompt:"List the advantages of glycolysis.",
    guide:"How fast is it? Does it need oxygen? How much energy is still left in pyruvic acid?", where:"Slide: Glycolysis 12 | Book: The Advantages of Glycolysis, p. 255",
    model:"Glycolysis is very fast; it can make thousands of ATP in a few milliseconds. It does not need oxygen. About 90 percent of glucose's energy is still left in pyruvic acid afterward.",
    ideas:[
      I("Speed", [/fast|quick|millisecond|rapid/], "How fast is glycolysis?", "Slide Glycolysis 12, the Very fast box."),
      I("Oxygen", [/no oxygen|without oxygen|anaerobic|an aerobic/, lacks(/oxygen/)], "Does glycolysis need oxygen?", "Slide Glycolysis 12, the No oxygen needed box."),
      I("Energy left over", [/\b90\b|ninety|most of the energy|still (left|stored)/], "How much of glucose's energy is still left in pyruvic acid?", "Slide Glycolysis 12, the Only the start box.")
    ]},
  { n:8, heading:"The Mitochondrion and the Krebs Cycle", prompt:"Label a sketch of a mitochondrion.",
    guide:"Where are the two membranes, matrix, and intermembrane space? Which stage happens where?", where:"Slide: Krebs-ETC 4 | Book: The Krebs Cycle, p. 256; Electron Transport, p. 258",
    draw:"Sketch a mitochondrion. Label the outer membrane, inner membrane, matrix, and intermembrane space.",
    model:"A mitochondrion has an outer membrane and a folded inner membrane. The matrix is the innermost space, where the Krebs cycle happens. The intermembrane space is between the two membranes, where H+ ions pile up. The electron transport chain is in the inner membrane.",
    watch:[ W(/krebs.{0,40}inter ?membrane/, "Check that. Where does the Krebs cycle happen?", "Matrix") ],
    ideas:[
      I("Two membranes", [either(/outer/, /inner/, 60)], "Name the two membranes.", "Slide Krebs-ETC 4, MEMBRANES."),
      I("Matrix", [either(/matrix/, T.krebs, 60)], "What is the innermost space called, and which stage happens there?", "Slide Krebs-ETC 4, MATRIX."),
      I("Intermembrane space", [/inter ?membrane|between the (two )?membranes/], "What is the space between the membranes called?", "Slide Krebs-ETC 4, INTERMEMBRANE SPACE."),
      I("Where the ETC is", [either(T.etc, /inner/, 80)], "Where is the electron transport chain?", "The folds of one membrane give the chain more room.")
    ]},
  { n:9, heading:"The Mitochondrion and the Krebs Cycle", prompt:"Describe the start of the Krebs cycle.",
    guide:"Where does pyruvic acid go? What is it turned into? Why is it also called the citric acid cycle?", where:"Slide: Krebs-ETC 6 | Book: Citric Acid Production, p. 256",
    model:"Pyruvic acid from glycolysis passes into the matrix of the mitochondrion. One carbon leaves as CO2 and the rest becomes acetyl-CoA. Acetyl-CoA joins a 4-carbon molecule to make citric acid, so it is also called the citric acid cycle.",
    ideas:[
      I("Where pyruvic acid goes", [/matrix|mitochond/], "Where does pyruvic acid go?", "Slide Krebs-ETC 6, GETTING IN."),
      I("What it becomes", [/acetyl|a ?seat ?(al|ul|il)|co ?a\b|coa/], "What is pyruvic acid turned into?", "Slide Krebs-ETC 6, GETTING IN."),
      I("Why citric acid", [/citric/], "Why is it also called the citric acid cycle?", "Slide Krebs-ETC 6, CITRIC ACID.")
    ]},
  { n:10, heading:"The Mitochondrion and the Krebs Cycle", prompt:"List what the Krebs cycle makes.",
    guide:"Which gas is released? What is the MAIN product? How many ATP per glucose?", where:"Slide: Krebs-ETC 7 to 9 | Book: Energy Extraction, p. 257",
    model:"The Krebs cycle releases carbon dioxide. Its main product is NADH (loaded electron carriers), plus some FADH2. It makes 2 ATP per glucose.",
    ideas:[
      I("The gas", [T.co2], "Which gas does the Krebs cycle release?", "Slide Krebs-ETC 7, first box."),
      I("Main product", [T.nadh, /electron carrier|loaded carrier/], "What is the MAIN product?", "Slide Krebs-ETC 7, the second box says main product."),
      I("ATP", [near(/\b(2|two)\b/, T.atp, 20), near(T.atp, /\b(2|two)\b/, 20)], "How many ATP per glucose?", "Slide Krebs-ETC 7, A little ATP.")
    ],
    watch:[ W(/main product (is )?(atp|oxygen|glucose)/, "Check that. Most of the energy is captured in something else. What is the MAIN product?", "Main product") ]},
  { n:11, heading:"The Electron Transport Chain", prompt:"Sequence what happens in the electron transport chain.",
    guide:"Where is it? Who drops off electrons? What gets pumped, and to where?", where:"Slide: Krebs-ETC 11 | Book: Electron Transport, p. 258",
    model:"The chain is a line of proteins in the inner membrane. NADH and FADH2 drop off their high-energy electrons. As the electrons move down the chain, their energy pumps H+ ions into the intermembrane space. Oxygen is the final electron acceptor and forms water.",
    ideas:[
      I("Where", [/inner membrane|inner mito|membrane/], "Where is the electron transport chain?", "Slide Krebs-ETC 11, under the title."),
      I("Who drops off", [T.nadh, /fadh/], "Who drops off electrons?", "Slide Krebs-ETC 11, DROP OFF."),
      I("What gets pumped", [near(/pump/, H, 40), near(H, /pump/, 40)], "What gets pumped?", "Slide Krebs-ETC 11, PUMP."),
      I("To where", [/inter ?membrane|between the membranes/], "Where are they pumped to?", "Slide Krebs-ETC 11, PUMP.")
    ]},
  { n:12, heading:"The Electron Transport Chain", prompt:"Explain how ATP synthase makes ATP.",
    guide:"Which way does H+ flow? What does ATP synthase do as H+ passes through?", where:"Slide: Krebs-ETC 12 | Book: ATP Production, p. 259",
    model:"H+ ions pile up in the intermembrane space, then flow back into the matrix through ATP synthase. The H+ flow makes ATP synthase spin, and each turn attaches a phosphate to ADP, making ATP.",
    ideas:[
      I("H+ flow", [near(H, /flow|rush|back|through|move|pass/, 50)], "Which way does H+ flow?", "Slide Krebs-ETC 12, H+ rushes back."),
      I("It spins", [/spin|turn|rotat|wheel/], "What does ATP synthase do as H+ passes through?", "Slide Krebs-ETC 12 compares it to a water wheel."),
      I("Makes ATP", [either(/phosphate/, T.adp, 40), /makes? atp|making atp|produce\w* atp/], "How does that make ATP?", "Slide Krebs-ETC 12, ATP is made.")
    ]},
  { n:13, heading:"The Electron Transport Chain", prompt:"Explain why the cell needs oxygen.",
    guide:"What is oxygen's job at the end of the chain? What does it form? What happens if oxygen runs out?", where:"Slide: Krebs-ETC 13 | Book: Electron Transport, p. 258",
    model:"Oxygen is the final electron acceptor at the end of the chain. It picks up the used electrons and H+ and forms water. If oxygen runs out, the chain backs up, NADH cannot unload, and the Krebs cycle and ETC stop.",
    watch:[ W(/oxygen.{0,30}(makes?|forms?) (carbon dioxide|co2)/, "Check that. What does oxygen form at the end of the chain?", "What it forms") ],
    ideas:[
      I("Oxygen's job", [/final (electron )?acceptor|accept|pick\w* up (the )?(used )?electrons|last stop|end of the chain/], "What is oxygen's job at the end of the chain?", "Slide Krebs-ETC 13, Makes water."),
      I("What it forms", [T.water], "What does oxygen form?", "Slide Krebs-ETC 13, Makes water."),
      I("If oxygen runs out", [/stop|back\w* up|can.?t unload|shut/], "What happens if oxygen runs out?", "Slide Krebs-ETC 13, No oxygen, no chain.")
    ]},
  { n:14, heading:"The Electron Transport Chain", prompt:"Compare the Krebs cycle and the electron transport chain.",
    guide:"Which one loads the carriers? Which one cashes them in? Where does each happen?", where:"Slide: Krebs-ETC 14 to 15 | Book: pp. 256 to 259",
    model:"The Krebs cycle loads the electron carriers (makes NADH and FADH2). It happens in the matrix. The electron transport chain cashes them in for ATP. It happens in the inner membrane.",
    ideas:[
      I("Loads the carriers", [either(T.krebs, /load|make\w* (nadh|carriers)|nadh/, 60)], "Which one loads the carriers?", "Slide Krebs-ETC 15, the line under the title."),
      I("Cashes them in", [either(T.etc, /cash|unload|use\w* (the )?(nadh|carriers)|make\w* (the )?most atp|atp/, 70)], "Which one cashes them in?", "Slide Krebs-ETC 15, the line under the title."),
      I("Krebs location", [either(T.krebs, /matrix/, 80)], "Where does the Krebs cycle happen?", "Use your note 8."),
      I("ETC location", [either(T.etc, /inner/, 80)], "Where does the electron transport chain happen?", "Use your note 8.")
    ]},
  { n:15, heading:"The Electron Transport Chain", prompt:"Calculate the ATP made from one glucose with oxygen.",
    guide:"How many ATP from each stage? What is the total? Which stage makes the most?", where:"Slide: Krebs-ETC 16 to 18 | Book: The Totals, p. 260",
    model:"Glycolysis 2 + Krebs cycle 2 + electron transport chain 32 = about 36 ATP per glucose. The electron transport chain makes the most.",
    watch:[ W(/(glycolysis|krebs\w*( cycle)?) makes (the )?most/, "Check that. Which stage makes the most ATP?", "Makes the most") ],
    ideas:[
      I("Each stage", [/\b32\b|thirty ?two/], "How many ATP does each stage make?", "Slide Krebs-ETC 18, answer 1."),
      I("Total", [/\b36\b|thirty ?six/], "What is the total from one glucose with oxygen?", "Slide Krebs-ETC 16, KEY TERMS."),
      I("Makes the most", [either(T.etc, /most/, 60)], "Which stage makes the most ATP?", "Slide Krebs-ETC 18, answer 2.")
    ]},
  { n:16, heading:"Why Fermentation Happens", prompt:"Explain what goes wrong when oxygen runs out.",
    guide:"What stops first? Why can't NADH unload? What happens to NAD+ and glycolysis?", where:"Slide: Fermentation 4 | Book: Fermentation, p. 262",
    model:"Without oxygen, the electron transport chain stops first. NADH has nowhere to drop off its electrons, so it cannot turn back into NAD+. NAD+ runs out, and glycolysis stops.",
    ideas:[
      I("Stops first", [either(T.etc, /stop|can.?t run|cannot run|shut/, 50)], "What stops first?", "Slide Fermentation 4, step 1."),
      I("NADH is stuck", [near(T.nadh, /stuck|nowhere|can.?t|cannot|unable|no place/, 60)], "Why can't NADH unload?", "Slide Fermentation 4, step 2."),
      I("NAD+ and glycolysis", [/run\w* out|used up/, near(T.glycolysis, /stop/, 40)], "What happens to NAD+ and glycolysis?", "Slide Fermentation 4, step 3.")
    ]},
  { n:17, heading:"Why Fermentation Happens", prompt:"Explain why humans undergo fermentation.",
    guide:"What is missing? What does fermentation give back to glycolysis? How many ATP does the cell still get?", where:"Slide: Fermentation 5 | Book: Fermentation, p. 262",
    model:"When oxygen is missing, fermentation turns NADH back into NAD+. That gives NAD+ back to glycolysis so it can keep going and keep making 2 ATP per glucose.",
    watch:[ W(/fermentation (makes|gives|produces) (a lot|lots|more|tons) (of )?atp/, "Check that. Fermentation keeps glycolysis going, so the cell still gets only 2 ATP.") ],
    ideas:[
      I("What is missing", [/oxygen|\bo2\b/], "What is missing that makes the cell switch to fermentation?", "Slide Fermentation 4, the title."),
      I("What it gives back", [T.nad, /regenerat|back into nad|turns? .{0,15}back/], "What does fermentation give back to glycolysis?", "Slide Fermentation 5, WHAT IT DOES."),
      I("ATP the cell still gets", [/\b(2|two)\b/], "How many ATP per glucose does the cell still get?", "Slide Fermentation 5, WHY IT MATTERS.")
    ]},
  { n:18, heading:"Two Types of Fermentation", prompt:"Describe alcoholic fermentation.",
    guide:"Who does it? What does it make? How does it make bread rise?", where:"Slide: Fermentation 7 | Book: Alcoholic Fermentation, p. 263",
    model:"Yeast do alcoholic fermentation. Pyruvic acid and NADH make ethyl alcohol, carbon dioxide, and NAD+. The CO2 bubbles make bread dough rise.",
    watch:[ W(/lactic/, "Check that. Yeast make a different product. What is it?", "Makes alcohol") ],
    ideas:[
      I("Who", [/yeast/], "Who does alcoholic fermentation?", "Slide Fermentation 7, under the title."),
      I("Makes alcohol", [T.alcohol], "What does it make?", "Slide Fermentation 7, The reaction."),
      I("Makes CO2", [T.co2, /bubble|gas/], "What gas does it give off?", "Slide Fermentation 7, Gives off CO2."),
      I("Bread", [/rise|bubble|puff/], "How does it make bread rise?", "Slide Fermentation 7, the Bread box.")
    ]},
  { n:19, heading:"Two Types of Fermentation", prompt:"Explain why ethyl alcohol cannot easily become pyruvic acid again.",
    guide:"Count the carbons. Where does the missing carbon go?", where:"Slide: Fermentation 8 | Book: Alcoholic Fermentation, Figure 9-8, p. 263",
    model:"Pyruvic acid has 3 carbons, but ethyl alcohol has only 2. One carbon leaves as carbon dioxide gas and floats away, so the cell cannot rebuild pyruvic acid.",
    ideas:[
      I("Count the carbons", [either(/\b(3|three)\b/, /\b(2|two)\b/, 80)], "How many carbons does pyruvic acid have, and how many does ethyl alcohol have?", "Slide Fermentation 8, the first and third boxes."),
      I("Where the carbon goes", [T.co2, /gas|escap|float|leav|lost/], "Where does the missing carbon go?", "Slide Fermentation 8, 1 carbon escapes.")
    ]},
  { n:20, heading:"Two Types of Fermentation", prompt:"Describe lactic acid fermentation.",
    guide:"Who does it? What does it make? Does it give off CO2? Name two foods it helps make.", where:"Slide: Fermentation 9 | Book: Lactic Acid Fermentation, p. 263",
    model:"Humans (muscle cells) and many bacteria do lactic acid fermentation. Pyruvic acid and NADH make lactic acid and NAD+. It does not give off CO2. It helps make yogurt and cheese.",
    watch:[ W(/(give|gives|release|releases|makes?) (off )?(carbon dioxide|co2)/, "Check that. Does lactic acid fermentation give off CO2?", "CO2") ],
    ideas:[
      I("Who", [/human|muscle|people|us\b|bacteria|animal/], "Who does lactic acid fermentation?", "Slide Fermentation 9, under the title."),
      I("What it makes", [T.lactic], "What does it make?", "Slide Fermentation 9, The reaction."),
      I("CO2", [lacks(T.co2), lacks(/carbon|gas/)], "Does it give off CO2?", "Slide Fermentation 9, The reaction."),
      I("Foods", [/yogurt|cheese|buttermilk|sour cream|pickle|sauerkraut|kimchi/], "Name foods it helps make.", "Slide Fermentation 9, the Foods box.")
    ]},
  { n:21, heading:"Two Types of Fermentation", prompt:"Compare alcoholic and lactic acid fermentation in a two-column chart.",
    guide:"Who, what they make, CO2 or not, and what they have in common.", where:"Slide: Fermentation 10 to 12 | Book: Alcoholic Fermentation, Lactic Acid Fermentation, p. 263",
    draw:"Make a two-column chart here: Alcoholic | Lactic acid.",
    model:"Alcoholic: yeast; makes ethyl alcohol, CO2, and NAD+; gives off CO2. Lactic acid: humans and bacteria; makes lactic acid and NAD+; no CO2. Both regenerate NAD+, both are anaerobic, and both make only 2 ATP per glucose.",
    ideas:[
      I("Alcoholic side", [either(/yeast/, T.alcohol, 120)], "Who does alcoholic fermentation, and what does it make?", "Slide Fermentation 10, the Alcoholic column."),
      I("Lactic acid side", [either(/human|muscle|bacteria/, T.lactic, 120)], "Who does lactic acid fermentation, and what does it make?", "Slide Fermentation 10, the Lactic Acid column."),
      I("CO2 difference", [either(/alcohol/, T.co2, 80)], "Which one gives off CO2?", "Slide Fermentation 10, the Gives off CO2? row."),
      I("In common", [/both|same|common/], "What do they have in common?", "Slide Fermentation 10, KEY TERMS.")
    ]},
  { n:22, heading:"Energy and Exercise", prompt:"Sequence where muscles get ATP during exercise.",
    guide:"What lasts seconds? What lasts about 90 seconds? What powers long exercise? What is oxygen debt?", where:"Slide: Fermentation 14 to 15 | Book: Energy and Exercise, pp. 264 to 265",
    model:"1. Stored ATP lasts only a few seconds. 2. Lactic acid fermentation supplies ATP for about 90 seconds, like a sprint. 3. Cellular respiration powers longer exercise. Oxygen debt is the extra oxygen you breathe in heavily afterward to repay what you used.",
    ideas:[
      I("A few seconds", [either(/stored|already|on hand/, T.atp, 40), near(/seconds/, T.atp, 40)], "What source lasts only a few seconds?", "Slide Fermentation 15, first box."),
      I("About 90 seconds", [either(/lactic|ferment/, /\b90\b|ninety|sprint/, 80)], "What source lasts about 90 seconds?", "Slide Fermentation 15, second box."),
      I("Long exercise", [either(T.resp, /long|longer|marathon|run|20 minutes/, 80)], "What powers long exercise?", "Slide Fermentation 15, third box."),
      I("Oxygen debt", [/breath|breathing|pant|repay|pay back|pay off/], "What is oxygen debt?", "Read the second box on Slide Fermentation 15.")
    ]},
  { n:23, heading:"Energy and Exercise", prompt:"Compare energy with oxygen and without oxygen.",
    guide:"What happens after glycolysis in each case? How many ATP per glucose in each?", where:"Slide: Fermentation 18 | Book: The Totals, p. 260; Fermentation, p. 262",
    model:"With oxygen, glycolysis is followed by the Krebs cycle and the electron transport chain, making about 36 ATP per glucose. Without oxygen, glycolysis is followed by fermentation, making only 2 ATP per glucose.",
    ideas:[
      I("With oxygen: next steps", [/krebs|electron transport|\betc\b|citric/], "With oxygen, what happens after glycolysis?", "Slide Fermentation 18, the With oxygen column."),
      I("With oxygen: ATP", [/\b36\b|thirty ?six/], "How many ATP per glucose with oxygen?", "Slide Fermentation 18, ATP per glucose row."),
      I("Without oxygen: next step", [/ferment/], "Without oxygen, what happens after glycolysis?", "Slide Fermentation 18, the Without oxygen column."),
      I("Without oxygen: ATP", [/\b(2|two)\b/], "How many ATP per glucose without oxygen?", "Slide Fermentation 18, ATP per glucose row.")
    ]}
  ]
});
})();

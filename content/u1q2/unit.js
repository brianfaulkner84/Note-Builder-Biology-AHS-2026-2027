/* ==================================================================
   UNIT FILE: Unit 1, Quiz 2 (Homeostasis and the Respiratory System).
   Source: Homeostasis_Respiratory_Study_Guide.pptx (12 terms plus checklist;
   repeated checklist items merged into the vocabulary prompts); Ch30.1 and
   Respiratory System slideshows; Chapters 30.1 and 33.3.
   Fields and helpers: see content/u2q2/unit.js and patterns.js.
   ================================================================== */
(function(){
var H = "Slide: Ch30.1 slideshow ", R = "Slide: Respiratory slideshow ";
var B30 = "Book: Chapter 30.1, pp. 862 to 867", B33 = "Book: Chapter 33.3, pp. 963 to 969";

UNITS.push({
  id: "u1q2",
  title: "Homeostasis and the Respiratory System",
  subtitle: "Unit 1, Quiz 2 notes",
  source: "Ch30.1 and Respiratory System slideshows; Chapters 30.1 and 33.3",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and turned the instructor's Homeostasis and Respiratory System study guide into note prompts with guiding questions, key-idea checks, and hints, using the Ch30.1 and Respiratory System slideshows and Chapters 30 and 33 of the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Body Organization and Tissues", prompt:"Order the levels of organization from cell to organ system.",
    guide:"Which level is built from the one before it?", where:H + "3 | " + B30,
    model:"Cell, tissue, organ, organ system. A tissue is a group of cells doing one job. An organ is different tissues working together. An organ system is organs that work together.",
    ideas:[ I("The order", [/cells?\b.{0,60}\btissues?\b.{0,60}\borgans?\b.{0,60}\borgan systems?/], "Which is smallest: cell, tissue, organ, or organ system?", "Slide 3 builds it like LEGO bricks, smallest first.") ],
    watch:[ W(/organ systems?.{0,40}\borgans?\b.{0,40}tissues?.{0,40}\bcells?\b/, "Check the order. Start with the smallest.") ]},
  { n:2, heading:"Body Organization and Tissues", prompt:"Define epithelial tissue.",
    guide:"What does it line or cover? Give an example.", where:H + "6 | " + B30,
    model:"Epithelial tissue lines the inside and outside surfaces of the body, like the skin and the stomach lining.",
    watch:[ W(/epithelial\w*.{0,30}(bone|blood|fat|impulse)/, "Check that. Bone, blood, and fat are a different tissue type.") ],
    ideas:[
      I("Its job", [/line|lining|cover|surface|wrap/], "What does epithelial tissue do?", "Slide 6 calls it the wrapping paper."),
      I("Example", [/skin|stomach|lining|mouth|intestin/], "Give one example.", "Slide 6 gives two examples.")
    ]},
  { n:3, heading:"Body Organization and Tissues", prompt:"Define connective tissue.",
    guide:"What does it do? Name examples.", where:H + "6 | " + B30,
    model:"Connective tissue supports the body and connects its parts. Examples: bone, blood, and fat.",
    watch:[ W(/(lines?|lining|covers?) (the )?(surfaces?|skin|stomach)/, "Check that. Lining surfaces is the job of a different tissue type.") ],
    ideas:[
      I("Its job", [/support|connect|hold|glue|scaffold/], "What does connective tissue do?", "Slide 6 calls it the glue and scaffolding."),
      I("Example", [/bone|blood|fat|cartilage|tendon|ligament/], "Give one example.", "Slide 6 gives three examples.")
    ]},
  { n:4, heading:"Body Organization and Tissues", prompt:"Define nervous tissue.",
    guide:"What does it carry through the body?", where:H + "6 | " + B30,
    model:"Nervous tissue transmits nerve impulses (messages) throughout the body.",
    watch:[ W(/\bmov(e|es|ing|ement)\b/, "Check that. Movement is the job of muscle tissue. What does nervous tissue carry?", "Its job") ],
    ideas:[ I("Its job", [/impulse|signal|message|electric|transmit|communicat/], "What does nervous tissue carry?", "Slide 6 calls it the messenger.") ]},
  { n:5, heading:"Body Organization and Tissues", prompt:"Define muscle tissue.",
    guide:"What does it make possible?", where:H + "6 | " + B30,
    model:"Muscle tissue makes movement possible, both voluntary and involuntary.",
    watch:[ W(/impulse|signal|message/, "Check that. Carrying signals is the job of nervous tissue.", "Its job") ],
    ideas:[ I("Its job", [/\bmov|motion|contract/], "What does muscle tissue make possible?", "Slide 6 calls it the mover.") ]},
  { n:6, heading:"Homeostasis", prompt:"Define homeostasis.",
    guide:"What does the body keep constant, even when things change?", where:H + "9 | " + B30,
    model:"Homeostasis is the relatively constant internal conditions that organisms maintain, even when things change around them.",
    ideas:[
      I("Constant inside", [/constant|stable|steady|balanc|same|normal/], "What does homeostasis keep?", "Slide 9: relatively ___ internal conditions."),
      I("Despite change", [/change|outside|environment|surroundings|despite|even (when|if)/], "When does the body keep this up?", "Slide 9: despite ___ in the environment.")
    ]},
  { n:7, heading:"Homeostasis", prompt:"Define feedback inhibition (negative feedback).",
    guide:"What does the response do to the original change?", where:H + "10 | " + B30,
    model:"Feedback inhibition (negative feedback) is when a change causes a response that pushes conditions back toward normal. Example: a thermostat turns the furnace on when the room gets cold.",
    watch:[ W(/(further|farther|more) away from normal|makes? (it|the change) (bigger|worse|stronger)|amplif/, "Check that. Negative feedback pushes conditions back toward normal.") ],
    ideas:[ I("What the response does", [/back (toward|to)|normal|oppos|revers|undo|counter|set point/], "What does the response do to the original change?", "Slide 10: a response that opposes the stimulus, pushing things back toward ___.") ]},
  { n:8, heading:"Homeostasis", prompt:"Explain how the body responds to changes in body temperature.",
    guide:"What is the control center? What happens when you are too cold? Too hot?", where:H + "12 | " + B30,
    model:"The hypothalamus is the control center. When you are too cold, it signals your muscles and you shiver to make heat. When you are too hot, it signals sweat glands and you sweat to cool down.",
    ideas:[
      I("Control center", [/hypothalam|hypo ?thala/], "What part of the brain is the control center for body temperature?", "Slide 12, the line under the title."),
      I("Too cold", [/shiver/], "What does your body do when you are too cold?", "Slide 12, the Too Cold column."),
      I("Too hot", [/sweat/], "What does your body do when you are too hot?", "Slide 12, the Too Hot column.")
    ],
    watch:[ W(near(/cold/, /sweat/, 25), "Check that. Do you sweat when you are cold?", "Too cold") ]},
  { n:9, heading:"The Respiratory System", prompt:"Define pharynx.",
    guide:"Where is it, and what passes through it?", where:R + "4 | " + B33,
    model:"The pharynx is the throat, behind the nose and mouth. It is a passageway for both air and food.",
    watch:[ W(/voice ?box|wind ?pipe/, "Check that. The voice box and windpipe are other structures. The pharynx is the throat.") ],
    ideas:[ I("Air and food", [either(/air/, /food/, 40)], "What two things pass through the pharynx?", "Slide 4: passageway for ___ and ___.") ]},
  { n:10, heading:"The Respiratory System", prompt:"Define larynx.",
    guide:"What is its nickname?", where:R + "4 | " + B33,
    model:"The larynx is the voice box.",
    watch:[ W(/wind ?pipe/, "Check that. The windpipe is the trachea. What is the larynx?", "Nickname") ],
    ideas:[ I("Nickname", [/voice|vocal|speak|talk|sound/], "What is the larynx's nickname?", "Slide 4: the ___ box.") ]},
  { n:11, heading:"The Respiratory System", prompt:"Define trachea.",
    guide:"What is its nickname, and where does it carry air?", where:R + "4 | " + B33,
    model:"The trachea is the windpipe. It carries air down to the bronchi.",
    watch:[ W(/voice ?box/, "Check that. The voice box is the larynx. What is the trachea?", "Nickname") ],
    ideas:[
      I("Nickname", [/wind ?pipe/], "What is the trachea's nickname?", "Slide 4: the ___ pipe."),
      I("Where it carries air", [/bronch|lung|down/], "Where does it carry air?", "It carries air down to the ___.")
    ]},
  { n:12, heading:"The Respiratory System", prompt:"Define bronchus.",
    guide:"Where does it branch from, and where does each one lead?", where:R + "5 | " + B33,
    model:"A bronchus is a tube that branches off the trachea. There are two bronchi, and each one leads to a lung.",
    watch:[ W(/air sacs?|gas exchange/, "Check that. The air sacs are alveoli. A bronchus is a tube.") ],
    ideas:[
      I("Branches from", [T.trachea, /wind ?pipe/], "Where does a bronchus branch from?", "It branches off the windpipe."),
      I("Leads to", [/lung/], "Where does each bronchus lead?", "Slide 5: each leads to one ___.")
    ]},
  { n:13, heading:"The Respiratory System", prompt:"Define alveolus.",
    guide:"What is it, and what happens there?", where:R + "5 | " + B33,
    model:"An alveolus is a tiny air sac in the lungs where gas exchange happens.",
    watch:[ W(/\btubes?\b/, "Check that. An alveolus is a tiny sac, not a tube.", "What it is") ],
    ideas:[
      I("What it is", [/sac|bag|balloon|pocket|bubble/], "What is an alveolus?", "Slide 5: tiny air ___."),
      I("What happens there", [/gas exchange|exchang|oxygen|carbon dioxide/], "What happens in the alveoli?", "Slide 5: site of ___ exchange.")
    ]},
  { n:14, heading:"The Respiratory System", prompt:"Define diaphragm.",
    guide:"Where is this muscle, and what does it do?", where:"Slide: Respiratory slideshow 11 | " + B33,
    model:"The diaphragm is a large, dome-shaped muscle under the lungs. It contracts and relaxes to move air in and out of the lungs.",
    watch:[ W(/\bbone\b/, "Check that. The diaphragm is a muscle, not a bone.") ],
    ideas:[
      I("What it is", [/muscle/], "What kind of structure is the diaphragm?", "It is a big sheet of ___ under the lungs."),
      I("Its job", [/breath|inhal|exhal|air (in|out)|contract|lung/], "What does it do?", "Watch Slide 11: what happens to the lungs when it moves?")
    ]},
  { n:15, heading:"The Respiratory System", prompt:"Label the structures of the respiratory system in order.",
    guide:"Trace the path of air from the nose to the alveoli.", where:R + "4 to 5 | " + B33,
    draw:"Sketch the respiratory system. Label nasal cavity, pharynx, larynx, trachea, bronchi, lungs, alveoli, and diaphragm.",
    model:"Air goes through the nose (nasal cavity), pharynx, larynx, trachea, bronchi, bronchioles, and into the alveoli in the lungs. The diaphragm is the muscle under the lungs.",
    ideas:[
      I("Start", [/nose|nasal/], "Where does air enter?", "Slide 4, first structure."),
      I("Throat to windpipe", [near(/pharynx|farin|throat/, near(/larynx|larin|voice/, /trache|wind ?pipe/, 80), 80)], "Put pharynx, larynx, and trachea in order.", "Slide 4 lists them in order."),
      I("Into the lungs", [near(/bronch/, T.alveoli, 120)], "After the trachea, where does air go?", "Slide 5 lists them in order.")
    ]},
  { n:16, heading:"The Respiratory System", prompt:"Explain which way oxygen and carbon dioxide move during gas exchange at the alveoli.",
    guide:"Where does oxygen go? Where does carbon dioxide go? Between which two structures?", where:R + "6 to 7 | " + B33,
    model:"Gas exchange happens between the alveoli and the capillaries. Oxygen moves from the alveoli into the blood. Carbon dioxide moves from the blood into the alveoli to be breathed out.",
    ideas:[
      I("Where", [either(T.alveoli, T.capillary, 80)], "Gas exchange happens between which two structures?", "Slide 7 answers this one."),
      I("Oxygen", [near(/oxygen|\bo ?2\b/, /(in)?to the (blood|capillar)|into (the )?blood|blood/, 60)], "Which way does oxygen move?", "Oxygen goes from the air sacs into the ___."),
      I("Carbon dioxide", [near(T.co2, /alveol|lungs?|out|exhal|breath/, 60)], "Which way does carbon dioxide move?", "Carbon dioxide goes from the blood into the ___ to be breathed out.")
    ],
    watch:[ W(/oxygen (moves |goes )?(from the blood|out of the blood)|same direction/, "Check that. Oxygen and carbon dioxide move in opposite directions.") ]},
  { n:17, heading:"The Respiratory System", prompt:"Describe what the diaphragm does as you inhale and as you exhale.",
    guide:"Does it contract or relax? Does it move up or down?", where:"Slide: Respiratory slideshow 11 | " + B33,
    model:"When you inhale, the diaphragm contracts and moves down, making the chest bigger and pulling air in. When you exhale, it relaxes and moves up, pushing air out.",
    ideas:[
      I("Inhale", [either(/inhal|breath\w* in/, /contract|down|flatten/, 60)], "What does the diaphragm do when you inhale?", "When you breathe in, does the diaphragm tighten and pull down, or relax and rise?"),
      I("Exhale", [either(/exhal|breath\w* out/, /relax|up\b|rise/, 60)], "What does the diaphragm do when you exhale?", "When you breathe out, does it tighten or relax?")
    ],
    watch:[ W(near(/inhal/, /relax\w* and (moves )?up|moves up/, 30), "Check that. When you inhale, does the diaphragm move up or down?", "Inhale") ]},
  { n:18, heading:"The Respiratory System", prompt:"Explain the role of the medulla oblongata in breathing.",
    guide:"What does it sense in the blood, and what does it tell the lungs to do?", where:R + "9 to 10 | " + B33,
    model:"When carbon dioxide in the blood rises, sensors in the blood vessels signal the medulla oblongata. The medulla tells the lungs to breathe faster, which lowers the carbon dioxide back to normal.",
    watch:[ W(/oxygen (rises|goes up|increases|gets high)/, "Check that. The medulla responds to rising carbon dioxide.", "What it senses") ],
    ideas:[
      I("What it senses", [T.co2], "What rises in the blood that the medulla responds to?", "Slide 10, first step."),
      I("What it does", [/faster|more|increas|speed|quick|harder|deeper/], "What does the medulla tell the lungs to do?", "Slide 10, last step.")
    ]}
  ]
});
})();

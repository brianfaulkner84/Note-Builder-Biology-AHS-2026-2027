/* ==================================================================
   UNIT FILE: Unit 1, Quiz 3 (Circulatory System).
   Source: Ch33.1_Circulatory_Study_Guide.pptx (10 terms plus checklist;
   repeated checklist items merged into the vocabulary prompts); Circulatory
   System slideshow; Chapter 33.1, pp. 948 to 953.
   Fields and helpers: see content/u2q2/unit.js and patterns.js.
   ================================================================== */
(function(){
var S = "Slide: Circulatory slideshow ";
var RIGHT = /\bright\b/, LEFT = /\bleft\b/, LUNG = /lungs?/, BODY = /\bbody\b|rest of the body|organs|tissues/;

UNITS.push({
  id: "u1q3",
  title: "Circulatory System",
  subtitle: "Unit 1, Quiz 3 notes",
  source: "Circulatory System slideshow; Chapter 33.1, pp. 948 to 953",
  disclosure: "AI Disclosure: This notes tool was developed with the assistance of Claude (Anthropic), an AI assistant. Claude built the tool and turned the instructor's Circulatory System study guide into note prompts with guiding questions, key-idea checks, and hints, using the Circulatory System slideshow and Chapter 33.1 of the course textbook. The instructor reviewed and finalized the material before classroom use.",
  questions: [
  { n:1, heading:"Heart Structure", prompt:"State the main job of the circulatory system.",
    guide:"What does it carry to the body, and what does it carry away?", where:S + "3 | Book: Chapter 33.1, p. 948",
    model:"The circulatory system transports oxygen, nutrients, and other substances throughout the body, and it removes wastes from the tissues.",
    ideas:[
      I("What it delivers", [/oxygen|nutrient|food|sugar/], "What does the circulatory system carry to the body?", "Slide 3, the first line."),
      I("What it removes", [/waste|carbon dioxide|co ?2/], "What does it carry away?", "Slide 3, the second line.")
    ]},
  { n:2, heading:"Heart Structure", prompt:"Define atrium.",
    guide:"Upper or lower chamber? Does blood enter or leave here? How many are there?", where:S + "4 | Book: Chapter 33.1, p. 949",
    model:"An atrium is an upper chamber of the heart that receives blood entering the heart. The heart has two atria.",
    ideas:[
      I("Upper or lower", [/upper|top/], "Is an atrium an upper or lower chamber?", "Picture the heart diagram. Where are the atria?"),
      I("Its job", [/enter|receiv|accept|come\w* in|collect/], "Does blood enter or leave the heart through the atria?", "Slide 4: atria where blood ___.")
    ]},
  { n:3, heading:"Heart Structure", prompt:"Define ventricle.",
    guide:"Upper or lower chamber? Does blood enter or leave here? How many are there?", where:S + "4 | Book: Chapter 33.1, p. 949",
    model:"A ventricle is a lower chamber of the heart that pumps blood out of the heart. The heart has two ventricles.",
    ideas:[
      I("Upper or lower", [/lower|bottom/], "Is a ventricle an upper or lower chamber?", "Picture the heart diagram. Where are the ventricles?"),
      I("Its job", [/pump|exit|leave|out/], "Does blood enter or leave the heart through the ventricles?", "Slide 4: ventricles where blood ___.")
    ]},
  { n:4, heading:"Heart Structure", prompt:"Define septum.",
    guide:"What does it divide? What does it keep from mixing?", where:S + "4 | Book: Chapter 33.1, p. 949",
    model:"The septum is the wall that divides the left and right sides of the heart. It keeps oxygen-rich blood from mixing with oxygen-poor blood.",
    ideas:[
      I("What it divides", [either(LEFT, RIGHT, 30), /divid|separat|split/], "What does the septum divide?", "Slide 4: wall that divides the left side from the ___."),
      I("What it prevents", [/mix/], "What does the septum keep from mixing?", "Slide 4, the second line under Septum.")
    ]},
  { n:5, heading:"Heart Structure", prompt:"Define myocardium.",
    guide:"What is the heart wall mostly made of?", where:S + "4 | Book: Chapter 33.1, p. 949",
    model:"The myocardium is the thick layer of cardiac muscle that makes up most of the heart wall.",
    ideas:[ I("What it is", [/muscle/], "What is the myocardium made of?", "Slide 4: the heart is made mostly of cardiac ___.") ]},
  { n:6, heading:"Heart Structure", prompt:"Define valve.",
    guide:"Which way does a valve let blood flow?", where:"Book: Chapter 33.1, p. 949",
    model:"A valve is a flap that keeps blood flowing in only one direction, so it cannot flow backward.",
    ideas:[ I("Its job", [/one (direction|way)|backward|back ?flow|wrong way|same direction/], "Which way does a valve let blood flow?", "A valve works like a one-way door.") ]},
  { n:7, heading:"Blood Flow Pathways", prompt:"Define pulmonary circulation.",
    guide:"Between the heart and what? Which side of the heart pumps it?", where:"Book: Chapter 33.1, p. 950",
    model:"Pulmonary circulation carries blood between the heart and the lungs. The right side of the heart pumps oxygen-poor blood to the lungs to pick up oxygen.",
    ideas:[ I("Heart and lungs", [either(/heart/, LUNG, 60), LUNG], "Pulmonary circulation carries blood between the heart and what?", "Pulmonary means having to do with the lungs.") ],
    watch:[ W(/rest of the body|whole body/, "Check that. Pulmonary means lungs. Which pathway goes to the rest of the body?", "Heart and lungs") ]},
  { n:8, heading:"Blood Flow Pathways", prompt:"Define systemic circulation.",
    guide:"Between the heart and what? Which side of the heart pumps it?", where:"Book: Chapter 33.1, p. 950",
    model:"Systemic circulation carries blood between the heart and the rest of the body. The left side of the heart pumps oxygen-rich blood to the body.",
    ideas:[ I("Heart and body", [BODY], "Systemic circulation carries blood between the heart and what?", "Think: the whole system of the body.") ]},
  { n:9, heading:"Blood Flow Pathways", prompt:"Identify which chambers and vessels are involved in pulmonary circulation.",
    guide:"Which chamber pumps blood to the lungs? Where does the blood come back in?", where:"Book: Chapter 33.1, p. 950",
    model:"The right ventricle pumps oxygen-poor blood through the pulmonary arteries to the lungs. Oxygen-rich blood comes back through the pulmonary veins into the left atrium.",
    ideas:[
      I("Pumps to the lungs", [near(RIGHT, T.ventricle, 15)], "Which chamber pumps blood to the lungs?", "The right side of the heart handles the lungs. Which chamber pumps?"),
      I("Comes back to", [near(LEFT, T.atrium, 15)], "Which chamber does blood return to from the lungs?", "Blood from the lungs enters an upper chamber on the other side.")
    ]},
  { n:10, heading:"Blood Flow Pathways", prompt:"Identify which chambers and vessels are involved in systemic circulation.",
    guide:"Which chamber pumps blood to the body? Through which large artery? Where does the blood come back in?", where:"Book: Chapter 33.1, p. 950",
    model:"The left ventricle pumps oxygen-rich blood through the aorta to the body. Oxygen-poor blood comes back through veins into the right atrium.",
    ideas:[
      I("Pumps to the body", [near(LEFT, T.ventricle, 15)], "Which chamber pumps blood to the body?", "The strongest chamber is on the left side, at the bottom."),
      I("The big artery", [/aorta|a ?orta/], "What is the large artery leaving the left ventricle?", "It is labeled F on the quiz diagram."),
      I("Comes back to", [near(RIGHT, T.atrium, 15)], "Which chamber does blood return to from the body?", "Blood from the body enters an upper chamber on the right.")
    ]},
  { n:11, heading:"Blood Flow Pathways", prompt:"Label the heart's chambers and major vessels on a diagram.",
    guide:"Which chambers are on top and bottom? Remember: the heart's right side is on YOUR left when you face a diagram.", where:"Slide: Circulatory slideshow 5 | Book: Chapter 33.1, p. 949",
    draw:"Sketch the heart. Label right atrium, right ventricle, left atrium, left ventricle, septum, and aorta.",
    model:"Top: right atrium and left atrium. Bottom: right ventricle and left ventricle. The septum divides the left and right sides. The aorta leaves the left ventricle. On a diagram, the heart's right side is on the viewer's left.",
    ideas:[
      I("Upper chambers", [either(RIGHT, T.atrium, 20), either(LEFT, T.atrium, 20)], "Name the two upper chambers.", "Use your note 2."),
      I("Lower chambers", [either(RIGHT, T.ventricle, 20), either(LEFT, T.ventricle, 20)], "Name the two lower chambers.", "Use your note 3."),
      I("Septum", [/septum/], "What divides the two sides?", "Use your note 4."),
      I("Aorta", [/aorta/], "What large vessel leaves the left ventricle?", "Use your note 10.")
    ]},
  { n:12, heading:"Blood Vessels", prompt:"Describe arteries and why their walls are thick and elastic.",
    guide:"Which way do arteries carry blood? What do the thick walls withstand?", where:S + "6 | Book: Chapter 33.1, pp. 951 to 952",
    model:"Arteries carry blood away from the heart. Their walls are thick and elastic so they can withstand the high pressure of blood pumped by the heart.",
    ideas:[
      I("Which way", [/away from (the )?heart|out of the heart|from the heart/], "Which way do arteries carry blood?", "Slide 6: arteries take blood ___ from the heart."),
      I("Why thick walls", [/pressure|force|strong|push|withstand/], "Why are artery walls thick and elastic?", "Slide 6: thick elastic walls to withstand ___.")
    ],
    watch:[ W(/(to|toward|back to) the heart/, "Check that. Arteries carry blood away from the heart. Which vessels bring it back?", "Which way") ]},
  { n:13, heading:"Blood Vessels", prompt:"Describe capillaries and why their walls are only one cell thick.",
    guide:"How big are they? What has to pass through their walls?", where:S + "6 | Book: Chapter 33.1, pp. 951 to 952",
    model:"Capillaries are the smallest blood vessels. Their walls are one cell thick so oxygen, nutrients, and wastes can pass easily between the blood and the body's cells.",
    ideas:[
      I("Size", [/small|tiny|thin/], "How big are capillaries?", "Slide 6, Capillaries."),
      I("Why one cell thick", [/pass|exchang|diffus|through|move|cross|get (in|out)/], "Why are their walls only one cell thick?", "What has to pass between the blood and the cells?")
    ]},
  { n:14, heading:"Blood Vessels", prompt:"Describe veins and how they keep blood moving back to the heart.",
    guide:"Which way do veins carry blood? What two things help push it back?", where:S + "6 | Book: Chapter 33.1, pp. 951 to 952",
    model:"Veins carry blood back toward the heart. Valves keep the blood from flowing backward, and skeletal muscles squeeze the veins to push blood along.",
    ideas:[
      I("Which way", [/(back )?(to|toward|towards|into) the heart/], "Which way do veins carry blood?", "Slide 6: veins bring blood ___ to the heart."),
      I("Valves", [/valve/], "What inside veins keeps blood from flowing backward?", "Slide 6, Veins."),
      I("Muscles", [/muscle/], "What squeezes the veins to help push blood?", "Slide 6, Veins.")
    ]}
  ]
});
})();

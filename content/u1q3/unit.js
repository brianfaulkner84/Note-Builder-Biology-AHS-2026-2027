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
    model:"• The circulatory system transports oxygen, nutrients, and other substances throughout the body, and it removes wastes from the tissues",
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,15})\b(removes?|takes? away|carr\w* away|gets? rid of) (the )?(nutrients|food|sugar|glucose)\b/, "Check that. Nutrients are delivered to the cells. What does the circulatory system carry away?"),
      W(/(?<!\b(not|never|doesn't|doesnt|don't|dont)\b.{0,10})\b(heart|circulatory system|blood vessels?) (makes?|produces?|creates?) (the |new )?(blood|oxygen)\b/, "Check that. The heart pumps blood. Does it make blood or oxygen?"),
      W(/(?<!never )(?<!not )(?<!n't )(?<!dont )(?<!doesnt )\b(removes?|take?s? away|carr\w* away|gets? rid of) (the )?oxygen\b/, "Check that. Does the circulatory system deliver oxygen or take it away?"),
      W(/\b(deliver\w*|brings?|carr\w*|transports?) (carbon dioxide|co ?2|co two|wastes?) to (the )?(body|cells|tissues|organs)/, "Check that. Is waste delivered to the cells or carried away from them?"), W(/digest|hormone|filter\w* (the )?air/, "Check that. That is a different body system\'s job.") ],
    ideas:[
      I("What it delivers", [/oxygen|nutrient|food|sugar/], "What does the circulatory system carry to the body?", "Slide 3, the first line."),
      I("What it removes", [/waste|carbon dioxide|co ?2/], "What does it carry away?", "Slide 3, the second line.")
    ]},
  { n:2, heading:"Heart Structure", prompt:"Define atrium.",
    guide:"Upper or lower chamber? Does blood enter or leave here? How many are there?", where:S + "4 | Book: Chapter 33.1, p. 949",
    model:"• An atrium is an upper chamber of the heart that receives blood entering the heart\n• The heart has two atria",
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,15})\bblood (leaves|exits|goes out of|is pumped out of|gets pumped out of|flows out of) the heart (through|from|out of|by|in|at) (the )?atri|\batri\w* (is|are) where (the )?blood (leaves|exits|goes out|is pumped out)/, "Check that. Blood enters the heart through the atria. Which chambers does it leave from?"),
      W(/\b(has|have|there (is|are)) (only )?(one|1|three|3|four|4) atri/, "Check that. How many atria does the heart have?"),
      W(/\batri(um|a)s? (is|are) (an? |the )?(blood vessels?|veins?|arter(y|ies)|valves?)\b/, "Check that. Is an atrium a chamber or a vessel?"), W(/\b(lower|bottom)\b|pumps? (the )?blood out/, "Check that. The atria are the upper chambers that receive blood.") ],
    ideas:[
      I("Upper or lower", [/upper|top/], "Is an atrium an upper or lower chamber?", "Picture the heart diagram. Where are the atria?"),
      I("Its job", [/enter|receiv|accept|come\w* in|collect/], "Does blood enter or leave the heart through the atria?", "Slide 4: atria where blood ___.")
    ]},
  { n:3, heading:"Heart Structure", prompt:"Define ventricle.",
    guide:"Upper or lower chamber? Does blood enter or leave here? How many are there?", where:S + "4 | Book: Chapter 33.1, p. 949",
    model:"• A ventricle is a lower chamber of the heart that pumps blood out of the heart\n• The heart has two ventricles",
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,15})\bventric\w* (pumps?|push(es)?|sends?|squeezes?) (the )?(blood )?(up )?(in)?to (the )?atri/, "Check that. The ventricles pump blood out of the heart. Which way does blood go between atrium and ventricle?"),
      W(/\b(has|have|there (is|are)) (only )?(one|1|three|3|four|4) ventric/, "Check that. How many ventricles does the heart have?"),
      W(/\bpumps? (the )?blood (into|in to|in|to) the heart\b/, "Check that. Do the ventricles pump blood into the heart or out of it?"), W(/\b(upper|top)\b|receiv/, "Check that. The ventricles are the lower chambers that pump blood out.") ],
    ideas:[
      I("Upper or lower", [/lower|bottom/], "Is a ventricle an upper or lower chamber?", "Picture the heart diagram. Where are the ventricles?"),
      I("Its job", [/pump|exit|leave|out/], "Does blood enter or leave the heart through the ventricles?", "Slide 4: ventricles where blood ___.")
    ]},
  { n:4, heading:"Heart Structure", prompt:"Define septum.",
    guide:"What does it divide? What does it keep from mixing?", where:S + "4 | Book: Chapter 33.1, p. 949",
    model:"• The septum is the wall that divides the left and right sides of the heart\n• It keeps oxygen-rich blood from mixing with oxygen-poor blood",
    watch:[
      W(/\bseptum (is|means) (an? |the )?(valve|flap|chamber|blood vessel|vessel|artery|vein|atrium|ventricle)\b/, "Check that. The septum is a wall. Is it a valve, a chamber, or a vessel?"),
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|cannot|can't|cant|won't|wont)\b.{0,20})\bblood (can |will |could |does |do |just )?(flows?|go(es)?|pass(es)?|moves?|travels?) (through|across) the septum\b/, "Check that. The septum is a solid wall. Can blood pass through it?"),
      W(/(?<!\b(left|right)\b.{0,60})(\b(top|upper) (and|from) (the )?(bottom|lower)\b|\b(separat\w*|divid\w*) (the )?atri\w* (and|from) (the )?ventric\w*)(?!.{0,40}\b(left|right|middle|sides?)\b)/, "Check that. Does the septum separate top from bottom, or one side from the other?"),
      W(/(?<!\b(not|never|doesn't|doesnt|don't|dont|from|to) )\bmix(es|ing)? (the |up )?(oxygen|blood)|\b(lets?|allows?|helps?) (the )?(oxygen \w+ )?blood (to )?mix/, "Check that. Does the septum mix the blood or keep it apart?"), W(/(?<!\b(?:not|never|isn't|isnt|no) (?:a |an )?)\bvalves?\b|(?<!\b(?:not|never) )\bone (direction|way)/, "Check that. Keeping blood moving one way is the job of the valves.", "What it divides") ],
    ideas:[
      I("What it divides", [either(LEFT, RIGHT, 30), /divid|separat|split/], "What does the septum divide?", "Slide 4: wall that divides the left side from the ___."),
      I("What it prevents", [/mix/], "What does the septum keep from mixing?", "Slide 4, the second line under Septum.")
    ]},
  { n:5, heading:"Heart Structure", prompt:"Define myocardium.",
    guide:"What is the heart wall mostly made of?", where:S + "4 | Book: Chapter 33.1, p. 949",
    model:"• The myocardium is the thick layer of cardiac muscle that makes up most of the heart wall",
    watch:[
      W(/(?<!\b(not|never|isn't|isnt|aren't|arent)\b.{0,10})(?<!\bin)\bvoluntary\b|\byou (can )?(control|choose) (it|when it beats|the myocardium)\b/, "Check that. Cardiac muscle works without you choosing. Is it voluntary?"),
      W(/\b(covers?|surrounds?|wraps? around) the (outside of the )?heart\b|\bmyocardium (is|means) (an? |the )?(blood vessel|artery|vein|chamber|lining)\b/, "Check that. The myocardium is the heart wall's thick muscle layer. Is it a covering or a chamber?"),
      W(/(?<!not )(?<!not a )\bthin\b/, "Check that. Is the myocardium a thin layer or a thick layer?"),
      W(/(?<!not )(?<!not a )(?<!not the )\b(skeletal|smooth) muscle/, "Check that. Which type of muscle is found only in the heart?"), W(/\bbone\b|valve|divides? the/, "Check that. The myocardium is the heart muscle.", "What it is") ],
    ideas:[ I("What it is", [/muscle/], "What is the myocardium made of?", "Slide 4: the heart is made mostly of cardiac ___.") ]},
  { n:6, heading:"Heart Structure", prompt:"Define valve.",
    guide:"Which way does a valve let blood flow?", where:"Book: Chapter 33.1, p. 949",
    model:"• A valve is a flap that keeps blood flowing in only one direction, so it cannot flow backward",
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|won't|wont|cannot|can't|cant)\b.{0,15})\b(lets?|allows?|helps?|makes?) (the )?blood (to )?(flow |go |move |run )?back ?wards?\b/, "Check that. A valve stops blood from flowing backward. Does it let blood go backward?"),
      W(/(?<!(septum|not|n't).{0,30})\b(keeps?|stops?|prevents?|blocks?)\b.{0,40}\bmix(es|ing)?\b/, "Check that. Keeping the blood from mixing is the septum's job. What does a valve do?"),
      W(/\b(both (ways|directions)|two (ways|directions)|2 (ways|directions)|back and forth|any direction)\b/, "Check that. How many directions does a valve let blood flow?", "Its job"),
      W(/\bvalves? (is|are) (an? |the )?(muscles?|chambers?|blood vessels?|vessels?)\b|\bvalves? pumps?\b/, "Check that. Is a valve a pump, or a flap that blood moves through?"), W(/divid|separat/, "Check that. Dividing the two sides is the septum\'s job.", "Its job") ],
    ideas:[ I("Its job", [/one (direction|way)|backward|back ?flow|wrong way|same direction/], "Which way does a valve let blood flow?", "A valve works like a one-way door.") ]},
  { n:7, heading:"Blood Flow Pathways", prompt:"Define pulmonary circulation.",
    guide:"Between the heart and what? Which side of the heart pumps it?", where:"Book: Chapter 33.1, p. 950",
    model:"• Pulmonary circulation carries blood between the heart and the lungs\n• The right side of the heart pumps oxygen-poor blood to the lungs to pick up oxygen",
    ideas:[ I("Heart and lungs", [either(/heart/, LUNG, 60), LUNG], "Pulmonary circulation carries blood between the heart and what?", "Pulmonary means having to do with the lungs.") ],
    watch:[
      W(/\b(back|returns?|comes?|goes?|enters?)\w* .{0,30}\b(into|to|in) the right atri/, "Check that. Blood coming back from the lungs enters the left side of the heart. Which atrium?"),
      W(/\b(picks?|picking|gets?|getting) up (the )?oxygen (in|from|at|inside) the heart\b|\b(gets?|getting|receives?) (its |the )?oxygen (in|from|at|inside) the heart\b/, "Check that. Where does blood pick up oxygen, in the heart or in the lungs?"),
      W(/\bleft (side|ventricle) (of the heart )?pumps? (the )?(oxygen \w+ )?(blood )?(to|into) the lungs/, "Check that. Which side of the heart sends blood to the lungs?"),
      W(/\b(drops? off|gives?|delivers?|unloads?) (the )?oxygen (to|in|at|into) the lungs|\bpicks? up (carbon dioxide|co ?2|co two) (in|from|at) the lungs|\boxygen (rich|full) (blood )?(to|into) the lungs/, "Check that. What does blood pick up in the lungs, and what does it drop off?"), W(/rest of the body|whole body/, "Check that. Pulmonary means lungs. Which pathway goes to the rest of the body?", "Heart and lungs") ]},
  { n:8, heading:"Blood Flow Pathways", prompt:"Define systemic circulation.",
    guide:"Between the heart and what? Which side of the heart pumps it?", where:"Book: Chapter 33.1, p. 950",
    model:"• Systemic circulation carries blood between the heart and the rest of the body\n• The left side of the heart pumps oxygen-rich blood to the body",
    watch:[
      W(/\b(back|returns?|comes?|goes?|enters?)\w* .{0,30}\b(into|to|in) the left atri/, "Check that. Blood coming back from the body enters the right side of the heart. Which atrium?"),
      W(/\b(picks?|picking|gets?|getting) (up )?(more )?oxygen (in|from|at) (the )?(body|cells|tissues|organs|rest of the body)\b/, "Check that. In the body, does blood pick up oxygen or drop it off?"),
      W(/\bright (side|ventricle) (of the heart )?pumps? (the )?(oxygen \w+ )?(blood )?(to|into|through|out to) the (rest of the )?body/, "Check that. Which side of the heart pumps blood to the body?"),
      W(/\b(pumps?|carr\w*|sends?|delivers?) (the )?oxygen (poor|less|low) (blood )?(to|into|out to) (the )?(rest of the )?body/, "Check that. Is the blood sent out to the body oxygen rich or oxygen poor?"), W(/(only|just) (to )?the lungs|heart and (the )?lungs/, "Check that. Systemic means the rest of the body. Which pathway goes to the lungs?", "Heart and body") ],
    ideas:[ I("Heart and body", [BODY], "Systemic circulation carries blood between the heart and what?", "Think: the whole system of the body.") ]},
  { n:9, heading:"Blood Flow Pathways", prompt:"Identify which chambers and vessels are involved in pulmonary circulation.",
    guide:"Which chamber pumps blood to the lungs? Where does the blood come back in?", where:"Book: Chapter 33.1, p. 950",
    model:"• The right ventricle pumps oxygen-poor blood through the pulmonary arteries to the lungs\n• Oxygen-rich blood comes back through the pulmonary veins into the left atrium",
    watch:[
      W(/\bpulmonary arter\w* (carr\w* |take\w* |bring\w* |send\w* )?(the )?oxygen (rich|full|filled)\b/, "Check that. Is the blood in the pulmonary arteries oxygen rich or oxygen poor?"),
      W(/\bright atri\w* (pumps?|sends?|pushes?) (the )?(blood )?(out )?(to|into) the lungs\b/, "Check that. Which chamber pumps blood to the lungs, an atrium or a ventricle?"),
      W(/\bpulmonary veins? (carr\w* |brings? |takes? |sends? )?(the )?(oxygen \w+ )?(blood )?(to|into|toward) the lungs|\bpulmonary arter\w* (carr\w* |brings? |returns? )?(the )?(oxygen \w+ )?(blood )?(back|from the lungs|to the left|into the left)/, "Check that. Which vessels carry blood to the lungs, and which bring it back?"),
      W(/\b(back|returns?|comes?|goes?|enters?)\w* .{0,30}\b(into|to|in) the right atri/, "Check that. Which chamber does blood from the lungs return to?", "Comes back to"), W(/left ventricle (pumps? )?(the )?(blood )?(to|into) the lungs/, "Check that. Which side of the heart pumps blood to the lungs?") ],
    ideas:[
      I("Pumps to the lungs", [near(RIGHT, T.ventricle, 15)], "Which chamber pumps blood to the lungs?", "The right side of the heart handles the lungs. Which chamber pumps?"),
      I("Comes back to", [near(LEFT, T.atrium, 15)], "Which chamber does blood return to from the lungs?", "Blood from the lungs enters an upper chamber on the other side.")
    ]},
  { n:10, heading:"Blood Flow Pathways", prompt:"Identify which chambers and vessels are involved in systemic circulation.",
    guide:"Which chamber pumps blood to the body? Through which large artery? Where does the blood come back in?", where:"Book: Chapter 33.1, p. 950",
    model:"• The left ventricle pumps oxygen-rich blood through the aorta to the body\n• Oxygen-poor blood comes back through veins into the right atrium",
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,15})\baorta (carr\w* |takes? |brings? |sends? |goes |leads |pumps? )?(the )?(\w+ )?(\w+ )?(blood )?(to|into|toward) the lungs\b/, "Check that. The aorta carries blood out to the body. Which vessels go to the lungs?"),
      W(/\baorta (carr\w* |takes? |brings? |sends? |has |holds )?(the )?oxygen (poor|less|low|depleted)\b/, "Check that. The aorta leaves the left ventricle. Is that blood oxygen rich or oxygen poor?"),
      W(/\b(back|returns?|comes?|goes?|enters?)\w* .{0,30}\b(into|to|in) the left atri/, "Check that. Which chamber does blood from the body return to?", "Comes back to"),
      W(/\baorta (is )?(an? |the )?(\w+ )?vein\b|\bvein (called|named) the aorta|\baorta (brings?|carr\w*|returns?) (the )?(\w+ )?(blood )?back|\bpulmonary (arter\w*|veins?) (to|into|out to) the body/, "Check that. Which vessel carries blood out of the left ventricle to the body?"), W(/right ventricle (pumps? )?(the )?(blood )?(to|into|through) the (body|aorta)/, "Check that. Which side of the heart pumps blood to the body?") ],
    ideas:[
      I("Pumps to the body", [near(LEFT, T.ventricle, 15)], "Which chamber pumps blood to the body?", "The strongest chamber is on the left side, at the bottom."),
      I("The big artery", [/aorta|a ?orta/], "What is the large artery leaving the left ventricle?", "It is labeled F on the quiz diagram."),
      I("Comes back to", [near(RIGHT, T.atrium, 15)], "Which chamber does blood return to from the body?", "Blood from the body enters an upper chamber on the right.")
    ]},
  { n:11, heading:"Blood Flow Pathways", prompt:"Label the heart's chambers and major vessels on a diagram.",
    guide:"Which chambers are on top and bottom? Remember: the heart's right side is on YOUR left when you face a diagram.", where:"Slide: Circulatory slideshow 5 | Book: Chapter 33.1, p. 949",
    draw:"Sketch the heart. Label right atrium, right ventricle, left atrium, left ventricle, septum, and aorta.",
    model:"• Top: right atrium and left atrium\n• Bottom: right ventricle and left ventricle\n• The septum divides the left and right sides\n• The aorta leaves the left ventricle\n• On a diagram, the heart's right side is on the viewer's left",
    watch:[
      W(/\bseptum (\w+ )?(divides?|separates?|splits?|is between) (the )?(top|upper|atri\w*) (and|from) (the )?(bottom|lower|ventric\w*)\b/, "Check that. The septum divides the left side from the right side. Is it between top and bottom?"),
      W(/\bventric\w* (are|is|go|goes|sits?) (on )?(the )?(top|upper)\b|\bventric\w* on (the )?(top|upper)\b|\batri(um|a)s? (are|is|go|goes|sits?) (on )?(the )?(bottom|lower)\b|\batri(um|a)s? on (the )?(bottom|lower)\b|\b(top|upper) (chambers? )?(are|is) (the )?(two )?(left and right |right and left )?ventric|\b(bottom|lower) (chambers? )?(are|is) (the )?(two )?(left and right |right and left )?atri/, "Check that. Which chambers are on top and which are on the bottom?"),
      W(/\baorta (leaves|comes? (out )?of|exits|starts at|attached to|connects to) (the )?right\b|\bright ventricle .{0,15}(into|to|through) the aorta/, "Check that. Which ventricle does the aorta leave from?"),
      W(/\bright side (of the heart )?(is )?on (the |your |my |our )?(viewer'?s? )?right\b/, "Check that. When you face a heart diagram, which side is the heart's right side on?") ],
    ideas:[
      I("Upper chambers", [either(RIGHT, T.atrium, 20), either(LEFT, T.atrium, 20)], "Name the two upper chambers.", "Use your note 2."),
      I("Lower chambers", [either(RIGHT, T.ventricle, 20), either(LEFT, T.ventricle, 20)], "Name the two lower chambers.", "Use your note 3."),
      I("Septum", [/septum/], "What divides the two sides?", "Use your note 4."),
      I("Aorta", [/aorta/], "What large vessel leaves the left ventricle?", "Use your note 10.")
    ]},
  { n:12, heading:"Blood Vessels", prompt:"Describe arteries and why their walls are thick and elastic.",
    guide:"Which way do arteries carry blood? What do the thick walls withstand?", where:S + "6 | Book: Chapter 33.1, pp. 951 to 952",
    model:"• Arteries carry blood away from the heart\n• Their walls are thick and elastic so they can withstand the high pressure of blood pumped by the heart",
    ideas:[
      I("Which way", [/away from (the )?heart|out of the heart|from the heart/], "Which way do arteries carry blood?", "Slide 6: arteries take blood ___ from the heart."),
      I("Why thick walls", [/pressure|force|strong|push|withstand/], "Why are artery walls thick and elastic?", "Slide 6: thick elastic walls to withstand ___.")
    ],
    watch:[
      W(/(?<!\b(not|never|no|without|doesn't|doesnt|don't|dont|isn't|isnt|aren't|arent|cannot|can't|cant)\b.{0,15})\barter\w* (are|is) (the )?(smallest|tiniest|thinnest)\b/, "Check that. The smallest blood vessels are capillaries. What are arteries like?"),
      W(/(?<!\b(not|never|no|unlike)\b.{0,15})\barter\w* (have|has|use|uses|contain|contains) (one way |many |lots of )?valves?\b/, "Check that. Which vessels have valves, arteries or veins?"),
      W(/(?<!not )(?<!not too )(?<!n't )\bthin (walls?|elastic)|\bwalls? (are |is )?(very )?thin\b|(?<!not )(?<!n't )(?<!not a )\blow (blood )?pressure/, "Check that. Are artery walls thin or thick, and is the pressure inside high or low?"),
      W(/\b(arter\w* (always|only) carr\w* oxygen|all arter\w* carr\w* oxygen (rich|full))/, "Check that. Do all arteries carry oxygen rich blood? Think about the pulmonary arteries."), W(/(to|toward|back to) the heart/, "Check that. Arteries carry blood away from the heart. Which vessels bring it back?", "Which way") ]},
  { n:13, heading:"Blood Vessels", prompt:"Describe capillaries and why their walls are only one cell thick.",
    guide:"How big are they? What has to pass through their walls?", where:S + "6 | Book: Chapter 33.1, pp. 951 to 952",
    model:"• Capillaries are the smallest blood vessels\n• Their walls are one cell thick so oxygen, nutrients, and wastes can pass easily between the blood and the body's cells",
    watch:[
      W(/\boxygen (\w+ )?(moves? |goes? |passes? |diffuses? )?(from|out of) (the )?(body )?(cells|tissues) (in)?to (the )?blood\b|\b(carbon dioxide|co2|wastes?) (\w+ )?(moves? |goes? |passes? )?(from|out of) (the )?blood (in)?to (the )?(body )?(cells|tissues)\b/, "Check that. Which way do oxygen and wastes move between the blood and the cells?"),
      W(/\bcapillar\w* (carr\w*|takes?|brings?|pumps?) (the )?blood (away from|back to|to|toward) the heart/, "Check that. Which vessels carry blood to and from the heart? What do capillaries connect?"),
      W(/\b(so|because) (the )?blood (can )?(flows?|moves?|goes?|travels?|runs?) (\w+ )?(faster|quicker|quickly|fast)\b/, "Check that. What has to get through the thin wall? Is it about speed?"), W(/(?<!cell )\bthick\b|\blargest\b|\bbiggest\b/, "Check that. Capillaries are the smallest, thinnest blood vessels.") ],
    ideas:[
      I("Size", [/small|tiny|thin/], "How big are capillaries?", "Slide 6, Capillaries."),
      I("Why one cell thick", [/pass|exchang|diffus|through|move|cross|get (in|out)/], "Why are their walls only one cell thick?", "What has to pass between the blood and the cells?")
    ]},
  { n:14, heading:"Blood Vessels", prompt:"Describe veins and how they keep blood moving back to the heart.",
    guide:"Which way do veins carry blood? What two things help push it back?", where:S + "6 | Book: Chapter 33.1, pp. 951 to 952",
    model:"• Veins carry blood back toward the heart\n• Valves keep the blood from flowing backward, and skeletal muscles squeeze the veins to push blood along",
    watch:[
      W(/(?<!\b(not|never|no|unlike)\b.{0,15})\bveins? (are|is) (the )?(smallest|tiniest|thinnest)\b/, "Check that. The smallest blood vessels are capillaries. What do veins do?"),
      W(/\bveins? (have no|has no|don't have|dont have|do not have|does not have|doesn't have|doesnt have|lack|lacks) valves?\b/, "Check that. What inside veins keeps blood from flowing backward?"),
      W(/(?<!not )(?<!n't )(?<!isnt )\bblood (in (the )?veins )?(is|turns|looks) blue\b|(?<!not )\bblue blood/, "Check that. Is blood ever really blue?"),
      W(/(?<!not )(?<!n't )(?<!not have )(?<!n't have )(?<!dont have )(?<!no )\bhigh (blood )?pressure|(?<!not )(?<!n't )(?<!not as )(?<!not have )(?<!dont have )\bthick(er)? (and elastic )?walls?/, "Check that. Which vessels have thick walls for high pressure? Is that veins?"), W(/away from (the )?heart/, "Check that. Veins carry blood back to the heart.", "Which way") ],
    ideas:[
      I("Which way", [/(back )?(to|toward|towards|into) the heart/], "Which way do veins carry blood?", "Slide 6: veins bring blood ___ to the heart."),
      I("Valves", [/valve/], "What inside veins keeps blood from flowing backward?", "Slide 6, Veins."),
      I("Muscles", [/muscle/], "What squeezes the veins to help push blood?", "Slide 6, Veins.")
    ]}
  ]
});
})();

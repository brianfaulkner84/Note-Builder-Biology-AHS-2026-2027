/* ==================================================================
   NOTE-TAKING GUIDE: the "How to Take Good Notes" cards on the menu.
   Edit, add, or reorder cards here. Three card types:
     tip     title, tip, plus optional weak / strong example notes
     choose  title, prompt, a, b, correct ("a" or "b"), explain
     cut     title, prompt, sentences [{t, fluff:true|false}], explain
   Keep each card short: one idea, read in under a minute.
   ================================================================== */
window.NOTE_GUIDE = [
  { type:"tip", title:"Why take notes?",
    tip:"Every time you pull an idea out of your head and put it in your own words, it sticks better. In this class you do that three times: homework, notes, and the quiz.",
    strong:"Homework, then notes, then quiz. Three times, and it stays." },

  { type:"tip", title:"Answer the question",
    tip:"Each prompt asks one thing. Your note answers that one thing. Tap Clue if you are not sure what to include.",
    weak:"Homeostasis is in chapter 30 and it is about the body and a lot of things happen with it.",
    strong:"Homeostasis = keeping the inside of the body stable when the outside changes." },

  { type:"cut", title:"Practice: spot the fluff",
    prompt:"The prompt says: Define stimulus. Tap each sentence that does NOT help answer it.",
    sentences:[
      {t:"So we talked about this in class on Tuesday.", fluff:true},
      {t:"A stimulus is a signal that a living thing responds to.", fluff:false},
      {t:"I think it is kind of interesting.", fluff:true},
      {t:"Example: a plant bends toward light.", fluff:false}
    ],
    explain:"Keep the definition and the example. Cut the rest. Less is more." },

  { type:"tip", title:"Use your own words",
    tip:"Copying the book word for word feels safe, but your brain skips the thinking. Say it the way you would explain it to a friend.",
    weak:"The relatively constant internal physical and chemical conditions that organisms maintain.",
    strong:"Homeostasis: my body keeps things like temperature steady, even when it is hot or cold outside." },

  { type:"choose", title:"Practice: which note is better?",
    prompt:"The prompt says: State the job of the ribosome.",
    a:"Ribosomes are really small and there are a lot of them in cells and they are very important.",
    b:"Ribosomes build proteins.",
    correct:"b",
    explain:"B answers the question in three words. A is long but never says what ribosomes do." },

  { type:"tip", title:"Add one example",
    tip:"An example from your own life makes an idea easier to remember on the quiz.",
    weak:"Response to the environment: living things react.",
    strong:"Response to the environment: living things react to signals. Example: I pull my hand away from a hot pan." },

  { type:"tip", title:"Headings and numbers",
    tip:"Write the heading from the guide, then number each note to match. On the quiz you can find any note in seconds.",
    strong:"Heading: Passive Transport\n9. Diffusion = particles move from high to low concentration.\n10. Equilibrium = concentration is equal; molecules keep moving." },

  { type:"tip", title:"Draw it when it is a picture",
    tip:"If the prompt says label, sketch, or chart, draw it. Your printed sheet has a box for it. A simple sketch with labels beats a long paragraph.",
    strong:"Phospholipid: a circle head (loves water) with two wavy tails (fear water)." },

  { type:"choose", title:"Practice: reread for mistakes",
    prompt:"The prompt says: Describe what molecules do at equilibrium. Which note is correct?",
    a:"The concentration is equal on both sides, and the molecules keep moving back and forth.",
    b:"The concentration is equal on both sides, so the molecules stop moving.",
    correct:"a",
    explain:"Molecules never stop. Reread every note and watch for words like stop, always, and never." },

  { type:"tip", title:"Study your notes, do not just read them",
    tip:"Cover a note, try to say it from memory, then check. That works better than rereading. Start a few days before the quiz, not only the night before.",
    strong:"Cover it. Say it. Check it. Repeat tomorrow." },

  { type:"tip", title:"You are ready",
    tip:"Answer the question, use your own words, add an example, and cut the fluff. Pick your quiz and start building notes." }
];

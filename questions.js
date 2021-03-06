const questionEl = document.getElementById("question"); //<p> to display the question in HTML
const quizEl = document.querySelector("#quiz");
const commentEl = document.querySelector("#comment");
const questioncounterText = document.querySelector("#progress");
const scoreText = document.querySelector("#score");

let score = 0;
let qCounter = 0; //question counter
let thisQuestion;
let correctAnswer;

let questions = [
  {
    id: 1,
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    id: 2,
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    id: 3,
    title: "Which of the following is not a valid JavaScript variable name?",
    choices: [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above",
    ],
    answer: "2names",
  },
  {
    id: 4,
    title: "Which language is used for styling web pages?",
    choices: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS",
  },
  {
    id: 5,
    title: "The syntax of close method for document object is",
    choices: ["Close(doC)", " Close(object)", "Close(val)", "Close()"],
    answer: "Close()",
  },
  {
    id: 6,
    title: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface", "throws", "program", "short"],
    answer: "program",
  },
  {
    id: 7,
    title: "Which of the following is an interface?",
    choices: ["thread", "runnable", "date", "calendar"],
    answer: "thread",
  },
  {
    id: 8,
    title: "Where is the correct place to insert a JavaScript?",
    choices: [
      "the <head> section",
      "the <body> section",
      "both <head> and <body> sections",
      "anywere",
    ],
    answer: "both <head> and <body> sections",
  },
  {
    id: 9,
    title: "Which of the following is a server-side Java Script object?",
    choices: ["function", "file", "fileUpload", "date"],
    answer: "file",
  },
  {
    id: 10,
    title: "What language defines the behavior of a web page?",
    choices: ["HTML", "CSS", "XML", "JavaScript"],
    answer: "JavaScript",
  },
  {
    id: 11,
    title:
      "What java wrapper type is created when a JavaScript object is sent to Java?",
    choices: ["ScriptObject", "JavaObject	", "Jobject", "JSObject	"],
    answer: "JSObject",
  },
  {
    id: 12,
    title:
      "What java wrapper type is created when a JavaScript object is sent to Java?",
    choices: [
      "Semicolon",
      "Semicolon, Ampersand",
      "Ampersand, colon",
      "Ampersand, semicolon",
    ],
    answer: "Ampersand, semicolon",
  },
  {
    id: 13,
    title:
      "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
    choices: ["Eval", "ParseDoule", "ParseObject", "Efloat"],
    answer: "Eval",
  },
  {
    id: 14,
    title: "What is the alternate name for Java script?",
    choices: ["LimeScript	", "Both a and d", "ECMScript", "ECMAScript"],
    answer: "ECMAScript",
  },
  {
    id: 15,
    title: "What is the correct syntax for adding comments in JavaScript?",
    choices: [
      "<!This is a comment",
      "//This is a comment",
      "This is a comment ",
      "**This is a comment**",
    ],
    answer: "//This is a comment",
  },
  {
    id: 16,
    title: "What is the JavaScript syntax for printing values in Console?",
    choices: [
      "print(5)",
      "console.log(5);",
      "console.print(5); ",
      "print.console(5);",
    ],
    answer: "console.log(5);",
  },
  {
    id: 17,
    title:
      "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
    choices: ["strip()", "trim()", "stripped()", "trimmed()"],
    answer: "trim()",
  },
  {
    id: 18,
    title:
      "Which function of an Array object calls a function for each element in the array?",
    choices: ["forEach()", "every()", "forEvery()", "each()"],
    answer: "forEach()",
  },
  {
    id: 19,
    title: "Which was the first browser to support JavaScript?",
    choices: ["Mozilla Firefox", "Netscape", "Google Chrome", "IE"],
    answer: "Netscape",
  },
  {
    id: 20,
    title: "Which of the following is an advantage of using JavaScript?",
    choices: [
      "Increased interactivity.",
      "Less server interaction.",
      "Immediate feedback from the users.",
      "All of the above.",
    ],
    answer: "All of the above.",
  },
];

function startGame() {
  t = 45; //45 second countdown
  qCounter = 0; //question counter
  allQuestions = [...questions];
  myTimer();
  getQuestion();
}

function getQuestion() {
  if (qCounter >= questions.length) {
    localStorage.setItem("mostRecentScore", score); //save score to localstorage
    return window.location.assign("gameover.html"); // if questions run out, go to gameover screen
  }
  qCounter++;
  questioncounterText.textContent = qCounter + "/" + allQuestions.length;

  let qIndex = Math.floor(Math.random() * questions.length); //randam index for random quesrion
  let thisQuestion = questions[qIndex];

  questionEl.innerText = thisQuestion.title; //put what is asked,questions.title, in <p> in HTML
  correctAnswer = thisQuestion.answer;
  console.log(correctAnswer);

  for (var i = 0; i < 4; i++) {
    document.querySelector(".buttons").children[i].textContent =
      thisQuestion.choices[i]; //assign answer choice to the buttons
  }
  questions.splice(qIndex, 1); //take out the question asked
}

function checkAnswer(id) {
  let response = document.getElementById(id).textContent;
  if (response == correctAnswer) {
    score += 20;
    scoreText.innerText = score;
    document.getElementById(id).style.backgroundColor = "#2493d3";
    commentEl.textContent =
      "Great job! The correct anwser is " + response + ".";
  } else if (response !== correctAnswer) {
    document.getElementById(id).style.backgroundColor = "#a00b0b";
    commentEl.textContent = "This is not the right answer.";
  }

  setTimeout(function () {
    document.getElementById(id).style.backgroundColor = "#777777";
    commentEl.textContent = "";
    getQuestion();
  }, 800);
}

function myTimer() {
  t -= 1;
  mytime.innerHTML = t;
  if (t < 1) {
    t = 0;
    localStorage.setItem("mostRecentScore", score); //save score to localstorage
    setTimeout(function () {
      window.location.assign("gameover.html");
      window.clearInterval(update);
    }, 300);
  }
}
update = setInterval("myTimer()", 1000);

startGame();

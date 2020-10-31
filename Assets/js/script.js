// Need to set up all of my variables
let questions = [
  {
    question: "What is it called when a click event goes up the DOM tree?",
    choices: [
      "Event Trickling",
      "Event Targeting",
      "Event Bubbling",
      "Event Listening",
    ],
    answer: 1,
  },
  {
    question: "How do you add a new Element via Javascript?",
    choices: ["createDiv", "createClass", "createElement", "createTag"],
    answer: 1,
  },
  {
    question: "What does HTML mean?",
    choices: [
      "Hyper Text Mockup Language",
      "Hyper Text Markup Language",
      "Highly Ternary Mockup Language",
      "Howdy There Markup Language",
    ],
    answer: 1,
  },
  {
    question: "What is a Boolean?",
    choices: ["A Number", "A String", "A True or False", "A Not A Number"],
    answer: 1,
  },
  {
    question: "What is jQuery?",
    choices: [
      "A programming language",
      "A JS framework",
      "A CSS Library",
      "An HTML framework",
    ],
    answer: 1,
  },
  {
    question: "How do you use Bootstrap?",
    choices: [
      "As HTML Tags",
      "As JS replacement",
      "As Classes",
      "You don't use Bootstrap!",
    ],
    answer: 1,
  },
  {
    question: "What is Global Scope?",
    choices: [
      "Where your variables can be accessed anywhere",
      "Where your variables cannot be accessed anywhere",
      "Something to see something far with",
      "I have no clue!",
    ],
    answer: 1,
  },
  {
    question: "What is VS Code",
    choices: ["A website", "An IDE", "A Game", "A Programming Langauge"],
    answer: 1,
  },
];
var containerEl = document.querySelector("#container");
var startButtonEl = document.querySelector("#btn-start");
var countEl = document.querySelector("#count");
var count = 75;
var i = 0;

function createEl() {
  questionEl = document.createElement("h1");
  containerEl.appendChild(questionEl);
  containerEl.setAttribute(
    "style",
    "display:flex;flex-direction:column;text-align:center;margin:0px auto;justify-content:space-between;"
  );

  choiceEl1 = document.createElement("button");
  containerEl.appendChild(choiceEl1);

  choiceEl2 = document.createElement("button");
  containerEl.appendChild(choiceEl2);

  choiceEl3 = document.createElement("button");
  containerEl.appendChild(choiceEl3);

  choiceEl4 = document.createElement("button");
  containerEl.appendChild(choiceEl4);
}

// Need to create all of my functions and logic
containerEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    startQuestions();
    i++;
  }
});

function startTime() {
  i = 0;
  startButtonEl.setAttribute("style", "display:none;");
  createEl();
  startQuestions();
  i++;
  var timerInterval = setInterval(function () {
    count--;
    countEl.textContent = count;
    if (count === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function startQuestions() {
  questionEl.textContent = questions[i].question;
  choiceEl1.textContent = questions[i].choices[0];
  choiceEl2.textContent = questions[i].choices[1];
  choiceEl3.textContent = questions[i].choices[2];
  choiceEl4.textContent = questions[i].choices[3];
}

// Need to execute my functions
startButtonEl.addEventListener("click", startTime);

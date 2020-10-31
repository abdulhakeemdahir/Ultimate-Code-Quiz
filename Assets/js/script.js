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
    question: "Question number 2",
    choices: ["Choice 5", "Choice 6", "Choice 7", "Choice 8"],
    answer: 1,
  },
  {
    question: "Question number 3",
    choices: ["Choice 9", "Choice 10", "Choice 11", "Choice 12"],
    answer: 1,
  },
  {
    question: "Question number 4",
    choices: ["Choice 13", "Choice 14", "Choice 15", "Choice 16"],
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

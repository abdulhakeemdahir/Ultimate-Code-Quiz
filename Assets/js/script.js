// Need to set up all of my variables
let questions = [
  {
    question: "Question number 1",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
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

// Need to create all of my functions and logic
function startTime() {
  startButtonEl.setAttribute("style", "display:none;");
  startQuestions();
  var timerInterval = setInterval(function () {
    count--;
    countEl.textContent = count;
    if (count === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function startQuestions() {
  questionEl = document.createElement("h1");
  questionEl.textContent = questions[i].question;
  containerEl.appendChild(questionEl);
  containerEl.setAttribute(
    "style",
    "display:flex;flex-direction:column;text-align:center;width:50%;margin:0px auto;justify-content:space-between;"
  );

  choiceEl1 = document.createElement("button");
  choiceEl1.textContent = questions[i].choices[0];
  containerEl.appendChild(choiceEl1);

  choiceEl2 = document.createElement("button");
  choiceEl2.textContent = questions[i].choices[1];
  containerEl.appendChild(choiceEl2);

  choiceEl3 = document.createElement("button");
  choiceEl3.textContent = questions[i].choices[2];
  containerEl.appendChild(choiceEl3);

  choiceEl4 = document.createElement("button");
  choiceEl4.textContent = questions[i].choices[3];
  containerEl.appendChild(choiceEl4);
}

containerEl.addEventListener("click", function (event) {
  event.preventDefault();
  i = 0;
  if (event.target.matches("button")) {
    i++;
  }
});

// Need to execute my functions
startButtonEl.addEventListener("click", startTime);

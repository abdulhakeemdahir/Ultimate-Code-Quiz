// Need to set up my questions array
let questions = [
  {
    question: "What is it called when a click event goes up the DOM tree?",
    choices: [
      "Event Trickling",
      "Event Targeting",
      "Event Bubbling",
      "Event Listening",
    ],
    answer: "Event Bubbling",
  },
  {
    question: "What is it called when a click event goes up the DOM tree?",
    choices: [
      "Event Trickling",
      "Event Targeting",
      "Event Bubbling",
      "Event Listening",
    ],
    answer: "Event Bubbling",
  },
  {
    question: "How do you add a new Element via Javascript?",
    choices: ["createDiv", "createElement", "createClass", "createTag"],
    answer: "createElement",
  },
  {
    question: "What does HTML mean?",
    choices: [
      "Hyper Text Mockup Language",
      "Hyper Text Markup Language",
      "Highly Ternary Mockup Language",
      "Howdy There Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What is a Boolean?",
    choices: ["A True or False", "A Number", "A String", "A Not A Number"],
    answer: "A True or False",
  },
  {
    question: "What is jQuery?",
    choices: [
      "A programming language",
      "A JS framework",
      "A CSS Library",
      "An HTML framework",
    ],
    answer: "A JS framework",
  },
  {
    question: "How do you use Bootstrap?",
    choices: [
      "As HTML Tags",
      "As JS replacement",
      "You don't use Bootstrap!",
      "As Classes",
    ],
    answer: "As Classes",
  },
  {
    question: "What is Global Scope?",
    choices: [
      "Where your variables can be accessed anywhere",
      "Where your variables cannot be accessed anywhere",
      "Something to see something far with",
      "I have no clue!",
    ],
    answer: "Where your variables can be accessed anywhere",
  },
  {
    question: "What is VS Code?",
    choices: ["A website", "An IDE", "A Game", "A Programming Langauge"],
    answer: "An IDE",
  },
];

// Setting up my variables
var containerEl = document.querySelector("#container");
var startButtonEl = document.querySelector("#btn-start");
var countEl = document.querySelector("#count");
var highScoreEl = document.querySelector("#highscore");
highScoreEl.setAttribute("style", "display:none;");
var initialsInput = document.querySelector("#input");
var submitButton = document.querySelector("#submit");
var restartButton = document.querySelector("#restart");
answerEl = document.createElement("button");
var score = 0;
var count = 75;
// var timer = 1000;
var i = 0;

// Need to create all of my functions and logic
containerEl.addEventListener("click", function (event) {
  event.preventDefault();
  i;
  console.log(event.target.textContent);
  console.log(questions[i].answer);
  if (event.target.matches("button")) {
    var correctAnswer = rightAnswer(
      event.target.textContent,
      questions[i].answer
    );
  }
  console.log(correctAnswer);
  i++;
  startQuestions();
  console.log(correctAnswer);
});

//Form and Score submission
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;
  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score * 10);
  }
  initialEl = document.createElement("h1");
  initialEl.textContent = localStorage.getItem("initials");
  highScoreEl.appendChild(initialEl);
  scoreEl = document.createElement("h1");
  scoreEl.textContent = "Your score: " + score * 10;
  highScoreEl.appendChild(scoreEl);
});

//Setting up my initalizer function
function startTime() {
  i;
  startButtonEl.setAttribute("style", "display:none;");
  createEl();
  startQuestions();
  i++;
  //   console.log(questions[-1]);
  var timerInterval = setInterval(function () {
    count--;
    countEl.textContent = count;
    if (count === 0 || questions[i] === undefined) {
      clearInterval(timerInterval);
      containerEl.setAttribute("style", "display:none;");
      highScoreEl.setAttribute("style", "display:block;");
      highScoreEl = document.querySelector("#highscore");
      highScoreEl.setAttribute(
        "style",
        "display:flex;flex-direction:column;text-align:center;margin:0px auto;justify-content:space-between;"
      );
    }
  }, 1000);
}

//Function for looping through my questions
function startQuestions() {
  questionEl.textContent = questions[i].question;
  choiceEl1.textContent = questions[i].choices[0];
  choiceEl2.textContent = questions[i].choices[1];
  choiceEl3.textContent = questions[i].choices[2];
  choiceEl4.textContent = questions[i].choices[3];
}

//Setting up my rendering function
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

function rightAnswer(choice, choiceAnswer) {
  if (choice === choiceAnswer) {
    count = count + 10;
    score++;
    answerEl.textContent = "You're Right!";
    answerEl.setAttribute("style", "background-color:#a5d6a7;color:#272727;");
    containerEl.appendChild(answerEl);
    var delay = setInterval(function () {
      clearInterval(delay);
    }, 2000);
  }
  // alert("You're right");
  // return true;
  else {
    answerEl.textContent = "You're Wrong!";
    answerEl.setAttribute("style", "background-color:#ef9a9a;color:#272727;");
    containerEl.appendChild(answerEl);
    var delay = setInterval(function () {
      clearInterval(delay);
    }, 2000);
    count = count - 10;
    // alert("you're wrong!");
    // return false;
  }
}

// Need to execute my functions
startButtonEl.addEventListener("click", startTime);
// Play game again
restartButton.addEventListener("click", function (event) {
  window.location.reload();
});

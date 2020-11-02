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
var score = 0;
var count = 75;
// var timer = 1000;
var i = 0;

//Form and Score submission

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

// Need to create all of my functions and logic
containerEl.addEventListener("click", function (event) {
  event.preventDefault();
  //   console.log(event.target.textContent);
  //   console.log(questions[i - 1].answer);
  if (event.target.matches("button")) {
    var correctAnswer = rightAnswer(
      event.target.textContent,
      questions[i - 1].answer
    );
    console.log(score);
    startQuestions();
    i++;
  }
});

function rightAnswer(choice, choiceAnswer) {
  if (choice === choiceAnswer) {
    count = count + 5;
    score++;
    alert("You're right");
    return true;
  } else {
    count = count - 5;
    alert("you're wrong!");
    return false;
  }
}

//Setting up my initalizer function
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
      containerEl.setAttribute("style", "display:none;");
      scoreContainerEl = document.querySelector("#scorecontainer");
      scoreContainerEl.setAttribute(
        "style",
        "display:flex;flex-direction:column;text-align:center;margin:0px auto;justify-content:space-between;"
      );
      scoreEl = document.createElement("h1");
      scoreEl.textContent = "Here is your score " + score;
      scoreContainerEl.appendChild(scoreEl);
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

// Need to execute my functions
startButtonEl.addEventListener("click", startTime);



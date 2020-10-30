// Need to set up all of my variables
let questions = [{
    question: "Question number 1",
    choices: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    answer: 1
},
{
    question: "Question number 1",
    choices: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    answer: 1
},
{
    question: "Question number 1",
    choices: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    answer: 1
},
{
    question: "Question number 1",
    choices: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    answer: 1
},
]
let containerEl = document.querySelector("#container");
let startButtonEl = document.querySelector("#btn-start");
let countEl = document.querySelector("#count");
let count = 75;
let i = 0;

// Need to create all of my functions and logic
function startTime () {
    startButtonEl.setAttribute("style", "display:none;");
    let timerInterval = setInterval(function(){
        startQuestions();
        count--;
        countEl.textContent = count;
        if (count === 0){
            clearInterval(timerInterval);
        }
        

    }, 1000);
}

function startQuestions (){
    questionEl = document.createElement("h1");
    questionEl.textContent = questions.question[i];
    containerEl.appendChild(questionEl);

}

// Need to execute my functions

startButtonEl.addEventListener("click", startTime);
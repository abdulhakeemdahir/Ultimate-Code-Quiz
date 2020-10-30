// Need to set up all of my variables
let questions = [{
    question: "Question number 1",
    choices: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    answer: 1
},
{
    question: "Question number 2",
    choices: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    answer: 1
},
{
    question: "Question number 3",
    choices: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    answer: 1
},
{
    question: "Question number 4",
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
        count--;
        countEl.textContent = count;
        if (count === 0){
            clearInterval(timerInterval);
        }
        

    }, 1000);
}

function startQuestions (){
    
    questionEl = document.createElement("h1");
    questionEl.textContent = questions[1].question;
    containerEl.appendChild(questionEl);
    containerEl.setAttribute("style","display:flex;flex-direction:column;text-align:center;width:30%;margin:0px auto;justify-content:space-between;");

    choiceEl1 = document.createElement("button");
    choiceEl1.textContent = questions[1].choices[0];
    containerEl.appendChild(choiceEl1);

    choiceEl2 = document.createElement("button");
    choiceEl2.textContent = questions[1].choices[0];
    containerEl.appendChild(choiceEl2);

    choiceEl3 = document.createElement("button");
    choiceEl3.textContent = questions[1].choices[0];
    containerEl.appendChild(choiceEl3);

    choiceEl4 = document.createElement("button");
    choiceEl4.textContent = questions[1].choices[0];
    containerEl.appendChild(choiceEl4);

}

// Need to execute my functions

startQuestions();
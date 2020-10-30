Homework 4

We need to make a TIMED CODING QUIZ

- SetInterval to do the "timed" functionality
- ClearInterval to stop the timeout
- currentScore, timeLeft
- Var for questions that is an Array
- Var pointer/index - Current poistion in the question array

```
var questions = [
    {
        // Question text
        // List of Question Answers - Sub Array of Answers
        // When button is clicked can compare and see if its the correct choice / Index within array, value match, for loop
        // Correct Answer
        answer: "correct"
    }
    "What is your favorite color?"

    wait for click event
]

Given I am taking a code quiz

When I click the 'Start Button'

''

function startGame(){

}

THEN a timer starts and I am presented with a question

    * Set a starting score = 75
    * Start the interval to begin the score countdown
    * Present question = create new HTML elements for my questions
    > Set the #question dics innerHtml to = "";
     > Append a H2 for the quesiton text
     > Append a new button for each choice

     > var button = document.createElement("button");
     > button.textContent = questionText
     >button.setAttribute("data-value", questionText);


WHEN I answer a question

* When user clicks one of my answer buttons, then I am given another question

WHEN I answer a question incorrectly

    event.target.matches("button")

> var clickButtonContent = event.target.textContent;
> var clickButtonValue = event.target.getAttribute("data-value", questionText);

> The question is correct when our clickButtonValue == questions[0, pointer].answer

THEN time is subtracted from the clock
> startingScore = subtract points from current score/time

THEN I am presented with another question
* Increase our pointer by 1
* We need to

WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

import {questions} from "./questions.js";

let startButton = document.querySelector("#start-button");
let timeDisplay = document.querySelector("#time-display");
let infoDisplay = document.querySelector("#info");
let questions = questions;
let questionsDisplay = document.querySelector("#questions-display");
let quizDisplay = document.querySelector(".quiz");
let timeRemaining = 75;


function startTimer() {
    setInterval(function () {
        timeRemaining = timeRemaining - 1;
        timeDisplay.textContent = "Time Remaining: " + timeRemaining;
    }, 1000);

    if (timeRemaining === 0) {
        clearInterval;
    };
};

function buildQuiz() {
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.choices){
                
                choices.push(
                    `<label>
                    <input type="radio" name="name${questionNumber}" value="${number}"
                    ${number} :
                    ${currentQuestion.choices[number]}
                    <label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.name} </div>
                <div class="answers"> ${choices.join(' ')} </div>`
            );
        }
    );
        quizDisplay.innerHTML = output.join(' ');
};

// When the start quiz button is clicked (add event listerning to the start button)
// & start the timer (set Interval)
startButton.addEventListener("click", startTimer()
);

// Update the DOM with the first question and display the choices assoc with the question.
startButton.addEventListener("click", buildQuiz() );





// If user selected the correct answer
// Load the next question + the assoc choices to the DOM
// Tell the user they selected the correct answer


// If user selected the wrong answer
// Decrease the timer by 10 seconds
// Load the next question + the assoc choices to the DOM
// Tell the user that they selected the wong answer


// Also need a way to check for game over
// Game over when:
// 1. Time becomes 0 or <0
// 2. User finished all the questions available


// What to do once game is finished
// 1. Display result
// Clear the DOM
// Ask for initial/username
// Show the final score


// 2. Prompt the user to start a new game
// Store the result in local storage


let startButton = document.querySelector("#start-button");
let timeDisplay = document.querySelector("#time-display");
let infoDisplay = document.querySelector("#info");
let questionsDisplay = document.querySelector("#questions-display");
let timeRemaining = 75;

function startTimer() {
    setInterval(function () {
        timeRemaining = timeRemaining - 1;
        timeDisplay.textContent = "Time Remaining: " + timeRemaining;
    }, 1000);
};

function buildQuiz() {

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


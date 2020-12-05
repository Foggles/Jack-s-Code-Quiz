// Assigning the the name and choices from questions object to const variables
let questionElement = questions.question;
let answerButtonsElement = questions.choices;

debugger;

// Grabbing elements from index.html
const startButton = document.getElementById("start-button");
const questionContainerElement = document.getElementById("question-container");

// Variables to allow for questions to be randomised
let shuffledQuestions;
let currentQuestionIndex;

// Let variables for the timer to function
let timeDisplay = document.getElementById("time-display");
let timeRemaining = 75;

// Function to start the timer
function startTimer() {
    setInterval(function () {
        timeRemaining = timeRemaining - 1;
        timeDisplay.textContent = "Time Remaining: " + timeRemaining;
    }, 1000);
};

// Function to execute once start button has been clicked
function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    shuffledQuestions.questionElement.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
};

// Function to display next question once the previous question has been answered
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

// Function to display question
function showQuestion(questionElement) {
    questionElement.innerText = questions.question;
};

function selectAnswer() {

};

// When the start quiz button is clicked (add event listerning to the start button)
// & start the timer (set Interval)
startButton.addEventListener("click", startTimer);

// Update the DOM with the first question and display the choices assoc with the question.
startButton.addEventListener("click", startQuiz);





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






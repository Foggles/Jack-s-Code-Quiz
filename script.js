// Grabbing elements from index.html
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const startButton = document.getElementById("start-button");
const questionContainerElement = document.getElementById("question-container");
let highscore = document.getElementById("highscore");
let gameOverScreen = document.getElementById("game-over");

let timeScore;
let textArea;
let submit;

// Variables to allow for questions to be randomised
let currentQuestionIndex;

// Let variables for the timer to function
let timeDisplay = document.getElementById("time-display");
let timeRemaining = 75;

// Function to start the timer
function startTimer() {
    setInterval(function () {
        timeRemaining = timeRemaining - 1;
        timeDisplay.textContent = "Time Remaining: " + timeRemaining;

        if (timeRemaining < 0) {
            clearInterval(startTimer);
            timeScore = timeRemaining;
            console.log(timeScore);
            highscore.textContent = "";

            questionElement.innerHTML = "";
            answerElement.innerHTML = "";

            questionElement.textContent = "All done!";
            let finalScore = document.createElement("p");

            let initials = document.createElement("p");
            let textArea = document.createElement("textarea");
            textArea.textContent = "";
            textArea.classList.add("initials");

            let submit = document.createElement("button");
            submit.textContent = "Submit";
            submit.classList.add("btn");

            finalScore.textContent = "Your final score is " + timeRemaining;
            initials.textContent = "Enter initials:";

            gameOverScreen.appendChild(finalScore);
            gameOverScreen.appendChild(initials);
            gameOverScreen.appendChild(textArea);
            gameOverScreen.appendChild(submit);

            timeRemaining = undefined;
            timeDisplay.textContent = timeScore;

            submit.addEventListener("click", function () {
                localStorage.setItem("Score", timeScore);
    
                textAreaValue = document.querySelector(".initials").value;
                localStorage.setItem("Initials", textAreaValue);
            });

        };

    }, 1000);
};

// Function to execute once start button has been clicked
function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    showQuestion(questions[currentQuestionIndex]);
};

// Function to display question
function showQuestion(questionObj) {
    questionElement.innerText = questionObj.question;
    //   answerElement.innerText = questionObj.choices;

    for (let index = 0; index < questionObj.choices.length; index++) {
        let answerButton = document.createElement("button");
        answerButton.innerText = questionObj.choices[index].answer;
        answerButton.classList.add("btn", "answerButton");
        answerButton.addEventListener("click", selectAnswer);
        answerButton.setAttribute("value", questionObj.choices[index].isAnswer);
        answerElement.appendChild(answerButton);
    };
    // DISPLAY ANSWERS
    // ATTACH EVENT TO ANSWERS
    // EVENT SHOULD INCREASE currentQuestionIndex

};

function selectAnswer() {
    if (this.getAttribute("value") === "true") {
        currentQuestionIndex = currentQuestionIndex + 1;
    };

    if (this.getAttribute("value") === "false") {
        timeRemaining = timeRemaining - 10;
        currentQuestionIndex = currentQuestionIndex + 1;
    };

    questionElement.innerHTML = "";
    answerElement.innerHTML = "";

    if (currentQuestionIndex === 5) {
        clearInterval(startTimer);
        timeScore = timeRemaining;
        console.log(timeScore);
        highscore.textContent = "";

        questionElement.innerHTML = "";
        answerElement.innerHTML = "";

        questionElement.textContent = "All done!";
        let finalScore = document.createElement("p");

        let initials = document.createElement("p");
        let textArea = document.createElement("textarea");
        textArea.textContent = "";
        textArea.classList.add("initials");

        let submit = document.createElement("button");
        submit.textContent = "Submit";
        submit.classList.add("btn");

        finalScore.textContent = "Your final score is " + timeRemaining;
        initials.textContent = "Enter initials:";

        gameOverScreen.appendChild(finalScore);
        gameOverScreen.appendChild(initials);
        gameOverScreen.appendChild(textArea);
        gameOverScreen.appendChild(submit);

        timeRemaining = undefined;
        timeDisplay.textContent = timeScore;

        submit.addEventListener("click", function () {
            localStorage.setItem("Score", timeScore);

            textAreaValue = document.querySelector(".initials").value;
            localStorage.setItem("Initials", textAreaValue);
        });

    }

    else {
        showQuestion(questions[currentQuestionIndex]);
    };

};


// When the start quiz button is clicked (add event listerning to the start button)
// & start the timer (set Interval)
startButton.addEventListener("click", startTimer);
// Update the DOM with the first question and display the choices assoc with the question.
startButton.addEventListener("click", startQuiz);

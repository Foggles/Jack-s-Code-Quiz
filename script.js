// Grabbing elements from index.html
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const startButton = document.getElementById("start-button");
const questionContainerElement = document.getElementById("question-container");
let highscore = document.getElementById("highscore");
let gameOverScreen = document.getElementById("game-over");
let timeDisplay = document.getElementById("time-display");

// Defining undefined variables to be used later
let timeScore;
let textArea;
let submit;
let interval;

// Variable to store the current index
let currentQuestionIndex;

// Variable to store timeRemaining
let timeRemaining = 75;

// Function to start the timer
function startTimer() {
    interval = setInterval(function () {
        timeRemaining = timeRemaining - 1;
        timeDisplay.textContent = "Time Remaining: " + timeRemaining;

        // If timeRemaining = 0, Game Over
        if (timeRemaining === 0) {
            clearInterval(interval);
            timeScore = timeRemaining;
            timeDisplay.textContent = timeRemaining;
            console.log("Your score is " + timeScore);
            highscore.textContent = "";

            questionElement.innerHTML = "";
            answerElement.innerHTML = "";

            questionElement.textContent = "All done!";
            let finalScore = document.createElement("p");

            let initials = document.createElement("p");
            let textArea = document.createElement("textarea");
            textArea.textContent = "";
            textArea.classList.add("initials");

            let submit = document.createElement("a");
            submit.href = "./highscores.html";

            let submitButton = document.createElement("button");
            submitButton.textContent = "Submit";
            submitButton.classList.add("btn");
            submit.appendChild(submitButton);

            finalScore.textContent = "Your final score is " + timeRemaining;
            initials.textContent = "Enter initials:";

            gameOverScreen.appendChild(finalScore);
            gameOverScreen.appendChild(initials);
            gameOverScreen.appendChild(textArea);
            gameOverScreen.appendChild(submit);

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

    // For loop to build the answer buttons with all 4 answer possibilities
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

// Function to determine if the answer selected is true or false
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

    // Once all 5 questions have been answered, Game Over
    if (currentQuestionIndex === 5) {
        clearInterval(interval);
        timeScore = timeRemaining;
        timeDisplay.textContent = timeRemaining;

        console.log("Your score is " + timeScore);
        highscore.textContent = "";

        questionElement.innerHTML = "";
        answerElement.innerHTML = "";

        questionElement.textContent = "All done!";
        let finalScore = document.createElement("p");

        let initials = document.createElement("p");
        let textArea = document.createElement("textarea");
        textArea.textContent = "";
        textArea.classList.add("initials");

        let submit = document.createElement("a");
        submit.textContent = "Submit";
        submit.href = "./highscores.html";
        submit.classList.add("btn");

        finalScore.textContent = "Your final score is " + timeRemaining;
        initials.textContent = "Enter initials:";

        gameOverScreen.appendChild(finalScore);
        gameOverScreen.appendChild(initials);
        gameOverScreen.appendChild(textArea);
        gameOverScreen.appendChild(submit);

        // Functionality for Local Storage
        submit.addEventListener("click", function () {
            localStorage.setItem("Score", timeScore);

            textAreaValue = document.querySelector(".initials").value;
            localStorage.setItem("Initials", textAreaValue);
        });

    }

    // If not all 5 questions have been answered, load next question
    else {
        showQuestion(questions[currentQuestionIndex]);
    };

};


// When the start quiz button is clicked (add event listerning to the start button)
// & start the timer (set Interval)
startButton.addEventListener("click", startTimer);
// Update the DOM with the first question and display the choices assoc with the question.
startButton.addEventListener("click", startQuiz);

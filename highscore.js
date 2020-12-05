// Grabbing elements from highscores.html
let highList = document.querySelector(".highscore-list");
let clearButton = document.querySelector("#clear-high");
let checkButton = document.querySelector(".check-btn");

// Adding event listeners to the two buttons
checkButton.addEventListener("click", checkForScores);
clearButton.addEventListener("click", clearScores);

let displayText;

// Function to check for any highscores in the local storage
function checkForScores() {
    if (localStorage.getItem("Score") !== null && localStorage.getItem("Initials") !== null) {
        displayText = document.createElement("p");

        displayText.classList.add("bar");

        let scoreText = localStorage.getItem("Score");
        let initialsText = localStorage.getItem("Initials");

        displayText.textContent = initialsText + " - " + scoreText;

        highList.appendChild(displayText);

    }
    
    else {
        let nothing = document.createElement("p");
        nothing.textContent = "No Highscore Available";
        highList.appendChild(nothing);
    };

};

// Function to clear the local storage and the screen
function clearScores() {
    displayText.textContent = "";
    localStorage.clear();
}



// submit.addEventListener("click", function () {
//     localStorage.setItem("Score", timeScore);

//     textAreaValue = document.querySelector(".initials").value;
//     localStorage.setItem("Initials", textAreaValue);
// });
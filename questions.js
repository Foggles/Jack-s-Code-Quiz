// Store questions as objects within objects:
// 1. Name
// 2. Choices
// 3. Answer
const questions = [
    // Object for first question
    { 
        name: "Commonly used data types DO NOT include: ",
        choices: [
            {
                1: "Strings",
                2: "Booleans",
                3: "Alerts",
                4: "Numbers"
            },

            correctAnswer = "3"
        ],
    },

    // Object for second question
    { 
        name: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            {
                1: "Quotes",
                2: "Curly Brackets",
                3: "Parentheses",
                4: "Square Brackets"
            },

            correctAnswer = "3"
        ],
    },

    // Object for third question
    { 
        name: "Arrays in JavaScript can be used to store ____.",
        choices: [
            {
                1: "Numbers & Strings",
                2: "Other Arrays",
                3: "Booleans",
                4: "All of the Above"
            },

            correctAnswer = "4"            
        ],
    },

    // Object for fourth question
    { 
        name: "String values must be enclosed within ____ when being assigned to variables.",
        choices: [
            {
                1: "Commas",
                2: "Curly Brackets",
                3: "Quotes",
                4: "Parentheses"
            },

            correctAnswer = "3"
        ],
    },

    // Object for fifth question
     { 
        name: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            {
                1: "JavaScript",
                2: "Terminal/Bash",
                3: "For Loops",
                4: "console.log"
            },

            correctAnswer = "4"
        ],
    },
];

export {questions};
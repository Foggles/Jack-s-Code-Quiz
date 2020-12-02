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
                name: "1. Strings",
                isAnswer = false,
            },

            {
                name: "2. Booleans",
                isAnswer = false,
            },

            {
                name: "3. Alerts",
                isAnswer = true,
            },

            {
                name: "4. Numbers",
                isAnswer = false,
            },
        ],
    },

    // Object for second question
    { 
        name: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            {
                name: "1. Quotes",
                isAnswer = false,
            },

            {
                name: "2. Curly Brackets",
                isAnswer = false,
            },

            {
                name: "3. Parentheses",
                isAnswer = true,
            },

            {
                name: "4. Square Brackets",
                isAnswer = false,
            },
        ],
    },

    // Object for third question
    { 
        name: "Arrays in JavaScript can be used to store ____.",
        choices: [
            {
                name: "1. Numbers & Strings",
                isAnswer = false,
            },

            {
                name: "2. Other Arrays",
                isAnswer = false,
            },

            {
                name: "3. Booleans",
                isAnswer = false,
            },

            {
                name: "4. All of the Above",
                isAnswer = true,
            },
        ],
    },

    // Object for fourth question
    { 
        name: "String values must be enclosed within ____ when being assigned to variables.",
        choices: [
            {
                name: "1. Commas",
                isAnswer = false,
            },

            {
                name: "2. Curly Brackets",
                isAnswer = false,
            },

            {
                name: "3. Quotes",
                isAnswer = true,
            },

            {
                name: "4. Parentheses",
                isAnswer = false,
            },
        ],
    },

    // Object for fifth question
     { 
        name: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            {
                name: "1. JavaScript",
                isAnswer = false,
            },

            {
                name: "2. Terminal / Bash",
                isAnswer = false,
            },

            {
                name: "3. For Loops",
                isAnswer = false,
            },

            {
                name: "4. console.log",
                isAnswer = true,
            },
        ],
    },
];


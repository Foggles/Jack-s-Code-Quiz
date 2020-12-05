// Store questions as objects within objects:
// 1. Question
// 2. Choices
// 3. Answer

const questions = [
    // Object for first question
    { 
        question: "Commonly used data types DO NOT include: ",
        choices: [
            {
                answer: "1. Strings",
                isAnswer:false,
            },

            {
                answer: "2. Booleans",
                isAnswer:false,
            },

            {
                answer: "3. Alerts",
                isAnswer:true,
            },

            {
                answer: "4. Numbers",
                isAnswer:false,
            },
        ],
    },

    // Object for second question
    { 
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            {
                answer: "1. Quotes",
                isAnswer:false,
            },

            {
                answer: "2. Curly Brackets",
                isAnswer:false,
            },

            {
                answer: "3. Parentheses",
                isAnswer:true,
            },

            {
                answer: "4. Square Brackets",
                isAnswer:false,
            },
        ],
    },

    // Object for third question
    { 
        question: "Arrays in JavaScript can be used to store ____.",
        choices: [
            {
                answer: "1. Numbers & Strings",
                isAnswer:false,
            },

            {
                answer: "2. Other Arrays",
                isAnswer:false,
            },

            {
                answer: "3. Booleans",
                isAnswer:false,
            },

            {
                answer: "4. All of the Above",
                isAnswer:true,
            },
        ],
    },

    // Object for fourth question
    { 
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: [
            {
                answer: "1. Commas",
                isAnswer:false,
            },

            {
                answer: "2. Curly Brackets",
                isAnswer:false,
            },

            {
                answer: "3. Quotes",
                isAnswer:true,
            },

            {
                answer: "4. Parentheses",
                isAnswer:false,
            },
        ],
    },

    // Object for fifth question
     { 
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            {
                answer: "1. JavaScript",
                isAnswer:false,
            },

            {
                answer: "2. Terminal / Bash",
                isAnswer:false,
            },

            {
                answer: "3. For Loops",
                isAnswer:false,
            },

            {
                answer: "4. console.log",
                isAnswer:true,
            },
        ],
    },
];
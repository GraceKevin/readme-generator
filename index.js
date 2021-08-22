// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github Username? (Required)',
        validate: (Username) => {
            if (Username) {
                return true;
            } 
            else {
                console.log("Please enter your Github Username.");
            }
        }
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of the project? (Required)',
        validate: (Title) => {
            if (Title) {
                return true;
            }
            else {
                console.log("Please enter the title of your project.");
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'How would you describe the project? (Required)',
        validate: (Description) => {
            if (Description) {
                return true
            }
            else {
                console.log("Please enter a description for the project.");
            }
        }
    },
    {
        type: "input",
        name: "yourEmail",
        message: "Please provide your email address: (Required)",
        validate: (yourEmail) => {
            if (yourEmail) {
                return true
            }
            else {
                console.log("Please enter your email address.");
            }
        }
    },
    {
        type: "list",
        name: "License",
        message: "Which license will be included in the project? (Required)",
        choices: ["MIT", "Apache", "GNP", "None"],
        validate: (License) => {
            if (License) {
                return true
            }
            else {
                console.log("Please select an option for the license. Select none if none apply");
            }
        }
    },
    {
        type: "input",
        name: "Installation",
        message: "Which command is used  to run installation of the project?",
        default: "npm install"
    },
    {
        type: "input",
        name: "Test",
        message: "Which command is used to run a test?",
        default: "npm run test"
    },
    {
        type: "input",
        name: "Usage",
        message: "What does any users need to know regarding the usage of this repository? (Required)",
        validate: (Usage) => {
            if (Usage) {
                return true
            }
            else {
                console.log("Please enter how this project can be utilized.");
            }
        }
    },
    {
        type: "input",
        name: "Contributing",
        message: "What does any users need to know regarding contibuting to this repository? (Required)",
        validate: (Contributing) => {
            if (Contributing)  {
                return true
            } 
            else {
                console.log("Please indicate to users how they may be able to contribute.");
            }
        }
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw (err);
            // display 
            console.log("ERROR");
    })
};

// Create a function to initialize app
function init() {
    // console.log(promptUser);
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("Readme.md", generate(userInput))
    })
};

// Function call to initialize app
init();

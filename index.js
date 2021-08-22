// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generate = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'How would you describe the project?',
    },
    {
        type: "input",
        name: "Email",
        message: "Please provide your email address:"
    },
    {
        type: "list",
        name: "License",
        message: "Which license will be included in the project?",
        choices: ["MIT", "Apache", "GNP", "None"]
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
        message: "What does any users need to know regarding the usage of this repository?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What does any users need to know regarding contibuting to this repository?"
    },
];

const promptUser = () => {
    return inquirer
    .prompt(questions);
}

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
    inquirer.prompt(promptUser)
    .then(function (userInput) {
        writeToFile("Readme.md", generate(userInput))
    })
};

// Function call to initialize app
init();

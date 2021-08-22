// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');

// Create an array of questions for user input
const promptUser = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe the project?',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw (err);
            // display 
            console.log("ERR");
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

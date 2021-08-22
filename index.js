// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const (writeToFile) = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
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
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

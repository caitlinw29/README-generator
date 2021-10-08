//add libraries
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
const path = require('path');

//questions for inquirer
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What are the licenses?',
        choices: ['Apache', 'Boost', 'MIT', 'IBM'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
];

//Set up function to write answers in file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
 }

//inquire the questions, then put answers in a writeToFile function aimed at the README
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("generated_README.md", markdown({...answers}));
        });
}

// Function call to initialize app
init();





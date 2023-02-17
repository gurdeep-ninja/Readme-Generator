const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Add project title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add project description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Add installation guidelines:',
        name: 'installation',
    },  
    {
        type: 'input',
        message: 'Add usage / instructions:',
        name: 'usage',
    },  
    {
        type: 'list',
        message: 'Select a license type:',
        choices: [
            "Apache License 2.0",
            "MIT License",
            "GNU General Public License v3.0",
            "Mozilla Public License 2.0"
        ],
        name: 'license',
    },  
    {
        type: 'input',
        message: 'Please enter how others can contribute:',
        name: 'contributing',
    },  
    {
        type: 'input',
        message: 'Add test instructions: ',
        name: 'tests',
    },  
    {
        type: 'input',
        message: 'Your github username: ',
        name: 'github',
    },  
    {
        type: 'input',
        message: 'Your email address: ',
        name: 'email',
    },  
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
      const data = generateMarkdown(response);
      console.log(data)

    }
    );    

}

// function call to initialize program
init();

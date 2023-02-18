// node.js require function to include modules
// Include the file system module
const fs = require("fs");

// Include the path module
const path = require('path');

// Include the inquirer module
const inquirer = require("inquirer");

// Include a custom module that generates our markdown code
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        // Title
        type: 'input',
        message: 'Add project title:',
        name: 'title',
        // Added a default title
        default: 'Default Project Title'
    },
    {
        // Description
        type: 'input',
        message: 'Add project description:',
        name: 'description',
        // Added a default description
        default: "Vivamus id maximus ipsum. Donec quis eleifend leo, vitae pulvinar eros. Donec dapibus eros finibus mi rutrum consectetur."
    },
    {
        // Installation instructions
        type: 'input',
        message: 'Add installation guidelines:',
        name: 'installation',
    },
    {
        // Usage instructions
        type: 'input',
        message: 'Add usage / instructions:',
        name: 'usage',
    },
    {
        // License type
        type: 'list',
        message: 'Select a license type:',
        choices: [
            "None",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "Mozilla Public License 2.0"
        ],
        name: 'license',
    },
    {
        // Contribution 
        type: 'input',
        message: 'Please enter how others can contribute:',
        name: 'contributing',
    },
    
    {
        // Tests
        type: 'input',
        message: 'Add test instructions: ',
        name: 'tests',
    },
    {
        // GitHub username
        type: 'input',
        message: 'Your github username: ',
        name: 'github',
    },
    {
        // Email address
        type: 'input',
        message: 'Your email address: ',
        name: 'email',
    },
];

// function to write README file
function writeToFile(fileName, data) {

    // Ise the writeFile() method of the fs module to write the file with data
    // the Path module is used to determine the file system separator (i.e Windows/Linux etc)
    fs.writeFile(`output${path.sep}${fileName}`, data, (error) =>

        // Upon the call back (success or failure), display the result to the user
        // An error is displayed if theres an issue
        // If successful, the file name is displayed to the user
        error ? console.error(error) : console.log(`${fileName} created successfully!`)
    )
}

// function to initialize program
function init() {
    // using the inquirer module to prompt user questions regarding the README.md file to be generated.

    inquirer
        // The prompt is taking an array of objects which has all the questions
        .prompt(questions)

        // When the user finishes answering the questions, proceed with the response data returned 
        .then((response) => {

            // call the generateMarkDown() function by passing the user input and assign to a variable called data
            // data will be returned as a string containing MARKDOWN text which is used to write the README.md file

            const data = generateMarkdown(response);

            // Call the writeToFile() function
            // First parameters is the file name we would like to write to
            // Second parameter is the contents we would like to wring into the file.

            writeToFile("README.md", data);
        }
        );

}

// function call to initialize program
init();
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const name = "";
const utlis = require("./utils/");
// TODO: Create an array of questions for user input
inquirer
    .prompt = [
        {
            type: "input",
            message: "What is your project title",
            name: "project",
        },
        {
            type: "input",
            message: "What is your URL",
            name: "url",
        },
        {
            type: "input",
            message: "What is the instalation instructions",
            name: "install",
        },
        {
            type: "input",
            message: "What is the usage instructions",
            name: "usage",
        },
        {
            type: "input",
            message: "Enter credits for your project",
            name: "credit",
        },
        {
            type: "input",
            message: "What is the description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "What is your modivation",
            name: "modivation",
        },
        {
            type: "input",
            message: "Why did you build this project",
            name: "build",
        },
    ]
.then(response) 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile()
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

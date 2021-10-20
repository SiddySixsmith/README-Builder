// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "project",
    },
    {
        type: "input",
        message: "What is the instalation instructions?",
        name: "install",
    },
    {
        type: "input",
        message: "What is the usage instructions?",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter credits for your project?",
        name: "credit",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What was your modivation?",
        name: "modivation",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "build",
    },
    {
        type: "input",
        message: "image locations of testing",
        name: "image",
    },
    {
        type: "input",
        message: "video locations of testing",
        name: "video",
    },
    {
        type: "input",
        message: "link to code",
        name: "code",
    },
    {
        type: "list",
        message: "What licence applies to you?",
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            "BSD T-Clause 'Simplified' License",
        ],
        name: "license"
    },
    {
        type: "input",
        message: "Want to contrubite?",
        name: "contribute",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to initialize app
async function init() {
    await inquirer.prompt(questions)
    .then ((response) => { 
    const data = generateMarkdown(response);
    console.log(data);
    fs.writeFileSync(`${response.project}-README.md`, data);
        console.log("Successfully written responses to README.md");
  });
} 
// Function call to initialize app
init();

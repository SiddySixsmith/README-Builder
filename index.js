// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title",
        name: "project",
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
    {
        type: "input",
        message: "Link to live demo",
        name: "demo",
    },
    {
        type: "input",
        message: "link to code",
        name: "code",
    },
    {
        type: "list",
        message: "What licence would you like",
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            "BSD T-Clause 'Simplified' License",
            "Creative Commons Zero v1.0 Universal",
        ],
        name: "license"
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
    fs.writeFileSync("README.md", data);
        console.log("Successfully written responses to README.md");
  });
} 
// Function call to initialize app
init();

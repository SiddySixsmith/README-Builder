// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const name = "";
const utlis = require("./utils/generateMarkdown");
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
            type: "select",
            message: "What licence would you like",
            choice: ['Apache License 2.0','GNU General Public License v3.0', 'MIT License' ],
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
    ]
.then((response) => {
    const fileName = `README.md`
}
)
// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, utlis, (err) =>
    err ? console.log(err) : console.log("sucess"));
};
console.log(response);

function promptUser() {
    return inquirer.prompt(choices);

// TODO: Create a function to initialize app
async function init() {
    try {
      const response = await promptUser();    
   // Generate result based on responses
      const readMeText = generateMarkdown(response);
      // Write to DEMO-README.md
      await writeFile("README.md", readMeText);
    // Log message when file is generated
      console.log("Successfully written responses to DEMO-README.md");
    } catch (err) {
      console.log(err);
    }
  }
}

// Function call to initialize app
init();

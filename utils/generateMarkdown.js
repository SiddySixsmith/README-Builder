// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.project}

  ## Description
  ${response.description}
  
  - what was your modivation?
  ${response.modivation}
  - Why did you build this project?
  ${response.build}


  ## Installation
  ${response.install}

  ## Usage
  ${response.usage}

  ## Credits 
  ${response.credit}

 ## License
 ${response.license}

 ## Live Demo and Code
 ${response.demo}
 ${response.code}
`;
}

module.exports = generateMarkdown;

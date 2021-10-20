const licenseInfo = [
  {
    name: "Apache License 2.0",
    link: "https://www.apache.org/licenses/LICENSE-2.0",
  },
  {
    name: "GNU General Public License v3.0",
    link: "https://www.gnu.org/licenses/gpl-3.0.en.html",
  },
  {
    name: "MIT License",
    link: "https://choosealicense.com/licenses/mit/",
  },
  {
    name: "BSD T-Clause 'Simplified' License",
    link: "https://opensource.org/licenses/BSD-2-Clause",
  },


];

function generateMarkdown(response) {
  let licenseResponse = response.license.replace(/ /g, "%25");
  let licenseURL = "";

  for (var i = 0; i < licenseInfo.length; i++) {
    if (response.license === licenseInfo[i].name) {
      licenseURL = licenseInfo[i].link;
    }
  }
  return `
  # ${response.project}\n ![GitHub license](https://img.shields.io/badge/license-${licenseResponse}-blue.svg)
  
<p align="center">
  <a href=${response.code}><strong>Explore the docs »</strong></a>
  .
  <a href=${response.demo}>View Demo</a>
</p>

  ## Description
  ${response.description}

  ## Table of Contents
  
  * [About The Project](#about-the-project)
  * [Modivation](#what-was-your-modivation)
  * [Installation](#Installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Testing](#testing)
  * [Questions](#questions)
    
  ## About the project

  ### - Why did you build this project?
  ${response.build}\n


  ## Installation
  ${response.install}

  ## Usage
  ${response.usage}

  ## Credits 
  ${response.credit}

 ## License
 Copyright (c) [2021] \n
 The license is ${response.license} \n
 Read more about it at ${licenseURL}.

 ## Contrubuting Guidelines
  ${response.contribute}

 ## Testing
${response.image}

 ## Questions
 If you have any questions or issues with this application please feel free let me know on my profile 
 [issues](https://github.com/${response.github}) or email <${response.email}>
`;
}

module.exports = generateMarkdown;

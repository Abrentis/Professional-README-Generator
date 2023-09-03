function generateMarkdown(data) {
  // Function that returns what type of license was selected and creates an interactable button with an anchored link that leads to websites containing information on a particular license
  getLicense = (data) => {
    let licenseBadge = "";
    if (data.license == 'MIT') {
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (data.license == 'Apache 2.0') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (data.license == 'IBM') {
      licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    return licenseBadge;
  };

  // Template literal that includes all content found within the ProfessionalREADME.md file
  return `# ${data.title} ${getLicense(data)}

  ## Description
  ${data.description}

  ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ### How to reach me:
  #### GitHub Username: ${data.username}
  #### GitHub Link: https://github.com/${data.username}
  #### Email: ${data.email}

  `;
}
// Exports the function so that the index.js file can interact with it
module.exports = generateMarkdown;
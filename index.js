const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
// Prompted questions using the Inquirer package
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the steps required to install your application.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information of your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select which license you will be using for this project:',
            choices: ['MIT', 'Apache 2.0', 'IBM']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the guidelines for contributing to this work.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Include test instructions for this application.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        }
    ])
// Data gathered from user is then processed through the generateMarkdown.js file and creates a new ProfessionalREADME.md file.
.then((data) => {
    const READMEContent = generateMarkdown(data);

    fs.writeFile('ProfessionalREADME.md', READMEContent, (err) => 
    err ? console.log(err) : console.log('Successfully created ProfessionalREADME.md.'))
})
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
function main() {
    console.log(`starting`);
    const questions = [
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide instructions examples for use.",
            name: "instructionExample"
        },
        {
            type: "input",
            message: "provide License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
            name: "contributors"
        },
        {
            //how to ask for user image?
        },
        {
            type: "input",
            message: "Please enter your GitHub user email.",
            name: "email"
        }
    ]
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!! DOES SOMETHING GO HERE?
            // const gitUsername = answers.username;
            // const projectTitle = answers.projectTitle;
            // const projectDescription = answers.projectDescription;
            // const instruction = answers.instruction;
            // const instructionExample = answers.instructionExample;
            // const licenseName = answers.licenseName;
            // const contributors = answers.contributors;
            // const email = answers.email;

            // let allAnswers = [gitUsername, projectTitle, projectDescription, instruction, instructionExample, licenseName, contributors, email];
                console.log("we are inside the promise from inquirer");
          
            // writeToFile(fileName, data);


        })
        .catch(error => {
            console.log("there's an error somewhere dumbass")
        })


};
main();

function writeToFile(fileName, data) {
    //pass in answers from questions
    // //create an md file
    // fs.writeFile('readme.md', allAnswers, function (err) {
    //     if (err) throw err;
    //     console.log('ReadMe Created!');
    // });
    //create syntax for questions preceding answers, aka rest of the readme file

}




function init() {
    //how am I incorporating this function if I'm writing above 
}

init();

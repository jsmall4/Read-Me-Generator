// TODO: Include packages needed for this application
const {prompt} = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", name: "hello", message: "What is your name?" },
  {
    type: "input",
    name: "project",
    message: "what is the name of your project?",
  },
  {
    type: "checkbox",
    name: "type",
    message: "which tech did you use?",
    choices: ["Javascript", "HTML", "CSS"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then((myName) => {
    generateMarkdown(myName);
  });
}

// Function call to initialize app
init();

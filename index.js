// TODO: Include packages needed for this application
const { prompt } = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", name: "title", message: "What is your projects title?" },

  { type: "input", name: "name", message: "What is your name?" },

  {
    type: "checkbox",
    name: "type",
    message: "which tech did you use?",
    choices: ["Javascript", "HTML", "CSS"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username (include your profile URL)?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe you project...",
  },

  {
    type: "checkbox",
    name: "usage",
    message: "what is your intended usage?",
    choices: ["Personal", "Professional", "Academic"],
  },

  {
    type: "list",
    name: "license",
    message: "Pick an applicable license to use for your project:",
    choices: ["Apache_2.0", "GPLv3", "MIT", "none"],
  },
  { type: "input", name: "contributors", message: "Name any contributors..." },

  { type: "input", name: "email", message: "What is your email?" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success! ReadME.md created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then((response) => {
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();

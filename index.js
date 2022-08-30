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
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe you project...",
  },
  {
    type: "list",
    name: "license",
    message: "Pick an applicable license to use for your project:",
    choices: [
      "apache License v2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "Unlicensed",
    ],
  },
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

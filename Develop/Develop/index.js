// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? ",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your Project",
  },
  {
    type: "input",
    name: "contents",
    message: "Please provide a table of contents.",
  },
  {
    type: "input",
    name: "install",
    message: "Provide instructions on how to install your program",
  },

  {
    type: "input",
    name: "contributing",
    message: "Please provide names of all contributors",
  },
  {
    type: "input",
    name: "license",
    message: "Please provide the project license for your project",
  },
  {
    type: "input",
    name: "use",
    message: "Tell us how to use your project",
  },
  {
    type: "input",
    name: "questions",
    messgae: "Do you have any questions?",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provde project tests.",
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is your repo link?",
  },
];

// function to write README file
inquirer.prompt(questions).then(function (data) {
  const queryUrl = `https://api.github.com/users/${data.username}`;

  axios.get(queryUrl).then(function (res) {
    const repoInfo = {
      profile: res.data.html_url,
      name: res.data.name,
    };
    fs.writeFile("README.md", generate(data, repoInfo), function (err) {
      if (err) {
        throw err;
      }
      console.log("New README");
    });
  });
});

// function to initialize program
function init() {}

// function call to initialize program
init();

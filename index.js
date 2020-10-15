const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Questions for the user
const questions = [
   {
      type: "input",
      message: "Enter project title:",
      name: "title"
   },
   {
      type: "input",
      message: "Enter project description:",
      name: "description"
   },
   {
      type: "input",
      message: "Describe the installation process:",
      name: "installation"
   },
   {
      type: "input",
      message: "Explain the usage:",
      name: "installation"
   },
   {
      type: "input",
      message: "List collaborators (leave blank if none):",
      name: "collaborators"
   },
   {
      type: "input",
      message: "Enter liscense type:",
      name: "liscense"
   },
   {
      type: "input",
      message: "Enter contributing guidlines:",
      name: "contributeGuide"
   },
   {
      type: "input",
      message: "Explain how to test the code:",
      name: "test"
   },
   {
      type: "input",
      message: "Enter some frequently asked questions and their answers:",
      name: "test"
   }
];
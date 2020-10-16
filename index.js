const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Questions for the user
const form = [
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
      name: "usage"
   },
   {
      type: "input",
      message: "List collaborators (seperate with pipe | leave blank if none):",
      name: "collaborators"
   },
   {
      type: "input",
      message: "Enter license type:",
      name: "license"
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
      name: "questions"
   }
];

function generateREADME(data){
return `
# ${data.title}

## Table Of Contents
- [Description](##Description:)
- [Installation](##Installation)
- [Usage](##Usage)
- [Collaborators](##Collaborators)
- [Licensing](##Licensing)
- [Contribute](##How-to-Contribute)
- [Test](##How-to-Test)
- [Questions](##Questions)

## Description:
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Collaborators
${data.collaborators}

## Licensing
${data.license}

## How to Contribute
${data.contributeGuide}

## How to Test
${data.test}

## Questions
${data.questions}

###### GENERATED USING JON LETOURNEAU'S README GENERATOR
`
}

inquirer.prompt(form).then(response => {
   const finalREADME = generateREADME(response)

   fs.writeFile("README(generated).md", finalREADME, function(err){
      if(err) return console.log("ERROR GENERATING README")

      console.log("SUCCESS!")
   })
})
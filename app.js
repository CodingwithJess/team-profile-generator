const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees =[];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function promptUser(){
  return inquirer.prompt({
      type:"list",
      message: "What is the employee's role?",
      choices:["Intern", "Engineer", "Manager", "Done adding employees!"],
      name: "role",
    })
    .then (function (answers){
        switch (answers.type){
            case "Intern":
              makeIntern();
              break;
            case "Engineer":
              makeEngineer();
              break;
            case "Manager":
              makeManager();
              break;
            case "Done adding employees!":
              renderHtml();
              break;
        }
    })
}

function makeIntern(){
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the employees name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employees email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the employees ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What school does the intern go to?",
      name: "school",
    },  
  ])
  .then(function({name, email, id, school}){
    const intern = new Intern(name, email, id, school)
    employees.push(intern);

    promptUser();
  })
}

function makeEngineer(){
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the employees name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employees email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the employees ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineers Github username?",
      name: "github",
    },  
  ])
  .then(function({name, email, id, github}){
    const engineer = new Engineer(name, email, id, github)
    employees.push(engineer);

    promptUser();
  })
}

function makeManager(){
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the employees name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employees email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the employees ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the managers office number?",
      name: "officeNum",
    },  
  ])
  .then(function({name, email, id, officeNum}){
    const manager = new Intern(name, email, id, officeNum)
    employees.push(manager);

    promptUser();
  })
}

function renderHtml(){
  fs.writeFileSync(outputPath, render(employees))
  console.log(`Write to file was a success!`)
}

promptUser(); 
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

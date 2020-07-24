// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(name, role, id, email,github) {
    super(name,role,id,email);
    this.github = github;
  }
  getGithut(){
    inquirer.prompt ([
      {
      type: "input",
      message: "What is your Github username?",
      name: "github"
      } 
    ]);
    return this.github;
  }
  getRole(){
    return"Engineer";
  }
}

module.exports = Engineer;
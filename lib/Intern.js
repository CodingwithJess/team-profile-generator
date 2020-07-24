// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
  constructor(name,role,id,email,school) {
    super(name,role,id,email);
    this.school = school;
  }

  getSchool(){
    inquirer.prompt([
      {
        type:"input",
        message: "What school do you go to?",
        name: "school"
      }
    ]);
    return this.school
  }

  getRole(){
    return "Intern";
  }
}

module.exports= Intern;
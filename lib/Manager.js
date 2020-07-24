// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
  constructor(name,role,id,email,officeNum) {
    super(name,role,id,email);
    this.officeNum = officeNum;
  }

  getOfficeNum(){
    inquirer.prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNum"
      }
    ]);
    return this.officeNum;
  }

  getRole(){
    return "Manager";
  }
}

module.exports = Manager;
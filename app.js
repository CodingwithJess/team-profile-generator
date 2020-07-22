const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const util = require("util");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const writeFileAsync = util.promisify(fs.writeFile);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "idNum",
      message: "What is your ID number?"
    },
    {
      type: "list",
      name: "role",
      message: "What is your role with the company?",
      choices : ["engineer", "intern", "manager"]

    },
  ]);
};


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function generateHTML(answers) {
  if (promptUser.role === "engineer"){
    return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${this.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.role}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${this.idNum}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" target="_blank" rel="noopener noreferrer">${this.github}</a></li>
        </ul>
      </div>
    </div>
    `
  } else if (promptUser.role === "intern"){
    return `
    
    `
  } else {
    return `
    
    `,
  }
};


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("team.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to team.html");
  })
  .catch(function(err) {
    console.log(err);
  });

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

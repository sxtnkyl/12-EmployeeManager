//add new row
const departmentPrompt = [
  {
    type: "input",
    name: "depName",
    message: "Enter the department name",
  },
];
const depRolePrompt = [
  {
    type: "input",
    name: "roleTitle",
    message: "Enter the role's title",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "Enter the role's salary",
  },
  {
    type: "input",
    name: "roleDepartment",
    message: "Enter the department's name?",
  },
];
const employeePrompt = [
  {
    type: "input",
    name: "empFirst",
    message: "Enter the employee's first name",
  },
  {
    type: "input",
    name: "empLast",
    message: "Enter the employee's last name",
  },
  {
    type: "input",
    name: "empRole",
    message: "Enter the employee's role",
  },
  {
    type: "input",
    name: "empManager",
    message: "Enter the employee's Manager, if any",
    default: null,
  },
];

//update single employee
const updateEmployeeRole = [
  {
    type: "input",
    name: "id",
    message: "What is the employee's id?",
  },
  {
    type: "input",
    name: "newRole",
    message: "What is the new role?",
  },
];

const chooseTable = [
  {
    type: "list",
    name: "chooseTable",
    message: "For which table?",
    choices: ["department", "depRole", "employee"],
  },
];

const chooseAction = [
  {
    type: "list",
    name: "chooseAction",
    message: "Would you like to add, view, or update?",
    choices: ["add", "view", "update"],
  },
];

const startOver = [
  {
    type: "list",
    name: "startOver",
    message: "Would you like to start over?",
    choices: ["Yes", "No"],
  },
];

module.exports = {
  departmentPrompt,
  depRolePrompt,
  employeePrompt,
  updateEmployeeRole,
  chooseTable,
  chooseAction,
  startOver,
};

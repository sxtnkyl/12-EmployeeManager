const inquirer = require("inquirer");
const connect = require("./js/server");
const prompts = require("./js/prompts");

async function init() {
  //"add", "view", "update"
  let action;
  //"department", "depRole", "employee"
  let table;
  await inquirer
    .prompt(prompts.chooseAction)
    .then((choice) => {
      console.log("made a choice: ", choice);
      action = choice.chooseAction;
      return action == "update"
        ? inquirer.prompt(prompts.updateEmployeeRole)
        : inquirer.prompt(prompts.chooseTable);
    })
    .then((data) => {
      console.log("got data: ", data);
      if (data.chooseTable) {
        table = data.chooseTable;
        if (action == "view") {
          connect.queryTable(table);
          init();
        }
        if (action == "add") {
          return table == "department"
            ? inquirer.prompt(prompts.departmentPrompt)
            : table == "depRole"
            ? inquirer.prompt(prompts.depRolePrompt)
            : inquirer.prompt(prompts.employeePrompt);
        }
      }
      if (action == "update") {
        //use id and newRole to update employee
        let updoot = inquirer.prompt(prompts.updateEmployeeRole);
        connect.updateEmployeeRole(table, updoot, init);
      }
    })
    .then((addRes) => {
      console.log("got a response: ", addRes);
      addRes.depName
        ? connect.createItem("department", addRes)
        : addRes.roleTitle
        ? connect.createItem("depRole", addRes)
        : connect.createItem("employee", addRes);
    })
    .catch((err) => console.log(err));
}

init();

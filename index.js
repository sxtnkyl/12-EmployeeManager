const { prompt } = require("inquirer");
const connect = require("./js/server");
const prompts = require("./js/prompts");

async function actionPrompt(a) {
  return a == "update"
    ? await prompt(prompts.updateEmployeeRole)
    : await prompt(prompts.chooseTable);
}

async function addToTable(t) {
  return t == "department"
    ? await prompt(prompts.departmentPrompt)
    : t == "depRole"
    ? await prompt(prompts.depRolePrompt)
    : await prompt(prompts.employeePrompt);
}
async function startOver() {
  await prompt(prompts.startOver).then((ans) => {
    ans.startOver == "Yes" ? init() : console.log("thanks!");
  });
}

async function init() {
  prompt(prompts.chooseAction).then((choice) => {
    let action = choice.chooseAction;
    actionPrompt(action).then((actionRes) => {
      console.log("actionRes: ", actionRes);
      if (actionRes.chooseTable) {
        let table = actionRes.chooseTable;
        if (action == "view") {
          connect.queryTable(table, init);
          startOver();
        }
        if (action == "add") {
          addToTable(table).then((tableRes) => {
            connect.createItem(table, tableRes);
            startOver();
          });
        }
      }
      if (actionRes.id) {
        connect.updateEmployeeRole(actionRes);
        startOver();
      }
    });
  });
}

init();

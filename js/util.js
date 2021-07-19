import Department from "../constructors/Department";
import DepRole from "../constructors/DepRole";
import Employee from "../constructors/Employee";

function addDept({ id, depName }, table, cb) {
  //create Dept instance
  let newDept = new Department(id, depName);
  cb(table, newDept);
}
function addRole({ id, title, salary, department_id }, table, cb) {
  //create new Role instance
  let newRole = new DepRole(id, title, salary, department_id);
  cb(table, newRole);
}
function addEmployee(
  { id, first_name, last_name, role_id, manager_id },
  table,
  cb
) {
  //create new Employee instance
  let newEmployee = new Employee(
    id,
    first_name,
    last_name,
    role_id,
    manager_id
  );
  cb(table, newEmployee);
}

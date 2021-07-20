require("dotenv").config();
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: process.env.MYSQLPASSWORD,
  database: "EmployeeTracker",
});

const queryTable = (table) => {
  connection.query(`SELECT * FROM ${table}`, (err, res) => {
    if (err) throw err;
    console.log("table found: ", res);
    //res > {}
    // cTable(res)
  });
};

const createItem = (table, obj) => {
  //table > string of department, depRole, or employee
  console.log("creating item: ", obj, " in table ", table);
  connection.query(`INSERT INTO ${table} SET ?`, obj, (err, res) => {
    if (err) throw err;
    console.log("created item: ", res);
  });
};

const updateEmployeeRole = (table, { id, role_id }) => {
  connection.query(
    `UPDATE ${table} SET role_id = ? WHERE id = ?`,
    [role_id, id],
    (err, res) => {
      if (err) throw err;
      console.log("updated employee role: ", res);
    }
  );
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`\nconnected as id ${connection.threadId}`);
});

module.exports = { connection, queryTable, createItem, updateEmployeeRole };

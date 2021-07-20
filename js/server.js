require("dotenv").config();
const mysql = require("mysql");
const util = require("util");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: process.env.MYSQLPASSWORD,
  database: "EmployeeTracker",
});

//https://stackoverflow.com/questions/56242450/use-async-with-nodejs-mysql-driver
const asyncQuery = util.promisify(connection.query.bind(connection));

connection.connect((err) => {
  if (err) throw err;
  // console.log(`\nconnected as id ${connection.threadId}`);
});

const queryTable = async (table) => {
  await asyncQuery(`SELECT * FROM ${table}`, (err, res) => {
    if (err) throw err;
    console.log("table found: ", res);
    //res > {}
    // cTable(res)
  }).catch((err) => console.log("query error: ", err));
};

const createItem = async (table, obj) => {
  //table > string of department, depRole, or employee
  console.log("creating item: ", obj, " in table ", table);
  await asyncQuery(`INSERT INTO ${table} SET ?`, obj, (err, res) => {
    if (err) throw err;
    console.log("created item: ", res);
  }).catch((err) => console.log("create error: ", err));
};

const updateEmployeeRole = async (table, { id, role_id }) => {
  await asyncQuery(
    `UPDATE ${table} SET role_id = ? WHERE id = ?`,
    [role_id, id],
    (err, res) => {
      if (err) throw err;
      console.log("updated employee role: ", res);
    }
  ).catch((err) => console.log("update error: ", err));
};

module.exports = { connection, queryTable, createItem, updateEmployeeRole };

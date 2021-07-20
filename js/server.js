require("dotenv").config();
require("console.table");
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.DBNAME,
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
    console.table(res);
  }).catch((err) => console.log("query error: ", err));
};

const createItem = async (table, obj) => {
  //table > string of department, depRole, or employee
  await asyncQuery(`INSERT INTO ${table} SET ?`, obj, (err, res) => {
    if (err) throw err;
    console.log("created item: ", res);
  }).catch((err) => console.log("create error: ", err));
};

const updateEmployeeRole = async ({ newRole, id }) => {
  await asyncQuery(
    `UPDATE employee SET role_id = ? WHERE id = ?`,
    [newRole, id],
    (err, res) => {
      if (err) throw err;
      console.log("updated employee role: ", res);
    }
  ).catch((err) => console.log("update error: ", err));
};

module.exports = { connection, queryTable, createItem, updateEmployeeRole };

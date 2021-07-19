const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "",
  database: "EmployeeTracker",
});

const queryTable = (table, obj) => {
  connection.query(`SELECT * FROM ${table}`, (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

const createItem = (table, obj) => {
  const query = connection.query(
    `INSERT INTO ${table} SET ?`,
    {
      ...obj,
    },
    (err, res) => {
      if (err) throw err;
      // Call update AFTER the INSERT completes
      update();
    }
  );

  const updateItem = (table, obj) => {
    const query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          quantity: 100,
        },
        {
          flavor: "Rocky Road",
        },
      ],
      (err, res) => {
        if (err) throw err;
      }
    );

    // logs the actual query being run
    console.log(query.sql);
  };

  // logs the actual query being run
  console.log(query.sql);
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  createProduct();
});

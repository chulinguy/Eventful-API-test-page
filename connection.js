//require packages
const mysql = require("mysql");
const mySqlKey = require('./keys').mySql;

//create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: mySqlKey,
  database: "eventonica"
});

module.exports = connection;
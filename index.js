//require packages
const mysql = require("mysql");
const mySqlKey = require('./keys').mySql;
const app = require('./app')

//create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: mySqlKey,
  database: "eventonica"
});

const mySqlConnect = () => {
  connection.connect((err) =>{
    if (err) throw err;
    console.log('Welcome to Eventonica')
    console.log("connected as Administrator");
  })
}

// *Uncomment below line once you have mySQL setup 

// mySqlConnect();

app.startQuestion();

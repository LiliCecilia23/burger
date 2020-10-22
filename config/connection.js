// Set up MySQL connection
require('dotenv').config();
const mysql = require("mysql");
let connection;

console.log(process.env.JAWSDB_URL)
console.log(process.env.mypass)
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.mypass,
    database: "burgers_db"
  });
};

// Make connection
connection.connect();


// Export connection for ORM to use
module.exports = connection;

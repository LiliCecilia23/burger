// Set up MySQL connection
const mysql = require("mysql");
let connection;

console.log(process.env.JAWSDB_URL)

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sriracha96$",
    database: "burgers_db"
  });
};

// Make connection
connection.connect();


// Export connection for ORM to use
module.exports = connection;

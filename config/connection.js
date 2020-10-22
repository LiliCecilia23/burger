// Set up MySQL connection
const mysql = require("mysql");
let connection;
let jaws = "mysql://j6srevpas0mf8h4t:rexruike78epl9kb@vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qtbvbg9c055pszui"


console.log(process.env.JAWSDB_URL)

if (jaws) {
  connection = mysql.createConnection(jaws);
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
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;

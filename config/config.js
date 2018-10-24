// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Webcrazy@umn1",
//   database: "burgers_db"
// });

var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.("mysql://u4fcbngh7pl7fe15:iro642jutd0hbeyy@u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ti8ufjg3rkig3f6d"));
} else{
  connection = mysql.createConnection({
    host: 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'u4fcbngh7pl7fe15',
    password:'iro642jutd0hbeyy',
    database:'ti8ufjg3rkig3f6d'
  });
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.("mysql://u4fcbngh7pl7fe15:iro642jutd0hbeyy@u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ti8ufjg3rkig3f6d"));
} else{
  connection = mysql.createConnection({
    host: 'y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'j5fgh2fesh59cimz',
    password:'ro5atankctxfk8lm',
    database:'js3crvnpt3d1fv8h'
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
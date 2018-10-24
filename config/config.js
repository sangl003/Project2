require("dotenv").config();

module.exports = {
 development: {
   use_env_variable: "DEV_URL",
   dialect: "mysql"
 },
 test: {
   username: "travis",
   password: null,
   database: "testdb",
   host: "localhost",
   dialect: "mysql"
 },
 production: {
   use_env_variable: "JAWSDB_URL",
   dialect: "mysql"
 }
};
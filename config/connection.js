const mysql = require('mysql');

//load environment variables
require('dotenv').config();

//create connection to db

//ternary operator

const connection = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME

});

module.exports = connection;
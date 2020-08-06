const mysql = require('mysql');
const dbConfig = require('./config.js');

const connection = mysql.createConnection(dbConfig);

module.exports = {
  connection
};
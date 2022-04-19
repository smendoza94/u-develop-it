const mysql = require('mysql2');

// mysql connections
// connect to a database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'election'
  },
)

module.exports = db;
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mysql connections
// connect to a database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'election'
  },
  console.log('mysql: Connected to the election database.')
)

// query method is the key component that allows 
// SQL commands to be written in a Node.js application
db.query(`SELECT * FROM candidates`, (err, rows) => {
  // console.log(rows);
});

// GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
  if (err) {
    console.log(err);
  }
  console.log(row);
});

// DELETE a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// CREATE a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
  VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Express ROUTES
// test route to ensure server is working
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   });
// });

// catchall: default response for any other request (404: Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`express: Server running on port ${PORT}.`);
});
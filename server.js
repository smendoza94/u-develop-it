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

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
})

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
const express = require('express');

const db = require('./db/connection.js');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api',apiRoutes);

// query method is the key component that allows 
// SQL commands to be written in a Node.js application

// // Express ROUTES
// // test route to ensure server is working
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   });
// });

// catchall: default response for any other request (404: Not Found)
app.use((req, res) => {
  res.status(404).end();
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`express: Server running on port ${PORT}.`);
  });
});
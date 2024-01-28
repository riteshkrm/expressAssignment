const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Initial counter value
let counter = 0;

// Endpoint: / - Get current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Endpoint: /increment - Increment the counter by 1
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Endpoint: /decrement - Decrement the counter by 1
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

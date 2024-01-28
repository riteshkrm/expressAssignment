const express = require('express');
const app = express();

// Endpoint: /random - Generate and send a random number
app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  res.json({ random: randomNum });
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

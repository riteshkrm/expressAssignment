const express = require('express');
const app = express();

// Endpoint: / - Homepage
app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

// Endpoint: /about - About page
app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

// Endpoint: /contact - Contact page
app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

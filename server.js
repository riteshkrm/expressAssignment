const http = require("http");

const menProducts = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Men Product ${index + 1}`,
  category: "Men",
}));

const womenProducts = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Women Product ${index + 1}`,
  category: "Women",
}));

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set content type to JSON
  res.setHeader("Content-Type", "application/json");

  // Define API endpoints
  if (req.url === "/") {
    // Endpoint: /
    res.end(JSON.stringify({ message: "Welcome to Men & Women Dummy Data" }));
  } else if (req.url === "/men") {
    // Endpoint: /men
    res.end(JSON.stringify({ products: menProducts }));
  } else if (req.url === "/women") {
    // Endpoint: /women
    res.end(JSON.stringify({ products: womenProducts }));
  } else {

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

// Set the server to listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

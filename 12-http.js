const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Welcome to our history page");
    return;
  }
  res.end(
    `<h1>Oops!</h1><h4>No page found</h4><h1><a href='/'>backhome</a><h1>`
  );
});

server.listen(5000);

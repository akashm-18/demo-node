const http = require("http");

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.end("Home Page");
   } else if (req.url === "/about") {
      res.end("About Page");
   } else {
      res.end("Oops");
   }
});

server.listen(3000);

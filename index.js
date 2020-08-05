const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(index);
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
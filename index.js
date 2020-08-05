const http = require('http');
const router = require('./src/router');
const server = http.createServer(router);

server.listen(process.env.PORT || 8080);
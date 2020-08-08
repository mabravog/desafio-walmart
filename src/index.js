const http = require('http');
const router = require('./router');
const server = http.createServer(router);

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://productListUser:productListPassword@localhost:27017/promotions";

// MongoClient.connect(url, function(error, db) {
//   if (error) throw error;
//   console.log("Database created!");
//   db.close();
// });

server.listen(3000, null, null, (response) => {
    console.log('Listening port 3000');
});
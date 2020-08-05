const url = require('url');
const fs = require('fs');
const index = fs.readFileSync('index.html');

function router(req, res) {
    const reqUrl = url.parse(req.url, true);

    switch (reqUrl.pathname) {
        case '/':
            res.writeHead(200);
            res.end(index);
            break;

        case '/products':
            res.writeHead(200);
            res.setHeader('Content-Type', 'application/json');
            res.end('{ id: 1 }');
            break;
    
        default:
            res.writeHead(500);
            res.end('Error');
            break;
    }
}

module.exports = router;
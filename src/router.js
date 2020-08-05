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
            res.end({});
            break;
    
        default:
            res.writeHead(500);
            res.end('Error');
            break;
    }
}

module.exports = router;
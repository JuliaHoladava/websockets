import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

export const httpServer = http.createServer(function (req, res) {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, 'front', req.url === '/' ? 'index.html' : req.url);

    let contentType = 'text/html';
    switch (path.extname(filePath)) {
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
    }

    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({error: 'File not found'}));
            return;
        }
        res.writeHead(200, {'Content-Type': contentType});
        res.end(data);
    });
});

const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 8800;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );
  const ext = path.extname(filePath);
  let contentType = 'text/html';

  switch (ext) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/js';
      break;
    default:
      contentType = 'text/html';
  }
  if (!ext) filePath += '.html';
  console.log(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
      });
      res.end(data);
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`server OK: http://${HOST}:${PORT}`);
});

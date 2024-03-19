const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api.github.io') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        res.end('<html><body>contents 1</body></html>');
      });
    } else if (req.method === 'GET') {
      res.end('<html><body>This is a GET request.</body></html>');
    } else {
      res.end('Invalid request');
    }
  } else {
    res.end('Invalid endpoint');
  }
});

server.listen(3000);

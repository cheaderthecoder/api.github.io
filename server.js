const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.end('<html><body>contents 1</body></html>');
    });
  } else {
    res.end('Invalid request');
  }
});

server.listen(3000);

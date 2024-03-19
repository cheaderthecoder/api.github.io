// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { server_ } from "https://deno.land/std@0.107.0/http/server.ts";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6LQuUkER0-ryq40bZMkZ72FLXDUdosf4",
  authDomain: "test-api-req-app.firebaseapp.com",
  projectId: "test-api-req-app",
  storageBucket: "test-api-req-app.appspot.com",
  messagingSenderId: "119358782725",
  appId: "1:119358782725:web:873230218085f1731ccb6c"
};

for await (const request of server) {
  if (request.method === 'GET') {
    request.respond({ body: "SUCCSES " });
  }
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const server_ = serve({ port: 8000 });

console.log("HTTP webserver running on: http://localhost:8000/");



const http = require('http');

const server = http.createServer( (req, res) => {
  if (req.url === '/api.github.io/') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        res.end('<html><body>contents 1</body></html>');
      });
    } else if (req.method === 'GET') {
      res.end('<html><body>new content</body></html>');
    } else {
      res.end('Invalid request');
    }
  } else {
    res.end('Invalid endpoint');
  }
});
server.listen(3000);

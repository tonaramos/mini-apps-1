const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))










// const http = require('http');
// const fs = require ('fs');

// const hostname = '120.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {

//   res.statusCode = 200;
//   re.setHeader('Content-Type', 'text/plain');  // <----------are these correct?
//   res.end('Hello World\n');
  
// });


// server.listen(port,hostname, () => {
  
//   console.log(`Server running at http://${hostname}:${port}/`);

// });


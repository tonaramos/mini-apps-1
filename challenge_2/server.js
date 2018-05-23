const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000)

app.use(express.static('client'));

app.get('/test', function (req, res) {
  console.log('log from GET server app', req.body);
    res.send( './client/index.html');  
  });
  
app.post('*', function (req, res) {  
  console.log('this is a log from the post server function req-> ', req.body);
  res.end('you posted something');
});


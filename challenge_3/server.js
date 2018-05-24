const express = require('express')
const app = express()

app.listen(3000);

app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.send('server response from USE handler!')
});

//app.get

//app.post
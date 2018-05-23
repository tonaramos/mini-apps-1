const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000)

let csvConverter = function (obj) {
  let storage = [];
  let titles = [];
  let allTitles = Object.keys(obj);
  for (let i = 0; i < allTitles.length-1; i++) {
       titles.push(allTitles[i]);
  }
  storage.push(titles);  

  let recursionFunction = function (obj) {
    let valuesArray = [];
    let tempArr = Object.values(obj);

    for (let i = 0; i < tempArr.length - 1; i++) {
        valuesArray.push(tempArr[i]);
    }
    storage.push(valuesArray);
    if (obj.children && obj.children.length > 0) {
      obj.children.map( (obj)=>{recursionFunction(obj)});
    }
   };

   recursionFunction(obj);
   
   let output = ''

    storage.map(function(arr, i) {
        arr.map(function(item) {
          output += item;
          output += ','
        })
       if(i <storage.length -1) {
        output += '\n';
       }
    });

   return output;

  };

app.get('/test', function (req, res) {
  //console.log('log from GET server app', req.body);
    //res.send( req.body);  
  });
  
app.post('*', function (req, res) {  
 // console.log(csvConverter(req.body.value));

 let output = req.body.value;

output = csvConverter(output);
console.log(output);
  //res.end(JSON.stringify({value: csvConverter(req.body.value)  }));
  res.end(output);
});

app.use(express.static('client'));




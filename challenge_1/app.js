
console.log('hello');

let xTurn = true; 
let x = 'X';
let o = 'O';
let cells = {
  a1: null,
  a2: null,
  a3: null,
  b1: null,
  b2: null,
  b3: null,
  c1: null,
  c2: null,
  c3: null,
};


let takeTurn = function (id) {
 // console.log('you clicked target->', id);
  if (xTurn && cells[id] === null) {
    document.getElementById(id).innerHTML = 'X';
    cells[id] = x;
    //console.log(cells);
    xTurn = !xTurn;
  } else if (cells[id] === null) {
    document.getElementById(id).innerHTML = 'O';
    cells[id] = o;
    //console.log(cells);
    xTurn = !xTurn;
  }
};




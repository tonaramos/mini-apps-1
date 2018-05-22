
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
  if (xTurn && cells[id] === null) {
    document.getElementById(id).innerHTML = 'X';
    cells[id] = x
    checkWinner();
    xTurn = !xTurn;
  } else if (cells[id] === null) {
    document.getElementById(id).innerHTML = 'O';
    cells[id] = o;
    checkWinner();
    xTurn = !xTurn;
  }
};


let checkWinner = function() {
let scoreBoard = [
[cells.a1, cells.a2, cells.a3],
[cells.b1, cells.b2, cells.b3],
[cells.c1, cells.c2, cells.c3],
[cells.a1, cells.b1, cells.c1],
[cells.a2, cells.b2, cells.c2],
[cells.a3, cells.b3, cells.c3],
[cells.a1, cells.b2, cells.c3],
[cells.a3, cells.b2, cells.c1]
];
  console.log(scoreBoard);

  for (let i = 0; i < scoreBoard.length; i++) {
    console.log('forlooprunning');
    if (((scoreBoard[i][0] === scoreBoard[i][1]) && (scoreBoard[i][1] === scoreBoard[i][2])) 
      && (scoreBoard[i][0] !== null && scoreBoard[i][1] !== null && scoreBoard[i][2] !== null)) {
      console.log('Player ' + scoreBoard[i][0] + ' wins!');
      return 'gameOver';
    }
  }
  let gameOver = true;
  for (let j = 0; j < scoreBoard.length; j++) {
    for (let k = 0; k < scoreBoard[j].length; k++) {
      if (scoreBoard[j][k] === null) {
        gameOver = false;
      }
    }
  }  
  if(gameOver) {
    console.log('gameOver, playAgain!')
  }
 // console.log(scoreBoard)
}



window.onload = function () {

  let xTurn = true;
  let tie = false;
  let lastWinner;
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
    
    for (let i = 0; i < scoreBoard.length; i++) {
      if (((scoreBoard[i][0] === scoreBoard[i][1]) && (scoreBoard[i][1] === scoreBoard[i][2])) 
        && (scoreBoard[i][0] !== null && scoreBoard[i][1] !== null && scoreBoard[i][2] !== null)) {
        xturn = scoreBoard[i][0] === x ? true : false ;
        setTimeout(alert('Player ' + scoreBoard[i][0] + ' wins!'), 1000);
        setTimeout(resetBoard());
        nextPlayer();
      };
    };

    let gameOver = true;

    for (let j = 0; j < scoreBoard.length; j++) {
      for (let k = 0; k < scoreBoard[j].length; k++) {
        if (scoreBoard[j][k] === null) {
          gameOver = false;
          tie = !tie;
        }
      }
    };  

    if(gameOver === true && tie === true) {
      alert('Is a tie, playAgain!');
      resetBoard();
    } else if ( gameOver === true ) {
      alert('Game over, playAgain!');
      resetBoard();
    }
  };

  let resetBoard = function () {
    let allCellElements = document.getElementsByTagName('td');
    for (var i = 0; i < allCellElements.length; i++) {
      allCellElements[i].innerHTML = '';
    };
    for (let key in cells){
        cells[key] = null;
    };
  };


  let takeTurn = function (id) {
    if (xTurn && cells[id] === null) {
      document.getElementById(id).innerHTML = 'X';
      cells[id] = x;
      xTurn = !xTurn;
    } else if (cells[id] === null) {
      document.getElementById(id).innerHTML = 'O';
      cells[id] = o;
      xTurn = !xTurn;
    }
    setTimeout(checkWinner, 1000);
    nextPlayer();
  };

  let nextPlayer = function () {
    let player = xTurn ? x : o ; 
    document.getElementById('turnDisplay').innerHTML = 'Player ' + player + ' turn!';
  };

  document.getElementById('button').onclick = function () {
    resetBoard();
  }

  document.getElementById('table').onclick = function (event) {
    takeTurn(event.target.id);
  }
};



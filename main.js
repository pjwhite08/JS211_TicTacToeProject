// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//----------------------------------------------------------------









console.log("I'm working!")
// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  ['', '', ''],
  ['', '', ''],
  [ '', '','']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'O';


// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const addMarker = (x,y) => {
  board[x][y] = playerTurn
  console.log("is this the new board?:", board)
}

const changeMarker = () => {
  if (playerTurn === "X") {
    playerTurn = "O"
    console.log("changeMarker function - next player turn:", playerTurn)
  } else {
    playerTurn = "X"
    console.log("chandgeMarker function - next player turn:", playerTurn)
  }
}



const horizontalWin = () => {
  if((board[0][0] == playerTurn && board[0][1] == playerTurn && board[0][2] == playerTurn) 
  || (board[1][0] == playerTurn && board[1][1] == playerTurn && board[1][2] == playerTurn) 
  || (board[2][0] == playerTurn && board[2][1] == playerTurn && board[2][2] == playerTurn)){
    console.log("horizontal win", playerTurn)
    return true}
}

const verticalWin = () => {
  if((board[0][0] == playerTurn && board[1][0] == playerTurn && board[2][0] == playerTurn) 
  || (board[0][1] == playerTurn && board[1][1] == playerTurn && board[2][1] == playerTurn) 
  || (board[0][2] == playerTurn && board[1][2] == playerTurn && board[2][2] == playerTurn)){
    console.log("vertical win", playerTurn)
      return true}
}

const diagonalWin = () => {
  if((board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) 
  || (board[0][2] == playerTurn && board[1][1] == playerTurn && board[2][0] == playerTurn)) {
    console.log("diagonal win", playerTurn)
      return true}
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    console.log("Check for win function -win")
    return true
  } else {
    console.log("Check for win funciton - nobody wins yet")
    changeMarker()
  }
}

const ticTacToe = (row, column) => {
  console.log("ticTacToe function has been called")
  // Your code here to place a marker on the board
  addMarker(row,column)
console.log("Here's the new board: ", board)
  // then check for a win
  checkForWin()
}


ticTacToe(0,1)








// -----------------------------
// const getPrompt = () => {
//   printBoard();
//   console.log("It's Player " + playerTurn + "'s turn.");
//   rl.question('row: ', (row) => {
//     rl.question('column: ', (column) => {
//       ticTacToe(row, column);
//       getPrompt();
//     });
//   });
// }
// // Unit Tests
// // You use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#ticTacToe()', () => {
//     it('should place mark on the board', () => {
//       ticTacToe(1, 1);
//       assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
//     });
//     it('should alternate between players', () => {
//       ticTacToe(0, 0);
//       assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
//     });
//     it('should check for vertical wins', () => {
//       board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
//       assert.equal(verticalWin(), true);
//     });
//     it('should check for horizontal wins', () => {
//       board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
//       assert.equal(horizontalWin(), true);
//     });
//     it('should check for diagonal wins', () => {
//       board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
//       assert.equal(diagonalWin(), true);
//     });
//     it('should detect a win', () => {
//       ticTacToe(0, 0)
//       ticTacToe(0, 1)
//       ticTacToe(1, 1)
//       ticTacToe(0, 2)
//       ticTacToe(2, 2)
//       assert.equal(checkForWin(), true);
//     });
//   });
// } else {

//   getPrompt();

// }

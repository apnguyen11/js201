// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null

function ticTacToe(array){
    for(var i = 0; i < array.length; i++){
            if(array[0][i] == array[0][0] && array[0][i] == array[0][1] & array[0][i] == array[0][2] ){
                return array[0][0];
            } else if(array[1][i] == array[1][0] && array[1][i] == array[1][1] && array[1][i] == array[1][2] ){
                return array[1][0];
            } else if(array[2][i] == array[2][0] && array[2][i] == array[2][1] && array[2][i] == array[2][2]){
                return array[2][0];
            } else if(array[0][0] == array[1][1] && array[1][1] == array[2][2]){
              return array[0][0]
            } else if(array[0][2] == array[1][1] && array[1][1] == array[2][0]){
              return array[1][1];
            }
        }
        if(array[0][0] == array[1][0] && array[1][0]  == array[2][0]){
            return array[0][0];
        } else if (array[0][1] == array[1][1] && array[1][1] == array[2][1]){
            return array [0][1];
        } else if (array[0][2] == array[1][2] && array[1][2] == array[2][2]){
            return array[0][2];
        } else {
          return null
        } 
    }
    
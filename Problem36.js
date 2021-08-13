var isValidSudoku = function (board) {

  function check(arr) {
    let array = new Set(arr)
    if (array.size !== arr.length) {
      return false
    }
    return true
  }

  for (i = 0; i <= board.length - 1; i++) {
    let temp = []
    for (j = 0; j <= board.length - 1; j++) {
      if (board[i][j] !== ".") {
        temp.push(board[i][j])
      }
    }
    if (!check(temp)) {
      return false
    }
  }

  for (i = 0; i <= board.length - 1; i++) {
    let temp = []
    for (j = 0; j <= board.length - 1; j++) {
      if (board[j][i] !== ".") {
        temp.push(board[j][i])
      }
    }
    if (!check(temp)) {
      return false
    }
  }

  let temp1 = []
  for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 2; j++) {
      if (board[i][j] !== ".") {
        temp1.push(board[i][j])
      }
    }
    if (!check(temp1)) {
      return false
    }
  }

  let temp2 = []
  for (i = 3; i <= 5; i++) {
    for (j = 0; j <= 2; j++) {
      if (board[i][j] !== ".") {
        temp2.push(board[i][j])
      }
    }
    if (!check(temp2)) {
      return false
    }
  }

  let temp3 = []
  for (i = 6; i <= 8; i++) {
    for (j = 0; j <= 2; j++) {
      if (board[i][j] !== ".") {
        temp3.push(board[i][j])
      }
    }
    if (!check(temp3)) {
      return false
    }
  }

  let temp4 = []
  for (i = 0; i <= 2; i++) {
    for (j = 3; j <= 5; j++) {
      if (board[i][j] !== ".") {
        temp4.push(board[i][j])
      }
    }
    if (!check(temp4)) {
      return false
    }
  }

  let temp5 = []
  for (i = 3; i <= 5; i++) {
    for (j = 3; j <= 5; j++) {
      if (board[i][j] !== ".") {
        temp5.push(board[i][j])
      }
    }
    if (!check(temp5)) {
      return false
    }
  }

  let temp6 = []
  for (i = 6; i <= 8; i++) {
    for (j = 3; j <= 5; j++) {
      if (board[i][j] !== ".") {
        temp6.push(board[i][j])
      }
    }
    if (!check(temp6)) {
      return false
    }
  }

  let temp7 = []
  for (i = 0; i <= 2; i++) {
    for (j = 6; j <= 8; j++) {
      if (board[i][j] !== ".") {
        temp7.push(board[i][j])
      }
    }
    if (!check(temp7)) {
      return false
    }
  }

  let temp8 = []
  for (i = 3; i <= 5; i++) {
    for (j = 6; j <= 8; j++) {
      if (board[i][j] !== ".") {
        temp8.push(board[i][j])
      }
    }
    if (!check(temp8)) {
      return false
    }
  }

  let temp9 = []
  for (i = 6; i <= 8; i++) {
    for (j = 6; j <= 8; j++) {
      if (board[i][j] !== ".") {
        temp9.push(board[i][j])
      }
    }
    if (!check(temp9)) {
      return false
    }
  }

  return true
};

let board =
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

let board2 =
  [[".", ".", ".", ".", "5", ".", ".", "1", "."]
    , [".", "4", ".", "3", ".", ".", ".", ".", "."]
    , [".", ".", ".", ".", ".", "3", ".", ".", "1"]
    , ["8", ".", ".", ".", ".", ".", ".", "2", "."]
    , [".", ".", "2", ".", "7", ".", ".", ".", "."]
    , [".", "1", "5", ".", ".", ".", ".", ".", "."]
    , [".", ".", ".", ".", ".", "2", ".", ".", "."]
    , [".", "2", ".", "9", ".", ".", ".", ".", "."]
    , [".", ".", "4", ".", ".", ".", ".", ".", "."]]
console.log(isValidSudoku(board))
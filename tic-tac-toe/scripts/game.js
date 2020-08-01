/**
 * Reset the board, set the current player to X
 */
function startNewGame() {
  currentPlayer = 'X';
  boardXY = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  updateView();
}

// update what the user sees (copy from boardXY to the DOM)
function updateView() {

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let id = row + ',' + col;

      document.getElementById(id).innerText =
        (boardXY[row][col] === ' ') ? '-' :
        boardXY[row][col];
    }
  }

  // update the message showing who won
  document.getElementById('player').innerText =
    currentPlayer + ' to move';
}

/***
 * After the current player clicks on [row, col], return if anyone won.
 * Possible return values are:
 *  'tie'
 *  'X' (X wins)
 *  'O' (O wins)
 *  ' ' (game still in progress)
 */
function getWinningPlayer(row, col) {
  // check row to see if won
  if (boardXY[row][0] === 'X' &&
    boardXY[row][1] === 'X' &&
    boardXY[row][2] === 'X') {
    return 'X'; // X wins!
  }

  if (boardXY[row][0] === 'O' &&
    boardXY[row][1] === 'O' &&
    boardXY[row][2] === 'O') {
    return 'O'; // O wins!
  }

  // check column to see if won
  if (boardXY[0][col] === 'X' &&
    boardXY[1][col] === 'X' &&
    boardXY[2][col] === 'X') {
    return 'X'; // X wins!
  }

  if (boardXY[0][col] === 'O' &&
    boardXY[1][col] === 'O' &&
    boardXY[2][col] === 'O') {
    return 'O'; // X wins!
  }

  // check diagonals
  if (boardXY[0][0] === 'X' &&
    boardXY[1][1] === 'X' &&
    boardXY[2][1] === 'X') {
    return 'X'; // X wins!
  }

  if (boardXY[0][0] === 'O' &&
    boardXY[1][0] === 'O' &&
    boardXY[2][0] === 'O') {
    return 'O'; // X wins!
  }

  if (boardXY[0][2] === 'X' &&
    boardXY[1][1] === 'X' &&
    boardXY[2][0] === 'X') {
    return 'X'; // X wins!
  }

  if (boardXY[0][2] === 'O' &&
    boardXY[1][1] === 'O' &&
    boardXY[2][0] === 'O') {
    return 'O'; // O wins!
  }

  // if no winner, then check for tie
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardXY[row][col] === ' ') {
        return ' '; // game still going
      }
    }
  }
  return 'tie';
}

/**
 * The user clicked on a button at [row, col]
 * @param {*} row 
 * @param {*} col 
 */
function onUserClick(row, col) {
  if (boardXY[row][col] !== ' ') {
    alert('click on a blank cell!');
  } else {
    boardXY[row][col] = currentPlayer;
    updateView();

    // check for win or tie
    const win = getWinningPlayer(row, col);
    if (win === 'tie') {
      alert("tie game!");
      startNewGame();
    } else if (win === 'X') {
      alert("X wins!");
      startNewGame();
    } else if (win === 'O') {
      alert("O wins!");
      startNewGame();
    } else {
      // game still in progress, so flip current player
      if (currentPlayer === 'X') {
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X';
      }
    }

    updateView();
  }
}
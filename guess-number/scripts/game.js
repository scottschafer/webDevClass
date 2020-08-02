/**
 * Reset the board, set the current player to X
 */
function startNewGame() {
  numberOfGuesses = 0;
  answer = getRandomInteger(LowestNumber, HighestNumber);

  let prompt = "I'm thinking of a number between " + LowestNumber + " and " + HighestNumber;
  document.getElementById('idPrompt').innerText = prompt;
}

function onClickGuess() {
  // the user clicked the Guess button
  // get the user's number from the input on the page
  let guess = parseInt(document.getElementById('idUserGuess').value, 10);

  // now do something with that number
  if (guess < LowestNumber || guess > HighestNumber) {
    // the number is out of range

  } else {
    // TODO: compare the guess with answer and report to the user

    // for now, just repeat what the user said.
    let messageElement = document.getElementById('isMessage');

    messageElement.innerText = 'You guessed ' + guess;
  }

}
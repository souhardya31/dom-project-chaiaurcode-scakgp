const randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    console.log(guess);
  });
}

function validateGuess(guess) {
  //checks compatibility of function
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess > 100 || guess < 0) {
    alert('Please enter a number between 0 & 100 only');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage('Game Over');
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //checks if number is lowOrHigh than random number
  if (guess === randomNum) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('Entered number is lower');
  } else if (guess > 100) {
    displayMessage('Entered number is higher');
  }
}

function displayGuess(guess) {
  userInput.value = ''; // this is given so that user does not have to manually delete the number after submission
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
}

function startGame() {
  //
}

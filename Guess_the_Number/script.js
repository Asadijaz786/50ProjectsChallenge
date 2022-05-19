let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#submit");
const input = document.querySelector(".guessField");
const guessPrevious = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".results");
const lowHigh = document.querySelector(".lowOrHigh");
const p = document.createElement("p");

let previousGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    // Grab Guesses from User

    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter Valid Number!");
  } else if (guess < 1) {
    alert("Please Enter ( Number > 1)!");
  } else if (guess > 100) {
    alert("Please Enter ( Number < 100)!");
  } else {
    previousGuess.push(guess);
    console.log(guess);

    if (numGuesses === 11) {
      displayMessage(guess);
      displayMessage(`Game Over! 🤧 Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);

      checkGuesses(guess);
    }
  }
}

function checkGuesses(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed Correctly! 😃");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too Low, try again! 🥱");
  } else if (guess > randomNumber) {
    displayMessage("Too High, try again! 🥱");
  }
}

function displayGuess(guess) {
  input.value = "";
  guessPrevious.innerHTML += `${guess}, `;
  numGuesses++;
  guessRemaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  input.value = "";

  input.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<p id = newGame>Start New Game</p>

  `;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    //Pick a new random number
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    numGuesses = 1;
    guessPrevious.innerHTML = "";
    lowHigh.innerHTML = "";
    guessRemaining.innerHTML = `${11 - numGuesses}  `;
    input.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

const labels = document.querySelector(".label");

labels.innerHTML = labels.innerText
  .split("")
  .map(
    (letter, idx) =>
      `<span style="transition-delay:${idx * 20}ms">${letter}</span>`
  )
  .join("");

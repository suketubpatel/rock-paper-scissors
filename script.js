//create choices variable and assign [“Rock”, “Paper”, “seaser”]
const choices = ["Rock", "Paper", "Scissors"];

// create computerChoice to null;
let computerChoice = null;

// create userChoice to null
let userChoice = null;

let Player1Score = 0;
let Player2Score = 0;
let player1 = null;
let player2 = null;

let gameStarted = false;
let gameFinished = false;

let totalGame = 5;
let isOdd = false;

// create function getComputerChoice which generate random number between 0 to 2 and return appropriate value from choices array.
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
};

// create variable btnContainer by reading btn-container class
const btnContainer = document.querySelectorAll(".btn-container *");

// create radioOptions and read div holding radio buttons
const radioOptions = document.querySelectorAll(".playerOptions input");

const players = document.querySelector("#players");

const btnGameDiv = document.querySelector(".game-button");
const btnEnd = document.createElement("button");

// create gameButton variable and read game button in to it
const btnGame = document.querySelector(".game-btn");

// get info paragraph
const info = document.querySelector(".info");

// get resuld container
const resultContainer = document.querySelector(".result");

// add event lister to each button and read user input and store it in userChoice
function getUserChoice() {
  btnContainer.forEach((button) => {
    button.addEventListener("click", () => {
      return button.id;
    });
  });
}

// create function for game logic
function playGame() {
  // Start the game
  startGame();

  // lets play game
  letsPlayGame();
}

function startGame() {
  btnGame.addEventListener("click", () => {
    if (gameFinished) {
      endGame(btnGame, "blue");
      clearDivResult();
      btnGameDiv.removeChild(btnGameDiv.lastChild);
      gameStarted = false;
    }

    if (!gameStarted) {
      gameStarted = true;

      enableUserchoiceButtons();

      toggleToRed(btnGame);
      info.textContent = "Let's play this game... There will be 5 round!";
    } else {
      // End the game
      endGame(btnGame, "red");
    }
  });
}

// create function to enable user choice buttons
function enableUserchoiceButtons() {
  btnContainer.forEach((button) => {
    button.disabled = false;
  });
  console.log("User choice button enabled");
}

// create fnction to disable user choice buttons
function disableUserChoiceButtons() {
  btnContainer.forEach((button) => {
    button.disabled = true;
  });
  console.log("User choice button disabled");
}

// toggle game but to red
function toggleToRed(btn) {
  btn.classList.add("game-btn-red");
  btn.textContent = "End Game";
  console.log("Game button turn to Red with text END GAME");

  btnContainer.forEach((button) => {
    button.classList.add("button-enabled");
  });
  console.log("User choice button hover enabled.");
}

// End the game after user press end game button
function endGame(btn, str) {
  console.log("");
  console.log("");

  if (str === "red") gameStarted = false;
  gameFinished = false;
  btn.classList.remove("game-btn-" + str);
  btn.textContent = "Start Game";
  console.log("Game butto turn to green and text change to START GAEM");
  disableUserChoiceButtons();
  // enableRadio();
  info.setAttribute("style", "white-space: pre;");
  info.textContent = "Game ended by user!!!\r\n";
  info.textContent += "Let's play this game again... There will be 5 round!";
  console.log(
    "Game ended by user!!!\nLet's play this game again... There will be 5 round!"
  );
}

function clearDivResult() {
  while (resultContainer.hasChildNodes()) {
    resultContainer.removeChild(resultContainer.firstChild);
  }
}

function addEndButton() {
  btnEnd.classList.add("game-btn");
  btnEnd.textContent = "End Game";
  btnGameDiv.appendChild(btnEnd);
  toggleToRed(btnEnd);

  btnEnd.addEventListener("click", () => {
    endGame(btnGame, "red");
    location.reload();
  });
}
function toggleToBlue(btn) {
  btn.classList.remove("game-btn-red");
  btn.classList.add("game-btn-blue");
  btn.textContent = "Start New Game";
  console.log("Game button turn to Blue with text Start New Game");
  console.log("gameFinished: " + gameFinished);
}

function displayResult() {
  if (Player1Score > Player2Score) {
    info.textContent = `You are a winner!!!`;
    console.log("You are a winner!!!");
  } else if (Player1Score < Player2Score) {
    info.textContent = `Computer is a winner!!!`;
    console.log("Computer is a winner!!!");
  } else {
    info.textContent = `It is a TAI!!!`;
    console.log("It is a TAI!!!");
  }
  totalGame = 5;
  gameFinished = true;
}

// play game
function letsPlayGame() {
  btnContainer.forEach((button) => {
    button.addEventListener("click", () => {
      player1 = button.id;
      getComputerChoice();
      player2 = computerChoice;

      // display current choises
      const message = document.createElement("p");
      message.textContent = `Your choice: ${player1} and Computer choice: ${player2}`;
      resultContainer.appendChild(message);

      totalGame--;

      console.log("player 1: " + player1);
      console.log("Player 2:" + player2);
      if (
        (player1 == "sScissors" && player2 == "Paper") ||
        (player1 == "Paper" && player2 == "Rock") ||
        (player1 == "Rock" && player2 == "Scissors")
      ) {
        Player1Score++;
      } else if (
        (player2 == "Scissors" && player1 == "Paper") ||
        (player2 == "Paper" && player1 == "Rock") ||
        (player2 == "Rock" && player1 == "Scissors")
      ) {
        Player2Score++;
      }

      console.log("Total game: " + totalGame);
      console.log("Player1 Score: " + Player1Score);
      console.log("Player2 Score: " + Player2Score);

      // display number of round left
      info.textContent = `There is ${totalGame} round left...`;

      if (totalGame === 0) {
        displayResult();
        disableUserChoiceButtons();
        toggleToBlue(btnGame);
        addEndButton();
      }
    });
  });
}

// play game
playGame();

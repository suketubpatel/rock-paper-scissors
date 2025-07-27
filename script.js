//create choices variable and assign [“rock”, “paper”, “seaser”]
const choices = ["rock", "paper", "seasor"];

//create isMultiPlayer variable and set it to false
// let isMultiPlayer = false;

// create computerChoice to null;
let computerChoice = null;

// create userChoice to null
let userChoice = null;

let winner;

let gameStarted = false;

// create function getComputerChoice which generate random number between 0 to 2 and return appropriate value from choices array.
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
};

// create variable btnContainer by reading btn-container class
const btnContainer = document.querySelectorAll(".btn-container *");

// create radioOptions and read div holding radio buttons
const radioOptions = document.querySelectorAll(".playerOptions input");

// create gameButton variable and read game button in to it
const btnGame = document.querySelector(".game-btn");

// get info paragraph
const info = document.querySelector(".info");

// add event lister to each button and read user input and store it in userChoice
function getUserChoice() {
  btnContainer.forEach((button) => {
    button.addEventListener("click", () => {
      userChoice = button.value;
    });
  });
}

// create function for game logic
function playGame() {
  // Start the game
  startGame();
  //   // check is a multiplayer game
  //   if (radioOptions[0].checked === true) {
  //     isMultiPlayer = false;
  //     singlePlayerGame();
  //   } else {
  //     isMultiPlayer = true;
  //     multiPlayerGame();
  //   }
  // });
}

function startGame() {
  btnGame.addEventListener("click", () => {
    if (!gameStarted) {
      gameStarted = true;
      // disable radio button
      disableRadio();
      // enable user buttons
      enableUserchoiceButtons();
      // btnGame.classList.toggle("game-btn-red");
      toggleToRed(btnGame);
      info.textContent = "Let's play this game... There will be 5 round!";
    } else {
      // End the game
      endGame(btnGame);
    }
  });
}
// create function to disable radio button
function disableRadio() {
  radioOptions.forEach((radio) => {
    radio.disabled = true;
  });
  console.log("Radio button disabled");
}

// create function to enable radio button
function enableRadio() {
  radioOptions.forEach((radio) => {
    radio.disabled = false;
  });
  radioOptions[0].checked = true;
  isMultiPlayer = false;
  console.log("Radio button enabled");
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
function endGame(btn) {
  gameStarted = false;
  btn.classList.remove("game-btn-red");
  btn.textContent = "Start Game";
  disableUserChoiceButtons();
  enableRadio();
  info.setAttribute("style", "white-space: pre;");
  info.textContent = "Game ended by user!!!\r\n";
  info.textContent += "Let's play this game again... There will be 5 round!";
  console.log(
    "Game ended by user!!!\nLet's play this game again... There will be 5 round!"
  );
}
// Play as single player
function singlePlayerGame() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    info.textContent = `There are ${i} more round left...`;
    getUserChoice();
    getComputerChoice();

    if (
      (userChoice == "seasor" && computerChoice == "paper") ||
      (userChoice == "paper" && computerChoice == "rock") ||
      (userChoice == "rock" && computerChoice == "seasor")
    ) {
      userScore++;
    } else if (
      (computerChoice == "seasor" && userChoice == "paper") ||
      (computerChoice == "paper" && userChoice == "rock") ||
      (computerChoice == "rock" && userChoice == "seasor")
    ) {
      computerScore++;
    }
  }
}

// display winner
function displayResult(player1, player2) {
  let name;
  if (isMultiPlayer === false) {
    name = "Computer";
  } else {
    name = "Player-2";
  }

  if (player1 > player2) {
    console.log("Player-1 is a winner!!!");
    info.textContent("Player-1 is a winner!!!");
  } else if (player1 < player2) {
    console.log(name + " is a winner!!!");
    info.textContent(name + " is a winner!!!");
  } else {
    console.log("It is a TAI!!!");
    info.textContent("It is a TAI!!!");
  }
}
// play game
playGame();

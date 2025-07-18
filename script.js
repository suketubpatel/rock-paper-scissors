let humanScore = 0,
  computerScore = 0;
let choices = ["rock", "paper", "scissor"];
let isNull = !null;
// let computerChoice = "";
// let humanChoice = "";

// computer random choice
let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

//human choice
let getHumanChoice = () => {
  let askHuman = () => {
    let userChoice = prompt(
      'Your choice to play - "Rock Paper Scissors" \n\nPlease enter your choice...\n\nRock - 1\nPaper - 2\nScissor - 3'
    );

    // keep prompting untill user enters 1, 2 or 3.
    if (userChoice >= 1 && userChoice <= 3) {
      return choices[parseInt(userChoice) - 1];
    } else if (userChoice === null) {
      // If user has clicked cancel
      isNull = null;
      return null;
    }

    return -1; // Else return 0;
  };

  let humanChoose = askHuman();

  while (humanChoose === -1) {
    // Keep prompting.
    alert("Your choice options are 1, 2 or 3 respectively!");
    humanChoose = askHuman();
  }

  return humanChoose;
};

// Play a single game round
let playRound = (
  humanChoice = getHumanChoice(),
  computerChoice = getComputerChoice()
) => {
  if (humanChoice != null) {
    if (
      (humanChoice == "scissor" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "rock" && computerChoice == "scissor")
    ) {
      humanScore++;
    } else if (
      (computerChoice == "scissor" && humanChoice == "paper") ||
      (computerChoice == "paper" && humanChoice == "rock") ||
      (computerChoice == "rock" && humanChoice == "scissor")
    ) {
      computerScore++;
    }
    console.log(
      "Human Choice: " +
        `${humanChoice}` +
        "\nComputer Choice: " +
        `${computerChoice}`
    );
    console.log(
      "Human Score: " +
        `${humanScore}` +
        " & Computer Score: " +
        `${computerScore}`
    );
  }
};

// Play gmae number of times - update number of times loop run
const numberOfRounds = 5;
for (let i = 0; i < numberOfRounds; i++) {
  if (isNull != null) {
    playRound();
  }
}

//Display winner
if (isNull != null) {
  if (humanScore > computerScore) {
    console.log("Human is a winner!!!");
    alert("Human is a winner!!!");
  } else if (humanScore < computerScore) {
    console.log("Computer is a winner!!!");
    alert("Computer is a winner!!!");
  } else {
    console.log("It is a TAI!!!");
    alert("It is a TAI!!!");
  }
} else {
  console.log("Game is cancelled!");
  alert("Game is cancelled!");
}

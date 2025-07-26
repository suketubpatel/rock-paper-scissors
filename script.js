let choices = ["rock", "paper", "seasor"];
let computerChoice = "";
let humanChoice = "";

const container = document.querySelector(".container");
const button = document.querySelector(".button");

// computer random choice
let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

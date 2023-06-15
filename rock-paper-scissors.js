function getComputerChoice() {
  //Rock's value is 1
  const rock = "rock";
  // Paper's value is 2
  const paper = "paper";
  // Scissors' value is 3
  const scissors = "scissors";
  // Assigns a random number between 1 & 3 to the computer
  let computerSelection = Math.floor(Math.random() * 3) + 1;
  // Returns the corresponding string
  if (computerSelection == 1) {
    return rock;
  } else if (computerSelection == 2) {
    return paper;
  } else {
    return scissors;
  }
}

function playRound(playerSelection, computerSelection) {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  if (playerSelection === rock && computerSelection === paper) {
    return "You Lose! Paper beats rock";
  } else if (playerSelection === rock && computerSelection === scissors) {
    return "You Win! Rock beats scissors";
  } else if (playerSelection === paper && computerSelection === rock) {
    return "You Win! Paper beats rock";
  } else if (playerSelection === paper && computerSelection === scissors) {
    return "You Lose! Scissors beats paper";
  } else if (playerSelection === scissors && computerSelection === rock) {
    return "You Lose! Rock beats scissors";
  } else if (playerSelection === scissors && computerSelection === paper) {
    return "You Win! Scissors beats paper";
  } else {
    return "It's a draw!";
  }
}

const playerChoice = prompt("Please enter either rock, paper or scissors");
const playerSelection = playerChoice.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

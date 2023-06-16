let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerArray = ["rock", "paper", "scissors"];
  // Assigns a random number between 0 & 2 to the computer
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerArray[randomNumber];
  return computerChoice;
}
function playRound(playerSelection, computerSelection) {
  console.log("1", playerSelection, "2", computerSelection);
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a draw!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a draw!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a draw!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    // Asks the player for their rock, paper, scissors choice & removes case sensitivity by converting to lowercase
    const playerSelection = prompt(
      "Please enter either rock, paper or scissors"
    ).toLowerCase();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > computerScore) {
    return "Player wins!";
  } else if (computerScore > playerScore) {
    return "The matrix won this one!";
  } else {
    return "It was a draw!";
  }
}

console.log(game());

// A game is 5 rounds of RPS
// Each round the player wins, computer wins or it is a draw as this will be displayed
// The score will need to be counted
// If the player has a higher score at the end of the 5 rounds they are the winner
// If the computer has a higher score at the end of the 5 rounds they are the winner
// If the score is tied after 5 rounds it is a draw

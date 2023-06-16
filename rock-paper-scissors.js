let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerArray = ["rock", "paper", "scissors"];
  // Assigns a random number between 0 & 2 to the computer
  const randomNumber = Math.floor(Math.random() * 3);
  // Assigns that number to a position in the array
  const computerChoice = computerArray[randomNumber];
  // Returns the computer's choice
  return computerChoice;
}
function playRound(playerSelection, computerSelection) {
  // All possible outcomes for a game of rock paper scissors
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
  // Loops 5 times
  for (let i = 0; i < 5; i++) {
    // Calls the computer choice function and assigns it to a variable
    const computerSelection = getComputerChoice();
    // Asks the player for their rock, paper, scissors choice & removes case sensitivity by converting to lowercase
    const playerSelection = prompt(
      "Please enter either rock, paper or scissors"
    ).toLowerCase();
    // Plays a round of rock paper scissors
    playRound(playerSelection, computerSelection);
    // Displays how many wins the player and computer have attained
    console.log(
      "The player has won ",
      playerScore,
      " game!",
      " The computer has won ",
      computerScore,
      " game!"
    );
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

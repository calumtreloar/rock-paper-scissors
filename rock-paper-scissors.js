const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent.toLowerCase(), getComputerChoice());
  });
});

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
    console.log("Computer wins");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("Player wins");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("Player wins");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("Computer wins");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("Computer wins");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("Player wins");
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Its a draw");
    return "It's a draw!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Its a draw");
    return "It's a draw!";
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("Its a draw");
    return "It's a draw!";
  }
}

/* function game() {
  // Loops 5 times
  for (let i = 0; i < 5; i++) {
    // Calls the computer choice function and assigns it to a variable
    const computerSelection = getComputerChoice();
    // Asks the player for their rock, paper, scissors choice & removes case sensitivity by converting to lowercase
    const playerSelection = prompt("Please enter either rock, paper or scissors").toLowerCase();
    // Plays a round of rock paper scissors
    playRound(playerSelection, computerSelection);
    // Displays how many wins the player and computer have attained
    console.log("The player has won ", playerScore, " game!", " The computer has won ", computerScore, " game!");
  } 

  if (playerScore > computerScore) {
    return "Player wins!";
  } else if (computerScore > playerScore) {
    return "The matrix won this one!";
  } else {
    return "It was a draw!";
  }
  
}
*/
// console.log(game());

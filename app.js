let computer = ["rock", "paper", "scissors"]
let choices = ["rock", "papar", "scissors"]
let compIndex = 0
// what does this do?
// understands what the player is selecting, when clicked compare the user selection to the computer selection
function play(playerChoice) {
  computerChoice()
  if (playerChoice == "rock" && computer[compIndex] == "rock") {
    console.log("it is a tie");
  }
  else if (playerChoice == "rock" && computer[compIndex] == "scissors") {
    console.log("Player Wins")
  } else if (playerChoice == "rock" && computer[compIndex] == "paper") {
    console.log("Computer Wins")
  }
  else if (playerChoice == "paper" && computer[compIndex] == "rock") {
    console.log("Player Wins")
  }
  else if (playerChoice == "paper" && computer[compIndex] == "paper") {
    console.log("It is a tie");
  }
  else if (playerChoice == "paper" && computer[compIndex] == "scissor") {
    console.log("Computer Wins");
  }
  else if (playerChoice == "scissors" && computer[compIndex] == "rock") {
    console.log("Computer Wins")
  }
  else if (playerChoice == "scissors" && computer[compIndex] == "paper") {
    console.log("player Wins");
  }
  else if (playerChoice == "scissors" && computer[compIndex] == "scissor") {
    console.log("It is a tie");
  }

}

// to do!
// create a function to draw the player and computer choice
function computerChoice() {
  compIndex = Math.floor(Math.random() * computer.length)
  console.log(compIndex);
}

function chooseWinner() {
}

// create a function that decides the winner with if else statements
// create a scoreboard function that keeps track of computer wins vs player wins
// 
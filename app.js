let computer = ["rock", "paper", "scissors"]
let choices = ["rock", "papar", "scissors"]
let compIndex = 0
// what does this do?
// understands what the player is selecting, when clicked compare the user selection to the computer selection
function play(playerChoice) {
  computerChoice()
  if (playerChoice == "rock" && computer[compIndex] == "rock") {
    pRockElem()
    cRockElem()
    console.log("it is a tie");
  }
  else if (playerChoice == "rock" && computer[compIndex] == "scissors") {
    pRockElem()
    cScissorElem()
    playerWins()
    console.log("Player Wins")
  } else if (playerChoice == "rock" && computer[compIndex] == "paper") {
    pRockElem()
    cPaperElem()
    computerWins()
    console.log("Computer Wins")
  }
  else if (playerChoice == "paper" && computer[compIndex] == "rock") {
    pPaperElem()
    cRockElem()
    playerWins()
    console.log("Player Wins")
  }
  else if (playerChoice == "paper" && computer[compIndex] == "paper") {
    pPaperElem()
    cPaperElem()
    console.log("It is a tie");
  }
  else if (playerChoice == "paper" && computer[compIndex] == "scissors") {
    pPaperElem()
    cScissorElem()
    computerWins()
    console.log("Computer Wins");
  }
  else if (playerChoice == "scissors" && computer[compIndex] == "rock") {
    pScissorElem()
    cRockElem()
    computerWins()
    console.log("Computer Wins")
  }
  else if (playerChoice == "scissors" && computer[compIndex] == "paper") {
    pScissorElem()
    cPaperElem()
    playerWins()
    console.log("player Wins");
  }
  else if (playerChoice == "scissors" && computer[compIndex] == "scissors") {
    pScissorElem()
    cScissorElem()
    console.log("It is a tie");
  }

}
function pRockElem() {
  let playerRockElem = document.getElementById("pChoice")
  playerRockElem.innerHTML = `<i class="fa fa-hand-rock-o"></i>`
}
function cRockElem() {
  let computerRockElem = document.getElementById("cChoice")
  computerRockElem.innerHTML = `<i class="fa fa-hand-rock-o"></i>`
}
function pPaperElem() {
  let playerPaperElem = document.getElementById("pChoice")
  playerPaperElem.innerHTML = `<i class="fa fa-hand-paper-o"></i>`
}
function cPaperElem() {
  let computerPaperElem = document.getElementById("cChoice")
  computerPaperElem.innerHTML = `<i class="fa fa-hand-paper-o"></i>`
}
function pScissorElem() {
  let playerScissorElem = document.getElementById("pChoice")
  playerScissorElem.innerHTML = `<i class="fa fa-hand-scissors-o"></i>`
}
function cScissorElem() {
  let computerScissorElem = document.getElementById("cChoice")
  computerScissorElem.innerHTML = `<i class="fa fa-hand-scissors-o"></i>`
}




// to do!
// create a function to draw the player and computer choice
function computerChoice() {
  compIndex = Math.floor(Math.random() * computer.length)
  console.log(compIndex);
}

function playerWins() {
  let playerWinner = document.getElementById("play")
  playerWinner.innerText = "Player Wins!"
  playerWinner.classList.add("text-success")
  let computerLooses = document.getElementById("com")
  computerLooses.innerText = "Computer Looses!"
  computerLooses.classList.add("text-danger")
}

function computerWins() {
  let computerWinner = document.getElementById("com")
  computerWinner.innerText = "Clayer Wins!"
  computerWinner.classList.add("text-success")
  let playerLooses = document.getElementById("com")
  playerLooses.innerText = "Player Looses!"
  playerLooses.classList.add("text-danger")
}

// create a function that decides the winner with if else statements
// create a scoreboard function that keeps track of computer wins vs player wins
// 
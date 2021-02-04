startGame();
const button = document.querySelector("button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
function startGame() {
  document.querySelector(".rock").addEventListener("click", rememberResult);
  document.querySelector(".paper").addEventListener("click", rememberResult);
  document.querySelector(".scissors").addEventListener("click", rememberResult);
  // document
  //   .querySelectorAll("#buttons button")
  //   .addEventListener("click", rememberResult);
}
let player = "";
function rememberResult(e) {
  if (e.target == rock) {
    console.log("ROCK - PLAYER");
    player = "rock";
  } else if (e.target == paper) {
    console.log("PAPER - PLAYER");
    player = "paper";
  } else if (e.target == scissors) {
    console.log("SCISSORS - PLAYER");
    player = "scissors";
  }
  computerDecision();
  // compareResults(player);
}

let computer = "";
function computerDecision() {
  let random = Math.floor(Math.random() * 3);
  // console.log(random);
  if (random == 0) {
    computer = "rock";
  } else if (random == 1) {
    computer = "paper";
  } else if (random == 2) {
    computer = "scissors";
  }
  console.log(computer, "COMPUTER'S CHOICE");

  compareResults(computer);
}

function compareResults(r) {
  const loser = document.querySelector("#lose");
  const winner = document.querySelector("#win");
  const tie = document.querySelector("#draw");

  if (computer == player) {
    console.log("it's a draw");
    tie.classList.remove("hidden");
  } else if (computer == "rock" & player == "paper") {
    console.log("player wins");
    winner.classList.remove("hidden");
  } else if (computer == "paper" & player == "rock") {
    console.log("player loses");
    loser.classList.remove("hidden");
  } else if (computer == "scissors" & player == "paper") {
    console.log("player loses");
    loser.classList.remove("hidden");
  } else if (computer == "scissors" & player == "rock") {
    console.log("player wins");
    winner.classList.remove("hidden");
   } else if (player == "scissors" & computer == "paper") {
    console.log("player wins");
    winner.classList.remove("hidden");
   } else if (player == "scissors" & computer == "rock") {
    console.log("player loses");
    loser.classList.remove("hidden");
   } 

   const user = document.querySelector("#player1.player");
   const handPaper = "url('hand_paper.png')";
   const handRock = "url('hand_rock.png')";
   const handScissors = "url('hand_scissors.png')";
   if (player == "paper") {
      user.style.backgroundImage = handPaper;
      console.log("help");
   } else if (player == "scissors") {
      user.style.backgroundImage = handScissors;
   } else if (player == "rock") {
      user.style.backgroundImage = handRock;
 }

const machine = document.querySelector("#player2.player");
 if (computer == "paper") {
  machine.style.backgroundImage = handPaper;
  console.log("help");
} else if (computer == "scissors") {
  machine.style.backgroundImage = handScissors;
} else if (computer == "rock") {
  machine.style.backgroundImage = handRock;
}
  
}
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
  compareResults(player);
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

  compareResults(random);
}

function compareResults(r) {
  console.log("hey, here are the results", r)
}

// function compareResults(computer) {
//   console.log(computer, "hello");
//   let result = " ";
//   // if ((computer == "rock") & (player == "rock")) {
//   //   result = "tie";
//   //   console.log("here");
//   // }
// }

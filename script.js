startGame();
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

function rememberResult(e) {
  console.log(e);
  computerDecision();
}

function computerDecision(res) {
  let computer = " ";
  let random = Math.floor(Math.random() * 3);
  // console.log(random);
  if (random == 0) {
    computer = "rock";
  } else if (random == 1) {
    computer = "paper";
  } else if (random == 2) {
    computer = "scissors";
  }
  // console.log(computer);

  compareResults(res);
}
// function addAnimation(){

// }

function compareResults(computer) {
  console.log(computer, "k");
  let result = " ";
  // if ((computer == "rock") & (player == "rock")) {
  //   result = "tie";
  //   console.log("here");
  // }
}

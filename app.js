const gameScreen = document.querySelector("#game-screen");
const player1Score = document.querySelector("#score-left");
const player2Score = document.querySelector("#score-right");

const screenHeight = 500;
const screenWidth = 1400;

const player1Position = [30, 225];
const player2Position = [screenWidth - 30 - 20, 225];

const player1 = document.createElement("div");
player1.classList.add("pong");
gameScreen.appendChild(player1);
let player1Moving;

const player2 = document.createElement("div");
player2.classList.add("pong");
gameScreen.appendChild(player2);
let player2Moving;

drawPlayer1();
drawPlayer2();

document.addEventListener("keypress", player1Movement);
document.addEventListener("keyup", player1MovementStop);

function player1Movement(e) {
  switch (e.key) {
    case "w":
      player1Moving = setInterval(moveUpPlayer1, 10);
      break;
    case "s":
      player1Moving = setInterval(moveDownPlayer1, 10);
      break;
  }
}

function moveUpPlayer1() {
  if (player1Position[1] > 0) {
    console.log("test");
    player1Position[1] -= 2;
    drawPlayer1();
  }
}

function moveDownPlayer1() {
  if (player1Position[1] < screenHeight - 50) {
    player1Position[1] += 2;
    drawPlayer1();
  }
}

function player1MovementStop() {
  clearInterval(player1Moving);
}

function drawPlayer2() {
  player2.style.left = player2Position[0] + "px";
  player2.style.top = player2Position[1] + "px";
}

function drawPlayer1() {
  player1.style.left = player1Position[0] + "px";
  player1.style.top = player1Position[1] + "px";
}

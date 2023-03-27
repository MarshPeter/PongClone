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
let player1Speed = 0;

const player2 = document.createElement("div");
player2.classList.add("pong");
gameScreen.appendChild(player2);
let player2Speed = 0;

drawPlayer1();
drawPlayer2();

document.addEventListener("keydown", changeMovement);
document.addEventListener("keyup", stopMovement);

let movement = setInterval(movePlayers, 10);

function changeMovement(e) {
  console.log(e.key);
  switch (e.key) {
    case "w":
      player1Speed = -5;
      break;
    case "s":
      player1Speed = 5;
      break;
    case "ArrowUp":
      player2Speed = -5;
      break;
    case "ArrowDown":
      player2Speed = 5;
      break;
  }
}

function stopMovement(e) {
  if (e.key === "w" || e.key === "s") {
    player1Speed = 0;
  }
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    player2Speed = 0;
  }
}

function movePlayers() {
  if (player1Position[1] >= 0 && player1Position[1] <= screenHeight - 50) {
    player1Position[1] += player1Speed;
  } else if (player1Position[1] < 0) {
    player1Position[1] = 0;
  } else if (player1Position[1] + 50 > screenHeight) {
    player1Position[1] = screenHeight - 50;
  }

  if (player2Position[1] >= 0 && player2Position[1] <= screenHeight - 50) {
    player2Position[1] += player2Speed;
  } else if (player2Position[1] < 0) {
    player2Position[1] = 0;
  } else if (player2Position[1] + 50 > screenHeight) {
    player2Position[1] = screenHeight - 50;
  }

  drawPlayer1();
  drawPlayer2();
}

function drawPlayer2() {
  player2.style.left = player2Position[0] + "px";
  player2.style.top = player2Position[1] + "px";
}

function drawPlayer1() {
  player1.style.left = player1Position[0] + "px";
  player1.style.top = player1Position[1] + "px";
}

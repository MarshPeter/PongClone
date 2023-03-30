const gameScreen = document.querySelector("#game-screen");
const player1Score = document.querySelector("#score-left");
const player2Score = document.querySelector("#score-right");

const screenHeight = 500;
const screenWidth = 1400;

const ballDiameter = 20;

const player1Position = [30, 225];
const player2Position = [screenWidth - 30 - 20, 225];
const playerWidth = 20;
const playerHeight = 50;
const ballPosition = [
  (screenWidth - ballDiameter) / 2,
  (screenHeight - ballDiameter) / 2,
];

const player1 = document.createElement("div");
player1.classList.add("pong");
gameScreen.appendChild(player1);
let player1Speed = 0;

const player2 = document.createElement("div");
player2.classList.add("pong");
gameScreen.appendChild(player2);
let player2Speed = 0;

const ball = document.createElement("div");
ball.classList.add("ball");
gameScreen.appendChild(ball);
// let ballSpeed = [
//   Math.floor(Math.random() * 10) + 1,
//   Math.floor(Math.random() * 10) + 1,
// ];

let ballSpeed = [2, 3];

drawPlayer1();
drawPlayer2();
drawBall();

document.addEventListener("keydown", changeMovement);
document.addEventListener("keyup", stopMovement);

let movement = setInterval(moveEntities, 10);

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

function moveEntities() {
  checkPlayerCollisions();
  checkBallCollisions();
  checkBallPlayerCollisions();
  drawPlayer1();
  drawPlayer2();
  drawBall();
}

function checkBallPlayerCollisions() {
  // player1 side
  if (
    ballPosition[0] < player1Position[0] + playerWidth &&
    ballPosition[0] > player1Position[0] &&
    ballPosition[1] > player1Position[1] &&
    ballPosition[1] + ballDiameter < player1Position[1] + playerHeight
  ) {
    ballPosition[0] += 3;
    ballSpeed[0] = ballSpeed[0] * -1;
  }

  // player2 side
  if (
    ballPosition[0] < player2Position[0] + playerWidth &&
    ballPosition[0] > player2Position[0] &&
    ballPosition[1] > player2Position[1] &&
    ballPosition[1] + ballDiameter < player2Position[1] + playerHeight
  ) {
    ballPosition[0] -= 20;
    ballSpeed[0] = ballSpeed[0] * -1;
  }
}

function checkPlayerCollisions() {
  // check player 1 collisions
  if (player1Position[1] >= 0 && player1Position[1] <= screenHeight - 50) {
    player1Position[1] += player1Speed;
  } else if (player1Position[1] < 0) {
    player1Position[1] = 0;
  } else if (player1Position[1] + 50 > screenHeight) {
    player1Position[1] = screenHeight - 50;
  }

  // check player 2 collisions
  if (player2Position[1] >= 0 && player2Position[1] <= screenHeight - 50) {
    player2Position[1] += player2Speed;
  } else if (player2Position[1] < 0) {
    player2Position[1] = 0;
  } else if (player2Position[1] + 50 > screenHeight) {
    player2Position[1] = screenHeight - 50;
  }
}

function checkBallCollisions() {
  // ball vertical movement
  if (ballPosition[1] >= 0 && ballPosition[1] <= screenHeight - ballDiameter) {
    ballPosition[1] += ballSpeed[1];
  } else if (ballPosition[1] < 0) {
    ballPosition[1] = 0;
    ballSpeed[1] *= -1;
  } else if (ballPosition[1] + 50 > screenHeight) {
    ballPosition[1] = screenHeight - ballDiameter;
    ballSpeed[1] *= -1;
  }

  // ball horizontal movement
  if (ballPosition[0] >= 0 && ballPosition[0] <= screenWidth - ballDiameter) {
    ballPosition[0] += ballSpeed[0];
  } else if (ballPosition[0] < 0) {
    ballPosition[0] = 0;
    ballSpeed[0] *= -1;
  } else if (ballPosition[0] + 50 > screenWidth) {
    ballPosition[0] = screenWidth - ballDiameter;
    ballSpeed[0] *= -1;
  }
}

function drawPlayer2() {
  player2.style.left = player2Position[0] + "px";
  player2.style.top = player2Position[1] + "px";
}

function drawPlayer1() {
  player1.style.left = player1Position[0] + "px";
  player1.style.top = player1Position[1] + "px";
}

function drawBall() {
  ball.style.left = ballPosition[0] + "px";
  ball.style.top = ballPosition[1] + "px";
}

// gamesettings
const c = document.getElementsByTagName("canvas")[0];
const ctx = c.getContext("2d");
const width = 400;
const height = 400;
const ROWS = 25;
const COLS = 25;
const BLOCK_W = Math.floor(width / COLS);
const BLOCK_H = Math.floor(height / ROWS);
const size = ROWS;
let score = 0;

let snake;
const startXSnake = Math.floor(ROWS / 2);
const startYSnake = Math.floor(COLS / 2);

let snakeAlive = false;
let foodOnBoard = false;

function respawnSnake() {
  if (!snakeAlive) {
    snake = [{ x: startXSnake, y: startYSnake }];
    snakeAlive = true;
  }
  // hier komt measureament
}
function moveSnake() {
  let moves = [];
  // check boundries
  if (
    snake[0].x !== ROWS - 1 &&
    !snake.some((e) => e.x === snake[0].x + 1 && e.y === snake[0].y)
  ) {
    moves.push("canMoveRight");
  }
  if (
    snake[0].x !== 0 &&
    !snake.some((e) => e.x === snake[0].x - 1 && e.y === snake[0].y)
  ) {
    moves.push("canMoveLeft");
  }
  if (
    snake[0].y !== COLS - 1 &&
    !snake.some((e) => e.x === snake[0].x && e.y === snake[0].y + 1)
  ) {
    moves.push("canMoveDown");
  }
  if (
    snake[0].y !== 0 &&
    !snake.some((e) => e.x === snake[0].x + 1 && e.y === snake[0].y - 1)
  ) {
    moves.push("canMoveUp");
  }
  moves = moves.filter(Boolean);
  if (moves.length === 0) {
    snakeAlive = false;
  }
  const direction = Math.floor(Math.random() * moves.length);
  const move = moves[direction];

  if (move === "canMoveRight") {
    snake.unshift({ x: snake[0].x + 1, y: snake[0].y });
    if (!(snake[0].x === food.x && snake[0].y === food.y)) {
      snake.pop();
    } else {
      eatFood();
    }
  } else if (move === "canMoveLeft") {
    snake.unshift({ x: snake[0].x - 1, y: snake[0].y });
    if (!(snake[0].x === food.x && snake[0].y === food.y)) {
      snake.pop();
    } else {
      eatFood();
    }
  } else if (move === "canMoveDown") {
    snake.unshift({ x: snake[0].x, y: snake[0].y + 1 });
    if (!(snake[0].x === food.x && snake[0].y === food.y)) {
      snake.pop();
    } else {
      eatFood();
    }
  } else if (move === "canMoveUp") {
    snake.unshift({ x: snake[0].x, y: snake[0].y - 1 });
    if (!(snake[0].x === food.x && snake[0].y === food.y)) {
      snake.pop();
    } else {
      eatFood();
    }
  } // should never happen
  else {
    console.error("should never happen");
  }
}

function placeFood() {
  if (!foodOnBoard) {
    food = {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size),
    };
    foodOnBoard = true;
  }
}
function eatFood() {
  score += 10;
  foodOnBoard = false;
}
function drawBoard() {
  for (let x = 0; x < COLS; ++x) {
    for (let y = 0; y < ROWS; ++y) {
      ctx.strokeStyle = "green";
      ctx.lineWidth = "0.8";
      ctx.fillStyle = "black";

      ctx.fillRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W, BLOCK_H);
      ctx.strokeRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W, BLOCK_H);
    }
  }
}
function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(BLOCK_W * food.x, BLOCK_H * food.y, BLOCK_W, BLOCK_H);
  ctx.strokeRect(BLOCK_W * food.x, BLOCK_H * food.y, BLOCK_W, BLOCK_H);
}
function drawSnake() {
  //drawSnakeHead
  ctx.fillStyle = "yellow";
  ctx.fillRect(BLOCK_W * snake[0].x, BLOCK_H * snake[0].y, BLOCK_W, BLOCK_H);
  ctx.strokeRect(BLOCK_W * snake[0].x, BLOCK_H * snake[0].y, BLOCK_W, BLOCK_H);
  //drawSnake
  ctx.fillStyle = "white";
  snake.slice(1).forEach((element) => {
    ctx.fillRect(BLOCK_W * element.x, BLOCK_H * element.y, BLOCK_W, BLOCK_H);
    ctx.strokeRect(BLOCK_W * element.x, BLOCK_H * element.y, BLOCK_W, BLOCK_H);
  });
}
function draw() {
  respawnSnake();
  placeFood();
  moveSnake();
  drawBoard();
  drawFood();
  drawSnake();
}

function startGame() {
  setInterval(draw, 200);
}

startGame();

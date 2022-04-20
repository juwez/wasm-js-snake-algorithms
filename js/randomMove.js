// gamesettings
const c = document.getElementsByTagName("canvas")[0];
const ctx = c.getContext("2d");
const width = 400;
const height = 400;
const ROWS = 25;
const COLS = 25;
const BLOCK_W = Math.floor(width / COLS);
const BLOCK_H = Math.floor(height / ROWS);
let size = ROWS;

let snake;
let startXSnake = Math.floor(ROWS / 2);
let startYSnake = Math.floor(COLS / 2);

let food_x
let food_y

let snakeAlive=false;
let foodOnBoard=false;

function resetSnake() {
  if (!snakeAlive){
    snake = [{ x: startXSnake, y: startYSnake }];
    snakeAlive = true;
  }
}

function placeFood() {
  if (!foodOnBoard){
    food_x = Math.floor(Math.random() * size);
    food_y = Math.floor(Math.random() * size);
  }
}

function draw() {
  resetSnake()
  placeFood()
    for (let x = 0; x < COLS; ++x) {
      for (let y = 0; y < ROWS; ++y) {
        if (y == food_y && x == food_x) {
          ctx.fillStyle = "red";
        }
         else {
          ctx.strokeStyle = "black";
          ctx.lineWidth = "0.8";
          ctx.fillStyle = "black";
        }
        ctx.fillRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W, BLOCK_H);
        ctx.strokeRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W, BLOCK_H);
      }
       }
    for (let i = 0; i < snake.length; i++) {
         console.log('first')
         ctx.fillStyle = i == 0 ? "green" : "white";
         ctx.fillRect(BLOCK_W * snake[i].x, BLOCK_H * snake[i].y, BLOCK_W, BLOCK_H);

         ctx.strokeStyle = "red";
         ctx.strokeRect(BLOCK_W * snake[i].x, BLOCK_H * snake[i].y, BLOCK_W, BLOCK_H);
}
}

function startGame() {
    setInterval(draw(), 50);
  }

startGame();

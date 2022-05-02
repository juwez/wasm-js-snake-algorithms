# todo

## write score

## measure cpu load from localhost

## c++

## see if performance is noice



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
let score=0

let snake;
const startXSnake = Math.floor(ROWS / 2);
const startYSnake = Math.floor(COLS / 2);

let food_x
let food_y
let direction;
let snakeAlive=false;
let foodOnBoard=false;

function respawnSnake() {
  if (!snakeAlive) {
    snake = [{ x: startXSnake, y: startYSnake }];
    snakeAlive = true;
  }
  // hier komt measureament
}
function moveSnake(){
  console.log(snake)
  let canMoveRight=snake[0].x !== ROWS
  let canMoveLeft=snake[0].x !== 0
  let canMoveUp=snake[0].y !== 0
  let canMoveDown = snake[0].y !== COLS;

  const direction = Math.floor(Math.random() * 4);
  if  (!canMoveDown && !canMoveUp && !canMoveLeft && !canMoveRight)
  {snakeAlive =false}

//moveLeft
    if (direction === 0 ) {
      snake.unshift({ x: snake[0].x - 1, y: snake[0].y });
      if (!(snake[0].x - 1 === food_x && snake[0].y === food_y)) {
        snake.pop();
      } else {
        eatFood();
      }
      //moveDown
    } else if (direction === 1) {
      snake.unshift({ x: snake[0].x, y: snake[0].y - 1 });
      if (!(snake[0].x - 1 === food_x && snake[0].y === food_y)) {
        snake.pop();
      } else {
        eatFood();
      }
      //moveRight
    } else if (direction === 2) {
      snake.unshift({ x: snake[0].x + 1, y: snake[0].y });
      if (!(snake[0].x - 1 === food_x && snake[0].y === food_y)) {
        snake.pop();
      } else {
        eatFood();
      }
      //moveUp
    } else if (direction === 3) {
      snake.unshift({ x: snake[0].x, y: snake[0].y + 1 });
      if (!(snake[0].x - 1 === food_x && snake[0].y === food_y)) {
        snake.pop();
      } else {
        eatFood();
      }
    }
  } 
  


function placeFood() {
  if (!foodOnBoard){
    food_x = Math.floor(Math.random() * size);
    food_y = Math.floor(Math.random() * size);
    foodOnBoard = true 
  }
}
function eatFood(){
  score += 10;
  foodOnBoard = false;
}

function draw() {
  respawnSnake()
  placeFood()
  moveSnake();
  ctx.clear
    for (let x = 0; x < COLS; ++x) {
      for (let y = 0; y < ROWS; ++y) {
        if (y == food_y && x == food_x) {
          ctx.fillStyle = "red";
        }
         else {
          ctx.strokeStyle = "green";
          ctx.lineWidth = "0.8";
          ctx.fillStyle = "black";
          
        }
        ctx.fillRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W, BLOCK_H);
        ctx.strokeRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W, BLOCK_H);
      }
       }
    for (let i = 0; i < snake.length; i++) {
         ctx.fillStyle = "white";
         ctx.fillRect(BLOCK_W * snake[i].x, BLOCK_H * snake[i].y, BLOCK_W, BLOCK_H);
}
}

function startGame() {
    setInterval(draw, 50);
  }

startGame();

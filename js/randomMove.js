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
  let moves=[]
  
  if (snake[0].x !== ROWS - 1) {moves.push('canMoveRight')}
  if (snake[0].x !== 0) {moves.push('canMoveLeft')}

  if (snake[0].y !== COLS - 1) {moves.push('canMoveUp')}
  if (snake[0].y !== 0 ) {moves.push('canMoveDown')}
  console.log(snake[0].y)


  moves = moves.filter(Boolean)
  if(moves.length === 0)
  
  {snakeAlive = false}
  let direction = Math.floor(Math.random() * moves.length);
  console.log(direction)
  let move = moves[direction];
  console.log(moves)
  console.log(move)
  if(move ==='canMoveRight'){
      snake.unshift({ x: snake[0].x + 1, y: snake[0].y });
      if (!(snake[0].x + 1 === food_x && snake[0].y === food_y)) {
        snake.pop();
      } else {
        eatFood();
      }
    }
else if(move ==='canMoveLeft'){
    
      snake.unshift({ x: snake[0].x - 1, y: snake[0].y });
      if (!(snake[0].x - 1 === food_x && snake[0].y === food_y)) {
        snake.pop();
      } else {
        eatFood();
      }
    }
    
    else if(move ==='canMoveUp'){
      snake.unshift({ x: snake[0].x, y: snake[0].y + 1 });
      if (!(snake[0].x === food_x && snake[0].y + 1 === food_y)) {
        snake.pop();
      } else {
        eatFood();
      }
    }
    else if (move === "canMoveDown") {
      snake.unshift({ x: snake[0].x, y: snake[0].y - 1 });
      if (!(snake[0].x - 1 === food_x && snake[0].y - 1 === food_y)) {
        snake.pop();
      } else {
        eatFood();
      }
    }
    else // should never happen 
      {
     console.error('should never happen')
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

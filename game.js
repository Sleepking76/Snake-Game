import {update as updateSnake,draw as drawSnake, SNAKE_SPEED, getSnakeHead,snakeIntersection} from './snake.js'
import {update as updatefood, draw as drawfood} from './Food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){
 if (gameOver) {
     return alert ('Kalah Goblok')
 }


  window.requestAnimationFrame(main)
  const secondSinceLastRender = (currentTime-lastRenderTime)/1000
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTime

 update()
 draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updatefood(gameBoard)
    chechDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawfood(gameBoard)
}

function chechDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
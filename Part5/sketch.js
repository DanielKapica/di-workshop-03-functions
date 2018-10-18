var x = 0
var speed = 3
var paddleY = 30
var isPaddleColldingTop = false
var isPaddleColldingBottom = false
var screenWidth = 300
var screenHeight = 100
var isBallCollidingPaddle = false

function setup() {
  createCanvas(screenWidth, screenHeight)
}

function draw() {
  background(0)  
  ellipse(x, 30, 10, 10)
  rect(0,paddleY,5,20)
  keyPressed()
  paddleColliding()
}

function keyPressed() {
    if (key == 'w' && !isPaddleColldingTop) {
      paddleY = paddleY - 2
    } else if (key == 's' && !isPaddleColldingBottom){
        paddleY = paddleY + 2
    }
}

function paddleColliding(){
    if (paddleY >= (screenHeight-20)) {
        isPaddleColldingBottom = true
    } else if(paddleY <= 0){
        isPaddleColldingTop = true
    } else{
        isPaddleColldingBottom = false
        isPaddleColldingTop = false
    }
}

function ballColliding(){
    x = x + speed
    if (x < 0) {
      speed = speed * -1

    } else if (x > 300) {
      speed = speed * -1
    }
}
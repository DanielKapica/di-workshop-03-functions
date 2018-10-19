var ballX = 50
var speed = 3
var paddleY = 40
var isPaddleColldingTop = false
var isPaddleColldingBottom = false
var screenWidth = 300
var screenHeight = 100
var isBallCollidingPaddle = false
var ballY = 50
var paddleY2 = paddleY+20
userLost = false
score = 0

function setup() {
  createCanvas(screenWidth, screenHeight)
}

function draw() {
  background(100)
  if (!userLost){
    if((keyIsDown(UP_ARROW)) && !isPaddleColldingTop){
        paddleY = paddleY - 2
      } else if (((keyIsDown(DOWN_ARROW)) && !isPaddleColldingBottom)){
          paddleY = paddleY + 2
      }
    ellipse(ballX, ballY, 10, 10)
    rect(0,paddleY,5,20)
    paddleColliding()
    ballColliding()
    text("Score: ", 220, 10)
    text(score, 290, 10)
  }else{
      text("YOU LOST! Your score was: ",10,50)
      text(score,50,75)
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
    ballX = ballX + speed
    if ((ballY > paddleY && ballY < paddleY2)&&(ballX<=10)){
      speed = speed * -1
      score++
    } else if (ballX > 300) {
      speed = speed * -1
    } else if (ballX < 0){
        speed = 0
        userLost = true
    }
}
var x = 0
var speed = 3
var userY = 30
var isPaddleColldingTop = false
var isPaddleColldingBottom = false
var screenWidth = 300
var screenHeight = 100

function setup() {
  createCanvas(screenWidth, screenHeight)
}

function draw() {
  background(0)

  x = x + speed

  if (x < 0) {
    speed = speed * -1
  } else if (x > 300) {
    speed = speed * -1
  }
  
  ellipse(x, 30, 10, 10)
  rect(0,userY,5,20)

  keyPressed()
  paddleColliding()
}

function keyPressed() {
    if (key == 'w' && !isPaddleColldingTop) {
      userY = userY - 2
    } else if (key == 's' && !isPaddleColldingBottom){
        userY = userY + 2
    }
}

function paddleColliding(){
    if (userY >= (screenHeight-20)) {
        isPaddleColldingBottom = true
    } else if(userY <= 0){
        isPaddleColldingTop = true
    }else{
        isPaddleColldingBottom = false
        isPaddleColldingTop = false
    }
}
function setup() {
    createCanvas(400, 400)
    background(255)
  }
  
  function draw() {
    fill(255, 130, 0)
    stroke(0)
    triangle(0, 30, 40, 0, 80, 30)
    square(5, 30, 70)
  }

  function square(x, y, size) {
    rect(x, y, size, size)
  }

  function roof(x, y) {
    // ...
  }
  
  function house(x, y) {
    // ...
  }
function setup() {
    createCanvas(400, 400)
    background(255)
  }
  
  function draw() {
    fill(255, 130, 0)
    stroke(0)
    house(5, 30, 70, 0, 30, 40, 0, 80, 30)
  }

  function square(x, y, size) {
    rect(x, y, size, size)
  }

  function roof(x1, y1, x2, y2, x3, y3) {
    // ...
    triangle(x1, y1, x2, y2, x3, y3)
  }
  
  function house(x, y, size, x1, y1, x2, y2, x3, y3) {
    // ...
    square(x, y, size, size)
    roof(x1, y1, x2, y2, x3, y3)
  }
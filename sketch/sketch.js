function setup() {
    createCanvas(400, 400)
    background(255)
  }
  
  function draw() {
    fill("red")
    stroke(0)
    house(5, 50, 80, 0, 50, 50, 0, 80, 50)
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
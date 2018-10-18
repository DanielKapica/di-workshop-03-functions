function setup() {
    createCanvas(400, 400)
    background(255)
  }
  
  function draw() {
    fill("blue")
    stroke(0)
    house(0, 50, 100, 0, 50, 50, 0, 100, 50)
    house(100, 150, 100, 100, 150, 150, 100, 200, 150)
    house(200, 250, 100, 200, 250, 250, 200, 300, 250)
  }

  function square(x, y, size) {
    rect(x, y, size, size)
  }

  function roof(x1, y1, x2, y2, x3, y3) {
    triangle(x1, y1, x2, y2, x3, y3)
  }
  
  function house(x, y, size, x1, y1, x2, y2, x3, y3) {
    square(x, y, size)
    roof(x1, y1, x2, y2, x3, y3)
  }
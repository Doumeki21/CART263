class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 400;
    this.height = 10;
    this.active = true;
  }

  update() {
    this.move();
    this.display();
  }

  break() {

  }

  move() {
    this.x = constrain(mouseX, 0, width);
  }

  display() {
    stroke(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
}

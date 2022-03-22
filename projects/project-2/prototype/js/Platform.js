class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 400;
    this.height = 10;
  }

  update() {
    this.display();
  }

  break() {

  }

  display() {
    stroke(255);
    // rectMode(CENTER, CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
}

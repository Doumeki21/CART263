class Platform {
  constructor(x, y) {
    //the platform
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 10;
    this.active = true;

    // //danger zone
    // this.dangerX =
    // this.dangerY =
    // this.dangerAmount =

    //hole
    this.hole = {
      x: random(0, width),
      y: this.y,
      width: random(50, 100),
      height: this.height,
    }

  }

  update() {
    this.move();
    this.displayPlatform();
    this.displayHole();
  }

  // //if the ball pass through the platform, the platform disappears
  // passThrough() {
  //   if (this.y + this.size / 2 > platform.y - platform.height / 2 && this.y - this.size / 2 < platform.y + platform.height / 2)
  // }

  move() {
    // //the platforms follows the mouse on the x-axis.
    // this.x = constrain(mouseX, 0, width);

    //second values = controls/tracks where the object goes.
    this.hole.x = map(mouseX, 0, width, 0, width);
  }

  displayPlatform() {
    push();
    stroke(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  displayHole() {
    push();
    noStroke();
    fill(100);
    rectMode(CENTER);
    // this.holeX = random(this.x)
    rect(this.hole.x, this.hole.y, this.hole.width, this.hole.height);
    pop();
  }
}

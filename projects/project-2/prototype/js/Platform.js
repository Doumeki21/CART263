class Platform {
  constructor(x, y) {
    //the platform
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 10;
    this.active = true;

    //danger zone
    this.danger = {
      initialX: random(0, width),
      currentX: random(0, width),
      y: this.y,
      width: random(20, 500),
      height: this.height,
      // amount:
    };

    //hole
    this.hole = {
      initialX: random(0, width),
      currentX: random(0, width),
      y: this.y,
      width: random(50, 200),
      height: this.height,
    };
  }

  update() {
    this.move();
    this.checkOverlap();
    this.displayPlatform();
    this.displayHole();
    this.displayDanger();
  }

  // //if the ball pass through the platform, the platform disappears
  // passThrough() {
  //   if (this.y + this.size / 2 > platform.y - platform.height / 2 && this.y - this.size / 2 < platform.y + platform.height / 2)
  // }

  //handleinput
  move() {
    // //the platforms follows the mouse on the x-axis.
    // this.x = constrain(mouseX, 0, width);
    //
    // let dx = mouseX - pmouseX;
    //
    // //second values = controls/tracks where the object goes.
    // this.hole.currentX += dx;
    // this.danger.currentX += dx;

    if (keyIsDown(LEFT_ARROW)) {
      this.hole.currentX -= 5;
      this.danger.currentX -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.hole.currentX += 5;
      this.danger.currentX += 5;
    }
  }

  checkOverlap() {
    if (
      this.hole.currentX - this.hole.width > this.danger.currentX + this.danger.width &&
      this.hole.currentX + this.hole.width < this.danger.currentX - this.danger.width
    ) {
      this.danger.currentX = random(0, width);
      this.hole.currentX = random(0, width);
    }
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
    rect(this.hole.currentX, this.hole.y, this.hole.width, this.hole.height);
    pop();
  }

  displayDanger() {
    push();
    noStroke();
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(
      this.danger.currentX,
      this.danger.y,
      this.danger.width,
      this.danger.height
    );
    pop();
  }
}

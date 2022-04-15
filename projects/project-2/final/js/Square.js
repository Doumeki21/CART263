class Square {
  constructor(x, y) {
    this.squareYSpeeds = [-5, -4, -3];
    this.squareXSpeeds = [-0.5, -0.4, -0.3, 0.3, 0.4, 0.5];
    this.squareMovingSpeed = 10;
    this.square = {
      x: x,
      y: y,
      vx: random(this.squareXSpeeds),
      vy: random(this.squareYSpeeds),
      ax: 0,
      ay: 0,
      maxSpeed: 15,
      size: 40,
      active: true,
      color: color(200, 200, 255),
    };
  }

  update() {
    if (this.square.active) {
      this.generateSquare();
      this.squareControl();
      this.movingSquare();
      this.squareDisplay();
    //   bouncingBall.handleOtherEnemies(this.square);
    }
  }

  //check prev project
  generateSquare() {
    //If the square has gone off the canvas, deactivate the square.
    if (this.square.y - this.square.size / 2 < 0) {
      this.square.active = false;
      //after 2 seconds, have the square appear at a random postion at the btm of screen
      setTimeout(() => {
        this.square.active = true;
        this.square.y = height;
        this.square.x = random(100, width/2 + 100);
        this.square.vx = random(this.squareXSpeeds);
        this.square.vy = random(this.squareYSpeeds);
      }, 2000);
    }
  }

  squareControl() {
    if (keyIsDown(LEFT_ARROW)) {
      this.square.x -= this.squareMovingSpeed;
    }
    //platform objects move right
    if (keyIsDown(RIGHT_ARROW)) {
      this.square.x += this.squareMovingSpeed;
    }

    // Wrap the square to the other side
    if (this.square.x + this.square.size < 0) {
      this.square.x += width + this.square.size;
    } else if (this.square.x - this.square.size > width) {
      this.square.x -= width + this.square.size;
    }
  }

  //Square moves.
  movingSquare() {
    //accelerates
    this.square.vx += this.square.ax;
    this.square.vy += this.square.ay;

    //Changing position.
    this.square.x += this.square.vx;
    this.square.y += this.square.vy;
  }

  //Display blue square.
  squareDisplay() {
    push();
    fill(this.square.color);
    stroke(0);
    rectMode(CENTER);
    rect(this.square.x, this.square.y, this.square.size);
    pop();
  }
}

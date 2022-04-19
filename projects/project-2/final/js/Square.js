//square class
//appears at the bottom of the screen and floats upwards
class Square {
  constructor(x, y) {
    //properties for its characteristics and its speed
    //speeds
    this.squareYSpeeds = [-5, -4, -3];
    this.squareXSpeeds = [-0.5, -0.4, -0.3, 0.3, 0.4, 0.5];
    this.squareMovingSpeed = 10;//for when it's controlled
    //dimensions
    this.x = x;
    this.y = y;
    this.size = 40;
    //movement
    this.vx = random(this.squareXSpeeds);
    this.vy = random(this.squareYSpeeds);
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 15;
    this.active = true;
    this.color = color(200, 200, 255);
  }

  //updates all functions from this class when it's active.
  update(bouncingBall) {
    if (this.active) {
      this.generateSquare();
      this.squareControl();
      this.movingSquare();
      this.squareDisplay();
      bouncingBall.handleOtherEnemies(this);//called in bouncingBall.js (checks if ball and rectangle touch)
    }
  }

  //checks when square isn't active, then randomizes its propeties to generate new square
  generateSquare() {
    //If the square has gone off the canvas, deactivate the square.
    if (this.y - this.size / 2 < 0) {
      this.active = false;
      //after 2 seconds, have the square appear at a random postion at the btm of screen
      setTimeout(() => {
        this.active = true;
        this.y = height;
        this.x = random(100, width / 2 + 100);
        this.vx = random(this.squareXSpeeds);
        this.vy = random(this.squareYSpeeds);
      }, 2000);
    }
  }

  //square controlled with the left and right arrow keys
  squareControl() {
    //platform objects move left w left key
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.squareMovingSpeed;
    }
    //platform objects move right w right key
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.squareMovingSpeed;
    }
    // Wrap the square to the other side
    if (this.x + this.size < 0) {
      this.x += width + this.size;
    } else if (this.x - this.size > width) {
      this.x -= width + this.size;
    }
  }

  //Square moves upwards.
  movingSquare() {
    //accelerates
    this.vx += this.ax;
    this.vy += this.ay;
    //Changing position.
    this.x += this.vx;
    this.y += this.vy;
  }

  //Display square.
  squareDisplay() {
    push();
    fill(this.color);
    stroke(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.size);
    pop();
  }
}

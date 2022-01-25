class Letter {
  constructor(x, y, letter) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
    this.maxBounce = 1;
    this.bounces = 0;
    this.letter = letter;
  }

  update() {
    this.gravity(0.001);
    this.move();
    this.display();
  }

  //Ball goes down due to gravity.
  gravity(force) {
    this.ay += force;
  }

  //Ball moves.
  move() {
    //accelerates
    this.vx += this.ax;
    this.vy += this.ay;
    //constraining the ball at reasonable speed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    //Changing position (moving)
    this.x += this.vx;
    this.y += this.vy;
    //If the ball has gone off the canvas, deactivate the ball.
    if (this.y - this.size / 2 > height) {
      if (this.bounces < this.maxBounce) {
        this.vy = -this.vy;
        this.bounces++;
      }
      else {
        this.active = false;
      }
    }
  }

  //display the letter
  display() {
    push();
    strokeWeight(10);
    stroke(255, 117, 138);
    fill(255);
    textSize(75);
    textStyle(BOLD);
    text(this.letter, this.x, this.y);
    pop();
  }
}

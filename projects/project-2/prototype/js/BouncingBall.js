class BouncingBall {
  constructor(x, y) {
    //properties for its characteristics, its dropping speed and when they disappear.
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    // this.active = true;
    // this.bounces = true;
  }

  //A single function that contains everything from this class to call in the main script.
  update() {
    this.gravity(0.0001);
    this.move();
    this.checkBounce();
    this.display();
  }

  //ball goes down due to gravity.
  gravity(force) {
    this.ay += force;
  }

  //ball moves.
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
  }

  checkBounce() {
    //If the ball touches the bottom of canvas, bounce
    if (this.y - this.size / 2 > height) {
        this.vy *= -this.vy;
    }
  }

  //display the BouncingBall
  display() {
    push();
    strokeWeight(10);
    stroke(255, 117, 138);
    fill(255);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}

class BouncingBall {
  constructor(x, y) {
    //properties for its characteristics, its dropping speed and when they disappear.
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 2;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 20;
    this.size = 40;
    // this.active = true;
    // this.bounces = true;
  }

  //A single function that contains everything from this class to call in the main script.
  update() {
    this.gravity(0.1);
    this.move();
    this.collision(platform);
    // this.checkBounce();
    this.display();
  }

  //ball goes down due to gravity.
  gravity(force) {
    this.ay += force;
  }

  //ball moves.
  move() {
    //Changing position (moving)
    this.x += this.vx;
    this.y += this.vy;
    //accelerates
    this.vx += this.ax;
    this.vy += this.ay;
    //constraining the ball at reasonable speed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

  }

  collision(platform) {
    //once ball bounces off from the Platform,
    if (this.y + this.size / 2 > platform.y - platform.height / 2 && this.y - this.size / 2 < platform.y + platform.height / 2) {
      if (this.x > platform.hole.x - platform.hole.width / 2 && this.x  < platform.hole.x + platform.hole.width / 2) {
         console.log(`pass though`);
       }
       else {
          this.vy = -this.vy;
          this.ay = 0;
       }
    }
  }

  // passThrough(platform) {
  //
  //   if (this.y + this.size / 2 > platform.hole.y - platform.hole.height / 2 ) {
  //
  //   }
  // }

  checkBounce() {
    //If the ball touches the bottom of canvas, bounce
    if (this.y - this.size / 2 > height) {
        this.vy = -this.vy;
        this.ay = 0;
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

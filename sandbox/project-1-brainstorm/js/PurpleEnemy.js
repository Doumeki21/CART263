class PurpleEnemy {
  constructor(x, y) {
    this.size = 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 10;
    this.angle = 0;
    this.rotatingSpeed = 2;

    this.pathX = x;
    this.pathY = y;
    this.pathSize = 300;
    this.pathAngle = 0;
    this.active = false;

    this.activate();
  }

  update() {
    this.rotatingPath();
    this.selfRotate();
      this.checkActive();
    this.display();
  }

  rotatingPath() {
    this.pathAngle -= this.rotatingSpeed;
  }

  selfRotate() {
    this.angle -= this.rotatingSpeed;
  }

  activate() {
    this.active = !this.active;
    setTimeout(this.activate.bind(this), random(1000, 5000));
  }

  checkActive() {
    if (!this.active) {
      this.pathX = random(0, width);
      this.pathY = random(0, height);
      console.log(`yes`);
    }
  }

  display() {
    //draw a path
    // push();
    // ellipse(this.pathX, this.pathY, this.pathSize);
    // pop();

    if (this.active) {
      //display the purple enemy
      push();
      fill(104, 59, 138); //purple
      // fill(168, 240, 227); //cyan?
      rectMode(CENTER, CENTER);
      //square follows along the path
      translate(this.pathX, this.pathY);
      rotate(this.pathAngle);
      translate(this.pathSize/2, 0); //translating the "anchor point" back to the square
      rotate(this.angle); //rotating along itself
      rect(0, 0, this.size);
      pop();
    }
  }
}

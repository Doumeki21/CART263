class PurpleEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 10;
    this.angle = 0;
    this.rotatingSpeed = 2;

    this.pathX = 200;
    this.pathY = 200;
    this.pathSize = 300;
    this.pathAngle = 0;
  }

  update() {
    this.rotatingPath();
    this.selfRotate();
    this.display();
  }

  rotatingPath() {
    this.pathAngle -= this.rotatingSpeed;
  }

  selfRotate() {
    this.angle -= this.rotatingSpeed;
  }

  display() {
    //draw a path
    // push();
    // ellipse(this.pathX, this.pathY, this.pathSize);
    // pop();

    //display the purple enemy
    push();
    fill(104, 59, 138);
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

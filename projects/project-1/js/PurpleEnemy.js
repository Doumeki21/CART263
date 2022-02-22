class PurpleEnemy extends Enemies{
  constructor(x, y) {
    super(x, y); //pathX, pathY
    this.enemySize = 80; //size of square
    this.speed = 10;
    this.angle = 0;
    this.rotatingSpeed = 5;

    this.size = 100; //size of the rotating path
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

  checkActive() {
    if (!this.active) {
      this.x = random(0, width);
      this.y = random(0, height);
      // console.log(`yes`);
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
      translate(this.x, this.y);
      rotate(this.pathAngle);
      translate(this.size/2, 0); //translating the "anchor point" back to the square
      rotate(this.angle); //rotating along itself
      rect(0, 0, this.enemySize);
      pop();
    }
  }
}

class PurpleEnemy extends Enemies{
  constructor(x, y) {
    super(x, y); //pathX, pathY
    this.enemySize = 25; //size of square
    this.speed = 10;
    this.angle = 0;
    this.rotatingSpeed = 20;

    //the rotating path
    this.size = 300;
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

    if (this.active) {
      //draw a path
      push();
      fill(95, 22, 99, 80);
      ellipse(this.x, this.y, this.size);
      pop();

      //display the purple enemy
      push();
      fill(157, 97, 199); //purple
      // fill(168, 240, 227); //cyan?
      rectMode(CENTER, CENTER);
      //square follows along the path
      translate(this.x, this.y);
      rotate(this.pathAngle);
      translate(this.size/2, 0); //translating the "anchor point" back to the square
      rotate(this.angle); //square rotates along itself
      rect(0, 0, this.enemySize);
      pop();
    }
  }
}

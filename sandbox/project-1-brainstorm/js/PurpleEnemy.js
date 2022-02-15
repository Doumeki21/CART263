class PurpleEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 10;
    this.angle = 0;
    this.rotatingSpeed = 10;
  }

  update() {
    this.selfRotate();
    this.display();
  }

  selfRotate() {
    this.angle -= this.rotatingSpeed;
  }

  rotateLocation() {

  }

  display() {
    //display the purple enemy
    push();
    fill(200, 0, 0);
    rectMode(CENTER, CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, this.size);
    pop();
  }
}

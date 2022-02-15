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

  }

  selfRotate() {
    this.angle -= this.rotatingSpeed;
  }

  rotateLocation() {

  }

  display() {
    //display the purple enemy
    push();
    fill(100, 0, 100);
    rectMode(CENTER, CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    rect(this.x, this.y, this.size);
    pop();
  }
}

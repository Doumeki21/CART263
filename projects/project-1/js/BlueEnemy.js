class BlueEnemy extends Enemies{
  constructor(x, y) {
    super(x, y);
    this.size = undefined;
    this.alpha = 0;
    this.alphaSpeed = 8;
    this.initialVy = 8;
    this.currentVy = this.initialVy;
    this.ay = 2;
    this.acceleration = 0.5;
    this.active = false;

    this.activate();
  }

  update() {
    this.display();
    this.checkActive();
    this.checkAppearing();
  }

// enemy is invisible, randomizes size, and location until it's visible again.
  checkActive() {
    if (!this.active) {
      this.alpha = 0;
      this.x = random(0, width);
      this.y = 0;
      this.vy = this.initialVy;
      this.size = random(100, 500);
    }
    if (this.y >= height) {
      this.active = false;
    }
  }

  checkAppearing() {
    if (this.active) {
      //fade in
      this.alpha += this.alphaSpeed;

      //add movement (by adding velocity to the coordinates)
      this.y += this.vy;
      //Add the acceleration to the velocity
      this.vy += this.ay;

      //constrain the enemy within a reasonable area of the canvas
      // this.vy = constrain(this.vy, 0, 10);
      this.y = constrain(this.y, 0, height);
    }
  }

  moveEnemy() {
    //add moevement (by adding velocity to the coordinates)
    this.x += this.vx;
    this.y += this.vy;
    //Add the acceleration to the velocity
    this.vx += this.ax;
    this.vy += this.ay;

    //constrain the enemy within a reasonable area of the canvas
    this.vx = constrain(this.vx, -5, 5);
    this.vy = constrain(this.vy, -5, 5);
  }

  display() {
    if (this.active) {
      push();
      noStroke();
      fill(126, 171, 170, this.alpha);
      rectMode(CENTER, CENTER);
      rect(this.x, this.y, this.size);
      pop();
    }
  }
}

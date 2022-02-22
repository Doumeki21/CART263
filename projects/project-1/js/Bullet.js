class Bullet {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.width = 5;
    this.height = 5;
    this.speed = 10;
  }

  /**
   Calls methods required each frame for animation
   */
  update() {
    this.move();
    this.display();
  }

  /**
   Calculates velocity to move the bullet
   */
  move() {
    // Calculate the velocity based on speed and angle
    const vx = this.speed * cos(this.angle);
    const vy = this.speed * sin(this.angle);

    // Change position based on velocity
    this.x += vx;
    this.y += vy;
  }

  /**
   Displays the bullet in position and rotated appropriately
   */
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}

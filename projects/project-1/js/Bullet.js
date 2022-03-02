//Bullet
//Bullets will shoot out of the player and attack the boss
class Bullet {
  //Adds properties for hitting the boss, speed, and angle which it was shot at
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.width = 5;
    this.height = 5;
    this.speed = 10;
    this.active = true;
  }

  //update()
  //Calls all the functions/ events within this class and erases it from the bullets array when it goes out of the canvas
  update() {
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.active = false;
    }
    this.move();
    this.display();
  }

  //move();
  //Calculates velocity and angle to move the bullet
  move() {
    // Calculate the velocity based on speed and angle
    const vx = this.speed * cos(this.angle);
    const vy = this.speed * sin(this.angle);
    // Change position based on velocity
    this.x += vx;
    this.y += vy;
  }

  //display()
  //Displays the bullet in position and rotates appropriately
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

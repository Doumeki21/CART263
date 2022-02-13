class Bullet {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.width = 5;
    this.height = 10;
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
   Calculates velocity and moves the dog
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
   Displays the image of the dog in position and rotated appropriately
   */
   display() {
     push();
     // translate(2, 15);
     // rotate(this.angle);
     rectMode(CENTER);
     rect(this.x, this.y, this.width, this.height);
     pop();
   }
}

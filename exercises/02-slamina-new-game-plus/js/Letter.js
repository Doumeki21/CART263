//letter
//Fancy letters that drops into the screen when you guess an animal.
class Letter {
  constructor(x, y, letter) {
    //properties for its characteristics, its dropping speed and when they disappear.
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
    this.maxBounce = 1;
    this.bounces = 0;
    this.letter = letter;
  }

  //A single function that contains everything from this class to call in the main script.
  update() {
    this.gravity(0.001);
    this.move();
    this.display();
  }

  //Letters goes down due to gravity.
  gravity(force) {
    this.ay += force;
  }

  //Letters move.
  move() {
    //accelerates
    this.vx += this.ax;
    this.vy += this.ay;
    //constraining the letter at reasonable speed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    //Changing position (moving)
    this.x += this.vx;
    this.y += this.vy;
    //If the letter has gone off the canvas, deactivate the letter.
    if (this.y - this.size / 2 > height) {
      if (this.bounces < this.maxBounce) {
        this.vy = -this.vy;
        this.bounces++;
      } else {
        this.active = false;
      }
    }
  }

  //display the letter
  display() {
    push();
    strokeWeight(10);
    stroke(255, 117, 138);
    fill(255);
    textSize(75);
    textStyle(BOLD);
    text(this.letter, this.x, this.y);
    pop();
  }
}

//this code from project 1
//Blue enemy - an extension to the Enemies class
//Randomly appears and drops fast to the bottom of the canvas
class Rectangle {
  //calls the super constructor and adds properties for it to display
  constructor(x, y) {
    this.x = x;
    this.y = 100;
    this.width = 100;
    this.height = 100;
    this.alpha = 0;
    this.alphaSpeed = 8;
    this.initialVy = 2;
    this.currentVy = this.initialVy;
    this.ay = 2;
    this.acceleration = 0.5;
    this.active = false;

    this.timer = 0;
    this.randomizedTime = random(1, 3);
  }

  //update()
  //Calls the super update() and all the functions/ events within this class.
  update() {
    this.timer += 1/60;
    if (this.timer > this.randomizedTime) {
      this.activate();
    }
    this.display();
    this.checkActive();
    this.appearing();
  }

  activate() {
    //reset the timer
    this.timer = 0;
    this.randomizedTime = random(1, 3);
    this.active = !this.active;
  }

  //checkActive()
  checkActive() {
    // if enemy is invisible, randomizes size, and location until it's visible again.
    if (!this.active) {
      this.alpha = 0;
      this.x = random(0, width);
      this.y = -10;
      this.currentVy = this.initialVy;
      this.width = random(100, 500);
      this.height = random(100, 500);
    }
    //once it hits the bottom of the canvas, blue enemy disappears.
    if (this.y >= height) {
      this.active = false;
    }
  }

  //checkAppearing()
  appearing() {
    if (this.active) {
      // starts by fading in
      this.alpha += this.alphaSpeed;
      //add movement (by adding velocity to the coordinates)
      this.y += this.currentVy;
      //Add the acceleration to the velocity
      this.currentVy += this.ay;
      // constrain the enemy within the canvas
      this.y = constrain(this.y, 0, height);
    }
  }

  //display the blue enemy if it's active
  display() {
    if (this.active) {
      push();
      noStroke();
      fill(126, 171, 170, this.alpha);
      rectMode(CENTER, CENTER);
      rect(this.x, this.y, this.width, this.height);
      pop();
    }
  }
}

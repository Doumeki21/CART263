//this code from project 1
//Blue enemy - an extension to the Enemies class
//Randomly appears and drops fast to the bottom of the canvas
class Rectangle {
  //calls the super constructor and adds properties for it to display
  constructor() {
    this.x = undefined;
    this.y = undefined;
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

  //update()
  //Calls the super update() and all the functions/ events within this class.
  update() {
    this.display();
    this.checkActive();
    this.checkAppearing();
  }

  //checkActive()
  checkActive() {
    // if enemy is invisible, randomizes size, and location until it's visible again.
    if (!this.active) {
      this.alpha = 0;
      this.x = random(0, width);
      this.y = 0;
      this.vy = this.initialVy;
      this.size = random(100, 500);
    }
    //once it hits the bottom of the canvas, blue enemy disappears.
    if (this.y >= height) {
      this.active = false;
    }
  }

  //checkAppearing()
  checkAppearing() {
    if (this.active) {
      //starts by fading in
      this.alpha += this.alphaSpeed;
      //add movement (by adding velocity to the coordinates)
      this.y += this.vy;
      //Add the acceleration to the velocity
      this.vy += this.ay;
      //constrain the enemy within the canvas
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
      rect(this.x, this.y, this.size);
      pop();
    }
  }
}

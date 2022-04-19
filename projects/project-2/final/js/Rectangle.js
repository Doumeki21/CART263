//rectangle class
//this code from project 1
//Randomly appears and drops fast to the bottom of the canvas
class Rectangle {
  constructor(x) {
    //properties for its characteristics and its dropping speed
    //dimensions
    this.x = x;
    this.y = this.initialY;
    this.initialY = -10;
    this.width = 100;
    this.height = 100;
    //appearance
    this.alpha = 0;
    this.alphaSpeed = 8;
    //movement
    this.rectangleMovingSpeed = 20;
    this.initialVy = 0.5;
    this.currentVy = this.initialVy;
    this.ay = 0.5;
    this.acceleration = 0.5;
    this.active = false;
    this.timer = 0;
    this.randomizedTime = random(1, 3);
  }

  //A single function that contains everything from this object class to be called.
  update(bouncingBall) {
    this.timer += 1/60;//count the number up by seconds
    //if the timer reaches the randomized time, activate the rectangle
    if (this.timer > this.randomizedTime) {
      this.activate();
    }
    bouncingBall.handleOtherEnemies2(this);//called in bouncingBall.js (checks if ball and rectangle touch)
    this.checkActive();
    this.appearing();
    this.rectangleControl();
    this.display();
  }

  //the moment of activation- (to display)
  activate() {
    this.timer = 0;//reset the timer
    this.randomizedTime = random(1, 3);
    this.active = !this.active;//make the rectangle active and display it
  }

  //checks what the rectangle should do when it's visible or not
  checkActive() {
    // if enemy is invisible, randomizes size, and location until it's visible again.
    if (!this.active) {
      this.alpha = 0;
      this.x = random(0, width);
      this.y = this.initialY;
      this.currentVy = this.initialVy;
      this.width = random(100, 300);
      this.height = random(100, 300);
    }
    //once it hits the bottom of the canvas, rectangle disappears.
    if (this.y >= height) {
      this.active = false;
    }
  }

  //when the rectangle is visible, it drops from top of screen
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

  //rectangle is controlled with the arrow keys
  rectangleControl() {
    //rectangle moves left
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.rectangleMovingSpeed;
    }
    //rectangle moves right
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.rectangleMovingSpeed;
    }
    // Wrap the rectangle to the other side
    if (this.x + this.width < 0) {
      this.x += width + this.width;
    }
    else if (this.x - this.width > width) {
      this.x -= width + this.width;
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

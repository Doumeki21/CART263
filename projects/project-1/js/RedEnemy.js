//Red enemy - an extension to the Enemies class
//Randomly fades into the canvas
class RedEnemy extends Enemies {
  //calls the super constructor and adds properties for it to display
  constructor(x, y) {
    super(x, y);
    this.size = undefined;
    this.alpha = 0;
    this.alphaSpeed = 8;
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
      this.y = random(0, height);
      this.size = random(100, 500);
    }
  }

  //checkAppearing()
  //if the enemy is about to appear, fade in
  checkAppearing() {
    if (this.active) {
      this.alpha += this.alphaSpeed;
    }
  }

  //display()
  //display the red enemy if it's active
  display() {
    if (this.active) {
      push();
      noStroke();
      fill(126, 13, 32, this.alpha);
      ellipse(this.x, this.y, this.size);
      pop();
    }
  }
}

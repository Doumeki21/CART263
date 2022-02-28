class RedEnemy extends Enemies {
  constructor(x, y) {
    super(x, y);
    this.size = undefined;
    this.alpha = 0;
    this.alphaSpeed = 8;
    this.active = false;

    this.activate();
  }

  update() {
    this.display();
    this.checkActive();
    this.checkAppearing();
  }

  checkActive() {
    if (!this.active) {
      this.alpha = 0;
      this.x = random(0, width);
      this.y = random(0, height);
      this.size = random(100, 500);
    }
  }

  checkAppearing() {
    if (this.active) {
      this.alpha += this.alphaSpeed;
    }
  }

  display() {
    if (this.active) {
      push();
      noStroke();
      fill(126, 13, 32, this.alpha);
      ellipse(this.x, this.y, this.size);
      pop();
      // console.log(this.x, this.y, this.size, this.alpha);
    }
  }
}

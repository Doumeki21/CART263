class RedEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 100;
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

  activate() {
    this.active = !this.active;
    setTimeout(this.activate.bind(this), random(1000, 5000));
  }

  checkActive() {
    if (!this.active) {
      this.alpha = 0;
      this.x = random(0, width);
      this.y = random(0, height);
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
      fill(168, 0, 0, this.alpha);
      ellipse(this.x, this.y, this.size);
      pop();
      console.log(this.x, this.y, this.size, this.alpha);
    }
  }
}

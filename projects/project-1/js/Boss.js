class Boss {
  constructor(x, y) {
    this.letter = "A";
    this.x = x;
    this.y = y;
  }

  update() {
    this.moveBoss();
    this.display();
  }

  moveBoss() {
    //using noise() as an organic alternative to the random(). the noise value will always be b/w 0 and 1.
    this.x = map(noise(this.x), 0, 1, 0, width);
    this.y = map(noise(this.y), 0, 1, 0, 300);

    this.x += 0.001;
    this.y += 0.001;
  }

  display() {
    push();
    textSize(50);
    textStyle(BOLD);
    strokeWeight(3);
    stroke(random(255), random(255), random(255));
    textAlign(CENTER, CENTER);
    text(this.letter, this.x, this.y);
    pop();
  }
}

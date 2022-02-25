class Boss {
  constructor(x, y) {
    this.letter = "A";
    this.x = 0;
    this.y = 100;
  }

  update() {
    this.display();
  }

  moveBoss() {

  }

  display() {
    push();
    textSize(50);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);

    stroke(random(255), random(255), random(255));
    pop();
  }
}

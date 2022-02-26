class Boss {
  constructor(x, y) {
      this.letter = "A";
      this.x = x;
      this.y = y
  }

  update() {
    this.moveBoss();
  }

  moveBoss() {
    let x = map(noise(this.x), 0, 1, 0, width);
    let y = map(noise(this.y), 0, 1, 0, 300);

    //the speed of the noise the A moves in.
    this.x += 0.01;
    this.y += 0.01;

    //Need to display the object in the same function to track the x and y (and for the noise() to work).
    //display the letter A.
    push();
    textSize(200);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    noFill();
    strokeWeight(5);
    stroke(random(100), random(255), random(255));
    text(this.letter, x, y);
    pop();
  }
}

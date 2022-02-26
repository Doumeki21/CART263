class Boss {
  constructor(x, y) {
    this.letter = `A`;
    this.x = x;
    this.y = y;

    this.plusLetter = `+`;
    this.plusX = 0;
    this.plusY = 0;
    this.plusVX = 0;
    this.plusVY = 0;
    this.plusAX = 0;
    this.plusAY = 0;
    this.acceleration = 0.5;
  }

  update() {
    this.moveBoss();
    // this.display();
  }

  moveBoss() {
    //THE A
    //using noise() as an organic alternative to the random(). the noise value will always be b/w 0 and 1.
    let x = map(noise(this.x), 0, 1, 0, width);
    let y = map(noise(this.y), 0, 1, 0, 300);

    //the speed of the noise the A moves in.
    this.x += 0.01;
    this.y += 0.01;

    //Need to display the object in the same function to track the x and y (and for the noise() to work).
    //display the letter A.
    push();
    textSize(50);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    noFill();
    strokeWeight(5);
    stroke(random(100), random(255), random(255));
    text(this.letter, x, y);
    pop();

    //THE PLUS SIGN
    //Calculate the distance b/w the A and the plus sign
    let dx = this.plusX - x;
    let dy = this.plusY - y;

    //if the sign is behind the letter,
    if (dx < 0) {
      //accelerate (right)
      this.plusAX = this.acceleration;
    } else {
      //decelerate (left)
      this.plusAX = -this.acceleration;
    }
      //if the sign is above the letter,
    if (dy < 0) {
      //accelerate (downwards)
      this.plusAY = this.acceleration;
    } else {
      //decelerate (upwards)
      this.plusAY = -this.acceleration;
    }

    //add moevement to the sign (by adding velocity to the coordinates)
    this.plusX += this.plusVX;
    this.plusY += this.plusVY;

    //Add the acceleration to the velocity
    this.plusVX += this.plusAX;
    this.plusVY += this.plusAY;
    //constrain the velocity into a small area near the top right corner of the A so that it doesn't swing like crazy all over the screen.
    this.plusVX = constrain(this.plusVX, -5, 5);
    this.plusVY = constrain(this.plusVY, -5, 5);


    //display the plus sign at the top right corner of the letter A
    push();
    textSize(50);
    noFill();
    strokeWeight(5);
    stroke(random(100), random(255), random(255));
    text(this.plusLetter, this.plusX, this.plusY);
    pop();
  }
}

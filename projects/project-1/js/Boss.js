class Boss {
  constructor(x, y) {
    //variables for the letter A
    this.letter = `A`;
    this.x = x;
    this.y = y;
    this.newX = x;
    this.newY = y;
    this.size = 100;
    //rgb values to track when it changes color
    this.currentStrokeA = {
      r: 100,
      g: 255,
      b: 255,
    }
    //variables for the plus sign
    this.plusLetter = `+`;
    this.plusX = 0;
    this.plusY = 0;
    this.plusVX = 0;
    this.plusVY = 0;
    this.plusAX = 0;
    this.plusAY = 0;
    this.acceleration = 0.5;
    //rgb values to track when it changes color
    this.currentStrokePlus = {
      r: 100,
      g: 255,
      b: 255,
    }

    //health bar fill.
    this.fillLifeBar = {
      x: 0,
      y: 50,
      width: width,
      height: 5,
      currentFill: {
        r: 100,
        g: 255,
        b: 100,
      }
    };
  }

  update() {
    this.changeHealthBar();
    this.moveBoss();
    this.displayHP();
  }

//function is being checked inside the bullet array of the script.js
  checkHit(bullet) {
    if (bullet.x > this.newX - this.size / 2 &&
    bullet.x < this.newX + this.size / 2 &&
    bullet.y > this.newY - this.size / 2 &&
    bullet.y < this.newY + this.size / 2) {
      this.fillLifeBar.width -= 0.8;
      this.currentStrokeA.r = random(100, 150);
      this.currentStrokeA.g = random(100, 255);
      this.currentStrokeA.b = random(100, 255);

      this.currentStrokePlus.r = random(100, 150);
      this.currentStrokePlus.g = random(100, 255);
      this.currentStrokePlus.b = random(100, 255);
    }
  }

  //Boss's health bar will become more red as it decreases closer to 0 health.
    changeHealthBar() {
      this.fillLifeBar.currentFill.r = map(this.fillLifeBar.width, width, 0, 200, 255);
      this.fillLifeBar.currentFill.g = map(this.fillLifeBar.width, width, 0, 255, 0);
      this.fillLifeBar.currentFill.b = map(this.fillLifeBar.width, width, 0, 200, 0);
    }

  moveBoss() {
    //THE A
    //using noise() as an organic alternative to the random(). the noise value will always be b/w 0 and 1.
    let x = map(noise(this.x), 0, 1, 0, width);
    let y = map(noise(this.y), 0, 1, 0, height);

    //the speed of the noise the A moves in.
    this.x += 0.01;
    this.y += 0.01;

    this.newX = x;
    this.newY = y;

    //Need to display the object in the same function to track the x and y (and for the noise() to work).
    //display the letter A.
    push();
    textSize(100);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    noFill();
    strokeWeight(5);
    stroke(this.currentStrokeA.r, this.currentStrokeA.g, this.currentStrokeA.b);
    text(this.letter, x, y);
    pop();

    // //area around the boss that detects the bullet
    // push();
    // noFill();
    // rectMode(CENTER, CENTER);
    // strokeWeight(2);
    // stroke(100, 100, 100);
    // rect(x, y, this.size);
    // pop();

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
    textSize(100);
    noFill();
    strokeWeight(5);
    stroke(this.currentStrokePlus.r, this.currentStrokePlus.g, this.currentStrokePlus.b);
    text(this.plusLetter, this.plusX, this.plusY);
    pop();
  }

  //Display the fill (for the life bar)
  displayHP() {
    push();
    noStroke();
    fill(this.fillLifeBar.currentFill.r, this.fillLifeBar.currentFill.g, this.fillLifeBar.currentFill.b);
    rect(
      this.fillLifeBar.x,
      this.fillLifeBar.y,
      this.fillLifeBar.width,
      this.fillLifeBar.height
    );
    pop();
  }
}

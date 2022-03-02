//Boss - the A+ object
//Randomly floates around the area of the canvas
class Boss {
  constructor(x, y) {
    //properties for the letter A to move around and changes colors when hit by bullets
    this.letter = `A`;
    this.x = x;
    this.y = y;
    this.newX = x;
    this.newY = y;
    this.size = 100;
    this.currentStrokeA = {
      r: 100,
      g: 255,
      b: 255,
    };
    //properties for the plus sign to track and accelerate around the A and changes colors when hit by bullets
    this.plusLetter = `+`;
    this.plusX = 0;
    this.plusY = 0;
    this.plusVX = 0;
    this.plusVY = 0;
    this.plusAX = 0;
    this.plusAY = 0;
    this.acceleration = 0.5;
    this.currentStrokePlus = {
      r: 100,
      g: 255,
      b: 255,
    };
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
      },
    };
  }

  //update()
  //Calls all the functions/ events within this class.
  update() {
    this.changeHealthBar();
    this.moveBoss();
    this.displayBoss();
    this.displayPlus();
    this.displayHP();
  }

  //checkHit
  //function is being checked inside the bullet array of the script.js
  //when the bullets have touched the A, randomly change colors within the white - cyan range and decrease health
  checkHit(bullet) {
    if (
      bullet.x > this.newX - this.size / 2 &&
      bullet.x < this.newX + this.size / 2 &&
      bullet.y > this.newY - this.size / 2 &&
      bullet.y < this.newY + this.size / 2
    ) {
      //decrese health by increments of 0.8
      this.fillLifeBar.width -= 0.8;
      //change colors of the A
      this.currentStrokeA.r = random(100, 150);
      this.currentStrokeA.g = random(100, 255);
      this.currentStrokeA.b = random(100, 255);
      //change colors of the plus sign
      this.currentStrokePlus.r = random(100, 150);
      this.currentStrokePlus.g = random(100, 255);
      this.currentStrokePlus.b = random(100, 255);
    }
  }

  //changeHealthBar()
  //Boss's health bar will become more red as it decreases closer to 0 health.
  changeHealthBar() {
    this.fillLifeBar.currentFill.r = map(this.fillLifeBar.width,width,0,200,255);
    this.fillLifeBar.currentFill.g = map(this.fillLifeBar.width,width,0,255,0);
    this.fillLifeBar.currentFill.b = map(this.fillLifeBar.width,width,0,200,0);
  }

  //moveBoss()
  moveBoss() {
    //THE A
    //using noise() as an organic alternative to the random(). the noise value will always be b/w 0 and 1.
    let x = map(noise(this.x), 0, 1, 0, width);
    let y = map(noise(this.y), 0, 1, 0, height);

    //the speed of the noise the A moves in.
    this.x += 0.01;
    this.y += 0.01;
    //replace the coordinates with the other coordinate properties so we can display it
    this.newX = x;
    this.newY = y;

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

    //add movement to the sign (by adding velocity to the coordinates)
    this.plusX += this.plusVX;
    this.plusY += this.plusVY;
    //Add the acceleration to the velocity
    this.plusVX += this.plusAX;
    this.plusVY += this.plusAY;
    //constrain the velocity into a small area near the top right corner of the A so that it doesn't swing like crazy all over the screen.
    this.plusVX = constrain(this.plusVX, -5, 5);
    this.plusVY = constrain(this.plusVY, -5, 5);
  }

  //displayBoss()
  //display the letter A.
  displayBoss() {
    push();
    textSize(100);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    noFill();
    strokeWeight(5);
    stroke(this.currentStrokeA.r, this.currentStrokeA.g, this.currentStrokeA.b);
    text(this.letter, this.newX, this.newY);
    pop();
  }

  //displayPlus()
  //display the plus sign at the top right corner of the letter A
  displayPlus() {
    push();
    textSize(100);
    noFill();
    strokeWeight(5);
    stroke(
      this.currentStrokePlus.r,
      this.currentStrokePlus.g,
      this.currentStrokePlus.b
    );
    text(this.plusLetter, this.plusX, this.plusY);
    pop();
  }

  //Display the fill (for the life bar)
  displayHP() {
    push();
    noStroke();
    rectMode(CORNER);
    fill(this.fillLifeBar.currentFill.r,this.fillLifeBar.currentFill.g,this.fillLifeBar.currentFill.b);
    rect(this.fillLifeBar.x,this.fillLifeBar.y,this.fillLifeBar.width,this.fillLifeBar.height);
    pop();
  }
}

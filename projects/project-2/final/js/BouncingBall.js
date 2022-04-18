//the bouncingBall class
//Defines all cases for lives, affecting change of state based on the lives
//ball bounces up and down on the canvas vertically
class BouncingBall extends Levels {
  constructor(x, y, previousLevelLives) {
    super();
    //properties for its characteristics, its dropping speed and the life
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 2;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.lives = {
      x: 50,
      y: 50,
      size: 25,
      fill: 255,
      currentLives: undefined,
      initialLives: previousLevelLives,
    };
    //START: pippin's code
    this.redStroke = color(255, 117, 138); // Defining the colors of the ball
    this.blackStroke = color(100, 100, 100); // As above
    // END: pippin's code
    this.currentStroke = this.blackStroke; // Start as black so it matches the standard hole
    this.allStrokes = [this.redStroke, this.blackStroke];
    this.changeStroke = false;
    this.lives.currentLives = this.lives.initialLives;
  }

  //A single function that contains everything from this object class to call in all levels.
  update() {
    super.update();
    this.gravity(0.01);
    this.move();
    this.checkDead();
    this.displayLives();
    this.displayBall();
  }

  //called in level1 and level 2! (further levels extends from level2)
  handlePlatform(platform) {
    this.collision(platform);
    this.passHole(platform);
    this.touchDanger(platform);
  }

  //called inside Square.js
  handleOtherEnemies(square) {
    this.touchSquare(square);//called in lvl 4, lvl 5 (inside array)
  }
  //called inside Rectangle.js
  handleOtherEnemies2(rectangle) {
    this.touchRectangle(rectangle);//called in lvl 5
  }

  //START: referred to from exercise 5: juggle garden of CART253
  //ball goes down due to gravity.
  //called in update
  gravity(force) {
    this.ay += force;
  }

  //ball moves.
  //called in update
  move() {
    //Changing position (moving)
    this.x += this.vx;
    this.y += this.vy;
    //accelerates
    this.vx += this.ax;
    this.vy += this.ay;
    //constraining the ball at reasonable speed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
  }
  //END: refer to CART263 EX5.

  //check if the ball loses all currentLives
  //called in update
  checkDead() {
      if (this.lives.currentLives === 0) {
        state = new Lose();
      }
    }

  //check when the ball bounces.
  //called in handlePlatform
  collision(platform) {
    //once the ball bounces off from the Platform,
    if (
      this.y + this.size / 2 > platform.y - platform.height / 2 &&
      this.y - this.size / 2 < platform.y + platform.height / 2
    ) {
      //and if the part is a hole,
      if (
        this.x > platform.hole.x - platform.hole.width / 2 &&
        this.x < platform.hole.x + platform.hole.width / 2
      ) {
        //then pass trhough
        //WILL MAKE A POINT SYSTEM HERE LATER???
      }
      //else, bounce back up
      else {
        this.vy = -this.vy;
        this.ay = 0;
      }
    }
  }

  //once a platoform disappears, the ball's stroke changes color
  //called in lvl2 + 3
  randomizeBallStroke(platform) {
    if (platform.active === false) {
      this.currentStroke = random(this.allStrokes);
    }
  }

  //check if the ball has passed through a platform
  //called in handlePlatform
  passHole(platform) {
    let platformOffsetY = 80;
    //If the ball is underneath the platform,
    if (this.y + this.size / 2 >platform.y - platform.height / 2 + platformOffsetY) {
      //take out that platform
      platform.active = false;
      return true;
    }
  }

  //check if the ball has touched a danger zone
  //called in handlePlatform
  touchDanger(platform) {
    if (
      this.y + this.size / 2 > platform.danger.y - platform.danger.height / 2 &&
      this.x + this.size / 2 > platform.danger.x - platform.danger.width / 2 &&
      this.x - this.size / 2 < platform.danger.x + platform.danger.width / 2
    ) {
      this.lives.currentLives--;
    }
  }

  //Checks if the ball has touched a (lavender) square
  //called in handleOtherEnemies, Starts in level 4
  touchSquare(square) {
    if (
      this.y + this.size / 2 > square.y - square.size / 2 &&
      this.y - this.size / 2 < square.y + square.size / 2 &&
      this.x + this.size / 2 > square.x - square.size / 2 &&
      this.x - this.size / 2 < square.x + square.size / 2
    ) {
      this.lives.currentLives --;
      //once in contact, have the square reset it's position (bottom of screen)
      square.y = height;
    }
  }

  //Checks if the ball has touched a (cyan blue) rectangle
  //called in handleOtherEnemies2, Starts in level 5
  touchRectangle(rectangle) {
    if (rectangle.active) {
      if (
        this.y + this.size / 2 > rectangle.y - rectangle.height / 2 &&
        this.y - this.size / 2 < rectangle.y + rectangle.height / 2 &&
        this.x + this.size / 2 > rectangle.x - rectangle.width / 2 &&
        this.x - this.size / 2 < rectangle.x + rectangle.width / 2
      ) {
        this.lives.currentLives --;
        //once contact, have the rectangle reset it's position
        rectangle.y = rectangle.initialY;
        rectangle.active = false;
      }
    }
  }

  //displays the lives of the ball
  //in update
  displayLives() {
    push();
    let x = this.lives.x;
    //for a max of 5 lives,
    for (let i = 0; i < this.lives.currentLives; i++) {
      //Display lives (white circle).
      push();
      noStroke();
      fill(255);
      ellipse(x, this.lives.y, this.lives.size);
      pop();
      //circles display vertically.
      x += 40;
    }
  }

  //display the BouncingBall
  //in update
  displayBall() {
    push();
    stroke(this.currentStroke);
    strokeWeight(10);
    fill(255);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}

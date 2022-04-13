//the bouncingBall class
//includes lives
//this ball bounces up and down on the canvas vertically
class BouncingBall extends Levels {
  constructor(x, y, previousLevelLives) {
    super();
    //properties for its characteristics, its dropping speed and when they disappear.
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

    // pippin's code
    this.redStroke = color(255, 117, 138); // Easier to define colors this way
    this.blackStroke = color(100, 100, 100); // As above
    // END NEW
    this.currentStroke = this.blackStroke; // Start as black so it matches the standard hole
    this.allStrokes = [this.redStroke, this.blackStroke];
    this.changeStroke = false;
    this.lives.currentLives = this.lives.initialLives;
  }

  //A single function that contains everything from this class to call in the main script.
  update() {
    super.update();
    this.gravity(0.01);
    this.move();
    // this.checkPassLvl(); //pass lvl
    this.displayLives();
    this.displayBall();
  }

  //called in level1 and level 2! (further levels extends to level2)
  handlePlatform(platform) {
    this.collision(platform);
    this.passHole(platform);
    this.touchDanger(platform);
  }

  //called in level 4
  handleOtherEnemies(square) {
    this.touchSquare(square);
  }

  //All the gravity stuff referred to from exercise 5: juggle garden of CART253
  //ball goes down due to gravity.
  gravity(force) {
    this.ay += force;
  }

  //ball moves.
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

  //check when the ball bounces.
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

  randomizeBallStroke(platform) {
    if (platform.active === false) {
      this.currentStroke = random(this.allStrokes);
      // this.changeStroke = false;
      console.log(`randomizeBallStroke`);
    }
  }

  passHole(platform) {
    let platformOffsetY = 80;
    //If the ball is underneath the platform,
    if (
      this.y + this.size / 2 >
      platform.y - platform.height / 2 + platformOffsetY
    ) {
      //take it out.
      platform.active = false;

      return true;
    }
  }

  touchDanger(platform) {
    if (
      this.y + this.size / 2 > platform.danger.y - platform.danger.height / 2 &&
      this.x + this.size / 2 > platform.danger.x - platform.danger.width / 2 &&
      this.x - this.size / 2 < platform.danger.x + platform.danger.width / 2
    ) {
      this.lives.currentLives--;
    }
  }

  touchSquare(square) {
    if (
      this.y + this.size / 2 > square.y - square.size / 2 &&
      this.y - this.size / 2 < square.y + square.size / 2 &&
      this.x + this.size / 2 > square.x - square.size / 2 &&
      this.x - this.size / 2 < square.x + square.size / 2
    ) {
      this.lives.currentLives --;
      //once contact, have the square reset it's position
      square.y = height;
    }
  }

  displayLives() {
    push();
    let x = this.lives.x;
    for (let i = 0; i < this.lives.currentLives; i++) {
      //Display lives.
      push();
      noStroke();
      fill(255);
      ellipse(x, this.lives.y, this.lives.size);
      pop();
      //Timer displays vertically.
      x += 40;
    }
  }

  //display the BouncingBall
  displayBall() {
    push();
    stroke(this.currentStroke);
    strokeWeight(10);
    fill(255);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}

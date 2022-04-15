//adding objects flying in
class Level4 extends Level3 {
  constructor(previousLevelLives) {
    super();
    this.currentLevel = `LEVEL 4`;
    this.squareYSpeeds = [-5, -4, -3];
    this.squareXSpeeds = [-0.5, -0.4, -0.3, 0.3, 0.4, 0.5];
    this.squareMovingSpeed = 10;

    this.square = {
      x: width / 2,
      y: height - 100,
      vx: random(this.squareXSpeeds),
      vy: random(this.squareYSpeeds),
      ax: 0,
      ay: 0,
      maxSpeed: 15,
      size: 40,
      active: true,
      color: color(200, 200, 255),
    };
    // this.randomTimer = random(60, 60 * 5);

    this.bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 6;
    this.spaceBetweenPlatforms = 100;
    this.firstPlatformY = windowHeight / 5;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i;//spacing out b/w each platform

      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
      platform.danger.width = random(70,150);
      platform.hole.width = random(70,150);
    }

    this.bouncingBall = new BouncingBall(windowWidth / 2, -50, previousLevelLives); //create the bouncing
  }

  update() {
    super.update();

    if (this.square.active) {
      this.generateSquare();
      this.squareControl();
      this.movingSquare();
      this.squareDisplay();
      this.bouncingBall.handleOtherEnemies(this.square);
    }

    this.levelDisplay();
  }

  //check prev project
  generateSquare() {
    //If the square has gone off the canvas, deactivate the square.
    if (this.square.y - this.square.size / 2 < 0) {
      this.square.active = false;
      //after 2 seconds, have the square appear at a random postion at the btm of screen
      setTimeout(() => {
        this.square.active = true;
        this.square.y = height;
        this.square.x = random(100, width/2 + 100);
        this.square.vx = random(this.squareXSpeeds);
        this.square.vy = random(this.squareYSpeeds);
      }, 2000);
    }
  }

  squareControl() {
    if (keyIsDown(LEFT_ARROW)) {
      this.square.x -= this.squareMovingSpeed;
    }
    //platform objects move right
    if (keyIsDown(RIGHT_ARROW)) {
      this.square.x += this.squareMovingSpeed;
    }

    // Wrap the square to the other side
    if (this.square.x + this.square.size < 0) {
      this.square.x += width + this.square.size;
    } else if (this.square.x - this.square.size > width) {
      this.square.x -= width + this.square.size;
    }
  }

  //Square moves.
  movingSquare() {
    //accelerates
    this.square.vx += this.square.ax;
    this.square.vy += this.square.ay;
    // //constraining the square at reasonable speed
    // this.square.vx = constrain(
    //   this.square.vx,
    //   -this.square.maxSpeed,
    //   this.square.maxSpeed
    // );
    // this.square.vy = constrain(
    //   this.square.vy,
    //   -this.square.maxSpeed,
    //   this.square.maxSpeed
    // );
    //Changing position.
    this.square.x += this.square.vx;
    this.square.y += this.square.vy;
  }

  levelDisplay() {
    push();
    fill(255);
    textSize(36);
    textAlign(CENTER);
    text(this.currentLevel, width/2, 100);
    pop();
  }

  //Display blue square.
  squareDisplay() {
    push();
    fill(this.square.color);
    stroke(0);
    rectMode(CENTER);
    rect(this.square.x, this.square.y, this.square.size);
    pop();
  }
}

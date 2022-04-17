//adding objects flying in
class Level4 extends Level3 {
  constructor(previousLevelLives) {
    super();
    this.currentLevel = `LEVEL 4`;
    // this.squareYSpeeds = [-5, -4, -3];
    // this.squareXSpeeds = [-0.5, -0.4, -0.3, 0.3, 0.4, 0.5];
    // this.squareMovingSpeed = 10;

    // this.square = {
    //   x: width / 2,
    //   y: height - 100,
    //   vx: random(this.squareXSpeeds),
    //   vy: random(this.squareYSpeeds),
    //   ax: 0,
    //   ay: 0,
    //   maxSpeed: 15,
    //   size: 40,
    //   active: true,
    //   color: color(200, 200, 255),
    // };

    this.square;
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

    this.bouncingBall = new BouncingBall(windowWidth / 2, -50, previousLevelLives); //create the displayBall
    this.square = new Square(width / 2, height - 100);//create square
  }

  update() {
    super.update();
    // if (this.square.active) {
    //   this.generateSquare();
    //   this.squareControl();
    //   this.movingSquare();
    //   this.squareDisplay();
    //   this.bouncingBall.handleOtherEnemies(this.square);
    // }
    this.square.update(this.bouncingBall);
    this.levelDisplay();
    this.changeLevels();
  }

  levelDisplay() {
    push();
    fill(255);
    textSize(36);
    textAlign(CENTER);
    text(this.currentLevel, width/2, 100);
    pop();
  }

  changeLevels() {
    if (this.bouncingBall.y > height) {
      state = new Level5(this.bouncingBall.lives.currentLives);
    }
  }
}

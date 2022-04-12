//move the script stuff into level1
//use the script to change between levels?
class Level1 extends Levels {
  constructor() {
    super();
    this.currentLevel = `LEVEL 1`;
    this.bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 3;
    this.spaceBetweenPlatforms = 200;
    this.firstPlatformY = windowHeight / 3;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i;

      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
    }
    this.bouncingBall = new BouncingBall(windowWidth / 2, -50, 5); //create the bouncing ball from the top of the canvas.
    //set the ball color
    this.bouncingBall.currentStroke.r = this.bouncingBall.redStroke.r;
    this.bouncingBall.currentStroke.g = this.bouncingBall.redStroke.g;
    this.bouncingBall.currentStroke.b = this.bouncingBall.redStroke.b;
  }

  update() {
    background(0, 90); // black background and alpha trail

    this.bouncingBall.update();//prevnt lagging
    this.handleInput();
    this.levelDisplay();
    this.changeLevels();
  }

  handleInput() {
    //control the platforms
    for (let i = 0; i < this.platforms.length; i++) {
      this.platforms[i].update();
      this.bouncingBall.handlePlatform(this.platforms[i]);
      if (this.platforms[i].active === false) {
        //at position i the get rid of 1 platform.
        this.platforms.splice(i, 1);
        console.log(`spliced`);
      }
    }
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
    //if the ball reaches the bottom of screen, cahnge changeLevels
    if (this.bouncingBall.y > height) {
      state = new Level2(this.bouncingBall.lives.currentLives);

    }
  }
}

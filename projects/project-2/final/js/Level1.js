//Level 1 class
//3 platforms, moving the platform with arrow keys, (5) starting lives
class Level1 extends Levels {
  constructor() {
    super();
    //display the level as text, calls all objects (ball falls down, player controls (3) platforms)
    this.currentLevel = `LEVEL 1`;
    bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 3;
    this.spaceBetweenPlatforms = 180;
    this.firstPlatformY = windowHeight / 3;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i;//spacing out b/w each platform
      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
      platform.danger.width = random(70, 100);//randomizing the size of platform areas
      platform.hole.width = random(100, 300);
    }
    bouncingBall = new BouncingBall(windowWidth / 2, -50, 5); //create the bouncing ball from the top of the canvas.
  }

  //updates all functions in the class
  update() {
    bouncingBall.update();//updates from bouncingBall class (prevents lagging when called outside of the loop)
    this.handleInput();
    this.levelDisplay();
    this.changeLevels();
  }

  //control the platforms
  handleInput() {
    //for every platform, draw max # of platforms.
    for (let i = 0; i < this.platforms.length; i++) {
      this.platforms[i].update();
      bouncingBall.handlePlatform(this.platforms[i]);//ball contacts every platform
      if (this.platforms[i].active === false) {
        //at position i the get rid of 1 platform.
        this.platforms.splice(i, 1);
      }
    }
  }

  //displays the level as text at the top of the screen
  levelDisplay() {
    push();
    fill(255);
    textSize(36);
    textAlign(CENTER);
    text(this.currentLevel, width/2, 100);
    pop();
  }

  //when the ball reaches the bottom of screen, change Levels + keep track of lives.
  changeLevels() {
    if (bouncingBall.y > height) {
      state = new Level2(bouncingBall.lives.currentLives);
    }
  }
}

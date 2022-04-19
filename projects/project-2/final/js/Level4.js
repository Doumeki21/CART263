//level 4 class
//recalls previous level, 6 platforms, adding a floating square
class Level4 extends Level3 {
  constructor(previousLevelLives) {
    super();
    //display the level as text, calls all objects (ball falls down, floating square player controls (6) platforms)
    this.currentLevel = `LEVEL 4`;
    this.square;
    bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 6;
    this.spaceBetweenPlatforms = 100;
    this.firstPlatformY = windowHeight / 5;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i;//spacing out b/w each platform
      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
      platform.danger.width = random(70,150);//smaller size range
      platform.hole.width = random(70,150);
    }
    bouncingBall = new BouncingBall(windowWidth / 2, -50, previousLevelLives); //create the Ball
    this.square = new Square(width / 2, height - 100);//create square
  }

  //updates all functions in the class
  update() {
    super.update();
    this.square.update(bouncingBall);//updates from square class
    this.levelDisplay();
    this.changeLevels();
  }

  //displays the level as text at the top of the screen
  levelDisplay() {
    push();
    fill(255);
    textSize(36);
    textAlign(CENTER);
    text(this.currentLevel, width/2, 50);
    pop();
  }

  //when the ball reaches the bottom of screen, change Levels + keep track of lives.
  changeLevels() {
    if (bouncingBall.y > height) {
      state = new Level5(bouncingBall.lives.currentLives);
    }
  }
}

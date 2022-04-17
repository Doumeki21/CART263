//final level
class Level5 extends Level4 {
  constructor(previousLevelLives) {
    super();
    this.timer = 25;
    this.timerActive = true;
    this.currentLevel = `LEVEL 5`;
    this.square;
    this.squares = [];
    this.maxSquares = random(2, 5);
    this.createSquares();

    this.rectangle;
    this.bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 8;
    this.spaceBetweenPlatforms = 100;
    this.firstPlatformY = windowHeight / 7;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i;//spacing out b/w each platform

      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
      platform.danger.width = random(70,100);
      platform.hole.width = random(70,100);
    }

    this.bouncingBall = new BouncingBall(windowWidth / 2, -50, previousLevelLives); //create the bouncing
    this.rectangle = new Rectangle(random(0, width));//create falling rectangle
    bossMusic.play();
    levelMusic.stop();
  }

  update() {
    super.update();
    this.rectangle.update(this.bouncingBall);
    for (let i = 0; i < this.maxSquares; i++) {
      this.squares[i].update(this.bouncingBall);
    }
    this.checkTimer();
    this.displayTimer();
    this.levelDisplay();
    this.changeLevels();
  }

  createSquares() {
    for (let i = 0; i < this.maxSquares; i++) {
      this.squares[i] = new Square(random(200, 800), height - 100);//create
      this.squares[i].update(this.bouncingBall);
    }
  }

  checkTimer() {
    //If timer is active,
    if (this.timerActive) {
      //and if it's down to 0 seconds,
      if (this.timer <= 0) {
        //stay at 0, and change screen to lose.
        this.timer = 0;
        state = new Lose();
        levelMusic.stop();
        bossMusic.stop();
      }
      //Count in seconds.
      this.timer -= 1 / 60;
    }
  }

  //Display the white timer counting down from 10, at the top left corner.
  displayTimer() {
    push();
    fill(255);
    textSize(60);
    textAlign(CENTER, CENTER);
    text(round(this.timer), width - 100, 200);
    pop();
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
      state = new Win();
    }
  }
}

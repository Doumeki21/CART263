//final level
class Level5 extends Level4 {
  constructor(previousLevelLives) {
    super();
    this.loadBar;
    this.timer = 25;
    this.timerActive = true;
    // this.currentLevel = `LEVEL 5`;

    this.rectangle;
    this.bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 8;
    this.spaceBetweenPlatforms = 100;
    this.firstPlatformY = windowHeight / 7;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i; //spacing out b/w each platform

      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
      platform.danger.width = random(70, 100);
      platform.hole.width = random(70, 100);
    }

    this.square;
    this.squares = [];
    this.maxSquares = random(2, 5);
    this.createSquares();

    this.bouncingBall = new BouncingBall( windowWidth / 2, -50, previousLevelLives); //create the bouncing
    this.rectangle = new Rectangle(random(0, width)); //create falling rectangle
    this.loadBar = new LoadBar(100, 100);
    bossMusic.play();
    levelMusic.stop();
  }

  update() {
    super.update();
    // this.loadBar.update();
    this.recover(now);
    this.displayBar();
    this.rectangle.update(this.bouncingBall);
    for (let i = 0; i < this.maxSquares; i++) {
      this.squares[i].update(this.bouncingBall);
    }
    this.checkTimer();
    this.displayTimer();
    this.levelDisplay();
    this.changeScenes();
  }

  createSquares() {
    for (let i = 0; i < this.maxSquares; i++) {
      this.squares[i] = new Square(random(200, 800), height - 100); //create
      this.squares[i].update(this.bouncingBall);
    }
  }

  //annyang called in script.js
  //voice command to heal the player
  recover(now) {
    this.loadBar.reloadBar();
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
    // text(round(this.timer), width - 100, 200);
    text(round(this.timer), width / 2, 100);
    pop();
  }

  //adding this here so that it takes away the previous text from lvl 4
  levelDisplay() {
    // push();
    // fill(255);
    // textSize(36);
    // textAlign(CENTER);
    // text(this.currentLevel, width/2, 100);
    // pop();
  }

  changeScenes() {
    if (this.bouncingBall.y > height) {
      state = new Win();
    }
  }
}

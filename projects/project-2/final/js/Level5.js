//final level
class Level5 extends Level4 {
  constructor(previousLevelLives) {
    super();
    this.currentLevel = `LEVEL 5`;
    this.squares = [];
    this.maxSquares = random(2, 5);
    this.createSquares();
    this.square;
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
    this.rectangle = new Rectangle(random(0, width), -10);//create falling rectangle
  }

  update() {
    super.update();
    this.rectangle.update();
    for (let i = 0; i < this.maxSquares; i++) {
      this.squares[i].update(this.bouncingBall);
    }
  }

  createSquares() {
    for (let i = 0; i < this.maxSquares; i++) {
      this.squares[i] = new Square(random(200, 800), height - 100);//create
      this.squares[i].update(this.bouncingBall);
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
}

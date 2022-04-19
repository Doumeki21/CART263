//final level
//recalls previous level, 8 platforms, adding more squares and a rectangle
class Level5 extends Level4 {
  constructor(previousLevelLives) {
    super();
    //display the level as timer, calls all objects (ball falls down, floating squares, falling rectangle, player controls (8) platforms)
    this.timer = 25;//25 second timer
    this.timerActive = true;
    this.square;
    this.squares = [];
    this.maxSquares = random(2, 5);//randomize # of squares
    this.createSquares();//create squares once before checking to create array again
    this.rectangle;
    bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 8;
    this.spaceBetweenPlatforms = 100;
    this.firstPlatformY = windowHeight / 7;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i; //spacing out b/w each platform
      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
      platform.danger.width = random(70, 100);//smaller size range
      platform.hole.width = random(70, 100);
    }
    bouncingBall = new BouncingBall(windowWidth / 2, -50, previousLevelLives); //create the ball
    this.rectangle = new Rectangle(random(0, width)); //create falling rectangle
    loadBar = new LoadBar(30, 100);//create the bar to heal
    bossMusic.play();//change the music to bossMusic
    levelMusic.stop();
  }

  //updates all functions in the class
  update() {
    super.update();
    loadBar.update();//annyang behavior called in script.js
    this.rectangle.update(bouncingBall);//updates from rectangle class
    for (let i = 0; i < this.maxSquares; i++) {
      this.squares[i].update(bouncingBall);//updates EACH square from square class
    }
    this.checkTimer();
    this.displayTimer();
    this.changeScenes();
  }

  //create a random number of squares at the bottom of the screen (moves as the platfrom is controlled)
  //called in constructor
  createSquares() {
    for (let i = 0; i < this.maxSquares; i++) {
      this.squares[i] = new Square(random(200, 800), height - 100);
      this.squares[i].update(bouncingBall);
    }
  }

  //checks if the timer is up
  checkTimer() {
    //If timer is active,
    if (this.timerActive) {
      //and if it's down to 0 seconds,
      if (this.timer <= 0) {
        //stay at 0, and change screen to lose, stop all music.
        this.timer = 0;
        state = new Lose();
        levelMusic.stop();
        bossMusic.stop();
      }
      //Count down in seconds.
      this.timer -= 1 / 60;
    }
  }

  //Display the white timer, at the top center of the screen
  displayTimer() {
    push();
    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(round(this.timer), width / 2, 50);
    pop();
  }

  //adding this function so that it overwrites the previous text from lvl 4
  levelDisplay() {}

  //when the ball reaches the bottom of screen, switch to the win state.
  changeScenes() {
    if (bouncingBall.y > height- 20) {
      state = new Win();
    }
  }
}

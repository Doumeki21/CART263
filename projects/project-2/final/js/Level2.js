//4 platforms, randomizes ball stroke
class Level2 extends Level1 {
  constructor(previousLevelLives) {
    super();
    this.currentLevel = `LEVEL 2`;
    this.bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 4;
    this.spaceBetweenPlatforms = 150;
    this.firstPlatformY = windowHeight / 5;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i;//spacing out b/w each platform

      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
      platform.danger.width = random(70,200);
      platform.hole.width = random(70,300);
    }
    this.bouncingBall = new BouncingBall(windowWidth / 2, -50, previousLevelLives); //create the bouncing ball from the top of the canvas.
  }

  update() {
    background(0, 90); // black background and alpha trail
    //prevnt lagging**
    this.bouncingBall.update();
    this.handleInput();
    this.levelDisplay();
    this.changeLevels();
  }

  handleInput() {
    for (let i = 0; i < this.platforms.length; i++) {
      this.platforms[i].update(); //move + display the platform
      this.bouncingBall.handlePlatform(this.platforms[i]); //check ball interacting platform
      this.bouncingBall.randomizeBallStroke(this.platforms[i]); //randomize ball stroke color
      if (this.platforms[i].active === false) {
        //at position i, get rid of 1 platform.
        this.platforms.splice(i, 1);
        //START: Pippin's code-
        // get the next platform
        let next = this.platforms[0];
        // Make sure there is one (might have run out of platforms)
        if (next) {
          // Check if the next platform's hole color matches the ball color
          //tostring is to see the color
          if (next.hole.color.toString() !== this.bouncingBall.currentStroke.toString()) {
            // If it doesn't, then swap the identities of the hole and danger for the next
            // platform so the ball passes through the correctly colored area
            let hole = next.hole;
            next.hole = next.danger;
            next.danger = hole;
          }
        }
        // END of pippin's code
      }
    }
  }

  // matchColor() {
  // //if the ball w blackStroke passes through a hole
  //   if (this.bouncingBall.currentStroke === this.bouncingBall.blackStroke) {
  //     if (
  //       this.y + this.size / 2 > platform.y - platform.height / 2 &&
  //       this.y - this.size / 2 < platform.y + platform.height / 2
  //     ) {
  //       //within the hole area,
  //       if (
  //         this.x > platform.hole.x - platform.hole.width / 2 &&
  //         this.x < platform.hole.x + platform.hole.width / 2
  //       ) {
  //         //then pass trhough
  //         //WILL MAKE A POINT SYSTEM HERE LATER???
  //       }
  //       //else, bounce back up
  //       else {
  //         this.vy = -this.vy;
  //         this.ay = 0;
  //       }
  //     }
  //   }
  // }

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
      state = new Level3(this.bouncingBall.lives.currentLives);
    }
  }
}

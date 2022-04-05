//move the script stuff into level1
//use the script to change between levels?
class Level1 extends Levels {
  constructor() {
    super();
    this.bouncingBall;
    this.platforms = [];
    this.maxPlatforms = 4;
    this.spaceBetweenPlatforms = 200;
    this.firstPlatformY = windowHeight/3;

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms*i;

      let platform = new Platform(windowWidth/2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
    }

    this.bouncingBall = new BouncingBall(windowWidth/2, -50);//create the bouncing ball from the top of the canvas.
  }

  update() {
    background(0, 90); // black background and alpha trail

    for (let i = 0; i < this.platforms.length; i++) {
        this.platforms[i].update();
        this.bouncingBall.update(this.platforms[i]);
    }

    if (this.bouncingBall.y > height) {
      state = new Level2();
    }
  }
}

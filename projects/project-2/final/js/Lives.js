class Lives {
  constructor() {
    this.lives = {
      x: 50,
      y: 50,
      size: 25,
      fill: 255,
      currentLives: 5,
      maxLives: 5,
    };
    this.lives.currentLives = this.lives.maxLives;
  }

  update() {
    this.displayLives();
  }

  handlePlatform(platform) {
    this.touchDanger(platform);
  }

  touchDanger(bouncingBall, platform) {
    if (
      bouncingBall.y + bouncingBall.size / 2 > platform.danger.y - platform.danger.height / 2 &&
      bouncingBall.x + bouncingBall.size / 2 > platform.danger.x - platform.danger.width / 2 &&
      bouncingBall.x - bouncingBall.size / 2 < platform.danger.x + platform.danger.width / 2
    ) {
      this.lives.currentLives--;
    }
  }

  displayLives() {
    push();
    let x = this.lives.x;
    for (let i = 0; i < this.lives.currentLives; i++) {
      //Display lives.
      push();
      noStroke();
      fill(255);
      ellipse(x, this.lives.y, this.lives.size);
      pop();
      //lives displays in a row
      x += 40;
    }
  }
}

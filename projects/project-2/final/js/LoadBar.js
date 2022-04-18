class LoadBar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 40;

    this.fillX = this.x;
    this.fillY = this.y;
    this.fillWidth = 0;
    this.fillHeight = 30;
    this.currentFill = {
      r: undefined,
      g: undefined,
      b: undefined,
    },
    this.filling = {
      r: 200,
      g: 200,
      b: 200,
    },
    this.maxFill = {
      r: 100,
      g: 200,
      b: 100,
    }
    this.fillSpeed = 2;
    this.activeBar = true;
  }

  update() {
    this.reloadBar();
    this.displayBar();
  }

//called in annyang
  activateBar(bouncingBall) {
    if (this.activeBar) {
      if (bouncingBall.lives.currentLives <= 5) {
        this.fillWidth = 0;
        bouncingBall.lives.currentLives++;
        this.activeBar = false;
      }
    }
  }

  reloadBar() {
    if (this.fillWidth < this.width) {
      this.fillWidth += this.fillSpeed;
      this.currentFill.r = this.filling.r;
      this.currentFill.r = this.filling.g;
      this.currentFill.r = this.filling.b;
    }
    else if (this.fillWidth === this.width) {
      this.currentFill.r = this.maxFill.r;
      this.currentFill.r = this.maxFill.g;
      this.currentFill.r = this.maxFill.b;
      this.displayHeal();
      this.activeBar = true;
    }
  }

  // //setActiveBar()
  // //Player's health bar will be inactive for a few seconds until it drops again if PLayer is still touching an enemy.
  // setActiveBar() {
  //   setTimeout(() => {
  //     this.isBarActive = true;
  //   }, 1000);
  // }

  //from project1//
  //displayHP()
  //display the player's life
  displayBar() {
    //display the bar
    push();
    noStroke();
    fill(100, 100, 100);
    rectMode(CENTER);
    //Dividing by 2 to offset it away from the edge.
    rect(this.x + this.width / 2, this.y, this.width, this.height);
    pop();

    //Display the fill
    push();
    noStroke();
    fill(this.currentFill.r, this.currentFill.g, this.currentFill.b);
    rectMode(CENTER);
    rect(this.fillX + this.fillWidth / 2, this.fillY, this.fillWidth, this.fillHeight);
    pop();
  }

  //display the healing text
  displayHeal() {
    push();
    noStroke();
    fill(255);
    textSize(15);
    text(`"Recover now!"`, this.width + 45, 100);
    pop();
  }
}

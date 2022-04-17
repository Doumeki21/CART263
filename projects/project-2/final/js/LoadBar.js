class LoadBar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 40;

    this.fillX = this.x;
    this.fillY = this.y;
    this.fillWidth = 200;
    this.fillHeight = 30;
    this.currentFill = {
        r: 200,
        g: 200,
        b: 200,
      },
    };
    this.fillSpeed = 10;
    this.activeBar = true;
  }

  // update() {
  //   this.reloadBar();
  //   this.displayBar();
  // }

  reloadBar() {
    if (this.fillWidth === 0) {
      this.fillX += this.fillSpeed;
      this.activeBar = false;
    }
    else if (this.fillWidth === this.width) {
      this.fillSpeed = 0;
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


  //displayHP()
  //display the player's life
  displayBar() {
    //display the bar
    push();
    noStroke();
    fill(100, 100, 100);
    rectMode(CENTER);
    //Dividing by 2 to offset it away from the edge.
    rect(this.x + this.width/2, this.y, this.width, this.height);
    pop();

    //Display the fill
    push();
    noStroke();
    fill(this.currentFill.r, this.currentFill.g, this.currentFill.b);
    rectMode(CENTER);
    rect(this.fillX + this.fillWidth/2, this.fillY, this.fillWidth, this.fillHeight);
    pop();
  }

  //display the healing text
  displayHeal() {
    push();
    noStroke();
    fill(255);
    textSize(30);
    text(`I need to heal!`, player.lifeBar.x + 100, height - 30);
    pop();
  }
}

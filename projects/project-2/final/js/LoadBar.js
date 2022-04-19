//LoadBar class
//the bar auto reloads every time the command is called
//used in level 5
class LoadBar {
  constructor(x, y) {
    //the base of the bar
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 40;
    //the filling for the bar
    this.fillX = this.x;
    this.fillY = this.y;
    this.fillWidth = 0;
    this.fillHeight = 30;
    (this.currentFill = {
      r: undefined,
      g: undefined,
      b: undefined,
    }),
      //grey fill
      (this.filling = {
        r: 200,
        g: 200,
        b: 200,
      }),
      //green fill
      (this.maxFill = {
        r: 100,
        g: 200,
        b: 100,
      });
    this.fillSpeed = 2;
    this.activeBar = true;
  }

  //A single function that contains everything from this object class to call in level 5.
  update() {
    this.checkReloadBar();
    this.displayBar();
  }

  //execute this function when the command is called through annyang
  //command function called in annyang - script.js
  activateBar(bouncingBall) {
    //if the bar isn't reloading,
    if (this.activeBar) {
      //and if the ball's life is less than its max,
      if (bouncingBall.lives.currentLives <= 5) {
        //the bar is used and life is increased by 1
        this.fillWidth = 0;
        bouncingBall.lives.currentLives++;
        this.activeBar = false;
      }
    }
  }

  //checks if the bar is reloadable
  checkReloadBar() {
    //if the bar is unfilled,
    if (this.fillWidth < this.width) {
      //then fill it with a grey color
      this.fillWidth += this.fillSpeed;
      this.currentFill.r = this.filling.r;
      this.currentFill.g = this.filling.g;
      this.currentFill.b = this.filling.b;
    }
    //else if it's filled,
    else if (this.fillWidth === this.width) {
      //then indicate it with a text and green color
      this.currentFill.r = this.maxFill.r;
      this.currentFill.g = this.maxFill.g;
      this.currentFill.b = this.maxFill.b;
      this.displayHeal();
      this.activeBar = true;
    }
  }

  //START: code from project1//
  //display load bar()
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
    rect(
      this.fillX + this.fillWidth / 2,
      this.fillY,
      this.fillWidth,
      this.fillHeight
    );
    pop();
  }
  //END: code from project1//

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

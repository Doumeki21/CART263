//UNUSED FILE
class CutScene extends Level4 extends Scenes {
  constructor() {
    super();
    //A string of dialogue stored in an array.
    this.string = [
      `Hmph...`,
      `Seems like that was too easy for you.`,
      `Let's make it more intense.`,
      `This time I'll give you the chance to heal by saying "recover now",`,
      `but careful`,
      `the clock is ticking...`
    ];
    //the `click` indicator/ button.
    this.continue = `Click`;
    this.start = `Start`;
    this.startActive = false;
    //A counter to keep track of which string we are on.
    this.currentIndex = 0;
  }

  update() {
    super.update();
    this.displayClick();
    this.displayStart();
  }

  displayClick() {
    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.continue, width - 300, height - 200);
    pop();
  }

  displayStart() {
    push()
    //if it's not active, make it grey
    if (this.startActive) {
      fill(200);
    }
    //if it's active, make it white
    else {
      fill(255);
    }
    noStroke();
    textSize(50);
    textAlign(CENTER);
    text(this.start, width - 300, height - 100);
    pop();
  }

  mouseClicked() {
    super.mouseClicked();
    //If the current line of dialogue is not the last line,
    if (this.currentIndex < this.string.length) {
      //then show the next line.
      this.currentIndex++;
    }
    //Else if it's the last line,
    else if (this.currentIndex === this.string.length) {
      this.startActive = true
    // state = new Level5(bouncingBall.lives.currentLives);
  }
}

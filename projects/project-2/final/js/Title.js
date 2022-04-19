//Title class
//Event: the game begins in this state.
class Title extends Scenes{
  constructor() {
    super();
    //displays the text for the state and starts music.
    this.titleString = `START`;
    this.subtitleString = `(Use Arrow Keys)`;
    this.continueString = `Click to Start`;
    levelMusic.play();
    levelMusic.loop();
  }

  //updates all functions in the class
  update() {
    super.update();
    this.displayTitle();
  }

  //Display the title.
  displayTitle() {
    push()
    noStroke();
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(this.titleString, width / 2, height / 2);
    pop();

    push()
    noStroke();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(this.subtitleString, width / 2, height / 2 + 100);
    pop();

    push()
    noStroke();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(this.continueString, width / 2, height - 100);
    pop();
  }

  //Switch to level 1 after clicking the mouse.
  mouseClicked() {
    super.mouseClicked();
    state = new Level1();
  }
}

//Win class
//Event: the player finishes the game. When this state is triggered, the player returns to the title screen.
class Win extends Scenes {
  constructor() {
    super();
    //displays the text for the state and stops all music.
    this.titleString = `YOU WIN`;
    this.subtitleString = `Click to Continue`;
    levelMusic.stop();
    bossMusic.stop();
  }

  //updates all functions in the class
  update() {
    super.update();
    this.displayTitle();
  }

  //Display the text.
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
    text(this.subtitleString, width / 2, height - 50);
    pop();
  }

  //Switch to title screen after clicking the mouse.
  mouseClicked() {
    super.mouseClicked();
    state = new Title();
  }
}

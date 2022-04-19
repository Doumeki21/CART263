//lose class
//Event: the player either couldn't finish reach the end before losing all lives or ran out of time. When this state is triggered, the player needs to replay the program from the start.
class Lose extends Scenes {
  constructor() {
    super();
    //displays the text for the state and stops all music.
    this.titleString = `YOU LOSE`;
    this.subtitleString = `CLICK TO CONTINUE`;
    levelMusic.stop();
    bossMusic.stop();
  }

  //updates all functions in the class
  update() {
    super.update();
    this.displayTitle();
  }

  //Display the text
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
    text(this.subtitleString, width / 2, height - 100);
    pop();
  }

  //Switch to title screen after clicking the mouse.
  mouseClicked() {
    super.mouseClicked();
    state = new Title();
  }
}

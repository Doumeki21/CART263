class Win extends Scenes {
  constructor() {
    super();
    this.titleString = `YOU WIN`;
    this.subtitleString = `CLICK TO CONTINUE`;
    levelMusic.stop();
    bossMusic.stop();
  }

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
  }

  //Switch from the title screen to the stress game after clicking on the mouse.
  mouseClicked() {
    super.mouseClicked();
    state = new Title();
  }
}

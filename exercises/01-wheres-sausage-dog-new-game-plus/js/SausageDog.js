class SausageDog extends Animal {
  constructor(x, y, image) {
    super(x, y, image);
    this.found = false;
    this.rotationSpeed = 0.5;
  }

  //A single function to be used to update all the actions needed to be done for sausage dog
  update() {
    super.update();
    //When the dog is found, it rotates.
    if (this.found) {
      this.angle += this.rotationSpeed; //calls angle from Animal class.
    }
  }

  //Execute this event when mouse is pressed.
  mousePressed() {
    //If the mouse is clicked while it's overlapping the sausage dog,
    if (this.overlap(mouseX, mouseY)) {
      //then it's found
      this.found = true;
      //and 2000 millis pass before changing the game to the win screen
      setTimeout(function () {
        state = `win`;
      }, 2000);
      return true;
    } //If not, then return false (and game continues)
    return false;
  }
}

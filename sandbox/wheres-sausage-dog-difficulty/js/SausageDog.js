class SausageDog extends Animal {
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.5;
  }

  update() {
    super.update();

    if (this.found) {
      this.angle += this.rotationSpeed; //calls angle from Animal class.
    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
      setTimeout(function() {
        state = `win`;
      }, 2000);
      return true;
    } //General rule: Everytime there is a if statement tht consists true, then most likely need return false
    return false;
  }
}

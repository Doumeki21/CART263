class Animal {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.angle = 0;
  }

  //A single function to be used to update all the actions needed to be done for animals.
  update() {
    this.display();
  }

  //Display the animal image.
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }

  //PN: moving the overlap elements from sausageDog to here is better, cuz now this function becomes generic and can be applied to anything.

  //Check if the mouse overlaps any animal-
  overlap(x, y) {
    //If it does, return true when function is called
    if (
      x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height / 2
    ) {
      return true;
    }
    //If not, return false.
    else {
      return false;
    }
  }
}

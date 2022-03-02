//Enemies - class that contains all enemies
class Enemies {
  //store position, size, and whether it's active as properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = undefined;
    this.active = false;
    this.activate();
  }

  //update()
  //Calls all the functions/ events within this class.
  update() {
    this.checkActive();
    this.display();
  }

  //checkActive()
  checkActive() {}

  //activate()
  //displays the enemies at random frames for a certain time.
  activate() {
    this.active = !this.active;
    //bind >> to this class.
    //make the enemies active after (a range b/w) 1 and 5 seconds
    setTimeout(this.activate.bind(this), random(5000, 10000));
  }

  //display()
  display() {}
}

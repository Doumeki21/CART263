class Enemies {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = undefined;
    this.active = false;

    this.activate();
  }

  update() {
    this.checkActive();
    this.display();
  }

  checkActive() {

  }

  activate() {
    this.active = !this.active;
    //bind >> to this class.
    //make the red enemy active after (a range b/w) 1 and 5 seconds
    setTimeout(this.activate.bind(this), random(1000, 5000));
  }

  display() {

  }
}

//Purple enemy - an extension to the Enemies class
//Randomly appears and circles around a path
class PurpleEnemy extends Enemies {
  //calls the super constructor and adds properties for it to display
  constructor(x, y) {
    //The purple square
    super(x, y); //pathX, pathY
    this.enemySize = 25; //size of square
    this.angle = 0;
    this.rotatingSpeed = 20;
    //the rotating path
    this.size = 300;
    this.pathAngle = 0;
    this.active = false;
    this.activate();
  }

  //update()
  //Calls the super update() and all the functions/ events within this class.
  update() {
    super.update();
    this.rotatingPath();
    this.selfRotate();
    this.checkActive();
    this.display();
  }

  //rotatingPath()
  //the square rotates along it's circular path
  rotatingPath() {
    this.pathAngle -= this.rotatingSpeed;
  }

  //selfRotate()
  //the square rotates along itself.
  selfRotate() {
    this.angle -= this.rotatingSpeed;
  }

  //checkActive()
  //If this enemy is not visible, randomize it's location and size
  checkActive() {
    if (!this.active) {
      this.x = random(0, width);
      this.y = random(0, height);
      this.size = random(300, 600);
    }
  }

  //display()
  //if the enemy is active, display it
  display() {
    if (this.active) {
      //draw a purple circular path
      push();
      fill(95, 22, 99, 80); //dark purple
      ellipse(this.x, this.y, this.size);
      pop();
      //draw the purple square
      push();
      fill(157, 97, 199); //lighter purple
      rectMode(CENTER, CENTER);
      translate(this.x, this.y); //square follows along the path
      rotate(this.pathAngle); //rotate the square along the path's angle
      translate(this.size / 2, 0); //translating the "anchor point" back to the square
      rotate(this.angle); //square rotates along itself
      rect(0, 0, this.enemySize);
      pop();
    }
  }
}

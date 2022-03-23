//the platform class
//the user controls the platform using the keyboard keys (and the mouse).
class Platform {
  constructor(x, y) {
    //the platform
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 10;
    this.movingSpeed = 10;
    // this.active = true;

    //danger zone
    this.danger = {
      currentX: random(0, width),
      y: this.y,
      width: random(20, 300),
      height: this.height,
      // amount:
    };

    //hole
    this.hole = {
      currentX: random(0, width),
      y: this.y,
      width: random(50, 200),
      height: this.height,
    };
  }

  //calls all functions from this class.
  update() {
    this.checkOverlap();
    this.move();
    this.displayPlatform();
    this.displayHole();
    this.displayDanger();
  }

  //If the generated platform objects overlap each other, then regenerate a new position for each.
  checkOverlap() {
    if (
      this.hole.currentX - this.hole.width / 2 <
        this.danger.currentX + this.danger.width / 2 &&
      this.hole.currentX + this.hole.width / 2 >
        this.danger.currentX - this.danger.width / 2
    ) {
      this.danger.currentX = random(0, width);
      this.hole.currentX = random(0, width);
    }
  }

  //MAKE A FUNCTION: when the objects move out of the canvas, display them back from the opposite side.

  //TO BE USED LATER FOR WHEN THERE'S MORE PLATFORMS!
  // //if the ball pass through the platform, the platform disappears
  // passThrough() {
  //   if (this.y + this.size / 2 > platform.y - platform.height / 2 && this.y - this.size / 2 < platform.y + platform.height / 2)
  // }

  //the Handleinput
  move() {
    //TO BE USED LATER FOR MOUSE INPUT
    // //the platforms follows the mouse on the x-axis.
    // this.x = constrain(mouseX, 0, width);
    //
    // let dx = mouseX - pmouseX;
    //
    // //second values = controls/tracks where the object goes.
    // this.hole.currentX += dx;
    // this.danger.currentX += dx;

    //control the platform with left and right arrow keys.
    if (keyIsDown(LEFT_ARROW)) {
      this.hole.currentX -= this.movingSpeed;
      this.danger.currentX -= this.movingSpeed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.hole.currentX += this.movingSpeed;
      this.danger.currentX += this.movingSpeed;
    }
  }

  //display the white platform
  displayPlatform() {
    push();
    stroke(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  //display the black hole
  displayHole() {
    push();
    noStroke();
    fill(100);
    rectMode(CENTER);
    rect(this.hole.currentX, this.hole.y, this.hole.width, this.hole.height);
    pop();
  }

  //display the red dangerzones
  displayDanger() {
    push();
    noStroke();
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(
      this.danger.currentX,
      this.danger.y,
      this.danger.width,
      this.danger.height
    );
    pop();
  }
}

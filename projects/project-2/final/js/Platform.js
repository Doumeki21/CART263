//the platform class
//the user controls the platform using the keyboard keys (and the mouse).
class Platform {
  constructor(x, y) {
    //the platform
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 10;
    this.movingSpeed = 20;
    this.active = true;

    //danger zone
    this.danger = {
      x: random(0, width),
      y: this.y,
      width: random(65, 300),
      height: this.height,
      color: color(255, 117, 138)//pippin's code: Use the color object instead of individual properties
    };

    //hole
    this.hole = {
      x: random(0, width),
      y: this.y,
      width: random(65, 200),
      color: color(100, 100, 100),//part of pippin's code ""
      height: this.height,
    };
  }

  //calls all functions from this class when it's active.
  update() {
    if (this.active) {
      // //level 2: 1 hole draggable by the mouse
      // if (state === `level2`) {
      //   //function
      // }
      // //level3: ball's outline changes color (to match the hole color) after every platform

      this.regenerate();
      this.move();
      this.displayPlatform();
      this.displayHole();
      this.displayDanger();
    }
  }

  //If the generated platform objects overlap each other, then regenerate a new position for each.
  regenerate() {
    if (
      this.hole.x - this.hole.width / 2 <
        this.danger.x + this.danger.width / 2 &&
      this.hole.x + this.hole.width / 2 >
        this.danger.x - this.danger.width / 2
    ) {
      this.danger.x = random(0, width);
      this.hole.x = random(0, width);
    }
  }

  //the Handleinput
  move() {
    //TO BE USED LATER FOR MOUSE INPUT
    // //the platforms follows the mouse on the x-axis.
    // this.x = constrain(mouseX, 0, width);
    //
    // let dx = mouseX - pmouseX;
    //
    // //second values = controls/tracks where the object goes.
    // this.hole.x += dx;
    // this.danger.x += dx;

    //control the platform with left and right arrow keys.
    //platform objects move left
    if (keyIsDown(LEFT_ARROW)) {
      this.hole.x -= this.movingSpeed;
      this.danger.x -= this.movingSpeed;
    }
    //platform objects move right
    if (keyIsDown(RIGHT_ARROW)) {
      this.hole.x += this.movingSpeed;
      this.danger.x += this.movingSpeed;
    }

    // Wrap the danger zones to the other side
    if (this.danger.x + this.danger.width < 0) {
      this.danger.x += width + this.danger.width;
    } else if (this.danger.x - this.danger.width > width) {
      this.danger.x -= width + this.danger.width;
    }
    // Wrap the holes to the other side
    if (this.hole.x + this.hole.width < 0) {
      this.hole.x += width + this.hole.width;
    } else if (this.hole.x - this.hole.width > width) {
      this.hole.x -= width + this.hole.width;
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
    fill(this.hole.color);//part of pippin's code
    rectMode(CENTER);
    rect(this.hole.x, this.hole.y, this.hole.width, this.hole.height);
    pop();
  }

  //display the red dangerzones
  displayDanger() {
    push();
    noStroke();
    fill(this.danger.color);//part of pippin's code
    rectMode(CENTER);
    rect(
      this.danger.x,
      this.danger.y,
      this.danger.width,
      this.danger.height
    );
    pop();
  }
}

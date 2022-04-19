//the platform class
//the user controls the platform using the keyboard keys.
class Platform {
  constructor(x, y) {
    //the platform
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 10;
    this.movingSpeed = 15;
    this.active = true;
    //danger zone
    this.danger = {
      x: random(0, width),
      y: this.y,
      width: random(65, 300),
      height: this.height,
      color: color(255, 117, 138), //pippin's code: Use the color object instead of individual properties
    };
    //hole
    this.hole = {
      x: random(0, width),
      y: this.y,
      width: random(65, 200),
      color: color(100, 100, 100), //part of pippin's code ""
      height: this.height,
    };
  }

  //updates all functions from this class when it's active.
  update(normal) {
    if (this.active) {
      this.regenerate();
      this.move(normal); //in lvl 3 when platform directions start to alternate
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
      this.hole.x + this.hole.width / 2 > this.danger.x - this.danger.width / 2
    ) {
      this.danger.x = random(0, width);
      this.hole.x = random(0, width);
    }
  }

  //the Handleinput, platform controlled with the left and right arrow keys
  move(normal) {
    //modifier to change the direction of the platform later on
    let modifier = 1;
    if (!normal) {
      modifier = -1;
    }
    //platform objects move left
    if (keyIsDown(LEFT_ARROW)) {
      this.hole.x -= this.movingSpeed * modifier;
      this.danger.x -= this.movingSpeed * modifier;
    }
    //platform objects move right
    if (keyIsDown(RIGHT_ARROW)) {
      this.hole.x += this.movingSpeed * modifier;
      this.danger.x += this.movingSpeed * modifier;
    }
    // Wrap the danger zones to the other side once it goes off screen
    if (this.danger.x + this.danger.width < 0) {
      this.danger.x += width + this.danger.width;
    } else if (this.danger.x - this.danger.width > width) {
      this.danger.x -= width + this.danger.width;
    }
    // Wrap the holes to the other side once it goes off screen
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
    fill(this.hole.color); //part of pippin's code
    rectMode(CENTER);
    rect(this.hole.x, this.hole.y, this.hole.width, this.hole.height);
    pop();
  }

  //display the red zones
  displayDanger() {
    push();
    noStroke();
    fill(this.danger.color); //part of pippin's code
    rectMode(CENTER);
    rect(this.danger.x, this.danger.y, this.danger.width, this.danger.height);
    pop();
  }
}

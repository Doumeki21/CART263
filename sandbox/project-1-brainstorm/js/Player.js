class Player {
  constructor(x, y) {
    this.letter = `F`;
    // this.bullets = [];
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 10;
    this.angle = 0;
    // rotatingSpeed: 0.15,
    this.rotatingSpeed = 15;
    this.alive = true;
    this.canShoot = true;

    this.placeholderX = undefined;
    this.placeholderY = undefined;
    this.placeholderSize = 4;
    this.placeholderAngle = 0;
  }

  /**
  Calls methods required each frame for animation
  */
  update() {
    this.movePlayer();
    this.handleInput();
    this.display();
  }

  movePlayer() {
    this.x += this.vx;
    this.y += this.vy;

    this.placeholderX += this.vx;
    this.placeholderY += this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  handleShoot() {
    if (keyIsDown(UP_ARROW)) {
      this.canShoot = true;
      return true;
      // player.bullets++;
    } else {
      return false;
    }
  }

  handleInput() {
    //Press A to go left
    if (keyIsDown(65)) {
      this.vx = -this.speed;
    }
    //Press D to go right
    else if (keyIsDown(68)){
      this.vx = this.speed;
    }
    //else stop
    else {
      this.vx = 0;
    }

    //Press left arrow to move up
    if (keyIsDown(87)) {
      this.vy = -this.speed;
    }
    //Press right arrow to move down
    else if (keyIsDown(83)){
      this.vy = this.speed;
    }
    //else stop
    else {
      this.vy = 0;
    }

    //player rotates left
    if (keyIsDown(LEFT_ARROW)) {
      this.angle -= this.rotatingSpeed;
    }
    //Player rotates right
    else if (keyIsDown(RIGHT_ARROW)){
      this.angle += this.rotatingSpeed;
    }
    else {
      this.angle = this.angle;
    }
  }

  display() {
    //display the player
    push();
    fill(255);
    textSize(34);
    textAlign(CENTER, BOTTOM);
    translate(this.x, this.y);
    rotate(this.angle);
    text(this.letter, 0, 0);
    pop();

    //display the placeholder
    push();
    // translate(player.x, player.y);
    rotate(this.angle);
    fill(0, 255, 0);
    ellipse(this.placeholderX, this.placeholderY, 8);
    pop();
  }
}

class Player {
  constructor(x, y) {
    this.letter = `F`;
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
  }

  /**
  Calls methods required each frame for animation
  */
  update(redEnemy, purpleEnemy) {
    this.movePlayer();
    this.handleInput();
    this.checkHit(redEnemy);
    this.checkHit(purpleEnemy);
    this.display();
  }

  checkHit(enemy) {
    if (this.x > enemy.x - enemy.size / 2 - 15 &&
      this.x < enemy.x + enemy.size / 2 + 15 &&
      this.y > enemy.y - enemy.size / 2 - 15 &&
      this.y < enemy.y + enemy.size / 2 + 15) {
      console.log(`hit`);
  }
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

    // //Life bar
    // push();
    // noStroke();
    // fill(128, 0, 22);
    // rectMode(CENTER);
    // //Dividing to offset it away from the edge.
    // rect(this.lifeBar.x, this.lifeBar.y - this.lifeBar.height / 2, this.progressBar.width, this.progressBar.height);
    // pop();
    //
    // //Display the fill
    // push();
    // noStroke();
    // fill(255, 0, 43);
    // rectMode(CENTER);
    // rect(this.fillProgressBar.x, this.fillProgressBar.y - this.fillProgressBar.height / 2, this.fillProgressBar.width, this.fillProgressBar.height);
    // pop();
  }
}

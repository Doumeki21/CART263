//You cantrol this object (the letter F).
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
    //The base of the health bar.
    this.lifeBar = {
      x: 50,
      y: height - 50,
      width: 40,
      height: 200,
    };
    //health bar fill.
    this.fillLifeBar = {
      x: 50,
      y: height - 50,
      width: 30,
      height: 200,
      currentFill: {
        r: 200,
        g: 200,
        b: 200,
      },
    };
    this.isBarActive = true;
    this.isPlayerDisplayed = true;
    this.canShoot = true;
    this.blinkInterval = undefined;
    this.isLowHealth = false;
  }

  /**
  Calls all the other functions in the class when update is called in script.js
  */
  update(redEnemy, purpleEnemy, boss) {
    this.changeHealthBar();
    this.movePlayer();
    this.handleInput();
    if (this.fillLifeBar.height < 100) {
      this.displayHeal();
    }
    //if the life bar is actively dropping, continue to check whether PLayer is overlapping any enemy
    if (this.isBarActive) {
      this.checkTakenDamage(redEnemy);
      this.checkTakenDamage(purpleEnemy);
      this.checkTakenDamage(boss);
    }
    this.displayPlayer();
    this.displayHP();
  }

  checkTakenDamage(enemy) {
    if (
      enemy.active &&
      this.x > enemy.x - enemy.size / 2 &&
      this.x < enemy.x + enemy.size / 2 &&
      this.y > enemy.y - enemy.size / 2 &&
      this.y < enemy.y + enemy.size / 2
    ) {
      this.fillLifeBar.height -= 10;
      this.isPlayerDisplayed = false;
      this.blink();
      this.isBarActive = false;
      this.setActiveBar();
    }
  }

  blink() {
    //blinkInterval is to specify which interval to clear later
    this.blinkInterval = setInterval(() => {
      this.isPlayerDisplayed = !this.isPlayerDisplayed;
    }, 50);
  }

  setActiveBar() {
    setTimeout(() => {
      clearInterval(this.blinkInterval);
      this.isPlayerDisplayed = true;
      this.isBarActive = true;
      console.log(`bar active`);
    }, 1000);
  }

  //Player's health bar will become more red as it decreases closer to 0 health.
  changeHealthBar() {
    this.fillLifeBar.currentFill.r = map(this.fillLifeBar.height,200,0,200,255);
    this.fillLifeBar.currentFill.g = map(this.fillLifeBar.height,200,0,200,0);
    this.fillLifeBar.currentFill.b = map(this.fillLifeBar.height,200,0,200,0);
  }

  // heal() {
  //     this.fillLifeBar.height += 20;
  // }

  movePlayer() {
    this.x += this.vx;
    this.y += this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

//Player shoots bullets (function is called in Script.js)
  handleShoot() {
    if (keyIsDown(UP_ARROW)) {
      this.canShoot = true;
      return true;
    } else {
      return false;
    }
  }

  //Control the player: WASD to move, RIGHT/ LEFT to rotate
  handleInput() {
    //Press A to go left
    if (keyIsDown(65)) {
      this.vx = -this.speed;
    }
    //Press D to go right
    else if (keyIsDown(68)) {
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
    else if (keyIsDown(83)) {
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
    else if (keyIsDown(RIGHT_ARROW)) {
      this.angle += this.rotatingSpeed;
    } else {
      this.angle = this.angle;
    }
  }

  displayPlayer() {
    if (this.isPlayerDisplayed) {
      //display the player
      push();
      noStroke();
      textStyle(BOLD);
      fill(255);
      textSize(34);
      textAlign(CENTER, BOTTOM);
      translate(this.x, this.y);
      rotate(this.angle);
      text(this.letter, 0, 0);
      pop();
    }
  }

  //display the player's life
  displayHP() {
    //Life bar
    push();
    noStroke();
    fill(100, 100, 100);
    rectMode(CENTER);
    //Dividing to offset it away from the edge.
    rect(
      this.lifeBar.x,
      this.lifeBar.y - this.lifeBar.height / 2,
      this.lifeBar.width,
      this.lifeBar.height
    );
    pop();

    //Display the fill (for the life bar)
    push();
    noStroke();
    fill(
      this.fillLifeBar.currentFill.r,
      this.fillLifeBar.currentFill.g,
      this.fillLifeBar.currentFill.b
    );
    rectMode(CENTER);
    rect(
      this.fillLifeBar.x,
      this.fillLifeBar.y - this.fillLifeBar.height / 2,
      this.fillLifeBar.width,
      this.fillLifeBar.height
    );
    pop();
  }

//display the healing text
  displayHeal() {
    push();
    noStroke();
    fill(255);
    textSize(30);
    text(`I need to heal!`, player.lifeBar.x + 50, height - 50);
    pop();
  }
}

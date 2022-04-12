//adding objects flying in
class Level4 extends Level2 {
  constructor(previousLevelLives) {
    super();
    this.flyingSquare = {
      x: width / 2,
      y: height - 150,
      vx: undefined,
      vy: undefined,
      ax: 0,
      ay: 0,
      maxSpeed: 15,
      size: 40,
      active: true,
      color: color(200, 200, 200),
    };
    this.squareYSpeeds = [-5, -4, -3, 3, 4, 5];
    this.squareXSpeeds = [-0.5, -0.4, -0.3, 0.3, 0.4, 0.5];
    this.randomTimer = random(60, 60 * 5);

    for (let i = 0; i < this.maxPlatforms; i++) {
      let platformY = this.firstPlatformY + this.spaceBetweenPlatforms * i;

      let platform = new Platform(windowWidth / 2, platformY); // A reasonably placed platform for the first one.
      this.platforms.push(platform); //put each platform inside the array
    }

    this.bouncingBall = new BouncingBall(windowWidth / 2, -50, previousLevelLives); //create the bouncing
  }

  update() {
    super.update();
    this.move();
    this.display();
  }

  //Square moves.
  move() {
    this.flyingSquare.vx = this.squareXSpeeds;
    this.flyingSquare.vy = this.squareYSpeeds;
    //accelerates
    this.flyingSquare.vx += this.flyingSquare.ax;
    this.flyingSquare.vy += this.flyingSquare.ay;
    //constraining the square at reasonable speed
    this.flyingSquare.vx = constrain(
      this.flyingSquare.vx,
      -this.flyingSquare.maxSpeed,
      this.flyingSquare.maxSpeed
    );
    this.flyingSquare.vy = constrain(
      this.flyingSquare.vy,
      -this.flyingSquare.maxSpeed,
      this.flyingSquare.maxSpeed
    );
    //Changing position.
    this.flyingSquare.x += this.flyingSquare.vx;
    this.flyingSquare.y += this.flyingSquare.vy;
    //If the square has gone off the canvas, deactivate the square.
    if (this.flyingSquare.y - this.flyingSquare.size / 2 > height) {
      this.flyingSquare.active = false;
    }
  }

  //Display blue square.
  display() {
    push();
    fill(this.flyingSquare.color);
    stroke(0);
    rectMode(CENTER);
    rect(this.flyingSquare.x, this.flyingSquare.y, this.flyingSquare.size);
    pop();
  }
}

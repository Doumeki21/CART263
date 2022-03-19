class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }

  create() {
    //create avatar
    this.avatar = this.physics.add.sprite(400, 300, `avatar`);
    this.avatar.setCollideWorldBounds(true);

    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.sadness = this.physics.add.sprite(x, y, `thumbs-down`);

    //check soverlap b/w avatar and sadness with the method of getSad
    //null: to not get an overlap of another method
    this.physics.add.overlap(this.avatar,this.sadness,this.getSad,null,this);

    //access the user's arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  getSad(avatar, sadness) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.sadness = setPosition(x, y);
  }

  update() {
    // this.avatar.setVelocity(0);
    let speed = 300;

    if (this.cursors.left.isDown) {
      this.avatar.setAngularVelocity(-speed);
    } else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(speed);
    } else {
      this.avatar.setAngularVelocity(0);
    }

    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(
        this.avatar.rotation,
        200,
        this.avatar.body.acceleration
      );
    } else {
      this.avatar.setAcceleration(0);
    }
  }
}

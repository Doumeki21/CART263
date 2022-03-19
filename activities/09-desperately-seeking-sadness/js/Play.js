class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }

  create() {
    //create avatar
    this.avatar = this.physics.add.sprite(400, 300, `avatar`);
    //so avatar doesn't go outside of the canvas
    this.avatar.setCollideWorldBounds(true);

    //create the thumbs-down collectable
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.sadness = this.physics.add.sprite(x, y, `thumbs-down`);

    //create the thumb-up colliders
    this.happiness = this.physics.add.group({
      key: `thumbs-up`,
      quantity: 10,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });
    //get all the children of the happiness group and place them randomly inside the space of the canvas
    Phaser.Actions.RandomRectangle(this.happiness.getChildren(), this.physics.world.bounds);

    //check soverlap b/w avatar and sadness with the method of getSad
    //null: to not get an overlap of another method
    this.physics.add.overlap(this.avatar,this.sadness,this.getSad,null,this);
    //the avatar bumps into any thumbs up
    this.physics.add.collider(this.avatar, this.happiness);
    this.physics.add.collider(this.sadness, this.happiness);
    //every thumb-up bumps into each other
    this.physics.add.collider(this.happiness, this.happiness);

    //access the arrow keys to control avatar
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  getSad(avatar, sadness) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.sadness.setPosition(x, y);
  }

//control the avatar with keys
  update() {
    // this.avatar.setVelocity(0);
    let speed = 2;

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

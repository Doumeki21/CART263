class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }

  create() {
    //the wall
    this.wall = this.physics.add.image(100, 100, `wall`);
    this.wall.setTint(0xdd3333);

    //the player
    this.avatar = this.physics.add.sprite(200, 200, `avatar`);
    //animation settings
    this.createAnimations();
    // this.avatar.setVelocityY(100);
    this.avatar.play(`avatar-idle`);
    this.avatar.setCollideWorldBounds(true);

    //the handleinput
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.avatar.setVelocity(0);

    if(this.cursors.left.isDown) {
      this.avatar.setVelocityX(-300);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(300);
    }

    if(this.cursors.up.isDown) {
      this.avatar.setVelocityY(-300);
    }
    else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(300);
    }

    if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
      this.avatar.play(`avatar-moving`, true); //true >> if it's already playing don't restart the animation
    }
    else {
      this.avatar.play(`avatar-idle`);
    }
  }

  createAnimations() {
    this.anims.create({
      key: `avatar-moving`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 3
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: `avatar-idle`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 0
      }),
      frameRate: 12,
      repeat: 0
    });
  }
}

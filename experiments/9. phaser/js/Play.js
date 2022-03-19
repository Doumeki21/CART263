class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }

  create() {
    //ccreate wall
    this.wall = this.physics.add.image(100, 100, `wall`);
    //so tht wall doesn't move when collided
    this.wall.setImmovable(true);
    this.wall.setTint(0xdd3333);

    //create collectable
    this.collectable = this.physics.add.image(300, 300, `wall`);
    this.collectable.setTint(0x33dd33);
    this.collectable2 = this.physics.add.image(400, 400, `wall`);
    this.collectable2.setTint(0x33dd33);

    //create player
    this.avatar = this.physics.add.sprite(200, 200, `avatar`);
    //animation settings
    this.createAnimations();
    // this.avatar.setVelocityY(100);
    this.avatar.play(`avatar-idle`);
    this.avatar.setCollideWorldBounds(true);

    //Actions
    //avatar collides with wall.
    this.physics.add.collider(this.avatar, this.wall);
    //this keeps collectItem refering to the objects
    this.physics.add.overlap(this.avatar, this.collectable, this.collectItem, null, this);
    this.physics.add.overlap(this.avatar, this.collectable2, this.collectItem, null, this);

    //the handleinput
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  collectItem(avatar, collectable) {
    collectable.destroy();
  }

  update() {
    this.avatar.setVelocity(0);
    let speed = 500;

    if(this.cursors.left.isDown) {
      this.avatar.setVelocityX(-speed);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(speed);
    }

    if(this.cursors.up.isDown) {
      this.avatar.setVelocityY(-speed);
    }
    else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(speed);
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

class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }

  create() {
    //create walls
    this.walls = this.physics.add.group({
      key: `wall`,
      immovable: true,
      quantity: 100,
    });
    this.walls.children.each(function(wall) {
      let x = Math.random()*this.sys.canvas.width;
      let y = Math.random()*this.sys.canvas.height;
      wall.setPosition(x, y);
      wall.setTint(0xdd3333);
    }, this);

    //create collectables
    this.collectables = this.physics.add.group({
      key: `wall`,
      quantity: 100,
    });
    this.collectables.children.each(function(collectable) {
      let x = Math.random()*this.sys.canvas.width;
      let y = Math.random()*this.sys.canvas.height;
      collectable.setPosition(x, y);
      collectable.setTint(0x33dd33);
    }, this);

    //create player
    this.avatar = this.physics.add.sprite(200, 200, `avatar`);
    //animation settings
    this.createAnimations();
    // this.avatar.setVelocityY(100);
    this.avatar.play(`avatar-idle`);
    //avatar is bounded by the canvas edges
    this.avatar.setCollideWorldBounds(true);

    //Actions
    //avatar collides with wall.
    this.physics.add.collider(this.avatar, this.walls);
    //avatar collects items
    //this >> keeps collectItem refering to the objects
    this.physics.add.overlap(this.avatar, this.collectables, this.collectItem, null, this);

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
        //depends on frames from the spritesheet: avatar has 4
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

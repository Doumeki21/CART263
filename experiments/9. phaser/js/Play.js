class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }

  create() {
    this.wall = this.add.image(100, 100, `wall`);
    this.wall.setTint(0xdd3333);

    this.avatar = this.add.sprite(200, 200, `avatar`);

    this.createAnimations();
    this.avatar.play(`avatar-idle`);
  }

  update() {

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

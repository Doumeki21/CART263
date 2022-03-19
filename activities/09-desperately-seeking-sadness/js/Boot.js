class Boot extends Phaser.Scene {
  constructor() {
    super({
      //key = classes that defines the phaser scenes
      key: `boot`
    });
  }

  preload() {
    this.load.image(`avatar`, `assets/images/neutral-face.png`);
    this.load.image(`thumbs-down`, `assets/images/thumbs-down.png`);
    this.load.image(`thumbs-up`, `assets/images/thumbs-up.png`);

    //use the arrow function to remain in the same "this" context
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {

  }

  update() {

  }
}

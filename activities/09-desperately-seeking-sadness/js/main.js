/**
Desperately Seeking Sadness
Activity 9

An emoji in search of satisfying Sadness in a world of positivity
**/

"use strict";

let config = {
  // WEBGL/ CANVAS
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`
  },
  // scene array contains a list of classes used
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);

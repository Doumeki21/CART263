/**
Live: voices


PLAN:
- annyang!
-ResponsiveVoice (connecting to other libraries)
*/

"use strict";

let face = `:-|`;

function preload() {}

function setup() {
  createCanvas(500, 500);

  if (annyang) {
    let commands = {
      "Don't worry be happy": happy,
      "Yes *whatever": sad,
      "Be ambivalent": ambivalent
    };
    annyang.addCommands(commands);
    annyang.start();
    annyang.debug(true);
  } else {
    //annyang doesn't work
    alert(`Please visit this page on Google Chrome!`);
  }
}

function draw() {
  background(0);

  push();
  textSize(128);
  ellipse(width / 2, height / 2, 200, 200);
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  text(face, width / 2, height / 2);
  pop();
}

function happy() {
  face = `:-)`;
}

function sad() {
  face = `:-(`;
}

function ambivalent() {
  face = `:-|`;
}

/**
live: review

-Constants for strings
-Parameters
-First class functions
-SetTimeout() show text for specific amount of time
*/

"use strict";

//Constants for strings
// const IMAGE_PATH = `assets/images`;
// const NUM_CLOWN_IMAGES = 3;
//
// let clownImages = [];
//
// function preload() {
//   clownImages[0] = loadImage(`${IMAGE_PATH}/clown0.png`);
//   clownImages[1] = loadImage(`${IMAGE_PATH}/clown1.png`);
//   clownImages[2] = loadImage(`${IMAGE_PATH}/clown2.png`);
//
//   for (let i=0; i<NUM_CLOWN_IMAGES; i++) {
//     clownImages[i] = loadImage(`${IMAGE_PATH}/clown${i}.png`);
//   }
// }
//
//
// function setup() {
//   createCanvas(500, 500);
// }
//
//
// function draw() {
//   background(0);
//
//   let clownImage = random(clownImages);
//   image(clownImage, 0, 0);
// }

//SetTimeout

let message = {
  text: `NOW YOU SEE ME`,
  visible: true,
  hideDelay: 2000,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  //Display msg (or not)
  if (message.visible) {
    push();
    fill(255);
    textSize(24);
    text(message.text, 100, 100);
    pop();
  }
}

function hideMessage() {
  message.visible = false;
}

function mousePressed() {
  SetTimeout(hideMessage, message.hideDelay);
}

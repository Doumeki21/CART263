/**
2. constants
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//2.1 constants
// const NUM_CIRCLES = 10;
// let circleAlpha = 50;
// let circleSizeIncrease = 50;
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
//   circleAlpha = map(mouseX, 0, width, 0, 100);
//   circleSizeIncrease = map(mouseY, 0, height, 0, 100);
//
//   for (let i=0; i<NUM_CIRCLES; i++) {
//     push();
//     fill(255, circleAlpha);
//     ellipse(width/2, height/2, i*circleSizeIncrease);
//     pop();
//   }
// }

//2.2 Object parameters
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawFancyRect(250, 250, 200, 200, 255, 255, 0, CENTER);
}

function drawFancyRect(x, y, w, h, r, g, b, mode) {
  push();
  fill();
  rectMode();
  rect();
  pop();
}

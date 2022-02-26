/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let boss = {
  letter: "A",
  tx: 0,
  ty: 100
};

let plus = {
  letter: "+",
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  push();
  textSize(200);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);

  let x = map(noise(boss.tx), 0, 1, 0, width);
  let y = map(noise(boss.ty), 0, 1, 0, height);

  noFill();
  strokeWeight(2);
  stroke(random(100), random(255), random(255));

  text(boss.letter, x, y);
  pop();

  boss.tx += 0.01;
  boss.ty += 0.01;

  // Move the plus
  let dx = plus.x - x;
  let dy = plus.y - y;

  if (dx < 0) {
    plus.ax = 0.3;
  }
  else {
    plus.ax = -0.3;
  }
  if (dy < 0) {
    plus.ay = 0.3;
  }
  else {
    plus.ay = -0.3;
  }

  plus.vx += plus.ax;
  plus.vy += plus.ay;

  plus.vx = constrain(plus.vx, -5, 5);
  plus.vy = constrain(plus.vy, -5, 5);

  plus.x += plus.vx;
  plus.y += plus.vy;

  push();
  textSize(200);
  noFill();
  strokeWeight(2);
  stroke(random(255), random(100), random(100));

  text(plus.letter, plus.x, plus.y);
  pop();
}

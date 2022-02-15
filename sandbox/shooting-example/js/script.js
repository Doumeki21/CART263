/**
Pippin's shooting example
Shared on February 14, 2022 at 12:13 pm

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let bullet;
let f = {
  x: 200,
  y: 200,
  vx: 0,
  vy: 0,
  speed: 10,
  rotatingSpeed: 15,
  angle: 35,
};

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  handleInput();

  push();
  translate(width / 2, height / 2);
  rotate(f.angle);
  textAlign(CENTER, BOTTOM); //anchor point from the bottom of the letter
  textSize(32);
  text(`F`, 0, 0);
  pop();

  if (bullet) {
    // Move bullet
    let vx = cos(bullet.angle) * bullet.speed;
    let vy = sin(bullet.angle) * bullet.speed;
    bullet.x += vx;
    bullet.y += vy;

    // Display bullet
    push();
    translate(bullet.x, bullet.y);
    rotate(bullet.angle);
    fill(0);
    rect(0, 0, 2, 2);
    pop();
  }
}

function handleInput() {
  //Press A to go left
  if (keyIsDown(65)) {
    f.vx = -f.speed;
  }
  //Press D to go right
  else if (keyIsDown(68)) {
    f.vx = f.speed;
  }
  //else stop
  else {
    f.vx = 0;
  }

  //Press left arrow to move up
  if (keyIsDown(87)) {
    f.vy = -f.speed;
  }
  //Press right arrow to move down
  else if (keyIsDown(83)) {
    f.vy = f.speed;
  }
  //else stop
  else {
    f.vy = 0;
  }

  //player rotates left
  if (keyIsDown(LEFT_ARROW)) {
    f.angle -= f.rotatingSpeed;
  }
  //Player rotates right
  else if (keyIsDown(RIGHT_ARROW)) {
    f.angle += f.rotatingSpeed;
  } else {
    f.angle = f.angle;
  }
}

function mousePressed() {
  // Equivalent to bullet constructor
  bullet = {
    x: f.x,
    y: f.y,
    speed: 1,
    angle: f.angle + 90, //so the bullet shoots from the bottom of the letter
  };
}

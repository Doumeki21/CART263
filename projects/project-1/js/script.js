/**
CART263 - Project 1
OLENKA YUEN

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let player;
let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player(windowWidth / 2, windowHeight / 2);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  player.update();

  //if player is shooting,
  if (player.handleShoot()) {
    //create the bullets
    let bullet = new Bullet(player.x, player.y, player.angle + 90);
    bullets.push(bullet);
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].update();
  }
}

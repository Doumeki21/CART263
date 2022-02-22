/**
CART263 - Project 1
OLENKA YUEN

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let player;
let bullets = [];
let purpleEnemy;
let redEnemy;

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player(windowWidth / 2, windowHeight / 2);
  purpleEnemy = new PurpleEnemy(random(0, width), random(0, height));
  redEnemy = new RedEnemy(random(0, width), random(0, height));

  angleMode(DEGREES);
}

function draw() {
  background(0);

  player.update();
  purpleEnemy.update();
  redEnemy.update();

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

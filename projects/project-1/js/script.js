/**
CART263 - Project 1
OLENKA YUEN

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let player;

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player(windowWidth / 2, windowHeight / 2);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  player.update();
}

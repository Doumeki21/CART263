/**
Code sandbox
Olenka Yuen
*/

"use strict";

let shake;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);

  if (shake === true) {
    translate(random(-5, 5), random(-5, 5));
    setTimeout(function () {
      shake = false;
    }, 500);
  }

  push();
  fill(255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 100);
  pop();
}

function mousePressed() {
  if (shake === true) {
    shake = false;
  } else {
    shake = true;
  }
}

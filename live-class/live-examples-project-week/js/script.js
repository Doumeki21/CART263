/**
live: review

-Constants for strings
-Parameters
-First class functions
-SetTimeout() show text for specific amount of time
*/

"use strict";

let textVisible = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  if (textVisible) {
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(64);
    text(`Hello World!`, width/2, height/2);
    pop();
  }
}

function mousePressed() {
  toggleText();
}

function toggleText() {
  textVisible = !textVisible;
  setTimeout(toggleText, random(1000, 5000));
}

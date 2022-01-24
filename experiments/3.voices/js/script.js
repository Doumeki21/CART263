/**
3.1 ResponsiveVoice


This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

function preload() {}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
}

function mousePressed() {
  // responsiveVoice.speak("888888888888888");
  responsiveVoice.speak("Don't come near me!", "Japanese Male", {
    pitch: 2,
    rate: 1,
  });
}

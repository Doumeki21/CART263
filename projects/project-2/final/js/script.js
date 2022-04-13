/**
project 2 - Final project
Olenka Yuen

Gameplay inspirations: Whack-a-Mole, helix jump, stack ball, rolly vortex

An adventure of the mole as in the animal?
Or mole that grows on skin?
"Just jump your best and God will pave your way"

2. array of platforms - movable with the mouse


ideas:
array of platforms >> every other controls in the opposite direction.
every next level gets weirder + more difficult
moving parts of the platform at one point
*/

"use strict";

let state = undefined;
let timer = 10;
let timerActive = true;

//maybe add images later??
function preload() {}

//setup the canvas and create the objects from the class
function setup() {
  createCanvas(windowWidth, windowHeight);

  // state = new Level4(5);
  state = new Level2(5);
}

//draw the objects
function draw() {
  state.update();
  // checkTimer();
  // displayTimer();
}

function checkTimer() {
  //If timer is active,
  if (timerActive) {
    //and if it's down to 0 seconds,
    if (timer <= 0) {
      //stay at 0, and change screen to lose.
      timer = 0;
      state = new Lose();
    }
    //Count in seconds.
    timer -= 1 / 60;
  }
}

//Display the white timer counting down from 10, at the top left corner.
function displayTimer() {
  push();
  fill(255);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(round(timer), width - 80, 200);
  pop();
}

// function mouseDragged() {
//   if (state === `level2`) {
//
//   }
// }

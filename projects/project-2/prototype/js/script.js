/**
project 2 - prototype
Olenka Yuen

Gameplay inspirations: Whack-a-Mole, helix jump, stack ball, rolly vortex

A different POV of Whack-a-Mole
>> What's the mole up to?

An adventure of the mole as in the animal? Or mole that grows on skin?

1. create bouncing Ball
2. array of platforms - movable with the mouse
3. move the platforms up
4. deactivate the platforms above the ball, so prev platforms don't prevent ball from bouncing
*/

"use strict";

let bouncingBall;
let platform;

// let platform = {
//   x: undefined,
//   y: undefined,
//   width: 200,
//   height: 10,
// }

//maybe add images later??
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  platform = new Platform(windowWidth/2, windowHeight/3);
  bouncingBall = new BouncingBall(windowWidth/2, 0);
}


/**
Description of draw()
*/
function draw() {
  background(0);

  bouncingBall.update();
  platform.update();

  // platform.x = mouseX;
  // platform.y = windowHeight/2;
  // stroke(255);
  // rectMode(CENTER);
  // rect(platform.x, platform.y, platform.width, platform.height);
}

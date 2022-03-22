/**
project 2 - prototype
Olenka Yuen

Gameplay inspirations: Whack-a-Mole, helix jump, stack ball, rolly vortex

A different POV of Whack-a-Mole
>> What's the mole up to?

An adventure of the mole as in the animal? Or mole that grows on skin?
"Just do your best and God will pave your way"

1. create bouncing Ball
2. array of platforms - movable with the mouse
3. move the platforms up
4. deactivate the platforms above the ball, so prev platforms don't prevent ball from bouncing

ideas:
array of platforms >> every other controls in the opposite direction.
every next level gets weirder + harder
moving the
*/

"use strict";

let bouncingBall;
let platform;


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
}

/**
project 2 - prototype
Olenka Yuen

Gameplay inspirations: Whack-a-Mole, helix jump, stack ball, rolly vortex

A different POV of Whack-a-Mole
>> What's the mole up to?

An adventure of the mole as in the animal?
Or mole that grows on skin?
"Just jump your best and God will pave your way"

1. create bouncing Ball
1.5. create a platform (stopped here in the prototype)
2. array of platforms - movable with the mouse
3. move the platforms up
4. deactivate the platforms above the ball, so prev platforms don't prevent ball from bouncing

ideas:
array of platforms >> every other controls in the opposite direction.
every next level gets weirder + harder
moving parts of the platform at one point
*/

"use strict";

//make variables for every class
let bouncingBall;
let platform;

//maybe add images later??
function preload() {

}

//setup the canvas and create the objects from the class
function setup() {
  createCanvas(windowWidth, windowHeight);

  platform = new Platform(windowWidth/2, windowHeight/3); // A reaonably placed platform for the first one.
  bouncingBall = new BouncingBall(windowWidth/2, 0);//create the bouncing ball from the top of the canvas.
}

//draw the objects
function draw() {
  background(0, 90); // black background

  bouncingBall.update();
  platform.update();
}

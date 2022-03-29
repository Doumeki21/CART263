/**
project 2 - Final project
Olenka Yuen

Gameplay inspirations: Whack-a-Mole, helix jump, stack ball, rolly vortex

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
let platforms = [];
let maxPlatforms = 4;
let state = `level1`;

//maybe add images later??
function preload() {

}

//setup the canvas and create the objects from the class
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < maxPlatforms; i++) {
    let spaceBetweenPlatforms = 200;
    let firstPlatformY = windowHeight/3;
    let platformY = firstPlatformY + spaceBetweenPlatforms*i;

    let platform = new Platform(windowWidth/2, platformY); // A reasonably placed platform for the first one.
    platforms.push(platform); //put each platform inside the array
  }

  bouncingBall = new BouncingBall(windowWidth/2, -50);//create the bouncing ball from the top of the canvas.
}

//draw the objects
function draw() {
  background(0, 90); // black background and alpha trail
  // if (state === `level1`) {
  //   level1();
  // }
  // else if (state === `level2`) {
  //   level2();
  // }

  for (let i = 0; i < platforms.length; i++) {
      platforms[i].update();
      bouncingBall.update(platforms[i]);
  }
}

// function level2() {
//
// }

// function mouseDragged() {
//   if (state === `level2`) {
//
//   }
// }

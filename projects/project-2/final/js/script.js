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

//maybe add images later??
function preload() {

}

//setup the canvas and create the objects from the class
function setup() {
  createCanvas(windowWidth, windowHeight);

  // state = new Level4(5);
  state = new Level1();
}

//draw the objects
function draw() {
  state.update();
}

// function mouseDragged() {
//   if (state === `level2`) {
//
//   }
// }

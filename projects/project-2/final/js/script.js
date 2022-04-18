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
// let timer = 10;
// let timerActive = true;
let levelMusic;
let bossMusic;
let loadBar = undefined;
let bouncingBall = undefined;

//maybe add images later??
function preload() {
  levelMusic = loadSound(`assets/sounds/alex-productions-extreme-trap-racing-music-power.mp3`);
  bossMusic = loadSound(`assets/sounds/BoxCat-Games-Epic-Song.mp3`);
}

//setup the canvas and create the objects from the class
function setup() {
  userStartAudio();
  levelMusic.play();
  createCanvas(windowWidth, windowHeight);

  //If annyang! works, execute the commands
  if (annyang) {
    let commands = {
      "Recover *now": recover,
    };
    annyang.addCommands(commands); //add commands to annyang!
    annyang.start(); //start listening
    annyang.debug(true); //debug annyang
  } else {
    alert(`Please visit this page on Google Chrome!`); //Pop up alert if user isn't using Chrome browser.
  }

  // state = new Title();
  state = new Level5(5);
  // state = new Level1();
}

//draw the objects
function draw() {
  background(0, 90);// black background and alpha trail
  state.update();
  // checkTimer();
  // displayTimer();
}

//recover()
//voice command to heal the player
function recover(now) {
  console.log(`print`);
  loadBar.activateBar(bouncingBall);
}

// function checkTimer() {
//   //If timer is active,
//   if (timerActive) {
//     //and if it's down to 0 seconds,
//     if (timer <= 0) {
//       //stay at 0, and change screen to lose.
//       timer = 0;
//       state = new Lose();
//       levelMusic.stop();
//       bossMusic.stop();
//     }
//     //Count in seconds.
//     timer -= 1 / 60;
//   }
// }
//
// //Display the white timer counting down from 10, at the top left corner.
// function displayTimer() {
//   push();
//   fill(255);
//   textSize(60);
//   textAlign(CENTER, CENTER);
//   text(round(timer), width - 80, 200);
//   pop();
// }

//connected to the Scenes.js
function mouseClicked() {
  state.mouseClicked();
}

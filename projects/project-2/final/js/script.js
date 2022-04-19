/**
project 2 - Final project
Olenka Yuen

"Jump your best and God will pave your way"
A game where you have to get the ball to reach the bottom of the screen within the conditions of the level. (Check out the README to see more info)

- Program uses keyboard keys to control the environment and annyang! (in the level 5).
- The structure of this code gathers all the universal variables in the main script (with the exception of things related to the annyang library).
- regular states are switched through mouseClicked and levels are automatically changed once the requirements are met.
*/

"use strict";

let state = undefined;//states changes throughout the game: Title, Win, Lose, (Level)
let levelMusic;
let bossMusic;
let loadBar = undefined;//called in level 5
let bouncingBall = undefined;//universal variable called in every level

//load all the sounds first
function preload() {
  levelMusic = loadSound(`assets/sounds/alex-productions-extreme-trap-racing-music-power.mp3`);
  bossMusic = loadSound(`assets/sounds/BoxCat-Games-Epic-Song.mp3`);
}

//setup the canvas and annyang, start music, and show first screen
function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();
  levelMusic.play();

  //If annyang! works, execute the commands
  if (annyang) {
    let commands = {
      "Recover *now": recover,
    };
    annyang.addCommands(commands); //add commands to annyang!
    annyang.start(); //start listening
    annyang.debug(true); //debug annyang
  } else {
    alert(`Please visit this page on Google Chrome\nto use the mic!`); //Pop up alert if user isn't using Chrome browser.
  }

  state = new Title();//begin from the Title screen.
}

//Start/ execute the program
function draw() {
  background(0, 90);// black background and alpha trail
  state.update();//update the Title state. (and all other states as it changes.)
}

//recover()
//voice command to heal the player
//loadbar created and called in level 5
function recover(now) {
  loadBar.activateBar(bouncingBall);
}

//connected to the Scenes.js
function mouseClicked() {
  state.mouseClicked();//called in Win, Lose, Title
}

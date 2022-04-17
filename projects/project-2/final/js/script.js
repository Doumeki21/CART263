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

let levelMusic;
let bossMusic;

//current state of program
let state = `loading`; //loading/ welcome/(other states in the other js files)
let video; //the user's webcam
let modelName = `Handpose`; //the name of our model
let handpose; //The handpose models
let predictions = [];//the current set of prediction
//controlled by the user
let dot = {
  x: undefined,
  y: undefined,
  size: 50,
};
//2 targets to touch before
let target = {
  firstX: undefined,
  firstY: undefined,
  secondX: undefined,
  secondY: undefined,
  currentX: undefined,
  currentY: undefined,
  size: 100,
  amountTouched: 0,
};

//maybe add images later??
function preload() {
  levelMusic = loadSound(`assets/sounds/alex-productions-extreme-trap-racing-music-power.mp3`);
  bossMusic = loadSound(`assets/sounds/BoxCat-Games-Epic-Song.mp3`);
}

//setup the canvas and create the objects from the class
function setup() {
  createCanvas(windowWidth, windowHeight);
  //values for first target
  target.firstX = width/2 - 200;
  target.firstY = height/2;
  //values for second target
  target.secondX = width/2 + 200;
  target.secondY = height/2;
  //update current target values
  target.currentX = target.firstX
  target.currentY = target.firstY;

  //acess the user webcam
  video = createCapture(VIDEO);
  //hide the video element from the webpage. (HTML conflict)
  video.hide();
  //load the handpose model
  handpose = ml5.handpose(
    video,
    {
      flipHorizontal: true,
    },
    //anon function
    function () {
      state = `welcome`;
    }
  );

  //listen for predictions
  handpose.on(`predict`, function (results) {
    // console.log(results);
    predictions = results;
  });

  // state = new Title();
  // state = new Level4(5);
  // state = new Level1();
}

//draw the objects
function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `welcome`) {
    welcome();
  }
  else if (state === `title`) {
    state = new Title();
    userStartAudio();
    levelMusic.play();
    state.update();
  }
}

function loading() {
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(255);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

function welcome() {
  background(0);
  //instructions
  push();
  fill(255);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Wave!`, width / 2, 100);
  pop();

  displayTarget();

  //if there's predictions to display,
  if (predictions.length > 0) {
    //then get the positions of the tip and base of index finger.
    updateDot(predictions[0]);

    //check if the dot touches the targets
    let dF = dist(dot.x, dot.y, target.firstX, target.firstY);
    let dS = dist(dot.x, dot.y, target.secondX, target.secondY);
    if (dF < target.size / 2 && target.amountTouched === 0) {
      target.currentX = target.secondX;
      target.currentY = target.secondY;
      target.amountTouched ++;
    }
    else if (dS < target.size / 2 && target.amountTouched === 1) {
      target.amountTouched ++;
      state = `title`;
      // state.update();
    }
    //display current position of pin.
    displayDot();
  }
}

function updateDot(predictions) {
  dot.x = predictions.annotations.indexFinger[3][0];
  dot.y = predictions.annotations.indexFinger[3][1];
}

function displayTarget() {
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(target.currentX, target.currentY, target.size);
  pop();
}

function displayDot() {
  push();
  noStroke();
  fill(255);
  ellipse(dot.x, dot.y, dot.size);
  pop();
}

//connected to the Scenes.js
function mouseClicked() {
  state.mouseClicked();
}

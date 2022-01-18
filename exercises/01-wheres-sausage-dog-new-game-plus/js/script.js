/**
Exercise 01: Where’s Sausage Dog? New Game+
Olenka Yuen

Add at least 3 of the following:
- Add start and end screens
- Add the ability to restart the game after you reach the end
- Add behavior to incorrect animals when clicked (make a sound, wiggle, do something else?)
. Add selectable difficulty levels (more animals? smaller? movement?)
. Add a countdown timer
. Choose which animal is being found randomly and tell the player which one they’re looking for
*/

"use strict";

const NUM_ANIMAL_IMAGES = 10;

let easy = 50;
let normal = 100;
let hard = 150;
let currentDifficulty = undefined;

let easyButton = undefined;
let hardButton = undefined;

let animalImages = [];
let animals = [];
// let animal = undefined;

let sausageDogImage = undefined;
let sausageDog = undefined;

let timer = 10;
let timerActive = true;

let shake;
let state = `title`; //different screens: title, game, endings

//Load all images before starting the program.
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage); // adding animalImage into the array
  }
  sausageDogImage = loadImage(`assets/images/sausage-dog.png`);
}

//Setup of the game.
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentDifficulty = normal;

  easyButton = createButton(`EASY`);
  easyButton.position(100, 200);
  easyButton.mousePressed(setEasyMode);

  hardButton = createButton(`HARD`);
  hardButton.position(200, 200);
  hardButton.mousePressed(setHardMode);
  reset();
}

function reset() {
  animals = [];
  timer = 10;
  timerActive = true;

  //create animals at random locations
  for (let i = 0; i < currentDifficulty; i++) {
    let x = random(100, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage); //create an animal based on the 3 codes above and the Animal.js
    animals.push(animal); // adding animal into the animals array
  }
  //create sausage dog at random location
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}

function draw() {
  background(152, 204, 69);

  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  } else if (state === `win`) {
    win();
    reset();
  } else if (state === `lose`) {
    lose();
    reset();
  }
}

function title() {
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`WHERE'S SAUSAGE DOG?`, width / 2, height / 2);
  pop();
}

function setEasyMode() {
  currentDifficulty = easy;
  reset();
}

function setHardMode() {
  currentDifficulty = hard;
  reset();
}

function game() {
  // easyButton.hide();
  // hardButton.hide();
  //shake needs to be put before displaying objects!
  //
  if (shake === true) {
    background(129, 179, 50);
    translate(random(-5, 5), random(-5, 5));
    setTimeout(function () {
      shake = false;
    }, 200);
  }

  for (let i = 0; i < animals.length; i++) {
    animals[i].update(); //always update/ display the animal at position i
  }
  sausageDog.update();

  checkTimer();
  displayTimer();
}

function checkTimer() {
  if (timerActive) {
    if (timer <= 0) {
      timer = 0;
      state = `lose`;
    }
    //count in seconds.
    timer -= 1 / 60;
  }
}

function displayTimer() {
  push();
  fill(255);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(round(timer), 30, 200);
  pop();
}

function win() {
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`THE DOGGO\n WAS FOUND!`, width / 2, height / 2);
  pop();
}

function lose() {
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`OH NO HE RAN AWAY!`, width / 2, height / 2);
  pop();
}

//When mouse is pressed on sausage dog, it rotates.
function mousePressed() {
  if (state === `title`) {
    state = `game`;
  } else if (state === `game`) {
    easyButton.hide();
    hardButton.hide();
    if (sausageDog.mousePressed()) {
      shake = false;
      timerActive = false;
    } else {
      shake = true;
    }
  } else if (state === `win`) {
    state = `title`;
  } else if (state === `lose`) {
    state = `title`;
  }
}

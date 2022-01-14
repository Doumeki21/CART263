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
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];
// let animal = undefined;

let sausageDogImage = undefined;
let sausageDog = undefined;

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
  reset();
}

function reset() {
  animals = [];

  //create animals at random locations
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
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
  }
}

function title() {
  push();
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`WHERE'S DOGGO`, width / 2, height / 2);
  pop();
}

function game() {
  //shake needs to be put before displaying objects!
  //
  if (shake === true) {
    background(129, 179, 50);
    translate(random(-5, 5), random(-5, 5));
    setTimeout(function() {
      shake = false;
    }, 200);
  }

  for (let i = 0; i < animals.length; i++) {
    animals[i].update(); //always update/ display the animal at position i
  }
  sausageDog.update();
}

function win() {
  push();
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`DOGGO WAS FOUND!`, width / 2, height / 2);
  pop();
}

//When mouse is pressed on sausage dog, it rotates.
function mousePressed() {
  if (state === `title`) {
    state = `game`;
  } else if (state === `game`) {
    if (sausageDog.mousePressed()) {
      shake = false;
    } else {
      shake = true;
    }
  } else if (state === `win`) {
    state = `title`;
  }
}

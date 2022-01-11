/**
Exercise 02: Where’s Sausage Dog? New Game+
Olenka Yuen

Add at least three of the following:
. Add start and end screens
. Add the ability to restart the game after you reach the end
. Add behavior to incorrect animals when clicked (make a sound, wiggle, do something else?)
. Add selectable difficulty levels (more animals? smaller? movement?)
. Add a countdown timer
. Choose which animal is being found randomly and tell the player which one they’re looking for
*/

"use strict";

const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

let state = `title`;

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
  background(255, 255, 0);

  for (let i = 0; i < animals.length; i++) {
    animals[i].update(); //update the animal at position i.
  }

  sausageDog.update();
}

//When mouse is pressed on sausage dog, it rotates.
function mousePressed() {
  sausageDog.mousePressed();
}

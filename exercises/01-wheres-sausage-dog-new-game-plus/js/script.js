/**
Exercise 01: Where’s Sausage Dog? New Game+
Olenka Yuen

Add at least 3 of the following:
- Add start and end screens
- Add the ability to restart the game after you reach the end
- Add behavior to incorrect animals when clicked (make a sound, wiggle, do something else?)
- Add a countdown timer
. Add selectable difficulty levels (more animals? smaller? movement?)
. Choose which animal is being found randomly and tell the player which one they’re looking for.
*/

"use strict";

//Animal constants and arrays to plug into the for loops.
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;
let animalImages = [];
let animals = [];
//create variables for sausage dog
let sausageDogImage = undefined;
let sausageDog = undefined;
//create variables for the timer
let timer = 10;
let timerActive = true;

//To give a shake effect when dog isn't clicked on.
let shake;
let state = `title`; //different screens: title, game, endings

//Load all images before starting the program.
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage); //PN: adding animalImage into the array
  }
  sausageDogImage = loadImage(`assets/images/sausage-dog.png`);
}

//Setup of the game.
function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
}

//reset elements after each round.
function reset() {
  //Empty the animal array & restart timer.
  animals = [];
  timer = 10;
  timerActive = true;

  //create animals at random locations
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(150, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage); //PN: create an animal based on the 3 codes above and the Animal.js//
    animals.push(animal); // Put animal into the animals array
  }
  //create sausage dog at random location
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}

//The overall layout of the program.
function draw() {
  //Green background
  background(152, 204, 69);
  //List the different events in the program.
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

//display the title at the center of the screen
function title() {
  //MAIN TITLE
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`WHERE'S SAUSAGE DOG?`, width / 2, height / 2);
  pop();
  //SUBTITLE
  push();
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`>>CLICK<<`, width / 2, height / 2 + 100);
  pop();
}

//Execute the actions in the game.
function game() {
  //If the screen is shaking,
  if (shake === true) {
    //green background dims.
    background(129, 179, 50);
    //moves randomly at increments of 5.
    translate(random(-5, 5), random(-5, 5));
    //Stops shaking after 200 millis.
    setTimeout(function () {
      shake = false;
    }, 200);
  }
  //for all 100 animals,
  for (let i = 0; i < animals.length; i++) {
    animals[i].update(); //always display the animal at position i
  }
  sausageDog.update(); //always check the dog target.
  //run the timer.
  checkTimer();
  //Display the timer.
  displayTimer();
}

//Check the timer.
function checkTimer() {
  //If timer is active,
  if (timerActive) {
    //and if it's down to 0 seconds,
    if (timer <= 0) {
      //stay at 0, and change screen to lose.
      timer = 0;
      state = `lose`;
    }
    //Count in seconds.
    timer -= 1 / 60;
  }
}

//Display the white timer counting down from 10, at the top left corner.
function displayTimer() {
  push();
  fill(255);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(round(timer), 80, 200);
  pop();
}

//Display text at the center of the screen when you win.
function win() {
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`THE DOGGO\n WAS FOUND!`, width / 2, height / 2);
  pop();
}

//Display text at the center of the screen when you lose.
function lose() {
  push();
  background(129, 179, 50);
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`OH NO HE RAN AWAY!`, width / 2, height / 2);
  pop();
}

//The list of events when mouse is pressed.
function mousePressed() {
  //proceed to the game when clicked from the title
  if (state === `title`) {
    state = `game`;
    //During the game,
  } else if (state === `game`) {
    //background and timer are static when sausage dog is found.
    if (sausageDog.mousePressed()) {
      shake = false;
      timerActive = false;
      //otherwise everything shakes on click
    } else {
      shake = true;
    }
    //proceed to the title when clicked from the win state.
  } else if (state === `win`) {
    state = `title`;
    //proceed to the title when clicked from the lose state.
  } else if (state === `lose`) {
    state = `title`;
  }
}

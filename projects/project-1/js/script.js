/**
CART263 - Project 1
OLENKA YUEN

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//The player
let player;
let bullets = [];
//The enemies
let redEnemy;
let purpleEnemy;
let blueEnemy;
let boss;
//load assets
let mic;
let sideArrows;
let upArrow;
let wasdKeys;
let customFontItalic;
let customFont;

let state = `title`; //states: title, instructions, game, victory, loss

//load all assets
function preload() {
  //load images
  mic = loadImage(`assets/images/mic.png`);
  sideArrows = loadImage(`assets/images/side-arrows.png`);
  upArrow = loadImage(`assets/images/up-arrow.png`);
  wasdKeys = loadImage(`assets/images/wasd.png`);
  //load fonts
  customFontItalic = loadFont(`assets/fonts/Poppins-Black-Italic.ttf`);
  customFont = loadFont(`assets/fonts/Poppins-Black.ttf`);
}

//Sets up the program
function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
  angleMode(DEGREES);
}

//Reset is called after every round is finished.
function reset() {
  //If annyang! works, execute the commands
  if (annyang) {
    let commands = {
      "I need to *heal": recover,
    };
    annyang.addCommands(commands); //add commands to annyang!
    annyang.start(); //start listening
    annyang.debug(true); //debug annyang
  } else {
    alert(`Please visit this page on Google Chrome!`); //Pop up alert if user isn't using Chrome browser.
  }
  //Relocate all objects in the game
  player = new Player(windowWidth / 2, windowHeight / 2);
  purpleEnemy = new PurpleEnemy(random(0, width), random(0, height));
  redEnemy = new RedEnemy(random(0, width), random(0, height));
  blueEnemy = new BlueEnemy(random(0, width), height / 2);
  boss = new Boss(random(0, width), random(0, height));
  //reset the bullets array
  bullets = [];
}

//the structure of events in the program
function draw() {
  //black (slight transparent bg: to create the motion blur effect)
  background(0, 80);
  textFont(customFontItalic);

  if (state === `title`) {
    title();
  } else if (state === `instructions`) {
    instructions();
  } else if (state === `game`) {
    game();
  } else if (state === `victory`) {
    victory();
    reset();
  } else if (state === `loss`) {
    loss();
    reset();
  }
}

//Present the first state of program.
function title() {
  //title
  push();
  textSize(50);
  fill(209, 38, 41);
  textAlign(CENTER, CENTER);
  text(`REJECTION`, width / 2, height / 2);
  pop();
  //click to proceed
  push();
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`START`, width / 2, height - 100);
  pop();
}

//The second (instructions) state of the program
function instructions() {
  fill(255);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  push();
  //title
  textSize(50);
  text(`INSTRUCTIONS`, width / 2, 50);
  //rotate
  textSize(36);
  text(`ROTATE`, width / 2 - 200, 200);
  image(sideArrows, width / 2 + 100, 150);
  sideArrows.resize(200, 0);
  //shoot
  text(`SHOOT`, width / 2 - 200, 300);
  image(upArrow, width / 2 + 100, 250);
  upArrow.resize(200, 0);
  //move
  text(`MOVE`, width / 2 - 200, 450);
  image(wasdKeys, width / 2 + 100, 350);
  wasdKeys.resize(200, 0);
  //heal
  text(`HEAL`, width / 2 - 200, 600);
  image(mic, width / 2 + 100, 550);
  text(`"I need to heal!"`, width / 2 + 400, 600);
  mic.resize(100, 0);
  pop();
}

//call all events/ functions/ objects that happen in the game
function game() {
  textFont(customFont);
  purpleEnemy.update();
  redEnemy.update();
  blueEnemy.update();
  boss.update();
  player.update(redEnemy, purpleEnemy, blueEnemy);

  //if player is shooting,
  if (player.handleShoot()) {
    //create the bullets
    let bullet = new Bullet(player.x, player.y, player.angle + 90);
    bullets.push(bullet);
  }

  //For every bullet, check if the boss has been hit by one.
  for (let i = 0; i < bullets.length; i++) {
    boss.checkHit(bullets[i]);
    bullets[i].update();
    if (!bullets[i].active) {
      //splice() removes 1 bullet from the array.
      bullets.splice(i, 1);
    }
  }

  //if the player's health reaches 0, you lose
  if (player.fillLifeBar.height <= 0) {
    state = `loss`;
  }
  //if the boss' health reaches 0, you win
  if (boss.fillLifeBar.width <= 0) {
    state = `victory`;
  }
}

//voice command to heal the player
function recover(heal) {
  player.fillLifeBar.height += 20;
}

//display the victorious state
function victory() {
  background(0); //black bg
  //title
  push();
  fill(209, 38, 41);
  textSize(80);
  textAlign(CENTER, CENTER);
  text(`You defeated her!`, width / 2, height / 2);
  pop();
  //click to proceed
  push();
  noStroke();
  fill(255);
  textSize(34);
  textAlign(CENTER, CENTER);
  text("Return to Title", width / 2, height - 100);
  pop();
}

//display the state of loss
function loss() {
  background(0); //black bg
//title
  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  textSize(80);
  textAlign(CENTER, CENTER);
  text(`You lost`, width / 2, height / 2);
  pop();
//click to proceed
  push();
  noStroke();
  fill(255);
  textSize(34);
  textAlign(CENTER, CENTER);
  text("Return to Title", width / 2, height - 100);
  pop();
}

//Click the mouse to change between states
function mouseClicked() {
  //starting from the title, click to proceed to the instructions
  if (state === `title`) {
    state = `instructions`;
  }
  //from the instructions, click to proceed to the game
  else if (state === `instructions`) {
    state = `game`;
  }
  //if you lose, click to return to the title
  else if (state === `victory`) {
    state = `title`;
  }
  //if you win, click to return to the title
  else if (state === `loss`) {
    state = `title`;
  }
}

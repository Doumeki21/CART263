/**
CART263 - Project 1
OLENKA YUEN

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let player;
let bullets = [];

let purpleEnemy;
let redEnemy;
let boss;

//let currentState;
// let states = [`title`, `instructions`, `game`, `victory`, `loss`];

//states: title, instructions, game, victory, loss
let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();

  angleMode(DEGREES);
}

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

  player = new Player(windowWidth / 2, windowHeight / 2);
  purpleEnemy = new PurpleEnemy(random(0, width), random(0, height));
  redEnemy = new RedEnemy(random(0, width), random(0, height));
  boss = new Boss(random(0, width), random(0, height));
  bullets = [];
}

function draw() {
  background(0);

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

function title() {
  background(0);

  push();
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`START`, width / 2, height / 2);
  pop();
}

function instructions() {
  background(0);

  push();
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`WASD to move`, width / 2, height / 2);
  pop();
}

function game() {
  purpleEnemy.update();
  redEnemy.update();
  boss.update();
  player.update(redEnemy, purpleEnemy, boss);

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
  }

  if (player.fillLifeBar.height <= 0) {
    state = `loss`;
  }

  if (boss.fillLifeBar.width <= 0) {
    state = `victory`;
  }
}

function recover(heal) {
  player.heal();
}

// function displayHeal() {
//   push();
//   noStroke();
//   fill(255);
//   textSize(30);
//   textAlign(CENTER, CENTER);
//   text(`I need to heal!`, player.lifeBar.x, height - 10);
//   pop();
// }

function victory() {
  background(0);

  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  textSize(80);
  textAlign(CENTER, CENTER);
  text(`You defeated her!`, width / 2, height / 2);
  pop();

  push();
  noStroke();
  fill(255);
  textSize(34);
  textAlign(CENTER, CENTER);
  text("Return to title", width / 2, height - 100);
  pop();
}

function loss() {
  background(0);

  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  textSize(80);
  textAlign(CENTER, CENTER);
  text(`You lost`, width / 2, height / 2);
  pop();

  push();
  noStroke();
  fill(255);
  textSize(34);
  textAlign(CENTER, CENTER);
  text("Return to title", width / 2, height - 100);
  pop();
}

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

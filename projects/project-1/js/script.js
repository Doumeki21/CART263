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

// let states = [`title`, `instructions`, `game`, `victory`, `loss`];

//states: title, instructions, game, victory, loss
let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player(windowWidth / 2, windowHeight / 2);
  purpleEnemy = new PurpleEnemy(random(0, width), random(0, height));
  redEnemy = new RedEnemy(random(0, width), random(0, height));
  boss = new Boss(random(0, width), random(0, height));

  angleMode(DEGREES);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `instructions`) {
    instructions();
  }
  else if (state === `game`) {
    game();
  }
  else if (state === `victory`) {
    victory();
  }
  else if (state === `loss`) {
    loss();
  }
}

function title() {
  background(0);

  push();
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`START`, width/2, height/2);
  pop();
}

function instructions() {
  background(0);

  push();
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`WASD to move`, width/2, height/2);
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
}

function victory() {
  background(100);

  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  text(`You defeated her!`, width/2, height/2);
  pop();

  push();
  fill(100);
  rectMode(CENTER, CENTER);
  rect(width/2, height - 100, 100, 50);

  noStroke();
  fill(255);
  textSize(34);
  textAlign(CENTER, CENTER);
  text('Return to title', width/2, height - 100);
  pop();
}

function loss() {
  background(0);

  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  text(`You lost`, width/2, height/2);
  pop();

  push();
  fill(100);
  rectMode(CENTER, CENTER);
  rect(width/2, height - 100, 100, 50);

  noStroke();
  fill(255);
  textSize(34);
  textAlign(CENTER, CENTER);
  text('Return to title', width/2, height - 100);
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
  else if (state === `victory`){
    state = `title`;
  }
  //if you win, click to return to the title
  else if (state === `loss`) {
    state = `title`;
  }
}

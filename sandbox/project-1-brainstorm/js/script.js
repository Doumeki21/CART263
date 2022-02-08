/**
Project 1: brainstorm
Olenka Yuen

undertale - gameplay
mad hatter - storytelling, aesthetic

web storage api = points
responsivevoice = adults humiliate/ inside voice?
JSON file to randomize voices(distort)

https://pippinbarr.github.io/cart263/topics/data/web-storage-api.html
https://pippinbarr.github.io/cart263/projects/project1/
*/

"use strict";

let player = {
  letter: `F`,
  bullets: [],
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  speed: 10,
  angle: 0,
  rotatingSpeed: 0.15,
  alive: true

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  player.x = windowWidth/2;
  player.y = windowHeight /2;
}

function draw() {
  background(0);


  movePlayer();
  shoot();
  handleInput();

  push();
  fill(255);
  textSize(34);
  textAlign(CENTER, CENTER);
  translate(player.x, player.y);
  rotate(player.angle);
  text(player.letter, 0, 0);
  pop();
}

function movePlayer() {
  player.x += player.vx;
  player.y += player.vy;

  player.x = constrain(player.x, 0, windowWidth);
  player.y = constrain(player.y, 0, windowHeight);
}


function keyPressed() {
  if (keyCode === ) {
    player.bullets++;

    for (let i < 0)
  }
}

function handleInput() {
  //Player goes left
  if (keyIsDown(65)) {
    player.vx = -player.speed;
  }
  //Player goes right
  else if (keyIsDown(68) ){
    player.vx = player.speed;
  }
  else {
    player.vx = 0;
  }

  //Player goes up
  if (keyIsDown(87)) {
    player.vy = -player.speed;
  }
  //Player goes down
  else if (keyIsDown(83)){
    player.vy = player.speed;
  }
  else {
    player.vy = 0;
  }

  //player rotates left
  if (keyIsDown(37)) {
    player.angle -= player.rotatingSpeed;
  }
  //Player rotates right
  else if (keyIsDown(39)){
    player.angle += player.rotatingSpeed;
  }
  else {
    player.angle = player.angle;
  }
}

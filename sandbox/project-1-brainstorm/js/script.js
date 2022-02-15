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

https://pippinbarr.github.io/cc/1/topics/movement/movement-with-polar-coordinates.html
(angle?)
https://github.com/pippinbarr/cart263-2021/blob/main/examples/ai/hand-dog-gun/js/script.js
(dog shoot)

animation examples/ ideas!!
https://creative-coding.decontextualize.com/changes-over-time/
*/

"use strict";

// let player = {
//   letter: `F`,
//   bullets: [],
//   x: undefined,
//   y: undefined,
//   vx: 0,
//   vy: 0,
//   speed: 10,
//   angle: 0,
//   // rotatingSpeed: 0.15,
//   rotatingSpeed: 5,
//   alive: true
// }
//
// let placeholder = {
//   x: undefined,
//   y: undefined,
//   angle: 0,
//   fill: {
//     r: 0,
//     g: 255,
//     b: 0,
//   }
// }

// let canShoot = true;

// let enemyRotatingArea = {
//   x: undefined,
//   y: undefined,
//   size: 300,
// }
//
// let enemy1 = {
//   x: undefined,
//   y: undefined,
//   size: 60,
//   angle: undefined,
//   minSpeed: 2,
//   maxSpeed: 10,
//   active: false,
//   fill: {
//     r: 168,
//     g: 240,
//     b: 227,
//   },
// }

let player;
let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player(windowWidth/2, windowHeight/2);

  // placeholder.x = player.x - 5;
  // placeholder.y = player.y + 10;

  angleMode(DEGREES);
}

function draw() {
  background(0);
  // enemyLocation();

  player.update();

  if (player.handleShoot()) {
    let bullet = new Bullet(player.x, player.y, player.angle + 90);
    bullets.push(bullet);
  }


for (let i = 0; i < bullets.length; i++) {
    bullets[i].update();
}

  // //display the player
  // push();
  // fill(255);
  // textSize(34);
  // textAlign(CENTER, CENTER);
  // translate(player.x, player.y);
  // rotate(player.angle);
  // text(player.letter, 0, 0);
  // pop();

  // push();
  // // translate(player.x, player.y);
  // rotate(player.angle);
  // fill(placeholder.fill.r, placeholder.fill.g, placeholder.fill.b);
  // ellipse(placeholder.x, placeholder.y, 4);
  // pop();
}

// function movePlayer() {
//   player.x += player.vx;
//   player.y += player.vy;
//
//   placeholder.x += player.vx;
//   placeholder.y += player.vy;
//
//   player.x = constrain(player.x, 0, windowWidth);
//   player.y = constrain(player.y, 0, windowHeight);
// }

// function handleShoot() {
//   if (keyIsDown(UP_ARROW)) {
//     canShoot = true;
//     // player.bullets++;
//   } else {
//     canShoot = false;
//   }
// }

// function shooting() {
//   if (canShoot) {
//     let bullet = new Bullet(player.x, player.y, player.angle);
//     player.bullets.push(bullet);
//   }
// }

// function handleInput() {
//   //Press A to go left
//   if (keyIsDown(65)) {
//     player.vx = -player.speed;
//   }
//   //Press D to go right
//   else if (keyIsDown(68)){
//     player.vx = player.speed;
//   }
//   //else stop
//   else {
//     player.vx = 0;
//   }
//
//   //Press left arrow to rotate left
//   if (keyIsDown(87)) {
//     player.vy = -player.speed;
//   }
//   //Press right arrow to rotate right
//   else if (keyIsDown(83)){
//     player.vy = player.speed;
//   }
//   //else stop
//   else {
//     player.vy = 0;
//   }
//
//   //player rotates left
//   if (keyIsDown(LEFT_ARROW)) {
//     player.angle -= player.rotatingSpeed;
//   }
//   //Player rotates right
//   else if (keyIsDown(RIGHT_ARROW)){
//     player.angle += player.rotatingSpeed;
//   }
//   else {
//     player.angle = player.angle;
//   }
// }

// function enemyLocation() {
//   angleMode(DEGREES);
//
// }

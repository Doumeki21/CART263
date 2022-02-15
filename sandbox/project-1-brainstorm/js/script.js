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

let player;
let bullets = [];
let purpleEnemy;
let redEnemy;

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player(windowWidth / 2, windowHeight / 2);
  purpleEnemy = new PurpleEnemy(random(0, width), random(0, height));
  redEnemy = new RedEnemy(random(0, width), random(0, height));

  angleMode(DEGREES);
}

function draw() {
  background(0);
  // enemyLocation();

  player.update();
  purpleEnemy.update();
  redEnemy.update();

  // setTimeout(function, random(500. 1000));

  if (player.handleShoot()) {
    let bullet = new Bullet(player.x, player.y, player.angle + 90);
    bullets.push(bullet);
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].update();
  }
}

/**
4.1 JSON

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let tarotData = undefined;
let fortune = `No fortune found yet...`;


function preload() {
  tarotData = loadJSON(`assets/data/tarot_interpretations.json`);

}


function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(255);

  push();
  textSize(32);
  textAlign(CENTER);
  fill(0);
  text(fortune, width/2, height/2);
  pop();
}

function mousePressed() {
  //a function to call when the JSON loads
  loadJSON(`assets/data/tarot_interpretations.json`, tarotLoaded);
}

//pass the info into `data`
function tarotLoaded(data) {
  tarotData = data;
  let card = random(tarotData.tarot_interpretations);
  fortune = random(card.fortune_telling);
}

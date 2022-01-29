"use strict";

//default data
let userData = {
  name: `stranger`
};

function setup() {
  createCanvas(windowWidth, windowHeight);
//load the data
  let data = JSON.parse(localStorage.getItem(`web-storage-example-personalization`));

//if there's data use the data
  if (data !== null) {
    userData.name = data.name;
  }
  //if not, ask for/ collect data and save it
  else {
    userData.name = prompt(`What's your name?`);
    localStorage.setItem(`web-storage-example-personalization`, JSON.stringify(userData));
  }
}

function draw() {
  background(255);

  push();
  textSize(64);
  textAlign(CENTER);
  text(`Hi, ${userData.name}!`, width/2, height/2);
  pop();
}

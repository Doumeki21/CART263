/**
4.2 web storage API

NOTE:
localStorage = can kepp data after reopening broswer. VS sessionStorage clears data after reopening browser

*/

"use strict";

let clicks = 0;
let gameData = {
  highScore: 0,
};


function setup() {
  createCanvas(windowWidth, windowHeight);
//JSON.parse takes watev gets loaded into an object, then tht object goes into data.
  let data = JSON.parse(localStorage.getItem(`click-attack-game-data`));
  //if not null, use the data.
  if (data !== null) {
    gameData = data;
  }
}

function draw() {
  background(255);

  push();
  textSize(64);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(0);
  text(clicks, width/2, height/2);
  pop();

  push();
  textSize(32);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(0);
  text(`High score: ${gameData.highScore}`, 100, 100);
  pop();
}

function mousePressed() {
  clicks++;

//check if clicks has beaten the highScore
  if (clicks > gameData.highScore) {
    //set/ update the new highScore
    gameData.highScore = clicks;
    //save the gameData
    localStorage.setItem(`click-attack-game-data`, JSON.stringify(gameData));
  }
}

function keyPressed() {
  //pess C on keyboard and reload the broswer to clear data
  if (key === `c`) {
    localStorage.removeItem(`click-attack-game-data`);
    //localStorage.clear(); this clears data for this BROWSER and DOMAIN. which is a dangerous operation as it might clear the data from other programs!!!!
  }
}

/**
Exercise 03: Character Profile Generator
Olenka Yuen

Add at least 3 of the following:
- Add the ability to delete the current profile data with a keyboard command or button
- Improve the visual display of the profile
- Allow the user to regenerate their entire profile (other than their name) if they don’t like it
- Allow the user to selectively regenerate specific categories in the profile (by clicking on them? with keyboard keys? with their voice?) to get one they like
*/

"use strict";

let characterProfile = {
  name: `N/A`,
  nature: `N/A`,
  secretWeapon: `N/A`,
  password: `N/A`,
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

function preload() {
  instrumentData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`
  );

  objectData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`
  );

  tarotData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));

  if (data !== null) {
    let password = prompt(`Agent! What is your password?`);
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
    }
  } else {
    generateSpyProfile();
  }
}

function generateSpyProfile() {
  spyProfile.name = prompt(`Agent! What is your name?`);

  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

function draw() {
  background(255);

  let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **

  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password}`;

  push();
  textFont(`Courier, monospace`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 100, 100);
  pop();
}

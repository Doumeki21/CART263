/**
Exercise 03: spy-profile-generator-plus
Olenka Yuen

Add at least 3 of the following:
- Add more categories to the profile and generate them with other data
- Add the ability to delete the current profile data with a keyboard command or button
- Improve the visual display of the profile
- Find more creative ways to generate profile values, such as combining parts of different sets of data

. Allow the user to regenerate their entire profile (other than their name) if they don’t like it
. Allow the user to selectively regenerate specific categories in the profile (by clicking on them? with keyboard keys? with their voice?) to get one they like
*/

"use strict";

let characterProfile = {
  name: `N/A`,
  hue: `N/A`,
  nature: `N/A`,
  secretWeapon: `N/A`,
  password: `N/A`,
};

let hueData = undefined;
let descriptionData = undefined;
let pastryData = undefined;
let tarotData = undefined;

function preload() {
  //Data
  hueData = loadJSON(`assets/data/web_colors.json`);
  descriptionData = loadJSON(`assets/data/descriptions.json`);
  pastryData = loadJSON(`assets/data/breads_and_pastries.json`);
  tarotData = loadJSON(`assets/data/tarot_interpretations.json`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`character-profile-data`));

  if (data !== null) {
    let password = prompt(`Password please!`);
    if (password === data.password) {
      characterProfile.name = data.name;
      characterProfile.hue = data.hue;
      characterProfile.nature = data.nature;
      characterProfile.secretWeapon = data.secretWeapon;
      characterProfile.password = data.password;
    }
  } else {
    generateCharacterProfile();
  }
}

function generateCharacterProfile() {
  characterProfile.name = prompt(`Sup! What's your character name?`);

  let chosenColor = random(hueData.colors);
  characterProfile.hue = chosenColor.color;

  characterProfile.nature = random(descriptionData.descriptions);
  characterProfile.secretWeapon = random(pastryData.pastries);

  let card = random(tarotData.tarot_interpretations);
  characterProfile.password = random(card.keywords);

  localStorage.setItem(
    `character-profile-data`,
    JSON.stringify(characterProfile)
  );
}

function draw() {
  background(229, 228, 229);

  let profile = `** CREATE YOUR OWN CHARACTER! **

  Name: ${characterProfile.name}
  Hue: ${characterProfile.hue}
  Nature: ${characterProfile.nature}
  Secret weapon : ${characterProfile.secretWeapon}
  Password: ${characterProfile.password}`;

  //bg rect
  push();
  fill(202, 156, 149);
  rectMode(CENTER);
  rect(width/2, height / 2, 600, 300, 20);
  pop();

  //display the text as the indicated profile variable above.
  push();
  textFont(`Comic Sans MS, Courier`);
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(64, 57, 62);
  text(profile, width / 2, height / 2);
  pop();

  //display instructions to clear data
  push();
  textFont(`Comic Sans MS, Courier`);
  textSize(24);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(137, 124, 135);
  text(
    `REMEMBER YOUR PASSWORD!\nOR\n--> Press C to clear the profile before closing the browser.\n--> Press R to change your name.`,
    width / 2,
    height - 100
  );
  pop();
}

//pess C on keyboard and reload the broswer to clear data
function keyPressed() {
  if (key === `c` || key === `C`) {
    localStorage.removeItem(`character-profile-data`);
  }
  if (key === `r` || key === `R`) {
    characterProfile.name = prompt(`What would you like to change your name to?`);
  }
}

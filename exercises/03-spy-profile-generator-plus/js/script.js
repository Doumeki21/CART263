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
  characterProfile.hue = random(chosenColor.color);

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
  background(255);

  let profile = `** CREATE YOUR OWN CHARACTER! **

  Name: ${characterProfile.name}
  Hue: ${characterProfile.hue}
  Nature: ${characterProfile.nature}
  Secret Weapon: ${characterProfile.secretWeapon}
  Password: ${characterProfile.password}`;

  //display the text as the indicated profile variable above.
  push();
  textFont(`Courier, monospace`);
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(0);
  text(profile, width / 2, height / 2);
  pop();

  //display instructions to clear data
  push();
  textFont(`Courier, monospace`);
  textSize(24);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(0);
  text(
    `REMEMBER YOUR PASSWORD! \n OR \n Press C to create a new character before closing the browser.`,
    width / 2,
    height - 100
  );
  pop();
}

//pess C on keyboard and reload the broswer to clear data
function keyPressed() {
  if (key === `c`) {
    localStorage.removeItem(`character-profile-data`);
  }
}

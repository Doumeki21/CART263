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

//variables to display the profile
let characterProfile = {
  name: `N/A`,
  hue: `N/A`,
  nature: `N/A`,
  secretWeapon: `N/A`,
  password: `N/A`,
};

//variables to implement the data from JSON files
let hueData = undefined;
let descriptionData = undefined;
let pastryData = undefined;
let tarotData = undefined;

function preload() {
  //load all the data into the program
  hueData = loadJSON(`assets/data/web_colors.json`);
  descriptionData = loadJSON(`assets/data/descriptions.json`);
  pastryData = loadJSON(`assets/data/breads_and_pastries.json`);
  tarotData = loadJSON(`assets/data/tarot_interpretations.json`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//load the profile data into the data variable (JSON.parse() converts it into an object)
  let data = JSON.parse(localStorage.getItem(`character-profile-data`));
//if there is data in the profile, it should be saved
  if (data !== null) {
    let password = prompt(`Password please!`);
    if (password === data.password) {
      characterProfile.name = data.name;
      characterProfile.hue = data.hue;
      characterProfile.nature = data.nature;
      characterProfile.secretWeapon = data.secretWeapon;
      characterProfile.password = data.password;
    }
  }
  //If not, generate a new profile
  else {
    generateCharacterProfile();
  }
}

function generateCharacterProfile() {
  //prompt the user to enter a character name on load
  characterProfile.name = prompt(`Sup! What's your character name?`);
//generate a random color name
  let chosenColor = random(hueData.colors);
  characterProfile.hue = chosenColor.color;
//generate a random description
  characterProfile.nature = random(descriptionData.descriptions);
  //generate a random pastry
  characterProfile.secretWeapon = random(pastryData.pastries);
//generate a random tarot card
  let card = random(tarotData.tarot_interpretations);
  characterProfile.password = random(card.keywords);

//save the generated profile into the user's browser
  localStorage.setItem(
    `character-profile-data`,
    JSON.stringify(characterProfile)
  );
}

//display all text and colors in the program
function draw() {
  //creamy grey background
  background(229, 228, 229);

  displaytextBg();
  displayProfile();
  displayInstructions();
}

function displaytextBg() {
  //Display a dull-pink rectangular background to frame the text.
  push();
  fill(202, 156, 149);
  rectMode(CENTER);
  rect(width/2, height / 2, 600, 300, 20);
  pop();
}

function displayProfile() {
  //create this profile variable to plug into this display function
    let profile = `** CREATE YOUR OWN CHARACTER! **

    Name: ${characterProfile.name}
    Hue: ${characterProfile.hue}
    Nature: ${characterProfile.nature}
    Secret weapon : ${characterProfile.secretWeapon}
    Password: ${characterProfile.password}`;

    //display the profile info at the center of the screen.
    push();
    textFont(`Comic Sans MS, Courier`);
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(64, 57, 62);
    text(profile, width / 2, height / 2);
    pop();
}

function displayInstructions() {
  //display instructions (at bottom of screen) to clear all data (generated profile) or change name.
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

function keyPressed() {
  //Press C on keyboard and reload the broswer to clear generated profile
  if (key === `c` || key === `C`) {
    localStorage.removeItem(`character-profile-data`);
  }
  //Press the R key to change the name while keeping all generated characteristics.
  if (key === `r` || key === `R`) {
    characterProfile.name = prompt(`What would you like to change your name to?`);
  }
}

/**
ACTIVITY 06: Haiku generator
Author Name

Generates a random haiku.
*/

"use strict";

let fiveSyllableLines = [
  `O, to be a tree`,
  `The cat does not know`,
  `We are all forests`,
  `You have done your best`,
  `They are all gone now`,
];

let sevenSyllableLines = [
  `Say the things left unsaid`,
  `Never believe the wind's lies`,
  `The autumn stretches its legs`,
  `Nothing can satisfy you`,
  `They will not come back again`,
];

let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let line1P = document.getElementById(`line-1`);
let line2P = document.getElementById(`line-2`);
let line3P = document.getElementById(`line-3`);

line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

//(element) = we're looking at the element from the html
function setNewLine(element) {
  if (element === line1P || element === line3P) {
    element.innerText = random(fiveSyllableLines);
  }
  else if (element === line2P) {
    element.innerText = random(sevenSyllableLines);
  }
}

line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

function lineClicked(event) {
  setNewLine(event.target);
}



function random(array) {
  // math.floor = gives a whole number
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

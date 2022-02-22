/**
ACTIVITY 06: Haiku generator
Author Name

Generates a random haiku.

Add at least 3 of the following:
. The creation of our lines of poetry and their event listeners at the top is extremely repetitive - write a function to do this!
. Significantly improve the HTML and CSS presentation of the haiku
. Add another DOM event into the user interaction that changes the poem somehow (maybe key presses or mouseovers change the color of the text?)
. Make the program work at the level of replacing words randomly instead of lines (could be like a Mad Libs haiku, you’d need <span> tags around the words you can change, could be fun with a rhyme scheme)
.Listen to mouseenter and mouseleave events on the lines and trigger visual (or other) changes for those events too
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

line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

function lineClicked(event) {
  //fadeOut(the element you want to fade, starting opacity)
  fadeOut(event.target, 1);
}

//changing the opacity of the element
function fadeOut(element, opacity) {
  opacity -= 0.1;
  //assigning the new value of opacity into the css style
  element.style.opacity = opacity;
  if (opacity > 0) {
    //call this function to prevent a loop of function within itself.
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  }
  else {
    //generate new line
    setNewLine(element);
    //fade in animation. opacity = 0
    fadeIn(element, opacity);
  }
}

function fadeIn(element, opacity) {
  //adds to opacity
  opacity += 0.01;
  element.style.opacity = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
}

//(element) = we're looking at the element from the html
function setNewLine(element) {
  if (element === line1P || element === line3P) {
    element.innerText = random(fiveSyllableLines);
  }
  else if (element === line2P) {
    element.innerText = random(sevenSyllableLines);
  }
}

function random(array) {
  // math.floor = gives a whole number
  //randomize the index using this specfic (commom) formula.
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

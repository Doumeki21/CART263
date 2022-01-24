/**
3.2 Annyang!


This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

function preload() {}

function setup() {
  createCanvas(500, 500);

  if (annyang) {
    let commands = {
      hello: function () {
        alert(`Eyyy!`);
      },
      'bye': function() {
        alert('Ciao bella!');
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
  background(0);
}

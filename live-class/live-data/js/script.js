/**
live: data
Olenka Yuen
February 1, 2022

localStorage
  *how to store more than 1 data-set
  *How to trigger a new save/ item
  *what about saving files to the pc itself
*JSON
  *How do you go through a JSON array sequentially
  *creating a character dialog (Q&A).

*/

"use strict";

let saveData = {
  key: "cart263a-data-live-coding-save-data",
  players: [
    {
      name: "Joachim",
      age: 23,
      eyeColor: "turquoise",
      background: {
        r: 255,
        g: 200,
        b: 120,
      },
    },
    {
      name: "John",
      age: 20,
      eyeColor: "diamond",
      background: {
        r: 255,
        g: 100,
        b: 0,
      },
    },
  ],
  dialog: {
    scene1: [
      {
        character: "Joachim",
        text: "Do you know where she is?",
      },
      {
        character: "John",
        text: "She might be at the library.",
      },
      {
        character: "Joachim",
        text: "Thanks I'll go check.",
      },
    ],
  },
};

function preload() {}

function setup() {
  createCanvas(500, 500);

  let loadData = JSON.parse(localStorage.getItem(saveData.key));
  if (loadData !== undefined) {
    saveData = loadData;
  }
}

function draw() {
  background(0);

  for (let i = 0; i < saveData.players.length; i++) {
    let player = saveData.players[i];

    push();
    fill(player.background.r, player.background.g, player.background.b);
    rect(0, i * 100, 200, 100);
    text(player.name, 0, i * 100 + 100);
    pop();
  }
}

function mousePressed() {
  let player = {
    name: random(["Frank", "Steve", "Fiona"]),
    age: random(10, 80),
    eyeColor: random(["Red", "Blue"]),
    background: {
      r: (100, 200),
      g: (100, 200),
      b: (100, 200),
    },
  };
}

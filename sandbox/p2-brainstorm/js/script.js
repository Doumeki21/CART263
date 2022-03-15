/**
P2: brainstorm
Olenka Yuen

- Include some library? (responsive voice?)

- draw the Grid
- ranodmize the items and drop them into grid
- detect surrounding matched items of selected item (at least +2 on vertical axis, +2 on horizontal axis)
- acceleration of swapping items
- (start) dropping items to bottom of grid with acceleration
*/

"use strict";

let grid = [];
let rows = 3;
let cols = 3;
let unitSize = 100;
let items = [`a`, `b`,`c`, `d`, `e`, `f`]; //list items inside array

function preload() {

}

function setup() {
  createCanvas(rows*unitSize, cols*unitSize);
  //goes through all the rows
  for (let r = 0; r < rows; r++) {
    //add an array to represent each row.
    grid.push([]);
    //goes through all the columns
    for (let c = 0; c < cols; c++) {
      //randomize the item
      let item = random(items);
      //add to the place
      grid[r].push(item);
    }
  }
}

function draw() {
  background(0);

  // Go through all the rows and columns
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Get the item at this position
      let item = grid[r][c];



      // Draw a square so we can see the grid space
      push();
      stroke(255);
      noFill();
      rect(r * unitSize , c * unitSize , unitSize);
      pop();

      //display the items
      push();
      stroke(255);
      fill(255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text(item, r*unitSize +unitSize/2, c*unitSize+unitSize/2);
      pop();
    }
  }
}

function mouseClicked() {

}

/**
Activity 05: Bubble Popper
Olenka Yuen

Plan:
1. Get Handpose working
2. Draw a pin
3. Draw and move a bubble
4. Make the bubble pop
*/

"use strict";

//the user's webcam
let video = undefined;
//The handpose model
let handpose = undefined;
//the current set of predictions
let predictions = [];

function setup() {
  createCanvas(640, 480);

  //acess the user webcam
  video = createCapture(VIDEO);
  //hide the video element from the webpage. (HTML conflict)
  video.hide();

  //load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function () {
    //anon function
    console.log(`Model loaded`);
  });

  //listen for predictions
  handpose.on(`predict`, function (results) {
    console.log(results);
    predictions = results;
  })
}

/**
Description of draw()
*/
function draw() {}

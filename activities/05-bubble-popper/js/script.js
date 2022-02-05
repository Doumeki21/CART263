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

//current state of program
let state = `loading`; //loading/ running
//the user's webcam
let video;
//the name of our model
let modelName = `Handpose`;
//The handpose model
let handpose;
//the current set of predictions
let predictions = [];
//the Bubble
let bubble;
//the pin
let pin = {
  tip: {
    x: undefined,
    y: undefined
  },
  head: {
    x: undefined,
    y: undefined,
    size: 20
  }
};

function setup() {
  createCanvas(640, 480);

  //acess the user webcam
  video = createCapture(VIDEO);
  //hide the video element from the webpage. (HTML conflict)
  video.hide();

  //load the handpose model
  handpose = ml5.handpose(
    video,
    {
      flipHorizontal: true,
    },
    function () {
      //anon function
      state = `running`;
      // console.log(`Model loaded`);
    }
  );

  //listen for predictions
  handpose.on(`predict`, function (results) {
    // console.log(results);
    predictions = results;
  });

  //our bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2,
  };
}

//handles the states of the program
function draw() {
  if (state === `loading`) {
    loading();
  } else if (state === `running`) {
    running();
  }
}

//display the loading screen
function loading() {
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

//display the webcam
//draws the bubbles and the hand as pin.
function running() {
  background(0);

  //if there's predictions to display,
  if (predictions.length > 0) {
    //then get the positions of the tip and base of index finger.
    updatePin(predictions[0]);

    //check if the tip of pin touches the bubble
    let d = dist(pin.tip.x, pin.tip.y, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      //pop!
      resetBubble();
    }
    //display current position of pin
    displayPin();
  }

  //display and move the bubble.
  moveBubble();
  checkOutOfBounds();
  displayBubble();
}

//upates pin position according to latest predictions
function updatePin(prediction) {
  pin.tip.x = prediction.annotations.indexFinger[3][0];
  pin.tip.y = prediction.annotations.indexFinger[3][1];
  pin.head.x = prediction.annotations.indexFinger[0][0];
  pin.head.y = prediction.annotations.indexFinger[0][1];
}

//resets the bubble to bottom of screen at new position
function resetBubble() {
  bubble.x = random(width);
  bubble.y = height;
}

//moves bubble according to velocity
function moveBubble() {
  //bubble moves
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;
}

//reset the bubble once it reach es the top of canvas
function checkOutOfBounds() {
  if (bubble.y < 0) {
    resetBubble();
  }
}

//display bubble as a circle
function displayBubble() {
  push();
  fill(0, 100, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

//draws a line b/w based on tip and base coordinates + adds a red pinhead
function displayPin() {
  //pin body
  push();
  noFill();
  stroke(255);
  strokeWeight(2);
  line(pin.tip.x, pin.tip.y, pin.head.x, pin.head.y);
  pop();
  //pin head
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(pin.head.x, pin.head.y, pin.head.size);
  pop();
}

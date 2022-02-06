/**
Exercise 04: Bubble Popper++
Olenka Yuen

Implement at least 3 of the following:
- Count how many bubbles the user has popped over time
- Add loading, title, and instructions screens and maybe an “ending” to the program to make it into more of a total package
- Add a timer and score.
. Add multiple bubbles to the simulation (probably want to convert the program to Object-Oriented Programming)
. different size bubble = different score?
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
    y: undefined,
  },
  head: {
    x: undefined,
    y: undefined,
    size: 20,
  },
};
//the user's score
let scoreCounter = 0;
//the timer
let timer = 10;
let timerActive = true;
//Save the data
let gameData = {
  highscore: 0,
};

function setup() {
  createCanvas(640, 480);
  reset();

  let data = JSON.parse(localStorage.getItem(`cart263-bubble-pop-ex-game-data`));
  //if not null, use the data.
  if (data !== null) {
    gameData = data;
  }

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
      state = `title`;
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

function reset() {
  timer = 10;
  timerActive = true;
  scoreCounter = 0;
}

//handles the states of the program
function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `title`) {
    title();
  }
  else if (state === `running`) {
    running();
  }
  else if (state === `end`) {
    end();
    reset();
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

//display the title screen
function title() {
  background(0);

  //main title
  push();
  fill(255);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Pop... POP`, width / 2, 100);
  pop();
  //instructions
  push();
  fill(200);
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(
    `Use your webcam \n and your index finger \n to pop the circles!`,
    width / 2,
    height / 2
  );
  pop();
  //proceed
  push();
  fill(255);
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Click to continue.`, width / 2, height - 100);
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
      scoreCounter++;
    }
    //display current position of pin
    displayPin();
  }

  //display and move the bubble.
  moveBubble();
  checkOutOfBounds();
  checkTimer();
  checkHighscore();
  displayTimer();
  displayBubble();
  displayScoreCounter();
  displayHighscore();
}

//display the end screen
function end() {
  //result
  push();
  fill(255);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`You popped ${scoreCounter} circles.`, width / 2, height / 2);
  pop();
  //contiue
  push();
  fill(255);
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Click to continue.`, width / 2, height / 2 + 50);
  pop();
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

function checkTimer() {
  //if timer is active,
  if (timerActive) {
    //and if it's down to 0 seconds,
    if (timer <= 0) {
      //stay at 0, and end game.
      timer = 0;
      state = `end`;
    }
    //count in seconds.
    timer -= 1 / 60;
  }
}

function checkHighscore() {
  //check if current score has beaten the highScore
  if (scoreCounter > gameData.highScore) {
    // update the new highScore
    gameData.highScore = scoreCounter;
    //save the gameData
    localStorage.setItem(`cart263-bubble-pop-ex-game-data`,JSON.stringify(gameData));
  }
}

function displayTimer() {
  push();
  noStroke();
  fill(255);
  textSize(25);
  text(round(timer), width - 100, 100);
  pop();
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

//display the score
function displayScoreCounter() {
  push();
  noStroke();
  textSize(25);
  fill(0, 255, 0);
  text(scoreCounter, 50, 150);
  pop();
}

function displayHighscore() {
  push();
  textSize(25);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(230);
  text(`High score: ${gameData.highScore}`, 50, 100);
  pop();
}

function mousePressed() {
  if (state === `title`) {
    state = `running`;
  }
  if (state === `end`) {
    state = `title`;
  }
}

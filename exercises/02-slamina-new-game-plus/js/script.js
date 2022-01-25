/**
Exercise 02: Slamina New Game+
Olenka Yuen

REQUIREMENTS (do at least 3):
- Add start and end screens
- Add more visual flair when you get an answer right or wrong
- Add a counter for how many correct guesses the user achieves
. Add sound effects when you get an answer right and wrong (could be criticism/praise via ResponsiveVoice?)

. Add multiple voice inputs for the user (maybe they can choose between two animals? Which is cuter?)
. Use the ResponsiveVoice callbacks to add visuals to the program while the voice is talking
*/

"use strict";

//Animals array (Reference in the README)
const animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra",
];

//Variables to compare your guess to the answer.
let currentAnimal = "";
let currentAnswer = "";

//The messages that pop in when the player answers
let winLetters = [`G`, `R`, `E`, `A`, `T`, `!`];
let loseLetters = [`W`, `R`, `O`, `N`, `G`];
let letters = [];

//The player score
let correct = {
  currentScore: 0,
  maxScore: 3,
};

//the player's life
let life = {
  x: undefined,
  y: 200,
  size: 50,
  fill: 150,
  currentLives: 3,
  minLives: 0,
  maxLives: 3,
};

let state = `title`; //different screens: title, game, endings

//Setup the game to window size.
function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
}

//Reset the game everytime a round is finished.
function reset() {
  correct.currentScore = 0; //restart the score
  letters = []; //empty the array
  life.currentLives = 3; //full life
  //If annyang! works, execute the commands
  if (annyang) {
    let commands = {
      "I think it is a *animal": guessAnimal,
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

//Call all the states/ events of the game
function draw() {
  background(0); //black bg

  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  } else if (state === `win`) {
    win();
    reset();
  } else if (state === `lose`) {
    lose();
    reset();
  }
}

//title screen
function title() {
  push();
  background(30); //dark grey
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(255);
  text(`What's That Animal?`, width / 2, height / 2);
  pop();
}

//Show the instructions, lives, score, and answer.
function game() {
  //top screen instructions
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(`"I think it is a..."`, width / 2, 85);
  pop();
  //Bottom screen instructions.
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 150);
  text(`Click to Randomize!`, width / 2, height - 85);
  pop();

  //Have the (in)correct message play on screen when it appears.
  for (let i = 0; i < letters.length; i++) {
    letters[i].update();
  }

  displayAnswer(); //Have the answer visible on screen
  displayScore(); //(show) Keep track of your score
  displayLives(); //(show) Keep track of your lives
}

//win screen
function win() {
  push();
  background(93, 128, 85);//green bg
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(250, 239, 220);//creamy text
  text(`VICTORIOUS!`, width / 2, height / 2);
  pop();
}

//Lose screen
function lose() {
  push();
  background(72, 86, 133);//blue bg
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(250, 239, 220);//creamy text
  text(`YOU LOSE`, width / 2, height / 2);
  pop();
}

//check whether the answer is correct or not.
function checkAnswer() {
  //If it's correct,
  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0); //answer in green text
    createLetters(winLetters); //correct message falls in
    correct.currentScore++; //Score adds up by 1.
    //If you get a total of 3 answers correct,
    if (correct.currentScore === correct.maxScore) {
      state = `win`; // you win
    } else {
      newAnimal(); //else, you continue the game
    }
    //If answer is incorrect,
  } else {
    fill(255, 0, 0); //answer in red text
    createLetters(loseLetters);// incorrect message falls in
    life.currentLives--;//life(circle) reduce by 1
    //If you lose all 3 lives,
    if (life.currentLives === life.minLives) {
      state = `lose`;//you lose.
    }
  }
}

//create the letters that correspond to the Letter class and have them appear visible inside the canvas.
function createLetters(letterSet) {
  // A loop to add all letters.
  for (let i = 0; i < letterSet.length; i++) {
    // Generate a random x on the canvas
    let x = 100 + i * ((width - 200) / letterSet.length);
    // Generate a random y ABOVE the canvas (so they fall in)
    let y = random(-400, -100);
    // Create the letter
    let letter = new Letter(x, y, letterSet[i]);
    // Add the new letter to our letters array
    letters.push(letter);
  }
}

//Display the answer at the center of the screen.
function displayAnswer() {
  push();
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(currentAnswer, width / 2, height / 2);
  pop();
}

//Display your score on the left side of the screen
function displayScore() {
  push();
  textSize(32);
  fill(255);
  text(correct.currentScore, 80, 200);
  pop();
}

//Display your 3 lives on the right side of the screen.
function displayLives() {
  let y = life.y;

  for (let i = 0; i < life.currentLives; i++) {
    push();
    stroke(255);
    fill(life.fill);
    ellipse(width - 80, y, life.size);
    pop();
    //Space out the circles.
    y += life.size * 1.5;
  }
}

//convert the first letter of our guess into lowercase.
function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
  //Compare if answer is correct.
  checkAnswer();
}

//Reverses the provided string
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split("");
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join("");
  // Return the result
  return result;
}

//generate new animal and reverses it's spelling.
function newAnimal() {
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal, "Japanese Female");
}

//proceeds to the next state/ screen after clicking the mouse. clicking during the game generates a new animal.
function mousePressed() {
  if (state === `title`) {
    state = `game`;
  } else if (state === `game`) {
    newAnimal();
  } else if (state === `win`) {
    state = `title`;
  } else if (state === `lose`) {
    state = `title`;
  }
}

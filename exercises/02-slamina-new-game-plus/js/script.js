/**
Exercise 02: Slamina New Game+
Olenka Yuen

REQUIREMENTS (do at least 3):
- Add start and end screens
- Add more visual flair when you get an answer right or wrong
. Add sound effects when you get an answer right and wrong (could be criticism/praise via ResponsiveVoice?)
- Add a counter for how many correct guesses the user achieves

. Add multiple voice inputs for the user (maybe they can choose between two animals? Which is cuter?)
. Use the ResponsiveVoice callbacks to add visuals to the program while the voice is talking
*/

"use strict";

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

let currentAnimal = "";
let currentAnswer = "";

let winLetters = [`G`, `R`, `E`, `A`, `T`];
let loseLetters = [`W`, `R`, `O`, `N`, `G`];
let letters = [];

let correct = {
  currentScore: 0,
  maxScore: 3,
};
//
// let wrong = {
//   currentScore: 0,
//   maxScore: 3,
// };

let life = {
  x: undefined,
  y: 200,
  size: 50,
  fill: 150,
  numLives: 3,
};

let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
}

function reset() {
  correct.currentScore = 0;
  //empty the array
  letters = [];

  if (annyang) {
    let commands = {
      "I think it is a *animal": guessAnimal,
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(50);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  } else if (state === `win`) {
    win();
    reset();
  }
}

function title() {
  push();
  background(30);
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(255);
  text(`What's That Animal?`, width / 2, height / 2);
  pop();
}

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


  for (let i = 0; i < letters.length; i++) {
    letters[i].update();
  }
  text(currentAnswer, width / 2, height / 2);
  displayScore();
  displayLives();
}

function win() {
  push();
  background(93, 128, 85);
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(250, 239, 220);
  text(`VICTORIOUS!`, width / 2, height / 2);
  pop();
}

function checkAnswer() {
  //Check if the answer is correct or not.
  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
    createLetters(winLetters);
    correct.currentScore++;
    //check victory/ loss conditions.
    if (correct.currentScore === correct.maxScore) {
      state = `win`;
    } else {
      newAnimal();
    }
  } else {
    fill(255, 0, 0);
    createLetters(loseLetters);
  }
}

function createLetters(letterSet) {
  // A loop to add all letters.
  for (let i = 0; i < letterSet.length; i++) {
    // Generate a random x on the canvas
    let x = 100 + i*((width - 200)/letterSet.length);
    // Generate a random y ABOVE the canvas (so they fall in)
    let y = random(-400, -100);
    // Create the letter
    let letter = new Letter(x, y, letterSet[i]);
    // Add the new letter to our letters array
    letters.push(letter);
    console.log(x, y);
  }
}

function displayScore() {
  push();
  textSize(32);
  fill(255);
  text(correct.currentScore, 80, 200);
  pop();
}

function displayLives() {
  let y = life.y;

  for (let i = 0; i < life.numLives; i++) {
    push();
    stroke(255);
    fill(life.fill);
    ellipse(width - 80, life.y, life.size);
    pop();

    y += 40;
  }
}

function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);

  checkAnswer();
}

/**
Reverses the provided string
*/
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

function newAnimal() {
  //generate new animal.
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);
}

function mousePressed() {
  if (state === `title`) {
    state = `game`;
  } else if (state === `game`) {
    newAnimal();
  } else if (state === `win`) {
    state = `title`;
  }
}

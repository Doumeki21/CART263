/**
Exercise 02: Slamina New Game+
Olenka Yuen

REQUIREMENTS (do at least 3):
. Add start and end screens
. Add more visual flair when you get an answer right or wrong
. Add sound effects when you get an answer right and wrong (could be criticism/praise via ResponsiveVoice?)
. Add a counter for how many correct guesses the user achieves

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

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      "I think it is *animal": guessAnimal,
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

function draw() {
  background(0);

  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
    createWinLetters();
  } else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width / 2, height / 2);
}

function createWinLetters() {
  // A loop to add all letters.
  for (let i = 0; i < winLetters.length; i++) {
    // Generate a random x on the canvas
    let x = random(width / 2 - 100, width / 2 + 100);
    // Generate a random y ABOVE the canvas (so they fall in)
    let y = random(-400, -100);
    // // Create the letter
    // let winLetter = new WinLetter(x, y, `G`);
    // // Add the new winLetter to our winLetters array
    // winLetters.push(winLetter);
    push();
    fill(255);
    noStroke();
    textSize(32);
    textStyle(BOLD);
    pop();
  }
}

function mousePressed() {
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);
}

function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
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

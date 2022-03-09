/**
Exercise 6: Raving Redactionist++
Olenka Yuen

PLAN:
    . Improve the visual presentation by working with the CSS and HTML
    - Add a counter to the page that tells the user how many currently revealed secrets there are
    - Use a fading effect to fade the redaction effect in and out (this will likely require animate())
    - Add a beginning and ending

    .texts with physics?
*/

let interval;
let timerActive = true;
let timerNumber = 10;
//updates the html text
$(`#timer`).text(`${timerNumber}`);
//click to censor the revealed text
$(`.top-secret`).on(`click`, redact);
//make a variable to store the text as a number
let counterNumber = 0;

//starting screen
//once clicked on `start`
$(`#enter-document`).on(`click`, function() {
  reset();
  //hide this screen
  $(this).hide();
  //start the game
  $(`#secret-document`).show();
  //calls the revelation() every 500millis
  setInterval(revelation, 500);
  //if the timer is active, timer decreases by 1 sec
  if (timerActive) {
    interval = setInterval(checkTimer, 1000);
  }
})

//resets program elements
function reset() {
  clearInterval(interval);
  timerActive = true;
  timerNumber = 10;
  counterNumber = 0;
  //updates the html texts
  $(`#timer`).text(`${timerNumber}`);
  $(`#counter`).text(`${counterNumber}`)
}

//check the state of the timer
function checkTimer() {
  //updates the html text
  $(`#timer`).text(`${timerNumber}`);
  //if the timer is b/w 0 and 10 seconds,
    if (timerNumber <= 10 && timerNumber > 0) {
      //keep decreasing by 1
      timerNumber--;
    } else {
      //stop the timer
      timerActive = false;
    }
  checkTimeup();
}

//Once time is up, switch screens
function checkTimeup() {
  //if time is up
  if (!timerActive) {
    //go to the ending screen
    $(`#secret-document`).hide();
    $(`#exit-document`).show();
    reset(); //reset elements
  }
}

//click to censor the revealed text
function redact(event) {
  if ($(this).hasClass(`revealed`)) {
    //increase the number (counter)
    counterNumber++;
    //dispaly the text in the document
    $(`#counter`).text(`${counterNumber}`)
  }
  //remove the revealed class
  $(this).removeClass(`revealed`);
  //add the class for censoring the text
  $(this).addClass(`redacted`);
}

//Track each redacted text
function revelation() {
  $(`.redacted`).each(attemptReveal);
}

//randomize when the text will be revealed
function attemptReveal() {
  let r = Math.random();
  //if the generated number is less than 0.1,
  if (r < 0.1) {
    //reveal the blacked out text
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}

//game/ simulation end
$(`#exit-document`).on(`click`, function() {
  //hide this screen
  $(this).hide();
  //show the starting screen
  $(`#enter-document`).show();
})

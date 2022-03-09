/**
Exercise 6: Raving Redactionist++

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

//start
$(`#enter-document`).on(`click`, function() {
  reset();
  $(this).hide();
  $(`#secret-document`).show();
  //calls the revelation() every 500
  setInterval(revelation, 500);
  if (timerActive) {
    interval = setInterval(checkTimer, 1000);
  }
})

function reset() {
  clearInterval(interval);
  // clearInterval(revelation);
  // clearInterval(checkTimer);
  timerActive = true;
  timerNumber = 10;
  counterNumber = 0;
  //updates the html text
  $(`#timer`).text(`${timerNumber}`);
  $(`#counter`).text(`${counterNumber}`)
}

function checkTimer() {
  //updates the html text
  $(`#timer`).text(`${timerNumber}`);
    if (timerNumber <= 10 && timerNumber > 0) {
      //decreases by 1
      timerNumber--;
    } else {
      timerActive = false;
    }
  checkTimeup();
}

function checkTimeup() {
  if (!timerActive) {
    $(`#secret-document`).hide();
    $(`#exit-document`).show();
    reset();
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

//Check to reveal redacted texts if not already
function revelation() {
  $(`.redacted`).each(attemptReveal);
}

//
function attemptReveal() {
  let r = Math.random();
  //if the generated number is less than 0.1,
  if (r < 0.1) {
    //reveal the blacked out text
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}

$(`#exit-document`).on(`click`, function() {
  $(this).hide();
  $(`#enter-document`).show();
  $(`#exit-document`).hide();
})

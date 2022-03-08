/**
Activity 7: Raving Redactionist

PLAN:
    Create the HTML
    Create the CSS
    Make redactions disappear
    Add user redaction
*/

//click to censor the revealed text
$(`.top-secret`).on(`click`, redact);
//calls the revelation() every 500
setInterval(revelation, 500);

//click to censor the revealed text
function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  //if the generated number is less than 0.1, 
  if (r < 0.1) {
    //reveal the blacked out text
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}

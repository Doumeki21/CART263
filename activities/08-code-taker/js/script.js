/**
Activity 8: Code Taker
Olenka Yuen

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "I know": function () {
      $(this).dialog(`close`);
    },
  },
});

//use `one` instead of `on` event so we don't have to `off` event for `mousover` after, the `one` event does it once.
$(`.secret`).one(`mouseover`, function (event) {
  //this >> for only the specific .secret.
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`,
  });
});

$(`#answer`).droppable({
  drop: function (event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    //once appended >> disable draggable
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    //check answer
    if ($(this).text() === `Theremin`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  },
});

/**
Activity 8: Code Taker
Olenka Yuen

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Prisoner shakes with rage at the start
$(`.prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5,
  complete: makePrisonerDraggable
});

// Escape tunnel is droppable
$(`#escape-tunnel`).droppable({
  // Elements dropped on escape tunnel are removed from the page
  drop: function(event, ui) {
    //ui.draggable = specific prisoner (object) if there are more.
    //if three is a class of prisoner- using `this` will effect all prisoners.
    ui.draggable.remove();
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
});

/**
Makes the prisoner draggable
*/
function makePrisonerDraggable() {
  $(this).draggable();
  // Prisoner is draggable
  $(this).draggable({
    // Prisoner cannot be dragged out of the prison
    containment: `#prison`,
    // Prisoner gets an underline and turns blue when dragging starts
    start: function(event, ui) {
      $(this).addClass(`prisoner-dragging`, 1000);
    },
    // Prisoner loses underline and turns black when dragging stops
    stop: function(event, ui) {
      // NEW! Animated class removal
      $(this).removeClass(`prisoner-dragging`, 1000);
    }
  });
}

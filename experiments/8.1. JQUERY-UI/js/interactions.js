$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  distance: 7,
  times: 10,
  complete: makePrisonerDraggable
});

// $(`#escape-tunnnel`).droppable({
//   drop: function(event, ui) {
//     ui.draggable.remove();
//     $(this).hide({
//       effect: `blind`,
//       duration: 500
//     });
//   },
// });

function makePrisonerDraggable() {
  $(`#prisoner`).draggable({
    // axis: `x`,
    containment: `#prison`,
    start: function(event, ui) {
      $(this).addClass(`prisoner-dragging`, 750);
    },
    stop: function (event, ui) {
      $(this).removeClass(`prisoner-dragging`, 750);
    },
  });
}

// setTimeout(function() {
//   $(`#prisoner`).draggable(`disable`);
// }, 500);

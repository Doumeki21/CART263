$(`#escape-tunnel`).hide();

$(`#introduction-dialog`).dialog({
  //modal prevents user from interacting anywhere else until they close the dialog.
  modal: true,
  resizable: false,
  buttons: {
    "Imagination": function() {
      //disable walls
      $(`#prisoner`).draggable(`option`, `containment`, `none`);
      $(this).dialog(`close`);
    },
    "Escape tunnel": function() {
      $(`#escape-tunnel`).show({
        effect: `blind`,
      });
      $(this).dialog(`close`);
    }
  }
});

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

$(`#prisoner`).draggable({
  // axis: `x`,
  containment: `#prison`,
  start: function(event, ui) {
    //this refers to the prisoner
    $(this).css(`text-decoration`, `underline`);
  },
  stop: function (event, ui) {
    $(this).css(`text-decoration`, `none`);
  },
});

// setTimeout(function() {
//   $(`#prisoner`).draggable(`disable`);
// }, 500);

$(`#escape-tunnnel`).droppable({
  drop: function(event, ui) {
    $(`#prisoner`).remove();
  },
});

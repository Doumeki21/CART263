// $(`.header`).on(`click`, function(event) {
//   //this refers to the event target
//   $(this).remove();
// })

//every click
$(`section`).on(`click`, function(event) {
  $(this).append(`<p>added every click</p>`);
})
//react to first click
$(`section`).one(`click`, function(event) {
  $(this).append(`<p>added one click</p>`);
})
//alt click
$(`#main-heading`).click(function(event) {
  $(this).css(`color`, `#ff0000`);
})

//stop listening
$(`.header`).on(`click`, function(event) {
  $(this).css(`color`, `red`);
  $(`.header`).off(`click`);
})

//mouse
$(`#paragraph`).mouseenter(function(event) {
  $(this).css(`color`, `red`);
})
$(`#paragraph`).mouseleave(function(event) {
  $(this).css(`color`, `black`);
})

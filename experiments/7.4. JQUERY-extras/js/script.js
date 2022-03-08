// $(`#main-heading`).addClass(`highlight`);
// //remove highlight on click
// $(`#main-heading`).on(`click`, function(event) {
//   $(this).removeClass(`highlight`);
// })
//
// //flashing highlight
// setInterval(function() {
//   $(`#main-heading`).toggleClass(`highlight`);
// }, 500);
//
// //hide the main heading on bttn click
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).hide();
//   setTimeout(function() {
//     $(`#main-heading`).show();
//   }, 2000);
// })

// //click btn to toggle on/off
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).toggle();
// })

// //1. fade in/ out animation
// $(`#button`).on(`click`, function(event) {
//   //fadeout: 2 sec animation
//   $(`#main-heading`).fadeOut(2000, function() {
//     //fadeIn: 2 sec animation
//     $(this).fadeIn(2000);
//   });
// })

// //2. fadetoggle
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).fadeToggle(200);
// })

// //slide animation
// $(`#button`).on(`click`, function(event) {
//   // Slide up the main heading over two seconds...
//   $(`#main-heading`).slideUp(2000, function() {
//     // .. then slide it back down over two seconds
//     $(this).slideDown(2000);
//   });
// });

// //moves back when you click again
// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).slideToggle(2000);
// });

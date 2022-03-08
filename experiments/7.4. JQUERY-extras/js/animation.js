// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.5,
//   }, 2000, function() {
//     //when the fade is complete, become red
//     //this refers to the target of animation
//     $(this).css(`color`, `#ff0000`);
//   });
// })

//sophisticated  ver of animation code
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).animate({
    "opacity": 0.5,
    "font-size": `3rem`
  }, {
    duration: 2000,
    easing:  `linear`,
    complete: function() {
      //when the fade is complete, become red
      //this refers to the target of animation
      $(this).css(`color`, `#ff0000`);
      $(this).text(`ANIMATED`);
    }
  });
})

//.EACH
$(`.header`).each(function() {
  //split the text into a string of letters to reverse the words
  let reverseText = $(this).text().split(``).reverse().join(``);
  //set the new reversed text
  $(this).text(reverseText);
})

// //EXAMPLE 1
// let exButton = document.getElementById(`example-button`);
// exButton.addEventListener(`click`, function (event) {
//   // alert(`Nice clicking!`);
//   event.target.style.display = `none`;
// })
//
// //EXAMPLE 2
// let textInput = document.getElementById(`text-input`);
// let button = document.getElementById(`submit-button`);
// //mouse click submit
// button.addEventListener(`click`, function(event) {
//   let input = textInput.value;
//   alert(input);
// });
// //hit enter key
// textInput.addEventListener(`keydown`, function(event) {
//   if (event.keyCode === 13) {
//     let input = textInput.value;
//     alert(input);
//   }
// })

// //EXAMPLE 3
// let slider = document.getElementById(`slider`);
// // 1. add a button to show the range
// let button = document.getElementById(`check-button`)
// button.addEventListener(`click`, function(event) {
//   let value = slider.value;
//   alert(value);
// });
//
// //2.
// slider.addEventListener(`change`, function(event) {
//   alert(slider.value);
// })

let picker = document.getElementById(`color-picker`);
picker.addEventListener(`change`, function(event) {
  let color = picker.value;
  document.body.style.backgroundColor = color;
});

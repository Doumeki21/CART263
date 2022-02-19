// let paragraph = document.getElementById(`paragraph`);

//1. change color once
// setTimeout(function () {
//   paragraph.style.color = `#ff0000`;
// }, 3000);

// //2. blinking animation
// setInterval(blink, 500);
// function blink() {
//   let opacity = paragraph.style.opacity;
//   if (opacity === `1`) {
//     paragraph.style.opacity = `0`;
//   }
//   else {
//     paragraph.style.opacity = `1`;
//   }
// }

// //3. fade animation
// let opacity = 1;
//
// fadeOut();
//
// function fadeOut() {
//   opacity -= 0.01;
//   paragraph.style.opacity = opacity;
//   if (opacity > 0) {
//     //create a draw loop, until it reaches 0
//     requestAnimationFrame(fadeOut);
//   }
// }

// //interactive click #1
// let paragraph = document.getElementById(`paragraph`);
// //when a click happens, the event function is called
// paragraph.addEventListener(`click`, function(event) {
//   paragraph.innerText = `${event.clientX}, ${event.clientY}`;
// });

//interactive click #2
// let mainHeading = document.getElementById(`main-heading`);
// let subHeading = document.getElementById(`sub-heading`);
//
// mainHeading.addEventListener(`click`, setRedTextColor);
// subHeading.addEventListener(`click`, setRedTextColor);
//
// function setRedTextColor(event) {
//   event.target.style.color = `#ff0000`;
// }

let paragraph = document.getElementById(`paragraph`);
let originalText = paragraph.innerText;

// //1.mouse events
// paragraph.addEventListener(`mouseenter`, function(event) {
//   event.target.innerText = `TOAST IS GREAT!`;
// });
//
// paragraph.addEventListener(`mouseleave`, function(event) {
//   event.target.innerText = originalText;
// });

// //2. key Events #1
// document.addEventListener(`keydown`, function (event) {
//   // if (event.key === `r`) {
//   //   paragraph.style.color = `#ff6666`;
//   // }
//
//   paragraph.innerText = paragraph.innerText +event.key;
// });

//2. key events #2
document.addEventListener(`keyup`, function(event) {
  paragraph.style.color = `#ff6666`;
})
document.addEventListener(`keydown`, function(event) {
  paragraph.style.color = `#000000`;
})

let mainHeading = document.getElementById(`main-heading`);
window.addEventListener(`offline`, function(event) {
  mainHeading.innerText = `:(`;
})

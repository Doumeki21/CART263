"use strict";

// let canvas = undefined;
//
// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight);
//   canvas.id(`#p5-canvas`);
//
//   $(document).on(`click`, function() {
//     $(`#p5-canvas`).hide();
//   });
// }
//
// function draw() {
//   background(0);
//
//   rectMode(CENTER);
//   rect(mouseX, mouseY, 100, 100);
// }

let mouseX = 0;
let mouseY = 0;

$(document).on(`mousemove`, function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
})

window.requestAnimationFrame(animateCircle);

function(animateCircle) {
  $(`#circle`).css({
    top: `$(mouseY)px`,
    left: `$(mouseX)px`,
  })

  window.requestAnimationFrame
}

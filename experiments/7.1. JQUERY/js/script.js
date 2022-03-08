// //CHANGING CSS
// //get the id and store in variable
// let $mainHeading = $(`#main-heading`);
// $mainHeading.css(`color`, `#339966`);
// $mainHeading.css(`font-size`, `5rem`);
// $mainHeading.css(`font-family`, `Helvetica, sans-serif`);
// $mainHeading.css(`background-color`, `#000000`);

$(`#main-heading`).css({
  "color": `#339966`,
  "font-size": `5rem`,
  "font-family": `Helvetica, sans-serif`,
  "background-color": `#000000`
});

//CHANGE TEXT
$(`#example-span`).text(`a squirrel`);
let spanText = $(`#example-span`).text();
let reverseSpanText = spanText.split(``).reverse().join(``);
$(`#example-span`).text(reverseSpanText);

//CHANGE HTML
let spanHTML = $(`#example-span`).html();
$(`#example-span`).html(`<strong>${spanHTML}</strong>`);

//ATTRIBUTE
$(`#main-heading`).attr(`contenteditable`, `true`);

let $link = $(`#thicc-link`);
if ($link.attr(`href`) === `https://thi.cc`) {
  $link.text(`THICC`);
}

//Creating elements
let $newP = $(`<p></p>`);
$newP.text(`wewo`);
//add element to area
$(`#second-section`).append($newP);

//remove element
$(`#main-heading`).remove();

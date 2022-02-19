// let mainHeading = document.getElementById(`main-heading`);
// let wellSection = document.getElementById(`well-section`);
// let pronoun = document.getElementById(`pronoun`);
//
// //changing the styling of the text
// mainHeading.style.color = `#339966`;
// mainHeading.style.fontSize = `4rem`;
// wellSection.style.fontSize = `2rem`;
// mainHeading.style.fontFamily = `Courier, monospace`;
//
// pronoun.innerHTML = `<strong>you</strong>`;
//
// //changing the textual content
// mainHeading.innerText = `I FEEL GREAT!`;
// // if (pronoun.innerText === `we`) {
// //   pronoun.innerText = `you`;
// // }

let image = document.getElementById(`clown-image`);
//changing the source attribute to another img!
image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);

// //not exactly an array, IT'S A HTML COLLECTION, but we can treat it like an array
// //array of headers (3)
// let headers = document.getElementsByClassName(`header`);
// for (let i = 0; i < headers.length; i++) {
//   headers[i].style.color = `#00ff33`;
// }

//jquery = play with css selectors (class, tag, id...)
// let headers = document.querySelectorAll(`.header`);
// let headers = document.querySelectorAll(`h1, h2`);
//
// let headers = document.querySelectorAll(`#main-heading`);
// for (let i=0; i<headers.length; i++) {
//   headers[i].style.color = `#bb3434`;
// }


// let h2s = document.getElementsByTagName(`h2`);
// for (let i = 0; i < h2s.length; i++) {
//   h2s[i].style.color = `#ff6666`;
// }

//1. create new html element
let newP = document.createElement(`p`);
newP.innerText = `Gosh, I do like clowns.`;
//2. appendChild function to add the new element to the section
let clownSection = document.getElementById(`clown-section`);
clownSection.appendChild(newP);

let mainHeading = document.getElementById(`main-heading`);
//find the parent of mainHeading and remove the child.
mainHeading.parentElement.removeChild(mainHeading);

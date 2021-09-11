"use strict";

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const backgroundImg = document.getElementById("content");
let index = 0;

const pictures = [
  "/JS-Projects/background-image-slider/img/1.jpg",
  "/JS-Projects/background-image-slider/img/2.jpg",
  "/JS-Projects/background-image-slider/img/3.jpg",
  "/JS-Projects/background-image-slider/img/4.jpg",
  "/JS-Projects/background-image-slider/img/5.jpg",
  "/JS-Projects/background-image-slider/img/6.jpg",
  "/JS-Projects/background-image-slider/img/7.jpg",
  "/JS-Projects/background-image-slider/img/8.jpg",
  "/JS-Projects/background-image-slider/img/9.jpg",
  "/JS-Projects/background-image-slider/img/10.jpg",
];

function swapPicForwards() {
  index++;
  if (index === pictures.length) {
    index = 0;
  }
  backgroundImg.style.backgroundImage = `url(${pictures[index]})`; // url(pictures[index]);
}
nextButton.onclick = swapPicForwards;
function swapPicBackwards() {
  index--;
  if (index < 0) {
    index = pictures.length - 1;
  }
  backgroundImg.style.backgroundImage = `url(${pictures[index]})`; // url(pictures[index]);
}
previousButton.onclick = swapPicBackwards;

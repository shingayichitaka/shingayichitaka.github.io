"use strict";

const body = document.querySelector("body");
const click = document.querySelector(".click");

const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
let pointer = 0;

body.style.backgroundImage = `url(img/${images[pointer]})`;
body.classList.add("background");

click.addEventListener("click", function () {
  pointer++;
  if (pointer > images.length - 1) {
    pointer = 0;
  }
  body.style.backgroundImage = `url(img/${images[pointer]})`;
  console.log(pointer);
});

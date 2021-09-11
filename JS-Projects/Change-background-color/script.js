"use strict";

const colors = [
  "#F9ED69",
  "#F08A5D",
  "#B83B5E",
  "#6A2C70",
  "#A8D8EA",
  "#AA96DA",
  "#FCBAD3",
  "#FFFFD2",
  "#521262",
  "#6639A6",
  "#3490DE",
  "#6FE7DD",
];

const click = document.querySelector(".click");
const body = document.querySelector("body");

let index = 0;

click.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  body.style.backgroundColor = colors[index];
  index++;
  if (index > colors.length - 1) {
    index = 0;
  }
}

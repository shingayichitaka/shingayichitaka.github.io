"use strict";

const add = document.querySelector(".add");
const lower = document.querySelector(".lower");
const display = document.querySelector(".display");

let counter = 0;

display.textContent = counter;

add.addEventListener("click", function () {
  counter++;
  display.textContent = counter;
});
lower.addEventListener("click", function () {
  counter--;
  display.textContent = counter;
});

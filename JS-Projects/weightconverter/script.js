"use strict";

const convert = document.querySelector("#convert");
const reset = document.querySelector("#reset");
let pounds = document.querySelector("#pounds");
let kilograms = document.querySelector("#kilograms");

convert.addEventListener("click", function () {
  if (pounds.value === "" || Number(pounds.value) === "NaN") {
    kilograms.value = "Please enter a valid number";
  } else {
    let unRoundedValue = Number(pounds.value) * 0.45359237;
    kilograms.value = unRoundedValue.toFixed(2);
  }
});

reset.addEventListener("click", function () {
  pounds.value = "";
  kilograms.value = "";
});

"use strict";

const degrees = document.querySelector(".degrees");
const kelvins = document.querySelector(".kelvins");

const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");

function resetValues() {
  degrees.value = "";
  kelvins.value = "";
}
resetValues();

calculate.addEventListener("click", function () {
  const degreesValue = Number(degrees.value);
  const kelvinsValue = (degreesValue + 273.15).toFixed(2);
  kelvins.value = kelvinsValue;
});

reset.addEventListener("click", function () {
  resetValues();
});

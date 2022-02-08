"use strict";

const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const bmi = document.querySelector(".bmi");

const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");

function calculateBMI(weight, height) {
  return Math.round(weight / (height * height));
}
function resetValue() {
  weight.value = "";
  height.value = "";
  bmi.value = "";
}
resetValue();

calculate.addEventListener("click", function () {
  const weightValue = Number(weight.value);
  const heightValue = Number(height.value);

  bmi.value = calculateBMI(weightValue, heightValue);
});

reset.addEventListener("click", function () {
  resetValue();
});

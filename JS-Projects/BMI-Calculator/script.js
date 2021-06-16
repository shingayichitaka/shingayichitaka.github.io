"use strict";

let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
const calc = document.querySelector(".calc");
let result = document.querySelector(".result");
let description = document.querySelector(".description");
const displayBlock = document.querySelector(".display-block");
const reset = document.querySelector(".reset");
const meaning = {
  normalWeight: "Normal BMI range of 19–24,9",
  overWeight: "Overweight range of 25–29,9",
  overWeight1: "Overweight level 1 of 30–34,9",
  overWeight2: "Overweight level 2 of 35–39,9",
  overWeight3: "Overweight level 3 of >= 40",
};

const hello = function () {
  if (height.value === "") {
    height.value = "Please enter a valid height in meters.";
    return false;
  } else if (weight.value === "") {
    weight.value = "Please enter a valid weight in meters.";
    return false;
  }
  return true;
};

calc.addEventListener("click", function () {
  if (hello()) {
    displayBlock.style.display = "block";
    result.textContent = Math.round(
      Number(weight.value) / (Number(height.value) * Number(height.value))
    );
  }
  if (Number(result.textContent) < 19) {
    description.textContent = "Under weight";
    result.textContent === "NaN";
  } else if (result.textContent === "NaN") {
    description.textContent = "";
  } else if (
    Number(result.textContent) >= 19 &&
    Number(result.textContent) <= 24.9
  ) {
    description.textContent = meaning.normalWeight;
  } else if (
    Number(result.textContent) >= 25 &&
    Number(result.textContent) <= 29.9
  ) {
    description.textContent = meaning.overWeight;
  } else if (
    Number(result.textContent) >= 30 &&
    Number(result.textContent) <= 34.9
  ) {
    description.textContent = meaning.overWeight1;
  } else if (
    Number(result.textContent) >= 35 &&
    Number(result.textContent) <= 39.9
  ) {
    description.textContent = meaning.overWeight2;
  } else if (Number(result.textContent) >= 40) {
    description.textContent = meaning.overWeight3;
  }
});
reset.addEventListener("click", function () {
  height.value = "";
  weight.value = "";
  displayBlock.style.display = "none";
  result.textContent = "";
  description.textContent = "";
});

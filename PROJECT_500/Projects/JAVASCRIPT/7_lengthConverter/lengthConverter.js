"use strict";

const cm = document.querySelector(".cm");
const m = document.querySelector(".m");

const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");

function resetValues() {
  cm.value = "";
  m.value = "";
}

resetValues();

calculate.addEventListener("click", function () {
  const cmValue = Number(cm.value);
  const mValue = cmValue / 100;

  m.value = mValue;
});

reset.addEventListener("click", function () {
  resetValues();
});

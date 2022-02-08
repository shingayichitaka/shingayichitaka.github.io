"use strict";

const kgs = document.querySelector(".kgs");
const lbs = document.querySelector(".lbs");
const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");

function resetValues() {
  kgs.value = "";
  lbs.value = "";
}
resetValues();
console.log(lbs);

calculate.addEventListener("click", function () {
  const kgsValue = Number(kgs.value);

  const lbsValue = kgsValue * 2.20462262185;
  lbs.value = Math.round(lbsValue);
});

reset.addEventListener("click", function () {
  resetValues();
});

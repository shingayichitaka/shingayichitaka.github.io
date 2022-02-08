"use strict";

const principle = document.querySelector(".principle");
const rate = document.querySelector(".rate");
const time = document.querySelector(".time");
const calculate = document.querySelector(".calculate");
const interest = document.querySelector(".interest");
const reset = document.querySelector(".reset");

function calcInterest(principle, rate, time) {
  return principle * (rate / 100) * time;
}

calculate.addEventListener("click", function () {
  const principleValue = Number(principle.value);
  const rateValue = Number(rate.value);
  const timeValue = Number(time.value);

  interest.value = calcInterest(principleValue, rateValue, timeValue);
});

reset.addEventListener("click", function () {
  principle.value = "";
  rate.value = "";
  time.value = "";
  interest.value = "";
});

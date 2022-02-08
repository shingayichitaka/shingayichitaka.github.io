"use strict";

const bill = document.querySelector(".bill");
const numberOfPeople = document.querySelector(".num");
const percentageTip = document.querySelector(".percentageTip");
const calculate = document.querySelector(".calculate");
const totalAmount = document.querySelector(".totalAmount");
const amtPerPerson = document.querySelector(".amtPerPerson");
const reset = document.querySelector(".reset");

function computeTotalAmt(total, bill, percentage) {
  total.value = bill + (bill * percentage) / 100;
}
function computeAmtPerPerson(amtPerPerson, totalAmount, numberOfPeopleValue) {
  amtPerPerson.value = totalAmount.value / numberOfPeopleValue;
}

calculate.addEventListener("click", function () {
  const billValue = Number(bill.value);
  const numberOfPeopleValue = Number(numberOfPeople.value);
  const percentageTipValue = Number(percentageTip.value);
  computeTotalAmt(totalAmount, billValue, percentageTipValue);
  computeAmtPerPerson(amtPerPerson, totalAmount, numberOfPeopleValue);
});

reset.addEventListener("click", function () {
  bill.value = "";
  numberOfPeople.value = "";
  percentageTip.value = "";
  totalAmount.value = "";
  amtPerPerson.value = "";
});

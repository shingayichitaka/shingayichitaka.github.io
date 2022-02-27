"use strict";

const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const operator = document.querySelector(".operator");
const check = document.querySelector(".check");
const switchOperator = document.querySelector(".switch");
const reset = document.querySelector(".reset");
const operatorName = document.querySelector(".operatorName");

const listOfOperators = [
  {
    operatorName: "added",
    operatorSymbol: "+",
  },
  {
    operatorName: "subtracted",
    operatorSymbol: "-",
  },
  {
    operatorName: "divided",
    operatorSymbol: "/",
  },
  {
    operatorName: "multiplied",
    operatorSymbol: "*",
  },
];
let pointer = 0;
operator.textContent = listOfOperators[pointer].operatorSymbol;
operatorName.textContent = listOfOperators[pointer].operatorName;

check.addEventListener("click", function () {
  const number1Value = Number(number1.value);
  const number2Value = Number(number2.value);

  if (operator.textContent === "+") {
    number3.value = number1Value + number2Value;
  } else if (operator.textContent === "-") {
    number3.value = number1Value - number2Value;
  } else if (operator.textContent === "/") {
    number3.value = number1Value / number2Value;
  } else if (operator.textContent === "*") {
    number3.value = number1Value * number2Value;
  }
});

switchOperator.addEventListener("click", function () {
  pointer++;
  if (pointer > listOfOperators.length - 1) {
    pointer = 0;
  }
  operator.textContent = listOfOperators[pointer].operatorSymbol;
  operatorName.textContent = listOfOperators[pointer].operatorName;
});

reset.addEventListener("click", function () {
  number1.value = "";
  number2.value = "";
  number3.value = "";
  pointer = 0;
  operator.textContent = listOfOperators[pointer].operatorSymbol;
  operatorName.textContent = listOfOperators[pointer].operatorName;
});

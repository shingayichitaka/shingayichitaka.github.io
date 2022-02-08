"use strict";

const word = document.querySelector(".word");
const displayWord = document.querySelector(".displayWord");
const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");

calculate.addEventListener("click", function () {
  const getWord = word.value;
  const lengthOfWord = getWord.length;
  displayWord.textContent = lengthOfWord;
});

reset.addEventListener("click", function () {
  word.value = "";
  displayWord.textContent = "";
});

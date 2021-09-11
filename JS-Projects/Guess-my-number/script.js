"use strict";

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let numberInput;
const check = document.querySelector(".check");
const reset = document.querySelector(".reset");
const message = document.querySelector(".message");
const highScore = document.querySelector(".highScore");
const score = document.querySelector(".score");
let highScoreCounter = 0;
let scoreCounter = 20;
console.log(randomNumber);
// console.log(typeof numberInput);

document.querySelector(".randomNumber").textContent;

check.addEventListener("click", function () {
  numberInput = document.querySelector(".numberInput").value;
  console.log(numberInput);
  if (numberInput === "") {
    message.textContent = "Not a number! 🤷‍♂️";
  } else if (numberInput > randomNumber) {
    if (scoreCounter < 1) {
      message.textContent = "Game over! 😭";
      return;
    }
    message.textContent = "Too big! 🙌";
    scoreCounter--;
    score.textContent = scoreCounter;
  } else if (numberInput < randomNumber) {
    if (scoreCounter < 1) {
      message.textContent = "Game over! 😭";
      return;
    }
    message.textContent = "Too small! 👀";
    scoreCounter--;
    score.textContent = scoreCounter;
  } else {
    message.textContent = "Perfect! 🌟";
    highScoreCounter += randomNumber;
    highScore.textContent = highScoreCounter;
    document.querySelector(".randomNumber").textContent = `${randomNumber} 🏆`;
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(randomNumber);
  }
});
reset.addEventListener("click", function () {
  message.textContent = "Start guessing";
  score.textContent = 20;
  highScore.textContent = 0;
  document.querySelector(".randomNumber").textContent = "?";
  document.querySelector(".numberInput").value = "";
});

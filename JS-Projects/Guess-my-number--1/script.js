"use strict";

const inputNumber = document.querySelector(".inputnumber");
const check = document.querySelector(".check");
const reset = document.querySelector(".reset");
const secretNumber = document.querySelector(".secretNumber");
const message = document.querySelector(".message");
const currentScore = document.querySelector(".currentscore");
const highscoreTracker = document.querySelector(".highscore");

let score = 20;
let highScore = 0;

let randomNumber = Math.trunc(Math.random() * 20 + 1);
secretNumber.textContent = randomNumber;

inputNumber.value = "";

check.addEventListener("click", function () {
  const input = Number(inputNumber.value);
  if (input >= 1 && input <= 20) {
    if (score === 0) {
      return;
    }
    if (input === randomNumber) {
      highScore += input;
      highscoreTracker.textContent = highScore;
      randomNumber = Math.trunc(Math.random() * 20 + 1);
      secretNumber.textContent = randomNumber;
      message.textContent = "Correct 😎";
    } else if (input > randomNumber) {
      score--;
      currentScore.textContent = score;
      message.textContent = "Too high 📈 ";
      if (score < 1) {
        message.textContent = "Game over 😭";
        return;
      }
    } else if (input < randomNumber) {
      score--;
      currentScore.textContent = score;
      message.textContent = "Too low 📉 ";
      if (score < 1) {
        message.textContent = "Game over 😭";
        return;
      }
    }
  } else {
    message.textContent = "Please enter a valid guess 😢 (Between 1 and 20)";
    secretNumber.textContent = randomNumber;
  }
});
reset.addEventListener("click", function () {
  inputNumber.value = "";
  message.textContent = "Start guessing...";
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  secretNumber.textContent = randomNumber;
  score = 20;
  currentScore.textContent = score;
  highScore = 0;
  highscoreTracker.textContent = highScore;
});

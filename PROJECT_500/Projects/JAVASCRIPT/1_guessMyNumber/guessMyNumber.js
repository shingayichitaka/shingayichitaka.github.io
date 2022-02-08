"use strict";

const check = document.querySelector(".check");
const reset = document.querySelector(".reset");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let scoreValue = 20;
score.textContent = scoreValue;
let highscoreValue = 0;
highscore.textContent = highscoreValue;

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let gameStatus = true;

function youLose() {
  if (scoreValue === 0) {
    message.textContent = "You lose 😭";
    gameStatus = false;
  }
}
function evaluate(string) {
  scoreValue--;
  score.textContent = scoreValue;
  message.textContent = string;
}
function resetGame() {
  guess.value = "";
  scoreValue = 20;
  score.textContent = scoreValue;
  highscoreValue = 0;
  highscore.textContent = highscoreValue;
  message.textContent = "";
  gameStatus = true;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
}

resetGame();

check.addEventListener("click", function () {
  const guessValue = Number(guess.value);

  if (gameStatus === true) {
    if (guessValue === randomNumber) {
      highscoreValue++;
      highscore.textContent = highscoreValue;
      randomNumber = Math.trunc(Math.random() * 20 + 1);
    } else if (guessValue > randomNumber) {
      evaluate("Too High 📈");
      youLose();
    } else if (guessValue < randomNumber) {
      evaluate("Too Low 📉");
      youLose();
    }
  }
});

reset.addEventListener("click", function () {
  resetGame();
});

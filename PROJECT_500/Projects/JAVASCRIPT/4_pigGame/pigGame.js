"use strict";

const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const reset = document.querySelector(".reset");

const player1TotalScore = document.querySelector(".player-1-Totalscore");
const player1CurrentScore = document.querySelector(".player-1-currentScore");
const player2TotalScore = document.querySelector(".player-2-Totalscore");
const player2CurrentScore = document.querySelector(".player-2-currentScore");

const player1Text = document.querySelector(".player1Text");
const player2Text = document.querySelector(".player2Text");

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

let gameStatus = true;

let player1TotalScoreValue = 0;
let player1CurrentScoreValue = 0;
let player2TotalScoreValue = 0;
let player2CurrentScoreValue = 0;

function resetGame() {
  gameStatus = true;

  player1TotalScoreValue = 0;
  player1CurrentScoreValue = 0;
  player2TotalScoreValue = 0;
  player2CurrentScoreValue = 0;

  player1TotalScore.textContent = player1TotalScoreValue;
  player1CurrentScore.textContent = player1CurrentScoreValue;
  player2TotalScore.textContent = player2TotalScoreValue;
  player2CurrentScore.textContent = player2CurrentScoreValue;

  player1.classList.add("active");
  player1.classList.remove("winner");
  player2.classList.remove("active", "winner");

  player1Text.textContent = "Player 1";
  player2Text.textContent = "Player 2";
}

resetGame();

function switchPlayer(
  elementValue,
  playerCurrentScore,
  playerRemove,
  playerAdd
) {
  elementValue = 0;
  playerCurrentScore.textContent = elementValue;
  playerRemove.classList.remove("active");
  playerAdd.classList.add("active");
}

roll.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);

  if (gameStatus === true) {
    if (player1.classList.contains("active")) {
      if (randomNumber !== 1) {
        player1CurrentScoreValue += randomNumber;
        player1CurrentScore.textContent = player1CurrentScoreValue;
      } else {
        switchPlayer(
          player1CurrentScoreValue,
          player1CurrentScore,
          player1,
          player2
        );
      }
    } else if (player2.classList.contains("active")) {
      if (randomNumber !== 1) {
        player2CurrentScoreValue += randomNumber;
        player2CurrentScore.textContent = player2CurrentScoreValue;
      } else {
        switchPlayer(
          player2CurrentScoreValue,
          player2CurrentScore,
          player2,
          player1
        );
      }
    }
  }
});

hold.addEventListener("click", function () {
  if (gameStatus === true) {
    if (player1.classList.contains("active")) {
      player1TotalScoreValue += player1CurrentScoreValue;
      player1TotalScore.textContent = player1TotalScoreValue;
      player1CurrentScoreValue = 0;
      player1CurrentScore.textContent = player1CurrentScoreValue;
      player1.classList.remove("active");
      player2.classList.add("active");
      if (player1TotalScoreValue >= 100) {
        player1Text.textContent = "🏆 Player 1 Wins 🏆";
        player2Text.textContent = "😓 Player 2 Loses 😓";
        gameStatus = false;
        player1.classList.remove("active");
        player2.classList.remove("active");
        player1.classList.add("winner");
      }
    } else if (player2.classList.contains("active")) {
      player2TotalScoreValue += player2CurrentScoreValue;
      player2TotalScore.textContent = player2TotalScoreValue;
      player2CurrentScoreValue = 0;
      player2CurrentScore.textContent = player2CurrentScoreValue;
      player2.classList.remove("active");
      player1.classList.add("active");
      if (player2TotalScoreValue >= 100) {
        player2Text.textContent = "🏆 Player 2 Wins 🏆";
        player1Text.textContent = "😓 Player 1 Loses 😓";
        gameStatus = false;
        player1.classList.remove("active");
        player2.classList.remove("active");
        player2.classList.add("winner");
      }
    }
  }
});

reset.addEventListener("click", function () {
  resetGame();
});

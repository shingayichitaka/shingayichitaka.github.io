"use strict";

const totalScorePlayer1 = document.querySelector(".total-score-player-1");
const totalScorePlayer2 = document.querySelector(".total-score-player-2");
const currentScorePlayer1 = document.querySelector(".current-score-player-1");
const currentScorePlayer2 = document.querySelector(".current-score-player-2");
const player1 = document.querySelector(".player-block-1");
const player2 = document.querySelector(".player-block-2");
const winnerBannerP1 = document.querySelector(".winner-banner-1");
const winnerBannerP2 = document.querySelector(".winner-banner-2");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const reset = document.querySelector(".reset");

let totalScoreP1 = 0;
let totalScoreP2 = 0;
let currentScoreP1 = 0;
let currentScoreP2 = 0;

function resetElementDisplays() {
  totalScorePlayer1.textContent = 0;
  totalScorePlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
}
resetElementDisplays();

player1.classList.add("active");

function updateScore(scoreCurrent, numberToUpdate, scoreCurrentElement) {
  scoreCurrent += numberToUpdate;
  scoreCurrentElement.textContent = scoreCurrent;
}

roll.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  if (player1.classList.contains("active")) {
    if (randomNumber !== 1) {
      currentScoreP1 += randomNumber;
      currentScorePlayer1.textContent = currentScoreP1;
    } else if (randomNumber === 1) {
      currentScoreP1 = 0;
      currentScorePlayer1.textContent = currentScoreP1;
      player1.classList.remove("active");
      player2.classList.add("active");
    }
  } else if (player2.classList.contains("active")) {
    if (randomNumber !== 1) {
      currentScoreP2 += randomNumber;
      currentScorePlayer2.textContent = currentScoreP2;
    } else if (randomNumber === 1) {
      currentScoreP2 = 0;
      currentScorePlayer2.textContent = currentScoreP2;
      player2.classList.remove("active");
      player1.classList.add("active");
    }
  }
});

hold.addEventListener("click", function () {
  if (player1.classList.contains("active")) {
    totalScoreP1 += currentScoreP1;
    totalScorePlayer1.textContent = totalScoreP1;
    currentScoreP1 = 0;
    currentScorePlayer1.textContent = currentScoreP1;
    player1.classList.remove("active");
    player2.classList.add("active");
    if (totalScoreP1 >= 100) {
      player1.classList.add("winner");
      player1.classList.remove("active");
      player2.classList.remove("active");
      winnerBannerP1.textContent = "🏆 Player 1 wins 🏆";
      winnerBannerP2.textContent = "😥 Player 2 loses 😓";
      return;
    }
  } else if (player2.classList.contains("active")) {
    totalScoreP2 += currentScoreP2;
    totalScorePlayer2.textContent = totalScoreP2;
    currentScoreP2 = 0;
    currentScorePlayer2.textContent = currentScoreP2;
    player2.classList.remove("active");
    player1.classList.add("active");
    if (totalScoreP2 >= 100) {
      player2.classList.add("winner");
      player1.classList.remove("active");
      player2.classList.remove("active");
      winnerBannerP2.textContent = "🏆 Player 2 wins 🏆";
      winnerBannerP1.textContent = "😥 Player 1 loses 😓";
      return;
    }
  }
});

reset.addEventListener("click", function () {
  totalScoreP1 = 0;
  totalScoreP2 = 0;
  currentScoreP1 = 0;
  currentScoreP2 = 0;

  resetElementDisplays();

  winnerBannerP1.textContent = "Player 1";
  winnerBannerP2.textContent = "Player 2";

  if (
    player1.classList.contains("winner") ||
    player2.classList.contains("winner")
  ) {
    player1.classList.add("active");
    player1.classList.remove("winner");
    player2.classList.remove("winner");
    player2.classList.remove("active");
  }
});

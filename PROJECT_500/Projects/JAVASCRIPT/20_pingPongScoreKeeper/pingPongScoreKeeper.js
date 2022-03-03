"use strict";

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const player1Button = document.querySelector(".player-1-button");
const player2Button = document.querySelector(".player-2-button");
const reset = document.querySelector(".reset");
const divider = document.querySelector(".divider");

let player1Value = 0;
let player2Value = 0;

player1.textContent = player1Value;
player2.textContent = player2Value;
let gameStatus = true;

player1Button.addEventListener("click", function () {
  if (gameStatus === true) {
    player1Value++;
    if (player1Value === 5) {
      player1.textContent = `🏆 Player 1 wins (${player1Value}) 🏆`;
      player2.classList.add("hide");
      divider.classList.add("hide");
      gameStatus = false;
    } else {
      player1.textContent = player1Value;
    }
  }
});
player2Button.addEventListener("click", function () {
  if (gameStatus === true) {
    player2Value++;
    if (player2Value === 5) {
      player2.textContent = `🏆 Player 2 wins (${player2Value}) 🏆`;
      player1.classList.add("hide");
      divider.classList.add("hide");
      gameStatus = false;
    } else {
      player2.textContent = player2Value;
    }
  }
});
reset.addEventListener("click", function () {
  gameStatus = true;
  player1Value = 0;
  player2Value = 0;
  player1.textContent = player1Value;
  player2.textContent = player2Value;
  player1.classList.remove("hide");
  player2.classList.remove("hide");
  divider.classList.remove("hide");
});

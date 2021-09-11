"use strict";

const scoreTotalPlayer0 = document.querySelector(".scoreTotal-0");
const scoreTotalPlayer1 = document.querySelector(".scoreTotal-1");
const scoreCurrentPlayer0 = document.querySelector(".scoreCurrent-0");
const scoreCurrentPlayer1 = document.querySelector(".scoreCurrent-1");
const diceDisplay = document.querySelector(".diceDisplay");
const player0Board = document.querySelector(".box-1");
const player1Board = document.querySelector(".box-3");
const newGame = document.querySelector("#new");
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");

resetScore(scoreTotalPlayer0);
resetScore(scoreTotalPlayer1);
resetScore(scoreCurrentPlayer0);
resetScore(scoreCurrentPlayer1);

player0Board.classList.add("active");

let status = true;

function checkForWinner(element1, element2) {
  if (Number(element1.textContent) >= 100) {
    element2.classList.toggle("winner");
    status = false;
  }
}
function updateTotalScore(element1, element2) {
  element1.textContent =
    Number(element1.textContent) + Number(element2.textContent);
}
function resetScore(element) {
  element.textContent = 0;
}
function diceRoll() {
  return Math.trunc(Math.random() * 6 + 1);
}
function toggleClasses(element1, element2) {
  element1.classList.toggle("active");
  element2.classList.toggle("active");
}

newGame.addEventListener("click", function () {
  diceDisplay.textContent = "";
  resetScore(scoreTotalPlayer0);
  resetScore(scoreTotalPlayer1);
  resetScore(scoreCurrentPlayer0);
  resetScore(scoreCurrentPlayer1);
  player0Board.classList.add("active");
  player1Board.classList.remove("active");
  status = true;
  if (player0Board.classList.contains("winner")) {
    player0Board.classList.toggle("winner");
  } else if (player1Board.classList.contains("winner")) {
    player1Board.classList.toggle("winner");
  }
});

roll.addEventListener("click", function () {
  if (status === true) {
    if (player0Board.classList.contains("active")) {
      let random = diceRoll();
      diceDisplay.textContent = random;
      if (random === 1) {
        resetScore(scoreCurrentPlayer0);
        toggleClasses(player0Board, player1Board);
      } else if (random !== 1) {
        scoreCurrentPlayer0.textContent =
          Number(scoreCurrentPlayer0.textContent) + random;
      }
    } else if (player1Board.classList.contains("active")) {
      let random = diceRoll();
      diceDisplay.textContent = random;
      if (random === 1) {
        resetScore(scoreCurrentPlayer1);
        toggleClasses(player0Board, player1Board);
      } else if (random !== 1) {
        scoreCurrentPlayer1.textContent =
          Number(scoreCurrentPlayer1.textContent) + random;
      }
    }
  }
});

hold.addEventListener("click", function () {
  if (status === true) {
    if (player0Board.classList.contains("active")) {
      updateTotalScore(scoreTotalPlayer0, scoreCurrentPlayer0);
      toggleClasses(player0Board, player1Board);
      resetScore(scoreCurrentPlayer0);
      checkForWinner(scoreTotalPlayer0, player0Board);
    } else if (player1Board.classList.contains("active")) {
      updateTotalScore(scoreTotalPlayer1, scoreCurrentPlayer1);
      resetScore(scoreCurrentPlayer1);
      toggleClasses(player0Board, player1Board);
      checkForWinner(scoreTotalPlayer1, player1Board);
    }
  }
});

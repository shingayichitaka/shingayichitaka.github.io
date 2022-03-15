"use strict";

const player1 = document.querySelector(".player-1-block-display");
const player2 = document.querySelector(".player-2-block-display");
const roll = document.querySelector(".roll");
const reset = document.querySelector(".reset");
const scoreBoard = document.querySelector(".scoreBoard");

let player1Value = 0;
let player2Value = 0;

const diceRolls = [
  {
    numberValue: 1,
    image: "img/1.png",
  },
  {
    numberValue: 2,
    image: "img/2.png",
  },
  {
    numberValue: 3,
    image: "img/3.png",
  },
  {
    numberValue: 4,
    image: "img/4.png",
  },
  {
    numberValue: 5,
    image: "img/5.png",
  },
  {
    numberValue: 6,
    image: "img/6.png",
  },
];

const randomNumber = () => Math.floor(Math.random() * 6);
let gameStatus = true;

roll.addEventListener("click", function () {
  if (gameStatus) {
    let pointer1 = randomNumber();
    player1.src = diceRolls[pointer1].image;
    player1Value = diceRolls[pointer1].numberValue;

    let pointer2 = randomNumber();
    player2.src = diceRolls[pointer2].image;
    player2Value = diceRolls[pointer2].numberValue;

    if (player1Value > player2Value) {
      scoreBoard.textContent = "🏆 Player 1 Wins! 🏆";
      gameStatus = false;
    } else if (player2Value > player1Value) {
      scoreBoard.textContent = "🏆 Player 2 Wins! 🏆";
      gameStatus = false;
    } else {
      scoreBoard.textContent = "😫 It is a draw! 😫";
      gameStatus = false;
    }
  } else {
    scoreBoard.textContent = "😪 Reset the game 😪";
  }
});

reset.addEventListener("click", function () {
  scoreBoard.textContent = "Roll to see who wins!";
  gameStatus = true;
  player1.src = "";
  player1Value = 0;
  player2.src = "";
  player2Value = 0;
});

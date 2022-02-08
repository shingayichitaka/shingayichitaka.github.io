"use strict";

const preview = document.querySelector(".preview");
const buttonBebas = document.querySelector(".bebas");
const buttonLobster = document.querySelector(".lobster");
const buttonBangers = document.querySelector(".bangers");
const reset = document.querySelector(".reset");

buttonBebas.classList.add("font-bebas");
buttonLobster.classList.add("font-lobster");
buttonBangers.classList.add("font-bangers");

function changeFont(element, font1, font2, font3) {
  element.classList.add(font1);
  element.classList.remove(font2);
  element.classList.remove(font3);
}

buttonBebas.addEventListener("click", function () {
  changeFont(preview, "font-bebas", "font-lobster", "font-bangers");
});
buttonLobster.addEventListener("click", function () {
  changeFont(preview, "font-lobster", "font-bebas", "font-bangers");
});
buttonBangers.addEventListener("click", function () {
  changeFont(preview, "font-bangers", "font-bebas", "font-lobster");
});
reset.addEventListener("click", function () {
  preview.classList.remove("font-bebas");
  preview.classList.remove("font-lobster");
  preview.classList.remove("font-bangers");
});

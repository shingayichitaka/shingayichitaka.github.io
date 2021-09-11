"use strict";

const previewText = document.querySelector("#previewText");
const bebasNeue = document.querySelector(".bebasNeue");
const lobster = document.querySelector(".lobster");
const bangers = document.querySelector(".bangers");
const reset = document.querySelector(".reset");

previewText.value = "";

bebasNeue.addEventListener("click", function () {
  previewText.classList.add("bebasNeue");
  previewText.classList.remove("lobster");
  previewText.classList.remove("bangers");
});
lobster.addEventListener("click", function () {
  previewText.classList.add("lobster");
  previewText.classList.remove("bebasNeue");
  previewText.classList.remove("bangers");
});
bangers.addEventListener("click", function () {
  previewText.classList.add("bangers");
  previewText.classList.remove("lobster");
  previewText.classList.remove("bebasNeue");
});

reset.addEventListener("click", function () {
  previewText.classList.remove("bebasNeue");
  previewText.classList.remove("lobster");
  previewText.classList.remove("bangers");
  previewText.value = "";
});

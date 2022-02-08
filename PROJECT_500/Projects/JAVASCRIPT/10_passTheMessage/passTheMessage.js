"use strict";

const pass = document.querySelector(".pass");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");

submit.addEventListener("click", function () {
  message.textContent = pass.value;
  pass.value = "";
});

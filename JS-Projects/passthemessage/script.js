"use strict";

const button = document.getElementById("button");
const error = document.getElementById("error");
const message = document.getElementById("message");

function passMessage() {
  message.innerHTML = document.getElementById("pass").value;
  document.getElementById("pass").value = "";
  if (message.innerHTML === "") {
    error.innerHTML = "Please enter a value to pass";
  } else if (message.innerHTML !== "") {
    error.innerHTML = "";
  }
}
button.onclick = passMessage;

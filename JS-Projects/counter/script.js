"use strict";

const add = document.getElementById("increment");
const minus = document.getElementById("decrement");
const counter = document.getElementById("counter");

add.onclick = function () {
  counter.innerHTML++;
};
minus.onclick = function () {
  counter.innerHTML--;
};

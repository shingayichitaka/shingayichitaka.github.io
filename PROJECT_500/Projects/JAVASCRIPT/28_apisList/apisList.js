"use strict";

const submit = document.querySelector(".submit");
const parent = document.querySelector(".container");
const body = document.querySelector("body");
const display = document.querySelector(".display");

let counter = 0;
let limiter = 10;

async function apisList(parent, counter, limiter) {
  fetch(`https://api.publicapis.org/entries`)
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      return resp.entries;
    })
    .then((data) => {
      for (counter; counter < limiter; counter++) {
        const div = document.createElement("div");
        const h1 = document.createElement("h3");
        const h2 = document.createElement("p");
        const link = document.createElement("a");
        h1.textContent = data[counter].API;
        h2.textContent = data[counter].Description;
        link.textContent = data[counter].Link;
        link.style.color = "blue";
        link.style.cursor = "pointer";
        link.style.fontSize = "1.8rem";
        link.style.display = "block";
        link.setAttribute("href", `${data[counter].Link}`);
        link.setAttribute("target", "_blank");
        h2.append(link);
        div.append(h1, h2);
        parent.append(div);
        body.style.height = "auto";
        div.classList.add("box");
        counter += 10;
        limiter += 10;
      }
    })
    .catch((e) => {
      console.log("Error");
      console.log(e);
    });
}

let appStatus = true;

submit.addEventListener("click", function () {
  apisList(parent, counter, limiter);
});

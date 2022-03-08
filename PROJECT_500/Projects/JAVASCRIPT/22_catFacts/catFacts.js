"use strict";

const getFactButton = document.querySelector(".getFact");
const parent = document.querySelector(".container");
const reset = document.querySelector(".reset");
const display = document.querySelector(".display");

async function getCatFact(parent) {
  fetch("https://catfact.ninja/fact")
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = resp.fact;
      parent.append(newParagraph);
    })
    .catch((e) => {
      console.log("ERROR!", e);
    });
}

getFactButton.addEventListener("click", async function () {
  const allParagraphs = document.querySelectorAll("p");
  console.log(allParagraphs.length);
  if (allParagraphs.length < 3) {
    await getCatFact(parent);
    console.log("Function was a success");
  } else {
    display.textContent = "Too many facts, please reset";
    display.style.display = "block";
  }
});

reset.addEventListener("click", function () {
  const allParagraphs = document.querySelectorAll("p");
  for (const item of allParagraphs) {
    item.remove();
  }
  display.textContent = "";
});

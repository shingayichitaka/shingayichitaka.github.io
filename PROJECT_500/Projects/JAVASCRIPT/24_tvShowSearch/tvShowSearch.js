"use strict";

const find = document.querySelector(".find");
const parent = document.querySelector(".container");
const inputElement = document.querySelector(".search");
const body = document.querySelector("body");
const reset = document.querySelector(".reset");

find.addEventListener("click", async function (e) {
  e.preventDefault();
  const inputValue = inputElement.value;
  inputElement.value = "";
  const shows = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${inputValue}`
  );
  const showsIterable = shows.data;
  for (const result of showsIterable) {
    const newImg = document.createElement("img");
    newImg.src = result.show.image.medium;
    newImg.classList.add("pic");
    body.style.height = "auto";
    if (newImg.src) {
      parent.append(newImg);
    }
  }
  console.log(showsIterable);
});

reset.addEventListener("click", function (e) {
  e.preventDefault();
  const allImgs = document.querySelectorAll("img");
  console.log(allImgs);
  for (const item of allImgs) {
    item.remove();
  }
  body.style.height = "100vh";
  inputElement.value = "";
});

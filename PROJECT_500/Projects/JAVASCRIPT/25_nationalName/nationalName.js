"use strict";

const formInput = document.querySelector("#name");
const check = document.querySelector(".check");
const reset = document.querySelector(".reset");
const banner = document.querySelector(".banner");

check.addEventListener("click", async function (e) {
  e.preventDefault();
  const nameToCheck = formInput.value;
  const countries = await axios.get(
    `https://api.nationalize.io?name=${nameToCheck}`
  );
  const countriesArray = countries.data.country;
  let buildString = `The name "${nameToCheck}" is likely from:`;
  if (countriesArray.length === 0) {
    buildString = `Not sure where the name ${nameToCheck} is from 😢`;
  } else {
    for (const item of countriesArray) {
      buildString += ` ${item.country_id}`;
    }
  }
  formInput.value = "";
  banner.textContent = buildString;
  banner.classList.add("banner-style");
});

reset.addEventListener("click", function (e) {
  e.preventDefault();
  banner.textContent = "";
  formInput.value = "";
  banner.classList.remove("banner-style");
});

"use strict";

const buttonToClick = document.querySelector(".buttonToClick");
const reset = document.querySelector(".reset");
const parent = document.querySelector(".container");
const banner = document.querySelector(".h2-normal");
const randomColor = function () {
  return `rgb(${Math.random() * 255},${Math.random() * 255},${
    Math.random() * 255
  })`;
};

async function getStuff(parent) {
  fetch("https://www.boredapi.com/api/activity")
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      const activityData = {
        activity: resp.activity,
        category: resp.type,
        numOfPeople: resp.participants,
      };
      return activityData;
    })

    .then((activityData) => {
      const card = document.createElement("div");
      const headingCategory = document.createElement("h2");
      const headingNumOfPeople = document.createElement("h3");
      const bodyActivity = document.createElement("p");
      headingCategory.textContent = `Category: ${activityData.category}`;
      headingNumOfPeople.textContent = `Number of People: ${activityData.numOfPeople}`;
      bodyActivity.textContent = `Activity: ${activityData.activity}`;
      card.append(headingCategory, headingNumOfPeople, bodyActivity);
      card.classList.add("block");
      card.style.backgroundColor = randomColor();
      parent.append(card);
    });
}

buttonToClick.addEventListener("click", function () {
  const allSubDivs = document.querySelectorAll(".container > div");
  if (allSubDivs.length < 3) {
    getStuff(parent);
  } else {
    banner.textContent = "Too many activities, please reset";
  }
});

reset.addEventListener("click", function () {
  const allSubDivs = document.querySelectorAll(".container > div");
  for (const item of allSubDivs) {
    item.remove();
  }
  banner.textContent = "Click the button to get an activity!";
});

"use strict";

const click = document.querySelector(".click");
const reset = document.querySelector(".reset");
const parent = document.querySelector(".container");
const body = document.querySelector("body");
const main = document.querySelector("main");

click.addEventListener("click", async function () {
  const person = await axios.get("https://randomuser.me/api/");
  const personBlock = person.data.results[0];
  const personObject = {
    pic: `${personBlock.picture.large}`,
    name: `${personBlock.name.title} ${personBlock.name.first} ${personBlock.name.last}`,
    address: `${personBlock.location.city}, ${personBlock.location.state}, ${personBlock.location.country}`,
    email: `${personBlock.email}`,
    phone: `${personBlock.phone}`,
  };
  const card = document.createElement("div");
  const pic = document.createElement("img");
  pic.src = personObject.pic;
  const personName = document.createElement("p");
  personName.textContent = personObject.name;
  const address = document.createElement("p");
  address.textContent = personObject.address;
  const email = document.createElement("p");
  email.textContent = personObject.email;
  const phone = document.createElement("p");
  phone.textContent = personObject.phone;
  card.append(pic, personName, address, email, phone);
  card.classList.add("profile");
  parent.append(card);
  body.style.height = "auto";
  main.style.marginTop = "1rem";
});

reset.addEventListener("click", function () {
  const allDivs = document.querySelectorAll(".container > div");
  for (const item of allDivs) {
    item.remove();
  }

  body.style.height = "100vh";
  main.style.marginTop = "0";
});

"use strict";

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const profilePicture = document.querySelector(".profilePicture");
const personName = document.querySelector(".name");
const stars = document.querySelector(".stars");
const testimony = document.querySelector(".testimony");

const reviews = [
  {
    name: "John",
    profilePicture: "img/1.jpg",
    stars: "⭐⭐⭐⭐⭐",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur assumenda laudantium eos molestiae non earum illum recusandae officia sit.",
  },
  {
    name: "Cindy",
    profilePicture: "img/2.jpg",
    stars: "⭐⭐⭐⭐",
    testimony:
      "Porttitor potenti. Cum. Luctus pulvinar commodo suscipit blandit elementum ad proin imperdiet. Ullamcorper. Nulla nullam inceptos integer porta.",
  },
  {
    name: "Judith",
    profilePicture: "img/3.jpg",
    stars: "⭐",
    testimony:
      "Parturient. Orci porttitor venenatis, fringilla molestie elit. Habitasse nam sollicitudin venenatis amet luctus ultrices dapibus, lacus dui platea.",
  },
  {
    name: "Anne",
    profilePicture: "img/4.jpg",
    stars: "⭐⭐",
    testimony:
      "Scelerisque viverra ligula cum inceptos facilisis. Sodales ad viverra Ligula rutrum dis. Vel et. Fusce. Dictum ultrices elementum fusce sem.",
  },
  {
    name: "Rebecca",
    profilePicture: "img/5.jpg",
    stars: "⭐⭐⭐⭐⭐",
    testimony:
      "Lorem primis mi nullam bibendum bibendum, erat elementum ipsum tortor luctus aenean auctor pede Tincidunt eros convallis eu vehicula orci.",
  },
  {
    name: "Amanda",
    profilePicture: "img/6.jpg",
    stars: "⭐⭐⭐",
    testimony:
      "Mi etiam venenatis, inceptos nec rutrum consequat malesuada rhoncus tellus. Aliquam dictumst urna sodales facilisi neque magnis.",
  },
];

let pointer = 0;

function changeTestimony(pointer) {
  personName.textContent = reviews[pointer].name;
  profilePicture.setAttribute("src", `${reviews[pointer].profilePicture}`);
  stars.textContent = reviews[pointer].stars;
  testimony.textContent = reviews[pointer].testimony;
}
changeTestimony(pointer);

next.addEventListener("click", function () {
  pointer++;
  if (pointer > reviews.length - 1) {
    pointer = 0;
  }
  changeTestimony(pointer);
});

previous.addEventListener("click", function () {
  pointer--;
  if (pointer < 0) {
    pointer = reviews.length - 1;
  }
  changeTestimony(pointer);
});

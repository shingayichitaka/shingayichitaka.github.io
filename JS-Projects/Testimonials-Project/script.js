"use strict";

const testimonials = [
  {
    firstName: "Amanda",
    fullStars: "⭐⭐⭐",
    dummyText:
      "Mi etiam venenatis, inceptos nec rutrum consequat malesuada rhoncus tellus. Aliquam dictumst urna sodales facilisi neque magnis.",
    picture: "img/2.jpg",
  },
  {
    firstName: "John",
    fullStars: "⭐⭐⭐⭐⭐",
    dummyText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur assumenda laudantium eos molestiae non earum illum recusandae officia sit.",
    picture: "img/1.jpg",
  },
  {
    firstName: "Cindy",
    fullStars: "⭐⭐⭐⭐",
    dummyText:
      "Porttitor potenti. Cum. Luctus pulvinar commodo suscipit blandit elementum ad proin imperdiet. Ullamcorper. Nulla nullam inceptos integer porta.",
    picture: "img/3.jpg",
  },
  {
    firstName: "Judith",
    fullStars: "⭐",
    dummyText:
      "Parturient. Orci porttitor venenatis, fringilla molestie elit. Habitasse nam sollicitudin venenatis amet luctus ultrices dapibus, lacus dui platea.",
    picture: "img/4.jpg",
  },
  {
    firstName: "Anne",
    fullStars: "⭐⭐",
    dummyText:
      "Scelerisque viverra ligula cum inceptos facilisis. Sodales ad viverra Ligula rutrum dis. Vel et. Fusce. Dictum ultrices elementum fusce sem.",
    picture: "img/5.jpg",
  },
  {
    firstName: "Rebecca",
    fullStars: "⭐⭐⭐⭐⭐",
    dummyText:
      "Lorem primis mi nullam bibendum bibendum, erat elementum ipsum tortor luctus aenean auctor pede Tincidunt eros convallis eu vehicula orci.",
    picture: "img/6.jpg",
  },
];
let index = 0;
const nextButton = document.querySelector(".next");
const backButton = document.querySelector(".back");

nextButton.addEventListener("click", function () {
  index++;
  if (index === testimonials.length) index = 0;
  document.querySelector(".name").textContent = testimonials[index].firstName;
  document.querySelector(".stars").textContent = testimonials[index].fullStars;
  document.querySelector(".text").textContent = testimonials[index].dummyText;
  document.querySelector(".img").src = `${testimonials[index].picture}`;
});
backButton.addEventListener("click", function () {
  index--;
  if (index < 0) index = testimonials.length - 1;
  document.querySelector(".name").textContent = testimonials[index].firstName;
  document.querySelector(".stars").textContent = testimonials[index].fullStars;
  document.querySelector(".text").textContent = testimonials[index].dummyText;
  document.querySelector(".img").src = `${testimonials[index].picture}`;
});

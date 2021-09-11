"use strict";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const generate = document.querySelector(".generate");

const quotesCollection = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    authorName: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    authorName: "Walt Disney",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    authorName: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    authorName: "Eleanor Roosevelt",
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    authorName: "Oprah Winfrey",
  },
  {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    authorName: "James Cameron",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    authorName: "Ralph Waldo Emerson",
  },
  {
    text: "Whoever is happy will make others happy too. ",
    authorName: "Anne Frank",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light. ",
    authorName: "Aristotle",
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    authorName: "Benjamin Franklin",
  },
];

quote.textContent = quotesCollection[0].text;
author.textContent = quotesCollection[0].authorName;

function generateQuote() {
  const randomNumber = Math.trunc(Math.random() * quotesCollection.length);
  quote.textContent = quotesCollection[randomNumber].text;
  author.textContent = quotesCollection[randomNumber].authorName;
}

generate.addEventListener("click", generateQuote);

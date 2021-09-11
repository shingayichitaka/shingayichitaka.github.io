const quotesCollection = [
  {
    authorName: "John Keats",
    quoteText:
      "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
  },
  {
    authorName: "Ernest Hemingway",
    quoteText:
      "But man is not made for defeat. A man can be destroyed but not defeated.",
  },
  {
    authorName: "Franklin D. Roosevelt",
    quoteText:
      "When you reach the end of your rope, tie a knot in it and hang on.",
  },
  {
    authorName: "Heraclitus",
    quoteText: "There is nothing permanent except change.",
  },
  {
    authorName: "Indira Gandhi",
    quoteText: "You cannot shake hands with a clenched fist.",
  },
  {
    authorName: "A. P. J. Abdul Kalam",
    quoteText:
      "Let us sacrifice our today so that our children can have a better tomorrow.",
  },
];
let pointer = 0;
const button = document.getElementById("b1");
const author = document.getElementById("author");
const quote = document.getElementById("quote");

button.onclick = function generateQuote() {
  author.innerHTML = quotesCollection[pointer].authorName;
  quote.innerHTML = quotesCollection[pointer].quoteText;
  pointer++;
  if (pointer > quotesCollection.length - 1) {
    pointer = 0;
  }
};

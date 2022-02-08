"use strict";

const richPeople = [
  {
    name: "Jeff Bezos",
    img: "img/bezos.jpg",
    netWorth: 177,
    quote:
      "I didn't think I'd regret trying and failing. And I suspected I would always be haunted by a decision to not try at all.",
    bio: "Jeff Bezos founded e-commerce giant Amazon in 1994 out of his garage in Seattle. He stepped down as CEO to become executive chairman on July 5, 2021.",
  },
  {
    name: "Elon Musk",
    netWorth: 151,
    img: "img/musk.jpg",
    quote:
      "I operate on the physics approach to analysis. You boil things down to the first principles or fundamental truths in a particular area and then you reason up from there.",
    bio: "Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla -- and in space, via rocket producer SpaceX.",
  },
  {
    name: "Bernard Arnault",
    netWorth: 150,
    img: "img/arnault.jpg",
    quote:
      "I see myself as an ambassador of French heritage and French culture. What we create is emblematic. It's linked to Versailles, to Marie Antoinette.",
    bio: "One of the world's ultimate taste-makers, Bernard Arnault oversees an empire of 70 brands including Louis Vuitton and Sephora.",
  },
  {
    name: "Bill Gates",
    netWorth: 124,
    img: "img/gates.jpg",
    quote:
      "Money has no utility to me beyond a certain point. Its utility is entirely in building an organization and getting the resources out to the poorest in the world.",
    bio: "Bill Gates and Melinda French Gates, now divorcing, chair the Bill & Melinda Gates Foundation, the world's largest private charitable foundation.",
  },
  {
    name: "Mark Zuckerberg",
    netWorth: 97,
    img: "img/zuc.jpg",
    quote:
      "We may not have the power to create the world we want immediately, but we can all start working on the long term today.",
    bio: "Facebook, the social network Zuckerberg runs, has been an information hub during the pandemic, but has come under scrutiny for spreading vaccine misinformation.",
  },
  {
    name: "Warren Buffet",
    img: "img/buffet.jpg",
    netWorth: 96,
    quote:
      "Rational people don't risk what they have and need for what they don't have and don't need.",
    bio: "Known as the 'Oracle of Omaha,' Warren Buffett is one of the most successful investors of all time.",
  },
  {
    name: "Larry Ellison",
    img: "img/ellison.jpg",
    netWorth: 93,
    quote:
      "When people start telling you that you're crazy, you just might be on to the most important innovation in your life.",
    bio: "Larry Ellison is chairman, chief technology officer and cofounder of software giant Oracle, of which he owns about 35%.",
  },
  {
    name: "Larry Page",
    img: "img/page.jpg",
    netWorth: 91.5,
    quote: "You never lose a dream; it just incubates as a hobby.",
    bio: "Larry Page stepped down as CEO of Alphabet, the parent of Google, in December 2019 but remains a board member and a controlling shareholder.",
  },
  {
    name: "Sergey Brin",
    img: "img/brin.jpg",
    netWorth: 89,
    quote:
      "Obviously everyone wants to be successful, but I want to be looked back on as being very innovative, very trusted and ethical and ultimately making a big difference in the world.",
    bio: "Sergey Brin stepped down as president of Alphabet, parent company of Google, in December 2019 but remains a controller shareholder and a board member.",
  },
  {
    name: "Mukesh Ambani",
    img: "img/ambani.jpg",
    netWorth: 84.5,
    quote:
      "Anything and everything that can go digital is going digital. India cannot afford to be left behind.",
    bio: "Mukesh Ambani chairs and runs $74 billion (revenue) Reliance Industries, which has interests in petrochemicals, oil and gas, telecom and retail.",
  },
];

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const billionaire = document.querySelector(".billionaire");
const picture = document.querySelector(".picture");
const netWorth = document.querySelector(".netWorth");
const quote = document.querySelector(".quote");
const bio = document.querySelector(".bio");

let pointer = 0;

function changePerson(pointer) {
  billionaire.textContent = richPeople[pointer].name;
  picture.setAttribute("src", `${richPeople[pointer].img}`);
  netWorth.textContent = `$${richPeople[pointer].netWorth}B`;
  quote.textContent = richPeople[pointer].quote;
  bio.textContent = richPeople[pointer].bio;
}

changePerson(pointer);

next.addEventListener("click", function () {
  pointer++;
  if (pointer > richPeople.length - 1) {
    pointer = 0;
  }
  changePerson(pointer);
});
previous.addEventListener("click", function () {
  pointer--;
  if (pointer < 0) {
    pointer = richPeople.length - 1;
  }
  changePerson(pointer);
});

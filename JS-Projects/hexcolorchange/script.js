const span = document.getElementById("display");
const button = document.getElementById("button1");
const body = document.childNodes[0].nextSibling;
let pointer = 0;
const colors = [
  "#bf1363",
  " #deeeea",
  "#b6c9f0",
  "#ffeda3",
  "#39a9cb",
  "#2940d3",
  "#f6b8b8",
  "#ac66cc",
  "#fb9300",
  "#f54748",
];
button.onclick = function changeColor() {
  body.style.backgroundColor = colors[pointer];
  pointer++;
  if (pointer > colors.length - 1) {
    pointer = 0;
  }
  span.innerHTML = colors[pointer];
};

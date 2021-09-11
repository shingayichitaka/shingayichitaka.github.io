"use strict";

let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let percentage = document.querySelector("#percentage");
let total = document.querySelector("#total");
let person = document.querySelector("#persons");
const calc = document.querySelector(".calc");
const reset = document.querySelector(".reset");

console.log(bill);
console.log(typeof bill);

function checkField(field1, field2, field3) {
  if (field1.value === "") {
    field1.value = "Please enter a valid number";
    field1.style.color = "rgb(243, 92, 92)";
  }
  if (field2.value === "") {
    field2.value = "Please enter a valid number";
    field2.style.color = "rgb(243, 92, 92)";
  }
  if (field3.value === "") {
    field3.value = "Please enter a valid number";
    field3.style.color = "rgb(243, 92, 92)";
  }
}
function clearField(field1, field2, field3, field4, field5) {
  field1.value = "";
  field2.value = "";
  field3.value = "";
  field4.value = "";
  field5.value = "";
}
function changeColor(field1, field2, field3) {
  field1.style.color = "rgb(243, 92, 92)";
  field2.style.color = "rgb(243, 92, 92)";
  field3.style.color = "rgb(243, 92, 92)";
}

calc.addEventListener("click", function () {
  checkField(bill, people, percentage);
  total.value =
    (Number(percentage.value) / 100) * Number(bill.value) + Number(bill.value);
  person.value = Number(total.value) / Math.trunc(people.value);
  if (total.value === "NaN" || total.value === "NaN") {
    total.value = "🤷‍♂️";
    person.value = "🤷‍♂️";
  }
});

reset.addEventListener("click", function () {
  clearField(bill, people, percentage, total, person);
  clearField(bill, people, percentage);
});

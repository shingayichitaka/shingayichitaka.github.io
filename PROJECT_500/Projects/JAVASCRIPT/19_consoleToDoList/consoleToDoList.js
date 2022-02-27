"use strict";

const newItem = document.querySelector(".new");
const list = document.querySelector(".list");
const deleteItem = document.querySelector(".delete");
const clear = document.querySelector(".clear");

let listArray = [];

newItem.addEventListener("click", function () {
  const itemToStorage = prompt("Enter To-Do Item");

  listArray.push(itemToStorage);
});

list.addEventListener("click", function () {
  for (const item of listArray) {
    console.log(item);
  }
});

deleteItem.addEventListener("click", function () {
  const itemToDelete = prompt(`Which item would you like to delete?
    ${listArray}
    `);
  const pointer = listArray.indexOf(itemToDelete);
  console.log(listArray);
  listArray.splice(pointer, 1);
  console.log(listArray);
});

clear.addEventListener("click", function () {
  listArray = [];
  console.log(listArray);
});

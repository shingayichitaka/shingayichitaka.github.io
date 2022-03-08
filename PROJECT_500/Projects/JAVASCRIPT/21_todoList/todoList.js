"use strict";

const parent = document.querySelector(".container-toDoItems");
const addButton = document.querySelector(".add");
const itemContent = document.querySelector("#addedItem");
const display = document.querySelector(".display");

function createListItem(parent, content) {
  const block = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-style");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  const newListBlock = document.createElement("p");
  newListBlock.textContent = content;
  newListBlock.classList.add("para-style");
  newListBlock.append(deleteButton);
  parent.append(newListBlock);
}

addButton.addEventListener("click", function () {
  if (itemContent.value === "") {
    display.textContent = "Please enter something in the field";
  } else {
    display.textContent = "";
    const itemContentValue = itemContent.value;
    createListItem(parent, itemContentValue);
    itemContent.value = "";
  }
  const allDeleteButtons = document.querySelectorAll(
    ".container-toDoItems > p > button"
  );
  const allParagraphs = document.querySelectorAll(".container-toDoItems > p");
  for (let i = 0; i < allParagraphs.length; i++) {
    for (let j = 0; j < allDeleteButtons.length; j++) {
      allDeleteButtons[j].addEventListener("click", function (e) {
        e.stopPropagation();
        const currentButton = allDeleteButtons[j];
        const parentDelete = currentButton.parentNode;
        parentDelete.remove();
      });
    }
  }
});

// ADJUST THE PROFJECT FOR A MAXIMUM NUMBER OF CHARACTERS ALLOWED FOR A TODO LIST

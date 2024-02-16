"use strict";

const shareBtn = document.querySelector(".share-btn");
const shareContainer = document.querySelector(".share-container");

shareBtn.addEventListener("click", () => {
   shareBtn.classList.toggle("selected");
   shareContainer.classList.toggle("selected");
});

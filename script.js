document.addEventListener("DOMContentLoaded", () => {
  const emojiButtons = document.querySelectorAll(".emoji-button");
  const emojiContainer = document.querySelector(".emoji-container");

  emojiButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const emoji = button.getAttribute("data-emoji");
      const emojiPopup = document.createElement("div");
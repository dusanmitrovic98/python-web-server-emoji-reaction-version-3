document.addEventListener("DOMContentLoaded", () => {
  const emojiButtons = document.querySelectorAll(".emoji-button");
  const emojiContainer = document.querySelector(".emoji-container");

  emojiButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const emoji = button.getAttribute("data-emoji");
      const emojiPopup = document.createElement("div");
      emojiPopup.className = "emoji-popup";
      emojiPopup.textContent = emoji;
      emojiContainer.appendChild(emojiPopup);

      setTimeout(() => {
        emojiPopup.style.animation = "emoji-pop-up 2s forwards";
        setTimeout(() => {

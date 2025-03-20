import { getScore, getCoins, updateStats } from "./logic.js";

export function setupStoreModal(getPoints, getCoins, updateStats) {
  const storeModal = document.getElementById("storeModal");
  const closeStoreModal = document.getElementById("closeStoreModal");
  const openStoreButton = document.getElementById("store");

  console.log("storeModal:", storeModal);
  console.log("closeStoreModal:", closeStoreModal);
  console.log("openStoreButton:", openStoreButton);

  if (!storeModal || !closeStoreModal || !openStoreButton) {
    console.error("Store modal elements are missing from the DOM!");
    return;
  }

  // Open store modal
  openStoreButton.addEventListener("click", () => {
    document.getElementById("storePoints").textContent = getScore();
    document.getElementById("storeCoins").textContent = getCoins();
    storeModal.style.display = "block";
  });

  // Close store modal
  closeStoreModal.addEventListener("click", () => {
    storeModal.style.display = "none";
  });

  // Handle buying items
  const buyButtons = document.querySelectorAll(".buy-button");
  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.getAttribute("data-item");

      if (item === "bomb") {
        if (getCoins() >= 30) {
          coins -= 30; // Update coins
          alert("Bomb purchased!");
        } else {
          alert("Not enough coins!");
        }
      } else if (item === "release") {
        if (getCoins() >= 40) {
          coins -= 40;
          alert("Release purchased!");
        } else {
          alert("Not enough coins!");
        }
      } else if (item === "exchange") {
        if (getScore() >= 1000) {
          score -= 1000;
          coins += 5;
          alert("Points exchanged for 5 coins!");
        } else {
          alert("Not enough points!");
        }
      }

      // Update points and coins in UI
      updateStats();
    });
  });
}

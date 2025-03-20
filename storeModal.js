import { score, coins, updateStats } from "./logic.js";

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
    document.getElementById("storePoints").textContent = getPoints();
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

      if (item === "bomb" && getCoins() >= 30) {
        updateCoins(getCoins() - 30);
        alert("Bomb purchased!");
      } else if (item === "release" && getCoins() >= 40) {
        updateCoins(getCoins() - 40);
        alert("Release purchased!");
      } else if (item === "exchange" && getPoints() >= 1000) {
        updatePoints(getPoints() - 1000);
        updateCoins(getCoins() + 5);
        alert("Points exchanged for 5 coins!");
      } else {
        alert("Not enough points or coins!");
      }

      // Update points and coins in UI
      updateStats();
    });
  });
}

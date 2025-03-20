// === MODAL LOGIC ===
export function setupModals() {
  const gameRulesButton = document.getElementById("gameRules");
  const gameRulesModal = document.getElementById("gameRulesModal");
  const closeModal = document.getElementById("closeModal");

  // Show modal on button click
  gameRulesButton.addEventListener("click", () => {
    gameRulesModal.style.display = "block";
  });

  // Close modal on close button
  closeModal.addEventListener("click", () => {
    gameRulesModal.style.display = "none";
  });

  // Close modal when clicking outside of content
  window.addEventListener("click", (event) => {
    if (event.target === gameRulesModal) {
      gameRulesModal.style.display = "none";
    }
  });
}

import { getCoins, getScore, getLevel } from "./logic.js";

export function setupAchievementsModal() {
  const modal = document.getElementById("achievementsModal");
  const closeModal = document.getElementById("closeAchievementsModal");
  const openAchievementsButton = document.getElementById("achievements");

  if (!modal || !closeModal || !openAchievementsButton) {
    console.error("Achievements modal elements are missing from the DOM!");
    return;
  }

  // Otwieranie modala
  openAchievementsButton.addEventListener("click", () => {
    updateAchievements();
    modal.style.display = "block";
  });

  // Zamknięcie modala
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Funkcja aktualizująca osiągnięcia na bieżąco
  function updateAchievements() {
    const level = getLevel();
    const coins = getCoins();

    // Level 5 achievement
    const level5Achievement = document.getElementById("achievement-level-5");
    if (level >= 5) {
      level5Achievement.classList.add("unlocked");
      level5Achievement.classList.remove("locked");
    } else {
      level5Achievement.classList.remove("unlocked");
      level5Achievement.classList.add("locked");
    }

    // 10 Coins achievement
    const coins10Achievement = document.getElementById("achievement-coins-10");
    if (coins >= 10) {
      coins10Achievement.classList.add("unlocked");
      coins10Achievement.classList.remove("locked");
    } else {
      coins10Achievement.classList.remove("unlocked");
      coins10Achievement.classList.add("locked");
    }

    // Level 10 achievement
    const level10Achievement = document.getElementById("achievement-level-10");
    if (level >= 10) {
      level10Achievement.classList.add("unlocked");
      level10Achievement.classList.remove("locked");
    } else {
      level10Achievement.classList.remove("unlocked");
      level10Achievement.classList.add("locked");
    }

    // 50 Coins achievement
    const coins50Achievement = document.getElementById("achievement-coins-50");
    if (coins >= 50) {
      coins50Achievement.classList.add("unlocked");
      coins50Achievement.classList.remove("locked");
    } else {
      coins50Achievement.classList.remove("unlocked");
      coins50Achievement.classList.add("locked");
    }
  }

  // Aktualizacja osiągnięć na bieżąco
  window.addEventListener("updateGameState", updateAchievements);
}

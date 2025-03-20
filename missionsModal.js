import { getLevel, updateStats, addCoins, getCoins } from "./logic.js";

// Sprawdź status misji i aktualizuj UI
function updateMissions() {
  const level = getLevel();
  const timePlayedValue = timePlayed(); // Pobieranie aktualnego czasu gry

  console.log("Sprawdzanie misji...");
  console.log("Aktualny poziom:", level);
  console.log("Czas gry:", timePlayedValue, "sekund");

  checkMission("mission-level-3", level >= 3, 10);
  checkMission("mission-level-5", level >= 5, 10);
  checkMission("mission-play-1min", timePlayedValue >= 60, 50);
}

// Funkcja do ustawienia eventów dla modala
export function setupMissionsModal() {
  const missionsModal = document.getElementById("missionsModal");
  const closeMissionsModal = document.getElementById("closeMissionsModal");
  const openMissionsButton = document.getElementById("missions");

  if (!missionsModal || !closeMissionsModal || !openMissionsButton) {
    console.error("❌ Brakuje elementów DOM dla misji!");
    return;
  }

  // Otwórz modal misji
  openMissionsButton.addEventListener("click", () => {
    console.log("✅ Otwieranie modala misji");
    updateMissions();
    missionsModal.style.display = "block";
  });

  // Zamknij modal misji
  closeMissionsModal.addEventListener("click", () => {
    missionsModal.style.display = "none";
  });

  // Sprawdzanie misji co sekundę
  setInterval(updateMissions, 1000);
}

// Funkcja do sprawdzania, czy misja została wykonana
function checkMission(missionId, condition, reward) {
  const missionElement = document.getElementById(missionId);

  if (!missionElement) {
    console.error(`❌ Element misji ${missionId} nie został znaleziony!`);
    return;
  }

  if (condition && !missionElement.classList.contains("completed")) {
    console.log(`🏆 Misja ${missionId} ukończona! Dodano ${reward} monet.`);

    missionElement.classList.add("completed");
    missionElement.innerHTML += " ✅ Task Complete!";

    addCoins(reward); // Dodanie monet przez `logic.js`
    updateStats(); // Aktualizacja widoku UI
  }
}

// Śledzenie czasu gry od startu
let startTime = Date.now();
function timePlayed() {
  return Math.floor((Date.now() - startTime) / 1000);
}

// Uruchomienie funkcji po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  setupMissionsModal();
  updateMissions(); // Sprawdź misje od razu po załadowaniu gry
});

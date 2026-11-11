const WIDTH = 8;
const SAVE_KEY = "colorClashAdventureV2";
const COLORS = {
  rose: { hex: "#ff5f8f", icon: "🌸" },
  orange: { hex: "#ff984f", icon: "🍊" },
  yellow: { hex: "#ffd34e", icon: "⭐" },
  green: { hex: "#55d985", icon: "🍀" },
  blue: { hex: "#49c8e8", icon: "💧" },
  purple: { hex: "#9d70f5", icon: "🔮" },
};
const COLOR_KEYS = Object.keys(COLORS);

const TEXT = {
  en: {
    heroEyebrow: "A colorful puzzle adventure", heroTitleA: "Match.", heroTitleB: "Create.", heroTitleC: "Conquer.",
    heroText: "Build spectacular combinations, recover lost artifacts and unlock new worlds.", continueGame: "Continue adventure", levelMap: "Level map",
    dailyGift: "Daily gift", dailyGiftReady: "Your reward is ready!", dailyGiftTaken: "Come back tomorrow", collect: "Collect", collected: "Collected",
    missions: "Missions", achievements: "Achievements", shop: "Power shop", shopCaption: "Boost your game", collection: "Artifacts", campaign: "Campaign", chooseLevel: "Choose a level",
    level: "Level", moves: "Moves", goals: "Goals", score: "Score", combo: "Combo", settings: "Settings", language: "Language", music: "Music", sounds: "Sound effects", reducedMotion: "Reduced animations",
    rules: "How to play", resume: "Resume", restart: "Restart level", leave: "Leave to map", paused: "Game paused", close: "Close", buy: "Buy", owned: "Owned", reward: "Reward", claim: "Claim",
    world1: "Candy Coast", world2: "Crystal Grove", world3: "Aurora Summit", worldProgress: "{done}/5 levels complete",
    levelName1: "First Spark", levelName2: "Rose Rush", levelName3: "Golden Current", levelName4: "Frozen Steps", levelName5: "Lost Compass",
    levelName6: "Crystal Trail", levelName7: "Coin Cavern", levelName8: "Twin Flames", levelName9: "Ice Garden", levelName10: "Moon Totem",
    levelName11: "Aurora Gate", levelName12: "Color Storm", levelName13: "Treasury", levelName14: "Star Forge", levelName15: "Final Clash",
    goalScore: "Reach {n} points", goalColor: "Collect {n} {color} gems", goalBlockers: "Break {n} ice blocks", goalArtifacts: "Create {n} artifact shards", goalSpecials: "Use {n} special gems", goalCoins: "Collect {n} board coins",
    colorRose: "rose", colorOrange: "orange", colorYellow: "yellow", colorGreen: "green", colorBlue: "blue", colorPurple: "purple",
    hammer: "Crystal hammer", bomb: "Color bomb", rainbow: "Rainbow wipe", shuffle: "Shuffle", hammerDesc: "Break one selected tile or ice block.", bombDesc: "Clear a large 5×5 area around your target.", rainbowDesc: "Remove every gem matching the selected color.", shuffleDesc: "Mix the board without using a move.",
    notEnoughCoins: "Not enough coins", purchased: "Added to your inventory!", selectTarget: "Select a tile on the board", boardShuffled: "Board shuffled", noMoves: "No moves — reshuffling!", great: "Great!", amazing: "Amazing!", artifactFound: "Artifact shard!", coinFound: "+1 coin",
    victory: "Level complete!", defeat: "Out of moves", victoryText: "Beautiful work — the path ahead is open.", defeatText: "So close! Try a different strategy.", nextLevel: "Next level", tryAgain: "Try again", map: "Map", stars: "Stars", xp: "XP", coins: "Coins",
    missionCaption: "Complete today's goals and claim your rewards.", missionMatch: "Match 40 gems", missionCoins: "Collect 8 coins", missionSpecial: "Create 3 special gems", achievementCaption: "Permanent milestones from your whole adventure.", artifactCaption: "Complete each world's final level to restore its artifact.", shopIntro: "Purchased powers stay in your inventory for later levels.",
    achFirst: "First victory", achFive: "Pathfinder", achAll: "Color legend", achCoins: "Treasure hunter", achMatch: "Gem breaker", achSpecial: "Power maker", achCombo: "Chain master", achStars: "Star collector", achArtifact: "Relic keeper", achShop: "Prepared", achIce: "Ice breaker", achRich: "Royal treasury",
    locked: "Locked", unlocked: "Unlocked", completeWorld: "Complete level {n}",
    rule1Title: "Match 3", rule1Text: "Swap adjacent gems to make a row or column of at least three.", rule2Title: "Make powers", rule2Text: "Four creates a rocket, five a rainbow, and T/L shapes create a bomb.", rule3Title: "Combine", rule3Text: "Swap two powers together for a much bigger effect.", rule4Title: "Artifacts", rule4Text: "A line of five also awards an artifact shard on special levels.", rule5Title: "Plan moves", rule5Text: "Only successful swaps use a move. Finish every goal before moves run out.", rule6Title: "Keep powers", rule6Text: "Buy boosters with coins and save them for any later level.",
    resetProgress: "Reset progress", resetConfirm: "Reset all saved progress?", newUnlock: "New achievement: {name}", dailyClaimed: "Daily gift: 25 coins and 1 hammer!", missionClaimed: "Mission reward collected!", levelLocked: "Complete the previous level first.",
  },
  pl: {
    heroEyebrow: "Kolorowa przygoda logiczna", heroTitleA: "Łącz.", heroTitleB: "Twórz.", heroTitleC: "Zwyciężaj.",
    heroText: "Buduj efektowne kombinacje, odzyskuj zaginione artefakty i odblokowuj nowe krainy.", continueGame: "Kontynuuj przygodę", levelMap: "Mapa poziomów",
    dailyGift: "Codzienny prezent", dailyGiftReady: "Nagroda jest gotowa!", dailyGiftTaken: "Wróć jutro", collect: "Odbierz", collected: "Odebrano",
    missions: "Misje", achievements: "Osiągnięcia", shop: "Sklep mocy", shopCaption: "Wzmocnij swoją grę", collection: "Artefakty", campaign: "Kampania", chooseLevel: "Wybierz poziom",
    level: "Poziom", moves: "Ruchy", goals: "Cele", score: "Wynik", combo: "Seria", settings: "Ustawienia", language: "Język", music: "Muzyka", sounds: "Efekty dźwiękowe", reducedMotion: "Ograniczone animacje",
    rules: "Jak grać", resume: "Wznów", restart: "Zacznij poziom od nowa", leave: "Wyjdź do mapy", paused: "Gra zatrzymana", close: "Zamknij", buy: "Kup", owned: "Posiadasz", reward: "Nagroda", claim: "Odbierz",
    world1: "Cukierkowe Wybrzeże", world2: "Kryształowy Gaj", world3: "Szczyt Zorzy", worldProgress: "Ukończono {done}/5 poziomów",
    levelName1: "Pierwsza Iskra", levelName2: "Różany Pęd", levelName3: "Złoty Prąd", levelName4: "Mroźne Kroki", levelName5: "Zaginiony Kompas",
    levelName6: "Kryształowy Szlak", levelName7: "Jaskinia Monet", levelName8: "Bliźniaczy Płomień", levelName9: "Lodowy Ogród", levelName10: "Księżycowy Totem",
    levelName11: "Brama Zorzy", levelName12: "Burza Kolorów", levelName13: "Skarbiec", levelName14: "Kuźnia Gwiazd", levelName15: "Finałowe Starcie",
    goalScore: "Zdobądź {n} punktów", goalColor: "Zbierz {n} klejnotów: {color}", goalBlockers: "Rozbij {n} bloków lodu", goalArtifacts: "Zdobądź {n} odłamki artefaktu", goalSpecials: "Użyj {n} specjalnych klejnotów", goalCoins: "Zbierz {n} monet z planszy",
    colorRose: "różowych", colorOrange: "pomarańczowych", colorYellow: "żółtych", colorGreen: "zielonych", colorBlue: "niebieskich", colorPurple: "fioletowych",
    hammer: "Kryształowy młot", bomb: "Kolorowa bomba", rainbow: "Tęczowe czyszczenie", shuffle: "Przetasowanie", hammerDesc: "Rozbij jeden wybrany kafelek lub blok lodu.", bombDesc: "Oczyść duży obszar 5×5 wokół wybranego pola.", rainbowDesc: "Usuń wszystkie klejnoty w wybranym kolorze.", shuffleDesc: "Wymieszaj planszę bez zużywania ruchu.",
    notEnoughCoins: "Masz za mało monet", purchased: "Dodano do Twojego ekwipunku!", selectTarget: "Wybierz pole na planszy", boardShuffled: "Plansza przetasowana", noMoves: "Brak ruchów — mieszam planszę!", great: "Świetnie!", amazing: "Niesamowicie!", artifactFound: "Odłamek artefaktu!", coinFound: "+1 moneta",
    victory: "Poziom ukończony!", defeat: "Skończyły się ruchy", victoryText: "Piękna robota — dalsza droga jest otwarta.", defeatText: "Było blisko! Spróbuj innej strategii.", nextLevel: "Następny poziom", tryAgain: "Spróbuj ponownie", map: "Mapa", stars: "Gwiazdki", xp: "PD", coins: "Monety",
    missionCaption: "Wykonaj dzisiejsze zadania i odbierz nagrody.", missionMatch: "Połącz 40 klejnotów", missionCoins: "Zbierz 8 monet", missionSpecial: "Stwórz 3 specjalne klejnoty", achievementCaption: "Stałe cele z całej Twojej przygody.", artifactCaption: "Ukończ finałowy poziom każdej krainy, aby odnowić jej artefakt.", shopIntro: "Kupione moce zostają w ekwipunku i możesz użyć ich w późniejszych poziomach.",
    achFirst: "Pierwsze zwycięstwo", achFive: "Odkrywca", achAll: "Legenda kolorów", achCoins: "Łowca skarbów", achMatch: "Pogromca klejnotów", achSpecial: "Twórca mocy", achCombo: "Mistrz reakcji", achStars: "Kolekcjoner gwiazd", achArtifact: "Strażnik reliktów", achShop: "Przygotowany", achIce: "Lodołamacz", achRich: "Królewski skarbiec",
    locked: "Zablokowane", unlocked: "Odblokowane", completeWorld: "Ukończ poziom {n}",
    rule1Title: "Połącz 3", rule1Text: "Zamień sąsiednie klejnoty, aby utworzyć linię co najmniej trzech.", rule2Title: "Twórz moce", rule2Text: "Cztery dają rakietę, pięć tęczę, a układ T lub L tworzy bombę.", rule3Title: "Łącz moce", rule3Text: "Zamień miejscami dwie moce, aby uzyskać dużo większy efekt.", rule4Title: "Artefakty", rule4Text: "Linia pięciu daje również odłamek artefaktu na specjalnych poziomach.", rule5Title: "Planuj ruchy", rule5Text: "Tylko prawidłowa zamiana zużywa ruch. Wykonaj cele, zanim ruchy się skończą.", rule6Title: "Zachowuj moce", rule6Text: "Kupuj dopalacze za monety i zachowuj je na dowolny późniejszy poziom.",
    resetProgress: "Wyzeruj postęp", resetConfirm: "Wyzerować cały zapisany postęp?", newUnlock: "Nowe osiągnięcie: {name}", dailyClaimed: "Codzienny prezent: 25 monet i 1 młot!", missionClaimed: "Odebrano nagrodę za misję!", levelLocked: "Najpierw ukończ poprzedni poziom.",
  },
};

const LEVELS = [
  { id: 1, world: 1, moves: 18, goals: [{ type: "score", target: 900 }] },
  { id: 2, world: 1, moves: 20, goals: [{ type: "color", color: "rose", target: 14 }, { type: "score", target: 1200 }] },
  { id: 3, world: 1, moves: 21, goals: [{ type: "color", color: "yellow", target: 16 }, { type: "coins", target: 3 }] },
  { id: 4, world: 1, moves: 22, blockers: 10, goals: [{ type: "blockers", target: 10 }, { type: "score", target: 1800 }] },
  { id: 5, world: 1, moves: 28, goals: [{ type: "artifacts", target: 1 }, { type: "score", target: 2400 }] },
  { id: 6, world: 2, moves: 21, goals: [{ type: "color", color: "blue", target: 20 }, { type: "specials", target: 2 }] },
  { id: 7, world: 2, moves: 23, goals: [{ type: "coins", target: 5 }, { type: "score", target: 2600 }] },
  { id: 8, world: 2, moves: 24, goals: [{ type: "specials", target: 4 }, { type: "color", color: "orange", target: 18 }] },
  { id: 9, world: 2, moves: 25, blockers: 16, goals: [{ type: "blockers", target: 16 }, { type: "score", target: 3200 }] },
  { id: 10, world: 2, moves: 30, goals: [{ type: "artifacts", target: 2 }, { type: "coins", target: 5 }] },
  { id: 11, world: 3, moves: 24, goals: [{ type: "color", color: "purple", target: 24 }, { type: "score", target: 3600 }] },
  { id: 12, world: 3, moves: 25, goals: [{ type: "specials", target: 6 }, { type: "color", color: "green", target: 22 }] },
  { id: 13, world: 3, moves: 26, blockers: 18, goals: [{ type: "coins", target: 7 }, { type: "blockers", target: 18 }] },
  { id: 14, world: 3, moves: 29, goals: [{ type: "artifacts", target: 2 }, { type: "specials", target: 6 }] },
  { id: 15, world: 3, moves: 32, blockers: 20, goals: [{ type: "artifacts", target: 3 }, { type: "blockers", target: 20 }, { type: "score", target: 6000 }] },
];

const BOOSTERS = {
  hammer: { icon: "🔨", price: 25 }, bomb: { icon: "💥", price: 45 }, rainbow: { icon: "🌈", price: 55 }, shuffle: { icon: "🔀", price: 20 },
};

const defaultState = () => ({
  coins: 60, crystals: 0, xp: 0, unlockedLevel: 1, stars: {}, boosters: { hammer: 2, bomb: 1, rainbow: 1, shuffle: 1 }, artifacts: {}, achievements: {}, purchases: 0,
  settings: { language: navigator.language?.toLowerCase().startsWith("pl") ? "pl" : "en", music: true, sounds: true, reducedMotion: false },
  stats: { wins: 0, matched: 0, coins: 0, specials: 0, bestCombo: 0, ice: 0 }, daily: null, lastGift: null,
});

let state = loadState();
let game = null;
let selectedIndex = null;
let processing = false;
let activeTool = null;
let activeWorld = Math.ceil(Math.min(state.unlockedLevel, 15) / 5);
let pointerStart = null;
let audio = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved) return defaultState();
    const fresh = defaultState();
    return { ...fresh, ...saved, boosters: { ...fresh.boosters, ...saved.boosters }, settings: { ...fresh.settings, ...saved.settings }, stats: { ...fresh.stats, ...saved.stats }, stars: saved.stars || {}, artifacts: saved.artifacts || {}, achievements: saved.achievements || {} };
  } catch { return defaultState(); }
}
function saveState() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }
function t(key, params = {}) {
  let value = TEXT[state.settings.language]?.[key] ?? TEXT.en[key] ?? key;
  Object.entries(params).forEach(([name, replacement]) => { value = value.replaceAll(`{${name}}`, replacement); });
  return value;
}
function today() { return new Date().toISOString().slice(0, 10); }
function ensureDaily() {
  if (state.daily?.date !== today()) state.daily = { date: today(), matched: 0, coins: 0, specials: 0, claimed: {} };
}
function saveAndRefresh() { ensureDaily(); saveState(); renderHeader(); renderHomeStats(); }
function $(selector) { return document.querySelector(selector); }
function wait(ms) { return new Promise((resolve) => setTimeout(resolve, state.settings.reducedMotion ? 10 : ms)); }
function randomColor() { return COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)]; }
function coords(index) { return { row: Math.floor(index / WIDTH), col: index % WIDTH }; }
function indexOf(row, col) { return row < 0 || col < 0 || row >= WIDTH || col >= WIDTH ? -1 : row * WIDTH + col; }
function adjacent(a, b) { const x = coords(a), y = coords(b); return Math.abs(x.row - y.row) + Math.abs(x.col - y.col) === 1; }

class SoundEngine {
  constructor() { this.ctx = null; this.musicNodes = []; this.musicTimer = null; }
  unlock() { if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); if (this.ctx.state === "suspended") this.ctx.resume(); if (state.settings.music) this.startMusic(); }
  tone(frequency, duration = .12, type = "sine", volume = .05) {
    if (!state.settings.sounds || !this.ctx) return;
    const osc = this.ctx.createOscillator(), gain = this.ctx.createGain(); osc.type = type; osc.frequency.value = frequency; gain.gain.setValueAtTime(volume, this.ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001, this.ctx.currentTime + duration); osc.connect(gain).connect(this.ctx.destination); osc.start(); osc.stop(this.ctx.currentTime + duration);
  }
  play(name) { const tones = { click: [420,.08,"sine",.035], match: [660,.12,"triangle",.05], special: [900,.24,"sine",.06], win: [1040,.5,"triangle",.06], fail: [190,.3,"sine",.04], coin: [1200,.16,"sine",.05] }; this.tone(...(tones[name] || tones.click)); }
  startMusic() {
    if (!this.ctx || this.musicNodes.length || !state.settings.music) return;
    const gain = this.ctx.createGain(); gain.gain.value = .012; gain.connect(this.ctx.destination);
    [220,277.18,329.63].forEach((freq) => { const osc = this.ctx.createOscillator(); osc.type = "sine"; osc.frequency.value = freq; osc.connect(gain); osc.start(); this.musicNodes.push(osc); });
    this.musicNodes.push(gain);
    const chords = [[220,277.18,329.63],[196,246.94,293.66],[174.61,220,261.63],[196,246.94,329.63]]; let step = 0;
    this.musicTimer = setInterval(() => { if (!this.ctx || !state.settings.music) return; step = (step + 1) % chords.length; this.musicNodes.slice(0,3).forEach((osc,i) => osc.frequency.linearRampToValueAtTime(chords[step][i], this.ctx.currentTime + 1.5)); }, 4000);
  }
  stopMusic() { clearInterval(this.musicTimer); this.musicTimer = null; this.musicNodes.forEach((node) => { try { node.stop?.(); node.disconnect?.(); } catch {} }); this.musicNodes = []; }
}

function init() {
  ensureDaily(); audio = new SoundEngine(); applyLanguage(); setupEvents(); renderHeader(); renderHomeStats(); showScreen("home");
  document.addEventListener("pointerdown", () => audio.unlock(), { once: true });
}

function setupEvents() {
  $("#homeButton").addEventListener("click", () => showScreen("home"));
  $("#continueButton").addEventListener("click", () => startLevel(Math.min(state.unlockedLevel, 15)));
  $("#openMapButton").addEventListener("click", () => showScreen("map"));
  $("[data-back='home']").addEventListener("click", () => showScreen("home"));
  $("#gameBackButton").addEventListener("click", () => openPause(true));
  $("#pauseButton").addEventListener("click", () => openPause(false));
  $("#settingsButton").addEventListener("click", openSettings);
  $("#dailyGiftButton").addEventListener("click", claimDailyGift);
  document.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", () => openNamedModal(button.dataset.open)));
  window.addEventListener("keydown", (event) => { if (event.key === "Escape" && $("#modalRoot").innerHTML) closeModal(); });
}

function applyLanguage() {
  document.documentElement.lang = state.settings.language;
  document.body.classList.toggle("reduced-motion", state.settings.reducedMotion);
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
  renderHeader(); renderHomeStats();
  if ($("#mapScreen").classList.contains("active")) renderMap();
  if (game) { renderGameHud(); renderBoosters(); }
}

function showScreen(name) {
  if (name !== "game") { game = name === "map" ? game : null; activeTool = null; processing = false; }
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
  $(`#${name}Screen`).classList.add("active");
  if (name === "map") renderMap();
  window.scrollTo({ top: 0, behavior: state.settings.reducedMotion ? "auto" : "smooth" });
  audio?.play("click");
}

function renderHeader() {
  if (!$("#globalCoins")) return;
  $("#globalCoins").textContent = state.coins;
  $("#globalCrystals").textContent = state.crystals;
  const level = Math.floor(state.xp / 500) + 1, progress = state.xp % 500;
  $("#playerLevelLabel").textContent = `LVL ${level}`;
  $("#playerXpBar").style.width = `${progress / 5}%`;
}

function renderHomeStats() {
  if (!$("#missionSummary")) return;
  ensureDaily();
  const missions = getMissions(), completed = missions.filter((m) => m.progress >= m.target).length;
  $("#missionSummary").textContent = `${completed}/${missions.length}`;
  $("#achievementSummary").textContent = `${Object.keys(state.achievements).length}/12`;
  $("#artifactSummary").textContent = `${Object.keys(state.artifacts).length}/3`;
  const claimed = state.lastGift === today();
  $("#dailyGiftText").textContent = t(claimed ? "dailyGiftTaken" : "dailyGiftReady");
  $("#dailyGiftButton").textContent = t(claimed ? "collected" : "collect");
  $("#dailyGiftButton").disabled = claimed;
}

function claimDailyGift() {
  if (state.lastGift === today()) return;
  state.lastGift = today(); state.coins += 25; state.boosters.hammer += 1; audio.play("coin");
  toast(t("dailyClaimed"), "success"); saveAndRefresh();
}

function renderMap() {
  const tabs = $("#worldTabs"), path = $("#mapPath"); tabs.innerHTML = ""; path.innerHTML = "";
  [1,2,3].forEach((world) => {
    const done = LEVELS.filter((l) => l.world === world && state.stars[l.id]).length;
    const tab = document.createElement("button"); tab.className = `world-tab ${activeWorld === world ? "active" : ""}`; tab.role = "tab";
    tab.innerHTML = `<strong>${world === 1 ? "🍭" : world === 2 ? "💎" : "🌌"} ${t(`world${world}`)}</strong><small>${t("worldProgress", { done })}</small>`;
    tab.addEventListener("click", () => { activeWorld = world; renderMap(); }); tabs.appendChild(tab);
  });
  LEVELS.filter((l) => l.world === activeWorld).forEach((level) => {
    const locked = level.id > state.unlockedLevel, stars = state.stars[level.id] || 0;
    const node = document.createElement("div"); node.className = `level-node ${locked ? "locked" : "unlocked"} ${stars ? "completed" : ""} ${level.id === state.unlockedLevel ? "current" : ""}`;
    node.innerHTML = `<button class="level-orb" ${locked ? "disabled" : ""} aria-label="${t("level")} ${level.id}">${locked ? "🔒" : level.id}</button><span class="node-stars">${"★".repeat(stars)}${"☆".repeat(3-stars)}</span><span class="node-label">${t(`levelName${level.id}`)}</span>`;
    node.querySelector("button").addEventListener("click", () => locked ? toast(t("levelLocked"), "warn") : startLevel(level.id)); path.appendChild(node);
  });
}

function startLevel(levelId) {
  const config = LEVELS[levelId - 1]; if (!config || levelId > state.unlockedLevel) return;
  game = { config, board: [], score: 0, moves: config.moves, progress: { colors: {}, blockers: 0, artifacts: 0, specials: 0, coins: 0 }, chain: 1, maxChain: 1, ended: false };
  selectedIndex = null; activeTool = null; processing = false;
  createBoard(); showScreen("game"); renderGame();
}

function createBoard() {
  game.board = [];
  for (let i = 0; i < WIDTH * WIDTH; i++) {
    let color, attempts = 0;
    do { color = randomColor(); attempts++; } while (wouldMatchOnFill(i, color) && attempts < 20);
    game.board.push({ tile: { color, special: null }, blocker: 0, item: null });
  }
  const blockers = game.config.blockers || 0;
  randomIndices(blockers, (i) => { game.board[i].blocker = Math.random() < .25 && blockers > 12 ? 2 : 1; });
  const coinGoal = game.config.goals.find((goal) => goal.type === "coins")?.target || 0;
  randomIndices(coinGoal + (coinGoal ? 3 : 2), (i) => { if (!game.board[i].item) game.board[i].item = "coin"; });
  const artifactGoal = game.config.goals.find((goal) => goal.type === "artifacts")?.target || 0;
  game.board.map((cell,i)=>({cell,i})).filter(({cell})=>!cell.item).sort(()=>Math.random()-.5).slice(0,artifactGoal).forEach(({cell})=>{cell.item="shard";});
  if (!hasPossibleMove()) shuffleBoard(false);
}
function randomIndices(count, action) { const pool = Array.from({ length: 64 }, (_, i) => i).sort(() => Math.random() - .5); pool.slice(0, count).forEach(action); }
function wouldMatchOnFill(index, color) {
  const { row, col } = coords(index);
  return (col >= 2 && game.board[index-1]?.tile?.color === color && game.board[index-2]?.tile?.color === color) || (row >= 2 && game.board[index-WIDTH]?.tile?.color === color && game.board[index-WIDTH*2]?.tile?.color === color);
}

function renderGame() {
  $("#worldName").textContent = t(`world${game.config.world}`); $("#levelName").textContent = t(`levelName${game.config.id}`); $("#levelNumber").textContent = game.config.id;
  renderBoard(); renderGameHud(); renderBoosters();
}
function renderBoard(extraClass = "") {
  const board = $("#gameBoard"); board.innerHTML = "";
  game.board.forEach((cell, index) => {
    const tile = document.createElement("button"), data = cell.tile;
    tile.className = `tile ${data?.special === "rainbow" ? "rainbow" : ""} ${cell.blocker ? "blocked" : ""} ${cell.item ? `has-item item-${cell.item}` : ""} ${selectedIndex === index ? "selected" : ""} ${activeTool ? "tool-target" : ""} ${extraClass}`;
    tile.role = "gridcell"; tile.dataset.index = index; tile.setAttribute("aria-label", data ? `${data.color} ${data.special || "gem"}` : "empty");
    tile.style.setProperty("--tile-color", data?.special === "rainbow" ? "#fff" : COLORS[data?.color]?.hex || "transparent");
    const marks = { row: "↔", col: "↕", bomb: "✹", rainbow: "✦" };
    if (data?.special) tile.innerHTML += `<span class="special-mark">${marks[data.special]}</span>`;
    if (cell.blocker) tile.innerHTML += `<span class="blocker"></span>`;
    if (cell.item === "coin") tile.innerHTML += `<span class="cell-item">🪙</span>`;
    if (cell.item === "shard") tile.innerHTML += `<span class="cell-item">💎</span>`;
    tile.addEventListener("click", () => handleTileClick(index));
    tile.addEventListener("pointerdown", (event) => { pointerStart = { x: event.clientX, y: event.clientY, index }; });
    tile.addEventListener("pointerup", (event) => handleSwipe(event, index));
    board.appendChild(tile);
  });
}
function renderGameHud() {
  $("#movesLeft").textContent = game.moves; $("#scoreValue").textContent = game.score.toLocaleString();
  const scoreGoal = game.config.goals.find((goal) => goal.type === "score")?.target || Math.max(1000, game.score);
  $("#scoreBar").style.width = `${Math.min(100, game.score / scoreGoal * 100)}%`;
  $("#comboValue").textContent = `x${game.chain}`; $("#comboDisplay").classList.toggle("hot", game.chain > 1);
  $("#goalsList").innerHTML = game.config.goals.map((goal) => goalMarkup(goal)).join("");
}
function goalProgress(goal) {
  if (goal.type === "score") return game.score;
  if (goal.type === "color") return game.progress.colors[goal.color] || 0;
  return game.progress[goal.type] || 0;
}
function goalMarkup(goal) {
  const value = goalProgress(goal), done = value >= goal.target;
  const icon = goal.type === "score" ? "🎖️" : goal.type === "color" ? COLORS[goal.color].icon : goal.type === "blockers" ? "🧊" : goal.type === "artifacts" ? "💎" : goal.type === "specials" ? "💥" : "🪙";
  const text = goal.type === "color" ? t("goalColor", { n: goal.target, color: t(`color${goal.color[0].toUpperCase()}${goal.color.slice(1)}`) }) : t(`goal${goal.type[0].toUpperCase()}${goal.type.slice(1)}`, { n: goal.target });
  return `<div class="goal-item ${done ? "done" : ""}"><span class="goal-icon">${done ? "✓" : icon}</span><span><strong>${text}</strong><small class="goal-count">${Math.min(value,goal.target)}/${goal.target}</small></span></div>`;
}
function renderBoosters() {
  $("#boosterBar").innerHTML = Object.entries(BOOSTERS).map(([key, data]) => `<button class="booster ${activeTool === key ? "active" : ""}" data-tool="${key}" ${processing || game?.ended || !state.boosters[key] ? "disabled" : ""}><span>${data.icon}</span><i>${state.boosters[key] || 0}</i><b>${t(key)}</b></button>`).join("");
  document.querySelectorAll(".booster").forEach((button) => button.addEventListener("click", () => activateBooster(button.dataset.tool)));
}

function handleSwipe(event, index) {
  if (!pointerStart || pointerStart.index !== index || activeTool || processing) { pointerStart = null; return; }
  const dx = event.clientX - pointerStart.x, dy = event.clientY - pointerStart.y; pointerStart = null;
  if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
  const { row, col } = coords(index); let target;
  if (Math.abs(dx) > Math.abs(dy)) target = indexOf(row, col + (dx > 0 ? 1 : -1)); else target = indexOf(row + (dy > 0 ? 1 : -1), col);
  if (target >= 0) attemptSwap(index, target);
}
function handleTileClick(index) {
  if (processing || game.ended) return;
  if (activeTool) { useTargetedBooster(index); return; }
  audio.play("click");
  if (selectedIndex === null) { selectedIndex = index; renderBoard(); return; }
  if (selectedIndex === index) { selectedIndex = null; renderBoard(); return; }
  if (!adjacent(selectedIndex, index)) { selectedIndex = index; renderBoard(); return; }
  const first = selectedIndex; selectedIndex = null; attemptSwap(first, index);
}

async function attemptSwap(a, b) {
  if (processing || game.ended || !adjacent(a,b)) return; processing = true;
  await animateSwap(a,b); swapTiles(a,b); renderBoard(); await wait(30);
  const specialCombo = game.board[a].tile?.special && game.board[b].tile?.special;
  const rainbow = game.board[a].tile?.special === "rainbow" || game.board[b].tile?.special === "rainbow";
  let matches = findMatches();
  if (!matches.runs.length && !specialCombo && !rainbow) { await animateSwap(a,b); swapTiles(a,b); renderBoard(); shakeBoard(); processing = false; return; }
  game.moves--; game.chain = 1; game.maxChain = 1;
  if (specialCombo) await clearDirect(new Set([a,b]), true);
  else if (rainbow) {
    const rainbowIndex = game.board[a].tile?.special === "rainbow" ? a : b, other = rainbowIndex === a ? b : a;
    const color = game.board[other].tile?.color; const clear = new Set([rainbowIndex]); game.board.forEach((cell,i) => { if (cell.tile?.color === color) clear.add(i); }); await clearDirect(clear, true);
  } else await resolveMatches(matches, [a,b]);
  finishTurn();
}
function swapTiles(a,b) { const temp = game.board[a].tile; game.board[a].tile = game.board[b].tile; game.board[b].tile = temp; }
async function animateSwap(a,b) {
  const first = document.querySelector(`.tile[data-index="${a}"]`), second = document.querySelector(`.tile[data-index="${b}"]`);
  if (!first || !second || state.settings.reducedMotion) return;
  const r1 = first.getBoundingClientRect(), r2 = second.getBoundingClientRect(), dx = r2.left-r1.left, dy = r2.top-r1.top;
  const timing = { duration: 230, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" };
  const animations = [first.animate([{transform:"translate(0,0)",zIndex:8},{transform:`translate(${dx}px,${dy}px)`,zIndex:8}],timing), second.animate([{transform:"translate(0,0)",zIndex:7},{transform:`translate(${-dx}px,${-dy}px)`,zIndex:7}],timing)];
  await Promise.all(animations.map((animation)=>animation.finished.catch(()=>{})));
}
function findMatches() {
  const runs = [];
  for (let row = 0; row < WIDTH; row++) {
    let start = 0;
    while (start < WIDTH) { const first = indexOf(row,start), color = game.board[first].tile?.color; let end = start + 1; while (end < WIDTH && color && game.board[indexOf(row,end)].tile?.color === color && game.board[indexOf(row,end)].tile?.special !== "rainbow") end++; if (color && end-start >= 3 && game.board[first].tile?.special !== "rainbow") runs.push({ orientation: "row", indices: Array.from({length:end-start},(_,i)=>indexOf(row,start+i)) }); start = end; }
  }
  for (let col = 0; col < WIDTH; col++) {
    let start = 0;
    while (start < WIDTH) { const first = indexOf(start,col), color = game.board[first].tile?.color; let end = start + 1; while (end < WIDTH && color && game.board[indexOf(end,col)].tile?.color === color && game.board[indexOf(end,col)].tile?.special !== "rainbow") end++; if (color && end-start >= 3 && game.board[first].tile?.special !== "rainbow") runs.push({ orientation: "col", indices: Array.from({length:end-start},(_,i)=>indexOf(start+i,col)) }); start = end; }
  }
  return { runs, indices: new Set(runs.flatMap((run) => run.indices)) };
}

async function resolveMatches(matches, preferred = []) {
  let current = matches, first = true;
  while (current.runs.length && !game.ended) {
    const creations = determineSpecials(current.runs, first ? preferred : []);
    const baseClear = new Set(current.indices); const clear = expandSpecials(baseClear);
    awardLongRuns(current.runs);
    await animateAndClear(clear, creations);
    collapseBoard(); renderBoard("falling"); await wait(250);
    game.chain++; game.maxChain = Math.max(game.maxChain, game.chain); if (game.chain > 2) showBoardMessage(game.chain > 3 ? t("amazing") : t("great"));
    current = findMatches(); first = false;
  }
  game.chain = Math.max(1, game.chain - 1); renderGameHud();
}
function determineSpecials(runs, preferred) {
  const creations = new Map(), orientations = new Map();
  runs.forEach((run) => run.indices.forEach((i) => { if (!orientations.has(i)) orientations.set(i,new Set()); orientations.get(i).add(run.orientation); }));
  orientations.forEach((set,index) => { if (set.size > 1) creations.set(index,"bomb"); });
  runs.forEach((run) => {
    let type = null; if (run.indices.length >= 5) type = "rainbow"; else if (run.indices.length === 4) type = run.orientation;
    if (!type) return; const target = preferred.find((i) => run.indices.includes(i)) ?? run.indices[Math.floor(run.indices.length/2)]; if (!creations.has(target) || type === "rainbow") creations.set(target,type);
  });
  return creations;
}
function awardLongRuns(runs) {
  runs.filter((run) => run.indices.length >= 5).forEach(() => {
    game.progress.artifacts++; state.stats.specials++; state.daily.specials++; state.crystals++; showBoardMessage(t("artifactFound")); audio.play("special");
  });
}
function expandSpecials(initial) {
  const clear = new Set(initial), queue = [...initial], seen = new Set();
  while (queue.length) {
    const index = queue.shift(); if (seen.has(index)) continue; seen.add(index); const special = game.board[index]?.tile?.special; if (!special) continue;
    game.progress.specials++; state.stats.specials++; state.daily.specials++;
    const { row,col } = coords(index); let additions = [];
    if (special === "row") additions = Array.from({length:WIDTH},(_,c)=>indexOf(row,c));
    if (special === "col") additions = Array.from({length:WIDTH},(_,r)=>indexOf(r,col));
    if (special === "bomb") for (let r=row-1;r<=row+1;r++) for (let c=col-1;c<=col+1;c++) if(indexOf(r,c)>=0) additions.push(indexOf(r,c));
    if (special === "rainbow") { const color = mostCommonColor(); game.board.forEach((cell,i)=>{ if(cell.tile?.color===color) additions.push(i); }); }
    additions.forEach((i)=>{ if(!clear.has(i)){ clear.add(i); queue.push(i); } });
  }
  return clear;
}
function mostCommonColor() { const counts = {}; game.board.forEach((c)=>{ if(c.tile?.color) counts[c.tile.color]=(counts[c.tile.color]||0)+1; }); return Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]?.[0] || randomColor(); }
async function animateAndClear(clear, creations = new Map()) {
  const creationColors = new Map(); creations.forEach((_, index) => creationColors.set(index, game.board[index]?.tile?.color || randomColor()));
  clear = expandSpecials(clear); const tiles = [...clear];
  tiles.forEach((index) => $( `.tile[data-index="${index}"]`)?.classList.add("matched")); particleBurst(tiles); audio.play(tiles.length > 9 ? "special" : "match"); await wait(250);
  tiles.forEach((index) => {
    const cell = game.board[index], color = cell.tile?.color;
    if (color) { game.progress.colors[color] = (game.progress.colors[color] || 0) + 1; state.stats.matched++; state.daily.matched++; }
    if (cell.item === "coin") { cell.item = null; game.progress.coins++; state.coins++; state.stats.coins++; state.daily.coins++; audio.play("coin"); }
    if (cell.item === "shard") { cell.item = null; game.progress.artifacts++; state.crystals++; showBoardMessage(t("artifactFound")); audio.play("special"); }
    if (cell.blocker) { cell.blocker--; game.progress.blockers++; state.stats.ice++; }
    game.score += 55 * game.chain + (cell.tile?.special ? 100 : 0);
    cell.tile = null;
  });
  creations.forEach((special,index) => { game.board[index].tile = { color: special === "rainbow" ? randomColor() : creationColors.get(index), special }; state.stats.specials++; state.daily.specials++; });
  renderGameHud();
}
function collapseBoard() {
  for (let col=0; col<WIDTH; col++) {
    const existing=[]; for(let row=WIDTH-1;row>=0;row--){ const tile=game.board[indexOf(row,col)].tile; if(tile) existing.push(tile); }
    for(let row=WIDTH-1;row>=0;row--){ game.board[indexOf(row,col)].tile = existing[WIDTH-1-row] || { color: randomColor(), special:null }; }
  }
}
async function clearDirect(clear, expand = false) {
  if (expand) clear = expandSpecials(clear); await animateAndClear(clear); collapseBoard(); renderBoard("falling"); await wait(260); const matches=findMatches(); if(matches.runs.length) await resolveMatches(matches);
}
function finishTurn() {
  state.stats.bestCombo = Math.max(state.stats.bestCombo, game.maxChain); processing = false; renderBoard(); renderGameHud(); renderBoosters(); checkAchievements(); saveAndRefresh();
  if (goalsComplete()) { completeLevel(); return; }
  if (game.moves <= 0) { game.ended = true; audio.play("fail"); setTimeout(()=>openResult(false),350); return; }
  if (!hasPossibleMove()) { showBoardMessage(t("noMoves")); setTimeout(()=>shuffleBoard(false),500); }
}
function goalsComplete() { return game.config.goals.every((goal) => goalProgress(goal) >= goal.target); }

function hasPossibleMove() {
  for (let i=0;i<64;i++) { const {row,col}=coords(i); for(const [dr,dc] of [[0,1],[1,0]]) { const other=indexOf(row+dr,col+dc); if(other<0) continue; swapTiles(i,other); const works=findMatches().runs.length>0 || game.board[i].tile?.special==="rainbow" || game.board[other].tile?.special==="rainbow"; swapTiles(i,other); if(works) return true; } } return false;
}
function shuffleBoard(show = true) {
  const tiles = game.board.map((cell)=>cell.tile).sort(()=>Math.random()-.5); game.board.forEach((cell,i)=>{ cell.tile=tiles[i]; });
  let attempts=0; while((findMatches().runs.length || !hasPossibleMove()) && attempts++<30) { tiles.sort(()=>Math.random()-.5); game.board.forEach((cell,i)=>{cell.tile=tiles[i];}); }
  if(show) showBoardMessage(t("boardShuffled")); renderBoard(); audio.play("special");
}
function shakeBoard() { const board=$("#gameBoard"); board.animate([{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],{duration:220}); }

function activateBooster(tool) {
  if (processing || game.ended || !state.boosters[tool]) return;
  audio.play("click");
  if (tool === "shuffle") { state.boosters.shuffle--; shuffleBoard(); saveAndRefresh(); renderBoosters(); return; }
  activeTool = activeTool === tool ? null : tool; selectedIndex = null; renderBoard(); renderBoosters(); if(activeTool) toast(t("selectTarget"));
}
async function useTargetedBooster(index) {
  const tool=activeTool; if(!tool || processing) return; processing=true; activeTool=null; state.boosters[tool]--; let clear=new Set(); const {row,col}=coords(index);
  if(tool==="hammer") clear.add(index);
  if(tool==="bomb") for(let r=row-2;r<=row+2;r++) for(let c=col-2;c<=col+2;c++) if(indexOf(r,c)>=0) clear.add(indexOf(r,c));
  if(tool==="rainbow") { const color=game.board[index].tile?.color; game.board.forEach((cell,i)=>{if(cell.tile?.color===color) clear.add(i);}); }
  await clearDirect(clear,true); finishTurn();
}

function completeLevel() {
  if(game.ended) return; game.ended=true; const ratio=game.moves/game.config.moves; const stars=ratio>=.45?3:ratio>=.2?2:1; const previous=state.stars[game.config.id]||0; state.stars[game.config.id]=Math.max(previous,stars);
  if(game.config.id===state.unlockedLevel && state.unlockedLevel<15) state.unlockedLevel++;
  const coinReward=10+stars*5+game.config.world*3, xpReward=100+stars*40; state.coins+=coinReward; state.xp+=xpReward; state.stats.wins++;
  if([5,10,15].includes(game.config.id)){ state.artifacts[game.config.world]=true; state.crystals+=5; }
  audio.play("win"); checkAchievements(); saveAndRefresh(); setTimeout(()=>openResult(true,stars,coinReward,xpReward),500);
}
function openResult(won,stars=0,coins=0,xp=0) {
  const modal=`<div class="modal result-modal"><div class="result-icon">${won?"🎉":"🌙"}</div><h2>${t(won?"victory":"defeat")}</h2><p>${t(won?"victoryText":"defeatText")}</p>${won?`<div class="result-stars">${"★".repeat(stars)}${"☆".repeat(3-stars)}</div><div class="result-stats"><span><b>${game.score}</b><small>${t("score")}</small></span><span><b>+${coins}</b><small>${t("coins")}</small></span><span><b>+${xp}</b><small>${t("xp")}</small></span></div>`:""}<div class="modal-actions"><button class="secondary-button" data-result="map">${t("map")}</button><button class="primary-button" data-result="${won&&game.config.id<15?"next":"retry"}">${t(won&&game.config.id<15?"nextLevel":"tryAgain")}</button></div></div>`;
  openModal(modal,false); document.querySelectorAll("[data-result]").forEach((button)=>button.addEventListener("click",()=>{ const action=button.dataset.result; closeModal(); if(action==="map") showScreen("map"); else if(action==="next") startLevel(game.config.id+1); else startLevel(game.config.id); }));
}

function getMissions() { ensureDaily(); return [
  {id:"match",icon:"🎯",name:t("missionMatch"),progress:state.daily.matched,target:40,reward:15},
  {id:"coins",icon:"🪙",name:t("missionCoins"),progress:state.daily.coins,target:8,reward:20},
  {id:"special",icon:"💥",name:t("missionSpecial"),progress:state.daily.specials,target:3,reward:25},
]; }
const ACHIEVEMENTS = [
  ["first","achFirst",()=>state.stats.wins>=1],["five","achFive",()=>state.stats.wins>=5],["all","achAll",()=>state.stats.wins>=15],["coins","achCoins",()=>state.stats.coins>=25],
  ["match","achMatch",()=>state.stats.matched>=500],["special","achSpecial",()=>state.stats.specials>=30],["combo","achCombo",()=>state.stats.bestCombo>=5],["stars","achStars",()=>Object.values(state.stars).reduce((a,b)=>a+b,0)>=25],
  ["artifact","achArtifact",()=>Object.keys(state.artifacts).length>=3],["shop","achShop",()=>state.purchases>=3],["ice","achIce",()=>state.stats.ice>=50],["rich","achRich",()=>state.coins>=250],
];
function checkAchievements() {
  ACHIEVEMENTS.forEach(([id,key,test])=>{ if(!state.achievements[id]&&test()){ state.achievements[id]=true; state.coins+=10; toast(t("newUnlock",{name:t(key)}),"success"); } }); saveState();
}

function openNamedModal(name) {
  if(name==="missions") openMissions(); if(name==="achievements") openAchievements(); if(name==="shop") openShop(); if(name==="collection") openCollection();
}
function modalHeader(title,caption) { return `<div class="modal-header"><div><h2>${title}</h2>${caption?`<p>${caption}</p>`:""}</div><button class="modal-close" aria-label="${t("close")}">✕</button></div>`; }
function openModal(html,closable=true) { $("#modalRoot").innerHTML=html; if(closable) $("#modalRoot .modal-close")?.addEventListener("click",closeModal); $("#modalRoot").onclick=(e)=>{if(closable&&e.target===$("#modalRoot"))closeModal();}; }
function closeModal(){ $("#modalRoot").innerHTML=""; }
function openMissions(){ const cards=getMissions().map(m=>{const done=m.progress>=m.target,claimed=state.daily.claimed[m.id];return `<div class="mission-card"><span>${m.icon}</span><div><strong>${m.name}</strong><small>${Math.min(m.progress,m.target)}/${m.target} · ${t("reward")}: ${m.reward} 🪙</small><div class="progress-line"><b style="width:${Math.min(100,m.progress/m.target*100)}%"></b></div></div><button class="claim-button" data-mission="${m.id}" ${!done||claimed?"disabled":""}>${t(claimed?"collected":"claim")}</button></div>`}).join(""); openModal(`<div class="modal">${modalHeader(t("missions"),t("missionCaption"))}<div class="card-list">${cards}</div></div>`); document.querySelectorAll("[data-mission]").forEach(b=>b.addEventListener("click",()=>{const m=getMissions().find(x=>x.id===b.dataset.mission);if(!m||m.progress<m.target||state.daily.claimed[m.id])return;state.daily.claimed[m.id]=true;state.coins+=m.reward;audio.play("coin");saveAndRefresh();toast(t("missionClaimed"),"success");openMissions();})); }
function openAchievements(){ checkAchievements(); const icons=["🌟","🧭","👑","🪙","💎","💥","🔥","⭐","🗿","🎒","🧊","🏰"]; const cards=ACHIEVEMENTS.map(([id,key],i)=>`<div class="achievement-card ${state.achievements[id]?"":"locked"}"><span>${icons[i]}</span><div><strong>${t(key)}</strong><small>${t(state.achievements[id]?"unlocked":"locked")}</small></div></div>`).join(""); openModal(`<div class="modal wide">${modalHeader(t("achievements"),t("achievementCaption"))}<div class="achievement-grid">${cards}</div></div>`); }
function openShop(){ const cards=Object.entries(BOOSTERS).map(([key,item])=>`<div class="shop-card"><span>${item.icon}</span><div><h3>${t(key)}</h3><p>${t(`${key}Desc`)}</p></div><button class="buy-button" data-buy="${key}">${t("buy")} · ${item.price} 🪙 <small>(${t("owned")}: ${state.boosters[key]})</small></button></div>`).join(""); openModal(`<div class="modal wide">${modalHeader(t("shop"),t("shopIntro"))}<div class="shop-grid">${cards}</div></div>`); document.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>buyBooster(b.dataset.buy))); }
function buyBooster(key){const item=BOOSTERS[key];if(state.coins<item.price){toast(t("notEnoughCoins"),"warn");return;}state.coins-=item.price;state.boosters[key]++;state.purchases++;audio.play("coin");checkAchievements();saveAndRefresh();toast(t("purchased"),"success");openShop();if(game)renderBoosters();}
function openCollection(){ const icons=["🧭","🗿","👑"]; const cards=[1,2,3].map((world,i)=>`<div class="artifact-card ${state.artifacts[world]?"unlocked":""}"><span class="artifact-icon">${icons[i]}</span><strong>${t(`world${world}`)}</strong><small>${state.artifacts[world]?t("unlocked"):t("completeWorld",{n:world*5})}</small></div>`).join("");openModal(`<div class="modal">${modalHeader(t("collection"),t("artifactCaption"))}<div class="artifact-grid">${cards}</div></div>`);}
function openSettings(){ openModal(`<div class="modal">${modalHeader(t("settings"))}<div class="settings-list"><label class="setting-row"><span>${t("language")}</span><select id="languageSelect"><option value="pl" ${state.settings.language==="pl"?"selected":""}>Polski</option><option value="en" ${state.settings.language==="en"?"selected":""}>English</option></select></label>${settingToggle("music",state.settings.music)}${settingToggle("sounds",state.settings.sounds)}${settingToggle("reducedMotion",state.settings.reducedMotion)}</div><div class="modal-actions"><button id="rulesButton" class="secondary-button">${t("rules")}</button><button id="resetButton" class="secondary-button">${t("resetProgress")}</button></div></div>`); $("#languageSelect").addEventListener("change",e=>{state.settings.language=e.target.value;saveState();applyLanguage();openSettings();}); document.querySelectorAll("[data-setting]").forEach(b=>b.addEventListener("click",()=>toggleSetting(b.dataset.setting))); $("#rulesButton").addEventListener("click",openRules); $("#resetButton").addEventListener("click",()=>{if(confirm(t("resetConfirm"))){localStorage.removeItem(SAVE_KEY);state=defaultState();saveAndRefresh();applyLanguage();closeModal();showScreen("home");}}); }
function settingToggle(key,on){return `<div class="setting-row"><span>${t(key)}</span><button class="switch ${on?"on":""}" data-setting="${key}" aria-pressed="${on}"></button></div>`;}
function toggleSetting(key){state.settings[key]=!state.settings[key];if(key==="music"){if(state.settings.music){audio.unlock();audio.startMusic();}else audio.stopMusic();}saveState();applyLanguage();openSettings();}
function openRules(){const rules=[["🔗","rule1"],["🚀","rule2"],["💥","rule3"],["💎","rule4"],["🧠","rule5"],["🎒","rule6"]].map(([icon,key])=>`<div class="rule-card"><span>${icon}</span><div><h3>${t(`${key}Title`)}</h3><p>${t(`${key}Text`)}</p></div></div>`).join("");openModal(`<div class="modal wide">${modalHeader(t("rules"))}<div class="rules-grid">${rules}</div></div>`);}
function openPause(fromBack){ if(!game)return; openModal(`<div class="modal result-modal">${modalHeader(t("paused"))}<div class="modal-actions"><button class="secondary-button" data-pause="map">${t("leave")}</button><button class="secondary-button" data-pause="restart">${t("restart")}</button><button class="primary-button" data-pause="resume">${t("resume")}</button></div><button id="pauseRules" class="secondary-button" style="margin-top:12px;width:100%">${t("rules")}</button></div>`);document.querySelectorAll("[data-pause]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.pause;closeModal();if(a==="map")showScreen("map");if(a==="restart")startLevel(game.config.id);}));$("#pauseRules").addEventListener("click",openRules);}

function showBoardMessage(text){const box=$("#boardMessage");box.textContent=text;box.classList.remove("show");void box.offsetWidth;box.classList.add("show");}
function toast(message,type=""){const el=document.createElement("div");el.className=`toast ${type}`;el.textContent=message;$("#toastRoot").appendChild(el);setTimeout(()=>el.remove(),3100);}
function particleBurst(indices){
  const boardRect=$("#gameBoard").getBoundingClientRect(), cellSize=boardRect.width/WIDTH, layer=$("#fxLayer"), rowCounts={}, colCounts={};
  indices.forEach((index)=>{const {row,col}=coords(index);rowCounts[row]=(rowCounts[row]||0)+1;colCounts[col]=(colCounts[col]||0)+1;});
  indices.slice(0,24).forEach((index,n)=>{
    const {row,col}=coords(index), x=boardRect.left+(col+.5)*cellSize, y=boardRect.top+(row+.5)*cellSize, color=COLORS[game.board[index].tile?.color]?.hex||"white";
    const ring=document.createElement("span");ring.className="cell-burst";ring.style.left=`${x}px`;ring.style.top=`${y}px`;ring.style.width=`${cellSize*.72}px`;ring.style.height=`${cellSize*.72}px`;ring.style.color=color;layer.appendChild(ring);
    for(let bit=0;bit<3;bit++){const p=document.createElement("span");p.className="particle";p.textContent=(n+bit)%3===0?"✦":"◆";p.style.left=`${x}px`;p.style.top=`${y}px`;p.style.color=color;p.style.setProperty("--dx",`${(Math.random()-.5)*150}px`);p.style.setProperty("--dy",`${-25-Math.random()*115}px`);layer.appendChild(p);setTimeout(()=>p.remove(),1100);}
    setTimeout(()=>ring.remove(),650);
  });
  Object.entries(rowCounts).filter(([,count])=>count>=5).forEach(([row])=>addLineSweep("row",Number(row),boardRect,layer));
  Object.entries(colCounts).filter(([,count])=>count>=5).forEach(([col])=>addLineSweep("col",Number(col),boardRect,layer));
}
function addLineSweep(direction,position,rect,layer){const sweep=document.createElement("span");sweep.className="line-sweep";if(direction==="row"){sweep.style.left=`${rect.left+rect.width/2}px`;sweep.style.top=`${rect.top+(position+.5)*rect.height/WIDTH}px`;sweep.style.width=`${rect.width}px`;sweep.style.height=`${rect.height/WIDTH*.32}px`;}else{sweep.style.left=`${rect.left+(position+.5)*rect.width/WIDTH}px`;sweep.style.top=`${rect.top+rect.height/2}px`;sweep.style.width=`${rect.width/WIDTH*.32}px`;sweep.style.height=`${rect.height}px`;sweep.style.background="linear-gradient(180deg,transparent,rgba(255,255,255,.95),transparent)";}layer.appendChild(sweep);setTimeout(()=>sweep.remove(),650);}

init();

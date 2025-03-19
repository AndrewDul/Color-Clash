const grid = document.querySelector(".grid");
const width = 8;
const squares = [];
const colors = [
  "#e59999", // ciemniejszy pastelowy czerwony
  "#e5c099", // ciemniejszy pastelowy pomarańczowy
  "#e5e599", // ciemniejszy pastelowy żółty
  "#99e5b5", // ciemniejszy pastelowy zielony
  "#99c5e5", // ciemniejszy pastelowy niebieski
  "#b099d1", // ciemniejszy pastelowy fioletowy
];
const specialColor = "gold"; // Special tile color

// Scores and game state
let score = 0;
let coins = 0;
let level = 1;
let exp = 0; // Nowa zmienna dla EXP
const expNeeded = 1000; // Stała ilość EXP potrzebna na poziom
let isProcessing = false;
let selectedSquare = null;
let matchCounter = 0;

// Points for each color

// Punkty dla nowych kolorów
const points = {
  "#e59999": 10, // ciemniejszy pastelowy czerwony
  "#e5c099": 15, // ciemniejszy pastelowy pomarańczowy
  "#e5e599": 20, // ciemniejszy pastelowy żółty
  "#99e5b5": 25, // ciemniejszy pastelowy zielony
  "#99c5e5": 30, // ciemniejszy pastelowy niebieski
  "#b099d1": 35, // ciemniejszy pastelowy fioletowy
  "#ffd700": 50, // złoty (GOLD)
  "#90ee90": 100, // zielony (EXP)
};

// Sounds
const clickSound = new Audio("1.wav");
const matchSound = new Audio("disap.wav");

// Funkcja obliczająca procent EXP w zależności od poziomu
function getExpPercentage(level) {
  if (level <= 5) return 22;
  else if (level <= 10) return 18;
  else if (level <= 15) return 14;
  else if (level <= 20) return 10;
  else if (level <= 25) return 6;
  else return 2;
}
let isStarting = true; // Zmienna kontrolna
// Create the board
function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = randomColor;
    grid.appendChild(square);
    squares.push(square);
  }
  squares.forEach((square) => square.addEventListener("click", handleClick));
  checkForMatches();
}

// Handle clicks
function handleClick() {
  if (isProcessing) return;

  clickSound.play(); // Play click sound

  this.classList.add("pulse");
  setTimeout(() => this.classList.remove("pulse"), 300);

  if (selectedSquare === null) {
    // Zaznacz kafelek
    selectedSquare = this;
    selectedSquare.classList.add("selected");
  } else {
    if (isAdjacent(selectedSquare, this)) {
      swapSquares(selectedSquare, this);
      setTimeout(() => {
        if (checkForMatches()) {
          isProcessing = true;
          handleMatches();
        } else {
          swapSquares(selectedSquare, this);
        }
        // Usuń zaznaczenie po ruchu
        selectedSquare.classList.remove("selected");
        selectedSquare = null;
      }, 300);
    } else {
      // Odznacz poprzedni i zaznacz nowy
      selectedSquare.classList.remove("selected");
      selectedSquare = this;
      selectedSquare.classList.add("selected");
    }
  }
}

// Check adjacency
function isAdjacent(square1, square2) {
  let id1 = parseInt(square1.id);
  let id2 = parseInt(square2.id);
  let row1 = Math.floor(id1 / width);
  let col1 = id1 % width;
  let row2 = Math.floor(id2 / width);
  let col2 = id2 % width;

  return (
    (row1 === row2 && Math.abs(col1 - col2) === 1) ||
    (col1 === col2 && Math.abs(row1 - row2) === 1)
  );
}

// Swap squares
function swapSquares(square1, square2) {
  let tempColor = square1.style.backgroundColor;
  square1.style.backgroundColor = square2.style.backgroundColor;
  square2.style.backgroundColor = tempColor;
}

// Find row matches
function findRowMatches() {
  let matches = [];
  for (let row = 0; row < width; row++) {
    for (let col = 0; col < width - 2; col++) {
      let idx = row * width + col;
      let color1 = rgbToHex(squares[idx].style.backgroundColor);
      let color2 = rgbToHex(squares[idx + 1].style.backgroundColor);
      let color3 = rgbToHex(squares[idx + 2].style.backgroundColor);

      if (
        (color1 === color2 && (color3 === "#ffd700" || color3 === "#90ee90")) || // Dwa te same + specjalny
        (color1 === color3 && (color2 === "#ffd700" || color2 === "#90ee90")) || // Dwa te same + specjalny
        (color2 === color3 && (color1 === "#ffd700" || color1 === "#90ee90")) || // Dwa te same + specjalny
        (color1 === color2 && color2 === color3) // Trzy te same zwykłe
      ) {
        matches.push(idx, idx + 1, idx + 2);
      }
    }
  }
  return matches;
}

// Find column matches
function findColumnMatches() {
  let matches = [];
  for (let col = 0; col < width; col++) {
    for (let row = 0; row < width - 2; row++) {
      let idx = row * width + col;
      let color1 = rgbToHex(squares[idx].style.backgroundColor);
      let color2 = rgbToHex(squares[idx + width].style.backgroundColor);
      let color3 = rgbToHex(squares[idx + width * 2].style.backgroundColor);

      if (
        (color1 === color2 && (color3 === "#ffd700" || color3 === "#90ee90")) || // Dwa te same + specjalny
        (color1 === color3 && (color2 === "#ffd700" || color2 === "#90ee90")) || // Dwa te same + specjalny
        (color2 === color3 && (color1 === "#ffd700" || color1 === "#90ee90")) || // Dwa te same + specjalny
        (color1 === color2 && color2 === color3) // Trzy te same zwykłe
      ) {
        matches.push(idx, idx + width, idx + width * 2);
      }
    }
  }
  return matches;
}

function rgbToHex(rgb) {
  if (!rgb) return ""; // Jeśli kolor jest pusty lub null, zwróć pusty string

  const rgbValues = rgb.match(/\d+/g);
  if (!rgbValues) return ""; // Jeśli `match()` zwróci null, zwróć pusty string

  return (
    "#" +
    rgbValues
      .map((value) => parseInt(value).toString(16).padStart(2, "0"))
      .join("")
      .toLowerCase()
  );
}

// Remove matches and score points
function removeMatches(matches) {
  matches.forEach((index) => {
    const square = squares[index];
    const color = rgbToHex(square.style.backgroundColor);

    if (color === "#ffd700") {
      // Złoty = GOLD
      coins++;
      updateCoins();
      console.log("GOLD tile matched!");
      updateScore(points["#ffd700"]);
      square.classList.remove("pulse-gold"); // Usuń animację po zniknięciu
    } else if (color === "#90ee90") {
      // Zielony = EXP
      console.log("EXP tile matched!");
      updateScore(points["#90ee90"]);
      const percentage = getExpPercentage(level);
      exp += (percentage / 100) * expNeeded;
      if (exp >= expNeeded) {
        level++;
        exp -= expNeeded;
        document.getElementById("level").textContent = level;
      }
      document.querySelector(".exp-progress").style.width =
        (exp / expNeeded) * 100 + "%";
      square.classList.remove("pulse-exp"); // Usuń animację po zniknięciu
    } else {
      const pointsToAdd = points[color] || 0;
      updateScore(pointsToAdd);
    }

    square.style.transition = "transform 0.3s ease";
    square.style.transform = "scale(0)";
    setTimeout(() => {
      square.style.backgroundColor = "";
      square.style.transform = "scale(1)";
    }, 300);
  });

  matchSound.play();
}

// Make tiles fall
function moveDown() {
  for (let col = 0; col < width; col++) {
    for (let row = width - 1; row >= 0; row--) {
      let index = row * width + col;
      let color = rgbToHex(squares[index].style.backgroundColor);

      if (color === "") {
        for (let r = row - 1; r >= 0; r--) {
          let aboveIndex = r * width + col;
          let aboveColor = rgbToHex(squares[aboveIndex].style.backgroundColor);

          if (aboveColor !== "#ffd700" && aboveColor !== "#90ee90") {
            squares[index].style.backgroundColor =
              squares[aboveIndex].style.backgroundColor;
            squares[index].classList.add("fall");
            squares[aboveIndex].style.backgroundColor = "";
            break;
          }
        }

        if (squares[index].style.backgroundColor === "") {
          squares[index].style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
          squares[index].classList.add("fall");
        }
      }
    }
  }
}

// Update score
function updateScore(points) {
  console.log("Dodawanie punktów:", points);
  score += points;
  console.log("Nowy wynik:", score);
  document.getElementById("score").textContent = score;
}

// Update coins
function updateCoins() {
  // Usunięto inkrementację coins tutaj, bo jest już w removeMatches
  document.getElementById("coins").textContent = coins;
}

// Check for matches
function checkForMatches() {
  let matches = [...new Set([...findRowMatches(), ...findColumnMatches()])];
  if (matches.length > 0) {
    removeMatches(matches);
    return true;
  }
  return false;
}

// Handle matches and increase difficulty
function handleMatches() {
  setTimeout(() => {
    moveDown();
    setTimeout(() => {
      if (checkForMatches()) {
        handleMatches();
        matchCounter++;
        // Losowe generowanie specjalnych kafelków z 10% szansą
        if (Math.random() < 0.3) {
          generateSpecialTile();
        }
      } else {
        isProcessing = false;
      }
    }, 200);
  }, 300);
}

// Generate special tile
function generateSpecialTile() {
  let availableSquares = squares.filter((square) => {
    const color = rgbToHex(square.style.backgroundColor);
    return color !== "#ffd700" && color !== "#90ee90"; // Złoty i zielony
  });

  if (availableSquares.length > 0) {
    let index = Math.floor(Math.random() * availableSquares.length);
    let tile = availableSquares[index];

    if (Math.random() < 0.5) {
      tile.style.backgroundColor = "#ffd700"; // Złoty
      tile.classList.add("pulse-gold");
    } else {
      tile.style.backgroundColor = "#90ee90"; // Zielony
      tile.classList.add("pulse-exp");
    }
  }
}

// Start the game
function startGame() {
  score = 0;
  coins = 0;
  level = 1;
  exp = 0; // Resetowanie EXP
  updateScore(score);
  updateCoins();
  // Resetowanie paska EXP (zakładając, że masz element .exp-progress w HTML)
  document.querySelector(".exp-progress").style.width = "0%";

  createBoard();

  // Testowe generowanie kafelków specjalnych
  for (let i = 0; i < 5; i++) {
    generateSpecialTile(); // Wygeneruje 5 kafelków na starcie
  }
  setTimeout(() => {
    if (checkForMatches()) {
      handleMatches();
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", startGame);

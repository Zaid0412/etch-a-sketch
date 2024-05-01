const container = document.querySelector(".container");
const colorInput = document.getElementById("color");
const gridLabel = document.getElementById("grid-size-label");
const gridInput = document.getElementById("grid-size");
const resetBtn = document.querySelector("reset-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");

let oneSqrArea;
let numOfSquares;
let gridSize = document.getElementById("grid-size").value;
let boxLen = oneBoxLength(gridSize);

let rainbowMode = false;

function createGrid() {
  const div = document.createElement("div");
  container.appendChild(div);
  div.style.width = `${boxLen}px`;
  div.style.height = `${boxLen}px`;
}

for (let i = 0; i < numOfSquares; i++) {
  createGrid();
}

function oneBoxLength(containerSize) {
  oneSqrArea = 250_000 / (containerSize * containerSize);
  numOfSquares = 250_000 / oneSqrArea;
  return Math.sqrt(oneSqrArea);
}

function changeGridSize() {
  gridSize = document.getElementById("grid-size").value;
  gridLabel.textContent = `Grid Size : ${gridSize} x ${gridSize}`;

  boxLen = oneBoxLength(gridSize);
  container.textContent = "";
  for (let i = 0; i < numOfSquares; i++) {
    createGrid();
  }

  console.log(gridSize);
}

function resetGrid() {
  createGrid();
}

function randNum() {
  const num = Math.floor(Math.random() * 255) + 1;
  return num;
}

let colorValue = colorInput.value;
colorInput.addEventListener("input", function () {
  colorValue = colorInput.value;
});

gridInput.addEventListener("input", changeGridSize);

rainbowBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!rainbowMode) {
    rainbowMode = true;
    rainbowBtn.classList.toggle("rainbow-mode");
  } else if (rainbowMode) {
    rainbowMode = false;
    rainbowBtn.classList.toggle("rainbow-mode");
  }
  console.log(rainbowMode);
});
container.addEventListener("mouseover", function (e) {
  if (rainbowMode) {
    let randColor = `rgb(${randNum()},${randNum()},${randNum()})`;
    e.target.style.backgroundColor = randColor;
  } else if (!rainbowMode) {
    e.target.style.backgroundColor = colorValue;
  }
});

// resetBtn.addEventListener("click", resetGrid);

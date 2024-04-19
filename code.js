const container = document.querySelector(".container");
let defaultSquares = 16;
let color = "black";

const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", () => {
  let squaresPerSide = prompt("How many squares per side?");
  if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide >= 100) {
    alert("You must enter an integer between 1 and 99");
  } else {
    container.textContent = "";
    createGrid(squaresPerSide);
  }
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  container.textContent = "";
  createGrid(defaultSquares);
});

const colorfulButton = document.querySelector(".colorful");
colorfulButton.addEventListener("click", () => {
  color = "random";
});

const blackButton = document.querySelector(".black");
blackButton.addEventListener("click", () => {
  color = "black";
});

function createGrid(squares) {
  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 0; j < squares; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
      box.addEventListener("mouseover", changeColor);
      defaultSquares = squares;
    }
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

function changeColor() {
  if (color === "random") {
    const { r, g, b } = getRandomColor();
    const randomColor = "rgb(" + r + "," + g + "," + b + ")";
    this.style.backgroundColor = randomColor;
  } else {
    this.style.backgroundColor = color;
  }
}

createGrid(defaultSquares);

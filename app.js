// SELECTORS AND GLOBAL VARIABLES
const canvasContainer = document.querySelector(".canvasContainer");
const colorPicker = document.querySelector("#colorpicker");
const gridSlider = document.querySelector("#gridslider");
let num = 16;

// CREATE GRID FUNCTION
function createGrid(num) {
  while (canvasContainer.firstChild) {
    canvasContainer.removeChild(canvasContainer.lastChild);
  }
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    canvasContainer.appendChild(div);
  }
  const gridSquare = document.querySelector(".grid");
  draw();
}
function createDefaultGrid(num) {
  gridValue = 750 / num;
  canvasContainer.style.gridTemplateColumns = `repeat(${num}, ${gridValue}px)`;
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    canvasContainer.appendChild(div);
  }
  const gridSquare = document.querySelector(".grid");
  draw();
}

// GRID SIZE FUNCTION
gridSlider.addEventListener("input", (e) => {
  num = gridSlider.value;
  gridValue = 750 / num;
  canvasContainer.style.gridTemplateColumns = `repeat(${num}, ${gridValue}px)`;
  createGrid(num);
});

// DRAW AND COLOR SELECTOR FUNCTION
function draw() {
  let color = "#000000";
  colorPicker.addEventListener("input", (e) => {
    color = colorPicker.value;
    console.log(color);
    return color;
  });
  const gridSquare = document.querySelectorAll(".grid");
  gridSquare.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = color;
    });
  });
}
// FUNCTION CALLS
createDefaultGrid(num);

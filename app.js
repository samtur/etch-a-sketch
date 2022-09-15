// SELECTORS AND GLOBAL VARIABLES
const canvasContainer = document.querySelector(".canvasContainer");
const colorPicker = document.querySelector("#colorpicker");
let num = 0;

// CREATE GRID FUNCTION
function createGrid(num) {
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    canvasContainer.appendChild(div);
  }
  const gridSquare = document.querySelector(".grid");
}
// GRID SIZE FUNCTION
function gridSize() {
  num = prompt("Enter a grid size");
  if (num > 150) {
    num = prompt("Number is too high. Please enter a lower size.");
  }
  gridValue = 750 / num;
  canvasContainer.style.gridTemplateColumns = `repeat(${num}, ${gridValue}px)`;
  return num;
}
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
gridSize();
createGrid(num);
draw();

// SELECTORS AND GLOBAL VARIABLES
const canvasContainer = document.querySelector(".canvasContainer");
const colorPicker = document.querySelector("#colorpicker");
const gridSlider = document.querySelector("#gridslider");
const rainbowBtn = document.querySelector("#rainbow");
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
  let gridSquare = document.querySelectorAll(".grid");
  gridSquare.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = color;
    });
  });
}

// RAINBOW
function rainbow() {
  rainbowBtn.addEventListener("click", (e) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let gridSquare = document.querySelectorAll(".grid");
    gridSquare.forEach((square) => {
      square.addEventListener("mouseover", (event) => {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = `#${randomColor}`;
      });
    });
  });
  colorPicker.addEventListener("click", (e) => {
    draw();
  });
}

// FUNCTION CALLS
createDefaultGrid(num);
rainbow();

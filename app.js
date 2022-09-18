// SELECTORS AND GLOBAL VARIABLES
const canvasContainer = document.querySelector(".canvasContainer");
const colorPicker = document.querySelector("#colorpicker");
const gridSlider = document.querySelector("#gridslider");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const eraserBtn = document.querySelector("#eraser");

let num = 16;
let color = "#000000";

// MOUSE CHECKER
let mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

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
  draw();
}

// DRAW FUNCTION
function draw() {
  let gridSquare = document.querySelectorAll(".grid");
  gridSquare.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      if (event.type === "mouseover" && mouseDown) {
        event.target.style.backgroundColor = color;
      }
    });
  });
}

// GRID DEFAULT
addEventListener("load", () => {
  gridValue = 750 / num;
  canvasContainer.style.gridTemplateColumns = `repeat(${num}, ${gridValue}px)`;
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    canvasContainer.appendChild(div);
  }
  draw();
});

// GRID SLIDER LISTENER
gridSlider.addEventListener("input", (e) => {
  color = "#000000";
  num = gridSlider.value;
  gridValue = 750 / num;
  canvasContainer.style.gridTemplateColumns = `repeat(${num}, ${gridValue}px)`;
  createGrid(num);
  colorPicker.value = "#000000";
});

// COLOR SELECTOR LISTENER
colorPicker.addEventListener("input", (e) => {
  color = colorPicker.value;
  draw();
});

// RAINBOW LISTENER
rainbowBtn.addEventListener("click", (e) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let gridSquare = document.querySelectorAll(".grid");
  gridSquare.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
      if (event.type === "mouseover" && mouseDown) {
        event.target.style.backgroundColor = `#${randomColor}`;
      }
    });
  });
});

// ERASER LISTENER
eraserBtn.addEventListener("click", (e) => {
  let gridSquare = document.querySelectorAll(".grid");
  gridSquare.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      if (event.type === "mouseover" && mouseDown) {
        event.target.style.backgroundColor = "#ffffff";
      }
    });
  });
});

// CLEAR LISTENER
clearBtn.addEventListener("click", (e) => {
  let grid = document.querySelectorAll(".grid");
  grid.forEach((square) => {
    square.style.backgroundColor = "#ffffff";
  });
});

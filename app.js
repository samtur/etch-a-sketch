const canvasContainer = document.querySelector(".canvasContainer");
const colorPicker = document.querySelector("#colorpicker");

let num = 0;

function createGrid(num) {
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    canvasContainer.appendChild(div);
  }
  const gridSquare = document.querySelector(".grid");
}

function gridSize() {
  num = prompt("Enter a grid size");
  if (num > 150) {
    num = prompt("Number is too high. Please enter a lower size.");
  }
  gridValue = 750 / num;
  canvasContainer.style.gridTemplateColumns = `repeat(${num}, ${gridValue}px)`;
  return num;
}

// function color() {}

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

gridSize();
createGrid(num);
draw();
// function createCol(num) {
//   for (let i = 0; i <= num; i++) {
//     let div = document.createElement("div");
//     div.classList.add("col");
//     canvasContainer.appendChild(div);
//   }
// }

// function createRow(num){
//     for(let i= 0; i <=num; i++){

//     }
// }

// createCol(num);

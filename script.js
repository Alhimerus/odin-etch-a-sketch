const row = document.createElement("div");
row.classList.add("row");
const container = document.getElementById("container");
const square = document.createElement("div");
square.classList.add("square");

function createGrid() {
  let length = parseFloat(prompt("How many squares per side would you like? (MAX 100)", 16));
  if (length < 0 || length > 100) {
    alert("Wrong number!");
    return createGrid();
  }
  for (let i = 0; i < length; i++) {
    container.appendChild(row.cloneNode());
  }
  const rowList = document.getElementsByClassName("row");
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      rowList[i].appendChild(square.cloneNode());
    }
  }
  const squareList = document.getElementsByClassName("square");
  for (let i = 0; i < squareList.length; i++) {
    let color = randomRGB();
    squareList[i].addEventListener("pointerover", () => {
      if (squareList[i].style.backgroundColor != "") {
        color = darkenColor(color);
      }
      squareList[i].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    })
  }
}

function randomRGB() {
  let randR = Math.floor(Math.random() * 255);
  let randG = Math.floor(Math.random() * 255);
  let randB = Math.floor(Math.random() * 255);
  return [randR, randG, randB];
}

function darkenColor(colorArray) {
  for (let i = 0; i <= 2; i++) {
    colorArray[i] -= 25;
    if (colorArray[i] < 0) { colorArray[i] = 0; }
  }
  return colorArray;
}

createGrid();
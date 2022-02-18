const row = document.createElement("div");
row.classList.add("row");
const container = document.getElementById("container");
const square = document.createElement("div");
square.classList.add("square");

function createGrid() {
  let length = parseFloat(prompt("How many squares per side would you like? (MAX 100)"));
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
      squareList[i].style.backgroundColor = color;
    })
  }
}

function randomRGB() {
  let randR = Math.random() * 255;
  let randG = Math.random() * 255;
  let randB = Math.random() * 255;
  return `rgb(${randR}, ${randG}, ${randB})`;
}

createGrid();

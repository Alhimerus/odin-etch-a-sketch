const row = document.createElement("div");
row.classList.add("row");
const container = document.getElementById("container");
const square = document.createElement("div");
square.classList.add("square");

let length = 50;
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
  squareList[i].addEventListener("pointerover", () => {
    squareList[i].style.backgroundColor = "blue";
  })
}
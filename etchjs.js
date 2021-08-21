const container = document.createElement("div");
const main = document.querySelector("main");

main.appendChild(container);
container.classList.add("grid-container");
let squareSideLength = 8;
frac = 100 / squareSideLength;
container.style.setProperty(
  "grid-template-columns",
  `repeat(${squareSideLength},${frac}%)`
);
container.style.setProperty(
  "grid-template-rows",
  `repeat(${squareSideLength},${frac}%)`
);

let item;
for (let i = 0; i < squareSideLength ** 2; i++) {
  item = document.createElement("div");
  container.appendChild(item);
  item.classList.add("grid-square");
}

const griditem = document.getElementsByClassName("grid-square");
for (var i = 0; i < griditem.length; i++) {
  griditem[i].addEventListener("mouseover", (event) => {
    console.log("hi");
    event.target.style.setProperty("background", "blue");
  });
}

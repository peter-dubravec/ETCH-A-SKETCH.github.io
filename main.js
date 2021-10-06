//creating 16x16 grid
let wrapper = document.querySelector(".wrapper");
let buttonNewGrid = document.querySelector(".buttonNewGrid");

function addDiv(i) {
  let div = `div${i}`;
  let createdDiv = document.createElement(div);
  return createdDiv;
}

function createGrid(numOfSquares, squaresWidth, option = "default") {
  let container = document.createElement("div");
  container.classList = "container";
  wrapper.insertBefore(container, buttonNewGrid);

  // wrapper.appendChild(container);
  for (let i = 0; i < numOfSquares; i++) {
    let div = addDiv(i);
    div.className = "row";
    container.appendChild(div);

    for (let j = 0; j < numOfSquares; j++) {
      let columnDiv = document.createElement("div");
      columnDiv.classList = "columnDiv";
      columnDiv.style.width = squaresWidth + "px";
      columnDiv.style.height = squaresWidth + "px";
      div.appendChild(columnDiv);
    }
  }
  let divHover = document.querySelectorAll(".columnDiv");
  divHover.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      e.target.classList.add("changeToRed");
    });
  });
}
// initial setting
let numOfSquares = 16;
let squaresWidth = 35;

createGrid(numOfSquares, squaresWidth);

// New blank grid after clicking button

buttonNewGrid.addEventListener("click", () => {
  let columnDiv = document.querySelectorAll(".columnDiv");
  columnDiv.forEach((div) => {
    div.classList.remove("changeToRed");
  });
});

// Button to change numOfSquares

const buttonNumOfSquares = document.querySelector(".buttonNumOfSquares");
buttonNumOfSquares.addEventListener("click", () => {
  let container = document.querySelector(".container");
  let numOfSquares = prompt("Please enter a number of squares");
  console.log(numOfSquares);
  if (!numOfSquares) {
    return;
  }
  if (numOfSquares > 100) {
    alert("Please enter number that is less than 100");
    return;
  }
  let squaresWidth = parseFloat(560 / numOfSquares).toFixed(2);
  wrapper.removeChild(container);
  createGrid(numOfSquares, squaresWidth);
});

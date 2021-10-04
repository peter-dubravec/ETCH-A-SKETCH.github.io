//creating 16x16 grid

let container = document.createElement("div");
container.classList = "container";

document.body.appendChild(container);

function addDiv(i) {
  let div = `div${i}`;
  let createdDiv = document.createElement(div);
  return createdDiv;
}

function createGrid() {
  for (let i = 0; i < 16; i++) {
    let div = addDiv(i);
    div.className = "divGrid";
    container.appendChild(div);

    for (let j = 0; j < 16; j++) {
      let insideDiv = document.createElement("div");
      insideDiv.classList = "insideDiv";
      div.appendChild(insideDiv);
    }
  }
}

createGrid();

// hovering effect

let divHover = document.querySelectorAll(".insideDiv");

divHover.forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    e.target.classList.add("changeToRed");
  });
  element.addEventListener("animationend", (e) => {
    e.target.classList.remove("changeToRed");
  });
});

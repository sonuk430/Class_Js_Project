let circleEL = document.querySelector(".circle");

let colorBtnEl = document.querySelector("#colorBtn");

let shapeBtnEl = document.querySelector("#shapeBtn");

let colorArr = [
  "red",
  "yellow",
  "blue",
  "aqua",
  "orangered",
  "brown",
  "violet",
];

let shapArr = [
  "triangle-up",
  "triangle-down",
  "triangle-left",
  "triangle-right",
  "pacman",
  "moon",
];

let colorIndex = 0;
let shapIndex = 0;
colorBtnEl.addEventListener("click", () => {
  let color = colorArr[colorIndex];

  circleEL.style.backgroundColor = color;
  colorIndex++;
  console.log(color);
  if (colorIndex == colorArr.length) {
    colorIndex = 0;
  }
});

shapeBtnEl.addEventListener("click", () => {
  let shap = shapArr[shapIndex];
  circleEL.classList.add(`${shap}`);
  shapIndex++;
  console.log(shap);
  if (shapIndex == shapArr.length) {
    shapIndex = 0;
  }
});

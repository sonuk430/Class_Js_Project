let countEl = document.querySelector(".count");

let incrementByEl = document.querySelector("#incrementBy");

let plusEl = document.querySelector("#plus");

let minusEl = document.querySelector("#minus");

let resetEl = document.querySelector(".reset");

plusEl.addEventListener("click", () => {
  let countVal = parseInt(countEl.innerText);

  let incrementByVal = parseInt(incrementByEl.value);

  countEl.innerText = countVal + incrementByVal;
});

minusEl.addEventListener("click", () => {
  let countVal = parseInt(countEl.innerText);

  let incrementByVal = parseInt(incrementByEl.value);

  countEl.innerText = countVal - incrementByVal;
});

resetEl.addEventListener("click", () => {
  countEl.innerText = 0;
  incrementByEl.value = 1;
});

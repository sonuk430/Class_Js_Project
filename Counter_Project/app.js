let box1El = document.querySelector(".box1");

let inctementByEl = document.querySelector("#inctementBy");

let plusEl = document.querySelector("#plus");

let minusEl = document.querySelector("#minus");

let val = 0;

plusEl.addEventListener("click", () => {
  val++;
  console.log(val);
  box1El.innerText = `${val}`;
});

minusEl.addEventListener("click", () => {
  val--;
  box1El.innerText = `${val}`;
  console.log(val);
});

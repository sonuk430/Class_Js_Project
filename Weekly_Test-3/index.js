const addNewProductBtn = document.querySelector("#addNewProductBtn");

const userSlipSubmitBtn = document.querySelector("#userSlipSubmitBtn");

const productList = document.querySelector(".productList");

const userSlip = document.querySelector(".userSlip");

const pName = document.querySelector("#pName");

const pAmount = document.querySelector("#pAmount");

const pQty = document.querySelector("#pQty");

let decrement = document.querySelector(".decrement");

let qunatity = document.querySelector(".qunatity");

let increment = document.querySelector(".increment");

function creatElements() {
  let name = pName.value;
  let amount = pAmount.value;
  let qty = pQty.value;

  let list = document.createElement("li");
  list.className = "listItems";
  let div1 = document.createElement("div");

  div1.id = "productName";
  div1.innerText = `${name}`;

  let div2 = document.createElement("div");

  div2.id = "productAmount";
  div2.innerText = `${amount}`;
  let div3 = document.createElement("div");

  div3.id = "productQty";

  let span1 = document.createElement("span");

  span1.innerText = `${"-"}`;

  span1.className = "decrement";
  let span2 = document.createElement("span");

  span2.innerText = `${qty}`;

  let span3 = document.createElement("span");

  span3.innerText = `${"+"}`;

  span3.className = "increment";
  list.appendChild(div1);
  list.appendChild(div2);
  list.appendChild(div3);
  div3.appendChild(span1);
  div3.appendChild(span2);
  div3.appendChild(span3);
  productList.appendChild(list);
}
let addNewProductBtnEl = true;

addNewProductBtn.addEventListener("click", () => {
  if (addNewProductBtnEl === true) {
    userSlip.style.display = "flex";
    addNewProductBtnEl = false;
  } else {
    userSlip.style.display = "none";
    addNewProductBtnEl = true;
  }
});

userSlipSubmitBtn.addEventListener("click", () => {
  if (pName.value === "" || pAmount.value === "" || pQty.value === "") {
    alert("plese fill all input");
    return;
  }
  creatElements();
});

productList.addEventListener("click", (e) => {
  // const listItems = document.querySelector(".listItems");

  if (e.target.className === "increment") {
    let newVariablePlus = parseInt(e.target.previousElementSibling.innerText);

    newVariablePlus++;
    e.target.previousElementSibling.innerText = newVariablePlus;
  } else if (e.target.className === "decrement") {
    let newVariablemins = parseInt(e.target.nextElementSibling.innerText);
    newVariablemins--;

    if (newVariablemins === -1) {
      e.target.parentNode.parentNode.remove();
    } else {
      e.target.nextElementSibling.innerText = newVariablemins;
    }
  }
});

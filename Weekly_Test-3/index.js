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

const RightSideProductList = document.querySelector(".RightSideProductList");

let lefttSideLi = document.querySelectorAll(".listItems");

let rightSideLi = document.querySelectorAll(".listItemsDetails");

function updatePlus(idx, value, amount) {
  // console.log(idx, value, amount);
  rightSideLi = document.querySelectorAll(".listItemsDetails");

  rightSideLi.forEach((el) => {
    if (el.value == idx) {
      rightSideLi[idx].children[1].innerText = value * amount;
    }
  });
}

function totalPrice(amount) {
  let totalAmount = document.querySelector(".totalAmount");
  rightSideLi = document.querySelectorAll(".listItemsDetails");

  let totalPriceValue = 0;

  rightSideLi.forEach((el) => {
    let listPrice = parseInt(el.children[1].innerText);

    totalPriceValue += listPrice;
    console.log(listPrice);
  });
  totalAmount.innerText = totalPriceValue;
}

totalPrice();
// updatePlus();

function updateMinus(idx, value, amount) {
  // console.log(idx, value, amount);
  rightSideLi = document.querySelectorAll(".listItemsDetails");

  rightSideLi.forEach((el) => {
    if (el.value == idx) {
      rightSideLi[idx].children[1].innerText = value * amount;
    }
  });
}

// left side elements li created;

function creatElement1(name, price, qty, val) {
  let li = document.createElement("li");
  li.innerHTML = `<div id="productName">${name}</div>
  <div id="productAmount">${price}</div>
  <div id="productQty">
    <span class="decrement">${"-"}</span>
    <span class="qunatity">${qty}</span>
    <span class="increment">${"+"}</span>
  </div>`;
  li.classList.add("listItems");
  li.setAttribute("value", val); // index findout krne ke liye add kiya he.
  productList.appendChild(li);
}

creatElement1("product-1", "100", "2", 0);
creatElement1("product-2", "200", "3", 1);

// right side element li created;
function creatElement2(pName, pAmount, qty, val) {
  let li = document.createElement("li");
  li.innerHTML = `<div>${pName}</div>
  <div>${pAmount * qty}</div>`;
  li.classList.add("listItemsDetails");
  li.setAttribute("value", val);
  RightSideProductList.appendChild(li);
}

creatElement2("product-1", "100", "2", 0);
creatElement2("product-2", "200", "3", 1);

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

let j = 2;

userSlipSubmitBtn.addEventListener("click", () => {
  if (pName.value === "" || pAmount.value === "" || pQty.value === "") {
    alert("plese fill all input");
    return;
  }

  creatElement1(pName.value, pAmount.value, pQty.value, j);
  creatElement2(pName.value, pAmount.value, pQty.value, j++);
});

productList.addEventListener("click", (e, idx) => {
  if (e.target.className === "increment") {
    let newVariablePlus = parseInt(e.target.previousElementSibling.innerText);
    let idx = e.target.parentElement.parentElement.value;
    // console.log(idx);
    newVariablePlus++;

    e.target.previousElementSibling.innerText = newVariablePlus;
    updatePlus(
      idx,
      newVariablePlus,
      e.target.parentElement.parentElement.children[1].innerText
    );
    totalPrice(e.target.parentElement.parentElement.children[1].innerText);
  } else if (e.target.className === "decrement") {
    let newVariablemins = parseInt(e.target.nextElementSibling.innerText);
    let idx = e.target.parentElement.parentElement.value;
    newVariablemins--;

    updateMinus(
      idx,
      newVariablemins,
      e.target.parentElement.parentElement.children[1].innerText
    );
    totalPrice(e.target.parentElement.parentElement.children[1].innerText);

    if (newVariablemins === -1) {
      e.target.parentNode.parentNode.remove();
    } else {
      e.target.nextElementSibling.innerText = newVariablemins;
    }
  }
});

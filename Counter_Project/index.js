const countShow = document.querySelector(".countShow");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const addBy = document.querySelector(".addBy");
const resetBtn = document.querySelector(".resetBtn");

minus.addEventListener("click",()=>{
    // countShow me jo string he use hm number me convert kr rahe he taki usme koe koe or number add kr ske
    const count = parseInt(countShow.innerText);
    
    // addBy "input me jo bhi value he use number me convert kr rahe he"
    const addByValue = parseInt(addBy.value);

    countShow.innerText = count-addByValue;

})

plus.addEventListener("click",()=>{
    // countShow me jo string he use hm number me convert kr rahe he taki usme koe koe or number add kr ske
    const count = parseInt(countShow.innerText);
    
    // addBy "input me jo bhi value he use number me convert kr rahe he"
    const addByValue = parseInt(addBy.value);

    countShow.innerText = count+addByValue;

})

resetBtn.addEventListener("click",()=>{
    countShow.innerText = "0";
})
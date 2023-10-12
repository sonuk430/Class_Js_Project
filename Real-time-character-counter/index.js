const textarea = document.querySelector(".textarea");
// console.log("done");
const totalChar = document.querySelector(".totalChar");

const remainingChar = document.querySelector(".RemainingChar")

updateCount();

textarea.addEventListener("keyup",()=>{
    updateCount();
});

function updateCount(){
    totalChar.innerText = textarea.value.length;

    remainingChar.innerText = 50-textarea.value.length;
}
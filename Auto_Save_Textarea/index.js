const myTextarea = document.querySelector("#myTextarea");

myTextarea.addEventListener("keyup",()=>{

   let store = localStorage.setItem("saveText",myTextarea.value)

//    console.log(store);

})
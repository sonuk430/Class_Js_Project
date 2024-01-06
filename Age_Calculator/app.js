
let btn = document.querySelector("#btn");

let showAge = document.querySelector("#showAge")


btn.addEventListener("click",()=>{
    // why birthDayInputEl is faching in function 
    let birthDayInputEl  = document.querySelector("#birthDayInput").value;

    if(birthDayInputEl === ""){
        alert("Please select a Date of BirthDay");
        return;
    }

    let today = new Date();
    let birthDay = new Date(birthDayInputEl);


    // get the year
    let birthYear = today.getFullYear() - birthDay.getFullYear();

    // get the month
    let birthMonth = today.getMonth() - birthDay.getMonth();

    // get the day
    let day = today.getDay() - birthDay.getDay();
   

    // if(birthMonth < 0 || (birthMonth === 0 && today.getDate() < birthDay.getDate())){
    //     birthYear--;
    // }

    showAge.innerText = `${birthYear} Year ${birthMonth} Month ${day} Day`
    
})

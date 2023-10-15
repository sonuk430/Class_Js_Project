const monthName = document.querySelector("#monthName");
const dayname = document.querySelector("#dayName");
const dayNumber = document.querySelector("#dayNumber");
const year = document.querySelector("#year");


const date = new Date();
const month = date.getMonth();

console.log(date);
console.log(month);

monthName.innerText = date.toLocaleDateString("en",{month: "long"});

dayname.innerText = date.toLocaleString("en", {
    weekday: "long",
  });

  dayNumber.innerText = date.getDate();

  year.innerText = date.getFullYear();
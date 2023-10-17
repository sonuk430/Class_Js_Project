const hours = document.querySelector("#hours");
const mint = document.querySelector("#mint");
const seconds = document.querySelector("#seconds");
const amPm = document.querySelector("#amPm");

function updateTime() {
  const time = new Date();

  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let dinRat = "AM";

  if(dinRat < 12){
    dinRat = dinRat-12;
    dinRat = "PM";
  }


  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;


  hours.innerHTML = hr;
  mint.innerHTML = min;
  seconds.innerHTML = sec;
  amPm.innerHTML = dinRat;
 
//  settimout function lagaya he taki code her 1 sec pe update hota rahe
  setTimeout(() => {
    updateTime();
  }, 1000);
}

updateTime();

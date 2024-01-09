let wrapperEl = document.querySelector(".wrapper");
let darkModeEl = document.querySelector("#darkMode");

let toggle = "dark";

darkModeEl.addEventListener("click", () => {
  wrapperEl.classList.toggle("lightMode");
  if (wrapperEl.classList.contains("lightMode")) {
    darkModeEl.innerText = "Light Mode";
    // console.log(wrapperEl.classList.contains("Light Mode"));
  } else {
    darkModeEl.innerText = "Dark Mode";
  }
});

let btn = document.querySelector("#btn");
let container = document.querySelector(".container");

btn.addEventListener("click", (e) => {
  let textarea = document.querySelector("#textarea").value;

  let colorcode = document.querySelector("#colorcode").value;

  if (textarea === "") {
    alert("Please enter some note");
    return;
  } else {
    let containerDiv = document.createElement("div");
    container.appendChild(containerDiv);
    containerDiv.innerText = textarea;
    containerDiv.setAttribute("class", "newDiv");
    containerDiv.innerHTML = `<p>${textarea} <span class= "close">x</span></p>`;
    containerDiv.style.backgroundColor = colorcode;
  }
});

container.addEventListener("click", (e) => {
  if (e.target.innerText === "x") {
    e.target.parentElement.parentElement.remove();
  }
});

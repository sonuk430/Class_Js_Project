let keyNameEl = document.querySelector(".keyName");

let keyCode = document.querySelector(".keyCode");

document.addEventListener("keydown", (e) => {
  let keyName = e.key;
  let key_num = e.keyCode;
  keyNameEl.innerHTML = `You Presseed:- ${keyName}`;

  keyCode.innerHTML = `${key_num}`;
  keyCode.style.color = "aqua";
  keyCode.parentNode.style.display = "block";

});

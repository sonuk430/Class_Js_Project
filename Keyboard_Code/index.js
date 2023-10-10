
window.addEventListener("keydown",(e) => {

    document.querySelector("h1").innerHTML = `You pressed:- <span>"${e.key}"</span>`;

    document.querySelector(".key_code").innerHTML = `key code:- <span>${e.keyCode}</span>`;
});



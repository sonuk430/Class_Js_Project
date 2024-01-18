const btn = document.querySelector("#btn");

let p = document.querySelector("div > p");

btn.addEventListener("click", clickHandler);

function clickHandler() {
  // fatch the joke via api
  const xhr = XMLHttpRequest('https://api.api-ninjas.com/v1/dadjokes?limit=1');
  xhr.open("GET");
  xhr.setRequstHeader('X-Api-Key','yOJeV4Ki9gu/9uaV9bNoLg==ZCx1SRp85g8KbRRH');
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      joke = result[0].joke;
      console.log(joke);

      // update the joke

      p.innerText = joke;
    }
  };
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let writeJoke = document.querySelector(".writeJoke");
  let joke = "";

  // fathing the joke api
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.api-ninjas.com/v1/dadjokes?limit=1");

  xhr.setRequestHeader("X-Api-Key", "yOJeV4Ki9gu/9uaV9bNoLg==ZCx1SRp85g8KbRRH");

  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      joke = result[0].joke;
      writeJoke.innerText = joke;
      // console.log(joke);
    }
  };
});

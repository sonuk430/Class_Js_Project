window.onload = () => display;

let search_field = document.querySelector("#search_field");

search_field.addEventListener("keyup", (e) => {
  let serachValue = search_field.value;

  console.log(e);
});

function display() {
  let search_result_container = document.querySelector(
    "#search_result_container"
  );
  //   console.log(search_result_container);

  emojiList.forEach((el) => {
    let newRow = document.createElement("tr");

    newRow.innerHTML = `<tr>
    <td>${el.emoji}</td>
    <td>${el.aliases}</td>
    <td>${el.description}</td>
   
  </tr>`;

    search_result_container.appendChild(newRow);
  });
}

display();

const accessKey = "L6iDWl_icdxxRzpJAhQP3oGpStZDY1yTdplU74nH-NE";
const searchForm = document.querySelector("form");
const imagesContainer = document.querySelector(".images-container");
const searchInput = document.querySelector(".search-input");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
const searchBtn = document.querySelector("#searchBtn");

let page = 1;
// function to fetch using unsplash ApI

const fetchImages = async (query, pageNO) => {
  try {
    if (pageNO === 1) {
      imagesContainer.innerHTML = "";
    }
    // console.log(query);

    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNO}&client_id=${accessKey}`;

    const response = await fetch(url);

    const data = await response.json();

    // console.log(data);

    if (data.results.length > 0) {
      data.results.forEach((photo) => {
        // creating image div

        const imageElement = document.createElement("div");

        imageElement.classList.add("imageDiv");

        imageElement.innerHTML = `<img src='${photo.urls.regular}'/>`;
        //  overlay div create
        const overlayElemnt = document.createElement("div");

        overlayElemnt.classList.add("overlay");

        //  creating over lay text

        const overlayText = document.createElement("h3");
        overlayText.innerText = `${photo.alt_description};`;

        overlayElemnt.appendChild(overlayText);
        imageElement.appendChild(overlayElemnt);

        imagesContainer.appendChild(imageElement);
      });

      if (data.total_page === pageNO) {
        loadMoreBtn.style.display = "none";
      } else {
        loadMoreBtn.style.display = "block";
      }
    } else {
      imagesContainer.innerHTML = `<h2>No Image found</h2>`;

      if (loadMoreBtn.style.display === "block")
        loadMoreBtn.style.display = "none";
    }
  } catch (error) {
    imagesContainer.innerHTML = `<h2>Faild to fetch images. Please try again later</h2>`;
  }
};

// adding event to search form.
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = searchInput.value.trim();

  if (inputText !== "") {
    page = 1;
    fetchImages(inputText, page);
  } else {
    imagesContainer.innerHTML = `<h2>Please enter a search query.</h2>`;

    if (loadMoreBtn.style.display === "block")
      loadMoreBtn.style.display = "none";
  }
});

// adding load more page

loadMoreBtn.addEventListener("click", () => {
  fetchImages(searchInput.value.trim(), ++page);
});

searchBtn.addEventListener("click",()=>{
    
    const inputText = searchInput.value.trim();

    if (inputText !== "") {
      page = 1;
      fetchImages(inputText, page);
    } else {
      imagesContainer.innerHTML = `<h2>Please enter a search query.</h2>`;
  
      if (loadMoreBtn.style.display === "block")
        loadMoreBtn.style.display = "none";
    }
    fetchImages();
})

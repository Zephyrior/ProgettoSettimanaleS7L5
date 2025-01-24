const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY";
//const URL = "https://striveschool-api.herokuapp.com/api/product/";

const params = new URLSearchParams(window.location.search);
const productId = params.get("_id");
console.log(productId);

const URL = productId ? "https://striveschool-api.herokuapp.com/api/product/" + productId : "https://striveschool-api.herokuapp.com/api/product/";

fetch(URL, {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella generazione dei prodotti");
    }
  })
  .then((productList) => {
    console.log(productList);

    const row = document.getElementById("singleProductContainer");

    const productContainer = document.createElement("div");
    productContainer.classList.add("col-6");
    //const header = document.createElement("h1");
    //header.innerHTML = `${productList.name} details`;
    //productContainer.appendChild(header);
    productContainer.innerHTML = `<div class="card">
  <img src="${productList.imageUrl}" class="card-img-top" alt="${productList.name}">
  <div class="card-body align-text-center">
    <h3 class="card-title">${productList.name}</h3>
    <p class="card-text">${productList.description}.</p>
    <p class="card-text fs-2">€ ${productList.price}</p>
  </div>
</div>`;

    row.appendChild(productContainer);
  })

  .catch((err) => console.log(err));

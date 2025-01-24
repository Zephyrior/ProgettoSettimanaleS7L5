const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY";
const URL = "https://striveschool-api.herokuapp.com/api/product/";

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
    const row = document.getElementById("productContainer");

    for (let i = 0; i < productList.length; i++) {
      const element = productList[i];

      const col = document.createElement("div");
      col.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${element.imageUrl}" class="card-img-top" alt="${element.pName}">
  <div class="card-body">
    <h5 class="card-title">${element.pName}e</h5>
    <p class="card-text">${element.description}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
      row.appendChild(col);
    }
  })
  .catch((err) => console.log(err));

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
      col.classList.add("col-4");

      const card = document.createElement("div");
      card.classList.add("card");
      col.appendChild(card);
      card.innerHTML = `<img src="${element.imageUrl}" class="card-img-top mt-4" alt="${element.pName}">`;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.appendChild(cardBody);

      const prodTitle = document.createElement("h5");
      prodTitle.classList.add("cart-title");
      prodTitle.innerHTML = `${element.name}`;
      cardBody.appendChild(prodTitle);

      const prodDesc = document.createElement("p");
      prodDesc.classList.add("card-text");
      prodDesc.innerHTML = `${element.description}`;
      cardBody.appendChild(prodDesc);

      const modButton = document.createElement("button");
      modButton.classList.add("btn", "btn-outline-info", "border", "border-0");
      modButton.innerText = "Modifica";
      cardBody.appendChild(modButton);
      row.appendChild(col);

      modButton.onclick = () => {
        window.location.assign("./backOffice.html");
      };
    }
  })
  .catch((err) => console.log(err));

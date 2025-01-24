const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY";
const URL = "https://striveschool-api.herokuapp.com/api/product/";

class Products {
  constructor(pName, description, brand, imageUrl, price) {
    this.pName = pName;
    this.description = description;
    this.brand = brand;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}

let eProduct = [];

const eForm = document.getElementById("backOfficeForm");

eForm.onsubmit = function (event) {
  event.preventDefault();

  const { pName, description, brand, imgUrl, price } = event.target.elements;

  const newProduct = new Products(pName.value, description.value, brand.value, imgUrl.value, price.value);

  eProduct.push(newProduct);
  console.log(eProduct);
  localStorage.setItem("eProduct", JSON.stringify(eProduct));
  eForm.reset();

  fetch(URL, {
    method: "PUT",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella creazione nuovo prodotto");
      }
    })
    .catch((err) => console.log(err));
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY";
const URL = "https://striveschool-api.herokuapp.com/api/product/";

fetch(URL, {
  //method: "POST",
  // body: JSON.stringify(eProduct),
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
  .catch((err) => console.log(Error));

class Products {
  constructor(pName, description, brand, imgUrl, price) {
    this.pName = pName;
    this.description = description;
    this.brand = brand;
    this.imgUrl = imgUrl;
    this.price = price;
  }
}

let eProduct = [];

const form = document.getElementById("backOfficeForm");

form.onsubmit = function (event) {
  event.preventDefault();

  const { pName, description, brand, imgUrl, price } = event.target.elements;

  const newProduct = new Products(pName.value, description.value, brand.value, imgUrl.value, price.value);

  eProduct.push(newProduct);
  console.log(eProduct);
};

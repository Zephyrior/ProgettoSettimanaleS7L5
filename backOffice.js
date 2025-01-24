const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY";
const URL = "https://striveschool-api.herokuapp.com/api/product/";

class Products {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

let eProduct = [];

const eForm = document.getElementById("backOfficeForm");

eForm.onsubmit = function (event) {
  event.preventDefault();

  //const { pName, description, brand, imgUrl, price } = event.target.elements;
  const newProduct = {
    name: eForm.elements.name.value,
    description: eForm.elements.description.value,
    brand: eForm.elements.brand.value,
    imageUrl: eForm.elements.imageUrl.value,
    price: eForm.elements.price.value,
  };
  //const newProduct = new Products(pName.value, description.value, brand.value, imgUrl.value, price.value);

  //eProduct.push(newProduct);
  //console.log(eProduct);
  //localStorage.setItem("eProduct", JSON.stringify(eProduct));
  eForm.reset();

  fetch(URL, {
    method: "POST",
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

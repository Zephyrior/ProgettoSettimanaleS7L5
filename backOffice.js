const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY";
//const URL = "https://striveschool-api.herokuapp.com/api/product/";

const params = new URLSearchParams(window.location.search);
const productId = params.get("_id");
console.log(productId);

const URL = productId ? "https://striveschool-api.herokuapp.com/api/product/" + productId : "https://striveschool-api.herokuapp.com/api/product/";

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

window.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const delButton = document.getElementById("delButton");
  const resButton = document.getElementById("resButton");

  delButton.onclick = () => {
    const hasConfirmed = confirm("Are you sure you want to delete the selected product?");

    if (hasConfirmed) {
      fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((deletedProduct) => {
          window.location.assign("./mainPage.html");
        })
        .catch((err) => console.log(err));
    }
  };

  if (productId) {
    submitBtn.innerText = "Update Product";
    submitBtn.classList.remove("btn-primary", "btn-lg");
    submitBtn.classList.add("btn-success", "me-3");
    resButton.classList.add("d-none");
    delButton.classList.remove("d-none", "btn-lg");
    delButton.classList.add("ms-3");

    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((productList) => {
        console.log(productList);

        eForm.elements.name.value = productList.name;
        eForm.elements.description.value = productList.description;
        eForm.elements.brand.value = productList.brand;
        eForm.elements.imageUrl.value = productList.imageUrl;
        eForm.elements.price.value = productList.price;
      })
      .catch((err) => console.log(err));
  }
});
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
    method: productId ? "PUT" : "POST",
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
const resButton = document.getElementById("resButton");
resButton.onclick = () => {
  eForm.reset();
};

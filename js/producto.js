console.log("producto.js");

let qs = location.search;
console.log("query string: ", qs);
let qsto = new URLSearchParams(qs);
const id = qsto.get('id');


let url = `https://fakestoreapi.com/products/categories/${id}`;


fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let title = document.querySelector("h1");
        title.innerText = `${title}`;
        let image = document.querySelector(".img");
        let status = document.querySelector(".status");
        let especie = document.querySelector(".especies");
        image.src = data.image;
        status.innerText += data.status;
        especie.innerText += data.species;

    })
    .catch(function (error) {
        console.error(error);
    });
function agregarAlCarrito(producto) {
    let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];
    productosEnCarrito.push(producto);
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
};


console.log("producto.js");

let qs = location.search;
console.log("query string", qs);
let qsto = new URLSearchParams(qs);
const productId = qsto.get('id');

let apiUrl = `https://fakestoreapi.com/products/${productId}`;
if (productId) {
    fetch(apiUrl)
        .then(function(response){
            return response.json()
        })
        
        .then(function(data) {
            let title = document.querySelector(".product-title");
            let image = document.querySelector(".product-image");
            let categoryLink = document.querySelector('.category-link');
            let status = document.querySelector(".product-category");
            let especie = document.querySelector(".product-price");

            title.innerText = data.title;
            categoryLink.href = `./category.html?category=${data.category}`;
            image.src = data.image;
            status.innerText = `Categoría: ${data.category}`;
            especie.innerText = `Precio: $${data.price}`;

            let buyBtn = document.querySelector(".buy-btn.add-to-cart");
            buyBtn.addEventListener("click", function (e) {
                e.preventDefault();
                agregarAlCarrito(data);
            });
        })
        .catch(function(error){
            return console.log(error)
        });
}

    function agregarAlCarrito(producto) {
        let productosEnCarrito = localStorage.getItem("carItem");
        let carrito = [];

        if (productosEnCarrito !== null) {
            carrito = JSON.parse(productosEnCarrito);
        }

        carrito.push(producto.id);
        localStorage.setItem("carItem", JSON.stringify(carrito));
        let anadido = alert(`Producto "${producto.title}" añadido al carrito`);
        console.log(anadido);
        console.log("Carrito actualizado:", carrito);
    }

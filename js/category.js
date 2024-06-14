document.addEventListener('DOMContentLoaded', function () {
    let productIn = document.querySelector("#categoria");
    let categoriaTitulo = document.querySelector("h2");

    fetch("https://fakestoreapi.com/products/category")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let contenido = "";

            for (let i = 0; i < data.length; i++) {
                let producto = data[i];
                contenidoHTML += `
                    <div class="elemento-hijo">
                        <img src="${producto.image}" alt="${producto.title}" width="100" />
                        <p>${producto.title}</p>
                        <p>Description: ${producto.description}</p>
                        <p>$${producto.price}</p>
                        <p>${producto.category}</p>
                        <button class="agregar-al-carrito-btn" data-id="${producto.id}">Agregar al carrito</button>
                    </div>`;
            }
            productIn.innerHTML = contenido;

            document.querySelectorAll(".agregar-al-carrito-btn").forEach(button => {
                button.addEventListener("click", function() {
                    let productId = this.dataset.id;
                    let product = data.find(p => p.id == productId);
                    agregarAlCarrito(product);
                });
            });
        })
        .catch(function (error) {
            console.error('Error fetching products:', error);
        });

     function agregarAlCarrito(producto) {
        let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];
        productosEnCarrito.push(producto);
        localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    }
});

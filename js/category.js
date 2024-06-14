document.addEventListener('DOMContentLoaded', function () {
    let productIn = document.querySelector("#producto-container");

    fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(function (res) {
            return res.json();
        })
        .then(function (dato) {
            let contenido = "";

            for (let i = 0; i < dato.length; i++) {
                contenido += `
                <div class= "contenedor-padre">
                    <div class= "elemento-hijo">
                        <img src="${dato[i].image}" alt="${dato[i].title}" width="100" />
                        <p>${dato[i].title}</p>
                        <p>Description: ${dato[i].description}</p>
                        <p>$${dato[i].price}</p>
                        <p>${dato[i].category}</p>
                        <button class="agregar-al-carrito-btn" data-id="${dato[i].id}">Agregar al carrito</button>
                    </div> 
                </div>`;
            }
            productIn.innerHTML = contenido;

            document.querySelectorAll(".agregar-al-carrito-btn").forEach(button => {
                button.addEventListener("click", function() {
                    let productId = this.dataset.id;
                    let producto = dato.find(p => p.id == productId);
                    agregarAlCarrito(producto);
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

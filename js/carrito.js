document.addEventListener('DOMContentLoaded', function () {
    const carritoList = document.querySelector("#carrito-list");
    const totalCarrito = document.querySelector("#total-carrito");

    let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];

    mostrarProductosEnCarrito(productosEnCarrito);

    function mostrarProductosEnCarrito(productos) {
        let total = 0;
        carritoList.innerHTML = "";

        productos.forEach(producto => {
            let itemHTML = `
                <li>
                    <img src="${producto.image}" alt="${producto.title}" width="100" />
                    <p>${producto.title}</p>
                    <p>Description: ${producto.description}</p>
                    <p>$${producto.price}</p>
                    <p>${producto.category}</p>
                </li>
            `;
            carritoList.innerHTML += itemHTML;
            total += producto.price;
        });

        totalCarrito.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    }
});

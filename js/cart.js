const carritoList = document.querySelector("#carrito-list");
const totalCarrito = document.querySelector("#total-carrito");
const finalizarCompraBtn = document.querySelector(".buy-btn");

let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];

mostrarProductosEnCarrito(productosEnCarrito);

function mostrarProductosEnCarrito(productos) {
    let total = 0;
    carritoList.innerHTML = "";

    if (productos.length === 0) {
        totalCarrito.innerHTML = `<h3>Su carrito está vacío</h3>`;
        finalizarCompraBtn.classList.add('hidden');
    } else {
        productos.forEach(producto => {
            let itemHTML = `
                        <div class= "elemento-hijo">
                            <img src="${producto.image}" alt="${producto.title}" width="100" />
                            <p>${producto.title}</p>
                            <p>Description: ${producto.description}</p>
                            <p>$${producto.price}</p>
                            <p>${producto.category}</p>
                        </div>
                `;
            carritoList.innerHTML += itemHTML;
            total += producto.price;
        });

        totalCarrito.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        finalizarCompraBtn.classList.remove('hidden');
    }
}

finalizarCompraBtn.addEventListener('click', function () {

    localStorage.removeItem("productosEnCarrito");

    alert("¡Gracias por tu compra!");

    location.replace("./index.html");
});

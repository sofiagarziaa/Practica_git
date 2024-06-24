console.log("cart.js");

let recuperoStorage = localStorage.getItem("cartItems");
let cart = document.querySelector(".cart");
let carritoList = document.querySelector(".cart-items");
let finalizarCompraBtn = document.querySelector(".buy-btn");
let totalCompra = document.querySelector(".total-carrito");
let elementosCarrito = "";
let total = 0;

if (recuperoStorage == null || JSON.parse(recuperoStorage).length === 0) {
    let mensaje = "Tu carrito está vacío";
    let empty = document.querySelector(".empty");
    empty.innerText = mensaje;
} else {
    let carrito = JSON.parse(recuperoStorage);
    for (let i = 0; i < carrito.length; i++) {
        let id = carrito[i];
        let url = `https://fakestoreapi.com/products/${id}`;

        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                total += data.price;
                elementosCarrito += `
                    <div class="elemento-hijo">
                        <img src="${data.image}" alt="${data.title}" width="100" />
                        <p>${data.title}</p>
                        <p>Description: ${data.description}</p>
                        <p>Precio: $${data.price}</p>
                        <a href="./producto.html?id=${data.id}" class="buy-btn add-to-cart">Ver más</a>
                    </div>`;
                carritoList.innerHTML = elementosCarrito;
                totalCompra.innerText = `Total: $${total}`;
            })
            .catch(function (e) {
                console.log(e);
            });
    }
}

finalizarCompraBtn.addEventListener('click', function () {
    localStorage.clear();
    alert("¡Gracias por tu compra!");
    location.replace("./index.html");
});


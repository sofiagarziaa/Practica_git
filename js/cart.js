console.log("cart.js");

let recuperoStorage = localStorage.getItem("cartItems");
let cart = document.querySelector(".cart");
let carritoList = document.querySelector(".cart-items");  // Asegúrate de tener un elemento con la clase .cart-items
let finalizarCompraBtn = document.querySelector("#finalizar-compra");  // Asegúrate de tener un botón con el id #finalizar-compra

let elementosCarrito = "";

if (recuperoStorage == null) {
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
                elementosCarrito += `
                    <div class="elemento-hijo">
                        <img src="${data.image}" alt="${data.title}" width="100" />
                        <p>${data.title}</p>
                        <p>Description: ${data.description}</p>
                        <p>$${data.price}</p>
                        <a href="./producto.html?id=${data.id}" class="buy-btn add-to-cart">Ver más</a>
                    </div>`;
                carritoList.innerHTML = elementosCarrito;
            })
            .catch(function (e) {
                console.log(e);
            });
    }
}

finalizarCompraBtn.addEventListener('click', function () {
    localStorage.removeItem("cartItems");
    alert("¡Gracias por tu compra!");
    location.replace("./index.html");
});

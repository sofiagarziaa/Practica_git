console.log(".cart.js");

let recuperoStorage = localStorage.getItem("carItem");
let carritoList = document.querySelector("carrito-list");
let totalCarrito = document.querySelector("total-carrito");

if (recuperoStorage === null) {
    mostrarCarritoVacio();
} else {
    let carrito = JSON.parse(recuperoStorage);
    mostrarProductosEnCarrito(carrito);
}

function mostrarCarritoVacio() {
    let mensaje = "Tu carrito está vacío";
    let empty = document.querySelector(".empty");
    empty.innerText = mensaje;
}

function mostrarProductosEnCarrito(carrito) {
    let elementosCarrito = "";
    let total = 0;

    carrito.forEach(productId => {
        let apiUrl = `https://fakestoreapi.com/products/${productId}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                elementosCarrito += `
                        <div class="elemento-hijo">
                            <img src="${data.image}" alt="${data.title}" width="100">
                            <p>${data.title}</p>
                            <p>Description: ${data.description}</p>
                            <p>$${data.price}</p>
                            
                        </div>`;
                carritoList.innerHTML = elementosCarrito;

                total += data.price;
                totalCarrito.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
            })
            .catch(error => console.log(error));
    });
}

let finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
finalizarCompraBtn.addEventListener("click", function () {
    localStorage.removeItem("carItem");
    alert("¡Gracias por tu compra!");
    location.replace("./index.html");
});


const carritoList = document.querySelector("#carrito-list");
const totalCarrito = document.querySelector("#total-carrito");
const finalizarCompraBtn = document.querySelector(".buy-btn");

let recuperoStorage = localStorage.getItem("cartItems")
let cart = document.querySelector(".cart")

let elementosCarrito = "";

if (recuperoStorage == null) {
    let mensaje = "Tu carrito esta vacio";
    let empty = document.querySelector(".empty");
    empty.innerText = mensaje;
} else {
    carrito = JSON.parse(recuperoStorage);
    for (let i = 0; i < carrito.length; i++) {
        let id = carrito[i]
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
                        <a href="./producto.html?id=${data.id}" class="select">Ver más</a>
                    </div>`;
                carritoList.innerHTML = elementosCarrito
            })
            .catch(function (e) {
                console.log(e);
            })
    }
}
/*mostrarProductosEnCarrito(productosEnCarrito);

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
});*/


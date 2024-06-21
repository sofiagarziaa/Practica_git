console.log(".cart.js")
let recuperoStorage = localStorage.getItem("carItem");
let lista = document.querySelector(".lista");
let elementosCarrito = '';

if (recuperoStorage == null) {
    let mensaje = "Tu carrito esta vacio"
    let empty = document.querySelector(".empty")
    empty.innerText = mensaje
} else {
    carrito = [];
    carrito = JSON.parse(recuperoStorage);
    for (let i = 0; i < carrito.length; i++) {
        const productId = carrito[i];
        const apiUrl = `https://fakestoreapi.com/products/${productId}`;

        fetch(apiUrl)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                elementosCarrito += `<div class="elemento-hijo">
                                    <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                                    <p>${data[i].title}</p>
                                    <p>Description: ${data[i].description}</p>
                                    <p>$${data[i].price}</p>
                                    <p>${data[i].category}</p>
                                    <a href="./producto.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                                </div>`;
                lista.innerHTML = elementosCarrito

            })
            .catch(function(e){
                console.log(e);

            })
    }
}

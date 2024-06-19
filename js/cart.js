let recuperoStorage = localStorage.getItem("carItem");
let lista = document.querySelector(".lista");
let elementosCarrito = ''; // Variable para almacenar el HTML dinámico del carrito

if (recuperoStorage === null) {
    let mensaje = "Tu carrito está vacío";
    let empty = document.querySelector(".empty");
    empty.innerText = mensaje;
} else {
    let carrito = JSON.parse(recuperoStorage);

    for (let i = 0; i < carrito.length; i++) {
        const id = carrito[i];
        const url = `https://fakestoreapi.com/products/${id}`;

        fetch(url)
            .then(function (res) {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(function (data) {
                // Construir el HTML para cada producto del carrito
                elementosCarrito += `<div class="elemento-hijo">
                                        <img src="${data.image}" alt="${data.title}" width="100" />
                                        <p>${data.title}</p>
                                        <p>Description: ${data.description}</p>
                                        <p>$${data.price}</p>
                                        <p>${data.category}</p>
                                        <a href="./producto.html?id=${data.id}" class="ver-mas-btn">Ver más</a>
                                    </div>`;
                
                // Actualizar el contenido de la lista con todos los productos del carrito
                lista.innerHTML = elementosCarrito;
            })
            .catch(function (error) {
                console.error('Error fetching product:', error);
                // Manejo de errores: podrías mostrar un mensaje de error o hacer otra acción aquí
            });
    }
}

/*let recuperoStorage =localStorage,getItem("carItem");

let lista = document.querySelector(".lista")
if(recuperoStorage == null){
    let mensaje ="Tu carrito esta vacio"
    let empty =document.querySelector(".empty")
    empty.innerText =mensaje
}else{
    carrito=[];
    carrito = JSON.parse(recuperoStorage)
    for (let index = 0; index < carrito.length; index++) {
        const producto = array[index];
        const id = array[i];
        const rul = `https://fakestoreapi.com/products/category/${id}`

        fetch(rul)
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
                                lista.innerHTML =elementosCarrito

        })
        .catch(function{
            console.log(e);
        
        })
    }
}
   

/*arreglar
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
*/
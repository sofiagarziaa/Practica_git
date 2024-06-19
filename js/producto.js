console.log("producto.js");

/* Obtener el id del producto de la URL
let qs = location.search;
console.log("query string: ", qs);
let qsto = new URLSearchParams(qs);
const id = qsto.get('id');

// Verificar si el id está presente en la URL
if (!id) {
    console.error("ID is undefined or null");
    // Mostrar un mensaje de error en el artículo de detalle si no hay id
    document.querySelector("article.detail").innerHTML = "<p>Error: Product ID is missing. Please check the URL and try again.</p>";
} else {
    // Construir la URL de la API con el id del producto
    let url = `https://fakestoreapi.com/products/${id}`;

    // Realizar la solicitud fetch
    fetch(url)
        .then(function (res) {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(function (data) {
            // Actualizar los elementos del DOM con los datos del producto
            let title = document.querySelector("h1");
            let image = document.querySelector("img");
            let status = document.querySelector(".status");
            let especie = document.querySelector(".especie");

            title.innerText = data.title; // Ajustar según la estructura del objeto de respuesta
            image.src = data.image;
            status.innerText = `Precio: $${data.price}`; // Ajustar según la estructura del objeto de respuesta
            especie.innerText = `Categoría: ${data.category}`; // Ajustar según la estructura del objeto de respuesta
        })
        .catch(function (error) {
            console.error('Error fetching product:', error);
            // Mostrar mensaje de error en el artículo de detalle
            document.querySelector("article.detail").innerHTML = "<p>Error fetching product details. Please try again later.</p>";
        });
}

// Manejo del carrito
let carrito = [];

// Recuperar elementos del carrito del localStorage
let recuperoStorage = localStorage.getItem("carItems");
if (recuperoStorage !== null) {
    carrito = JSON.parse(recuperoStorage);
}

// Agregar evento al botón de "Agregar al carrito"
let fav = document.querySelector(".fav");
fav.addEventListener("click", function (e) {
    e.preventDefault();
    carrito.push(id); // Agregar el id del producto al carrito
    let carStr = JSON.stringify(carrito);
    localStorage.setItem("carItems", carStr); // Guardar el carrito en localStorage
    console.log("Carrito actualizado:", carrito);
    console.log("localStorage:", localStorage);
});

*/

let qs = location.search; //Obtener la qs de la url
console.log("query string: ", qs)
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get("id"); //Obtener el dato de id del objeto literal

//Armar un nuevo fetch
let url = `https://fakestoreapi.com/products/category/men's clothing${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Paso 1: capturar DOM.
        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let status = document.querySelector('.status');
        let especie = document.querySelector('.especie');

        //Paso 2 y 3: actualizar datos y actualizar DOM;
        title.innerText = data.name;
        image.src=data.image;
        status.innerText += data.status;
        especie.innerText += data.species;      

    })
    .catch(function(error){
        console.log(error);
    })
    /*let carrito = [];
    let fav =document.querySelector(".fav")

    fav.addEventListener("click", function(e)){
        e.preventDefault();
        carrito.push(id)

    }

*/
    
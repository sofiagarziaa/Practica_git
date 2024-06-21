let qs = location.search;
console.log("query string", qs);
let qsto = new URLSearchParams(qs);
const Id = qsto.get('id');

let apiUrl = `https://fakestoreapi.com/products/${Id}`;
if (Id) {

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let title = document.querySelector(".product-title");
            let image = document.querySelector(".product-image");
            let categoryLink = document.querySelector('.categoryLink');

            let status = document.querySelector(".product-category");
            let especie = document.querySelector(".product-price");

            title.innerText = data.title;
            categoryLink = data.category;
            image.src = data.image;
            status.innerText = `Categoria:${data.category}`;
            especie.innerText = `Precio: $${data.price}`;

        })
        .catch(function(error) {
            console.error(error);
        });
        let carrito =[];

        let recuperoStorage =localStorage.getItem("cartItems")
        if(recuperoStorage !=null){
            let recStrgParse =JSON.parse(recuperoStorage)
            carrito = recStrgParse
        }

        let buyBtn =document.querySelector(".buy-btn add-to-cart")
        buyBtn.addEventListener("click", function(e){
            e.preventDefault();
            carrito.push(id)
            let carStr = JSON.stringify(carrito)
            localStorage.setItem("cartItem", carStr)

            console.log ("carrito: ", carrito);
            console.log ("localStorage: ", localStorage);
        })


} else {
    console.error("No se proporcionó un ID de producto válido en la URL.");
}


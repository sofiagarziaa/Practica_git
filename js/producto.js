console.log("producto.js");

let qs = location.search;
console.log("query string: ", qs);
let qsto = new URLSearchParams(qs);
const id = qsto.get('id');


let url = `https://fakestoreapi.com/products/${id}`;


fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let title = document.querySelector("h2");
        let desc = document.querySelector(".desc");
        let price = document.querySelector(".price");
        let image = document.querySelector(".image");

        let categoryLink = document.querySelector("h3");

        title.innerText = data.title;
        desc.innerText = data.description;
        price.innerText = `$${data.price}`;
        image.src = data.image;

        let category = data.category;
        categoryLink.innerHTML = `<a href="./category.html?category=${category}">${category}</a>`;
        categoryLink.querySelector("a").addEventListener("click", function (e) {
            e.preventDefault();
            let linkURL = `./category.html?category=${category}`;
            location.href = linkURL;
        })
        })
        .catch(function (error) {
                console.error(error);
        });
    

        let carrito = [];
        let recuperoStorage = localStorage.getItem("cartItems")

        if (recuperoStorage != null) {
            carrito = JSON.parse(recuperoStorage)
        }

        let select = document.querySelector(".select")
        select.addEventListener("click", function (e) {
            e.preventDefault();
            carrito.push(id)
            let carStr = JSON.stringify(carrito)
            localStorage.setItem("cartItems", carStr)

            console.log("carrito", carrito)
            console.log("localStore: ", localStorage)
        })


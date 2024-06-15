console.log("producto.js");

let qs = location.search;
console.log("query string: ", qs);
let qsto = new URLSearchParams(qs);
const id = qsto.get('id');


let url = `https://fakestoreapi.com/products/category/jewelery${id}`;


fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {

        let title =document.querySelector("h1");
        let image =document.querySelector("img");
        let status =document.querySelector(".status");
        let especie =document.querySelector(".especie");


        title.innerText = data.name;
        image.src = data.image;
        status.innerText += data.status;
        especie.innerText += data.species;
        
    })
    .catch(function (error) {
        console.error(error);
    });


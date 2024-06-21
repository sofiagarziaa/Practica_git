console.log("index.js");
let url = "https://fakestoreapi.com/products/category/jewelery"
fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let lista = document.querySelector("#jewelery");
        let contenido = "";

        for (let i = 0; i < data.length; i++) {
            contenido += `
                    <div class="elemento-hijo">
                        <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                        <p>${data[i].title}</p>
                        <p>Description: ${data[i].description}</p>
                        <p>$${data[i].price}</p>
                        <a href="./producto.html?id=${data[i].id}" class="select">Ver más</a>
                    </div>`;
        }
        console.log(contenido);
        lista.innerHTML = contenido;
    })
    .catch(function (error) {
        console.error('Error fetching products:', error);
    });

let url2 = "https://fakestoreapi.com/products/category/electronics"

fetch(url2)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let lista = document.querySelector("#electronics-container");
        let contenido = "";

        for (let i = 0; i < data.length; i++) {
            contenido += `
                            <div class="elemento-hijo">
                                <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                                <p>${data[i].title}</p>
                                <p>Description: ${data[i].description}</p>
                                <p>$${data[i].price}</p>
                                <a href="./producto.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                            </div>`;
        }
        console.log(contenido);
        lista.innerHTML = contenido;
    })
    .catch(function (error) {
        console.error('Error fetching products:', error);
    });

let url3 = "https://fakestoreapi.com/products/category/men's clothing"

fetch(url3)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let lista = document.querySelector("#mens-clothing-container");
        let contenido = "";

        for (let i = 0; i < data.length; i++) {
            contenido += `
                            <div class="elemento-hijo">
                                <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                                <p>${data[i].title}</p>
                                <p>Description: ${data[i].description}</p>
                                <p>$${data[i].price}</p>
                                <a href="./producto.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                            </div>`;
        }
        console.log(contenido);
        lista.innerHTML = contenido;
    })
    .catch(function (error) {
        console.error('Error fetching products:', error);
    });

let url4 = "https://fakestoreapi.com/products/category/women's clothing"

fetch(url4)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let lista = document.querySelector("#womens-clothing-container");
        let contenido = "";

        for (let i = 0; i < data.length; i++) {
            contenido += `
                                <div class="elemento-hijo">
                                    <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                                    <p>${data[i].title}</p>
                                    <p>Description: ${data[i].description}</p>
                                    <p>$${data[i].price}</p>
                                    <a href="./producto.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                                </div>`;
        }
        console.log(contenido);
        lista.innerHTML = contenido;
    })
    .catch(function (error) {
        console.error('Error fetching products:', error);
    });

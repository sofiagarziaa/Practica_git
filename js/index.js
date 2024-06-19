//ACCESORIOS
console.log("index.js");

let url3 = "https://fakestoreapi.com/products/category/men's clothing"

fetch(url3)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        
        let lista = document.querySelector("#mens-clothing-container");
        let contenido = "";

        for (let i = 0; i < data.length && i < 5; i++) {
            contenido += `
                            <div class="elemento-hijo">
                                <img src="${data[i].image}" >
                                <p>${data[i].title}</p>
                                <p>Description: ${data[i].description}</p>
                                <p>$${data[i].price}</p>
                                <p>${data[i].category}</p>
                                <a href="producto.html?id=${data[i].id}" >Ver más</a>
                            </div>`;
        }
        console.log(contenido);
        lista.innerHTML = contenido;

        let verMasButtons = document.querySelectorAll(".ver-mas-btn");

        for (let i = 0; i < verMasButtons.length; i++) {
            verMasButtons[i].addEventListener("click", function (event) {
                event.preventDefault();
                const url = verMasButtons[i].href;
                location.href = url;
            });
        }

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
        let info = data.results;
        let lista = document.querySelector("#womens-clothing-container");
        let contenido = "";

        for (let i = 0; i < data.length && i < 5; i++) {
            contenido += `
                                <div class="elemento-hijo">
                                    <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                                    <p>${data[i].title}</p>
                                    <p>Description: ${data[i].description}</p>
                                    <p>$${data[i].price}</p>
                                    <p>${data[i].category}</p>
                                    <a href="./producto.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                                </div>`;
        }
        console.log(contenido);
        lista.innerHTML = contenido;

        let verMasButtons = document.querySelectorAll(".ver-mas-btn");

        for (let i = 0; i < verMasButtons.length; i++) {
            verMasButtons[i].addEventListener("click", function (event) {
                event.preventDefault();
                const url = verMasButtons[i].href;
                location.href = url;
            });
        }

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
        let info = data.results;
        let lista = document.querySelector("#electronics-container");
        let contenido = "";

        for (let i = 0; i < data.length && i < 5; i++) {
            contenido += `
                        <div class="elemento-hijo">
                            <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                            <p>${data[i].title}</p>
                            <p>Description: ${data[i].description}</p>
                            <p>$${data[i].price}</p>
                            <p>${data[i].category}</p>
                            <a href="./producto.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                        </div>`;
        }
        console.log(contenido);
        lista.innerHTML = contenido;

        let verMasButtons = document.querySelectorAll(".ver-mas-btn");

        for (let i = 0; i < verMasButtons.length; i++) {
            verMasButtons[i].addEventListener("click", function (event) {
                event.preventDefault();
                const url = verMasButtons[i].href;
                location.href = url;
            });
        }

    })
    .catch(function (error) {
        console.error('Error fetching products:', error);
    });




document.addEventListener('DOMContentLoaded', function () {
    // ACCESORIOS
    let accesoryIn = document.querySelector("#jewelery");

    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let contenido = "";

            for (let i = 0; i < data.length && i < 5; i++) {
                contenido += `
                    <div class="elemento-hijo">
                        <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                        <p>${data[i].title}</p>
                        <p>Description: ${data[i].description}</p>
                        <p>$${data[i].price}</p>
                        <p>${data[i].category}</p>
                        <a href="./category.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                    </div>`;
            }
            accesoryIn.innerHTML = contenido;

            let verMasButtons = document.querySelectorAll(".ver-mas-btn");
            verMasButtons.forEach(button => {
                button.addEventListener("click", function(event) {
                    event.preventDefault();
                    let url = this.getAttribute("href");
                    window.location.href = url;
                });
            });

        })
        .catch(function (error) {
            console.error('Error fetching products:', error);
        });

    // MEN:
    let menIn = document.querySelector("#men");

    fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let contenido = "";

            for (let i = 0; i < data.length && i < 5; i++) {
                contenido += `
                    <div class="elemento-hijo">
                        <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                        <p>${data[i].title}</p>
                        <p>Description: ${data[i].description}</p>
                        <p>$${data[i].price}</p>
                        <p>${data[i].category}</p>
                        <a href="./category.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                    </div>`;
            }
            menIn.innerHTML = contenido;

            let verMasButtons = document.querySelectorAll(".ver-mas-btn");
            verMasButtons.forEach(button => {
                button.addEventListener("click", function(event) {
                    event.preventDefault();
                    let url = this.getAttribute("href");
                    window.location.href = url;
                });
            });

        })
        .catch(function (error) {
            console.error('Error fetching products:', error);
        });

    // MUJER:
    let womenIn = document.querySelector("#women");

    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let contenido = "";

            for (let i = 0; i < data.length && i < 5; i++) {
                contenido += `
                    <div class="elemento-hijo">
                        <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                        <p>${data[i].title}</p>
                        <p>Description: ${data[i].description}</p>
                        <p>$${data[i].price}</p>
                        <p>${data[i].category}</p>
                        <a href="./category.html?id=${data[i].id}" class="ver-mas-btn">Ver más</a>
                    </div>`;
            }
            womenIn.innerHTML = contenido;

            let verMasButtons = document.querySelectorAll(".ver-mas-btn");
            verMasButtons.forEach(button => {
                button.addEventListener("click", function(event) {
                    event.preventDefault();
                    let url = this.getAttribute("href");
                    window.location.href = url;
                });
            });

        })
        .catch(function (error) {
            console.error('Error fetching products:', error);
        });
});

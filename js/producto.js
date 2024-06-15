document.addEventListener('DOMContentLoaded', function () {
    let productIn = document.querySelector("#product");

    fetch("https://fakestoreapi.com/products")
        .then(function (res) {
            return res.json();
        })
        .then(function (dato) {
            let contenido = "";

            for (let i = 0 ; i < data.length; i++) {
                contenido += `
                    <div class="elemento-hijo">
                        <img src="${data[i].image}" alt="${data[i].title}" width="100" />
                        <p>${data[i].title}</p>
                        <p>Description: ${data[i].description}</p>
                        <p>$${data[i].price}</p>
                        <p>${data[i].category}</p>
                        <a href="./jewelery.html?id=${data[i].id}" class="ver-mas-boton">Ver más</a>
                    </div>`;
            }
            productIn.innerHTML = contenido;

            let verMasButtons = document.querySelectorAll(".ver-mas-btn");
            verMasButtons.forEach(button => {
                button.addEventListener("click", function(event) {
                    let url = this.getAttribute("href");
                    window.location.href = url;
                });
            });

        })
        .catch(function (error) {
            console.error('Error fetching products:', error);
    });
});



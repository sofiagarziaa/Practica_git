document.addEventListener('DOMContentLoaded', function () {
    let productIn = document.querySelector("#producto-container");

    fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(function (res) {
            return res.json();
        })
        .then(function (dato) {
            let contenido = "";

            for (let i = 0; i < dato.length && i < 1; i++) {
                contenido += `
                    <li>
                        <img src="${dato[i].image}" alt="${dato[i].title}" width="100" />
                        <p>${dato[i].title}</p>
                        <p>Description: ${dato[i].description}</p>
                        <p>$${dato[i].price}</p>
                        <p>${dato[i].category}</p>
                    </li>`;
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



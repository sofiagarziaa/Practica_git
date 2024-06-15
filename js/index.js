//ACCESORIOS

let accesoryIn = document.querySelector("#accesorios-container");

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
            button.addEventListener("click", function (event) {
                let url = this.getAttribute("href");
                location.href = url;
            });
        });

    })
    .catch(function (error) {
        console.error('Error fetching products:', error);
    });



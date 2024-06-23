let qs = location.search;
let qsto = new URLSearchParams(qs);
let category = qsto.get('category');
let url = `https://fakestoreapi.com/products/category/${category}`


fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let lista = document.querySelector("#category");
        let categoryTitle = document.querySelector("h2");
        categoryTitle.innerText = `${category}`;
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


console.log("saludo.js");

let currentUser = localStorage.getItem("currentUser");

function headerConSaludo() {
    let saludoElement = document.querySelector("#saludo");
    let loginLink = document.querySelector("#login");
    let registroLink = document.querySelector("#signin");

    if (currentUser) {
        saludoElement.innerHTML = `Bienvenido: ${currentUser} <a href="#" id="logout-link">Logout</a>`;
        loginLink.style.display = "none";
        registroLink.style.display = "none";
    } else {
        saludoElement.innerText = "";
        loginLink.style.display = "list-item";
        registroLink.style.display = "list-item";
    }
}

headerConSaludo();
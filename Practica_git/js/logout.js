console.log("logout.js");

let logoutLink = document.querySelector("#logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            location.reload();
        });
    }
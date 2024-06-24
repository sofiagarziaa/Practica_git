console.log("recover.js");

let recoverForm = document.querySelector("form");

recoverForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let emailInput = document.querySelector("#email");
    let recuperoCheckbox = document.querySelector("input[type='checkbox']");

    let email = emailInput.value;
    let recuperoChecked = recuperoCheckbox.checked;

    let valid = true;

    if (!email) {
        preventDefault("#email .error-message", "Por favor escriba su email.");
        valid = false;
    }

    if (!recuperoChecked) {
        preventDefault("article .error-message", "Por favor acepte el campo Quiero recuperar la contraseña.");
        valid = false;
    }

    if (valid) {
        alert("Recibirás un email con las instrucciones para recuperar tu contraseña");
        window.location.href = "./login.html";
    }
});

function preventDefault(selector, message) {
    let errorMessage = document.querySelector(selector);
    errorMessage.innerText = message;
}

function preventDefault(selector) {
    let errorMessage = document.querySelector(selector);
    errorMessage.innerText = "";
}

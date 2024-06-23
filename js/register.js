console.log("registro.js");

    let form = document.querySelector("#registro-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let emailIngresar = document.querySelector("#email");
        let contraseñaIngresar = document.querySelector("#password");
        let confirmarContraseña = document.querySelector("#confirm-password");
        let tycCheckbox = document.querySelector("#terms");

        let email = emailIngresar.value;
        let password = contraseñaIngresar.value;
        let confirmPassword = confirmarContraseña.value;
        let terminos = tycCheckbox.checked;

        let errorMessages = document.querySelectorAll(".error-message");
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].innerText = "";
        }

        let valid = true;

        if (!email) {
            denegarAcceso("#email-error", "Por favor complete el campo");
            valid = false;
        }

        if (!password) {
            denegarAcceso("#password-error", "Por favor complete el campo");
            valid = false;
        } else if (password.length < 6) {
            denegarAcceso("#password-error", "Debe ingresar al menos 6 caracteres");
            valid = false;
        }

        if (password !== confirmPassword) {
            denegarAcceso("#confirm-password-error", "Las contraseñas no coinciden");
            valid = false;
        }

        if (!terminos) {
            denegarAcceso("#terms-error", "Debe aceptar los términos y condiciones");
            valid = false;
        }

        if (valid) {
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
            window.location.href = "./login.html";
        }
    });

    function denegarAcceso(selector, message) {
        let errorMessage = document.querySelector(selector);
        errorMessage.innerText = message;
    }
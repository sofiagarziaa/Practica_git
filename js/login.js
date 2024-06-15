/*const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === '') {
        alert('Por favor complete el campo email.');
        return;
    }

    if (password === '') {
       let contraseña = alert('Por favor complete el campo contraseña.');
        return contraseña;
    }

    if (password.length < 6) {
        let largo = alert('La contraseña debe tener al menos 6 caracteres.');
        return largo;
    }

    localStorage.setItem('currentUser', email);

    location.assign('index.html');

});
*/
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === '') {
        alert('Por favor complete el campo email.');
        return;
    }

    if (password === '') {
        alert('Por favor complete el campo contraseña.');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    localStorage.setItem('currentUser', email);

    location.replace('index.html');
});

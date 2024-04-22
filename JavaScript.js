let cart = [];


function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    totalSpan.textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validar el formulario (puedes agregar más validaciones según tus necesidades)
        if (email.trim() === '' || password.trim() === '') {
            alert('Por favor completa todos los campos.');
            return;
        }

        // Aquí puedes enviar los datos del formulario a través de AJAX o realizar otras acciones

        // Por ejemplo, simplemente puedes mostrar un mensaje de éxito
        alert('Inicio de sesión exitoso!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validar el formulario (puedes agregar más validaciones según tus necesidades)
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Por favor completa todos los campos.');
            return;
        }

        // Aquí puedes enviar los datos del formulario a través de AJAX o realizar otras acciones

        // Por ejemplo, simplemente puedes mostrar un mensaje de éxito
        alert('Registro exitoso!');
    });
});


// JavaScript para cargar contenido dinámico

document.getElementById('dashboard-link').addEventListener('click', function() {
    // Lógica para cargar los usuarios registrados en el dashboard
    // Puedes hacer una solicitud AJAX aquí para obtener los datos de los usuarios y mostrarlos en tarjetas
    // Por ejemplo, utilizando fetch o XMLHttpRequest
});

document.getElementById('add-user-link').addEventListener('click', function() {
    // Lógica para mostrar el formulario de registro de usuarios
    // Puedes manipular el DOM para añadir un formulario al content-container
});

document.getElementById('games-list-link').addEventListener('click', function() {
    // Lógica para mostrar la lista de juegos en tarjetas
    // Puedes hacer una solicitud AJAX para obtener los datos de los juegos y mostrarlos en tarjetas
});

document.getElementById('logout-link').addEventListener('click', function() {
    // Lógica para redirigir al formulario de inicio de sesión
    // Por ejemplo: window.location.href = 'login.html';
});

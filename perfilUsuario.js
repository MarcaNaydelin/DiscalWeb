document.addEventListener("DOMContentLoaded", function() {
    // Recuperar datos del localStorage
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const edad = localStorage.getItem('edad');
    let genero = localStorage.getItem('genero');

    // Convertir el valor numérico a texto legible
    if (genero === '0') {
        genero = 'Masculino';
    } else if (genero === '1') {
        genero = 'Femenino';
    } else {
        genero = 'No especificado'; // Puedes añadir un caso para otros valores
    }

    // Mostrar los datos en el perfil del usuario
    const nombreElement = document.getElementById('nombreUsuario');
    const edadElement = document.getElementById('edadUsuario');
    const generoElement = document.getElementById('generoUsuario');

    nombreElement.textContent = nombreUsuario;
    edadElement.textContent = `${edad} años`;
    generoElement.textContent = genero;
});


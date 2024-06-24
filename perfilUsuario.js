const gradoAcademicoMap = {
    1: "1ro de primaria",
    2: "2do de primaria",
    3: "3ro de primaria",
    4: "4to de primaria",
    5: "5to de primaria",
    6: "6to de primaria"
};

document.addEventListener("DOMContentLoaded", function() {
    const nombreNiño = localStorage.getItem('nombreNino');
    const gradoAcademico = localStorage.getItem('gradoAcademico');
    const nombrePadre = localStorage.getItem('nombrePadre');
    const emailPadre = localStorage.getItem('emailPadre'); // Añadir la obtención del email del padre
    const avatarSeleccionado = localStorage.getItem('avatarSeleccionado');

    const nombreElement = document.getElementById('nombreUsuario');
    const gradoElement = document.getElementById('edadUsuario');
    const nombrePadreElement = document.getElementById('generoUsuario');
    const emailPadreElement = document.getElementById('emailUsuario'); // Añadir el elemento para mostrar el email del padre
    const avatarElement = document.getElementById('avatarUsuario');

    nombreElement.textContent = nombreNiño;
    gradoElement.textContent = gradoAcademicoMap[gradoAcademico];
    nombrePadreElement.textContent = nombrePadre;
    avatarElement.src = avatarSeleccionado;
});

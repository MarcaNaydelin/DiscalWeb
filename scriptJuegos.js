const infoButtons = document.querySelectorAll('.info');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');

infoButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
document.getElementById('btnfinalizar').addEventListener('click', function() {
    // Redirigir a otra página
    window.location.href = 'perfilUsuario.html'; // Reemplaza 'otro_formulario.html' con la URL de tu otro formulario
});


// Obtener referencia al elemento de selección
const selectGrado = document.getElementById('grado');
const juegos = document.querySelectorAll('.juego');
// Agregar evento de cambio al selector
selectGrado.addEventListener('change', function() {
    const selectedGrado = selectGrado.value;
    juegos.forEach(juego => {
        const infoJuego = juego.querySelector('.info-juego');
        const juegoGrado = infoJuego.dataset.grado; // Asumiendo que tienes un atributo data-grado en el elemento del juego
        // Mostrar u ocultar juegos según el grado seleccionado
        if (selectedGrado === 'todos' || selectedGrado === juegoGrado) {
            juego.style.display = 'block';
        } else {
            juego.style.display = 'none';
        }
    });
});

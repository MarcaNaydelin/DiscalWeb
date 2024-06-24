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
    window.location.href = 'perfilUsuario.html';
});

document.querySelectorAll('.juego').forEach(juego => {
    juego.addEventListener('mouseover', () => {
        juego.style.transform = 'translateY(-10px)';
        juego.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    juego.addEventListener('mouseout', () => {
        juego.style.transform = 'translateY(0)';
        juego.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

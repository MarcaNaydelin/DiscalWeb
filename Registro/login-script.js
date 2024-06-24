document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombreNino = document.getElementById("nombreNino").value.trim();
        const passwordNino = document.getElementById("passwordNino").value.trim();

        let valid = true;

        if (nombreNino === "") {
            showError("nombreNino", "El nombre es obligatorio.");
            valid = false;
        } else {
            hideError("nombreNino");
        }

        if (passwordNino === "") {
            showError("passwordNino", "La contraseña es obligatoria.");
            valid = false;
        } else {
            hideError("passwordNino");
        }

        if (valid) {
            Swal.fire({
                title: 'Iniciando sesión...',
                html: 'Por favor, espera...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            setTimeout(() => {
                Swal.fire({
                    title: '¡Login exitoso!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = '../perfilUsuario.html';
                });
            }, 2000);
        }
    });

    function showError(id, message) {
        const errorElement = document.getElementById(`${id}-error`);
        errorElement.textContent = message;
        errorElement.style.display = "block";
        errorElement.classList.add("animate-error");
        setTimeout(() => {
            errorElement.classList.remove("animate-error");
        }, 1000);
    }

    function hideError(id) {
        const errorElement = document.getElementById(`${id}-error`);
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
});

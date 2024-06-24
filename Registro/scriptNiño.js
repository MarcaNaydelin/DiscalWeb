document.addEventListener("DOMContentLoaded", function() {
    const sigPag = document.querySelector(".adelante");
    const volver = document.querySelector(".volver");
    const btnFinalizar = document.getElementById("btnfinalizar");
    const btnCancelar = document.getElementById("btn-cancelar");
    const avatars = document.querySelectorAll(".avatar");

    let avatarSeleccionado = null;

    avatars.forEach(avatar => {
        avatar.addEventListener("click", () => {
            avatars.forEach(av => av.classList.remove("selected"));
            avatar.classList.add("selected");
            avatarSeleccionado = avatar.src;
        });
    });

    const paginas = document.querySelectorAll(".pagina");
    const pasos = document.querySelectorAll(".paso");
    let paginaActual = 0;

    sigPag.addEventListener("click", (e) => {
        e.preventDefault();
        if (validarPagina(paginaActual)) {
            paginas[paginaActual].classList.remove("active");
            pasos[paginaActual].classList.add("complete");
            paginaActual++;
            paginas[paginaActual].classList.add("active");
            pasos[paginaActual].classList.add("active");
            document.body.style.backgroundColor = paginaActual === 1 ? "#e0f7fa" : "#F0F8FF";
        }
    });

    volver.addEventListener("click", (e) => {
        e.preventDefault();
        paginas[paginaActual].classList.remove("active");
        pasos[paginaActual].classList.remove("active");
        paginaActual--;
        paginas[paginaActual].classList.add("active");
        pasos[paginaActual].classList.add("active");
        document.body.style.backgroundColor = paginaActual === 0 ? "#F0F8FF" : "#e0f7fa";
    });

    btnFinalizar.addEventListener("click", (e) => {
        e.preventDefault();
        if (validarPagina(paginaActual)) {
            const nombreNino = document.getElementById("nombreNino").value;
            const gradoAcademico = document.getElementById("gradoAcademico").value;
            const nombrePadre = document.getElementById("nombrePadre").value;
            const emailPadre = document.getElementById("emailPadre").value;

            if (avatarSeleccionado === null) {
                Swal.fire('Por favor, selecciona un avatar.');
                return;
            }

            localStorage.setItem("nombreNino", nombreNino);
            localStorage.setItem("gradoAcademico", gradoAcademico);
            localStorage.setItem("nombrePadre", nombrePadre);
            localStorage.setItem("emailPadre", emailPadre);
            localStorage.setItem("avatarSeleccionado", avatarSeleccionado);

            Swal.fire({
                title: 'Creando perfil del niño...',
                html: 'Por favor, espera...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            setTimeout(() => {
                Swal.fire({
                    title: '¡Perfil del niño creado con éxito!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = '../perfilUsuario.html';
                });
            }, 2000);
        }
    });

    btnCancelar.addEventListener("click", (e) => {
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Deseas cancelar el registro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cancelar',
            cancelButtonText: 'No, continuar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../index.html';
            }
        });
    });

    function validarPagina(pagina) {
        let esValido = true;

        if (pagina === 0) {
            const nombreNino = document.getElementById("nombreNino").value;
            const gradoAcademico = document.getElementById("gradoAcademico").value;
            const passwordNino = document.getElementById("passwordNino").value;

            if (avatarSeleccionado === null) {
                Swal.fire('Por favor, selecciona un avatar.');
                esValido = false;
            }

            if (nombreNino.trim() === "") {
                mostrarError("nombreNino", "Por favor, ingrese el nombre del niño.");
                esValido = false;
            } else {
                limpiarError("nombreNino");
            }

            if (gradoAcademico === "-1") {
                mostrarError("gradoAcademico", "Por favor, seleccione el grado académico.");
                esValido = false;
            } else {
                limpiarError("gradoAcademico");
            }

            if (passwordNino.trim() === "") {
                mostrarError("passwordNino", "Por favor, ingrese una contraseña.");
                esValido = false;
            } else if (passwordNino.trim().length < 6) {
                mostrarError("passwordNino", "La contraseña debe tener al menos 6 caracteres.");
                esValido = false;
            } else {
                limpiarError("passwordNino");
            }

        } else if (pagina === 1) {
            const nombrePadre = document.getElementById("nombrePadre").value;
            const emailPadre = document.getElementById("emailPadre").value;

            if (nombrePadre.trim() === "") {
                mostrarError("nombrePadre", "Por favor, ingrese el nombre del padre.");
                esValido = false;
            } else {
                limpiarError("nombrePadre");
            }

            if (emailPadre.trim() === "") {
                mostrarError("emailPadre", "Por favor, ingrese el email del padre.");
                esValido = false;
            } else if (!validarEmail(emailPadre)) {
                mostrarError("emailPadre", "Por favor, ingrese un email válido.");
                esValido = false;
            } else {
                limpiarError("emailPadre");
            }
        }

        return esValido;
    }

    function mostrarError(campoId, mensaje) {
        const errorSpan = document.getElementById(`${campoId}-error`);
        errorSpan.textContent = mensaje;
        errorSpan.style.display = "block";
    }

    function limpiarError(campoId) {
        const errorSpan = document.getElementById(`${campoId}-error`);
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

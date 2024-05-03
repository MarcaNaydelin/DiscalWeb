const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");
const registerForm = document.querySelector("#registerForm");
const emailInput = document.querySelector("#email");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

// Función para validar el formulario de registro
function validarRegistro(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const nombrePadreInput = document.querySelector("#nombre");
    const contraseñaInput = document.querySelector("#contraseña");
    
    // Validar si los campos están vacíos
    if (nombrePadreInput.value.trim() === "" || emailInput.value.trim() === "" || contraseñaInput.value.trim() === "") {
        alert("Por favor, complete todos los campos."); // Mostrar mensaje de error
        return; // Detener la ejecución de la función
    }

    // Validar si el correo contiene "@gmail.com"
    if (!emailInput.value.trim().includes("@gmail.com")) {
        alert("El correo electrónico del padre debe ser de Gmail (ejemplo@gmail.com)."); // Mostrar mensaje de error
        return; // Detener la ejecución de la función
    }

    // Si pasa todas las validaciones, enviar el formulario
    this.submit();
}

// Agregar evento submit al formulario de registro
registerForm.addEventListener("submit", validarRegistro);


document.getElementById('btnIniciarSesion').addEventListener('click', function() {
    // Redirigir a otra página
    window.location.href = 'registro_niño.html'; 
});


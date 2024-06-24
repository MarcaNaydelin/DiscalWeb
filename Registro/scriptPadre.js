// Select elements
const sign_in_btn = document.querySelector('#sign-in');
const sign_up_btn = document.querySelector('#sign-up');
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const btnRegistrarse = document.getElementById('btnRegistrarse');
const btnIniciarSesion = document.getElementById('btnIniciarSesion');

// Toggle forms
sign_in_btn.addEventListener('click', () => {
    registerForm.classList.add('hide');
    loginForm.classList.remove('hide');
});

sign_up_btn.addEventListener('click', () => {
    registerForm.classList.remove('hide');
    loginForm.classList.add('hide');
});

// Register form validation
btnRegistrarse.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nombrePadre = document.getElementById('nombrePadre');
    const emailPadre = document.getElementById('emailPadre');
    const passwordPadre = document.getElementById('passwordPadre');

    let valid = true;

    // Name validation
    if (nombrePadre.value.trim() === "") {
        showError('nombrePadre', 'El nombre es obligatorio');
        valid = false;
    } else {
        clearError('nombrePadre');
    }

    // Email validation
    if (emailPadre.value.trim() === "") {
        showError('emailPadre', 'El correo electrónico es obligatorio');
        valid = false;
    } else if (!isValidEmail(emailPadre.value.trim())) {
        showError('emailPadre', emailErrorMessage(emailPadre.value.trim()));
        valid = false;
    } else {
        clearError('emailPadre');
    }

    // Password validation
    if (passwordPadre.value.trim() === "") {
        showError('passwordPadre', 'La contraseña es obligatoria');
        valid = false;
    } else if (passwordPadre.value.trim().length < 6) {
        showError('passwordPadre', 'La contraseña debe tener al menos 6 caracteres');
        valid = false;
    } else {
        clearError('passwordPadre');
    }

    if (valid) {
        // Submit the form or perform further actions
        Swal.fire({
            title: '¡Registro exitoso!',
            text: 'Tu cuenta ha sido creada satisfactoriamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            document.getElementById('registerForm').reset();
            registerForm.classList.add('hide');
            loginForm.classList.remove('hide');
        });
    }
});

// Login form validation
btnIniciarSesion.addEventListener('click', (e) => {
    e.preventDefault();

    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    let valid = true;

    // Email validation
    if (loginEmail.value.trim() === "") {
        showError('loginEmail', 'El correo electrónico es obligatorio');
        valid = false;
    } else if (!isValidEmail(loginEmail.value.trim())) {
        showError('loginEmail', emailErrorMessage(loginEmail.value.trim()));
        valid = false;
    } else {
        clearError('loginEmail');
    }

    // Password validation
    if (loginPassword.value.trim() === "") {
        showError('loginPassword', 'La contraseña es obligatoria');
        valid = false;
    } else if (loginPassword.value.trim().length < 6) {
        showError('loginPassword', 'La contraseña debe tener al menos 6 caracteres');
        valid = false;
    } else {
        clearError('loginPassword');
    }

    if (valid) {
        // Perform login action
        Swal.fire({
            title: '¡Inicio de sesión exitoso!',
            text: 'Has iniciado sesión satisfactoriamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            document.getElementById('loginForm').reset();
             // Simulación de inicio de sesión exitoso
             window.location.href = './inicio_niño.html';
        });
    }
});

// Helper functions
function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + '-error');
    errorElement.textContent = message;
    inputElement.classList.add('input-error');
}

function clearError(inputId) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + '-error');
    errorElement.textContent = '';
    inputElement.classList.remove('input-error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function emailErrorMessage(email) {
    if (!email.includes('@')) {
        return 'Falta el @ después del nombre de usuario';
    } else if (!email.split('@')[1].includes('.')) {
        return 'Falta el dominio después del @';
    }
    return 'El correo electrónico no es válido';
}

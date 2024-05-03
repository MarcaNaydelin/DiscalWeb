const movPag = document.querySelector('.movPag');
const btn_adelante2 = document.querySelector('.sigPag');
const btn_atras1 = document.querySelector('.volver-pag1');
const btn_adelante3 = document.querySelector('.adelante-pag3');
const btn_atras2 = document.querySelector('.volver-pag2');
const btn_adelante4 = document.querySelector('.adelante-pag4');
const btn_atras3 = document.querySelector('.volver-pag3');
const btn_final = document.querySelector('.Fin');

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

let max = 4;
let cont = 1;

function actualizarProgreso(nuevaPosicion) {
    for (let i = 0; i < num.length; i++) {
        if (i < nuevaPosicion) {
            num[i].classList.add("active");
            progressCheck[i].classList.add("active");
            progressText[i].classList.add("active");
        } else {
            num[i].classList.remove("active");
            progressCheck[i].classList.remove("active");
            progressText[i].classList.remove("active");
        }
    }
}

btn_adelante2.addEventListener("click", function(e) {
    e.preventDefault();

    var nombres = document.getElementById("nombres").value.trim();
    var apellido1 = document.getElementById("apellido1").value.trim();
    var apellido2 = document.getElementById("apellido2").value.trim();

    if (nombres === "") {
        document.getElementById("nombres-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("nombres").style.borderColor = "red";
    } else {
        document.getElementById("nombres-error").innerHTML = "";
        document.getElementById("nombres").style.borderColor = "lightgrey";
    }

    if (apellido1 === "") {
        document.getElementById("apellido1-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("apellido1").style.borderColor = "red";
    } else {
        document.getElementById("apellido1-error").innerHTML = "";
        document.getElementById("apellido1").style.borderColor = "lightgrey";
    }

    if (apellido2 === "") {
        document.getElementById("apellido2-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("apellido2").style.borderColor = "red";
    } else {
        document.getElementById("apellido2-error").innerHTML = "";
        document.getElementById("apellido2").style.borderColor = "lightgrey";
    }

    // Continuar si todos los campos requeridos están llenos
    if (nombres !== "" && apellido1 !== "" && apellido2 !== "") {
        movPag.style.marginLeft = "-25%";
        cont += 1;
        actualizarProgreso(cont - 1);
    }
});

btn_adelante3.addEventListener("click", function(e) {
    e.preventDefault();

    var fechaNac = document.getElementById("fechaNac").value.trim();
    var genero = document.getElementById("genero").value;

    if (fechaNac === "") {
        document.getElementById("fechaNac-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("fechaNac").style.borderColor = "red";
    } else {
        document.getElementById("fechaNac-error").innerHTML = "";
        document.getElementById("fechaNac").style.borderColor = "lightgrey";
    }

    if (genero === "-1") {
        document.getElementById("genero-error").innerHTML = "*Debe seleccionar una opción.";
        document.getElementById("genero").style.borderColor = "red";
    } else {
        document.getElementById("genero-error").innerHTML = "";
        document.getElementById("genero").style.borderColor = "lightgrey";
    }

    // Continuar si todos los campos requeridos están llenos
    if (fechaNac !== "" && genero !== "-1") {
        movPag.style.marginLeft = "-50%";
        cont += 1;
        actualizarProgreso(cont - 1);
    }
});

btn_adelante4.addEventListener("click", function(e) {
    e.preventDefault();

    var usuario = document.getElementById("usuario").value.trim();
    var contra = document.getElementById("contra").value.trim();

    if (usuario === "") {
        document.getElementById("usuario-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("usuario").style.borderColor = "red";
    } else {
        document.getElementById("usuario-error").innerHTML = "";
        document.getElementById("usuario").style.borderColor = "lightgrey";
    }

    if (contra === "") {
        document.getElementById("contra-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("contra").style.borderColor = "red";
    } else {
        document.getElementById("contra-error").innerHTML = "";
        document.getElementById("contra").style.borderColor = "lightgrey";
    }

    // Continuar si todos los campos requeridos están llenos
    if (usuario !== "" && contra !== "") {
        movPag.style.marginLeft = "-75%";
        cont += 1;
        actualizarProgreso(cont - 1);
    }

    Swal.fire({
        position: "center",
        icon: "success",
        title: `¡Felicidades! El perfil del usuario ${usuario} esta siendo creado.`,
        showConfirmButton: false,
        timer: 3000,
        didOpen: () => {
            Swal.showLoading();
        }
    }).then(() => {
        
    });
});

btn_final.addEventListener("click", function(e) {
    e.preventDefault();

    var nombrePadre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var contraPadre = document.getElementById("contraPadre").value.trim();

    if (nombrePadre === "") {
        document.getElementById("nombre-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("nombre").style.borderColor = "red";
    } else {
        document.getElementById("nombre-error").innerHTML = "";
        document.getElementById("nombre").style.borderColor = "lightgrey";
    }

    if (correo === "") {
        document.getElementById("correo-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("correo").style.borderColor = "red";
    } else if (!correo.includes("@") || !correo.includes(".com")) {
        document.getElementById("correo-error").innerHTML = "*El formato de correo no es válido.";
        document.getElementById("correo").style.borderColor = "red";
    } else {
        document.getElementById("correo-error").innerHTML = "";
        document.getElementById("correo").style.borderColor = "lightgrey";
    }

    if (contraPadre === "") {
        document.getElementById("contraPadre-error").innerHTML = "*Este campo no puede quedar vacío.";
        document.getElementById("contraPadre").style.borderColor = "red";
    } else {
        document.getElementById("contraPadre-error").innerHTML = "";
        document.getElementById("contraPadre").style.borderColor = "lightgrey";
    }
    // Continuar si todos los campos requeridos están llenos
    if (nombrePadre !== "" && correo !== "" && correo.includes("@") && correo.includes(".com") && contraPadre !== "") {
        cont += 1;
        actualizarProgreso(cont - 1);
        Swal.fire({
            title: "Registro exitoso!",
            html: "Aquí finaliza el registro.<br>El registro se ha completado con éxito.",
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
    }
    // Guardar datos en localStorage
    localStorage.setItem('nombreUsuario', document.getElementById('usuario').value);
    localStorage.setItem('genero', document.getElementById('genero').value);

    // Calcular la edad a partir de la fecha de nacimiento
    let fechaNacimiento = new Date(document.getElementById('fechaNac').value);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    localStorage.setItem('edad', edad);

    // Redirigir a la página del perfil del usuario
    window.location.href = 'perfilUsuario.html';
});

btn_atras1.addEventListener("click", function(e) {
    e.preventDefault();
    movPag.style.marginLeft = "0%";
    cont -= 1;
    actualizarProgreso(cont - 1);
});

btn_atras2.addEventListener("click", function(e) {
    e.preventDefault();
    movPag.style.marginLeft = "-25%";
    cont -= 1;
    actualizarProgreso(cont - 1);
});

btn_atras3.addEventListener("click", function(e) {
    e.preventDefault();
    movPag.style.marginLeft = "-50%";
    cont -= 1;
    actualizarProgreso(cont - 1);
});

document.getElementById('btnfinalizar').addEventListener('click', function() {
    // Guardar datos en localStorage
    localStorage.setItem('nombreUsuario', document.getElementById('usuario').value);
    localStorage.setItem('edad', document.getElementById('edad').value);
    localStorage.setItem('genero', document.getElementById('genero').value);

    // Redirigir a la página del perfil del usuario
    window.location.href = 'perfilUsuario.html';
});

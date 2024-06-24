let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correcion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
let ejerciciosRealizados = 0;
let correctas = 0;
let incorrectas = 0;

const operaciones = ["+", "-", "*", "/"];
let currentOperationIndex = 0;

function seleccionarOperacion() {
  switch (operaciones[currentOperationIndex]) {
    case "+":
      btnSumar();
      break;
    case "-":
      btnResta();
      break;
    case "*":
      btnProducto();
      break;
    case "/":
      btnDivision();
      break;
  }
}

function btnSumar() {
  limpiarCorrecciones();
  activarBoton("suma");
  operacion_actual = "+";
  operacion.innerHTML = " + ";
  nuevaSuma();
}

function nuevaSuma() {
  n1 = parseInt(Math.random() * 10);
  n2 = parseInt(Math.random() * 10);
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  respuesta_usuario.focus();
}

function btnProducto() {
  limpiarCorrecciones();
  activarBoton("producto");
  operacion_actual = "*";
  operacion.innerHTML = " x ";
  nuevoProducto();
}

function nuevoProducto() {
  n1 = parseInt(Math.random() * 10);
  n2 = parseInt(Math.random() * 10);
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  respuesta_usuario.focus();
}

function btnResta() {
  limpiarCorrecciones();
  activarBoton("resta");
  operacion_actual = "-";
  operacion.innerHTML = " - ";
  nuevaResta();
}

function nuevaResta() {
  n1 = parseInt(Math.random() * 5 + 5);
  n2 = parseInt(Math.random() * 7);
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  respuesta_usuario.focus();
}

function btnDivision() {
  limpiarCorrecciones();
  activarBoton("division");
  operacion_actual = "/";
  operacion.innerHTML = " / ";
  nuevaDivision();
}

function nuevaDivision() {
  let divisores = [];
  n1 = parseInt(Math.random() * 9 + 1);
  for (var i = 1; i <= n1; i++) {
    if (n1 % i === 0) {
      divisores.push(i);
    }
  }
  let pos = parseInt(Math.random() * divisores.length);
  n2 = divisores[pos];
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  respuesta_usuario.focus();
}

function corregir() {
  if (respuesta_usuario.value == "") {
    return;
  }
  let solucion = eval(n1 + operacion_actual + n2);
  let i = document.createElement("i");
  if (respuesta_usuario.value == solucion) {
    i.className = "fa-regular fa-face-grin";
    correctas++;
  } else {
    i.className = "fa-regular fa-face-frown";
    incorrectas++;
  }
  msj_correccion.appendChild(i);

  ejerciciosRealizados++;
  if (ejerciciosRealizados < 5) {
    if (operacion_actual == "+") {
      nuevaSuma();
    } else if (operacion_actual == "-") {
      nuevaResta();
    } else if (operacion_actual == "*") {
      nuevoProducto();
    } else if (operacion_actual == "/") {
      nuevaDivision();
    }
  } else {
    currentOperationIndex++;
    if (currentOperationIndex < operaciones.length) {
      ejerciciosRealizados = 0;
      seleccionarOperacion();
    } else {
      mostrarFeedback();
    }
  }
  respuesta_usuario.value = "";
}

respuesta_usuario.onkeydown = function (e) {
  var ev = document.all ? window.event : e;
  if (ev.keyCode == 13) {
    corregir();
  }
};

function activarBoton(idBoton) {
  document.getElementById("suma").className = "";
  document.getElementById("resta").className = "";
  document.getElementById("producto").className = "";
  document.getElementById("division").className = "";
  document.getElementById(idBoton).className = "activado";
}

function limpiarCorrecciones() {
  msj_correccion.innerHTML = "";
}

function mostrarFeedback() {
  document.querySelector(".container").style.display = "none";
  let gameOverMessage = document.createElement("div");
  gameOverMessage.id = "game-over";
  let puntaje = correctas + incorrectas;
  let porcentaje = (correctas / puntaje) * 100;
  let mensajeMotivador;

  if (porcentaje >= 80) {
    mensajeMotivador = `<p class="feedback-good">¡Excelente trabajo! Tienes un gran dominio de las matemáticas.</p>`;
  } else if (porcentaje >= 50) {
    mensajeMotivador = `<p class="feedback-average">¡Buen trabajo! Pero puedes mejorar en algunas áreas.</p>`;
  } else {
    mensajeMotivador = `<p class="feedback-bad">No te desanimes, sigue practicando y mejorarás.</p>`;
  }

  gameOverMessage.innerHTML = `
        <h2>¡Juego Terminado!</h2>
        <p>Correctas: ${correctas}</p>
        <p>Incorrectas: ${incorrectas}</p>
        <p>Puntaje: ${correctas} de ${puntaje}</p>
        ${mensajeMotivador}
        <a id="volver" href="../menu_juegos.html">Volver al Menú de Juegos</a>
    `;
  document.body.appendChild(gameOverMessage);
  gameOverMessage.style.display = "block";
}

seleccionarOperacion();

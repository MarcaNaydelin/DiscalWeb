//variables que almacenan los números de la multiplicación
var num1, num2;
//guardar resultado
var respuesta;
//carga de opciones
var indiceOpCorrecta;

txt_multiplicacion = document.getElementById("multiplicacion");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
tx_resultado = document.getElementById("resultado");

function comenzarMultiplicacion() {
    //limpiar campos
    tx_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    //generar números aleatorios entre 1 y 10 (sin números negativos)
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    respuesta = num1 * num2;

    //asignar la multiplicación
    txt_multiplicacion.innerHTML = num1 + " x " + num2 + " =";

    //generar un número entre 0 y 2 para colocar la opción correcta
    indiceOpCorrecta = Math.round(Math.random() * 2);
    if (indiceOpCorrecta == 0) { //colocar la opción correcta en 1
        op1.innerHTML = respuesta;
        //valores cercanos a la respuesta correcta
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceOpCorrecta == 1) { //colocar la opción correcta en 2
        op2.innerHTML = respuesta;
        //valores cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceOpCorrecta == 2) { //colocar la opción correcta en 3
        op3.innerHTML = respuesta;
        //valores cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 1;
        op2.innerHTML = respuesta - 2;
    }
}

//revisar respuesta elegida 
function controlarRespuestaMultiplicacion(opcionElegida) {
    //Cargar respuesta correcta en la operación
    tx_resultado.innerHTML = opcionElegida.innerHTML;
    //verificar si está bien
    if (respuesta == opcionElegida.innerHTML) {
        txt_msj.innerHTML = "¡EXCELENTE!";
        txt_msj.style.color = "green";
        //espera y vuelve a cargar
        setTimeout(comenzarMultiplicacion, 2000);
    } else {
        txt_msj.innerHTML = "¡INTENTA DE NUEVO!";
        txt_msj.style.color = "red";
        //espera y limpiamos los campos
        setTimeout(limpiar, 2000);
    }
}

function limpiar() {
    tx_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
}

comenzarMultiplicacion();

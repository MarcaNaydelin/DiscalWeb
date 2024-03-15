// seleccionamos los elementos
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correcion");
let operacion = document.querySelector("#operacion");
let operacion_actual;

//en n1 y n2 guardamos los numeros aleatorios de cada operacion
let n1, n2;


//funcion suma
function btnSumar(){
    //limpiar el div de las correcciones
    msj_correccion.innerHTML ="";
    //agregar clase activa al boton y quitar el resto
    activarBoton("suma");
    operacion_actual = "+"
    //asignar la operacion a la etiqueta
    operacion.innerHTML = " + ";
    //generar numeros aleatorios
    nuevaSuma();
}
function nuevaSuma(){
    //generar 2 numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() *10);
    n2 = parseInt(Math.random() *10);
    //asignamos los numeros en las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //poner el cursor en el input
    respuesta_usuario.focus();
}

//funcion producto
function btnProducto(){
    //limpiar el div de las correcciones
    msj_correccion.innerHTML ="";
    //agregar clase activa al boton y quitar el resto
    activarBoton("producto");
    operacion_actual = "*"
    //asignar la operacion a la etiqueta
    operacion.innerHTML = " x ";
    //generar numeros aleatorios
}
function nuevoProducto(){
    //generar 2 numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() *10);
    n2 = parseInt(Math.random() *10);
    //asignamos los numeros en las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //poner el cursor en el input
    respuesta_usuario.focus();
}

//funcion resta
function btnResta(){
    //limpiar el div de las correcciones
    msj_correccion.innerHTML ="";
    //agregar clase activa al boton y quitar el resto
    activarBoton("resta");
    operacion_actual = "-"
    //asignar la operacion a la etiqueta
    operacion.innerHTML = " - ";
    //generar numeros aleatorios
    nuevaResta();
}
function nuevaResta(){
    //generar 1 numero aleatorios entre 5 y 10
    n1 = parseInt(Math.random() * 5 + 5);
    //generar 1 numero aleatorios entre 0 y 7
    n2 = parseInt(Math.random() *7);
    //asignamos los numeros en las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //poner el cursor en el input
    respuesta_usuario.focus();
}

//funcion division
function btnDivision(){
    //limpiar el div de las correcciones
    msj_correccion.innerHTML ="";
    //agregar clase activa al boton y quitar el resto
    activarBoton("division");
    operacion_actual = "/"
    //asignar la operacion a la etiqueta
    operacion.innerHTML = " / ";
    //generar numeros aleatorios
    nuevaDivision();
}
function nuevaDivision(){ 
    //Crear un vector donde se guardaran los divisores del numero a dividir
    let divisores = [];
    //generar 1 numero aleatorios entre 1 y 10
    n1 = parseInt(Math.random() * 9 + 1);
    //encontrar los divisores del numero generado y guardarlo en el arreglos
    for(var i=1 ; i<=n1 ; i++){
        if(n1%i===0){//es divisor
            divisores.push(i);
        }
    }
    //selelccionamos una posicion aleatoria de los numeros que son divisores
    let pos = parseInt(Math.random()*(divisores.length));
    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2,
    respuesta_usuario.focus();
}

//funcion para controlar la respuesta correcta
function corregir() {
    //si no hay nada en el input
    if(respuesta_usuario.value == ""){
        return;
    }
    let solucion;
    //
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);
    //crear un elemento i para agregar un icono de correcto o incorrecto
    var i = document.createElement("i");
    //control de que coincida lo que el usuario responde con la solucion
    if(respuesta_usuario.value == solucion){
        i.className = "fa-regular fa-face-grin"
    } else {
        i.className = "fa-regular fa-face-frown"
    }

    //agregarlo al contenedor de correcciones
    msj_correccion.appendChild(i);

    //control del tipo de operacion
    if(operacion_actual == "+"){
        nuevaSuma();
    }else if (operacion_actual == "-"){
        nuevaResta();
    }else if (operacion_actual == "*"){
        nuevoProducto();
    }else if (operacion_actual == "/"){
        nuevaDivision();
    }

    ejerciciosRealizados++;

    if (ejerciciosRealizados === 10) {
        // Si se completan 10 ejercicios, manejar el final de la operación actual
        ejerciciosRealizados = 0; // Reiniciar el contador de ejercicios

        // Revisar la operación actual y llamar a la función correspondiente
        // Manejar el final de la operación y pasar a la siguiente operación
        // Por ejemplo:
        if (operacion_actual === '+') {
            manejarFinalOperacion(puntajeSuma, 'puntajeSuma', btnResta);
        } else if (operacion_actual === '-') {
            manejarFinalOperacion(puntajeResta, 'puntajeResta', btnProducto);
        } else if (operacion_actual === '*') {
            manejarFinalOperacion(puntajeProducto, 'puntajeProducto', btnDivision);
        } else if (operacion_actual === '/') {
            manejarFinalOperacion(puntajeDivision, 'puntajeDivision', mostrarBotonFinalizar);
        }
    }
    
    //limpieza del input
    respuesta_usuario.value = "";

}

//agregar al input el evento onkeydown para detectar el enter y llamar a la funcion corregir()
respuesta_usuario.onkeydown = function(e){
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13){
        corregir();
    }
}

//despues
function activarBoton(idBoton){
    document.getElementById("suma").className = "";
    document.getElementById("resta").className = "";
    document.getElementById("producto").className = "";
    document.getElementById("division").className = "";
    document.getElementById(idBoton).className = "activado";
}


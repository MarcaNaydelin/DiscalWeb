//variables que almacenan los numeros de la suma
var num1, num2;
//guardar resultado
var respuesta;
//carga de opciones
var indiceOpCorrecta;

txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
tx_resultado = document.getElementById("resultado");

function comenzar () {
    //limpiar campos
    tx_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    //generar numeros aleatorios entre 0 y 9
    num1 = Math.round(Math.random() *9);
    num2 = Math.round(Math.random() *9);
    respuesta = num1 + num2;
    //asignar las sumas
    txt_suma.innerHTML = num1 + "+" + num2 + "=";
    
    //generar un numero entre 0 y 2 para colcar la opcion correcta
    indiceOpCorrecta = Math.round(Math.random()*2);
    if(indiceOpCorrecta == 0){//colocar la opcion correcta en 1
        op1.innerHTML = respuesta;
        //valores cercanos a la respuesta correcta
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    }
    if(indiceOpCorrecta == 1){//colocar la opcion correcta en 2
        op2.innerHTML = respuesta;
        //valores cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
    }
    if(indiceOpCorrecta == 2){//colocar la opcion correcta en 3
        op3.innerHTML = respuesta;
        //valores cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 1;
        op2.innerHTML = respuesta - 2;
    }
}

//revisar respuesta elegida 
function controlarRespuesta(opcionElegida){
    //Cargar resouesta correcta en al operacion
    tx_resultado.innerHTML = opcionElegida.innerHTML;
    //verificar si esta bien
    if(respuesta == opcionElegida.innerHTML){
        txt_msj.innerHTML = "EXCELENTE !!!!"
        txt_msj.style.color = "green";
        //espera y vuelve a cargar
        setTimeout(comenzar, 2000);
    }else{
        txt_msj.innerHTML = "INTENTA DE NUEVO !!!!"
        txt_msj.style.color = "red";
        //espera y limpiamos los campos
        setTimeout(limpiar, 2000);
    }
}

function limpiar(){
    tx_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
}
comenzar();
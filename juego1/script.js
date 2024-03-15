//arreglo pra saber cuales divs ya estan ocupados
let arreglo = ["", "", "" ,"" ,"" ,""];

//funcion que evita que se abra como un enlace al soltar un elemento
function allowDrop(ev) {
    ev.preventDefault();
}

//que ocurre cuando se arrastra un elemento
function drag(ev) {
    //metodo para establecer el tipo de dato y e valor del dato arrastrado
    //el dato es texto y el valor es lid del elemento arrastrado:
    //por ejemplo "cuadrado"
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    if (arreglo[parseInt(ev.target.id)] == "") {
        var data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));
    }

    if (arreglo.every(elem => elem !== "")) {
        document.getElementById('resultados').style.display = 'block';

        const elementosCorrectos = arreglo.filter((elem, index) => {
            switch (index) {
                case 0:
                    return elem === 'cuadrado';
                case 1:
                    return elem === 'triangulo';
                case 2:
                    return elem === 'circulo';
                case 3:
                    return elem === 'rectangulo';
                case 4:
                    return elem === 'rombo';
                case 5:
                    return elem === 'ovalo';
                default:
                    return false;
            }
        }).length;

        const elementosIncorrectos = 6 - elementosCorrectos;

        document.getElementById('correctos').textContent = `Elementos correctos: ${elementosCorrectos}`;
        document.getElementById('incorrectos').textContent = `Elementos incorrectos: ${elementosIncorrectos}`;
    }
}


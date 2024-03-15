//guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");
//coordenadas del mouse
let initialX;
let initialY;

//funcion para dibujar
const dibujar = (cursorX, cursorY) => {
    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWidth = 5; //grosor del traso
    context.strokeStyle = "#000"; //color del trazo
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(cursorX, cursorY);
    context.stroke();

    initialX = cursorX;
    initialY = cursorY;
};

const mouseDown = (evt) => {
    initialX = evt.offsetX;
    initialY = evt.offsetY;
    dibujar(initialX, initialY);
    mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
    dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
    mainCanvas.removeEventListener("mousemove", mouseMoving);
};

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);
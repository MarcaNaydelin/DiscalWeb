//progreso barras
const react = document.getElementById("react");
const js = document.getElementById("js");
const html5 = document.getElementById("HTML5");
const css3 = document.getElementById("CSS3");

function CreateBar(input, value, colorBar = 'royalBlue'){
    input.style.background = colorBar;
    let p = 0;
    //animacion
    let time = setInterval(() => {
        p++;
        input.style.width =  `${p}%`;
        if(p === value){
            clearInterval(time);
        }
    },15);
}

//crear progreso bar
CreateBar(react, 75);
CreateBar(js, 80);
CreateBar(html5, 65);
CreateBar(css3, 55);
let array_concursantes = [];

//form
document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-reset").addEventListener("click", reset);
document.querySelector("#borrar-ultimo").addEventListener("click", borrarUltimo);

function agregar() {
    let nombre = document.querySelector('#nombre').value;
    
    //agrego elemento al array
    array_concursantes.push(nombre);
    //console.log(array_concursantes);
    console.log(array_concursantes);
    //vaciar el input
    document.querySelector('#nombre').value = "";
    
    drawRoulette ();
    
}
function reset() {
    array_concursantes.length = 0;
    drawRoulette(); 
}
function borrarUltimo() {
    array_concursantes.pop()
    console.log(array_concursantes);
    drawRoulette();

}

//ruleta
let canvas=document.getElementById("idcanvas");
let context=canvas.getContext("2d");
let center=canvas.width/2;

context.beginPath();
context.moveTo(center,center);
context.arc(center,center,center,0, 2*Math.PI);
context.lineTo(center,center);
context.fillStyle ='#33333333';
context.fill();
context.beginPath();
context.moveTo(center,center);
context.arc(center,center,center-10,0, 2*Math.PI);
context.lineTo(center,center);
context.fillStyle ='#E48400';

context.fill();

function drawRoulette (){
let canvas=document.getElementById("idcanvas");
let context=canvas.getContext("2d");
let center=canvas.width/2;
context.beginPath();
context.moveTo(center,center);
context.arc(center,center,center,0, 2*Math.PI);
context.lineTo(center,center);
context.fillStyle ='#33333333';
context.fill();
context.beginPath();
context.moveTo(center,center);
context.arc(center,center,center-10,0, 2*Math.PI);
context.lineTo(center,center);
context.fillStyle ='#E48400';
context.fill();

for (var i = 0; i < array_concursantes.length; i++) {
    context.beginPath();
    context.moveTo(center,center);
    context.arc(center,center,center-10,i*2*Math.PI/array_concursantes.length, (i+1)*2*Math.PI/array_concursantes.length);
    context.lineTo(center,center);
    context.fillStyle =random_color();
    context.fill();
    context.save();
    context.translate(center, center);
    context.rotate(3*2*Math.PI/(5*array_concursantes.length)+i*2*Math.PI/array_concursantes.length);
    context.translate(-center, -center);
    context.font = "25px Comic Sans MS";
    context.textAlign = "right";
    context.fillStyle = "white";
    context.fillText(array_concursantes[i], canvas.width-30, center);
    context.restore();
}
}

let pos_ini=0;
let clic=0;
let movement;
function sortear(){
    if (clic==0) {
        let canvas=document.getElementById("idcanvas");
        movement=setInterval(function(){
            pos_ini+=10;
            canvas.style.transform='rotate('+pos_ini+'deg)';
        },10);
        clic=1;
        document.getElementById("idestado").innerHTML="Stop";
    }else{
        clearInterval(movement);
        clic=0;
        document.getElementById("idestado").innerHTML="Start";
    }
}
function random_color(){
    let colores = [ "#882D17","#804000","#F6AE2D","#FFB01E","#E48400","#E89700","#E96C11","#A24D03","#8A5728","#341302","#290E04","#000000"];
    let color = colores[Math.floor(Math.random() * colores.length)];
    
    return color;
  };
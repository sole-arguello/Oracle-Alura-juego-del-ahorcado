let lienzo = document.querySelector("#dibujo-ahorcado");
let pincel = lienzo.getContext("2d");
//pincel.fillStyle = "rgba(58, 58, 58, 0.384)";
//pincel.fillRect(0,0,360, 220);

function dibujarBase(){

    pincel.fillStyle = "black";
    pincel.fillRect(20, 260, 180, 20);
}

//------- apartir de aca son los errores -----------------
function dibujarMastil(){

    pincel.fillStyle ="black";
    pincel.fillRect(50,20, 5, 250);//x,y, ancho, largo
}
function dibujarTrasversoMastil(){

    pincel.fillStyle ="black";
    pincel.fillRect(50,20, 100,5);
}
function dibujarSoga(){

    pincel.beginPath();
    pincel.moveTo(150, 50);
    pincel.lineTo(150, 20);
    pincel.stroke();

}
function dibujarCabeza(){
    pincel.beginPath();//inicio camino
    pincel.arc(150, 70, 20, 0, Math.PI*2);//circulo
    pincel.stroke();
}
function dibujarCuerpo(){

    pincel.beginPath();
    pincel.moveTo(150,90);//punto x,y
    pincel.lineTo(150, 140);//punto x , mas largo del cuerpo
    pincel.stroke();

}
function dibujarBrazoIzquierdo(){

    pincel.beginPath();
    pincel.moveTo(150, 100);
    pincel.lineTo(170, 130);//direccion y largo
    pincel.stroke();
}
function dibujarBrazoDerecho(){
    pincel.beginPath();
    pincel.moveTo(150, 100);
    pincel.lineTo(130, 130);
    pincel.stroke();
}
function dibujarPiernaDerecha(){

    pincel.beginPath();
    pincel.moveTo(150, 140);
    pincel.lineTo(170, 170);
    pincel.stroke();
}
function dibujarPiernaIzquierda(){

    pincel.beginPath();
    pincel.moveTo(150, 140);
    pincel.lineTo(130, 170);
    pincel.stroke();

}
//-----------------Limpia el dibujo ---------------------
function limpiarCambas(){
    pincel.clearRect(0,0, 400,800);
}

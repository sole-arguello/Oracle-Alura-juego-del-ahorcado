



let lienzo = document.querySelector("canvas");
let pincel = lienzo.getContext("2d");
pincel.fillStyle = "green";
pincel.fillRect(0,0,400, 300);
    //if(canvas.getContext){
function dibujar(){

    pincel.fillStyle = "black";
    //base
    pincel.fillRect(20, 260, 180, 20);
    pincel.fillRect(50,20, 5, 250);//x,y, ancho, largo

    pincel.fillRect(50,20, 100,5);

    //soga
    pincel.beginPath();
    pincel.moveTo(150, 50);
    pincel.lineTo(150, 20);
    pincel.stroke();
    
        //cabeza
    pincel.beginPath();//inicio camino
    pincel.arc(150, 70, 20, 0, Math.PI*2,true);//circulo
    //pincel.moveTO(110,75);
    //pincel.arc(75,75, 35, 0, Math.PI,false);//risa
    //pincel.moveTO(65,65);
    //pincel.arc(60,65,5,0,Math.PI*2,true);//left 
    //pincel.moveTO(95,65);
    //pincel.arc(90,65,5,0,Math.PI*2,true);// right
    pincel.stroke();

    //cuerpo
    pincel.beginPath();
    pincel.moveTo(150,90);//punto x,y
    pincel.lineTo(150, 140);//punto x , mas largo del cuerpo
    pincel.stroke();


    //brazoizquierdo
    pincel.beginPath();
    pincel.moveTo(150, 100);
    pincel.lineTo(170, 130);//direccion y largo
    pincel.stroke();


    //brazo derecho
    pincel.beginPath();
    pincel.moveTo(150, 100);
    pincel.lineTo(130, 130);
    pincel.stroke();


    //pierna derecha
    pincel.beginPath();
    pincel.moveTo(150, 140);
    pincel.lineTo(170, 170);
    pincel.stroke();

    //pierna izquierda
    pincel.beginPath();
    pincel.moveTo(150, 140);
    pincel.lineTo(130, 170);
    pincel.stroke();
}
    

dibujar();
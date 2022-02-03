// creo el arreglo con las palabras
let palabras = Array("ahorcado", "casa", "palabra", "juego", "murcielago",
                        "paleta", "cuerpo", "pala", "nombre", "cancion", "cielo");

//cadenas vacias
let palabraOculta = "";
let palabraAdivinada = "";
let intentos = 9;// remplaza al dibujo
//----------------------------- INICIO ---------------------------------------------------
//activada por BOTON INICIAR JUEGO, y coloca los guiones
function guionesDePalabra(){
    // elije la palabra
    palabraOculta = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
    console.log(palabraOculta);
    for(let i=0; i < palabraOculta.length; i++){
// Los guiones que van a ser generados segun la palabra seleccionada aleatoria
        palabraAdivinada = palabraAdivinada + "_ ";
    }
    // muestra los guiones
    document.getElementById("frase-Adivinada").innerHTML = palabraAdivinada;
    
    dibujarBase();    
}



function dibujarAhorcado(){
    
    let lienzo = document.querySelector("#dibujo-ahorcado");
    
    if(lienzo.getContext){
    
    lienzo.getContext("2d");
        if(intentos <= 8){
            dibujarMastil();
        }
        if(intentos <= 7){
            dibujarTrasversoMastil();
        }
        if(intentos <= 6){
            dibujarSoga();
        }
        if(intentos <= 5){
            dibujarCabeza();
        }
        if(intentos <= 4){
            dibujarCuerpo();
        }
        if(intentos <= 3){
            dibujarBrazoDerecho();
        }
        if(intentos <= 2){
            dibujarBrazoIzquierdo();
        }
        if(intentos <= 1){
            dibujarPiernaDerecha();
        }
        if(intentos == 0){
            dibujarPiernaIzquierda();
            btnComprobar.disabled = true;
        }
    }
}
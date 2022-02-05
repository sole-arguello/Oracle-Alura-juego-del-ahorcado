// creo el arreglo con las palabras
let palabras = Array("ahorcado", "casa", "palabra", "juego", "murcielago", "mayúsculas",
                        "paleta", "cuerpo", "pala", "nombre", "cancion", "cielo");

//cadenas vacias
let palabraOculta = "";
let palabraAdivinada = "";
let intentos = 9;// remplaza al dibujo
let letrasRepetidas = [];
let letrasErradas = [];

//------------------- Agregar palabras ------------------------
function agregarPalabra(palabras){
    
    //let nuevaPalabra = document.getElementById("input-nueva-palabra").value;
    
    palabras.push(nuevaPalabra);
    console.log(palabras);
}
//----------------------------- INICIO ---------------------------------------------------
//activada por el BOTON INICIAR JUEGO, y coloca los guiones
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

//------------------------------ Validacion del Solo Letras ----------------------------
function soloLetras(e){
    //eventos del teclado, propiedad whitch que detecta las teclas al momento de precionar
    let key = e.keyCode || e.which;
    let tecla = String.fromCharCode(key).toString();//deteccion del teclado
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzüéáíóúÁÉÍÓÚÜ";

    
    let especiales = [8,13];// teclas enter y retroceso
    let teclaEspecial = false;
    //para detectar tecla enter y retroceso
    for(let i in especiales){
        if(key == especiales[i]){
            teclaEspecial = true;//enconto
            break;
        }
    }
    //si edentifica la tecla de retroceso, 
    if(letras.indexOf(tecla) == -1 && !teclaEspecial){
        alert("Igrese solo letras");
        return false;
    }
}

// Verifica y descarta las repatidas y guarda para mostrar las erradas ----------------

function mostrarLetrasErradas(letraIngresada){
    letra = letraIngresada;
    console.log(letra);
    let agrego = false;
    //si no esta incluida la agrego
    if(!letrasErradas.includes(letra)){
        letrasErradas.push(letra);
        //muestro
        errores.innerHTML = "LETRAS ERRADAS: " + letrasErradas;
        agrego = true;
    }else{
        //guardo las repetidas pero no las muestro
        letrasRepetidas.push(letra);
        alert("Ya utilizo la " +  letra);
    }
    return agrego;
}
//--------------- Dibujo del Ahorcado ---------------------------------------------------
function dibujarAhorcado(intentos){
    
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
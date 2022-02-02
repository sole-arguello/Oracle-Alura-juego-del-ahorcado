// creo el arreglo con las palabras
let palabras = Array("ahorcado", "casa", "palabra", "juego", "murcielago",
                        "paleta", "cuerpo", "pala", "nombre", "cancion", "cielo");

//cadenas vacias
let palabraOculta = "";
let palabraAdivinada = "";
let intentos = 4;// remplaza al dibujo


//boton iniciar juego
document.getElementById("iniciar-juego").addEventListener("click", guionesDePalabra);
//boton comprobar
document.getElementById("boton").addEventListener("click", comprobarLetra);



//activada por BOTON INICIAR JUEGO, y coloca los guiones
function guionesDePalabra(){
    // elije la palabra
    palabraOculta = palabras[Math.floor(Math.random() * palabras.length)];
    console.log(palabraOculta);
    for(let i=0; i < palabraOculta.length; i++){
// Los guiones que van a ser generados segun la palabra seleccionada aleatoria
        palabraAdivinada = palabraAdivinada + "_ ";
    }
    // muestra los guiones
    document.getElementById("frase-Adivinada").innerHTML = palabraAdivinada;
    
}

//Validación del texto
function validation(param) {
    let reg = /^[a-zñ]*[a-zñ \s]*[a-zñ]$/g
    return reg.test(param)
}

//-------------------------------------------------------------------------------------
function comprobarLetra(){

    let letraIngresada = document.getElementById("letra").value;
    //btnComprobar.disabled = true;
    console.log(letraIngresada);
    palabraOculta = palabraOculta;

    let adivinada = ""; // cadena vacia, donde se guardara la palabra oculta

    //recorro la palabra
    for(let i=0; i<palabraOculta.length; i++){
        
        // comparo la letra ingresada = palabra oculta
        if(letraIngresada == palabraOculta[i]){
            //si coincide que muestre la letra con espacios
            adivinada = adivinada + letraIngresada + " ";
        }else{
            //sino que muestre el guion bajo
            adivinada = adivinada + palabraAdivinada[i*2] + " ";
        }
    }
    
    console.log(palabraAdivinada);
    console.log("palabra adivinada  " + adivinada);
 //------------- validar los intentos fallidos --------------------------------------------------------
    if(adivinada == palabraAdivinada){
        //la letra no coincide descuenta el intento
        intentos--;//resto
        document.getElementById("intentos").innerHTML = "Quedan: " + intentos + " intentos";//actualizo
    }

    palabraAdivinada = adivinada;
     //muestra la palabra encontrada
    document.getElementById("frase-Adivinada").innerHTML = palabraAdivinada;
//------------------------valido si gano o perdio ---------------------------------------------------------
    if(intentos==0){
        alert("perdiste :( ");//perdio
    }
    if(palabraAdivinada.search("_") == -1){//search retorna un -1, valido si es la letra encontrada o guion
        
        alert("Ganaste :D");
    }
    
    //limpia el input
    document.getElementById("letra").value = "";
    //enfoca el cursor en el input
    document.getElementById("letra").focus();
    dibujar();
    /*//Evento input
    letraIngresada.addEventListener("input", (e) => {
        validation(letraIngresada.value) == true ? btnComprobar.disabled = false : btnComprobar.disabled = true;

    });*/
};


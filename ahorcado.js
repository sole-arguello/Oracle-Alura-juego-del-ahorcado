//boton iniciar juego
document.getElementById("iniciar-juego").addEventListener("click",() =>{
    
    window.addEventListener("keydown", capturaTeclado);
    palabraAdivinada ="";
    limpiarCambas();
    guionesDePalabra();
//------reinicio todas las variables
    errores.innerHTML = "";//resetea
    letrasErradas = [];
    letrasRepetidas = [];
    intentos = 9;
    document.getElementById("intentos").innerHTML = "LE QUEDAN: " + intentos + " INTENTOS";//actualizo
    // en html es true, cambio para que no se vea letras erradas
    titulo2.hidden =false;
    errores.hidden = false;
    tituloEquivocadas.hidden = false;
    document.getElementById("mge-ganar").innerHTML = "";
});

//boton agregar palabras
let btnAgregarPalabras = document.getElementById("nueva-palabra");
btnAgregarPalabras.addEventListener("click", ()=>{

    if(nuevaPalabra.value == ""){
        alert("No ingreso palabra");
    
    }else{
        agregarPalabra(palabras);
        
    }
    document.getElementById("input-nueva-palabra").value = "";//limpia
});

function capturaTeclado(e){

    let tecla = e.keyCode || e.which;
    if(tecla > 64 && tecla < 91){
        letra = e.key.toUpperCase();
        comprobarLetra(letra);
    }
}

//--------------------- manejo del juego ---------------------------------

//------------------- Funcion de comprobar letras --------------------------
let tituloEquivocadas = document.getElementById("tituloEquivocadas");
let errores = document.getElementById("letras-erradas")
let titulo2 = document.getElementById("titulo2");
let nuevaPalabra = document.getElementById("input-nueva-palabra");

function comprobarLetra(letraIngresada){
    
    console.log(letraIngresada);
    palabraOculta = palabraOculta.toUpperCase();
    
    let letraAdivinada = ""; // cadena vacia, donde se guardara la palabra oculta
    let fallidos = true;
    //recorro la palabra
    for(let i=0; i<palabraOculta.length; i++){
        
        // comparo la letra ingresada = palabra oculta
        if(letraIngresada == palabraOculta[i]){
            //si coincide que muestre la letra con espacios
            letraAdivinada = letraAdivinada + letraIngresada + " ";
            fallidos = false;
        }
        else{
             //sino que muestre el guion bajo
             letraAdivinada = letraAdivinada + palabraAdivinada[i*2] + " ";
        }
              
    }
    //---------- valida intentos y muetra los fallidos ---------- 
    // si fallo!
    if(fallidos){
        let resultadoErrores = mostrarLetrasErradas(letraIngresada);
        if(resultadoErrores){
            intentos--;//resto
            dibujarAhorcado(intentos);
           document.getElementById("intentos").innerHTML = "LE QUEDAN " + intentos + " INTENTOS";//actualizo
           document.getElementById("tituloEquivocadas").innerHTML = "PALABRAS EQUIVOCADAS";
        }
    }
    console.log(palabraAdivinada);
    console.log("palabra adivinada  " + letraAdivinada);
    
    palabraAdivinada = letraAdivinada;
     //muestra la palabra encontrada
    document.getElementById("frase-Adivinada").innerHTML = palabraAdivinada;
//------------------------ valido si gano o perdio ---------------------------------------------------------
    if(intentos==0){
       
       swal ({title: "Lo siento PERDISTE",
              text: "La palabra era: " + palabraOculta,
              });
        window.removeEventListener("keydown", capturaTeclado);
    }
    
    //search retorna un -1, valido si es la letra encontrada o guion
    if(palabraAdivinada.search("_") == -1){
       
        
        //document.getElementById("ganador").Style.display = "flex";
        document.getElementById("mge-ganar").innerHTML = "Felicitaciones 🥳 has GANADO!!!";
        window.removeEventListener("keydown", capturaTeclado);
    }
}



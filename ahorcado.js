//boton iniciar juego
document.getElementById("iniciar-juego").addEventListener("click",() =>{

    palabraAdivinada ="";
    limpiarCambas();
    guionesDePalabra();
input.hidden = false;
btnComprobar.hidden = false;  
btnComprobar.disabled = false;
});
//boton comprobar
let btnComprobar = document.getElementById("boton");
btnComprobar.addEventListener("click", comprobarLetra);

let input = document.getElementById("letra");

//-------------------------------------------------------------------------------------
function comprobarLetra(){

    let letraIngresada = input.value.toUpperCase();
    console.log(letraIngresada);
    palabraOculta = palabraOculta.toUpperCase();

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
//------------------------ valido si gano o perdio ---------------------------------------------------------
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

    dibujarAhorcado();
}


